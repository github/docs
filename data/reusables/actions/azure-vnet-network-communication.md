To facilitate communication between {% data variables.product.company_short %} networks and your VNET, a {% data variables.product.company_short %}-hosted runner's network interface card (NIC) deploys into your Azure VNET.

Because the NIC lives within your VNET, {% data variables.product.company_short %} cannot block inbound connections. By default, Azure virtual machines will accept inbound connections from the same VNET. For more information, see [`AllowVNetInBound`](https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview#allowvnetinbound) on Microsoft Learn. It is recommended to explicitly block all inbound connections to the runners. {% data variables.product.company_short %} will never require inbound connections to these machines.

A NIC enables an Azure virtual machine (VM) to communicate with internet, Azure, and on-premises resources. This way, all communication is kept private within the network boundaries, and networking policies applied to the VNET also apply to the runner. For more information on how to manage a network interface, see [Change network interface settings](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-network-interface?tabs=azure-portal#change-network-interface-settings) on Microsoft Learn.

>[!NOTE] {% data reusables.actions.azure-vnet-over-provisioning-resources %}

![Diagram of the network communication architecture between GitHub networks and your private networks. The diagram describes each step in connecting GitHub-hosted runners to an Azure VNET. Each step is numbered and the numbers correspond to the numbered descriptions of the step listed below the diagram.](/assets/images/help/actions/actions-vnet-injected-larger-runners-architecture.png)

1. A {% data variables.product.prodname_actions %} workflow is triggered.
1. The {% data variables.product.prodname_actions %} service creates a runner.
1. The runner service deploys the {% data variables.product.company_short %}-hosted runner's network interface card (NIC) into your Azure VNET.
1. The runner agent picks up the workflow job. The {% data variables.product.prodname_actions %} service queues the job.
1. The runner sends logs back to the {% data variables.product.prodname_actions %} service.
1. The NIC accesses on-premise resources.
