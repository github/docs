---
title: Git Large File Storage を設定する
intro: '[{% data variables.large_files.product_name_short %} をインストール](/articles/installing-git-large-file-storage/) したら、それをリポジトリ内の大容量ファイルに関連付ける必要かあります。'
redirect_from:
  - /enterprise/admin/articles/configuring-git-large-file-storage-for-a-repository/
  - /enterprise/admin/articles/configuring-git-large-file-storage-for-every-repository-owned-by-a-user-account-or-organization/
  - /enterprise/admin/articles/configuring-git-large-file-storage-for-your-appliance/
  - /enterprise/admin/installation/configuring-git-large-file-storage
versions:
  enterprise-server: '*'
---

### {% data variables.large_files.product_name_long %}について

{% data reusables.enterprise_site_admin_settings.configuring-large-file-storage-short-description %} {% data variables.large_files.product_name_long %} は、単一のリポジトリ、個人または Organization のすべてのリポジトリ、あるいは {% data variables.product.product_location_enterprise %} 内のあらゆるリポジトリで使用できます。 アプライアンスに対して {% data variables.large_files.product_name_short %} を事前に有効にしなければ、特定のリポジトリまたは Organization に対して {% data variables.large_files.product_name_short %} を有効にすることはできません。

{% data reusables.large_files.storage_assets_location %}
{% data reusables.large_files.rejected_pushes %}

詳しい情報については"[{% data variables.large_files.product_name_long %}について](/articles/about-git-large-file-storage)"、"[大きなファイルのバージョニング](/enterprise/user/articles/versioning-large-files/)" 、[{% data variables.large_files.product_name_long %}プロジェクトサイト](https://git-lfs.github.com/)を参照してください。

### アプライアンス用に {% data variables.large_files.product_name_long %} を設定する

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.options-tab %}
4. [{% data variables.large_files.product_name_short %} access]で、ドロップダウンメニューを使用して [**Enabled**] または [**Disabled**] をクリックします。 ![Git LFSアクセス](/assets/images/enterprise/site-admin-settings/git-lfs-admin-center.png)

### 個々のリポジトリ用に {% data variables.large_files.product_name_long %} を設定する

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
{% data reusables.enterprise_site_admin_settings.git-lfs-toggle %}

### ユーザーアカウントまたは Organization が所有するすべてのリポジトリ用に {% data variables.large_files.product_name_long %} を設定する

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user-or-org %}
{% data reusables.enterprise_site_admin_settings.click-user-or-org %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
{% data reusables.enterprise_site_admin_settings.git-lfs-toggle %}
