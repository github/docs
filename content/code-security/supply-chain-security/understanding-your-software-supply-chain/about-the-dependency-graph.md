---
title: About the dependency graph
intro: You can use the dependency graph to identify all your project's dependencies. The dependency graph supports a range of popular package ecosystems.
redirect_from:
  - /github/visualizing-repository-data-with-graphs/about-the-dependency-graph
  - /code-security/supply-chain-security/about-the-dependency-graph
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Dependency graph
  - Dependencies
  - Repositories
shortTitle: Dependency graph
---
<!--Marketing-LINK: From /features/security and /features/security/software-supply-chain pages "How GitHub's dependency graph is generated".-->

## About the dependency graph

{% data reusables.dependabot.about-the-dependency-graph %}

When you push a commit to {% data variables.product.product_name %} that changes or adds a supported manifest or lock file to the default branch, the dependency graph is automatically updated.{% ifversion fpt or ghec %} In addition, the graph is updated when anyone pushes a change to the repository of one of your dependencies.{% endif %} For information on the supported ecosystems and manifest files, see "[Supported package ecosystems](#supported-package-ecosystems)" below.

{% data reusables.dependency-submission.dependency-submission-link %}

When you create a pull request containing changes to dependencies that targets the default branch, {% data variables.product.prodname_dotcom %} uses the dependency graph to add dependency reviews to the pull request. These indicate whether the dependencies contain vulnerabilities and, if so, the version of the dependency in which the vulnerability was fixed. For more information, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)."

{% ifversion dependency-graph-sbom-export %}{% data reusables.dependency-graph.sbom-export %}{% endif %}

## Dependency graph availability

{% ifversion fpt or ghec %}
{% data reusables.dependency-graph.feature-availability %} For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)."

Repository administrators can also set up the dependency graph for private repositories. For more information, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph)."

{% endif %}

{% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

{% ifversion ghes %}
For more information about configuration of the dependency graph, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph)."{% endif %}

## Dependencies included

The dependency graph includes all the dependencies of a repository that are detailed in the manifest and lock files, or their equivalent, for supported ecosystems{% ifversion dependency-submission-api %}, as well as any dependencies that are submitted using the Dependency submission API (beta){% endif %}. This includes:

- Direct dependencies, that are explicitly defined in a manifest or lock file {% ifversion dependency-submission-api %} or have been submitted using the Dependency submission API (beta){% endif %}
- Indirect dependencies of these direct dependencies, also known as transitive dependencies or sub-dependencies

The dependency graph identifies indirect dependencies{% ifversion fpt or ghec %} only if they are defined in a lock file {% ifversion dependency-submission-api %}or have been submitted using the Dependency submission API (beta){% endif %}. For the most reliable graph, you should use lock files (or their equivalent) because they define exactly which versions of the direct and indirect dependencies you currently use. If you use lock files, you also ensure that all contributors to the repository are using the same versions, which will make it easier for you to test and debug code{% else %} from the lock files{% endif %}. {% ifversion dependency-submission-api %}If your ecosystem does not have lock files, you can use  pre-made actions that resolve transitive dependencies for many ecosystems. For more information, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api#using-pre-made-actions)."{% endif %}

For more information on how {% data variables.product.product_name %} helps you understand the dependencies in your environment, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security)."

{% ifversion fpt or ghec %}

## Dependents included

For public repositories, only public repositories that depend on it or on packages that it publishes are reported. This information is not reported for private repositories.{% endif %}

## Using the dependency graph

You can use the dependency graph to:

- Explore the repositories your code depends on{% ifversion fpt or ghec %}, and those that depend on it{% endif %}. For more information, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository)." {% ifversion ghec %}
- View a summary of the dependencies used in your organization's repositories in a single dashboard. For more information, see "[AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization#viewing-organization-dependency-insights)."{% endif %}
- View and update vulnerable dependencies for your repository. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)."{% ifversion fpt or ghes or ghec %}
- See information about vulnerable dependencies in pull requests. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)."{% endif %}

## Supported package ecosystems

