| Package manager | Languages | Static transitive dependencies | Automatic dependency submission | Recommended files | Additional files |
| --- | --- | --- | --- | --- | ---|
| {% ifversion dependabot-bazel-support %} |
| Bazel | Starlark | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | `MODULE.bazel`, `WORKSPACE` | `MODULE.bazel.lock`, `maven_install.json`, `*.MODULE.bazel` |
| {% endif %} |
| Cargo | Rust | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | `Cargo.lock` | `Cargo.toml` |
| Composer             | PHP           | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | `composer.lock` | `composer.json` |
| NuGet | .NET languages (C#, F#, VB), C++  | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | `.csproj`, `.vbproj`, `.nuspec`, `.vcxproj`, `.fsproj` | `packages.config` |
| {% data variables.product.prodname_actions %} workflows | YAML | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | `.yml`, `.yaml` | {% octicon "x" aria-label="None" %} |
| Go modules | Go | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |  `go.mod`| {% octicon "x" aria-label="None" %} |
| Gradle | Java  | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} |  {% octicon "x" aria-label="None" %} | {% octicon "x" aria-label="None" %} |
| {% ifversion dependabot-julia-support %} |
| Julia | Julia | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | `Manifest.toml` | `Project.toml` |
| {% endif %} |
| Maven | Java, Scala | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | `pom.xml`  | {% octicon "x" aria-label="None" %}  |
| npm | JavaScript | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | `package-lock.json` | `package.json`|
| {% ifversion dependabot-opentofu-support %} |
| OpenTofu | HCL | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | `.terraform.lock.hcl` | `.tf`, `.tofu` |
| {% endif %} |
| pip             | Python                    | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | `requirements.txt`, `pipfile.lock` | `pipfile`, `setup.py` |
| pnpm             | JavaScript                    | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | `pnpm-lock.yaml` | `package.json` |
| pub             | Dart                    | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | `pubspec.lock` | `pubspec.yaml` |
| Poetry | Python                    | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | `poetry.lock` | `pyproject.toml` |
| RubyGems             | Ruby           | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | `Gemfile.lock` | `Gemfile`, `*.gemspec` |
| Swift Package Manager | Swift | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | `Package.resolved` | {% octicon "x" aria-label="None" %} |
| Yarn | JavaScript | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | `yarn.lock` | `package.json` |

> [!NOTE]{% ifversion transitive-dependency-labeling-npm %}
>
> * The **Static transitive dependencies** column indicates whether static analysis will add `direct` and `transitive` labels for dependent packages in that ecosystem. Dependency submission actions (automatic or manually configured) can add transitive information for ecosystems where static analysis cannot. {% endif %}
> * If you list your Python dependencies within a `setup.py` file, we may not be able to parse and list every dependency in your project.
> * {% data variables.product.prodname_actions %} workflows must be located in the `.github/workflows/` directory of a repository to be recognized as manifests. Any actions or workflows referenced using the syntax `jobs[*].steps[*].uses` or `jobs.<job_id>.uses` will be parsed as dependencies. For more information, see [AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions).
> * {% data reusables.dependabot.dependabot-alert-actions-semver %} For more information, see [AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts) and [AUTOTITLE](/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates).

{% ifversion dependabot-community-ecosystems %}

### Community-maintained ecosystems

{% data reusables.dependabot.community-maintained-intro %}

| Ecosystem | Maintained by |
| --- | --- |
| {% ifversion dependabot-julia-support %} |
| Julia | Julia community |
| {% endif %} |
| {% ifversion dependabot-opentofu-support %} |
| OpenTofu | OpenTofu community |
| {% endif %} |
| pub | Dart community |

{% endif %}
