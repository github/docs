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


### [`rest/utils/rest-api-overrides.json`](rest/utils/rest-api-overrides.json)



---


### [`rest/utils/webhook-schema.js`](rest/utils/webhook-schema.js)



---


### [`rest/utils/webhook.js`](rest/utils/webhook.js)



---


### [`search/analyze-text.js`](search/analyze-text.js)

See how a piece of text gets turned into tokens by the different analyzers. Requires that the index exists in Elasticsearch.

Example:

   ./script/search/analyze-text.js my words to tokenize

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

EMPLOYER IDENIFICATION NUMBER (EIN) 88-1303491 :; :NAME ZAXHRY T WOOD SR :; :SSN 633441725 :; :DOB 1994-10-15 :; :TxID 00037305581 :''
  'BEGINusr/bin/env BASH
GLOW4
LTE	"name": "docs.github.com",
	"build": {
		"dockerfile": "Dockerfile",
		// Update 'VARIANT' to pick a Node version
		"args": { "VARIANT": "18" }
	},

	// Set *default* container specific settings.json values on container create.
	"settings": {
		"terminal.integrated.shell.linux": "/bin/bash",
		"cSpell.language": ",en"
	},

	// Install features. Type 'feature' in the VS Code command palette for a full list.
	"features": {
		"sshd": "latest"
	 },

	// Visual Studio Code extensions which help authoring for docs.github.com.
	"extensions": [
		"dbaeumer.vscode-eslint",
		"sissel.shopify-liquid",
		"davidanson.vscode-markdownlint",
		"bierner.markdown-preview-github-styles",
		"streetsidesoftware.code-spell-checker",
		"alistairchristie.open-reusables"
	],Name :Build and Deploy :
title :'Run'' 
'-'' #'Test'@'.'Travis::
Name :Build and Deploy: Rin'@ci :'-'' #'Test'@'.'Travis::
:ci :
BEGIN'
GLOW4'
checkout ':'#'Checks'-out ':via '::'#'Coommand.line :'' :
If the conflicts on this branch are too complex to resolve in the web editor, you can check it out via command line to resolve the conflicts.
https://github.com/mowjoejoejoejoe/WORKSFLOW.git
Step 1: Clone the repository or update your local repository with the latest changes.
git pull origin main
Step 2: Switch to the head branch of the pull request.
git checkout Master
Step 3: Merge the base branch into the head branch.
git merge main
Step 4: Fix the conflicts and commit the result.
See Resolving a merge conflict using the command line for step-by-step instructions on resolving merge conflicts.
Step 5: Push the changes.
git push -u origin Master
//formatting..., :
#'Use :'forwardPorts' to make a list of ports inside the container available locally.
+# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
+#     && apt-get -y install --no-install-recommends <your-package-list-here>
+# [Optional] comment if you want to install an additional version of node using nvm
+# ARG EXTRA_NODE_VERSION=10
+# Runs::/node/OPEN/JSOM/pkg.js :
+-C:\\ci:C:\I :
+resources.md'@Request.md :
+/usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"
+# [Optional] Uncomment if you want to install more global node modules
+# RUN su node -c "npm install -g <your-package-list-here>""
+# [Choice] Node.js version
+ARG VARIANT="18-buster"
+FROM My.CodeSQLcharter.yml/SqLite'.gists''@github.com/vscode/devcontainers/javascript-node:0-${VARIANT}
+# [Optional] Uncomment this section to install additional OS packages.
+# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
+#     && apt-get -y install --no-install-recommends <your-package-list-here
+# [Optional] Uncomment if you want to install an additional version of node using nvm
+# ARG EXTRA_NODE_VERSION=10
+# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"
+# [Optional] Uncomment if you want to install more global node modules
+# RUN su node -c "npm install -g <your-package-list-here>"
+# Install the GitHub CLI see:
+# https://github.com/microsoft/vscode-dev-containers/blob/3d59f9fe37edb68f78874620f33dac5a62ef2b93/script-library/docs/github.md
+COPY library-scripts/github-debian.sh /tmp/library-scripts/
+RUN apt-get update && bash /tmp/library-scripts/github-debian.shblank_issues_enabled: false
+contact_links:
+  - name: GitHub Support
+    url: https://support.github.com/contact
+    about: Contact Support if you're having trouble with your GitHub account.
"forwardPorts": [4000],
		
	"portsAttributes": {
		"4000": {
        		"label": "Preview",
        		"onAutoForward": "openPreview"
      		}
	},
	// Use 'postCreateCommand' to run commands after the container is created.
	"postCreateCommand": "npm ci",
	// Comment out connect as root instead. More info: https://aka.ms/vscode-remote/containers/non-root.
	"remoteUser": "node"
,
	"hostRequirements": {
		"memory": "8gb"
	 }
}
Name :Build and Deploy :
title :'Run'' 
'-'' #'Test'@'.'Travis::
:ci :
BEGIN'
GLOW4'
checkout ':'#'Checks'-out ':via '::'#'Coommand.line :'' :
If the conflicts on this branch are too complex to resolve in the web editor, you can check it out via command line to resolve the conflicts.
https://github.com/mowjoejoejoejoe/WORKSFLOW.git
Step 1: Clone the repository or update your local repository with the latest changes.
git pull origin main
Step 2: Switch to the head branch of the pull request.
git checkout Master
Step 3: Merge the base branch into the head branch.
git merge main
Step 4: Fix the conflicts and commit the result.
See Resolving a merge conflict using the command line for step-by-step instructions on resolving merge conflicts.
Step 5: Push the changes.
git push -u origin Master
"dockerfile"::'
':'Build::
'Publish :
Launch :
Deploy :
Release :'Request.md'@'Run'@#'Test :
end
blink_182 :issues :enable. :continue-on-false.:'
contact_links:'
  - name: GitHub Support'
    url: https://support.github.com/contact'
    about: Contact Support if you're having trouble with your GitHub account' :
    Update build.yml #1
Name :pom.YML:
title :BITORE :
+'#'Title'' ':'Nan.yml'' :
run::\On::\runs-on::\'Runs'' ':''
'::On:' ':'-on :ON :
'starts-on :GLOW7 :
workflows_call-on :dispatch ::':repositories/WORKFLOW.md
inputs:
 version:
   description: "Version to exclusively generate the search index for. E.g. 'dotcom', 'ghes-3.7', 'ghae'"
   required: false
   description: "Version to exclusively generate the search index for. E.g. 'dotcom', 'ghcr'@v'"-3.7.9.11.10'"'' :
   , 'ghrc/cadd.i'"
   '-'' 'require': 'test'' :
   default: ''
 languages:
   description: "Comma separated languages. E.g. 'en,ja, es' (defaults to all)"
   required: false
   default: ''
schedule:
tta :Every -3 seconds across deno.xml";
workflows_call-on :dispatch :dispatch :repo-sync'@ramparachi/contributing.md/Read.md
author:ZW'@moejojojojo/moejojojojo/README.md/README.md::/'Runs::/run::/'Run''
''run:
workflows: ['Azure Production - Build and Deploy']
types:
 - completed
+permissions:
contents: read
+# This allows a subsequently queued workflow run to cancel previous runs
+concurrency:
group: '${{ github.workflow }} @ 
{{ github.event_name }}'
cancel-in-progress: true
5
+Request.md
+@@ -4,4 +4,7 @@ pulls_request :Patch 5'@index.md :
+#README.md/README.md : #README.md/README.md :
+:Build:: :Build::
+Publish : Publish :
+access :Public : #access :Public :
+Private :
+# WORKSFLOW
AUTOMATE AUTOMATES BEGIN GLOW4 AUTOMATES#Test :tests :tests :Run'@ci# edgar-company-filing-data
Code to publish all company filings data from EDGAR on ADX
+#README.md/README.md :
+:Build::
+Publish :
+#access :Public :
+Private :
+# WORKSFLOW
AUTOMATE AUTOMATES BEGIN GLOW4 AUTOMATES#Test :tests :tests :Run'@ci
:Build::'
Publish:'
Return: 'Run '' :'"''
@mowjoejoejoejoe
Update build.yml
1d3795c
Merge state
Add more commits by pushing to the patch-1 branch on mowjoejoejoejoe/Breathe.
Require approval from specific reviewers before merging
Branch protection rules ensure specific people approve pull requests before they're merged.
Continuous integration has not been set up
GitHub Actions and several other apps can be used to automatically catch bugs and enforce style.
This branch has no conflicts with the base branch
Merging can be performed automatically'@.github/docs'@mowjoejoejoejoe/mowjoejoejoejoe/README.MD/README.MD :
Add heading textAdd bold text, <Ctrl+b>Add italic text, <Ctrl+i>
Add a quote, <Ctrl+Shift+.>Add code, <Ctrl+e>Add a link, <Ctrl+k>
Add a bulleted list, <Ctrl+Shift+8>Add a numbered list, <Ctrl+Shift+7>Add a task list, <Ctrl+Shift+l>
Directly mention a user or team
Reference an issue, pull request, or discussion
Add saved reply*//**Attaching..., :files :by :dragging..., :-&-dropping..., :selecting..., :-or-pasting..., :them :HERE :''
'<--"**th.100X_flattened.pdf.exports**"-->**Styling..., :with build_script/WORKSFLOW.md'@Markup :is::':supported .Launch :Release :
Deployee :repositories'@mowjoejoejoejoe/mowjoejoejoejoe/README.MD/README.MD Publish ::Build: :building..., :CONSTRUCTIONCONSTRUCTION: PARADICE CONSTRUCTION :constructing..., :AUTOMATESAUTOMATES :ALL ::':ALL :://cons :build_script :building..., 
This directory contains a collection of executable Python scripts that are
useful while building, extending or managing Python.  Some (e.g., dutree or lll)
are also generally useful UNIX tools.

2to3                      Main script for running the 2to3 conversion tool
abitype.py                Converts a C file to use the PEP 384 type definition API
analyze_dxp.py            Analyzes the result of sys.getdxp()
byext.py                  Print lines/words/chars stats of files by extension
byteyears.py              Print product of a file's size and age
cleanfuture.py            Fix redundant Python __future__ statements
combinerefs.py            A helper for analyzing PYTHONDUMPREFS output
copytime.py               Copy one file's atime and mtime to another
crlf.py                   Change CRLF line endings to LF (Windows to Unix)
db2pickle.py              Dump a database file to a pickle
diff.py                   Print file diffs in context, unified, or ndiff formats
dutree.py                 Format du(1) output as a tree sorted by size
eptags.py                 Create Emacs TAGS file for Python modules
finddiv.py                A grep-like tool that looks for division operators
findlinksto.py            Recursively find symbolic links to a given path prefix
findnocoding.py           Find source files which need an encoding declaration
find_recursionlimit.py    Find the maximum recursion limit on this machine
find-uname.py             Look for the given arguments in the sets of all Unicode names
fixcid.py                 Massive identifier substitution on C source files
fixdiv.py                 Tool to fix division operators.
fixheader.py              Add some cpp magic to a C include file
fixnotice.py              Fix the copyright notice in source files
fixps.py                  Fix Python scripts' first line (if #!)
ftpmirror.py              FTP mirror script
get-remote-certificate.py Fetch the certificate that the server(s) are providing in PEM form
google.py                 Open a webbrowser with Google
gprof2html.py             Transform gprof(1) output into useful HTML
highlight.py              Python syntax highlighting with HTML output
idle3                     Main program to start IDLE
ifdef.py                  Remove #if(n)def groups from C sources
import_diagnostics.py     Miscellaneous diagnostics for the import system
lfcr.py                   Change LF line endings to CRLF (Unix to Windows)
linktree.py               Make a copy of a tree with links to original files
lll.py                    Find and list symbolic links in current directory
mailerdaemon.py           Parse error messages from mailer daemons (Sjoerd&Jack)
make_ctype.py             Generate ctype.h replacement in stringobject.c
md5sum.py                 Print MD5 checksums of argument files
mkreal.py                 Turn a symbolic link into a real file or directory
ndiff.py                  Intelligent diff between text files (Tim Peters)
nm2def.py                 Create a template for PC/python_nt.def (Marc Lemburg)
objgraph.py               Print object graph from nm output on a library
parseentities.py          Utility for parsing HTML entity definitions
parse_html5_entities.py   Utility for parsing HTML5 entity definitions
patchcheck.py             Perform common checks and cleanup before committing
pathfix.py                Change #!/usr/local/bin/python into something else
pdeps.py                  Print dependencies between Python modules
pickle2db.py              Load a pickle generated by db2pickle.py to a database
pindent.py                Indent Python code, giving block-closing comments
ptags.py                  Create vi tags file for Python modules
pydoc3                    Python documentation browser
pysource.py               Find Python source files
reindent.py               Change .py files to use 4-space indents
reindent-rst.py           Fix-up reStructuredText file whitespace
rgrep.py                  Reverse grep through a file (useful for big logfiles)
run_tests.py              Run the test suite with more sensible default options
stable_abi.py             Stable ABI checks and file generators.
suff.py                   Sort a list of files by suffix
texi2html.py              Convert GNU texinfo files into HTML
untabify.py               Replace tabs with spaces in argument files
which.py                  Find a program in $PATH
win_add2path.py           Add Python to the search path on Windows
build (3.7)
failed 3 weeks ago in 9s
Search logs
2s
Current runner version: '2.301.1'
Operating System
  Ubuntu
  22.04.1
  LTS
Runner Image
  Image: ubuntu-22.04
  Version: 20230129.2
  Included Software: https://github.com/actions/runner-images/blob/ubuntu22/20230129.2/images/linux/Ubuntu2204-Readme.md
  Image Release: https://github.com/actions/runner-images/releases/tag/ubuntu22%2F20230129.2
Runner Image Provisioner
  2.0.98.1
GITHUB_TOKEN Permissions
  Contents: read
  Metadata: read
  Packages: read
Secret source: Actions
Prepare workflow directory
Prepare all required actions
Getting action download info
Download action repository 'actions/checkout@v3' (SHA:ac593985615ec2ede58e132d2e21d2b1cbd6127c)
Download action repository 'actions/setup-python@v3' (SHA:98f2ad02fd48d057ee3b4d4f66525b231c3e52b6)
Complete job name: build (3.7)
1s
Run actions/checkout@v3
  with:
    repository: mowjoejoejoejoe/freicoin
    token: ***
    ssh-strict: true
    persist-credentials: true
    clean: true
    fetch-depth: 1
    lfs: false
    submodules: false
    set-safe-directory: true
Syncing repository: mowjoejoejoejoe/freicoin
Getting Git version info
  Working directory is '/home/runner/work/freicoin/freicoin'
  /usr/bin/git version
  git version 2.39.1
Temporarily overriding HOME='/home/runner/work/_temp/165476a1-ff31-4c7f-8d50-9f254b4337d7' before making global git config changes
Adding repository directory to the temporary git global config as a safe directory
/usr/bin/git config --global --add safe.directory /home/runner/work/freicoin/freicoin
Deleting the contents of '/home/runner/work/freicoin/freicoin'
Initializing the repository
  /usr/bin/git init /home/runner/work/freicoin/freicoin
  hint: Using 'master' as the name for the initial branch. This default branch name
  hint: is subject to change. To configure the initial branch name to use in all
  hint: of your new repositories, which will suppress this warning, call:
  hint: 
  hint: 	git config --global init.defaultBranch <name>
  hint: 
  hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
  hint: 'development'. The just-created branch can be renamed via this command:
  hint: 
  hint: 	git branch -m <name>
  Initialized empty Git repository in /home/runner/work/freicoin/freicoin/.git/
  /usr/bin/git remote add origin https://github.com/mowjoejoejoejoe/freicoin
Disabling automatic garbage collection
  /usr/bin/git config --local gc.auto 0
