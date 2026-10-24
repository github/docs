---
title: Setting up a trial of GitHub Advanced Security
intro: Evaluate {% data variables.product.prodname_GH_code_security %} and {% data variables.product.prodname_GH_secret_protection %} on your existing repositories before you buy.
permissions: '{% data reusables.advanced-security.ghas-trial-permission %}'
product: '{% data reusables.gated-features.ghas-trial %}'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
redirect_from:
  - /billing/managing-billing-for-github-advanced-security/setting-up-a-trial-of-github-advanced-security
  - /billing/managing-billing-for-your-products/managing-billing-for-github-advanced-security/setting-up-a-trial-of-github-advanced-security
  - /billing/how-tos/products/trial-advanced-security
  - /code-security/trialing-github-advanced-security/trial-advanced-security
shortTitle: Trial Advanced Security
contentType: tutorials
category:
  - Plan your security strategy
---

## Prerequisites

{% ifversion fpt %}

To start a self-serve trial for an organization on {% data variables.product.prodname_team %}, all of the following must be true:

* You are an owner of the organization.
* The organization does not currently have, and has not previously had, a paid license for {% data variables.product.prodname_GHAS %}.
* The organization is not already using metered billing for {% data variables.product.prodname_GHAS %}.
* If the organization has previously had a {% data variables.product.prodname_GHAS %} trial, it has had no more than one previous trial. That trial ended at least 180 days ago.

Your payment method does not affect whether you can start a trial. However, you can purchase {% data variables.product.prodname_GHAS %} through the trial checkout flow only if your organization pays by credit card, PayPal, or Azure.

{% else %}

To set up a trial of {% data variables.product.prodname_GHAS %} using this method, you must meet the following criteria:

* You are an owner of an enterprise account. See [AUTOTITLE](/enterprise-cloud@latest/admin/concepts/enterprise-fundamentals/enterprise-accounts).
* You pay by credit card or PayPal.
* You have not previously purchased {% data variables.product.prodname_GHAS %} and do not currently have a paid license.
* You are not already using metered billing for {% data variables.product.prodname_GHAS %}.
* If you have had a previous {% data variables.product.prodname_GHAS %} trial, you have had no more than one previous trial. That trial ended at least 180 days ago.
* Your enterprise has 300 or fewer seats.

> [!TIP]
> * **No enterprise account?** Start a trial of {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_GHAS %}. See [AUTOTITLE](/enterprise-cloud@latest/admin/overview/setting-up-a-trial-of-github-enterprise-cloud).
> * **Pay by invoice:** Contact {% data variables.contact.contact_enterprise_sales %} to arrange a trial.

{% endif %}

## What the trial includes

The trial gives you access to {% data variables.product.prodname_GH_code_security %} and {% data variables.product.prodname_GH_secret_protection %} for private repositories. You can evaluate capabilities such as:

* {% data variables.product.prodname_code_scanning_caps %}, {% data variables.copilot.copilot_autofix_short %}, dependency review, and security campaigns
* {% data variables.product.prodname_secret_scanning_caps %}, push protection, custom patterns, validity checks, and delegated bypass

Use the trial on a sample of repositories so you can assess the results, developer experience, and controls before you purchase.

## Start your trial

{% ifversion fpt %}

An organization owner can start a trial from the organization's "Licensing" page.

1. In the upper-right corner of {% data variables.product.prodname_dotcom %}, click your profile picture, then click **Your organizations**.
1. Next to the organization, click **Settings**.
1. In the "Access" section of the sidebar, click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing & Licensing**, then click **Licensing**.
1. To the right of "{% data variables.product.prodname_GHAS %}", click **Try free for 30 days**, then follow the prompts to start your trial.

{% else %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.licensing-tab-both-platforms %}
1. To the right of "{% data variables.product.prodname_GHAS %}", click **Start free trial**.
1. Click **Start trial**.

   During a trial of {% data variables.product.prodname_GHAS %}, you can add any number of committers and enable {% data variables.product.prodname_GH_cs_and_sp %} for any number of organizations.

{% endif %}

## Evaluate features during your trial

After you start the trial, enable the features you want to evaluate on a sample of repositories. See [AUTOTITLE](/code-security/tutorials/trialing-github-advanced-security/enable-security-features-trial).

As you evaluate the features, compare the results with the goals and success criteria you defined when planning the trial.

## Billing during your trial

During the trial, you do not pay license fees for {% data variables.product.prodname_GH_cs_or_sp %}.

{% ifversion fpt %}

Usage-based billing applies for features that consume {% data variables.product.prodname_actions %} minutes or {% data variables.product.prodname_ai_credits_short %}. For private repositories, {% data variables.product.prodname_actions %} minutes used by {% data variables.product.prodname_GHAS %} workflows count toward your organization's included usage. This includes code scanning workflows. Usage beyond the included amount is billed at the standard rate. For more information, see [AUTOTITLE](/billing/reference/product-usage-included).

{% elsif ghec %}

Usage-based billing applies for features that consume {% data variables.product.prodname_actions %} minutes or {% data variables.product.prodname_ai_credits_short %}.

For private repositories, minutes used by {% data variables.product.prodname_GHAS %} workflows on standard {% data variables.product.prodname_dotcom %}-hosted runners count toward the 50,000 minutes included each month with your {% data variables.product.prodname_ghe_cloud %} plan. This includes code scanning workflows. Workflows in public repositories or on self-hosted runners do not consume included minutes. {% data variables.actions.hosted_runners %} are billed separately. Usage beyond the included amount is billed at the standard rate. For more information, see [AUTOTITLE](/billing/reference/product-usage-included).

{% endif %}

## Managing and finishing your trial

Your trial lasts 30 days. You can review the expiration date and current usage on the "Licensing" page for your organization or enterprise.

{% ifversion fpt %}

To purchase during the trial:

1. Access the "Licensing" page for the organization.
1. In the {% data variables.product.prodname_GHAS %} trial banner, click **Buy Advanced Security**.
1. Review the estimated monthly usage, billing information, and payment method.
1. Click **Purchase Advanced Security**.

If you do not purchase by the end of the trial, it expires automatically, and {% data variables.product.prodname_GH_cs_and_sp %} features are disabled for private repositories.

{% else %}

You can finish your trial at any time by purchasing licenses for {% data variables.product.prodname_GH_cs_or_sp %}. If you haven't made a purchase by the end of the 30 days, your trial will expire.

If you pay for {% data variables.product.prodname_ghe_cloud %} with metered billing, but did not set up a free trial of {% data variables.product.prodname_GHAS %}, you can still use metered-based billing to pay for {% data variables.product.prodname_AS %} products after the {% data variables.product.prodname_ghe_cloud %} trial ends. For more information, contact [{% data variables.product.prodname_dotcom %}'s Sales team](https://enterprise.github.com/contact).

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.licensing-tab-both-platforms %}
1. To the right of "{% data variables.product.prodname_GHAS %} trial", select the **Manage** dropdown menu and click **Purchase**.
{% data reusables.advanced-security.purchase-ghas %}

{% endif %}
