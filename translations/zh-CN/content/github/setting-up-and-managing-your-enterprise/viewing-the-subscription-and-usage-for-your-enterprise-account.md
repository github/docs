---
title: 查看企业帐户的订阅和使用情况
intro: 您可以查看企业帐户的当前订阅、许可证使用情况、发票、付款历史记录和其他结算信息。
product: '{% data reusables.gated-features.enterprise-accounts %}'
permissions: Enterprise owners and billing managers can access and manage all billing settings for enterprise accounts.
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /articles/viewing-the-subscription-and-usage-for-your-enterprise-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Enterprise
---

### 关于企业帐户的计费

企业帐户目前适用于通过发票付费的 {% data variables.product.prodname_enterprise %} 客户。 对与企业帐户关联的所有组织和 {% data variables.product.prodname_ghe_server %} 实例的帐单将汇总为所有付费 {% data variables.product.prodname_dotcom_the_website %} 服务（包括组织中的付费许可、{% data variables.large_files.product_name_long %} 数据包、{% if currentVersion == "free-pro-team@latest" or ver_gt "enterprise-server@3.0" %} {% data variables.product.prodname_GH_advanced_security %} 使用、{% endif %}和 {% data variables.product.prodname_marketplace %} 应用程序的订阅）的单一帐单费用。

{% if currentVersion == "free-pro-team@latest" %}{% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} 更多信息请参阅“[将 Azure 订阅连接到企业](/github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise)”。{% endif %}

有关管理帐单管理员的更多信息，请参阅“[邀请人员管理企业](/github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise)”。

### 查看企业帐户的订阅和使用情况

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. 在“User
{% if currentVersion == "free-pro-team@latest" %}Licenses{% else %}licenses{% endif %}（用户许可）”下，查看您的总许可数、已消耗许可数以及订阅到期日期。
  {% if currentVersion == "free-pro-team@latest" %}![License and subscription information in enterprise billing settings](/assets/images/help/business-accounts/billing-license-info.png){% else %}
  ![企业计费设置中的许可证和订阅信息](/assets/images/enterprise/enterprise-server/enterprise-server-billing-license-info.png){% endif %}
1. （可选）要查看许可证使用情况或下载
包含许可详情的 {% if currentVersion == "free-pro-team@latest" %}CSV{% elsif enterpriseServerVersions contains currentVersion %}JSON{% endif %} 文件{% if currentVersion == "free-pro-team@latest" %}，请在“User Licenses（用户许可）”的右侧{% endif %}，单击**查看{% if currentVersion == "free-pro-team@latest" %}详细信息{% elsif enterpriseServerVersions contains currentVersion %}用户{% endif %}**或{% if currentVersion == "free-pro-team@latest" %}{% octicon "download" aria-label="The download icon" %}{% elsif enterpriseServerVersions contains currentVersion %}**Export license usage（导出许可使用信息）**{% endif %}。{% if currentVersion == "free-pro-team@latest" %}
  !["User Licenses（用户许可）"右侧的"View details（查看详细信息）"按钮和带下载图标的按钮](/assets/images/help/business-accounts/billing-license-info-click-view-details-or-download.png){% endif %}
{% if currentVersion == "free-pro-team@latest" or ver_gt "enterprise-server@3.0" %}
1. （可选）要查看其他功能的使用详细信息，请在左侧边栏中单击 **Billing（计费）**。 ![企业帐户设置侧边栏中的“计费”选项卡](/assets/images/help/business-accounts/settings-billing-tab.png)

### 延伸阅读

- "[关于 GitHub Actions 的计费](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions#about-billing-for-github-actions)"
- "[关于 Git 大文件存储的计费](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-git-large-file-storage)"
- "[关于 {% data variables.product.prodname_GH_advanced_security %} 的许可](/github/setting-up-and-managing-billing-and-payments-on-github/about-licensing-for-github-advanced-security)"

{% endif %}
