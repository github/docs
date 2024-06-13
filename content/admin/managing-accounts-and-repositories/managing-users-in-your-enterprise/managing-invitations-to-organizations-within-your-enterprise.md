---
title: Managing invitations to organizations within your enterprise
intro: 'You can retry or cancel invitations to organizations within your enterprise, either one by one or multiple at a time.'
versions:
  feature: enterprise-manage-organization-members
type: how_to
topics:
  - Administrator
  - Enterprise
  - Organizations
shortTitle: Manage organization invitations
permissions: Enterprise owners can manage invitations to organizations within their enterprise.
redirect_from:
  - /admin/user-management/managing-users-in-your-enterprise/mmanaging-invitations-to-organizations-within-your-enterprise
---

You can manage invitations to your enterprise or organizations within your enterprise.

For more information about viewing people in your enterprise or managing enterprise owners and billing managers, see "[AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-people-in-your-enterprise)" and "[AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)."

For more information about adding or removing members from your organization, see {% ifversion ghec %}"[AUTOTITLE](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)"{% else %}"[AUTOTITLE](/organizations/managing-membership-in-your-organization/adding-people-to-your-organization)"{% endif %} and "[AUTOTITLE](/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization)."

## Retrying or canceling expired invitations

Invitations expire after 7 days. You can retry or cancel expired invitations, either one by one or multiple at a time. Failed invitations to outside collaborators can also be found in this view.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. Under "{% octicon "person" aria-hidden="true" %} People", click **Failed invitations**.
1. Optionally, retry or cancel a single invitation.
   * To the right of the invitation you want to cancel or retry, select the {% octicon "kebab-horizontal" aria-label="Show actions" %} dropdown menu and click **Retry invitation** or **Cancel invitation**.

   ![Screenshot of a user in the list of failed invitations. A dropdown menu, labeled with a kebab icon, is highlighted with an orange outline.](/assets/images/help/business-accounts/enterprise-invitation-retry-or-cancel.png)
   * To confirm, click **Yes, retry** or **Yes, cancel**.

1. Optionally, retry or cancel multiple invitations at the same time.
   * Select the checkboxes next to the invitations you want to retry or cancel.
   * At the top of the list, select the **X invitations selected** dropdown menu and click **Retry invitations** or **Cancel invitations**.

   ![Screenshot of the list of failed invitations. The dropdown menu above the list, labeled "2 invitations selected" is highlighted with an orange outline.](/assets/images/help/enterprises/enterprise-invitations-multiple-selection.png)
