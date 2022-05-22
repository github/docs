{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% warning %}

**Deprecation Notice:** {% data variables.product.prodname_dotcom %} will discontinue the OAuth Authorizations API, which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow).{% if currentVersion == "free-pro-team@latest" %} The OAuth Authorizations API will be removed on November, 13, 2020.{% endif %} For more information,{% if currentVersion == "free-pro-team@latest" %} including scheduled brownouts,{% endif %} see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).

{% if currentVersion != "free-pro-team@latest" %} The OAuth Authorizations API is currently available and not yet deprecated in {% data variables.product.prodname_ghe_server %}. {% data variables.product.prodname_dotcom %} will announce the deprecation and provide advanced notice before removing support for this feature.{% endif %}

{% endwarning %}
{% endif %}
