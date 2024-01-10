---
title: Configuring private networking for GitHub-hosted runners
shortTitle: Configuring private networking
intro: 'Learn how to use {% data variables.product.company_short %}-hosted runners with an Azure private network.'
versions:
  feature: actions-private-networking-azure-vnet
type: how_to
topics:
  - Actions
  - Developer
redirect_from:
  - /actions/using-github-hosted-runners/connecting-to-a-private-network/configuring-an-azure-virtual-network-for-your-enterprise
  - /actions/using-github-hosted-runners/connecting-to-a-private-network/configuring-azure-resources-for-private-networking-with-github-hosted-runners
  - /admin/configuration/configuring-private-networking-for-hosted-compute-products/configuring-azure-resources-for-private-networking-with-github-hosted-runners
  - /admin/configuration/configuring-private-networking-for-hosted-compute-products/creating-a-network-configuration-with-an-azure-private-network
  - /actions/using-github-hosted-runners/connecting-to-a-private-network/configuring-your-github-settings-for-use-with-azure-virtual-network
---

{% data reusables.actions.private-networking-actions-azure-vnet-beta-note %}

## About configuring private networking for {% data variables.product.company_short %}-hosted runners

{% data reusables.actions.actions-azure-vnet-resources-config-link %}

The following procedures will lead you through the entire configuration process.

{% warning %}

**Warning:** {% data reusables.actions.network-configuration-for-github-hosted-runners-warning %}

{% endwarning %}

## Configuring your Azure resources

You will use a script to automate configuring your Azure resources.

### Prerequisites

- Use an Azure account with the Subscription Contributor role and the Network Contributor role. These roles enable you to register the `GitHub.Network` resource provider and delegate the subnet. For more information, see [Azure built-in roles](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles) in the Azure documentation.

- To correctly associate the subnets with the right user, Azure `NetworkSettings` resources must be created in the same subscriptions where virtual networks are created.

- To ensure resource availability/data residency, resources must be created in the same Azure region.

- Save the following `.bicep` file. Name the file `actions-nsg-deployment.bicep`.

  {% note %}

  **Note:** Alternatively, to allow {% data variables.product.prodname_actions %} to communicate with the runners, you can allow the same firewall domains that are required for communication between self-hosted runners and {% data variables.product.product_name %}. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners#communication-between-self-hosted-runners-and-github-enterprise-cloud)."

  {% endnote %}

  ```bicep copy
  @description('NSG for outbound rules')
  param location string
  param nsgName string = 'actions_NSG'

  resource actions_NSG 'Microsoft.Network/networkSecurityGroups@2017-06-01' = {
    name: nsgName
    location: location
    properties: {
      securityRules: [
        {
          name: 'DenyInternetOutBoundOverwrite'
          properties: {
            protocol: '*'
            sourcePortRange: '*'
            destinationPortRange: '*'
            sourceAddressPrefix: '*'
            destinationAddressPrefix: 'Internet'
            access: 'Deny'
            priority: 400
            direction: 'Outbound'
          }
        }
        {
          name: 'AllowVnetOutBoundOverwrite'
          properties: {
            protocol: 'TCP'
            sourcePortRange: '*'
            destinationPortRange: '443'
            sourceAddressPrefix: '*'
            destinationAddressPrefix: 'VirtualNetwork'
            access: 'Allow'
            priority: 200
            direction: 'Outbound'
            destinationAddressPrefixes: []
          }
        }
        {
          name: 'AllowAzureCloudOutBound'
          properties: {
            protocol: 'TCP'
            sourcePortRange: '*'
            destinationPortRange: '443'
            sourceAddressPrefix: '*'
            destinationAddressPrefix: 'AzureCloud'
            access: 'Allow'
            priority: 210
            direction: 'Outbound'
            destinationAddressPrefixes: []
          }
        }
        {
          name: 'AllowInternetOutBoundGitHub'
          properties: {
            protocol: 'TCP'
            sourcePortRange: '*'
            destinationPortRange: '443'
            sourceAddressPrefix: '*'
            access: 'Allow'
            priority: 220
            direction: 'Outbound'
            destinationAddressPrefixes: [
              '140.82.112.0/20'
              '142.250.0.0/15'
              '143.55.64.0/20'
              '192.30.252.0/22'
              '185.199.108.0/22'
            ]
          }
        }
        {
          name: 'AllowInternetOutBoundMicrosoft'
          properties: {
            protocol: 'TCP'
            sourcePortRange: '*'
            destinationPortRange: '443'
            sourceAddressPrefix: '*'
            access: 'Allow'
            priority: 230
            direction: 'Outbound'
            destinationAddressPrefixes: [
              '13.64.0.0/11'
              '13.96.0.0/13'
              '13.104.0.0/14'
              '20.33.0.0/16'
              '20.34.0.0/15'
              '20.36.0.0/14'
              '20.40.0.0/13'
              '20.48.0.0/12'
              '20.64.0.0/10'
              '20.128.0.0/16'
              '52.224.0.0/11'
              '204.79.197.200'
            ]
          }
        }
      {
          name: 'AllowInternetOutBoundCannonical'
          properties: {
            protocol: 'TCP'
            sourcePortRange: '*'
            destinationPortRange: '443'
            sourceAddressPrefix: '*'
            destinationAddressPrefix: '185.125.188.0/22'
            access: 'Allow'
            priority: 240
            direction: 'Outbound'
            destinationAddressPrefixes: []
          }
        }
      ]
    }
  }
  ```

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

