---
title: Restoring a deleted organization
intro: 'You can partially restore an organization that was previously deleted on {% data variables.location.product_location %}.'
versions:
  ghes: '*'
type: how_to
topics:
  - Administrator
  - Enterprise
  - Organizations
shortTitle: Restore organization
permissions: 'Site administers can restore an organization on {% data variables.product.product_name %}.'
redirect_from:
   - /admin/user-management/managing-organizations-in-your-enterprise/restoring-a-deleted-organization
---

## About organization restoration

You can use the site admin dashboard to restore an organization that was previously deleted on {% data variables.location.product_location %}, as long as the audit log Elasticsearch indices contain the data for the `org.delete` event.

Immediately after you restore an organization, the organization will not be exactly the same as it was prior to the deletion. You'll have to manually restore any repositories that were owned by the organization. For more information, see "[AUTOTITLE](/admin/user-management/managing-repositories-in-your-enterprise/restoring-a-deleted-repository)."

You can also use the audit log to help you manually re-add teams and organization members. For more information, see "[Restoring members and teams](#restoring-members-and-teams)."

## Restoring an organization

{% data reusables.enterprise_site_admin_settings.access-settings %}
1. Under "Search users, organizations, enterprises, teams, repositories, gists, and applications", search for the organization.

   ![Screenshot of the "Search" page of the "Site admin" settings. The button to search users, labeled "Search," is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/search-for-things.png)

1. Under "Deleted accounts", to the right of the organization you want to restore, select the {% octicon "kebab-horizontal" aria-label="Show more options" %} dropdown menu, then click **Recreate**.

## Restoring members and teams

You can use the audit log to find a list of the previous members and teams of the organization, then recreate them manually. For more information about using the audit log, see "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/auditing-users-across-your-enterprise)."

In all the search phrases below, replace ORGANIZATION with the name of the organization and TEAM with the name of the team.

### Restoring organization members

1. To find all users who were added to and removed from the organization, search the audit log for `action:org.add_member org:ORGANIZATION` and `action:org.remove_member org:ORGANIZATION`.
1. Manually add to the organization each user that should still be a member. For more information, see "[AUTOTITLE](/organizations/managing-membership-in-your-organization/adding-people-to-your-organization)."

### Restoring teams

1. To find each team name, search the audit log for `action:team.create org:ORGANIZATION`.
1. Manually recreate the team. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/creating-a-team)."
1. To find the members that have been added to each team, search for `action:team.add_member team:"ORGANIZATION/TEAM"`.
1. Manually re-add the team members. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/adding-organization-members-to-a-team)."
1. To find the repositories that the team was granted access to, search for `action:team.add_repository team:"ORGANIZATION/TEAM"`.
1. To find the access level that the team was granted for each repository, search for `action:team.update_repository_permission team:"ORGANIZATION/TEAM"`.
1. Manually give the team access again. For more information, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-team-access-to-an-organization-repository)."
