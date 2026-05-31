---
title: Security configuration statuses
shortTitle: Configuration statuses
intro: 'Each repository that has a {% data variables.product.prodname_security_configuration %} applied to it has a configuration status that reflects the current state of the relationship between the repository and the configuration.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
contentType: reference
category:
  - Secure at scale
---

A repository's configuration status tells you the current state of its relationship with the applied {% data variables.product.prodname_security_configuration %}. That relationship can change over time—for example, when a repository admin overrides a setting, an admin enables enforcement, or an attachment fails. For more about how configurations and repositories interact, see [AUTOTITLE](/code-security/concepts/security-at-scale/about-enabling-security-features-at-scale).

You can view configuration statuses in the repository table on your organization's {% data variables.product.prodname_security_configurations %} settings page, or retrieve them with the REST API. For more information, see [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-organization-security/manage-your-coverage/filtering-repositories-in-your-organization-using-the-repository-table) and [AUTOTITLE](/rest/code-security/configurations).

## Configuration status reference

The following table describes all configuration statuses, what causes each status, how each appears in the organization settings repository table, and the recommended action.

In the repository table, the "Configuration status" filter supports "Attached," "Removed," "Failed," "Enforced," and "Removed by enterprise." Repositories with a `detached` status appear as "No configuration" and are not filterable by configuration status in the UI. However, the REST API's `status` parameter does accept `detached` when listing repositories for an organization-level configuration.

| Status | Description | Cause | UI display | Recommended action |
|---|---|---|---|---|
| `attached` | The configuration is actively applied. The repository inherits all settings from the configuration. | An organization or enterprise admin applied the configuration to the repository. | The configuration name (for example, "My config") | No action needed. |
| `attaching` | The configuration is being applied. This is a transient state. | An organization or enterprise admin just applied the configuration. | {% octicon "clock" aria-label="Applying" %} Applying CONFIGURATION-NAME | Wait for the operation to complete. If the status does not change, check for attachment failures. |
| `updating` | The configuration is being updated on the repository. | An organization or enterprise admin changed a setting in the configuration. | {% octicon "clock" aria-label="Updating" %} Updating CONFIGURATION-NAME | Wait for the update to complete. |
| `enforced` | The configuration is actively applied and enforced. Repository admins cannot change the enablement status of features controlled by the configuration. | An organization or enterprise admin enabled enforcement on the configuration. | {% octicon "shield" aria-label="Enforced" %} Enforced CONFIGURATION-NAME | No action needed. For more information, see [AUTOTITLE](/code-security/reference/security-at-scale/security-configuration-enforcement). |
| `removed` | A repository-level setting was changed that conflicts with the configuration. The configuration is still associated with the repository, but the repository no longer inherits all settings. | A repository admin changed a security setting on an unenforced configuration. | {% octicon "alert" aria-label="Removed" %} Removed CONFIGURATION-NAME | To restore the intended settings, re-apply the configuration in the "{% data variables.product.prodname_AS %}" page of the repository. To prevent future overrides, consider enabling enforcement. |
| `removed_by_enterprise` | An enterprise-level configuration change caused a conflict with the repository's settings. | An enterprise admin changed a setting that conflicts with the organization-level configuration applied to the repository. | {% octicon "alert" aria-label="Removed" %} Removed CONFIGURATION-NAME | Coordinate with your enterprise admin to resolve the conflict. Re-apply the configuration at the organization or enterprise level. |
| `failed` | The configuration could not be attached to the repository. | A conflict between existing repository settings and the configuration prevented attachment. | {% octicon "alert" aria-label="Failed" %} Failed REASON | Filter by `config-status:failed` in the repository table, then follow the remediation guidance for the specific repository. For more information, see [AUTOTITLE](/code-security/reference/security-at-scale/troubleshoot-security-configurations/diagnosing-security-configuration-issues). |
| `detached` | No configuration is applied. The repository's security settings are managed individually. | An organization admin detached the configuration, or the repository was never attached to a configuration. | No configuration | Apply a configuration if you want the repository to inherit centrally managed settings. For more information, see [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/applying-a-custom-security-configuration). |

## Understanding `removed` vs. `detached`

These statuses reflect different situations:

* **`removed`**: A repository admin changed a security setting that conflicts with an unenforced configuration. The configuration is still associated with the repository, but the repository no longer counts toward your organization's coverage metrics for that configuration. Re-applying the configuration restores the relationship.
* **`detached`**: The configuration is fully disconnected from the repository. The repository's existing security settings are unchanged, but no configuration manages them. To restore centrally managed settings, apply a new configuration.

To prevent repositories from reaching a `removed` status, enable enforcement on the configuration. For more information, see [AUTOTITLE](/code-security/reference/security-at-scale/security-configuration-enforcement).

## Tracking configuration status changes with the audit log

Your organization's audit log records `repository_security_configuration` events whenever a configuration status changes. You can search for these events using the `action:repository_security_configuration` filter. For more information, see [AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/audit-log-events-for-your-organization#repository_security_configuration){% ifversion ghec or ghes %} and [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise){% endif %}.

## Further reading

* [AUTOTITLE](/code-security/concepts/security-at-scale/about-enabling-security-features-at-scale)
* [AUTOTITLE](/code-security/reference/security-at-scale/security-configuration-enforcement)
* [AUTOTITLE](/code-security/reference/security-at-scale/troubleshoot-security-configurations/diagnosing-security-configuration-issues)
