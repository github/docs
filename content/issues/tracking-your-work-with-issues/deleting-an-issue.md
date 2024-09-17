---
title: Deleting an issue
intro: People with admin permissions in a repository can permanently delete an issue from a repository.
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/deleting-an-issue
  - /articles/deleting-an-issue
  - /github/managing-your-work-on-github/deleting-an-issue
  - /issues/tracking-your-work-with-issues/creating-issues/deleting-an-issue
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pull requests
---
The ability to delete issues depends on whether the repository is owned by a personal account or an organization:
* The only account that can delete issues in a repository owned by a personal account is that account.
* Only accounts with admin or owner permissions can delete issues in a repository owned by an organization.

  To delete an issue in a repository owned by an organization, an organization owner must enable deleting issues for the organization's repositories. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/allowing-people-to-delete-issues-in-your-organization)" and "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)."

Collaborators do not receive a notification when issues are deleted. When visiting the URL of a deleted issue, collaborators will see a message stating that the web page can't be found (but they can use the API to determine that it was deleted). People with admin or owner permissions in the repository will additionally see the username of the person who deleted the issue and when it was deleted.

1. Navigate to the issue you want to delete.
1. On the right side bar, under "Notifications", click **{% octicon "trash" aria-hidden="true" %} Delete issue**.

   ![Screenshot of the issue sidebar. A trash can icon and "Delete issue" are outlined in dark orange.](/assets/images/help/issues/delete-issue.png)
1. To confirm deletion, click **Delete this issue**.

## Further reading

* "[AUTOTITLE](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)"
