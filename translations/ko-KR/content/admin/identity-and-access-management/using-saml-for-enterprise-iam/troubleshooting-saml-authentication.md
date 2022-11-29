---
title: SAML 인증 문제 해결
shortTitle: Troubleshoot SAML SSO
intro: 'SAML SSO(Single Sign-On)를 사용하고 사용자가 {% data variables.location.product_location %}에 액세스하도록 인증할 수 없는 경우 문제를 해결할 수 있습니다.'
versions:
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - Security
  - SSO
  - Troubleshooting
ms.openlocfilehash: d15a3686045a4d570feb60cade2320f939cc0d86
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107255'
---
{% ifversion ghes %}
## SAML 인증 문제 정보

{% data variables.product.product_name %}은 _/var/log/github/auth.log_ 의 인증 로그에서 실패한 SAML 인증에 대한 오류 메시지를 기록합니다. 이 로그 파일에서 응답을 검토할 수 있으며 자세한 로깅을 구성할 수도 있습니다.

SAML 응답 요구 사항에 대한 자세한 내용은 "[SAML 구성 참조](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#saml-response-requirements)"를 참조하세요.

## SAML 디버깅 구성

모든 SAML 인증 시도에 대해 _/var/log/github/auth.log_ 에 자세한 디버그 로그를 작성하도록 {% data variables.product.product_name %}를 구성할 수 있습니다. 이 추가 출력을 통해 실패한 인증 시도 문제를 해결할 수 있습니다.

{% warning %}

**경고**:

- SAML 디버깅을 일시적으로만 사용하도록 설정하고 문제 해결을 완료한 직후 디버깅 사용을 중지하도록 설정합니다. 디버깅을 사용하도록 설정한 상태로 두면 로그 크기가 평소보다 훨씬 빠르게 증가하여 {% data variables.product.product_name %}의 성능이 저하될 수 있습니다.
- 프로덕션 환경에서 설정을 적용하기 전에 스테이징 환경에서 {% data variables.location.product_location %}에 대한 새 인증 설정을 테스트합니다. 자세한 내용은 “[스테이징 인스턴스 설정](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)”을 참조하세요.

{% endwarning %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.options-tab %}
1. “SAML 디버깅”에서 드롭다운을 선택하고 **사용** 을 클릭합니다.

   ![SAML 디버깅을 사용하도록 설정하는 드롭다운 스크린샷](/assets/images/enterprise/site-admin-settings/site-admin-saml-debugging-enabled.png)

1. SAML IdP를 통해 {% data variables.location.product_location %}에 로그인하려고 시도합니다.

1. {% data variables.location.product_location %}의 _/var/log/github/auth.log_ 에서 디버그 출력을 검토합니다.

1. 문제 해결을 마쳤으면 드롭다운을 선택하고 **사용 안 함** 을 클릭합니다.

   ![SAML 디버깅을 사용하지 않도록 설정하는 드롭다운 스크린샷](/assets/images/enterprise/site-admin-settings/site-admin-saml-debugging-disabled.png)

## _auth.log_ 의 응답 디코딩

_auth.log_ 의 일부 출력은 Base64로 인코딩될 수 있습니다. 관리 셸에 액세스하고 {% data variables.location.product_location %}의 유틸리티를 사용하여 `base64` 이러한 응답을 디코딩할 수 있습니다. 자세한 내용은 “[관리 셸(SSH) 액세스](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)”를 참조하세요.

```shell
$ base64 --decode ENCODED_OUTPUT
```

## 오류: “다른 사용자가 이미 계정을 소유하고 있습니다.”

사용자가 SAML 인증을 사용하여 처음으로 {% data variables.location.product_location %}에 로그인하면 {% data variables.product.product_name %}는 인스턴스에 사용자 계정을 만들고 SAML `NameID` 을 계정에 매핑합니다.

사용자가 다시 로그인하면 {% data variables.product.prodname_ghe_server %}에서 계정의 `NameID` 매핑을 IdP의 응답과 비교합니다. IdP 응답의 `NameID`가 {% data variables.product.product_name %}에서 사용자에게 기대하는 `NameID`와 더 이상 일치하지 않으면 로그인이 실패합니다. 다음과 같은 메시지가 표시됩니다.

> 다른 사용자가 이미 계정을 소유하고 있습니다. 관리자에게 인증 로그 확인을 요청하세요.

이 메시지는 일반적으로 IdP에서 사용자 이름 또는 메일 주소가 변경되었음을 나타냅니다. `NameID`{% data variables.product.prodname_ghe_server %}의 사용자 계정에 대한 매핑이 IdP의 사용자 `NameID`와 일치하는지 확인합니다. 자세한 내용은 “[사용자의 SAML 업데이트`NameID`](/admin/identity-and-access-management/using-saml-for-enterprise-iam/updating-a-users-saml-nameid)”를 참조하세요.

## 오류: SAML 응답의 수신자가 비어 있거나 유효하지 않음

이 `Recipient` {% data variables.location.product_location %}의 ACS URL과 일치하지 않으면 사용자가 인증을 시도할 때 다음 두 오류 메시지 중 하나가 인증 로그에 표시됩니다.

```
Recipient in the SAML response must not be blank.
```

```
Recipient in the SAML response was not valid.
```

IdP의 값을 `Recipient` {% data variables.location.product_location %}의 전체 ACS URL로 설정해야 합니다. 예: `https://ghe.corp.example.com/saml/consume`.

## 오류: "SAML 응답이 서명되지 않았거나 수정되었습니다."

IdP가 SAML 응답에 서명하지 않거나 서명이 내용과 일치하지 않으면 인증 로그에 다음 오류 메시지가 표시됩니다.

```
SAML Response is not signed or has been modified.
```

IdP에서 {% data variables.product.product_name %} 애플리케이션에 대해 서명된 어설션을 구성해야 합니다.

## 오류: “대상 그룹이 유효하지 않음” 또는 “어설션을 찾을 수 없음”

IdP의 응답에 `Audience` 값이 누락되었거나 잘못된 값인 경우 인증 로그에 다음 오류 메시지가 표시됩니다.

```
Audience is invalid. Audience attribute does not match https://<em>YOUR-INSTANCE-URL</em>
```

IdP `EntityId` 의 값을 `Audience` 인스턴스의 전체 URL인 {% data variables.location.product_location %}의 로 설정해야 합니다. 예들 들어 `https://ghe.corp.example.com`입니다.
{% endif %}

{% data reusables.saml.current-time-earlier-than-notbefore-condition %}

{% ifversion ghec %} {% data reusables.saml.authentication-loop %} {% endif %}
