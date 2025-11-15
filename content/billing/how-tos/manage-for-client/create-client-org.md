---
title: Creating and paying for an organization for a client
intro: 'You can create and pay for a {% data variables.product.prodname_dotcom %} organization on behalf of a client.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-organizations-for-procurement-companies
  - /articles/about-organizations-for-resellers
  - /articles/about-organizations-for-procurement-companies
  - /github/setting-up-and-managing-billing-and-payments-on-github/setting-up-paid-organizations-for-procurement-companies/about-organizations-for-procurement-companies
  - /billing/setting-up-paid-organizations-for-procurement-companies/about-organizations-for-procurement-companies
  - /billing/setting-up-paid-accounts-for-procurement-companies/setting-up-paid-organizations-for-procurement-companies/about-organizations-for-procurement-companies
  - /github/setting-up-and-managing-billing-and-payments-on-github/creating-and-paying-for-an-organization-on-behalf-of-a-client
  - /articles/creating-and-paying-for-an-organization-on-behalf-of-a-client
  - /github/setting-up-and-managing-billing-and-payments-on-github/setting-up-paid-organizations-for-procurement-companies/creating-and-paying-for-an-organization-on-behalf-of-a-client
  - /billing/setting-up-paid-organizations-for-procurement-companies/creating-and-paying-for-an-organization-on-behalf-of-a-client
  - /billing/setting-up-paid-accounts-for-procurement-companies/setting-up-paid-organizations-for-procurement-companies/creating-and-paying-for-an-organization-on-behalf-of-a-client
versions:
  fpt: '*'
  ghec: '*'
product: '{% data variables.product.github %} partners setting up {% data variables.product.prodname_team %}'
topics:
  - Billing
  - User account
  - Organizations
  - Upgrades
shortTitle: Create client org
contentType: how-tos
---

If you want to create an enterprise account for a client, see [AUTOTITLE](/billing/how-tos/manage-for-client/create-client-enterprise) or [AUTOTITLE](/billing/how-tos/manage-for-client/create-as-csp-partner).

## Prerequisites

Before you start, make sure you know:
* {% data variables.product.github %} username of the client who will become the owner of the organization you create
* Organization name your client would like to use
* Email address for receipts
* Number of seats your client needs in the organization

## Step 1: Create your personal {% data variables.product.prodname_dotcom %} account

You will use your personal account to set up the organization. You'll also need to sign in to this account to renew or make changes to your client's subscription in the future.

If you already have a personal account on {% data variables.product.prodname_dotcom %}, skip to [step 2](#step-2-create-the-organization).

{% data reusables.billing.create-personal-account %}

## Step 2: Create the organization

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.organizations %}
{% data reusables.organizations.new-organization %}
1. Under "Choose a plan", click **Choose {% data variables.product.prodname_free_team %}**. You will upgrade the organization in the next step.
{% data reusables.organizations.organization-name %}
1. Under "Contact email", type a contact email address for your client.
{% data reusables.dotcom_billing.owned_by_business %}
1. Click **Next**.

## Step 3: Upgrade the organization to a paid plan with yearly payment

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.billing_plans_or_licensing %}
{% data reusables.dotcom_billing.upgrade_org %}
1. Under "How often do you want to be billed?", select **Pay yearly** to pay for the organization yearly.
1. Under "How many seats do you want to include?", define the number of seats you require.
{% data reusables.dotcom_billing.enter-payment-info %}
1. Review the information, then click **Save** to confirm the changes.

## Step 4: Invite your client to join the organization

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.invite_member_from_people_tab %}
1. In the search field, type your client's {% data variables.product.prodname_dotcom %} username and press **Enter**.
1. Select **Owner**, then click **Send invitation**.
1. Your client will receive an email inviting them to the organization.

>[!NOTE]
> You cannot move on to the next step until your client accepts the invitation to become an organization owner.

## Step 5: Transfer organization ownership to your client

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
1. Confirm that your client is listed among the members of the organization and is assigned the owner role.
1. To the right of your username, select the {% octicon "kebab-horizontal" aria-label="Member settings" %} dropdown menu, and click **Manage**.

   ![Screenshot of the member list for an organization. To the right of a member, a kebab icon is outlined in dark orange.](/assets/images/help/organizations/member-manage-access.png)
1. In the left sidebar, click **Remove from organization**.
1. Confirm your choice and click **Remove members**.

## Next steps

1. Contact your client and ask them to add you to the organization as a billing manager. You'll need to be a billing manager for the organization so that you can renew or make changes to your client's subscription in the future. See [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization).
1. Your client's paid subscription will automatically renew unless you remove your company's payment method from the organization. See [AUTOTITLE](/billing/how-tos/manage-for-client/manage-client-org).
1. If you want to remove your company's credit card from the organization so that it's not automatically charged for renewals and any other costs, contact {% data variables.contact.contact_support %}.
