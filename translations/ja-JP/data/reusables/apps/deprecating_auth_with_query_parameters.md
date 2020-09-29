{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% warning %}

**非推奨の注意:** {% data variables.product.prodname_dotcom %}は、クエリパラメータを使ったAPIの認証を廃止します。 APIの認証は、[HTTPの基本認証](/v3/auth/#via-oauth-and-personal-access-tokens)で行うべきです。{% if currentVersion == "free-pro-team@latest" %}APIの認証をクエリパラメータで行うことは、2021年5月5日以降できなくなります。 {% endif %}予定された一時停止を含む詳しい情報については[ブログポスト](https://developer.github.com/changes/2020-02-10-deprecating-auth-through-query-param/)を参照してください。

{% if currentVersion != "free-pro-team@latest" %}クエリパラメータを使ったAPIの認証は、利用はできるものの、セキュリティ上の懸念からサポートされなくなりました。 その代わりに、インテグレータはアクセストークン、`client_id`もしくは`client_secret`をヘッダに移すことをおすすめします。 {% data variables.product.prodname_dotcom %}は、クエリパラメータによる認証の削除を、事前に通知します。 {% endif %}

{% endwarning %}
{% endif %}
