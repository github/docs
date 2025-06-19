---
title: 'Managing {% data variables.copilot.copilot_coding_agent %} in your enterprise'
intro: 'Enable members of your enterprise to use {% data variables.copilot.copilot_coding_agent %} and control the repositories where it is available.'
allowTitleToDifferFromFilename: true
permissions: Enterprise owners
product: '{% data reusables.gated-features.copilot-coding-agent %}<br><a href="https://github.com/github-copilot/purchase?ref_cta=Copilot+Enterprise+trial&ref_cta=Copilot+Business+trial&ref_loc=making-cca-available-ent" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot-enterprise
topics:
  - Copilot
shortTitle: 'Manage {% data variables.copilot.copilot_coding_agent %}'
redirect_from:
  - /copilot/managing-copilot/managing-copilot-for-your-enterprise/adding-copilot-coding-agent-to-enterprise
  - /copilot/managing-copilot/managing-copilot-for-your-enterprise/making-copilot-coding-agent-available-to-enterprise
---

{% data reusables.copilot.coding-agent.preview-note %}

## Prerequisites

* For general information, see [AUTOTITLE](/copilot/rolling-out-github-copilot-at-scale/enabling-developers/using-copilot-coding-agent-in-org).
* For information on premium requests and Actions minutes, see [Allowance usage for {% data variables.copilot.copilot_coding_agent %}](/billing/managing-billing-for-your-products/managing-billing-for-github-copilot/about-billing-for-github-copilot#allowance-usage-for-copilot-coding-agent).
* For information on MCP servers, see [AUTOTITLE](/copilot/using-github-copilot/coding-agent/extending-copilot-coding-agent-with-mcp).

## Enabling {% data variables.copilot.copilot_coding_agent %} for your {% data variables.product.prodname_copilot_short %} subscribers

{% data variables.copilot.copilot_coding_agent %} and use of third-party MCP servers are disabled by default for users to whom you have assigned a {% data variables.product.prodname_copilot_short %} license. You can enable these features for your members on the {% data variables.product.prodname_copilot_short %} policies page for your enterprise. See [Configuring policies for {% data variables.product.prodname_copilot %}](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise#configuring-policies-for-github-copilot).

* For the "{% data variables.copilot.copilot_coding_agent %}" policy, select "Enabled" or "No policy".
* For the "MCP servers on {% data variables.product.prodname_dotcom_the_website %}" policy, select "Enabled" or "No policy".

Where:

* "Enabled" means all users granted a {% data variables.product.prodname_copilot_short %} license by any of your organizations will be able to use the feature.
* "Disabled" means no users granted a {% data variables.product.prodname_copilot_short %} license by your organizations will be able to use the feature.
* "No policy" means organization owners in each of your organizations will be able to decide if their {% data variables.product.prodname_copilot_short %} licensees can use the feature.

### Next steps

* If you selected **Enabled**, tell organization owners that {% data variables.copilot.copilot_coding_agent %} is enabled for all members. By default, the agent will be available in all repositories, but it is possible to opt out some or all repositories.
* If you selected **No policy**, discuss member enablement with organization owners.

For more information, see [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/adding-copilot-coding-agent-to-organization).

## Disabling {% data variables.copilot.copilot_coding_agent %} in your repositories

{% data variables.product.prodname_copilot_short %} policies, like the "{% data variables.copilot.copilot_coding_agent %}" and "MCP servers on {% data variables.product.prodname_dotcom_the_website %}" policies described above, affect only the users you assign a {% data variables.product.prodname_copilot_short %} license to.

If there are {% data variables.copilot.copilot_pro_plus %} users with access to your enterprise's repositories, they will be able to use {% data variables.copilot.copilot_coding_agent %} and will not be restricted by your policies.

You can choose to stop anyone using the agent in some or all of your repositories using organization-level settings. For more information, see [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/adding-copilot-coding-agent-to-organization).

Alternatively, you can disable the agent for all repositories owned by your enterprise.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.copilot-tab %}
{% data reusables.enterprise-accounts.copilot-policies-tab %}
1. Select **Block {% data variables.copilot.copilot_coding_agent %} in all enterprise repositories**.
