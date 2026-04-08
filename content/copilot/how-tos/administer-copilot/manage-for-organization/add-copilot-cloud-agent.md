---
title: Adding GitHub Copilot cloud agent to your organization
intro: 'Enable {% data variables.copilot.copilot_cloud_agent %} for your members and control the repositories where it is available.'
allowTitleToDifferFromFilename: true
permissions: Organization owners
product: '{% data reusables.gated-features.copilot-cloud-agent %}<br><a href="https://github.com/github-copilot/purchase?ref_product=copilot&ref_type=trial&ref_style=button&ref_plan=enterprise" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
shortTitle: 'Add {% data variables.copilot.copilot_cloud_agent %}'
redirect_from:
  - /copilot/how-tos/administer-copilot/manage-for-organization/add-copilot-coding-agent
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/adding-copilot-coding-agent-to-organization
  - /copilot/how-tos/administer/organizations/adding-copilot-coding-agent-to-organization
  - /copilot/how-tos/administer/organizations/add-copilot-coding-agent
  - /copilot/how-tos/administer/manage-for-organization/add-copilot-coding-agent
contentType: how-tos
category: 
  - Manage Copilot for a team
---

> [!NOTE]
> For an introduction to {% data variables.copilot.copilot_cloud_agent %}, see [AUTOTITLE](/copilot/concepts/agents/cloud-agent/about-cloud-agent).

## Prerequisites

* For general information, see [AUTOTITLE](/copilot/tutorials/cloud-agent/pilot-cloud-agent).
* For information on premium requests and Actions minutes, see [Allowance usage for {% data variables.copilot.copilot_cloud_agent %}](/billing/managing-billing-for-your-products/managing-billing-for-github-copilot/about-billing-for-github-copilot#allowance-usage-for-copilot-cloud-agent).
* For information on MCP servers, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/extend-cloud-agent-with-mcp).

## Enabling {% data variables.copilot.copilot_cloud_agent %} for your members

> [!NOTE]
> {% data reusables.organizations.copilot-policy-ent-overrides-org %}

{% data variables.copilot.copilot_cloud_agent %} and use of third-party MCP servers are disabled by default for organization members assigned a {% data variables.copilot.copilot_enterprise %} or {% data variables.copilot.copilot_business_short %} license by your organization.

Organizations with {% data variables.copilot.copilot_enterprise_short %} or {% data variables.copilot.copilot_business_short %} can enable these features for members on the {% data variables.product.prodname_copilot_short %} policies page for their organization. See [Enabling {% data variables.product.prodname_copilot_short %} features in your organization](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization#enabling-copilot-features-in-your-organization).

* For the "{% data variables.copilot.copilot_cloud_agent %}" policy, select "Enabled".
* For the "MCP servers on {% data variables.product.prodname_dotcom_the_website %}" policy, select "Enabled".

## Disabling or enabling {% data variables.copilot.copilot_cloud_agent %} in your repositories

By default, {% data variables.copilot.copilot_cloud_agent %} is available in all repositories for users who have access to the agent, but you can block it from being used in some or all repositories owned by your organization. You can manage repository availability using the following instructions, or programmatically using the [REST API](/rest/copilot/copilot-cloud-agent-management).

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.copilot.cloud-agent-settings %}
1. Use the "Repository access" control to define which repositories allow {% data variables.copilot.copilot_cloud_agent %}.
1. If you choose "Selected repositories", in the "Select repositories" dialog, select the repositories that allow {% data variables.copilot.copilot_cloud_agent %}, then click **Select**.

Once {% data variables.copilot.copilot_cloud_agent %} is enabled for a repository, any user with access to {% data variables.copilot.copilot_cloud_agent %} and write permission for the repository can delegate work to {% data variables.product.prodname_copilot_short %}.

## Managing the agent firewall for your organization

Organization owners can configure the {% data variables.copilot.copilot_cloud_agent %} firewall for their organization, including whether it is enabled for the organization and which external hosts and URLs the agent can access. For more information, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/customize-the-agent-firewall).

## Next steps

* Tell the members of repositories where {% data variables.copilot.copilot_cloud_agent %} is available that they can delegate work to the {% data variables.copilot.copilot_cloud_agent_short %}.
* Configure the default runner type for {% data variables.copilot.copilot_cloud_agent %} in your organization. For more information, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/configure-runner-for-coding-agent).
* Encourage members to educate themselves about setting up their repository to get the most from {% data variables.copilot.copilot_cloud_agent %}. Useful resources:

   * [AUTOTITLE](/copilot/tutorials/cloud-agent/get-the-best-results)
   * [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/customize-the-agent-environment)
   * [Security best practices](/copilot/rolling-out-github-copilot-at-scale/enabling-developers/using-copilot-cloud-agent-in-org#security-best-practices)
