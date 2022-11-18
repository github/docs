---
title: GitHub Marketplace
allowTitleToDifferFromFilename: true
shortTitle: Marketplace
intro: ''
topics:
  - API
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
ms.openlocfilehash: acbdb60fc93898dd7c56c21f60e12fb9dbadb31d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145136324'
---
## {% data variables.product.prodname_marketplace %} API 정보

{% data variables.product.prodname_marketplace %}에 대한 자세한 내용은 “[GitHub Marketplace](/marketplace/)”를 참조하세요.

{% data variables.product.prodname_marketplace %} API를 사용하면 가격 플랜을 사용하는 고객을 확인하고 고객의 구매 항목을 확인하며 계정에 활성 구독이 있는지 확인할 수 있습니다.

### 스텁 엔드포인트를 사용하여 테스트

이 API에는 **스텁 데이터** 로 [{% data variables.product.prodname_github_app %}](/marketplace/integrating-with-the-github-marketplace-api/testing-github-marketplace-apps/)를 테스트할 수 있는 엔드포인트가 포함되어 있습니다. 스텁 데이터는 실제 구독에 따라 변경되지 않는 하드 코딩된 가짜 데이터입니다.

스텁 데이터로 테스트하려면 프로덕션용 엔드포인트 대신 스텁 엔드포인트를 사용합니다. 이렇게 하면 {% data variables.product.prodname_marketplace %}에 {% data variables.product.prodname_github_apps %}를 나열하기 전에 API 논리가 성공하는지 테스트할 수 있습니다.

{% data variables.product.prodname_github_app %}를 배포하기 전에 스텁 엔드포인트를 프로덕션 엔드포인트로 교체해야 합니다.
