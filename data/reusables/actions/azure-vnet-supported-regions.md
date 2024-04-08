The {% data variables.product.prodname_actions %} service supports a subset of all the regions that Azure provides. To facilitate communication between the {% data variables.product.prodname_actions %} service and your subnet, your subnet must be in one of the following supported regions.

- `EastUs`
- `EastUs2`
- `WestUs2`
- `AustraliaEast`
- `CentralUs`
- `FranceCentral`
- `NorthEurope`
- `NorwayEast`
- `SoutheastAsia`
- `SwitzerlandNorth`
- `UkSouth`

Azure private networking supports GPU runners in the following regions.

- `EastUs`
- `WestUs`
- `NorthCentralUs`
- `SouthCentralUs`

You may also use global virtual network peering to connect virtual networks across Azure regions. For more information, see [Virtual network peering](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview) in the Azure documentation.
