#![cfg(not(test))]
extern crate libc;
extern crate rustc_serialize;
extern crate rustbox;
extern crate docopt;
extern crate iota;
use std::io::stdin;
use docopt::Docopt;
use iota::{
    Editor, Input,
    StandardMode, NormalMode,
    RustboxFrontend, Mode
};
use rustbox::{InitOptions, RustBox, InputMode};
static USAGE: &'static str = "
Usage: iota [<filename>] [options]
       iota --help

Options:
    --vi           Start Iota with vi-like modes
    -h, --help     Show this message.
";

#[derive(RustcDecodable, Debug)]
struct Args {
    arg_filename: Option<String>,
    flag_vi: bool,
    flag_help: bool,
}
fn is_atty(fileno: libc::c_int) -> bool {
    // FIXME: find a way to do this without unsafe
    //        std::io doesn't allow for this, currently
    unsafe { libc::isatty(fileno) != 0 }
}
fn main() {
    let args: Args = Docopt::new(USAGE)
                            .and_then(|d| d.decode())
                            .unwrap_or_else(|e| e.exit());
    let stdin_is_atty = is_atty(libc::STDIN_FILENO);
    let stderr_is_atty = is_atty(libc::STDERR_FILENO);
    // editor source - either a filename or stdin
    let source = if stdin_is_atty {
        Input::Filename(args.arg_filename)
    } else {
        Input::Stdin(stdin())
    };
    // initialise rustbox
    let rb = match RustBox::init(InitOptions{
        buffer_stderr: stderr_is_atty,
        input_mode: InputMode::Esc,
    }) {
        Result::Ok(v) => v,
        Result::Err(e) => panic!("{}", e),
    };
    // initialise the frontend
    let frontend = RustboxFrontend::new(&rb);
    // initialise the editor mode
    let mode: Box<Mode> = if args.flag_vi {
        Box::new(NormalMode::new())
    } else {
         Box::new(StandardMode::new())
    };
    // start the editor
    let mut editor = Editor::new(source, mod, frontend);
    editor.start();
}

# This Dockerfile is used for docker-based deployments to Azure for both preview environments and production	# This Dockerfile is used for docker-based deployments to Azure for both preview environments and production
# --------------------------------------------------------------------------------	# --------------------------------------------------------------------------------
# BASE IMAGE	# BASE IMAGE
# --------------------------------------------------------------------------------	# --------------------------------------------------------------------------------
FROM node:16.18.0-alpine@sha256:f16544bc93cf1a36d213c8e2efecf682e9f4df28429a629a37aaf38ecfc25cf4 as base	FROM node:19.1.0-alpine@sha256:c59fb39150e4a7ae14dfd42d3f9874398c7941784b73049c2d274115f00d36c8 as base


