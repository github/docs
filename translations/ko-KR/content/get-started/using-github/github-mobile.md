---
title: GitHub 모바일
intro: '모바일 디바이스에서 {% data variables.product.product_name %}에 대한 작업을 심사하고 협업 및 관리합니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Mobile
redirect_from:
  - /get-started/using-github/github-for-mobile
  - /github/getting-started-with-github/github-for-mobile
  - /github/getting-started-with-github/using-github/github-for-mobile
ms.openlocfilehash: 1d94b07ebb9939347ca2f71cc9cd3054fec75a7e
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099021'
---
## {% data variables.product.prodname_mobile %} 정보

{% data reusables.mobile.about-mobile %}

{% data variables.product.prodname_mobile %}을 사용하면 어디서든 빠르게 {% data variables.product.product_name %}에서 영향력 있는 작업을 수행할 수 있습니다. {% data variables.product.prodname_mobile %}은 신뢰할 수 있는 자사 클라이언트 애플리케이션을 통해 {% data variables.product.product_name %} 데이터에 액세스하는 안전한 방법입니다.

{% data variables.product.prodname_mobile %}을 사용하여 다음을 수행할 수 있습니다.

- 알림을 관리하고 심사하고 지우기
- 이슈와 끌어오기 요청을 읽고 검토하고 협업하기
- 끌어오기 요청에서 파일 편집
- 사용자, 리포지토리, 조직을 검색하고 찾아보고 상호 작용하기
- 다른 사람이 내 사용자 이름을 멘션할 때 푸시 알림 받기 {% ifversion fpt or ghec %}- 2단계 인증으로 GitHub.com 계정 보호
- 인식할 수 없는 디바이스에서 로그인 시도 확인{% endif %}

