---
title: 조직 내 사용자에 대한 계정을 만들 수 있나요?
intro: 만든 조직에 사용자를 추가할 수 있지만 다른 사용자를 대신하여 개인 계정을 만들 수는 없습니다.
redirect_from:
  - /articles/can-i-create-accounts-for-those-in-my-organization
  - /articles/can-i-create-accounts-for-people-in-my-organization
  - /github/setting-up-and-managing-organizations-and-teams/can-i-create-accounts-for-people-in-my-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Create accounts for people
ms.openlocfilehash: 9ddbb857d86a3cada3f11a20a3ed1fab7bb263b8
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145109828'
---
## 개인 계정 정보

개인 계정에 로그인하여 조직에 액세스하기 때문에 각 팀 구성원은 자신의 개인 계정을 만들어야 합니다. 조직에 추가하려는 각 사용자의 사용자 이름이 있으면 사용자를 팀에 추가할 수 있습니다.

{% ifversion fpt or ghec %} {% ifversion fpt %}Organizations that use {% data variables.product.prodname_ghe_cloud %}{% else %}You{% endif %}을(를) 사용하는 조직은 SAML Single Sign-On을 사용하여 IdP(ID 공급자)를 통해 개인 계정이 가지고 있는 조직의 리소스에 대한 액세스 권한을 중앙에서 관리할 수 있습니다. 자세한 내용은 {% data variables.product.prodname_ghe_cloud %} 설명서에서 “[SAML Single Sign-On을 통한 ID 및 액세스 관리 정보](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on){% ifversion fpt %}”를 참조하세요.{% else %}.”{% endif %}

{% data variables.product.prodname_emus %}을(를) 고려할 수도 있습니다. {% data reusables.enterprise-accounts.emu-short-summary %} {% endif %}

## 조직에 사용자 추가

1. [개인 계정을 만들도록](/articles/signing-up-for-a-new-github-account) 각 사용자 지침을 제공합니다.
2. 조직 구성원 자격을 부여하려는 각 사용자의 사용자 이름을 요청합니다.
3. 조직에 [가입할 새 개인 계정을 초대](/articles/inviting-users-to-join-your-organization)합니다. [조직 역할](/articles/permission-levels-for-an-organization) 및 [리포지토리 권한](/articles/repository-permission-levels-for-an-organization)을 사용하여 각 계정의 액세스를 제한합니다.
