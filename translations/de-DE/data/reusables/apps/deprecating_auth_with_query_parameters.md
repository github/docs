{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
{% warning %}

**Deprecation Notice:** {% data variables.product.prodname_dotcom %} will discontinue authentication to the API using query parameters. Authenticating to the API should be done with [HTTP basic authentication](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens).{% if currentVersion == "free-pro-team@latest" %} Using query parameters to authenticate to the API will no longer work on May 5, 2021. {% endif %}  For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-10-deprecating-auth-through-query-param/).

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %} Authentication to the API using query parameters while available is no longer supported due to security concerns. Instead we recommend integrators move their access token, `client_id`, or `client_secret` in the header. {% data variables.product.prodname_dotcom %} will announce the removal of authentication by query parameters with advanced notice. {% endif %}

{% endwarning %}
{% endif %}
