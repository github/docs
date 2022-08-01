1. Azure App Serviceプランの作成

   たとえば、Azure CLIを使って新しいApp Serviceのプランを作成できます。

   ```bash{:copy}
   az appservice plan create \
      --resource-group MY_RESOURCE_GROUP \
      --name MY_APP_SERVICE_PLAN \
      --is-linux
   ```

   上のコマンドで、`MY_RESOURCE_GROUP`はすでに存在するAzure Resource Groupに、`MY_APP_SERVICE_PLAN`はApp Serviceプランの新しい名前に置き換えてください。

   [Azure CLI](https://docs.microsoft.com/cli/azure/)の使いからに関する詳しい情報については、Azureのドキュメンテーションを参照してください。

   * 認証については「[Sign in with Azure CLI](https://docs.microsoft.com/cli/azure/authenticate-azure-cli)」を参照してください。
   * 新しいリソースグループを作成しなければならない場合は、「[az group](https://docs.microsoft.com/cli/azure/group?view=azure-cli-latest#az_group_create)」を参照してください。
