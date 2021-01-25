{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}

{% note %}

**Nota:** Tu administrador de sitio debe habilitar el {% data variables.product.prodname_secret_scanning %} para {% data variables.product.product_location %} antes de que puedas utilizar esta característica. Para obtener más información, consulta "[Configurar el {% data variables.product.prodname_secret_scanning %} en tu aplicativo](/enterprise/admin/configuration/configuring-secret-scanning-for-your-appliance)."

{% endnote %}

{% endif %}
