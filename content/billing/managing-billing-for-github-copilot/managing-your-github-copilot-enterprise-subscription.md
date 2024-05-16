---
title: 'Managing your GitHub Copilot Enterprise subscription'
intro: 'Set up {% data variables.product.prodname_copilot_enterprise %} for your enterprise account and manage your subscription.'
product: '{% data reusables.gated-features.copilot-billing %}'
permissions: 'Enterprise owners can set up and manage a subscription for {% data variables.product.prodname_copilot_enterprise %}.'
versions:
  feature: copilot-enterprise
type: how_to
topics:
  - Copilot
shortTitle: Your enterprise subscription
---

## About managing your {% data variables.product.prodname_copilot_enterprise %} subscription

To allow members to benefit from {% data variables.product.prodname_copilot %} features on their local machine and on {% data variables.product.prodname_dotcom_the_website %}, you can set up a subscription to {% data variables.product.prodname_copilot_enterprise %} for an enterprise on {% data variables.product.prodname_ghe_cloud %}. When you set up a subscription, you'll be able to enable {% data variables.product.prodname_copilot_short %} for organizations in your enterprise. Organization owners can then grant access to organization members.

To manage a {% data variables.product.prodname_copilot_short %} subscription for your personal account, see "[AUTOTITLE](/billing/managing-billing-for-github-copilot/managing-your-github-copilot-individual-subscription)." To manage a {% data variables.product.prodname_copilot_business_short %} subscription for an organization or enterprise, see "[AUTOTITLE](/billing/managing-billing-for-github-copilot/managing-your-github-copilot-business-subscription)."

The {% data variables.product.prodname_copilot_enterprise %} subscription for organizations and enterprises is available on a monthly cycle. For more general information about billing for {% data variables.product.prodname_copilot_enterprise %}, see "[AUTOTITLE](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot#about-billing-for-github-copilot-business-and-github-copilot-enterprise)."

{% data reusables.billing.billing-info %}

## Setting up a {% data variables.product.prodname_copilot_enterprise_short %} subscription for the first time

To set up a {% data variables.product.prodname_copilot_enterprise_short %} subscription, you need an enterprise account on {% data variables.product.prodname_ghe_cloud %}. For more information, see "[AUTOTITLE](/admin/managing-your-enterprise-account/creating-an-enterprise-account)."

{% note %}

**Note:** {% data reusables.copilot.signup-procedure-enterprise-msft-ea %}

{% endnote %}

1. Ensure you are signed in as an enterprise owner on {% data variables.product.prodname_dotcom_the_website %}.
1. Go to the [{% data variables.product.prodname_copilot_short %} plans page](https://github.com/features/copilot/plans).
1. Under "{% data variables.product.prodname_copilot_enterprise_short %}", click **Buy now**.
1. Follow the steps to sign up and enable {% data variables.product.prodname_copilot_short %} for organizations in your enterprise.

Once you have enabled {% data variables.product.prodname_copilot_short %} for an organization, an organization owner can grant access to members. For more information, see "[AUTOTITLE](/copilot/managing-github-copilot-in-your-organization/managing-access-for-copilot-business-in-your-organization)."

## Upgrading to a {% data variables.product.prodname_copilot_enterprise_short %} subscription

If your enterprise already has a {% data variables.product.prodname_copilot_business_short %} subscription, you can upgrade to a {% data variables.product.prodname_copilot_enterprise_short %} subscription. When you upgrade, all users with a {% data variables.product.prodname_copilot_business_short %} seat will be upgraded to {% data variables.product.prodname_copilot_enterprise_short %}. Your enterprise will be charged pro rata for these seats for the rest of the billing cycle.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.copilot-tab %}
1. In the "{% data variables.product.prodname_copilot_business_short %} is active in your enterprise" section, click **Purchase {% data variables.product.prodname_copilot_enterprise_short %}**.

   ![Screenshot of the Copilot "access management" page. A link, labeled "Purchase {% data variables.product.prodname_copilot_enterprise_short %}", is highlighted with an orange outline.](/assets/images/help/copilot/purchase-copilot-enterprise.png)

1. In the dialog, click **Continue to billing summary**.
1. Review your updated billing summary, then click **Enable plan**.

## Modifying your {% data variables.product.prodname_copilot_enterprise_short %} subscription

You can set policies for the use of {% data variables.product.prodname_copilot %} in your enterprise, and select which organizations can add members to your {% data variables.product.prodname_copilot %} subscription. For more information, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-copilot-in-your-enterprise)."

## Downgrading your {% data variables.product.prodname_copilot_enterprise_short %} subscription

To downgrade from a {% data variables.product.prodname_copilot_enterprise_short %} subscription to a {% data variables.product.prodname_copilot_business_short %} subscription, you must contact [{% data variables.product.prodname_dotcom %} Billing Support](https://support.github.com).

## Canceling your {% data variables.product.prodname_copilot_enterprise_short %} subscription

{% data reusables.copilot.disable-copilot-for-all-orgs %}
