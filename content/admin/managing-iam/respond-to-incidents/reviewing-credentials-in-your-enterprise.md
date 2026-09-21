---
title: Reviewing credentials in your enterprise
intro: Review and export an enterprise-wide credential inventory to investigate access, respond to security incidents, and support compliance audits.
permissions: Enterprise owners and users with the "View enterprise credentials" fine-grained permission
product: '{% data variables.product.prodname_ghe_cloud %}'
versions:
  feature: enterprise-token-inventory
shortTitle: Review credentials
contentType: how-tos
category:
  - Configure authentication
---

The credential inventory gives you enterprise-wide visibility into credentials that can access your enterprise. The inventory is read-only. Depending on the credential type, remediation happens at the enterprise, organization, application, or user level.

## About the credentials overview

On the "Authentication security" page, the "Credentials" section shows overview counts for these credential types:

* {% data variables.product.pat_v2_caps_plural %}
* {% data variables.product.pat_v1_caps_plural %}
* {% data variables.product.prodname_oauth_app %} access tokens
* {% data variables.product.prodname_github_app %} user access tokens
* {% data variables.product.prodname_github_app %} installation access tokens
* User SSH keys

The counts include active credentials, meaning credentials that have not expired, been revoked, or been deleted. {% data variables.product.prodname_github_app %} installation access is represented by the app installation that can issue tokens, rather than by each short-lived installation access token.

Use the counts to understand the relative scale of each credential type. The overview displays `10k+` when a credential-type count reaches 10,000, rather than displaying an exact total.

For credential-level investigation, export the inventory. The export also includes federated credentials that can access the enterprise.

## Viewing the credentials overview

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. Under "Credentials," review the "Overview" section.

## Exporting the credential inventory

The CSV export contains the full credential inventory. You cannot filter the inventory before exporting it. After downloading the file, you can filter its columns by credential type, access state, owner, organization, or application.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. Next to "Overview," click **{% octicon "download" aria-hidden="true" aria-label="download" %} Export CSV**.
1. Wait for the export to finish. The CSV downloads automatically, and {% data variables.product.github %} sends a download link to your notification email address.

## Interpreting the CSV export

The CSV contains one row for each combination of a credential and an authorizing organization. If a credential is authorized for multiple organizations, its credential data is repeated in multiple rows. A credential without an organization authorization appears once with empty `organization_id` and `organization` fields.

The following table describes the fields in the export.

| Field | Description |
| --- | --- |
| `credential_id` | Identifier for the credential in its source system. The identifier is unique only when combined with `credential_type`, and is empty for SSH keys, {% data variables.product.prodname_github_app %} installations, and federated credentials. |
| `hashed_token` | Base64-encoded SHA-256 hash that can be matched to the `hashed_token` field in audit log events. This field is empty for {% data variables.product.pat_v2_plural %}. The export never includes the token value. |
| `fingerprint` | SHA-256 fingerprint for an SSH key. Empty for other credential types. |
| `item_type` | A `credential` represents an individual credential. A `token_issuer_principal` represents a {% data variables.product.prodname_github_app %} installation that can issue access tokens, rather than an individual installation access token. |
| `credential_type` | Credential type, such as `classic_pat`, `fine_grained_pat`, `oauth_app_user_token`, `github_app_user_token`, `ssh_key`, `github_app_installation`, or `federated_jti`. |
| `display_name` | Display name for the credential, when available. |
| `owner_id` | Identifier for the credential owner. Use with `owner_type` to interpret the identifier. |
| `owner` | Login or name of the credential owner. |
| `owner_type` | Owner type: `user`, `oauth_application`, or `github_app`. |
| `application_id` | Identifier for the associated application, when applicable. |
| `application` | Name of the associated application, when applicable. |
| `credential_state` | Credential state, such as `active`, `expired`, `revoked`, or `deleted`. |
| `created_at` | Date and time the credential was created, when available. |
| `last_used_at` | Date and time the credential was last used, when available. |
| `expires_at` | Date and time the credential expires, when available. |
| `expiry_status` | Whether the credential `expires`, `never` expires, or has an `unknown` expiration. |
| `enterprise_authorized` | Whether the credential is authorized directly at the enterprise level. |
| `authorization_count` | Total number of organization authorizations, plus one if `enterprise_authorized` is `true`. |
| `age_days` | Age of the credential in whole days when the inventory was generated. |
| `past_expiration_policy` | Whether the credential exceeds an enforced lifetime limit or advisory age baseline, when evaluated. |
| `past_expiration_policy_basis` | Whether `past_expiration_policy` is based on an `enforced_limit` or `proposed_baseline`. |
| `scopes` | OAuth scopes for the token, separated by semicolons. |
| `permissions` | Permissions for a {% data variables.product.pat_v2 %} or {% data variables.product.prodname_github_app %} installation, formatted as semicolon-separated `resource:action` pairs. |
| `repository_selection` | Whether the credential can access `all`, a `subset`, or `none` of the repositories available to it. |
| `organization_id` | Identifier for an organization that authorizes the credential. |
| `organization` | Login for an organization that authorizes the credential. |

Empty cells mean that a value is unavailable or does not apply. Timestamps use ISO 8601 format in UTC.

## Correlating credentials with audit log activity

Use the export to compare credentials with authentication metadata in your enterprise audit log. For tokens, compare `credential_id` with `token_id`, or copy a `hashed_token` value and search for `hashed_token:"VALUE"`. For SSH keys, compare the `fingerprint` values. You do not need the original token value.

For more information, see [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token).

## Next steps

After you identify credentials that require action, you can revoke SSO authorizations or, for an enterprise with managed users, delete user keys and tokens. These actions can disrupt users and automation across the enterprise. Before proceeding, see [AUTOTITLE](/admin/managing-iam/respond-to-incidents/revoke-authorizations-or-tokens).
