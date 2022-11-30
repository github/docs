---
title: Deaktivieren des Git-SSH-Zugriffs auf dein Unternehmen
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
intro: 'Du kannst verhindern, dass Personen Git über SSH für bestimmte oder alle Repositorys in deinem Unternehmen verwenden.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145104736'
---
## Git-SSH-Zugriff auf ein bestimmtes Repository deaktivieren

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.repository-search %} {% data reusables.enterprise_site_admin_settings.click-repo %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
1. Klicke unter „Git SSH access“ (Git-SSH-Zugriff) im Dropdownmenü auf **Deaktiviert**.
 ![Dropdownmenü „Git SSH access“ (Git-SSH-Zugriff) mit ausgewählter Option „Deaktiviert“](/assets/images/enterprise/site-admin-settings/git-ssh-access-repository-setting.png)

## Git-SSH-Zugriff auf alle einem Benutzer oder einer Organisation gehörenden Repositorys deaktivieren

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user-or-org %} {% data reusables.enterprise_site_admin_settings.click-user-or-org %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
7. Klicke unter „Git SSH access“ (Git-SSH-Zugriff) im Dropdownmenü auf **Deaktiviert**. Wähle dann **In allen Repositorys erzwingen** aus.
 ![Dropdownmenü „Git SSH access“ (Git-SSH-Zugriff) mit ausgewählter Option „Disabled“ (Deaktiviert)](/assets/images/enterprise/site-admin-settings/git-ssh-access-organization-setting.png)

## Deaktivieren des Git-SSH-Zugriffs auf alle Repositorys in deinem Unternehmen

{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
7. Klicke unter „Git SSH access“ (Git-SSH-Zugriff) im Dropdownmenü auf **Deaktiviert**. Wähle dann **In allen Repositorys erzwingen** aus.
 ![Dropdownmenü „Git SSH access“ (Git-SSH-Zugriff) mit ausgewählter Option „Disabled“ (Deaktiviert)](/assets/images/enterprise/site-admin-settings/git-ssh-access-appliance-setting.png)
