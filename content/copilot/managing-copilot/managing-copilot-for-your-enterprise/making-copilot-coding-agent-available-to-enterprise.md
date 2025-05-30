---
title: 'Making {% data variables.copilot.copilot_coding_agent %} available to enterprise members'
intro: 'Enable members of your enterprise to use {% data variables.copilot.copilot_coding_agent %}.'
allowTitleToDifferFromFilename: true
permissions: Enterprise owners
product: '{% data reusables.gated-features.copilot-coding-agent %}<br><a href="https://github.com/github-copilot/purchase?ref_cta=Copilot+Enterprise+trial&ref_cta=Copilot+Business+trial&ref_loc=making-cca-available-ent" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot-enterprise
topics:
  - Copilot
shortTitle: 'Add {% data variables.copilot.copilot_coding_agent %}'
redirect_from:
  - /copilot/managing-copilot/managing-copilot-for-your-enterprise/adding-copilot-coding-agent-to-enterprise
---

<!--JTBD: When I decide to enable CCA for -->

{% data reusables.copilot.coding-agent.preview-note %}

## Prerequisites

* For general information, see [AUTOTITLE](/copilot/rolling-out-github-copilot-at-scale/enabling-developers/using-copilot-coding-agent-in-org).
* For information on premium requests and Actions minutes, see [Allowance usage for {% data variables.copilot.copilot_coding_agent %}](/billing/managing-billing-for-your-products/managing-billing-for-github-copilot/about-billing-for-github-copilot#allowance-usage-for-copilot-coding-agent).
* For information on MCP servers, see [AUTOTITLE](/copilot/customizing-copilot/extending-copilot-coding-agent-with-mcp).

## Enabling {% data variables.copilot.copilot_coding_agent %} for your members

{% data variables.copilot.copilot_coding_agent %} and use of third-party MCP servers are disabled by default for users with a {% data variables.product.prodname_copilot_short %} license. You can enable these features for your members on the {% data variables.product.prodname_copilot_short %} policies page for your enterprise. See [Configuring policies for {% data variables.product.prodname_copilot %}](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise#configuring-policies-for-github-copilot).

* For the "{% data variables.copilot.copilot_coding_agent %}" policy, select "Enabled" or "No policy".
* For the "MCP servers on {% data variables.product.prodname_dotcom_the_website %}" policy, select "Enabled" or "No policy".

Where:

* "Enabled" means all users granted a {% data variables.product.prodname_copilot_short %} license by any of your organizations will be able to use the feature.
* "Disabled" means no users granted a {% data variables.product.prodname_copilot_short %} license by your organizations will be able to use the feature.
* "No policy" means organization owners in each of your organizations will be able to decide if their {% data variables.product.prodname_copilot_short %} licensees can use the feature.

## Next steps

* If you selected "Enabled", tell organization owners that {% data variables.copilot.copilot_coding_agent %} is enabled for all members. They should define which repositories are allowed to use {% data variables.copilot.copilot_coding_agent %}.
* If you selected "No policy", discuss member enablement and {% data variables.copilot.copilot_coding_agent %} availability in repositories with organization owners.

For more information, see [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/adding-copilot-coding-agent-to-organization).