{% data variables.product.prodname_mobile %}에 대한 자세한 내용은 “[알림 구성](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#enabling-push-notifications-with-github-mobile)”을 참조하세요.

{% ifversion fpt or ghec %}- {% data variables.product.prodname_mobile %}을 사용하는 2단계 인증에 대한 자세한 내용은 "[{% data variables.product.prodname_mobile %} 구성](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-github-mobile) 및 [{% data variables.product.prodname_mobile %}을 사용하여 인증](/authentication/securing-your-account-with-two-factor-authentication-2fa/accessing-github-using-two-factor-authentication##verifying-with-github-mobile)"을 참조하세요. {% endif %}

## {% data variables.product.prodname_mobile %} 설치

Android 또는 iOS용 {% data variables.product.prodname_mobile %}을 설치하려면 [{% data variables.product.prodname_mobile %}](https://github.com/mobile)을 참조하세요.

## 계정 관리

{% data variables.product.prodname_dotcom_the_website %}의 개인 계정 1개와 {% data variables.product.prodname_ghe_server %}의 개인 계정 1개를 사용하여 모바일에 동시에 로그인할 수 있습니다. 다양한 제품에 대한 자세한 내용은 “[{% data variables.product.company_short %}의 제품](/get-started/learning-about-github/githubs-products)”을 참조하세요.

{% data reusables.mobile.push-notifications-on-ghes %}

VPN을 통해 엔터프라이즈에 액세스해야 하는 경우 {% data variables.product.prodname_mobile %}이 엔터프라이즈에서 작동하지 않을 수 있습니다.

### 필수 조건

{% data variables.product.prodname_ghe_server %}와 함께 {% data variables.product.prodname_mobile %}을 사용하려면 디바이스에 {% data variables.product.prodname_mobile %} 1.4 이상을 설치해야 합니다.

{% 데이터 variables.product.prodname_mobile %}와 함께 {% 데이터 variables.product.prodname_ghe_server %}을(를) 사용하려면 {% 데이터 variables.location.product_location %}이(가) 버전 3.0 이상이어야 하며 엔터프라이즈 소유자는 엔터프라이즈에 모바일 지원을 사용하도록 설정해야 합니다. 자세한 내용은 {% data variables.product.prodname_ghe_server %} 설명서의 {% ifversion ghes %}“[릴리스 정보](/enterprise-server/admin/release-notes)” 및 {% endif %}“[엔터프라이즈용 {% data variables.product.prodname_mobile %} 관리]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/configuration/configuring-your-enterprise/managing-github-mobile-for-your-enterprise)”{% ifversion not ghes %}를 참조하세요.{% else %}.{% endif %}

{% data variables.product.prodname_ghe_server %}에서의 {% data variables.product.prodname_mobile %} 베타 기간에는 {% data variables.product.prodname_dotcom_the_website %}에서 개인 계정으로 로그인해야 합니다.

### 계정 추가, 전환 또는 로그아웃

{% data variables.product.prodname_ghe_server %}에서 개인 계정으로 모바일에 로그인할 수 있습니다. 앱의 하단에서 {% octicon "person" aria-label="The person icon" %} **프로필** 을 길게 누른 다음, {% octicon "plus" aria-label="The plus icon" %} **엔터프라이즈 계정 추가** 를 탭합니다. 프롬프트에 따라 로그인합니다.

{% data variables.product.prodname_ghe_server %}에서 개인 계정으로 모바일에 로그인한 후 {% data variables.product.prodname_dotcom_the_website %}에서 이 계정과 자신의 계정 간에 전환할 수 있습니다. 앱의 하단에서 {% octicon "person" aria-label="The person icon" %} **프로필** 을 길게 누른 다음, 전환할 계정을 탭합니다.

{% data variables.product.prodname_mobile %}에서 {% data variables.product.prodname_ghe_server %}의 개인 계정 데이터에 더 이상 액세스할 필요가 없으면 계정에서 로그아웃할 수 있습니다. 앱의 하단에서 {% octicon "person" aria-label="The person icon" %} **프로필** 을 길게 누르고, 로그아웃할 계정에서 왼쪽으로 살짝 민 다음, **로그아웃** 을 탭합니다.

## {% data variables.product.prodname_mobile %}에 대해 지원되는 언어

{% data variables.product.prodname_mobile %}은 다음 언어로 제공됩니다.

- 영어
- 일본어
- 포르투갈어(브라질)
- 중국어(간체)
- 스페인어

디바이스에서 언어를 지원되는 언어로 구성하는 경우 그것이 {% data variables.product.prodname_mobile %}의 기본 언어가 됩니다. {% data variables.product.prodname_mobile %}의 **설정** 메뉴에서 {% data variables.product.prodname_mobile %}의 언어를 변경할 수 있습니다.

## iOS에서 {% data variables.product.prodname_mobile %}에 대한 유니버설 링크 관리

{% data variables.product.prodname_mobile %}은 iOS용 유니버설 링크를 자동으로 사용하도록 설정합니다. {% data variables.product.product_name %} 링크를 탭하면 대상 URL이 Safari 대신 {% data variables.product.prodname_mobile %}에서 열립니다. 자세한 내용은 Apple 개발자 사이트의 [유니버설 링크](https://developer.apple.com/ios/universal-links/)를 참조하세요.

유니버설 링크를 사용하지 않도록 설정하려면 {% data variables.product.product_name %} 링크를 길게 누른 다음 **열기** 를 탭합니다. 나중에 {% data variables.product.product_name %} 링크를 탭할 때마다 대상 URL이 {% data variables.product.prodname_mobile %} 대신 Safari에서 열립니다.

유니버설 링크를 다시 사용하도록 설정하려면 {% data variables.product.product_name %} 링크를 길게 누른 다음 **{% data variables.product.prodname_dotcom %}에서 열기** 를 탭합니다.

## 피드백 공유

[{% data variables.product.prodname_github_community %}](https://github.com/orgs/community/discussions/categories/mobile)에서 {% data variables.product.prodname_mobile %}에 대한 기능 요청이나 기타 피드백을 제출할 수 있습니다.

## iOS용 베타 릴리스 옵트아웃

TestFlight를 사용하여 iOS용 {% data variables.product.prodname_mobile %}의 베타 릴리스를 테스트하는 경우 언제든지 베타를 종료할 수 있습니다.

1. iOS 디바이스에서 TestFlight 앱을 엽니다.
2. “앱”에서 **{% data variables.product.prodname_dotcom %}** 를 탭합니다.
3. 페이지의 하단에서 **테스트 중지** 를 탭합니다.
