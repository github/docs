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


### [`backfill-missing-localizations.js`](backfill-missing-localizations.js)

This script copies any English files that are missing from the translations directory into the translations directory. We only need to run this if problems occur with Crowdin's automatic sync.

---


### [`check-english-links.js`](check-english-links.js)

This script runs once per day via a scheduled GitHub Action to check all links in English content, not including deprecated Enterprise Server content. It opens an issue if it finds broken links. To exclude a link path, add it to `lib/excluded-links.js`.

---


### [`check-for-node`](check-for-node)

This script is run automatically when you run the server locally. It checks whether Node.js is installed.

---


### [`check-internal-links.js`](check-internal-links.js)

This script runs in CI via GitHub Action to check all *internal* links in English content, not including deprecated Enterprise Server content. This is different from script/check-english-links.js, which checks *all* links in the site, both internal and external, and is much slower.

---


### [`content-migrations/extended-markdown-tags.js`](content-migrations/extended-markdown-tags.js)



---


### [`content-migrations/octicon-tag.js`](content-migrations/octicon-tag.js)



---


### [`content-migrations/remove-html-comments-from-index-files.js`](content-migrations/remove-html-comments-from-index-files.js)



---


### [`content-migrations/site-data-tag.js`](content-migrations/site-data-tag.js)



---


### [`content-migrations/update-developer-site-links.js`](content-migrations/update-developer-site-links.js)



---


### [`create-glossary-from-spreadsheet.js`](create-glossary-from-spreadsheet.js)

This script turns a Google Sheets CSV spreadsheet into a YAML file.

---


### [`early-access/clone-for-build.js`](early-access/clone-for-build.js)

This script is run as a postbuild script during staging and deployments on Heroku. It clones a branch in the early-access repo that matches the current branch in the docs repo; if one can't be found, it clones the `main` branch.

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

---


### [`enterprise-server-deprecations/remove-static-files.js`](enterprise-server-deprecations/remove-static-files.js)

This script removes the static GraphQL, REST, and webhook files for any deprecated GHES versions.

---


### [`enterprise-server-deprecations/remove-version-markup.js`](enterprise-server-deprecations/remove-version-markup.js)

Run this script after an Enterprise deprecation to remove Liquid statements and frontmatter that contain the deprecated Enterprise version. See the Enterprise deprecation issue template for instructions.

---


### [`enterprise-server-releases/create-graphql-files.js`](enterprise-server-releases/create-graphql-files.js)

This script creates the static GraphQL files for a new version.

---


### [`enterprise-server-releases/create-rest-files.js`](enterprise-server-releases/create-rest-files.js)

This script creates new static openAPI files for a new version and modifies the info.version.

---


### [`enterprise-server-releases/create-webhook-files.js`](enterprise-server-releases/create-webhook-files.js)

This script creates new static webhook payload files for a new version.

---


### [`enterprise-server-releases/ghes-to-ghae-versioning.js`](enterprise-server-releases/ghes-to-ghae-versioning.js)

Run this script to add versions frontmatter and Liquid conditionals for GitHub AE, based on anything currently versioned for the provided release of Enterprise Server. This script should be run as part of the Enterprise Server release process.

---


### [`enterprise-server-releases/release-banner.js`](enterprise-server-releases/release-banner.js)

This script creates or removes a release candidate banner for a specified version.

---


### [`get-new-dotcom-path.js`](get-new-dotcom-path.js)

Pass this script any old dotcom path (e.g., `articles/foo` or `foo.md`) and it will output the new path in the content/github directory.

---


### [`get-new-version-path.js`](get-new-version-path.js)

Helper script that returns a "new" versioned path given an "old" versioned path.

Examples:

Given: /github/getting-started-with-github/using-github Returns: /free-pro-team@latest/github/getting-started-with-github/using-github

Given: /enterprise/admin/installation/upgrading-github-enterprise Returns: /enterprise-server@2.22/admin/installation/upgrading-github-enterprise

---


### [`graphql/build-changelog.js`](graphql/build-changelog.js)



---


### [`graphql/update-files.js`](graphql/update-files.js)



---


### [`graphql/utils/data-filenames.json`](graphql/utils/data-filenames.json)



---


### [`graphql/utils/prerender-objects.js`](graphql/utils/prerender-objects.js)



---


### [`graphql/utils/process-previews.js`](graphql/utils/process-previews.js)



---


### [`graphql/utils/process-schemas.js`](graphql/utils/process-schemas.js)



---


### [`graphql/utils/process-upcoming-changes.js`](graphql/utils/process-upcoming-changes.js)


---


### [`graphql/utils/schema-helpers.js`](graphql/utils/schema-helpers.js)



---


### [`list-image-sizes.js`](list-image-sizes.js)

This script lists all local image files, sorted by their dimensions.

---


### [`move-category-to-product.js`](move-category-to-product.js)

Pass this script three arguments: 1. current category path (e.g., `github/automating-your-workflows-with-github-actions`) 2. new product ID (e.g., `actions`) 3. new product name in quotes (e.g., `"GitHub Actions"`) and it does everything that needs to be done to make the category into a new product.

