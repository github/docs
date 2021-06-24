---
title: Transferring organization ownership
intro: 'To make someone else the owner of an organization account, you must add a new owner{% ifversion fpt %}, ensure that the billing information is updated,{% endif %} and then remove yourself from the account.'
redirect_from:
  - /articles/needs-polish-how-do-i-give-ownership-to-an-organization-to-someone-else/
  - /articles/transferring-organization-ownership
  - /github/setting-up-and-managing-organizations-and-teams/transferring-organization-ownership
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Organizations
  - Teams
shortTitle: Transfer ownership
---

1. If you're the only member with *owner* privileges, give another organization member the owner role. For more information, see "[Appointing an organization owner](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization#appointing-an-organization-owner)."
2. Contact the new owner and make sure he or she is able to [access the organization's settings](/articles/accessing-your-organization-s-settings).
{% ifversion fpt %}
3. If you are currently responsible for paying for GitHub in your organization, you'll also need to have the new owner or a [billing manager](/articles/adding-a-billing-manager-to-your-organization/) update the organization's payment information. For more information, see "[Adding or editing a payment method](/articles/adding-or-editing-a-payment-method)."

  {% warning %}

  **Warning**: Removing yourself from the organization **does not** update the billing information on file for the organization account. The new owner or a billing manager must update the billing information on file to remove your credit card or PayPal information.

  {% endwarning %}

{% endif %}
4. [Remove yourself](/articles/removing-yourself-from-an-organization) from the organization.
