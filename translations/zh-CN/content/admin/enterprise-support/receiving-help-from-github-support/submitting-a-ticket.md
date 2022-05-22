---
title: 提交事件单
intro: '您可以使用 {% ifversion ghes %}{% data variables.product.prodname_ghe_server %} {% data variables.enterprise.management_console %} 或支持门户{% elsif ghae %}{% data variables.contact.ae_azure_portal %}{% endif %} 提交支持单。'
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

## 关于提交事件单

{% ifversion ghae %}

您可以从 {% data variables.contact.ae_azure_portal %} 通过 {% data variables.product.prodname_ghe_managed %} 提交支持单。

{% endif %}

在提交事件单之前，您应当收集 {% data variables.contact.github_support %} 的有用信息并选择联系人。 更多信息请参阅“[准备提交事件单](/enterprise/admin/guides/enterprise-support/preparing-to-submit-a-ticket)”。

{% ifversion ghes %}
提交支持请求和可选诊断信息后，{% data variables.contact.github_support %} 可能会要求您下载支持包并将其共享给我们。 更多信息请参阅“[将数据提供给 {% data variables.contact.github_support %}](/enterprise/admin/guides/enterprise-support/providing-data-to-github-support)”。

## 使用 {% data variables.contact.enterprise_portal %} 提交事件单

{% data reusables.support.zendesk-old-tickets %}

To submit a ticket about {% data variables.product.product_location_enterprise %}, you must be an owner, billing manager, or member with support entitlement. 更多信息请参阅“[管理企业的支持权利](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)”。

If you cannot sign in to your account on {% data variables.product.prodname_dotcom_the_website %} or do not have support entitlement, you can still submit a ticket by providing your license or a diagnostics file from your server.

1. 导航到 {% data variables.contact.contact_support_portal %}。
{% data reusables.support.submit-a-ticket %}

## 使用 {% data variables.product.product_name %} {% data variables.enterprise.management_console %} 提交事件单。

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.type-management-console-password %}
{% data reusables.enterprise_management_console.support-link %}
5. 如果您希望在支持事件单中包含诊断，请在“Diagnostics”下单击 **Download diagnostic info** 并将文件保存到本地。 您稍后可将此文件附加到您的支持事件单。 ![用于下载诊断信息的按钮](/assets/images/enterprise/support/download-diagnostics-info-button.png)
6. To complete your ticket and display the {% data variables.contact.enterprise_portal %}, under "Open Support Request", click **New support request**. ![用于打开支持请求的按钮](/assets/images/enterprise/management-console/open-support-request.png)
{% data reusables.support.submit-a-ticket %}

{% endif %}

{% ifversion ghae %}

## 基本要求

要在 {% data variables.contact.ae_azure_portal %} 中提交 {% data variables.product.prodname_ghe_managed %} 支持单，您必须将 Azure 中 {% data variables.product.prodname_ghe_managed %} 订阅的 ID 提交到 Microsoft 上的 Customer Success Account Manager (CSAM)。

## 使用 {% data variables.contact.ae_azure_portal %}提交事件单

商业客户可以在 {% data variables.contact.contact_ae_portal %} 中提交支持请求。 政府客户应该使用[政府客户的 Azure 门户网站](https://portal.azure.us/#blade/Microsoft_Azure_Support/HelpAndSupportBlade)。 更多信息请参阅 Microsoft 文档中的 "[创建 Azure 支持请求](https://docs.microsoft.com/azure/azure-portal/supportability/how-to-create-azure-support-request)"。

## {% data variables.contact.ae_azure_portal %} 中的问题排除

{% data variables.product.company_short %} 无法排除 Azure 门户中的访问和订阅问题。 有关 Azure 门户的帮助，请联系 Microsoft 的 CSAM 或查看以下信息。

- 如果您无法登录 Azure 门户，请参阅 Microsoft 文档中的[Azure 订阅登录问题故障排除](https://docs.microsoft.com/en-US/azure/cost-management-billing/manage/troubleshoot-sign-in-issue)或[直接提交请求](https://support.microsoft.com/en-us/supportrequestform/84faec50-2cbc-9b8a-6dc1-9dc40bf69178)。

- 如果您可以登录 Azure 门户，但无法提交 {% data variables.product.prodname_ghe_managed %} 支持单，请查看提交支持单的先决条件。 更多信息请参阅“[先决条件](#prerequisites)”。

{% endif %}

## 延伸阅读

- "[关于 {% data variables.contact.enterprise_support %}](/enterprise/admin/guides/enterprise-support/about-github-enterprise-support)"{% ifversion ghes %}
- "[关于 {% data variables.contact.premium_support %} for {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/enterprise-support/about-github-premium-support-for-github-enterprise-server)."{% endif %}
