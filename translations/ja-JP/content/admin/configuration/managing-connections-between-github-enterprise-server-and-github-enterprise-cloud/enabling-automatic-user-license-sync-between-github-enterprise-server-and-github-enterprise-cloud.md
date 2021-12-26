---
title: GitHub Enterprise ServerとGitHub Enterprise Cloudの間で自動ユーザライセンス同期を有効化する
intro: '{% data variables.product.product_location_enterprise %}を{% data variables.product.prodname_ghe_cloud %}に接続すると、{% data variables.product.prodname_ghe_server %}でユーザライセンス情報を{% data variables.product.prodname_dotcom_the_website %}上のEnterpriseアカウントにアップロードすることができます。'
redirect_from:
  - /enterprise/admin/installation/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /enterprise/admin/configuration/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /admin/configuration/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
permissions: 'Site administrators for {% data variables.product.prodname_ghe_server %} who are also owners of the connected {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable automatic user license synchronization.'
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - Licensing
---

### ライセンスの同期について

ライセンスの同期を有効にすると、{% data variables.product.prodname_ghe_server %} および {% data variables.product.prodname_ghe_cloud %} 全体で、Enterprise アカウント全体のライセンス使用状況を表示できるようになります。 {% data variables.product.prodname_github_connect %} は、{% data variables.product.prodname_ghe_server %} と {% data variables.product.prodname_ghe_cloud %} 間で毎週ライセンスを同期します。 詳しい情報については、「[{% data variables.product.prodname_enterprise %} ライセンスを管理する](/enterprise/{{currentVersion}}/admin/installation/managing-your-github-enterprise-license)」を参照してください。

{% data variables.product.prodname_ghe_server %}ユーザライセンス情報を手動で{% data variables.product.prodname_ghe_cloud %}にアップロードすることもできます。 詳細は、「[{% data variables.product.prodname_ghe_server %}を{% data variables.product.prodname_ghe_cloud %}に接続する](/enterprise/{{ currentVersion }}/admin/guides/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)」を参照してください。

### ライセンス同期の有効化

{% data variables.product.product_location_enterprise %}でライセンス同期を有効化する前に、{% data variables.product.product_location_enterprise %}を{% data variables.product.prodname_dotcom_the_website %}に接続する必要があります。 詳細は、「[{% data variables.product.prodname_ghe_server %}を{% data variables.product.prodname_ghe_cloud %}に接続する](/enterprise/{{ currentVersion }}/admin/guides/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)」を参照してください。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.github-connect-tab %}
5. [Server can sync user license count and usage] で、ドロップダウンメニューを使って [**Enabled**] を選択します。 ![自動ユーザライセンス同期を有効化するドロップダウンメニュー](/assets/images/enterprise/site-admin-settings/enable-user-license-drop-down.png)
