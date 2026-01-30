---
title: Changing the "used by" data for a repository
shortTitle: Change "used by" data
intro: Display your repository's dependents for a different package.
permissions: 'Repository administrators'
versions:
  fpt: '*'
  ghec: '*'
contentType: how-tos
---

{% data reusables.dependency-graph.used-by %} For more information, see [AUTOTITLE](/code-security/concepts/supply-chain-security/about-the-dependency-graph#dependents-and-used-by-data).

If you have admin permissions to a repository that contains multiple packages, you can choose which package the "Used by" section represents.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Under "{% data variables.product.UI_advanced_security %}", click the drop-down menu in the "Used by counter" section and choose a package.
