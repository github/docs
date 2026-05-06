---
title: Enabling delegated bypass for push protection
intro: Control who can push code containing secrets by requiring bypass approval from designated reviewers.
permissions: '{% data reusables.permissions.delegated-bypass %}'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
contentType: how-tos
shortTitle: Enable delegated bypass
redirect_from:
  - /code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/enabling-delegated-bypass-for-push-protection
category:
  - Protect your secrets
---

{% data reusables.secret-scanning.push-protection-delegate-bypass-beta-note %}

Delegated bypass for push protection lets you define who can push commits containing secrets and adds an approval process for other contributors. See [AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/about-delegated-bypass-for-push-protection).

To enable delegated bypass, create the teams or roles that will manage bypass requests.{% ifversion push-protection-bypass-fine-grained-permissions %} Alternatively, use fine-grained permissions for more granular control. See [Using fine-grained permissions to control who can review and manage bypass requests](#using-fine-grained-permissions-to-control-who-can-review-and-manage-bypass-requests).{% endif %}

## Enabling delegated bypass for a repository

{% data reusables.secret-scanning.push-protection-grant-repo-bypass %}{% ifversion push-protection-repo-exemptions %}
{% data reusables.secret-scanning.push-protection-optional-grant-exemption %}
    {% data reusables.secret-scanning.push-protection-exemption-warning %}

{% endif %}

## Enabling delegated bypass for an organization

{% ifversion push-protection-delegated-bypass-configurations %}
{% data reusables.secret-scanning.push-protection-grant-org-bypass %}

   > [!NOTE]
   > * You can't add secret teams to the bypass list.
   > * In addition to assigning bypass privileges to roles and teams, you can also grant _individual_ organization members the ability to review and manage bypass requests using fine-grained permissions. See [Using fine-grained permissions to control who can review and manage bypass requests](#using-fine-grained-permissions-to-control-who-can-review-and-manage-bypass-requests).

{% data reusables.secret-scanning.push-protection-optional-grant-exemption %}
    {% data reusables.secret-scanning.push-protection-exemption-warning %}
1. Click **Save configuration**.
1. Apply the security configuration to repositories in your organization. See [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/applying-a-custom-security-configuration).
{% else %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
1. In the "Security" section of the sidebar, select the **{% data variables.product.UI_advanced_security %}** dropdown menu, then click **{% data variables.product.prodname_global_settings_caps %}**.

1. Under "Push protection," to the right of "Who can bypass push protection for {% data variables.product.prodname_secret_scanning %}," select the dropdown menu, then click **Specific roles or teams**.
1. Under "Bypass list," click **Add role or team**.
1. In the dialog box, select the roles and teams that you want to add to the bypass list, then click **Add selected**.

{% endif %}

{% ifversion push-protection-bypass-fine-grained-permissions %}

{% ifversion push-protection-delegated-bypass-configurations-enterprise %}

## Enabling delegated bypass for an enterprise

{% data reusables.secret-scanning.push-protection-grant-enterprise-bypass %}
{% data reusables.secret-scanning.push-protection-optional-grant-exemption %}
    {% data reusables.secret-scanning.push-protection-exemption-warning %}
1. Click **Save configuration**.
1. Apply the security configuration to organizations and repositories in your enterprise. See [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/applying-a-custom-security-configuration-to-your-enterprise).
{% endif %}

## Using fine-grained permissions to control who can review and manage bypass requests

You can grant specific individuals or teams in your organization the ability to review and manage bypass requests using fine-grained permissions.

1. Ensure that delegated bypass is enabled for the organization. For more information, follow steps 1-3 in [Enabling delegated bypass for your organization](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/enabling-delegated-bypass-for-push-protection#enabling-delegated-bypass-for-an-organization) and ensure you have saved and applied the security configuration to your selected repositories.
1. Create (or edit) a custom organization role. For information on creating and editing custom roles, see [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-organization-roles#creating-a-custom-role).
1. When choosing which permissions to add to the custom role, select the "Review and manage {% data variables.product.prodname_secret_scanning %} bypass requests" permission.
1. Assign the custom role to individual members or teams in your organization. For more information on assigning custom roles, see [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles#assigning-an-organization-role).

{% endif %}