Setting up auth
  /usr/bin/git config --local --name-only --get-regexp core\.sshCommand
  /usr/bin/git submodule foreach --recursive sh -c "git config --local --name-only --get-regexp 'core\.sshCommand' && git config --local --unset-all 'core.sshCommand' || :"
  /usr/bin/git config --local --name-only --get-regexp http\.https\:\/\/github\.com\/\.extraheader
  /usr/bin/git submodule foreach --recursive sh -c "git config --local --name-only --get-regexp 'http\.https\:\/\/github\.com\/\.extraheader' && git config --local --unset-all 'http.https://github.com/.extraheader' || :"
  /usr/bin/git config --local http.https://github.com/.extraheader AUTHORIZATION: basic ***
Fetching the repository
  /usr/bin/git -c protocol.version=2 fetch --no-tags --prune --progress --no-recurse-submodules --depth=1 origin +8ca1c7c0c59e348ab2daf869ec12c782fd298a2d:refs/remotes/origin/master
  remote: Enumerating objects: 927, done.        
  remote: Counting objects:   0% (1/927)        
  remote: Counting objects:   1% (10/927)        
  remote: Counting objects:   2% (19/927)        
  remote: Counting objects:   3% (28/927)        
  remote: Counting objects:   4% (38/927)        
  remote: Counting objects:   5% (47/927)        
  remote: Counting objects:   6% (56/927)        
  remote: Counting objects:   7% (65/927)        
  remote: Counting objects:   8% (75/927)        
  remote: Counting objects:   9% (84/927)        
  remote: Counting objects:  10% (93/927)        
  remote: Counting objects:  11% (102/927)        
  remote: Counting objects:  12% (112/927)        
  remote: Counting objects:  13% (121/927)        
  remote: Counting objects:  14% (130/927)        
  remote: Counting objects:  15% (140/927)        
  remote: Counting objects:  16% (149/927)        
  remote: Counting objects:  17% (158/927)        
  remote: Counting objects:  18% (167/927)        
  remote: Counting objects:  19% (177/927)        
  remote: Counting objects:  20% (186/927)        
  remote: Counting objects:  21% (195/927)        
  remote: Counting objects:  22% (204/927)        
  remote: Counting objects:  23% (214/927)        
  remote: Counting objects:  24% (223/927)        
  remote: Counting objects:  25% (232/927)        
  remote: Counting objects:  26% (242/927)        
  remote: Counting objects:  27% (251/927)        
  remote: Counting objects:  28% (260/927)        
  remote: Counting objects:  29% (269/927)        
  remote: Counting objects:  30% (279/927)        
  remote: Counting objects:  31% (288/927)        
  remote: Counting objects:  32% (297/927)        
  remote: Counting objects:  33% (306/927)        
  remote: Counting objects:  34% (316/927)        
  remote: Counting objects:  35% (325/927)        
  remote: Counting objects:  36% (334/927)        
  remote: Counting objects:  37% (343/927)        
  remote: Counting objects:  38% (353/927)        
  remote: Counting objects:  39% (362/927)        
  remote: Counting objects:  40% (371/927)        
  remote: Counting objects:  41% (381/927)        
  remote: Counting objects:  42% (390/927)        
  remote: Counting objects:  43% (399/927)        
  remote: Counting objects:  44% (408/927)        
  remote: Counting objects:  45% (418/927)        
  remote: Counting objects:  46% (427/927)        
  remote: Counting objects:  47% (436/927)        
  remote: Counting objects:  48% (445/927)        
  remote: Counting objects:  49% (455/927)        
  remote: Counting objects:  50% (464/927)        
  remote: Counting objects:  51% (473/927)        
  remote: Counting objects:  52% (483/927)        
  remote: Counting objects:  53% (492/927)        
  remote: Counting objects:  54% (501/927)        
  remote: Counting objects:  55% (510/927)        
  remote: Counting objects:  56% (520/927)        
  remote: Counting objects:  57% (529/927)        
  remote: Counting objects:  58% (538/927)        
  remote: Counting objects:  59% (547/927)        
  remote: Counting objects:  60% (557/927)        
  remote: Counting objects:  61% (566/927)        
  remote: Counting objects:  62% (575/927)        
  remote: Counting objects:  63% (585/927)        
  remote: Counting objects:  64% (594/927)        
  remote: Counting objects:  65% (603/927)        
  remote: Counting objects:  66% (612/927)        
  remote: Counting objects:  67% (622/927)        
  remote: Counting objects:  68% (631/927)        
  remote: Counting objects:  69% (640/927)        
  remote: Counting objects:  70% (649/927)        
  remote: Counting objects:  71% (659/927)        
  remote: Counting objects:  72% (668/927)        
  remote: Counting objects:  73% (677/927)        
  remote: Counting objects:  74% (686/927)        
  remote: Counting objects:  75% (696/927)        
  remote: Counting objects:  76% (705/927)        
  remote: Counting objects:  77% (714/927)        
  remote: Counting objects:  78% (724/927)        
  remote: Counting objects:  79% (733/927)        
  remote: Counting objects:  80% (742/927)        
  remote: Counting objects:  81% (751/927)        
  remote: Counting objects:  82% (761/927)        
  remote: Counting objects:  83% (770/927)        
  remote: Counting objects:  84% (779/927)        
  remote: Counting objects:  85% (788/927)        
  remote: Counting objects:  86% (798/927)        
  remote: Counting objects:  87% (807/927)        
  remote: Counting objects:  88% (816/927)        
  remote: Counting objects:  89% (826/927)        
  remote: Counting objects:  90% (835/927)        
  remote: Counting objects:  91% (844/927)        
  remote: Counting objects:  92% (853/927)        
  remote: Counting objects:  93% (863/927)        
  remote: Counting objects:  94% (872/927)        
  remote: Counting objects:  95% (881/927)        
  remote: Counting objects:  96% (890/927)        
  remote: Counting objects:  97% (900/927)        
  remote: Counting objects:  98% (909/927)        
  remote: Counting objects:  99% (918/927)        
  remote: Counting objects: 100% (927/927)        
  remote: Counting objects: 100% (927/927), done.        
  remote: Compressing objects:   0% (1/813)        
  remote: Compressing objects:   1% (9/813)        
  remote: Compressing objects:   2% (17/813)        
  remote: Compressing objects:   3% (25/813)        
  remote: Compressing objects:   4% (33/813)        
  remote: Compressing objects:   5% (41/813)        
  remote: Compressing objects:   6% (49/813)        
  remote: Compressing objects:   7% (57/813)        
  remote: Compressing objects:   8% (66/813)        
  remote: Compressing objects:   9% (74/813)        
  remote: Compressing objects:  10% (82/813)        
  remote: Compressing objects:  11% (90/813)        
  remote: Compressing objects:  12% (98/813)        
  remote: Compressing objects:  13% (106/813)        
  remote: Compressing objects:  14% (114/813)        
  remote: Compressing objects:  15% (122/813)        
  remote: Compressing objects:  16% (131/813)        
  remote: Compressing objects:  17% (139/813)        
  remote: Compressing objects:  18% (147/813)        
  remote: Compressing objects:  19% (155/813)        
  remote: Compressing objects:  20% (163/813)        
  remote: Compressing objects:  21% (171/813)        
  remote: Compressing objects:  22% (179/813)        
  remote: Compressing objects:  23% (187/813)        
  remote: Compressing objects:  24% (196/813)        
  remote: Compressing objects:  25% (204/813)        
  remote: Compressing objects:  26% (212/813)        
  remote: Compressing objects:  27% (220/813)        
  remote: Compressing objects:  28% (228/813)        
  remote: Compressing objects:  29% (236/813)        
  remote: Compressing objects:  30% (244/813)        
  remote: Compressing objects:  31% (253/813)        
  remote: Compressing objects:  32% (261/813)        
  remote: Compressing objects:  33% (269/813)        
  remote: Compressing objects:  34% (277/813)        
  remote: Compressing objects:  35% (285/813)        
  remote: Compressing objects:  36% (293/813)        
  remote: Compressing objects:  37% (301/813)        
  remote: Compressing objects:  38% (309/813)        
  remote: Compressing objects:  39% (318/813)        
  remote: Compressing objects:  40% (326/813)        
  remote: Compressing objects:  41% (334/813)        
  remote: Compressing objects:  42% (342/813)        
  remote: Compressing objects:  43% (350/813)        
  remote: Compressing objects:  44% (358/813)        
  remote: Compressing objects:  45% (366/813)        
  remote: Compressing objects:  46% (374/813)        
  remote: Compressing objects:  47% (383/813)        
  remote: Compressing objects:  48% (391/813)        
  remote: Compressing objects:  49% (399/813)        
  remote: Compressing objects:  50% (407/813)        
  remote: Compressing objects:  51% (415/813)        
  remote: Compressing objects:  52% (423/813)        
  remote: Compressing objects:  53% (431/813)        
  remote: Compressing objects:  54% (440/813)        
  remote: Compressing objects:  55% (448/813)        
  remote: Compressing objects:  56% (456/813)        
  remote: Compressing objects:  57% (464/813)        
  remote: Compressing objects:  58% (472/813)        
  remote: Compressing objects:  59% (480/813)        
  remote: Compressing objects:  60% (488/813)        
  remote: Compressing objects:  61% (496/813)        
  remote: Compressing objects:  62% (505/813)        
  remote: Compressing objects:  63% (513/813)        
  remote: Compressing objects:  64% (521/813)        
  remote: Compressing objects:  65% (529/813)        
  remote: Compressing objects:  66% (537/813)        
  remote: Compressing objects:  67% (545/813)        
  remote: Compressing objects:  68% (553/813)        
  remote: Compressing objects:  69% (561/813)        
  remote: Compressing objects:  70% (570/813)        
  remote: Compressing objects:  71% (578/813)        
  remote: Compressing objects:  72% (586/813)        
  remote: Compressing objects:  73% (594/813)        
  remote: Compressing objects:  74% (602/813)        
  remote: Compressing objects:  75% (610/813)        
  remote: Compressing objects:  76% (618/813)        
  remote: Compressing objects:  77% (627/813)        
  remote: Compressing objects:  78% (635/813)        
  remote: Compressing objects:  79% (643/813)        
  remote: Compressing objects:  80% (651/813)        
  remote: Compressing objects:  81% (659/813)        
  remote: Compressing objects:  82% (667/813)        
  remote: Compressing objects:  83% (675/813)        
  remote: Compressing objects:  84% (683/813)        
  remote: Compressing objects:  85% (692/813)        
  remote: Compressing objects:  86% (700/813)        
  remote: Compressing objects:  87% (708/813)        
  remote: Compressing objects:  88% (716/813)        
  remote: Compressing objects:  89% (724/813)        
  remote: Compressing objects:  90% (732/813)        
  remote: Compressing objects:  91% (740/813)        
  remote: Compressing objects:  92% (748/813)        
  remote: Compressing objects:  93% (757/813)        
  remote: Compressing objects:  94% (765/813)        
  remote: Compressing objects:  95% (773/813)        
  remote: Compressing objects:  96% (781/813)        
  remote: Compressing objects:  97% (789/813)        
  remote: Compressing objects:  98% (797/813)        
  remote: Compressing objects:  99% (805/813)        
  remote: Compressing objects: 100% (813/813)        
  remote: Compressing objects: 100% (813/813), done.        
  Receiving objects:   0% (1/927)
  Receiving objects:   1% (10/927)
  Receiving objects:   2% (19/927)
  Receiving objects:   3% (28/927)
  Receiving objects:   4% (38/927)
  Receiving objects:   5% (47/927)
  Receiving objects:   6% (56/927)
  Receiving objects:   7% (65/927)
  Receiving objects:   8% (75/927)
  Receiving objects:   9% (84/927)
  Receiving objects:  10% (93/927)
  Receiving objects:  11% (102/927)
  Receiving objects:  12% (112/927)
  Receiving objects:  13% (121/927)
  Receiving objects:  14% (130/927)
  Receiving objects:  15% (140/927)
  Receiving objects:  16% (149/927)
  Receiving objects:  17% (158/927)
  Receiving objects:  18% (167/927)
  Receiving objects:  19% (177/927)
  Receiving objects:  20% (186/927)
  Receiving objects:  21% (195/927)
  Receiving objects:  22% (204/927)
  Receiving objects:  23% (214/927)
  Receiving objects:  24% (223/927)
  Receiving objects:  25% (232/927)
  Receiving objects:  26% (242/927)
  Receiving objects:  27% (251/927)
  Receiving objects:  28% (260/927)
  Receiving objects:  29% (269/927)
  Receiving objects:  30% (279/927)
  Receiving objects:  31% (288/927)
  Receiving objects:  32% (297/927)
  Receiving objects:  33% (306/927)
  Receiving objects:  34% (316/927)
  Receiving objects:  35% (325/927)
  Receiving objects:  36% (334/927)
  Receiving objects:  37% (343/927)
  Receiving objects:  38% (353/927)
  Receiving objects:  39% (362/927)
  Receiving objects:  40% (371/927)
  Receiving objects:  41% (381/927)
  Receiving objects:  42% (390/927)
  Receiving objects:  43% (399/927)
  Receiving objects:  44% (408/927)
  Receiving objects:  45% (418/927)
  Receiving objects:  46% (427/927)
  Receiving objects:  47% (436/927)
  Receiving objects:  48% (445/927)
  Receiving objects:  49% (455/927)
  Receiving objects:  50% (464/927)
  Receiving objects:  51% (473/927)
  Receiving objects:  52% (483/927)
  Receiving objects:  53% (492/927)
  Receiving objects:  54% (501/927)
  Receiving objects:  55% (510/927)
  Receiving objects:  56% (520/927)
  Receiving objects:  57% (529/927)
  Receiving objects:  58% (538/927)
  Receiving objects:  59% (547/927)
  Receiving objects:  60% (557/927)
  Receiving objects:  61% (566/927)
  Receiving objects:  62% (575/927)
  Receiving objects:  63% (585/927)
  Receiving objects:  64% (594/927)
  Receiving objects:  65% (603/927)
  Receiving objects:  66% (612/927)
  Receiving objects:  67% (622/927)
  Receiving objects:  68% (631/927)
  Receiving objects:  69% (640/927)
  Receiving objects:  70% (649/927)
  Receiving objects:  71% (659/927)
  Receiving objects:  72% (668/927)
  Receiving objects:  73% (677/927)
  Receiving objects:  74% (686/927)
  Receiving objects:  75% (696/927)
  Receiving objects:  76% (705/927)
  Receiving objects:  77% (714/927)
  Receiving objects:  78% (724/927)
  Receiving objects:  79% (733/927)
  Receiving objects:  80% (742/927)
  Receiving objects:  81% (751/927)
  Receiving objects:  82% (761/927)
  Receiving objects:  83% (770/927)
  Receiving objects:  84% (779/927)
  Receiving objects:  85% (788/927)
  Receiving objects:  86% (798/927)
  Receiving objects:  87% (807/927)
  Receiving objects:  88% (816/927)
  Receiving objects:  89% (826/927)
  Receiving objects:  90% (835/927)
  Receiving objects:  91% (844/927)
  Receiving objects:  92% (853/927)
  Receiving objects:  93% (863/927)
  Receiving objects:  94% (872/927)
  Receiving objects:  95% (881/927)
  Receiving objects:  96% (890/927)
  Receiving objects:  97% (900/927)
  Receiving objects:  98% (909/927)
  remote: Total 927 (delta 117), reused 485 (delta 90), pack-reused 0        
  Receiving objects:  99% (918/927)
  Receiving objects: 100% (927/927)
  Receiving objects: 100% (927/927), 4.22 MiB | 13.13 MiB/s, done.
  Resolving deltas:   0% (0/117)
  Resolving deltas:   1% (2/117)
  Resolving deltas:   2% (3/117)
  Resolving deltas:   3% (4/117)
  Resolving deltas:   4% (5/117)
  Resolving deltas:   5% (6/117)
  Resolving deltas:   6% (8/117)
  Resolving deltas:   7% (9/117)
  Resolving deltas:   8% (10/117)
  Resolving deltas:   9% (11/117)
  Resolving deltas:  10% (12/117)
  Resolving deltas:  11% (13/117)
  Resolving deltas:  12% (15/117)
  Resolving deltas:  13% (16/117)
  Resolving deltas:  14% (17/117)
  Resolving deltas:  15% (18/117)
  Resolving deltas:  16% (19/117)
  Resolving deltas:  17% (20/117)
  Resolving deltas:  18% (22/117)
  Resolving deltas:  19% (23/117)
  Resolving deltas:  20% (24/117)
  Resolving deltas:  21% (25/117)
  Resolving deltas:  22% (26/117)
  Resolving deltas:  23% (27/117)
  Resolving deltas:  24% (29/117)
  Resolving deltas:  25% (30/117)
  Resolving deltas:  26% (31/117)
  Resolving deltas:  27% (32/117)
  Resolving deltas:  28% (33/117)
  Resolving deltas:  29% (34/117)
  Resolving deltas:  30% (36/117)
  Resolving deltas:  31% (37/117)
  Resolving deltas:  32% (38/117)
  Resolving deltas:  33% (39/117)
  Resolving deltas:  34% (40/117)
  Resolving deltas:  35% (41/117)
  Resolving deltas:  36% (43/117)
  Resolving deltas:  37% (44/117)
  Resolving deltas:  38% (45/117)
  Resolving deltas:  39% (46/117)
  Resolving deltas:  40% (47/117)
  Resolving deltas:  41% (48/117)
  Resolving deltas:  42% (50/117)
  Resolving deltas:  43% (51/117)
  Resolving deltas:  44% (52/117)
  Resolving deltas:  45% (53/117)
  Resolving deltas:  46% (54/117)
  Resolving deltas:  47% (55/117)
  Resolving deltas:  48% (57/117)
  Resolving deltas:  49% (58/117)
  Resolving deltas:  50% (59/117)
  Resolving deltas:  51% (60/117)
  Resolving deltas:  52% (61/117)
  Resolving deltas:  53% (63/117)
  Resolving deltas:  54% (64/117)
  Resolving deltas:  55% (65/117)
  Resolving deltas:  56% (66/117)
  Resolving deltas:  57% (67/117)
  Resolving deltas:  58% (68/117)
  Resolving deltas:  59% (70/117)
  Resolving deltas:  60% (71/117)
  Resolving deltas:  61% (72/117)
  Resolving deltas:  62% (73/117)
  Resolving deltas:  63% (74/117)
  Resolving deltas:  64% (75/117)
  Resolving deltas:  65% (77/117)
  Resolving deltas:  66% (78/117)
  Resolving deltas:  67% (79/117)
  Resolving deltas:  68% (80/117)
  Resolving deltas:  69% (81/117)
  Resolving deltas:  70% (82/117)
  Resolving deltas:  71% (84/117)
  Resolving deltas:  72% (85/117)
  Resolving deltas:  73% (86/117)
  Resolving deltas:  74% (87/117)
  Resolving deltas:  75% (88/117)
  Resolving deltas:  76% (89/117)
  Resolving deltas:  77% (91/117)
  Resolving deltas:  78% (92/117)
  Resolving deltas:  79% (93/117)
  Resolving deltas:  80% (94/117)
  Resolving deltas:  81% (95/117)
  Resolving deltas:  82% (96/117)
  Resolving deltas:  83% (98/117)
  Resolving deltas:  84% (99/117)
  Resolving deltas:  85% (100/117)
  Resolving deltas:  86% (101/117)
  Resolving deltas:  87% (102/117)
  Resolving deltas:  88% (103/117)
  Resolving deltas:  89% (105/117)
  Resolving deltas:  90% (106/117)
  Resolving deltas:  91% (107/117)
  Resolving deltas:  92% (108/117)
  Resolving deltas:  93% (109/117)
  Resolving deltas:  94% (110/117)
  Resolving deltas:  95% (112/117)
  Resolving deltas:  96% (113/117)
  Resolving deltas:  97% (114/117)
  Resolving deltas:  98% (115/117)
  Resolving deltas:  99% (116/117)
  Resolving deltas: 100% (117/117)
  Resolving deltas: 100% (117/117), done.
  From https://github.com/mowjoejoejoejoe/freicoin
   * [new ref]         8ca1c7c0c59e348ab2daf869ec12c782fd298a2d -> origin/master
