---
title: GitHub Enterprise ServerとGitHub Enterprise Cloudの間で自動ユーザライセンス同期を有効化する
intro: '{{ site.data.variables.product.product_location_enterprise }}を{{ site.data.variables.product.prodname_ghe_cloud }}に接続すると、{{ site.data.variables.product.prodname_ghe_server }}でユーザライセンス情報を{{ site.data.variables.product.prodname_dotcom_the_website }}上のEnterpriseアカウントにアップロードすることができます。'
permissions: '接続されている{{ site.data.variables.product.prodname_ghe_cloud }}のOrganizationあるいはEnterpriseアカウントの所有者でもある{{ site.data.variables.product.prodname_ghe_server }}のサイト管理者は、ユーザライセンスの自動同期を有効化できます。'
redirect_from:
  - /enterprise/admin/installation/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
versions:
  enterprise-server: '*'
---

### ライセンスの同期について

After you enable license synchronization, you'll be able to view license usage for your entire enterprise account, across {{ site.data.variables.product.prodname_ghe_server }} and {{ site.data.variables.product.prodname_ghe_cloud }}. {{ site.data.variables.product.prodname_github_connect }} syncs license between {{ site.data.variables.product.prodname_ghe_server }} and {{ site.data.variables.product.prodname_ghe_cloud }} weekly. For more information, see "[Managing your {{ site.data.variables.product.prodname_enterprise }} license](/enterprise/{{currentVersion}}/admin/installation/managing-your-github-enterprise-license)."

{{ site.data.variables.product.prodname_ghe_server }}ユーザライセンス情報を手動で{{ site.data.variables.product.prodname_ghe_cloud }}にアップロードすることもできます。 詳細は、「[{{ site.data.variables.product.prodname_ghe_server }}を{{ site.data.variables.product.prodname_ghe_cloud }}に接続する](/enterprise/{{ currentVersion }}/admin/guides/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)」を参照してください。

### ライセンス同期の有効化

{{ site.data.variables.product.product_location_enterprise }}でライセンス同期を有効化する前に、{{ site.data.variables.product.product_location_enterprise }}を{{ site.data.variables.product.prodname_dotcom_the_website }}に接続する必要があります。 詳細は、「[{{ site.data.variables.product.prodname_ghe_server }}を{{ site.data.variables.product.prodname_ghe_cloud }}に接続する](/enterprise/{{ currentVersion }}/admin/guides/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)」を参照してください。

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.business }}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
{{ site.data.reusables.enterprise-accounts.github-connect-tab }}
5. [Server can sync user license count and usage] で、ドロップダウンメニューほ使って [**Enabled**] を選択します。 ![自動ユーザライセンス同期を有効化するドロップダウンメニュー](/assets/images/enterprise/site-admin-settings/enable-user-license-drop-down.png)
