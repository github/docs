1. 创建 Azure App Service 计划。

   例如，可以使用 Azure CLI 创建新的应用服务计划：

   ```bash{:copy}
   az appservice plan create \
      --resource-group MY_RESOURCE_GROUP \
      --name MY_APP_SERVICE_PLAN \
      --is-linux
   ```

   在上述命令中，将 `MY_ResourcesURCE_GROUP` 替换为您原有的 Azure 资源组，`MY_APP_SERVICE_PLAN` 替换为应用服务计划的新名称。

   请查看 Azure 文档以了解更多有关使用 [Azure CLI](https://docs.microsoft.com/cli/azure/) 的信息：

   * 有关身份验证，请参阅“[使用 Azure CLI 登录](https://docs.microsoft.com/cli/azure/authenticate-azure-cli)”。
   * 如果需要创建新的资源组，请参阅“[az 组](https://docs.microsoft.com/cli/azure/group?view=azure-cli-latest#az_group_create)”。
