---
title: 查看企业帐户的订阅和使用情况
intro: '您可以查看企业帐户的当前订阅、许可证使用情况、发票、付款历史记录和其他结算信息。'
product: '{% data reusables.gated-features.enterprise-accounts %}'
permissions: '企业所有者和帐单管理员均可访问和管理企业帐户的所有帐单设置。'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /articles/viewing-the-subscription-and-usage-for-your-enterprise-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### 关于企业帐户的计费

企业帐户目前适用于通过发票付费的 {% data variables.product.prodname_enterprise %} 客户。 对与企业帐户关联的所有组织和 {% data variables.product.prodname_ghe_server %} 实例的结算将汇总为所有付费 {% data variables.product.prodname_dotcom_the_website %} 服务（包括组织中的付费许可、{% data variables.large_files.product_name_long %} 数据包和 {% data variables.product.prodname_marketplace %} 应用程序的订阅）的单一帐单费用。

For more information about managing billing managers, see "[Inviting people to manage your enterprise](/github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise)."

### 查看企业帐户的订阅和使用情况

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
4. Under "User
{% if currentVersion == "free-pro-team@latest" %}Licenses{% else %}licenses{% endif %}", view your total licenses, number of consumed licenses, and your subscription expiration date.
  {% if currentVersion == "free-pro-team@latest" %}![License and subscription information in enterprise billing settings](/assets/images/help/business-accounts/billing-license-info.png){% else %}
  ![企业计费设置中的许可证和订阅信息](/assets/images/enterprise/enterprises/enterprise-server-billing-license-info.png){% endif %}
5. To view details of the user licenses currently in use, click **View {% if currentVersion == "free-pro-team@latest" %}details{% else %}users{% endif %}**.
