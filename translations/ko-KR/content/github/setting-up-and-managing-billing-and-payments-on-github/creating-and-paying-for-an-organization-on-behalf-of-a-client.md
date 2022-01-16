---
title: Creating and paying for an organization on behalf of a client
intro: 'You can create and pay for a {% data variables.product.prodname_dotcom %} organization on behalf of a client.'
redirect_from:
  - /articles/creating-and-paying-for-an-organization-on-behalf-of-a-client
versions:
  free-pro-team: '*'
topics:
  - Billing
---

### 요구 사항

Before you start, make sure you know:
- The {% data variables.product.prodname_dotcom %} username of the client who will become the owner of the organization you create
- The name your client would like to use for the organization
- The email address where you would like receipts to be sent
- The [product](/articles/github-s-products) your client would like to purchase
- The number of [paid seats](/articles/about-per-user-pricing/) your client would like you to purchase for the organization

### Step 1: Create your personal {% data variables.product.prodname_dotcom %} account

You will use your personal account to set up the organization. You'll also need to sign in to this account to renew or make changes to your client's subscription in the future.

If you already have a personal {% data variables.product.prodname_dotcom %} user account, skip to [step 2](#step-2-create-the-organization).

1. Go to the [Join GitHub](https://github.com/join) page.
2. Under "Create your personal account," type your username, email address, and password, then click **Create an account**. ![Create personal account entry form](/assets/images/help/billing/billing_create_your_personal_account_form.png)
3. Select {% data variables.product.prodname_free_user %} for your personal account.
4. Click **Finish sign up**.

### Step 2: Create the organization

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.organizations %}
{% data reusables.organizations.new-organization %}
3. Under "Choose a plan", click **Choose {% data variables.product.prodname_free_team %}**. You will upgrade the organization in the next step.
{% data reusables.organizations.organization-name %}
5. Under "Contact email", type a contact email address for your client. ![Contact email field](/assets/images/help/organizations/contact-email-field.png)
{% data reusables.dotcom_billing.owned_by_business %}
8. Click **Next**.

### Step 3: Upgrade the organization to a yearly paid subscription


{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.billing_plans %}
{% data reusables.dotcom_billing.upgrade_org %}
{% data reusables.dotcom_billing.choose_org_plan %} (You can add more seats to the organization in the next step.)
6. Under "Upgrade summary", select **Pay yearly** to pay for the organization yearly. ![Radio button for yearly billing](/assets/images/help/billing/choose-annual-billing-org-resellers.png)
{% data reusables.dotcom_billing.enter-payment-info %}
{% data reusables.dotcom_billing.finish_upgrade %}

### Step 4: Upgrade the number of paid seats in the organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.billing_plans %}
{% data reusables.dotcom_billing.add-seats %}
{% data reusables.dotcom_billing.number-of-seats %}
{% data reusables.dotcom_billing.confirm-add-seats %}

### Step 5: Invite your client to join the organization

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.invite_member_from_people_tab %}
5. Type your client's {% data variables.product.prodname_dotcom %} username and press **Enter**. ![Field to type your client's username](/assets/images/help/organizations/org-invite-modal.png)
6. Choose the *owner* role for your client, then click **Send invitation**. ![Owner radio button and send invitation button](/assets/images/help/organizations/add-owner-send-invite-reseller.png)
7. Your client will receive an email inviting them to the organization. They will need to accept the invitation before you can move on to the next step.

### Step 6: Transfer organization ownership to your client

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
4. Confirm that your client is listed among the members of the organization and is assigned the *owner* role.
5. To the right of your username, use the {% octicon "gear" aria-label="The Settings gear" %} drop-down menu, and click **Manage**. ![The manage access link](/assets/images/help/organizations/member-manage-access.png)
6. On the left, click **Remove from organization**. ![Remove from organization button](/assets/images/help/organizations/remove-from-org-button.png)
7. Confirm your choice and click **Remove members**. ![Remove members confirmation button](/assets/images/help/organizations/confirm-remove-from-org.png)

### 다음 단계

1. Contact your client and ask them to [add you to the organization as a billing manager](/articles/adding-a-billing-manager-to-your-organization). You'll need to be a billing manager for the organization so that you can renew or make changes to your client's subscription in the future.
2. If you would like your organization's credit card to be removed from the organization so that it's not charged again, contact {% data variables.contact.contact_support %}.
3. When it's time to renew your client's paid subscription, see "[Renewing your client's paid organization](/articles/renewing-your-client-s-paid-organization)."

### 더 읽을거리

- "[About organizations for procurement companies](/articles/about-organizations-for-procurement-companies)"
- "[Upgrading or downgrading your client's paid organization](/articles/upgrading-or-downgrading-your-client-s-paid-organization)"
- "[Renewing your client's paid organization](/articles/renewing-your-client-s-paid-organization)"
