---
title: Acerca de la API de servidor de GitHub Enterprise
intro: '{% data variables.product.prodname_ghe_server %} admite la misma poderosa API disponible en {% data variables.product.prodname_dotcom_the_website %} y su propio conjunto de puntos de conexión de API.'
redirect_from:
  - /enterprise/admin/articles/about-the-enterprise-api/
  - /enterprise/admin/articles/using-the-api/
  - /enterprise/admin/categories/api/
  - /enterprise/admin/installation/about-the-github-enterprise-server-api
versions:
  enterprise-server: '*'
---

Toda la documentación para la {% data variables.product.prodname_enterprise_api %} se encuentra disponible en </enterprise/{{>. Con la API, puedes automatizar muchas tareas administrativas. Algunos ejemplos incluyen los siguientes:

- Realizar cambios en {% data variables.enterprise.management_console %}. Para obtener más información, consulta la secicón "[{% data variables.enterprise.management_console %}](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#management-console)".
- Recopila estadísticas acerca de tu instancia. Para obtener más información, consulta la sección "[Estadísticas de administrador](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#admin-stats)."
- Configura la sincronización de LDAP. Para obtener más información, consulta la sección "[LDAP](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#ldap)."{% if currentVersion ver_gt "enterprise-server@2.18" %}
- Administra tu cuenta Enterprise. Para obtener más información, consulta "[Cuentas Enterprise](/v4/guides/managing-enterprise-accounts)"{% endif %}
