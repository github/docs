{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
ユーザからサーバーへのアクセストークンをさらにセキュアにするために、8時間後に期限切れとなるアクセストークンと、新しいアクセストークンと交換できるリフレッシュトークンを使用できます。 詳しい情報については「[ユーザからサーバーへのアクセストークンのリフレッシュ](/apps/building-github-apps/refreshing-user-to-server-access-tokens/)」を参照してください。
{% endif %}
