---
title: Enabling delegated bypass for push protection
intro: 'You can use delegated bypass for your organization or repository to control who can push commits that contain secrets identified by {% data variables.product.prodname_secret_scanning %}.'
permissions: '{% data reusables.permissions.delegated-bypass %}'
versions:
  feature: push-protection-delegated-bypass
type: how_to
topics:
  - Secret scanning
  - Secret Protection
  - Alerts
  - Repositories
shortTitle: Enable delegated bypass
---

## About enabling delegated bypass for push protection

{% data reusables.secret-scanning.push-protection-delegate-bypass-beta-note %}

{% data reusables.secret-scanning.push-protection-delegated-bypass-intro %}

For more information, see [AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/about-delegated-bypass-for-push-protection).

When you enable this feature, you will create a bypass list of roles and teams who can manage requests to bypass push protection. If you don't already have appropriate teams or roles to use, you should create additional teams before you start.

{% ifversion push-protection-bypass-fine-grained-permissions %}Alternatively, you can grant specific organization members the ability to review and manage bypass requests using fine-grained permissions, which give you more refined control over which individuals and teams can approve and deny bypass requests. For more information, see [Using fine-grained permissions to control who can review and manage bypass requests](#using-fine-grained-permissions-to-control-who-can-review-and-manage-bypass-requests).{% endif %}

## Configuring delegated bypass for a repository

>[!NOTE] If an organization owner configures delegated bypass at the organization-level, the repository-level settings are disabled.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
1. Under "Push protection", to the right of "Who can bypass push protection for {% data variables.product.prodname_secret_scanning %}", select the dropdown menu, then click **Specific roles or teams**.
1. Under "Bypass list", click **Add role or team**.

   > [!NOTE]
   > When you add roles or teams to the "bypass list", these users will be granted the ability to bypass push protection, and they can also review and manage the requests from all other contributors to bypass push protection.
   >
   > You can't add secret teams to the bypass list.

1. In the dialog box, select the roles and teams that you want to add to the bypass list, then click **Add selected**.

## Configuring delegated bypass for an organization

{% ifversion push-protection-delegated-bypass-configurations %}

You must configure delegated bypass for your organization using a custom security configuration. You can then apply the security configuration to all (or selected) repositories in your organization.

1. Create a new custom security configuration, or edit an existing one. See [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/creating-a-custom-security-configuration#creating-a-custom-security-configuration).
1. When creating the custom security configuration, under "{% data variables.product.prodname_secret_scanning_caps %}", ensure that the dropdown menus for "Alerts" and "Push protection" are set to **Enabled**.
1. Under "Push protection", to the right of "Bypass privileges", select the dropdown menu, then click **Specific actors**.

   > [!NOTE]
   > When you assign bypass privileges to selected actors, these organization members are granted the ability to bypass push protection, and they also review and manage the requests from all other contributors to bypass push protection.
   >
   > You can't add secret teams to the bypass list.

1. Click the "Select actors" dropdown menu, then select the roles and teams you want to assign bypass privileges to.

   > [!TIP]
   > In addition to assigning bypass privileges to roles and teams, you can also grant _individual_ organization members the ability to review and manage bypass requests using fine-grained permissions. See [Using fine-grained permissions to control who can review and manage bypass requests](#using-fine-grained-permissions-to-control-who-can-review-and-manage-bypass-requests).

1. Click **Save configuration**.
1. Apply the security configuration to all (or selected) repositories in your organization. See [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/applying-a-custom-security-configuration).

To learn more about security configurations, see [AUTOTITLE](/code-security/securing-your-organization/introduction-to-securing-your-organization-at-scale/about-enabling-security-features-at-scale).

{% else %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% ifversion security-configurations %}
1. In the "Security" section of the sidebar, select the **Code security** dropdown menu, then click **{% data variables.product.prodname_global_settings_caps %}**.
{% else %}
{% data reusables.organizations.security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% endif %}
1. Under "Push protection", to the right of "Who can bypass push protection for {% data variables.product.prodname_secret_scanning %}", select the dropdown menu, then click **Specific roles or teams**.
1. Under "Bypass list", click **Add role or team**.
1. In the dialog box, select the roles and teams that you want to add to the bypass list, then click **Add selected**.

{% endif %}

{% ifversion push-protection-bypass-fine-grained-permissions %}

## Using fine-grained permissions to control who can review and manage bypass requests

You can grant specific individuals or teams in your organization the ability to review and manage bypass requests using fine-grained permissions.

1. Ensure that delegated bypass is enabled for the organization. For more information, follow steps 1-3 in [Configuring delegated bypass for your organization](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/enabling-delegated-bypass-for-push-protection#configuring-delegated-bypass-for-an-organization) and ensure you have saved and applied the security configuration to your selected repositories.
1. Create (or edit) a custom organization role. For information on creating and editing custom roles, see [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-organization-roles#creating-a-custom-role).
1. When choosing which permissions to add to the custom role, select the "Review and manage {% data variables.product.prodname_secret_scanning %} bypass requests" permission.
1. Assign the custom role to individual members or teams in your organization. For more information on assigning custom roles, see [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles#assigning-an-organization-role).

{% endif %}