# This directory is owned by the node user	# This directory is owned by the node user
ARG APP_HOME=/home/node/app	ARG APP_HOME=/home/node/app
# Make sure we don't run anything as the root user	# Make sure we don't run anything as the root user
USER node	USER node
WORKDIR $APP_HOME	WORKDIR $APP_HOME
# ---------------	# ---------------
# ALL DEPS	# ALL DEPS
# ---------------	# ---------------
FROM base as all_deps	FROM base as all_deps
COPY --chown=node:node package.json package-lock.json ./	COPY --chown=node:node package.json package-lock.json ./
RUN npm ci --no-optional --registry https://registry.npmjs.org/	RUN npm ci --no-optional --registry https://registry.npmjs.org/
# For Next.js v12+	# For Next.js v12+
# This the appropriate necessary extra for node:16-alpine	# This the appropriate necessary extra for node:16-alpine
# Other options are https://www.npmjs.com/search?q=%40next%2Fswc	# Other options are https://www.npmjs.com/search?q=%40next%2Fswc
RUN npm i @next/swc-linux-x64-musl --no-save	RUN npm i @next/swc-linux-x64-musl --no-save
# ---------------	# ---------------
# PROD DEPS	# PROD DEPS
# ---------------	# ---------------
FROM all_deps as prod_deps	FROM all_deps as prod_deps
RUN npm prune --production	RUN npm prune --production
# ---------------	# ---------------
# BUILDER	# BUILDER
# ---------------	# ---------------
FROM all_deps as builder	FROM all_deps as builder
COPY stylesheets ./stylesheets	COPY stylesheets ./stylesheets
COPY pages ./pages	COPY pages ./pages
COPY components ./components	COPY components ./components
COPY lib ./lib	COPY lib ./lib
# Certain content is necessary for being able to build	# Certain content is necessary for being able to build
COPY content/index.md ./content/index.md	COPY content/index.md ./content/index.md
COPY content/rest ./content/rest	COPY content/rest ./content/rest
COPY data ./data	COPY data ./data
COPY next.config.js ./next.config.js	COPY next.config.js ./next.config.js
COPY tsconfig.json ./tsconfig.json	COPY tsconfig.json ./tsconfig.json
RUN npm run build	RUN npm run build
# --------------------------------------------------------------------------------	# --------------------------------------------------------------------------------
# PREVIEW IMAGE - no translations	# PREVIEW IMAGE - no translations
# --------------------------------------------------------------------------------	# --------------------------------------------------------------------------------
FROM base as preview	FROM base as preview
# Copy just prod dependencies	# Copy just prod dependencies
COPY --chown=node:node --from=prod_deps $APP_HOME/node_modules $APP_HOME/node_modules	COPY --chown=node:node --from=prod_deps $APP_HOME/node_modules $APP_HOME/node_modules
# Copy our front-end code	# Copy our front-end code
COPY --chown=node:node --from=builder $APP_HOME/.next $APP_HOME/.next	COPY --chown=node:node --from=builder $APP_HOME/.next $APP_HOME/.next
# We should always be running in production mode	# We should always be running in production mode
ENV NODE_ENV production	ENV NODE_ENV production
# Preferred port for server.js	# Preferred port for server.js
ENV PORT 4000	ENV PORT 4000
ENV ENABLED_LANGUAGES "en"	ENV ENABLED_LANGUAGES "en"
# This makes it possible to set `--build-arg BUILD_SHA=abc123`	# This makes it possible to set `--build-arg BUILD_SHA=abc123`
# and it then becomes available as an environment variable in the docker run.	# and it then becomes available as an environment variable in the docker run.
ARG BUILD_SHA	ARG BUILD_SHA
ENV BUILD_SHA=$BUILD_SHA	ENV BUILD_SHA=$BUILD_SHA
# Copy only what's needed to run the server	# Copy only what's needed to run the server
COPY --chown=node:node package.json ./	COPY --chown=node:node package.json ./
COPY --chown=node:node assets ./assets	COPY --chown=node:node assets ./assets
COPY --chown=node:node content ./content	COPY --chown=node:node content ./content
COPY --chown=node:node lib ./lib	COPY --chown=node:node lib ./lib
COPY --chown=node:node middleware ./middleware	COPY --chown=node:node middleware ./middleware
COPY --chown=node:node data ./data	COPY --chown=node:node data ./data
COPY --chown=node:node next.config.js ./	COPY --chown=node:node next.config.js ./
COPY --chown=node:node server.js ./server.js	COPY --chown=node:node server.js ./server.js
COPY --chown=node:node start-server.js ./start-server.js	COPY --chown=node:node start-server.js ./start-server.js
EXPOSE $PORT	EXPOSE $PORT
CMD ["node", "server.js"]	CMD ["node", "server.js"]
# --------------------------------------------------------------------------------	# --------------------------------------------------------------------------------
# PRODUCTION IMAGE - includes all translations	# PRODUCTION IMAGE - includes all translations
# --------------------------------------------------------------------------------	# --------------------------------------------------------------------------------
FROM preview as production	FROM preview as production
# Copy in all translations	# Copy in all translations
COPY --chown=node:node translations ./translations	COPY --chown=node:node translations ./translations
 2  
Dockerfile.openapi_decorator
@@ -1,4 +1,4 @@
FROM node:14-alpine	FROM node:19-alpine


RUN apk add --no-cache git python make g++	RUN apk add --no-cache git python make g++


WORKDIR /openapi-check	WORKDIR /openapi-check
RUN chown node:node /openapi-check -R	RUN chown node:node /openapi-check -R
USER node	USER node
COPY --chown=node:node package.json /openapi-check	COPY --chown=node:node package.json /openapi-check
COPY --chown=node:node package-lock.json /openapi-check	COPY --chown=node:node package-lock.json /openapi-check
ADD --chown=node:node script /openapi-check/script	ADD --chown=node:node script /openapi-check/script
ADD --chown=node:node lib /openapi-check/lib	ADD --chown=node:node lib /openapi-check/lib
ADD --chown=node:node content /openapi-check/content	ADD --chown=node:node content /openapi-check/content
ADD --chown=node:node data /openapi-check/data	ADD --chown=node:node data /openapi-check/data
RUN npm ci -D	RUN npm ci -D
ENTRYPOINT ["node", "/openapi-check/script/rest/openapi-check.js"]	ENTRYPOINT ["node", "/openapi-check/script/rest/openapi-check.js"]
2 comments on commit 08de05c
@zakwarlord7
zakwarlord7 commented on 08de05c 3 weeks ago
diff --git a/.github/workflows/ci.yml b/.github/workflows/ci.yml
index 76c2ce19..053ce48a 100644
--- a/.github/workflows/ci.yml
+++ b/.github/workflows/ci.yml
@@ -1,13 +1,13 @@
-name: CI
-on: [push]
-jobs:

build:
+Name: ci :
+on: [push]''
+jobs:''
build:''
runs-on: ubuntu-latest
steps:
 - name: Checkout
   uses: actions/checkout@v1
 - name: Approve Pull Request
   uses: ./
   with:
     github-token: ${{ secrets.GITHUB_TOKEN }}
     number: 1
+'=''steps':'' :
+'-'' name: Checkout :
+'-'' 'uses: actions/checkout@v1' :
+'-'' Name: Approve Pull Request :
+'-'' uses: ./-plugg-in's'' :
'"'{' '"(secret)'.(token)'.'[VOLUME'.'[00']DENOMONATION']'.(ITEM'_ID'.DB)' ':' {{{{'[(' {'[(((c)'.(r))[12753750'.'[00']m']'.'(BITORE'_34173'.1337')' )']}}}'"'':
     'number: 1
 298  
package-lock.json
@@ -59,6 +59,7 @@
        "next": "12.2.4",	        "next": "12.2.4",
        "parse5": "7.0.0",	        "parse5": "7.0.0",
        "port-used": "^2.0.8",	        "port-used": "^2.0.8",
        "puppeteer": "^19.1.1",
        "react": "^17.0.2",	        "react": "^17.0.2",
        "react-dom": "^17.0.2",	        "react-dom": "^17.0.2",
        "react-markdown": "^8.0.3",	        "react-markdown": "^8.0.3",
@@ -169,7 +170,7 @@
        "esm": "^3.2.25",	        "esm": "^3.2.25",
        "image-size": "^1.0.1",	        "image-size": "^1.0.1",
        "jest-puppeteer": "^5.0.4",	        "jest-puppeteer": "^5.0.4",
        "puppeteer": "^9.1.1",	        "puppeteer": "^19.1.1",
        "website-scraper": "^5.0.0"	        "website-scraper": "^5.0.0"
      }	      }
    },	    },