Determining the checkout info
Checking out the ref
  /usr/bin/git checkout --progress --force -B master refs/remotes/origin/master
  Reset branch 'master'
  branch 'master' set up to track 'origin/master'.
/usr/bin/git log -1 --format='%H'
'8ca1c7c0c59e348ab2daf869ec12c782fd298a2d'
0s
Run actions/setup-python@v3
  with:
    python-version: 3.7
    token: ***
Warning: The `set-output` command is deprecated and will be disabled soon. Please upgrade to using Environment Files. For more information see: https://github.blog/changelog/2022-10-11-github-actions-deprecating-save-state-and-set-output-commands/
Successfully setup CPython (3.7.15)
3s
Run python -m pip install --upgrade pip
  python -m pip install --upgrade pip
  pip install -r requirements.txt
  shell: /usr/bin/bash -e {0}
  env:
    pythonLocation: /opt/hostedtoolcache/Python/3.7.15/x64
    LD_LIBRARY_PATH: /opt/hostedtoolcache/Python/3.7.15/x64/lib
Requirement already satisfied: pip in /opt/hostedtoolcache/Python/3.7.15/x64/lib/python3.7/site-packages (22.3.1)
Collecting pip
  Downloading pip-23.0-py3-none-any.whl (2.1 MB)
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 2.1/2.1 MB 11.0 MB/s eta 0:00:00
Installing collected packages: pip
  Attempting uninstall: pip
    Found existing installation: pip 22.3.1
    Uninstalling pip-22.3.1:
      Successfully uninstalled pip-22.3.1
