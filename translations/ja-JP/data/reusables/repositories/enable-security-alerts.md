{% if enterpriseServerVersions contains currentVersion %}
Your site administrator must enable
{% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_short %}{% else %}security{% endif %} alerts for vulnerable dependencies for {% data variables.product.product_location_enterprise %} before you can use this feature. For more information, see "[Enabling alerts for vulnerable dependencies on {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)."
{% endif %}
