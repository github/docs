---
title: Managing security managers in your organization
intro: You can give your security experts the least access they need to configure and monitor code security for your organization using the security manager role.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Organizations
  - Teams
shortTitle: Security manager role
permissions: Organization owners can assign the security manager role.
---

{% data reusables.organizations.security-manager-beta-note %}

{% data reusables.organizations.about-security-managers %}

## Permissions for the security manager role

Organization members {% ifversion org-sec-manager-update %} and members of teams {% elsif ghes < 3.16 %}in a team {% endif %}assigned the security manager role have only the permissions required to effectively manage code security for the organization.

* Read access on all repositories in the organization, in addition to any existing repository access
* Write access on all security alerts in the organization {% ifversion not fpt %}
* Access to view and configure all repositories in the organization's security overview {% endif %}
* The ability to configure code security settings at the organization level{% ifversion not fpt %}, including the ability to enable or disable {% data variables.product.prodname_GH_advanced_security %}{% endif %}
* The ability to configure code security settings at the repository level{% ifversion not fpt %}, including the ability to enable or disable {% data variables.product.prodname_GH_advanced_security %}{% endif %}

{% ifversion fpt %}
Additional functionality, including a security overview for the organization, is available in organizations that use {% data variables.product.prodname_ghe_cloud %}. For more information, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization).
{% endif %}

If a team has the security manager role, people with admin access to the team and a specific repository can change the team's level of access to that repository but cannot remove the access. For more information, see [AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-team-access-to-an-organization-repository) and [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository).

{% ifversion org-sec-manager-update %}

## Managing security managers in your organization

You can assign the pre-defined security manager role to either an organization team or directly to an organization member. Larger organizations may want to create a dedicated team for security management. This approach is especially useful if you want to assign additional permissions to your security experts.

For information about assigning roles to users and teams, see [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles).

## Creating a custom security role

You can create custom security roles for your organization with reduced or increased access, as needed. For example, you might create a security role limited to managing secret scanning results and bypass requests, or you might create a combined security and audit log role. For more information, see [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-organization-roles).

{% else %}

## Assigning the security manager role to a team in your organization

You can assign the security manager role to a maximum of 10 teams in your organization.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% ifversion security-configurations %}
1. In the "Security" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" %} Code security** then **Global settings**.
{% else %}
{% data reusables.organizations.security-and-analysis %}
{% endif %}
1. In the "Security managers" section, in the search field, search for and select the team to give the role. Each team you select will appear in a list below the search bar.

## Removing the security manager role from a team in your organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% ifversion security-configurations %}
1. In the "Security" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" %} Code security** then **Global settings**.
{% else %}
{% data reusables.organizations.security-and-analysis %}
{% endif %}
1. Under **Security managers**, next to the team you want to remove as security managers, click {% octicon "x" aria-label="Remove TEAM" %}.

{% endif %}
