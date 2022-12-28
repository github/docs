---
title: 리포지토리 상호 작용
shortTitle: Repository
intro: '리포지토리 상호 작용 API를 사용하면 소유자 또는 관리자 액세스 권한이 있는 사용자가 퍼블릭 리포지토리에서 댓글을 달거나, 문제를 열거나, 끌어오기 요청을 만들 수 있는 사용자 유형을 일시적으로 제한할 수 있습니다.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e1d7d0137ddc2334bb08e17a0c8d7069c13d982d
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147064668'
---
## 리포지토리 상호 작용 API 정보

리포지토리 상호 작용 API를 사용하면 소유자 또는 관리자 액세스 권한이 있는 사용자가 퍼블릭 리포지토리에서 댓글을 달거나, 문제를 열거나, 끌어오기 요청을 만들 수 있는 사용자 유형을 일시적으로 제한할 수 있습니다. {% data reusables.interactions.interactions-detail %} {% data variables.product.product_name %} 사용자 유형에 대한 자세한 내용은 다음과 같습니다.

* 리포지토리의 {% data reusables.interactions.existing-user-limit-definition %}.
* 리포지토리의 {% data reusables.interactions.contributor-user-limit-definition %}.
* 리포지토리의 {% data reusables.interactions.collaborator-user-limit-definition %}.

리포지토리를 소유하는 사용자 또는 조직에 대해 상호 작용 제한을 사용하는 경우 개별 리포지토리에 대한 제한을 변경할 수 없습니다. 대신 [사용자](#user) 또는 [조직](#organization) 상호 작용 엔드포인트를 사용하여 상호 작용 제한을 변경합니다.
