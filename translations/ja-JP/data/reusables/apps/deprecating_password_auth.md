{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% warning %}

**非推奨の注意:** {% data variables.product.prodname_dotcom %}は、APIのパスワード認証を廃止します。  You must now authenticate to the {% data variables.product.prodname_dotcom %} API with an API token, such as an OAuth access token, GitHub App installation access token, or personal access token, depending on what you need to do with the token.{% if currentVersion == "free-pro-team@latest" %} Password authentication to the API will be removed on November 13, 2020.{% endif %} For more information,{% if currentVersion == "free-pro-team@latest" %} including scheduled brownouts,{% endif %} see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-password-auth/).

{% if currentVersion != "free-pro-team@latest" %} Authenticating to the API using a password is currently available and not yet deprecated in {% data variables.product.prodname_ghe_server %}. {% data variables.product.prodname_dotcom %}は、この機能のサポートの削除に先立って、非推奨化を告知し、通知を行います。{% endif %}

{% endwarning %}
{% endif %}
