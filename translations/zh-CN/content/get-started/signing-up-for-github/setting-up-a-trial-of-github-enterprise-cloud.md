---
title: 设置 GitHub Enterprise Cloud 试用版
intro: '您可以免费试用 {% data variables.product.prodname_ghe_cloud %}。'
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
shortTitle: Enterprise Cloud 试用版
---

{% data reusables.enterprise.ghec-cta-button %}


## 关于 {% data variables.product.prodname_ghe_cloud %}

{% data reusables.organizations.about-organizations %}

You can use organizations for free with {% data variables.product.prodname_free_team %}, which includes limited features. For additional features, such as SAML single sign-on (SSO), access control for {% data variables.product.prodname_pages %}, and included {% data variables.product.prodname_actions %} minutes, you can upgrade to {% data variables.product.prodname_ghe_cloud %}. For a detailed list of the features available with {% data variables.product.prodname_ghe_cloud %}, see our [Pricing](https://github.com/pricing) page.

{% data reusables.saml.saml-accounts %}更多信息请参阅“<a href="/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on" class="dotcom-only">关于使用 SAML 单点登录管理身份和访问</a>”。

{% data reusables.products.which-product-to-use %}

## 关于 {% data variables.product.prodname_ghe_cloud %} 试用版

You can set up a 14-day trial to evaluate {% data variables.product.prodname_ghe_cloud %}. 在试用期间无需提供付款方式，除非您将 {% data variables.product.prodname_marketplace %} 应用程序添加到需要付款方式的组织。 更多信息请参阅“<a href="/articles/about-billing-for-github-marketplace/" class="dotcom-only">关于 {% data variables.product.prodname_marketplace %} 的计费</a>”。

试用版包括 50 个席位。 如果需要更多席位来评估 {% data variables.product.prodname_ghe_cloud %}，请联系 {% data variables.contact.contact_enterprise_sales %}。 在试用结束时，您可以选择不同数量的席位。

试用版也可用于 {% data variables.product.prodname_ghe_server %}。 更多信息请参阅“[设置 {% data variables.product.prodname_ghe_server %} 的试用](/articles/setting-up-a-trial-of-github-enterprise-server)”。

## 设置 {% data variables.product.prodname_ghe_cloud %} 的试用版

Before you can try {% data variables.product.prodname_ghe_cloud %}, you must be signed into a user account. If you don't already have a user account on {% data variables.product.prodname_dotcom_the_website %}, you must create one. 更多信息请参阅“<a href="/articles/signing-up-for-a-new-github-account" class="dotcom-only">注册新 {% data variables.product.prodname_dotcom %} 帐户</a>”。

1. Navigate to [{% data variables.product.prodname_dotcom %} for enterprises](https://github.com/enterprise).
1. Click **Start a free trial**. !["Start a free trial" button](/assets/images/help/organizations/start-a-free-trial-button.png)
1. Click **Enterprise Cloud**. !["Enterprise Cloud" button](/assets/images/help/organizations/enterprise-cloud-trial-option.png)
1. Follow the prompts to configure your trial.

## 探索 {% data variables.product.prodname_ghe_cloud %}

设置试用版后，您可以按照 [Enterprise 入门指南](https://resources.github.com/enterprise-onboarding/)来探索 {% data variables.product.prodname_ghe_cloud %}。

{% data reusables.products.product-roadmap %}

## 结束试用

在试用期间，您可以随时购买 {% data variables.product.prodname_enterprise %} 或降级到 {% data variables.product.prodname_team %}。

如果在试用期结束前没有购买 {% data variables.product.prodname_enterprise %} 或 {% data variables.product.prodname_team %} ， 您的组织将会降级到 {% data variables.product.prodname_free_team %}，不能使用只包含在付费产品中的任何高级工具和功能，包括从那些私有仓库发布的 {% data variables.product.prodname_pages %} 站点。 如果您不打算升级，为避免失去高级功能的使用权限，请在试用结束前将仓库设为公共。 更多信息请参阅“[设置仓库可见性](/articles/setting-repository-visibility)”。

对于组织来说，降级到 {% data variables.product.prodname_free_team %} 还会禁用试用期间配置的任何 SAML 设置。 购买 {% data variables.product.prodname_enterprise %} 或 {% data variables.product.prodname_team %} 后，您的 SAML 设置将再次启用，以便您组织中的用户进行身份验证。

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.billing_plans %}
5. 在“{% data variables.product.prodname_ghe_cloud %} Free Trial（GitHub Enterprise Cloud 免费试用）”下，单击 **Buy Enterprise（购买 Enterprise 版）**或 **Downgrade to Team（降级到 Team 版）**。 ![购买 Enterprise 版和降级到 Team 版按钮](/assets/images/help/organizations/finish-trial-buttons.png)
6. 按照提示输入付款方式，然后单击 **Submit（提交）**。
