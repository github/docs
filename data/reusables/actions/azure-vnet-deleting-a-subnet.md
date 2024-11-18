When you create the network settings resource, a service association link is applied to the subnet that you provide. This link prevents accidental deletion of the subnet while in use by the {% data variables.product.prodname_actions %} service.

To delete the subnet, this service association link needs to be removed first. The service association link is safely removed automatically once the network settings resource is deleted.

To delete the network settings resource, the network configuration that uses it needs to be deleted first.

{% ifversion ghec %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{%- else %}
{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{%- endif %}
1. In the left sidebar, click **Hosted compute networking**.
1. Open the network configuration that is using the subnet that you want to delete.
1. Review the list of runner groups using the network configuration.
1. In the top-right corner, click the "{% octicon "kebab-horizontal" aria-label="Menu" %}" button. Then click **Delete configuration**.
1. To delete the network settings resource and remove the service association link, use your own inputs with following commands with the Azure CLI. For more information, see the [Azure Command-Line Interface (CLI)](https://learn.microsoft.com/en-us/cli/azure/) documentation.

   ```bash copy
   az account set --subscription $SUBSCRIPTION_ID
   az resource delete -g $RESOURCE_GROUP_NAME --name $NETWORK_SETTINGS_RESOURCE_NAME --resource-type 'GitHub.Network/networkSettings' --api-version '2023-11-01-preview'
   ```

1. Delete the subnet in Azure. For more information, see [Delete a subnet](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-manage-subnet?tabs=azure-portal#delete-a-subnet) on Microsoft Learn.
