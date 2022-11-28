---
title: GitHub 데이터 사용 정보
redirect_from:
  - /articles/about-github-s-use-of-your-data
  - /articles/about-githubs-use-of-your-data
  - /github/understanding-how-github-uses-and-protects-your-data/about-githubs-use-of-your-data
intro: '{% data variables.product.product_name %}는 리포지토리의 데이터를 사용하여 관련 도구, 사용자, 프로젝트 및 정보에 연결해줍니다.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Policy
  - Legal
shortTitle: GitHub's use of your data
ms.openlocfilehash: f49f90a981b92d2c7d5d34b0fac28ec05adbadd0
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145135645'
---
## {% data variables.product.product_name %}의 데이터 사용 정보

{% data variables.product.product_name %}은(는) 제품 내에서 일반화된 인사이트를 제공하기 위해 메타데이터를 집계하고 콘텐츠 패턴을 구문 분석합니다. 공개 리포지토리의 데이터를 사용하고, 리포지토리 소유자가 종속성 그래프를 사용하도록 설정하여 {% data variables.product.product_name %}과(와) 데이터를 공유하기로 선택한 경우 비공개 리포지토리의 메타데이터 및 집계 데이터를 사용합니다. 비공개 리포지토리에 종속성 그래프를 사용하도록 설정하면 {% data variables.product.product_name %}에서 해당 특정 비공개 리포지토리에 대한 읽기 전용 분석을 수행합니다.

비공개 리포지토리에 대해 데이터를 사용하도록 설정하는 경우 Microsoft는 [서비스 약관](/free-pro-team@latest/github/site-policy/github-terms-of-service)에 따라 귀하의 개인 데이터, 소스 코드 또는 영업 비밀을 기밀 및 비공개로 계속 처리합니다. 학습하는 정보는 집계된 데이터에서만 제공됩니다. 자세한 내용은 “[비공개 리포지토리에 대한 데이터 사용 설정 관리](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)”를 참조하세요.

{% data reusables.repositories.about-github-archive-program %} 자세한 내용은 “[{% data variables.product.prodname_dotcom %}의 콘텐츠 및 데이터 보관 정보](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)”를 참조하세요.

{% data reusables.user-settings.export-data %} 자세한 내용은 “[개인 계정 데이터의 보관 요청](/articles/requesting-an-archive-of-your-personal-account-s-data)”을 참조하세요.

[{% data variables.product.prodname_dotcom %} 블로그](https://github.com/blog)에서 메타데이터 또는 집계 데이터를 사용하는 다양한 신규 기능을 발표합니다.

## 데이터가 보안 권장 사항을 개선하는 방법

데이터를 사용하는 방법의 예로 Mircrosoft는 공개 리포지토리의 종속성에서 보안 취약성을 감지하고 경고할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot_alerts %} 정보](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)”를 참조하세요.

잠재적인 보안 취약성을 감지하기 위해 {% data variables.product.product_name %}}은(는) 종속성 매니페스트 파일의 내용을 검사하여 프로젝트의 종속성 목록을 그립니다.

{% data variables.product.product_name %}은(는) 종속성 매니페스트에 대한 변경 내용도 알아봅니다. 예를 들어 보안 경고를 받은 후 취약한 종속성을 안전한 버전으로 업그레이드하고 다른 사용자가 동일한 작업을 수행하는 경우 {% data variables.product.product_name %}은(는) 취약성을 패치하는 방법을 알아보고 영향을 받는 리포지토리에 유사한 패치를 추천할 수 있습니다.

## 개인 정보 및 데이터 공유

비공개 리포지토리 데이터는 컴퓨터에서 검사하며 {% data variables.product.product_name %} 직원은 절대 읽을 수 없습니다. [서비스 약관](/free-pro-team@latest/github/site-policy/github-terms-of-service#3-access)에 설명된 경우를 제외하고 사용자는 비공개 리포지토리의 내용을 육안으로 볼 수 없습니다.

개인 또는 리포지토리 데이터는 제3자와 공유되지 않습니다. 분석을 통해 얻은 집계 데이터는 파트너와 공유할 수 있습니다.
