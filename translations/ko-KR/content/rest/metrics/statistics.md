---
title: 리포지토리 통계
shortTitle: Statistics
allowTitleToDifferFromFilename: true
intro: '리포지토리 통계 API를 사용하면 {% data variables.product.product_name %}에서 다양한 유형의 리포지토리 활동을 시각화하는 데 사용하는 데이터를 가져올 수 있습니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 74692780426dd848634bf18f16bacd3770da001c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066132'
---
## 리포지토리 통계 API 정보

리포지토리 통계 API를 사용하면 {% data variables.product.product_name %}에서 다양한 유형의 리포지토리 활동을 시각화하는 데 사용하는 데이터를 가져올 수 있습니다.

### 캐싱에 대한 단어

리포지토리 통계 컴퓨팅은 비용이 많이 드는 작업이므로 가능하면 캐시된 데이터를 반환하려고 합니다.  리포지토리의 통계를 쿼리할 때 데이터가 캐시되지 않은 경우 `202` 응답을 받게 됩니다. 해당 통계를 컴파일하기 위한 백그라운드 작업도 발생합니다. 작업을 완료하는 데 몇 분 정도 기다렸다가 요청을 다시 제출합니다. 작업이 완료되면 해당 요청은 응답 본문에 통계가 포함된 `200` 응답을 받게 됩니다.

리포지토리 통계는 리포지토리의 기본 분기의 SHA에 의해 캐시됩니다. 기본 분기로 푸시하면 통계 캐시가 다시 설정됩니다.

### 통계는 일부 유형의 커밋을 제외합니다.

API에서 노출하는 통계는 [다른 리포지토리 그래프](/github/visualizing-repository-data-with-graphs/about-repository-graphs)에 표시된 통계와 일치합니다.

요약:
- 모든 통계는 병합 커밋을 제외합니다.
- 기여자 통계는 빈 커밋도 제외합니다.
