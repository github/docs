---
title: GitHub Enterprise ライセンスを管理する
intro: '{% data variables.product.prodname_enterprise %} ライセンスを表示、管理、および更新できます。'
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

### {% data variables.product.prodname_enterprise %}ライセンスについて

{% data variables.product.prodname_enterprise %}を購入または更新すると、アプリケーションを有効化するためのライセンスファイルが届きます。 ライセンスファイルには有効期限があり、{% data variables.product.prodname_enterprise %} に追加できるユーザライセンスの数を制御します。 {% data variables.product.prodname_enterprise %}をダウンロードしてインストールしたら、ライセンスファイルをアップロードして、使用するアプリケーションのロックを解除します。

{% data variables.product.prodname_enterprise %}ライセンスに含まれるユーザライセンスを、{% data variables.product.product_location_enterprise %}と{% data variables.product.prodname_ghe_cloud %}のEnterpriseアカウントのユーザーに割り当てることができます。 ユーザをいずれかの環境に追加すると、ライセンスが消費されます。 ユーザが両方の環境にアカウントを持っている場合、1 つのライセンスのみを使用するには、プライマリ {% data variables.product.prodname_enterprise %} メールアドレスが検証済みの {% data variables.product.prodname_ghe_cloud %} メールアドレスと同じである必要があります。 ライセンス数と使用状況を環境間で同期できます。

{% data variables.product.prodname_ghe_server %}ライセンスの有効期限が切れると、ウェブブラウザまたはGit経由で{% data variables.product.product_location_enterprise %}にアクセスすることはできなくなります。 必要な場合は、コマンドラインユーティリティを使用してすべてのデータをバックアップできます。 詳しくは、"[ アプライアンスでのバックアップの設定](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance)。"を参照してください。 ライセンスの更新についてご質問がある場合は、{% data variables.contact.contact_enterprise_sales %} にお問い合わせください。

### {% data variables.product.prodname_ghe_server %}に新しいライセンスをアップロードする

{% data variables.contact.contact_enterprise_sales %} から新しいライセンスを購入するか、既存のライセンスをアップグレードした後、新しいライセンスファイルをダウンロードし、そのファイルを {% data variables.product.prodname_ghe_server %} にアップロードして、新しいユーザライセンスのロックを解除する必要があります。

{% data variables.product.prodname_enterprise %} のユーザライセンスを更新または追加する場合は、{% data variables.contact.contact_enterprise_sales %} にお問い合わせください。 注文完了したら、新しいライセンスのファイルが直ちにダウンロード可能となります。

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
3. 左のサイドバーで、** Enterprise licensing（Enterpriseライセンス）**をクリックしてください。 ![[Enterprise account settings] サイトバーの "Enterprise licensing"](/assets/images/help/enterprises/enterprise-licensing-tab.png)
4. [Enterprise Server Instances] で、{% octicon "download" aria-label="The download icon" %} をクリックしてライセンスファイルをダウンロードします。 ![GitHub Enterprise Server ライセンスをダウンロードする](/assets/images/help/business-accounts/download-ghes-license.png)
5. サイト管理者として
{% data variables.product.prodname_ghe_server %} インスタンスにログインします。
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
12. [Quick links] で [**Update license**] をクリックする。 ![ライセンス更新のリンク](/assets/images/enterprise/business-accounts/update-license-link.png)
13. ライセンスを選択するには、[**License file**] をクリックするか、ライセンスファイルを [**License file**] にドラッグします。 ![ライセンスファイルのアップロード](/assets/images/enterprise/management-console/upload-license.png)
14. [**Upload**] をクリックします。 ![アップグレードを開始](/assets/images/enterprise/management-console/begin-upload.png)

### ライセンス使用状況を表示する

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
3. 左のサイドバーで、** Enterprise licensing（Enterpriseライセンス）**をクリックしてください。 ![[Enterprise account settings] サイトバーの "Enterprise licensing"](/assets/images/help/enterprises/enterprise-licensing-tab.png)
4. 現在の {% data variables.product.prodname_enterprise %} ライセンスと、使用済みで利用可能なユーザライセンスを確認します。

### ユーザライセンスの使用状況を自動で{% data variables.product.prodname_ghe_cloud %}と同期する

{% data variables.product.prodname_github_connect %} を使用して、{% data variables.product.prodname_ghe_server %} と {% data variables.product.prodname_ghe_cloud %} の間でユーザライセンスの数と使用状況を自動で同期できます。 詳しい情報については、「[{% data variables.product.prodname_ghe_server %} と {% data variables.product.prodname_ghe_cloud %} の間で自動ユーザライセンス同期を有効化する](/enterprise/{{currentVersion}}/admin/installation/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud)」を参照してください。

### {% data variables.product.prodname_ghe_server %} と {% data variables.product.prodname_ghe_cloud %} の間でユーザライセンスの使用状況を手動で同期する

{% data variables.product.prodname_ghe_server %} から JSON ファイルをダウンロードして {% data variables.product.prodname_ghe_cloud %} にそのファイルをアップロードし、2 つのデプロイメント間でユーザライセンスの使用状況を手動で同期できます。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
5. [Quick links] で、
{% data variables.product.prodname_ghe_server %} に現在のライセンス使用状況を含むファイルをダウンロードするには、[**Export license usage**] をクリックします。
  ![ライセンス使用状況リンクをエクスポートする](/assets/images/enterprise/business-accounts/export-license-usage-link.png)
{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
8. 左のサイドバーで、** Enterprise licensing（Enterpriseライセンス）**をクリックしてください。 ![[Enterprise account settings] サイトバーの "Enterprise licensing"](/assets/images/help/enterprises/enterprise-licensing-tab.png)
{% data reusables.enterprise-accounts.license-tab %}
10. [Enterprise Server Instances] の下で、[**Add server usage**] をクリックします。 ![GitHub Enterprise Serversの使用状況リンクをアップロードする](/assets/images/help/business-accounts/upload-ghe-server-usage-link.png)
11. {% data variables.product.prodname_ghe_server %}からダウンロードしたJSONファイルをアップロードします。 ![アップロードするファイルをドラッグアンドドロップまたは選択する](/assets/images/help/business-accounts/upload-ghe-server-usage-file.png)
