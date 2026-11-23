import fs from "node:fs";
import path from "node:path";
import { expect, test, vi } from "vitest";
import { setup } from "#test/global-teardown.js";
import { bracket } from "#test/test-utils.js";

const withRun = bracket(
  () => {
    const provide = vi.fn();
    const cleanup = setup({ provide });
    return { directory: provide.mock.calls[0][1], cleanup };
  },
  (run) => run.cleanup(),
);

test("tearing down one Vitest run preserves another run’s fixture files", () => {
  withRun(null, (first) => {
    withRun(null, (second) => {
      const activeFile = path.join(second.directory, "active-site.txt");
      fs.writeFileSync(activeFile, "active fixture");

      first.cleanup();

      expect(fs.existsSync(first.directory)).toBe(false);
      expect(fs.readFileSync(activeFile, "utf8")).toBe("active fixture");
    });
  });
});
