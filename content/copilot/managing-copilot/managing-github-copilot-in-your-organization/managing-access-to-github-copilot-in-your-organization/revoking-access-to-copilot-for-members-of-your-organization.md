---
title: Revoking access to Copilot for members of your organization
shortTitle: Revoking access
intro: 'Remove access to {% data variables.product.prodname_copilot %} for some or all of the members of your organization.'
permissions: 'Organization owners for organizations with a subscription to {% ifversion ghec %}{% data variables.product.prodname_copilot_enterprise_short %} or{% endif %} {% data variables.product.prodname_copilot_business_short %}.'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/managing-github-copilot-in-your-organization/revoking-access-to-copilot-for-members-of-your-organization
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/revoking-access-to-copilot-for-members-of-your-organization
---

## How revoking access affects billing

Revoking access takes effect from the start of the next billing cycle. If you remove a seat during a cycle, the user will have access to {% data variables.product.prodname_copilot_short %} for the remainder of the billing cycle. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot)."

## Revoking access to {% data variables.product.prodname_copilot %} for your whole organization

{% data reusables.copilot.disable-copilot-organization %}

## Revoking access to {% data variables.product.prodname_copilot %} for specific users in your organization

Removing a user from the organization(s) that had granted them {% data variables.product.prodname_copilot %} access will automatically revoke their {% data variables.product.prodname_copilot %} access. Alternatively, you can revoke {% data variables.product.prodname_copilot %} access while preserving their organization membership.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.copilot.access-settings %}
1. Under {% ifversion ghec %}"{% data variables.product.prodname_copilot_enterprise_short %} is active in your organization" or {% endif %}"{% data variables.product.prodname_copilot_business_short %} is active in your organization," select **Enabled For: selected members**.

    * In the "Confirm policy update" dialog, click **Renew seats**.

1. Under "Access management," in the search bar, type the member's username or full name.
1. To remove the member from the list of users who have access to {% data variables.product.prodname_copilot %}, select the checkbox to the left of their username, then click **Cancel seat**.

   ![Screenshot of the Access management section, with a user selected and the 'Cancel seat' button highlighted.](/assets/images/help/copilot/cancel-copilot-seat.png)

1. In the "Confirm seat removal" dialog, click **Remove seats**.

## Using the API to revoke access to {% data variables.product.prodname_copilot %}

You can use {% data variables.product.prodname_dotcom %}'s REST API to revoke access to {% data variables.product.prodname_copilot %} for teams, or specific users, in your organization. For example, you might want to write a script to automatically revoke seats for organization members who have not been using {% data variables.product.prodname_copilot_short %}. See "[Remove teams from the Copilot subscription for an organization](/rest/copilot/copilot-user-management?apiVersion=2022-11-28#remove-teams-from-the-copilot-subscription-for-an-organization)" and "[Remove users from the Copilot subscription for an organization](/rest/copilot/copilot-user-management?apiVersion=2022-11-28#remove-users-from-the-copilot-subscription-for-an-organization)."

## Further reading

* [{% data variables.product.prodname_copilot %} Trust Center](https://resources.github.com/copilot-trust-center)
* "[AUTOTITLE](/copilot/managing-github-copilot-in-your-organization/granting-access-to-copilot-for-members-of-your-organization)."
* "[AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/reviewing-github-copilot-activity-in-your-organization/reviewing-usage-data-for-github-copilot-in-your-organization)"
