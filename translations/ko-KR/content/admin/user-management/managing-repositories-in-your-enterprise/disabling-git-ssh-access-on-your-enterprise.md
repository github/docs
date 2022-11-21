---
title: 엔터프라이즈에서 Git SSH 액세스 사용 안 함
redirect_from:
  - /enterprise/admin/hidden/disabling-ssh-access-for-a-user-account
  - /enterprise/admin/articles/disabling-ssh-access-for-a-user-account
  - /enterprise/admin/hidden/disabling-ssh-access-for-your-appliance
  - /enterprise/admin/articles/disabling-ssh-access-for-your-appliance
  - /enterprise/admin/hidden/disabling-ssh-access-for-an-organization
  - /enterprise/admin/articles/disabling-ssh-access-for-an-organization
  - /enterprise/admin/hidden/disabling-ssh-access-to-a-repository
  - /enterprise/admin/articles/disabling-ssh-access-to-a-repository
  - /enterprise/admin/guides/installation/disabling-git-ssh-access-on-github-enterprise
  - /enterprise/admin/installation/disabling-git-ssh-access-on-github-enterprise-server
  - /enterprise/admin/user-management/disabling-git-ssh-access-on-github-enterprise-server
  - /admin/user-management/disabling-git-ssh-access-on-github-enterprise-server
  - /admin/user-management/disabling-git-ssh-access-on-your-enterprise
intro: 사용자가 엔터프라이즈의 특정 또는 모든 리포지토리에 대해 SSH를 통해 Git을 사용하지 못하도록 할 수 있습니다.
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Security
  - SSH
shortTitle: Disable SSH for Git
ms.openlocfilehash: f7035afb11746e4596410724082d3d5e5bf288a1
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145116284'
---
## 특정 리포지토리에 대한 Git SSH 액세스 사용 안 함

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.repository-search %} {% data reusables.enterprise_site_admin_settings.click-repo %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
1. “Git SSH 액세스”에서 드롭다운 메뉴를 사용하고 **사용 안 함** 을 클릭합니다.
 ![사용하지 않음 옵션이 선택된 Git SSH 액세스 드롭다운 메뉴](/assets/images/enterprise/site-admin-settings/git-ssh-access-repository-setting.png)

## 사용자 또는 조직이 소유한 모든 리포지토리에 대한 Git SSH 액세스 사용 안 함

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user-or-org %} {% data reusables.enterprise_site_admin_settings.click-user-or-org %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
7. “Git SSH 액세스”에서 드롭다운 메뉴를 사용하고 **사용 안 함** 을 클릭합니다. 그런 다음 **모든 리포지토리에 적용** 을 선택합니다.
 ![사용하지 않음 옵션이 선택된 Git SSH 액세스 드롭다운 메뉴](/assets/images/enterprise/site-admin-settings/git-ssh-access-organization-setting.png)

## 엔터프라이즈의 모든 리포지토리에 Git SSH 액세스 사용 안 함

{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
7. “Git SSH 액세스”에서 드롭다운 메뉴를 사용하고 **사용 안 함** 을 클릭합니다. 그런 다음 **모든 리포지토리에 적용** 을 선택합니다.
 ![사용하지 않음 옵션이 선택된 Git SSH 액세스 드롭다운 메뉴](/assets/images/enterprise/site-admin-settings/git-ssh-access-appliance-setting.png)
