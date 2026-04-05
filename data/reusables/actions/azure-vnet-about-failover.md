> [!NOTE]
> VNET failover is in {% data variables.release-phases.public_preview %} and subject to change.

You can configure a failover network for your network configuration. A failover network is a secondary Azure Virtual Network subnet, which can be in a different Azure region from your primary subnet. If your primary subnet becomes unavailable due to a regional outage or other disruption, you can enable the failover network to route runner traffic through the secondary subnet, maintaining continuity for your {% data variables.product.prodname_actions %} workflows.

Key points about VNET failover:

* The failover subnet can reside in a different Azure region than the primary subnet.
* Switching between primary and failover subnets is a manual process. You enable or disable the failover network at your discretion.
* Both the primary and failover subnets must be configured with the required Azure resources (VNET/subnet, network settings, etc.) before you can use failover.
* The failover subnet must be in a [supported region](/admin/configuring-settings/configuring-private-networking-for-hosted-compute-products/about-azure-private-networking-for-github-hosted-runners-in-your-enterprise#about-supported-regions).
