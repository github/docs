---
title: Managing organization members in your enterprise
intro: 'You can add or remove members from an organization in bulk.'
permissions: Enterprise owners can add or remove organization members in bulk.
versions:
  feature: enterprise-manage-organization-members
type: how_to
topics:
  - Enterprise
  - Organizations
shortTitle: Managing organization members
---

Enterprise members that are added to an organization via the bulk method will not receive an email inviting them to the organization. They are added immediately as a member to the selected organizations.

Members can also be added or removed from an organization at the organization level. For more information, see {% ifversion ghec %}"[Inviting users to join your organization](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)"{% else %}"[Adding people to your organization](/organizations/managing-membership-in-your-organization/adding-people-to-your-organization)"{% endif %} and "[Removing a member from your organization](/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. To add or remove a user from an organization, select the checkbox next to the user's name, and use the dropdown to select **Add to organizations** or **Remove from organizations**.

   {% note %}

   **Note:**
   - Users will be added as organization members. If the user is already an organization member or organization admin, the privileges will not be modified.
   - Organization admins cannot be removed from the organization via the bulk method.

   {% endnote %}

   ![Screenshot of the dropdown to add or remove a user from organizations](/assets/images/help/business-accounts/enterprise-add-or-remove-from-org.png)

2. In the popup, select the organizations you want to add or remove the user from.

    {% note %}

    **Note:** Only organizations that you're an owner of can be selected.

    {% endnote %}

3. To confirm, click **Add user** or **Remove user**.

   ![Screenshot of the "Add user" button in the "Add users to organizations" modal](/assets/images/help/business-accounts/add-user-to-org.png)

4. Optionally, to add or remove multiple users at the same time, select multiple checkboxes. Use the dropdown to select **Add to organizations** or **Remove from organizations**.