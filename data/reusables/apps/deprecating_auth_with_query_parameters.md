{% warning %}

**{% data variables.release-phases.retired_caps %} Notice:** {% data variables.product.prodname_dotcom %} no longer to the API using query parameters. Authenticating to the API should be done with [HTTP basic authentication](/rest/overview/authenticating-to-the-rest-api#using-basic-authentication).For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-10-deprecating-auth-through-query-param/).

{% ifversion ghes %} Authentication to the API using query parameters while available is no longer supported due to security concerns. Instead we recommend integrators move their access token, `client_id`, or `client_secret` in the header. {% data variables.product.prodname_dotcom %} will announce the removal of authentication by query parameters with advanced notice. {% endif %}

{% endwarning %}
