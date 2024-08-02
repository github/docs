---
title: Creating and paying for an enterprise account on behalf of a client
intro: 'You can create and pay for an enterprise account on {% data variables.product.prodname_dotcom %} on behalf of a client.'
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
  - User account
  - Enterprise
  - Upgrades
shortTitle: On behalf of a client
---

>[!NOTE] If you are a Microsoft Cloud Solution Provider (CSP) partner and want to create an enterprise account for your customer, see "[AUTOTITLE](/billing/setting-up-paid-accounts-for-procurement-companies/setting-up-enterprise-accounts-for-procurement-companies/creating-an-enterprise-account-as-a-microsoft-csp-partner)."

## Requirements

Before you start, make sure you know:
* The {% data variables.product.prodname_dotcom %} username of the client who will become the owner of the enterprise account you create
* The name your client would like to use for the enterprise account
* The email address where you would like receipts to be sent
* The number of paid seats your client would like you to purchase for the enterprise account (see "[AUTOTITLE](/billing/managing-the-plan-for-your-github-account/about-per-user-pricing)")

## Step 1: Create your personal account on {% data variables.product.prodname_dotcom %}

You will use your personal account to set up the enterprise account. You'll also need to sign in to this account to renew or make changes to your client's subscription in the future.

If you already have a personal account on {% data variables.product.prodname_dotcom %}, skip to [step 2](#step-2-create-the-enterprise-account).

{% data reusables.billing.create-personal-account %}

## Step 2: Create the enterprise account

{% data reusables.enterprise.create-enterprise-account %}
1. Complete the form with your client's information.
1. Click **Create your enterprise**.

## Step 3: Upgrade the enterprise to a yearly paid subscription

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. At the top of the page, click **Buy Enterprise**.
1. Under "How often do you want to be billed?", select **Pay yearly**.
1. Under "How many seats do you want to include?", type the number of seats your client wants.
1. Under "Payment method", input your payment details.
1. Click **Complete {% data variables.product.prodname_enterprise %} purchase**.

## Step 4: Invite your client as an enterprise owner

Invite your client to become an enterprise owner. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise#inviting-an-enterprise-administrator-to-your-enterprise-account)."

## Step 5: Change your role to billing manager

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.enterprise-accounts.administrators-tab %}
{% data reusables.enterprise-accounts.change-role-to-billing-manager %}

## Next steps

{% ifversion fpt %}1. If you would like your credit card to be removed from the enterprise account so that it's not charged again, contact {% data variables.contact.contact_support %}.
1. {% endif %}When it's time to renew your client's paid subscription, see "[AUTOTITLE](/billing/setting-up-paid-accounts-for-procurement-companies/setting-up-enterprise-accounts-for-procurement-companies/renewing-your-clients-enterprise-account)."
