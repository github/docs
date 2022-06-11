---
title: Enabling automatic user license sync for your enterprise
intro: 'You can manage license usage across your {% data variables.product.prodname_enterprise %} environments by automatically syncing user licenses from {% data variables.product.product_location %} to {% data variables.product.prodname_ghe_cloud %}.'
redirect_from:
  - /enterprise/admin/installation/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /enterprise/admin/configuration/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /admin/configuration/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
permissions: Enterprise owners can enable automatic user license synchronization.
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - Licensing
shortTitle: Automatic user license sync
---

## About automatic license synchronization

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

{% data reusables.enterprise-licensing.about-license-sync %} 詳しい情報については「[{% data variables.product.prodname_github_connect %}にちて](/admin/configuration/configuring-github-connect/about-github-connect#data-transmission-for-github-connect)」を参照してください。

If you enable automatic user license sync for your enterprise, {% data variables.product.prodname_github_connect %} will automatically synchronize license usage between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %} weekly.{% ifversion ghes > 3.4 %} You can also synchronize your license data at any time outside of the automatic weekly sync, by manually triggering a license sync job. For more information, see "[Triggering a license sync job](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud#triggering-a-license-sync-job)."{% endif %}

If you use multiple {% data variables.product.prodname_ghe_server %} instances, you can enable automatic license sync between each of your instances and the same organization or enterprise account on {% data variables.product.prodname_ghe_cloud %}.

{% data reusables.enterprise-licensing.view-consumed-licenses %}

{% data variables.product.prodname_ghe_server %}ユーザライセンス情報を手動で{% data variables.product.prodname_ghe_cloud %}にアップロードすることもできます。 For more information, see "[Syncing license usage between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)."

{% data reusables.enterprise-licensing.verified-domains-license-sync %}

## ライセンス同期の有効化

Before enabling license synchronization on {% data variables.product.product_location %}, you must enable {% data variables.product.prodname_github_connect %}. For more information, see "[Managing {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.github-connect-tab %}
1. [Server can sync user license count and usage] で、ドロップダウンメニューを使って [**Enabled**] を選択します。 ![自動ユーザライセンス同期を有効化するドロップダウンメニュー](/assets/images/enterprise/site-admin-settings/enable-user-license-drop-down.png)
