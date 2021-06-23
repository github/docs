{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
{% warning %}

**非推奨の注意:** {% data variables.product.prodname_dotcom %}は、クエリパラメータを使ったAPIの認証を廃止します。 APIの認証は[HTTPの基本認証](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens)で行わなければなりません。{% if currentVersion == "free-pro-team@latest" %}APIの認証にクエリパラメータを使用することは、2021年5月5日以降できなくなります。 {% endif %}予定された一時停止を含む詳しい情報については[ブログポスト](https://developer.github.com/changes/2020-02-10-deprecating-auth-through-query-param/)を参照してください。

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}利用可能な間にクエリパラメータを使ってAPIの認証を行うことは、セキュリティ上の懸念からサポートされなくなりました。 その代わりに、インテグレータはアクセストークン、`client_id`もしくは`client_secret`をヘッダに移すことをおすすめします。 {% data variables.product.prodname_dotcom %}は、クエリパラメータによる認証の削除を、事前に通知します。 {% endif %}

{% endwarning %}
{% endif %}