### 2. Use a script to configure your Azure resources

Use the following script to set up a subnet for Azure private networking. The script creates all resources in the same resource group.

To use the script, fill in the placeholder environment variable values with the actual values and run the script from a bash shell or Windows Subsystem for Linux.

{% note %}

**Notes**:

- Run the following script in the same directory where you saved the `actions-nsg-deployment.bicep` file.
- When setting the `YOUR_AZURE_LOCATION` environment variable, use your region’s name. This value is different than your region’s display name. To see a list of names and display names, use `az account list-locations -o table`.
- When you create the network settings resource, a service association link is applied to the subnet that you provide. This link prevents accidental deletion of the subnet while in use by the {% data variables.product.prodname_actions %} service.
- If you customize this script to use network resources in existing subnets, you must ensure any existing network interfaces (NICs) connected to the subnet are deleted before the subnet is delegated to the {% data variables.product.prodname_actions %} service. Otherwise, the service will fail to apply the service association link to the subnet.

{% endnote %}

```bash copy
#!/bin/bash

# This script creates the following resources in the specified subscription:
# - Resource group
# - Network Security Group rules
# - Virtual network (vnet) and subnet
# - Network Settings with specified subnet and GitHub Enterprise database ID
#
# It also registers the `GitHub.Network` resource provider with the subscription,
# delegates the created subnet to the Actions service via the `GitHub.Network/NetworkSettings`
# resource type, and applies the NSG rules to the created subnet.

# stop on failure
set -e

#set environment
export AZURE_LOCATION=YOUR_AZURE_LOCATION
export SUBSCRIPTION_ID=YOUR_SUBSCRIPTION_ID
export RESOURCE_GROUP_NAME=YOUR_RESOURCE_GROUP_NAME
export VNET_NAME=YOUR_VNET_NAME
export SUBNET_NAME=YOUR_SUBNET_NAME
export NSG_NAME=YOUR_NSG_NAME
export NETWORK_SETTINGS_RESOURCE_NAME=YOUR_NETWORK_SETTINGS_RESOURCE_NAME
export DATABASE_ID=YOUR_DATABASE_ID

# These are the default values. You can adjust your address and subnet prefixes.
export ADDRESS_PREFIX=10.0.0.0/16
export SUBNET_PREFIX=10.0.0.0/24

echo
echo login to Azure
. az login --output none

echo
echo set account context $SUBSCRIPTION_ID
. az account set --subscription $SUBSCRIPTION_ID

echo
echo Register resource provider GitHub.Network
. az provider register --namespace GitHub.Network

echo
echo Create resource group $RESOURCE_GROUP_NAME at $AZURE_LOCATION
. az group create --name $RESOURCE_GROUP_NAME --location $AZURE_LOCATION

echo
echo Create NSG rules deployed with 'actions-nsg-deployment.bicep' file
. az deployment group create --resource-group $RESOURCE_GROUP_NAME --template-file ./actions-nsg-deployment.bicep --parameters location=$AZURE_LOCATION nsgName=$NSG_NAME

echo
echo Create vnet $VNET_NAME and subnet $SUBNET_NAME
. az network vnet create --resource-group $RESOURCE_GROUP_NAME --name $VNET_NAME --address-prefix $ADDRESS_PREFIX --subnet-name $SUBNET_NAME --subnet-prefixes $SUBNET_PREFIX

echo
echo Delegate subnet to GitHub.Network/networkSettings and apply NSG rules
. az network vnet subnet update --resource-group $RESOURCE_GROUP_NAME --name $SUBNET_NAME --vnet-name $VNET_NAME --delegations GitHub.Network/networkSettings --network-security-group $NSG_NAME

echo
echo Create network settings resource $NETWORK_SETTINGS_RESOURCE_NAME
. az resource create --resource-group $RESOURCE_GROUP_NAME  --name $NETWORK_SETTINGS_RESOURCE_NAME --resource-type GitHub.Network/networkSettings --properties "{ \"location\": \"$AZURE_LOCATION\", \"properties\" : {  \"subnetId\": \"/subscriptions/$SUBSCRIPTION_ID/resourceGroups/$RESOURCE_GROUP_NAME/providers/Microsoft.Network/virtualNetworks/$VNET_NAME/subnets/$SUBNET_NAME\", \"organizationId\": \"$DATABASE_ID\" }}" --is-full-object --output table --query "{GitHubId:tags.GitHubId, name:name}" --api-version 2023-11-01-preview

echo
echo To clean up and delete resources run the following command:
echo az group delete --resource-group $RESOURCE_GROUP_NAME
```

