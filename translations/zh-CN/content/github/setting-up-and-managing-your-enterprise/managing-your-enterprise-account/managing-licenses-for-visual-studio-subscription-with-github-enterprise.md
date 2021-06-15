---
title: 管理包含 GitHub Enterprise 的 Visual Studio 订阅
intro: '您可以管理 {% data variables.product.prodname_vss_ghe %} 的 {% data variables.product.prodname_enterprise %} 许可。'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-licenses-for-the-github-enterprise-and-visual-studio-bundle
  - /github/setting-up-and-managing-your-enterprise-account/managing-licenses-for-the-github-enterprise-and-visual-studio-bundle
  - /github/articles/about-the-github-and-visual-studio-bundle
  - /articles/about-the-github-and-visual-studio-bundle
  - /github/setting-up-and-managing-your-enterprise-account/managing-licenses-for-visual-studio-subscription-with-github-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-licenses-for-visual-studio-subscription-with-github-enterprise
versions:
  free-pro-team: '*'
topics:
  - Enterprise
---

### 关于 {% data variables.product.prodname_vss_ghe %}

{% data variables.product.prodname_vss_ghe %} 是 Microsoft 的组合产品，允许订阅者使用 {% data variables.product.prodname_enterprise %} 和 {% data variables.product.prodname_vs %}。 {% data variables.product.prodname_vss_ghe %} 由 Microsoft 根据 Microsoft 企业协议的条款提供。 更多信息请参阅 {% data variables.product.prodname_vs %} 网站上的 [{% data variables.product.prodname_vss_ghe %}](https://visualstudio.microsoft.com/subscriptions/visual-studio-github/)。

将 {% data variables.product.prodname_vss_ghe %} 许可分配给订阅者后，订阅者将使用 {% data variables.product.prodname_dotcom_the_website %} 上的用户帐户加入您企业帐户中的组织，从而使用许可的 {% data variables.product.prodname_enterprise %} 部分。 如果 {% data variables.product.prodname_dotcom_the_website %} 上的企业成员用户帐户电子邮件地址匹配订阅 {% data variables.product.prodname_vs %} 帐户的用户主名 (UPN)，则 {% data variables.product.prodname_vs %} 订阅者将自动占用一个 {% data variables.product.prodname_vss_ghe %} 许可。

您的企业在 {% data variables.product.prodname_dotcom %} 上的许可总数等于任何标准 {% data variables.product.prodname_enterprise %} 许可和包括 {% data variables.product.prodname_dotcom %} 访问权限的 {% data variables.product.prodname_vs %} 订阅许可数量的总和。 如果企业成员的用户帐户与 {% data variables.product.prodname_vs %} 订阅者的电子邮件地址不对应，则该用户帐户占用的许可不适用于 {% data variables.product.prodname_vs %} 订阅者。

有关 {% data variables.product.prodname_enterprise %} 的更多信息，请参阅“[{% data variables.product.company_short %} 的产品](/github/getting-started-with-github/githubs-products#github-enterprise)”。 有关 {% data variables.product.prodname_dotcom_the_website %} 帐户的更多信息，请参阅“[{% data variables.product.prodname_dotcom %} 帐户类型](/github/getting-started-with-github/types-of-github-accounts)”。

### 基本要求

1. 购买 {% data variables.product.prodname_vss_ghe %} 后，请联系 {% data variables.contact.contact_enterprise_sales %} 并提及 "{% data variables.product.prodname_vss_ghe %}"。 您将与销售团队合作，在 {% data variables.product.prodname_dotcom_the_website %} 上创建企业帐户。 如果您已经拥有 {% data variables.product.prodname_dotcom_the_website %} 上的企业帐户，或者您不确定，请告知我们的销售团队。

2. 在 {% data variables.product.prodname_vss_admin_portal_with_url %} 中向订阅者分配 {% data variables.product.prodname_vss_ghe %} 许可。 有关分配许可的更多信息，请参阅 Microsoft 文档中的[管理包含 {% data variables.product.prodname_enterprise %} 的 {% data variables.product.prodname_vs %} 订阅](https://docs.microsoft.com/visualstudio/subscriptions/assign-github)。

3. 在 {% data variables.product.prodname_dotcom_the_website %} 上，至少创建一个由企业帐户拥有的组织。 更多信息请参阅“[将组织添加到企业帐户](/github/setting-up-and-managing-your-enterprise/adding-organizations-to-your-enterprise-account)”。

### 邀请订阅者使用 {% data variables.product.prodname_enterprise %}

要使用许可的 {% data variables.product.prodname_enterprise %} 部分，订阅者在 {% data variables.product.prodname_dotcom_the_website %} 上的用户帐户必须是或成为 {% data variables.product.prodname_dotcom_the_website %} 上的企业所拥有组织的成员。

组织所有者可以通过电子邮件地址邀请新成员加入组织。 订阅者可以使用 {% data variables.product.prodname_dotcom_the_website %} 上的现有用户帐户或创建一个新帐户来接受邀请。

虽然不是必需的，但我们建议组织所有者将邀请发送到 {% data variables.product.prodname_vs %} 订阅者的用户主名 (UPN) 使用的同一电子邮件地址。 当 {% data variables.product.product_name %} 上的电子邮件地址与订阅者的 UPN 匹配时，您可以确保组织的其他成员不会索要该订阅者的许可证。

更多信息请参阅“[邀请用户加入组织](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)”、“[注册 {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/signing-up-for-github)”和“[管理电子邮件首选项](/github/setting-up-and-managing-your-github-user-account/managing-email-preferences)”。

### 查看 {% data variables.product.prodname_enterprise %} 许可

在 {% data variables.product.prodname_vss_admin_portal_with_url %} 中分配 {% data variables.product.prodname_vss_ghe %} 许可后，您可以查看企业帐户中可用的 {% data variables.product.prodname_enterprise %} 许可数量。 更多信息请参阅"[查看企业帐户的订阅和使用](/github/setting-up-and-managing-your-enterprise/viewing-the-subscription-and-usage-for-your-enterprise-account)"。

您也可以在 {% data variables.product.prodname_vss_admin_portal_with_url %} 中查看对订阅者的待处理 {% data variables.product.prodname_enterprise %} 邀请。 待处理邀请列表包括尚未加入企业帐户中至少一个组织的订阅者。 更多信息请参阅“[查看企业中的人员](/github/setting-up-and-managing-your-enterprise/viewing-people-in-your-enterprise#viewing-members-and-outside-collaborators)”。

### 延伸阅读

- Microsoft 文档中的[包含 GitHub Enterprise 的 Visual Studio 订阅简介](https://docs.microsoft.com/visualstudio/subscriptions/access-github)
