---
title: Syncing license usage between GitHub Enterprise Server and GitHub Enterprise Cloud
intro: 'You can sync license usage from {% data variables.product.prodname_ghe_server %} to {% data variables.product.prodname_ghe_cloud %} to view all license usage across your enterprise in one place and ensure that people with accounts in both environments only consume one user license.'
permissions: 'Enterprise owners can sync license usage between enterprise accounts on {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Sync license usage
---

## About synchronization of license usage

{% data reusables.enterprise-licensing.about-license-sync %}

If you allow {% data variables.product.product_location_enterprise %} to connect to your enterprise account on {% data variables.product.prodname_dotcom_the_website %}, you can sync license usage between the environments automatically. Automatic synchronization ensures that you see up-to-date license details on {% data variables.product.prodname_dotcom_the_website %}. If you don't want to allow {% data variables.product.product_location %} to connect to {% data variables.product.prodname_dotcom_the_website %}, you can manually sync license usage by uploading a file from {% data variables.product.product_location %} to {% data variables.product.prodname_dotcom_the_website %}.

For more information about licenses and usage for {% data variables.product.prodname_ghe_server %}, see "[About licenses for {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)."

## Automatically syncing license usage

{% data variables.product.prodname_github_connect %}を使用して、{% data variables.product.prodname_ghe_server %}と{% data variables.product.prodname_ghe_cloud %}の間でユーザライセンスの数と使用状況を自動で同期できます。 For more information, see "[Enabling automatic user license sync between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud){% ifversion ghec %}" in the {% data variables.product.prodname_ghe_server %} documentation.{% elsif ghes %}."{% endif %}

## Manually syncing license usage

{% data variables.product.prodname_ghe_server %}からJSONファイルをダウンロードして{% data variables.product.prodname_ghe_cloud %}にそのファイルをアップロードし、2つのデプロイメント間でユーザライセンスの使用状況を手動で同期できます。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
5. [Quick links] で、{% data variables.product.prodname_ghe_server %}上の現在のライセンスを含むファイルをダウンロードするには、[**Export license usage**] をクリックします。 ![ライセンス使用状況リンクをエクスポートする](/assets/images/enterprise/business-accounts/export-license-usage-link.png)
{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
8. 左のサイドバーで、** Enterprise licensing（Enterpriseライセンス）**をクリックしてください。 ![[Enterprise account settings] サイトバーの "Enterprise licensing"](/assets/images/help/enterprises/enterprise-licensing-tab.png)
{% data reusables.enterprise-accounts.license-tab %}
10. [Enterprise Server Instances] の下で、[**Add server usage**] をクリックします。 ![GitHub Enterprise Serversの使用状況リンクをアップロードする](/assets/images/help/business-accounts/upload-ghe-server-usage-link.png)
11. {% data variables.product.prodname_ghe_server %}からダウンロードしたJSONファイルをアップロードします。 ![アップロードするファイルをドラッグアンドドロップまたは選択する](/assets/images/help/business-accounts/upload-ghe-server-usage-file.png)
