---
title: Connecting to a private network
shortTitle: Connect to a private network
intro: 'You can connect {% data variables.product.prodname_dotcom %}-hosted runners to resources on a private network, including package registries, secret managers, and other on-premises services.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Actions
  - Developer
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## About {% data variables.product.prodname_dotcom %}-hosted runners networking

By default, {% data variables.product.prodname_dotcom %}-hosted runners have access to the public internet. However, you may also want these runners to access resources on your private network, such as a package registry, a secret manager, or other on-premise services.

{% data variables.product.prodname_dotcom %}-hosted runners are shared across all {% data variables.product.prodname_dotcom %} customers, so you will need a way of connecting your private network to just your runners while they are running your workflows. There are a few different approaches you could take to configure this access, each with different advantages and disadvantages.

{% ifversion fpt or ghec or ghes %}

## Using an API Gateway with OIDC

With {% data variables.product.prodname_actions %}, you can use OpenID Connect (OIDC) tokens to authenticate your workflow outside of {% data variables.product.prodname_actions %}. For example, you could run an API Gateway on the edge of your private network that authenticates incoming requests with the OIDC token and then makes API requests on behalf of your workflow in your private network.

The following diagram gives an overview of this solution's architecture:

![Diagram of an OIDC gateway architecture, starting with a {% data variables.product.prodname_actions %} runner and ending with a private network's private service.](/assets/images/help/actions/actions-oidc-gateway.png)

It's important that you authenticate not just that the OIDC token came from {% data variables.product.prodname_actions %}, but that it came specifically from your expected workflows, so that other {% data variables.product.prodname_actions %} users aren't able to access services in your private network. You can use OIDC claims to create these conditions. For more information, see "[AUTOTITLE](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#defining-trust-conditions-on-cloud-roles-using-oidc-claims)."

The main disadvantage of this approach is you have to implement the API gateway to make requests on your behalf, as well as run it on the edge of your network.

But there are various advantages too:
- You don't need to configure any firewalls, or modify the routing of your private network.
- The API gateway is stateless, and so it scales horizontally to handle high availability and high throughput.

For more information, see [a reference implementation of an API Gateway](https://github.com/github/actions-oidc-gateway-example) (note that this requires customization for your use case and is not ready-to-run as-is), and "[AUTOTITLE](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)".
{% endif %}

## Using WireGuard to create a network overlay

If you don't want to maintain separate infrastructure for an API Gateway, you can create an overlay network between your runner and a service in your private network, by running WireGuard in both places.

There are various disadvantages to this approach:

- To reach WireGuard running on your private service, you will need a well-known IP address and port that your workflow can reference: this can either be a public IP address and port, a port mapping on a network gateway, or a service that dynamically updates DNS.
- WireGuard doesn't handle NAT traversal out of the box, so you'll need to identify a way to provide this service.
- This connection is one-to-one, so if you need high availability or high throughput you'll need to build that on top of WireGuard.
- You'll need to generate and securely store keys for both the runner and your private service. WireGuard uses UDP, so your network must support UDP traffic.

There are some advantages too, as you can run WireGuard on an existing server so you don't have to maintain separate infrastructure, and it's well supported on {% data variables.product.prodname_dotcom %}-hosted runners.

## Example: Configuring WireGuard

This example workflow configures WireGuard to connect to a private service.

For this example, the WireGuard instance running in the private network has this configuration:
- Overlay network IP address of `192.168.1.1`
- Public IP address and port of `1.2.3.4:56789`
- Public key `examplepubkey1234...`

The WireGuard instance in the {% data variables.product.prodname_actions %} runner has this configuration:
- Overlay network IP address of `192.168.1.2`
- Private key stores as an {% data variables.product.prodname_actions %} secret under `WIREGUARD_PRIVATE_KEY`

```yaml
name: WireGuard example

on:
  workflow_dispatch:

jobs:
  wireguard_example:
    runs-on: ubuntu-latest
    steps:
      - run: sudo apt install wireguard

      - run: echo "${{ secrets.WIREGUARD_PRIVATE_KEY }}" > privatekey

      - run: sudo ip link add dev wg0 type wireguard

      - run: sudo ip address add dev wg0 192.168.1.2 peer 192.168.1.1

      - run: sudo wg set wg0 listen-port 48123 private-key privatekey peer examplepubkey1234... allowed-ips 0.0.0.0/0 endpoint 1.2.3.4:56789

      - run: sudo ip link set up dev wg0

      - run: curl -vvv http://192.168.1.1
```

For more information, see [WireGuard's Quick Start](https://www.wireguard.com/quickstart/), as well as "[AUTOTITLE](/actions/security-guides/encrypted-secrets)" for how to securely store keys.

### Using Tailscale to create a network overlay

Tailscale is a commercial product built on top of WireGuard. This option is very similar to WireGuard, except Tailscale is more of a complete product experience instead of an open source component.

Its disadvantages are similar to WireGuard: The connection is one-to-one, so you might need to do additional work for high availability or high throughput. You still need to generate and securely store keys. The protocol is still UDP, so your network must support UDP traffic.

However, there are some advantages over WireGuard: NAT traversal is built-in, so you don't need to expose a port to the public internet. It is by far the quickest of these options to get up and running, since Tailscale provides an {% data variables.product.prodname_actions %} workflow with a single step to connect to the overlay network.

For more information, see the [Tailscale GitHub Action](https://github.com/tailscale/github-action), as well as "[AUTOTITLE](/actions/security-guides/encrypted-secrets)" for how to securely store keys.

{% ifversion actions-private-networking-azure-vnet %}

## Using an Azure Virtual Network (VNET)

{% note %}

**Notes:**

- {% data reusables.actions.github-hosted-larger-runners-azure-vnet-beta %}
- Only larger runners are supported with Azure VNET. For more information about larger runners, see "[AUTOTITLE](/enterprise-cloud@latest/actions/using-github-hosted-runners/about-larger-runners)."

{% endnote %}

{% data reusables.actions.azure-vnet-injected-runners-intro %}

Using {% data variables.product.company_short %}-hosted runners within Azure VNET allows you to perform the following actions.
- Privately connect a runner to resources inside an Azure network without opening internet ports, including on-premises resources accessible from the Azure network.
- Restrict what {% data variables.product.company_short %}-hosted runners can access or connect to with full control over outbound network policies.
- Monitor network logs for {% data variables.product.company_short %}-hosted runners and view all connectivity to and from a runner.

With this functionality, the {% data variables.product.company_short %}-hosted runner's network interface card (NIC) is deployed into your Azure VNET. As a result, all communication is kept private within the network boundaries, and networking policies applied to the VNET also apply to the runner.

For example, if your VNET is configured with an Azure ExpressRoute to provide access to on-premises resources (artifactory) or connected to a VPN tunnel to provide access to other cloud-based resources, those access policies also apply to your runners.

Similarly, if your VNET is configured with a Network Security Group (NSG) for controlled outbound access, those outbound rules also apply to your runners.

If you have enabled any network logs monitoring for your VNET, you can also monitor inbound/outbound network traffic for your runners.

To use {% data variables.product.company_short %}-hosted runners with Azure VNET, you will need to complete the following actions.

- Create an Azure VNET or use an existing one
- Configure your Azure subscription
- Grant {% data variables.product.prodname_actions %} access
- Register the resource provider
- Delegate the subnet
- Create a network settings resource in Azure
- Configure a private network in your {% data variables.product.company_short %} account settings
- Enable the {% data variables.product.prodname_actions %} service
- Create a VNET-injected runner group
- Give repository access to the VNET-injected runner group at the organization level
- Add a {% data variables.product.company_short %}-hosted runner to the VNET-injected runner group

### Configuring your Azure subscription

Before configuring {% data variables.product.prodname_actions %} for VNET-injection, you will need to register the the resource provider in Azure and delegate a subnet where network interfaces (NICs) will be allocated.

{% note %}

**Note:** To configure {% data variables.product.prodname_actions %} for VNET-injection, you must use an Azure account with the Subscription Contributor role and the Network Contributor role. These roles enable you to register the resource provider and delegate the subnet. For more information, see [Azure built-in roles](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles) in the Azure documentation.

{% endnote %}

### Granting {% data variables.product.prodname_actions %} access

{% note %}

**Note:** Azure Firewall or other Azure integrated security systems like ZScaler must not conflict with the NSG rules.

{% endnote %}

**For Layer7/DNS/firewall filtering:**

To grant {% data variables.product.prodname_actions %} access, you can use {% data variables.product.company_short %}'s self-hosted runner URLs. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners#communication-between-self-hosted-runners-and-github)."

**For Layer 3/IP Layer filtering:**

1. If no outbound internet traffic is allowed in your subnet, you must give {% data variables.product.prodname_actions %} access to specific IP ranges to allow communication from the virtual machine to the {% data variables.product.prodname_actions %} service and Azure dependency service. Save the following `.bicep` file and name it `actions-nsg-deployment.bicep`. You will use this in the next step.

   ```yaml copy
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
1. To deploy the Network Security Group (NSG) with the required rules and configure the subnet to use it, run the following command.

   ```shell copy
   az deployment group create --resource-group RESOURCE_GROUP_NAME --template-file ./actions-nsg-deployment.bicep --parameters location=AZURE_LOCATION nsgName=NSG_NAME
   ```

### Registering the resource provider

1. Follow the [Register resource provider](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/resource-providers-and-types#register-resource-provider-1) procedures in the Azure documentation.
1. When selecting a subscription, select the subscription that will contain your VNET.
1. When searching for a resource provider, search for "GitHub.Network" in the "Filter by name" text field.

### Delegating the subnet

1. Delegate the subnet to the `GitHub.Network/NetworkSettings` resource type. For more information, see [Add or remove a subnet delegation](https://learn.microsoft.com/en-us/azure/virtual-network/manage-subnet-delegation?tabs=manage-subnet-delegation-portal) in the Azure documentation.

### Creating a network settings resource in Azure

1. Use the following GraphQL query to retrieve your enterprise `databaseId`. The enterprise `databaseId` is an integer you will use in the next step. For more information on working with GraphQL, see "[AUTOTITLE](/graphql/guides/forming-calls-with-graphql)."

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

   ```

{% indented_data_reference reusables.enterprise_migrations.retreive-enterprise-id-graphql spaces=3 %}

1. Save the following template in a file named `networkSettingsPayload.json`. Replace `DATABASE_ID` with the enterprise `databaseId` integer you retrieved using GraphQL in the previous step.

   ```json copy
   {
     "subnetId": "/subscriptions/SUBSCRIPTION_ID/resourceGroups/RESOURCE_GROUP_NAME/providers/Microsoft.Network/virtualNetworks/VNET_NAME/subnets/SUBNET_NAME",
     "organizationId": "DATABASE_ID"
   }
   ```

1. Use the following command in the Azure CLI to create a network settings resource in Azure. For more information, see [Azure Command-Line Interface (CLI) documentation](https://learn.microsoft.com/en-us/cli/azure/) in the Azure documentation.

   ```shell copy
   az resource create -g RESOURCE_GROUP_NAME -n RESOURCE_NAME --resource-type GitHub.Network/networkSettings --properties @networkSettingsPayload.json
   ```

   The command will return the full payload for the created resource. The following is an example of a portion of the full payload.

   {% note %}

   **Note:** The `GitHubId` hash value returned in the payload for the created resource is the network settings resource ID you will use in the next steps while configuring VNET settings with {% data variables.product.company_short %}.

   {% endnote %}

   ```json
   {
     "id": "/subscriptions/SUBSCRIPTION_ID/resourceGroups/RESOURCE_GROUP_NAME/providers/GitHub.Network/networkSettings/RESOURCE_NAME",
     "name": "RESOURCE_NAME",
     "type": "github.network/networksettings",
     "tags": {
       "GitHubId": "00000000000000000000000000000000000"
     }
   }
   ```

### Configuring VNET settings with {% data variables.product.company_short %}

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

### Enabling the {% data variables.product.prodname_actions %} service

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. In the left sidebar, click **Networking**.
1. Under "Services allowed," click **{% data variables.product.prodname_actions %}**
1. Click **Save changes**.

### Creating a VNET-injected runner group

1. Create a new runner group for your enterprise. For more information about how to create a runner group, see "[AUTOTITLE](/enterprise-cloud@latest/actions/using-github-hosted-runners/controlling-access-to-larger-runners#creating-a-runner-group-for-an-enterprise)."
{% data reusables.actions.workflows.runner-groups-enterprise-organization-access %}
1. While configuring your runner group, under "Private network access," use the dropdown menu to select the private network you created for VNET-injection.
1. Click **Create group** to create the group and apply the policy.

### Configuring repository access at the organization level

{% note %}

**Note:** For the VNET-injected runner to be accessible by required repositories within your enterprise-owned organizations, those repositories must have access to that VNET-inject runner group at the organization level.

{% endnote %}

1. Give repository access to the VNET-injected runner group at the organization level. For more information, see "[AUTOTITLE](/actions/using-github-hosted-runners/controlling-access-to-larger-runners#changing-which-repositories-can-access-a-runner-group)."

### Adding the {% data variables.product.company_short %}-hosted runner to the runner group

{% note %}

**Note:** When adding your {% data variables.product.company_short %}-hosted runner runner to a runner group, select the VNET-injected runner group you created in the previous procedures. For more information about runner groups, see "[AUTOTITLE](/enterprise-cloud@latest/actions/using-github-hosted-runners/managing-larger-runners#adding-a-larger-runner-to-an-enterprise)."

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
{% data reusables.actions.add-hosted-runner %}
{% data reusables.actions.org-access-to-github-hosted-runners %}

{% endif %}
