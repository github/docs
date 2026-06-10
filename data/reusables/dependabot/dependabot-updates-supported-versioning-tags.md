{% data variables.product.prodname_dependabot %} recognizes a variety of versioning tags for pre-releases, stable versions, and custom tags across different ecosystems.

The `dependabot.yml` file doesn't control the versioning tags that you can use, but you can define in configuration options such as [`ignore`](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#ignore--) the supported versioning tags you want to ignore updates for.

#### Supported versioning tags

| **Package Manager** | **YAML value** | **Supported Tags** | **Examples** |
|---------------------|----------------|--------------------|--------------|
| Maven               | `maven`        | `alpha, a, beta, b, milestone, m, rc, cr, sp, ga, final, release, snapshot` | `spring-security-web@5.6.0-SNAPSHOT`, `spring-core@5.2.0.RELEASE` |
| npm                 | `npm`          | `alpha`, `beta`, `canary`, `dev`, `experimental`, `latest`, `legacy`, `next`, `nightly`, `rc`, `release`, `stable` | `lodash@beta`, `react@latest`, `express@next` |
| pnpm                | `npm`          | `alpha`, `beta`, `canary`, `dev`, `experimental`, `latest`, `legacy`, `next`, `nightly`, `rc`, `release`, `stable` | `lodash@1.2.0-alpha`, `react@alpha`, `vue@next` |
| {% ifversion dependabot-sbt-support %} |
| sbt                 | `sbt`          | `alpha, a, beta, b, milestone, m, rc, cr, sp, ga, final, release, snapshot` | `akka-actor@2.7.0-RC1`, `play-json@3.0.0-M1` |
| {% endif %} |
| yarn                | `npm`          | `alpha`, `beta`, `canary`, `dev`, `experimental`, `latest`, `legacy`, `next`, `nightly`, `rc`, `release`, `stable` | `lodash@1.2.0-alpha`, `axios@latest`, `moment@nightly` |
| Bundler             | `bundler`      | Any prerelease identifier (commonly `alpha`, `beta`, `rc`, `pre`) | `rails@1.0.0.alpha`, `rack@1.0.0.beta1`, `rspec@1.0.0.rc2` |
| Cargo               | `cargo`        | Any SemVer prerelease identifier (commonly `alpha`, `beta`, `rc`, `dev`) | `serde@1.0.0-alpha`, `tokio@0.2.0-preview.3`, `clap@4.0.0-rc.1`, `rand@1.0.0-dev` |
| pip                 | `pip`          | `a`, `b`, `rc`, `dev`, `post` | `requests@1.0.0a1`, `numpy@2.0.0b3`, `django@4.0rc1`, `black@1.0.0.dev5`, `pandas@2.0.5.post1` |
| pipenv              | `pip`          | `a`, `b`, `rc`, `dev`, `post` | `requests@1.0.0a1`, `numpy@2.0.0b3`, `django@4.0rc1`, `black@1.0.0.dev5`, `pandas@2.0.5.post1` |
| pip-compile         | `pip`          | `a`, `b`, `rc`, `dev`, `post` | `requests@1.0.0a1`, `numpy@2.0.0b3`, `django@4.0rc1`, `black@1.0.0.dev5`, `pandas@2.0.5.post1` |
| poetry              | `pip`          | `a`, `b`, `rc`, `dev`, `post` | `requests@1.0.0a1`, `numpy@2.0.0b3`, `django@4.0rc1`, `black@1.0.0.dev5`, `pandas@2.0.5.post1` |
| Gradle              | `gradle`       | `alpha`, `a`, `beta`, `b`, `milestone`, `m`, `rc`, `cr`, `snapshot`, `ga`, `final`, `release`, `sp` (case-insensitive) | `spring-boot-starter@3.0.0-RC1`, `kotlin-stdlib@2.0.0-beta`, `guava@33.0.0-SNAPSHOT`, `junit@5.10.0-M2`, `ktor@2.3.0-rc.1` |
| Elm                 | `elm`          | None—strict `MAJOR.MINOR.PATCH` only (no pre-release versions) | `elm/core@1.0.0`, `elm/html@2.3.1`, `elm/json@10.0.0` |
| Docker              | `docker`       | `alpha`, `beta`, `rc`, `dev`, `preview`, `pre`, `nightly`, `snapshot`, `canary`, `unstable` (heuristic detection) | `nginx@1.25.0-rc1`, `node@20.0.0-alpha.1`, `redis@7.0.0-nightly`, `alpine@3.18.0-dev`, `ubuntu@22.04-preview` |
| git submodule       | `gitsubmodule` | None—pins to commit SHAs or git tags (no versioning scheme) | `my-lib@abc1234`, `shared-utils@v1.2.0` |
| Go modules          | `gomod`        | `alpha`, `beta`, `rc` (SemVer prerelease after `-`) | `github.com/go-chi/chi@v5.0.0-rc1`, `google.golang.org/grpc@v1.60.0-beta.1`, `github.com/octo-org/octo-module@v0.17.0-alpha.1` |

#### Ecosystem-specific versioning details

The following details describe how {% data variables.product.prodname_dependabot %} interprets versioning for specific ecosystems.

* **Bundler:** Bundler does not use a fixed set of prerelease tags. Any version segment containing a letter is treated as a prerelease (for example, `.alpha`, `.beta1`, `.rc2`). Hyphens in version strings are normalized to `.pre.` internally (for example, `1.0.0-beta` becomes `1.0.0.pre.beta`).
* **Cargo:** Follows SemVer 2.0.0 prerelease conventions. Anything after `-` is a prerelease identifier (dot-separated, `[0-9A-Za-z-]`). Build metadata (`+...`) is allowed but ignored for version precedence.
* **Gradle:** Aliases are also recognized: `pr`/`pre`/`preview`→`rc`, `eap`/`ea`→`alpha`. Additional prerelease qualifiers include `dev`, `experimental`, and `unstable`. Qualifiers are ordered by precedence: `alpha`/`a` < `beta`/`b` < `milestone`/`m` < `rc`/`cr` < `snapshot` < (empty/`ga`/`final`/`release`) < `sp`. Free-form identifiers not in this list are treated as stable.
* **pip/pipenv/pip-compile/poetry (PEP 440):** The table lists canonical prerelease and postrelease suffixes per PEP 440. Aliases are also recognized and normalized to their canonical forms (`alpha`→`a`, `beta`→`b`, `c`/`pre`/`preview`→`rc`, `rev`/`r`→`post`). Epoch versions (`N!...`) and local versions (`+local`) are supported; local version segments are used only to break ties when the public version is identical.
* **Elm:** The Elm package registry enforces strict SemVer (`MAJOR.MINOR.PATCH` integers only) and does not allow publishing pre-release versions. Dependabot compares versions numerically.
* **Go modules:** Follows SemVer with a mandatory `v` prefix. Pseudo-versions (`v0.0.0-YYYYMMDDHHMMSS-commithash`) are used for unreleased commits and are always treated as pre-release. The `+incompatible` suffix marks modules at major version 2+ without a `go.mod` file and does not affect version ordering.
* **git submodule:** Dependabot tracks the latest commit on the configured branch. There is no version comparison—updates always move the pinned SHA forward. If the submodule tracks a tag, Dependabot follows the tag's commit.
