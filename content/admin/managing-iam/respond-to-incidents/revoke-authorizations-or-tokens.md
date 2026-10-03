---
title: Revoking authorizations or deleting credentials in your enterprise
intro: Contain a security incident by removing credential access across your enterprise or by taking targeted action against specific users or credential types.
permissions: Enterprise owners and users with the "Manage enterprise credentials" fine-grained permission
product: Enterprises with managed users, or enterprises that have enabled SAML SSO for the enterprise or its organizations
versions:
  feature: revoke-enterprise-tokens
shortTitle: Revoke or delete credentials
allowTitleToDifferFromFilename: true
contentType: how-tos
category:
  - Configure authentication
---

When your enterprise is affected by a security incident, you can respond by preventing programmatic access to your enterprise or its organizations.

Available actions:

* **Revoke SSO authorizations** to remove access to SSO-protected organization resources for user credentials in your enterprise.
* **Delete keys and tokens** to remove user tokens and SSH keys in your enterprise, even if they don't have an SSO authorization ({% data variables.product.prodname_emus %} only).

{% ifversion single_user_cred_revocation %}

In the "Authentication security" section of your enterprise settings, you can take action against credentials:

* **For individual members**: Revoke SSO authorizations or delete credentials for a specific user when responding to a targeted incident or performing routine access cleanup.
* **For a specific credential type**: Revoke SSO authorizations or delete credentials of a selected type, such as only {% data variables.product.pat_v1_plural %}, across your entire enterprise.
* **For all members (bulk action)**: Take bulk action to revoke SSO authorizations or delete credentials across all members and every supported credential type, such as when responding to a major security incident.

You can also take any of these actions using the [AUTOTITLE](/rest/enterprise-admin/credential-authorizations).

