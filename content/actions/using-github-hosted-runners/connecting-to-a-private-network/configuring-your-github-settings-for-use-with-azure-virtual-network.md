---
title: Configuring your GitHub settings for use with Azure Virtual Network
shortTitle: Configuring {% data variables.product.company_short %} settings
intro: 'Learn how to configure your {% data variables.product.company_short %} settings to use {% data variables.product.company_short %}-hosted runners with an Azure Virtual Network (VNET).'
versions:
  feature: actions-private-networking-azure-vnet
type: how_to
topics:
  - Actions
  - Developer
---

{% note %}

**Note:** {% data reusables.actions.github-hosted-larger-runners-azure-vnet-beta %}

{% endnote %}

## About configuring your {% data variables.product.company_short %} settings for use with an Azure VNET

To use an Azure VNET for private networking, you must configure your {% data variables.product.company_short %} settings. For more information about private networking, see "[AUTOTITLE](/actions/using-github-hosted-runners/connecting-to-a-private-network/about-private-networking-with-github-hosted-runners)."

## Adding a private network and enabling the {% data variables.product.prodname_actions %} service

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. In the left sidebar, click **Networking**.
1. Optionally, use the "Find private network" search box to find an existing private network.
1. To the right of the "Find private network" search box, click **Add private network** to make a new private network.
   ![Screenshot of the "Networking" page of the Enterprise settings. A button, titled "Add private network", is highlighted with an orange outline.](/assets/images/enterprise/settings/private-networking-settings-add-network.png)
1. Alternatively, if you have not registered any private networks for your enterprise, click **Set up private network**.
1. In the "Network settings resource ID" text field, enter the `GitHubId` you obtained while configuring your Azure subscription for VNET-injection.
1. Under "Set a custom name," create a name for your private network.
1. Click **Add private network**.
1. Click the name of the private network.
1. Under "Services allowed," click **{% data variables.product.prodname_actions %}**.
1. Click **Save changes**.

## Creating a VNET-injected runner group

{% note %}

**Note:** For the VNET-injected runner to be accessible by required repositories within your enterprise-owned organizations, those repositories must have access to that VNET-injected runner group at the organization level. For more information, see "[AUTOTITLE](/actions/using-github-hosted-runners/controlling-access-to-larger-runners#changing-which-repositories-can-access-a-runner-group)."

{% endnote %}

1. Create a new runner group for your enterprise. For more information about how to create a runner group, see "[AUTOTITLE](/enterprise-cloud@latest/actions/using-github-hosted-runners/controlling-access-to-larger-runners#creating-a-runner-group-for-an-enterprise)."
{% data reusables.actions.workflows.runner-groups-enterprise-organization-access %}
1. While configuring your runner group, under "Private network access," use the dropdown menu to select the private network you created for VNET-injection.
1. Click **Create group** to create the group and apply the policy.

## Adding the {% data variables.product.company_short %}-hosted runner to the runner group

{% note %}

**Note:** When adding your {% data variables.product.company_short %}-hosted runner runner to a runner group, select the VNET-injected runner group you created in the previous procedures.

{% endnote %}

1. Add the {% data variables.product.company_short %}-hosted runner to the VNET-injected runner group. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/actions/using-github-hosted-runners/managing-larger-runners#adding-a-larger-runner-to-an-enterprise)."
