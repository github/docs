---
title: 关于 Marketplace 徽章
intro: '了解您可能在 {% data variables.product.prodname_marketplace %} 上的某些应用程序和操作上架信息中看到的徽章。'
redirect_from:
  - /developers/github-marketplace/about-verified-creator-badges
versions:
  free-pro-team: '*'
---

### 对于 GitHub 应用程序

{% data variables.product.prodname_marketplace %} 上的某些应用有 {% octicon "verified" aria-label="The verified badge" %} 徽章以及显示“发布者域名和电子邮件已验证”的工具提示。 这意味着该应用由下列组织拥有：

- 已验证其域名的所有权，且其个人资料上有经过验证的徽章
- 已确认其电子邮件地址可用于 {% data variables.product.prodname_dotcom %} 支持人员联系该组织
- 对其组织要求双重身份验证 更多信息请参阅“[您的组织中需要双重身份验证](/organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization)”。

![GitHub 应用程序的 Marketplace 徽章](/assets/images/marketplace/apps-with-verified-publisher-badge-tooltip.png)

{% note %}
{% data variables.product.prodname_dotcom %} 不分析应用。 市场徽章 {% octicon "verified" aria-label="The verified badge" %} 只确认发布者符合上述要求。
{% endnote %}

要了解如何将此徽章添加到您的应用程序，请参阅“[为组织申请发布者验证](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)”。

{% data variables.product.prodname_marketplace %} 上的某些应用有 {% octicon "verified" aria-label="The verified badge" %} 徽章以及显示“应用符合列出的要求”而非“发布者域名和电子邮件已验证”的工具提示。 这意味着该应用满足“[列出应用的要求](/developers/github-marketplace/requirements-for-listing-an-app)”中所述的列出要求， 但发布者尚未经过验证，如“[为组织申请发布者验证](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)”中所述 。 在发布者成功申请验证之前，带有此徽章的应用无法更改其定价计划。

![GitHub 应用程序的 Marketplace 徽章](/assets/images/marketplace/apps-with-unverified-publisher-badge-tooltip.png)

有关在 {% data variables.product.prodname_marketplace %} 中上架应用程序的要求，请参阅“[在 {% data variables.product.prodname_marketplace %} 中上架应用程序的要求](/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace/)”。

有关如何查找要使用的应用程序，请参阅“[搜索 {% data variables.product.prodname_marketplace %}](/github/searching-for-information-on-github/searching-github-marketplace)”。

### 对于 GitHub Actions

带有 {% octicon "verified" aria-label="The verified badge" %} 或已验证创作者徽章的操作表示 {% data variables.product.prodname_dotcom %} 已验证操作的创建者为合作伙伴组织。

![GitHub Actions 的已验证创作者徽章](/assets/images/marketplace/verified-creator-badge-for-actions.png)

有关如何向 {% data variables.product.prodname_marketplace %} 发布 GitHub Actions，请参阅“[在 GitHub Marketplace 中发布操作](/actions/creating-actions/publishing-actions-in-github-marketplace)”。
