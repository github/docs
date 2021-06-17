{% if enterpriseServerVersions contains currentVersion %}
Tu administrador de sitio debe habilitar
{% if currentVersion ver_gt "enterprise-server@2.21" %}Las alertas de seguridad{% else %}del {% data variables.product.prodname_dependabot %}{% endif %} para las dependencias vulnerables para {% data variables.product.product_location %} antes de que puedas utilizar esta característica. Para obtener más información, consulta la sección "[Habilitar las alertas para las dependencias vulnerables en {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)".
{% endif %}
