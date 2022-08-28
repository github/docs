{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}

{% note %}

**Observação:** O administrador do site deve habilitar {% data variables.product.prodname_secret_scanning %} para {% data variables.product.product_location %} antes de usar este recurso. Para obter mais informações, consulte "[Configurar o {% data variables.product.prodname_secret_scanning %} para seu aplicativo ](/enterprise/admin/configuration/configuring-secret-scanning-for-your-appliance)".

{% endnote %}

{% endif %}
