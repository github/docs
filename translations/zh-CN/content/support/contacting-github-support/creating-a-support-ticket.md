---
title: 创建支持工单
intro: '可以使用 {% ifversion ghae %}{% data variables.contact.ae_azure_portal %}{% else %}{% data variables.contact.support_portal %}{% endif %} 来创建支持票证，并与 {% data variables.contact.github_support %} 对话。'
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
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145130226'
---
{% ifversion fpt or ghec or ghes %}

## 关于支持工单

{% data reusables.support.zendesk-old-tickets %}

{% ifversion fpt %} {% data reusables.support.free-and-paid-support %} {% endif %}

{% ifversion ghes or ghec %} {% data reusables.enterprise-accounts.support-entitlements %} {% endif %}

{% ifversion ghes %} 可使用 {% data variables.contact.support_portal %} 创建工单，如果希望在支持工单中包括诊断，也可使用 GitHub Enterprise Server 管理控制台。
{% endif %}

创建工单后，可从 {% data variables.contact.contact_landing_page_portal %} 上的 {% data variables.contact.github_support %} 查看工单和响应。 有关详细信息，请参阅“[查看和更新支持工单](/support/contacting-github-support/viewing-and-updating-support-tickets)”。 

## 支持工单中包含的内容

向 {% data variables.contact.github_support %} 提供他们理解、定位和重现问题所需的一切内容，可以更快地解决问题，减少往返于你和支持团队之间的操作。 为确保 {% data variables.contact.github_support %} 可以帮助你，请在创建工单时考虑以下几点：

- 获取可帮助 {% data variables.contact.github_support %} 跟踪、排列优先级、重现或调查问题的信息。
- 尽量包括完整的 URL、存储库名称和用户名。
- 如果适用，重现问题并准备分享步骤。
- 准备好提供问题和预期结果的完整说明。
- 复制与您的问题相关的所有错误消息的准确表述。
- 确定与 {% data variables.contact.github_support %} 正在进行的任何通信中是否存在现有事件单编号。
- 包括相关日志并附加演示问题的任何屏幕截图。

{% ifversion ghes %}
## 选择联系人

特别是优先级为 {% data variables.product.support_ticket_priority_urgent %} 的事件单，联系 {% data variables.contact.github_support %} 的人应该：

 - 熟悉内部系统、工具、策略和实践。
 - 熟悉 {% data variables.product.product_name %}。
 - 拥有对问题进行故障排查所需的任何服务的完全访问权限。
 - 经授权可对您的网络和任何适用的产品做出建议的变更。

{% endif %}

## 使用支持门户{% ifversion ghes %}创建支持工单{% endif %}

1. 导航到 {% data variables.contact.contact_support_portal %}。
{% data reusables.support.submit-a-ticket %}

{% ifversion ghes %}

## 使用 GitHub Enterprise Server 管理控制台创建工单

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.type-management-console-password %} {% data reusables.enterprise_management_console.support-link %}
1. 如果希望在支持工单中包含诊断，请在“诊断”下单击“下载诊断信息”并将文件保存到本地。 您稍后可将此文件附加到您的支持事件单。
  ![“管理控制台支持”页面上标记为“下载诊断信息”的按钮的屏幕截图。](/assets/images/enterprise/support/download-diagnostics-info-button.png)
1. 若要完成工单并显示 {% data variables.contact.enterprise_portal %}，请在“打开支持请求”下，单击“新建支持请求”。
  ![“管理控制台支持”页面上标记为“新建支持请求”的按钮的屏幕截图。](/assets/images/enterprise/management-console/open-support-request.png)
{% data reusables.support.submit-a-ticket %}

{% endif %}

{% elsif ghae %}

您可以从 {% data variables.contact.ae_azure_portal %} 通过 {% data variables.product.prodname_ghe_managed %} 提交支持单。

## 先决条件

要在 {% data variables.contact.ae_azure_portal %} 中提交 {% data variables.product.prodname_ghe_managed %} 支持单，您必须将 Azure 中 {% data variables.product.prodname_ghe_managed %} 订阅的 ID 提交到 Microsoft 上的 Customer Success Account Manager (CSAM)。

## 使用 {% data variables.contact.ae_azure_portal %} 提交工单

商业客户可以在 {% data variables.contact.contact_ae_portal %} 中提交支持请求。 政府客户应使用[面向政府客户的 Azure 门户](https://portal.azure.us/#blade/Microsoft_Azure_Support/HelpAndSupportBlade)。 有关详细信息，请参阅 Microsoft Docs. 中的[创建 Azure 支持请求](https://docs.microsoft.com/azure/azure-portal/supportability/how-to-create-azure-support-request)。

## {% data variables.contact.ae_azure_portal %} 中的问题排除

{% data variables.product.company_short %} 无法排除 Azure 门户中的访问和订阅问题。 有关 Azure 门户的帮助，请联系 Microsoft 的 CSAM 或查看以下信息。

- 如果无法登录到 Azure 门户，请参阅 Microsoft Docs 中的 [Azure 订阅登录问题疑难解答](https://docs.microsoft.com/en-US/azure/cost-management-billing/manage/troubleshoot-sign-in-issue)或[直接提交请求](https://support.microsoft.com/en-us/supportrequestform/84faec50-2cbc-9b8a-6dc1-9dc40bf69178)。

- 如果您可以登录 Azure 门户，但无法提交 {% data variables.product.prodname_ghe_managed %} 支持单，请查看提交支持单的先决条件。 有关详细信息，请参阅[先决条件](#prerequisites)。

{% endif %}

## 延伸阅读

- [关于 GitHub 支持](/support/learning-about-github-support/about-github-support)
