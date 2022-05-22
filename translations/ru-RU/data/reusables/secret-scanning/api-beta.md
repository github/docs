{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@3.0" %}

{% note %}

**Note:** The {% data variables.product.prodname_secret_scanning %} API is currently in beta and subject to change.

{% endnote %}

{% endif %}