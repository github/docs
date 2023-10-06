---
title: 'Managing your GitHub Copilot subscription for your organization {% ifversion ghec%}or enterprise{% endif %}'
intro: 'Set up {% data variables.product.prodname_copilot_for_business %} for your organization{% ifversion ghec %} or enterprise{% endif %} account and manage your subscription.'
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.copilot-billing %}'
versions:
  feature: copilot
type: how_to
topics:
  - Copilot
shortTitle: Your business subscription
---

{% note %}

**Note:** If you are a member of your organization{% ifversion ghec %} or enterprise{% endif %}, and you want to set up a {% data variables.product.prodname_copilot_for_business %} subscription, you will need to contact your organization{% ifversion ghec %} or enterprise{% endif %} administrator.

{% endnote %}

## About managing your {% data variables.product.prodname_copilot_for_business %} subscription

This article applies to setting up and managing a {% data variables.product.prodname_copilot %} subscription for your organization{% ifversion ghec %} or enterprise{% endif %} account. If you want to set up {% data variables.product.prodname_copilot %} for your personal account, see "[AUTOTITLE](/billing/managing-billing-for-github-copilot/managing-your-github-copilot-subscription-for-your-personal-account)."

{% ifversion ghec %}

You can set up a {% data variables.product.prodname_copilot_business_short %} subscription for your organization or enterprise account. If you set up a subscription for your organization account, you can grant access to {% data variables.product.prodname_copilot %} for individuals and teams within your organization. If you set up a subscription for your enterprise account, you can grant access to {% data variables.product.prodname_copilot %} for organizations within your enterprise.

{% endif %}

{% data reusables.billing.billing-info %}

{% ifversion ghec %}

## Setting up a {% data variables.product.prodname_copilot_business_short %} subscription for your enterprise

Before you can start using {% data variables.product.prodname_copilot_business_short %} in your enterprise, you will need to set up a subscription.

### Customers under a Microsoft Enterprise Agreement

{% data reusables.copilot.signup-procedure-enterprise-msft-ea %}

### Customers under a direct GitHub contract

{% data reusables.copilot.signup-procedure-enterprise %}

{% endif %}

{% ifversion fpt %}

## Setting up a {% data variables.product.prodname_copilot_business_short %} subscription for your organization

Before you can start using {% data variables.product.prodname_copilot %} in your organization account, you will need to set up a subscription.

{% data reusables.copilot.signup-procedure-org %}

{% endif %}

## Modifying your {% data variables.product.prodname_copilot_business_short %} subscription

{% ifversion ghec %}

You can modify your {% data variables.product.prodname_copilot_business_short %} subscription for your organization or for your enterprise account.

### Modifying your {% data variables.product.prodname_copilot_business_short %} settings for your enterprise

{% note %}

**Note:** Only enterprise owners can modify policies for {% data variables.product.prodname_copilot %}.

{% endnote %}

You can modify the policies for the use of {% data variables.product.prodname_copilot %} suggestions that match public code in your enterprise, and the access to your {% data variables.product.prodname_copilot %} subscription. For more information, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-copilot-in-your-enterprise)."

### Modifying your {% data variables.product.prodname_copilot_business_short %} settings for your organization

{% endif %}
You can configure {% data variables.product.prodname_copilot %} in your organization, including granting and revoking access to individuals and teams, and determining whether to block suggestions that match public code. For more information, see "[AUTOTITLE](/copilot/configuring-github-copilot/configuring-github-copilot-settings-in-your-organization)."

## Canceling your {% data variables.product.prodname_copilot_business_short %} subscription

{% ifversion ghec %}

You can either disable {% data variables.product.prodname_copilot %} for all organizations in your enterprise or for a specific organization.

### Canceling your {% data variables.product.prodname_copilot_business_short %} subscription for your enterprise account

{% note %}

**Note:** You must be an enterprise owner to disable {% data variables.product.prodname_copilot_business_short %} for all organizations in your enterprise.

{% endnote %}

To cancel your {% data variables.product.prodname_copilot_business_short %} subscription for your enterprise account, you need to disable {% data variables.product.prodname_copilot %} for all organizations in your enterprise.

{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.copilot-tab %}
1. Under "Manage organization access to {% data variables.product.prodname_copilot %}," select **Disabled** to disable {% data variables.product.prodname_copilot %} for all organizations in your enterprise.
1. Click **Save**.

### Canceling your {% data variables.product.prodname_copilot_business_short %} subscription for your organization account {% endif %}

To cancel your {% data variables.product.prodname_copilot_business_short %} subscription for your organization account, you need to remove all assigned {% data variables.product.prodname_copilot %} seats.

{% data reusables.copilot.disable-copilot-organization %}

## Further reading

- "[AUTOTITLE](/copilot/overview-of-github-copilot/about-github-copilot-for-business)"
- "[AUTOTITLE](/copilot/overview-of-github-copilot/enabling-and-setting-up-github-copilot-for-business)"
