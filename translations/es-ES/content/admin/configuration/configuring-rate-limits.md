---
title: Configurar límites de tasa
intro: 'Puedes configurar límites de tasa para {% data variables.product.prodname_ghe_server %} usando la {% data variables.enterprise.management_console %}.'
redirect_from:
  - /enterprise/admin/installation/configuring-rate-limits
  - /enterprise/admin/configuration/configuring-rate-limits
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### Habilitar límites de tasa para {% data variables.product.prodname_enterprise_api %}

Habilitar límites de tasa en {% data variables.product.prodname_enterprise_api %} puede evitar el uso excesivo de recursos por parte de usuarios individuales o sin autenticación. Para obtener más información, consulta la sección "[Limites de tasa](/enterprise/{{ page.version }}/v3/#rate-limiting)."

{% if currentVersion ver_gt "enterprise-server@2.21" %}
Puedes eximir a una lista de usuarios para que no tomen los límites de tasa de la API si utilizas la utilidad `ghe-config` en el shell administrativo. Para obtener más información, consulta la sección "[Utilidades de la línea de comandos](/enterprise/admin/configuration/command-line-utilities#ghe-config)".
{% endif %}

{% note %}

**Nota:** La {% data variables.enterprise.management_console %} detalla el período de tiempo (por minuto o por hora) de cada límite de tasa.

{% endnote %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
2. En "Limitación de tasa", selecciona **Enable API Rate Limiting** (Habilitar la limitación de tasa de API). ![Casilla para habilitar la limitación de tasa de API](/assets/images/enterprise/management-console/api-rate-limits-checkbox.png)
3. Escribe los límites para las solicitudes autenticadas y no autenticadas para cada API o acepta los límites predeterminados que aparecen completados.
{% data reusables.enterprise_management_console.save-settings %}

### Habilitar límites de tasa de abuso

Establecer límites de tasa de abuso protege el nivel general de servicio en {% data variables.product.product_location %}.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
2. En "Limitación de tasa", selecciona **Enable Abuse Rate Limiting** (Habilitar limitación de tasa de abuso). ![Casilla para habilitar la limitación de tasa de abuso](/assets/images/enterprise/management-console/abuse-rate-limits-checkbox.png)
3. Escribe límites para las solicitudes totales, límite de CPU y límite de CPU para búsquedas, o acepta los límites predeterminados que aparecen completados.
{% data reusables.enterprise_management_console.save-settings %}

### Habilitar límites de tasa de Git

Puedes aplicar límites de tasa de Git por red de repositorios o por Id. de usuario. Los límites de tasa de Git se expresan en operaciones simultáneas por minuto y se adaptan en función de la carga de CPU actual.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
2. En "Limitación de tasa", selecciona **Enable Git Rate Limiting** (Habilitar limitación de tasa de Git). ![Casilla para habilitar la limitación de tasa de Git](/assets/images/enterprise/management-console/git-rate-limits-checkbox.png)
3. Escribe los límites para cada red de repositorios o ID de usuario. ![Campos para la red de repositorios y límites de ID de usuario](/assets/images/enterprise/management-console/example-git-rate-limits.png)
{% data reusables.enterprise_management_console.save-settings %}
