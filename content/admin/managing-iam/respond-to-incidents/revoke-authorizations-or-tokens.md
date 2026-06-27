---
title: Revoking SSO authorizations or deleting credentials in your enterprise
intro: Respond to a security incident by taking action on credentials with access to your enterprise.
permissions: Enterprise owners and users with the "Manage enterprise credentials" fine-grained permission
product: Enterprises with managed users, or enterprises that have enabled SAML SSO for the enterprise or its organizations
versions:
  feature: revoke-enterprise-tokens
shortTitle: Revoke authorizations or tokens
contentType: how-tos
category:
  - Configure authentication
---

When your enterprise is affected by a security incident, you can respond by preventing programmatic access to your enterprise or its organizations.

Available actions:

* **Revoke SSO authorizations** to remove access to SSO-protected organization resources for user credentials in your enterprise.
* **Delete keys and tokens** to remove user tokens and SSH keys in your enterprise, even if they don't have an SSO authorization ({% data variables.product.prodname_emus %} only).

{% ifversion single_user_cred_revocation %}

In the "Authentication security" section of your enterprise settings, you can review counts for user tokens and keys that are authorized for single sign-on (SSO). Then, if needed, you can take action against credentials:

* **For individual members**: Revoke SSO authorizations or delete credentials for a specific user when responding to a targeted incident or performing routine access cleanup.
* **For all members (bulk action)**: Take bulk action to revoke SSO authorizations or delete credentials across all members when responding to a major security incident.

{% else %}

In the "Authentication security" section of your enterprise settings, you can review counts for user tokens and keys that are authorized for single sign-on (SSO). Then, if needed, you can use bulk actions in the "Danger zone" to revoke SSO authorizations or delete credentials.

{% endif %}

## Accessing the authentication security page

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. In the left sidebar, click **Authentication security**.

## Reviewing credentials

In the "Credentials" section, you can view how many credentials of each type have **at least one SSO authorization** for an organization in your enterprise. For more information, see [AUTOTITLE](/authentication/authenticating-with-single-sign-on/about-authentication-with-single-sign-on).

The counts include:

* {% data variables.product.pat_v2_caps_plural %}
* {% data variables.product.pat_v1_caps_plural %}
* User SSH keys
* {% data variables.product.prodname_github_app %} and {% data variables.product.prodname_oauth_app %} user access tokens

An exact count is displayed if there are 10,000 or fewer of a token type. Above that figure, the description `10k+ tokens` is displayed.

## Understanding the available actions

The following sections describe what each action does, which SSO authorizations or credentials are impacted, and related audit log events.

> [!NOTE] If your enterprise does **not** use {% data variables.product.prodname_emus %} and has **not** enabled SAML SSO, neither of these actions is available. As an alternative, if you need users to replace {% data variables.product.pat_generic_plural %} as part of your incident response, you can configure an enterprise policy to expire all {% data variables.product.pat_generic_plural %}. See [AUTOTITLE](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise).

### Revoke SSO authorizations

This action is available for {% data variables.product.prodname_emus %} or enterprises that use SAML SSO.

Revoking authorizations removes SSO authorizations for user tokens and SSH keys{% ifversion single_user_cred_revocation %}, either for a specific user or{% endif %} across all organizations in your enterprise.

* Credentials that have had SSO authorizations revoked **cannot be re-authorized** for the affected organizations. To restore access, users must create new credentials and authorize them.
* The credentials themselves are not deleted, and their permissions for the user and enterprise scopes, and for non-SSO-protected organizations, **remain active**.
* Credentials that have not been authorized for SSO are **not affected**.

Authorization for **{% data variables.product.pat_v2_plural %}** works differently, so this action has a different effect on this token type. For fine-grained PATs where an organization is the "resource owner," the resource owner is removed, removing access to organization resources. Users can change the resource owner back to the organization account, which may require approval (see [AUTOTITLE](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise#enforcing-an-approval-policy-for-fine-grained-personal-access-tokens)).

### Delete keys and tokens

This action is available for {% data variables.product.prodname_emus %} only.

Deleting keys and tokens removes credentials that have access to your enterprise{% ifversion single_user_cred_revocation %}, either for a specific user or for all users{% endif %}, regardless of whether they are authorized for SSO. The credentials stop working and are no longer visible in the UI.

To restore programmatic access, users must create new credentials, authorize them with organizations if required, and update affected processes to use the new credentials.

### Included credentials

Both actions include the following credential types:

* User SSH keys
* {% data variables.product.prodname_oauth_apps %} user access tokens (`ghu_`)
* {% data variables.product.prodname_github_app %} user access tokens
* {% data variables.product.pat_v1_caps_plural %}
* {% data variables.product.pat_v2_caps_plural %}

Note that the "revoke authorizations" action works differently for {% data variables.product.pat_v2_plural %}, as explained above.

The following credential types are **not** affected:

* {% data variables.product.prodname_github_app %} installation tokens (`ghs_`)
* {% data variables.product.pat_v2_caps_plural %}
* Deploy keys
* {% data variables.product.prodname_actions %} `GITHUB_TOKEN` access

### Audit and security log events

The "revoke authorizations" action generates the following events:

* `org_credential_authorization.deauthorize`
* `org_credential_authorization.revoke`
* `personal_access_token.access_revoked`

The "delete tokens" action also generates those events, and additionally generates the following events:

* `oauth_access.destroy`
* `personal_access_token.destroy`

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
