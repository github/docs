---
title: Setting up a trial of GitHub Enterprise Cloud
intro: 'You can try {% data variables.product.prodname_ghe_cloud %} for free.'
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
---

{% data reusables.enterprise.ghec-cta-button %}


## About {% data variables.product.prodname_ghe_cloud %}

{% data variables.product.prodname_ghe_cloud %} is a plan for large businesses or teams who collaborate on {% data variables.product.prodname_dotcom_the_website %}.

{% data reusables.organizations.about-organizations %} For more information about accounts, see "[Types of {% data variables.product.prodname_dotcom %} accounts](/get-started/learning-about-github/types-of-github-accounts)."

You can use organizations for free with {% data variables.product.prodname_free_team %}, which includes limited features. For additional features, such as SAML single sign-on (SSO), access control for {% data variables.product.prodname_pages %}, and included {% data variables.product.prodname_actions %} minutes, you can upgrade to {% data variables.product.prodname_ghe_cloud %}. For a detailed list of the features available with {% data variables.product.prodname_ghe_cloud %}, see our [Pricing](https://github.com/pricing) page.

You can set up a trial of {% data variables.product.prodname_ghe_cloud %} to evaluate these additional features on a new or existing organization account.

Trials are also available for {% data variables.product.prodname_ghe_server %}. For more information, see "[Setting up a trial of {% data variables.product.prodname_ghe_server %}](/articles/setting-up-a-trial-of-github-enterprise-server)."

{% data reusables.products.which-product-to-use %}

## About trials of {% data variables.product.prodname_ghe_cloud %}

You can set up a 30-day trial to evaluate {% data variables.product.prodname_ghe_cloud %}. You do not need to provide a payment method during the trial unless you add {% data variables.product.prodname_marketplace %} apps to your organization that require a payment method. For more information, see "[About billing for {% data variables.product.prodname_marketplace %}](/enterprise-cloud@latest/articles/about-billing-for-github-marketplace/)."

Your trial includes 50 seats. If you need more seats to evaluate {% data variables.product.prodname_ghe_cloud %}, contact {% data variables.contact.contact_enterprise_sales %}. At the end of the trial, you can choose a different number of seats.

{% data reusables.saml.saml-accounts %}

For more information, see "[About identity and access management with SAML single sign-on](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on){% ifversion not ghec %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}

{% data variables.product.prodname_emus %} is not part of the free trial of {% data variables.product.prodname_ghe_cloud %}. If you're interested in {% data variables.product.prodname_emus %}, please contact [{% data variables.product.prodname_dotcom %}'s Sales team](https://enterprise.github.com/contact).

## Setting up your trial of {% data variables.product.prodname_ghe_cloud %}

Before you can try {% data variables.product.prodname_ghe_cloud %}, you must be signed into a personal account. If you don't already have a personal account on {% data variables.product.prodname_dotcom_the_website %}, you must create one. For more information, see "[Signing up for a new {% data variables.product.prodname_dotcom %} account](/free-pro-team@latest/articles/signing-up-for-a-new-github-account)."

1. Navigate to [{% data variables.product.prodname_dotcom %} for enterprises](https://github.com/enterprise).
1. Click **Start a free trial**.
   !["Start a free trial" button](/assets/images/help/organizations/start-a-free-trial-button.png)
1. Click **Enterprise Cloud**.
   !["Enterprise Cloud" button](/assets/images/help/organizations/enterprise-cloud-trial-option.png)
1. Follow the prompts to configure your trial.

## Exploring {% data variables.product.prodname_ghe_cloud %}

After you set up your trial, you can explore {% data variables.product.prodname_ghe_cloud %} by following the suggested tasks on the "Overview" tab of your organization. If you've previously dismissed the tasks, you can access them again by clicking **Get started with suggested tasks** at the top of the page.

!["Get started with suggested tasks" button](/assets/images/help/organizations/suggested-tasks-button.png)

{% data reusables.docs.you-can-read-docs-for-your-product %}

{% data reusables.products.product-roadmap %}

## Finishing your trial

You can buy {% data variables.product.prodname_enterprise %} at any time during your trial. Purchasing {% data variables.product.prodname_enterprise %} ends your trial, removing the 50-seat maximum and initiating payment.

If you don't purchase {% data variables.product.prodname_enterprise %}, when the trial ends, your organization will be downgraded. If you used an existing organization for the trial, the organization will be downgraded to the product you were using before the trial. If you created a new organization for the trial, the organization will be downgraded to {% data variables.product.prodname_free_team %}. 

Your organization will lose access to any functionality that is not included in the new product, such as advanced features like {% data variables.product.prodname_pages %} for private repositories. If you don't plan to upgrade, to avoid losing access to advanced features, consider making affected repositories public before your trial ends. For more information, see "[Setting repository visibility](/articles/setting-repository-visibility)."

Downgrading also disables any SAML settings configured during the trial period. If you later purchase {% data variables.product.prodname_enterprise %}, your SAML settings will be enabled again for users in your organization to authenticate.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.billing_plans %}
5. Under "{% data variables.product.prodname_ghe_cloud %} Free Trial", click **Buy Enterprise** or **Downgrade to Team**.
  ![Buy Enterprise and Downgrade to Team buttons](/assets/images/help/organizations/finish-trial-buttons.png)
6. Follow the prompts to enter your payment method, then click **Submit**.
