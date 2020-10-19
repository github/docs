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


### [`archive-enterprise-version.js`](archive-enterprise-version.js)

Run this script during the Enterprise deprecation process to download static copies of all pages for the oldest supported Enterprise version. See the Enterprise deprecation issue template for instructions.

---


### [`backfill-missing-localizations.js`](backfill-missing-localizations.js)

This script copies any English files that are missing from the translations directory into the translations directory. We only need to run this if problems occur with Crowdin's automatic sync.

---


### [`check-deps.js`](check-deps.js)

This script checks which modules you have used in your code and then makes sure they are listed as dependencies in your package.json, or vice-versa

https://github.com/dependency-check-team/dependency-check

The `ignore` array is for client-side or build-time stuff that doesn't get `require()d` in the normal way.

---


### [`check-external-links`](check-external-links)

The script is run once per day via a scheduled GitHub Action to check all links in the site. It automatically opens an issue if it finds broken links. To exclude a URL from the link check, add it to `lib/excluded-links.js`.

For checking internal links, see `script/check-internal-links`.

---


### [`check-for-node`](check-for-node)

This script is run automatically when you run the server locally. It checks whether Node.js is installed.

---


### [`check-internal-links`](check-internal-links)

This script wraps tests/links-and-images.js and provides an option to output results to a file.

For more information, see `tests/README.md#broken-link-test`.

---


### [`check-s3-images.js`](check-s3-images.js)

