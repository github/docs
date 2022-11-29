---
title: Отключение доступа по протоколу SSH Git на предприятии
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
intro: Вы можете запретить пользователям использовать Git по протоколу SSH для некоторых или всех репозиториев в рамках предприятия.
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
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145116283'
---
## Отключение доступа по протоколу Git SSH к определенному репозиторию

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.repository-search %} {% data reusables.enterprise_site_admin_settings.click-repo %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
1. В разделе «Доступ по протоколу SSH Git» используйте раскрывающееся меню и нажмите кнопку **Отключено**.
 ![Раскрывающееся меню доступа по протоколу Git SSH с выбранным параметром «Отключено»](/assets/images/enterprise/site-admin-settings/git-ssh-access-repository-setting.png)

## Отключение доступа Git SSH ко всем репозиториям, принадлежащим пользователю или организации

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user-or-org %} {% data reusables.enterprise_site_admin_settings.click-user-or-org %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
7. В разделе «Доступ по протоколу SSH Git» используйте раскрывающееся меню и нажмите кнопку **Отключено**. Затем выберите **Применить ко всем репозиториям**.
 ![Раскрывающееся меню доступа по протоколу Git SSH с выбранным параметром «Отключено»](/assets/images/enterprise/site-admin-settings/git-ssh-access-organization-setting.png)

## Отключение доступа по протоколу Git SSH ко всем репозиториям в организации

{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
7. В разделе «Доступ по протоколу SSH Git» используйте раскрывающееся меню и нажмите кнопку **Отключено**. Затем выберите **Применить ко всем репозиториям**.
 ![Раскрывающееся меню доступа по протоколу Git SSH с выбранным параметром «Отключено»](/assets/images/enterprise/site-admin-settings/git-ssh-access-appliance-setting.png)
