# Scripts

## Scripts to rule them all

This directory follows the [Scripts to Rule Them All](https://githubengineering.com/scripts-to-rule-them-all/) pattern:

### [`bootstrap`](bootstrap)

Installs/updates all dependencies necessary for the docs environment. Equivalent of `npm install`.

---


### [`server`](server)

Starts the local development server. Equivalent of `npm start`.

To keep things snappy, only English and Japanese are enabled. To run the server with all languages enabled, run script/server-all-languages

---


### [`test`](test)

Runs tests. Equivalent of `npm test`.

---



## Additional scripts

### [`anonymize-branch.js`](anonymize-branch.js)

Flatten all the commits in the current branch into a single anonymized @Octomerger commit

Usage: script/anonymize-branch.js <new-commit-message> [base-branch] Example: script/anonymize-branch.js "nothing to see here" If the optional [base-branch] argument is omitted, it will default to `main`

---


### [`bookmarklets/add-pr-links.js`](bookmarklets/add-pr-links.js)



---


### [`bookmarklets/open-in-vscode.js`](bookmarklets/open-in-vscode.js)



---


### [`bookmarklets/pr-link-source.js`](bookmarklets/pr-link-source.js)



---


### [`bookmarklets/view-in-development.js`](bookmarklets/view-in-development.js)



---


### [`bookmarklets/view-in-production.js`](bookmarklets/view-in-production.js)



---


### [`check-for-node`](check-for-node)

This script is run automatically when you run the server locally. It checks whether Node.js is installed.

---


### [`check-github-github-links.js`](check-github-github-links.js)

Run this script to get all broken docs.github.com links in github/github

---


### [`content-migrations/add-early-access-tocs.js`](content-migrations/add-early-access-tocs.js)



---


### [`content-migrations/add-ghec-to-schema.js`](content-migrations/add-ghec-to-schema.js)

A one-time use script to add GHEC to the REST schema on github/github.

---


### [`content-migrations/add_mini_toc_frontmatter.js`](content-migrations/add_mini_toc_frontmatter.js)

Run this one time script to add max mini toc to rest reference documentation

---


### [`content-migrations/comment-on-open-prs.js`](content-migrations/comment-on-open-prs.js)

This script finds all open PRs from active branches that touch content files, and adds a comment with steps to run some commands. The idea is to help writers and other Hubbers update their open branches and mitigate conflicts with the main branch.

---


### [`content-migrations/convert-if-to-ifversion.js`](content-migrations/convert-if-to-ifversion.js)

Run this one-time script to convert `if <feature name>` Liquid tags to `ifversion <feature name>`.

---


### [`content-migrations/create-csv-of-short-titles.js`](content-migrations/create-csv-of-short-titles.js)



---


### [`content-migrations/move-unique-image-assets.js`](content-migrations/move-unique-image-assets.js)



---


### [`content-migrations/remove-html-comments-from-index-files.js`](content-migrations/remove-html-comments-from-index-files.js)



---


### [`content-migrations/topics-upcase.js`](content-migrations/topics-upcase.js)



---


### [`content-migrations/update-developer-site-links.js`](content-migrations/update-developer-site-links.js)



---


### [`content-migrations/update-headers.js`](content-migrations/update-headers.js)

Run this one time script to update headers for accessibility Changing H3 to H2, H4 to H3, H5 to H4, and H6 to H5

---


### [`content-migrations/update-versioning-in-files.js`](content-migrations/update-versioning-in-files.js)



---


### [`content-migrations/use-short-versions.js`](content-migrations/use-short-versions.js)

Run this script to convert long form Liquid conditionals (e.g., {% if currentVersion == "free-pro-team" %}) to the new custom tag (e.g., {% ifversion fpt %}) and also use the short names in versions frontmatter.

---


### [`copy-to-test-repo.sh`](copy-to-test-repo.sh)



---


### [`create-glossary-from-spreadsheet.js`](create-glossary-from-spreadsheet.js)

This script turns a Google Sheets CSV spreadsheet into a YAML file.

---


### [`deployment/purge-edge-cache.js`](deployment/purge-edge-cache.js)



---


### [`dev-toc/generate.js`](dev-toc/generate.js)



---


### [`dev-toc/index.js`](dev-toc/index.js)



---


### [`dev-toc/layout.html`](dev-toc/layout.html)



---


### [`domwaiter.js`](domwaiter.js)



---


### [`early-access/clone-locally`](early-access/clone-locally)

This script is run on a writer's machine to begin developing Early Access content locally.

---


### [`early-access/create-branch`](early-access/create-branch)

This script is run on a writer's machine to create an Early Access branch that matches the current docs-internal branch.

---


### [`early-access/symlink-from-local-repo.js`](early-access/symlink-from-local-repo.js)

This script is run on a writer's machine while developing Early Access content locally. You must pass the script the location of your local copy of the `github/docs-early-access` git repo as the first argument.

---


### [`early-access/update-data-and-image-paths.js`](early-access/update-data-and-image-paths.js)

This script is run on a writer's machine while developing Early Access content locally. It updates the data and image paths to either include `early-access` or remove it.

---


### [`enterprise-server-deprecations/archive-version.js`](enterprise-server-deprecations/archive-version.js)

Run this script during the Enterprise deprecation process to download static copies of all pages for the oldest supported Enterprise version. See the Enterprise deprecation issue template for instructions.

NOTE: If you get this error:

   Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'website-scraper' ...

it's because you haven't installed all the *optional* dependencies. To do that, run:

   npm install --include=optional


---


### [`enterprise-server-deprecations/remove-static-files.js`](enterprise-server-deprecations/remove-static-files.js)

This script removes the static GraphQL, REST, and webhook files for any deprecated GHES versions.

---


### [`enterprise-server-deprecations/remove-version-markup.js`](enterprise-server-deprecations/remove-version-markup.js)

Run this script after an Enterprise deprecation to remove Liquid statements and frontmatter that contain the deprecated Enterprise version. See the Enterprise deprecation issue template for instructions.

---


### [`enterprise-server-releases/add-ghec-to-fpt.js`](enterprise-server-releases/add-ghec-to-fpt.js)

Run this script to add versions frontmatter and Liquid conditionals for GitHub Enterprise Cloud, based on anything currently versioned for the specified release of free-pro-team.

---


### [`enterprise-server-releases/create-graphql-files.js`](enterprise-server-releases/create-graphql-files.js)

This script creates the static GraphQL files for a new version.

---


### [`enterprise-server-releases/create-webhook-files.js`](enterprise-server-releases/create-webhook-files.js)

This script creates new static webhook payload files for a new version.

---


### [`enterprise-server-releases/release-banner.js`](enterprise-server-releases/release-banner.js)

This script creates or removes a release candidate banner for a specified version.

---


### [`find-orphaned-assets.js`](find-orphaned-assets.js)

Print a list of all the asset files that can't be found mentioned in any of the source files (content & code).

---


### [`get-new-dotcom-path.js`](get-new-dotcom-path.js)

Pass this script any old dotcom path (e.g., `articles/foo` or `foo.md`) and it will output the new path in the content/github directory.

---


### [`graphql/build-changelog.js`](graphql/build-changelog.js)



---


### [`graphql/update-files.js`](graphql/update-files.js)



---


### [`graphql/utils/data-filenames.json`](graphql/utils/data-filenames.json)



---


### [`graphql/utils/process-previews.js`](graphql/utils/process-previews.js)



---


### [`graphql/utils/process-schemas.js`](graphql/utils/process-schemas.js)



---


### [`graphql/utils/process-upcoming-changes.js`](graphql/utils/process-upcoming-changes.js)



---


### [`graphql/utils/schema-helpers.js`](graphql/utils/schema-helpers.js)



---


### [`helpers/action-injections.js`](helpers/action-injections.js)



---


### [`helpers/add-redirect-to-frontmatter.js`](helpers/add-redirect-to-frontmatter.js)



---


### [`helpers/get-liquid-conditionals.js`](helpers/get-liquid-conditionals.js)



---


### [`helpers/get-version-blocks.js`](helpers/get-version-blocks.js)



---


### [`helpers/git-utils.js`](helpers/git-utils.js)



---


### [`helpers/github.js`](helpers/github.js)



---


### [`helpers/remove-deprecated-frontmatter.js`](helpers/remove-deprecated-frontmatter.js)



---


### [`helpers/remove-liquid-statements.js`](helpers/remove-liquid-statements.js)



---


### [`helpers/retry-on-error-test.js`](helpers/retry-on-error-test.js)

Return a function that you can use to run any code within and if it throws you get a chance to say whether to sleep + retry. Example:

async function mainFunction() {     if (Math.random() > 0.9) throw new Error('too large')     return 'OK'   }

const errorTest = (err) => err instanceof Error && err.message.includes('too large')   const config = {  // all optional     attempts: 3,     sleepTime: 800,     onError: (err, attempts) => console.warn(`Failed ${attempts} attempts`)   }   const ok = await retry(errorTest, mainFunction, config)

---


### [`helpers/walk-files.js`](helpers/walk-files.js)

A helper that returns an array of files for a given path and file extension.

---


### [`i18n/test-html-pages.js`](i18n/test-html-pages.js)



---


### [`kill-server-for-jest.js`](kill-server-for-jest.js)



---


### [`list-image-sizes.js`](list-image-sizes.js)

This script lists all local image files, sorted by their dimensions.

NOTE: If you get this error:

   Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'image-size' ...

it's because you haven't installed all the *optional* dependencies. To do that, run:

   npm install --include=optional

---


### [`move-category-to-product.js`](move-category-to-product.js)

Move the files from a category directory to a top-level product and add redirects.

---


### [`move-content.js`](move-content.js)

Helps you move (a.k.a. rename) a file or a folder and does what's needed with frontmatter redirect_from.

---


### [`pages-with-liquid-titles.js`](pages-with-liquid-titles.js)

This is a temporary script to visualize which pages have liquid (and conditionals) in their `title` frontmatter

---


### [`prevent-pushes-to-main.js`](prevent-pushes-to-main.js)

This script is intended to be used as a git "prepush" hook. If the current branch is main, it will exit unsuccessfully and prevent the push.

---


### [`purge-fastly`](purge-fastly)

Run this script to manually purge the Fastly cache. Note this script requires a `FASTLY_SERVICE_ID` and `FASTLY_TOKEN` in your `.env` file.

---


### [`purge-fastly-by-url.js`](purge-fastly-by-url.js)

Run this script to manually purge the Fastly cache for all language variants of a single URL or for a batch of URLs in a file. This script does not require authentication.

---


### [`reconcile-category-dirs-with-ids.js`](reconcile-category-dirs-with-ids.js)

An automated test checks for discrepancies between category directory names and slugified category titles as IDs.

If the test fails, a human needs to run this script to update the directory names and add appropriate redirects.

**This script is not currently supported on Windows.**

---


### [`reconcile-filenames-with-ids.js`](reconcile-filenames-with-ids.js)

An automated test checks for discrepancies between filenames and [autogenerated heading IDs](https://www.npmjs.com/package/remark-autolink-headings). If the test fails, a human needs to run this script to update the filenames.

**This script is not currently supported on Windows.**

---


### [`rendered-content-link-checker.js`](rendered-content-link-checker.js)

This script goes through all content and renders their HTML and from there can analyze for various flaws (e.g. broken links)

---


### [`rest/openapi-check.js`](rest/openapi-check.js)

Run this script to check if OpenAPI files can be decorated successfully.

---


### [`rest/test-open-api-schema.js`](rest/test-open-api-schema.js)

Run this script to check if OpenAPI operations match versions in content/rest operations

---


### [`rest/update-files.js`](rest/update-files.js)

Run this script to pull openAPI files from github/github, dereference them, and decorate them.

---


### [`rest/utils/create-rest-examples.js`](rest/utils/create-rest-examples.js)



---


### [`rest/utils/decorator.js`](rest/utils/decorator.js)



---


### [`rest/utils/get-body-params.js`](rest/utils/get-body-params.js)



---


### [`rest/utils/get-operations.js`](rest/utils/get-operations.js)



---


### [`rest/utils/operation-schema.js`](rest/utils/operation-schema.js)



---


### [`rest/utils/operation.js`](rest/utils/operation.js)



---


### [`rest/utils/webhook-schema.js`](rest/utils/webhook-schema.js)



---


### [`rest/utils/webhook.js`](rest/utils/webhook.js)



---


### [`search/analyze-text.js`](search/analyze-text.js)

See how a piece of text gets turned into tokens by the different analyzers. Requires that the index exists in Elasticsearch.

Example:

   ./src/scripts/search/analyze-text.js my words to tokenize

---


### [`search/build-records.js`](search/build-records.js)



---


### [`search/find-indexable-pages.js`](search/find-indexable-pages.js)



---


### [`search/index-elasticsearch.js`](search/index-elasticsearch.js)

Creates Elasticsearch index, populates from records, moves the index alias, deletes old indexes.

---


### [`search/parse-page-sections-into-records.js`](search/parse-page-sections-into-records.js)



---


### [`search/popular-pages.js`](search/popular-pages.js)



---


### [`search/search-index-records.js`](search/search-index-records.js)


---


### [`search/sync-search-indices.js`](search/sync-search-indices.js)

This script is run automatically via GitHub Actions on every push to `main` to generate searchable data. It can also be run manually. For more info see [contributing/search.md](contributing/search.md)

---


### [`search/sync.js`](search/sync.js)



---


### [`search/validate-records.js`](search/validate-records.js)



---


### [`server-all-languages`](server-all-languages)

Starts the local development server with all of the available languages enabled.

---


### [`server-for-jest.js`](server-for-jest.js)



---


### [`standardize-frontmatter-order.js`](standardize-frontmatter-order.js)

Run this script to standardize frontmatter fields in all content files, per the order: - title - intro - product callout - productVersion - map topic status - hidden status - layout - redirect

---


### [`start-server-for-jest.js`](start-server-for-jest.js)



---


### [`todo`](todo)

List all the TODOs in our JavaScript files and stylesheets.

---


### [`toggle-ghae-feature-flags.js`](toggle-ghae-feature-flags.js)

Find and replace lightweight feature flags for GitHub AE content.

---


### [`update-enterprise-dates.js`](update-enterprise-dates.js)

This script fetches data from https://github.com/github/enterprise-releases/blob/master/releases.json and updates `lib/enterprise-dates.json`, which the site uses for various functionality.

---


### [`update-internal-links.js`](update-internal-links.js)

Run this script to find internal links in all content and data Markdown files, check if either the title or link (or both) are outdated, and automatically update them if so.

Exceptions: * Links with fragments (e.g., [Bar](/foo#bar)) will get their root links updated if necessary, but the fragment and title will be unchanged (e.g., [Bar](/noo#bar)). * Links with hardcoded versions (e.g., [Foo](/enterprise-server/baz)) will get their root links updated if necessary, but the hardcoded versions will be preserved (e.g., [Foo](/enterprise-server/qux)). * Links with Liquid in the titles will have their root links updated if necessary, but the titles will be preserved.

---


### [`update-readme.js`](update-readme.js)

This script crawls the script directory, hooks on special comment markers in each script, and adds the comment to `script/README.md`.

---


