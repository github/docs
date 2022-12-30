---
title: Sobre a API do GitHub Enterprise
intro: '{% data variables.product.product_name %} é compatível com APIs REST e do GraphQL.'
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
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '146331629'
---
Com as APIs, você pode automatizar muitas tarefas administrativas. Alguns exemplos incluem:

{% ifversion ghes %}
- Fazer alterações no {% data variables.enterprise.management_console %}. Para obter mais informações, confira "[{% data variables.enterprise.management_console %}](/enterprise/user/rest/reference/enterprise-admin#management-console)".
- Configure a sincronização LDAP. Para obter mais informações, confira "[LDAP](/enterprise/user/rest/reference/enterprise-admin#ldap)".{% endif %}
- Colete estatísticas sobre sua empresa. Para obter mais informações, confira "[Estatísticas de administrador](/rest/reference/enterprise-admin#admin-stats)".
- Gerenciar sua conta corporativa. Para obter mais informações, confira "[Contas Enterprise](/graphql/guides/managing-enterprise-accounts)".

Para ver a documentação completa da {% data variables.product.prodname_enterprise_api %}, confira [API REST do {% data variables.product.prodname_dotcom %}](/rest) e [API do GraphQL do {% data variables.product.prodname_dotcom%}](/graphql). 
