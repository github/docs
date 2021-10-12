---
title: Managing the security manager role in your organization
intro: 'Organization owners can assign the security manager role to the organization''s security teams to give them the level of access they need.'
versions:
  fpt: '*'
  ghes: '>=3.3'
  ghae: 'issue-4999'
topics:
  - Organizations
  - Teams
shortTitle: Security manager role
---

{% note %}

**Note:** The security manager role is in public beta and subject to change.

{% endnote %}

Members of your organization's Owners team can grant a team the permissions to manage security alerts and settings across your organization, as well as read permissions on all organization repositories, by assigning the security manager role.

## Permissions for the security manager role

Members of a team with the security manager role assigned have the following permissions:

- Read permission on all repositories in the organization
- Write permission on all security alerts in the organization
- Access to **Security Overview** in the organization's **Security** tab
- Write permission on security settings at the organization level, including the ability to enable or disable {% data variables.product.prodname_GH_advanced_security %}
- Write permission on security settings at the repository level, including the ability to enable or disable {% data variables.product.prodname_GH_advanced_security %}

While a team will be granted read permission on all organization repositories upon being added as security managers, any existing repository permissions that the team had will stay the same. If a team has the security manager role, only organization owners will be able to change team access to repositories in the **Repositories** tab. 

Repository owners will be able to see if a security manager team has access to their repository in the **Manage access** tab in their repository settings. Under **Manage direct access**, any security manager teams will appear as **Managed by organization owners**  and their permissions cannot be removed or edited by the repository owner.

  ![Manage repository access with security managers](/assets/images/help/organizations/repo-access-security-managers.png)
## Assigning the security manager role to a team in your organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}
1. Under **Security managers**, search and select the team to which you want to assign the role. Once selected, the team will appear in a list below the search bar. 
  ![Add security manager](/assets/images/help/organizations/add-security-managers.png)
## Removing the security manager role from a team in your organization

Note that while removing the security manager role will remove the ability to manage security alerts and settings across the organization, it will not remove the read permissions on repositories that were granted when the role was assigned. You will need to remove any unwanted read permissions manually in the team's **Repositories** tab. 

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}
1. Under **Security managers**, click the **X** icon to the right of the team from which you want to remove the security manager role.
  ![Remove security managers](/assets/images/help/organizations/remove-security-managers.png)