---
title: 호환성이 손상되는 변경
intro: '{% data variables.product.prodname_dotcom %} GraphQL API에 대한 최근 및 향후 호환성이 손상되는 변경에 대해 알아봅니다.'
redirect_from:
  - /v4/breaking_changes
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: c76520b1f9dc806659373771b42501e072319937
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109498'
---
## 호환성이 손상되는 변경 정보

호환성이 손상되는 변경이란 통합자의 조치가 필요할 수 있는 모든 변경을 말합니다. 이러한 변경은 다음 두 가지 범주로 구분됩니다.

- **호환성 손상:** GraphQL API에 대한 기존 쿼리를 중단하는 변경. 예를 들어 필드를 제거하는 것은 호환성이 손상되는 변경입니다.
- **위험:** 기존 쿼리를 중단하지 않지만 클라이언트의 런타임 동작에 영향을 줄 수 있는 변경. 열거형 값을 추가하는 것은 위험한 변경의 예입니다.

당사는 통합업체에 안정적인 API를 제공하기 위해 노력하고 있습니다. 새 기능이 계속 발전 중인 경우 [스키마 미리 보기](/graphql/overview/schema-previews) 이후에 릴리스합니다.

통합자에게 필요한 조정을 수행할 시간을 주기 위해, 당사는 GraphQL 스키마를 변경하기 최소 3개월 전에 예정된 호환성이 손상되는 변경을 발표할 예정입니다. 변경은 분기의 첫째 날(1월 1일, 4월 1일, 7월 1일 또는 10월 1일)에 적용됩니다. 예를 들어 1월 15일에 변경 내용을 발표하면 7월 1일에 적용됩니다.
