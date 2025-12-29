Because the {% data variables.product.company_short %}-hosted runner's NIC is deployed into your Azure VNET, networking policies applied to the VNET also apply to the runner.

For example, if your VNET is configured with an Azure ExpressRoute to provide access to on-premises resources (e.g. Artifactory) or connected to a VPN tunnel to provide access to other cloud-based resources, those access policies also apply to your runners. Additionally, any outbound rules applied to your VNET's network security group (NSG) also apply, giving you the ability to control outbound access for your runners.

If you have enabled any network logs monitoring for your VNET, you can also monitor network traffic for your runners.

{% data variables.product.company_short %}-hosted runners use whatever outbound control your network is using. If your network relies on Azure's default outbound access, the IPs are not predictable and cannot be added to the {% data variables.product.company_short %} IP allow list. For recommendations on using a stable outbound IP, see [Default outbound access](https://learn.microsoft.com/en-us/azure/virtual-network/ip-services/default-outbound-access) in the Azure documentation.
