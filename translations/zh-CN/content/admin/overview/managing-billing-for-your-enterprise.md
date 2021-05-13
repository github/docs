---
title: 管理企业的帐单
intro: 您可以查看企业的帐单信息。
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /enterprise/admin/installation/managing-billing-for-github-enterprise
  - /enterprise/admin/overview/managing-billing-for-github-enterprise
  - /admin/overview/managing-billing-for-github-enterprise
versions:
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Enterprise
---

{% if currentVersion == "github-ae@latest" %}

{% data reusables.github-ae.about-billing %} 每天一次，{% data variables.product.prodname_dotcom %} 将计算拥有企业许可证的用户数目。 {% data variables.product.company_short %} 对每个许可的用户计费，而不论用户当天是否登录 {% data variables.product.prodname_ghe_managed %}。

对于商业区，每个用户每天的价格是 1.2580645161 美元。 在 31 天的月份中，每个用户的每月费用为 39 美元。 对于天数较少的月份，每月费用较低。 每个计费月份在日历月第一天的固定时间开始。

如果月中添加许可用户，则该用户将仅包含在其拥有许可证的天数的计数中。 当您移除授权用户时，该用户将在计数中保留到该月底。 因此，如果在一个月中添加用户然后在该月移除该用户，则用户将从添加之日到月底包含在计数中。 如果您在用户被移除的同一个月内重新添加该用户，不会有额外的费用。

例如，以下是在不同日期具有许可证的用户的费用。

| 用户        | 许可日期                                          | 计入的天数 | 费用     |
| --------- | --------------------------------------------- | ----- | ------ |
| @octocat  | 1 月 1 日至 1 月 31 日                             | 31    | $39    |
| @robocat  | 2 月 1 日至 2 月 28 日                             | 29    | $35.23 |
| @devtocat | 1 月 15 日至 1 月 31 日                            | 17    | $21.39 |
| @doctocat | 1 月 1 日至 1 月 15 日                             | 31    | $39    |
| @prodocat | 1 月 7 日至 1 月 15 日                             | 25    | $31.45 |
| @monalisa | 1 月 1 日至 1 月 7 日，<br>1 月 15 日至 1 月 31 日 | 31    | $39    |

企业可以包括一个或多个实例。 {% data variables.product.prodname_ghe_managed %} 的每个实例至少 500 个用户。 {% data variables.product.company_short %} 按每个实例至少 500 个用户计费，即使当天拥有许可证的用户少于 500 个也一样。

您可以在[Azure 帐户门户](https://portal.azure.com)中看到您当前的使用情况。

{% else %}

### 关于企业帐户的计费

企业帐户目前适用于通过发票付费的 {% data variables.product.prodname_enterprise %} 客户。 对于所有付费 {% data variables.product.prodname_dotcom_the_website %} 服务（包括组织中的付费许可、{% data variables.large_files.product_name_long %} 数据包和 {% data variables.product.prodname_marketplace %} 应用程序订阅），连接至企业帐户的所有组织和 {% data variables.product.prodname_ghe_server %} 实例的帐单都将汇总为一个计费帐单。

企业所有者和帐单管理员均可访问和管理企业帐户的所有帐单设置。 有关企业帐户的更多信息，请参阅{% if currentVersion == "free-pro-team@latest" or "github-ae@latest" %}“[企业中的角色](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise#enterprise-members)”和{% endif %}“[组织的仓库权限级别](/articles/repository-permission-levels-for-an-organization)”。有关管理帐单管理员的更多信息，请参阅“[邀请人员管理企业](/github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise)”。

### 查看当前发票

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
4. 在“Quick Actions（快速操作）”下，单击 **View invoice（查看发票）**。 ![查看发票链接](/assets/images/help/business-accounts/view-invoice-link.png)

### 支付当前发票

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
4. 在“Quick Actions（快速操作）”下，单击 **Pay invoice（支付发票）**。 ![支付发票链接](/assets/images/help/business-accounts/pay-invoice-link.png)
5. 在“Pay invoice（支付发票）”下，以安全形式输入您的信用卡信息，然后单击 **Pay Invoice（支付发票）**。 ![确认和支付发票](/assets/images/help/business-accounts/pay-invoice.png)

### 下载当前发票

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
4. 在“Quick Actions（快速操作）”下，单击 **Download current invoice（下载当前发票）**。 ![下载当前发票链接](/assets/images/help/business-accounts/download-current-invoice.png)

### 查看付款历史记录

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
4. 在“"Billing（帐单）”下，单击 **Past Invoices（过去的发票）**选项卡，查看过去的帐单活动摘要。 ![查看付款历史记录选项卡](/assets/images/help/business-accounts/view-payment-history.png)

{% endif %}
