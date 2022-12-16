---
title: 조직에 대한 구성원의 SAML 액세스 보기 및 관리
intro: '조직 구성원의 연결된 ID, 활성 세션 및 권한 있는 자격 증명을 보고 해지할 수 있습니다.'
permissions: Organization owners can view and manage a member's SAML access to an organization.
redirect_from:
  - /articles/viewing-and-revoking-organization-members-authorized-access-tokens
  - /github/setting-up-and-managing-organizations-and-teams/viewing-and-revoking-organization-members-authorized-access-tokens
  - /github/setting-up-and-managing-organizations-and-teams/viewing-and-managing-a-members-saml-access-to-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage SAML access
ms.openlocfilehash: f67a832170448db6ae6147345d5479db2591ce11
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099149'
---
## 조직에 대한 SAML 액세스 정보

조직에 SAML Single Sign-On을 사용하도록 설정하면 각 조직 구성원이 IdP(ID 공급자)의 외부 ID를 {% 데이터 variables.location.product_location %}의 기존 계정에 연결할 수 있습니다. {% data variables.product.product_name %}에서 조직의 리소스에 액세스하려면 구성원이 브라우저에 활성 SAML 세션이 있어야 합니다. API 또는 Git을 사용하여 조직의 리소스에 액세스하려면 구성원이 조직에서 사용하도록 권한이 부여된 {% 데이터 variables.product.pat_generic %} 또는 SSH 키를 사용해야 합니다.

동일한 페이지에서 각 멤버의 연결된 ID, 활성 세션 및 권한 있는 자격 증명을 보고 해지할 수 있습니다.

## 연결된 ID 보기 및 취소

{% data reusables.saml.about-linked-identities %} 

사용 가능한 경우 항목에 SCIM 데이터가 포함됩니다. 자세한 내용은 “[조직에 대한 SCIM 정보](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)”를 참조하세요.

{% warning %}

**경고:** SCIM을 사용하는 조직의 경우:
- {% data variables.product.product_name %}에서 연결된 사용자 ID를 취소하면 SAML 및 SCIM 메타데이터도 제거됩니다. 따라서 ID 공급자는 연결된 사용자 ID를 동기화하거나 프로비전을 해제할 수 없습니다.
- 관리자는 ID 공급자를 통해 연결된 ID를 취소해야 합니다.
- 연결된 ID를 취소하고 ID 공급자를 통해 다른 계정을 연결하려면 관리자가 사용자를 제거하고 {% data variables.product.product_name %} 애플리케이션에 다시 할당하면 됩니다. 자세한 내용은 ID 공급자의 설명서를 참조하세요.

{% endwarning %}


{% data reusables.identity-and-permissions.revoking-identity-team-sync %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.saml.click-person-revoke-identity %} {% data reusables.saml.saml-identity-linked %} {% data reusables.saml.view-sso-identity %} {% data reusables.saml.revoke-sso-identity %} {% data reusables.saml.confirm-revoke-identity %}

## 활성 SAML 세션 보기 및 취소

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.saml.click-person-revoke-session %} {% data reusables.saml.saml-identity-linked %} {% data reusables.saml.view-saml-sessions %} {% data reusables.saml.revoke-saml-session %}

## 권한 있는 자격 증명 보기 및 취소

{% data reusables.saml.about-authorized-credentials %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.saml.click-person-revoke-credentials %} {% data reusables.saml.saml-identity-linked %} {% data reusables.saml.view-authorized-credentials %} {% data reusables.saml.revoke-authorized-credentials %} {% data reusables.saml.confirm-revoke-credentials %}

## 추가 참고 자료

- "[SAML Single Sign-On을 사용하는 ID 및 액세스 관리 정보](/articles/about-identity-and-access-management-with-saml-single-sign-on)"{% ifversion ghec %}
- "[엔터프라이즈에 대한 사용자의 SAML 액세스 보기 및 관리](/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise)"{% endif %}
