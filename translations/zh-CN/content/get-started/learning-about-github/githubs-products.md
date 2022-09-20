---
title: GitHub 的产品
intro: '{% data variables.product.prodname_dotcom %} 的产品和定价计划概述。'
redirect_from:
  - /articles/github-s-products
  - /articles/githubs-products
  - /github/getting-started-with-github/githubs-products
  - /github/getting-started-with-github/learning-about-github/githubs-products
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
  - CLI
  - Mobile
  - Desktop
  - Security
ms.openlocfilehash: e8e78b3c2cf86369b53b063cdbcded6f7a048834
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147389945'
---
## 关于 {% data variables.product.prodname_dotcom %} 的产品

{% data variables.product.prodname_dotcom %} 提供免费和付费产品，用于存储和协作处理代码。 某些产品仅适用于个人帐户，而其他计划仅适用于组织和企业帐户。 有关帐户的详细信息，请参阅“[{% data variables.product.prodname_dotcom %} 帐户类型](/get-started/learning-about-github/types-of-github-accounts)”。

您可以在 <{% data variables.product.pricing_url %}> 上查看每款产品的价格和完整功能列表。 {% data reusables.products.product-roadmap %}

阅读 {% data variables.product.prodname_docs %} 时，请确保选择反映您的产品的版本。 有关详细信息，请参阅[关于 {% data variables.product.prodname_docs %} 的版本](/get-started/learning-about-github/about-versions-of-github-docs)。

## 个人帐户的 {% data variables.product.prodname_free_user %}

通过个人帐户的 {% data variables.product.prodname_free_team %}，可以在具有完整功能集的无限公共存储库和具有有限功能集的无限私有存储库上与无限的协作者合作。

使用 {% data variables.product.prodname_free_user %}，你的个人帐户包括：
- {% data variables.product.prodname_gcf %}
- {% data variables.product.prodname_dependabot_alerts %}
- 双因素身份验证实施
- 2,000 {% data variables.product.prodname_actions %} 分钟
- 500MB {% data variables.product.prodname_registry %} 存储空间

## {% data variables.product.prodname_pro %}

除了 {% data variables.product.prodname_free_user %} 为个人帐户提供的功能外，{% data variables.product.prodname_pro %} 还包括：
- 通过电子邮件提供的 {% data variables.contact.github_support %}
- 3,000 {% data variables.product.prodname_actions %} 分钟
- 2GB {% data variables.product.prodname_registry %} 存储空间
- 私有仓库中的高级工具和洞察力：
  - 所需拉取请求审阅者数
  - 多个拉取请求审阅者
  - 受保护的分支
  - 代码所有者
  - 自动链接的参考
  - {% data variables.product.prodname_pages %}
  - Wiki
  - 仓库洞察图：脉冲、贡献者、流量、提交、代码频率、网络和复刻

## 组织的 {% data variables.product.prodname_free_team %}

通过组织的 {% data variables.product.prodname_free_team %}，可与无限的协作者合作处理功能完全的无限公共仓库，或者是功能有限的无限私有仓库，

除了 {% data variables.product.prodname_free_user %} 为个人帐户提供的功能之外，适用于组织的 {% data variables.product.prodname_free_team %} 还包括：
- {% data variables.product.prodname_gcf %}
- 团队讨论
- 用于管理组的团队访问控制
- 2,000 {% data variables.product.prodname_actions %} 分钟
- 500MB {% data variables.product.prodname_registry %} 存储空间

## {% data variables.product.prodname_team %}

