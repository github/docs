After configuring your Azure resources, you can use an Azure Virtual Network (VNET) for private networking by creating a network configuration{% ifversion ghec %} at the enterprise or organization level{% else %} at the organization level{% endif %}. Then, you can associate that network configuration to runner groups.

{% ifversion ghec %}

Please note that initial setup must be at the enterprise level when creating the network settings configured with Azure. This is why, when obtaining the `databaseId`, the steps require you to configure the enterprise slug. Organizations are only allowed to create their own network configurations once the enterprise has been established and enabled through enterprise policy for hosted compute networking. For more information about runner groups, see [AUTOTITLE](/actions/using-github-hosted-runners/about-larger-runners/controlling-access-to-larger-runners).

{% endif %}

Once the network configuration is associated with a runner group, all runners in that group will have access to the Azure VNET that has been connected to the underlying configuration.

### Prerequisites

Ensure your Azure resources have been configured _before_ adding a network configuration in {% data variables.product.company_short %}. For more information, see {% ifversion ghec %}[AUTOTITLE](/admin/configuration/configuring-private-networking-for-hosted-compute-products/configuring-private-networking-for-github-hosted-runners#configuring-your-azure-resources).{% else %}[AUTOTITLE](/organizations/managing-organization-settings/configuring-private-networking-for-github-hosted-runners-in-your-organization#configuring-your-azure-resources).{% endif %}
