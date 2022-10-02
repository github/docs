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
shortTitle: GitHub Enterprise API
ms.openlocfilehash: d7228182a2dbccc856cb4030a3b08d1883eb266b
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '146331636'
---
Con las API, puedes automatizar muchas tareas administrativas. Estos son algunos ejemplos:

{% ifversion ghes %}
- Realizar cambios en {% data variables.enterprise.management_console %}. Para más información, vea "[{% data variables.enterprise.management_console %}](/enterprise/user/rest/reference/enterprise-admin#management-console)".
- Configuración de la sincronización de LDAP. Para más información, vea "[LDAP](/enterprise/user/rest/reference/enterprise-admin#ldap)".{% endif %}
- Recolectar estadísticas sobre tu empresa. Para más información, vea "[Estadísticas de administración](/rest/reference/enterprise-admin#admin-stats)".
- Administra tu cuenta Enterprise. Para más información, vea "[Cuentas de empresa](/graphql/guides/managing-enterprise-accounts)".

Para obtener la documentación completa de {% data variables.product.prodname_enterprise_api %}, vea [API REST de {% data variables.product.prodname_dotcom %}](/rest) y [GraphQL API de {% data variables.product.prodname_dotcom%}](/graphql). 
