The {% data variables.product.prodname_actions %} service supports a subset of all the regions that Azure provides. To facilitate communication between the {% data variables.product.prodname_actions %} service and your subnet, your subnet must be in one of the supported regions.

> [!NOTE] If you use {% data variables.enterprise.data_residency_short %} on {% data variables.enterprise.data_residency_site %}, the supported regions are different. See [AUTOTITLE](/admin/data-residency/network-details-for-ghecom#supported-regions-for-azure-private-networking).

The following regions are supported on {% data variables.product.prodname_dotcom_the_website %}.

<ul style="-webkit-column-count: 2; -moz-column-count: 2; column-count: 2;">
<li><code>AustraliaEast</code></li>
<li><code>BrazilSouth</code></li>
<li><code>CanadaCentral</code></li>
<li><code>CentralUs</code></li>
<li><code>EastAsia</code></li>
<li><code>EastUs</code></li>
<li><code>EastUs2</code></li>
<li><code>FranceCentral</code></li>
<li><code>GermanyWestCentral</code></li>
<li><code>JapanEast</code></li>
<li><code>KoreaCentral</code></li>
<li><code>NorthCentralUs</code></li>
<li><code>NorthEurope</code></li>
<li><code>NorwayEast</code></li>
<li><code>SouthCentralUs</code></li>
<li><code>SoutheastAsia</code></li>
<li><code>SouthIndia</code></li>
<li><code>SwedenCentral</code></li>
<li><code>SwitzerlandNorth</code></li>
<li><code>UkSouth</code></li>
<li><code>WestUs</code></li>
<li><code>WestUs2</code></li>
<li><code>WestUs3</code></li>
</ul>

Azure private networking supports GPU runners in the following regions.

* `EastUs`
* `NorthCentralUs`
* `SouthCentralUs`
* `WestUs`

Azure private networking supports arm64 runners in the following regions.

* `CentralUs`
* `EastUs`
* `EastUs2`
* `NorthCentralUs`
* `SouthCentralUs`
* `WestUs`
* `WestUs2`
* `WestUs3`

If your desired region is not supported, please submit a request for new region availability in [this GitHub form](https://resources.github.com/private-networking-for-github-hosted-runners-with-azure-virtual-networks/). You may also use global virtual network peering to connect virtual networks across Azure regions. For more information, see [Virtual network peering](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview) in the Azure documentation.
