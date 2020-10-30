---
title: GitHub Enterprise Serverで脆弱性のある依存関係に対するアラートを有効化する
intro: '{% data variables.product.product_location_enterprise %}を{% data variables.product.prodname_ghe_cloud %}に接続して、インスタンスのリポジトリ内の脆弱性のある依存関係に対するセキュリティアラートを有効化することができます。'
redirect_from:
  - /enterprise/admin/installation/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
permissions: '接続された{% data variables.product.prodname_ghe_cloud %}のOrganizationあるいはEnterpriseアカウントの所有者でもある{% data variables.product.prodname_ghe_server %}のサイト管理者は、{% data variables.product.prodname_ghe_server %}上の脆弱性のある依存関係に対するセキュリティアラートを有効化できます。'
versions:
  enterprise-server: '*'
---

### About alerts for vulnerable dependencies on {% data variables.product.prodname_ghe_server %}

{% data reusables.repositories.tracks-vulnerabilities %} For more information, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)."

{% data variables.product.product_location_enterprise %}を{% data variables.product.prodname_dotcom_the_website %}に接続して、インスタンスに脆弱性データを同期させ、脆弱性のある依存関係を持つリポジトリ内にセキュリティアラートを生成します。

{% data variables.product.product_location_enterprise %}を {% data variables.product.prodname_dotcom_the_website %}に接続し、脆弱性のある依存関係に関するセキュリティアラートを有効化すると、{% data variables.product.prodname_dotcom_the_website %}からのあなたのインスタンスへ、脆弱性データが 1 時間に 1 回同期されます。 また、脆弱性データはいつでも手動で同期することができます。 {% data variables.product.product_location_enterprise %} からのコードまたはコードに関する情報は、{% data variables.product.prodname_dotcom_the_website %} にアップロードされません。

{% data variables.product.product_location_enterprise %} が脆弱性に関する情報を受信すると、影響を受けるバージョンの依存関係を使用するインスタンス内のリポジトリを識別し、それらのリポジトリ内の管理者アクセス権を持つコードオーナーおよび人にセキュリティアラートを送信します。 セキュリティアラートの受信方法をカスタマイズすることができます。 詳しい情報については、「[脆弱性のある依存関係に対するアラートについて](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies/#configuring-notifications-for-security-alerts)」を参照してください。

### {% data variables.product.prodname_ghe_server %}で脆弱性のある依存関係に対するアラートを有効化する

{% data variables.product.product_location_enterprise %} で脆弱性のある依存関係に対するセキュリティアラートを有効化する前に、{% data variables.product.product_location_enterprise %} を {% data variables.product.prodname_dotcom_the_website %} に接続する必要があります。 詳細は、「[{% data variables.product.prodname_ghe_server %}を{% data variables.product.prodname_ghe_cloud %}に接続する](/enterprise/{{ currentVersion }}/admin/guides/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)」を参照してください。

{% if currentVersion ver_gt "enterprise-server@2.20" %} We recommend configuring security alerts without notifications for the first few days to avoid an overload of emails. After a few days, you can enable notifications to receive security alerts as usual.{% endif %}

{% data reusables.enterprise_site_admin_settings.sign-in %}
2. 管理シェルで、{% data variables.product.product_location_enterprise %} の脆弱性のある依存関係に対するセキュリティアラートを有効化します。
 ``` shell
$ ghe-dep-graph-enable
```
3. {% data variables.product.prodname_ghe_server %}に戻ります。
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.github-connect-tab %}{% if currentVersion ver_gt "enterprise-server@2.20" %}
5. Under "Repositories can be scanned for vulnerabilities", use the drop-down menu and select **Enabled without notifications**. Optionally, to enable alerts with notifications, select **Enabled with notifications**.{% else %}
5. 「Repositories can be scanned for vulnerabilities」で、ドロップダウンメニューを使用して「**Enabled**」を選択します。
{% endif %}
   ![脆弱性に対するリポジトリのスキャンを有効化するドロップダウンメニュー](/assets/images/enterprise/site-admin-settings/enable-vulnerability-scanning-in-repositories.png)

### {% data variables.product.prodname_ghe_server %}で脆弱性のある依存関係を表示する

{% data variables.product.product_location_enterprise %}ですべての脆弱性を表示し、{% data variables.product.prodname_dotcom_the_website %}から脆弱性データを手動で同期して、リストを更新することができます。

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. 左サイドバーで [**Vulnerabilities**] をクリックします。 ![サイト管理サイドバーの [Vulnerabilities] タブ](/assets/images/enterprise/business-accounts/vulnerabilities-tab.png)
3. 脆弱性データを同期するには、[**Sync Vulnerabilities now**] をクリックします。 ![[Sync vulnerabilities now] ボタン](/assets/images/enterprise/site-admin-settings/sync-vulnerabilities-button.png)
