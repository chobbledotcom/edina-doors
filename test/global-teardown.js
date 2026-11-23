import fs from "node:fs";
import path from "node:path";

/**
 * Give each Vitest process its own fixture root. Unit and integration runs
 * execute concurrently, so neither run may remove the other's active sites.
 */
export const setup = (project) => {
  const parent = path.join(import.meta.dirname, ".test-sites");
  fs.mkdirSync(parent, { recursive: true });
  const directory = fs.mkdtempSync(path.join(parent, "run-"));
  project.provide("testSitesDir", directory);

  return () => fs.rmSync(directory, { recursive: true, force: true });
};
