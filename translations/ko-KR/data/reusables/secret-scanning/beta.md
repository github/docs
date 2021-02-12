{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
{% note %}

**Note:** {% data variables.product.prodname_secret_scanning_caps %} for organization-owned{% if currentVersion ver_gt "enterprise-server@2.22" %} public and{% endif %} private repositories is currently in beta and subject to change.

{% endnote %}

{% endif %}
