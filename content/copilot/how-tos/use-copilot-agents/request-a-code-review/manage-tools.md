---
title: Managing static analysis tools in Copilot code review
shortTitle: Manage tools
intro: 'Improve your code security and linting configuration with static analysis tools in {% data variables.copilot.copilot_code-review_short %}.'
versions:
  feature: copilot
permissions: Repository administrators and organization owners
product: 'Rulesets are available in public repositories with {% data variables.product.prodname_free_user %} and {% data variables.product.prodname_free_team %} for organizations, and in public and private repositories with {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %}, and {% data variables.product.prodname_ghe_cloud %}.'
topics:
  - Copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
---

## Prerequisites

If you get access to {% data variables.product.prodname_copilot_short %} through an organization or enterprise, your organization or enterprise owner needs to enable preview features for {% data variables.copilot.copilot_code-review_short %}. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies) and [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies).

## Managing static analysis tools for your repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repo-rulesets-settings %}
{% data reusables.copilot.code-review.manage-static-analysis-tools %}

## Configuring static analysis tools for your organization

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.access-ruleset-settings %}
{% data reusables.copilot.code-review.manage-static-analysis-tools %}
