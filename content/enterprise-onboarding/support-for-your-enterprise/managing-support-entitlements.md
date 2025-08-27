---
title: 'Managing support entitlements'
intro: 'Learn how to manage support entitlements for your enterprise.'
versions:
  ghec: '*'
allowTitleToDifferFromFilename: true
type: how_to
topics:
  - Enterprise
  - Set up
  - Support
shortTitle: Manage support entitlements
---

## About support entitlements

People with support entitlements for your enterprise account can use the support portal to open, view, and comment on support tickets associated with the enterprise account.

Enterprise owners and billing managers automatically have a support entitlement. Enterprise owners can add support entitlements to a limited number of enterprise members.
* **{% data variables.product.premium_support_plan %}:** Up to 20 members
* **{% data variables.product.premium_plus_support_plan %}:** Up to 40 members

## Adding support entitlements

To add a support entitlement to a user, the user must already be a member of an organization that is owned by your enterprise.

>[!NOTE] After you add a support entitlement, the enterprise member may need to sign out from {% data variables.contact.contact_landing_page_portal %}, then sign in again, before they can manage tickets.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. Under "Settings", click **Support**.
1. In the search bar, start typing the name or username of the person you want to give a support entitlement. Click their name in the list of matches.
1. Click **Add support entitlement**.

## Removing entitlements

You can manually remove support entitlements for enterprise members provided they are not enterprise owners or billing managers.

To learn how to remove support entitlements, see [Removing a support entitlement from an enterprise member](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise#removing-a-support-entitlement-from-an-enterprise-member).

## Next steps

Next, learn how you can automate your enterprise's software development cycle and improve productivity with {% data variables.product.prodname_actions %}. See [AUTOTITLE](/enterprise-onboarding/github-actions-for-your-enterprise/about-github-actions-for-enterprises).
