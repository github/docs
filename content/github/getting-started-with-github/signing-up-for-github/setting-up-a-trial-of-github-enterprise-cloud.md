---
title: Setting up a trial of GitHub Enterprise Cloud
intro: 'You can try {% data variables.product.prodname_ghe_cloud %} for free.'
redirect_from:
  - /articles/setting-up-a-trial-of-github-enterprise-cloud
  - /github/getting-started-with-github/setting-up-a-trial-of-github-enterprise-cloud
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Accounts
---
### About trials of {% data variables.product.prodname_ghe_cloud %}

You can set up a 14-day trial to evaluate {% data variables.product.prodname_ghe_cloud %} on a new organization account. You do not need to provide a payment method during the trial unless you add {% data variables.product.prodname_marketplace %} apps to your organization that require a payment method. For more information, see "<a href="/articles/about-billing-for-github-marketplace/" class="dotcom-only">About billing for {% data variables.product.prodname_marketplace %}</a>."

Your trial includes 50 seats. If you need more seats to evaluate {% data variables.product.prodname_ghe_cloud %}, contact {% data variables.contact.contact_enterprise_sales %}. At the end of the trial, you can choose a different number of seats.

Trials are also available for {% data variables.product.prodname_ghe_server %}. For more information, see "[Setting up a trial of {% data variables.product.prodname_ghe_server %}](/articles/setting-up-a-trial-of-github-enterprise-server)."

{% data reusables.products.which-product-to-use %}

### Setting up your trial of {% data variables.product.prodname_ghe_cloud %}

Before you can start your trial of {% data variables.product.prodname_ghe_cloud %}, you must have an existing user account or create a new user account. For more information, see "<a href="/articles/signing-up-for-a-new-github-account" class="dotcom-only">Signing up for a new {% data variables.product.prodname_dotcom %} account</a>."

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.organizations %}
{% data reusables.organizations.new-organization %}
4. Under "Enterprise", click **Start your 14-day free trial**.
  ![Button to start your trial](/assets/images/help/organizations/start-trial-button.png)
5. Type your company name.
  ![Company name field](/assets/images/help/organizations/company-name-field.png)
{% data reusables.organizations.organization-name %}
7. Under "Full name", type your full name.
  ![Full name field](/assets/images/help/organizations/full-name-field.png)
8. Under "Work email", type the email address you use for work.
  ![Work email field](/assets/images/help/organizations/work-email-field.png)
8. Use the **Industry** drop-down menu, and select the industry your company is in.
  ![Industry drop-down menu](/assets/images/help/organizations/industry-drop-down.png)
9. Use the **Number of employees** drop-down menu, and select the number of employees at your company.
 ![Number of employees drop-down menu](/assets/images/help/organizations/employees-drop-down.png)
10. Review the <a href="/articles/github-enterprise-cloud-evaluation-agreement" class="dotcom-only">Evaluation License Agreement</a>, then click **Next**.

### Exploring {% data variables.product.prodname_ghe_cloud %}

After setting up your trial, you can explore {% data variables.product.prodname_ghe_cloud %} by following the [Enterprise Onboarding Guide](https://resources.github.com/enterprise-onboarding/).

{% data reusables.products.product-roadmap %}

### Finishing your trial

You can buy {% data variables.product.prodname_enterprise %} or downgrade to {% data variables.product.prodname_team %} at any time during your trial.

If you don't purchase {% data variables.product.prodname_enterprise %} or {% data variables.product.prodname_team %} before your trial ends, your organization will be downgraded to {% data variables.product.prodname_free_team %} and lose access to any advanced tooling and features that are only included with paid products, including {% data variables.product.prodname_pages %} sites published from those private repositories. If you don't plan to upgrade, to avoid losing access to advanced features, make the repositories public before your trial ends. For more information, see "[Setting repository visibility](/articles/setting-repository-visibility)."

Downgrading to {% data variables.product.prodname_free_team %} for organizations also disables any SAML settings configured during the trial period. Once you purchase {% data variables.product.prodname_enterprise %} or {% data variables.product.prodname_team %}, your SAML settings will be enabled again for users in your organization to authenticate.


{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.billing_plans %}
5. Under "{% data variables.product.prodname_ghe_cloud %} Free Trial", click **Buy Enterprise** or **Downgrade to Team**.
  ![Buy Enterprise and Downgrade to Team buttons](/assets/images/help/organizations/finish-trial-buttons.png)
6. Follow the prompts to enter your payment method, then click **Submit**.

### Further reading

- "[Setting up a trial of {% data variables.product.prodname_ghe_server %}](/articles/setting-up-a-trial-of-github-enterprise-server)"
