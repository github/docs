---
title: About supply chain security for your enterprise
intro: You can enable features that help your developers understand and update the dependencies their code relies on.
shortTitle: About supply chain security
permissions: ''
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Security
  - Dependency graph
redirect_from:
  - /admin/code-security/managing-supply-chain-security-for-your-enterprise/about-supply-chain-security-for-your-enterprise
---

You can allow users to identify their projects' dependencies by enabling the dependency graph for {% data variables.product.prodname_ghe_server %}. For more information, see "[Enabling the dependency graph for your enterprise](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)."

{% data reusables.dependency-review.dependency-review-enabled-ghes %}

You can also allow users to find and fix vulnerabilities in their code dependencies by enabling {% data variables.product.prodname_dependabot_alerts %}{% ifversion ghes %} and {% data variables.product.prodname_dependabot_updates %}{% endif %}. For more information, see "[AUTOTITLE](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)."

After you enable {% data variables.product.prodname_dependabot_alerts %}, you can view vulnerability data from the {% data variables.product.prodname_advisory_database %} on {% data variables.product.prodname_ghe_server %} and manually sync the data. For more information, see "[AUTOTITLE](/admin/code-security/managing-supply-chain-security-for-your-enterprise/viewing-the-vulnerability-data-for-your-enterprise)."
