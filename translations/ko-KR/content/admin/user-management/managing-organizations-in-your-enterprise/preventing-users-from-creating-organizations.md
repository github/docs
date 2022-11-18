---
title: 사용자가 조직을 만들지 못하도록 방지
redirect_from:
  - /enterprise/admin/articles/preventing-users-from-creating-organizations
  - /enterprise/admin/hidden/preventing-users-from-creating-organizations
  - /enterprise/admin/user-management/preventing-users-from-creating-organizations
  - /admin/user-management/preventing-users-from-creating-organizations
intro: 사용자가 엔터프라이즈에서 조직을 만들지 못하도록 방지할 수 있습니다.
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Organizations
  - Policies
shortTitle: Prevent organization creation
ms.openlocfilehash: 418a2ceb1f8c059764d84e4565d0719c38ed4d9b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145116300'
---
{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
4. “사용자가 조직을 만들 수 있음”에서 드롭다운 메뉴를 사용하여 **사용** 또는 **사용 안 함** 을 클릭합니다.
![사용자가 조직을 만들 수 있음 드롭다운](/assets/images/enterprise/site-admin-settings/users-create-orgs-dropdown.png)
