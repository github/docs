1. Configure an Azure publish profile and create an `AZURE_WEBAPP_PUBLISH_PROFILE` secret.

   Generate your Azure deployment credentials using a publish profile. For more information, see "[Generate deployment credentials](https://docs.microsoft.com/azure/app-service/deploy-github-actions?tabs=applevel#generate-deployment-credentials)" in the Azure documentation.

   In your {% data variables.product.prodname_dotcom %} repository, create a secret named `AZURE_WEBAPP_PUBLISH_PROFILE` that contains the contents of the publish profile. For more information on creating secrets, see "[AUTOTITLE](/actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository)."
