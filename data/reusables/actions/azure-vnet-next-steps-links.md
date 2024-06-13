To use {% data variables.product.company_short %}-hosted runners with an Azure VNET, you will need to configure your Azure resources and then create a networking configuration in {% data variables.product.company_short %}.

{% ifversion fpt %}

For procedures to configure Azure private networking at the organization level, see "[AUTOTITLE](/organizations/managing-organization-settings/configuring-private-networking-for-github-hosted-runners-in-your-organization)."

{% endif %}

{% ifversion ghec %}

{% data reusables.actions.azure-vnet-enterprise-policy %}

For procedures to configure Azure private networking at the enterprise level, see "[AUTOTITLE](/admin/configuration/configuring-private-networking-for-hosted-compute-products/configuring-private-networking-for-github-hosted-runners-in-your-enterprise)."

For procedures to configure Azure private networking at the organization level, see "[AUTOTITLE](/organizations/managing-organization-settings/configuring-private-networking-for-github-hosted-runners-in-your-organization)."

{% endif %}
