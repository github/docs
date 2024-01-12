---
title: About using GitHub-hosted runners in your Azure Virtual Network
shortTitle: About using Azure virtual network
intro: 'You can create {% data variables.product.company_short %}-hosted runners in your Azure Virtual Network(s) (VNET).'
versions:
  feature: actions-private-networking-azure-vnet
type: overview
topics:
  - Actions
  - Developer
redirect_from:
  - /actions/using-github-hosted-runners/connecting-to-a-private-network/about-using-github-hosted-runners-in-your-azure-virtual-network
---

## About using {% data variables.product.company_short %}-hosted runners in your Azure Virtual Network (VNET)

{% data reusables.actions.private-networking-actions-azure-vnet-beta-note %}

{% data reusables.actions.azure-vnet-injected-runners-intro %}

You can connect multiple VNET-subnet pairs to {% data variables.location.product_location %} and manage private resource access for your runners via runner groups. For more information about runner groups, see "[AUTOTITLE](/actions/using-github-hosted-runners/about-larger-runners/controlling-access-to-larger-runners)."

Using {% data variables.product.company_short %}-hosted runners within Azure VNET allows you to perform the following actions.
- Privately connect a runner to resources inside an Azure VNET without opening internet ports, including on-premises resources accessible from the Azure VNET.
- Restrict what {% data variables.product.company_short %}-hosted runners can access or connect to with full control over outbound network policies.
- Monitor network logs for {% data variables.product.company_short %}-hosted runners and view all connectivity to and from a runner.

## About network communication

To facilitate communication between {% data variables.product.company_short %} networks and your VNET, a {% data variables.product.company_short %}-hosted runner's network interface card (NIC) deploys into your Azure VNET.

Because the NIC lives within your VNET, {% data variables.product.company_short %} cannot block inbound connections. By default, Azure virtual machines will accept inbound connections from the same VNET. For more information, see [`AllowVNetInBound`](https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview#allowvnetinbound) in the Azure documentation. It is recommended to explicitly block all inbound connections to the runners. {% data variables.product.company_short %} will never require inbound connections to these machines.

A NIC enables an Azure virtual machine (VM) to communicate with internet, Azure, and on-premises resources. This way, all communication is kept private within the network boundaries, and networking policies applied to the VNET also apply to the runner. For more information on how to manage a network interface, see [Change network interface settings](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-network-interface?tabs=azure-portal#change-network-interface-settings) in the Azure documentation.

![Diagram of the network communication architecture between GitHub networks and your private networks. The diagram describes each step in connecting GitHub-hosted runners to an Azure VNET. Each step is numbered and the numbers correspond to the numbered descriptions of the step listed below the diagram.](/assets/images/help/actions/actions-vnet-injected-larger-runners-architecture.png)

1. A {% data variables.product.prodname_actions %} workflow is triggered.
1. The {% data variables.product.prodname_actions %} service creates a runner.
1. The runner service deploys the {% data variables.product.company_short %}-hosted runner's network interface card (NIC) into your Azure VNET.
1. The runner agent picks up the workflow job. The {% data variables.product.prodname_actions %} service queues the job.
1. The runner sends logs back to the {% data variables.product.prodname_actions %} service.
1. The NIC accesses on-premise resources.

## Using your VNET's network policies

Because the {% data variables.product.company_short %}-hosted runner's NIC is deployed into your Azure VNET, networking policies applied to the VNET also apply to the runner.

For example, if your VNET is configured with an Azure ExpressRoute to provide access to on-premises resources (e.g. Artifactory) or connected to a VPN tunnel to provide access to other cloud-based resources, those access policies also apply to your runners. Additionally, any outbound rules applied to your VNET's network security group (NSG) also apply, giving you the ability to control outbound access for your runners.

If you have enabled any network logs monitoring for your VNET, you can also monitor network traffic for your runners.

## Using {% data variables.product.company_short %}-hosted runners with an Azure VNET

{% data reusables.actions.actions-azure-vnet-resources-config-link %} For more information, see "[AUTOTITLE](/admin/configuration/configuring-private-networking-for-hosted-compute-products/configuring-private-networking-for-github-hosted-runners)."
