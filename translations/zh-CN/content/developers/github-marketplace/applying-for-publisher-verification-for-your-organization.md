---
title: 为组织申请发布者验证
intro: 要为应用程序提供付费计划或在应用程序上架信息中包含 Marketplace 徽章，您必须完成组织的发布者验证流程。
versions:
  free-pro-team: '*'
topics:
  - Marketplace
---

发布者验证确保 {% data variables.product.prodname_dotcom %} 有方法联系您、您已经为组织启用双重身份验证并且您组织的域已通过验证。

一旦您的组织通过验证，您就可以为应用程序发布付费计划。 更多信息请参阅“[为上架产品设置定价计划](/developers/github-marketplace/setting-pricing-plans-for-your-listing)”。

要为应用程序提供付费计划，该应用程序必须为组织所有，并且您必须拥有该组织的所有者权限。 如果您的应用程序目前由用户帐户所有，您需要将该应用程序的所有权转让给组织。 更多信息请参阅“[转让 GitHub 应用程序的所有权](/developers/apps/transferring-ownership-of-a-github-app)”或“[转让 OAuth 应用程序的所有权](/developers/apps/transferring-ownership-of-an-oauth-app)”。

### 请求发布者验证


{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. 在左侧边栏中，单击 **Developer settings**。 ![组织设置侧边栏中的开发者设置选项](/assets/images/marketplace/developer-settings-in-org-settings.png)
1. 在“Developer settings（开发者设置）”下，单击 **Publisher Verification（发布者验证）**。 ![组织设置侧边栏中的发布者验证选项](/assets/images/marketplace/publisher-verification-settings-option.png)
1. 在“Publisher Verification（发布者验证）”下，填写检查列表中的信息：
   - 确保您的基本个人资料信息正确无误。 另外，确保您添加了接收 {% data variables.product.company_short %} 的更新和支持信息的最合适电子邮件地址。
   - 确保为您的组织启用双重身份验证。 更多信息请参阅“[您的组织中需要双重身份验证](/organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization)”。
   - 提交已验证的域名并确保您组织的个人资料页面上显示“已验证”徽章。 For related information, see "[Verifying or approving a domain for your organization](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)."

  ![发布者验证检查列表](/assets/images/marketplace/publisher-verification-checklist.png)

2. 单击 **Request Verification（申请验证）**。 {% data variables.product.company_short %} 将检查您的详细信息，并在您的发布者验证完成后通知您。

### 延伸阅读

有关发布应用程序的流程，请参阅“[关于 GitHub Marketplace](/developers/github-marketplace/about-github-marketplace)”。
