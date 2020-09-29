---
title: Git のプッシュ制限を設定
intro: リポジトリ内のGitオブジェクトに対して最大サイズを強制できます。
redirect_from:
  - /enterprise/admin/guides/installation/git-server-settings/
  - /enterprise/admin/articles/setting-git-push-limits/
  - /enterprise/admin/installation/setting-git-push-limits
versions:
  enterprise-server: '*'
---

リポジトリのサイズを管理できるように留め、パフォーマンスの問題を避けるために、インスタンス上のリポジトリのファイルサイズに制限を設定できます。

デフォルトでは、リポジトリのアップロード制限を適用すると、100MB以上のファイルの追加やアップロードができなくなります。

{% if currentVersion ver_lt "enterprise-server@2.20" %}
{% tip %}

**注：**{% data variables.large_files.warning_size %}以上のサイズのファイルのみが、Gitプッシュの制限に照らし合わせて確認されます。 プッシュ制限をより小さくする必要がある場合は、{% data variables.contact.contact_ent_support %}までお問い合わせください。

{% endtip %}
{% endif %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.options-tab %}
4. [Repository upload limit] で、ドロップダウンメニューを使用して最大オブジェクトサイズをクリックします。 ![最大オブジェクトサイズのオプションを備えたドロップダウンメニュー](/assets/images/enterprise/site-admin-settings/repo-upload-limit-dropdown.png)
5. あるいは、{% data variables.product.product_location_enterprise %}上のすべてのリポジトリにアップロードの最大制限を適用するために、**Enforce on all repositories（すべてのリポジトリに適用）**を選択してください。 ![すべてのリポジトリにオブジェクトの最大サイズを適用するオプション](/assets/images/enterprise/site-admin-settings/all-repo-upload-limit-option.png)
