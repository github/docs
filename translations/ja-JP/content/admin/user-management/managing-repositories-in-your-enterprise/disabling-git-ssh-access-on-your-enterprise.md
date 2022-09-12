---
title: Enterprise で Git SSH アクセスを無効化する
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
intro: Enterprise 内の特定のリポジトリまたはすべてのリポジトリで、ユーザが SSH 経由で Git を使用できないようにすることができます。
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
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145116285'
---
## 特定のリポジトリへのGit SSHアクセスの無効化

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.repository-search %} {% data reusables.enterprise_site_admin_settings.click-repo %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
1. [Git SSH アクセス] でドロップダウン メニューを使用して、 **[無効]** をクリックします。
 ![[無効] オプションが選択された状態の [Git SSH アクセス] ドロップダウン メニュー](/assets/images/enterprise/site-admin-settings/git-ssh-access-repository-setting.png)

## ユーザもしくは組織が所有するすべてのリポジトリへのGit SSHアクセスの無効化

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user-or-org %} {% data reusables.enterprise_site_admin_settings.click-user-or-org %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
7. [Git SSH アクセス] でドロップダウン メニューを使用して、 **[無効]** をクリックします。 次に、 **[すべてのリポジトリに適用]** を選択します。
 ![[無効] オプションが選択された状態の [Git SSH アクセス] ドロップダウン メニュー](/assets/images/enterprise/site-admin-settings/git-ssh-access-organization-setting.png)

## Enterprise 内のすべてのリポジトリへの Git SSH アクセスを無効化する

{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
7. [Git SSH アクセス] でドロップダウン メニューを使用して、 **[無効]** をクリックします。 次に、 **[すべてのリポジトリに適用]** を選択します。
 ![[無効] オプションが選択された状態の [Git SSH アクセス] ドロップダウン メニュー](/assets/images/enterprise/site-admin-settings/git-ssh-access-appliance-setting.png)
