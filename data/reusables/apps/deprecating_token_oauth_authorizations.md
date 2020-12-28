{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.20" %}
{% warning %}

**Deprecation Notice:** The `token` attribute is deprecated in some OAuth Authorizations API responses:
* List your authorizations
* Get a single authorization
* Get-or-create an authorization for a specific app - `token` is still returned for "create" 
* Get-or-create an authorization for a specific app and fingerprint - `token` is still returned for "create" 
* Update an existing authorization

To reduce the impact of removing the `token` value, the OAuth Authorizations API now includes a new request attribute
(`fingerprint`), three new response attributes (`token_last_eight`, `hashed_token`, and `fingerprint`), and the [Get or create an authorization for a specific app and fingerprint](/rest/reference/oauth-authorizations#get-or-create-an-authorization-for-a-specific-app-and-fingerprint) endpoint.

This functionality became the default for all requests on April 20, 2015. Please see [the blog post](https://developer.github.com/changes/2015-04-20-authorizations-api-response-changes-are-now-in-effect/) for full details.

{% endwarning %}
{% endif %}
