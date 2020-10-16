---
title: GitHub Enterprise Serverで脆弱性のある依存関係に対するアラートを有効化する
intro: 'You can connect {% data variables.product.product_location_enterprise %} to {% data variables.product.prodname_ghe_cloud %} and enable {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_short %}{% else %}security{% endif %} alerts for vulnerable dependencies in repositories in your instance.'
redirect_from:
  - /enterprise/admin/installation/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
permissions: 'Site administrators for {% data variables.product.prodname_ghe_server %} who are also owners of the connected {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_short %}{% else %}security{% endif %} alerts for vulnerable dependencies on {% data variables.product.prodname_ghe_server %}.'
versions:
  enterprise-server: '*'
---

### {% data variables.product.prodname_ghe_server %} 上の脆弱性のある依存関係に対するアラートについて

{% data reusables.repositories.tracks-vulnerabilities %} 詳しい情報については、「[脆弱性のある依存関係に対するアラートについて](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)」を参照してください。

You can connect {% data variables.product.product_location_enterprise %} to {% data variables.product.prodname_dotcom_the_website %}, then sync vulnerability data to your instance and generate {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_short %}{% else %}security{% endif %} alerts in repositories with a vulnerable dependency.

After connecting {% data variables.product.product_location_enterprise %} to {% data variables.product.prodname_dotcom_the_website %} and enabling {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_short %}{% else %}security{% endif %} alerts for vulnerable dependencies, vulnerability data is synced from {% data variables.product.prodname_dotcom_the_website %} to your instance once every hour. また、脆弱性データはいつでも手動で同期することができます。 {% data variables.product.product_location_enterprise %} からのコードまたはコードに関する情報は、{% data variables.product.prodname_dotcom_the_website %} にアップロードされません。

{% if currentVersion ver_gt "enterprise-server@2.21" %}When {% data variables.product.product_location_enterprise %} receives information about a vulnerability, it will identify repositories in your instance that use the affected version of the dependency and send {% data variables.product.prodname_dependabot_short %} alerts to owners and people with admin access in those repositories. {% data variables.product.prodname_dependabot_short %} アラートを受け取る方法をカスタマイズできます。 詳しい情報については、「[脆弱性のある依存関係に対するアラートについて](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies/#configuring-notifications-for-github-dependabot-alerts)」を参照してください。
{% endif %}

{% if currentVersion ver_lt "enterprise-server@2.21" or currentVersion == "enterprise-server@2.21" %}When {% data variables.product.product_location_enterprise %} receives information about a vulnerability, it will identify repositories in your instance that use the affected version of the dependency and send security alerts to owners and people with admin access in those repositories. セキュリティアラートの受信方法をカスタマイズすることができます。 詳しい情報については、「[脆弱性のある依存関係に対するアラートについて](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies/#configuring-notifications-for-security-alerts)」を参照してください。
{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.21" %}
### {% data variables.product.prodname_ghe_server %} 上の脆弱性のある依存関係に対して {% data variables.product.prodname_dependabot_short %} アラートを有効化にする
{% else %}
### {% data variables.product.prodname_ghe_server %}で脆弱性のある依存関係に対するアラートを有効化する
{% endif %}

Before enabling {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_short %}{% else %}security{% endif %} alerts for vulnerable dependencies on {% data variables.product.product_location_enterprise %}, you must connect {% data variables.product.product_location_enterprise %} to {% data variables.product.prodname_dotcom_the_website %}. 詳細は、「[{% data variables.product.prodname_ghe_server %}を{% data variables.product.prodname_ghe_cloud %}に接続する](/enterprise/{{ currentVersion }}/admin/guides/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)」を参照してください。

{% if currentVersion ver_gt "enterprise-server@2.20" %}

{% if currentVersion ver_gt "enterprise-server@2.21" %}We recommend configuring {% data variables.product.prodname_dependabot_short %} alerts without notifications for the first few days to avoid an overload of emails. 数日後、通知を有効化すれば、通常どおり {% data variables.product.prodname_dependabot_short %} アラートを受信できます。{% endif %}

{% if currentVersion == "enterprise-server@2.21" %}We recommend configuring security alerts without notifications for the first few days to avoid an overload of emails. 数日後、通知を有効化すれば、通常どおりセキュリティアラートを受信できます。{% endif %}

{% endif %}

{% data reusables.enterprise_site_admin_settings.sign-in %}
1. In the administrative shell, enable the {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_short %}{% else %}security{% endif %} alerts for vulnerable dependencies on {% data variables.product.product_location_enterprise %}:
 ``` shell
$ ghe-dep-graph-enable
```
3. Return to
{% data variables.product.prodname_ghe_server %}.
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.github-connect-tab %}{% if currentVersion ver_gt "enterprise-server@2.20" %}
5. [Repositories can be scanned for vulnerabilities] で、ドロップダウンメニューを使用して、[**Enabled without notifications**] を選択します。 必要に応じて、通知を含むアラートを有効化にするには、[**Enabled with notifications**] を選択します。{% else %}
5. 「Repositories can be scanned for vulnerabilities」で、ドロップダウンメニューを使用して「**Enabled**」を選択します。
{% endif %}
   ![脆弱性に対するリポジトリのスキャンを有効化するドロップダウンメニュー](/assets/images/enterprise/site-admin-settings/enable-vulnerability-scanning-in-repositories.png)

### {% data variables.product.prodname_ghe_server %}で脆弱性のある依存関係を表示する

{% data variables.product.product_location_enterprise %}ですべての脆弱性を表示し、{% data variables.product.prodname_dotcom_the_website %}から脆弱性データを手動で同期して、リストを更新することができます。

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. 左サイドバーで [**Vulnerabilities**] をクリックします。 ![サイト管理サイドバーの [Vulnerabilities] タブ](/assets/images/enterprise/business-accounts/vulnerabilities-tab.png)
3. 脆弱性データを同期するには、[**Sync Vulnerabilities now**] をクリックします。 ![[Sync vulnerabilities now] ボタン](/assets/images/enterprise/site-admin-settings/sync-vulnerabilities-button.png)
