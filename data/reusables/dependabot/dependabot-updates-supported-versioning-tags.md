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
| {% ifversion dependabot-bazel-support %} |
| Bazel               | `bazel`        | Any SemVer prerelease identifier (commonly `alpha`, `beta`, `rc`) | `rules_go@0.46.0-rc1`, `rules_rust@0.40.0-beta`, `bazel_skylib@1.5.0-alpha` |
| {% endif %} |
| Bun                 | `bun`          | `alpha`, `beta`, `rc`, `canary` (SemVer prerelease after `-`) | `bun@1.0.0-beta.1`, `elysia@1.0.0-rc.3`, `hono@4.0.0-canary.1` |
| {% ifversion dependabot-deno-support %} |
| Deno                | `deno`         | Any SemVer prerelease identifier (commonly `alpha`, `beta`, `rc`) | `oak@13.0.0-alpha`, `fresh@2.0.0-rc.1`, `std@0.220.0-beta.2` |
| {% endif %} |
| {% data variables.product.prodname_actions %} | `github-actions` | Any SemVer prerelease identifier (commonly `alpha`, `beta`, `rc`) | `my-org/my-action@v1.0.0-beta.1`, `my-org/deploy@v2.0.0-rc1`, `my-org/lint@v3.0.0-alpha` |
| Hex                 | `mix`          | Any SemVer prerelease identifier (commonly `alpha`, `beta`, `rc`, `dev`) | `phoenix/phoenix@1.7.0-rc.0`, `elixir-ecto/ecto@3.11.0-beta.1`, `elixir-plug/plug@1.15.0-alpha.1` |
| {% ifversion dependabot-julia-support %} |
| Julia               | `julia`        | Any SemVer prerelease identifier (commonly `rc`, `DEV`, `beta`) | `HTTP@1.10.0-rc1`, `Plots@2.0.0-DEV`, `DataFrames@1.6.0-beta.1` |
| {% endif %} |
| {% ifversion dependabot-nix-support %} |
| Nix                 | `nix`          | None—tracks flake input commits (no versioning scheme) | `nixpkgs@a1b2c3d`, `devenv@e4f5a6b`, `flake-utils@c7d8e9f` |
| {% endif %} |
| NuGet               | `nuget`        | Any SemVer prerelease identifier (commonly `alpha`, `beta`, `rc`, `preview`) | `Newtonsoft.Json@13.0.0-rc1`, `Microsoft.Extensions.Hosting@8.0.0-preview.7`, `Serilog@3.0.0-beta.1` |
| {% ifversion dependabot-opentofu-support %} |
| OpenTofu            | `opentofu`     | Any SemVer prerelease identifier (commonly `alpha`, `beta`, `rc`) | `opentofu/aws@5.0.0-alpha`, `opentofu/google@5.0.0-rc1`, `opentofu/azurerm@4.0.0-beta1` |
| {% endif %} |
| {% ifversion dependabot-rust-toolchain-support %} |
| Rust toolchain      | `rust-toolchain` | Channel-based: `stable`, `beta`, `nightly` (not SemVer prerelease) | `rust@1.78.0`, `rust@beta`, `rust@nightly`, `rust@nightly-2024-01-15` |
| {% endif %} |
| Terraform           | `terraform`    | Any SemVer prerelease identifier (commonly `alpha`, `beta`, `rc`) | `hashicorp/aws@5.0.0-rc1`, `hashicorp/google@4.0.0-alpha`, `hashicorp/azurerm@3.0.0-beta1` |

#### Ecosystem-specific versioning details

The following details describe how {% data variables.product.prodname_dependabot %} interprets versioning for specific ecosystems.

