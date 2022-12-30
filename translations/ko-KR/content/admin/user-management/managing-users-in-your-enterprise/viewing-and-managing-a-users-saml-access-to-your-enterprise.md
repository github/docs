---
title: 엔터프라이즈에 대한 사용자의 SAML 액세스 보기 및 관리
intro: '엔터프라이즈 구성원의 연결된 ID, 활성 세션 및 권한 있는 자격 증명을 보고 해지할 수 있습니다.'
permissions: Enterprise owners can view and manage a member's SAML access to an organization.
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/viewing-and-managing-a-users-saml-access-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise
versions:
  ghec: '*'
topics:
  - Enterprise
shortTitle: View & manage SAML access
ms.openlocfilehash: 48ff1f60e4ab18086fca597d8128736846ffe8fd
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098280'
---
## 엔터프라이즈 계정에 대한 SAML 액세스 정보

엔터프라이즈 계정에 SAML Single Sign-On을 사용하도록 설정하면 각 엔터프라이즈 구성원이 IdP(ID 공급자)의 외부 ID를 {% 데이터 variables.location.product_location %}의 기존 계정에 연결할 수 있습니다. {% data reusables.saml.about-saml-access-enterprise-account %}

엔터프라이즈에서 {% data variables.product.prodname_emus %}을(를) 사용하는 경우 멤버는 IdP를 통해 프로비전된 계정을 사용합니다. {% 데이터 variables.enterprise.prodname_managed_users_caps %}은(는) {% 데이터 variables.product.product_name %}에서 기존 사용자 계정을 사용하지 않습니다. 자세한 내용은 “[{% data variables.product.prodname_emus %} 정보](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)”를 참조하세요.

## 연결된 ID 보기 및 취소

{% data reusables.saml.about-linked-identities %}

엔터프라이즈에서 {% data variables.product.prodname_emus %}을(를) 사용하는 경우 {% data variables.product.product_name %}에서 엔터프라이즈의 사용자 계정을 프로비전 해제하거나 제거할 수 없습니다. 엔터프라이즈의 {% 데이터 variables.enterprise.prodname_managed_users %}을(를) 변경하려면 IdP를 통해 변경해야 합니다.

{% data reusables.identity-and-permissions.revoking-identity-team-sync %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.saml.click-person-revoke-identity %} {% data reusables.saml.saml-identity-linked %} {% data reusables.saml.view-sso-identity %} {% data reusables.saml.revoke-sso-identity %} {% data reusables.saml.confirm-revoke-identity %}

## 활성 SAML 세션 보기 및 취소

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.saml.click-person-revoke-session %} {% data reusables.saml.saml-identity-linked %} {% data reusables.saml.view-saml-sessions %} {% data reusables.saml.revoke-saml-session %}

## 권한 있는 자격 증명 보기 및 취소

{% data reusables.saml.about-authorized-credentials %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.saml.click-person-revoke-credentials %} {% data reusables.saml.saml-identity-linked %} {% data reusables.saml.view-authorized-credentials %} {% data reusables.saml.revoke-authorized-credentials %} {% data reusables.saml.confirm-revoke-credentials %}

## 추가 참고 자료

- “[조직에 대한 구성원의 SAML 액세스 보기 및 관리](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)”
