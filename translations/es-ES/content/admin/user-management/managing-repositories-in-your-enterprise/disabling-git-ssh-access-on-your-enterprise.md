---
title: Inhabilitar el acceso por SSH a git en tu empresa
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
intro: Puedes prevenir que las personas utilicen git a través de SSH para ciertos repositorios o para todos ellos en tu empresa.
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145116282'
---
## Inhabilitar el acceso SSH de Git para un repositorio específico

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.repository-search %} {% data reusables.enterprise_site_admin_settings.click-repo %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
1. En "Acceso SSH a Git", use el menú desplegable y haga clic en **Deshabilitado**.
 ![Menú desplegable de acceso SSH de Git, con la opción Deshabilitado seleccionada](/assets/images/enterprise/site-admin-settings/git-ssh-access-repository-setting.png)

## Inhabilitar el acceso SSH de Git para todos los repositorios que le pertenecen a un usuario o a una organización

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user-or-org %} {% data reusables.enterprise_site_admin_settings.click-user-or-org %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
7. En "Acceso SSH a Git", use el menú desplegable y haga clic en **Deshabilitado**. Después, seleccione **Aplicar en todos los repositorios**.
 ![Menú desplegable de acceso SSH de Git, con la opción Deshabilitado seleccionada](/assets/images/enterprise/site-admin-settings/git-ssh-access-organization-setting.png)

## Inhabilitar el acceso a Git por SSH para todos los repositorios de tu empresa

{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
7. En "Acceso SSH a Git", use el menú desplegable y haga clic en **Deshabilitado**. Después, seleccione **Aplicar en todos los repositorios**.
 ![Menú desplegable de acceso SSH de Git, con la opción Deshabilitado seleccionada](/assets/images/enterprise/site-admin-settings/git-ssh-access-appliance-setting.png)
