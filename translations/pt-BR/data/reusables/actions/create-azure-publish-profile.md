1. Configure um perfil de publicação do Azure e crie um segredo de `AZURE_WEBAPP_PUBLISH_PROFILE`.

   Gere suas credenciais de implantação do Azure usando um perfil de publicação. Para obter mais informações, consulte "[Gerar credenciais de implantação](https://docs.microsoft.com/azure/app-service/deploy-github-actions?tabs=applevel#generate-deployment-credentials)" na documentação do Azure.

   No seu repositório {% data variables.product.prodname_dotcom %}, crie um segredo denominado `AZURE_WEBAPP_PUBLISH_PROFILE` que contém o conteúdo do perfil de publicação. Para obter mais informações sobre a criação de segredos, consulte "[Segredos criptografados](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository)".
