1. Azure公開プロフィールを設定して、`AZURE_WEBAPP_PUBLISH_PROFILE`シークレットを作成してください。

   公開されたプロフィールを使って、Azureのデプロイ資格情報を生成してください。 詳しい情報については、Azureのドキュメンテーションの「[Generate deployment credentials](https://docs.microsoft.com/azure/app-service/deploy-github-actions?tabs=applevel#generate-deployment-credentials)」を参照してください。

   {% data variables.product.prodname_dotcom %}リポジトリで、公開されたプロフィールの内容を含む`AZURE_WEBAPP_PUBLISH_PROFILE`という名前のシークレットを生成してください。 シークレットの作成に関する詳しい情報については「[暗号化されたシークレット](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository)」を参照してください。
