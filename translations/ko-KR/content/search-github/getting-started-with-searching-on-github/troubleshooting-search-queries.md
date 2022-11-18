---
title: 검색 쿼리 문제 해결
intro: '{% data variables.product.product_name %}에서 검색하는 동안 예기치 않은 결과가 발생하는 경우 일반적인 문제 및 제한 사항을 검토하여 문제를 해결할 수 있습니다.'
redirect_from:
  - /articles/troubleshooting-search-queries
  - /github/searching-for-information-on-github/troubleshooting-search-queries
  - /github/searching-for-information-on-github/getting-started-with-searching-on-github/troubleshooting-search-queries
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
shortTitle: Troubleshoot search queries
ms.openlocfilehash: 2c90d144401974ebc44f4b80a1509593fe987329
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145118935'
---
## 잠재적인 시간 제한

일부 쿼리는 검색 인프라를 실행하는 데 계산 비용이 많이 듭니다. 모든 사용자가 빠르게 검색할 수 있도록 개별 쿼리를 실행할 수 있는 시간을 제한합니다. 드문 경우지만 쿼리가 시간 제한을 초과하는 경우 검색은 시간 제한 이전에 발견된 모든 일치 항목을 반환하고 시간 초과가 발생했음을 알려 줍니다.

시간 제한에 도달한다고 해서 검색 결과가 불완전하다는 의미는 아닙니다. 이는 가능한 모든 데이터를 검색하기 전에 쿼리가 중단되었음을 의미합니다.

## 쿼리 길이 제한 사항

{% data variables.product.product_name %}에서 검색할 때 쿼리 길이에 몇 가지 제한이 있습니다.

* 256자보다 긴 쿼리는 지원되지 않습니다.
* 5개를 초과하는 `AND`, `OR` 또는 `NOT` 연산자를 사용하여 쿼리를 구성할 수 없습니다.

코드 검색과 같은 특정 검색 유형에는 추가 제한 사항이 있을 수 있습니다. 자세한 내용은 해당 검색 유형에 대한 설명서를 확인하세요.

## 추가 참고 자료

- “[GitHub 검색 정보](/search-github/getting-started-with-searching-on-github/about-searching-on-github)”
