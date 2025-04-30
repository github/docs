___TEST___
=Skip to main content
"Github.com/tr4200812"
>:Authentication/Authenticate with SAML/SAML single sign-on
About authentication with SAML single sign-on
You can access an organization that uses SAML single sign-on (SSO) by authenticating through an identity provider (IdP).

###In this article
About authentication with SAML SSO
Linked SAML identities
Authorizing personal access tokens and SSH keys with SAML SSO
About OAuth apps, GitHub Apps, and SAML SSO
Further reading
About authentication with SAML SSO
SAML single sign-on (SSO) gives organization owners and enterprise owners a way to control and secure access to organization resources like repositories, issues, and pull requests. Organization owners can invite your personal account on GitHub to join their organization that uses SAML SSO, which allows you to contribute to the organization and retain your existing identity and contributions on GitHub.

###If you're a member of an enterprise with managed users, you will instead use a new account that is provisioned for you and controlled by your enterprise. For more information, see Types of GitHub accounts.

When you attempt to access most resources within an organization that uses SAML SSO, GitHub will redirect you to the organization's SAML IdP to authenticate. After you successfully authenticate with your account on the IdP, the IdP redirects you back to GitHub, where you can access the organization's resources.

IdP authentication is not required for accessing public repositories in certain ways:

Viewing the repository's overview page and file contents on GitHub
Forking the repository
Performing read operations via Git, such as cloning the repository
Authentication is required for other access to public repositories, such as viewing issues, pull requests, projects, and releases.

'Note'check#

SAML authentication is not required for outside collaborators. For more information about outside collaborators, see Roles in an organization.

If you have recently authenticated with your organization's SAML IdP in your browser, you are automatically authorized when you access a GitHub organization that uses SAML SSO. If you haven't recently authenticated with your organization's SAML IdP in your browser, you must authenticate at the SAML IdP before you can access the organization.

You must periodically authenticate with your SAML IdP to authenticate and gain access to the organization's resources on GitHub. The duration of this login period is specified by your IdP and is generally 24 hours. This periodic login requirement limits the length of access and requires you to re-identify yourself to continue. You can view and manage your active SAML sessions in your security settings. For more information, see Viewing and managing your active SAML sessions.

Linked SAML identities
When you authenticate with your IdP account and return to GitHub, GitHub will record a link in the organization or enterprise between your GitHub personal account and the SAML identity you signed into. This linked identity is used to validate your membership in that organization, and depending on your organization or enterprise setup, is also used to determine which organizations and teams you're a member of as well. Each GitHub account can be linked to exactly one SAML identity per organization. Likewise, each SAML identity can be linked to exactly one GitHub account in an organization.

If you sign in with a SAML identity that is already linked to another GitHub account, you will receive an error message indicating that you cannot sign in with that SAML identity. This situation can occur if you are attempting to use a new GitHub account to work inside of your organization. If you didn't intend to use that SAML identity with that GitHub account, then you'll need to sign out of that SAML identity and then repeat the SAML login. If you do want to use that SAML identity with your GitHub account, you'll need to ask your admin to unlink your SAML identity from your old account, so that you can link it to your new account. Depending on the setup of your organization or enterprise, your admin may also need to reassign your identity within your SAML provider. For more information, see Viewing and managing a member's SAML access to your organization.

If the SAML identity you sign in with does not match the SAML identity that is currently linked to your GitHub account, you'll receive a warning that you are about to relink your account. Because your SAML identity is used to govern access and team membership, continuing with the new SAML identity can cause you to lose access to teams and organizations inside of GitHub. Only continue if you know that you're supposed to use that new SAML identity for authentication in the future.

Authorizing personal access tokens and SSH keys with SAML SSO
To use the API or Git on the command line to access protected content in an organization that uses SAML SSO, you will need to use an authorized personal access token over HTTPS or an authorized SSH key.

If you don't have a personal access token or an SSH key, you can create a personal access token for the command line or generate a new SSH key. For more information, see Managing your personal access tokens or Generating a new SSH key and adding it to the ssh-agent.

To use a new or existing personal access token or SSH key with an organization that uses or enforces SAML SSO, you will need to authorize the token or authorize the SSH key for use with a SAML SSO organization. For more information, see Authorizing a personal access token for use with SAML single sign-on or Authorizing an SSH key for use with SAML single sign-on.

About OAuth apps, GitHub Apps, and SAML SSO
You must have an active SAML session each time you authorize an OAuth app or GitHub App to access an organization that uses or enforces SAML SSO. You can create an active SAML session by navigating to https://github.com/orgs/ORGANIZATION-NAME/sso in your browser.

After an enterprise or organization owner enables or enforces SAML SSO for an organization, and after you authenticate via SAML for the first time, you must reauthorize any OAuth apps or GitHub Apps that you previously authorized to access the organization.

To see the OAuth apps you've authorized, visit your OAuth apps page. To see the GitHub Apps you've authorized, visit your GitHub Apps page.

For more information, see SAML and GitHub Apps.

Further reading
About identity and access management with SAML single sign-on
Help and support
Did you find what you needed?

