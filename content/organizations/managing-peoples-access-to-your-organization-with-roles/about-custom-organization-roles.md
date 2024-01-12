---
title: About custom organization roles
intro: "You can control access to your organization's settings with custom organization roles."
versions:
  feature: 'custom-org-roles'
topics:
  - Organizations
shortTitle: Custom organization roles
---

{% data reusables.organizations.custom-org-roles-ghec-only %}

## About custom organization roles

{% data reusables.organizations.custom-org-roles-intro %}

You can create and assign custom organization roles in your organization's settings. You can also manage custom roles using the REST API. For more information, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-organization-roles)."

Organization permissions do not grant read, write, or administrator access to any repositories. Some permissions may implicitly grant visibility of repository metadata, as marked in the table below.

To granularly control access to your organization's repositories, you can create a custom repository role. For more information, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/about-custom-repository-roles)."

## Permissions for custom roles

When you include a permission in a custom organization role, any users with that role will have access to the corresponding settings via both the web browser and API. In the organization's settings in the browser, users will see only the pages for settings they can access.

{% rowheaders %}

Permission | Description | More information
------------ | -------------|--------------------
Manage custom organization roles | Access to create, view, update, and delete custom organization roles within the organization. This permission does not allow a user to assign custom roles. | "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-organization-roles)"
View organization roles | Access to view the organization's custom organization roles. | "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-organization-roles)"
Manage custom repository roles | Access to create, view, update, and delete the organization's custom repository roles. |"[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)"
View custom repository roles | Access to view the organization's custom repository roles. | "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)"
Manage organization webhooks | Access to register and manage webhooks for the organization. Users with this permission will be able to view webhook payloads, which may contain metadata for repositories in the organization. | "[AUTOTITLE](/rest/orgs/webhooks#about-organization-webhooks)" in the REST API documentation
{%- ifversion ghec %}
Manage organization OAuth application policies | Access to the "OAuth application policy" settings for the organization. | "[AUTOTITLE](/organizations/managing-oauth-access-to-your-organizations-data/about-oauth-app-access-restrictions)"
{%- endif %}
{%- ifversion repository-properties %}
Edit custom properties values at the organization level | Access to set custom property values on all repositories in the organization. | "[AUTOTITLE](/organizations/managing-organization-settings/managing-custom-properties-for-repositories-in-your-organization)"
Manage the organization's custom properties definitions | Access to create and edit custom property definitions for the organization. | "[AUTOTITLE](/organizations/managing-organization-settings/managing-custom-properties-for-repositories-in-your-organization)"
{%- endif %}
{%- ifversion repo-rules-enterprise %}
Manage organization ref update rules and rulesets | Access to manage rulesets and view ruleset insights at the organization level. | "[AUTOTITLE](/organizations/managing-organization-settings/managing-rulesets-for-repositories-in-your-organization)"
{%- endif %}
View organization audit log | Access to the audit log for the organization. The audit log may contain metadata for repositories in the organization. | "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization)"

{% endrowheaders %}
