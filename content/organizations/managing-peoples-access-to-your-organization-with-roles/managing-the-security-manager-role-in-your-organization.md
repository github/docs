---
title: Managing the security manager role in your organization
intro: 'You can give your security team the least access they need to your organization by assigning a team to the security manager role.'
versions:
  fpt: '*'
  ghes: '>=3.3'
  ghae: 'issue-4999'
topics:
  - Organizations
  - Teams
shortTitle: Security manager role
permissions: Organization owners can assign the security manager role.
---

{% note %}

**Note:** The security manager role is in public beta and subject to change.

{% endnote %}

Organization owners can grant a team the permissions they need to manage security alerts and settings across your organization, as well as read access on all organization repositories, by assigning the security manager role.

## Permissions for the security manager role

Members of a team with the security manager role have only the permissions required to effectively manage security for the organization.

- Read access on all repositories in the organization, in addition to any existing repository access 
- Write access on all security alerts in the organization
- Access to the organization's security overview
- The ability to configure security settings at the organization level, including the ability to enable or disable {% data variables.product.prodname_GH_advanced_security %}
- The ability to configure security settings at the repository level, including the ability to enable or disable {% data variables.product.prodname_GH_advanced_security %}

While a team will be granted read permission on all organization repositories upon being added as security managers, any existing repository permissions that the team had will stay the same. If a team has the security manager role, only organization owners will be able to change team access to repositories in the **Repositories** tab. 

Repository owners will be able to see if a security manager team has access to their repository in the **Manage access** tab in their repository settings. Under **Manage direct access**, any security manager teams will appear as **Managed by organization owners**  and their permissions cannot be removed or edited by the repository owner.

  ![Manage repository access with security managers](/assets/images/help/organizations/repo-access-security-managers.png)
## Assigning the security manager role to a team in your organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}
1. Under **Security managers**, search for and select the team to give the role. Each team you select will appear in a list below the search bar. 
  ![Add security manager](/assets/images/help/organizations/add-security-managers.png)
## Removing the security manager role from a team in your organization


{% warning %}

**Warning:** Removing the security manager role from a team will remove the team's ability to manage security alerts and settings across the organization, but the team will retain read access to repositories that was granted when the role was assigned. You must remove any unwanted read access manually. For more information, see "[Managing team access to an organization repository](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository#removing-a-teams-access-to-a-repository)."

{% end warning %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}
1. Under **Security managers**, to the right of the team you want to remove as security managers, click {% octicon "x" aria-label="The X icon" %}.
  ![Remove security managers](/assets/images/help/organizations/remove-security-managers.png)