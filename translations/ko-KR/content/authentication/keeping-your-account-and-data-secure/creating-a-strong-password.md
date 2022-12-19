---
title: 강력한 암호 만들기
intro: '암호 관리자를 사용하여 강력하고 고유한 암호로 {% ifversion ghae %}{% 데이터 variables.product.product_name %}{% else %}{% 데이터 variables.location.product_location %}{% endif %}에서 계정을 보호합니다.'
redirect_from:
  - /articles/what-is-a-strong-password
  - /articles/creating-a-strong-password
  - /github/authenticating-to-github/creating-a-strong-password
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-strong-password
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Create a strong password
ms.openlocfilehash: 3f9c7d7e265d91cec2fb7b00f9b65db83cd04bc1
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098232'
---
{% ifversion ghae %}{% 데이터 variables.product.product_name %}{% else %}{% 데이터 variables.location.product_location %}{% endif %}에서 계정에 대한 암호를 선택하거나 생성해야 합니다.
- 숫자와 소문자가 포함된 경우 {% ifversion ghes %}7{% else %}8{% endif %}자
- 임의의 문자 조합의 경우 15자

계정을 안전하게 유지하려면 다음 모범 사례를 따르는 것이 좋습니다.
- [LastPass](https://lastpass.com/) 또는 [1Password](https://1password.com/)와 같은 암호 관리자를 사용하여 15자 이상의 암호를 생성합니다.
- {% data variables.product.product_name %}에 고유한 암호를 생성합니다. {% 데이터 variables.product.product_name %} 암호를 다른 곳에서 사용하고 해당 서비스가 손상된 경우 공격자 또는 다른 악의적인 행위자가 해당 정보를 사용하여 {% ifversion ghae %}{% 데이터 variables.product.product_name %}{% else %}{% 데이터 variables.location.product_location %}{% endif %}의 계정에 액세스할 수 있습니다.

- 개인 계정에 대한 2단계 인증을 구성합니다. 자세한 내용은 “[2단계 인증 정보](/articles/about-two-factor-authentication)”를 참조하세요.
- 잠재적인 협력자와도 암호를 공유하지 마세요. 각 사용자는 {% data variables.product.product_name %}에서 자신의 개인 계정을 사용해야 합니다. 협업 방법에 대한 자세한 내용은 “[협력자를 개인 리포지토리에 초대](/articles/inviting-collaborators-to-a-personal-repository)”, “[협업 개발 모델 정보](/articles/about-collaborative-development-models/)” 또는 “[조직의 그룹과 협업](/organizations/collaborating-with-groups-in-organizations/)”을 참조하세요.

{% data reusables.repositories.blocked-passwords %}

브라우저를 사용하여 {% data variables.product.product_name %}에 로그온하는 데만 암호를 사용할 수 있습니다. 명령줄 또는 API와 같은 다른 방법을 사용하여 {% data variables.product.product_name %}에 인증하는 경우 다른 자격 증명을 사용해야 합니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %}에 대한 인증 정보](/github/authenticating-to-github/about-authentication-to-github)”를 참조하세요. 

{% ifversion fpt or ghec %}{% data reusables.user-settings.password-authentication-deprecation %}{% endif %}

## 추가 참고 자료

- “[Git에서 {% data variables.product.product_name %} 자격 증명 캐싱](/github/getting-started-with-github/caching-your-github-credentials-in-git/)”
- “[계정 및 데이터 보안 유지](/articles/keeping-your-account-and-data-secure/)”
