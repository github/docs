You will use a script to automate configuring your Azure resources.

### Prerequisites

- Use an Azure account with the Subscription Contributor role and the Network Contributor role. These roles enable you to register the `GitHub.Network` resource provider and delegate the subnet. For more information, see [Azure built-in roles](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles) on Microsoft Learn.

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
          name: 'AllowOutBoundActions'
          properties: {
            protocol: '*'
            sourcePortRange: '*'
            destinationPortRange: '*'
            sourceAddressPrefix: '*'
            access: 'Allow'
            priority: 210
            direction: 'Outbound'
            destinationAddressPrefixes: [
              '4.175.114.51/32'
              '20.102.35.120/32'
              '4.175.114.43/32'
              '20.72.125.48/32'
              '20.19.5.100/32'
              '20.7.92.46/32'
              '20.232.252.48/32'
              '52.186.44.51/32'
              '20.22.98.201/32'
              '20.246.184.240/32'
              '20.96.133.71/32'
              '20.253.2.203/32'
              '20.102.39.220/32'
              '20.81.127.181/32'
              '52.148.30.208/32'
              '20.14.42.190/32'
              '20.85.159.192/32'
              '52.224.205.173/32'
              '20.118.176.156/32'
              '20.236.207.188/32'
              '20.242.161.191/32'
              '20.166.216.139/32'
              '20.253.126.26/32'
              '52.152.245.137/32'
              '40.118.236.116/32'
              '20.185.75.138/32'
              '20.96.226.211/32'
              '52.167.78.33/32'
              '20.105.13.142/32'
              '20.253.95.3/32'
              '20.221.96.90/32'
              '51.138.235.85/32'
              '52.186.47.208/32'
              '20.7.220.66/32'
              '20.75.4.210/32'
              '20.120.75.171/32'
              '20.98.183.48/32'
              '20.84.200.15/32'
              '20.14.235.135/32'
              '20.10.226.54/32'
              '20.22.166.15/32'
              '20.65.21.88/32'
              '20.102.36.236/32'
              '20.124.56.57/32'
              '20.94.100.174/32'
              '20.102.166.33/32'
              '20.31.193.160/32'
              '20.232.77.7/32'
              '20.102.38.122/32'
              '20.102.39.57/32'
              '20.85.108.33/32'
              '40.88.240.168/32'
              '20.69.187.19/32'
              '20.246.192.124/32'
              '20.4.161.108/32'
              '20.22.22.84/32'
              '20.1.250.47/32'
              '20.237.33.78/32'
              '20.242.179.206/32'
              '40.88.239.133/32'
              '20.121.247.125/32'
              '20.106.107.180/32'
              '20.22.118.40/32'
              '20.15.240.48/32'
              '20.84.218.150/32'
            ]
          }
        }
        {
          name: 'AllowOutBoundGitHub'
          properties: {
            protocol: '*'
            sourcePortRange: '*'
            destinationPortRange: '*'
            sourceAddressPrefix: '*'
            access: 'Allow'
            priority: 220
            direction: 'Outbound'
            destinationAddressPrefixes: [
              '140.82.112.0/20'
              '143.55.64.0/20'
              '185.199.108.0/22'
              '192.30.252.0/22'
              '20.175.192.146/32'
              '20.175.192.147/32'
              '20.175.192.149/32'
              '20.175.192.150/32'
              '20.199.39.227/32'
              '20.199.39.228/32'
              '20.199.39.231/32'
              '20.199.39.232/32'
              '20.200.245.241/32'
              '20.200.245.245/32'
              '20.200.245.246/32'
              '20.200.245.247/32'
              '20.200.245.248/32'
              '20.201.28.144/32'
              '20.201.28.148/32'
              '20.201.28.149/32'
              '20.201.28.151/32'
              '20.201.28.152/32'
              '20.205.243.160/32'
              '20.205.243.164/32'
              '20.205.243.165/32'
              '20.205.243.166/32'
              '20.205.243.168/32'
              '20.207.73.82/32'
              '20.207.73.83/32'
              '20.207.73.85/32'
              '20.207.73.86/32'
              '20.207.73.88/32'
              '20.233.83.145/32'
              '20.233.83.146/32'
              '20.233.83.147/32'
              '20.233.83.149/32'
              '20.233.83.150/32'
              '20.248.137.48/32'
              '20.248.137.49/32'
              '20.248.137.50/32'
              '20.248.137.52/32'
              '20.248.137.55/32'
              '20.26.156.216/32'
              '20.27.177.113/32'
              '20.27.177.114/32'
              '20.27.177.116/32'
              '20.27.177.117/32'
              '20.27.177.118/32'
              '20.29.134.17/32'
              '20.29.134.18/32'
              '20.29.134.19/32'
              '20.29.134.23/32'
              '20.29.134.24/32'
              '20.87.245.0/32'
              '20.87.245.1/32'
              '20.87.245.4/32'
              '20.87.245.6/32'
              '20.87.245.7/32'
              '4.208.26.196/32'
              '4.208.26.197/32'
              '4.208.26.198/32'
              '4.208.26.199/32'
              '4.208.26.200/32'
            ]
          }
        }
        {
          name: 'AllowStorageOutbound'
          properties: {
            protocol: '*'
            sourcePortRange: '*'
            destinationPortRange: '*'
            sourceAddressPrefix: '*'
            destinationAddressPrefix: 'Storage'
            access: 'Allow'
            priority: 230
            direction: 'Outbound'
            destinationAddressPrefixes: []
          }
        }
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
      ]
    }
  }
  ```

### 1. Obtain the `databaseId` for your{% ifversion ghec %} enterprise{% else %} organization{% endif %}

You can use the following GraphQL query to retrieve your{% ifversion ghec %} enterprise{% else %} organization{% endif %} `databaseId`. You will use the{% ifversion ghec %} enterprise{% else %} organization{% endif %} `databaseId` for the value of the `DATABASE_ID` environment variable in the next step. For more information on working with GraphQL, see "[AUTOTITLE](/graphql/guides/forming-calls-with-graphql)."

{% ifversion ghec %}

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

{% else %}

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

{% endif %}

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
# - Network Settings with specified subnet and GitHub {% ifversion ghec %}Enterprise{% else %}Organization {% endif %}database ID
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
. az resource create --resource-group $RESOURCE_GROUP_NAME  --name $NETWORK_SETTINGS_RESOURCE_NAME --resource-type GitHub.Network/networkSettings --properties "{ \"location\": \"$AZURE_LOCATION\", \"properties\" : {  \"subnetId\": \"/subscriptions/$SUBSCRIPTION_ID/resourceGroups/$RESOURCE_GROUP_NAME/providers/Microsoft.Network/virtualNetworks/$VNET_NAME/subnets/$SUBNET_NAME\", \"businessId\": \"$DATABASE_ID\" }}" --is-full-object --output table --query "{GitHubId:tags.GitHubId, name:name}" --api-version 2024-04-02

echo
echo To clean up and delete resources run the following command:
echo az group delete --resource-group $RESOURCE_GROUP_NAME
```

The script will return the full payload for the created resource. The `GitHubId` hash value returned in the payload for the created resource is the network settings resource ID you will use in the next steps while configuring a network configuration in {% data variables.product.company_short %}.