---


### [`move-reusables-to-markdown.js`](move-reusables-to-markdown.js)

This script moves reusables out of YAML files into individual Markdown files.

---


### [`pages-with-liquid-titles.js`](pages-with-liquid-titles.js)

This is a temporary script to visualize which pages have liquid (and conditionals) in their `title` frontmatter

---


### [`ping-staging-apps.js`](ping-staging-apps.js)

This script finds all Heroku staging apps and pings them to make sure they're always "warmed" and responsive to requests.

---


### [`prevent-pushes-to-main.js`](prevent-pushes-to-main.js)

This script is intended to be used as a git "prepush" hook. If the current branch is main, it will exit unsuccessfully and prevent the push.

---


### [`prevent-translation-commits.js`](prevent-translation-commits.js)

This script is run as a git precommit hook (installed by husky after npm install). It detects changes to files the in the translations folder and prevents the commit if any changes exist.

---


### [`purge-fastly`](purge-fastly)

Run this script to manually purge the Fastly cache. Note this script requires a `FASTLY_SERVICE_ID` and `FASTLY_TOKEN` in your `.env` file.

---


### [`purge-fastly-by-url.js`](purge-fastly-by-url.js)

Run this script to manually purge the Fastly cache for all language variants of a single URL or for a batch of URLs in a file. This script does not require authentication.

---


### [`purge-redis-pages.js`](purge-redis-pages.js)

Run this script to manually purge the Redis rendered page cache. This will typically only be run by Heroku during the deployment process, as triggered via our Procfile's "release" phase configuration.

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


### [`remove-extraneous-translation-files.js`](remove-extraneous-translation-files.js)

An [automated test](/tests/extraneous-translation-files.js) checks for files in the `translations/` directory that do not have an equivalent English file in the `content/` directory, and fails if it finds extraneous files. When the test fails, a human needs to run this script to remove the files.

---


### [`remove-stale-staging-apps.js`](remove-stale-staging-apps.js)

This script removes all stale Heroku staging apps that outlasted the closure of their corresponding pull requests, or correspond to spammy pull requests.

---


### [`remove-unused-assets.js`](remove-unused-assets.js)

Run this script to remove reusables and image files that exist in the repo but are not used in content files. It also displays a list of unused variables. Set the `--dry-run` to flag to print results without deleting any files. For images you don't want to delete, add them to `ignoreList` in `lib/find-unused-assets.js`

---


### [`reset-translated-file.js`](reset-translated-file.js)

This is a convenience script for replacing the contents of translated files with the English content from their corresponding source file.

It's intended to be a workaround to temporarily bypass Crowdin parser bugs while we wait for translators to fix them.

Usage: script/reset-translated-file.js <filename>

Examples:

reset a single translated file using a relative path: $ script/reset-translated-file.js translations/es-XL/content/actions/index.md

reset a single translated file using a full path: $ script/reset-translated-file.js /Users/z/git/github/docs-internal/translations/es-XL/content/actions/index.md

reset all language variants of a single English file (using a relative path): $ script/reset-translated-file.js content/actions/index.md $ script/reset-translated-file.js data/ui.yml

reset all language variants of a single English file (using a full path): $ script/reset-translated-file.js /Users/z/git/github/docs-internal/content/desktop/index.md $ script/reset-translated-file.js /Users/z/git/github/docs-internal/data/ui.yml

---


### [`rest/update-files.js`](rest/update-files.js)

Run this script to pull openAPI files from github/github, dereference them, and decorate them.

---


### [`rest/utils/create-code-samples.js`](rest/utils/create-code-samples.js)



---


### [`rest/utils/get-operations.js`](rest/utils/get-operations.js)



---


### [`rest/utils/operation-schema.js`](rest/utils/operation-schema.js)



---


### [`rest/utils/operation.js`](rest/utils/operation.js)



---


### [`sample-unix-commands.md`](sample-unix-commands.md)



---


### [`server-all-languages`](server-all-languages)

Starts the local development server with all of the available languages enabled.

---


### [`standardize-frontmatter-order.js`](standardize-frontmatter-order.js)

Run this script to standardize frontmatter fields in all content files, per the order: - title - intro - product callout - productVersion - map topic status - hidden status - layout - redirect

---


### [`sync-search-indices.js`](sync-search-indices.js)

This script is run automatically via GitHub Actions on every push to `main` to generate searchable data. It can also be run manually. For more info see [contributing/search.md](contributing/search.md)

---


### [`todo`](todo)

List all the TODOs in our JavaScript files and stylesheets.

---


### [`update-enterprise-dates.js`](update-enterprise-dates.js)

This script fetches data from https://github.com/github/enterprise-releases/blob/master/releases.json and updates `lib/enterprise-dates.json`, which the site uses for various functionality.

---


### [`update-readme.js`](update-readme.js)

This script crawls the script directory, hooks on special comment markers in each script, and adds the comment to `script/README.md`.

---


### [`update-versioning-in-files.js`](update-versioning-in-files.js)



---
