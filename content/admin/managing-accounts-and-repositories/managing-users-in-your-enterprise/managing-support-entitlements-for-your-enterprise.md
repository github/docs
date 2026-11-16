---
title: Managing support entitlements for your enterprise
intro: You can grant enterprise members support entitlements and approve partners to open support tickets on behalf of your enterprise.
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise
  - /admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise
  - /enterprise-onboarding/support-for-your-enterprise/managing-support-entitlements
versions:
  ghec: '*'
shortTitle: Manage support entitlements
category:
  - Manage accounts and repositories
---

## About support entitlements

People with support entitlements for your enterprise account can use the support portal to open, view, and comment on support tickets associated with the enterprise account.

Enterprise owners and billing managers automatically have a support entitlement. Enterprise owners can add support entitlements to a limited number of enterprise members.
* **{% data variables.product.premium_support_plan %}, {% data variables.product.standard_support_plan %}:** Up to 20 members
* **{% data variables.product.premium_plus_support_plan %} / {% data variables.product.microsoft_premium_plus_support_plan %}:** Up to 40 members

> [!NOTE] The level of support that members of your enterprise receive when submitting a ticket is determined by their support entitlement status:
> * If your enterprise has a Premium or Premium Plus plan and the user has a support entitlement, their ticket will receive Premium Support, which includes expedited response times and prioritized handling.
> * If the user does not have a support entitlement, their ticket will still be addressed by our Enterprise Support team, but without Premium Support features such as priority selection and guaranteed Premium SLAs.
>
> If a user is unsure of their entitlement status, they can contact their organization's Enterprise Support administrator.
>
Support entitlements do not provide a user with rights above those granted by the role of their account in the enterprise. Additional approval from an enterprise owner will still be required where the user's enterprise role does not permit the sharing of information in a support ticket.

## Adding a support entitlement to an enterprise member

To add a support entitlement to a user, the user must already be a member of an organization that is owned by your enterprise.

> [!NOTE]
> After you add a support entitlement, the enterprise member may need to sign out from {% data variables.contact.contact_landing_page_portal %}, then sign in again, before they can manage tickets.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. Under "Settings", click **Support**.
1. In the search bar, start typing the name or username of the person you want to give a support entitlement. Click their name in the list of matches.
1. Click **Add support entitlement**.

## Approving a partner to open support tickets

Enterprise owners can approve or remove a partner in enterprise settings under **Support**. Billing managers cannot approve or remove partners unless they are also enterprise owners. Approval allows the partner to open support tickets on behalf of your enterprise through {% data variables.contact.partner_support %}. It does not give the partner access to your enterprise or its existing support tickets.

Partner users need support entitlements in their own partner enterprise. They do not need membership or individual support entitlements in your enterprise. Approval works across tenants. Tickets opened by the partner are associated with the partner's enterprise account and do not appear in your enterprise's Support Portal.

* If your enterprise uses data residency, manage partner approval in enterprise settings on your {% data variables.enterprise.data_residency_site %} tenant.
* For {% data variables.product.prodname_ghe_server %}, manage partner approval through your existing global enterprise account on {% data variables.product.prodname_dotcom_the_website %}, not on the Server instance.

### Approving a partner

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. Under "Settings", click **Support**.
1. Under "Partners", click **Select a partner** and choose the partner you want to approve.
1. Click **Add partner**.

### Removing a partner

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. Under "Settings", click **Support**.
1. Under "Support partners", to the right of the partner you want to remove, click {% octicon "trash" aria-label="Remove support partner" %}.
1. In the confirmation dialog, click **Remove partner**.

For more information, see [AUTOTITLE](/support/learning-about-github-support/github-partner-support).

## Removing a support entitlement from an enterprise member

When a user is removed from the enterprise, their support entitlement will be automatically removed.

If a user remains an enterprise member, you can manually remove their support entitlement. You cannot remove a support entitlement from enterprise owners or billing managers.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. In the sidebar under "Settings", click **Support**.
1. Under "Support members", to the right of the person you want to remove a support entitlement from, click {% octicon "trash" aria-label="remove support entitlement" %}.

## Further reading

* [AUTOTITLE](/support)
