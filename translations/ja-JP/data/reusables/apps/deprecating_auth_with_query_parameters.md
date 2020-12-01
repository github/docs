{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
{% warning %}

**非推奨の注意:** {% data variables.product.prodname_dotcom %}は、クエリパラメータを使ったAPIの認証を廃止します。 Authenticating to the API should be done with [HTTP basic authentication](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens).{% if currentVersion == "free-pro-team@latest" %} Using query parameters to authenticate to the API will no longer work on May 5, 2021. {% endif %}予定された一時停止を含む詳しい情報については[ブログポスト](https://developer.github.com/changes/2020-02-10-deprecating-auth-through-query-param/)を参照してください。

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %} Authentication to the API using query parameters while available is no longer supported due to security concerns. その代わりに、インテグレータはアクセストークン、`client_id`もしくは`client_secret`をヘッダに移すことをおすすめします。 {% data variables.product.prodname_dotcom %}は、クエリパラメータによる認証の削除を、事前に通知します。 {% endif %}

{% endwarning %}
{% endif %}
