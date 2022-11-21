---
title: Viewing and managing your active SAML sessions
intro: You can view and revoke your active SAML sessions in your settings.
redirect_from:
  - /articles/viewing-and-managing-your-active-saml-sessions
  - /github/authenticating-to-github/viewing-and-managing-your-active-saml-sessions
  - /github/authenticating-to-github/authenticating-with-saml-single-sign-on/viewing-and-managing-your-active-saml-sessions
versions:
  ghec: '*'
topics:
  - SSO
type: how_to
shortTitle: Active SAML sessions
---

You can view a list of devices that have logged into your account, and revoke any SAML sessions that you don't recognize.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.sessions %}
1. Under "Web sessions," you can see your active SAML sessions.

   ![Screenshot of the list of active SAML sessions](/assets/images/help/settings/saml-active-sessions.png)

1. To see the session details, click **See more**.
   ![Screenshot of the active SAML sessions with the button to open SAML session details emphasized](/assets/images/help/settings/saml-expand-session-details.png)

1. To revoke a session, click **Revoke SAML**.

   ![Screenshot of the Session details page with the button to revoke a SAML session emphasized](/assets/images/help/settings/saml-revoke-session.png)

  {% note %}

  **Note:** When you revoke a session, you remove your SAML authentication to that organization. To access the organization again, you will need to single sign-on through your identity provider. For more information, see "[About authentication with SAML SSO](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)."

  {% endnote %}

## Further reading

- "[About authentication with SAML SSO](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)"
