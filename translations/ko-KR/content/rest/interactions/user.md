---
title: 사용자 상호 작용
shortTitle: User
allowTitleToDifferFromFilename: true
intro: '사용자 상호 작용 API를 사용하면 퍼블릭 리포지토리에서 댓글을 달거나, 문제를 열거나, 끌어오기 요청을 만들 수 있는 사용자 유형을 일시적으로 제한할 수 있습니다.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: e61096e6f09a9c17608e67846c138142c527c314
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066900'
---
## 사용자 상호 작용 API 정보

사용자 상호 작용 API를 사용하면 퍼블릭 리포지토리에서 댓글을 달거나, 문제를 열거나, 끌어오기 요청을 만들 수 있는 사용자 유형을 일시적으로 제한할 수 있습니다. {% data reusables.interactions.interactions-detail %} {% data variables.product.product_name %} 사용자 유형에 대한 자세한 내용은 다음과 같습니다.

* 리포지토리와 상호 작용하지 않는 {% data reusables.interactions.existing-user-limit-definition %}.
* 리포지토리와 상호 작용하지 않는 {% data reusables.interactions.contributor-user-limit-definition %}.
* 리포지토리와 상호 작용하지 않는 {% data reusables.interactions.collaborator-user-limit-definition %}.

사용자 수준에서 상호 작용 제한을 설정하면 사용자가 소유한 개별 리포지토리에 대해 설정된 모든 상호 작용 제한을 덮어씁니다. 사용자 소유의 개별 리포지토리에 대해 서로 다른 상호 작용 제한을 설정하려면 [리포지토리](#repository) 상호 작용 엔드포인트를 대신 사용합니다.
