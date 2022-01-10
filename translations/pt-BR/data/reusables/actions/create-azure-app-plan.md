1. Crie um plano do Azure App Service.

   Por exemplo, você pode usar o CLI do Azure para criar um novo plano de App Service:

   ```bash{:copy}
   az appservice plan create \
      --resource-group MY_RESOURCE_GROUP \
      --name MY_APP_SERVICE_PLAN \
      --is-linux
   ```

   No comando acima, substitua `MY_RESOURCE_GROUP` pelo seu Grupo de Recursos do Azure pré-existente, e `MY_APP_SERVICE_PLAN` por um novo nome para o plano do App Service.

   Para obter mais informações, consulte a documentação do Azure usando o [CLI do Azure](https://docs.microsoft.com/cli/azure/):

   * Para autenticação, consulte "[Efetuar login com o CLI do Azure](https://docs.microsoft.com/cli/azure/authenticate-azure-cli)."
   * Se você precisar criar um novo grupo de recursos, consulte "[grupo az](https://docs.microsoft.com/cli/azure/group?view=azure-cli-latest#az_group_create)".