> [!NOTE] Organization owners can take the same actions at the organization level, using the {% data variables.product.github %} UI or the [AUTOTITLE](/rest/orgs/orgs#revoke-a-single-credential-type-for-an-organization).

{% else %}

In the "Authentication security" section of your enterprise settings, you can use bulk actions in the "Danger zone" to revoke SSO authorizations or delete credentials.

{% endif %}

## Accessing the authentication security page

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. In the left sidebar, click **Authentication security**.

## Reviewing credentials

Before taking action, use the "Credentials" overview and CSV export to assess which credentials can access your enterprise. The overview provides enterprise-wide visibility, but the available response depends on the credential type and where it is managed.

For information about the overview, export fields, and audit log correlation, see [AUTOTITLE](/admin/managing-iam/respond-to-incidents/reviewing-credentials-in-your-enterprise).

## Choosing where to take action

Use the following table to determine the narrowest appropriate response. Enterprise-level actions can affect credentials across every organization in the enterprise. Organization- and user-level actions reduce disruption when you can identify the affected credential or application.

| Credential type | Where it is managed | Who can take action | Scope and available action |
| --- | --- | --- | --- |
| {% data variables.product.pat_v2_caps %} | Organization settings or the token owner's personal settings | Organization owner or token owner | At the organization level, revoke the token's access to organization resources. At the user level, delete the token. |
| {% data variables.product.pat_v1_caps %} | SSO credential authorization settings or the token owner's personal settings | Enterprise owner, organization owner, or token owner | At the enterprise or organization level, revoke SSO authorization. At the user level, delete the token. |
| {% data variables.product.prodname_oauth_app %} access token | Organization OAuth app policy or the user's authorized OAuth apps | Organization owner or user | At the organization level, deny the app access. At the user level, revoke the app authorization and its associated tokens. |
| {% data variables.product.prodname_github_app %} user access token or installation | Installed app settings or the user's authorized {% data variables.product.prodname_github_apps %} | Enterprise owner, organization owner, or user | At the enterprise or organization level, suspend or uninstall the app to prevent access. At the user level, revoke the user's authorization. |
| User SSH key | SSO credential authorization settings or the key owner's personal settings | Enterprise owner, organization owner, or key owner | At the enterprise or organization level, revoke SSO authorization. At the user level, delete the key. |

For a targeted response, use the procedure for the credential and action:

* **{% data variables.product.pat_v2_caps_plural %}**: [AUTOTITLE](/organizations/managing-programmatic-access-to-your-organization/reviewing-and-revoking-personal-access-tokens-in-your-organization)
* **User-owned {% data variables.product.pat_generic_plural %}**: [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#deleting-a-personal-access-token)
* **SSO-authorized {% data variables.product.pat_v1_plural %} and user SSH keys**: [AUTOTITLE](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)
* **{% data variables.product.prodname_oauth_app %} access tokens**: [AUTOTITLE](/organizations/managing-oauth-access-to-your-organizations-data/denying-access-to-a-previously-approved-oauth-app-for-your-organization) or [AUTOTITLE](/apps/oauth-apps/using-oauth-apps/reviewing-your-authorized-oauth-apps)
* **{% data variables.product.prodname_github_app %} user access tokens or installations**: [AUTOTITLE](/apps/using-github-apps/reviewing-and-modifying-installed-github-apps) or [AUTOTITLE](/apps/using-github-apps/reviewing-and-revoking-authorization-of-github-apps)
* **User-owned SSH keys**: [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/reviewing-your-ssh-keys)

For an enterprise-wide response, see [Taking bulk action against all members](#taking-bulk-action-against-all-members). These actions affect user credentials, not {% data variables.product.prodname_github_app %} installation access tokens.

## Understanding the available actions

The following sections describe what each action does, which SSO authorizations or credentials are impacted, and related audit log events.

> [!NOTE] If your enterprise does **not** use {% data variables.product.prodname_emus %} and has **not** enabled SAML SSO, neither of these actions is available. As an alternative, if you need users to replace {% data variables.product.pat_generic_plural %} as part of your incident response, you can configure an enterprise policy to expire all {% data variables.product.pat_generic_plural %}. See [AUTOTITLE](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise).

{% ifversion single_user_cred_revocation %}
By default, each action targets all credential types that support it. You can instead scope an action to a single credential type, such as {% data variables.product.pat_v1_plural %} or user SSH keys, to contain an incident without disrupting other credentials. See [Included credentials](#included-credentials) for the credential types that support each action.
{% endif %}

### Revoke SSO authorizations

This action is available for {% data variables.product.prodname_emus %} or enterprises that use SAML SSO.

Revoking authorizations removes SSO authorizations for user tokens and SSH keys{% ifversion single_user_cred_revocation %}, either for a specific user, all users, or a specific credential type,{% endif %} across all organizations in your enterprise.

* Credentials that have had SSO authorizations revoked **cannot be re-authorized** for the affected organizations. To restore access, users must create new credentials and authorize them.
* The credentials themselves are not deleted, and their permissions for the user and enterprise scopes, and for non-SSO-protected organizations, **remain active**.
* Credentials that have not been authorized for SSO are **not affected**.

Authorization for **{% data variables.product.pat_v2_plural %}** works differently, so this action has a different effect on this token type. For fine-grained PATs where an organization is the "resource owner," the resource owner is removed, removing access to organization resources. Users can change the resource owner back to the organization account, which may require approval (see [AUTOTITLE](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise#enforcing-an-approval-policy-for-fine-grained-personal-access-tokens)).

### Delete keys and tokens

This action is available for {% data variables.product.prodname_emus %} only.

Deleting keys and tokens removes credentials that have access to your enterprise{% ifversion single_user_cred_revocation %}, either for a specific user, all users, or a specific credential type{% endif %}, regardless of whether they are authorized for SSO. The credentials stop working and are no longer visible in the UI.

{% ifversion single_user_cred_revocation %}For example, you can delete all {% data variables.product.pat_generic_plural %} for an individual member without affecting that member's SSH keys.{% endif %} To restore programmatic access, users must create new credentials, authorize them with organizations if required, and update affected processes to use the new credentials.

### Included credentials

Both actions include the following credential types:

* User SSH keys
* {% data variables.product.prodname_oauth_apps %} user access tokens (`ghu_`)
* {% data variables.product.prodname_github_app %} user access tokens
* {% data variables.product.pat_v1_caps_plural %}
* {% data variables.product.pat_v2_caps_plural %}

The "revoke authorizations" action works differently for {% data variables.product.pat_v2_plural %}. For details, see [Revoke SSO authorizations](#revoke-sso-authorizations).

The following credential types are **not** affected by either action:

* {% data variables.product.prodname_github_app %} installation tokens (`ghs_`)
* Deploy keys
* {% data variables.product.prodname_actions %} `GITHUB_TOKEN` access

> [!NOTE] A deploy key created with a {% data variables.product.pat_generic %} or an {% data variables.product.prodname_oauth_app %} token is deleted when the "Delete keys and tokens" action deletes that token. Deploy keys created through the web interface or with a {% data variables.product.prodname_github_app %} user access token are not affected. See [AUTOTITLE](/rest/deploy-keys/deploy-keys).

### Audit and security log events

The "revoke authorizations" action generates the following events, whether it's scoped to a specific user, a specific credential type, or all members:

* `org_credential_authorization.deauthorize`
* `org_credential_authorization.revoke`
* `personal_access_token.access_revoked`

The "delete tokens" action also generates those events, and additionally generates the following events:

* `oauth_access.destroy`
* `personal_access_token.destroy`

Affected users receive an email notification when their SSO authorizations are revoked or their credentials are deleted, whether the action was initiated by an enterprise owner or by the user themselves.

{% ifversion single_user_cred_revocation %}

## Taking action against individual members

You can revoke SSO authorizations or delete credentials for a specific user. This is useful for responding to incidents affecting individual accounts, such as a compromised account or lost hardware, or for routine access cleanup.

### Revoking authorizations for a specific user

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. In the left sidebar, click **Authentication security**.
1. In the "Danger zone" section, click **Revoke for ▼**, then click **A specific user**.
1. Select the user whose authorizations you want to revoke.
1. To confirm, type `USERNAME credentials` (replacing `USERNAME` with the user's username).
1. Click **Revoke authorizations**.

### Deleting credentials for a specific user

This action is available for {% data variables.product.prodname_emus %} only.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. In the left sidebar, click **Authentication security**.
1. In the "Danger zone" section, click **Delete for ▼**, then click **A specific user**.
1. Select the user whose credentials you want to delete.
1. To confirm, type `USERNAME credentials` (replacing `USERNAME` with the user's username).
1. Click **Delete keys and tokens**.

## Taking action against a specific credential type

You can revoke SSO authorizations or delete credentials of a single type across your entire enterprise, without affecting other credential types. For example, you can revoke SSO authorizations for all {% data variables.product.pat_v1_plural %} while leaving user SSH keys and other credential types untouched.

### Revoking authorizations for a credential type

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. In the left sidebar, click **Authentication security**.
1. In the "Danger zone" section, click **Revoke for ▼**, then click the credential type whose authorizations you want to revoke.
1. Read the warning about the impact of this action.
1. To confirm, type the name of your enterprise.
1. Click **Revoke authorizations**.

### Deleting credentials of a specific type

This action is available for {% data variables.product.prodname_emus %} only.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. In the left sidebar, click **Authentication security**.
1. In the "Danger zone" section, click **Delete for ▼**, then click the credential type whose credentials you want to delete.
1. Read the warning about the impact of this action.
1. To confirm, type the name of your enterprise.
1. Click **Delete keys and tokens**.

You can also combine these actions with a specific user, by selecting a user first and then choosing a credential type, or perform either action using the [AUTOTITLE](/rest/enterprise-admin/credential-authorizations).

{% endif %}

## Taking bulk action against all members

Use the **Danger zone** bulk action buttons to respond to a major security incident by taking action against all members of your enterprise.

> [!WARNING] Bulk actions are high-impact actions that should be reserved for major security incidents. They are likely to break automations, and it could take months of work to restore your original state.

### Revoking authorizations for all members

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. In the left sidebar, click **Authentication security**.
1. In the "Danger zone" section, click **Revoke{% ifversion single_user_cred_revocation %} for ▼**, then click **All users{% endif %}**.
1. Read the warning about the impact of this action.
1. To confirm, type the name of your enterprise.
1. Click **Revoke authorizations**.

### Deleting credentials for all members

This action is available for {% data variables.product.prodname_emus %} only.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. In the left sidebar, click **Authentication security**.
1. In the "Danger zone" section, click **Delete{% ifversion single_user_cred_revocation %} for ▼**, then click **All users{% endif %}**.
1. Read the warning about the impact of this action.
1. To confirm, type the name of your enterprise.
1. Click **Delete keys and tokens**.

## Resources for smaller-scale responses

The following articles describe alternative actions for managing incidents that are smaller in scope, where you can identify specific compromised tokens or user accounts.

* [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token)
* [AUTOTITLE](/code-security/tutorials/remediate-leaked-secrets/remediating-a-leaked-secret)
* [AUTOTITLE](/rest/credentials/revoke) in the REST API documentation
* [AUTOTITLE](/rest/orgs/orgs#revoke-a-single-credential-type-for-an-organization) in the REST API documentation
