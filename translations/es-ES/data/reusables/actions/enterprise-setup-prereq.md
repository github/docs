{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" %}

#### Utilizar ejecutores auto-hospedados en {% data variables.product.prodname_ghe_server %}

Cuando utilices acciones de configuración, (tales como `actions/setup-LANGUAGE`) en {% data variables.product.prodname_ghe_server %} con ejecutores auto-hospedados, tal vez necesites configurar el caché de las herramientas en los ejecutores que no tienen acceso a internet. Para obtener más información, consulta la sección "[ Configurar el caché de herramientas en ejecutores auto-hospedados sin acceso a internet](/enterprise/admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access)".

{% endif %}
