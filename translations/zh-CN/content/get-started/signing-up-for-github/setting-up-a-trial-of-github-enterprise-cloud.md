---
title: 设置 GitHub Enterprise Cloud 试用版
intro: '可以免费试用 {% data variables.product.prodname_ghe_cloud %}。'
redirect_from:
  - /articles/setting-up-a-trial-of-github-enterprise-cloud
  - /github/getting-started-with-github/setting-up-a-trial-of-github-enterprise-cloud
  - /github/getting-started-with-github/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Accounts
shortTitle: Enterprise Cloud trial
ms.openlocfilehash: a50aebc43ba5d674af132786ffb75e5fb3029aeb
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/28/2022
ms.locfileid: '148183986'
---
{% data reusables.enterprise.ghec-cta-button %}


## 关于 {% data variables.product.prodname_ghe_cloud %}

{% data variables.product.prodname_ghe_cloud %} 是为在 {% data variables.product.prodname_dotcom_the_website %} 上进行协作的大型企业或团队制定的计划。 {% data reusables.enterprise.about-github-for-enterprises %}

{% data reusables.organizations.about-organizations %} 有关帐户的详细信息，请参阅“[{% data variables.product.prodname_dotcom %} 帐户类型](/get-started/learning-about-github/types-of-github-accounts)”。

您可以通过 {% data variables.product.prodname_free_team %} 免费使用组织，其中包括有限的功能。 对于其他功能，例如 SAML 单点登录 (SSO)、{% data variables.product.prodname_pages %} 的访问控制以及包含的 {% data variables.product.prodname_actions %} 分钟数，您可以升级到 {% data variables.product.prodname_ghe_cloud %}。 有关 {% data variables.product.prodname_ghe_cloud %} 可用功能的详细列表，请参阅我们的[定价](https://github.com/pricing)页面。

您可以设置 {% data variables.product.prodname_ghe_cloud %} 试用版，以评估新组织帐户或现有组织帐户上的这些附加功能。

试用版也可用于 {% data variables.product.prodname_ghe_server %}。 有关详细信息，请参阅“[设置试用版 {% data variables.product.prodname_ghe_server %}](/articles/setting-up-a-trial-of-github-enterprise-server)”。

{% data reusables.products.which-product-to-use %}

## 关于 {% data variables.product.prodname_ghe_cloud %} 试用版

您可以设置 30 天试用版来试用 {% data variables.product.prodname_ghe_cloud %}。 在试用期间无需提供付款方式，除非您将 {% data variables.product.prodname_marketplace %} 应用程序添加到需要付款方式的组织。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_marketplace %} 的计费](/enterprise-cloud@latest/articles/about-billing-for-github-marketplace/)”。

试用版包括 50 个席位。 如果需要更多席位来评估 {% data variables.product.prodname_ghe_cloud %}，请联系 {% data variables.contact.contact_enterprise_sales %}。 在试用结束时，您可以选择不同数量的席位。

{% data reusables.saml.saml-accounts %}

有关详细信息，请参阅 {% data variables.product.prodname_ghe_cloud %} 文档中的“[关于使用 SAML 单一登录进行标识和访问管理](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on){% ifversion not ghec %}”。{% else %} {% endif %}

{% data variables.product.prodname_emus %} 不是 {% data variables.product.prodname_ghe_cloud %} 免费试用版的一部分。 如果你对 {% data variables.product.prodname_emus %} 感兴趣，请联系 [{% data variables.product.prodname_dotcom %} 的销售团队](https://enterprise.github.com/contact)。

## 设置 {% data variables.product.prodname_ghe_cloud %} 的试用版

在尝试 {% data variables.product.prodname_ghe_cloud %} 之前，你必须登录到个人帐户。 如果你在 {% data variables.product.prodname_dotcom_the_website %} 上还没有个人帐户，则必须创建一个。 有关详细信息，请参阅“[注册新 {% data variables.product.prodname_dotcom %} 帐户](/free-pro-team@latest/articles/signing-up-for-a-new-github-account)”。

1. 导航到 [{% data variables.product.prodname_dotcom %} 企业版](https://github.com/enterprise)。
1. 单击“开始使用免费试用版”。
   ![“开始使用免费试用版”按钮](/assets/images/help/organizations/start-a-free-trial-button.png)
1. 单击“Enterprise Cloud”。
   ![“Enterprise Cloud”按钮](/assets/images/help/organizations/enterprise-cloud-trial-option.png)
1. 按照提示配置试用版。

## 探索 {% data variables.product.prodname_ghe_cloud %}

设置试用版后，可以按照组织的“概述”选项卡上的建议任务进行操作以探索 {% data variables.product.prodname_ghe_cloud %}。 如果你之前关闭了这些任务，可以通过单击页面顶部的“开始执行建议的任务”来再次访问这些任务。

![“开始执行建议的任务”按钮](/assets/images/help/organizations/suggested-tasks-button.png)

{% data reusables.docs.you-can-read-docs-for-your-product %}

{% data reusables.enterprise.best-practices %}

{% data reusables.products.product-roadmap %}

## 结束试用

在试用期间，您可以随时购买 {% data variables.product.prodname_enterprise %}。 购买 {% data variables.product.prodname_enterprise %} 将结束试用期，取消最多 50 个席位并开始付款。

如果不购买 {% data variables.product.prodname_enterprise %}，试用期将持续到 30 天期限结束。 不能提前结束试用。 试用期结束后，你的组织将被降级。 如果您使用现有组织进行试用，则该组织将降级为您在试用之前使用的产品。 如果您为试用版创建了新组织，则该组织将降级至 {% data variables.product.prodname_free_team %}。 

贵组织将无法访问新计划中未包含的任何功能，例如私有存储库的 {% data variables.product.prodname_pages %} 等高级功能。 如果您不打算升级，为避免无法访问高级功能，请考虑在试用期结束前公开受影响的存储库。 有关详细信息，请参阅“[设置存储库可见性](/articles/setting-repository-visibility)”。

降级还会禁用在试用期内配置的任何 SAML 设置。 如果您以后购买了 {% data variables.product.prodname_enterprise %}，则将再次启用 SAML 设置，以便组织中的用户进行身份验证。

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.billing_plans %}
5. 在“{% data variables.product.prodname_ghe_cloud %} 免费试用版”下，单击“购买 Enterprise 版”或“降级到 Team 版” 。
  ![“购买 Enterprise 版”和“降级到 Team 版”按钮](/assets/images/help/organizations/finish-trial-buttons.png)
6. 按照提示输入付款方式，然后单击“提交”。
