---
title: 关于企业帐户
intro: '通过 {% data variables.product.prodname_ghe_cloud %}，可以创建企业帐户以在组织间进行合作，同时为管理员提供单一查看和管理点。'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /articles/about-github-business-accounts/
  - /articles/about-enterprise-accounts
  - /github/setting-up-and-managing-your-enterprise-account/about-enterprise-accounts
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - 企业
---

### 关于企业帐户

企业帐户可用于管理多个 {% data variables.product.prodname_dotcom %} 组织和 {% data variables.product.prodname_ghe_server %} 实例。 您的企业帐户必须有操作点，如 {% data variables.product.prodname_dotcom %} 上的组织或个人帐户。 企业管理员可以管理设置和首选项，如：

- 成员访问和管理（组织成员、外部协作者）
- 计费和使用（{% data variables.product.prodname_ghe_server %} 实例、用户许可、{% data variables.large_files.product_name_short %} 包{% if currentVersion == "free-pro-team@latest" or ver_gt "enterprise-server@3.0" %}、{% data variables.product.prodname_GH_advanced_security %} 的使用{% endif %}）
- 安全性（单点登录、双重身份验证）
- 与 {% data variables.contact.enterprise_support %} 共享请求和支持包

{% data reusables.enterprise-accounts.enterprise-accounts-billing %}有关管理 {% data variables.product.prodname_ghe_cloud %} 订阅的更多信息，请参阅“[查看企业帐户的订阅和使用情况](/articles/viewing-the-subscription-and-usage-for-your-enterprise-account)”。 有关管理 {% data variables.product.prodname_ghe_server %} 帐单设置的更多信息，请参阅“[管理企业的帐单](/admin/overview/managing-billing-for-your-enterprise)”。

有关 {% data variables.product.prodname_ghe_cloud %} 与 {% data variables.product.prodname_ghe_server %} 之间差异的更多信息，请参阅“[{% data variables.product.prodname_dotcom %} 的产品](/articles/githubs-products)”。 要升级至 {% data variables.product.prodname_enterprise %} 或开始使用企业帐户，请联系 {% data variables.contact.contact_enterprise_sales %}。

有关成员权限和管理的更多信息，请参阅“{% if currentVersion == "free-pro-team@latest" %}[管理企业中的用户](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise){% elsif currentVersion == "enterprise-ae@latest" or enterpriseServerVersions contains currentVersion %}[管理用户、组织和仓库](/admin/user-management){% endif %}”。

有关使用 GraphQL API 管理企业帐户的信息，请参阅“[企业帐户](/graphql/guides/managing-enterprise-accounts)”。

{% if currentVersion == "free-pro-team@latest" %}

### 管理链接到企业帐户的组织

组织是共享帐户，供多个项目的人员同时协作之用。 所有者可通过复杂的安全和管理功能管理成员对组织的数据和项目的访问。 更多信息请参阅“[关于组织](/articles/about-organizations)”。

企业所有者可创建组织并将其链接到企业。 在将组织添加到企业帐户之后，您可以管理并实施组织的策略。 具体实施选项因设置而异；一般而言，您可以选择对企业帐户中的每个组织实施一种策略，或者让所有者在组织层级设置策略。

更多信息请参阅“[管理企业帐户中的组织](/articles/managing-organizations-in-your-enterprise-account)”和“[为企业帐户中的组织设置策略](/articles/setting-policies-for-organizations-in-your-enterprise-account)”。

{% endif %}

### 管理链接至企业帐户的 {% data variables.product.prodname_ghe_server %} 许可

{% data reusables.enterprise-accounts.admin-managing-licenses %}
