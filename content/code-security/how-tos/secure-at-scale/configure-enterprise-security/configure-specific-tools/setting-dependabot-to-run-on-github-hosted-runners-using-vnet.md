---
title: Setting up Dependabot to run on github-hosted action runners using the Azure Private Network
intro: You can configure an Azure Virtual Network (VNET) to run {% data variables.product.prodname_dependabot %} on {% data variables.product.company_short %}-hosted runners.
versions:
  feature: dependabot-vnet-support
permissions: '{% data reusables.permissions.dependabot-various-tasks %}'
topics:
  - Repositories
  - Dependabot
  - Version updates
  - Security updates
  - Dependencies
  - Pull requests
allowTitleToDifferFromFilename: true
shortTitle: Configure VNET
redirect_from:
  - /code-security/dependabot/working-with-dependabot/setting-dependabot-to-run-on-github-hosted-runners-using-vnet
contentType: how-tos
---

## Configuring VNET for {% data variables.product.prodname_dependabot_updates %}

This article provides step-by-step instructions for running {% data variables.product.prodname_dependabot %} on {% data variables.product.company_short %}-hosted runners configured with VNET. The article explains:

* How to create runner groups for your enterprise or organization with a VNET configuration.
* How to create {% data variables.product.company_short %}-hosted runners for {% data variables.product.prodname_dependabot %} in the runner group.
* How to enable {% data variables.product.prodname_dependabot %} on large runners.
* How to configure Azure VNET firewall IP rules.

To use {% data variables.product.company_short %}-hosted runners with Azure VNET, you first need to configure your Azure resources, then create a private network configuration in {% data variables.product.github %}.

## Configuring Azure resources

