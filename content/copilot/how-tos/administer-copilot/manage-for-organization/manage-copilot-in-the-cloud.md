---
title: Managing GitHub Copilot in the cloud for your organization
intro: Enable {% data variables.copilot.copilot_in_the_cloud_short %} for your members and control the repositories where it is available.
allowTitleToDifferFromFilename: true
permissions: Organization owners
versions:
  feature: copilot
shortTitle: Manage {% data variables.copilot.copilot_in_the_cloud_short %}
redirect_from:
  - /copilot/how-tos/administer-copilot/manage-for-organization/add-copilot-coding-agent
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/adding-copilot-coding-agent-to-organization
  - /copilot/how-tos/administer/organizations/adding-copilot-coding-agent-to-organization
  - /copilot/how-tos/administer/organizations/add-copilot-coding-agent
  - /copilot/how-tos/administer/manage-for-organization/add-copilot-coding-agent
  - /copilot/how-tos/administer-copilot/manage-for-organization/add-copilot-cloud-agent
contentType: how-tos
category:
  - Manage Copilot for a team
---

{% data reusables.copilot.copilot-in-the-cloud-policy %}

## Enabling {% data variables.copilot.copilot_in_the_cloud_short %} for your members

> [!NOTE]
> {% data reusables.organizations.copilot-policy-ent-overrides-org %}

{% data variables.copilot.copilot_in_the_cloud_short %} is enabled by default for organization members assigned a {% data variables.copilot.copilot_enterprise %} or {% data variables.copilot.copilot_business_short %} license by your organization.

Organizations with {% data variables.copilot.copilot_enterprise_short %} or {% data variables.copilot.copilot_business_short %} can enable or disable these features for members on the {% data variables.product.prodname_copilot_short %} policies page for their organization. See [Enabling {% data variables.product.prodname_copilot_short %} features in your organization](/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies#enabling-copilot-features-and-models-in-your-organization).

* For the "{% data variables.copilot.copilot_in_the_cloud_short %}" policy, select "Enabled".
* Optionally, for the "MCP servers on {% data variables.product.prodname_dotcom_the_website %}" policy, select "Enabled".

## Disabling the cloud agent in your repositories

By default, {% data variables.product.github %}'s cloud agent is available in all repositories in an organization where **{% data variables.copilot.copilot_in_the_cloud_short %}** is enabled. However, you can block the agent from being used in some or all repositories owned by your organization.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.copilot.cloud-agent-settings %}
1. Use the "Repository access" control to define which repositories allow the agent.
1. If you choose "Selected repositories", in the "Select repositories" dialog, select the repositories that allow {% data variables.copilot.copilot_cloud_agent %}, then click **Select**.

Once the agent is enabled for a repository, any user with access to {% data variables.product.prodname_copilot_short %} and write permission for the repository can delegate work to {% data variables.product.prodname_copilot_short %}.

## Controlling {% data variables.copilot.copilot_automations %} in your repositories

{% data variables.copilot.copilot_automations_cap %} let users run {% data variables.product.prodname_copilot_short %} sessions automatically, on a schedule or in response to events. See [AUTOTITLE](/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/about-automations).

{% data variables.copilot.copilot_automations_cap %} are allowed by default in repositories where {% data variables.copilot.copilot_in_the_cloud_short %} is available. You can control whether {% data variables.copilot.copilot_automations %} are allowed in repositories owned by your organization, separately from the {% data variables.copilot.copilot_in_the_cloud_short %} policy.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.copilot.cloud-agent-settings %}
1. To allow or block {% data variables.copilot.copilot_automations %}, update the **Allow automations** setting.

## Managing the agent firewall for your organization

Organization owners can configure the firewall for their organization to determine which external hosts and URLs the cloud agent can access. For more information, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/customize-the-firewall).

## Next steps

* Tell the members of repositories where {% data variables.copilot.copilot_in_the_cloud_short %} is available that they can start cloud sessions and delegate work to {% data variables.product.prodname_copilot_short %} on {% data variables.product.github %}.
* Encourage members to educate themselves about setting up their repository to get the most from {% data variables.product.prodname_copilot_short %}. Useful resources:

   * [AUTOTITLE](/copilot/tutorials/cloud-agent/get-the-best-results)
   * [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/customize-the-agent-environment)
   * [AUTOTITLE](/copilot/concepts/agents/cloud-agent/risks-and-mitigations)
