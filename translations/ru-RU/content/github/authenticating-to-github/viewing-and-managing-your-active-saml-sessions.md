---
title: Viewing and managing your active SAML sessions
intro: You can view and revoke your active SAML sessions in your security settings.
redirect_from:
  - /articles/viewing-and-managing-your-active-saml-sessions
versions:
  free-pro-team: '*'
---

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
3. Under "Sessions," you can see your active SAML sessions. ![List of active SAML sessions](/assets/images/help/settings/saml-active-sessions.png)
4. To see the session details, click **See more**. ![Button to open SAML session details](/assets/images/help/settings/saml-expand-session-details.png)
5. To revoke a session, click **Revoke SAML**. ![Button to revoke a SAML session](/assets/images/help/settings/saml-revoke-session.png)

  {% note %}

  **Note:** When you revoke a session, you remove your SAML authentication to that organization. To access the organization again, you will need to single sign-on through your identity provider. For more information, see "[About authentication with SAML SSO](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)."

  {% endnote %}

### Дополнительная литература

- "[About authentication with SAML SSO](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)"