Privacy policy
Help us make these docs great!
All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.

Learn how to contribute

Still need help?
Ask the GitHub community
Contact support
Legal
© 2025 GitHub, Inc.
Terms
Privacy
Status
Pricing
Expert services
Blog
About authentication with SAML single sign-on - GitHub Enterprise Cloud Docs


---
title: About identity and access management with SAML single sign-on
intro: 'If you centrally manage your users'' identities and applications with an identity provider (IdP), you can configure Security Assertion Markup Language (SAML) single sign-on (SSO) to protect your organization''s resources on {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /articles/about-identity-and-access-management-with-saml-single-sign-on
  - /github/setting-up-and-managing-organizations-and-teams/about-identity-and-access-management-with-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: IAM with SAML SSO
---

{% data reusables.saml.ghec-only %}

## About SAML SSO

{% data reusables.saml.dotcom-saml-explanation %}

{% data reusables.saml.saml-accounts %}

{% data reusables.saml.resources-without-sso %}

{% data reusables.saml.outside-collaborators-exemption %}

Organization owners can enforce SAML SSO for an individual organization, or enterprise owners can enforce SAML SSO for all organizations in an enterprise account. For more information, see [AUTOTITLE](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#considerations-for-enabling-saml-for-an-enterprise-or-organization) and [AUTOTITLE](/enterprise-cloud@latest/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise).

Before enabling SAML SSO for your organization, you'll need to connect your IdP to your organization. For more information, see [AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/connecting-your-identity-provider-to-your-organization).

For an organization, SAML SSO can be disabled, enabled but not enforced, or enabled and enforced. After you enable SAML SSO for your organization and your organization's members successfully authenticate with your IdP, you can enforce the SAML SSO configuration. For more information about enforcing SAML SSO for your {% data variables.product.prodname_dotcom %} organization, see [AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization).

Members must periodically authenticate with your IdP to authenticate and gain access to your organization's resources. The duration of this login period is specified by your IdP and is generally 24 hours. This periodic login requirement limits the length of access and requires users to re-identify themselves to continue.

To access the organization's protected resources using the API and Git on the command line, members must authorize and authenticate with a {% data variables.product.pat_generic %} or SSH key. For more information, see [AUTOTITLE](/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on) and [AUTOTITLE](/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on).

The first time a member uses SAML SSO to access your organization, {% data variables.product.prodname_dotcom %} automatically creates a record that links your organization, the member's account on {% data variables.product.prodname_dotcom %}, and the member's account on your IdP. You can view and revoke the linked SAML identity, active sessions, and authorized credentials for members of your organization or enterprise account. For more information, see [AUTOTITLE](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization) and [AUTOTITLE](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise).

If members are signed in with a SAML SSO session when they create a new repository, the default visibility of that repository is private. Otherwise, the default visibility is public. For more information on repository visibility, see [AUTOTITLE](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility).

Organization members must also have an active SAML session to authorize an {% data variables.product.prodname_oauth_app %}. You can opt out of this requirement by contacting {% data variables.contact.contact_support %}. {% data variables.product.company_short %} does not recommend opting out of this requirement, which will expose your organization to a higher risk of account takeovers and potential data loss.

{% data reusables.saml.saml-single-logout-not-supported %}

## Supported SAML services

{% data reusables.saml.saml-supported-idps %}

Some IdPs support provisioning access to a {% data variables.product.prodname_dotcom %} organization via SCIM. For more information, see [AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations).

{% data reusables.scim.enterprise-account-scim %}

## Adding members to an organization using SAML SSO

After you enable SAML SSO, there are multiple ways you can add new members to your organization. Organization owners can invite new members manually on {% data variables.product.github %} or using the API. For more information, see [AUTOTITLE](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization) and [AUTOTITLE](/rest/orgs#add-or-update-organization-membership).

To provision new users without an invitation from an organization owner, you can use the URL `https://github.com/orgs/ORGANIZATION/sso/sign_up`, replacing ORGANIZATION with the name of your organization. For example, you can configure your IdP so that anyone with access to the IdP can click a link on the IdP's dashboard to join your {% data variables.product.prodname_dotcom %} organization.

> [!NOTE]
> Provisioning new users via `https://github.com/orgs/ORGANIZATION/sso/sign_up` is only supported when SAML SSO is configured at the organization level, not when SAML SSO is configured at the enterprise account level. For more information about SAML SSO for enterprise accounts, see [AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam).

If your IdP supports SCIM, {% data variables.product.prodname_dotcom %} can automatically invite members to join your organization when you grant access on your IdP. If you remove a member's access to your {% data variables.product.prodname_dotcom %} organization on your SAML IdP, the member will be automatically removed from the {% data variables.product.prodname_dotcom %} organization. For more information, see [AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations).

{% data reusables.organizations.team-synchronization %}

If an organization exceeds 100,000 members, some UI experiences and API functionality may be degraded.

## Further reading

* [AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference)
* [AUTOTITLE](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/about-two-factor-authentication-and-saml-single-sign-on)
* [AUTOTITLE](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on)
