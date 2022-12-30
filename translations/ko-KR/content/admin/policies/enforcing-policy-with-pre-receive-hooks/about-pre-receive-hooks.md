---
title: 사전 수신 후크 정보
intro: '사전 수신 후크는 품질 검사를 구현하는 데 사용할 수 있는 {% data variables.product.prodname_ghe_server %} 어플라이언스에서 실행되는 스크립트입니다.'
redirect_from:
  - /enterprise/admin/developer-workflow/about-pre-receive-hooks
  - /enterprise/admin/policies/about-pre-receive-hooks
  - /admin/policies/about-pre-receive-hooks
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Policies
  - Pre-receive hooks
ms.openlocfilehash: 79a7bd616549a7bf5bc9447555d937edfb595424
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148097763'
---
푸시가 발생하면 각 스크립트는 격리된 환경에서 실행되며 푸시 콘텐츠에 대한 검사를 수행할 수 있습니다. 스크립트는 종료 상태가 0인 경우 푸시를 수락하거나 종료 상태가 0이 아닌 경우 거부됩니다.

## 사용 시나리오
사전 수신 후크를 사용하여 비즈니스 규칙을 충족하고 규정 준수를 적용하여 특정한 일반적인 실수를 방지합니다.

사전 수신 후크를 사용하는 방법의 예:

- 유효한 티켓 번호를 포함하거나 특정 길이를 초과할 때와 같이 특정 패턴이나 형식을 따르려면 커밋 메시지가 필요합니다.
- 모든 푸시를 거부하여 분기 또는 리포지토리를 잠급니다.
- 키워드, 패턴 또는 파일 형식을 차단하여 중요한 데이터가 리포지토리에 추가되지 않도록 방지합니다.
- PR 작성자가 자신의 변경 내용을 병합하지 못하도록 합니다.

## 성능 및 워크플로에 미치는 영향
개발자와 그들의 워크플로에 미치는 영향은 중요할 수 있으며 신중하게 고려해야 합니다. 비즈니스 요구 사항을 기반으로 하여 신중하게 구현된 사전 수신 후크는 조직 전체에 매우 큰 혜택을 제공합니다.

사전 수신 후크는 {% 데이터 variables.location.product_location %}의 성능에 의도하지 않은 영향을 미칠 수 있으며 신중하게 구현하고 검토해야 합니다.
