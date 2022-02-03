1. 配置 Azure 发布配置文件并创建 `AZURE_WEBAPP_PUBLISH_PROFILE` 机密。

   使用发布配置文件生成 Azure 部署凭据。 更多信息请参阅 Azure 文档中的“[生成部署凭据](https://docs.microsoft.com/azure/app-service/deploy-github-actions?tabs=applevel#generate-deployment-credentials)”。

   在 {% data variables.product.prodname_dotcom %} 仓库中，创建一个名为 `AZURE_WEBAPP_PUBLISH_PROFILE` 的机密，其中包含发布配置文件的内容。 有关创建机密的更多信息，请参阅“[加密密码](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository)”。