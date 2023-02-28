---
title: Creating and paying for an organization on behalf of a client
intro: 'You can create and pay for a {% data variables.product.prodname_dotcom %} organization on behalf of a client.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/creating-and-paying-for-an-organization-on-behalf-of-a-client
  - /articles/creating-and-paying-for-an-organization-on-behalf-of-a-client
  - /github/setting-up-and-managing-billing-and-payments-on-github/setting-up-paid-organizations-for-procurement-companies/creating-and-paying-for-an-organization-on-behalf-of-a-client
  - /billing/setting-up-paid-organizations-for-procurement-companies/creating-and-paying-for-an-organization-on-behalf-of-a-client
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
  - User account
  - Organizations
  - Upgrades
shortTitle: On behalf of a client
---

## Requirements

Before you start, make sure you know:
- The {% data variables.product.prodname_dotcom %} username of the client who will become the owner of the organization you create
- The name your client would like to use for the organization
- The email address where you would like receipts to be sent
- The [product](/get-started/learning-about-github/githubs-products) your client would like to purchase
- The number of [paid seats](/billing/managing-billing-for-your-github-account/about-per-user-pricing) your client would like you to purchase for the organization

## Step 1: Create your personal {% data variables.product.prodname_dotcom %} account

You will use your personal account to set up the organization. You'll also need to sign in to this account to renew or make changes to your client's subscription in the future.

{% data reusables.billing.create-personal-account %}

## Step 2: Create the organization

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.organizations %}
{% data reusables.organizations.new-organization %}
3. Under "Choose a plan", click **Choose {% data variables.product.prodname_free_team %}**. You will upgrade the organization in the next step.
{% data reusables.organizations.organization-name %}
5. Under "Contact email", type a contact email address for your client.
  ![Contact email field](/assets/images/help/organizations/contact-email-field.png)
{% data reusables.dotcom_billing.owned_by_business %}
8. Click **Next**.

## Step 3: Upgrade the organization to a yearly paid subscription


{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.billing_plans %}
{% data reusables.dotcom_billing.upgrade_org %}
{% data reusables.dotcom_billing.choose_org_plan %} (You can add more seats to the organization in the next step.)
6. Under "Upgrade summary", select **Pay yearly** to pay for the organization yearly.
{% data reusables.dotcom_billing.enter-payment-info %}
{% data reusables.dotcom_billing.finish_upgrade %}

## Step 4: Upgrade the number of paid seats in the organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.billing_plans %}
{% data reusables.dotcom_billing.add-seats %}
{% data reusables.dotcom_billing.number-of-seats %}
{% data reusables.dotcom_billing.confirm-add-seats %}

## Step 5: Invite your client to join the organization

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.invite_member_from_people_tab %}
5. Type your client's {% data variables.product.prodname_dotcom %} username and press **Enter**.
![Field to type your client's username](/assets/images/help/organizations/org-invite-modal.png)
6. Choose the *owner* role for your client, then click **Send invitation**.
![Owner radio button and send invitation button](/assets/images/help/organizations/add-owner-send-invite-reseller.png)
7. Your client will receive an email inviting them to the organization. They will need to accept the invitation before you can move on to the next step.

## Step 6: Transfer organization ownership to your client

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
4. Confirm that your client is listed among the members of the organization and is assigned the *owner* role.
5. To the right of your username, use the {% octicon "gear" aria-label="The Settings gear" %} drop-down menu, and click **Manage**.
  ![The manage access link](/assets/images/help/organizations/member-manage-access.png)
6. On the left, click **Remove from organization**.
  ![Remove from organization button](/assets/images/help/organizations/remove-from-org-button.png)
7. Confirm your choice and click **Remove members**.
  ![Remove members confirmation button](/assets/images/help/organizations/confirm-remove-from-org.png)

## Next steps

1. Contact your client and ask them to [add you to the organization as a billing manager](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization). You'll need to be a billing manager for the organization so that you can renew or make changes to your client's subscription in the future.
2. If you would like your organization's credit card to be removed from the organization so that it's not charged again, contact {% data variables.contact.contact_support %}.
3. When it's time to renew your client's paid subscription, see "[AUTOTITLE](/articles/renewing-your-client-s-paid-organization)."
