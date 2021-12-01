---
title: About Visual Studio subscriptions with GitHub Enterprise
intro: 'You can give {% data variables.product.prodname_vs %} subscribers on your team access to {% data variables.product.prodname_enterprise %} with a combined offering from Microsoft.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/managing-licenses-for-visual-studio-subscription-with-github-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-licenses-for-the-github-enterprise-and-visual-studio-bundle
  - /github/setting-up-and-managing-your-enterprise-account/managing-licenses-for-the-github-enterprise-and-visual-studio-bundle
  - /github/articles/about-the-github-and-visual-studio-bundle
  - /articles/about-the-github-and-visual-studio-bundle
  - /github/setting-up-and-managing-your-enterprise-account/managing-licenses-for-visual-studio-subscription-with-github-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-licenses-for-visual-studio-subscription-with-github-enterprise
  - /billing/managing-your-license-for-github-enterprise/managing-licenses-for-visual-studio-subscription-with-github-enterprise
versions:
  ghec: '*'
type: overview
topics:
  - Enterprise
  - Licensing
shortTitle: 关于
---

## 关于 {% data variables.product.prodname_vss_ghe %}

{% data reusables.enterprise-accounts.vss-ghe-description %} {% data variables.product.prodname_vss_ghe %} is available from Microsoft under the terms of the Microsoft Enterprise Agreement. 更多信息请参阅 {% data variables.product.prodname_vs %} 网站上的 [{% data variables.product.prodname_vss_ghe %}](https://visualstudio.microsoft.com/subscriptions/visual-studio-github/)。

To use the {% data variables.product.prodname_enterprise %} portion of the license, each subscriber's user account on {% data variables.product.prodname_dotcom_the_website %} must be or become a member of an organization owned by your enterprise on {% data variables.product.prodname_dotcom_the_website %}. To accomplish this, organization owners can invite new members to an organization by email address. 订阅者可以使用 {% data variables.product.prodname_dotcom_the_website %} 上的现有用户帐户或创建一个新帐户来接受邀请。

For more information about the setup of {% data variables.product.prodname_vss_ghe %}, see "[Setting up {% data variables.product.prodname_vss_ghe %}](/billing/managing-licenses-for-visual-studio-subscriptions-with-github-enterprise/setting-up-visual-studio-subscriptions-with-github-enterprise)."

## 关于 {% data variables.product.prodname_vss_ghe %} 的许可

After you assign a license for {% data variables.product.prodname_vss_ghe %} to a subscriber, the subscriber will use the {% data variables.product.prodname_enterprise %} portion of the license by joining an organization in your enterprise with a user account on {% data variables.product.prodname_dotcom_the_website %}. 如果 {% data variables.product.prodname_dotcom_the_website %} 上的企业成员用户帐户电子邮件地址匹配订阅 {% data variables.product.prodname_vs %} 帐户的用户主名 (UPN)，则 {% data variables.product.prodname_vs %} 订阅者将自动占用一个 {% data variables.product.prodname_vss_ghe %} 许可。

您的企业在 {% data variables.product.prodname_dotcom %} 上的许可总数等于任何标准 {% data variables.product.prodname_enterprise %} 许可和包括 {% data variables.product.prodname_dotcom %} 访问权限的 {% data variables.product.prodname_vs %} 订阅许可数量的总和。 如果企业成员的用户帐户与 {% data variables.product.prodname_vs %} 订阅者的电子邮件地址不对应，则该用户帐户占用的许可不适用于 {% data variables.product.prodname_vs %} 订阅者。

有关 {% data variables.product.prodname_enterprise %} 的更多信息，请参阅“[{% data variables.product.company_short %} 的产品](/github/getting-started-with-github/githubs-products#github-enterprise)”。 有关 {% data variables.product.prodname_dotcom_the_website %} 帐户的更多信息，请参阅“[{% data variables.product.prodname_dotcom %} 帐户类型](/github/getting-started-with-github/types-of-github-accounts)”。

You can view the number of {% data variables.product.prodname_enterprise %} licenses available to your enterprise on {% data variables.product.product_location %}. The list of pending invitations includes subscribers who are not yet members of at least one organization in your enterprise. For more information, see "[Viewing the subscription and usage for your enterprise account](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)" and "[Viewing people in your enterprise](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-members-and-outside-collaborators)."

{% tip %}

**Tip**: If you download a CSV file with your enterprise's license usage in step 6 of "[Viewing the subscription and usage for your enterprise account](https://docs-internal-19656--vss-ghe-s.herokuapp.com/en/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account#viewing-the-subscription-and-usage-for-your-enterprise-account)," any members with a missing value for the "Name" or "Profile" columns have not yet accepted an invitation to join an organization within the enterprise.

{% endtip %}

您也可以在 {% data variables.product.prodname_vss_admin_portal_with_url %} 中查看对订阅者的待处理 {% data variables.product.prodname_enterprise %} 邀请。

## 延伸阅读

- [{% data variables.product.prodname_vs %} subscriptions with {% data variables.product.prodname_enterprise %}](https://docs.microsoft.com/visualstudio/subscriptions/access-github) in Microsoft Docs
- [Use {% data variables.product.prodname_vs %} or {% data variables.product.prodname_vscode %} to deploy apps from {% data variables.product.prodname_dotcom %}](https://docs.microsoft.com/en-us/azure/developer/github/deploy-with-visual-studio) in Microsoft Docs
