---
title: 비밀 검사
intro: 비밀 검사 API를 사용하여 리포지토리에서 비밀 경고를 검색하고 업데이트합니다.
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/secret-scanning
ms.openlocfilehash: d17aa63bb3d7e71adb310c66cabb05a83776b78f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880126'
---
{% data reusables.secret-scanning.api-beta %}

## 비밀 검사 API 정보

{% data variables.product.prodname_secret_scanning %} API에서 다음을 수행할 수 있습니다.

- 리포지토리에 대해 {% data variables.product.prodname_secret_scanning %}를 사용하거나 사용하지 않도록 설정{% ifversion secret-scanning-push-protection %}하고 보호를 푸시{% endif %}합니다. 자세한 내용은 “[리포지토리](/rest/repos/repos#update-a-repository)”를 참조하고 REST API 설명서에서 “`security_and_analysis` 개체의 속성” 섹션을 확장하세요.
- 리포지토리에서 {% data variables.product.prodname_secret_scanning_GHAS %} 경고를 검색하고 업데이트합니다. 자세한 내용은 아래 섹션을 참조하세요.

{% data variables.product.prodname_secret_scanning %}에 대한 자세한 내용은 “[{% data variables.product.prodname_secret_scanning %} 정보](/code-security/secret-security/about-secret-scanning)”를 참조하세요.