除了可用于组织的 {% data variables.product.prodname_free_team %} 的功能之外，{% data variables.product.prodname_team %} 还包含：
- 通过电子邮件提供的 {% data variables.contact.github_support %}
- 3,000 {% data variables.product.prodname_actions %} 分钟
- 2GB {% data variables.product.prodname_registry %} 存储空间
- 私有仓库中的高级工具和洞察力：
  - 所需拉取请求审阅者数
  - 多个拉取请求审阅者
  - 草稿拉取请求
  - 团队拉取请求审阅者
  - 受保护的分支
  - 代码所有者
  - 计划提醒
  - {% data variables.product.prodname_pages %}
  - Wiki
  - 存储库见解图：脉冲、参与者、流量、提交、代码频率、网络和分支 {%- ifversion fpt or ghec %}
- 用于启用 {% data variables.product.prodname_github_codespaces %} 的选项
  - 组织所有者可以通过设置支出限制并为组织成员授予用户权限来为组织启用 {% data variables.product.prodname_github_codespaces %}。 有关详细信息，请参阅“[为组织启用 {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)”。
{%- endif %}

{% data variables.product.company_short %} 每用户的 {% data variables.product.prodname_team %} 帐单。 有关详细信息，请参阅“Free、Pro 和团队”文档中的“[关于每用户定价]({% ifversion not fpt %}/free-pro-team@latest{% endif %}/billing/managing-billing-for-your-github-account/about-per-user-pricing){% ifversion fpt %}."{% else %}”。{% endif %}

{% data reusables.actions.actions-billing %}

## {% data variables.product.prodname_enterprise %}

{% data variables.product.prodname_enterprise %} 包括两个部署选项：云托管和自托管。 

除了 {% data variables.product.prodname_team %} 的可用功能之外，{% data variables.product.prodname_enterprise %} 还包括：
- {% data variables.contact.enterprise_support %}
- 更多安全、合规和部署控件
- 通过 SAML 单一登录进行身份验证
- 使用 SAML 或 SCIM 预配访问
- {% data variables.product.prodname_github_connect %}
- 购买 {% data variables.product.prodname_GH_advanced_security %} 的选项。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)”。

{% data variables.product.prodname_ghe_cloud %} 还包括：
- {% data variables.contact.enterprise_support %}. 有关详细信息，请参阅“<a href="/articles/github-enterprise-cloud-support" class="dotcom-only">{% data variables.product.prodname_ghe_cloud %} 支持</a>”和“<a href="/articles/github-enterprise-cloud-addendum" class="dotcom-only">{% data variables.product.prodname_ghe_cloud %} 附录</a>”。
- 50,000 {% data variables.product.prodname_actions %} 分钟
- 50GB {% data variables.product.prodname_registry %} 存储空间
- {% data variables.product.prodname_pages %} 站点的访问控制。 有关详细信息，请参阅“[更改 {% data variables.product.prodname_pages %} 站点的可见性](/enterprise-cloud@latest/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)”。
- 每月 99.9% 运行时间的服务级别协议
- 用于为 {% data variables.product.prodname_emus %} 配置企业的选项，以便您可以使用身份提供程序预配和管理成员，并限制成员只能参与企业。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)”。
- 通过企业帐户集中管理多个 {% data variables.product.prodname_dotcom_the_website %} 组织的策略和帐单的选项。 有关详细信息，请参阅“[关于企业帐户](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts)”。

{% data reusables.enterprise.about-github-for-enterprises %}

您可以设置试用版来评估 {% data variables.product.prodname_ghe_cloud %}。 有关详细信息，请参阅“[设置试用版 {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/articles/setting-up-a-trial-of-github-enterprise-cloud)”。

有关托管自己的 {% data variables.product.prodname_ghe_server %} 的详细信息（包括设置试用版），请参阅“[关于 {% data variables.product.prodname_ghe_server %}](/enterprise-server/admin/overview/about-github-enterprise-server)”。

## 延伸阅读

- {% data variables.product.prodname_ghe_cloud %} 文档中的“[关于按用户定价]({% ifversion not ghec %}/enterprise-cloud@latest{% endif %}/billing/managing-billing-for-your-github-account/about-per-user-pricing)”{% ifversion not ghec %}"{% endif %}
