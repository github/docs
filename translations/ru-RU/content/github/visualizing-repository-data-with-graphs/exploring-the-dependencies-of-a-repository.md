---
title: Exploring the dependencies of a repository
intro: 'Using the dependency graph, you can see the packages your project depends on{% if currentVersion == "free-pro-team@latest" %} and the repositories that depend on it{% endif %}. In addition, you can see any vulnerabilities detected in its dependencies.'
versions:
  enterprise-server: <=2.22
topics:
  - Repositories
---

<!--See /content/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository for the latest version of this article -->

### Viewing the dependency graph

{% data reusables.repositories.enable-security-alerts %}

The dependency graph shows the dependencies of your repository. For information about the detection of dependencies and which ecosystems are supported, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}

#### Dependencies view

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" %}
Any direct and indirect dependencies that are specified in the repository's manifest or lock files are listed, grouped by ecosystem. If vulnerabilities have been detected in the repository, these are shown at the top of the view for users with access to
{% data variables.product.prodname_dependabot_alerts %}.

![График зависимостей](/assets/images/help/graphs/dependencies_graph_server.png)

{% note %}

**Note:** {% data variables.product.prodname_ghe_server %} does not populate the **Dependents** view.

{% endnote %}

{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
Any direct and indirect dependencies that are specified in the repository's manifest or lock files are listed, grouped by ecosystem. If vulnerabilities have been detected in the repository, these are shown at the top of the view for users with access to security alerts.

![График зависимостей](/assets/images/help/graphs/dependencies_graph_server.png)

{% note %}

**Note:** {% data variables.product.prodname_ghe_server %} does not populate the **Dependents** view.

{% endnote %}

{% endif %}

### Troubleshooting the dependency graph

If your dependency graph is empty, there may be a problem with the file containing your dependencies. Check the file to ensure that it's correctly formatted for the file type.

If a manifest or lock file is not processed, its dependencies are omitted from the dependency graph and they can't be checked for vulnerable dependencies.
