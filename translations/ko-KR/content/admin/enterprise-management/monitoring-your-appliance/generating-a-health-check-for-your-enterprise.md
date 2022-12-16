---
title: 엔터프라이즈에 대한 상태 검사 생성
intro: '상태 검사를 생성하여 {% 데이터 variables.location.product_location %}의 일반 상태 및 Git 및 API 요청에 대한 인사이트를 얻을 수 있습니다.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
product: '{% data reusables.gated-features.generated-health-checks %}'
ms.openlocfilehash: 5b03c307c474d18c4f4e2a4891103759e9f8195e
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098774'
---
{% note %}

**참고:** 상태 검사 생성은 현재 {% data variables.product.prodname_ghe_server %}에 대한 베타 버전이며 변경될 수 있습니다.

{% endnote %}

## 생성된 상태 검사 정보

진단 및 로그 파일과 같은 많은 데이터가 포함된 {% 데이터 variables.location.product_location %}에 대한 지원 번들을 만들 수 있습니다. 이 데이터를 분석하고 해석하는 데 도움이 되도록 상태 검사를 생성할 수 있습니다. 지원 번들에 대한 자세한 내용은 “[{% data variables.contact.github_support %}에 데이터 제공](/support/contacting-github-support/providing-data-to-github-support#creating-and-sharing-support-bundles)”을 참조하세요.

상태 검사는 {% 데이터 variables.location.product_location %}에 대한 다음 정보를 제공합니다.
- 업그레이드 상태, 스토리지 및 라이선스 좌석 사용량과 같은 {% 데이터 variables.location.product_location %}의 일반적인 상태에 대한 인사이트
- 하위 도메인 격리 및 사용자 인증에 중점을 둔 보안 섹션
- 가장 바쁜 리포지토리 및 Git 사용자에 대한 세부 정보와 함께 Git 요청 분석 
- 가장 바쁜 시간, 가장 자주 요청된 엔드포인트, 가장 활성인 호출자를 포함한 API 요청 분석

{% data variables.product.prodname_ghe_cloud %}에 대한 상태 검사를 생성하려면 {% data variables.contact.github_support %}에 문의하세요. 자세한 내용은 “[지원 티켓 만들기](/support/contacting-github-support/creating-a-support-ticket)”를 참조하세요.

## 상태 검사 생성

상태 검사를 생성하려면 먼저 지원 번들을 만들어야 합니다. 자세한 내용은 “[{% data variables.contact.github_support %}에 데이터 제공](/support/contacting-github-support/providing-data-to-github-support#creating-and-sharing-support-bundles)”을 참조하세요.

1. [{% data variables.contact.support_portal %}](https://support.github.com/)로 이동합니다.
2. 페이지 오른쪽 위에서 **프리미엄** 을 클릭합니다.

   ![GitHub 지원 포털 헤더의 “프리미엄” 링크 스크린샷](/assets/images/enterprise/support/support-portal-header-premium.png)
   
3. **상태 검사** 오른쪽에서 **상태 검사 요청** 을 클릭합니다.

   ![“상태 검사 요청” 단추 스크린샷](/assets/images/enterprise/support/support-portal-request-health-check.png)
   
4. “엔터프라이즈 계정 선택”에서 드롭다운 메뉴를 선택하고 엔터프라이즈 계정을 클릭합니다.

   ![“엔터프라이즈 계정” 드롭다운 메뉴 스크린샷](/assets/images/enterprise/support/health-check-dialog-ea.png)
   
5. “지원 번들 업로드”에서 **파일 선택** 을 클릭하고 업로드할 파일을 선택합니다. 그런 다음 **상태 검사 요청** 을 클릭합니다.

   ![“파일 선택” 및 “상태 검사 요청” 단추의 스크린샷](/assets/images/enterprise/support/health-check-dialog-choose-file.png)
   

상태 검사를 요청하면 작업이 상태 검사를 생성하도록 예약됩니다. 몇 시간에서 하루가 지난 뒤 생성된 상태 검사가 {% data variables.contact.support_portal %}의 “상태 검사” 섹션에 표시됩니다.

![{% data variables.contact.support_portal %}의 상태 검사 섹션 스크린샷](/assets/images/enterprise/support/support-portal-health-checks-section.png)
