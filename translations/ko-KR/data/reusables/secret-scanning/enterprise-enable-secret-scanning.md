{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}

{% note %}

**Note:** Your site administrator must enable {% data variables.product.prodname_secret_scanning %} for {% data variables.product.product_location %} before you can use this feature. For more information, see "[Configuring {% data variables.product.prodname_secret_scanning %} for your appliance](/enterprise/admin/configuration/configuring-secret-scanning-for-your-appliance)."

{% endnote %}

{% endif %}
