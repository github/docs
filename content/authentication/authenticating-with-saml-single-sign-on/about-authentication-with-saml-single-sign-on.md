---
title: About authentication with SAML single sign-on
intro: 'You can access {% ifversion ghec %}an organization that uses SAML single sign-on (SSO){% endif %} by authenticating through an identity provider (IdP).'
redirect_from:
  - /articles/about-authentication-with-saml-single-sign-on
  - /github/authenticating-to-github/about-authentication-with-saml-single-sign-on
  - /github/authenticating-to-github/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - SSO
shortTitle: SAML single sign-on
---
## About authentication with SAML SSO

{% ifversion ghec %}

{% data reusables.saml.dotcom-saml-explanation %} Organization owners can invite your personal account on {% data variables.product.prodname_dotcom %} to join their organization that uses SAML SSO, which allows you to contribute to the organization and retain your existing identity and contributions on {% data variables.product.prodname_dotcom %}.

If you're a member of an {% data variables.enterprise.prodname_emu_enterprise %}, you will instead use a new account that is provisioned for you and controlled by your enterprise. {% data reusables.enterprise-accounts.emu-more-info-account %}

When you attempt to access most resources within an organization that uses SAML SSO, {% data variables.product.prodname_dotcom %} will redirect you to the organization's SAML IdP to authenticate. After you successfully authenticate with your account on the IdP, the IdP redirects you back to {% data variables.product.prodname_dotcom %}, where you can access the organization's resources.

{% data reusables.saml.resources-without-sso %}

{% data reusables.saml.outside-collaborators-exemption %}

If you have recently authenticated with your organization's SAML IdP in your browser, you are automatically authorized when you access a {% data variables.product.prodname_dotcom %} organization that uses SAML SSO. If you haven't recently authenticated with your organization's SAML IdP in your browser, you must authenticate at the SAML IdP before you can access the organization.

{% data reusables.saml.you-must-periodically-authenticate %}

## Linked SAML identities

When you authenticate with your IdP account and return to {% data variables.product.prodname_dotcom %}, {% data variables.product.prodname_dotcom %} will record a link in the organization or enterprise between your {% data variables.product.prodname_dotcom %} personal account and the SAML identity you signed into.  This linked identity is used to validate your membership in that organization, and depending on your organization or enterprise setup, is also used to determine which organizations and teams you're a member of as well. Each {% data variables.product.prodname_dotcom %} account can be linked to exactly one SAML identity per organization. Likewise, each SAML identity can be linked to exactly one {% data variables.product.prodname_dotcom %} account in an organization.

If you sign in with a SAML identity that is already linked to another {% data variables.product.prodname_dotcom %} account, you will receive an error message indicating that you cannot sign in with that SAML identity. This situation can occur if you are attempting to use a new {% data variables.product.prodname_dotcom %} account to work inside of your organization. If you didn't intend to use that SAML identity with that {% data variables.product.prodname_dotcom %} account, then you'll need to sign out of that SAML identity and then repeat the SAML login. If you do want to use that SAML identity with your {% data variables.product.prodname_dotcom %} account, you'll need to ask your admin to unlink your SAML identity from your old account, so that you can link it to your new account.  Depending on the setup of your organization or enterprise, your admin may also need to reassign your identity within your SAML provider.  For more information, see "[AUTOTITLE](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)."

If the SAML identity you sign in with does not match the SAML identity that is currently linked to your {% data variables.product.prodname_dotcom %} account, you'll receive a warning that you are about to relink your account. Because your SAML identity is used to govern access and team membership, continuing with the new SAML identity can cause you to lose access to teams and organizations inside of {% data variables.product.prodname_dotcom %}. Only continue if you know that you're supposed to use that new SAML identity for authentication in the future.

## Authorizing {% data variables.product.pat_generic %}s and SSH keys with SAML SSO

To use the API or Git on the command line to access protected content in an organization that uses SAML SSO, you will need to use an authorized {% data variables.product.pat_generic %} over HTTPS or an authorized SSH key.

If you don't have a {% data variables.product.pat_generic %} or an SSH key, you can create a {% data variables.product.pat_generic %} for the command line or generate a new SSH key. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)" or "[AUTOTITLE](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)."

To use a new or existing {% data variables.product.pat_generic %} or SSH key with an organization that uses or enforces SAML SSO, you will need to authorize the token or authorize the SSH key for use with a SAML SSO organization. For more information, see "[AUTOTITLE](/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)" or "[AUTOTITLE](/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)."

## About {% data variables.product.prodname_oauth_apps %}, {% data variables.product.prodname_github_apps %}, and SAML SSO

You must have an active SAML session each time you authorize an {% data variables.product.prodname_oauth_app %} or {% data variables.product.prodname_github_app %} to access an organization that uses or enforces SAML SSO. You can create an active SAML session by navigating to `https://github.com/orgs/ORGANIZATION-NAME/sso` in your browser.

After an enterprise or organization owner enables or enforces SAML SSO for an organization, and after you authenticate via SAML for the first time, you must reauthorize any {% data variables.product.prodname_oauth_apps %} or {% data variables.product.prodname_github_apps %} that you previously authorized to access the organization.

To see the {% data variables.product.prodname_oauth_apps %} you've authorized, visit your [{% data variables.product.prodname_oauth_apps %} page](https://github.com/settings/applications). To see the {% data variables.product.prodname_github_apps %} you've authorized, visit your [{% data variables.product.prodname_github_apps %} page](https://github.com/settings/apps/authorizations).

For more information, see "[AUTOTITLE](/apps/using-github-apps/saml-and-github-apps)."

{% endif %}

## Further reading

{% ifversion ghec %}- "[AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)"{% endif %}