To learn how to use {% data variables.product.company_short %}-hosted runners with an Azure private network, see [Configuring your Azure resources](/enterprise-cloud@latest/admin/configuring-settings/configuring-private-networking-for-hosted-compute-products/configuring-private-networking-for-github-hosted-runners-in-your-enterprise#configuring-your-azure-resources) in the {% data variables.product.prodname_ghe_cloud %} documentation.

> [!NOTE]
>
> * The `databaseId` which is required in the script for configuring the Azure resources can refer to any of the following depending on whether you are configuring the resources for an enterprise or an organization:
> * The enterprise slug, which you can identify by looking at the URL for your enterprise, `https://github.com/enterprises/SLUG`, or
> * The login for the organization account, which you can identify by looking at the URL for your organization, `https://github.com/organizations/ORGANIZATION_LOGIN`.
> * The script will return the full payload for the created resource. The `GitHubId` hash value returned in the payload for the created resource is the network settings resource ID you will use in the next steps while setting up a network configuration in  {% data variables.product.github %}

## Configuring a VNET-injected runner for {% data variables.product.prodname_dependabot_updates %} in your enterprise

After configuring your Azure resources, you can use an Azure Virtual Network (VNET) for private networking by creating a network configuration{% ifversion ghec %} at the enterprise or organization level{% else %} at the organization level{% endif %}. Then, you can associate that network configuration to runner groups.

1. Add a new network configuration for your enterprise. See [Add a new network configuration for your enterprise](/enterprise-cloud@latest/admin/configuring-settings/configuring-private-networking-for-hosted-compute-products/configuring-private-networking-for-github-hosted-runners-in-your-enterprise#1-add-a-new-network-configuration-for-your-enterprise) in the {% data variables.product.prodname_ghe_cloud %} documentation.
1. Create a runner group for the enterprise and select the organizations that you want to run {% data variables.product.prodname_dependabot_updates %} for. See [Create a runner group for your enterprise](/enterprise-cloud@latest/admin/configuring-settings/configuring-private-networking-for-hosted-compute-products/configuring-private-networking-for-github-hosted-runners-in-your-enterprise#2-create-a-runner-group-for-your-enterprise) in the {% data variables.product.prodname_ghe_cloud %} documentation.
1. Create and add a {% data variables.product.company_short %}-hosted runner to the enterprise runner group. See [Adding a larger runner to an enterprise](/enterprise-cloud@latest/actions/using-github-hosted-runners/using-larger-runners/managing-larger-runners#adding-a-larger-runner-to-an-enterprise) in the {% data variables.product.prodname_ghe_cloud %} documentation. Important points are as follows:
   * The runner name must be **dependabot**
   * Choose a Linux x64 platform.
   * Select the suitable Ubuntu version.
   * When adding your {% data variables.product.company_short %}-hosted runner to a runner group, select the runner group you created in the previous step.

   > [!NOTE]
   > Naming the {% data variables.product.company_short %}-hosted runner **dependabot** assigns the **dependabot** label to the runner, which enables it to pick up jobs triggered by {% data variables.product.prodname_dependabot %} on actions.

{% ifversion fpt or ghec %}

<!-- This section is currently only valid for dotcom. It'll need reviewing for GHES 3.18 -->

## Enabling {% data variables.product.prodname_dependabot %} for the organization

You now need to enable {% data variables.product.prodname_dependabot %} on _self-hosted runners_ for your organization in order to enable {% data variables.product.prodname_dependabot %} on large runners. See [Enabling or disabling {% data variables.product.prodname_dependabot %} on larger runners](/code-security/dependabot/working-with-dependabot/about-dependabot-on-github-actions-runners#enabling-or-disabling-dependabot-on-larger-runners).

{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
1. In the "Security" section of the sidebar, select the **{% data variables.product.UI_advanced_security %}** dropdown menu, then click **{% data variables.product.prodname_global_settings_caps %}**.
1. Under **{% data variables.product.prodname_dependabot %}**, select **{% data variables.product.prodname_dependabot %} on self-hosted runners**. This step is required, as it ensures that future {% data variables.product.prodname_dependabot %} jobs will run on the larger {% data variables.product.company_short %}-hosted runner that has the `dependabot` name.

{% endif %}

## Triggering a {% data variables.product.prodname_dependabot %} run

Now that you've set up private networking with VNET, you can start a {% data variables.product.prodname_dependabot %} run.

{% data reusables.dependabot.trigger-run %}

## Checking logs and active jobs for {% data variables.product.prodname_dependabot_updates %}

* You can view the logs of the {% data variables.product.prodname_dependabot %} workflow in the **Actions** tab of your repository. Ensure you select the {% data variables.product.prodname_dependabot %} job on the left sidebar of the Actions page.

  ![Example of log for a "Dependabot in vnet" workflow. The Dependabot job is highlighted with an orange outline. ](/assets/images/help/dependabot/dependabot-vnet-logs.png)

* You can view the active jobs in the page containing informatuon about the runner. To access that page, click the **Policies** tab for the enterprise, select **Actions** on the left sidebar, click the **Runner group** tab, and select your runner.

  ![Screenshot showing a Dependabot runner's active jobs.](/assets/images/help/dependabot/dependabot-vnet-active-jobs.png)

## Configuring Azure VNET firewall IP rules

If your Azure VNET environment is configured with a firewall with an IP allowlist, you may need to update your list of allowed IP addresses to use the {% data variables.product.company_short %}-hosted runners IP addresses sourced from the meta API endpoint.

* {% data variables.product.github %} provides the following public endpoint for its IP ranges:
   > GET <https://api.github.com/meta>
* Copy and paste the following curl command in your terminal or command prompt and replace the placeholder bearer token value with your actual value.

  ```bash copy
        curl -L \
        -H "Accept: application/vnd.github+json" \
        -H "Authorization: Bearer YOUR-TOKEN" \
        -H "X-GitHub-Api-Version: 2022-11-28" \
        https://api.github.com/meta
  ```

* From the response, look for the **actions** key.

    ```bash
        "actions": [ ... ]
    ```

  These are the IP ranges used by {% data variables.product.prodname_actions %} runners, including {% data variables.product.prodname_dependabot %} and hosted runners.

* Add these IPs to your firewall allowlist.
