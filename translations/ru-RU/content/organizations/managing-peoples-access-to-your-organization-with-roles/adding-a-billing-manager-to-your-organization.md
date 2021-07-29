---
title: Adding a billing manager to your organization
intro: 'A *billing manager* is a user who manages the billing settings for your organization, such as updating payment information. This is a great option if regular members of your organization don''t typically have access to billing resources.'
redirect_from:
  - /articles/adding-a-billing-manager-to-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-a-billing-manager-to-your-organization
versions:
  free-pro-team: '*'
topics:
  - Organizations
  - Teams
  - Billing
---

Members of your organization's Owners team can give *billing manager* permissions to people. Once a person accepts their invitation to become a billing manager for your organization, they can invite additional people to be billing managers.

{% note %}

**Note:** Billing managers do not use paid licenses in your organization's subscription.

{% endnote %}

### Permissions for billing managers

Billing managers can:

- Upgrade or downgrade the account
- Add, update, or remove payment methods
- View payment history
- Download receipts
- View, invite, and remove billing managers

In addition, all billing managers will receive billing receipts by email on the organization's billing date.

Billing managers **are not** able to:

- Create or access repositories in your organizations
- See private members of your organization
- Be seen in the list of organization members
- Purchase, edit, or cancel subscriptions for {% data variables.product.prodname_marketplace %} apps

{% tip %}

**Tip:**  If your organization [requires members, billing managers, and outside collaborators to use two-factor authentication](/articles/requiring-two-factor-authentication-in-your-organization), the user must enable two-factor authentication before they can accept your invitation to become a billing manager for the organization.

{% endtip %}

### Inviting a billing manager

The invited person will receive an invitation email asking them to become a billing manager for your organization. Once the invited person clicks the accept link in their invitation email, they will automatically be added to the organization as a billing manager. If they don't already have a GitHub account, they will be directed to sign up for one, and they will be automatically added to the organization as a billing manager after they create an account.

{% data reusables.organizations.billing-settings %}
1. Under "Billing management", next to "Billing managers", click **Add**. ![Invite billing manager](/assets/images/help/billing/settings_billing_managers_list.png)
6. Type the username or email address of the person you want to add and click **Send invitation**. ![Invite billing manager page](/assets/images/help/billing/billing_manager_invite.png)
