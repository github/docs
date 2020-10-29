{% if enterpriseServerVersions contains currentVersion %}
O seu administrador do site deve habilitar
{% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_short %}{% else %}alertas de segurança{% endif %} para dependências vulneráveis para {% data variables.product.product_location_enterprise %} antes de você poder usar este recurso. Para obter mais informações, consulte "[Habilitar alertas para dependências vulneráveis em {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)".
{% endif %}
