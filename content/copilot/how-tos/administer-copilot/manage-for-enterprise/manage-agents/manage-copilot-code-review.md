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
redirect_from:
  - /copilot/how-tos/administer-copilot/manage-for-enterprise/manage-copilot-code-review
contentType: how-tos
category: 
  - Manage Copilot for a team
---

This policy controls the use of {% data variables.copilot.copilot_code-review_short %} and {% data variables.copilot.copilot_for_prs %} in your enterprise.

For an introduction to {% data variables.copilot.copilot_code-review_short %}, see [AUTOTITLE](/copilot/concepts/code-review).

For more information about {% data variables.copilot.copilot_for_prs %}, see [AUTOTITLE](/copilot/how-tos/use-copilot-for-common-tasks/create-a-pr-summary).

## Enabling {% data variables.copilot.copilot_code-review_short %} for your {% data variables.product.prodname_copilot_short %} subscribers

You can allow your members to use {% data variables.copilot.copilot_code-review_short %} and {% data variables.copilot.copilot_for_prs %} from the AI Controls tab for your enterprise. See [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise#defining-policies-for-your-enterprise).

> [!NOTE]
>
> {% data reusables.copilot.code-review.preview-note %}
> * To participate in the {% data variables.release-phases.public_preview %}, you must first enable **{% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_dotcom_the_website %} > Opt in to preview features** from the "{% data variables.product.prodname_copilot_short %}" page of your enterprise's AI Controls.

{% data reusables.enterprise-accounts.policy-enablement-next-steps %}

## Disabling {% data variables.copilot.copilot_code-review_short %} in your repositories

{% data variables.product.prodname_copilot_short %} policies affect only the users you assign a {% data variables.product.prodname_copilot_short %} license to.

If there are {% data variables.copilot.copilot_pro_short %} or {% data variables.copilot.copilot_pro_plus_short %} users with access to your enterprise's repositories, they will be able to use {% data variables.copilot.copilot_code-review_short %} and will not be restricted by your policies.

Alternatively, you can disable the agent for all repositories owned by your enterprise.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.ai-controls-tab %}
1. In the "Installed Agents" section, click **{% data variables.copilot.copilot_code-review_short %}**.
1. In the "{% data variables.copilot.copilot_code-review_short %}" section, next to "Block {% data variables.copilot.copilot_code-review_short %} in all enterprise repositories", click the toggle.
