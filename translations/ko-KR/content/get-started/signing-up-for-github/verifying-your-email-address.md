---
title: 이메일 주소 확인
intro: '기본 메일 주소를 확인하면 보안이 강화되고, 암호를 잊어버렸을 때 {% data variables.product.prodname_dotcom %} 직원이 더 잘 지원할 수 있으며, {% data variables.product.prodname_dotcom %}에서 더 많은 기능에 액세스할 수 있습니다.'
redirect_from:
  - /articles/troubleshooting-email-verification
  - /articles/setting-up-email-verification
  - /articles/verifying-your-email-address
  - /github/getting-started-with-github/verifying-your-email-address
  - /github/getting-started-with-github/signing-up-for-github/verifying-your-email-address
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Verify your email address
ms.openlocfilehash: 32456b34fbb307fd45e474b3924935fb5519935a
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098438'
---
## 이메일 확인 정보

새 계정에 가입한 후 또는 새 이메일 주소를 추가할 때 이메일 주소를 확인할 수 있습니다. 메일 주소로 전송할 수 없거나 반송되는 경우 확인되지 않습니다.

이메일 주소를 확인하지 않으면 다음을 수행할 수 없습니다.
  - 리포지토리 만들기 또는 포크
  - 문제 만들기 또는 끌어오기 요청
  - 문제, 끌어오기 요청 또는 커밋에 대한 설명
  - {% data variables.product.prodname_oauth_app %} 애플리케이션에 권한 부여
  - {% 데이터 variables.product.pat_generic %}s 생성
  - 이메일 알림 받기
  - 별 리포지토리
  - 카드 추가를 포함하여 프로젝트 보드 만들기 또는 업데이트
  - gists 만들기 또는 업데이트
  - {% data variables.product.prodname_actions %} 만들기 또는 사용
  - {% data variables.product.prodname_sponsors %}로 개발자 스폰서

{% warning %}

**경고**:

- {% data reusables.user-settings.no-verification-disposable-emails %}
- {% data reusables.user-settings.verify-org-approved-email-domain %}

{% endwarning %}

## 이메일 주소 확인

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.emails %}
1. 이메일 주소에서 **Resend verification email**(확인 이메일 다시 보내기)을 클릭합니다.
  ![Resend verification email link(확인 이메일 링크 다시 보내기)](/assets/images/help/settings/email-verify-button.png)
4. {% data variables.product.prodname_dotcom %}에서 링크가 포함된 이메일을 보냅니다. 링크를 클릭하면 {% data variables.product.prodname_dotcom %} 대시보드로 이동되고 확인 배너가 표시됩니다.
  ![이메일이 확인되었는지 확인하는 배너](/assets/images/help/settings/email-verification-confirmation-banner.png)

## 이메일 확인 문제 해결

### 확인 이메일을 보낼 수 없음

{% data reusables.user-settings.no-verification-disposable-emails %}

### 확인 링크를 클릭한 후 오류 페이지

확인 링크는 24시간 후에 만료됩니다. 24시간 이내에 이메일을 확인하지 않으면 다른 이메일 확인 링크를 요청할 수 있습니다. 자세한 내용은 “[메일 주소 확인](/articles/verifying-your-email-address)”을 참조하세요.

24시간 이내에 확인 전자 메일의 링크를 클릭하고 오류 페이지로 이동한 경우 {% 데이터 variables.location.product_location %}에서 올바른 계정에 로그인했는지 확인해야 합니다.

1. {% 데이터 variables.location.product_location %}에 있는 개인 계정의 {% 데이터 variables.product.signout_link %}.
2. 브라우저를 종료하고 다시 시작합니다.
3. {% 데이터 variables.product.signin_link %}의 개인 계정에 대한 {% 데이터 variables.location.product_location %}.
4. 받은 이메일에서 확인 링크를 클릭합니다.

## 추가 참고 자료

- “[기본 메일 주소 변경](/articles/changing-your-primary-email-address)”
