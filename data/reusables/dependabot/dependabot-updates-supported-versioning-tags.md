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
| Bundler             | `bundler`      | `alpha`, `beta`, `rc`, `pre` | `rails@1.0.0.alpha`, `rack@1.0.0.beta1`, `rspec@1.0.0.rc2` |

#### Ecosystem-specific versioning details

The following details describe how {% data variables.product.prodname_dependabot %} interprets versioning for specific ecosystems.

* **Bundler:** Bundler does not use a fixed set of prerelease tags. Any version segment containing a letter is treated as a prerelease (for example, `.alpha`, `.beta1`, `.rc2`). Hyphens in version strings are normalized to `.pre.` internally (for example, `1.0.0-beta` becomes `1.0.0.pre.beta`).
