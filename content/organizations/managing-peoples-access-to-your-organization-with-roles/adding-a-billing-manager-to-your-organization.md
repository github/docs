---
title: Adding a billing manager to your organization
intro: 'A *billing manager* is a user who manages the billing settings for your organization, such as updating payment information. This is a great option if regular members of your organization don''t typically have access to billing resources.'
redirect_from:
  - /articles/adding-a-billing-manager-to-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-a-billing-manager-to-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
  - Billing
shortTitle: Add a billing manager
---

Members of your organization's Owners team can give _billing manager_ permissions to people. Once a person accepts their invitation to become a billing manager for your organization, they can invite additional people to be billing managers.

{% note %}

**Note:** Billing managers do not use paid licenses in your organization's subscription.

{% endnote %}

## Permissions for billing managers

Billing managers can:

* Upgrade or downgrade between {% data variables.product.prodname_free_user %} and {% data variables.product.prodname_team %} plans
* Add, update, or remove payment methods
* View payment history
* Download receipts
* View, invite, and remove billing managers
* Start, modify, or cancel sponsorships

In addition, all billing managers will receive billing receipts by email on the organization's billing date.

Billing managers **are not** able to:

* Upgrade to {% data variables.product.prodname_enterprise %} or downgrade an enterprise account
* Create or access repositories in your organizations
* See private members of your organization
* Be seen in the list of organization members
* Purchase, edit, or cancel subscriptions for {% data variables.product.prodname_marketplace %} apps
* Purchase, edit, or cancel subscriptions for {% data variables.product.prodname_copilot_for_business %} or {% data variables.product.prodname_copilot_enterprise %}

{% tip %}

**Tip:**  If your organization [requires members, billing managers, and outside collaborators to use two-factor authentication](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization), the user must enable two-factor authentication before they can accept your invitation to become a billing manager for the organization.

{% endtip %}

## Inviting a billing manager

{% ifversion ghec %}
{% note %}

**Note:** If your organization is owned by an enterprise account, you cannot invite billing managers at the organization level. For more information, see "[AUTOTITLE](/admin/overview/about-enterprise-accounts)."

{% endnote %}
{% endif %}

The invited person will receive an invitation email asking them to become a billing manager for your organization. Once the invited person clicks the accept link in their invitation email, they will automatically be added to the organization as a billing manager. If they don't already have a GitHub account, they will be directed to sign up for one, and they will be automatically added to the organization as a billing manager after they create an account.

{% data reusables.organizations.billing-settings %}
1. Under "Billing management", next to "Billing managers", click **Add**.
1. Type the username or email address of the person you want to add and click **Send invitation**.

## Further reading

* "[AUTOTITLE](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)"{% ifversion fpt %} in the {% data variables.product.prodname_ghe_cloud %} documentation{% endif %}
