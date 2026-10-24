---
title: Supply chain security for your enterprise
intro: You can enable enterprise-level features that help your developers understand and update the dependencies their code relies on.
shortTitle: Supply chain security
permissions: ''
versions:
  ghes: '*'
redirect_from:
  - /admin/code-security/managing-supply-chain-security-for-your-enterprise/about-supply-chain-security-for-your-enterprise
  - /admin/managing-code-security/managing-supply-chain-security-for-your-enterprise/about-supply-chain-security-for-your-enterprise
  - /code-security/concepts/security-at-scale/about-supply-chain-security-for-your-enterprise
contentType: concepts
category:
  - Secure your dependencies
---

You can allow users to identify their projects' dependencies by enabling the dependency graph for {% data variables.product.prodname_ghe_server %}. For more information, see [Enabling the dependency graph for your enterprise](/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/enable-dependency-graph).

{% data reusables.dependency-review.dependency-review-enabled-ghes %}

You can also allow users to find and fix vulnerabilities in their code dependencies by enabling {% data variables.product.prodname_dependabot_alerts %} and {% data variables.product.prodname_dependabot_updates %}. For more information, see [AUTOTITLE](/admin/configuring-settings/configuring-github-connect/enabling-dependabot-for-your-enterprise).

After you enable {% data variables.product.prodname_dependabot_alerts %}, you can view vulnerability data from the {% data variables.product.prodname_advisory_database %} on {% data variables.product.prodname_ghe_server %} and manually sync the data. For more information, see [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/view-vulnerability-data).
