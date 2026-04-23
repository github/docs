---
title: GitHub credential types reference
shortTitle: Credential types reference
intro: Reference documentation for all programmatic credential types that can access {% data variables.product.github %}, including token formats, lifespan, SSO authorization capabilities, and revocation options.
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: reference
---

This article provides a consolidated reference for all programmatic credential types that can access {% data variables.product.github %}. Use this reference to audit activity and manage credential revocation, especially during security incidents.

## Credential types overview

The following table lists all credential types that can programmatically access {% data variables.product.github %}.

| Credential type | Credential prefix | Lifespan | Revocation | Associated with |
|-----------------|-----------------|----------|------------|-----------------|
| [{% data variables.product.pat_v1_caps %}](#personal-access-token-classic) | `ghp_` | Long-lived | Manual | User account |
|[{% data variables.product.pat_v2_caps %}](#fine-grained-personal-access-token) | `github_pat_` | Configurable (up to 1 year, or no expiration) | Manual | User account |
| [{% data variables.product.prodname_oauth_app %} access token](#oauth-app-access-tokens) | `gho_` | Long-lived | Manual | User account |
| [{% data variables.product.prodname_github_app %} user access token](#github-app-user-access-tokens) | `ghu_` | Short-lived (8 hours) | Automatic expiry or manual | User account |
| [{% data variables.product.prodname_github_app %} installation access token](#github-app-installation-access-tokens) | `ghs_` | Short-lived (1 hour) | Automatic expiry | App installation |
| [{% data variables.product.prodname_github_app %} refresh token](#github-app-refresh-tokens) | `ghr_` | Long-lived (6 months) | Manual | User account |
| [User SSH key](#user-ssh-keys) | Not applicable | Long-lived | Manual | User account |
| [Deploy key](#deploy-keys) | Not applicable | Long-lived | Manual | Repository |
| [`GITHUB_TOKEN`](#github_token-github-actions) ({% data variables.product.prodname_actions %}) | Not applicable | Short-lived (job duration) | Automatic expiry | Workflow run |

## Credential revocation

The following sections describe revocation options for each credential type based on your role. See also [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/token-expiration-and-revocation).

> [!NOTE] Enterprise owners have options for **bulk actions** in major incidents. See [Bulk actions for security incidents](#bulk-actions-for-security-incidents).

### {% data variables.product.pat_v1_caps %}

* If the token **belongs to you**, you can delete it via your personal account settings. See [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#deleting-a-personal-access-token).
{% data reusables.credentials.revoke-via-api %}
* **Organization owners** and **enterprise owners** do not have direct visibility into or control over individual tokens. However, they can:{% ifversion fpt or ghec or ghes > 3.17 %}
   * Revoke them using the REST API, if the actual token value is known. See [AUTOTITLE](/rest/credentials/revoke?apiVersion=2022-11-28#revoke-a-list-of-credentials).{% endif %}
   * Restrict the access of {% data variables.product.pat_generic_plural %} to the organization or enterprise entirely. See [AUTOTITLE](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization) and [AUTOTITLE](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise).
* **Organization owners and enterprise owners** on {% data variables.product.prodname_ghe_cloud %} with SSO enforced can revoke the SSO authorization for a specific {% data variables.product.pat_v1 %}. See [Revoking SSO authorization](#revoking-sso-authorization) for details.
* **Revoked automatically** if pushed to a public repository or gist, or if unused for one year. See [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/token-expiration-and-revocation).

### {% data variables.product.pat_v2_caps %}

* If the token **belongs to you**, you can delete it via your personal account settings. See [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#deleting-a-personal-access-token).
{% data reusables.credentials.revoke-via-api %}
* **Organization owners**: Can view and revoke individual tokens. Note, however, that when an organization owner revokes a {% data variables.product.pat_v2 %}, any SSH keys created by the token will continue to work and the token will still be able to read public resources within the organization. The revocation changes the resource owner from the organization to the user, and the user can reassign it back. See [AUTOTITLE](/organizations/managing-programmatic-access-to-your-organization/reviewing-and-revoking-personal-access-tokens-in-your-organization).
* **Organization owners** and **enterprise owners** can:{% ifversion fpt or ghec or ghes > 3.17 %}
   * Revoke the token using the REST API. See [AUTOTITLE](/rest/credentials/revoke?apiVersion=2022-11-28#revoke-a-list-of-credentials).{% endif %}
   * Restrict the access of {% data variables.product.pat_generic_plural %} to the organization or enterprise entirely. See [AUTOTITLE](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization) and [AUTOTITLE](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise).
* **Revoked automatically** if pushed to a public repository or gist, or if unused for one year. See [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/token-expiration-and-revocation).

### {% data variables.product.prodname_oauth_app %} access tokens

* **Users** can revoke their authorization to an {% data variables.product.prodname_oauth_app %} in their personal account settings, which will revoke any tokens associated with the app. See [AUTOTITLE](/apps/oauth-apps/using-oauth-apps/reviewing-your-authorized-oauth-apps).
{% data reusables.credentials.revoke-via-api %}
* **Organization owners** can deny a previously approved {% data variables.product.prodname_oauth_app %}'s access to the organization. See [AUTOTITLE](/enterprise-cloud@latest/organizations/managing-oauth-access-to-your-organizations-data/denying-access-to-a-previously-approved-oauth-app-for-your-organization).
* On {% data variables.product.prodname_ghe_cloud %}, enterprise and organization owners cannot directly revoke SSO authorization for individual {% data variables.product.prodname_oauth_app %} tokens. SSO credential authorization does not apply to {% data variables.product.prodname_ghe_server %}.
* **Revoked automatically** if pushed to a public repository or gist, or if unused for one year. See [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/token-expiration-and-revocation).

### {% data variables.product.prodname_github_app %} user access tokens

* **Users** can revoke their authorization to an {% data variables.product.prodname_github_app %} in their personal account settings. Note that this revokes authorization for **all** organizations, not just a specific one. See [AUTOTITLE](/apps/using-github-apps/reviewing-and-revoking-authorization-of-github-apps).
{% data reusables.credentials.revoke-via-api %}
* **Organization owners** can't revoke user authorizations directly, but can suspend or uninstall the app to prevent access to organization resources. See [AUTOTITLE](/apps/using-github-apps/reviewing-and-modifying-installed-github-apps).
* On {% data variables.product.prodname_ghe_cloud %}, enterprise and organization owners cannot directly revoke SSO authorization for individual {% data variables.product.prodname_github_app %} user access tokens. SSO credential authorization does not apply to {% data variables.product.prodname_ghe_server %}.
* **Automatically expires** after 8 hours by default. See [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/token-expiration-and-revocation#user-token-expired-due-to-github-app-configuration).

### {% data variables.product.prodname_github_app %} refresh tokens

* **Users** can revoke the {% data variables.product.prodname_github_app %} authorization, which also invalidates associated refresh tokens. See [AUTOTITLE](/apps/using-github-apps/reviewing-and-revoking-authorization-of-github-apps).
{% data reusables.credentials.revoke-via-api %}
* **Automatically expires** after 6 months.

### {% data variables.product.prodname_github_app %} installation access tokens

* **App owners** can revoke via `DELETE /installation/token`. See [AUTOTITLE](/rest/apps/installations?apiVersion=2022-11-28#revoke-an-installation-access-token).
* **Organization owners and enterprise owners**: Can uninstall the app from the organization, which deactivates all associated installation tokens. See [AUTOTITLE](/apps/using-github-apps/reviewing-and-modifying-installed-github-apps).
* **Automatically expires** after 1 hour.

### User SSH keys

* **Users** can delete the credential via **Settings > SSH and GPG keys**. See [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/reviewing-your-ssh-keys).
* **Organization owners and enterprise owners** on {% data variables.product.prodname_ghe_cloud %} with SSO enforced can revoke the SSO authorization for a specific SSH key. Once revoked, the same key cannot be re-authorized—the user must create a new SSH key. See [Revoking SSO authorization](#revoking-sso-authorization) for details.
* **Automatically deleted** if unused for one year. See [AUTOTITLE](/enterprise-cloud@latest/authentication/troubleshooting-ssh/deleted-or-missing-ssh-keys).

For more information on SSH keys, see [AUTOTITLE](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).

### Deploy keys

* **Repository admins** can delete keys via **Repository settings > Security > Deploy keys**. Also available via the Deploy keys REST API. See [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/reviewing-your-deploy-keys).{% ifversion fpt or ghec or ghes > 3.15 %}
* **Organization owners** can disable deploy keys entirely across the organization, which disables all existing deploy keys. See [AUTOTITLE](/organizations/managing-organization-settings/restricting-deploy-keys-in-your-organization).{% endif %}
* **Enterprise owners** can enforce a policy to disable deploy keys across all repositories. See [AUTOTITLE](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise).

For more information on deploy keys, see [AUTOTITLE](/authentication/connecting-to-github-with-ssh/managing-deploy-keys).

### `GITHUB_TOKEN` ({% data variables.product.prodname_actions %})

* **Automatically expires**: The `GITHUB_TOKEN` is created at the start of each workflow job and expires when the job completes. There is no manual revocation mechanism. During an incident, you can disable {% data variables.product.prodname_actions %} on the repository to prevent new tokens from being issued.

For more information on `GITHUB_TOKEN`, see [AUTOTITLE](/actions/concepts/security/github_token).

## SSO authorization

On {% data variables.product.prodname_ghe_cloud %}, when single sign-on (SSO) is required at the enterprise level, enforced at the organization level, or enabled for an organization and a member has linked an identity, certain credential types must be authorized for an organization before they can access organization resources. The following table indicates which credential types can be authorized for an organization. SSO credential authorization does not apply to {% data variables.product.prodname_ghe_server %}.

| Token type | Supports SSO authorization | Admins can revoke SSO authorization |
|-----------------|---------------------------|-------------------------------------|
| {% data variables.product.pat_v1_caps %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| {% data variables.product.pat_v2_caps %} | {% octicon "check" aria-label="Yes" %} | {% octicon "x" aria-label="No" %} |
| {% data variables.product.prodname_oauth_app %} access token | {% octicon "check" aria-label="Yes" %}[^1] | {% octicon "x" aria-label="No" %} |
| {% data variables.product.prodname_github_app %} user access token | {% octicon "check" aria-label="Yes" %}[^1] | {% octicon "x" aria-label="No" %} |
| {% data variables.product.prodname_github_app %} installation access token | {% octicon "x" aria-label="No" %} (not required) | Not applicable |
| {% data variables.product.prodname_github_app %} refresh token | {% octicon "x" aria-label="No" %} | Not applicable |
| User SSH key | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| Deploy key | {% octicon "x" aria-label="No" %} (repository-scoped) | Not applicable |
| `GITHUB_TOKEN` ({% data variables.product.prodname_actions %}) | {% octicon "x" aria-label="No" %} (repository-scoped) | Not applicable |

[^1]: On {% data variables.product.prodname_ghe_cloud %}, SSO authorization is granted automatically when the user authorizes the app during an active SAML or OIDC session. These authorizations are not visible to users or admins in the {% data variables.product.github %} UI, and are not returned by the [AUTOTITLE](/rest/orgs/orgs#list-saml-sso-authorizations-for-an-organization) REST API endpoint.

On {% data variables.product.prodname_ghe_cloud %}, for information on how to authorize a credential for SSO, see [AUTOTITLE](/enterprise-cloud@latest/authentication/authenticating-with-single-sign-on/authorizing-a-personal-access-token-for-use-with-single-sign-on), [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token), and [AUTOTITLE](/enterprise-cloud@latest/authentication/authenticating-with-single-sign-on/authorizing-an-ssh-key-for-use-with-single-sign-on).

### Revoking SSO authorization

On {% data variables.product.prodname_ghe_cloud %} with SSO enforced, when a credential supports SSO authorization, there are two independent containment options:

* **Delete or revoke the credential itself**: Permanently removes all access associated with the credential. See the individual credential type sections above for who can perform this action.
* **Revoke the credential's SSO authorization**: Blocks the credential from accessing a specific organization's resources without deleting it. Once revoked, the user cannot re-authorize the same credential; they must create a new one.

On {% data variables.product.prodname_ghe_cloud %}, enterprise administrators and organization owners can revoke SSO authorization for the credential types marked in the table above:

* **Organization owners** can manage SSO authorizations for organizations with organization-level SSO via the {% data variables.product.github %} UI. See [AUTOTITLE](/enterprise-cloud@latest/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization).
* **Enterprise owners** can manage SSO authorizations for enterprises with enterprise-level SSO (including {% data variables.product.prodname_emus %}) via the {% data variables.product.github %} UI. See [AUTOTITLE](/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise#viewing-and-revoking-authorized-credentials).

On {% data variables.product.prodname_ghe_cloud %}, you can also manage SSO authorizations via the REST API.

On {% data variables.product.prodname_ghe_cloud %}, during a security incident, enterprise owners can revoke SSO authorizations in bulk. See [Bulk actions for security incidents](#bulk-actions-for-security-incidents).

## Bulk actions for security incidents

During a major security incident, there are some enterprise-level bulk actions that enterprise owners on {% data variables.product.prodname_ghe_cloud %} can take to respond quickly. These actions affect user SSH keys, {% data variables.product.prodname_oauth_app %} user access tokens, {% data variables.product.prodname_github_app %} user access tokens, {% data variables.product.pat_v1_plural %}, and {% data variables.product.pat_v2_plural %}. They do **not** affect {% data variables.product.prodname_github_app %} installation access tokens, deploy keys, or `GITHUB_TOKEN`.

> [!WARNING] These are high-impact actions that should be reserved for major security incidents. They are likely to break automations, and it could take months of work to restore your original state.

* **Lock down SSO**: Temporarily block SSO for all users except enterprise owners, preventing access to SSO-protected resources. Available for {% data variables.product.prodname_emus %} or enterprises that use SSO. See [AUTOTITLE](/enterprise-cloud@latest/admin/managing-iam/respond-to-incidents/lock-down-sso).
* **Revoke all SSO authorizations**: Remove SSO authorizations for user credentials across all organizations in the enterprise. Credentials are not deleted, but lose access to SSO-protected organization resources. Once revoked, credentials cannot be re-authorized—users must create new credentials. Available for {% data variables.product.prodname_emus %} or enterprises that use SSO. See [AUTOTITLE](/enterprise-cloud@latest/admin/managing-iam/respond-to-incidents/revoke-authorizations-or-tokens).
* **Delete all user tokens and keys**: Delete user credentials entirely, removing all access. Available for {% data variables.product.prodname_emus %} **only**. See [AUTOTITLE](/enterprise-cloud@latest/admin/managing-iam/respond-to-incidents/revoke-authorizations-or-tokens).

> [!NOTE]
> For enterprises with personal accounts (non-EMU) that use SSO, the "delete all tokens and keys" option is **not available**. The "revoke SSO authorizations" action blocks access to SSO-protected organization resources, but does not block credentials from accessing enterprise-level endpoints or resources in organizations that do not enforce SSO. For enterprises without SSO, neither bulk action is available.
