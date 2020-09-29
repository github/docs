---
title: About authentication with SAML single sign-on
intro: 'You can access an organization that uses SAML single sign-on (SSO) by authenticating through an identity provider (IdP). To authenticate with the API or Git on the command line when an organization enforces SAML SSO, you must authorize your personal access token or SSH key.'
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/about-authentication-with-saml-single-sign-on
versions:
  free-pro-team: '*'
---

{% data reusables.saml.dotcom-saml-explanation %} Organization owners can invite your user account on {% data variables.product.prodname_dotcom %} to join their organization that uses SAML SSO, which allows you to contribute to the organization and retain your existing identity and contributions on {% data variables.product.prodname_dotcom %}.

When you access resources within an organization that uses SAML SSO, {% data variables.product.prodname_dotcom %} will redirect you to the organization's SAML IdP to authenticate. After you successfully authenticate with your account on the IdP, the IdP redirects you back to {% data variables.product.prodname_dotcom %}, where you can access the organization's resources.

{% data reusables.saml.outside-collaborators-exemption %}

If you have recently authenticated with your organization's SAML IdP in your browser, you are automatically authorized when you access a {% data variables.product.prodname_dotcom %} organization that uses SAML SSO. If you haven't recently authenticated with your organization's SAML IdP in your browser, you must authenticate at the SAML IdP before you can access the organization.

You must periodically authenticate with your SAML IdP to authenticate and gain access to the organization's resources on {% data variables.product.prodname_dotcom %}. The duration of this login period is specified by your IdP and is generally 24 hours. This periodic login requirement limits the length of access and requires you to re-identify yourself to continue. You can view and manage your active SAML sessions in your security settings. For more information, see "[Viewing and managing your active SAML sessions](/articles/viewing-and-managing-your-active-saml-sessions)."

To use the API or Git on the command line to access protected content in an organization that uses SAML SSO, you will need to use an authorized personal access token over HTTPS or an authorized SSH key. {% data variables.product.prodname_oauth_app %} access tokens are authorized by default.

If you don't have a personal access token or an SSH key, you can create a personal access token for the command line or generate a new SSH key. For more information, see "[Creating a personal access token](/github/authenticating-to-github/creating-a-personal-access-token)" or "[Generating a new SSH key and adding it to the ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)."

To use a new or existing personal access token or SSH key with an organization that enforces SAML SSO, you will need to authorize the token or authorize the SSH key for use with a SAML SSO organization. For more information, see "[Authorizing a personal access token for use with SAML single sign-on](/articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)" or "[Authorizing an SSH key for use with SAML single sign-on](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)."

You must have an active SAML session each time you authorize an {% data variables.product.prodname_oauth_app %}.

### Further reading

- "[About identity and access management with SAML single sign-on](/github/setting-up-and-managing-organizations-and-teams/about-identity-and-access-management-with-saml-single-sign-on)"
