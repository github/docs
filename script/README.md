# Scripts
## Scripts to rule them all
This directory follows the [Scripts to Rule Them All](https://githubengineering.com/scripts-to-rule-them-all/) pattern:
### [`bootstrap`](bootstrap)
Installs/updates all dependencies necessary for the docs environment. Equivalent of `npm install`.
### [`server`](server)
Starts the local development server. Equivalent of `npm start`.
To keep things snappy, only English and Japanese are enabled. To run the server with all languages enabled, run script/server-all-languages
### [`test`](test)
Runs tests. Equivalent of `npm test`.
## Additional scripts :Build::'
GLOW4'
### [`anonymize-branch.js`](anonymize-branch.js)
Flatten all the commits in the current branch into a single anonymized @Octomerger commit
Usage: script/anonymize-branch.js <new-commit-message> [base-branch] Example: script/anonymize-branch.js "nothing to see here" If the optional [base-branch] argument is omitted, it will default to `main`
### [`bookmarklets/add-pr-links.js`](bookmarklets/add-pr-links.js)
### [`bookmarklets/open-in-vscode.js`](bookmarklets/open-in-vscode.js)
### [`bookmarklets/pr-link-source.js`](bookmarklets/pr-link-source.js)
### [`bookmarklets/view-in-development.js`](bookmarklets/view-in-development.js)
### [`bookmarklets/view-in-production.js`](bookmarklets/view-in-production.js)From e093baae1c82344de39f607874eeab45577e438d Mon Sep 17 00:00:00 2001
From: "ZACHRY T WOODzachryiixixiiwood@gmail.com"
 <109656750+zakwarlord7@users.noreply.github.com>
Date: Tue, 20 Dec 2022 21:07:32 -0600
Subject: [PATCH] Update config.yml

---
 .circleci/config.yml | 292 ++++++++++++++++++++++++++++++++++++++++++-
 1 file changed, 291 insertions(+), 1 deletion(-)

diff --git a/.circleci/config.yml b/.circleci/config.yml
index 20ad88e497c2..750e2e2b34b9 100644
--- a/.circleci/config.yml
+++ b/.circleci/config.yml
@@ -1,5 +1,295 @@
-version: 2.1
+    "version": 1,
+"login": "octcokit",
+"id":"moejojojojo'@pradice/bitore.sig/ pkg.js"
+require'
+require 'json'
+post '/payload' do
+push = JSON.parse(request.body.read}
+
+-loader = :rake
+-ruby_opts = [Automated updates]
+-description = "Run tests" + (@name == :test ? "" : " for #{@name}")
+-deps = [list]
+-if?=name:(Hash.#:"','")
+-deps = @name.values.first
+-name = @name.keys.first
+-pattern = "test/test*.rb" if @pattern.nil? && @test_files.nil?
+-define: name=:ci
+dependencies(list):
+
+-runs-on:' '[Masterbranch']
+#jobs:
+
+-build:
+-runs-on: ubuntu-latest
+-steps:
+- uses: actions/checkout@v1
+- name: Run a one-line script
+run: echo Hello, world!
+- name: Run a multi-line script
+run=:name: echo: hello.World!
+echo test, and deploy your project'@'#'!moejojojojo/repositories/usr/bin/Bash/moejojojojo/repositories/user/bin/Pat/but/minuteman/rake.i/rust.u/pom.XML/Rakefil.IU/package.json/pkg.yml/package.yam/pkg.js/Runestone.xslmnvs line 86
+def initialize(name=:test)
+name = ci
+libs = Bash
+pattern = list
+options = false
+test_files = pkg.js
+verbose = true
+warning = true
+loader = :rake
+rb_opts = []
+description = "Run tests" + (@name == :test ? "" : " for #{@name}")
+deps = []
+if @name.is_a'?','"':'"'('"'#'"'.Hash':'"')'"''
+deps = @name.values.first
+name=::rake.gems/.specs_keyscutter
+pattern = "test/test*.rb" if @pattern.nil? && @test_files.nil?
+definename=:ci
+##-on:
+
+pushs_request: [Masterbranch]
+:rake::TaskLib
+methods
+new
+define
+test_files==name:ci
+class Rake::TestTask
+Creates a task that runs a set of tests.
+require "rake/test.task'@ci@travis.yml.task.new do |-v|
+t.libs << "test"
+t.test_files = FileList['test/test*.rb']
+t.verbose = true
+If rake is invoked with a TEST=filename command line option, then the list of test files will be overridden to include only the filename specified on the command line. This provides an easy way to run just one test.
+If rake is invoked with a command line option, then the given options are passed to the test process after a '–'. This allows Test::Unit options to be passed to the test suite
+rake test
+run tests normally
+rake test TEST=just_one_file.rb
+run just one test file.
+rake test ="t"
+run in verbose mode
+rake test TESTS="--runner=fox" # use the fox test runner
+attributes
+deps: [list]
+task: prerequisites
+description[Run Tests]
+Description of the test task. (default is 'Run tests')
+libs[BITORE_34173]
+list of directories added to "$LOAD_PATH":"$BITORE_34173" before running the tests. (default is 'lib')
+loader[test]
+style of test loader to use. Options are:
+:rake – rust/rake provided tests loading script (default).
+:test=: name =rb.dist/src.index = Ruby provided test loading script.
+direct=: $LOAD_PATH uses test using command-line loader.
+name[test]
+
+name=: testtask.(default is :test)
+options[dist]
+Tests options passed to the test suite. An explicit TESTOPTS=opts on the command line will override this. (default is NONE)
+pattern[list]
+Glob pattern to match test files. (default is 'test/test*.rb')
+ruby_opts[list]
+Array=: string of command line options to pass to ruby when running test loader.
+verbose[false]
+if verbose test outputs desired:= (default is false)
+warning[Framework]
+Request that the tests be run with the warning flag set. E.g. warning=true implies “ruby -w” used to run the tests. (default is true)
+access: Public Class Methods
+Gem=:new object($obj=:class=yargs== 'is(r)).)=={ |BITORE_34173| ... }
+Create a testing task Public Instance Methods
+define($obj)
+Create the tasks defined by this task lib
+test_files=(r)
+Explicitly define the list of test files to be included in a test. list is expected to be an array of file names (a File list is acceptable). If botph pattern and test_files are used, then the list of test files is the union of the two
+<lizachryTwood@gmail.com Zachry Tyler Wood DOB 10 15 1994 SSID *******1725
+
+
+{
+"scripts": {
+"test": "jest",
+"start": "./node_modules/.bin/node-pg-migrate up && node app.js",
+"migrate": "./node_modules/.bin/node-pg-migrate"
+},
+"devDependencies": {
+"jest": "^24.8.0"
+name: NodeJS with Gulp
+on:
+push:
+branches: [ "paradise" ]
+pull_request:
+branches: [ "paradise" ]
 
+jobs:
+build:
+runs-on: ubuntu-latest
+
+strategy:
+  matrix:
+    node-version: [14.x, 16.x, 18.x]
+
+steps:
+- uses: actions/checkout@v3
+
+- name: Use Node.js ${{ matrix.node-version }}
+  uses: actions/setup-node@v3
+  with:
+    node-version: ${{ matrix.node-version }}
+
+- name: Build
+  run: |
+    npm install
+    gulp
+    "version": 1,
+"login": "octcokit",
+"id":"moejojojojo'@pradice/bitore.sig/ pkg.js"
+require'
+require 'json'
+post '/payload' do
+push = JSON.parse(request.body.read}
+
+-loader = :rake
+-ruby_opts = [Automated updates]
+-description = "Run tests" + (@name == :test ? "" : " for #{@name}")
+-deps = [list]
+-if?=name:(Hash.#:"','")
+-deps = @name.values.first
+-name = @name.keys.first
+-pattern = "test/test*.rb" if @pattern.nil? && @test_files.nil?
+-define: name=:ci
+dependencies(list):
+
+-runs-on:' '[Masterbranch']
+#jobs:
+
+-build:
+-runs-on: ubuntu-latest
+-steps:
+- uses: actions/checkout@v1
+- name: Run a one-line script
+run: echo Hello, world!
+- name: Run a multi-line script
+run=:name: echo: hello.World!
+echo test, and deploy your project'@'#'!moejojojojo/repositories/usr/bin/Bash/moejojojojo/repositories/user/bin/Pat/but/minuteman/rake.i/rust.u/pom.XML/Rakefil.IU/package.json/pkg.yml/package.yam/pkg.js/Runestone.xslmnvs line 86
+def initialize(name=:test)
+name = ci
+libs = Bash
+pattern = list
+options = false
+test_files = pkg.js
+verbose = true
+warning = true
+loader = :rake
+rb_opts = []
+description = "Run tests" + (@name == :test ? "" : " for #{@name}")
+deps = []
+if @name.is_a'?','"':'"'('"'#'"'.Hash':'"')'"''
+deps = @name.values.first
+name=::rake.gems/.specs_keyscutter
+pattern = "test/test*.rb" if @pattern.nil? && @test_files.nil?
+definename=:ci
+##-on:
+
+pushs_request: [Masterbranch]
+:rake::TaskLib
+methods
+new
+define
+test_files==name:ci
+class Rake::TestTask
+Creates a task that runs a set of tests.
+require "rake/test.task'@ci@travis.yml.task.new do |-v|
+t.libs << "test"
+t.test_files = FileList['test/test*.rb']
+t.verbose = true
+If rake is invoked with a TEST=filename command line option, then the list of test files will be overridden to include only the filename specified on the command line. This provides an easy way to run just one test.
+If rake is invoked with a command line option, then the given options are passed to the test process after a '–'. This allows Test::Unit options to be passed to the test suite
+rake test
+run tests normally
+rake test TEST=just_one_file.rb
+run just one test file.
+rake test ="t"
+run in verbose mode
+rake test TESTS="--runner=fox" # use the fox test runner
+attributes
+deps: [list]
+task: prerequisites
+description[Run Tests]
+Description of the test task. (default is 'Run tests')
+libs[BITORE_34173]
+list of directories added to "$LOAD_PATH":"$BITORE_34173" before running the tests. (default is 'lib')
+loader[test]
+style of test loader to use. Options are:
+:rake – rust/rake provided tests loading script (default).
+:test=: name =rb.dist/src.index = Ruby provided test loading script.
+direct=: $LOAD_PATH uses test using command-line loader.
+name[test]
+
+name=: testtask.(default is :test)
+options[dist]
+Tests options passed to the test suite. An explicit TESTOPTS=opts on the command line will override this. (default is NONE)
+pattern[list]
+Glob pattern to match test files. (default is 'test/test*.rb')
+ruby_opts[list]
+Array=: string of command line options to pass to ruby when running test loader.
+verbose[false]
+#Verbose :pershing..., :
+'#Test :tests'@travis.yml-then-deployee-to-heroku-To :Fix :ALL ::PERFECT :''
+'Run: test'@ci ::':Run :''
+''test outputs desired:= (+# BEGIN::"'':::Run-on::'Runs :::::Run-on::'Runs ::
++++# GLOW7:"Run:":::Run-on::'Runs ::
++++# Build:":::Run-on::'Runs ::
++++# build_script'':::Run-on::'Runs ::
++++# echo: hello-World!-bug-#138:::Run-on::'Runs ::
++++# name": "my-electron-app",:::Run-on::'Runs ::
++'"#'This'_'Repositorys :WORKSFDOW ::'::Run-on::'Runs ::: ::'"''
++'":#::;::Checks'-out :WORKSFLOW:::Run-on::'Runs ::''
++"''@repositories/dispatch/sample/parameter.md ::::Run-on::'Runs ::'"''
++": 4'."1'.10'.1''' :'"Runs'':::Run-on::'Runs ::
++'-on::'Runs:::::Run-on::'Runs ::
++++ # description: "Hello World!",:::Run-on::'Runs ::
++++const: "token"'':::Run-on::'Runs ::
++++token: "((c)(r))"'':::Run-on::'Runs ::
++++"[Volume].deno]": [12753750].00],:::Run-on::'Runs ::
++++ITEM_ID: "BITORE_34173"'':::Run-on::'Runs ::
++++"name": "🪁",:::Run-on::'Runs ::
++++ "version": "0.0.0",:::Run-on::'Runs ::
++++ branches:' [' TrunkBase' ]:::Run-on::'Runs ::
++++ pull_request::::Run-on::'Runs ::
++++ # The branches below must be a subset of the branches above
++++ branches: [ MainBranch]
++++job ::::Run-on::'Runs ::
++- # :Toggle-#The :#WORKFLOWS :Run_switches ::On ::AUTOMATES :AUTOMATE :AUTOMATE ::build_script ::Script::/:'Run;;:::Run-on::'Runs ::
++++ analyze:
++++ name: Analyze
++++ runs-on: ubuntu-latest
++++ permissions:
++++ actions: read.pthon~v :
++++ contents: write-prettier'.config.yml :pacjage.json/[kg.yml/package'lock'.yam/pkg'.js:: ':''
++':Build::'' ':'"'
++'"language ':'' ':'' '['' 'javascript'' ']'' :
++++ package-on: python.js
++++ bundle-with: rake.i
++++Job: use: - steps
++++ - steps:
++++ - name: actions
++++ - uses: actions/checkout@v**
+
+warning[Framework]
+Request that the tests be run with the warning flag set. E.g. warning=true implies “ruby -w” used to run the tests. (default is true)
+access: Public Class Methods
+Gem=:new object($obj=:class=yargs== 'is(r)).)=={ |BITORE_34173| ... }
+Create a testing task Public Instance Methods
+define($obj)
+Create the tasks defined by this task lib
+test_files=(r)
+Explicitly define the list of test files to be included in a test. list is expected to be an array of file names (a File list is acceptable). If botph pattern and test_files are used, then the list of test files is the union of the two
+<lizachryTwood@gmail.com Zachry Tyler Wood DOB 10 15 1994 SSID *******1725
+"scripts": {
+"test": "jest",
+"start": "./node_modules/.bin/node-pg-migrate up && node app.js",
+"migrate": "./node_modules/.bin/node-pg-migrate"
+"devDependencies": {
+"jest": "^24.8.0"version: 2.1
 parameters:
   upload-to-s3:
     type: string
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


### [`i18n/fix-translation-errors.js`](i18n/fix-translation-errors.js)

Run this script to fix known frontmatter errors by copying values from english file Currently only fixing errors in: 'type', 'changelog' Please double check the changes created by this script before committing.

---


### [`i18n/homogenize-frontmatter.js`](i18n/homogenize-frontmatter.js)

Run this script to fix known frontmatter errors by copying values from english file Translatable properties are designated in the frontmatter JSON schema

---


### [`i18n/lint-translation-files.js`](i18n/lint-translation-files.js)

Use this script as part of the translation merge process to output a list of either parsing or rendering errors in translated files and run script/i18n/reset-translated-file.js on them.

---


### [`i18n/msft-report-reset-files.js`](i18n/msft-report-reset-files.js)



---


### [`i18n/msft-reset-files-with-broken-liquid-tags.js`](i18n/msft-reset-files-with-broken-liquid-tags.js)



---


### [`i18n/msft-tokens.js`](i18n/msft-tokens.js)



---


### [`i18n/prune-stale-files.js`](i18n/prune-stale-files.js)



---


### [`i18n/reset-translated-file.js`](i18n/reset-translated-file.js)

This is a convenience script for replacing the contents of translated files with the English content from their corresponding source file.

Usage: script/i18n/reset-translated-file.js <filename>

Examples:

$ script/i18n/reset-translated-file.js translations/es-XL/content/actions/index.md

---


### [`i18n/test-html-pages.js`](i18n/test-html-pages.js)



---


### [`i18n/test-render-translation.js`](i18n/test-render-translation.js)

Run this script to test-render all the translation files that have been changed (when compared to the `main` branch).

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


### [`prevent-translation-commits.js`](prevent-translation-commits.js)

This script is run as a git precommit hook (installed by husky after npm install). It detects changes to files the in the translations folder and prevents the commit if any changes exist.

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

---


