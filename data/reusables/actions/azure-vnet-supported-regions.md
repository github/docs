The {% data variables.product.prodname_actions %} service supports a subset of all the regions that Azure provides. To facilitate communication between the {% data variables.product.prodname_actions %} service and your subnet, your subnet must be in one of the following supported regions.

<ul style="-webkit-column-count: 2; -moz-column-count: 2; column-count: 2;">
<li><code>EastUs</code></li>
<li><code>EastUs2</code></li>
<li><code>WestUs2</code></li>
<li><code>WestUs3</code></li>
<li><code>CentralUs</code></li>
<li><code>NorthCentralUs</code></li>
<li><code>SouthCentralUs</code></li>
<li><code>AustraliaEast</code></li>
<li><code>JapanEast</code></li>
<li><code>FranceCentral</code></li>
<li><code>GermanyWestCentral</code></li>
<li><code>NorthEurope</code></li>
<li><code>NorwayEast</code></li>
<li><code>SwedenCentral</code></li>
<li><code>SwitzerlandNorth</code></li>
<li><code>UkSouth</code></li>
<li><code>SoutheastAsia</code></li>
</ul>

Azure private networking supports GPU runners in the following regions.

* `EastUs`
* `WestUs`
* `NorthCentralUs`
* `SouthCentralUs`

Azure private networking supports arm64 runners in the following regions.

* `EastUs`
* `EastUs2`
* `WestUs2`
* `NorthCentralUs`
* `SouthCentralUs`

If your desired region is not supported, please submit a request for new region availability in [this GitHub form](https://resources.github.com/private-networking-for-github-hosted-runners-with-azure-virtual-networks/). You may also use global virtual network peering to connect virtual networks across Azure regions. For more information, see [Virtual network peering](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview) in the Azure documentation.
