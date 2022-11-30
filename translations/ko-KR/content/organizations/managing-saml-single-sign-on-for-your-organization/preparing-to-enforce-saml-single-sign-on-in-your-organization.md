---
title: 조직에서 SAML Single Sign-On을 적용하기 위한 준비
intro: 조직에서 SAML Single Sign-On을 적용하기 전에 조직의 멤버 자격을 확인하고 ID 공급자에 대한 연결 설정을 구성해야 합니다.
redirect_from:
  - /articles/preparing-to-enforce-saml-single-sign-on-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/preparing-to-enforce-saml-single-sign-on-in-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Prepare to enforce SAML SSO
ms.openlocfilehash: 6457b44f5a5debd005b8878b2f31f81c4341ab15
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145125607'
---
{% data reusables.saml.ghec-only %}

{% data reusables.saml.when-you-enforce %} 조직에서 SAML SSO를 적용하기 전에 조직 구성원 자격을 검토하고, SAML SSO를 활성화하고, 조직 구성원의 SAML 액세스를 검토해야 합니다. 자세한 내용은 다음 항목을 참조하십시오.

| 작업 | 자세한 정보 |
| :- | :- |
| 조직에서 구성원 추가 또는 제거 | <ul><li>"[조직에 조인하도록 사용자 초대](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)"</li><li>“[조직에서 멤버 제거](/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization)”</li></ul> |
| SAML SSO를 사용하도록 설정하여 조직에 IdP 연결 | <ul><li>"[ID 공급자를 조직에 연결](/organizations/managing-saml-single-sign-on-for-your-organization/connecting-your-identity-provider-to-your-organization)"</li><li>"[조직에서 SAML Single Sign-On 사용 및 테스트](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization)"</li></ul> |
| 조직 구성원이 로그인하고 해당 계정을 IdP와 연결해야 합니다. | <ul><li>“[조직에 대한 구성원의 SAML 액세스 보기 및 관리](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)”</li></ul> |

이러한 작업을 완료한 후에는 조직에 SAML SSO를 적용할 수 있습니다. 자세한 내용은 “[조직에 대한 SAML Single Sign-On 적용](/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization)”을 참조하세요.

{% data reusables.saml.outside-collaborators-exemption %}
