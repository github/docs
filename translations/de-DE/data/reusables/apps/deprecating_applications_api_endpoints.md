{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% warning %}

**Deprecation Notice:** {% data variables.product.prodname_dotcom %} will replace and discontinue OAuth endpoints containing `access_token` in the path parameter. We are introducing new endpoints that allow you to securely manage tokens for OAuth Apps by using `access_token` as an input parameter.{% if currentVersion == "free-pro-team@latest" %} The OAuth Application API will be removed on May 5, 2021.{% endif %} For more information,{% if currentVersion == "free-pro-team@latest" %} including scheduled brownouts,{% endif %} see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).

{% if currentVersion != "free-pro-team@latest" %} OAuth endpoints using an `access_token` in the path parameter are currently available and not yet deprecated in {% data variables.product.prodname_ghe_server %}. {% data variables.product.prodname_dotcom %} will announce the deprecation and provide advanced notice before removing support for this feature.{% endif %}

{% endwarning %}
{% endif %}
