---
title: Managing security managers in your organization
intro: You can give your security team the least access they need to your organization by assigning a team to the security manager role.
versions:
  fpt: '*'
  ghes: '>=3.3'
  feature: security-managers
topics:
  - Organizations
  - Teams
shortTitle: Security manager role
permissions: Organization owners can assign the security manager role.
---

{% data reusables.organizations.security-manager-beta-note %}

{% data reusables.organizations.about-security-managers %}

## Permissions for the security manager role

Members of a team with the security manager role have only the permissions required to effectively manage security for the organization.

- Read access on all repositories in the organization, in addition to any existing repository access
- Write access on all security alerts in the organization {% ifversion not fpt %}
- Access to the organization's security overview {% endif %}
- The ability to configure security settings at the organization level{% ifversion not fpt %}, including the ability to enable or disable {% data variables.product.prodname_GH_advanced_security %}{% endif %}
- The ability to configure security settings at the repository level{% ifversion not fpt %}, including the ability to enable or disable {% data variables.product.prodname_GH_advanced_security %}{% endif %}

{% ifversion fpt %}
Additional functionality, including a security overview for the organization, is available in organizations that use {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_advanced_security %}. For more information, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization).
{% endif %}

If a team has the security manager role, people with admin access to the team and a specific repository can change the team's level of access to that repository but cannot remove the access. For more information, see "[Managing team access to an organization repository](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository){% ifversion ghes %}."{% else %} and "[Managing teams and people with access to your repository](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository)."{% endif %}

  ![Manage repository access UI with security managers](/assets/images/help/organizations/repo-access-security-managers.png)

## Assigning the security manager role to a team in your organization
You can assign the security manager role to a maximum of 10 teams in your organization.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}
1. Under **Security managers**, search for and select the team to give the role. Each team you select will appear in a list below the search bar. ![Add security manager](/assets/images/help/organizations/add-security-managers.png)
## Removing the security manager role from a team in your organization

{% warning %}

**Warning:** Removing the security manager role from a team will remove the team's ability to manage security alerts and settings across the organization, but the team will retain read access to repositories that was granted when the role was assigned. You must remove any unwanted read access manually. 更多信息请参阅“[管理团队的组织仓库访问权限](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository#removing-a-teams-access-to-a-repository)”。

{% endwarning %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}
1. Under **Security managers**, to the right of the team you want to remove as security managers, click {% octicon "x" aria-label="The X icon" %}. ![Remove security managers](/assets/images/help/organizations/remove-security-managers.png)
