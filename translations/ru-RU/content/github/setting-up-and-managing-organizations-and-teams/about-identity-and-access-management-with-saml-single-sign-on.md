---
title: About identity and access management with SAML single sign-on
intro: 'If you centrally manage your users'' identities and applications with an identity provider (IdP), you can configure Security Assertion Markup Language (SAML) single sign-on (SSO) to protect your organization''s resources on {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/about-identity-and-access-management-with-saml-single-sign-on
versions:
  free-pro-team: '*'
---

### About SAML SSO

{% data reusables.saml.dotcom-saml-explanation %}

After you configure SAML SSO, members of your {% data variables.product.prodname_dotcom %} organization will continue to log into their user accounts on {% data variables.product.prodname_dotcom %}. When a member accesses resources within your organization that uses SAML SSO, {% data variables.product.prodname_dotcom %} redirects the member to your IdP to authenticate. After successful authentication, your IdP redirects the member back to {% data variables.product.prodname_dotcom %}, where the member can access your organization's resources.

Enterprise owners can also enforce SAML SSO for all organizations in an enterprise account. For more information, see "[Enforcing security settings in your enterprise account](/github/setting-up-and-managing-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account#enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account)."

{% data reusables.saml.outside-collaborators-exemption %}

Before enabling SAML SSO for your organization, you'll need to connect your IdP to your organization. For more information, see "[Connecting your identity provider to your organization](/github/setting-up-and-managing-organizations-and-teams/connecting-your-identity-provider-to-your-organization)."

For an organization, SAML SSO can be disabled, enabled but not enforced, or enabled and enforced. After you enable SAML SSO for your organization and your organization's members successfully authenticate with your IdP, you can enforce the SAML SSO configuration. For more information about enforcing SAML SSO for your {% data variables.product.prodname_dotcom %} organization, see "[Enforcing SAML single sign-on for your organization](/articles/enforcing-saml-single-sign-on-for-your-organization)."

Members must periodically authenticate with your IdP to authenticate and gain access to your organization's resources. The duration of this login period is specified by your IdP and is generally 24 hours. This periodic login requirement limits the length of access and requires users to re-identify themselves to continue.

To access the organization's protected resources using the API and Git on the command line, members must authorize and authenticate with a personal access token or SSH key. For more information, see "[Authorizing a personal access token for use with SAML single sign-on](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)" and "[Authorizing an SSH key for use with SAML single sign-on](/github/authenticating-to-github/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)."

The first time a member uses SAML SSO to access your organization, {% data variables.product.prodname_dotcom %} automatically creates a record that links your organization, the member's {% data variables.product.prodname_dotcom %} account, and the member's account on your IdP. You can view and revoke the linked SAML identity, active sessions, and authorized credentials for members of your organization or enterprise account. For more information, see "[Viewing and managing a member's SAML access to your organization](/github/setting-up-and-managing-organizations-and-teams/viewing-and-managing-a-members-saml-access-to-your-organization)" and "[Viewing and managing a user's SAML access to your enterprise account](/github/setting-up-and-managing-your-enterprise-account/viewing-and-managing-a-users-saml-access-to-your-enterprise-account)."

If members are signed in with a SAML SSO session when they create a new repository, the default visibility of that repository is private. Otherwise, the default visibility is public. For more information on repository visibility, see "[About repository visibility](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)."

Organization members must also have an active SAML session to authorize an {% data variables.product.prodname_oauth_app %}. You can opt out of this requirement by contacting {% data variables.contact.contact_support %}. {% data variables.product.product_name %} does not recommend opting out of this requirement, which will expose your organization to a higher risk of account takeovers and potential data loss.

### Supported SAML services

{% data reusables.saml.saml-supported-idps %}

Some IdPs support provisioning access to a  {% data variables.product.prodname_dotcom %} organization via SCIM. For more information, see "[About SCIM](/github/setting-up-and-managing-organizations-and-teams/about-scim)."

### Adding members to an organization using SAML SSO

After you enable SAML SSO, there are multiple ways you can add new members to your organization. Organization owners can invite new members manually on {% data variables.product.product_name %} or using the API. For more information, see "[Inviting users to join your organization](/articles/inviting-users-to-join-your-organization)" and "[Members](/v3/orgs/members/#add-or-update-organization-membership)."

{% data reusables.organizations.team-synchronization %}

To provision new users without an invitation from an organization owner, you can use the URL `https://github.com/orgs/ORGANIZATION/sso/sign_up`, replacing _ORGANIZATION_ with the name of your organization. For example, you can configure your IdP so that anyone with access to the IdP can click a link on the IdP's dashboard to join your {% data variables.product.prodname_dotcom %} organization.

If your IdP supports SCIM, {% data variables.product.prodname_dotcom %} can automatically invite members to join your organization when you grant access on your IdP. If you remove a member's access to your {% data variables.product.prodname_dotcom %} organization on your SAML IdP, the member will be automatically removed from the {% data variables.product.prodname_dotcom %} organization. For more information, see "[About SCIM](/github/setting-up-and-managing-organizations-and-teams/about-scim)."

{% data reusables.saml.saml-single-logout-not-supported %}

### Дополнительная литература

- "[About two-factor authentication and SAML single sign-on ](/articles/about-two-factor-authentication-and-saml-single-sign-on)"
- "[About authentication with SAML single sign-on](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)"
