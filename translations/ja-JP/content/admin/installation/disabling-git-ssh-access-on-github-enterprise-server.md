---
title: GitHub Enterprise Server で Git SSH アクセスを無効化する
redirect_from:
  - /enterprise/admin/hidden/disabling-ssh-access-for-a-user-account/
  - /enterprise/admin/articles/disabling-ssh-access-for-a-user-account/
  - /enterprise/admin/hidden/disabling-ssh-access-for-your-appliance/
  - /enterprise/admin/articles/disabling-ssh-access-for-your-appliance/
  - /enterprise/admin/hidden/disabling-ssh-access-for-an-organization/
  - /enterprise/admin/articles/disabling-ssh-access-for-an-organization/
  - /enterprise/admin/hidden/disabling-ssh-access-to-a-repository/
  - /enterprise/admin/articles/disabling-ssh-access-to-a-repository/
  - /enterprise/admin/guides/installation/disabling-git-ssh-access-on-github-enterprise/
  - /enterprise/admin/installation/disabling-git-ssh-access-on-github-enterprise-server
intro: '{% data variables.product.product_location_enterprise %} で、特定のまたはすべてのリポジトリに対して、人々が Git over SSH を使えないようにすることができます。'
versions:
  enterprise-server: '*'
---

### 特定のリポジトリへのGit SSHアクセスの無効化

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
1. [Git SSH access] で、ドロップダウンメニューを使用して [**Disabled**] を選択します。 ![無効化オプションが選択されたGit SSHアクセスドロップダウンメニュー](/assets/images/enterprise/site-admin-settings/git-ssh-access-repository-setting.png)

### ユーザもしくは組織が所有するすべてのリポジトリへのGit SSHアクセスの無効化

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user-or-org %}
{% data reusables.enterprise_site_admin_settings.click-user-or-org %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
7. [Git SSH access] で、ドロップダウンメニューを使用して [**Disabled**] を選択します。 続いて、**Enforce on all repositories（すべてのリポジトリで強制）**を選択してください。 ![無効化オプションが選択されたGit SSHアクセスドロップダウンメニュー](/assets/images/enterprise/site-admin-settings/git-ssh-access-organization-setting.png)

### アプライアンス上のすべてのリポジトリへのGit SSHアクセスの無効化

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.options-tab %}
7. [Git SSH access] で、ドロップダウンメニューを使用して [**Disabled**] を選択します。 続いて、**Enforce on all repositories（すべてのリポジトリで強制）**を選択してください。 ![無効化オプションが選択されたGit SSHアクセスドロップダウンメニュー](/assets/images/enterprise/site-admin-settings/git-ssh-access-appliance-setting.png)
