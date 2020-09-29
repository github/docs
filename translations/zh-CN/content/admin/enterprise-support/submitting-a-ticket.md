---
title: 提交事件单
intro: '使用 {% data variables.product.prodname_ghe_server %}{% data variables.enterprise.management_console %} 或支持门户提交支持事件单。 当 {% data variables.product.prodname_ghe_server %} 生产系统关闭或处于不可用状态时，您可以将事件单标记为紧急。'
redirect_from:
  - /enterprise/admin/enterprise-support/submitting-a-ticket
versions:
  enterprise-server: '*'
---

### 关于提交事件单

在提交事件单之前，您应当收集 {% data variables.contact.github_support %} 的有用信息并选择联系人。 更多信息请参阅“[准备提交事件单](/enterprise/admin/guides/enterprise-support/preparing-to-submit-a-ticket)”。

提交支持请求和可选诊断信息后，{% data variables.contact.github_support %} 可能会要求您下载支持包并将其共享给我们。 更多信息请参阅“[将数据提供给 {% data variables.contact.github_support %}](/enterprise/admin/guides/enterprise-support/providing-data-to-github-support)”。

### 使用 {% data variables.contact.enterprise_portal %} 提交事件单

1. 导航到 {% data variables.contact.contact_enterprise_portal %}。
5. 单击 **Submit a Ticket（提交事件单）** ![将事件单提交至 Enterprise 支持团队](/assets/images/enterprise/support/submit-ticket-button.png)
{% data reusables.enterprise_enterprise_support.submit-support-ticket-first-section %}
{% data reusables.enterprise_enterprise_support.submit-support-ticket-second-section %}

### 使用企业帐户提交事件单

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.enterprise-licensing-tab %}
4. 在“{% data variables.product.prodname_enterprise %} 帮助”下，单击 **{% data variables.contact.enterprise_support %} Portal（门户）**。 ![导航至 Enterprise 支持站点的链接](/assets/images/enterprise/support/enterprise-support-link.png)
5. 单击 **Submit a Ticket（提交事件单）** ![将事件单提交至 Enterprise 支持团队](/assets/images/enterprise/support/submit-ticket-button.png)
{% data reusables.enterprise_enterprise_support.submit-support-ticket-first-section %}
{% data reusables.enterprise_enterprise_support.submit-support-ticket-second-section %}

### 使用 {% data variables.product.prodname_ghe_server %} {% data variables.enterprise.management_console %} 提交事件单。

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.type-management-console-password %}
{% data reusables.enterprise_management_console.support-link %}
5. 如果您希望在支持事件单中包含诊断，请在“Diagnostics”下单击 **Download diagnostic info** 并将文件保存到本地。 您稍后可将此文件附加到您的支持事件单。 ![用于下载诊断信息的按钮](/assets/images/enterprise/support/download-diagnostics-info-button.png)
6. 在“Open Support Request”下，单击 **New support request**。 ![用于打开支持请求的按钮](/assets/images/enterprise/management-console/open-support-request.png)
5. 单击 **Submit a Ticket（提交事件单）** ![将事件单提交至 Enterprise 支持团队](/assets/images/enterprise/support/submit-ticket-button.png)
{% data reusables.enterprise_enterprise_support.submit-support-ticket-first-section %}
14. 要在您的支持事件单中包含诊断信息，单击 **Add file**，然后附加您下载的诊断文件。 ![添加文件按钮](/assets/images/enterprise/support/support-ticket-add-file.png)
{% data reusables.enterprise_enterprise_support.submit-support-ticket-second-section %}
7. 单击 **Submit（提交）**。

### 延伸阅读

- “[关于 {% data variables.contact.enterprise_support %}](/enterprise/admin/guides/enterprise-support/about-github-enterprise-support)”
- “[关于 {% data variables.product.prodname_ghe_server %} 的 {% data variables.contact.premium_support %}](/enterprise/admin/guides/enterprise-support/about-github-premium-support-for-github-enterprise-server)”。
