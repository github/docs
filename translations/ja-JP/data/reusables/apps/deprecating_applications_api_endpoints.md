{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% warning %}

**非推奨の注意:** {% data variables.product.prodname_dotcom %}は、pathパラメーターに`access_token`を含むOAuthのエンドポイントを置き換え、廃止します。 `access_token`を入力パラメータとして使うことによって、OAuthアプリケーションのためにセキュアにトークンを管理できるようにする、新しいエンドポイントが導入されます。{% if currentVersion == "free-pro-team@latest" %}OAuthアプリケーションAPIは2021年5月5日に削除されます。{% endif %}{% if currentVersion == "free-pro-team@latest" %}予定された一時停止を含む{% endif %}詳しい情報については、[ブログポスト](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/)を参照してください。

{% if currentVersion != "free-pro-team@latest" %}`access_token`をpathパラメータで利用するOAuthのエンドポイントは、現在利用可能で{% data variables.product.prodname_ghe_server %}ではまだ非推奨となっていません。 {% data variables.product.prodname_dotcom %}は、この機能のサポートの削除に先立って、非推奨化を告知し、通知を行います。{% endif %}

{% endwarning %}
{% endif %}
