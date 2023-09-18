---
title: Managing support entitlements for your enterprise
intro: You can grant enterprise members the ability to manage support tickets for your enterprise account.
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise
  - /admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise
versions:
  ghec: '*'
topics:
  - Enterprise
  - Support
shortTitle: Manage support entitlements
---

## About support entitlements

People with support entitlements for your enterprise account can use the support portal to open, view, and comment on support tickets associated with the enterprise account.

Enterprise owners and billing managers automatically have a support entitlement. Enterprise owners can add support entitlements to up to 20 additional members of organizations owned by their enterprise account.

## Adding a support entitlement to an enterprise member

To add a support entitlement to a user, the user must already be a member of an organization that is owned by your enterprise.

{% note %}

**Note**: After you add a support entitlement, the enterprise member may need to sign out from {% data variables.contact.contact_landing_page_portal %}, then sign in again, before they can manage tickets.

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. Under "Settings", click **Support**.
1. In the search bar, start typing the name or username of the person you want to give a support entitlement. Click their name in the list of matches.
1. Click **Add support entitlement**.

## Removing a support entitlement from an enterprise member

When a user is removed from the enterprise, their support entitlement will be automatically removed.

If a user remains an enterprise member, you can manually remove their support entitlement. You cannot remove a support entitlement from enterprise owners or billing managers.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. In the sidebar under "Settings", click **Support**.
1. Under "Support members", to the right of the person you want to remove a support entitlement from, click {% octicon "trash" aria-label="remove support entitlement" %}.

## Further reading

- "[AUTOTITLE](/support)"
