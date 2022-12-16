---
title: Informationen zur GitHub Enterprise-API
intro: '{% data variables.product.product_name %} unterstützt REST- und GraphQL-APIs.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '146331632'
---
Mit den APIs kannst du viele Verwaltungsaufgaben automatisieren. Beispiele hierfür sind:

{% ifversion ghes %}
- Änderungen in der {% data variables.enterprise.management_console %} durchführen. Weitere Informationen findest du unter [{% data variables.enterprise.management_console %}](/enterprise/user/rest/reference/enterprise-admin#management-console).
- Die LDAP-Synchronisierung konfigurieren. Weitere Informationen findest du unter [LDAP](/enterprise/user/rest/reference/enterprise-admin#ldap). {% endif %}
- Statistiken zu deinem Unternehmen erfassen. Weitere Informationen findest du unter [Administratorstatistiken](/rest/reference/enterprise-admin#admin-stats).
- Verwalte dein Unternehmenskonto. Weitere Informationen findest du unter [Unternehmenskonten](/graphql/guides/managing-enterprise-accounts).

Die vollständige Dokumentation zu {% data variables.product.prodname_enterprise_api %} findest du unter [{% data variables.product.prodname_dotcom %} REST-API](/rest) und [{% data variables.product.prodname_dotcom%} GraphQL-API](/graphql). 
