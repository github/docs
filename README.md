## supertest": "^4.0.2",
    "webpack-dev-middleware": "^3.7.2",
    "website-scraper": "^4.2.0"
  },
  "scripts": {
    "start": "cross-env NODE_ENV=development ENABLED_LANGUAGES='en,ja' nodemon server.js",
    "dev": "npm start",
    "build": "cross-env NODE_ENV=production npx webpack --mode production",
    "start-all-languages": "cross-env NODE_ENV=development nodemon server.js",
    "lint": "standard --fix",
    "test": "jest && standard && npm run check-deps",
    "prebrowser-test": "npm run build",
    "browser-test": "start-server-and-test browser-test-server 4001 browser-test-tests",
    "browser-test-server": "cross-env NODE_ENV=production ENABLED_LANGUAGES='en,ja' PORT=4001 node server.js",
    "browser-test-tests": "BROWSER=1 jest tests/browser/browser.js",
    "sync-search": "start-server-and-test sync-search-server 4002 sync-search-indices",
    "sync-search-dry-run": "DRY_RUN=1 npm run sync-search",
    "sync-search-server": "cross-env NODE_ENV=production PORT=4002 node server.js",
    "sync-search-indices": "script/sync-algolia-search-indices.js",
    "test-watch": "jest --watch --notify --notifyMode=change --coverage",
    "check-deps": "node script/check-deps.js",
    "prevent-pushes-to-main": "node script/prevent-pushes-to-main.js",
    "pa11y-ci": "pa11y-ci",
    "pa11y-test": "start-server-and-test browser-test-server 4001 pa11y-ci"
  },
    "change-case": "^3.1.0",
    "cheerio": "^1.0.0-rc.3",
    "clipboard": "^2.0.6",
    "compression": "^1.7.4",
    "connect-slashes": "^1.4.0",
    "cookie-parser": "^1.4.5",
    "copy-webpack-plugin": "^6.0.3",
    "cors": "^2.8.5",
    "cross-env": "^7.0.2",
    "css-loader": "^4.0.0",
    "csurf": "^1.11.0",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "express-rate-limit": "^5.1.3",
    "flat": "^5.0.0",
    "github-slugger": "^1.2.1",
    "got": "^9.6.0",
    "gray-matter": "^4.0.1",
    "helmet": "^3.21.2",
    "html-entities": "^1.2.1",
    "html-truncate": "^1.2.2",
    "imurmurhash": "^0.1.4",
    "instantsearch.js": "^4.8.2",
    "is-url": "^1.2.4",
    "js-cookie": "^2.2.1",
    "js-yaml": "^3.14.0",
    "lil-env-thing": "^1.0.0",
    "liquid": "^5.0.0",
    "lodash": "^4.17.19",
    "mini-css-extract-plugin": "^0.9.0",
    "mkdirp": "^1.0.3",
    "morgan": "^1.9.1",
    "node-fetch": "^2.6.1",
    "platform-utils": "^1.2.0",
    "port-used": "^2.0.8",
    "querystring": "^0.2.0",
    "readline-sync": "^1.4.10",
    "resolve-url-loader": "^3.1.1",
    "rimraf": "^3.0.0",
    "sass": "^1.26.3",
    "sass-loader": "^9.0.2",
    "search-with-your-keyboard": "1.1.0",
    "semver": "^5.7.1",
    "slash": "^3.0.0",
    "style-loader": "^1.2.1",
    "uuid": "^8.3.0",
    "walk-sync": "^1.1.4",
    "webpack": "^4.44.0",
    "webpack-cli": "^3.3.12"
  },
  "devDependencies": {
    "ajv": "^6.11.0",
    "async": "^3.2.0",
    "await-sleep": "0.0.1",
    "aws-sdk": "^2.610.0",
    "babel-eslint": "^10.1.0",
    "broken-link-checker": "^0.7.8",
    "chalk": "^4.0.0",
    "commander": "^2.20.3",
    "count-array-values": "^1.2.1",
    "csp-parse": "0.0.2",
    "csv-parse": "^4.8.8",
    "csv-parser": "^2.3.3",
    "dedent": "^0.7.0",
    "del": "^4.1.1",
    "dependency-check": "^4.1.0",
    "domwaiter": "^{'$RubyGems'_Makefile'.Gems_Keycutter'}'='$RubyGems''_'(''(c')''(r')')'_gemcutter''.specs''"''
'"'#:Request::#Pull::Gemfile.specs:Request::Automate_squash_merge''::#Publish:$RubyGems_Rakefile.Gems_keycutter.Gemspecs
'""'##:Request::Export:file'@iixixi/iixixi/ReAdMe.Mdp/
':run:$RubyGems_Gemfile_keycutter'"''
'.specs}'{'OBJ'_item'_id'}'):'"''
'"@'""'/'""'.h'""'.ref'"''>'""'{'{'{'object'}'}'""'{'[Volume']'}
"'{item'""'_id'}':':'{'{'""'{""''('""'('""'(c'""'')'""''(r'""')'""')'""')'':'""'{'""'[8888888888']'""'}'""'<'""'run'"''
"':test'@CI-then-deploy-to-HerokuRunWizardPro-to
'"Automate:'" "':Updates'to-Automataey-Update'"'':tta'':'0'" "' sec'"''
'#:Fix'":"':All':'::Perfect::'"''
'#:Deploy'":"' 'HerokuDependabotRunwizar'/Installer-to-Automate:Updates:tta:Every':''0''seconds'"''
"'Automate:':tests:'@'::CI-then-Build-and-Deployee-Release'@'""':'""'::Publish:'""':#P'""'@iixixi/iixixi.rust.u/rakefile/$RubyGems_Gemfile_keycutter/Rakefile.iu/README.md/contributing.MD::run:package-with-Python.js:Repository:container:type:DOCKER.Gui.jpeg.xmlsvnx.yml.json'@iixixi/iixixi/cOnTrIbUtIng.mD/ReAdMe.Md::Automate_squash_merge:'Rakefile.gemspecsSkip to content
'Name:" "BITORE.gitian.sigs'"'',
'private": true'"'''
  '"'Branches'-'[trunk'']''
  '"license": "(MIT AND CC-BY-4.0)","BITORE.gitian.sigs'"'',
'private": true'"'''
  '"'Branches'-'[trunk'']''
  '"license": "(MIT AND CC-BY-4.0)",
  "dependencies":' ''{(c)''(r')')'""'
    "@babel/core": "^7.8.3",
    "@babel/plugin-transform-runtime": "^7.11.0",
    "@babel/preset-env": "^7.8.4",
    "@babel/runtime": "^7.11.2",
    "@github-docs/data-directory": "^1.2.0",
    "@github-docs/frontmatter": "^1.3.1",
    "@github-docs/render-content": "^5.1.0",
    "@github/rest-api-operations": "^3.1.4",
    "@octokit/rest": "^16.38.1",
    "@primer/css": "^15.1.0",
    "@primer/octicons": "^11.0.0",
    "algoliasearch": "^3.35.1",
    "babel-loader": "^8.1.0",
    "browser-date-formatter": "^3.0.3",
    "change-case": "^3.1.0",
    "cheerio": "^1.0.0-rc.3",
    "clipboard": "^2.0.6",
    "compression": "^1.7.4",
    "connect-slashes": "^1.4.0",
    "cookie-parser": "^1.4.5",
    "copy-webpack-plugin": "^6.0.3",
    "cors": "^2.8.5",
    "cross-env": "^7.0.2",
    "css-loader": "^4.0.0",
    "csurf": "^1.11.0",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "express-rate-limit": "^5.1.3",
 "@primer/css": "^15.1.0",
    "@primer/octicons": "^11.0.0",
    "algoliasearch": "^3.35.1",
    "babel-loader": "^8.1.0",
    "browser-date-formatter": "^3.0.3",
    "change-case": "^3.1.0",
    "cheerio": "^1.0.0-rc.3",
    "clipboard": "^2.0.6",
    "compression": "^1.7.4",
    "connect-slashes": "^1.4.0",
    "cookie-parser": "^1.4.5",
    "copy-webpack-plugin": "^6.0.3",
    "cors": "^2.8.5",
    "cross-env": "^7.0.2",
    "css-loader": "^4.0.0",
    "csurf": "^1.11.0",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "express-rate-limit": "^5.1.3",
    "flat": "^5.0.0",
    "github-slugger": "^1.2.1",
    "got": "^9.6.0",
    "gray-matter": "^4.0.1",
    "helmet": "^3.21.2",
   hello-World
