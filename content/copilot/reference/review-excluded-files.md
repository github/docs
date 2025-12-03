---
title: Files excluded from {% data variables.copilot.copilot_code-review %}
shortTitle: Review excluded files
intro: 'Understand the types of files that are excluded from a review by {% data variables.product.prodname_copilot_short %}.'
versions:
  feature: copilot
topics:
  - Copilot
category:
  - Author and optimize with Copilot
contentType: reference
---

Certain types of files are excluded from {% data variables.copilot.copilot_code-review_short %}. These include dependency management files, log files, SVG files, and files in locations typically reserved for vendor files or automatically generated files.

If you include any of these files in a pull request, {% data variables.copilot.copilot_code-review_short %} will not consider the file when carrying out the review. Similarly, using {% data variables.copilot.copilot_code-review_short %} on one of these files in your IDE, will not generate review comments.

This is an example of some of the files that are excluded from {% data variables.copilot.copilot_code-review_short %}:

* `.gitignore`
* `package-lock.json`
* `yarn.lock`
* `jest.config.js`
* `next.config.js`
* `tailwind.config.js`
* `tsconfig.json`
* `requirements.txt`
* `Pipfile.lock`
* `Gemfile.lock`
* `composer.lock`
* `Cargo.lock`
* `go.sum`
* `paket.lock`
* `pubspec.lock`
* `stack.yaml`
* `elm.json`
* `Project.toml`
* `Manifest.toml`
* `renv.lock`
* `build.sbt`
* `Package.resolved`
* `deps.edn`
* `build.gradle`
* `mix.lock`
* `build.gradle.kts`
* `cpanfile`
* `Podfile.lock`
* `conanfile.txt`
* `info.rkt`
* `rockspec`
* `opam`
* `rebar.config`
* `nimble`
* `shard.yml`
* `dub.json`
* `dub.sdl`
* `GPR`
* `Mason.toml`
* `fpm.toml`
* `pack.pl`
* `baseline.st`
* `PacletInfo.m`
* `info.ss`
* `Jpkg`
* `box.json`
* `GNAVI.xml`

Files matching these patterns are also excluded:

* `**/*.svg`
* `**/*.log`
* `**/*.lock`
* `**/go.sum`
* `**/*.ipynb.raw.html`
* `**/dist/**/*`
* `**/node_modules/**/*`
* `**/*.min.js`
* `**/*.d.ts`
* `**/coverage/**/*`
* `**/*.bundle.js`
* `**/*.map`
* `**/out/**/*`
* `**/vendor/**/*`
* `**/bin/**/*`
* `**/generated/**/*`
* `**/generated-sources/**/*`
