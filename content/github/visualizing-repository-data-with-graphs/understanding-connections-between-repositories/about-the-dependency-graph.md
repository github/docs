---
title: About the dependency graph
intro: 'Detailed information about the dependency graph, the ecosystems it supports, and how it determines which packages a repository depends on.'
versions:
  enterprise-server: <=2.22
topics:
  - Repositories
redirect_from:
  - /github/visualizing-repository-data-with-graphs/about-the-dependency-graph
---
<!--See /content/code-security/supply-chain-security/about-the-dependency-graph for the latest version of this article -->

### Dependency graph availability

The dependency graph is available for every repository that defines dependencies in a supported package ecosystem using a supported file format.

{% data reusables.repositories.enable-security-alerts %}

### About the dependency graph

The dependency graph is a summary of the manifest and lock files stored in a repository. For each repository, it shows dependencies, that is, the ecosystems and packages it depends on. {% data variables.product.prodname_ghe_server %} does not calculate information about dependents, the repositories and packages that depend on a repository.

When you push a commit to {% data variables.product.product_name %} that changes or adds a supported manifest or lock file to the default branch, the dependency graph is automatically updated. For information on the supported ecosystems and manifest files, see "[Supported package ecosystems](#supported-package-ecosystems)" below.

### Dependencies included

The dependency graph includes all the dependencies of a repository that are detailed in the manifest and lock files, or their equivalent, for supported ecosystems. This includes:

- Direct dependencies, that are explicitly defined in a manifest or lock file
- Indirect dependencies of these direct dependencies, also known as transitive dependencies or sub-dependencies

The dependency graph identifies indirect dependencies.

### Using the dependency graph

You can use the dependency graph to:

- Explore the repositories your code depends on. For more information, see "[Exploring the dependencies of a repository](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)."
- View and update vulnerable dependencies for your repository. For more information, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)."

### Enabling the dependency graph

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" %}If the dependency graph is not available in your system, your site administrator can enable the dependency graph and {% data variables.product.prodname_dependabot_alerts %}. For more information, see "[Enabling alerts for vulnerable dependencies on {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)."{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %} If the dependency graph is not available in your system, your site administrator can enable the dependency graph and security alerts. For more information, see "[Enabling alerts for vulnerable dependencies on {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)."

{% endif %}

When the dependency graph is first enabled, any manifest and lock files for supported ecosystems are parsed immediately. The graph is usually populated within minutes but this may take longer for repositories with many dependencies. Once enabled, the graph is automatically updated with every push to the repository.

### Supported package ecosystems
<!-- If you make changes to this feature, update /getting-started-with-github/github-language-support to reflect any changes to supported packages. -->

The recommended formats explicitly define which versions are used for all direct and all indirect dependencies. If you use these formats, your dependency graph is more accurate. It also reflects the current build set up and enables the dependency graph to report vulnerabilities in both direct and indirect dependencies.

The ecosystems listed below are supported for the dependency graph and {% if currentVersion == "enterprise-server@2.22" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}security alerts{% endif %}.

| Package manager | Languages | Recommended formats | All supported formats |
| --- | --- | --- | ---|
| Composer             | PHP           | `composer.lock` | `composer.json`, `composer.lock` |
| `dotnet` CLI | .NET languages (C#, C++, F#, VB)  |   `.csproj`, `.vbproj`, `.nuspec`, `.vcxproj`, `.fsproj` |  `.csproj`, `.vbproj`, `.nuspec`, `.vcxproj`, `.fsproj`, `packages.config` |
| Maven | Java, Scala |  `pom.xml`  | `pom.xml`  |
| npm | JavaScript |            `package-lock.json` | `package-lock.json`, `package.json`|
| Python PIP      | Python                    | `requirements.txt`, `pipfile.lock` | `requirements.txt`, `pipfile`, `pipfile.lock`, `setup.py`* |
| RubyGems             | Ruby           | `Gemfile.lock` | `Gemfile.lock`, `Gemfile`, `*.gemspec` |
| Yarn | JavaScript | `yarn.lock` | `package.json`, `yarn.lock` |

{% note %}

**Note:** If you list your Python dependencies within a `setup.py` file, we may not be able to parse and list every dependency in your project.

{% endnote %}

### Further reading

- "[Dependency graph](https://en.wikipedia.org/wiki/Dependency_graph)" on Wikipedia
- "[Exploring the dependencies of a repository](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)"