The script will return the full payload for the created resource. The `GitHubId` hash value returned in the payload for the created resource is the network settings resource ID you will use in the next steps while configuring a network configuration in {% data variables.product.company_short %}.

## Configuring a network configuration in {% data variables.product.company_short %}

After configuring your Azure resources, you can use an Azure Virtual Network (VNET) for private networking by creating a network configuration for your enterprise. Then, you can associate that network configuration to runner groups. For more information about runner groups, see "[AUTOTITLE](/actions/using-github-hosted-runners/about-larger-runners/controlling-access-to-larger-runners)."

Once the network configuration is associated with a runner group, all runners in that group will have access to the Azure VNET that has been connected to the underlying configuration.

### Prerequisites

{% data reusables.actions.network-configuration-for-github-hosted-runners-warning %}

### 1. Add a new network configuration

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. In the left sidebar, click **Hosted compute networking**.
1. Click the **New network configuration** dropdown. Then click **Azure private network**.
1. Name your network configuration.
1. Click **Add Azure Virtual Network**.
1. In the popup window, enter the network settings resource ID you retrieved when you configured your Azure resources for private networking.
1. Click **Add Azure Virtual Network**.

### 2. Create a runner group

{% note %}

**Note:** For the runner group to be accessible by repositories within your enterprise-owned organizations, those repositories must have access to that runner group at the organization level. For more information, see "[AUTOTITLE](/actions/using-github-hosted-runners/controlling-access-to-larger-runners#changing-which-repositories-can-access-a-runner-group)."

{% endnote %}

1. Create a new runner group for your enterprise. For more information about how to create a runner group, see "[AUTOTITLE](/enterprise-cloud@latest/actions/using-github-hosted-runners/controlling-access-to-larger-runners#creating-a-runner-group-for-an-enterprise)."
{% data reusables.actions.workflows.runner-groups-enterprise-organization-access %}
1. While configuring your runner group, under "Network configurations," use the dropdown menu to select the network configuration you created for the Azure VNET.
1. To create the group and apply the policy, click **Create group**.

### 3. Add the {% data variables.product.company_short %}-hosted runner to the runner group

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

## Deleting a subnet

When you create the network settings resource, a service association link is applied to the subnet that you provide. This link prevents accidental deletion of the subnet while in use by the {% data variables.product.prodname_actions %} service.

To delete the subnet, this service association link needs to be removed first. The service association link is safely removed automatically once the network settings resource is deleted.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. In the left sidebar, click **Hosted compute networking**.
1. Open the network configuration that is using the subnet that you want to delete.
1. Review the list of runner groups using the network configuration.
1. In the top-right corner, click the "{% octicon "kebab-horizontal" aria-label="Menu" %}" button. Then click **Delete configuration**.
1. To delete the network settings resource and remove the service association link, use your own inputs with following commands with the Azure CLI. For more information, see the [Azure Command-Line Interface (CLI)](https://learn.microsoft.com/en-us/cli/azure/) documentation.

   ```bash copy
   az account set --subscription $SUBSCRIPTION_ID
   az resource delete -g $RESOURCE_GROUP_NAME --name $NETWORK_SETTINGS_RESOURCE_NAME --resource-type 'GitHub.Network/networkSettings' --api-version '2023-11-01-preview'
   ```

1. Delete the subnet in Azure. For more information, see [Delete a subnet](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-manage-subnet?tabs=azure-portal#delete-a-subnet) in the Azure documentation.
