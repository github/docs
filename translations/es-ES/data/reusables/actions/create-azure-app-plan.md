1. Crear un plan de Azure App Service.

   Por ejemplo, puedes utilizar el CLI de Azure para crear un plan de App Service nuevo:

   ```bash{:copy}
   az appservice plan create \
      --resource-group MY_RESOURCE_GROUP \
      --name MY_APP_SERVICE_PLAN \
      --is-linux
   ```

   En el comando anterior, reemplaza `MY_RESOURCE_GROUP` con tu Grupo de Recursos de Azure preexistente y `MY_APP_SERVICE_PLAN` con un nombre nuevo para el plan de App Service.

   Consulta la documentación de Azure para obtener más información sobre cómo utilizar el [CLI de Azure](https://docs.microsoft.com/cli/azure/):

   * Para la autenticación, consulta "[Iniciar sesión con Azure CLI](https://docs.microsoft.com/cli/azure/authenticate-azure-cli)."
   * Si necesitas crear un grupo de recursos nuevo, consulta lasección "[grupo az](https://docs.microsoft.com/cli/azure/group?view=azure-cli-latest#az_group_create)".