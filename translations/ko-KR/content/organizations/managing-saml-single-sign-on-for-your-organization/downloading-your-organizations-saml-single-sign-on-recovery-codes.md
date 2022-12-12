---
title: 조직의 SAML Single Sign-On 복구 코드 다운로드
intro: '조직 관리자는 조직의 ID 공급자가 서비스를 제공할 수 없는 경우에도 {% data variables.product.product_name %}에 액세스할 수 있도록 조직의 SAML Single Sign-On 복구 코드를 다운로드해야 합니다.'
redirect_from:
  - /articles/downloading-your-organization-s-saml-single-sign-on-recovery-codes
  - /articles/downloading-your-organizations-saml-single-sign-on-recovery-codes
  - /github/setting-up-and-managing-organizations-and-teams/downloading-your-organizations-saml-single-sign-on-recovery-codes
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Download SAML recovery codes
ms.openlocfilehash: 9b17e3e4fc20cc9eaedf59afe45e393054d7d8e5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145125668'
---
복구 코드는 공유하거나 배포해서는 안 됩니다. [LastPass](https://lastpass.com/) 또는 [1Password](https://1password.com/)와 같은 암호 관리자를 사용하여 저장할 것을 권장합니다.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
5. "SAML Single Sign-On"의 복구 코드 설명에서 **복구 코드 저장** 을 클릭합니다.
![복구 코드를 보고 저장하기 위한 링크](/assets/images/help/saml/saml_recovery_codes.png)
6. **다운로드**, **인쇄** 또는 **복사** 를 클릭하여 복구 코드를 저장합니다.
![복구 코드를 다운로드, 인쇄 또는 복사하기 위한 단추](/assets/images/help/saml/saml_recovery_code_options.png)

  {% note %}

  **참고:** 복구 코드는 IdP를 사용할 수 없을 경우 {% data variables.product.product_name %}(으)로 돌아가는 데 도움이 됩니다. 새 복구 코드를 생성하면 "Single Sign-On 복구 코드" 페이지에 표시되는 복구 코드가 자동으로 업데이트됩니다.

  {% endnote %}

7. 복구 코드를 사용하여 {% data variables.product.product_name %}에 대한 액세스 권한을 다시 얻은 후에는 복구 코드를 다시 사용할 수 없습니다. {% data variables.product.product_name %}에 대한 액세스는 Single Sign-On을 사용하여 로그인하라는 메시지가 표시되기 전에 24시간 동안만 사용할 수 있습니다.

## 추가 참고 자료

- "[SAML Single Sign-On을 사용하는 ID 및 액세스 관리 정보](/articles/about-identity-and-access-management-with-saml-single-sign-on)"
- "[ID 공급자를 사용할 수 없는 경우 조직에 액세스](/articles/accessing-your-organization-if-your-identity-provider-is-unavailable)"
