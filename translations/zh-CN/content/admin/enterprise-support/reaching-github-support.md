---
title: 联系 GitHub Support
intro: '使用 {% if enterpriseServerVersions contains currentVersion %}{% data variables.product.prodname_ghe_server %} {% data variables.enterprise.management_console %} 或{% endif %}支持门户联系 {% data variables.contact.enterprise_support %}。'
redirect_from:
  - /enterprise/admin/guides/enterprise-support/reaching-github-enterprise-support/
  - /enterprise/admin/enterprise-support/reaching-github-support
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Support
---

### 使用自动事件单系统

尽管我们会尽最大努力响应自动支持请求，但与自动事件单系统能够提供的信息相比，我们通常需要更多信息来解决您的问题。 只要有可能，请通过 {% data variables.contact.enterprise_support %} 可以与之交互的人或机器发起支持请求。 更多信息请参阅“[准备提交事件单](/enterprise/admin/guides/enterprise-support/preparing-to-submit-a-ticket)”。

### 联系 {% data variables.contact.enterprise_support %}

{% data variables.contact.enterprise_support %} 客户可以使用 {% if enterpriseServerVersions contains currentVersion %}{% data variables.product.prodname_ghe_server %} {% data variables.enterprise.management_console %} 或 {% data variables.contact.contact_enterprise_portal %}{% elsif currentVersion == "github-ae@latest" %} {% data variables.contact.contact_ae_portal %}{% endif %} 打开支持单。 将事件单的优先级标为 {% data variables.product.support_ticket_priority_urgent %}、{% data variables.product.support_ticket_priority_high %}、{% data variables.product.support_ticket_priority_normal %} 或 {% data variables.product.support_ticket_priority_low %}。 更多信息请参阅“[为支持事件单分配优先级](/enterprise/admin/guides/enterprise-support/about-github-enterprise-support#assigning-a-priority-to-a-support-ticket)”和“[提交事件单](/enterprise/admin/guides/enterprise-support/submitting-a-ticket)”。

### 联系 {% data variables.contact.enterprise_support %}

{% if enterpriseServerVersions contains currentVersion %}
#### 查看过去的支持事件单

您可以使用 {% data variables.contact.enterprise_portal %} 查看过去的支持事件单。

1. 导航到 {% data variables.contact.contact_enterprise_portal %}。
2. 单击 **My tickets（我的事件单）**。 ![查看过去提交的事件单](/assets/images/enterprise/support/view-past-tickets.png)

### 联系 {% data variables.contact.premium_support %}

{% data variables.contact.enterprise_support %} 客户可以使用 {% data variables.product.prodname_ghe_server %} {% data variables.enterprise.management_console %} 或 {% data variables.contact.contact_enterprise_portal %} 打开支持事件单。 将其优先级标为 {% data variables.product.support_ticket_priority_urgent %}、{% data variables.product.support_ticket_priority_high %}、{% data variables.product.support_ticket_priority_normal %} 或 {% data variables.product.support_ticket_priority_low %}。 更多信息请参阅“[为支持事件单分配优先级](/enterprise/admin/guides/enterprise-support/about-github-premium-support-for-github-enterprise-server#assigning-a-priority-to-a-support-ticket)”和“[提交事件单](/enterprise/admin/guides/enterprise-support/submitting-a-ticket)”。

{% endif %}
### 联系销售

有关定价、许可、续订、报价、付款和其他相关问题，请联系 {% data variables.contact.contact_enterprise_sales %} 或拨打 [+1 (877) 448-4820](tel:+1-877-448-4820)。

{% if enterpriseServerVersions contains currentVersion %}
### 联系培训

要了解有关培训选项（包括自定义培训）的更多信息，请参阅 [{% data variables.product.company_short %} 的培训网站](https://services.github.com/)。

{% note %}

**注意：**培训包含在 {% data variables.product.premium_plus_support_plan %} 中。 更多信息请参阅“[关于 {% data variables.product.prodname_ghe_server %} 的 {% data variables.contact.premium_support %}](/enterprise/admin/guides/enterprise-support/about-github-premium-support-for-github-enterprise-server)”。

{% endnote %}
{% endif %}

### 延伸阅读

- “[关于 {% data variables.contact.enterprise_support %}](/enterprise/admin/guides/enterprise-support/about-github-enterprise-support)”
- “[关于 {% data variables.product.prodname_ghe_server %} 的 {% data variables.contact.premium_support %}](/enterprise/admin/guides/enterprise-support/about-github-premium-support-for-github-enterprise-server)”。
