---
title: Creating and paying for a client's enterprise account
intro: 'You can create and pay for an enterprise account on {% data variables.product.prodname_dotcom %} on behalf of a client.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Billing
  - User account
  - Enterprise
  - Upgrades
shortTitle: Create client enterprise
product: '{% data variables.product.github %} partners setting up {% data variables.product.prodname_enterprise %}. <br> Microsoft Cloud Solution Provider (CSP) partners should see [AUTOTITLE](/billing/how-tos/manage-for-client/create-as-csp-partner).'
redirect_from:
  - /billing/setting-up-paid-accounts-for-procurement-companies/setting-up-enterprise-accounts-for-procurement-companies/about-enterprise-accounts-for-procurement-companies
  - /billing/setting-up-paid-accounts-for-procurement-companies/setting-up-enterprise-accounts-for-procurement-companies/creating-and-paying-for-an-enterprise-account-on-behalf-of-a-client
contentType: how-tos
---

## Prerequisites

Before you start, make sure you know:
* {% data variables.product.github %} username of the client who will become the owner of the enterprise you create
* Enterprise name your client would like to use
* Email address for receipts
* Number of seats your client needs in the enterprise
* Enterprise account type required by your client, see [AUTOTITLE](/admin/managing-iam/understanding-iam-for-enterprises/choosing-an-enterprise-type-for-github-enterprise-cloud)

## Step 1: Create your personal account on {% data variables.product.prodname_dotcom %}

You will use your personal account to set up the enterprise account. You'll also need to sign in to this account to renew or make changes to your client's subscription in the future.

If you already have a personal account on {% data variables.product.prodname_dotcom %}, skip to [step 2](#step-2-create-the-enterprise-account).

{% data reusables.billing.create-personal-account %}

## Step 2: Create the enterprise account

{% data reusables.enterprise.create-enterprise-account %}
1. Depending on your client's requirements:
   * Enterprise with personal accounts on {% data variables.product.prodname_dotcom_the_website %}: click **Get started with personal accounts**
   * Enterprise with managed users, and optional data residence: click **Get started with managed users**
1. Complete the form with your client's information.

   If you chose Enterprise managed users, define your data hosting requirements [AUTOTITLE](/admin/data-residency/about-github-enterprise-cloud-with-data-residency).
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

Invite your client to become an enterprise owner. For more information, see [AUTOTITLE](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise#inviting-an-enterprise-administrator-to-your-enterprise-account).

## Step 5: Change your role to billing manager

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.enterprise-accounts.administrators-tab %}
{% data reusables.enterprise-accounts.change-role-to-billing-manager %}

## Next steps

1. Contact your client and ask them to add you to the enterprise as a billing manager. You'll need to be a billing manager for the enterprise so that you can renew or make changes to your client's subscription in the future. See [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise).
1. Your client's paid subscription will automatically renew unless you remove your company's payment method from the enterprise, see [AUTOTITLE](/billing/how-tos/set-up-payment/manage-payment-info).
1. If you want to remove your company's credit card from the enterprise so that it's not automatically charged for renewals and any other costs, contact {% data variables.contact.contact_support %}.