Run this script in your branch to check whether any images referenced in Enterprise content are not in the expected S3 bucket. You will need to authenticate to S3 via `awssume` to use this script. Instructions for the one-time setup are [here](https://github.com/github/product-documentation/blob/master/doc-team-workflows/workflow-information-for-all-writers/setting-up-awssume-and-s3cmd.md).

---


### [`content-migrations/extended-markdown-tags.js`](content-migrations/extended-markdown-tags.js)



---


### [`content-migrations/octicon-tag.js`](content-migrations/octicon-tag.js)



---


### [`content-migrations/site-data-tag.js`](content-migrations/site-data-tag.js)



---


### [`create-glossary-from-spreadsheet.js`](create-glossary-from-spreadsheet.js)

This script turns a Google Sheets CSV spreadsheet into a YAML file.

---


### [`delete-unused-staging-apps.js`](delete-unused-staging-apps.js)

This script finds and lists all the Heroku staging apps and deletes any leftover apps that have closed PRs

---


### [`get-blc-command.js`](get-blc-command.js)

This script parses options for `script/check-external-links`.

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


### [`graphql/build-changelog-from-markdown.js`](graphql/build-changelog-from-markdown.js)



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


### [`graphql/utils/remove-hidden-schema-members.rb`](graphql/utils/remove-hidden-schema-members.rb)



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


### [`new-versioning/fixtures.js`](new-versioning/fixtures.js)



---


### [`new-versioning/main`](new-versioning/main)

All the new versioning!

Usage $ script/new-versioning/main

---


### [`new-versioning/move-admin-dir.js`](new-versioning/move-admin-dir.js)



---


### [`new-versioning/update-content.js`](new-versioning/update-content.js)



---


### [`new-versioning/update-frontmatter.js`](new-versioning/update-frontmatter.js)



---


### [`new-versioning/update-not-fpt-conditionals.js`](new-versioning/update-not-fpt-conditionals.js)

Run this script to update these Liquid conditionals:

{% if currentVersion != 'free-pro-team@latest' %}

to:

{% if enterpriseServerVersions contains currentVersion %}

---


### [`new-versioning/update-products-yml.js`](new-versioning/update-products-yml.js)



---


### [`pages-with-liquid-titles.js`](pages-with-liquid-titles.js)

This is a temporary script to visualize which pages have liquid (and conditionals) in their `title` frontmatter

---


### [`ping-staging-apps.js`](ping-staging-apps.js)

This script finds all Heroku staging apps and pings them to make sure they're always "warmed" and responsive to requests.

---


### [`prevent-pushes-to-main.js`](prevent-pushes-to-main.js)

This script is intended to be used as a git "prepush" hook. If the current branch is main, it will exit unsuccesfully and prevent the push.

---


### [`prevent-translation-commits.js`](prevent-translation-commits.js)

This script is run as a git precommit hook (installed by husky after npm install). It detects changes to files the in the translations folder and prevents the commit if any changes exist.

---


### [`preview-openapi-changes`](preview-openapi-changes)



---


### [`purge-fastly`](purge-fastly)

Run this script to manually purge the [Fastly cache](https://github.com/github/docs-internal#fastly-cdn). Note this script requires a `FASTLY_SERVICE_ID` and `FASTLY_TOKEN` in your `.env` file.

---


### [`purge-fastly-by-url.js`](purge-fastly-by-url.js)

Run this script to manually purge the [Fastly cache](https://github.com/github/docs-internal#fastly-cdn) for all language variants of a single URL or for a batch of URLs in a file. This script does not require authentication.

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


### [`remove-deprecated-enterprise-version-markup.js`](remove-deprecated-enterprise-version-markup.js)

Run this script after an Enterprise deprecation to remove Liquid statements and frontmatter that contain the deprecated Enterprise version. See the Enterprise deprecation issue template for instructions.

---


### [`remove-extraneous-translation-files.js`](remove-extraneous-translation-files.js)

An [automated test](/tests/extraneous-translation-files.js) checks for files in the `translations/` directory that do not have an equivalent English file in the `content/` directory, and fails if it finds extraneous files. When the test fails, a human needs to run this script to remove the files.

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


### [`sample-unix-commands.md`](sample-unix-commands.md)



---


### [`server-all-languages`](server-all-languages)

Starts the local development server with all of the available languages enabled.

---


### [`standardize-frontmatter-order.js`](standardize-frontmatter-order.js)

Run this script to standardize frontmatter fields in all content files, per the order decided in https://github.com/github/docs-internal/issues/9658#issuecomment-485536265.

---


### [`sync-algolia-search-indices.js`](sync-algolia-search-indices.js)

This script is run automatically via GitHub Actions on every push to `master` to generate searchable data and upload it to our Algolia account. It can also be run manually. For more info see [contributing/search.md](contributing/search.md)

---


### [`todo`](todo)

List all the TODOs in our JavaScript files and stylesheets.

---


### [`update-enterprise-dates.js`](update-enterprise-dates.js)

Run this script during Enterprise releases and deprecations. It uses the GitHub API to get dates from [`enterprise-releases`](https://github.com/github/enterprise-releases/blob/master/releases.json) and updates `lib/enterprise-dates.json`. The help site uses this JSON to display dates at the top of some Enterprise versions.

This script requires that you have a GitHub Personal Access Token in a `.env` file. If you don't have a token, get one [here](https://github.com/settings/tokens/new?scopes=repo&description=docs-dev). If you don't have an `.env` file in your docs checkout, run this command in Terminal:

`cp .env.example .env`

Open the `.env` file in a text editor, and find the `GITHUB_TOKEN=` placeholder. Add your token after the equals sign.

Do not commit the `.env` file; just leave it in your checkout.

---


### [`update-readme.js`](update-readme.js)

This script crawls the script directory, hooks on special comment markers in each script, and adds the comment to `script/README.md`.

---


### [`update-s3cmd-config.js`](update-s3cmd-config.js)

This script is used by other scripts to update temporary AWS credentials and authenticate to S3. See docs at [Setting up awssume and S3cmd](https://github.com/github/product-documentation/tree/master/doc-team-workflows/workflow-information-for-all-writers/setting-up-awssume-and-s3cmd.md).

---


### [`update-versioning-in-files.js`](update-versioning-in-files.js)



---


### [`upload-enterprise-images-to-s3.js`](upload-enterprise-images-to-s3.js)

Run this script to: [upload individual files to S3](https://github.com/github/product-documentation/blob/master/doc-team-workflows/workflow-information-for-all-writers/adding-individual-images-to-earlier-verisons-of-enterprise.md) or: [upload a batch of files to S3 for a new Enterprise release](https://github.com/github/product-documentation/blob/master/doc-team-workflows/working-on-enterprise-releases/information-for-all-writers/storing-a-batch-of-assets-on-s3-for-a-new-release.md). Run `upload-enterprise-images-to-s3.js --help` for usage details.

---


