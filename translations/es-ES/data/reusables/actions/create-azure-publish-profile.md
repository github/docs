1. Configura un perfil de publicación de Azure y crea un secreto de `AZURE_WEBAPP_PUBLISH_PROFILE`.

   Genera tus credenciales de despliegue de Azure utilizando un perfil de publicación. Para obtener más información, consulta la sección "[Generar credenciales de despliegue](https://docs.microsoft.com/azure/app-service/deploy-github-actions?tabs=applevel#generate-deployment-credentials)" en la documentación de Azure.

   En tu repositorio de {% data variables.product.prodname_dotcom %}, crea un secreto que se llame `AZURE_WEBAPP_PUBLISH_PROFILE` que tenga el contenido del perfil de publicación. Para obtener más información sobre cómo crear secretos, consulta la sección "[Secretos cifrados](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository)".
