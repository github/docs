In order to successfully deploy a NIC and join a NIC to a subnet, the {% data variables.product.prodname_actions %} service maintains the following Azure role-based access control (RBAC) permissions in your Azure subscription. For more information about fine-grained access management of Azure resources, see [Azure RBAC](https://learn.microsoft.com/en-us/azure/role-based-access-control/) in the Azure documentation.

* `GitHub.Network/operations/read`
* `GitHub.Network/networkSettings/read`
* `GitHub.Network/networkSettings/write`
* `GitHub.Network/networkSettings/delete`
* `Microsoft.Network/locations/operations/read`
* `Microsoft.Network/locations/operationResults/read`
* `Microsoft.Network/locations/usages/read`
* `Microsoft.Network/networkInterfaces/read`
* `Microsoft.Network/networkInterfaces/write`
* `Microsoft.Network/networkInterfaces/delete`
* `Microsoft.Network/networkInterfaces/join/action`
* `Microsoft.Network/networkSecurityGroups/join/action`
* `Microsoft.Network/networkSecurityGroups/read`
* `Microsoft.Network/publicIpAddresses/read`
* `Microsoft.Network/publicIpAddresses/write`
* `Microsoft.Network/publicIPAddresses/join/action`
* `Microsoft.Network/routeTables/join/action`
* `Microsoft.Network/virtualNetworks/read`
* `Microsoft.Network/virtualNetworks/subnets/join/action`
* `Microsoft.Network/virtualNetworks/subnets/read`
* `Microsoft.Network/virtualNetworks/subnets/write`
* `Microsoft.Network/virtualNetworks/subnets/serviceAssociationLinks/delete`
* `Microsoft.Network/virtualNetworks/subnets/serviceAssociationLinks/read`
* `Microsoft.Network/virtualNetworks/subnets/serviceAssociationLinks/write`
* `Microsoft.Network/virtualNetworks/subnets/serviceAssociationLinks/details/read`
* `Microsoft.Network/virtualNetworks/subnets/serviceAssociationLinks/validate/action`
* `Microsoft.Resources/subscriptions/resourceGroups/read`
* `Microsoft.Resources/subscriptions/resourcegroups/deployments/read`
* `Microsoft.Resources/subscriptions/resourcegroups/deployments/write`
* `Microsoft.Resources/subscriptions/resourcegroups/deployments/operations/read`
* `Microsoft.Resources/deployments/read`
* `Microsoft.Resources/deployments/write`
* `Microsoft.Resources/deployments/operationStatuses/read`

The following permissions will be present on two enterprise applications in your Azure tenant. You will see the enterprise applications your Azure tenant after configuring Azure private networking.

* `GitHub CPS Network Service` id: `85c49807-809d-4249-86e7-192762525474`
* `GitHub Actions API` id: `4435c199-c3da-46b9-a61d-76de3f2c9f82`
