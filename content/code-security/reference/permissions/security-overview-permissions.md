---
title: Security overview permissions
shortTitle: Security overview
intro: The actions you can take in security overview depend on your permissions for the repositories in your organization or enterprise.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Security advisories
  - Vulnerabilities
  - Permissions
contentType: reference
---

The actions you can take in the security overview depend on your permissions for the repositories in your organization or enterprise.

## Organization-level overview

If you are an **owner or security manager** for an organization, you can see data for all the repositories in the organization in all views.

If you are an **organization or team member**, you can view security overview for the organization and see data for repositories where you have an appropriate level of access.

{% ifversion secret-risk-assessment %}

> [!TIP] The Assessments view, which is not shown in the table below, is only available to organization owners and security managers.

{% endif %}

{% rowheaders %}

| Organization or team member with | Overview dashboard view | Risk and alerts views | Coverage view |
|--------------------|-------------|---------------------|---------|
| `admin` access for one or more repositories | View data for those repositories | View data for those repositories |  View data for those repositories{% ifversion pre-security-configurations %}, and enable and disable security features{% endif %} |
| `write` access for one or more repositories | View {% data variables.product.prodname_code_scanning %} and {% data variables.product.prodname_dependabot %} data for those repositories | View {% data variables.product.prodname_code_scanning %} and {% data variables.product.prodname_dependabot %} data for those repositories | No access |
| `read` or `triage` access for one or more repositories | No access | No access | No access |
| Security alert access for one or more repositories | View all security alert data for those repositories | View all security alert data for those repositories | No access |
| Custom organization role with permission to view one or more types of security alert | View allowed alert data for all repositories |  View allowed alert data for all repositories in all views  | No access |

{% endrowheaders %}

> [!NOTE]
> To ensure a consistent and responsive experience, for organization members, the organization-level security overview pages will only display results from the most recently updated 3,000 repositories. If your results have been restricted, a notification will appear at the top of the page. Organization owners and security managers will see results from all repositories.

For more information about access to security alerts and related views, see [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts) and [AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/about-custom-repository-roles#security).

## Enterprise-level overview

> [!NOTE]
> If you are an **enterprise owner**, you will need to join an organization as an organization owner to view data for the organization's repositories in both the organization-level and enterprise-level overview.{% ifversion secret-scanning-user-owned-repos %} {% data reusables.secret-scanning.secret-scanning-user-owned-repo-access %}{% endif %} For more information, see [AUTOTITLE](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise).

In the enterprise-level security overview, you can see data for all organizations where you are an **organization owner or security manager**.

{% ifversion ghec %}
If you're an owner of an {% data variables.enterprise.prodname_emu_enterprise %}, you can view data from user-owned repositories in security overview and filter by repository owner type. For more information on {% data variables.enterprise.prodname_managed_users %}, see [AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users).
{% endif %}
