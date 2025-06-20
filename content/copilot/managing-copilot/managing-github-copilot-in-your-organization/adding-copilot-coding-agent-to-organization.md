---
title: 'Adding {% data variables.copilot.copilot_coding_agent %} to your organization'
intro: 'Enable {% data variables.copilot.copilot_coding_agent %} for your members and control the repositories where it is available.'
allowTitleToDifferFromFilename: true
permissions: Organization owners
product: '{% data reusables.gated-features.copilot-coding-agent %}<br><a href="https://github.com/github-copilot/purchase?ref_cta=Copilot+Enterprise+trial&ref_cta=Copilot+Business+trial&ref_loc=adding-cca-to-org" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
topics:
  - Copilot
shortTitle: 'Add {% data variables.copilot.copilot_coding_agent %}'
---

{% data reusables.copilot.coding-agent.preview-note %}

## Prerequisites

* For general information, see [AUTOTITLE](/copilot/rolling-out-github-copilot-at-scale/enabling-developers/using-copilot-coding-agent-in-org).
* For information on premium requests and Actions minutes, see [Allowance usage for {% data variables.copilot.copilot_coding_agent %}](/billing/managing-billing-for-your-products/managing-billing-for-github-copilot/about-billing-for-github-copilot#allowance-usage-for-copilot-coding-agent).
* For information on MCP servers, see [AUTOTITLE](/copilot/using-github-copilot/coding-agent/extending-copilot-coding-agent-with-mcp).

## Enabling {% data variables.copilot.copilot_coding_agent %} for your members

{% data reusables.organizations.copilot-policy-ent-overrides-org %}

{% data variables.copilot.copilot_coding_agent %} and use of third-party MCP servers are disabled by default for organization members.

Organizations with {% data variables.copilot.copilot_enterprise %} can enable these features for members on the {% data variables.product.prodname_copilot_short %} policies page for their organization. See [Enabling {% data variables.product.prodname_copilot_short %} features in your organization](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization#enabling-copilot-features-in-your-organization).

* For the "{% data variables.copilot.copilot_coding_agent %}" policy, select "Enabled".
* For the "MCP servers on {% data variables.product.prodname_dotcom_the_website %}" policy, select "Enabled".

## Disabling or enabling {% data variables.copilot.copilot_coding_agent %} in your repositories

By default, {% data variables.copilot.copilot_coding_agent %} is available in all repositories for users who have access to the agent, but you can block it from being used in some or all repositories owned by your organization.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.copilot.coding-agent-settings %}
1. Use the "Repository access" control to define which repositories allow {% data variables.copilot.copilot_coding_agent %}.
1. If you choose "Selected repositories", in the "Select repositories" dialog, select the repositories that allow {% data variables.copilot.copilot_coding_agent %}, then click **Select**.

Once {% data variables.copilot.copilot_coding_agent %} is enabled for a repository, any user with access to {% data variables.copilot.copilot_coding_agent %} and write permission for the repository can delegate work to {% data variables.product.prodname_copilot_short %}.

## Next steps

* Tell the members of repositories where {% data variables.copilot.copilot_coding_agent %} is available that they can delegate work to the coding agent.
* Encourage members to educate themselves about setting up their repository to get the most from {% data variables.copilot.copilot_coding_agent %}. Useful resources:

   * [AUTOTITLE](/copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-issues/best-practices-for-using-copilot-to-work-on-tasks)
   * [AUTOTITLE](/copilot/customizing-copilot/customizing-the-development-environment-for-copilot-coding-agent)
   * [Security best practices](/copilot/rolling-out-github-copilot-at-scale/enabling-developers/using-copilot-coding-agent-in-org#security-best-practices)
