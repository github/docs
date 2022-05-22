webhookの作成、更新、削除、pingには、リポジトリ、Organization、アプリケーションのwebhook REST APIが使用できます。 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}webhookの設定の変更にもREST APIが使用できます。 たとえば、ペイロードURL、コンテントタイプ、SSLの検証、シークレットを変更できます。 {% endif %}詳しい情報については以下を参照してください。
- [リポジトリwebhook REST API](/rest/reference/repos#webhooks)
- [Organization web hook REST API](/rest/reference/orgs#webhooks){% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
- [GitHub App webhook REST API](/rest/reference/apps#webhooks){% endif %}
