---
title: Creating an enterprise account as a Microsoft CSP partner
intro: 'Learn how to set up an enterprise account for your customer as a Microsoft Cloud Solution Provider partner.'
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
  - User account
  - Enterprise
  - Upgrades
shortTitle: As a Microsoft CSP partner
---

As a Microsoft Cloud Solution Provider (CSP) partner, you can create an enterprise account on {% data variables.product.prodname_dotcom %} on behalf of your customer. You can also invite your customer to become an enterprise owner.

## Requirements

Before you start, make sure you know:
* The {% data variables.product.prodname_dotcom %} username of the client who will become the owner of the enterprise account you create
* The name your client would like to use for the enterprise account
* The email address where you would like receipts to be sent

## Step 1: Create the enterprise account

As a Microsoft CSP partner, you can get started with {% data variables.product.prodname_enterprise %} from the Microsoft Azure portal.

1. Sign in to the Microsoft Azure portal.
1. In the search bar, type "{% data variables.product.prodname_dotcom %}" and select **{% data variables.product.prodname_dotcom %}** to go the landing page.
1. Select **Get started with {% data variables.product.prodname_enterprise %}**.
1. Choose an enterprise type. To help you decide which choice is best for the enterprise, see "[AUTOTITLE](/admin/identity-and-access-management/understanding-iam-for-enterprises/choosing-an-enterprise-type-for-github-enterprise-cloud)."
1. Complete the form with your client's information.
1. Click **Create your enterprise**.

## Step 2: Purchase {% data variables.product.prodname_enterprise %}

At any time during the trial, you can purchase {% data variables.product.prodname_enterprise %} for your client by linking it to their Azure subscription. If the account is later transferred to the customer, ensure the Azure subscription is fully managed by them.

{% data reusables.enterprise-accounts.access-enterprise %}
1. At the top of the page, in the blue banner, click **Activate Enterprise**.
1. Click **Add Azure subscription**.
1. To sign in to your Microsoft account, follow the prompts.
1. Review the "Permissions requested" prompt. If you agree with the terms, click **Accept**.

   If you don't see a "Permissions requested" prompt, and instead see a message indicating that you need admin approval, see "[AUTOTITLE](/billing/managing-the-plan-for-your-github-account/connecting-an-azure-subscription#message-need-admin-approval)."

1. Under "Select a subscription", select the Azure Subscription ID that you want to connect to your organization. {% data reusables.enterprise-accounts.tenant-app-permissions %}
   {% data reusables.enterprise-accounts.connect-azure %}

1. Click **Activate Enterprise**.

## Step 3: Invite your client as an enterprise owner

Invite your client to become an enterprise owner. See "[AUTOTITLE](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise#inviting-an-enterprise-administrator-to-your-enterprise-account)."

## Step 4: Change your role to billing manager

Optionally, you can change your role to billing manager to manage the billing for the enterprise account, without having full administrative access.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.enterprise-accounts.administrators-tab %}
{% data reusables.enterprise-accounts.change-role-to-billing-manager %}

## Contacting support

As a Microsoft CSP partner, you can use the [{% data variables.contact.github_support %} for Microsoft CSP](https://support.github.com/contact?tags=partner-microsoft-csp) landing page to speak to {% data variables.contact.github_support %}. For more information about creating a support ticket, see "[AUTOTITLE](/support/contacting-github-support/creating-a-support-ticket)."
