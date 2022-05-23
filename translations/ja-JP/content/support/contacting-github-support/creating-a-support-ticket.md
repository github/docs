---
title: Creating a support ticket
intro: 'You can use the {% ifversion ghae %}{% data variables.contact.ae_azure_portal %}{% else %}{% data variables.contact.support_portal %}{% endif %} to create a support ticket and speak to {% data variables.contact.github_support %}.'
shortTitle: Creating a ticket
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
redirect_from:
  - /enterprise/admin/enterprise-support/preparing-to-submit-a-ticket
  - /admin/enterprise-support/preparing-to-submit-a-ticket
  - /admin/enterprise-support/receiving-help-from-github-support/preparing-to-submit-a-ticket
  - /enterprise/admin/guides/enterprise-support/reaching-github-enterprise-support
  - /enterprise/admin/enterprise-support/reaching-github-support
  - /admin/enterprise-support/reaching-github-support
  - /admin/enterprise-support/receiving-help-from-github-support/reaching-github-support
  - /enterprise/admin/enterprise-support/submitting-a-ticket
  - /admin/enterprise-support/submitting-a-ticket
  - /admin/enterprise-support/receiving-help-from-github-support/submitting-a-ticket
  - /articles/submitting-a-ticket
  - /github/working-with-github-support/submitting-a-ticket
topics:
  - Support
---

{% ifversion fpt or ghec or ghes %}

## About support tickets

{% data reusables.support.zendesk-old-tickets %}

{% ifversion fpt %}
{% data reusables.support.free-and-paid-support %}
{% endif %}

{% ifversion ghes or ghec %}
{% data reusables.enterprise-accounts.support-entitlements %}
{% endif %}

{% ifversion ghes %}
You can create your ticket using the {% data variables.contact.support_portal %} or, if you would like to include diagnostics with your support ticket, you can use the GitHub Enterprise Server Management Console.
{% endif %}

After you create your ticket, you can view your ticket and the responses from {% data variables.contact.github_support %} on the {% data variables.contact.contact_landing_page_portal %}. For more information, see "[Viewing and updating support tickets](/support/contacting-github-support/viewing-and-updating-support-tickets)."

## What to include in your support ticket

Providing {% data variables.contact.github_support %} with everything they need to understand, locate, and reproduce an issue will allow for a faster resolution and less back-and-forth between yourself and the support team. To ensure {% data variables.contact.github_support %} can assist you, consider the following points when you write your ticket:

- {% data variables.contact.github_support %} による問題の追跡、優先順位付け、再現、調査を支援する情報の取得
- Include full URLs, repository names, and usernames wherever possible.
- 可能であれば問題を再現し、問題発生の手順を共有できるようにしてください。
- 問題の詳細な説明と期待される結果を提供できるように準備してください。
- 問題に関連するすべてのエラーメッセージをそのままコピーしてください。
- {% data variables.contact.github_support %} との進行中のやりとりがあれば、既存のチケット番号があるかを確認してください。
- Include relevant logs and attach any screenshots that demonstrate the issue.

{% ifversion ghes %}
## 担当者の選択

特にチケットの優先度が {% data variables.product.support_ticket_priority_urgent %} の場合、{% data variables.contact.github_support %} に問い合わせるユーザは、次のことを確認してください。

 - 社内のシステム、ツール、ポリシー、実務をよく知っていること。
 - {% data variables.product.product_name %} に熟練したユーザであること。
 - 問題のトラブルシューティングに必要なすべてのサービスへの完全なアクセスと権限を持っていること。
 - 推奨された変更をネットワーク及び該当する製品に行う権限を持っていること。

{% endif %}

## Creating a support ticket{% ifversion ghes %} using the support portal{% endif %}

1. {% data variables.contact.contact_support_portal %} に移動します。
{% data reusables.support.submit-a-ticket %}

{% ifversion ghes %}

## Creating a ticket using the GitHub Enterprise Server Management Console

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.type-management-console-password %}
{% data reusables.enterprise_management_console.support-link %}
1. サポートチケットにDiagnosticを含めたい場合には、"Diagnostics"の下の**Download diagnostic info（Diagnostic情報のダウンロード）**をクリックし、ファイルをローカルに保存してください。 このファイルは、後でサポートチケットに添付します。 ![Screenshot of button labelled "Download diagnostics info" on Management Console Support page.](/assets/images/enterprise/support/download-diagnostics-info-button.png)
1. To complete your ticket and display the {% data variables.contact.enterprise_portal %}, under "Open Support Request", click **New support request**. ![Screenshot of button labelled "New support request" on Management Console Support page.](/assets/images/enterprise/management-console/open-support-request.png)
{% data reusables.support.submit-a-ticket %}

{% endif %}

{% elsif ghae %}

You can submit a ticket for support with {% data variables.product.prodname_ghe_managed %} from the {% data variables.contact.ae_azure_portal %}.

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

- "[About GitHub Support](/support/learning-about-github-support/about-github-support)"
