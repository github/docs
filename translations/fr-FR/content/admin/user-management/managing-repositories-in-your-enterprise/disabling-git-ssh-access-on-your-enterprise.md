---
title: Désactivation de l’accès SSH Git sur votre entreprise
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
intro: Vous pouvez empêcher les utilisateurs d’utiliser Git via SSH pour tout ou partie des dépôts de votre entreprise.
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145104737'
---
## Désactivation de l’accès SSH Git à un dépôt spécifique

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.repository-search %} {% data reusables.enterprise_site_admin_settings.click-repo %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
1. Sous « Accès SSH Git », utilisez le menu déroulant et cliquez sur **Désactivé**.
 ![Menu déroulant Accès SSH Git avec l’option Désactivé sélectionnée](/assets/images/enterprise/site-admin-settings/git-ssh-access-repository-setting.png)

## Désactivation de l’accès SSH Git à tous les dépôts appartenant à un utilisateur ou une organisation

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user-or-org %} {% data reusables.enterprise_site_admin_settings.click-user-or-org %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
7. Sous « Accès SSH Git », utilisez le menu déroulant et cliquez sur **Désactivé**. Ensuite, sélectionnez **Appliquer à tous les dépôts**.
 ![Menu déroulant Accès SSH Git avec l’option Désactivé sélectionnée](/assets/images/enterprise/site-admin-settings/git-ssh-access-organization-setting.png)

## Désactivation de l’accès SSH Git à tous les dépôts de votre entreprise

{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
7. Sous « Accès SSH Git », utilisez le menu déroulant et cliquez sur **Désactivé**. Ensuite, sélectionnez **Appliquer à tous les dépôts**.
 ![Menu déroulant Accès SSH Git avec l’option Désactivé sélectionnée](/assets/images/enterprise/site-admin-settings/git-ssh-access-appliance-setting.png)
