---
title: 엔터프라이즈의 ID 및 액세스 관리 문제 해결
shortTitle: Troubleshoot IAM
intro: 엔터프라이즈의 ID 및 액세스 관리에 대한 일반적인 이슈 및 솔루션을 검토합니다.
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - Security
  - SSO
  - Troubleshooting
ms.openlocfilehash: 7b8c42a1012e91268f4315d99934a4f38c52a529
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107535'
---
## 사용자 이름 충돌

{% ifversion ghec %}엔터프라이즈에서 {% data variables.product.prodname_emus %}를 사용하는 경우 {% endif %}{% data variables.product.product_name %}은(는) IdP(ID 공급자)가 제공하는 식별자를 정규화하여 {% data variables.product.prodname_dotcom %}에 각 사용자의 사용자 이름을 만듭니다. 여러 계정이 동일한 {% data variables.product.prodname_dotcom %} 사용자 이름으로 정규화된 경우 사용자 이름 충돌이 발생하고 첫 번째 사용자 계정만 만들어집니다. 자세한 내용은 "[외부 인증에 대한 사용자 이름 고려 사항](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)"을 참조하세요.

{% ifversion ghec %}
## 인증 구성을 전환할 때 발생하는 오류

SAML SSO 구성을 조직에서 엔터프라이즈 계정으로 변경하거나 {% data variables.product.prodname_emus %}에 대해 SAML에서 OIDC로 마이그레이션하는 등 다양한 인증 구성 간에 전환하는 동안 문제가 발생하는 경우 변경에 대한 모범 사례를 따르고 있는지 확인합니다.

- “[SAML 구성을 조직에서 엔터프라이즈 계정으로 전환](/admin/identity-and-access-management/using-saml-for-enterprise-iam/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)”
- "[SAML에서 OIDC로 마이그레이션](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/migrating-from-saml-to-oidc)"
- "[엔터프라이즈를 새 ID 공급자 또는 테넌트로 마이그레이션](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/migrating-your-enterprise-to-a-new-identity-provider-or-tenant)"

## SSO를 사용할 수 없는 경우 엔터프라이즈에 액세스

IdP(ID 공급자)에 구성 오류 또는 이슈가 발생하여 SSO를 사용할 수 없는 경우 복구 코드를 사용하여 엔터프라이즈에 액세스할 수 있습니다. 자세한 내용은 “[ID 공급자를 사용할 수 없는 경우 엔터프라이즈 계정에 액세스](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/accessing-your-enterprise-account-if-your-identity-provider-is-unavailable)”를 참조하세요.
{% endif %}

## SAML 인증 오류

사용자가 SAML을 사용하여 인증을 시도할 때 오류가 발생하는 경우 "[SAML 인증 문제 해결](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication)"을 참조하세요.

{% ifversion ghec %}
## 추가 참고 자료

- "[조직의 ID 및 액세스 관리 문제 해결](/organizations/managing-saml-single-sign-on-for-your-organization/troubleshooting-identity-and-access-management-for-your-organization)" {% endif %}
