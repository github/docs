---
title: Diagnosing security configuration issues
shortTitle: Diagnose configuration issues
intro: Identify repositories where the security configuration could not be attached, or where the configuration relationship has changed, and follow guidance to remediate the problem.
permissions: '{% data reusables.permissions.security-org-enable %}'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
redirect_from:
  - /code-security/securing-your-organization/managing-the-security-of-your-organization/finding-repositories-with-attachment-failures
  - /code-security/how-tos/secure-at-scale/troubleshoot-security-configurations/finding-repositories-with-attachment-failures
  - /code-security/reference/security-at-scale/troubleshoot-security-configurations/finding-repositories-with-attachment-failures
contentType: reference
category:
  - Troubleshoot security tools
---

## Finding and remediating attachment failures

When you apply a configuration to a group of repositories, some repositories may fail to attach, typically because of a conflict between existing repository settings and the configuration you applied. When this happens, only some settings are applied to the affected repositories, and those repositories won't inherit future changes to the configuration.

On the security configuration settings page, in the **Repositories** tab under "Apply configurations", a banner shows how many repositories have an attachment failure and summarizes the reason. Click the link in the banner, or filter the repository list by `config-status:failed`, to see affected repositories and guidance on how to remediate each failure.

{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.security-configurations.view-configurations-page %}
1. Click the **Repositories** tab.
1. In the "Apply configurations" section, filter by `config-status:failed`.
1. From the results list, for the repository you're interested in, click **{% octicon "alert" aria-hidden="true" aria-label="alert" %} Failed REASON**.
1. In the dialog box, review the information and follow the remediation guidance.

## Finding and remediating removed configurations

A repository's configuration status changes to `removed` when a repository admin changes a security setting that conflicts with the applied configuration. The configuration is still associated with the repository, but the repository no longer inherits all settings from the configuration.

To find and remediate repositories with a `removed` status:

{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.security-configurations.view-configurations-page %}
1. Filter the repository list using the "Configuration status" filter and select "Removed."
1. To restore the intended settings, re-apply the configuration to the affected repositories.
1. To prevent future overrides, consider enabling enforcement on the configuration. See [AUTOTITLE](/code-security/reference/security-at-scale/security-configuration-enforcement).

## Finding and remediating enterprise-removed configurations

A repository's configuration status changes to `removed_by_enterprise` when an enterprise-level change conflicts with the organization-level configuration applied to the repository.

To find and remediate repositories with a `removed_by_enterprise` status:

{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.security-configurations.view-configurations-page %}
1. Filter the repository list using the "Configuration status" filter and select "Removed by enterprise."
1. Coordinate with your enterprise admin to resolve the conflict between the enterprise-level and organization-level configurations.
1. Re-apply the configuration at the organization or enterprise level.

For more information about all configuration statuses, see [AUTOTITLE](/code-security/reference/security-at-scale/security-configuration-statuses).

