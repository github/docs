---
title: Revoking access to GitHub Copilot for members of your organization
shortTitle: Revoke access
intro: 'Remove access to {% data variables.product.prodname_copilot %} for some or all of the members of your organization.'
permissions: 'Organization owners for organizations with a {% ifversion ghec %}{% data variables.copilot.copilot_enterprise_short %} or{% endif %} {% data variables.copilot.copilot_business_short %} plan.'
versions:
  feature: copilot
redirect_from:
  - /copilot/managing-github-copilot-in-your-organization/revoking-access-to-copilot-for-members-of-your-organization
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/revoking-access-to-copilot-for-members-of-your-organization
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-access-to-github-copilot-in-your-organization/revoking-access-to-copilot-for-members-of-your-organization
  - /copilot/how-tos/administer/organizations/managing-access-to-github-copilot-in-your-organization/revoking-access-to-copilot-for-members-of-your-organization
  - /copilot/how-tos/administer/organizations/managing-access-to-github-copilot-in-your-organization/revoke-access
  - /copilot/how-tos/administer/organizations/manage-access/revoke-access
  - /copilot/how-tos/administer/manage-for-organization/manage-access/revoke-access
contentType: how-tos
category: 
  - Manage Copilot for a team
---

## About organization-level revocation

Revoking access at the organization level only removes access for people who receive {% data variables.product.prodname_copilot_short %} through the organization. If a person also has access through an enterprise team or as an individual, they will retain it.

To remove access for those users, an enterprise owner must remove them from the enterprise team or unassign their license in the enterprise settings, which revokes access immediately. For more information, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-access/grant-access#assigning-licenses-to-users-or-teams).

For people whose access is revoked through organization-level revocation, the removal takes effect from the start of the next billing cycle. If you remove a seat during a cycle, the user will have access to {% data variables.product.prodname_copilot_short %} for the remainder of the billing cycle. For more information, see [AUTOTITLE](/billing/concepts/product-billing/github-copilot-licenses).

## Revoking access to {% data variables.product.prodname_copilot_short %} for your whole organization

{% data reusables.copilot.disable-copilot-organization %}

## Revoking access to {% data variables.product.prodname_copilot_short %} for specific users in your organization

Removing a user from the organization(s) that had granted them {% data variables.product.prodname_copilot_short %} access will automatically revoke their {% data variables.product.prodname_copilot_short %} access. Alternatively, you can revoke {% data variables.product.prodname_copilot_short %} access while preserving their organization membership.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.copilot.access-settings %}
1. Under {% ifversion ghec %}"{% data variables.copilot.copilot_enterprise_short %} is active in your organization" or {% endif %}"{% data variables.copilot.copilot_business_short %} is active in your organization," select **Enabled For: selected members**.

    * In the "Confirm policy update" dialog, click **Renew seats**.

1. Under "Access management," in the search bar, type the member's username or full name.
1. To remove the member from the list of users who have access to {% data variables.product.prodname_copilot_short %}, select the checkbox to the left of their username, then click **Cancel seat**.

   ![Screenshot of the Access management section, with a user selected and the 'Cancel seat' button highlighted.](/assets/images/help/copilot/cancel-copilot-seat.png)

1. In the "Confirm seat removal" dialog, click **Remove seats**.

## Using the API to revoke access to {% data variables.product.prodname_copilot_short %}

You can use {% data variables.product.prodname_dotcom %}'s REST API to revoke access to {% data variables.product.prodname_copilot_short %} for teams, or specific users, in your organization. For example, you might want to write a script to automatically revoke seats for organization members who have not been using {% data variables.product.prodname_copilot_short %}. See [Remove teams from the Copilot subscription for an organization](/rest/copilot/copilot-user-management?apiVersion=2022-11-28#remove-teams-from-the-copilot-subscription-for-an-organization) and [Remove users from the Copilot subscription for an organization](/rest/copilot/copilot-user-management?apiVersion=2022-11-28#remove-users-from-the-copilot-subscription-for-an-organization).

## Further reading

* [{% data variables.product.prodname_copilot %} Trust Center](https://copilot.github.trust.page)
* [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/manage-access/grant-access).
* [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/review-activity/review-user-activity-data)
