---
title: 조직의 구성원 정보 내보내기
intro: 사용자 인터페이스에서 직접 조직의 구성원에 대한 정보를 내보낼 수 있습니다.
permissions: Organization owners can export member information for their organization.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Export member information
ms.openlocfilehash: 2777e125f5eb43bfcf8ec1172db29fe7338bdbad
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145109820'
---
조직의 구성원에 대한 정보를 내보낼 수 있습니다. 이는 조직 내에서 사용자에 대한 감사를 수행하려는 경우에 유용합니다.

내보낸 정보에는 다음이 포함됩니다.
- 사용자 이름 및 표시 이름 세부 정보
- 사용자가 2단계 인증을 사용하도록 설정했는지 여부
- 멤버 자격이 퍼블릭인지 또는 프라이빗인지 여부
- 사용자가 조직 소유자인지 또는 구성원인지 여부
- 사용자의 마지막 활동의 날짜/시간(관련 활동의 전체 목록은 “[휴면 사용자 관리](/admin/user-management/managing-users-in-your-enterprise/managing-dormant-users)” 참조)
- 사용 가능한 경우 사용자의 SAML NameID

{% data variables.product.product_name %} 사용자 인터페이스 또는 API를 사용하여 직접 구성원 정보를 가져올 수 있습니다. 이 문서에서는 {% data variables.product.product_name %} 내에서 구성원 정보를 가져오는 방법을 설명합니다.

API에 대한 자세한 내용은 사용자에 대한 [GraphQL API](/graphql/reference/objects#user) 및 [REST API](/rest/reference/users) 설명서를 참조하세요.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.people-export %}
