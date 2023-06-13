1. Create an Azure App Service plan.

   For example, you can use the Azure CLI to create a new App Service plan:

   ```bash copy
   az appservice plan create \
      --resource-group MY_RESOURCE_GROUP \
      --name MY_APP_SERVICE_PLAN \
      --is-linux
   ```

   In the command above, replace `MY_RESOURCE_GROUP` with your pre-existing Azure Resource Group, and `MY_APP_SERVICE_PLAN` with a new name for the App Service plan.

   See the Azure documentation for more information on using the [Azure CLI](https://docs.microsoft.com/cli/azure/):

   * For authentication, see "[Sign in with Azure CLI](https://docs.microsoft.com/cli/azure/authenticate-azure-cli)."
   * If you need to create a new resource group, see "[az group](https://docs.microsoft.com/cli/azure/group?view=azure-cli-latest#az_group_create)."