* **Bundler:** Does not use a fixed set of prerelease tags. Any version segment containing a letter is treated as prerelease (for example, `.alpha`, `.beta1`, `.rc2`). Hyphens are normalized to `.pre.` internally (for example, `1.0.0-beta` becomes `1.0.0.pre.beta`).
* **Cargo:** Follows SemVer 2.0.0 conventions. Anything after `-` is a prerelease identifier (dot-separated, `[0-9A-Za-z-]`). Build metadata (`+...`) is allowed but ignored for precedence.
* **Gradle:** In addition to the qualifiers listed in the table, these aliases are recognized: `pr`/`pre`/`preview`→`rc`, `eap`/`ea`→`alpha`. Additional prerelease qualifiers include `dev`, `experimental`, and `unstable`. Qualifiers are ordered by precedence: `alpha`/`a` < `beta`/`b` < `milestone`/`m` < `rc`/`cr` < `snapshot` < (empty/`ga`/`final`/`release`) < `sp`. Free-form identifiers not in this list are treated as stable.
* **pip/pipenv/pip-compile/poetry (PEP 440):** The table lists canonical prerelease and postrelease suffixes. Aliases are also recognized and normalized (`alpha`→`a`, `beta`→`b`, `c`/`pre`/`preview`→`rc`, `rev`/`r`→`post`). Epoch versions (`N!...`) and local versions (`+local`) are supported; local segments are used only to break ties when the public version is identical.
* **Elm:** Enforces strict SemVer (`MAJOR.MINOR.PATCH` integers only). The Elm package registry does not allow publishing prerelease versions. {% data variables.product.prodname_dependabot %} compares versions numerically.
* **Go modules:** Follows SemVer with a mandatory `v` prefix. Pseudo-versions (`v0.0.0-YYYYMMDDHHMMSS-commithash`) represent unreleased commits and are always treated as prerelease. The `+incompatible` suffix marks modules at major version 2+ without a `go.mod` file and does not affect version ordering.
* **git submodule:** {% data variables.product.prodname_dependabot %} tracks the latest commit on the configured branch. There is no version comparison—updates always move the pinned SHA forward. If the submodule tracks a tag, {% data variables.product.prodname_dependabot %} follows the tag's commit.
{% ifversion dependabot-bazel-support %}
* **Bazel:** Follows SemVer prerelease conventions. The Bazel Central Registry (BCR) `.bcr.N` suffix is stripped before comparison and does not affect prerelease detection.
{% endif %}
* **Bun:** Follows npm-style SemVer prerelease conventions. Build metadata (`+...`) is supported but ignored for version precedence.
{% ifversion dependabot-deno-support %}
* **Deno:** Follows SemVer prerelease conventions. Build metadata (`+...`) is supported but ignored for version precedence.
{% endif %}
* **{% data variables.product.prodname_actions %}:** {% data variables.product.prodname_dependabot %} resolves action versions from git tags. Any tag with a SemVer prerelease identifier (anything after `-`) is treated as prerelease. Additionally, releases marked as prerelease via the GitHub Release API are recognized regardless of tag format.
* **Hex:** Follows SemVer prerelease conventions. Any identifier after `-` is treated as prerelease.
{% ifversion dependabot-julia-support %}
* **Julia:** Follows SemVer prerelease conventions. Prerelease identifiers are case-sensitive (for example, `DEV` and `dev` are distinct).
{% endif %}
{% ifversion dependabot-nix-support %}
* **Nix:** {% data variables.product.prodname_dependabot %} tracks flake input commits, similar to git submodules. The table shows user-facing commit SHAs; internally, versions are represented as pseudo-versions (`0.0.0-0.N`). There is no traditional version comparison—updates move forward to the latest upstream commit.
{% endif %}
* **NuGet:** Follows SemVer 2.0.0 prerelease conventions. Build metadata (`+...`) is supported but ignored for version precedence.
{% ifversion dependabot-opentofu-support %}
* **OpenTofu:** Follows SemVer prerelease conventions (same as Terraform). Build metadata (including the `+backport` suffix) is stripped before comparison and does not affect prerelease detection.
{% endif %}
{% ifversion dependabot-rust-toolchain-support %}
* **Rust toolchain:** Uses channel-based versioning (`stable`, `beta`, `nightly`) rather than SemVer prerelease identifiers. {% data variables.product.prodname_dependabot %} updates the pinned channel or date-stamped nightly (for example, `nightly-2024-01-15`) to the latest available.
{% endif %}
* **Terraform:** Follows SemVer prerelease conventions. The `v` prefix is stripped before comparison. Build metadata (`+...`) is ignored for version precedence.
