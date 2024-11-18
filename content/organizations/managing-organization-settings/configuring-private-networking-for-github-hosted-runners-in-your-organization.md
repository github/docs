---
title: Configuring private networking for GitHub-hosted runners in your organization
shortTitle: Configuring private networking
intro: 'Learn how to use {% data variables.product.company_short %}-hosted runners with an Azure private network in your organization.'
versions:
  feature: actions-private-networking-azure-vnet
type: how_to
permissions: '{% data reusables.actions.azure-vnet-organization-permissions %}'
topics:
  - Actions
  - Action development
  - Azure Virtual Network
  - Administrator
  - Developer
  - CI
  - CD
  - Organizations
---

## About Azure private networking for {% data variables.product.company_short %}-hosted runners

{% data reusables.actions.azure-vnet-configuring-overview %}

{% ifversion ghec %}

> [!NOTE]
> {% data reusables.actions.azure-vnet-enterprise-policy %}

{% endif %}

## Configuring your Azure resources

{% data reusables.actions.azure-vnet-procedures-prereqs %}

### 1. Obtain the `databaseId` for your organization

You can use the following GraphQL query to retrieve your organization `databaseId`. You will use the organization `databaseId` for the value of the `DATABASE_ID` environment variable in the next step. For more information on working with GraphQL, see "[AUTOTITLE](/graphql/guides/forming-calls-with-graphql)."

| Query variable | Description |
|----|----|
| `login` | The login for your organization account, which you can identify by looking at the URL for your organization, `https://github.com/organizations/ORGANIZATION_LOGIN`.

```graphql
query(
  $login: String!
){
  organization (login: $login)
  {
    login
    databaseId
  }
}
'
Variables
{
  "login": "ORGANIZATION_LOGIN"
}
```

Alternatively, you can use the following curl command to find your `databaseId`.

```shell copy
curl -H "Authorization: Bearer BEARER_TOKEN" -X POST \
  -d '{ "query": "query($login: String!) { organization (login: $login) { login databaseId } }" ,
        "variables": {
          "login": "ORGANIZATION_LOGIN"
        }
      }' \
https://api.github.com/graphql
```

{% data reusables.actions.azure-vnet-configure-azure-resources-script %}

## Creating a network configuration for your organization in {% data variables.product.company_short %}

{% data reusables.actions.azure-vnet-creating-network-configuration-prereqs %}

### 1. Add a new network configuration for your organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the left sidebar, click **Hosted compute networking**.
1. Click the **New network configuration** dropdown. Then click **Azure private network**.
1. Name your network configuration.
1. Click **Add Azure Virtual Network**.
1. In the popup window, enter the network settings resource ID you retrieved when you configured your Azure resources for private networking.
1. Click **Add Azure Virtual Network**.

### 2. Create a runner group for your organization

{% note %}

**Note:** For the runner group to be accessible by repositories within your organizations, those repositories must have access to that runner group at the organization level. For more information, see "[AUTOTITLE](/actions/using-github-hosted-runners/controlling-access-to-larger-runners#changing-which-repositories-can-access-a-runner-group)."

{% endnote %}

1. Create a new runner group for your organization. For more information about how to create a runner group, see "[AUTOTITLE](/actions/using-github-hosted-runners/about-larger-runners/controlling-access-to-larger-runners#creating-a-runner-group-for-an-organization)."
1. To choose a policy for repository access, select the **Repository access** dropdown menu and click a policy. You can configure a runner group to be accessible to a specific list of repositories, or all repositories in the organization.
1. While configuring your runner group, under "Network configurations," use the dropdown menu to select the network configuration you created for the Azure VNET.
1. To create the group and apply the policy, click **Create group**.

### 3. Add the {% data variables.product.company_short %}-hosted runner to the organization runner group

{% note %}

**Note:** When adding your {% data variables.product.company_short %}-hosted runner to a runner group, select the runner group you created in the previous procedures.

{% endnote %}

1. Add the {% data variables.product.company_short %}-hosted runner to the runner group. For more information, see "[AUTOTITLE](/actions/using-github-hosted-runners/about-larger-runners/managing-larger-runners#adding-a-larger-runner-to-an-organization)."

### 4. Optionally, manage network configurations

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the left sidebar, click **Hosted compute networking**.
1. To edit a network configuration, to the right of the network configuration, click {% octicon "pencil" aria-label="Edit a network configuration" %}. Then click **Edit configuration**.
1. To disable a network configuration, to the right of the network configuration, click {% octicon "kebab-horizontal" aria-label="Menu" %}. Then click **Disable**.
1. To delete a network configuration, to the right of the network configuration, click {% octicon "kebab-horizontal" aria-label="Menu" %}. Then click **Delete**.

## Deleting a subnet

{% data reusables.actions.azure-vnet-deleting-a-subnet %}
