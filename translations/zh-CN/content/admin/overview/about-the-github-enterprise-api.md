---
title: 关于 GitHub Enterprise API
intro: '{% data variables.product.product_name %} 支持 REST 和 GraphQL API。'
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
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331630'
---
利用 API，您可以自动处理多种管理任务。 示例包括：

{% ifversion ghes %}
- 对 {% data variables.enterprise.management_console %} 进行更改。 有关详细信息，请参阅“[{% data variables.enterprise.management_console %}](/enterprise/user/rest/reference/enterprise-admin#management-console)”。
- 配置 LDAP 同步。有关详细信息，请参阅“[LDAP](/enterprise/user/rest/reference/enterprise-admin#ldap)”。{% endif %}
- 收集关于企业的统计信息。 有关详细信息，请参阅“[管理员统计信息](/rest/reference/enterprise-admin#admin-stats)”。
- 管理企业帐户。 有关详细信息，请参阅“[Enterprise 帐户](/graphql/guides/managing-enterprise-accounts)”。

有关 {% data variables.product.prodname_enterprise_api %} 的完整文档，请参阅 [{% data variables.product.prodname_dotcom %} REST API](/rest) 和 [{% data variables.product.prodname_dotcom%} GraphQL API](/graphql)。 
