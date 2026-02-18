---
title: Revoking SSO authorizations or deleting credentials in your enterprise
intro: 'Respond to a security incident by taking bulk action on credentials with access to your enterprise.'
permissions: 'Enterprise owners and users with the "Manage enterprise credentials" fine-grained permission'
product: 'Enterprises with managed users, or enterprises that have enabled SAML SSO for the enterprise or its organizations'
versions:
  feature: revoke-enterprise-tokens
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: Revoke authorizations or tokens
---

When your enterprise is affected by a major security incident, you can respond by preventing programmatic access to your enterprise or its organizations.

In the  "Authentication security" section of your enterprise settings, you can review counts for user tokens and keys that are authorized for single sign-on (SSO). Then, if needed, you can use one of the following bulk actions in the "Danger zone":

* **Revoke SSO authorizations** to remove access to SSO-protected organization resources for user credentials in your enterprise.
* **Delete keys and tokens** to remove user tokens and SSH keys in your enterprise, even if they don't have an SSO authorization ({% data variables.product.prodname_emus %} only).

>[!WARNING] These are high-impact actions that should be reserved for major security incidents. They are likely to break automations, and it could take months of work to restore your original state. For alternative options for responding to individual compromised tokens on a smaller scale, see the [Resources for smaller-scale responses](#resources-for-smaller-scale-responses) section.

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

## Taking bulk action (danger zone)

Use the **Danger zone** bulk action buttons to respond to a security incident as needed. The following sections describe each action, which SSO authorizations or credentials are impacted, and related audit log events.

>[!NOTE] If your enterprise does **not** use {% data variables.product.prodname_emus %} and has **not** enabled SAML SSO, neither of these actions is available. As an alternative, if you need users to replace {% data variables.product.pat_generic_plural %} as part of your incident response, you can configure an enterprise policy to expire all {% data variables.product.pat_generic_plural %}. See [AUTOTITLE](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise).

### Revoke SSO authorizations

This action is available for {% data variables.product.prodname_emus %} or enterprises that use SAML SSO.

Revoking authorizations removes SSO authorizations for user tokens and SSH keys across all organizations in your enterprise.

* Credentials that have had SSO authorizations revoked **cannot be re-authorized** for the affected organizations. To restore access, users must create new credentials and authorize them.
* The credentials themselves are not deleted, and their permissions for the user and enterprise scopes, and for non-SSO-protected organizations, **remain active**.
* Credentials that have not been authorized for SSO are **not affected**.

Authorization for **{% data variables.product.pat_v2_plural %}** works differently, so this action has a different effect on this token type. For fine-grained PATs where an organization is the "resource owner," the resource owner is removed, removing access to organization resources. Users can change the resource owner back to the organization account, which may require approval (see [AUTOTITLE](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise#enforcing-an-approval-policy-for-fine-grained-personal-access-tokens)).

### Delete keys and tokens

This action is available for {% data variables.product.prodname_emus %} only.

Deleting keys and tokens removes credentials that have access to your enterprise, regardless of whether they are authorized for SSO. The credentials stop working and are no longer visible in the UI.

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

## Resources for smaller-scale responses

The following articles describe alternative actions for managing incidents that are smaller in scope, where you can identify specific compromised tokens or user accounts.

* [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token)
* [AUTOTITLE](/code-security/tutorials/remediate-leaked-secrets/remediating-a-leaked-secret)
* [AUTOTITLE](/rest/credentials/revoke) in the REST API documentation
