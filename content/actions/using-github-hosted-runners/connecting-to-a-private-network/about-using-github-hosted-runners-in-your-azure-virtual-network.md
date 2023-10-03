---
title: About using GitHub-hosted runners in your Azure Virtual Network
shortTitle: About using a VNET
intro: 'You can create {% data variables.product.company_short %}-hosted runners in your Azure Virtual Network(s) (VNET).'
versions:
  feature: actions-private-networking-azure-vnet
type: overview
topics:
  - Actions
  - Developer
---

## About using {% data variables.product.company_short %}-hosted runners in your Azure Virtual Network (VNET)

{% note %}

**Notes:**

- {% data reusables.actions.github-hosted-larger-runners-azure-vnet-beta %}
- Only larger runners are supported with Azure VNET. For more information about larger runners, see "[AUTOTITLE](/enterprise-cloud@latest/actions/using-github-hosted-runners/about-larger-runners)."

{% endnote %}

{% data reusables.actions.azure-vnet-injected-runners-intro %}

Using {% data variables.product.company_short %}-hosted runners within Azure VNET allows you to perform the following actions.
- Privately connect a runner to resources inside an Azure VNET without opening internet ports, including on-premises resources accessible from the Azure VNET.
- Restrict what {% data variables.product.company_short %}-hosted runners can access or connect to with full control over outbound network policies.
- Monitor network logs for {% data variables.product.company_short %}-hosted runners and view all connectivity to and from a runner.

## About network communication

To facilitate communication between {% data variables.product.company_short %} networks and your VNET, {% data variables.product.company_short %}-hosted runner's network interface card (NIC) deploys into your Azure VNET. This way, all communication is kept private within the network boundaries, and networking policies applied to the VNET also apply to the runner.

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

To use {% data variables.product.company_short %}-hosted runners with Azure VNET, you must configure Azure and configure your {% data variables.product.company_short %} settings to use {% data variables.product.company_short %}-hosted runners with a VNET.

For more information about configuring Azure, see "[AUTOTITLE](/actions/using-github-hosted-runners/connecting-to-a-private-network/configuring-an-azure-virtual-network-for-your-enterprise)."

For more information about configuring your {% data variables.product.company_short %} settings to use {% data variables.product.company_short %}-hosted runners with a VNET, see "[AUTOTITLE](/actions/using-github-hosted-runners/connecting-to-a-private-network/configuring-your-github-settings-for-use-with-azure-virtual-network)."
