# Edina Doors

Sunshine Coast door supply and installation website for carpenter Michael Dunn.
Built with Eleventy and the Chobble Template. Content from the existing
Squarespace site is retained in `src/pages/`, with product photography under
`src/images/doors/` and `src/images/hardware/`.

## Run locally

Use the Node version in the [Site Builder Reference](docs/developer-reference.md).

```sh
npm install
npm run serve
npm run build
npm run test
```

`npm run build` writes `_site/` and checks internal links. Search is retained at
`/search/` and built with Pagefind. The theme is in `src/css/theme.scss`; page
content uses validated frontmatter blocks. See the
[block reference](skills/chobble-template-site-builder/references/blocks.md),
[layout guidance](skills/chobble-template-site-builder/references/layouts.md),
`/blocks/` development gallery, and [engineering policy](CLAUDE.md).

## Editorial preview and provenance

The redesign follows the Edina audit and podcast discussion in the neighbouring
`jobs` repository. That discussion is editorial guidance, not an interview or
verified new testimony from Michael.

- Existing business biography, product ranges, installation process and service
  exclusions come from the original site.
- `/projects/` contains clearly labelled **sample briefs, not completed jobs**.
- `/service-areas/`, `/credentials/` and `/reviews/` identify information needing
  confirmation. These draft pages and sample project pages are `no_index`.
- Never publish invented licence/ABN numbers, prices, lead times, service-area
  coverage, customer quotes or star ratings. Replace draft briefs with real
  customer-approved photographs and job details before making them indexable.
- `src/images/people/` contains a fictional generated adult carpenter and family.
  They are **not Michael or his family**. Visible captions and
  `/image-transparency/` disclose this. Replace with consented real photographs.
- `src/images/editorial/` contains AI-generated material studies, made using
  existing pull-handle, lever and hinge photographs as visual references.
  They are atmospheric artwork, not accurate catalogue or installation evidence.
- The older coastal-home render is also illustrative. Original supplier
  catalogue photographs remain separate from generated editorial imagery.

The visual layer uses native cross-document view transitions with reduced-motion
support, translucent navigation, and decorative SVG architectural linework.
No JavaScript transition framework is required.

## Before public launch

Confirm business/legal identity, advertised licence details, phone number, actual
coverage and review sources with Michael. Collect real portraits, family-photo
consent and project evidence. Check all draft disclosures before removing them.
Useful source-backed advice can be published without pretending draft projects
or unverified credentials are real.

The contact form currently has no configured destination. Email links work; the
form intentionally shows an unconfigured notice instead of silently discarding
submissions. Set `formspark_id` or `contact_form_target` in
`src/_data/config.json`, or supply the `FORMSPARK_ID` deployment secret, then test
an actual submission. The privacy page must match the chosen external provider.

## Deployment

`.github/workflows/build-and-deploy.yaml` calls the shared
[`chobble-client` workflow](https://github.com/chobbledotcom/chobble-client/blob/main/.github/workflows/shared-build-and-deploy.yml).
Pushes to `main` deploy to Bunny Sites; pull requests build without deploying.
The existing storage zone is imported as a Bunny Site if necessary.

Required repository secrets: `BUNNY_ACCESS_KEY` and
`BUNNY_STORAGE_ZONE_NAME` (`edina-doors`). The preview is
<https://edina-doors.b-cdn.net>; the site identity retains
<https://www.edinadoors.com.au> as its canonical production URL.
Optional form and notification secrets are documented in the workflow.

Site identity lives in `src/_data/site.json`, behaviour in
`src/_data/config.json`, and source schemas in `src/_lib/config/`.
Do not edit generated CMS/reference files by hand. Run
`npm run generate-references` when their source inputs change.

## License

[MIT](LICENSE).
