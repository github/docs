---
title: Viewing and managing a member's SAML access to your organization
intro: 'You can view and revoke an organization member''s linked identity, active sessions, and authorized credentials.'
permissions: Organization owners can view and manage a member's SAML access to an organization.
redirect_from:
  - /articles/viewing-and-revoking-organization-members-authorized-access-tokens
  - /github/setting-up-and-managing-organizations-and-teams/viewing-and-revoking-organization-members-authorized-access-tokens
  - /github/setting-up-and-managing-organizations-and-teams/viewing-and-managing-a-members-saml-access-to-your-organization
versions:
  ghec: '*'
shortTitle: Manage SAML access
category:
  - Configure SAML single sign-on
---

## About SAML access to your organization

When you enable SAML single sign-on for your organization, each organization member can link their external identity on your identity provider (IdP) to their existing account on {% data variables.product.github %}. To access your organization's resources on {% data variables.product.github %}, the member must have an active SAML session in their browser. To access your organization's resources using the API or Git, the member must use a {% data variables.product.pat_generic %} or SSH key that the member has authorized for use with your organization.

You can view and revoke each member's linked identity, active sessions, and authorized credentials on the same page.

## Viewing and revoking a linked identity

{% data reusables.saml.about-linked-identities %}

When available, the entry will include SCIM data. For more information, see [AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations).

> [!WARNING]
> For organizations using SCIM:
> * Revoking a linked user identity on {% data variables.product.github %} will also remove the SAML and SCIM metadata. As a result, the identity provider will not be able to synchronize or deprovision the linked user identity.
> * An admin must revoke a linked identity through the identity provider.
> * To revoke a linked identity and link a different account through the identity provider, an admin can remove and re-assign the user to the {% data variables.product.prodname_ghe_cloud %} application. For more information, see your identity provider's documentation.

{% data reusables.identity-and-permissions.revoking-identity-team-sync %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.saml.click-person-revoke-identity %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-sso-identity %}
{% data reusables.saml.revoke-sso-identity %}
{% data reusables.saml.confirm-revoke-identity %}

## Viewing and revoking an active SAML session

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.saml.click-person-revoke-session %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-saml-sessions %}
{% data reusables.saml.revoke-saml-session %}

## Viewing and revoking authorized credentials for a single member

{% data reusables.saml.about-authorized-credentials %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.saml.click-person-revoke-credentials %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-authorized-credentials %}
{% data reusables.saml.revoke-authorized-credentials %}
{% data reusables.saml.confirm-revoke-credentials %}

## Responding to an incident from organization settings

When your organization is affected by a security incident, you can respond by preventing programmatic access to organizations.

Available actions:

* **Revoke SSO authorizations** to remove access to SSO-protected organization resources for user credentials in your organization.
* **Delete keys and tokens** to remove user tokens and SSH keys in your organization, even if they don't have an SSO authorization ({% data variables.product.prodname_emus %} only).

In the "Authentication security" section of your organization settings, you can review counts for user tokens and keys that are authorized for single sign-on (SSO). Then, if needed, you can take action against credentials:

* **For individual members**: Revoke SSO authorizations or delete credentials for a specific user when responding to a targeted incident or performing routine access cleanup.
* **For a specific credential type**: Revoke SSO authorizations or delete credentials of a selected type, such as only {% data variables.product.pat_v1_plural %}, across your entire organization or for a specific individual member.
* **For all members (bulk actions)**: Take bulk action to revoke SSO authorizations or delete credentials across all members and all/a specific supported credential type when responding to a major security incident.
* Use the web UI or the organization REST API for these actions. For more information, see [AUTOTITLE](/rest/orgs/orgs?apiVersion=2026-03-10#revoke-all-credential-authorizations-for-an-organization), [AUTOTITLE](/rest/orgs/orgs?apiVersion=2026-03-10#revoke-a-single-credential-type-for-an-organization), [AUTOTITLE](/rest/orgs/orgs?apiVersion=2026-03-10#revoke-credential-authorizations-for-a-user-in-an-organization), and [AUTOTITLE](/rest/orgs/orgs?apiVersion=2026-03-10#revoke-a-single-credential-type-for-a-user-in-an-organization).
* All de-authorization and revocation actions are captured in the audit log and affected users are notified. For more information, see [AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization).
* For enterprise-wide incident response actions, see [AUTOTITLE](/enterprise-cloud@latest/admin/managing-iam/respond-to-incidents/revoke-authorizations-or-tokens).

{% ifversion single_user_cred_revocation %}

### Taking action against a specific member

You can revoke SSO authorizations or delete credentials for a specific user. This is useful for responding to incidents affecting individual accounts, such as a compromised account or lost hardware, or for routine access cleanup.

#### Revoking authorizations for a specific user

1. Navigate to your organization. 
1. At the top of the page, click  Settings.
1. In the left sidebar, click **Authentication security**.
1. In the "Danger zone" section, click **Revoke for ▼**, then click **A specific user**.
1. Select the user whose authorizations you want to revoke.
1. To confirm, type `USERNAME credentials` (replacing `USERNAME` with the user's username).
1. Click **Revoke authorizations**.

#### Deleting credentials for a specific user

This action is available for {% data variables.product.prodname_emus %} only.

1. Navigate to your organization. 
1. At the top of the page, click  Settings.
1. In the left sidebar, click **Authentication security**.
1. In the "Danger zone" section, click **Delete for ▼**, then click **A specific user**.
1. Select the user whose credentials you want to delete.
1. To confirm, type `USERNAME credentials` (replacing `USERNAME` with the user's username).
1. Click **Delete keys and tokens**.

### Taking action against a specific credential type

You can revoke SSO authorizations or delete credentials of a single type across your entire organization, without affecting other credential types. For example, you can revoke SSO authorizations for all {% data variables.product.pat_v1_plural %} while leaving user SSH keys and other credential types untouched.

#### Revoking authorizations for a credential type

1. Navigate to your organization. 
1. At the top of the page, click  Settings.
1. In the left sidebar, click **Authentication security**.
1. In the "Danger zone" section, click **Revoke for ▼**, then click the credential type whose authorizations you want to revoke.
1. Read the warning about the impact of this action.
1. To confirm, type the name of your organization.
1. Click **Revoke authorizations**.

#### Deleting credentials of a specific type

This action is available for {% data variables.product.prodname_emus %} only.

1. Navigate to your organization. 
1. At the top of the page, click  Settings.
1. In the left sidebar, click **Authentication security**.
1. In the "Danger zone" section, click **Delete for ▼**, then click the credential type whose credentials you want to delete.
1. Read the warning about the impact of this action.
1. To confirm, type the name of your organization.
1. Click **Delete keys and tokens**.

You can also combine these actions with a specific user, by selecting a user first and then choosing a credential type, or perform either action for all users and then choosing a credential type.

{% endif %}

## Further reading

* [AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)
* [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise)
