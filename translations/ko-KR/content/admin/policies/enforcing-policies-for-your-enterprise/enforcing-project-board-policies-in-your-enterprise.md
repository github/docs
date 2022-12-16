---
title: 엔터프라이즈의 프로젝트 보드 정책 적용
intro: 엔터프라이즈 조직 내에서 프로젝트에 대한 정책을 적용하거나 각 조직에서 정책을 설정하도록 허용할 수 있습니다.
permissions: Enterprise owners can enforce policies for project boards in an enterprise.
redirect_from:
- /articles/enforcing-project-board-settings-for-organizations-in-your-business-account
- /articles/enforcing-project-board-policies-for-organizations-in-your-enterprise-account
- /articles/enforcing-project-board-policies-in-your-enterprise-account
- /github/setting-up-and-managing-your-enterprise-account/enforcing-project-board-policies-in-your-enterprise-account
- /github/setting-up-and-managing-your-enterprise/enforcing-project-board-policies-in-your-enterprise-account
- /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-project-board-policies-in-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
- Enterprise
- Policies
- Projects
shortTitle: Project board policies
ms.openlocfilehash: 5be8c2fd41b456a24b286cd1a4ab3ef493abf278
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145116380"
---
## 엔터프라이즈의 프로젝트 보드 정책 정보

{% data variables.product.product_name %}에서 엔터프라이즈 구성원이 프로젝트 보드 관리 방법을 제어하는 정책을 적용할 수 있습니다. 또한 조직 소유자가 프로젝트 보드에 대한 정책을 관리하도록 허용할 수 있습니다. 자세한 내용은 “[프로젝트 보드 정보](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)”를 참조하세요.

## 조직 전체 프로젝트 보드에 대한 정책 적용

엔터프라이즈가 소유한 모든 조직에서 조직 전체 프로젝트 보드를 사용하거나 사용하지 않도록 설정할 수 있으며 소유자가 조직 수준에서 설정을 관리하도록 허용할 수도 있습니다.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.projects-tab %}
4. “조직 프로젝트”에서 설정 변경에 대한 정보를 검토합니다. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. “조직 프로젝트”에서 드롭다운 메뉴를 사용하고 정책을 선택합니다.
  ![조직 프로젝트 보드 정책 옵션이 있는 드롭다운 메뉴](/assets/images/help/business-accounts/organization-projects-policy-drop-down.png)

## 리포지토리 프로젝트 보드에 대한 정책 적용

엔터프라이즈가 소유한 모든 조직에서 리포지토리 수준 프로젝트 보드를 사용하거나 사용하지 않도록 설정할 수 있으며, 소유자가 조직 수준에서 설정을 관리하도록 허용할 수도 있습니다.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.projects-tab %}
4. “리포지토리 프로젝트”에서 설정 변경에 대한 정보를 검토합니다. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. “리포지토리 프로젝트”에서 드롭다운 메뉴를 사용하고 정책을 선택합니다.
  ![리포지토리 프로젝트 보드 정책 옵션이 있는 드롭다운 메뉴](/assets/images/help/business-accounts/repository-projects-policy-drop-down.png)