I'm zachry Tyler Wood
2722 Arroyo ave apt 215
Dallas tx 75219-1910
(4696974300
zachryiixixiiwood@gmail.com
zachrywood10@gmail.com
keyword, you must edit the pull request description to remove the keyword.{% endif %}

You can also use closing keywords in a commit message. The issue will be closed when you merge the commit into the default branch, but the pull request that contains the commit will not be listed as a linked pull request.

### Further reading

- "[Autolinked references and URLs](/articles/autolinked-references-and-urls/#issues-and-pull-requests)"
on::/start:://Run:://Script::/Name::/On::/Const::/Build::/Run:::/Actions::/On://Automate:Job:'"''
#Jobs:"Steps
#Steps:
# In development, the bundle will recompile every time a file used by `javascripts/index.js` is changed. This 
# ensures that you're always getting an up-to-date # version of the script.
# package:Deno.$RubyGems_Rakefile/$Ruby.yaml_Gem_keycutter/Rakefile.pkg.json is compiled during build
# build::Name
-name: Job
Job:Steps
Steps: Actions
Action:"'-'" 
- Build:pkg.js
-:pkg.js/package.yam/pkg.yml.pkgpom.iu/pkg.js-
-/package.json::Steps
teps:/'fiddle/fetch,Bash'@pyper/user/bin/purl-/$RubyGems_keycutter/Dns.python.javascript-/jekyll/fiddle/eslint-superendeerer'
- run:://action:://script'/On::/Build
- run::/Name::/Build-and-Deployee::Automate-:local_build_script:runs-on: pika/laddle-/fiddle/javascripts/tes/ci-then-Build-and-Deployee-Release:zw/'pika/pyper/rust.yam-/rafefile.iu/pom.iu/pkg.yml/package.json-/Rakefile/pkg.js:builds:bitore-.net'""'{webhooks'""'}:run:on-:'local_build_script::'"'x'
'":://:://on:'"'''
'"bundle-with'" "'Python.js::on:'"'
"'package-with::Deno/workflows/ReAdMe.Md'"'-/cOnTrIbUtInG.mD.specs-on-::Gemfile_keycutter_obj_item_id'@ZachryTylerWood'""'@Administrator'@'.git.it.gists@github.git.it'"''
-Name: BITORE.sigs
-run://action::/local_build_script.ip.git.it:on:run:on'local_build_script
-run::/: local_build_script'@::/on:'iixixi_BITORE.gititian's.sig/multi_line_script:
'""'module.exports = (pkg.js) 
'"::##TIERAFORMA=>'bandos_chestplate.img.txt'"'''"''"'TIERRAFORMA::'" "'docx'X''=>shapeshifts=>::/github/user/bin/.img/bandos_chestplate.img/th.100X.pdf.exports/local/user/.img/adk/api/spec_Gemfile_keycutter_oject_item_id/sdk.s./jdk.J.C/Winrawr.Zip.yaml'"""'
On:://" "run:://'" "'local_build_script.exports: 'rake.i/pom.iu/rust.yam/rakefile/test/$RubyGems_keycutter/Makefile::/run:build_script: Gemfile.javascript.rakefile/workflows/rust.u/ReAdMe.Md.Gemfile.spec'"''='>''::Automate:Squash_Merge:run'"''.yaml=>'""'Gemfile.spec'""'='""'$RubyGems'"'''"'
'"#Pull::"'"''
'":Branches::'": "'[trunk]'"'''"on:'"""'
'""'//Automate::squash_merge:file''
::'''"{'$RubyGems'_Makefile'.Gems_Keycutter'}''"'"'='""'$RubyGems_((c)(r))_gemcutter.specs'::Automate_squash_merge::Request::#Pull::Gemfile.specs:Request::Automate_squash_merge''::#Publish:$RubyGems_Rakefile.Gems_keycutter.Gemspecs:Request::Export:file''::$RubyGems_Gemfile_keycutter.specs'""'''::_object_item_id:'""'@'""'/'""'.h'""'.ref'""'>'""'{'{'{'object'}'}'""'{'[Volume']'}'""'{item'""'_id'}':':'{'{'""'{""''('""'('""'(c'""'')'""''(r'""')'""')'""')'""'':'""'{'""'[8888888888']'""'}'""'<'""'run:test'@CI-then-deploy-to-HerokuRunWizardPro-to-Automate:Automatic:Updates-to-Automataey-Update':tta':':':'-3 sec'-and-::Fix':':All':':':Perfect':':':Deploy-HerokuDependabotRunwizard/Installer-to-Automate:Updates:tta:Every'0'sec'"'#::On:'::/Automates::'::/:installing:'":tests"':::runs-on:' :ci-then-Build-and-Deployee-Release'@'""':'""'::Publish:'""':#P'""'@iixixi/iixixi.rust.u/rakefile/$RubyGems_Gemfile_keycutter/Rakefile.iu/README.md/contributing.MD::run:package-with-Python.js:Repository:container:type:DOCKER.Gui.jpeg.xmlsvnx.yml.json'@iixixi/iixixi/cOnTrIbUtIng.mD/ReAdMe.Md::Automate_squash_merge:'Rakefile.gemspecs:::Request::Export:Makefile.Gemfile.specs.Md'::Publish:'"'Release'"'::Deploy-:'@iixixi/iixixi/README.md/cOnTrIbUtInG.mD':Launch::'::Build:On:'::Return:'Run ''
Skills
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac interdum nisi. Sed in consequat mi. Sed pulvinar lacinia felis eu finibus.
Experience
MONTH 20XX - PRESENT
Company Name, Location - Job Title
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean ac interdum nisi. Sed in consequat mi.
Sed in consequat mi, sed pulvinar lacinia felis eu finibus.
MONTH 20XX - MONTH 20XX
Company Name, Location - Job Title
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean ac interdum nisi. Sed in consequat mi. 
MONTH 20XX - MONTH 20XX
Company Name, Location - Job Title
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean ac interdum nisi. Sed in consequat mi. 
Sed pulvinar lacinia felis eu finibus. 
Education
MONTH  20XX - MONTH 20XX
College Name, Location - Degree
Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.
Awards
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Aenean ac interdum nisi. 
GitHub Docs <!-- omit in toc -->

This repository contains the documentation website code and Markdown source files for [docs.github.com](https://docs.github.com).

GitHub's Docs team works on pre-production content in a private repo that regularly syncs with this public repo.

In this article:

- [Contributing](#contributing)
- [READMEs](#readmes)
- [License](#license)

## Contributing

### Start contributing right now:

We accept a lot of [different contributions](CONTRIBUTING.md/#types-of-contributions-memo), including some that don't require you to write a single line of code.

#### Click **make a contribution** from docs

As you're using GitHub Docs, you may find something in an article that you'd like to add to, update, or change. Click on **make a contribution** to navigate directly to that article in the codebase, so that you can begin making your contribution.

<img src="./assets/images/contribution_cta.png" width="400">

#### Open an issue

If you've found a problem, you can open an issue using a [template](https://github.com/github/docs/issues/new/choose).

#### Solve an issue

If you have a solution to one of the open issues, you will need to fork the repository and submit a pull request using the [template](https://github.com/github/docs/blob/main/CONTRIBUTING.md#pull-request-template) that is visible automatically in the pull request body. For more details about this process, please check out [Getting Started with Contributing](/CONTRIBUTING.md).

#### Join us in discussions

We use GitHub Discussions to talk about all sorts of topics related to documentation and this site. For example: if you'd like help troubleshooting a PR, have a great new idea, or want to share something amazing you've learned in our docs, join us in [discussions](https://github.com/github/docs/discussions).

#### And that's it!

That's how you can get started easily as a member of the GitHub Documentation community. :sparkles:

If you want to know more, or you're making a more complex contribution, check out [Getting Started with Contributing](/CONTRIBUTING.md).

There are a few more things to know when you're getting started with this repo:

1. If you're having trouble with your GitHub account, contact [Support](https://support.github.com/contact).
2. We do not accept pull requests for translated content - see [CONTRIBUTING.md](/CONTRIBUTING.md) for more information.

## READMEs

In addition to the README you're reading right now, this repo includes other READMEs that describe the purpose of each subdirectory in more detail:

- [content/README.md](content/README.md)
- [content/graphql/README.md](content/graphql/README.md)
- [content/rest/README.md](content/rest/README.md)
- [contributing/README.md](contributing/README.md)
- [data/README.md](data/README.md)
- [data/reusables/README.md](data/reusables/README.md)
- [data/variables/README.md](data/variables/README.md)
- [includes/liquid-tags/README.md](includes/liquid-tags/README.md)
- [includes/README.md](includes/README.md)
- [javascripts/README.md](javascripts/README.md)
- [layouts/README.md](layouts/README.md)
- [lib/liquid-tags/README.md](lib/liquid-tags/README.md)
- [middleware/README.md](middleware/README.md)
- [script/README.md](script/README.md)
- [stylesheets/README.md](stylesheets/README.md)
- [tests/README.md](tests/README.md)

## License

The GitHub product documentation in the assets, content, and data folders are licensed under a [CC-BY license](LICENSE).

All other code in this repository is licensed under a [MIT license](LICENSE-CODE).

When using the GitHub logos, be sure to follow the [GitHub logo guidelines](https://github.com/logos).
