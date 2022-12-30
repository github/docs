---
title: 엔터프라이즈가 소유한 조직 내 역할 관리
intro: 엔터프라이즈가 소유한 모든 조직의 구성원 자격을 관리하고 조직 내 역할을 변경할 수 있습니다.
permissions: Enterprise owners can manage their role in an organization owned by the enterprise.
versions:
  feature: enterprise-owner-join-org
type: how_to
topics:
  - Administrator
  - Enterprise
  - Organizations
shortTitle: Manage your organization roles
ms.openlocfilehash: e7a95602fe103dcbccb80bc2dfec6a67f8b4b312
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884239'
---
## 역할 관리 정보

엔터프라이즈가 소유한 조직에 멤버 또는 조직 소유자로 가입하도록 선택하거나, 조직 내 역할을 변경하거나, 조직을 나갈 수 있습니다.

{% ifversion ghec %} {% warning %}

**경고**: 조직에서 SCIM을 사용하여 사용자를 프로비저닝하는 경우 이런 방식으로 조직에 가입하면 의도하지 않은 결과가 발생할 수 있습니다. 자세한 내용은 “[조직에 대한 SCIM 정보](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)”를 참조하세요.

{% endwarning %} {% endif %}

조직에서 다른 사용자의 역할 관리에 대한 자세한 내용은 “[조직의 멤버 자격 관리](/organizations/managing-membership-in-your-organization)” 및 “[역할을 사용하여 조직에 대한 사용자 액세스 관리](/organizations/managing-peoples-access-to-your-organization-with-roles)”를 참조하세요.

## 엔터프라이즈 설정을 사용하여 역할 관리

엔터프라이즈가 소유한 조직에 가입한 다음, 엔터프라이즈 계정 설정에서 직접 조직 내 역할을 관리할 수 있습니다.

{% ifversion ghec %}

조직에서 SAML SSO(Single Sign-On)를 적용하는 경우에는 엔터프라이즈 설정을 사용하여 조직에 가입할 수 없습니다. 대신 해당 조직의 IdP(ID 공급자)를 사용하여 조직에 가입해야 합니다. 그런 다음, 엔터프라이즈 설정에서 역할을 관리할 수 있습니다. 자세한 내용은 “[SAML SSO를 적용하는 조직 가입](#joining-an-organization-that-enforces-saml-sso)”을 참조하세요.

{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
1. **조직** 탭에서 역할을 관리할 조직 오른쪽에 있는 {% octicon "gear" aria-label="The gear icon" %} 드롭다운 메뉴를 선택하고 수행할 작업을 클릭합니다.

   ![조직의 기어 아이콘 드롭다운 메뉴 스크린샷](/assets/images/help/business-accounts/change-role-in-org.png)

{% ifversion ghec %}

## SAML SSO를 적용하는 조직 가입

조직에서 SAML SSO를 적용하는 경우에는 엔터프라이즈 설정을 사용하여 조직에 가입할 수 없습니다. 대신 해당 조직의 IdP(ID 공급자)를 사용하여 조직에 가입해야 합니다.

1. 조직에서 사용하는 {% data variables.product.prodname_ghe_cloud %}용 애플리케이션에 대한 액세스 권한이 IdP에서 할당되어야 합니다. IdP를 직접 구성할 수 없는 경우 IdP 관리자에게 문의하세요.
1. SAML SSO를 사용하여 조직에 인증합니다.

   - 조직에서 SCIM을 사용하는 경우 SCIM 통합에서 생성되는 조직 초대를 수락합니다.
   - 조직에서 SCIM을 사용하지 않는 경우 ORGANIZATION을 조직 이름으로 바꾸어 다음 URL을 방문한 다음, 프롬프트에 따라 인증합니다.

    `https://github.com/orgs/ORGANIZATION/sso`

조직에 가입한 후에는 엔터프라이즈 설정을 사용하여 조직 내 역할을 관리할 수 있습니다(예: 조직 소유자 되기). 자세한 내용은 “[엔터프라이즈 설정을 사용하여 역할 관리](#managing-your-role-with-the-enterprise-settings)”를 참조하세요.

{% endif %}
