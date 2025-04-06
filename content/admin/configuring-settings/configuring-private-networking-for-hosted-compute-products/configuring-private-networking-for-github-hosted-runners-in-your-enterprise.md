---
title: Configuring private networking for GitHub-hosted runners in your enterprise
shortTitle: Configuring private networking
intro: 'Learn how to use {% data variables.product.company_short %}-hosted runners with an Azure private network.'
versions:
  ghec: '*'
type: how_to
permissions: Enterprise owners can configure private networking for GitHub-hosted runners at the enterprise level.
topics:
  - Actions
  - Action development
  - Azure Virtual Network
  - Administrator
  - Developer
  - CI
  - CD
  - Enterprise
redirect_from:
  - /actions/using-github-hosted-runners/connecting-to-a-private-network/configuring-an-azure-virtual-network-for-your-enterprise
  - /actions/using-github-hosted-runners/connecting-to-a-private-network/configuring-azure-resources-for-private-networking-with-github-hosted-runners
  - /admin/configuration/configuring-private-networking-for-hosted-compute-products/configuring-azure-resources-for-private-networking-with-github-hosted-runners
  - /admin/configuration/configuring-private-networking-for-hosted-compute-products/creating-a-network-configuration-with-an-azure-private-network
  - /actions/using-github-hosted-runners/connecting-to-a-private-network/configuring-your-github-settings-for-use-with-azure-virtual-network
  - /admin/configuration/configuring-private-networking-for-hosted-compute-products/configuring-private-networking-for-github-hosted-runners
  - /admin/configuration/configuring-private-networking-for-hosted-compute-products/configuring-private-networking-for-github-hosted-runners-in-your-enterprise
---

## About Azure private networking for {% data variables.product.company_short %}-hosted runners

{% data reusables.actions.azure-vnet-configuring-overview %}

## Configuring your Azure resources

{% data reusables.actions.azure-vnet-procedures-prereqs %}

### 1. Obtain the `databaseId` for your enterprise

You can use the following GraphQL query to retrieve your enterprise `databaseId`. You will use the enterprise `databaseId` for the value of the `DATABASE_ID` environment variable in the next step. For more information on working with GraphQL, see "[AUTOTITLE](/graphql/guides/forming-calls-with-graphql)."

{% data reusables.enterprise_migrations.retrieve-enterprise-id-graphql %}

```graphql
query(
  $slug: String!
){
  enterprise (slug: $slug)
  {
    slug
    databaseId
  }
}
'
Variables
{
  "slug": "ENTERPRISE_SLUG"
}
```

Alternatively, you can use the following curl command to find your `databaseId`.

```shell copy
curl -H "Authorization: Bearer BEARER_TOKEN" -X POST \
  -d '{ "query": "query($slug: String!) { enterprise (slug: $slug) { slug databaseId } }" ,
        "variables": {
          "slug": "ENTERPRISE_SLUG"
        }
      }' \
https://api.github.com/graphql
```

{% data reusables.actions.azure-vnet-configure-azure-resources-script %}

## Creating a network configuration for your enterprise in {% data variables.product.company_short %}

{% data reusables.actions.azure-vnet-creating-network-configuration-prereqs %}

### 1. Add a new network configuration for your enterprise

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. In the left sidebar, click **Hosted compute networking**.
1. Click the **New network configuration** dropdown. Then click **Azure private network**.
1. Name your network configuration.
1. Click **Add Azure Virtual Network**.
1. In the popup window, enter the network settings resource ID you retrieved when you configured your Azure resources for private networking.
1. Click **Add Azure Virtual Network**.

### 2. Create a runner group for your enterprise

{% note %}

**Note:** For the runner group to be accessible by repositories within your organizations, those repositories must have access to that runner group at the organization level. For more information, see "[AUTOTITLE](/actions/using-github-hosted-runners/controlling-access-to-larger-runners#changing-which-repositories-can-access-a-runner-group)."

{% endnote %}

1. Create a new runner group for your enterprise. For more information about how to create a runner group, see "[AUTOTITLE](/actions/using-github-hosted-runners/controlling-access-to-larger-runners#creating-a-runner-group-for-an-enterprise)."
{% data reusables.actions.workflows.runner-groups-enterprise-organization-access %}
1. While configuring your runner group, under "Network configurations," use the dropdown menu to select the network configuration you created for the Azure VNET.
1. To create the group and apply the policy, click **Create group**.

### 3. Add the {% data variables.product.company_short %}-hosted runner to the enterprise runner group

{% note %}

**Note:** When adding your {% data variables.product.company_short %}-hosted runner to a runner group, select the runner group you created in the previous procedures.

{% endnote %}

1. Add the {% data variables.product.company_short %}-hosted runner to the runner group. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/actions/using-github-hosted-runners/managing-larger-runners#adding-a-larger-runner-to-an-enterprise)."

### 4. Optionally, manage network configurations

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. In the left sidebar, click **Hosted compute networking**.
1. To edit a network configuration, to the right of the network configuration, click {% octicon "pencil" aria-label="Edit a network configuration" %}. Then click **Edit configuration**.
1. To disable a network configuration, to the right of the network configuration, click {% octicon "kebab-horizontal" aria-label="Menu" %}. Then click **Disable**.
1. To delete a network configuration, to the right of the network configuration, click {% octicon "kebab-horizontal" aria-label="Menu" %}. Then click **Delete**.

## Enabling creation of network configurations for organizations

You can allow organization owners in an enterprise to create their own organization-level network configurations.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
1. Click **Hosted compute networking**.
1. Under "Hosted compute networking," click **Enable**.
1. Click **Save**.

## Deleting a subnet

{% data reusables.actions.azure-vnet-deleting-a-subnet %}
