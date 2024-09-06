---
title: About custom organization roles
intro: "You can control access to your {% ifversion org-custom-role-with-repo-permissions %}organization and repository's{% else %} organization's{% endif %} settings with custom organization roles."
versions:
  feature: 'custom-org-roles'
topics:
  - Organizations
shortTitle: Custom organization roles
permissions: 'Organization owners and users with the "Manage custom organization roles" permission'
product: 'Organizations on {% data variables.product.prodname_ghe_cloud %}{% ifversion ghes %} and {% data variables.product.prodname_ghe_server %}{% endif %}'
---

{% data reusables.organizations.custom-org-roles-intro %}

You can create and assign custom organization roles in your organization's settings. You can also manage custom roles using the REST API. See "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-organization-roles)."

{% ifversion org-custom-role-with-repo-permissions %}

You can also create a custom organization role that includes permissions for repositories. Repository permissions grant access to all current and future repositories in the organization. There are several ways to combine permissions for repositories and organizations. You can create a custom organization role with:

You can create a role that includes permissions for organization settings, a base role for repository access, or both. If you add a base role for repository access, you can also include additional repository permissions. You can't create a role with repository permissions unless it includes a base repository role. Without repository permissions or a base repository role, the organization role doesn't grant access to any repositories.

>[!NOTE] Adding repository permissions to a custom organization role is currently in public beta and subject to change.

{% endif %}

To grant access to **specific** repositories in your organization, you can create a custom repository role. See "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/about-custom-repository-roles)."

## Permissions for organization access

When you include a permission in a custom organization role, any users with that role will have access to the corresponding settings via both the web browser and API. In the organization's settings in the browser, users will see only the pages for settings they can access.

Organization permissions do not grant read, write, or administrator access to any repositories. Some permissions may implicitly grant visibility of repository metadata, as marked in the table below.

{% rowheaders %}

| Permission | Description | More information |
| ------------ | -------------|-------------------- |
| Manage custom organization roles | Access to create, view, update, and delete custom organization roles within the organization. This permission does not allow a user to assign custom roles. | "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-organization-roles)" |
| View organization roles | Access to view the organization's custom organization roles. | "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-organization-roles)" |
| Manage custom repository roles | Access to create, view, update, and delete the organization's custom repository roles. |"[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)" |
| View custom repository roles | Access to view the organization's custom repository roles. | "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)" |
| Manage organization webhooks | Access to register and manage webhooks for the organization. Users with this permission will be able to view webhook payloads, which may contain metadata for repositories in the organization. | "[AUTOTITLE](/rest/orgs/webhooks#about-organization-webhooks)" |
|  {% ifversion ghec %} |
Manage organization OAuth application policies | Access to the "OAuth application policy" settings for the organization. | "[AUTOTITLE](/organizations/managing-oauth-access-to-your-organizations-data/about-oauth-app-access-restrictions)" |
|  {% endif %} |
|  {% ifversion repository-properties %} |
| Edit custom properties values at the organization level | Access to set custom property values on all repositories in the organization. | "[AUTOTITLE](/organizations/managing-organization-settings/managing-custom-properties-for-repositories-in-your-organization)" |
| Manage the organization's custom properties definitions | Access to create and edit custom property definitions for the organization. | "[AUTOTITLE](/organizations/managing-organization-settings/managing-custom-properties-for-repositories-in-your-organization)" |
|  {% endif %} |
|  {% ifversion repo-rules-enterprise %} |
| Manage organization ref update rules and rulesets | Access to manage rulesets and view ruleset insights at the organization level. | "[AUTOTITLE](/organizations/managing-organization-settings/managing-rulesets-for-repositories-in-your-organization)" |
|  {% endif %} |
| View organization audit log | Access to the audit log for the organization. The audit log may contain metadata for repositories in the organization. | "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization)" |
| Manage organization Actions policies | Access to manage all settings on the "Actions General" settings page, except for self-hosted runners settings. | "[AUTOTITLE](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)" |
| Manage organization runners and runner groups | Access to create and manage GitHub-hosted runners, self-hosted runners, and runner groups, and control where self-hosted runners can be created. | "[AUTOTITLE](/actions/using-github-hosted-runners/about-github-hosted-runners/about-github-hosted-runners#overview-of-github-hosted-runners)"<br><br>"[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners)" |
| Manage organization Actions secrets | Access to create and manage Actions organization secrets. | "[AUTOTITLE](/actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-an-organization)" |
| Manage organization Actions variables | Access to create and manage Actions organization variables. | "[AUTOTITLE](/actions/learn-github-actions/variables#creating-configuration-variables-for-an-organization)" |
|  {% ifversion actions-usage-metrics %} |
| View organization Actions usage metrics | View {% data variables.product.prodname_actions %} usage metrics for your organization. | "[AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/viewing-usage-metrics-for-github-actions)" |
|  {% endif %} |
|  {% ifversion push-protection-bypass-fine-grained-permissions %} |
| Review and manage {% data variables.product.prodname_secret_scanning %} bypass requests | Review and manage {% data variables.product.prodname_secret_scanning %} bypass requests for your organization. | "[AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection)" |
|  {% endif %} |

{% endrowheaders %}

{% ifversion org-custom-role-with-repo-permissions %}

## Base roles for repository access

The base repository role determines the initial set of permissions included in the custom role. Repository access is granted across **all** current and future repositories in the organization.

The base repository roles are:

* **Read**: Grants read access to all repositories in the organization.
* **Write**: Grants write access to all repositories in the organization.
* **Triage**: Grants triage access to all repositories in the organization.
* **Maintain**: Grants maintenance access to all repositories in the organization.
* **Admin**: Grants admin access to all repositories in the organization.

## Additional permissions for repository access

After choosing a base repository role, you can select additional permissions for your custom organization role.

You can only choose an additional permission if it's not already included in the base repository role. For example, if the base role offers **Write** access to a repository, then the "Close a pull request" permission will already be included in the base role.

{% data reusables.organizations.additional-permissions %}

## Precedence for different levels of access

{% data reusables.organizations.precedence-for-different-levels %}

{% endif %}
