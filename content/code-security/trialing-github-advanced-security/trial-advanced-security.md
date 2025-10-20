---
title: Setting up a trial of GitHub Advanced Security
intro: 'You can try the full set of {% data variables.product.prodname_GHAS %} features for free.'
permissions: '{% data reusables.advanced-security.ghas-trial-permission %}'
product: '{% data reusables.gated-features.ghas-trial %}'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '> 3.15'
redirect_from:
  - /billing/managing-billing-for-github-advanced-security/setting-up-a-trial-of-github-advanced-security
  - /billing/managing-billing-for-your-products/managing-billing-for-github-advanced-security/setting-up-a-trial-of-github-advanced-security
  - /billing/how-tos/products/trial-advanced-security
topics:
  - Billing
  - Advanced Security
  - Enterprise
shortTitle: Trial Advanced Security
contentType: how-tos
---

## Prerequisites

To set up a trial of {% data variables.product.prodname_GHAS %} using this method, you must meet the following criteria:

1. Be an owner of an enterprise account. See [AUTOTITLE](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts).
1. Pay by credit card or PayPal.
1. Have not previously purchased or had a trial of {% data variables.product.prodname_GHAS %}.
1. You are not already using metered billing for {% data variables.product.prodname_GHAS %}.

> [!TIP]
> * **No enterprise account?** Start a trial of {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_GHAS %}. See [AUTOTITLE](/enterprise-cloud@latest/admin/overview/setting-up-a-trial-of-github-enterprise-cloud).
> * **Pay by invoice** Contact {% data variables.contact.contact_enterprise_sales %} to arrange a trial.

## Setting up your trial of {% data variables.product.prodname_GHAS %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.licensing-tab-both-platforms %}
1. To the right of "{% data variables.product.prodname_GHAS %}", click **Start free trial**.
1. Click **Start trial**.

   During a trial of {% data variables.product.prodname_GHAS %}, you can add any number of committers and enable {% data variables.product.prodname_GH_cs_and_sp %} for any number of organizations.

## Finishing your trial

You can finish your trial at any time by purchasing licenses for {% data variables.product.prodname_GH_cs_or_sp %}. If you haven't made a purchase by the end of the 30 days, your trial will expire.

If you pay for {% data variables.product.prodname_ghe_cloud %} with metered billing, but did not set up a free trial of {% data variables.product.prodname_GHAS %}, you can still use metered-based billing to pay for {% data variables.product.prodname_AS %} products after the {% data variables.product.prodname_ghe_cloud %} trial ends. For more information, contact [{% data variables.product.prodname_dotcom %}'s Sales team](https://enterprise.github.com/contact).

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.licensing-tab-both-platforms %}
1. To the right of "{% data variables.product.prodname_GHAS %} trial", select the **Manage** dropdown menu and click **Purchase**.
{% data reusables.advanced-security.purchase-ghas %}

## Next steps

1. [AUTOTITLE](/code-security/trialing-github-advanced-security/enable-security-features-trial)
1. [AUTOTITLE](/code-security/trialing-github-advanced-security/explore-trial-secret-scanning)
1. [AUTOTITLE](/code-security/trialing-github-advanced-security/explore-trial-code-scanning)