The recommended formats explicitly define which versions are used for all direct and all indirect dependencies. If you use these formats, your dependency graph is more accurate. It also reflects the current build set up and enables the dependency graph to report vulnerabilities in both direct and indirect dependencies.{% ifversion fpt or ghec %} Indirect dependencies that are inferred from a manifest file (or equivalent) are excluded from the checks for insecure dependencies.{% endif %}

| Package manager | Languages | Recommended formats | All supported formats |
| --- | --- | --- | ---|
{%- ifversion dependency-graph-rust-support %}
| Cargo | Rust | `Cargo.lock` | `Cargo.toml`, `Cargo.lock` |
{%- endif %}
| Composer             | PHP           | `composer.lock` | `composer.json`, `composer.lock` |
| NuGet | .NET languages (C#, F#, VB), C++  |   `.csproj`, `.vbproj`, `.nuspec`, `.vcxproj`, `.fsproj` |  `.csproj`, `.vbproj`, `.nuspec`, `.vcxproj`, `.fsproj`, `packages.config` |
{%- ifversion github-actions-in-dependency-graph %}
| {% data variables.product.prodname_actions %} workflows | YAML | `.yml`, `.yaml` | `.yml`, `.yaml` |
{%- endif %}
| Go modules | Go | `go.mod`| `go.mod`{% ifversion ghes < 3.9 or ghae < 3.9 %}, `go.sum`{% endif %} |
| Maven | Java, Scala |  `pom.xml`  | `pom.xml`  |
| npm | JavaScript |            `package-lock.json` | `package-lock.json`, `package.json`|
| pip             | Python                    | `requirements.txt`, `pipfile.lock` | `requirements.txt`, `pipfile`, `pipfile.lock`, `setup.py` |
{%- ifversion dependabot-dependency-graph-pnpm %}
| pnpm             | JavaScript                    | `pnpm-lock.yaml` | `package.json`, `pnpm-lock.yaml` |
{%- endif %}
{%- ifversion dependency-graph-dart-support %}
| pub             | Dart                    | `pubspec.lock` | `pubspec.yaml`, `pubspec.lock` |
{%- endif %}
| Python Poetry | Python                    | `poetry.lock` | `poetry.lock`, `pyproject.toml` |
| RubyGems             | Ruby           | `Gemfile.lock` | `Gemfile.lock`, `Gemfile`, `*.gemspec` |
{%- ifversion supply-chain-features-swift-support %}
| Swift Package Manager | Swift | `Package.resolved` | `Package.resolved` |
{%- endif %}
| Yarn | JavaScript | `yarn.lock` | `package.json`, `yarn.lock` |

{% note %}

**Notes:**

- If you list your Python dependencies within a `setup.py` file, we may not be able to parse and list every dependency in your project.

{% ifversion github-actions-in-dependency-graph %}
- {% data variables.product.prodname_actions %} workflows must be located in the `.github/workflows/` directory of a repository to be recognized as manifests. Any actions or workflows referenced using the syntax `jobs[*].steps[*].uses` or `jobs.<job_id>.uses` will be parsed as dependencies. For more information, see "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions)."

{% endif %}

- {% data reusables.dependabot.dependabot-alert-actions-semver %} For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts){% ifversion fpt or ghec or ghes %}" and "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates){% endif %}."

{% endnote %}

{% ifversion dependency-submission-api %}You can use the Dependency submission API (beta) to add dependencies from the package manager or ecosystem of your choice to the dependency graph, even if the ecosystem is not in the supported ecosystem list above.{% endif %} {% data reusables.dependency-graph.dependency-submission-API-short %}

{% ifversion dependency-submission-api %}You will only get {% data variables.product.prodname_dependabot_alerts %} for dependencies that are from one of the [supported ecosystems](https://github.com/github/advisory-database#supported-ecosystems) of the {% data variables.product.prodname_advisory_database %}. For more information on the Dependency submission API, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)."{% endif %}

## Further reading

- "[Dependency graph](https://en.wikipedia.org/wiki/Dependency_graph)" on Wikipedia
- "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository)"
- "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)"
- "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/troubleshooting-the-detection-of-vulnerable-dependencies)"
