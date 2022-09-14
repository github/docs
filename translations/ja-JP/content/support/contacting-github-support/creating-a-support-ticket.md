---
title: サポートチケットの作成
intro: '{% ifversion ghae %}{% data variables.contact.ae_azure_portal %}{% else %}{% data variables.contact.support_portal %}{% endif %} を使ってサポート チケットを作成し、{% data variables.contact.github_support %} とお話ください。'
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
ms.openlocfilehash: 4be0e3be4154354bbc8ea592c9c13af4c0e217b4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145140139'
---
{% ifversion fpt or ghec or ghes %}

## サポート チケットについて

{% data reusables.support.zendesk-old-tickets %}

{% ifversion fpt %} {% data reusables.support.free-and-paid-support %} {% endif %}

{% ifversion ghes or ghec %} {% data reusables.enterprise-accounts.support-entitlements %} {% endif %}

{% ifversion ghes %} サポート チケットを作成するには、{% data variables.contact.support_portal %} を使用するか、またはサポート チケットに診断を含める場合は GitHub Enterprise サーバー管理コンソールを使用します。
{% endif %}

チケットを作成すると、{% data variables.contact.contact_landing_page_portal %} の {% data variables.contact.github_support %} からチケットと応答を表示できます。 詳細については、「[サポート チケットの表示と更新](/support/contacting-github-support/viewing-and-updating-support-tickets)」を参照してください。 

## サポート チケットに含める内容

{% data variables.contact.github_support %} に問題を理解、特定、再現するために必要なすべてのものを提供することで、解決を高速化し、サポート チームとの間のやり取りを減らします。 {% data variables.contact.github_support %} から支援を受けられるように、チケットを作成する際には次の点を考慮してください。

- {% data variables.contact.github_support %} による問題の追跡、優先順位付け、再現、調査を支援する情報の取得
- 可能な限り、完全な URL、リポジトリ名、ユーザー名を含めます。
- 可能であれば問題を再現し、問題発生の手順を共有できるようにしてください。
- 問題の詳細な説明と期待される結果を提供できるように準備してください。
- 問題に関連するすべてのエラーメッセージをそのままコピーしてください。
- {% data variables.contact.github_support %} との進行中のやりとりがあれば、既存のチケット番号があるかを確認してください。
- 関連するログを含め、問題を示すスクリーンショットを添付します。

{% ifversion ghes %}
## 担当者の選択

特にチケットの優先度が {% data variables.product.support_ticket_priority_urgent %} の場合、{% data variables.contact.github_support %} に問い合わせるユーザは、次のことを確認してください。

 - 社内のシステム、ツール、ポリシー、実務をよく知っていること。
 - {% data variables.product.product_name %} の熟練したユーザーである。
 - 問題のトラブルシューティングに必要なすべてのサービスへの完全なアクセスと権限を持っていること。
 - 推奨された変更をネットワーク及び該当する製品に行う権限を持っていること。

{% endif %}

## {% ifversion ghes %}サポート ポータルを使用したサポート チケットの作成{% endif %}

1. {% data variables.contact.contact_support_portal %} に移動します。
{% data reusables.support.submit-a-ticket %}

{% ifversion ghes %}

## GitHub Enterprise サーバー管理コンソールを使用したチケットの作成

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.type-management-console-password %} {% data reusables.enterprise_management_console.support-link %}
1. サポート チケットに診断を含めたい場合には、[診断] の下の **[診断情報のダウンロード]** をクリックし、ファイルをローカルに保存します。 このファイルは、後でサポートチケットに添付します。
  ![管理コンソールの [サポート] ページの [診断情報のダウンロード] というラベルの付いたボタンのスクリーンショット。](/assets/images/enterprise/support/download-diagnostics-info-button.png)
1. チケットを完成させ、{% data variables.contact.enterprise_portal %} を表示するには、[サポートリクエストを開く] の下の **[新しいサポート リクエスト]** をクリックします。
  ![管理コンソールの [サポート] ページの [新しいサポート リクエスト] というラベルの付いたボタンのスクリーンショット。](/assets/images/enterprise/management-console/open-support-request.png)
{% data reusables.support.submit-a-ticket %}

{% endif %}

{% elsif ghae %}

サポートのチケットは、{% data variables.contact.ae_azure_portal %} から {% data variables.product.prodname_ghe_managed %} を使用して送信できます。

## 前提条件

{% data variables.contact.ae_azure_portal %} で {% data variables.product.prodname_ghe_managed %} のチケットを送信するには、ご自分の Azure の {% data variables.product.prodname_ghe_managed %} サブスクリプションの ID を Microsoft のカスタマー サクセス アカウント マネージャー (CSAM) に提供する必要があります。

## {% data variables.contact.ae_azure_portal %} を使ってチケットを送信する

法人のお客様は、{% data variables.contact.contact_ae_portal %} でサポートリクエストをサブミットできます。 政府機関のお客様は、[政府機関のお客様向けの Azure portal](https://portal.azure.us/#blade/Microsoft_Azure_Support/HelpAndSupportBlade) を使用する必要があります。 詳細については、Microsoft Docs の「[Azure サポート要求を作成する](https://docs.microsoft.com/azure/azure-portal/supportability/how-to-create-azure-support-request)」を参照してください。

## {% data variables.contact.ae_azure_portal %} の問題のトラブルシューティング

{% data variables.product.company_short %} は、Azure portal のアクセスとサブスクリプションの問題のトラブルシューティングを行うことができません。 Azure portal に関するヘルプについては、Microsoft の CSAM にお問い合わせいただくか、次の情報をご確認ください。

- Azure portal にサインインできない場合は、Microsoft Docs の「[Azure サブスクリプションのサインインに関する問題のトラブルシューティング](https://docs.microsoft.com/en-US/azure/cost-management-billing/manage/troubleshoot-sign-in-issue)」を参照するか[、リクエストを直接送信してください](https://support.microsoft.com/en-us/supportrequestform/84faec50-2cbc-9b8a-6dc1-9dc40bf69178)。

- Azure portal にサインインすることはできるものの、{% data variables.product.prodname_ghe_managed %} のチケットを送信できない場合は、チケットを送信するための前提条件をご確認ください。 詳細については、「[前提条件](#prerequisites)」を参照してください。

{% endif %}

## 参考資料

- "[GitHub サポートについて](/support/learning-about-github-support/about-github-support)"
