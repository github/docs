# Products

Utilities that read product metadata from `content/index.md`, build the product map used for navigation and context, and help group products for the home page. This README covers purpose, contracts, usage, workflows, testing, and ownership for the `src/products` subject.

## Purpose & scope
* Generate a typed `productMap` keyed by product ID for routing, context middleware, and robots blocking.
* Derive product group data for the homepage hero/cards, with localization support.
* Provide stable product name mappings (e.g., Enterprise Server releases) for rendering and telemetry.
* Excludes: authoring guidance for product content (see `content/`), TOC authoring, and versioning docs (see `src/versions`).

## Architecture & key assets
* `lib/all-products.ts`: Reads `content/index.md` frontmatter, builds `productMap` (id, name, href, dir, toc, wip, hidden, versions, external) and `productIds`; mutates later via middleware to add `nameRendered`.
* `lib/get-product-groups.ts`: Builds homepage product group structures; resolves localized names via translated `content/index.md` when present.
* `lib/product-names.ts`: Maps product codes (dotcom, GHES versions) to display names.
* `lib/old-developer-products.json`: Legacy list used for migration/compat checks.
* Tests under `tests/` validate schemas, product map shape, group helpers, and name mappings.

## Data contracts
* Source: `content/index.md` frontmatter.
  * `children`: array of product IDs (directory names under `content/`).
  * `childGroups`: array of groups `{ name, icon?, octicon?, children[] }` for homepage cards; children entries can be product IDs or deeper paths.
  * `externalProducts` (optional): map of product IDs to product objects matching `Product` shape; used to surface external docs.
* Product object shape (see `Product` in `lib/all-products.ts`):
  * `id`, `name` (title or shortTitle), `href` (first applicable version), `dir`, `toc`, `wip`, `hidden`, `versions` (computed), optional `external`, optional `nameRendered` (added by middleware).
* Localization: For product groups, localized `content/index.md` frontmatter (same keys) is read if available; structure is always taken from English, names can be swapped via `octicon` matching.

## Usage
* Server context middleware loads `productMap` into `req.context` for routing, version checks, and rendering product names.
* `get-product-groups` is used to render homepage product cards with localized names when available.
* `productMap` drives robots blocking (wip/hidden), nav generation (`get-toc-items`), and page validation (parent product assertions).

## Workflows
* Update `content/index.md` to add or reorder products and product groups; ensure new product directories have `index.md` with frontmatter (`title`/`shortTitle`, `versions`, optional `wip`/`hidden`).
* To add an external product, define it under `externalProducts` in `content/index.md`. External products should include as many `Product` fields as applicable (such as `id`, `name`, `href`), but some fields (like `versions`) may be omitted.
* For localized group names, add translated `content/index.md` with matching `childGroups` and `octicon` keys.

## Testing
* Full subject tests: `npm test -- src/products/tests`
* Targeted:
  * `products.ts` validates `productMap` schema and presence of expected product IDs.
  * `get-product-groups.ts` covers group helper mapping and localization.
  * `product-names.ts` checks display name mappings.

## Ownership & current state
* Owners: Docs Engineering. Content changes (titles, grouping, product lists) coordinated with docs-content.
* State: KTLO; update when products are added/retired or homepage groups change.