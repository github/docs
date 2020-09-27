---
title: Managing your GitHub Enterprise license
intro: '{{ site.data.variables.product.prodname_enterprise }} ライセンスを表示、管理、および更新できます。'
redirect_from:
  - /enterprise/admin/categories/licenses/
  - /enterprise/admin/articles/license-files/
  - /enterprise/admin/installation/about-license-files/
  - /enterprise/admin/articles/downloading-your-license/
  - /enterprise/admin/installation/downloading-your-license/
  - /enterprise/admin/articles/upgrading-your-license/
  - /enterprise/admin/installation/updating-your-license/
  - /enterprise/admin/installation/managing-your-github-enterprise-server-license
  - /enterprise/admin/installation/managing-your-github-enterprise-license
versions:
  enterprise-server: '*'
---

### {{ site.data.variables.product.prodname_enterprise }}ライセンスについて

{{ site.data.variables.product.prodname_enterprise }}を購入または更新すると、アプリケーションを有効化するためのライセンスファイルが届きます。 A license file has an expiration date and controls the number of user licenses you can add to {{ site.data.variables.product.prodname_enterprise }}. {{ site.data.variables.product.prodname_enterprise }}をダウンロードしてインストールしたら、ライセンスファイルをアップロードして、使用するアプリケーションのロックを解除します。

{{ site.data.variables.product.prodname_enterprise }}ライセンスに含まれるユーザライセンスを、{{ site.data.variables.product.product_location_enterprise }}と{{ site.data.variables.product.prodname_ghe_cloud }}のEnterpriseアカウントのユーザーに割り当てることができます。 ユーザをいずれかの環境に追加すると、ライセンスが消費されます。 If a user has accounts in both environments, to consume only one license, their primary {{ site.data.variables.product.prodname_enterprise }} email address must be the same as their verified {{ site.data.variables.product.prodname_ghe_cloud }} email address. You can sync license count and usage between the environments.

{{ site.data.variables.product.prodname_ghe_server }}ライセンスの有効期限が切れると、ウェブブラウザまたはGit経由で{{ site.data.variables.product.product_location_enterprise }}にアクセスすることはできなくなります。 必要な場合は、コマンドラインユーティリティを使用してすべてのデータをバックアップできます。 詳しくは、"[ アプライアンスでのバックアップの設定](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance)。"を参照してください。 If you have any questions about renewing your license, contact {{ site.data.variables.contact.contact_enterprise_sales }}.

### {{ site.data.variables.product.prodname_ghe_server }}に新しいライセンスをアップロードする

After you purchase a new license or upgrade an existing license from {{ site.data.variables.contact.contact_enterprise_sales }}, you must download your new license file, then upload the file to {{ site.data.variables.product.prodname_ghe_server }} to unlock your new user licenses.

If you'd like to renew or add user licenses to {{ site.data.variables.product.prodname_enterprise }}, contact {{ site.data.variables.contact.contact_enterprise_sales }}. 注文完了したら、新しいライセンスのファイルが直ちにダウンロード可能となります。

{{ site.data.reusables.enterprise-accounts.access-enterprise }}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
{{ site.data.reusables.enterprise-accounts.enterprise-licensing-tab }}
4. Under "Enterprise Server Instances", click {% octicon "download" aria-label="The download icon" %} to download your license file. ![Download GitHub Enterprise Server license](/assets/images/help/business-accounts/download-ghes-license.png)
5. Log into your {{ site.data.variables.product.prodname_ghe_server }} instance as a site administrator.
{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.business }}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
{{ site.data.reusables.enterprise-accounts.license-tab }}
12. [Quick links] で [**Update license**] をクリックする。 ![ライセンス更新のリンク](/assets/images/enterprise/business-accounts/update-license-link.png)
13. To select your license, click **License file**, or drag your license file onto **License file**. ![ライセンスファイルのアップロード](/assets/images/enterprise/management-console/upload-license.png)
14. Click **Upload**. ![アップグレードを開始](/assets/images/enterprise/management-console/begin-upload.png)

### ライセンス使用状況を表示する

{{ site.data.reusables.enterprise-accounts.access-enterprise }}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
{{ site.data.reusables.enterprise-accounts.enterprise-licensing-tab }}
4. Review your current {{ site.data.variables.product.prodname_enterprise }} license, as well as consumed and available user licenses.

### ユーザライセンスの使用状況を自動で{{ site.data.variables.product.prodname_ghe_cloud }}と同期する

{{ site.data.variables.product.prodname_github_connect }}を使用して、{{ site.data.variables.product.prodname_ghe_server }}と{{ site.data.variables.product.prodname_ghe_cloud }}の間でユーザライセンスの数と使用状況を自動で同期できます。 詳細は、「[{{ site.data.variables.product.prodname_ghe_server }}と{{ site.data.variables.product.prodname_ghe_cloud }}の間で自動ユーザライセンス同期を有効化する](/enterprise/{{currentVersion}}/admin/installation/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud)」を参照してください。

### Manually syncing user license usage between {{ site.data.variables.product.prodname_ghe_server }} and {{ site.data.variables.product.prodname_ghe_cloud }}

{{ site.data.variables.product.prodname_ghe_server }}からJSONファイルをダウンロードして{{ site.data.variables.product.prodname_ghe_cloud }}にそのファイルをアップロードし、2つのデプロイメント間でユーザライセンスの使用状況を手動で同期できます。

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.business }}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
{{ site.data.reusables.enterprise-accounts.license-tab }}
5. [Quick links] で、{{ site.data.variables.product.prodname_ghe_server }}上の現在のライセンスを含むファイルをダウンロードするには、[**Export license usage**] をクリックします。 ![ライセンス使用状況リンクをエクスポートする](/assets/images/enterprise/business-accounts/export-license-usage-link.png)
6. {{ site.data.variables.product.prodname_ghe_cloud }}に移動します。
{{ site.data.reusables.enterprise-accounts.access-enterprise }}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
{{ site.data.reusables.enterprise-accounts.enterprise-licensing-tab }}
10. Under "Enterprise Server Instances", click **Add server usage**. ![GitHub Enterprise Serversの使用状況リンクをアップロードする](/assets/images/help/business-accounts/upload-ghe-server-usage-link.png)
11. {{ site.data.variables.product.prodname_ghe_server }}からダウンロードしたJSONファイルをアップロードします。 ![アップロードするファイルをドラッグアンドドロップまたは選択する](/assets/images/help/business-accounts/upload-ghe-server-usage-file.png)
