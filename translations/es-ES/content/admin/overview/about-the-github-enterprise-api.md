---
title: Acerca de la API de GitHub Enterprise
intro: '{% data variables.product.product_name %} es compatible con las API de REST y de GraphQL.'
redirect_from:
  - /enterprise/admin/installation/about-the-github-enterprise-server-api
  - /enterprise/admin/articles/about-the-enterprise-api
  - /enterprise/admin/articles/using-the-api
  - /enterprise/admin/categories/api
  - /enterprise/admin/overview/about-the-github-enterprise-server-api
  - /admin/overview/about-the-github-enterprise-server-api
versions:
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
shortTitle: API de GitHub Enterprise
---

Con las API, puedes automatizar muchas tareas administrativas. Algunos ejemplos incluyen los siguientes:

{% ifversion ghes %}
- Realizar cambios en {% data variables.enterprise.management_console %}. Para obtener más información, consulta la secicón "[{% data variables.enterprise.management_console %}](/enterprise/user/rest/reference/enterprise-admin#management-console)".
- Configura la sincronización de LDAP. Para obtener más información, consulta la sección "[LDAP](/enterprise/user/rest/reference/enterprise-admin#ldap)."{% endif %}
- Recolectar estadísticas sobre tu empresa. Para obtener más información, consulta la sección "[Estadísticas administrativas](/rest/reference/enterprise-admin#admin-stats)".
- Administra tu cuenta Enterprise. Para obtener más información, consulta "[Cuentas Enterprise](/graphql/guides/managing-enterprise-accounts)"

Para conocer la documentación íntegra de la {% data variables.product.prodname_enterprise_api %}, consulta la [API de REST de {% data variables.product.prodname_dotcom %}](/rest) y la [API de GraphQL de {% data variables.product.prodname_dotcom%}](/graphql). 
