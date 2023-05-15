---
title: Canceling or editing an invitation to join your organization
intro: Organization owners can edit or cancel an invitation to become a member of your organization any time before the user accepts.
redirect_from:
  - /articles/canceling-or-editing-an-invitation-to-join-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/canceling-or-editing-an-invitation-to-join-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Cancel or edit invitation
---

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
1. Under "Organization permissions", click **Invitations**.
1. Next to the username of the person whose invitation you'd like to edit or cancel, click {% octicon "kebab-horizontal" aria-label="Invitation options" %}, then click **Edit invitation**, or click **Cancel invitation**.

   ![Screenshot of the "Invitations" page. The "Edit invitation" and "Cancel invitation" buttons are highlighted with an orange outline.](/assets/images/help/organizations/organization-edit-or-cancel-invitation.png)

1. To edit the invitation, in the dialog box, select a different role or team for the account, then click **Update invitation**.

   ![Screenshot of the "Edit invitation" dialog box. Two buttons, "Update invitation" and "Cancel invitation", are highlighted with an orange outline.](/assets/images/help/organizations/organization-edit-invitation.png)

1. Optionally, to filter the list of pending invitations by role or by source, use the dropdown menus at the top of the list.

   ![Screenshot of the "Invitations" page. Two dropdown menus, titled "Role" and "Source", are highlighted with an orange outline.](/assets/images/help/organizations/organization-filter-invitations.png)

## Further reading

{% ifversion fpt or ghec %}
- "[AUTOTITLE](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)"
{% endif %}
- "[AUTOTITLE](/organizations/organizing-members-into-teams/adding-organization-members-to-a-team)"
