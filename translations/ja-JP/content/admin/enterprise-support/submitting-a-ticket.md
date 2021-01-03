---
title: チケットのサブミット
intro: 'You can submit a support ticket using the {% if enterpriseServerVersions contains currentVersion %}{% data variables.product.prodname_ghe_server %} {% data variables.enterprise.management_console %} or{% endif %} the support portal.'
redirect_from:
  - /enterprise/admin/enterprise-support/submitting-a-ticket
versions:
  enterprise-server: '*'
  github-ae: '*'
---

### チケットのサブミットについて

チケットをサブミットする前に、{% data variables.contact.github_support %} のための情報を収集し、担当者を選択してください。 詳しい情報については[チケットのサブミットの準備](/enterprise/admin/guides/enterprise-support/preparing-to-submit-a-ticket)を参照してください。

{% if enterpriseServerVersions contains currentVersion %}
After submitting your support request and optional diagnostic information,
{% data variables.contact.github_support %} may ask you to download and share a support bundle with us. 詳細は「[{% data variables.contact.github_support %} にデータを提供する](/enterprise/admin/guides/enterprise-support/providing-data-to-github-support)」を参照してください。

### {% data variables.contact.enterprise_portal %} を使ってチケットをサブミットする

1. {% data variables.contact.contact_enterprise_portal %} に移動します。
5. [**Submit a Ticket**] をクリックします。 ![Enterprise Support チームにチケットをサブミットする](/assets/images/enterprise/support/submit-ticket-button.png)
{% data reusables.enterprise_enterprise_support.submit-support-ticket-first-section %}
{% data reusables.enterprise_enterprise_support.submit-support-ticket-second-section %}

### Enterprise アカウントを使用してチケットをサブミットする

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
3. 左のサイドバーで、** Enterprise licensing（Enterpriseライセンス）**をクリックしてください。 ![[Enterprise account settings] サイトバーの "Enterprise licensing"](/assets/images/help/enterprises/enterprise-licensing-tab.png)
4. [{% data variables.product.prodname_enterprise %} Help] の下で、[**{% data variables.contact.enterprise_support %} Portal**] をクリックします。 ![Enterprise Support サイトに移動するリンク](/assets/images/enterprise/support/enterprise-support-link.png)
5. [**Submit a Ticket**] をクリックします。 ![Enterprise Support チームにチケットをサブミットする](/assets/images/enterprise/support/submit-ticket-button.png)
{% data reusables.enterprise_enterprise_support.submit-support-ticket-first-section %}
{% data reusables.enterprise_enterprise_support.submit-support-ticket-second-section %}

### {% data variables.product.product_name %} {% data variables.enterprise.management_console %} を使ってチケットをサブミットする

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.type-management-console-password %}
{% data reusables.enterprise_management_console.support-link %}
5. サポートチケットにDiagnosticを含めたい場合には、"Diagnostics"の下の**Download diagnostic info（Diagnostic情報のダウンロード）**をクリックし、ファイルをローカルに保存してください。 このファイルは、後でサポートチケットに添付します。 ![Diagnostics 情報をダウンロードするボタン](/assets/images/enterprise/support/download-diagnostics-info-button.png)
6. "Open Support Request（サポートリクエストのオープン）"の下で**New support request（新規サポートリクエスト）**をクリックします。 ![サポートリクエストをオープンするボタン](/assets/images/enterprise/management-console/open-support-request.png)
5. [**Submit a Ticket**] をクリックします。 ![Enterprise Support チームにチケットをサブミットする](/assets/images/enterprise/support/submit-ticket-button.png)
{% data reusables.enterprise_enterprise_support.submit-support-ticket-first-section %}
14. サポートチケットにDiagnosticsを含めるには、**Add file（ファイルの追加）**をクリックし、ダウンロードしたDiagnosticsファイルを添付します。 ![[Add file] ボタン](/assets/images/enterprise/support/support-ticket-add-file.png)
{% data reusables.enterprise_enterprise_support.submit-support-ticket-second-section %}
7. **Submit（サブミット）**をクリックしてください。

{% endif %}
{% if currentVersion == "github-ae@latest" %}
### {% data variables.contact.ae_azure_portal %} を使ってチケットをサブミットする

Commercial customers can submit a support request in the {% data variables.contact.contact_ae_portal %}. Government customers should use the [Azure portal for government customers](https://portal.azure.us/#blade/Microsoft_Azure_Support/HelpAndSupportBlade). For more information, see [Create an Azure support request](https://docs.microsoft.com/azure/azure-portal/supportability/how-to-create-azure-support-request) in the Microsoft documentation.

For urgent issues, to ensure a quick response, after you submit a ticket, please call the support hotline immediately. Your Technical Support Account Manager (TSAM) will provide you with the number to use in your onboarding session.

{% endif %}

### 参考リンク

- "[About {% data variables.contact.enterprise_support %}](/enterprise/admin/guides/enterprise-support/about-github-enterprise-support)"{% if enterpriseServerVersions contains currentVersion %}
- "[About {% data variables.contact.premium_support %} for {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/enterprise-support/about-github-premium-support-for-github-enterprise-server)."{% endif %}
