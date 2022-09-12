---
title: 关于 Marketplace 徽章
intro: '了解您可能在 {% data variables.product.prodname_marketplace %} 上的某些应用程序和操作上架信息中看到的徽章。'
redirect_from:
  - /developers/github-marketplace/about-verified-creator-badges
  - /developers/github-marketplace/about-marketplace-badges
versions:
  fpt: '*'
  ghec: '*'
ms.openlocfilehash: bba9137fc39c1bc101a75650dcea03e651d37fff
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145084977'
---
## 对于 GitHub 应用程序

{% data variables.product.prodname_marketplace %} 上的某些应用有 {% octicon "verified" aria-label="The verified badge" %} 徽章以及显示“发布者域名和电子邮件已验证”的工具提示。 这意味着该应用由下列组织拥有：

- 已验证其域名的所有权，且其个人资料上有经过验证的徽章
- 已确认其电子邮件地址可用于 {% data variables.product.prodname_dotcom %} 支持人员联系该组织
- 对其组织要求双重身份验证 有关详细信息，请参阅“[要求在组织中进行双因素身份验证](/organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization)”。

![GitHub 应用市场徽章](/assets/images/marketplace/apps-with-verified-publisher-badge-tooltip.png)

{% note %} {% data variables.product.prodname_dotcom %} 不分析应用。 市场徽章 {% octicon "verified" aria-label="The verified badge" %} 只确认发布者符合上述要求。
{% endnote %}

若要了解如何将此徽章添加到应用，请参阅“[为组织申请发布者验证](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)”。

{% data variables.product.prodname_marketplace %} 上的某些应用有 {% octicon "verified" aria-label="The verified badge" %} 徽章以及显示“应用符合列出的要求”而非“发布者域名和电子邮件已验证”的工具提示。 这意味着该应用满足“[上架应用的要求](/developers/github-marketplace/requirements-for-listing-an-app)”中所述的上架要求，但发布者尚未经过验证，如“[为组织申请发布者验证](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)”中所述。 在发布者成功申请验证之前，带有此徽章的应用无法更改其定价计划。

![GitHub 应用市场徽章](/assets/images/marketplace/apps-with-unverified-publisher-badge-tooltip.png)

有关在 {% data variables.product.prodname_marketplace %} 中上架应用的要求的详细信息，请参阅“[在 {% data variables.product.prodname_marketplace %} 中上架应用的要求](/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace/)”。

有关查找要使用的应用的信息，请参阅“[搜索 {% data variables.product.prodname_marketplace %}](/search-github/searching-on-github/searching-github-marketplace)”。

## 对于 GitHub Actions 

带有 {% octicon "verified" aria-label="The verified badge" %} 或已验证创作者徽章的操作表示 {% data variables.product.prodname_dotcom %} 已验证操作的创建者为合作伙伴组织。

![GitHub Actions 的已验证创作者徽章](/assets/images/marketplace/verified-creator-badge-for-actions.png)

有关如何向 {% data variables.product.prodname_marketplace %} 发布 GitHub 操作的信息，请参阅“[在 GitHub Marketplace 中发布操作](/actions/creating-actions/publishing-actions-in-github-marketplace)”。
