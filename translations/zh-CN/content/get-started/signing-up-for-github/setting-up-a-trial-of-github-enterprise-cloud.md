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

{% data variables.product.prodname_ghe_cloud %} is a plan for large businesses or teams who collaborate on {% data variables.product.prodname_dotcom_the_website %}.

{% data reusables.organizations.about-organizations %} For more information about accounts, see "[Types of {% data variables.product.prodname_dotcom %} accounts](/get-started/learning-about-github/types-of-github-accounts)."

You can use organizations for free with {% data variables.product.prodname_free_team %}, which includes limited features. For additional features, such as SAML single sign-on (SSO), access control for {% data variables.product.prodname_pages %}, and included {% data variables.product.prodname_actions %} minutes, you can upgrade to {% data variables.product.prodname_ghe_cloud %}. For a detailed list of the features available with {% data variables.product.prodname_ghe_cloud %}, see our [Pricing](https://github.com/pricing) page.

You can set up a trial of {% data variables.product.prodname_ghe_cloud %} to evaluate these additional features on a new or existing organization account.

试用版也可用于 {% data variables.product.prodname_ghe_server %}。 更多信息请参阅“[设置 {% data variables.product.prodname_ghe_server %} 的试用](/articles/setting-up-a-trial-of-github-enterprise-server)”。

{% data reusables.products.which-product-to-use %}

## 关于 {% data variables.product.prodname_ghe_cloud %} 试用版

You can set up a 30-day trial to evaluate {% data variables.product.prodname_ghe_cloud %}. 在试用期间无需提供付款方式，除非您将 {% data variables.product.prodname_marketplace %} 应用程序添加到需要付款方式的组织。 更多信息请参阅“<a href="/articles/about-billing-for-github-marketplace/" class="dotcom-only">关于 {% data variables.product.prodname_marketplace %} 的计费</a>”。

试用版包括 50 个席位。 如果需要更多席位来评估 {% data variables.product.prodname_ghe_cloud %}，请联系 {% data variables.contact.contact_enterprise_sales %}。 在试用结束时，您可以选择不同数量的席位。

{% data reusables.saml.saml-accounts %}

For more information, see "[About identity and access management with SAML single sign-on](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on){% ifversion not ghec %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}

{% data variables.product.prodname_emus %} is not part of the free trial of {% data variables.product.prodname_ghe_cloud %}. If you're interested in {% data variables.product.prodname_emus %}, please contact [{% data variables.product.prodname_dotcom %}'s Sales team](https://enterprise.github.com/contact).

## 设置 {% data variables.product.prodname_ghe_cloud %} 的试用版

Before you can try {% data variables.product.prodname_ghe_cloud %}, you must be signed into a user account. If you don't already have a user account on {% data variables.product.prodname_dotcom_the_website %}, you must create one. 更多信息请参阅“<a href="/articles/signing-up-for-a-new-github-account" class="dotcom-only">注册新 {% data variables.product.prodname_dotcom %} 帐户</a>”。

1. Navigate to [{% data variables.product.prodname_dotcom %} for enterprises](https://github.com/enterprise).
1. Click **Start a free trial**. !["Start a free trial" button](/assets/images/help/organizations/start-a-free-trial-button.png)
1. Click **Enterprise Cloud**. !["Enterprise Cloud" button](/assets/images/help/organizations/enterprise-cloud-trial-option.png)
1. Follow the prompts to configure your trial.

## 探索 {% data variables.product.prodname_ghe_cloud %}

设置试用版后，您可以按照 [Enterprise 入门指南](https://resources.github.com/enterprise-onboarding/)来探索 {% data variables.product.prodname_ghe_cloud %}。

{% data reusables.docs.you-can-read-docs-for-your-product %}

{% data reusables.products.product-roadmap %}

## 结束试用

You can buy {% data variables.product.prodname_enterprise %} at any time during your trial. Purchasing {% data variables.product.prodname_enterprise %} ends your trial, removing the 50-seat maximum and initiating payment.

If you don't purchase {% data variables.product.prodname_enterprise %}, when the trial ends, your organization will be downgraded. If you used an existing organization for the trial, the organization will be downgraded to the product you were using before the trial. If you created a new organization for the trial, the organization will be downgraded to {% data variables.product.prodname_free_team %}.

Your organization will lose access to any functionality that is not included in the new product, such as advanced features like {% data variables.product.prodname_pages %} for private repositories. If you don't plan to upgrade, to avoid losing access to advanced features, consider making affected repositories public before your trial ends. 更多信息请参阅“[设置仓库可见性](/articles/setting-repository-visibility)”。

Downgrading also disables any SAML settings configured during the trial period. If you later purchase {% data variables.product.prodname_enterprise %}, your SAML settings will be enabled again for users in your organization to authenticate.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.billing_plans %}
5. 在“{% data variables.product.prodname_ghe_cloud %} Free Trial（GitHub Enterprise Cloud 免费试用）”下，单击 **Buy Enterprise（购买 Enterprise 版）**或 **Downgrade to Team（降级到 Team 版）**。 ![购买 Enterprise 版和降级到 Team 版按钮](/assets/images/help/organizations/finish-trial-buttons.png)
6. 按照提示输入付款方式，然后单击 **Submit（提交）**。
