---
title: 사용자 보안 모범 사례
intro: '{% ifversion ghes %}사이트 관리자가 구현할 수 있는 인스턴스 수준 보안 조치(SSL, 하위 도메인 격리, 방화벽 구성) 이외에도 {% else %}There {% endif %}사용자가 엔터프라이즈를 보호하기 위해 수행할 수 있는 단계가 있습니다.'
redirect_from:
  - /enterprise/admin/user-management/best-practices-for-user-security
  - /admin/user-management/best-practices-for-user-security
versions:
  ghes: '*'
  ghae: '*'
type: reference
topics:
  - Enterprise
  - Security
  - User account
shortTitle: User security best practices
ms.openlocfilehash: 57d19d97a8944ac20d6b90794bcf0cda63fc5bd0
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '146331658'
---
{% ifversion ghes %}
## 2단계 인증 사용

2FA(2단계 인증)는 인증을 위해 암호 이외의 두 번째 요소를 요구하는 웹 사이트 및 서비스에 로그인하는 방법입니다. {% data variables.product.prodname_ghe_server %}의 경우 이 두 번째 요소는 사용자의 스마트폰의 애플리케이션에서 생성된 일회성 인증 코드입니다. 사용자가 자신의 계정에서 2단계 인증을 사용하도록 요구하는 것이 좋습니다. 2단계 인증을 사용하면 계정 자체가 손상될 수 있도록 사용자의 암호와 스마트폰 모두가 손상되어야 합니다.

2단계 인증 구성에 대한 자세한 내용은 “[2단계 인증 정보](/enterprise/user/articles/about-two-factor-authentication)”를 참조하세요.
{% endif %}

## 암호 관리자 필요

사용자가 엔터프라이즈에 연결하는 데 사용하는 모든 컴퓨터에서 [LastPass](https://lastpass.com/) 또는 [1Password](https://1password.com/)와 같은 암호 관리자를 설치하고 사용하도록 요구하는 것이 좋습니다. 이렇게 하면 암호가 더 강력해지고 손상되거나 도난당할 가능성이 훨씬 줄어듭니다.

## 팀 및 리포지토리에 대한 액세스 제한

보안 위반이 발생할 경우 잠재적인 공격 노출 영역을 제한하려면 사용자에게 자신의 작업을 절대적으로 수행해야 하는 팀 및 리포지토리에 대한 액세스 권한만 부여하는 것이 좋습니다. 소유자 역할이 있는 구성원은 조직의 모든 팀과 리포지토리에 액세스할 수 있으므로 이 팀을 최대한 작게 유지하는 것이 좋습니다.

팀 및 팀 권한을 구성하는 방법에 대한 자세한 내용은 “[조직의 역할](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)”을 참조하세요.
