You can connect multiple VNET subnets to {% data variables.location.product_location %} and manage private resource access for your runners via runner groups. For more information about runner groups, see "[AUTOTITLE](/actions/using-github-hosted-runners/about-larger-runners/controlling-access-to-larger-runners)."

Using {% data variables.product.company_short %}-hosted runners within Azure VNET allows you to perform the following actions.
* Privately connect a runner to resources inside an Azure VNET without opening internet ports, including on-premises resources accessible from the Azure VNET.
* Restrict what {% data variables.product.company_short %}-hosted runners can access or connect to with full control over outbound network policies.
* Monitor network logs for {% data variables.product.company_short %}-hosted runners and view all connectivity to and from a runner.
