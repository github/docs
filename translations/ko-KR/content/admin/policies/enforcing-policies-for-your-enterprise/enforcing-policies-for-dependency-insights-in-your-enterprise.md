---
title: 엔터프라이즈에서 종속성 인사이트에 대한 정책 적용
intro: 엔터프라이즈 조직 내에서 종속성 인사이트에 대한 정책을 적용하거나 각 조직에서 정책을 설정하도록 허용할 수 있습니다.
permissions: Enterprise owners can enforce policies for dependency insights in an enterprise.
redirect_from:
  - /articles/enforcing-a-policy-on-dependency-insights
  - /articles/enforcing-a-policy-on-dependency-insights-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-a-policy-on-dependency-insights-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-a-policy-on-dependency-insights-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-a-policy-on-dependency-insights-in-your-enterprise-account
versions:
  ghec: '*'
type: how_to
topics:
  - Dependencies
  - Enterprise
  - Organizations
  - Policies
shortTitle: Policies for dependency insights
ms.openlocfilehash: 6862a5d1210eda7d9c14d77eabf21e7a9a5a25b4
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145112564'
---
## 엔터프라이즈의 종속성 인사이트에 대한 정책 정보

종속성 인사이트는 엔터프라이즈 조직 내의 리포지토리가 의존하는 모든 패키지를 표시합니다. 종속성 인사이트에는 보안 공지 및 라이선스에 대한 집계된 정보가 포함됩니다. 자세한 내용은 “[조직에 대한 인사이트 보기](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization)”를 참조하세요.

## 종속성 인사이트 표시 여부에 대한 정책 적용

엔터프라이즈가 소유한 모든 조직에서 조직 멤버가 종속성 인사이트를 볼 수 있는지 여부를 제어할 수 있습니다. 소유자가 조직 수준에서 설정을 관리하도록 허용할 수도 있습니다. 자세한 내용은 “[조직의 종속성 인사이트 표시 여부 변경](/organizations/managing-organization-settings/changing-the-visibility-of-your-organizations-dependency-insights)”을 참조하세요.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}
3. 왼쪽 사이드바에서 **조직** 을 클릭합니다.
  ![엔터프라이즈 사이드바의 조직 탭](/assets/images/help/business-accounts/settings-policies-org-tab.png)
4. “조직 정책”에서 설정 변경에 대한 정보를 검토합니다. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. “조직 정책”에서 드롭다운 메뉴를 사용하고 정책을 선택합니다.
  ![조직 정책 옵션이 있는 드롭다운 메뉴](/assets/images/help/business-accounts/organization-policy-drop-down.png)
