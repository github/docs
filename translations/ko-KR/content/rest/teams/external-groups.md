---
title: 외부 그룹
intro: 외부 그룹 API를 사용하면 조직에서 사용할 수 있는 외부 ID 공급자 그룹을 보고 조직의 외부 그룹과 팀 간의 연결을 관리할 수 있습니다.
versions:
  ghae: '*'
  ghec: '*'
  ghes: '>=3.6'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 0958aad779e6ec1044b74d3f6d67b2d7fff8aef0
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147710373'
---
## 외부 그룹 API 정보

이 API를 사용하려면 인증된 사용자가 팀 유지 관리자이거나 팀과 연결된 조직의 소유자여야 합니다.

{% ifversion ghec %} {% note %}

**참고:** 

- 외부 그룹 API는 {% data variables.product.prodname_emus %}를 사용하는 엔터프라이즈에 속한 조직에서만 사용할 수 있습니다. 자세한 내용은 “[Enterprise Managed Users 정보](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)”를 참조하세요.
- 조직에서 팀 동기화를 사용하는 경우 팀 동기화 API를 사용할 수 있습니다. 자세한 내용은 “[팀 동기화 API](#team-synchronization)”를 참조하세요.

{% endnote %} {% endif %}
