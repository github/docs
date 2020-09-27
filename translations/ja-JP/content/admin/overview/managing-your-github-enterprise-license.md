---
title: GitHub Enterprise ライセンスを管理する
intro: '{{ site.data.variables.product.prodname_enterprise }} ライセンスを表示、管理、および更新できます。'
redirect_from:
  - /enterprise/admin/installation/managing-your-github-enterprise-license
  - /enterprise/admin/categories/licenses/
  - /enterprise/admin/articles/license-files/
  - /enterprise/admin/installation/about-license-files/
  - /enterprise/admin/articles/downloading-your-license/
  - /enterprise/admin/installation/downloading-your-license/
  - /enterprise/admin/articles/upgrading-your-license/
  - /enterprise/admin/installation/updating-your-license/
  - /enterprise/admin/installation/managing-your-github-enterprise-server-license
  - /enterprise/admin/overview/managing-your-github-enterprise-license
versions:
  enterprise-server: '*'
---

### {{ site.data.variables.product.prodname_enterprise }}ライセンスについて

{{ site.data.variables.product.prodname_enterprise }}を購入または更新すると、アプリケーションを有効化するためのライセンスファイルが届きます。 ライセンスファイルには有効期限があり、{{ site.data.variables.product.prodname_enterprise }} に追加できるユーザライセンスの数を制御します。 {{ site.data.variables.product.prodname_enterprise }}をダウンロードしてインストールしたら、ライセンスファイルをアップロードして、使用するアプリケーションのロックを解除します。

{{ site.data.variables.product.prodname_enterprise }}ライセンスに含まれるユーザライセンスを、{{ site.data.variables.product.product_location_enterprise }}と{{ site.data.variables.product.prodname_ghe_cloud }}のEnterpriseアカウントのユーザーに割り当てることができます。 ユーザをいずれかの環境に追加すると、ライセンスが消費されます。 ユーザが両方の環境にアカウントを持っている場合、1 つのライセンスのみを使用するには、プライマリ {{ site.data.variables.product.prodname_enterprise }} メールアドレスが検証済みの {{ site.data.variables.product.prodname_ghe_cloud }} メールアドレスと同じである必要があります。 ライセンス数と使用状況を環境間で同期できます。

{{ site.data.variables.product.prodname_ghe_server }}ライセンスの有効期限が切れると、ウェブブラウザまたはGit経由で{{ site.data.variables.product.product_location_enterprise }}にアクセスすることはできなくなります。 必要な場合は、コマンドラインユーティリティを使用してすべてのデータをバックアップできます。 詳しくは、"[ アプライアンスでのバックアップの設定](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance)。"を参照してください。 ライセンスの更新についてご質問がある場合は、{{ site.data.variables.contact.contact_enterprise_sales }} にお問い合わせください。

### {{ site.data.variables.product.prodname_ghe_server }}に新しいライセンスをアップロードする

{{ site.data.variables.contact.contact_enterprise_sales }} から新しいライセンスを購入するか、既存のライセンスをアップグレードした後、新しいライセンスファイルをダウンロードし、そのファイルを {{ site.data.variables.product.prodname_ghe_server }} にアップロードして、新しいユーザライセンスのロックを解除する必要があります。

{{ site.data.variables.product.prodname_enterprise }} のユーザライセンスを更新または追加する場合は、{{ site.data.variables.contact.contact_enterprise_sales }} にお問い合わせください。 注文完了したら、新しいライセンスのファイルが直ちにダウンロード可能となります。

{{ site.data.reusables.enterprise-accounts.access-enterprise }}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
{{ site.data.reusables.enterprise-accounts.enterprise-licensing-tab }}
4. [Enterprise Server Instances] で、{% octicon "download" aria-label="The download icon" %} をクリックしてライセンスファイルをダウンロードします。 ![GitHub Enterprise Server ライセンスをダウンロードする](/assets/images/help/business-accounts/download-ghes-license.png)
5. {{ site.data.variables.product.prodname_ghe_server }} インスタンスにサイト管理者としてログインします。
{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.business }}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
{{ site.data.reusables.enterprise-accounts.license-tab }}
12. [Quick links] で [**Update license**] をクリックする。 ![ライセンス更新のリンク](/assets/images/enterprise/business-accounts/update-license-link.png)
13. ライセンスを選択するには、[**License file**] をクリックするか、ライセンスファイルを [**License file**] にドラッグします。 ![ライセンスファイルのアップロード](/assets/images/enterprise/management-console/upload-license.png)
14. [**Upload**] をクリックします。 ![アップグレードを開始](/assets/images/enterprise/management-console/begin-upload.png)

### ライセンス使用状況を表示する

{{ site.data.reusables.enterprise-accounts.access-enterprise }}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
{{ site.data.reusables.enterprise-accounts.enterprise-licensing-tab }}
4. 現在の {{ site.data.variables.product.prodname_enterprise }} ライセンスと、使用済みで利用可能なユーザライセンスを確認します。

### ユーザライセンスの使用状況を自動で{{ site.data.variables.product.prodname_ghe_cloud }}と同期する

{{ site.data.variables.product.prodname_github_connect }}を使用して、{{ site.data.variables.product.prodname_ghe_server }}と{{ site.data.variables.product.prodname_ghe_cloud }}の間でユーザライセンスの数と使用状況を自動で同期できます。 詳細は、「[{{ site.data.variables.product.prodname_ghe_server }}と{{ site.data.variables.product.prodname_ghe_cloud }}の間で自動ユーザライセンス同期を有効化する](/enterprise/{{currentVersion}}/admin/installation/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud)」を参照してください。

### {{ site.data.variables.product.prodname_ghe_server }} と {{ site.data.variables.product.prodname_ghe_cloud }} の間でユーザライセンスの使用状況を手動で同期する

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
10. [Enterprise Server Instances] の下で、[**Add server usage**] をクリックします。 ![GitHub Enterprise Serversの使用状況リンクをアップロードする](/assets/images/help/business-accounts/upload-ghe-server-usage-link.png)
11. {{ site.data.variables.product.prodname_ghe_server }}からダウンロードしたJSONファイルをアップロードします。 ![アップロードするファイルをドラッグアンドドロップまたは選択する](/assets/images/help/business-accounts/upload-ghe-server-usage-file.png)
