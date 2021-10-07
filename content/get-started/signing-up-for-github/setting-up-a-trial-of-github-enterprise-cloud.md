---
title: Setting up a trial of GitHub Enterprise Cloud
intro: 'You can try {% data variables.product.prodname_ghe_cloud %} for free.'
redirect_from:
  - /articles/setting-up-a-trial-of-github-enterprise-cloud
  - /github/getting-started-with-github/setting-up-a-trial-of-github-enterprise-cloud
  - /github/getting-started-with-github/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud
versions:
  fpt: '*'
  ghes: '*'
topics:
  - Accounts
shortTitle: Enterprise Cloud trial
---

{% data reusables.enterprise.ghec-cta-button %}


## About {% data variables.product.prodname_ghe_cloud %}

{% data reusables.organizations.about-organizations %}

You can use organizations for free with {% data variables.product.prodname_free_team %}, which includes limited features. For additional features, such as SAML single sign-on (SSO), access control for {% data variables.product.prodname_pages %}, and included {% data variables.product.prodname_actions %} minutes, you can upgrade to {% data variables.product.prodname_ghe_cloud %}. For a detailed list of the features available with {% data variables.product.prodname_ghe_cloud %}, see our [Pricing](https://github.com/pricing) page.

{% data reusables.saml.saml-accounts %} For more information, see "<a href="/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on" class="dotcom-only">About identity and access management with SAML single sign-on</a>."

{% data reusables.products.which-product-to-use %}

## About trials of {% data variables.product.prodname_ghe_cloud %}

You can set up a 14-day trial to evaluate {% data variables.product.prodname_ghe_cloud %}. You do not need to provide a payment method during the trial unless you add {% data variables.product.prodname_marketplace %} apps to your organization that require a payment method. For more information, see "<a href="/articles/about-billing-for-github-marketplace/" class="dotcom-only">About billing for {% data variables.product.prodname_marketplace %}</a>."

Your trial includes 50 seats. If you need more seats to evaluate {% data variables.product.prodname_ghe_cloud %}, contact {% data variables.contact.contact_enterprise_sales %}. At the end of the trial, you can choose a different number of seats.

Trials are also available for {% data variables.product.prodname_ghe_server %}. For more information, see "[Setting up a trial of {% data variables.product.prodname_ghe_server %}](/articles/setting-up-a-trial-of-github-enterprise-server)."

## Setting up your trial of {% data variables.product.prodname_ghe_cloud %}

Before you can try {% data variables.product.prodname_ghe_cloud %}, you must be signed into a user account. If you don't already have a user account on {% data variables.product.prodname_dotcom_the_website %}, you must create one. For more information, see "<a href="/articles/signing-up-for-a-new-github-account" class="dotcom-only">Signing up for a new {% data variables.product.prodname_dotcom %} account</a>."

1. Navigate to [{% data variables.product.prodname_dotcom %} for enterprises](https://github.com/enterprise).
1. Click **Start a free trial**.
   !["Start a free trial" button](/assets/images/help/organizations/start-a-free-trial-button.png)
1. Click **Enterprise Cloud**.
   !["Enterprise Cloud" button](/assets/images/help/organizations/enterprise-cloud-trial-option.png)
1. Follow the prompts to configure your trial.

## Exploring {% data variables.product.prodname_ghe_cloud %}

After setting up your trial, you can explore {% data variables.product.prodname_ghe_cloud %} by following the [Enterprise Onboarding Guide](https://resources.github.com/enterprise-onboarding/).

{% data reusables.products.product-roadmap %}

## Finishing your trial

You can buy {% data variables.product.prodname_enterprise %} or downgrade to {% data variables.product.prodname_team %} at any time during your trial.

If you don't purchase {% data variables.product.prodname_enterprise %} or {% data variables.product.prodname_team %} before your trial ends, your organization will be downgraded to {% data variables.product.prodname_free_team %} and lose access to any advanced tooling and features that are only included with paid products, including {% data variables.product.prodname_pages %} sites published from those private repositories. If you don't plan to upgrade, to avoid losing access to advanced features, make the repositories public before your trial ends. For more information, see "[Setting repository visibility](/articles/setting-repository-visibility)."

Downgrading to {% data variables.product.prodname_free_team %} for organizations also disables any SAML settings configured during the trial period. Once you purchase {% data variables.product.prodname_enterprise %} or {% data variables.product.prodname_team %}, your SAML settings will be enabled again for users in your organization to authenticate.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.billing_plans %}
5. Under "{% data variables.product.prodname_ghe_cloud %} Free Trial", click **Buy Enterprise** or **Downgrade to Team**.
  ![Buy Enterprise and Downgrade to Team buttons](/assets/images/help/organizations/finish-trial-buttons.png)
6. Follow the prompts to enter your payment method, then click **Submit**.
