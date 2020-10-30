{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% warning %}

**Deprecation Notice:** {% data variables.product.prodname_dotcom %} will discontinue the OAuth Authorizations API, which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow).{% if currentVersion == "free-pro-team@latest" %} The OAuth Authorizations API will be removed on November, 13, 2020.{% endif %} For more information,{% if currentVersion == "free-pro-team@latest" %} including scheduled brownouts,{% endif %} see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).

{% if currentVersion != "free-pro-team@latest" %}OAuth Authorizations APIは現在利用可能で、{% data variables.product.prodname_ghe_server %}ではまだ非推奨となっていません｡ {% data variables.product.prodname_dotcom %}は、この機能のサポートの削除に先立って、非推奨化を告知し、通知を行います。{% endif %}

{% endwarning %}
{% endif %}
