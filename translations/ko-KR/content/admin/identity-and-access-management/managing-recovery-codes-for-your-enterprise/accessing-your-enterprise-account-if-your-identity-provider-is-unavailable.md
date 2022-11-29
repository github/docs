---
title: ID 공급자를 사용할 수 없는 경우 엔터프라이즈 계정에 액세스
shortTitle: Access your enterprise account
intro: '복구 코드로 SSO(Single Sign-On)를 우회하여 ID 공급자를 사용할 수 없는 경우에도 {% data variables.product.product_name %}에 로그인할 수 있습니다.'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
permissions: Enterprise owners can use a recovery code to access an enterprise account.
ms.openlocfilehash: d13a4cd336e67ab62087530b00cad8fd6939d64b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578806'
---
인증 구성 오류 또는 IdP(ID 공급자) 문제로 인해 SSO를 사용할 수 없는 경우 복구 코드를 사용하여 엔터프라이즈 계정에 액세스할 수 있습니다. 

이러한 방식으로 엔터프라이즈 계정에 액세스하려면 이전에 엔터프라이즈에 대한 복구 코드를 다운로드하고 저장해야 합니다. 자세한 내용은 “[엔터프라이즈 계정의 Single Sign-On 복구 코드 다운로드](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-single-sign-on-recovery-codes)”를 참조하세요.

{% data reusables.saml.recovery-code-caveats %}

{% note %}

**참고:** 엔터프라이즈에서 {% data variables.product.prodname_emus %}를 사용하는 경우 복구 코드를 사용하려면 설치 사용자로 로그인해야 합니다.

{% endnote %}

{% data reusables.saml.recovery-code-access %}
