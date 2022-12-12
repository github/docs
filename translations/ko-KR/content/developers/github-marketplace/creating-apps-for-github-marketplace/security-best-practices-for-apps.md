---
title: 앱에 대한 보안 모범 사례
intro: '{% data variables.product.prodname_marketplace %}에서 공유할 보안 앱을 준비하기 위한 지침입니다.'
redirect_from:
  - /apps/marketplace/getting-started/security-review-process
  - /marketplace/getting-started/security-review-process
  - /developers/github-marketplace/security-review-process-for-submitted-apps
  - /developers/github-marketplace/security-best-practices-for-apps
shortTitle: Security best practice
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
ms.openlocfilehash: d2eaf391c35238417951ce60dc33cc84a651804f
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098597'
---
이러한 모범 사례를 따르는 경우 안전한 사용자 환경을 제공하는 데 도움이 됩니다.

## 권한 부여, 인증 및 액세스 제어

OAuth 앱이 아닌 GitHub 앱을 만드는 것이 좋습니다. {% data reusables.marketplace.github_apps_preferred %}. 자세한 내용은 “[GitHub 앱과 OAuth 앱 간의 차이점](/apps/differences-between-apps/)”을 참조하세요.
- 앱은 최소 권한 원칙을 사용해야 하며 앱이 의도한 기능을 수행하는 데 필요한 OAuth 범위 및 GitHub 앱 권한만 요청해야 합니다. 자세한 내용은 Wikipedia에서 [최소 권한 원칙](https://en.wikipedia.org/wiki/Principle_of_least_privilege)을 참조하세요.
- 앱은 고객에게 이메일을 보내거나 지원 담당자에게 전화하지 않고도 계정을 삭제할 수 있는 방법을 제공해야 합니다.
- 앱은 앱의 여러 구현 사이에서 토큰을 공유해서는 안 됩니다. 예를 들어 데스크톱 앱에는 웹 기반 앱과 별도의 토큰이 있어야 합니다. 개별 토큰을 사용하면 각 앱이 GitHub 리소스에 필요한 액세스를 개별적으로 요청할 수 있습니다.
- 각 사용자 유형에 필요한 기능에 따라 다른 사용자 역할로 앱을 디자인합니다. 예를 들어 표준 사용자는 관리자 기능에 액세스할 수 없으며 청구 관리자는 리포지토리 코드에 대한 푸시 액세스가 필요하지 않을 수 있습니다.
- 앱은 SaaS 서비스를 관리하기 위해 이메일 또는 데이터베이스 서비스와 같은 서비스 계정을 공유해서는 안 됩니다.
- 앱에서 사용되는 모든 서비스에는 고유한 로그인 및 암호 자격 증명이 있어야 합니다.
- 프로덕션 호스팅 인프라에 대한 관리자 권한 액세스는 관리자 업무가 있는 엔지니어 및 직원에게만 부여되어야 합니다.
- 앱은 인증에 {% 데이터 variables.product.pat_generic %}s을(를) 사용하면 안 되며 [OAuth 앱](/apps/about-apps/#about-oauth-apps) 또는 [GitHub 앱](/apps/about-apps/#about-github-apps)으로 인증해야 합니다.
  - OAuth 앱은 [OAuth 토큰](/apps/building-oauth-apps/authorizing-oauth-apps/)을 사용하여 인증해야 합니다.
  - GitHub 앱은 [JWT(JSON 웹 토큰)](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app), [OAuth 토큰](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/) 또는 [설치 액세스 토큰](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)을 사용하여 인증해야 합니다.

## 데이터 보호

- 앱은 유효한 TLS 인증서 또는 Git용 SSH와 함께 HTTPS를 사용하여 공용 인터넷을 통해 전송된 데이터를 암호화해야 합니다.
- 앱은 클라이언트 ID 및 클라이언트 암호 키를 안전하게 저장해야 합니다. [환경 변수](http://en.wikipedia.org/wiki/Environment_variable#Getting_and_setting_environment_variables)로 저장하는 것이 좋습니다.
- 앱은 사용자로부터 요청을 받은 후 30일 이내에 또는 GitHub에서 사용자의 법적 관계가 종료된 후 30일 이내에 모든 GitHub 사용자 데이터를 삭제해야 합니다.
- 앱에서는 사용자가 GitHub 암호를 제공하도록 요구할 필요가 없습니다.
- 앱은 토큰, 클라이언트 ID 및 클라이언트 암호를 암호화해야 합니다.

## 로깅 및 모니터링

앱에는 로깅 및 모니터링 기능이 있어야 합니다. 앱 로그는 30일 이상 보존되고 1년 이상 보관되어야 합니다.
보안 로그에는 다음이 포함되어야 합니다.

- 인증 및 권한 부여 이벤트
- 서비스 구성 변경 내용
- 데이터 읽기 및 쓰기
- 모든 사용자 및 그룹 권한 변경
- 관리자로 역할 상승
- 각 이벤트에 대한 일관된 타임스탬프
- 기록된 모든 작업에 대한 원본 사용자, IP 주소 및/또는 호스트 이름

## 인시던트 대응 워크플로

사용자에게 안전한 환경을 제공하려면 앱을 나열하기 전에 명확한 인시던트 대응 계획을 마련해야 합니다. 타사 공급업체를 사용하는 대신 회사에 보안 및 운영 인시던트 대응 팀을 두는 것이 좋습니다. 인시던트가 확인되고 24시간 이내에 {% data variables.product.product_name %}에 알리는 기능이 있어야 합니다.

인시던트 대응 워크플로의 예는 [SANS Institute 웹 사이트](https://www.sans.org/information-security-policy/)의 “데이터 위반 대응 정책”을 참조하세요. 인시던트 발생 시 수행할 명확한 단계가 포함된 짧은 문서는 긴 정책 템플릿보다 더 유용합니다.

## 취약성 관리 및 패치 워크플로

프로덕션 인프라에 대한 정기적인 취약성 검사를 수행해야 합니다. 취약성 검사 결과를 심사하고 취약성을 수정하는 데 동의하는 기간을 정의해야 합니다.

전체 취약성 관리 프로그램을 설정할 준비가 되지 않은 경우 패치 프로세스를 만들어 시작하는 것이 유용합니다. 패치 관리 정책을 만드는 방법에 대한 지침은 이 TechRepublic 문서 “[패치 관리 정책 설정](https://www.techrepublic.com/article/establish-a-patch-management-policy-87756/)”을 참조하세요.
