| Package manager | Languages | Recommended formats | All supported formats |
| --- | --- | --- | ---|
| Cargo | Rust | `Cargo.lock` | `Cargo.toml`, `Cargo.lock` |
| Composer             | PHP           | `composer.lock` | `composer.json`, `composer.lock` |
| NuGet | .NET languages (C#, F#, VB), C++  |   `.csproj`, `.vbproj`, `.nuspec`, `.vcxproj`, `.fsproj` |  `.csproj`, `.vbproj`, `.nuspec`, `.vcxproj`, `.fsproj`, `packages.config` |
| {% data variables.product.prodname_actions %} workflows | YAML | `.yml`, `.yaml` | `.yml`, `.yaml` |
| Go modules | Go | `go.mod`| `go.mod` |
| Maven | Java, Scala |  `pom.xml`  | `pom.xml`  |
| npm | JavaScript |            `package-lock.json` | `package-lock.json`, `package.json`|
| pip             | Python                    | `requirements.txt`, `pipfile.lock` | `requirements.txt`, `pipfile`, `pipfile.lock`, `setup.py` |
|  |
| pnpm             | JavaScript                    | `pnpm-lock.yaml` | `package.json`, `pnpm-lock.yaml` |
|  |
| pub             | Dart                    | `pubspec.lock` | `pubspec.yaml`, `pubspec.lock` |
| Python Poetry | Python                    | `poetry.lock` | `poetry.lock`, `pyproject.toml` |
| RubyGems             | Ruby           | `Gemfile.lock` | `Gemfile.lock`, `Gemfile`, `*.gemspec` |
| Swift Package Manager | Swift | `Package.resolved` | `Package.resolved` |
| Yarn | JavaScript | `yarn.lock` | `package.json`, `yarn.lock` |

> [!NOTE]
> * If you list your Python dependencies within a `setup.py` file, we may not be able to parse and list every dependency in your project.
> * {% data variables.product.prodname_actions %} workflows must be located in the `.github/workflows/` directory of a repository to be recognized as manifests. Any actions or workflows referenced using the syntax `jobs[*].steps[*].uses` or `jobs.<job_id>.uses` will be parsed as dependencies. For more information, see [AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions).
> * {% data reusables.dependabot.dependabot-alert-actions-semver %} For more information, see [AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts) and [AUTOTITLE](/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates).
