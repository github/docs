---
title: Managing organization members in your enterprise
intro: You can add or remove members from an organization in bulk.
permissions: Enterprise owners can add or remove organization members in bulk.
versions:
  feature: enterprise-manage-organization-members
type: how_to
topics:
  - Enterprise
  - Organizations
shortTitle: Managing organization members
redirect_from:
  - /admin/user-management/managing-users-in-your-enterprise/managing-organization-members-in-your-enterprise
---

Enterprise members that are added to an organization via the bulk method will not receive an email inviting them to the organization. They are added immediately as a member to the selected organizations.

Members can also be added or removed from an organization at the organization level. For more information, see {% ifversion ghec %}"[AUTOTITLE](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)"{% else %}"[AUTOTITLE](/organizations/managing-membership-in-your-organization/adding-people-to-your-organization)"{% endif %} and "[AUTOTITLE](/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. Select the checkbox next to each user you want to add or remove.
1. At the top of the member list, select the **X user(s) selected** dropdown menu, then click **Add to organizations** or **Remove from organizations**.

   {% note %}

   **Note:**
   - Users will be added as organization members. If the user is already an organization member or organization owner, the privileges will not be modified.
   - Organization owners cannot be removed from the organization via the bulk method.

   {% endnote %}

   ![Screenshot of the list of enterprise members. A dropdown menu, labeled "1 user selected...", is expanded and highlighted with an orange outline.](/assets/images/help/business-accounts/enterprise-add-or-remove-from-org.png)

1. In the popup, select the organizations you want to add or remove the user from.

    {% note %}

    **Note:** You can only select organizations where you're an organization owner.

    {% endnote %}

1. To confirm, click **Add user** or **Remove user**.
1. Optionally, to add or remove multiple users at the same time, select multiple checkboxes. Use the dropdown to select **Add to organizations** or **Remove from organizations**.