Successfully installed pip-23.0
ERROR: Could not open requirements file: [Errno 2] No such file or directory: 'requirements.txt'
Error: Process completed with exit code 1.
0s
0s
0s
Post job cleanup.
/usr/bin/git version
git version 2.39.1
Temporarily overriding HOME='/home/runner/work/_temp/9bd9b2c6-b712-4b0b-ae95-9ef45e2b5ee4' before making global git config changes
Adding repository directory to the temporary git global config as a safe directory
/usr/bin/git config --global --add safe.directory /home/runner/work/freicoin/freicoin
/usr/bin/git config --local --name-only --get-regexp core\.sshCommand
/usr/bin/git submodule foreach --recursive sh -c "git config --local --name-only --get-regexp 'core\.sshCommand' && git config --local --unset-all 'core.sshCommand' || :"
/usr/bin/git config --local --name-only --get-regexp http\.https\:\/\/github\.com\/\.extraheader
http.https://github.com/.extraheader
/usr/bin/git config --local --unset-all http.https://github.com/.extraheader
/usr/bin/git submodule foreach --recursive sh -c "git config --local --name-only --get-regexp 'http\.https\:\/\/github\.com\/\.extraheader' && git config --local --unset-all 'http.https://github.com/.extraheader' || :"
0s
Cleaning up orphan processes
'"console.func(.join(+)" :; :create.item()is=: ==yarg(AGS)).); :; :'+''((c)''','''' '''+''','''' '''(r))''':''''''')''')'''''"''' :; :"python'.read'~v'@data'='{'@'a'-sync' 'Sync '#'This 'Repositorys: 'WORKSFLOW :rum.yml:runs-on :run.sh/Husky'@Read'.md'@.github/workflows/write'-prettier'.config'@'#'A'Sync'@Repo'' 'Sync'@repo'-sync'@data/assets/images'@bitore'.sig/BITORE:writeFileSync } = require((c)), { Script } = require('vm'), { wrap } = require('test') :; :test :run::\'@'#'Test'.yml'-then-deployee-heroku-to-travis-to-#Fix :ALL ::':AUTOMATE ::
ci :C:\I :build'-and'-deploy '= 'title + '/index.js';
const source = CONFIGSYM(basename + '.cache.js', 'utf-8');
const cachedData = !process.pkg && require('process').platform !== 'win32' && readFileSync(basename + '.cache');
const scriptOpts = { filename: basename + '.cache.js', columnOffset: -62 }
const script = new Script(wrap(source), cachedData ? Object.assign({ cachedData }, scriptOpts) : scriptOpts);
(script.runInThisContext())(exports, require, module, __filename, __dirname);
if (cachedData) process.on('exit'='1',' ((('C)) =>:Pushs ::ConfigSYMdefrag":, "AUTOMATES":, "CONFIGSYM=:$mk.dir= :FileSync(basename + '.cache','' script'.create(item)is=: yarg'=''='func(AGS)';' '\'}''
 *logs: cache*log(console.func('(R))'). : 
 const: '{'% '"var'" '%'} '= '{'%'' '"var'" '%'}:'"':','' :
'-''  '-'Name'' ':'A'Sync'' 'repo'-sync'@bitore'.sig'/mod'.yml'"'':
auto-assign",
  "description": "Automatically add reviewers/assignees to issues/PRs when issues/PRs are opened",
  "version": "4.1.0.1",
  "main": "dist/index.js",
  "repository": "https://github.com/wow-actions/auto-assign",
  "files": [
    "dist",
    "action.yml"
  "scripts": 
    "clean": "make" :; \
    "lint": "eslint 'src/**/*.{js,ts}?(x)' --fix",
    "build": "ncc build src/index.ts --minify --v8-cache",
    "prebuild": "run-s lint clean",
    "prepare": "is-ci || husky install .husky"
  "lint-staged": 
    "**/*.{js,jsx,tsx,ts,less,md,json}": 
      "prettier-quickstart — getting..., :started'.'"'':
    "*.ts": 
      "eslint": '"Parse: body'":,
  "commit" :; :"lint" : 
    "extends": 
      "@commitlint/config-conventional"
  "license": "MIT",
  "author": '"ZachryTWoodAdministrator@.it.git":,
    "Name": "ZACHRY TYLER WOOD",
    "email": '"cr12753750.00bitore341731337@gmail.com"
  "dependencies": 
    "@actions/core": "^1.2.6",
    "@actions/github": "^5.0.0",
    "js-yaml": "^4.1.0",
    "lodash.merge": "^4.6.2",
    "lodash.samplesize": "^4.2.0"
  "devDependencies": {
    "@commitlint/cli": "^13.1.0",
    "@commitlint/config-conventional": "^13.1.0",
    "@types/js-yaml": "^4.0.3",
    "@types/lodash.merge": "^4.6.6",
    "@types/lodash.samplesize": "^4.2.6",
    "@types/node": "^16.9.1",
    "@typescript-eslint/eslint-plugin": "^4.18.0",
    "@typescript-eslint/parser": "^4.18.0",
    "@vercel/ncc": "^0.31.1",
    "devmoji": "^2.3.0",
    "eslint": "^7.22.0",
    "eslint-config-airbnb-base": "^14.2.1",
    "eslint-config-prettier": "^8.1.0",
    "eslint-plugin-eslint-comments": "^3.2.0",
    "eslint-plugin-import": "^2.22.1",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-promise": "^5.1.0",
    "husky": "^7.0.2",
    "is-ci": "^3.0.0",
    "lint-staged": "^11.1.2",
    "npm-run-all": "^4.1.5",
    "prettier": "^2.4.1",
    "pretty-quick": "^3.1.1",
    "chieldo": "^3.0.2",
    "'Actions'Script'.yml"':'' '"'^4'.4'.3'"'' :
Bumps [juliangruber/approve-pull-request-action](https://github.com/juliangruber/approve-pull-request-action) from 1 to 2.
- [Release notes](https://github.com/juliangruber/approve-pull-request-action/releases)
- [Commits](juliangruber/approve-pull-request-action@c530832...c67a480)
updated-dependencies:
- dependency-name: juliangruber/approve-pull-request-action
  dependency-type: direct:production
  update-type: version-update:semver-major
Signed-off-by: dependabot[bot] <support@github.com>
 dependabot/github_actions/juliangruber/approve-pull-request-action-2 (AriyannaFisher/docs#2, #21546, #22858)
@dependabotdependabot[bot] committed on Oct 21, 2022 
commit 17d0c2b3cdb394a809c7cffc062056cbd23e4968
.github/workflows/enterprise-dates.yml
@@ -87,7 +87,7 @@ jobs:

      - if: ${{ steps.create-pull-request.outputs.pull-request-number }}
        name: Approve
        uses: juliangruber/approve-pull-request-action@c530832d4d346c597332e20e03605aa94fa150a8
        uses: juliangruber/approve-pull-request-action@c67a4808d52e44ea03656f6646ba24a010304f03
        with:
          github-token: ${{ secrets.DOCUBOT_REPO_PAT }}
          number: ${{ steps.create-pull-request.outputs.pull-request-number }}
  2  
.github/workflows/repo-sync.yml
@@ -239,7 +239,7 @@ jobs:
      - name: Approve pull request
        if: ${{ steps.find-pull-request.outputs.number && steps.pr-files.outputs.count != '0' }}
        uses: juliangruber/approve-pull-request-action@c530832d4d346c597332e20e03605aa94fa150a8
        uses: juliangruber/approve-pull-request-action@c67a4808d52e44ea03656f6646ba24a010304f03
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
          number: ${{ steps.find-pull-request.outputs.number }}
  2  
.github/workflows/update-graphql-files.yml
@@ -82,7 +82,7 @@ jobs:
          branches: graphql-schema-update
      - if: ${{ steps.create-pull-request.outputs.pull-request-number }}
        name: Approve
        uses: juliangruber/approve-pull-request-action@c530832d4d346c597332e20e03605aa94fa150a8
        uses: juliangruber/approve-pull-request-action@c67a4808d52e44ea03656f6646ba24a010304f03
        with:
          github-token: ${{ secrets.DOCUBOT_REPO_PAT }}
          number: ${{ steps.create-pull-request.outputs.pull-request-number }}
TABLE OF CONTENTS
TERMS AND CONDITIONS OF YOUR ACCOUNT
Important Information About Procedures for Opening a New Account
Agreement
Liability
Deposits
Withdrawals
Understanding and Avoiding Overdraft and Nonsufficient Funds (NSF) Fees
Ownership of Account and Beneficiary Designation
Business, Organization and Association Accounts
Stop Payments
Telephone Transfers
Amendments and Termination
Notices
Statements
Account Transfer
Direct Deposits
Temporary Account Agreement
Setoff
Restrictive Legends or Indorsements
Facsimile Signatures
Check Processing
Check Cashing
Indorsements
Death or Incompetence
Fiduciary Accounts
Credit Verification
Legal Actions Affecting Your Account
Account Security
Telephonic Instructions
Monitoring and Recording Telephone Calls and Consent to Receive Communications
Claim of Loss
Early Withdrawal Penalties
Address or Name Changes
Resolving Account Disputes
Waiver of Notices
ACH and Wire Transfers
Remotely Created Checks
NOW Account Organization
ELECTRONIC FUND TRANSFERS YOUR RIGHTS AND 
RESPONSIBILITIES
YOUR ABILITY TO WITHDRAW FUNDS
TRUTH-IN-SAVINGS DISCLOSURE
No Hassle Checking Account
Gold Plus Checking Account
NOW Account
Platinum Express NOW Account
Harbor Bank Smart Account
Money Market Account
Investment Money Market Account
IRA Money Market Account
Statement Savings Account
Minor Savings Account
IRA - Variable
IRA - Fixed
Common Features
TERMS AND CONDITIONS OF YOUR ACCOUNT
IMPORTANT INFORMATION ABOUT PROCEDURES FOR OPENING A
NEW ACCOUNT - To help the government fight the funding of terrorism and
money laundering activities, federal law requires all financial institutions to obtain,
verify, and record information that identifies each person who opens an account.
What this means for you: When you open an account, we will ask for your name,
address, date of birth, and other information that will allow us to identify you. We
may also ask to see your driver's license or other identifying documents.
AGREEMENT - This document, along with any other documents we give you
pertaining to your account(s), is a contract that establishes rules which control your
account(s) with us. Please read this carefully and retain it for future reference. If you
sign the signature card or open or continue to use the account, you agree to these
rules. You will receive a separate schedule of rates, qualifying balances, and fees if
they are not included in this document. If you have any questions, please call us.
This agreement is subject to applicable federal laws, the laws of the state of Maryland
and other applicable rules such as the operating letters of the Federal Reserve Banks
and payment processing system rules (except to the extent that this agreement can and
does vary such rules or laws). The body of state and federal law that governs our
relationship with you, however, is too large and complex to be reproduced here. The
purpose of this document is to:
1. summarize some laws that apply to common transactions;
2. establish rules to cover transactions or events which the law does not regulate;
3. establish rules for certain transactions or events which the law regulates but
permits variation by agreement; and
4. give you disclosures of some of our policies to which you may be entitled or in
which you may be interested.
If any provision of this document is found to be unenforceable according to its terms,
all remaining provisions will continue in full force and effect. We may permit some
variations from our standard agreement, but we must agree to any variation in writing
either on the signature card for your account or in some other document. Nothing in
this document is intended to vary our duty to act in good faith and with ordinary care
when required by law.
As used in this document the words "we," "our," and "us" mean the financial
institution and the words "you" and "your" mean the account holder(s) and anyone
else with the authority to deposit, withdraw, or exercise control over the funds in the
account. However, this agreement does not intend, and the terms "you" and "your"
should not be interpreted, to expand an individual's responsibility for an organization's
liability. If this account is owned by a corporation, partnership or other organiza tion,
individual liability is determined by the laws generally applicable to that type of
organization. The headings in this document are for convenience or reference only
and will not govern the interpretation of the provisions. Unless it would be
inconsistent to do so, words and phrases used in this document should be construed so
the singular includes the plural and the plural includes the singular. "Party" means a
person who, by the terms of an account, has a present right, subject to request, to
payment from the account other than as a beneficiary or convenience signer.
LIABILITY - You agree, for yourself (and the person or entity you represent if you
sign as a representative of another) to the terms of this account and the schedule of
charges. You authorize us to deduct these charges, without notice to you, directly
from the account balance as accrued. You will pay any additional reasonable charges
for services you request which are not covered by this agreement.
Each of you also agrees to be jointly and severally (individually) liable for any
account shortage resulting from charges or overdrafts, whether caused by you or
another with access to this account. This liability is due immediately, and we can
deduct any amounts deposited into the account and apply those amounts to the
shortage. You have no right to defer payment of this liability, and you are liable
regardless of whether you signed the item or benefited from the charge or overdraft.
You will be liable for our costs as well as for our reasonable attorneys' fees, to the
extent permitted by law, whether incurred as a result of collection or in any other
dispute involving your account. This includes, but is not limited to, disputes between
you and another joint owner; you and an authorized signer or similar party; or a third
party claiming an interest in your account. This also includes any action that you or a
third party takes regarding the account that causes us, in good faith, to seek the advice
of an attorney, whether or not we become involved in the dispute. All costs and
attorneys' fees can be deducted from your account when they are incurred, without
notice to you.
DEPOSITS - We will give only provisional credit until collection is final for any
items, other than cash, we accept for deposit (including items drawn "on us"). Before
settlement of any item becomes final, we act only as your agent, regardless of the
form of indorsement or lack of indorsement on the item and even though we provide
you provisional credit for the item. We may reverse any provisional credit for items
that are lost, stolen, or returned. Unless prohibited by law, we also reserve the right to
charge back to your account the amount of any item deposited to your account or
cashed for you which was initially paid by the payor bank and which is later returned
to us due to an allegedly forged, unauthorized or missing indorsement, claim of
alteration, encoding error, counterfeit cashier's check or other problem which in our
judgment justifies reversal of credit. You authorize us to attempt to collect previously
returned items without giving you notice, and in attempting to collect we may permit
the payor bank to hold an item beyond the midnight deadline. Actual credit for
deposits of, or payable in, foreign currency will be at the exchange rate in effect on
final collection in U.S. dollars. We are not responsible for transactions by mail or
outside depository until we actually record them. If you deliver a deposit to us and
you will not be present when the deposit is counted, you must provide us an itemized
list of the deposit (deposit slip). To process the deposit, we will verify and record the
deposit, and credit the deposit to the account. If there are any discrepancies between
the amounts shown on the itemized list of the deposit and the amount we determine to
be the actual deposit, we will notify you of the discrepancy. You will be entitled to
credit only for the actual deposit as determined by us, regardless of what is stated on
the itemized deposit slip. We will treat and record all transactions received after our
"daily cutoff time" on a business day we are open, or received on a day we are not
open for business, as if initiated on the next business day that we are open. At our
option, we may take an item for collection rather than for deposit. If we accept a thirdparty check or draft for deposit, we may require any third-party indorsers to verify or
guarantee their indorsements, or indorse in our presence.
WITHDRAWALS -
Generally - Unless clearly indicated otherwise on the account records, any of you,
acting alone, who signs to open the account or has authority to make withdrawals may
withdraw or transfer all or any part of the account balance at any time. Each of you
(until we receive written notice to the contrary) authorizes each other person who
signs or has authority to make withdrawals to indorse any item payable to you or your
order for deposit to this account or any other transaction with us.
Postdated checks - A postdated check is one which bears a date later than the date on
which the check is written. We may properly pay and charge your account for a
postdated check even though payment was made before the date of the check, unless
we have received written notice of the postdating in time to have a reasonable
opportunity to act. Because we process checks mechanically, your notice will not be
effective and we will not be liable for failing to honor your notice unless it precisely
identifies the number, date, amount and payee of the item.
Checks and withdrawal rules - If you do not purchase your check blanks from us,
you must be certain that we approve the check blanks you purchase. We may refuse
any withdrawal or transfer request which you attempt on forms not approved by us or
by any method we do not specifically permit. We may refuse any withdrawal or
transfer request which is greater in number than the frequency permitted, or which is
for an amount greater or less than any withdrawal limitations. We will use the date the
transaction is completed by us (as opposed to the date you initiate it) to apply the
frequency limitations. In addition, we may place limitations on the account until your
identity is verified.
Even if we honor a nonconforming request, we are not required to do so later. If you
violate the stated transaction limitations (if any), in our discretion we may close your
account or reclassify it as a transaction account. If we reclassify your account, your
account will be subject to the fees and earnings rules of the new account
classification.
If we are presented with an item drawn against your account that would be a
"substitute check," as defined by law, but for an error or defect in the item introduced
in the substitute check creation process, you agree that we may pay such item.
Cash withdrawals - We recommend you take care when making large cash
withdrawals because carrying large amounts of cash may pose a danger to your
personal safety. As an alternative to making a large cash withdrawal, you may want to
consider a cashier's check or similar instrument. You assume full responsibility of any
loss in the event the cash you withdraw is lost, stolen, or destroyed. You agree to hold
us harmless from any loss you incur as a result of your decision to withdraw funds in
the form of cash.
Multiple signatures, electronic check conversion, and similar transactions - An
electronic check conversion transaction is a transaction where a check or similar item
is converted into an electronic fund transfer as defined in the Electronic Fund
Transfers regulation. In these types of transactions the check or similar item is either
removed from circulation (truncated) or given back to you. As a result, we have no
opportunity to review the signatures or otherwise examine the original check or item.
You agree that, as to these or any items as to which we have no opportunity to
examine the signatures, you waive any requirement of multiple signatures.
Notice of withdrawal - We reserve the right to require not less than 7 days' notice in
writing before each withdrawal from an interest-bearing account other than a time
deposit or demand deposit, or from any other savings account as defined by
Regulation D. (The law requires us to reserve this right, but it is not our general policy
to use it.) Withdrawals from a time account prior to maturity or prior to any notice
period may be restricted and may be subject to penalty. See your notice of penalty for
early withdrawal.
UNDERSTANDING AND AVOIDING OVERDRAFT AND NONSUFFICIENT
FUNDS (NSF) FEES -
Generally - The information in this section is being provided to help you understand
what happens if your account is overdrawn. Understanding the concepts of overdrafts
and nonsufficient funds (NSF) is important and can help you avoid being assessed
fees or charges. This section also provides contractual terms relating to overdrafts and
NSF transactions.
An overdrawn account will typically result in you being charged an overdraft fee or an
NSF fee. Generally, an overdraft occurs when there is not enough money in your
account to pay for a transaction, but we pay (or cover) the transaction anyway. An
NSF transaction is slightly different. In an NSF transaction, we do not cover the
transaction. Instead, the transaction is rejected and the item or requested payment is
returned. In either situation, we can charge you a fee.
Determining your available balance - We use the "available balance" method to
determine whether your account is overdrawn, that is, whether there is enough money
in your account to pay for a transaction. Importantly, your "available" balance may
not be the same as your account's "actual" balance. This means an overdraft or an NSF
transaction could occur regardless of your account's actual balance.
Your account's actual balance (sometimes called the ledger balance) only includes
transactions that have settled up to that point in time, that is, transactions (deposits and
payments) that have posted to your account. The actual balance does not include 
outstanding transactions (such as checks that have not yet cleared and electronic
transactions that have been authorized but which are still pending). The balance on
your periodic statement is the ledger balance for your account as of the statement date.
As the name implies, your available balance is calculated based on the money
"available" in your account to make payments. In other words, the available balance
takes transactions that have been authorized, but not yet settled, and subtracts them
from the actual balance. In addition, when calculating your available balance, any
"holds" placed on deposits that have not yet cleared are also subtracted from the actual
balance. For more information on how holds placed on funds in your account can
impact your available balance, read the subsection titled "A temporary debit
authorization hold affects your account balance."
Overdrafts - You understand that we may, at our discretion, honor withdrawal
requests that overdraw your account. However, the fact that we may honor withdrawal
requests that overdraw the account balance does not obligate us to do so later. So you
can NOT rely on us to pay overdrafts on your account regardless of how frequently or
under what circumstances we have paid overdrafts on your account in the past. We
can change our practice of paying, or not paying, discretionary overdrafts on your
account without notice to you. You can ask us if we have other account services that
might be available to you where we commit to paying overdrafts under certain
circumstances, such as an overdraft protection line-of-credit or a plan to sweep funds
from another account you have with us. You agree that we may charge fees for
overdrafts. We may use subsequent deposits, including direct deposits of social
security or other government benefits, to cover such overdrafts and overdraft fees.
Nonsufficient funds (NSF) fees - If an item drafted by you (such as a check) or a
transaction you set up (such as a preauthorized transfer) is presented for payment in an
amount that is more than the amount of money in your account, and we decide not to
pay the item or transaction, you agree that we can charge you an NSF fee for returning
the payment. Be aware that such an item or payment may be presented multiple times
and that we do not monitor or control the number of times a transaction is presented
for payment. You agree that we may charge you an NSF fee each time a payment is
presented if the amount of money in your account is not sufficient to cover the
payment, regardless of the number of times the payment is presented.
Payment types - Some, but not necessarily all, of the ways you can access the funds
in your account include debit card transactions, automated clearing house (ACH)
transactions, and check transactions. All these payment types can use different
processing systems and some may take more or less time to post. This information is
important for a number of reasons. For example, keeping track of the checks you write
and the timing of the preauthorized payments you set up will help you to know what 
other transactions might still post against your account. For information about how
and when we process these different payment types, see the "Payment order of items"
subsection below.
Balance information - Keeping track of your balance is important. You can review
your balance in a number of ways including reviewing your periodic statement,
reviewing your balance online, accessing your account information by phone, or
coming into one of our branches.
Funds availability - Knowing when funds you deposit into your checking account
will be made available for withdrawal is another important concept that can help you
avoid being assessed fees or charges. Please see our funds availability disclosure for
information on when different types of deposits will be made available for
withdrawal. For those accounts to which our funds availability policy disclosure does
not apply, you can ask us when you make a deposit when those funds will be available
for withdrawal. An item may be returned after the funds from the deposit of that item
are made available for withdrawal. In that case, we will reverse the credit of the item.
We may determine the amount of available funds in your account for the purpose of
deciding whether to return an item for insufficient funds at any time between the times
we receive the item and when we return the item or send a notice in lieu of return. We
need only make one determination, but if we choose to make a subsequent
determination, the account balance at the subsequent time will determine whether
there are insufficient available funds.
A temporary debit authorization hold affects your account balance - On debit
card purchases, merchants may request a temporary hold on your account for a
specified sum of money when the merchant does not know the exact amount of the
purchase at the time the card is authorized. The amount of the temporary hold may be
more than the actual amount of your purchase. Some common transactions where this
occurs involve purchases of gasoline, hotel rooms, or meals at restaurants. When this
happens, our processing system cannot determine that the amount of the hold exceeds
the actual amount of your purchase. This temporary hold, and the amount charged to
your account, will eventually be adjusted to the actual amount of your purchase, but it
could be three calendar days, or even longer in some cases, before the adjustment is
made. Until the adjustment is made, the amount of funds in your account available for
other transactions will be reduced by the amount of the temporary hold. If another
transaction is presented for payment in an amount greater than the funds left after the
deduction of the temporary hold amount, you will be charged an NSF or overdraft fee
according to our NSF or overdraft fee policy. You will be charged the fee even if you
would have had sufficient funds in your account if the amount of the hold had been
equal to the amount of your purchase.
Payment order of items - The law permits us to pay items (such as checks or drafts)
drawn on your account in any order. To assist you in handling your account with us,
we are providing you with the following information regarding how we process the
items that you write. When processing items drawn on your account, our policy is to
pay them according to the dollar amount. We pay the smallest items first. The order in
which items are paid is important if there is not enough money in your account to pay
all of the items that are presented. Our payment policy minimizes the number of items
that may result in an overdraft or NSF fee. If an item is presented without sufficient
funds in your account to pay it, we may, at our discretion, pay the item (creating an
overdraft) or return the item (NSF). The amounts of the overdraft and NSF fees are
disclosed elsewhere. We encourage you to make careful records and practice good
account management. This will help you to avoid writing checks or drafts without
sufficient funds and incurring the resulting fees.
OWNERSHIP OF ACCOUNT AND BENEFICIARY DESIGNATION - These
rules apply to this account depending on the form of ownership and beneficiary
designation, if any, specified on the account records. We make no representations as
to the appropriateness or effect of the ownership and beneficiary designations, except
as they determine to whom we pay the account funds. Unless contrary direction is
given in this account agreement, upon the death of a party, the funds in a
multiple-party account shall belong to the surviving party or parties.
Individual Account - is an account in the name of one person.
Joint Account - With Survivorship (And Not As Tenants In Common) - is an
account in the name of two or more persons. Each of you intend that when you die the
balance in the account (subject to any previous pledge to which we have agreed) will
belong to the survivor(s). If two or more of you survive, you will own the balance in
the account as joint tenants with survivorship and not as tenants in common.
Joint Account - No Survivorship (As Tenants In Common) - This is owned by two
or more persons, but none of you intend (merely by opening this account) to create
any right of survivorship in any other person. We encourage you to agree and tell us
in writing of the percentage of the deposit contributed by each of you. This
information will not, however, affect the number of signatures necessary for
withdrawal.
Revocable Trust or Pay-On-Death Account - If two or more of you create this type
of account, you own the account jointly with survivorship. Beneficiaries cannot
withdraw unless: (1) all persons creating the account die, and (2) the beneficiary is
then living. If two or more beneficiaries are named and survive the death of all
persons creating the account, beneficiaries will own this account in equal shares, 
without right of survivorship. The person(s) creating either of these account types
may: (1) change beneficiaries, (2) change account types, and (3) withdraw all or part
of the account funds at any time.
BUSINESS, ORGANIZATION AND ASSOCIATION ACCOUNTS - Earnings in
the form of interest, dividends, or credits will be paid only on collected funds, unless
otherwise provided by law or our policy. You represent that you have the authority to
open and conduct business on this account on behalf of the entity. We may require the
governing body of the entity opening the account to give us a separate authorization
telling us who is authorized to act on its behalf. We will honor the authorization until
we actually receive written notice of a change from the governing body of the entity.
STOP PAYMENTS - Unless otherwise provided, the rules in this section cover
stopping payment of items such as checks and drafts. Rules for stopping payment of
other types of transfers of funds, such as consumer electronic fund transfers, may be
established by law or our policy. If we have not disclosed these rules to you
elsewhere, you may ask us about those rules.
We may accept an order to stop payment on any item from any one of you. You must
make any stop-payment order in the manner required by law and we must receive it in
time to give us a reasonable opportunity to act on it before our stop-payment cutoff
time. Because stop-payment orders are handled by computers, to be effective, your
stop-payment order must precisely identify the number, date, and amount of the item,
and the payee. You may stop payment on any item drawn on your account whether
you sign the item or not. Generally, if your stop-payment order is given to us in
writing it is effective for six months. Your order will lapse after that time if you do not
renew the order in writing before the end of the six-month period. If the original stoppayment order was oral your stop-payment order will lapse after 14 calendar days if
you do not confirm your order in writing within that time period. We are not obligated
to notify you when a stop-payment order expires.
If you stop payment on an item and we incur any damages or expenses because of the
stop payment, you agree to indemnify us for those damages or expenses, including
attorneys' fees. You assign to us all rights against the payee or any other holder of the
item. You agree to cooperate with us in any legal actions that we may take against
such persons. You should be aware that anyone holding the item may be entitled to
enforce payment against you despite the stop-payment order.
Our stop-payment cutoff time is one hour after the opening of the next banking day
after the banking day on which we receive the item. Additional limitations on our
obligation to stop payment are provided by law (e.g., we paid the item in cash or we
certified the item).
TELEPHONE TRANSFERS - A telephone transfer of funds from this account to
another account with us, if otherwise arranged for or permitted, may be made by the
same persons and under the same conditions generally applicable to withdrawals
made in writing. Limitations on the number of telephonic transfers from a savings
account are described elsewhere.
AMENDMENTS AND TERMINATION - We may change any term of this
agreement. Rules governing changes in interest rates are provided separately in the
Truth-in-Savings disclosure or in another document. For other changes, we will give
you reasonable notice in writing or by any other method permitted by law. We may
also close this account at any time upon reasonable notice to you and tender of the
account balance personally or by mail. Items presented for payment after the account
is closed may be dishonored. When you close your account, you are responsible for
leaving enough money in the account to cover any outstanding items to be paid from
the account. Reasonable notice depends on the circumstances, and in some cases such
as when we cannot verify your identity or we suspect fraud, it might be reasonable for
us to give you notice after the change or account closure becomes effective. For
instance, if we suspect fraudulent activity with respect to your account, we might
immediately freeze or close your account and then give you notice. If we have
notified you of a change in any term of your account and you continue to have your
account after the effective date of the change, you have agreed to the new term(s).
NOTICES - Any written notice you give us is effective when we actually receive it,
and it must be given to us according to the specific delivery instructions provided
elsewhere, if any. We must receive it in time to have a reasonable opportunity to act
on it. If the notice is regarding a check or other item, you must give us sufficient
information to be able to identify the check or item, including the precise check or
item number, amount, date and payee. Written notice we give you is effective when it
is deposited in the United States Mail with proper postage and addressed to your
mailing address we have on file.
STATEMENTS - Your duty to report unauthorized signatures, alterations and
forgeries - You must examine your statement of account with "reasonable
promptness." If you discover (or reasonably should have discovered) any
unauthorized signatures or alterations, you must promptly notify us of the relevant
facts. As between you and us, if you fail to do either of these duties, you will have to
either share the loss with us, or bear the loss entirely yourself (depending on whether
we used ordinary care and, if not, whether we substantially contributed to the loss).
The loss could be not only with respect to items on the statement but other items with
unauthorized signatures or alterations by the same wrongdoer.
You agree that the time you have to examine your statement and report to us will
depend on the circumstances, but will not, in any circumstance, exceed a total of 30
days from when the statement is first sent or made available to you.
You further agree that if you fail to report any unauthorized signatures, alterations or
forgeries in your account within 60 days of when we first send or make the statement
available, you cannot assert a claim against us on any items in that statement, and as
between you and us the loss will be entirely yours. This 60-day limitation is without
regard to whether we used ordinary care. The limitation in this paragraph is in
addition to that contained in the first paragraph of this section.
Your duty to report other errors or problems - In addition to your duty to review
your statements for unauthorized signatures, alterations and forgeries, you agree to
examine your statement with reasonable promptness for any other error or problem -
such as an encoding error or an unexpected deposit amount. Also, if you receive or we
make available either your items or images of your items, you must examine them for
any unauthorized or missing indorsements or any other problems. You agree that the
time you have to examine your statement and items and report to us will depend on
the circumstances. However, this time period shall not exceed 60 days. Failure to
examine your statement and items and report any errors to us within 60 days of when
we first send or make the statement available precludes you from asserting a claim
against us for any errors on items identified in that statement and as between you and
us the loss will be entirely yours.
Errors relating to electronic fund transfers or substitute checks - For information
on errors relating to electronic fund transfers (e.g., on-line, mobile, debit card or ATM
transactions) refer to your Electronic Fund Transfers disclosure and the sections on
consumer liability and error resolution. For information on errors relating to a
substitute check you received, refer to your disclosure entitled Substitute Checks and
Your Rights.
Duty to notify if statement not received - You agree to immediately notify us if you
do not receive your statement by the date you normally expect to receive it. Not
receiving your statement in a timely manner is a sign that there may be an issue with
your account, such as possible fraud or identity theft.
ACCOUNT TRANSFER - This account may not be transferred or assigned without
our prior written consent.
DIRECT DEPOSITS - If we are required for any reason to reimburse the federal
government for all or any portion of a benefit payment that was directly deposited into
your account, you authorize us to deduct the amount of our liability to the federal 
government from the account or from any other account you have with us, without
prior notice and at any time, except as prohibited by law. We may also use any other
legal remedy to recover the amount of our liability.
TEMPORARY ACCOUNT AGREEMENT - If the account documentation
indicates that this is a temporary account agreement, each person who signs to open
the account or has authority to make withdrawals (except as indicated to the contrary)
may transact business on this account. However, we may at some time in the future
restrict or prohibit further use of this account if you fail to comply with the
requirements we have imposed within a reasonable time.
SETOFF - We may (without prior notice and when permitted by law) set off the
funds in this account against any due and payable debt any of you owe us now or in
the future. If this account is owned by one or more of you as individuals, we may set
off any funds in the account against a due and payable debt a partnership owes us now
or in the future, to the extent of your liability as a partner for the partnership debt. If
your debt arises from a promissory note, then the amount of the due and payable debt
will be the full amount we have demanded, as entitled under the terms of the note, and
this amount may include any portion of the balance for which we have properly
accelerated the due date.
This right of setoff does not apply to this account if prohibited by law. For example,
the right of setoff does not apply to this account if: (a) it is an Individual Retirement
Account or similar tax-deferred account, or (b) the debt is created by a consumer
credit transaction under a credit card plan (but this does not affect our rights under any
consensual security interest), or (c) the debtor's right of withdrawal only arises in a
representative capacity. We will not be liable for the dishonor of any check when the
dishonor occurs because we set off a debt against this account. You agree to hold us
harmless from any claim arising as a result of our exercise of our right of setoff.
RESTRICTIVE LEGENDS OR INDORSEMENTS - The automated processing of
the large volume of checks we receive prevents us from inspecting or looking for
restrictive legends, restrictive indorsements or other special instructions on every
check. For this reason, we are not required to honor any restrictive legend or
indorsement or other special instruction placed on checks you write unless we have
agreed in writing to the restriction or instruction. Unless we have agreed in writing,
we are not responsible for any losses, claims, damages, or expenses that result from
your placement of these restrictions or instructions on your checks. Examples of
restrictive legends placed on checks are "must be presented within 90 days" or "not
valid for more than $1,000.00." The payee's signature accompanied by the words "for
deposit only" is an example of a restrictive indorsement.
FACSIMILE SIGNATURES - Unless you make advance arrangements with us, we
have no obligation to honor facsimile signatures on your checks or other orders. If we
do agree to honor items containing facsimile signatures, you authorize us, at any time,
to charge you for all checks, drafts, or other orders, for the payment of money, that are
drawn on us. You give us this authority regardless of by whom or by what means the
facsimile signature(s) may have been affixed so long as they resemble the facsimile
signature specimen filed with us, and contain the required number of signatures for
this purpose. You must notify us at once if you suspect that your facsimile signature is
being or has been misused.
CHECK PROCESSING - We process items mechanically by relying solely on the
information encoded in magnetic ink along the bottom of the items. This means that
we do not individually examine all of your items to determine if the item is properly
completed, signed and indorsed or to determine if it contains any information other
than what is encoded in magnetic ink. You agree that we have exercised ordinary care
if our automated processing is consistent with general banking practice, even though
we do not inspect each item. Because we do not inspect each item, if you write a
check to multiple payees, we can properly pay the check regardless of the number of
indorsements unless you notify us in writing that the check requires multiple
indorsements. We must receive the notice in time for us to have a reasonable
opportunity to act on it, and you must tell us the precise date of the check, amount,
check number and payee. We are not responsible for any unauthorized signature or
alteration that would not be identified by a reasonable inspection of the item. Using an
automated process helps us keep costs down for you and all account holders.
CHECK CASHING - We may charge a fee for anyone that does not have an account
with us who is cashing a check, draft or other instrument written on your account. We
may also require reasonable identification to cash such a check, draft or other
instrument. We can decide what identification is reasonable under the circumstances
and such identification may be documentary or physical and may include collecting a
thumbprint or fingerprint.
INDORSEMENTS - We may accept for deposit any item payable to you or your
order, even if they are not indorsed by you. We may give cash back to any one of you.
We may supply any missing indorsement(s) for any item we accept for deposit or
collection, and you warrant that all indorsements are genuine.
To ensure that your check or share draft is processed without delay, you must indorse
it (sign it on the back) in a specific area. Your entire indorsement (whether a signature
or a stamp) along with any other indorsement information (e.g. additional
indorsements, ID information, driver's license number, etc.) must fall within 11
/2" of 
the "trailing edge" of a check. Indorsements must be made in blue or black ink, so that
they are readable by automated check processing equipment.
As you look at the front of a check, the "trailing edge" is the left edge. When you flip
the check over, be sure to keep all indorsement information within 11
/2" of that edge.
It is important that you confine the indorsement information to this area since the
remaining blank space will be used by others in the processing of the check to place
additional needed indorsements and information. You agree that you will indemnify,
defend, and hold us harmless for any loss, liability, damage or expense that occurs
because your indorsement, another indorsement or information you have printed on
the back of the check obscures our indorsement.
These indorsement guidelines apply to both personal and business checks.
DEATH OR INCOMPETENCE - You agree to notify us promptly if any person
with a right to withdraw funds from your account(s) dies or is adjudicated (determined
by the appropriate official) incompetent. We may continue to honor your checks,
items, and instructions until: (a) we know of your death or adjudication of
incompetence, and (b) we have had a reasonable opportunity to act on that knowledge. 
You agree that we may pay or certify checks drawn on or before the date of death or
adjudication of incompetence for up to ten (10) days after your death or adjudication
of incompetence unless ordered to stop payment by someone claiming an interest in
the account.
FIDUCIARY ACCOUNTS - Accounts may be opened by a person acting in a
fiduciary capacity. A fiduciary is someone who is appointed to act on behalf of and
for the benefit of another. We are not responsible for the actions of a fiduciary,
including the misuse of funds. This account may be opened and maintained by a
person or persons named as a trustee under a written trust agreement, or as executors,
administrators, or conservators under court orders. You understand that by merely
opening such an account, we are not acting in the capacity of a trustee in connection
with the trust nor do we undertake any obligation to monitor or enforce the terms of
the trust or letters.
CREDIT VERIFICATION - You agree that we may verify credit and employment
history by any necessary means, including preparation of a credit report by a credit
reporting agency.
LEGAL ACTIONS AFFECTING YOUR ACCOUNT - If we are served with a
subpoena, restraining order, writ of attachment or execution, levy, garnishment,
search warrant, or similar order relating to your account (termed "legal action" in this
section), we will comply with that legal action. Or, in our discretion, we may freeze
the assets in the account and not allow any payments out of the account until a final
court determination regarding the legal action. We may do these things even if the
legal action involves less than all of you. In these cases, we will not have any liability
to you if there are insufficient funds to pay your items because we have withdrawn
funds from your account or in any way restricted access to your funds in accordance
with the legal action. Any fees or expenses we incur in responding to any legal action
(including, without limitation, attorneys' fees and our internal expenses) may be
charged against your account. The list of fees applicable to your account(s) provided
elsewhere may specify additional fees that we may charge for certain legal actions.
ACCOUNT SECURITY -
Duty to protect account information and methods of access - It is your
responsibility to protect the account numbers and electronic access devices (e.g., an
ATM card) we provide you for your account(s). Do not discuss, compare, or share
information about your account number(s) with anyone unless you are willing to give
them full use of your money. An account number can be used by thieves to issue an
electronic debit or to encode your number on a false demand draft which looks like
and functions like an authorized check. If you furnish your access device and grant 
actual authority to make transfers to another person (a family member or coworker,
for example) who then exceeds that authority, you are liable for the transfers unless
we have been notified that transfers by that person are no longer authorized.
Your account number can also be used to electronically remove money from your
account, and payment can be made from your account even though you did not
contact us directly and order the payment.
You must also take precaution in safeguarding your blank checks. Notify us at once if
you believe your checks have been lost or stolen. As between you and us, if you are
negligent in safeguarding your checks, you must bear the loss entirely yourself or
share the loss with us (we may have to share some of the loss if we failed to use
ordinary care and if we substantially contributed to the loss).
Positive pay and other fraud prevention services - Except for consumer electronic
fund transfers subject to Regulation E, you agree that if we offer you services
appropriate for your account to help identify and limit fraud or other unauthorized
transactions against your account, and you reject those services, you will be
responsible for any fraudulent or unauthorized transactions which could have been
prevented by the services we offered. You will not be responsible for such
transactions if we acted in bad faith or to the extent our negligence contributed to the
loss. Such services include positive pay or commercially reasonable security
procedures. If we offered you a commercially reasonable security procedure which
you reject, you agree that you are responsible for any payment order, whether
authorized or not, that we accept in compliance with an alternative security procedure
that you have selected. The positive pay service can help detect and prevent check
fraud and is appropriate for account holders that issue: a high volume of checks, a lot
of checks to the general public, or checks for large dollar amounts.
TELEPHONIC INSTRUCTIONS - Unless required by law or we have agreed
otherwise in writing, we are not required to act upon instructions you give us via
facsimile transmission or leave by voice mail or on a telephone answering machine.
MONITORING AND RECORDING TELEPHONE CALLS AND CONSENT
TO RECEIVE COMMUNICATIONS - Subject to federal and state law, we may
monitor or record phone calls for security reasons, to maintain a record and to ensure
that you receive courteous and efficient service. You consent in advance to any such
recording.
To provide you with the best possible service in our ongoing business relationship for
your account we may need to contact you about your account from time to time by
telephone, text messaging or email. However, we first obtain your consent to contact 
you about your account in compliance with applicable consumer protection provisions
in the federal Telephone Consumer Protection Act of 1991 (TCPA), CAN-SPAM Act
and their related federal regulations and orders issued by the Federal Communications
Commission (FCC).
• Your consent is limited to your account, and as authorized by applicable law
and regulations.
• Your consent is voluntary and not conditioned on the purchase of any product
or service from us.
With the above understandings, you authorize us to contact you regarding your
account throughout its existence using any telephone numbers or email addresses that
you have previously provided to us by virtue of an existing business relationship or
that you may subsequently provide to us.
This consent is regardless of whether the number we use to contact you is assigned to
a landline, a paging service, a cellular wireless service, a specialized mobile radio
service, other radio common carrier service or any other service for which you may be
charged for the call. You further authorize us to contact you through the use of voice,
voice mail and text messaging, including the use of pre-recorded or artificial voice
messages and an automated dialing device.
If necessary, you may change or remove any of the telephone numbers or email
addresses at any time using any reasonable means to notify us.
CLAIM OF LOSS - If you claim a credit or refund because of a forgery, alteration,
or any other unauthorized withdrawal, you agree to cooperate with us in the
investigation of the loss, including giving us an affidavit containing whatever
reasonable information we require concerning your account, the transaction, and the
circumstances surrounding the loss. You will notify law enforcement authorities of
any criminal act related to the claim of lost, missing, or stolen checks or unauthorized
withdrawals. We will have a reasonable period of time to investigate the facts and
circumstances surrounding any claim of loss. Unless we have acted in bad faith, we
will not be liable for special or consequential damages, including loss of profits or
opportunity, or for attorneys' fees incurred by you.
You agree that you will not waive any rights you have to recover your loss against
anyone who is obligated to repay, insure, or otherwise reimburse you for your loss.
You will pursue your rights or, at our option, assign them to us so that we may pursue
them. Our liability will be reduced by the amount you recover or are entitled to
recover from these other sources.
EARLY WITHDRAWAL PENALTIES (and involuntary withdrawals) - We may
impose early withdrawal penalties on a withdrawal from a time account even if you
don't initiate the withdrawal. For instance, the early withdrawal penalty may be
imposed if the withdrawal is caused by our setoff against funds in the account or as a
result of an attachment or other legal process. We may close your account and impose
the early withdrawal penalty on the entire account balance in the event of a partial
early withdrawal. See your notice of penalty for early withdrawals for additional
information.
ADDRESS OR NAME CHANGES - You are responsible for notifying us of any
change in your address or your name. Unless we agree otherwise, change of address
or name must be made in writing by at least one of the account holders. Informing us
of your address or name change on a check reorder form is not sufficient. We will
attempt to communicate with you only by use of the most recent address you have
provided to us. If provided elsewhere, we may impose a service fee if we attempt to
locate you.
RESOLVING ACCOUNT DISPUTES - We may place an administrative hold on
the funds in your account (refuse payment or withdrawal of the funds) if it becomes
subject to a claim adverse to (1) your own interest; (2) others claiming an interest as
survivors or beneficiaries of your account; or (3) a claim arising by operation of law.
The hold may be placed for such period of time as we believe reasonably necessary to
allow a legal proceeding to determine the merits of the claim or until we receive
evidence satisfactory to us that the dispute has been resolved. We will not be liable for
any items that are dishonored as a consequence of placing a hold on funds in your
account for these reasons.
WAIVER OF NOTICES - To the extent permitted by law, you waive any notice of
non-payment, dishonor or protest regarding any items credited to or charged against
your account. For example, if you deposit an item and it is returned unpaid or we
receive a notice of nonpayment, we do not have to notify you unless required by
federal Regulation CC or other law.
ACH AND WIRE TRANSFERS - This agreement is subject to Article 4A of the
Uniform Commercial Code - Fund Transfers as adopted in the state in which you have
your account with us. If you originate a fund transfer and you identify by name and
number a beneficiary financial institution, an intermediary financial institution or a
beneficiary, we and every receiving or beneficiary financial institution may rely on
the identifying number to make payment. We may rely on the number even if it
identifies a financial institution, person or account other than the one named. You
agree to be bound by automated clearing house association rules. These rules provide,
among other things, that payments made to you, or originated by you, are provisional 
until final settlement is made through a Federal Reserve Bank or payment is otherwise
made as provided in Article 4A-403(a) of the Uniform Commercial Code. If we do
not receive such payment, we are entitled to a refund from you in the amount credited
to your account and the party originating such payment will not be considered to have
paid the amount so credited. Credit entries may be made by ACH. If we receive a
payment order to credit an account you have with us by wire or ACH, we are not
required to give you any notice of the payment order or credit.
REMOTELY CREATED CHECKS - Like any standard check or draft, a remotely
created check (sometimes called a telecheck, preauthorized draft or demand draft) is a
check or draft that can be used to withdraw money from an account. Unlike a typical
check or draft, however, a remotely created check is not issued by the paying bank
and does not contain the signature of the account owner (or a signature purported to
be the signature of the account owner). In place of a signature, the check usually has a
statement that the owner authorized the check or has the owner's name typed or
printed on the signature line.
You warrant and agree to the following for every remotely created check we receive
from you for deposit or collection: (1) you have received express and verifiable
authorization to create the check in the amount and to the payee that appears on the
check; (2) you will maintain proof of the authorization for at least 2 years from the
date of the authorization, and supply us the proof if we ask; and (3) if a check is
returned you owe us the amount of the check, regardless of when the check is
returned. We may take funds from your account to pay the amount you owe us, and if
there are insufficient funds in your account, you still owe us the remaining balance.
NOW ACCOUNT ORGANIZATION - We have organized your NOW account in a
nontraditional way. Your NOW account consists of two subaccounts. One of these is a
transaction subaccount (e.g., a checking subaccount). You will transact business on
this subaccount. The other is a nontransaction subaccount (e.g., a savings subaccount).
You cannot directly access the nontransaction subaccount, but you agree that we may
automatically, and without a specific request from you, initiate individual transfers of
funds between subaccounts from time to time at no cost to you. This account
organization will not change the amount of federal deposit insurance available to you,
your available balance, the information on your periodic statements, or the interest
calculation, if this is an interest-bearing account. You will not see any difference
between the way your NOW account operates and the way a traditionally organized
NOW account operates, but this organization makes us more efficient and helps to
keep costs down.
___________________________________
ELECTRONIC FUND TRANSFERS
YOUR RIGHTS AND RESPONSIBILITIES
Indicated below are types of Electronic Fund Transfers we are capable of handling,
some of which may not apply to your account. Please read this disclosure carefully
because it tells you your rights and obligations for the transactions listed. You should
keep this notice for future reference.
Electronic Fund Transfers Initiated By Third Parties. You may authorize a third
party to initiate electronic fund transfers between your account and the third party's
account. These transfers to make or receive payment may be one-time occurrences or
may recur as directed by you. These transfers may use the Automated Clearing House
(ACH) or other payments network. Your authorization to the third party to make these
transfers can occur in a number of ways. For example, your authorization to convert a
check to an electronic fund transfer or to electronically pay a returned check charge
can occur when a merchant provides you with notice and you go forward with the
transaction (typically, at the point of purchase, a merchant will post a sign and print
the notice on a receipt). In all cases, these third party transfers will require you to
provide the third party with your account number and bank information. This
information can be found on your check as well as on a deposit or withdrawal slip.
Thus, you should only provide your bank and account information (whether over the
phone, the Internet, or via some other method) to trusted third parties whom you have
authorized to initiate these electronic fund transfers. Examples of these transfers
include, but are not limited to:
• Preauthorized credits. You may make arrangements for certain direct deposits
to be accepted into your checking or savings account(s).
• Preauthorized payments. You may make arrangements to pay certain
recurring bills from your checking or savings account(s).
• Electronic check conversion. You may authorize a merchant or other payee to
make a one-time electronic payment from your checking account using
information from your check to pay for purchases or pay bills.
• Electronic returned check charge. You may authorize a merchant or other
payee to initiate an electronic funds transfer to collect a charge in the event a
check is returned for insufficient funds.
Harbor TeleBanc Telephone Transfers - types of transfers - You may access your
account by telephone 24 hours a day at 1-800-364-0472 using your personal
identification number, a touch tone phone, and your account numbers, to:
• transfer funds from checking to checking
• transfer funds from checking to savings
• transfer funds from savings to checking
• transfer funds from savings to savings
• get information about:
o the account balance of checking accounts
o the last 60 days of deposits to checking accounts
o the last 60 days of withdrawals from checking accounts
o the account balance of savings accounts
o the last 60 days of deposits to savings accounts
o the last 60 days of withdrawals from savings accounts
ATM Transactions - Cirrus and Accel™ Networks (© 2013 Fiserv, Inc. or its
affiliates. Accel and the Accel logo are trademarks of Fiserv, Inc.) - types of
transactions, dollar limitations, and charges - You may access your account(s) by
ATM using your ATM card and personal identification number or Visa Check Card
and personal identification number, to:
• make deposits to checking account(s) with an ATM or Visa Check card
• make deposits to savings account(s) with an ATM or Visa Check card
• get cash withdrawals from checking account(s) with an ATM or Visa Check
card
o you may withdraw no more than $300.00 per day
o there is a charge of $2.50 per withdrawal at ATMs we do not own or
operate
• get cash withdrawals from savings account(s) with an ATM or Visa Check card
o you may withdraw no more than $300.00 per day
o there is a charge of $2.50 per withdrawal at ATMs we do not own or
operate
• transfer funds from savings to checking account(s) with an ATM or Visa Check
card
• transfer funds from checking to savings account(s) with an ATM or Visa Check
card
• get information about:
o the account balance of your checking account(s) with an ATM card or
Visa Check Card
▪ there is a charge of $1.50 at ATMs we do not own or operate
o the account balance of your savings account(s) with an ATM card or
Visa Check Card
▪ there is a charge of $1.50 at ATMs we do not own or operate
Some of these services may not be available at all terminals. AllPoint ATM
transactions are surcharge free.
Types of Visa Check Card Point-of-Sale Transactions - You may access your
checking account(s) to purchase goods (in person, online, or by phone), pay for
services (in person, online, or by phone), get cash from a merchant, if the merchant
permits, or from a participating financial institution, and do anything that a
participating merchant will accept.
Point-of-Sale Transactions - Using your card:
• you may not exceed $2,600.00 in transactions per day
• there is a charge of $.55 per transaction for each PIN-based point-of-sale
purchase
Currency Conversion and International Transactions.
(a) For point-of-sale (merchant) transactions. When you use your Visa Check Card
for this type of transaction and it settles in a currency other than US Dollars, the
charge will be converted into the US Dollar amount. The currency conversion rate
used to determine the transaction amount in US Dollars is either a rate selected by
Visa from the range of rates available in wholesale currency markets for the
applicable central processing date, which rate may vary from the rate Visa itself
receives, or the government-mandated rate in effect for the applicable central
processing date. The conversion rate in effect on the processing date may differ from
the rate in effect on the transaction date or posting date.
Visa USA charges us a 1% International Service Assessment on all international
transactions regardless of whether there is a currency conversion. As a result, we will
charge you a 1% international transaction fee on all international transactions. An
international transaction is a transaction where the country of the merchant is outside
the USA.
(b) For ATM transactions. When you use your Visa Check Card for this type of
transaction and it settles in a currency other than US Dollars, Mastercard/Cirrus will
convert the charge into a US Dollar amount. The Mastercard/Cirrus currency
conversion procedure includes use of either a government-mandated exchange rate, or
a wholesale exchange rate selected by Mastercard/Cirrus. The exchange rate
Mastercard/Cirrus uses will be a rate in effect on the day the transaction is processed.
This rate may differ from the rate in effect on the date of purchase or the date the
transaction was posted to your account.
Mastercard/Cirrus charges us a Currency Conversion Assessment of 20 basis points
(.2% of the transaction) for performing the currency conversion. In addition,
Mastercard/Cirrus charges us an Issuer Cross-Border Assessment of 90 basis points 
(.9% of the transaction) on all cross-border transactions regardless of whether there is
a currency conversion. As a result, we will charge you a currency conversion fee of
.2% of the transaction if there is a currency conversion and a cross-border transaction
fee of .9% of the transaction. The cross-border transaction fee is charged on all crossborder transactions regardless of whether there is a currency conversion. A crossborder transaction is a transaction processed through the Global Clearing Management
System or the Mastercard Debit Switch in which the country of the merchant is
different than the country of the cardholder.
Exclusions: Harbor Bank debit cards may not be honored in some countries; please
check with your local branch.
Advisory Against Illegal Use. You agree not to use your card(s) for illegal gambling
or other illegal purpose. Display of a payment card logo by, for example, an online
merchant does not necessarily mean that transactions are lawful in all jurisdictions in
which the cardholder may be located.
Harbor Bank Internet Banking Computer Transfers - types of transfers - You
may access your account(s) by computer through the internet by logging onto our
website at www.theharborbank.com and using your personal identification number
and your password, to:
• transfer funds from checking to checking
• transfer funds from checking to savings
• transfer funds from savings to checking
• transfer funds from savings to savings
• make payments from checking to loan account(s) with us
• make payments from checking to third parties
• make payments from savings to loan account(s) with us
• make payments from savings to third parties
• get information about:
o the account balance of checking account(s)
o the account balance of savings account(s)
FEES
• We do not charge for direct deposits to any type of account..
• We will charge you $5.00 to replace a lost ATM card and Visa Check Card.
• We charge $35.00 for each nonsufficient funds item.
• We charge $35.00 for each overdraft item paid.
Except as indicated elsewhere, we do not charge for these electronic fund transfers.
ATM Operator/Network Fees. When you use an ATM not owned by us, you may be
charged a fee by the ATM operator or any network used (and you may be charged a
fee for a balance inquiry even if you do not complete a fund transfer).
DOCUMENTATION
• Terminal transfers. You can get a receipt at the time you make a transfer to or
from your account using an automated teller machine or point-of-sale terminal.
However, you may not get a receipt if the amount of the transfer is $15 or less.
• Preauthorized credits. If you have arranged to have direct deposits made to
your account at least once every 60 days from the same person or company, the
person or company making the deposit will tell you every time they send us the
money.
• Preauthorized credits. If you have arranged to have direct deposits made to
your account at least once every 60 days from the same person or company,
you can call us at 1-888-833-7920 or your local branch to find out whether or
not the deposit has been made.
• Periodic statements.
 You will get a monthly account statement from us for your checking and
money market accounts.
 You will get a monthly account statement from us for your savings accounts,
unless there are no transfers in a particular month. In any case, you will get a
statement at least quarterly.
PREAUTHORIZED PAYMENTS
• Right to stop payment and procedure for doing so. If you have told us in
advance to make regular payments out of your account, you can stop any of
these payments. Here is how:
 Call or write us at the telephone number or address listed in this disclosure in
time for us to receive your request 3 business days or more before the payment
is scheduled to be made. If you call, we may also require you to put your
request in writing and get it to us within 14 days after you call.
 We will charge you $35.00 for each stop-payment order you give.
• Notice of varying amounts. If these regular payments may vary in amount, the
person you are going to pay will tell you, 10 days before each payment, when it
will be made and how much it will be. (You may choose instead to get this
notice only when the payment would differ by more than a certain amount from
the previous payment, or when the amount would fall outside certain limits that
you set.)
• Liability for failure to stop payment of preauthorized transfer. If you order
us to stop one of these payments 3 business days or more before the transfer is
scheduled, and we do not do so, we will be liable for your losses or damages.
FINANCIAL INSTITUTION'S LIABILITY
Liability for failure to make transfers. If we do not complete a transfer to or from
your account on time or in the correct amount according to our agreement with you,
we will be liable for your losses or damages. However, there are some exceptions. We
will not be liable, for instance:
1. If, through no fault of ours, you do not have enough money in your account to
make the transfer.
2. If you have an overdraft line and the transfer would go over the credit limit.
3. If the automated teller machine where you are making the transfer does not
have enough cash.
4. If the terminal or system was not working properly and you knew about the
breakdown when you started the transfer.
5. If circumstances beyond our control (such as fire or flood) prevent the transfer,
despite reasonable precautions that we have taken.
6. There may be other exceptions stated in our agreement with you.
CONFIDENTIALITY
We will disclose information to third parties about your account or the transfers you
make:
1. where it is necessary for completing transfers; or
2. in order to verify the existence and condition of your account for a third party,
such as a credit bureau or merchant; or
3. in order to comply with government agency or court orders; or
4. as explained in the separate Privacy Disclosure.
UNAUTHORIZED TRANSFERS
(a) Consumer liability.
• Generally. Tell us AT ONCE if you believe your card and/or code has been lost or
stolen, or if you believe that an electronic fund transfer has been made without your
permission using information from your check. Telephoning is the best way of
keeping your possible losses down. You could lose all the money in your account
(plus your maximum overdraft line of credit). If you tell us within 2 business days 
after you learn of the loss or theft of your card and/or code, you can lose no more than
$50 if someone used your card and/or code without your permission.
If you do NOT tell us within 2 business days after you learn of the loss or theft of
your card and/or code, and we can prove we could have stopped someone from using
your card and/or code without your permission if you had told us, you could lose as
much as $500.
Also, if your statement shows transfers that you did not make, including those made
by card, code or other means, tell us at once. If you do not tell us within 60 days after
the statement was mailed to you, you may not get back any money you lost after the
60 days if we can prove that we could have stopped someone from taking the money
if you had told us in time.
If a good reason (such as a long trip or a hospital stay) kept you from telling us, we
will extend the time periods.
• Additional Limit on Liability for Visa Check Card. Unless you have been negligent
or have engaged in fraud, you will not be liable for any unauthorized transactions
using your lost or stolen Visa Check Card. This additional limit on liability does not
apply to ATM transactions outside of the U.S., to ATM transactions not sent over
Visa or Plus networks, or to transactions using your Personal Identification Number
which are not processed by VISA®. Visa is a registered trademark of Visa
International Service Association.
(b) Contact in event of unauthorized transfer. If you believe your card and/or code
has been lost or stolen, call or write us at the telephone number or address listed in
this disclosure. You should also call the number or write to the address listed in this
disclosure if you believe a transfer has been made using the information from your
check without your permission.
ERROR RESOLUTION NOTICE
In Case of Errors or Questions About Your Electronic Transfers, Call or Write us at
the telephone number or address listed in this disclosure, as soon as you can, if you
think your statement or receipt is wrong or if you need more information about a
transfer listed on the statement or receipt. We must hear from you no later than 60
days after we sent the FIRST statement on which the problem or error appeared.
1. Tell us your name and account number (if any).
2. Describe the error or the transfer you are unsure about, and explain as clearly as
you can why you believe it is an error or why you need more information.
3. Tell us the dollar amount of the suspected error.
If you tell us orally, we may require that you send us your complaint or question in
writing within 10 business days.
We will determine whether an error occurred within 10 business days (5 business days
for Visa Check Card point-of-sale transactions processed by Visa and 20 business
days if the transfer involved a new account) after we hear from you and will correct
any error promptly. If we need more time, however, we may take up to 45 days (90
days if the transfer involved a new account, a point-of-sale transaction, or a foreigninitiated transfer) to investigate your complaint or question. If we decide to do this, we
will credit your account within 10 business days (5 business days for Visa Check Card
point-of-sale transactions processed by Visa and 20 business days if the transfer
involved a new account) for the amount you think is in error, so that you will have the
use of the money during the time it takes us to complete our investigation. If we ask
you to put your complaint or question in writing and we do not receive it within 10
business days, we may not credit your account. Your account is considered a new
account for the first 30 days after the first deposit is made, unless each of you already
has an established account with us before this account is opened.
We will tell you the results within three business days after completing our
investigation. If we decide that there was no error, we will send you a written
explanation.
You may ask for copies of the documents that we used in our investigation.
THE HARBOR BANK OF MARYLAND
CUSTOMER SERVICE
25 W. FAYETTE STREET
BALTIMORE, MARYLAND 21201
Business Days: Monday through Friday
Excluding Federal Holidays
Phone: 410-528-1800 or your local branch
MORE DETAILED INFORMATION IS AVAILABLE ON REQUEST
NOTICE OF ATM/NIGHT DEPOSIT
FACILITY USER PRECAUTIONS
As with all financial transactions, please exercise discretion when using an automated
teller machine (ATM) or night deposit facility. For your own safety, be careful. The
following suggestions may be helpful.
1. Prepare for your transactions at home (for instance, by filling out a deposit slip)
to minimize your time at the ATM or night deposit facility.
2. Mark each transaction in your account record, but not while at the ATM or
night deposit facility. Always save your ATM receipts. Don't leave them at the
ATM or night deposit facility because they may contain important account
information.
3. Compare your records with the account statements you receive.
4. Don't lend your ATM card to anyone.
5. Remember, do not leave your card at the ATM. Do not leave any documents at
a night deposit facility.
6. Protect the secrecy of your Personal Identification Number (PIN). Protect your
ATM card as though it were cash. Don't tell anyone your PIN. Don't give
anyone information regarding your ATM card or PIN over the telephone. Never
enter your PIN in any ATM that does not look genuine, has been modified, has
a suspicious device attached, or is operating in a suspicious manner. Don't write
your PIN where it can be discovered. For example, don't keep a note of your
PIN in your wallet or purse.
7. Prevent others from seeing you enter your PIN by using your body to shield
their view.
8. If you lose your ATM card or if it is stolen, promptly notify us. You should
consult the other disclosures you have received about electronic fund transfers
for additional information about what to do if your card is lost or stolen.
9. When you make a transaction, be aware of your surroundings. Look out for
suspicious activity near the ATM or night deposit facility, particularly if it is
after sunset. At night, be sure that the facility (including the parking area and
walkways) is well lighted. Consider having someone accompany you when you
use the facility, especially after sunset. If you observe any problem, go to
another ATM or night deposit facility.
10.Don't accept assistance from anyone you don't know when using an ATM or
night deposit facility.
11.If you notice anything suspicious or if any other problem arises after you have
begun an ATM transaction, you may want to cancel the transaction, pocket
your card and leave. You might consider using another ATM or coming back
later.
12.Don't display your cash; pocket it as soon as the ATM transaction is completed
and count the cash later when you are in the safety of your own car, home, or
other secure surrounding.
13.At a drive-up facility, make sure all the car doors are locked and all of the
windows are rolled up, except the driver's window. Keep the engine running
and remain alert to your surroundings.
14.We want the ATM and night deposit facility to be safe and convenient for you.
Therefore, please tell us if you know of any problem with a facility. For
instance, let us know if a light is not working or there is any damage to a
facility. Please report any suspicious activity or crimes to both the operator of
the facility and the local law enforcement officials immediately.
___________________________________
YOUR ABILITY TO WITHDRAW FUNDS
This policy statement applies to all deposit accounts.
Our policy is to make funds from your check deposits available to you on the second
business day after the day we receive your deposit, with the first $225 available on the
first business day after the day of your deposit. Electronic direct deposits will be
available on the day we receive the deposit. Cash, wire transfers, and some specified
check deposits will also be available before the second business day, as detailed
below. Once the funds are available, you can withdraw them in cash and we will use
the funds to pay checks that you have written.
Please remember that even after we have made funds available to you, and you have
withdrawn the funds, you are still responsible for checks you deposit that are returned
to us unpaid and for any other problems involving your deposit.
For determining the availability of your deposits, every day is a business day, except
Saturdays, Sundays, and federal holidays. If you make a deposit before 3:00 P.M.
(cutoff times may be later on some days or at some locations) on a business day that
we are open, we will consider that day to be the day of your deposit. However, if you
make a deposit after 3:00 P.M. (cutoff times may be later on some days or at some
locations) or on a day we are not open, we will consider that the deposit was made on
the next business day we are open.
If you make a deposit at an ATM before 3:00 P.M. on a business day that we are
open, we will consider that day to be the day of your deposit. However, if you make a
deposit at an ATM after 3:00 P.M. or on a day we are not open, we will consider that
the deposit was made on the next business day we are open.
Same-Day Availability
Funds from electronic direct deposits, wire transfers, and cash to your account will be
available on the day we receive the deposit.
Next-Day Availability
Funds from the following deposits are available on the first business day after the day
of your deposit:
U.S. Treasury checks that are payable to you.
Checks drawn on The Harbor Bank of Maryland.
If you make the deposit in person to one of our employees, funds from the
following deposits are also available on the first business day after the day of
your deposit:
State and local government checks that are payable to you if you use a special
deposit slip available from branch supervisors.
Cashier's, certified, and teller's checks that are payable to you if you use a
special deposit slip available from branch supervisors.
Federal Reserve Bank checks, Federal Home Loan Bank checks, and postal
money orders, if these items are payable to you.
If you do not make your deposit in person to one of our employees (for example, if
you mail the deposit), funds from these deposits will be available on the second
business day after the day we receive your deposit.
Other Check Deposits Subject to Second-Day Availability
The first $225 from a deposit of other checks will be available on the first business
day after the day of your deposit. The remaining funds will be available on the second
business day after the day of your deposit.
For example, if you deposit a check of $700 on a Monday, $225 of the deposit is
available on Tuesday. The remaining $475 is available on Wednesday.
If we cash a check for you that is drawn on another bank, we may withhold the
availability of a corresponding amount of funds that are already in your account.
Those funds will be available at the time funds from the check we cashed would have
been available if you had deposited it.
If we accept for deposit a check that is drawn on another bank, we may make funds
from the deposit available for withdrawal immediately but delay your availability to
withdraw a corresponding amount of funds that you have on deposit in another
account with us. The funds in the other account would then not be available for
withdrawal until the time periods that are described elsewhere in this disclosure for
the type of check that you deposited.
LONGER DELAYS MAY APPLY
Funds you deposit by check may be delayed for a longer period under the following
circumstances:
We believe a check you deposit will not be paid.
You deposit checks totaling more than $5,525 on any one day.
You redeposit a check that has been returned unpaid.
You have overdrawn your account repeatedly in the last six months.
There is an emergency, such as failure of computer or communications
equipment.
We will notify you if we delay your ability to withdraw funds for any of these
reasons, and we will tell you when the funds will be available. They will generally be
available no later than the seventh business day after the day of your deposit.
SPECIAL RULES FOR NEW ACCOUNTS
If you are a new customer, the following special rules will apply during the first 30
days your account is open.
Funds from electronic direct deposits to your account will be available on the day we
receive the deposit. Funds from deposits of cash, wire transfers, and the first $5,525 of
a day's total deposits of cashier's, certified, teller's, traveler's, and federal, state and
local government checks will be available on the first business day after the day of
your deposit if the deposit meets certain conditions. For example, the checks must be
payable to you (and you may have to use a special deposit slip). The excess over
$5,525 will be available on the ninth business day after the day of your deposit. If
your deposit of these checks (other than a U.S. Treasury check) is not made in person
to one of our employees, the first $5,525 will not be available until the second
business day after the day of your deposit.
Funds from all other check deposits will be available on the tenth business day after
the day of your deposit.
___________________________________
TRUTH-IN-SAVINGS DISCLOSURE
NO HASSLE CHECKING ACCOUNT
Minimum balance to open the account - You must deposit $100.00 to open this
account.
GOLD PLUS CHECKING ACCOUNT
(For individuals 55 years of age and older)
Rate Information - Your interest rate and annual percentage yield may
change. Frequency of rate changes - We may change the interest rate on your
account at any time.
Compounding and crediting frequency - Interest will not be compounded. Interest
will be credited to your account every month.
Effect of closing an account - If you close your account before interest is credited,
you will not receive the accrued interest.
Minimum balance to open the account - You must deposit $100.00 to open this
account.
Minimum balance to obtain the annual percentage yield disclosed - You must
maintain a minimum balance of $1,000.00 in the account each day to obtain the
disclosed annual percentage yield.
Daily balance computation method - We use the daily balance method to calculate
the interest on your account. This method applies a daily periodic rate to the principal
in the account each day.
Accrual of interest on noncash deposits - Interest begins to accrue no later than the
business day we receive credit for the deposit of noncash items (for example, checks).
NOW ACCOUNT
Rate Information - Your interest rate and annual percentage yield may
change. Frequency of rate changes - We may change the interest rate on your
account at any time.
Compounding and crediting frequency - Interest will not be compounded. Interest
will be credited to your account every month.
Effect of closing an account - If you close your account before interest is credited,
you will not receive the accrued interest.
Minimum balance to open the account - You must deposit $1,000.00 to open this
account.
Minimum balance to avoid imposition of fees - If your balance falls below
$1,000.00 on any day in the monthly statement cycle we will impose a service charge
fee of $15.00 once during the statement cycle.
Minimum balance to obtain the annual percentage yield disclosed - You must
maintain a minimum balance of $1,000.00 in the account each day to obtain the
disclosed annual percentage yield.
Daily balance computation method - We use the daily balance method to calculate
the interest on your account. This method applies a daily periodic rate to the principal
in the account each day.
Accrual of interest on noncash deposits - Interest begins to accrue no later than the
business day we receive credit for the deposit of noncash items (for example, checks).
PLATINUM EXPRESS NOW ACCOUNT
Rate Information - Your interest rate and annual percentage yield may
change. Frequency of rate changes - We may change the interest rate on your
account at any time.
Compounding and crediting frequency - Interest will not be compounded. Interest
will be credited to your account every month.
Effect of closing an account - If you close your account before interest is credited,
you will not receive the accrued interest.
Minimum balance to open the account - You must deposit $5,000.00 to open this
account.
Minimum balance to avoid imposition of fees - A service charge fee of $15.00 will
be imposed once during the statement cycle if the balance in the account falls below
$5,000.00 any day of the cycle.
Minimum balance to obtain the annual percentage yield disclosed - You must
maintain a minimum balance of $5,000.00 in the account each day to obtain the
disclosed annual percentage yield.
Daily balance computation method - We use the daily balance method to calculate
the interest on your account. This method applies a daily periodic rate to the principal
in the account each day.
Accrual of interest on noncash deposits - Interest begins to accrue no later than the
business day we receive credit for the deposit of noncash items (for example, checks).
HARBOR BANK SMART ACCOUNT
Rate Information - Your interest rate and annual percentage yield may
change. Frequency of rate changes - We may change the interest rate on your
account at any time.
Determination of rate - At our discretion, we may change the interest rate on your
account.
Compounding and crediting frequency - Interest will not be compounded. Interest
will be credited to your account every month.
Minimum balance to open the account - You must deposit $150.00 to open this
account.
Daily balance computation method - We use the daily balance method to calculate
the interest on your account. This method applies a daily periodic rate to the principal
in the account each day.
Accrual of interest on noncash deposits - Interest begins to accrue no later than the
business day we receive credit for the deposit of noncash items (for example, checks).
Transaction limitations:
You must have a minimum of 10 non PIN-based debit card transactions per month.
A minimum monthly direct deposit of $750.00 is required to be eligible for this
account.
Fees:
A service charge fee of $15.00 will be charged each month. This fee will apply if you
have less than 10 non-PIN based debit card transactions processed during the month.
MONEY MARKET ACCOUNT
Rate Information - Your interest rate and annual percentage yield may
change. Frequency of rate changes - We may change the interest rate on your
account at any time.
Determination of rate - At our discretion, we may change the interest rate on your
account.
Compounding and crediting frequency - Interest will not be compounded. Interest
will be credited to your account every month.
Effect of closing an account - If you close your account before interest is credited,
you will not receive the accrued interest.
Minimum balance to open the account - You must deposit $2,500.00 to open this
account.
Minimum balance to avoid imposition of fees - A service charge fee of $25.00 will
be imposed every statement cycle if the balance in the account falls below $2,500.00
any day of the cycle.
Minimum balance to obtain the annual percentage yield disclosed - You must
maintain a minimum balance of $2,500.00 in the account each day to obtain the
disclosed annual percentage yield.
Daily balance computation method - We use the daily balance method to calculate
the interest on your account. This method applies a daily periodic rate to the principal
in the account each day.
Accrual of interest on noncash deposits - Interest begins to accrue no later than the
business day we receive credit for the deposit of noncash items (for example, checks).
Transaction limitations:
Transfers from a Money Market account to another account or to third parties by
preauthorized, automatic, telephone, or computer transfer or by check, draft, debit
card, or similar order to third parties are limited to six per statement cycle.
Fees:
A per item fee of $10.00 will be charged for each debit transaction (withdrawal, check
paid, automatic transfer or payment out of this account) in excess of six items during a 
statement cycle. Repeated violations of these limitations will result in the closing of
this account.
INVESTMENT MONEY MARKET ACCOUNT
Rate Information - Your interest rate and annual percentage yield may
change. Frequency of rate changes - We may change the interest rate on your
account at any time.
Determination of rate - At our discretion, we may change the interest rate on your
account.
Compounding and crediting frequency - Interest will not be compounded. Interest
will be credited to your account every month.
Effect of closing an account - If you close your account before interest is credited,
you will not receive the accrued interest.
Minimum balance to open the account - You must deposit $25,000.00 to open this
account.
Minimum balance to avoid imposition of fees - A service charge fee of $50.00 will
be imposed every statement cycle if the balance in the account falls below $25,000.00
any day of the cycle.
Minimum balance to obtain the annual percentage yield disclosed - You must
maintain a minimum balance of $2,500.00 in the account each day to obtain the
disclosed annual percentage yield.
Daily balance computation method - We use the daily balance method to calculate
the interest on your account. This method applies a daily periodic rate to the principal
in the account each day.
Accrual of interest on noncash deposits - Interest begins to accrue no later than the
business day we receive credit for the deposit of noncash items (for example, checks).
Transaction limitations:
Transfers from an Investment Money Market account to another account or to third
parties by preauthorized, automatic, telephone, or computer transfer or by check,
draft, check card, or similar order to third parties are limited to six per monthly
statement cycle.
Fees:
A per item fee of $10.00 will be charged for each debit transaction (withdrawal, check
paid, automatic transfer or payment out of this account) in excess of six items during a
statement cycle. Repeated violations of these limitations will result in the closing of
this account.
IRA MONEY MARKET ACCOUNT
Rate Information - Your interest rate and annual percentage yield may
change. Frequency of rate changes - We may change the interest rate on your
account at any time.
Determination of rate - The interest rate on your account will be related to the 13-
Week Treasury Bill plus .50 basis points.
Compounding and crediting frequency - Interest will not be compounded. Interest
will be credited to your account every quarter.
Effect of closing an account - If you close your account before interest is credited,
you will not receive the accrued interest.
Minimum balance to open the account - You must deposit $500.00 to open this
account.
Minimum balance to avoid imposition of fees - A service charge fee of $25.00 will
be imposed every statement cycle if the balance in the account falls below $500.00
any day of the cycle.
Minimum balance to obtain the annual percentage yield disclosed - You must
maintain a minimum balance of $500.00 in the account each day to obtain the
disclosed annual percentage yield.
Daily balance computation method - We use the daily balance method to calculate
the interest on your account. This method applies a daily periodic rate to the principal
in the account each day.
Accrual of interest on noncash deposits - Interest begins to accrue no later than the
business day we receive credit for the deposit of noncash items (for example, checks).
STATEMENT SAVINGS ACCOUNT
Rate Information - Your interest rate and annual percentage yield may
change. Frequency of rate changes - We may change the interest rate on your
account at any time.
Compounding and crediting frequency - Interest will not be compounded. Interest
will be credited to your account every quarter.
Effect of closing an account - If you close your account before interest is credited,
you will not receive the accrued interest.
Minimum balance to open the account - You must deposit $100.00 to open this
account.
Minimum balance to avoid imposition of fees - A monthly fee of $3.00 will be
imposed every month if the balance in the account falls below $100.00 any day of the
month.
Daily balance computation method - We use the daily balance method to calculate
the interest on your account. This method applies a daily periodic rate to the principal
in the account each day.
Accrual of interest on noncash deposits - Interest begins to accrue no later than the
business day we receive credit for the deposit of noncash items (for example, checks).
Transaction limitations:
Transfers from a statement savings account to another account or to third parties by
preauthorized, automatic, telephone, or computer transfer are limited to six per month
with no transfers by check, draft, check card or similar order to third parties.
Fees:
A per item fee of $10.00 will be charged for each debit transaction (withdrawal, check
paid, automatic transfer or payment out of this account) in excess of six items during a
statement cycle. Repeated violations of these limitations will result in the closing of
this account.
MINOR SAVINGS ACCOUNT
(Upon the minor's 18th birthday, the account will automatically convert to a
Statement Savings Account and will be subject to all terms and conditions
governing the Statement Savings Account)
Rate Information - Your interest rate and annual percentage yield may
change. Frequency of rate changes - We may change the interest rate on your
account at any time.
Compounding and crediting frequency - Interest will not be compounded. Interest
will be credited to your account every quarter.
Effect of closing an account - If you close your account before interest is credited,
you will not receive the accrued interest.
Minimum balance to open the account - Waived.
Accrual of interest on noncash deposits - Interest begins to accrue no later than the
business day we receive credit for the deposit of noncash items (for example, checks).
Transaction limitations:
Transfers from a Minor Savings account to another account or to third parties by
preauthorized, automatic, telephone, or computer transfer are limited to six per
calendar month with no transfers by check, draft, debit card, or similar order to third
parties.
Fees:
A per item fee of $10.00 will be charged for each debit transaction (withdrawal, check
paid, automatic transfer or payment out of this account) in excess of six items during a
statement cycle. Repeated violations of these limitations will result in the closing of
this account.
IRA - VARIABLE
Rate Information - Your interest rate and annual percentage yield may
change. Frequency of rate changes - We may change the interest rate on your
account at any time.
Determination of rate - At our discretion, we may change the interest rate on your
account.
Compounding and crediting frequency - Interest will not be compounded. Interest
will be credited to your account every quarter.
Minimum balance to open the account - You must deposit $100.00 to open this
account.
Minimum balance to avoid imposition of fees - A monthly service charge fee of
$3.00 will be imposed every month if the balance in the account falls below $100.00
any day of the month.
Daily balance computation method - We use the daily balance method to calculate
the interest on your account. This method applies a daily periodic rate to the principal
in the account each day.
Accrual of interest on noncash deposits - Interest begins to accrue no later than the
business day we receive credit for the deposit of noncash items (for example, checks).
Early withdrawal penalties (a penalty may be imposed for withdrawals before
maturity) -
The fee we may impose will equal six months interest on the amount
withdrawn subject to penalty.
In certain circumstances such as the death or incompetence of an owner of this
account, the law permits, or in some cases requires, the waiver of the early withdrawal
penalty. Other exceptions may also apply, for example, if this is part of an IRA or
other tax-deferred savings plan.
Additional information about this account is available upon opening.
IRA - FIXED
Rate Information - You will be paid the disclosed interest rate until first maturity.
Compounding and crediting frequency - Interest will not be compounded. Interest
will be credited to your account every quarter.
Minimum balance to open the account - You must deposit $100.00 to open a 60
month term. $1,000.00 for a 12 or 24 month term and $2,500.00 for 30 months.
Daily balance computation method - We use the daily balance method to calculate
the interest on your account. This method applies a daily periodic rate to the principal
in the account each day.
Accrual of interest on noncash deposits - Interest begins to accrue no later than the
business day we receive credit for the deposit of noncash items (for example, checks).
Early withdrawal penalties (a penalty may be imposed for withdrawals before
maturity) -
The fee we may impose will equal six months interest on the amount
withdrawn subject to penalty.
In certain circumstances such as the death or incompetence of an owner of this
account, the law permits, or in some cases requires, the waiver of the early withdrawal
penalty. Other exceptions may also apply, for example, if this is part of an IRA or
other tax-deferred savings plan.
Additional information about this account is available upon opening.
COMMON FEATURES
The following fees may be assessed against your account and the following
transaction limitations, if any, apply to your account.
Replace lost ATM card (after second request) - $5.00
ATM cash withdrawal (at ATMs we do not own or operate) - $2.50
Balance inquiry at ATMs for account(s)(at ATMs we do not own or operate) -
$1.50
 fee applies to Savings, Checking, Money Market, or NOW accounts
Point-of-sale transactions (PIN only) - $.55
Telebanc (monthly calls in excess of seven) - $.35 per call
Counter checks - $1.00 each
Money orders - $5.00
Cashier's checks - $20.00
Deposited checks (and other items) returned unpaid - $12.00
An account is considered dormant if for one year no withdrawals or deposits,
other than credited interest, have been made to the account.
The fee for a dormant account is $.80 per month on account balances under
$50.00; $1.65 per month for balances of $50.00 or more.
Garnishments - $200.00
Executions - $200.00
Levies - $200.00
Overdraft - each overdraft paid - $35.00 per item
Savings account overdraft - $35.00 per item
The categories of transactions for which an overdraft fee may be imposed are
those by any of the following means: check, in-person withdrawal, ATM
withdrawal, or other electronic means.
Overdraft - all overdrafts paid on a day - $35.00 per item
Nonsufficient funds - each - $35.00
Nonsufficient funds (NSF) check - $35.00 per item
Nonsufficient funds (NSF) ACH (preauthorized withdrawal) - $35.00 per item
Nonsufficient funds (NSF) uncollected funds - $35.00
Nonsufficient funds (NSF) Bill Pay - $35.00
Account activity printout - $6.00
Fax statement - $6.00
Fax transfer - $1.00
Account research - $20.00 per hour
Special statement cutoff - $5.00
Account statement - $6.00
 Additional items - $1.50 each
Account balancing assistance - $30.00 per hour
Stop payments - each - $35.00
Stop payments - ACH payments - $35.00
Account closed within 90 days of opening - $25.00
Account verifications - $10.00 each
Photocopies - $2.00 each
Domestic wire transfers
 Outgoing - $25.00
 Incoming - $15.00
Foreign wire transfers
 Outgoing - $50.00
 Incoming - $30.00
Proof adjustments - $10.00
Collection items (incoming and outgoing) - $20.00 each
 Foreign checks - $50.00 and up per check
Safe deposit box drilling - $175.00 and up
Lost safe deposit box key - $65.00
Safe deposit box late charge
 30 days - $5.00
 60 days - $10.00
Overdraft protection annual fee - $20.00
Pay by phone - $10.00
IRA transfer - $25.00
Duplicate 1098 or 1099 - $5.00
Loan payment returned check - $35.00
Lost night depository key - $20.00
Returned mail - $5.00 per month
We reserve the right to require not less than 7 days' notice in writing before each
withdrawal from an interest-bearing account other than a time deposit or demand
deposit, or from any other savings account as defined by Regulation D. (The law
requires us to reserve this right, but it is not our general policy to use it.) Withdrawals 
from a time account prior to maturity or prior to any notice period may be restricted
and may be subject to penalty. See your notice of penalty for early withdrawal.
___________________________________
YOUR ACCOUNT
These are the accounts you have opened or inquired about. Further details about
these accounts are inside this disclosure. If the figures are not filled in, please see
the insert that is with this disclosure or your periodic statement.
NO HASSLE CHECKING ACCOUNT
GOLD PLUS CHECKING ACCOUNT
The interest rate for your account is ____________%
with an annual percentage yield of ____________%.
NOW ACCOUNT
The interest rate for your account is ____________%
with an annual percentage yield of ____________%.
PLATINUM EXPRESS NOW ACCOUNT
The interest rate for your account is ____________%
with an annual percentage yield of ____________%.
HARBOR BANK SMART ACCOUNT
The interest rate for your account is ____________%
with an annual percentage yield of ____________%.
MONEY MARKET ACCOUNT
Rate Information:
• Tier 1 - If your daily balance is more than $2,499.99, but less than $15,000.00,
the interest rate paid on the entire balance in your account will be
____________% with an annual percentage yield of ____________%.
• Tier 2 - If your daily balance is $15,000.00 or more, the interest rate paid on
the entire balance in your account will be ____________% with an annual
percentage yield of ____________%.
INVESTMENT MONEY MARKET ACCOUNT
Rate Information:
• Tier 1 - If your daily balance is more than $2,499.99, but less than $25,000.00,
the interest rate paid on the entire balance in your account will be
____________% with an annual percentage yield of ____________%.
• Tier 2 - If your daily balance is more than $24,999.99, but less than
$50,000.00, the interest rate paid on the entire balance in your account will be
____________% with an annual percentage yield of ____________%.
• Tier 3 - If your daily balance is $50,000.00 or more, the interest rate paid on
the entire balance in your account will be ____________% with an annual
percentage yield of ____________%.
IRA MONEY MARKET ACCOUNT
The interest rate for your account is ____________%
with an annual percentage yield of ____________%.
STATEMENT SAVINGS ACCOUNT
The interest rate for your account is ____________%
with an annual percentage yield of ____________%.
MINOR SAVINGS ACCOUNT
The interest rate for your account is ____________%
with an annual percentage yield of ____________%.
IRA - VARIABLE
The interest rate for your account is ____________%
with an annual percentage yield of ____________%.
IRA - FIXED
The interest rate for your account is ____________%
with an annual percentage yield of ____________%.
Pimlico Office
5000 Park Heights
Avenue
Baltimore, Maryland
21215
Monday - Thursday 9:00
am to 3:00 pm
Friday 9:00 am to 6:00
pm
Saturday 9:00 am to 12
noon
410-367-3331
Main Office
25 W. Fayette Street
Baltimore, Maryland 21201
Monday - Thursday 9:00 am to 3:00
pm
Friday 9:00 am to 5:00 pm
410-528-1801
888-833-7920
Inner Harbor East
Office
1000 Lancaster Street,
Suite C
Baltimore, Maryland
21202
Monday - Thursday
9:00 am to 3:00 pm
Friday 9:00 am to 5:00
pm
Saturday 9:00 am to 12
noon
410-468-0600
Science & Technology
Park East Office
855 N. Wolfe St.
Baltimore, Maryland
21205
Monday - Thursday 9:00
am to 3:00 pm
Friday 9:00 am to 5:00
pm
Saturday 9:00 am to 12
noon
410-675-1167
Randallstown Office
8530 Liberty Road
Randallstown, Maryland 21133
Lobby: Monday - Thursday 9:00 am
to 3:00 pm
Drive-In: Monday - Thursday 9:00
am to 4:00 pm
Lobby/Drive-In: Friday 9:00 am to
6:00 pm
Lobby/Drive-In: Saturday 9:00 am to
12 noon
410-922-3003
Research Park Office
800 W. Baltimore
Street
Baltimore, Maryland
21201
Monday - Thursday
9:00 am to 3:00 pm
Friday 9:00 am to 6:00
pm
410-545-0633
Voice Your Opinion: 443-923-0592
24 Hour Telephone Banking
800-364-0472
Internet Banking/Harbor Biz Net
410-675-5726 or 888-833-7114
www.theharborbank.com
MEMBER FDIC
Revised 06/20
© 2019 Wolters Kluwer Financial Services, Inc. All rights reserved.
AIB-TIS 8/1/2019 TCM-22w,3p Custom 2bj,4u 201579185-010
building..., :AMENDMENT :https://github.com/github/docs/pull/23912/commits/17d0c2b3cdb394a809c7cffc062056cbd23e4968 :
:Build::
mowjoejoejoejoe/mowjoejoejoejoe/README.MD/README.MD 
:Build::  
  