@@ -4468,6 +4469,12 @@
      "dev": true,	      "dev": true,
      "license": "MIT"	      "license": "MIT"
    },	    },
    "node_modules/@types/parse-json": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/@types/parse-json/-/parse-json-4.0.0.tgz",
      "integrity": "sha512-//oorEZjL6sbPcKUaCdIGlIUeH26mgzimjBB77G6XRgnDl/L5wOnpyBGRe/Mmf5CVW3PwEBE1NjiMZ/ssFh4wA==",
      "optional": true
    },
    "node_modules/@types/parse5": {	    "node_modules/@types/parse5": {
      "version": "6.0.1",	      "version": "6.0.1",
      "license": "MIT"	      "license": "MIT"
@@ -6624,7 +6631,7 @@
      "version": "3.1.0",	      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",	      "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
      "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",	      "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
      "dev": true,	      "devOptional": true,
      "engines": {	      "engines": {
        "node": ">=6"	        "node": ">=6"
      }	      }
@@ -7301,6 +7308,31 @@
        "node": ">= 0.10"	        "node": ">= 0.10"
      }	      }
    },	    },
    "node_modules/cosmiconfig": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/cosmiconfig/-/cosmiconfig-7.0.1.tgz",
      "integrity": "sha512-a1YWNUV2HwGimB7dU2s1wUMurNKjpx60HxBB6xUM8Re+2s1g1IIfJvFR0/iCF+XHdE0GMTKTuLR32UQff4TEyQ==",
      "optional": true,
      "dependencies": {
        "@types/parse-json": "^4.0.0",
        "import-fresh": "^3.2.1",
        "parse-json": "^5.0.0",
        "path-type": "^4.0.0",
        "yaml": "^1.10.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/cosmiconfig/node_modules/yaml": {
      "version": "1.10.2",
      "resolved": "https://registry.npmjs.org/yaml/-/yaml-1.10.2.tgz",
      "integrity": "sha512-r3vXyErRCYJ7wg28yvBY5VSoAF8ZvlcW9/BwUzEtUsjvX/DKs24dIkuwjtuprwJJHsbyUbLApepYTR1BN4uHrg==",
      "optional": true,
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/cross-env": {	    "node_modules/cross-env": {
      "version": "7.0.3",	      "version": "7.0.3",
      "dev": true,	      "dev": true,
@@ -7318,6 +7350,15 @@
        "yarn": ">=1"	        "yarn": ">=1"
      }	      }
    },	    },
    "node_modules/cross-fetch": {
      "version": "3.1.5",
      "resolved": "https://registry.npmjs.org/cross-fetch/-/cross-fetch-3.1.5.tgz",
      "integrity": "sha512-lvb1SBsI0Z7GDwmuid+mU3kWVBwTVUbe7S0H52yaaAdQOXq2YktTCZdlAcNKFzE6QtRz0snpw9bNiPeOIkkQvw==",
      "optional": true,
      "dependencies": {
        "node-fetch": "2.6.7"
      }
    },
    "node_modules/cross-spawn": {	    "node_modules/cross-spawn": {
      "version": "7.0.3",	      "version": "7.0.3",
      "dev": true,	      "dev": true,
@@ -7605,9 +7646,9 @@
      }	      }
    },	    },
    "node_modules/devtools-protocol": {	    "node_modules/devtools-protocol": {
      "version": "0.0.869402",	      "version": "0.0.1045489",
      "resolved": "https://registry.npmjs.org/devtools-protocol/-/devtools-protocol-0.0.869402.tgz",	      "resolved": "https://registry.npmjs.org/devtools-protocol/-/devtools-protocol-0.0.1045489.tgz",
      "integrity": "sha512-VvlVYY+VDJe639yHs5PHISzdWTLL3Aw8rO4cvUtwvoxFd6FHbE4OpHHcde52M6096uYYazAmd4l0o5VuFRO2WA==",	      "integrity": "sha512-D+PTmWulkuQW4D1NTiCRCFxF7pQPn0hgp4YyX4wAQ6xYXKOadSWPR3ENGDQ47MW/Ewc9v2rpC/UEEGahgBYpSQ==",
      "optional": true	      "optional": true
    },	    },
    "node_modules/diff": {	    "node_modules/diff": {
@@ -7843,7 +7884,7 @@
    },	    },
    "node_modules/error-ex": {	    "node_modules/error-ex": {
      "version": "1.3.2",	      "version": "1.3.2",
      "dev": true,	      "devOptional": true,
      "license": "MIT",	      "license": "MIT",
      "dependencies": {	      "dependencies": {
        "is-arrayish": "^0.2.1"	        "is-arrayish": "^0.2.1"
@@ -10495,9 +10536,10 @@
      }	      }
    },	    },
    "node_modules/https-proxy-agent": {	    "node_modules/https-proxy-agent": {
      "version": "5.0.0",	      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-5.0.1.tgz",
      "integrity": "sha512-dFcAjpTQFgoLMzC2VwU+C/CbS7uRL0lWmxDITmqm7C+7F0Odmj6s9l6alZc6AELXhrnggM2CeWSXHGOdX2YtwA==",
      "devOptional": true,	      "devOptional": true,
      "license": "MIT",	
      "dependencies": {	      "dependencies": {
        "agent-base": "6",	        "agent-base": "6",
        "debug": "4"	        "debug": "4"
@@ -10597,7 +10639,7 @@
      "version": "3.3.0",	      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.0.tgz",	      "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.0.tgz",
      "integrity": "sha512-veYYhQa+D1QBKznvhUHxb8faxlrwUnxseDAbAp457E0wLNio2bOSKnjYDhMj+YiAq61xrMGhQk9iXVk5FzgQMw==",	      "integrity": "sha512-veYYhQa+D1QBKznvhUHxb8faxlrwUnxseDAbAp457E0wLNio2bOSKnjYDhMj+YiAq61xrMGhQk9iXVk5FzgQMw==",
      "dev": true,	      "devOptional": true,
      "dependencies": {	      "dependencies": {
        "parent-module": "^1.0.0",	        "parent-module": "^1.0.0",
        "resolve-from": "^4.0.0"	        "resolve-from": "^4.0.0"
@@ -10740,7 +10782,7 @@
    },	    },
    "node_modules/is-arrayish": {	    "node_modules/is-arrayish": {
      "version": "0.2.1",	      "version": "0.2.1",
      "dev": true,	      "devOptional": true,
      "license": "MIT"	      "license": "MIT"
    },	    },
    "node_modules/is-bigint": {	    "node_modules/is-bigint": {
@@ -13596,7 +13638,7 @@
    },	    },
    "node_modules/json-parse-even-better-errors": {	    "node_modules/json-parse-even-better-errors": {
      "version": "2.3.1",	      "version": "2.3.1",
      "dev": true,	      "devOptional": true,
      "license": "MIT"	      "license": "MIT"
    },	    },
    "node_modules/json-schema-traverse": {	    "node_modules/json-schema-traverse": {
@@ -13758,7 +13800,7 @@
    },	    },
    "node_modules/lines-and-columns": {	    "node_modules/lines-and-columns": {
      "version": "1.2.4",	      "version": "1.2.4",
      "dev": true,	      "devOptional": true,
      "license": "MIT"	      "license": "MIT"
    },	    },
    "node_modules/linkinator": {	    "node_modules/linkinator": {
@@ -15953,7 +15995,7 @@
    },	    },
    "node_modules/p-try": {	    "node_modules/p-try": {
      "version": "2.2.0",	      "version": "2.2.0",
      "devOptional": true,	      "dev": true,
      "license": "MIT",	      "license": "MIT",
      "engines": {	      "engines": {
        "node": ">=6"	        "node": ">=6"
@@ -15990,7 +16032,7 @@
      "version": "1.0.1",	      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",	      "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
      "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",	      "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
      "dev": true,	      "devOptional": true,
      "dependencies": {	      "dependencies": {
        "callsites": "^3.0.0"	        "callsites": "^3.0.0"
      },	      },
@@ -16016,7 +16058,7 @@
    },	    },
    "node_modules/parse-json": {	    "node_modules/parse-json": {
      "version": "5.2.0",	      "version": "5.2.0",
      "dev": true,	      "devOptional": true,
      "license": "MIT",	      "license": "MIT",
      "dependencies": {	      "dependencies": {
        "@babel/code-frame": "^7.0.0",	        "@babel/code-frame": "^7.0.0",
@@ -16135,7 +16177,7 @@
      "version": "4.0.0",	      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-type/-/path-type-4.0.0.tgz",	      "resolved": "https://registry.npmjs.org/path-type/-/path-type-4.0.0.tgz",
      "integrity": "sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw==",	      "integrity": "sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw==",
      "dev": true,	      "devOptional": true,
      "engines": {	      "engines": {
        "node": ">=8"	        "node": ">=8"
      }	      }
@@ -16195,7 +16237,7 @@
    },	    },
    "node_modules/pkg-dir": {	    "node_modules/pkg-dir": {
      "version": "4.2.0",	      "version": "4.2.0",
      "devOptional": true,	      "dev": true,
      "license": "MIT",	      "license": "MIT",
      "dependencies": {	      "dependencies": {
        "find-up": "^4.0.0"	        "find-up": "^4.0.0"
@@ -16206,7 +16248,7 @@
    },	    },
    "node_modules/pkg-dir/node_modules/find-up": {	    "node_modules/pkg-dir/node_modules/find-up": {
      "version": "4.1.0",	      "version": "4.1.0",
      "devOptional": true,	      "dev": true,
      "license": "MIT",	      "license": "MIT",
      "dependencies": {	      "dependencies": {
        "locate-path": "^5.0.0",	        "locate-path": "^5.0.0",
@@ -16218,7 +16260,7 @@
    },	    },
    "node_modules/pkg-dir/node_modules/locate-path": {	    "node_modules/pkg-dir/node_modules/locate-path": {
      "version": "5.0.0",	      "version": "5.0.0",
      "devOptional": true,	      "dev": true,
      "license": "MIT",	      "license": "MIT",
      "dependencies": {	      "dependencies": {
        "p-locate": "^4.1.0"	        "p-locate": "^4.1.0"
@@ -16229,7 +16271,7 @@
    },	    },
    "node_modules/pkg-dir/node_modules/p-limit": {	    "node_modules/pkg-dir/node_modules/p-limit": {
      "version": "2.3.0",	      "version": "2.3.0",
      "devOptional": true,	      "dev": true,
      "license": "MIT",	      "license": "MIT",
      "dependencies": {	      "dependencies": {
        "p-try": "^2.0.0"	        "p-try": "^2.0.0"
@@ -16243,7 +16285,7 @@
    },	    },
    "node_modules/pkg-dir/node_modules/p-locate": {	    "node_modules/pkg-dir/node_modules/p-locate": {
      "version": "4.1.0",	      "version": "4.1.0",
      "devOptional": true,	      "dev": true,
      "license": "MIT",	      "license": "MIT",
      "dependencies": {	      "dependencies": {
        "p-limit": "^2.2.0"	        "p-limit": "^2.2.0"
@@ -16254,7 +16296,7 @@
    },	    },
    "node_modules/pkg-dir/node_modules/path-exists": {	    "node_modules/pkg-dir/node_modules/path-exists": {
      "version": "4.0.0",	      "version": "4.0.0",
      "devOptional": true,	      "dev": true,
      "license": "MIT",	      "license": "MIT",
      "engines": {	      "engines": {
        "node": ">=8"	        "node": ">=8"
@@ -16491,28 +16533,58 @@
      }	      }
    },	    },
    "node_modules/puppeteer": {	    "node_modules/puppeteer": {
      "version": "9.1.1",	      "version": "19.1.1",
      "resolved": "https://registry.npmjs.org/puppeteer/-/puppeteer-9.1.1.tgz",	      "resolved": "https://registry.npmjs.org/puppeteer/-/puppeteer-19.1.1.tgz",
      "integrity": "sha512-W+nOulP2tYd/ZG99WuZC/I5ljjQQ7EUw/jQGcIb9eu8mDlZxNY2SgcJXTLG9h5gRvqA3uJOe4hZXYsd3EqioMw==",	      "integrity": "sha512-nyIytOp1mYagiVeKkWODuMAGJoeQkcGNy7utkm2BN2d2r90n1ezO1tM4ld2V3vpP4u2kGk20obqv/Lj0Icd3KA==",
      "deprecated": "Version no longer supported. Upgrade to @latest",	
      "hasInstallScript": true,	      "hasInstallScript": true,
      "optional": true,	      "optional": true,
      "dependencies": {	      "dependencies": {
        "debug": "^4.1.0",	        "cosmiconfig": "7.0.1",
        "devtools-protocol": "0.0.869402",	        "https-proxy-agent": "5.0.1",
        "extract-zip": "^2.0.0",	        "progress": "2.0.3",
        "https-proxy-agent": "^5.0.0",	        "proxy-from-env": "1.1.0",
        "node-fetch": "^2.6.1",	        "puppeteer-core": "19.1.1"
        "pkg-dir": "^4.2.0",	      },
        "progress": "^2.0.1",	      "engines": {
        "proxy-from-env": "^1.1.0",	        "node": ">=14.1.0"
        "rimraf": "^3.0.2",	      }
        "tar-fs": "^2.0.0",	    },
        "unbzip2-stream": "^1.3.3",	    "node_modules/puppeteer-core": {
        "ws": "^7.2.3"	      "version": "19.1.1",
      "resolved": "https://registry.npmjs.org/puppeteer-core/-/puppeteer-core-19.1.1.tgz",
      "integrity": "sha512-jV26Ke0VFel4MoXLjqm50uAW2uwksTP6Md1tvtXqWqXM5FyboKI6E9YYJ1qEQilUAqlhgGq8xLN5+SL8bPz/kw==",
      "optional": true,
      "dependencies": {
        "cross-fetch": "3.1.5",
        "debug": "4.3.4",
        "devtools-protocol": "0.0.1045489",
        "extract-zip": "2.0.1",
        "https-proxy-agent": "5.0.1",
        "proxy-from-env": "1.1.0",
        "rimraf": "3.0.2",
        "tar-fs": "2.1.1",
        "unbzip2-stream": "1.4.3",
        "ws": "8.9.0"
      },	      },
      "engines": {	      "engines": {
        "node": ">=10.18.1"	        "node": ">=14.1.0"
      }
    },
    "node_modules/puppeteer-core/node_modules/debug": {
      "version": "4.3.4",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",
      "integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",
      "optional": true,
      "dependencies": {
        "ms": "2.1.2"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }	      }
    },	    },
    "node_modules/qs": {	    "node_modules/qs": {
@@ -17853,7 +17925,7 @@
      "version": "4.0.0",	      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",	      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
      "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",	      "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
      "dev": true,	      "devOptional": true,
      "engines": {	      "engines": {
        "node": ">=4"	        "node": ">=4"
      }	      }
@@ -20579,12 +20651,12 @@
      }	      }
    },	    },
    "node_modules/ws": {	    "node_modules/ws": {
      "version": "7.5.9",	      "version": "8.9.0",
      "resolved": "https://registry.npmjs.org/ws/-/ws-7.5.9.tgz",	      "resolved": "https://registry.npmjs.org/ws/-/ws-8.9.0.tgz",
      "integrity": "sha512-F+P9Jil7UiSKSkppIiD94dN07AwvFixvLIj1Og1Rl9GGMuNipJnV9JzjD6XuqmAeiswGvUmNLjr5cFuXwNS77Q==",	      "integrity": "sha512-Ja7nszREasGaYUYCI2k4lCKIRTt+y7XuqVoHR44YpI49TtryyqbqvDMn5eqfW7e6HzTukDRIsXqzVHScqRcafg==",
      "optional": true,	      "optional": true,
      "engines": {	      "engines": {
        "node": ">=8.3.0"	        "node": ">=10.0.0"
      },	      },
      "peerDependencies": {	      "peerDependencies": {
        "bufferutil": "^4.0.1",	        "bufferutil": "^4.0.1",
@@ -23861,6 +23933,12 @@
      "version": "2.4.1",	      "version": "2.4.1",
      "dev": true	      "dev": true
    },	    },
    "@types/parse-json": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/@types/parse-json/-/parse-json-4.0.0.tgz",
      "integrity": "sha512-//oorEZjL6sbPcKUaCdIGlIUeH26mgzimjBB77G6XRgnDl/L5wOnpyBGRe/Mmf5CVW3PwEBE1NjiMZ/ssFh4wA==",
      "optional": true
    },
    "@types/parse5": {	    "@types/parse5": {
      "version": "6.0.1"	      "version": "6.0.1"
    },	    },
@@ -25495,7 +25573,7 @@
      "version": "3.1.0",	      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",	      "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
      "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",	      "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
      "dev": true	      "devOptional": true
    },	    },
    "camel-case": {	    "camel-case": {
      "version": "4.1.2",	      "version": "4.1.2",
@@ -25940,13 +26018,43 @@
        "vary": "^1"	        "vary": "^1"
      }	      }
    },	    },
    "cosmiconfig": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/cosmiconfig/-/cosmiconfig-7.0.1.tgz",
      "integrity": "sha512-a1YWNUV2HwGimB7dU2s1wUMurNKjpx60HxBB6xUM8Re+2s1g1IIfJvFR0/iCF+XHdE0GMTKTuLR32UQff4TEyQ==",
      "optional": true,
      "requires": {
        "@types/parse-json": "^4.0.0",
        "import-fresh": "^3.2.1",
        "parse-json": "^5.0.0",
        "path-type": "^4.0.0",
        "yaml": "^1.10.0"
      },
      "dependencies": {
        "yaml": {
          "version": "1.10.2",
          "resolved": "https://registry.npmjs.org/yaml/-/yaml-1.10.2.tgz",
          "integrity": "sha512-r3vXyErRCYJ7wg28yvBY5VSoAF8ZvlcW9/BwUzEtUsjvX/DKs24dIkuwjtuprwJJHsbyUbLApepYTR1BN4uHrg==",
          "optional": true
        }
      }
    },
    "cross-env": {	    "cross-env": {
      "version": "7.0.3",	      "version": "7.0.3",
      "dev": true,	      "dev": true,
      "requires": {	      "requires": {
        "cross-spawn": "^7.0.1"	        "cross-spawn": "^7.0.1"
      }	      }
    },	    },
    "cross-fetch": {
      "version": "3.1.5",
      "resolved": "https://registry.npmjs.org/cross-fetch/-/cross-fetch-3.1.5.tgz",
      "integrity": "sha512-lvb1SBsI0Z7GDwmuid+mU3kWVBwTVUbe7S0H52yaaAdQOXq2YktTCZdlAcNKFzE6QtRz0snpw9bNiPeOIkkQvw==",
      "optional": true,
      "requires": {
        "node-fetch": "2.6.7"
      }
    },
    "cross-spawn": {	    "cross-spawn": {
      "version": "7.0.3",	      "version": "7.0.3",
      "dev": true,	      "dev": true,
@@ -26127,9 +26235,9 @@
      "dev": true	      "dev": true
    },	    },
    "devtools-protocol": {	    "devtools-protocol": {
      "version": "0.0.869402",	      "version": "0.0.1045489",
      "resolved": "https://registry.npmjs.org/devtools-protocol/-/devtools-protocol-0.0.869402.tgz",	      "resolved": "https://registry.npmjs.org/devtools-protocol/-/devtools-protocol-0.0.1045489.tgz",
      "integrity": "sha512-VvlVYY+VDJe639yHs5PHISzdWTLL3Aw8rO4cvUtwvoxFd6FHbE4OpHHcde52M6096uYYazAmd4l0o5VuFRO2WA==",	      "integrity": "sha512-D+PTmWulkuQW4D1NTiCRCFxF7pQPn0hgp4YyX4wAQ6xYXKOadSWPR3ENGDQ47MW/Ewc9v2rpC/UEEGahgBYpSQ==",
      "optional": true	      "optional": true
    "puppeteer": {	    "puppeteer": {
      "version": "9.1.1",	      "version": "19.1.1",
      "resolved": "https://registry.npmjs.org/puppeteer/-/puppeteer-9.1.1.tgz",	      "resolved": "https://registry.npmjs.org/puppeteer/-/puppeteer-19.1.1.tgz",
      "integrity": "sha512-W+nOulP2tYd/ZG99WuZC/I5ljjQQ7EUw/jQGcIb9eu8mDlZxNY2SgcJXTLG9h5gRvqA3uJOe4hZXYsd3EqioMw==",	      "integrity": "sha512-nyIytOp1mYagiVeKkWODuMAGJoeQkcGNy7utkm2BN2d2r90n1ezO1tM4ld2V3vpP4u2kGk20obqv/Lj0Icd3KA==",
      "optional": true,	      "optional": true,
      "requires": {	      "requires": {
        "debug": "^4.1.0",	        "cosmiconfig": "7.0.1",
        "devtools-protocol": "0.0.869402",	        "https-proxy-agent": "5.0.1",
        "extract-zip": "^2.0.0",	        "progress": "2.0.3",
        "https-proxy-agent": "^5.0.0",	        "proxy-from-env": "1.1.0",
        "node-fetch": "^2.6.1",	        "puppeteer-core": "19.1.1"
        "pkg-dir": "^4.2.0",	      }
        "progress": "^2.0.1",	    },
        "proxy-from-env": "^1.1.0",	    "puppeteer-core": {
        "rimraf": "^3.0.2",	      "version": "19.1.1",
        "tar-fs": "^2.0.0",	      "resolved": "https://registry.npmjs.org/puppeteer-core/-/puppeteer-core-19.1.1.tgz",
        "unbzip2-stream": "^1.3.3",	      "integrity": "sha512-jV26Ke0VFel4MoXLjqm50uAW2uwksTP6Md1tvtXqWqXM5FyboKI6E9YYJ1qEQilUAqlhgGq8xLN5+SL8bPz/kw==",
        "ws": "^7.2.3"	      "optional": true,
      "requires": {
        "cross-fetch": "3.1.5",
        "debug": "4.3.4",
        "devtools-protocol": "0.0.1045489",
        "extract-zip": "2.0.1",
        "https-proxy-agent": "5.0.1",
        "proxy-from-env": "1.1.0",
        "rimraf": "3.0.2",
        "tar-fs": "2.1.1",
        "unbzip2-stream": "1.4.3",
        "ws": "8.9.0"
      },
      "dependencies": {
        "debug": {
          "version": "4.3.4",
          "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",
          "integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",
          "optional": true,
          "requires": {
            "ms": "2.1.2"
          }
        }
      }	      }
    },	    },
    "qs": {	    "qs": {
@@ -33099,7 +33231,7 @@
      "version": "4.0.0",	      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",	      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
      "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",	      "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
      "dev": true	      "devOptional": true
    },	    },
    "resolve.exports": {	    "resolve.exports": {
      "version": "1.1.0",	      "version": "1.1.0",
@@ -34979,9 +35111,9 @@
      }	      }
    },	    },
    "ws": {	    "ws": {
      "version": "7.5.9",	      "version": "8.9.0",
      "resolved": "https://registry.npmjs.org/ws/-/ws-7.5.9.tgz",	      "resolved": "https://registry.npmjs.org/ws/-/ws-8.9.0.tgz",
      "integrity": "sha512-F+P9Jil7UiSKSkppIiD94dN07AwvFixvLIj1Og1Rl9GGMuNipJnV9JzjD6XuqmAeiswGvUmNLjr5cFuXwNS77Q==",	      "integrity": "sha512-Ja7nszREasGaYUYCI2k4lCKIRTt+y7XuqVoHR44YpI49TtryyqbqvDMn5eqfW7e6HzTukDRIsXqzVHScqRcafg==",
      "optional": true,	      "optional": true,
      "requires": {}	      "requires": {}
    },	    },
  2  
package.json
@@ -174,7 +174,7 @@
    "esm": "^3.2.25",	    "esm": "^3.2.25",
    "image-size": "^1.0.1",	    "image-size": "^1.0.1",
    "jest-puppeteer": "^5.0.4",	    "jest-puppeteer": "^5.0.4",
    "puppeteer": "^9.1.1",	    "puppeteer": "^19.1.1",
    "website-scraper": "^5.0.0"	    "website-scraper": "^5.0.0"
  },	  },
  "private": true,	  "private": true,title: Getting started with GitHub
shortTitle: Get started
intro: 'Learn how to start building, shipping, and maintaining software with {% data variables.product.prodname_dotcom %}. Explore our products, sign up for an account, and connect with the world''s largest development community.'
redirect_from:
  - /categories/54/articles
  - /categories/bootcamp
  - /categories/32/articles
  - /categories/2/articles
  - /categories/organizations
  - /categories/about-github
  - /categories/53/articles
  - /categories/setup
  - /categories/getting-started-with-github
  - /categories/19/articles
  - /categories/using-git
  - /github/using-git
  - /github/getting-started-with-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
layout: product-landing
introLinks:
  quickstart: /get-started/quickstart
featuredLinks:
  guides:
    - /github/getting-started-with-github/githubs-products
    - /get-started/onboarding/getting-started-with-your-github-account
    - /get-started/onboarding/getting-started-with-github-team
    - /get-started/onboarding/getting-started-with-github-enterprise-cloud
    - /get-started/onboarding/getting-started-with-github-enterprise-server
    - /get-started/onboarding/getting-started-with-github-ae
    - /get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github
  popular:
    - /github/getting-started-with-github/signing-up-for-a-new-github-account
    - /get-started/quickstart/hello-world
    - /github/getting-started-with-github/set-up-git
    - /get-started/learning-about-github/about-versions-of-github-docs
    - /github/getting-started-with-github/github-glossary
    - /github/getting-started-with-github/keyboard-shortcuts
  guideCards:
    - /github/getting-started-with-github/types-of-github-accounts
    - /github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github
    - /github/getting-started-with-github/troubleshooting-connectivity-problems
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
children:
  - /quickstart
  - /onboarding
  - /learning-about-github
  - /signing-up-for-github
  - /using-github
  - /writing-on-github
  - /importing-your-projects-to-github
  - /exploring-projects-on-github
  - /getting-started-with-git
  - /using-git
  - /customizing-your-github-workflow
  - /privacy-on-github
:Publish::
