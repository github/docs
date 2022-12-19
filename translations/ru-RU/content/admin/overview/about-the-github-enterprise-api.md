---
title: Сведения об API GitHub Enterprise
intro: '{% data variables.product.product_name %} поддерживает API REST и GraphQL.'
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
ms.openlocfilehash: 707cf8ba143783a1c58725f560b793035cde2f8a
ms.sourcegitcommit: be0ccdb85c412a3bf2f328b62157835f927948d6
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/07/2022
ms.locfileid: '148012164'
---
С помощью API можно автоматизировать многие административные задачи. Некоторые примеры:

{% ifversion ghes %}
- Внесение изменений в {% data variables.enterprise.management_console %}. Дополнительные сведения см. в разделе [{% data variables.enterprise.management_console %}](/enterprise/user/rest/reference/enterprise-admin#management-console).
- Настройка синхронизации LDAP. Дополнительные сведения см. в разделе [LDAP](/enterprise/user/rest/reference/enterprise-admin#ldap).{% endif %}
- Сбор статистики о вашем предприятии. Дополнительные сведения см. в разделе [Статистика для администраторов](/rest/reference/enterprise-admin#admin-stats).
- Управление корпоративной учетной записью. Дополнительные сведения см. в разделе [Учетные записи предприятия](/graphql/guides/managing-enterprise-accounts).

Полную документацию по {% данных variables.product.prodname_enterprise_api %}см. в разделе [{% данных variables.product.prodname_dotcom %} REST API](/rest) и [API GraphQL {% данных variables.product.prodname_dotcom%}](/graphql). 
