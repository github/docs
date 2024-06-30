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
1. To see the session details, next to the session, click **See more**.
1. To revoke a session, in the session details, click **Revoke SAML**.

  {% note %}

  **Note:** When you revoke a session, you remove your SAML authentication to that organization. To access the organization again, you will need to single sign-on through your identity provider. For more information, see "[AUTOTITLE](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on)."

  {% endnote %}

## Further reading

* "[AUTOTITLE](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on)"
