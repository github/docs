---
title: GitHub Enterprise API 정보
intro: '{% data variables.product.product_name %}은 REST 및 GraphQL API를 지원합니다.'
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
ms.contentlocale: ko-KR
ms.lasthandoff: 10/07/2022
ms.locfileid: '148012162'
---
API를 사용하면 많은 관리 작업을 자동화할 수 있습니다. 일부 사례:

{% ifversion ghes %}
- {% data variables.enterprise.management_console %}에 대한 변경을 수행합니다. 자세한 내용은 “[{% data variables.enterprise.management_console %}](/enterprise/user/rest/reference/enterprise-admin#management-console)”을 참조하세요.
- LDAP 동기화를 구성합니다. 자세한 내용은 “[LDAP](/enterprise/user/rest/reference/enterprise-admin#ldap)”를 참조하세요.{% endif %}
- 엔터프라이즈에 대한 통계를 수집합니다. 자세한 내용은 “[관리자 통계](/rest/reference/enterprise-admin#admin-stats)”를 참조하세요.
- 엔터프라이즈 계정을 관리하세요. 자세한 내용은 “[엔터프라이즈 계정](/graphql/guides/managing-enterprise-accounts)”을 참조하세요.

{% 데이터 variables.product.prodname_enterprise_api %}에 대한 전체 설명서는 [{% 데이터 variables.product.prodname_dotcom %} REST API](/rest) 및 [{% 데이터 variables.product.prodname_dotcom%} GraphQL API](/graphql)를 참조하세요. 
