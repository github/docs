---
title: Managing GitHub Copilot code review in your enterprise
intro: 'Enable members of your enterprise to use {% data variables.product.prodname_copilot_short %} to review code and create pull request summaries.'
allowTitleToDifferFromFilename: true
permissions: Enterprise owners
versions:
  feature: copilot
topics:
  - Copilot
shortTitle: 'Manage {% data variables.copilot.copilot_code-review_short %}'
contentType: how-tos
---

This policy controls the use of {% data variables.copilot.copilot_code-review_short %} and {% data variables.copilot.copilot_for_prs %} in your enterprise.

For an introduction to {% data variables.copilot.copilot_code-review_short %}, see [AUTOTITLE](/copilot/concepts/code-review).

For more information about {% data variables.copilot.copilot_for_prs %}, see [AUTOTITLE](/copilot/how-tos/use-copilot-for-common-tasks/create-a-pr-summary).

## Enabling {% data variables.copilot.copilot_code-review_short %} for your {% data variables.product.prodname_copilot_short %} subscribers

You can enable {% data variables.copilot.copilot_code-review_short %} and {% data variables.copilot.copilot_for_prs %} for your members on the {% data variables.product.prodname_copilot_short %} policies page for your enterprise. See [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise#defining-policies-for-your-enterprise).

* "Enabled" means all users granted a {% data variables.product.prodname_copilot_short %} license by any of your organizations will be able to use the feature.
* "Disabled" means no users granted a {% data variables.product.prodname_copilot_short %} license by your organizations will be able to use the feature.
* "No policy" means organization owners in each of your organizations will be able to decide if their {% data variables.product.prodname_copilot_short %} licensees can use the feature.

### Next steps

* If you selected **Enabled**, tell organization owners that these features are enabled for all members.
* If you selected **No policy**, discuss member enablement with organization owners.

## Disabling {% data variables.copilot.copilot_code-review_short %} in your repositories

{% data variables.product.prodname_copilot_short %} policies affect only the users you assign a {% data variables.product.prodname_copilot_short %} license to.

If there are {% data variables.copilot.copilot_pro_short %} or {% data variables.copilot.copilot_pro_plus_short %} users with access to your enterprise's repositories, they will be able to use {% data variables.copilot.copilot_code-review_short %} and will not be restricted by your policies.

Alternatively, you can disable the agent for all repositories owned by your enterprise.

<!-- expires 2025-10-20 -->
<!-- Part of the Copilot direct licensing rollout -->
<!-- Expired content will be addressed by the Drivers team -->

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.copilot-tab %}
{% data reusables.enterprise-accounts.copilot-policies-tab %}
1. Select **Block {% data variables.copilot.copilot_code-review_short %} in all enterprise repositories**.

<!-- end expires 2025-10-20 -->
