| Package manager | Languages | Transitive dependencies | Recommended formats | All supported formats |
| --- | --- | --- | --- | ---|
| Cargo | Rust | {% octicon "x" aria-label="Not supported" %} | `Cargo.lock` | `Cargo.toml`, `Cargo.lock` |
| Composer             | PHP           | {% octicon "x" aria-label="Not supported" %} | `composer.lock` | `composer.json`, `composer.lock` |
| NuGet | .NET languages (C#, F#, VB), C++  | {% octicon "x" aria-label="Not supported" %} |  `.csproj`, `.vbproj`, `.nuspec`, `.vcxproj`, `.fsproj` |  `.csproj`, `.vbproj`, `.nuspec`, `.vcxproj`, `.fsproj`, `packages.config` |
| {% data variables.product.prodname_actions %} workflows | YAML | {% octicon "x" aria-label="Not supported" %} | `.yml`, `.yaml` | `.yml`, `.yaml` |
| Go modules | Go | {% octicon "x" aria-label="Not supported" %} | `go.mod`| `go.mod` |
| Maven | Java, Scala | {% octicon "check" aria-label="Supported" %} |  `pom.xml`  | `pom.xml`  |
| npm | JavaScript | {% octicon "check" aria-label="Supported" %} |          `package-lock.json` | `package-lock.json`, `package.json`|
| pip             | Python                    | {% octicon "x" aria-label="Not supported" %} | `requirements.txt`, `pipfile.lock` | `requirements.txt`, `pipfile`, `pipfile.lock`, `setup.py` |
| pnpm             | JavaScript                    | {% octicon "x" aria-label="Not supported" %} | `pnpm-lock.yaml` | `package.json`, `pnpm-lock.yaml` |
| pub             | Dart                    | {% octicon "x" aria-label="Not supported" %} | `pubspec.lock` | `pubspec.yaml`, `pubspec.lock` |
| Python Poetry | Python                    | {% octicon "x" aria-label="Not supported" %} | `poetry.lock` | `poetry.lock`, `pyproject.toml` |
| RubyGems             | Ruby           | {% octicon "x" aria-label="Not supported" %} | `Gemfile.lock` | `Gemfile.lock`, `Gemfile`, `*.gemspec` |
| Swift Package Manager | Swift | {% octicon "x" aria-label="Not supported" %} | `Package.resolved` | `Package.resolved` |
| Yarn | JavaScript | {% octicon "x" aria-label="Not supported" %} | `yarn.lock` | `package.json`, `yarn.lock` |

> [!NOTE]{% ifversion transitive-dependency-labeling-npm %}
> * The **Transitive dependencies** column indicates whether the dependency graph labels dependent packages in that ecosystem as direct or transitive on the dependency graph view, {% data variables.product.prodname_dependabot_alerts %}, the GraphQL API, and exported SBOMs. For more information, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#dependencies-view).{% endif %}
> * If you list your Python dependencies within a `setup.py` file, we may not be able to parse and list every dependency in your project.
> * {% data variables.product.prodname_actions %} workflows must be located in the `.github/workflows/` directory of a repository to be recognized as manifests. Any actions or workflows referenced using the syntax `jobs[*].steps[*].uses` or `jobs.<job_id>.uses` will be parsed as dependencies. For more information, see [AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions).
> * {% data reusables.dependabot.dependabot-alert-actions-semver %} For more information, see [AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts) and [AUTOTITLE](/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates).
