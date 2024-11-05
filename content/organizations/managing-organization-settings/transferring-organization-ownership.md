---
title: Transferring organization ownership
intro: 'To make someone else the owner of an organization account, you must add a new owner{% ifversion fpt or ghec %}, ensure that the billing information is updated,{% endif %} and then remove yourself from the account.'
redirect_from:
  - /articles/needs-polish-how-do-i-give-ownership-to-an-organization-to-someone-else
  - /articles/transferring-organization-ownership
  - /github/setting-up-and-managing-organizations-and-teams/transferring-organization-ownership
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Transfer ownership
---
{% ifversion ghec %}
{% note %}

**Note:** {% data reusables.enterprise-accounts.invite-organization %}

{% endnote %}{% endif %}

1. If you're the only member with _owner_ privileges, give another organization member the owner role. For more information, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization#appointing-an-organization-owner)."
1. Contact the new owner and make sure they are able to [access the organization's settings](/organizations/collaborating-with-groups-in-organizations/accessing-your-organizations-settings).
{% ifversion fpt or ghec %}
1. If you are currently responsible for paying for GitHub in your organization, you'll also need to have the new owner or a [billing manager](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization) update the organization's payment information. For more information, see "[AUTOTITLE](/billing/managing-your-github-billing-settings/adding-or-editing-a-payment-method)."

   {% warning %}

   **Warning**: Removing yourself from the organization **does not** update the billing information on file for the organization account. The new owner or a billing manager must update the billing information on file to remove your credit card or PayPal information.

   {% endwarning %}

{% endif %}
1. [Remove yourself](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/removing-yourself-from-an-organization) from the organization.
