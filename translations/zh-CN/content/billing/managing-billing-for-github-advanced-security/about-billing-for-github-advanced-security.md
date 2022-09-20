---
title: 关于 GitHub 高级安全的计费
intro: '如果要在私有或内部存储库中使用 {% data variables.product.prodname_GH_advanced_security %} 功能{% ifversion fpt or ghec %}{% endif %}，则需要{% ifversion fpt %}企业{% endif %}的许可证。{% ifversion fpt or ghec %} 这些功能可免费用于 {% data variables.product.prodname_dotcom_the_website %} 上的公共存储库。{% endif %}'
product: '{% data reusables.gated-features.ghas %}'
redirect_from:
  - /admin/advanced-security/about-licensing-for-github-advanced-security
  - /billing/managing-licensing-for-github-advanced-security/about-licensing-for-github-advanced-security
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-licensing-for-github-advanced-security
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-licensing-for-github-advanced-security/about-licensing-for-github-advanced-security
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Enterprise
  - Licensing
shortTitle: Advanced Security billing
ms.openlocfilehash: 09e7634b5ab0ace00c847f9db9faf229fc8e840e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066928'
---
## 关于 {% data variables.product.prodname_GH_advanced_security %} 的计费

{% ifversion fpt %}

如果要在除 {% data variables.product.prodname_dotcom_the_website %} 上的公共存储库之外的任何存储库上使用 {% data variables.product.prodname_GH_advanced_security %} 功能，则需要 {% data variables.product.prodname_GH_advanced_security %} 许可证，该许可证随 {% data variables.product.prodname_ghe_cloud %} 或 {% data variables.product.prodname_ghe_server %} 一起提供。 有关 {% data variables.product.prodname_GH_advanced_security %} 的详细信息，请参阅“[关于 {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)”。

有关 {% data variables.product.prodname_GH_advanced_security %} 的计费的详细信息，请参阅“[{% data variables.product.prodname_ghe_cloud %} 文档](/enterprise-cloud@latest/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)”。

{% elsif ghec %}

如果要在除 {% data variables.product.prodname_dotcom_the_website %} 上的公共存储库之外的任何存储库上使用 {% data variables.product.prodname_GH_advanced_security %} 功能，则需要 {% data variables.product.prodname_GH_advanced_security %} 许可证。 有关 {% data variables.product.prodname_GH_advanced_security %} 的详细信息，请参阅“[关于 {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)”。

{% elsif ghes %}

您可以通过购买和上传 {% data variables.product.prodname_GH_advanced_security %} 许可为用户提供额外的代码安全功能。 有关 {% data variables.product.prodname_GH_advanced_security %} 的详细信息，请参阅“[关于 {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)”。

{% endif %}

{% ifversion ghes or ghec %}

{% data reusables.advanced-security.license-overview %}

要讨论为企业许可 {% data variables.product.prodname_GH_advanced_security %}，请联系 {% data variables.contact.contact_enterprise_sales %}。

## 关于 {% data variables.product.prodname_GH_advanced_security %} 的提交者数量

{% data reusables.advanced-security.about-committer-numbers-ghec-ghes %}

{% ifversion fpt or ghes or ghec %}

{% data reusables.advanced-security.managing-license-usage-ghec-ghes %}

{% endif %}

您可以执行策略以允许或不允许企业帐户拥有的组织使用 {% data variables.product.prodname_advanced_security %}。 有关详细信息，请参阅 {% data variables.product.prodname_ghe_cloud %} 文档中的“[在企业中强制实施 {% data variables.product.prodname_advanced_security %} 的策略]({% ifversion fpt %}/enterprise-cloud@latest/{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise){% ifversion fpt %}{% else %}”。{% endif %}

{% ifversion fpt or ghes or ghec %}

有关查看许可证使用情况的详细信息，请参阅“[查看 {% data variables.product.prodname_GH_advanced_security %} 使用情况](/billing/managing-billing-for-github-advanced-security/viewing-your-github-advanced-security-usage)”。

{% endif %}

## 了解活动提交者的使用情况

以下示例时间线演示了企业中 {% data variables.product.prodname_GH_advanced_security %} 的活动提交者计数如何随时间变化。 对于每个月，您都会找到事件以及由此产生的提交者计数。

| 日期 | 本月活动 | 提交者总数 | 
| :- | :- | -: | 
| <nobr>4 月 15 日</nobr> | 企业成员为存储库“X”启用 {% data variables.product.prodname_GH_advanced_security %}。存储库“X”在过去 90 天内有 50 个提交者。 | **50** | 
| <nobr>5 月 1 日</nobr> | 开发人员“A”离开了开发存储库“X”的团队。开发者“A”的贡献将持续 90 天 。 | **50** | **50** |
| <nobr>8 月 1 日</nobr> | 开发者“A”的贡献不再计入所需的许可证，因为已超过 90 天。 | <sub>_50 - 1_</sub></br>**49** | 
| <nobr>8 月 15 日</nobr> | 企业成员为第二个存储库（存储库“Y”）启用了 {% data variables.product.prodname_GH_advanced_security %}。在过去的 90 天内，共有 20 名开发人员对该存储库做出了贡献。 在这 20 名开发人员中，有 10 名最近还参与了存储库“X”的开发，不需要额外的许可证。 | <sub>_49 + 10_</sub><br/>**59** | 
| <nobr>8 月 16 日</nobr> | 企业成员禁用了存储库“X”的 {% data variables.product.prodname_GH_advanced_security %}。在开发存储库“X”的 49 位开发人员中，有 10 位仍在开发存储库“Y”，在过去 90 天内共有 20 位开发人员参与。 | <sub>_49 - 29_</sub><br/>**20** |

{% note %}

注意：当用户的提交被推送到存储库的任何分支时，即使提交是在 90 天以前创作的，用户也会被标记为活动状态。

{% endnote %}

## 充分利用您的 {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.getting-the-most-from-your-license %}

{% endif %}
