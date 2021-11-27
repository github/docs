---
title: チケットのサブミット
intro: 'You can submit a support ticket using {% ifversion ghes %}{% data variables.product.prodname_ghe_server %} {% data variables.enterprise.management_console %} or the support portal{% elsif ghae %}{% data variables.contact.ae_azure_portal %}{% endif %}.'
redirect_from:
  - /enterprise/admin/enterprise-support/submitting-a-ticket
  - /admin/enterprise-support/submitting-a-ticket
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Support
---

## チケットのサブミットについて

{% ifversion ghae %}

You can submit a ticket for support with {% data variables.product.prodname_ghe_managed %} from the {% data variables.contact.ae_azure_portal %}.

{% endif %}

チケットをサブミットする前に、{% data variables.contact.github_support %} のための情報を収集し、担当者を選択してください。 詳しい情報については[チケットのサブミットの準備](/enterprise/admin/guides/enterprise-support/preparing-to-submit-a-ticket)を参照してください。

{% ifversion ghes %}
サポートリクエストと、場合によっては Diagnostic 情報をサブミットした後、{% data variables.contact.github_support %} は Support Bundle のダウンロードと共有をお願いすることがあります。 詳細は「[{% data variables.contact.github_support %} にデータを提供する](/enterprise/admin/guides/enterprise-support/providing-data-to-github-support)」を参照してください。

## {% data variables.contact.enterprise_portal %} を使ってチケットをサブミットする

{% data reusables.support.zendesk-old-tickets %}

To submit a ticket about {% data variables.product.product_location_enterprise %}, you must be an owner, billing manager, or member with support entitlement. 詳しい情報については「[Enterpriseのサポート資格の管理](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)」を参照してください。

If you cannot sign in to your account on {% data variables.product.prodname_dotcom_the_website %} or do not have support entitlement, you can still submit a ticket by providing your license or a diagnostics file from your server.

1. {% data variables.contact.contact_support_portal %} に移動します。
{% data reusables.support.submit-a-ticket %}

## {% data variables.product.product_name %} {% data variables.enterprise.management_console %} を使ってチケットをサブミットする

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.type-management-console-password %}
{% data reusables.enterprise_management_console.support-link %}
5. サポートチケットにDiagnosticを含めたい場合には、"Diagnostics"の下の**Download diagnostic info（Diagnostic情報のダウンロード）**をクリックし、ファイルをローカルに保存してください。 このファイルは、後でサポートチケットに添付します。 ![Diagnostics 情報をダウンロードするボタン](/assets/images/enterprise/support/download-diagnostics-info-button.png)
6. To complete your ticket and display the {% data variables.contact.enterprise_portal %}, under "Open Support Request", click **New support request**. ![サポートリクエストをオープンするボタン](/assets/images/enterprise/management-console/open-support-request.png)
{% data reusables.support.submit-a-ticket %}

{% endif %}

{% ifversion ghae %}

## 必要な環境

To submit a ticket for {% data variables.product.prodname_ghe_managed %} in the {% data variables.contact.ae_azure_portal %}, you must provide the ID for your {% data variables.product.prodname_ghe_managed %} subscription in Azure to your Customer Success Account Manager (CSAM) at Microsoft.

## {% data variables.contact.ae_azure_portal %} を使ってチケットをサブミットする

法人のお客様は、{% data variables.contact.contact_ae_portal %} でサポートリクエストをサブミットできます。 政府機関のお客様は、[政府機関のお客様向けの Azure ポータル](https://portal.azure.us/#blade/Microsoft_Azure_Support/HelpAndSupportBlade)をご利用ください。 For more information, see [Create an Azure support request](https://docs.microsoft.com/azure/azure-portal/supportability/how-to-create-azure-support-request) in the Microsoft Docs.

## Troubleshooting problems in the {% data variables.contact.ae_azure_portal %}

{% data variables.product.company_short %} is unable to troubleshoot access and subscription issues in the Azure portal. For help with the Azure portal, contact your CSAM at Microsoft or review the following information.

- If you cannot sign into the Azure portal, see [Troubleshoot Azure subscription sign-in issues](https://docs.microsoft.com/en-US/azure/cost-management-billing/manage/troubleshoot-sign-in-issue) in the Microsoft Docs or [submit a request directly](https://support.microsoft.com/en-us/supportrequestform/84faec50-2cbc-9b8a-6dc1-9dc40bf69178).

- If you can sign into the Azure portal but you cannot submit a ticket for {% data variables.product.prodname_ghe_managed %}, review the prerequisites for submitting a ticket. For more information, see "[Prerequisites](#prerequisites)".

{% endif %}

## 参考リンク

- 「[{% data variables.contact.enterprise_support %} について](/enterprise/admin/guides/enterprise-support/about-github-enterprise-support)」{% ifversion ghes %}
- 「[{% data variables.product.prodname_ghe_server %} の {% data variables.contact.premium_support %} について](/enterprise/admin/guides/enterprise-support/about-github-premium-support-for-github-enterprise-server)」{% endif %}
