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
<!--For this article in earlier GHES versions, see /content/github/visualizing-repository-data-with-graphs-->
<!--Marketing-LINK: From /features/security and /features/security/software-supply-chain pages "How GitHub's dependency graph is generated".-->

## About the dependency graph

{% data reusables.dependabot.about-the-dependency-graph %}

When you push a commit to {% data variables.product.product_name %} that changes or adds a supported manifest or lock file to the default branch, the dependency graph is automatically updated.{% ifversion fpt or ghec %} In addition, the graph is updated when anyone pushes a change to the repository of one of your dependencies.{% endif %} For information on the supported ecosystems and manifest files, see "[Supported package ecosystems](#supported-package-ecosystems)" below.

{% ifversion dependency-submission-api %} 
{% data reusables.dependency-submission.dependency-submission-link %}
{% endif %}

When you create a pull request containing changes to dependencies that targets the default branch, {% data variables.product.prodname_dotcom %} uses the dependency graph to add dependency reviews to the pull request. These indicate whether the dependencies contain vulnerabilities and, if so, the version of the dependency in which the vulnerability was fixed. For more information, see "[About dependency review](/code-security/supply-chain-security/about-dependency-review)."

## Dependency graph availability

{% ifversion fpt or ghec %}The dependency graph is available for every public repository that defines dependencies in a supported package ecosystem using a supported file format. Repository administrators can also set up the dependency graph for private repositories. For more information, see "[Configuring the dependency graph](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph)."{% endif %}

{% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

## Dependencies included

The dependency graph includes all the dependencies of a repository that are detailed in the manifest and lock files, or their equivalent, for supported ecosystems{% ifversion dependency-submission-api %}, as well as any dependencies that are submitted using the Dependency submission API (beta){% endif %}. This includes:

- Direct dependencies, that are explicitly defined in a manifest or lock file {% ifversion dependency-submission-api %} or have been submitted using the Dependency submission API (beta){% endif %}
- Indirect dependencies of these direct dependencies, also known as transitive dependencies or sub-dependencies

The dependency graph identifies indirect dependencies{% ifversion fpt or ghec %} either explicitly from a lock file or by checking the dependencies of your direct dependencies. For the most reliable graph, you should use lock files (or their equivalent) because they define exactly which versions of the direct and indirect dependencies you currently use. If you use lock files, you also ensure that all contributors to the repository are using the same versions, which will make it easier for you to test and debug code{% else %} from the lock files{% endif %}.

For more information on how {% data variables.product.product_name %} helps you understand the dependencies in your environment, see "[About supply chain security](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security)."

{% ifversion fpt or ghec %}

## Dependents included

For public repositories, only public repositories that depend on it or on packages that it publishes are reported. This information is not reported for private repositories.{% endif %}

## Using the dependency graph

You can use the dependency graph to:

- Explore the repositories your code depends on{% ifversion fpt or ghec %}, and those that depend on it{% endif %}. For more information, see "[Exploring the dependencies of a repository](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)." {% ifversion ghec %}
- View a summary of the dependencies used in your organization's repositories in a single dashboard. For more information, see "[Viewing insights for your organization](/articles/viewing-insights-for-your-organization#viewing-organization-dependency-insights)."{% endif %}
- View and update vulnerable dependencies for your repository. For more information, see "[About {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)."{% ifversion fpt or ghes or ghec %}
- See information about vulnerable dependencies in pull requests. For more information, see "[Reviewing dependency changes in a pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)."{% endif %}

## Supported package ecosystems

The recommended formats explicitly define which versions are used for all direct and all indirect dependencies. If you use these formats, your dependency graph is more accurate. It also reflects the current build set up and enables the dependency graph to report vulnerabilities in both direct and indirect dependencies.{% ifversion fpt or ghec %} Indirect dependencies that are inferred from a manifest file (or equivalent) are excluded from the checks for insecure dependencies.{% endif %}

| Package manager | Languages | Recommended formats | All supported formats |
| --- | --- | --- | ---|
{%- ifversion dependency-graph-rust-support %}
| Cargo<sup>[*]</sup> | Rust | `Cargo.lock` | `Cargo.toml`, `Cargo.lock` | 
{%- endif %}
| Composer             | PHP           | `composer.lock` | `composer.json`, `composer.lock` |
| NuGet | .NET languages (C#, F#, VB), C++  |   `.csproj`, `.vbproj`, `.nuspec`, `.vcxproj`, `.fsproj` |  `.csproj`, `.vbproj`, `.nuspec`, `.vcxproj`, `.fsproj`, `packages.config` |
{%- ifversion github-actions-in-dependency-graph %}
| {% data variables.product.prodname_actions %} workflows<sup>[†]</sup> | YAML | `.yml`, `.yaml` | `.yml`, `.yaml` |
{%- endif %}
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
| Go modules | Go | `go.sum` | `go.mod`, `go.sum` |
{%- elsif ghes = 3.2 %}
| Go modules | Go | `go.mod` | `go.mod` |
{%- endif %}
| Maven | Java, Scala |  `pom.xml`  | `pom.xml`  |
| npm | JavaScript |            `package-lock.json` | `package-lock.json`, `package.json`|
| pip             | Python                    | `requirements.txt`, `pipfile.lock` | `requirements.txt`, `pipfile`, `pipfile.lock`, `setup.py`<sup>[‡]</sup> |
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4752 %}
| Python Poetry | Python                    | `poetry.lock` | `poetry.lock`, `pyproject.toml` |
{%- endif %}
| RubyGems             | Ruby           | `Gemfile.lock` | `Gemfile.lock`, `Gemfile`, `*.gemspec` |
| Yarn | JavaScript | `yarn.lock` | `package.json`, `yarn.lock` |

{% ifversion dependency-graph-rust-support %}
[*] For the initial release of Rust support, dependency graph does not have the metadata and mappings required to detect transitive dependencies. Dependency graph displays transitive dependencies, one level deep, when they are defined in a `Cargo.lock` file. {% data variables.product.prodname_dependabot_alerts %} and {% data variables.product.prodname_dependabot_security_updates %} are available for vulnerable dependencies defined in the `Cargo.lock` file.
{% endif %}

{% ifversion github-actions-in-dependency-graph %}
[†] {% data variables.product.prodname_actions %} workflows must be located in the `.github/workflows/` directory of a repository to be recognized as manifests. Any actions or workflows referenced using the syntax `jobs[*].steps[*].uses` or `jobs.<job_id>.uses` will be parsed as dependencies. For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/using-workflows/workflow-syntax-for-github-actions)."
{% endif %}

[‡] If you list your Python dependencies within a `setup.py` file, we may not be able to parse and list every dependency in your project.

{% ifversion github-actions-in-dependency-graph %}
{% note %}

**Note:** {% data variables.product.prodname_actions %} workflow dependencies are displayed in the dependency graph for informational purposes. Dependabot alerts are not currently supported for {% data variables.product.prodname_actions %} workflows.

{% endnote %}
{% endif %}

{% ifversion dependency-submission-api %}You can use the Dependency submission API (beta) to add dependencies from the package manager or ecosystem of your choice to the dependency graph, even if the ecosystem is not in the supported ecosystem list above. The dependency graph will display the submitted dependencies grouped by ecosystem, but separately from the dependencies parsed from manifest or lock files. You will only get {% data variables.product.prodname_dependabot_alerts %} for dependencies that are from one of the [supported ecosystems](https://github.com/github/advisory-database#supported-ecosystems) of the {% data variables.product.prodname_advisory_database %}. For more information on the Dependency submission API, see "[Using the Dependency submission API](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)."{% endif %}
## Further reading

- "[Dependency graph](https://en.wikipedia.org/wiki/Dependency_graph)" on Wikipedia
- "[Exploring the dependencies of a repository](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)"
- "[Viewing and updating {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)"
- "[Troubleshooting the detection of vulnerable dependencies](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies)"
