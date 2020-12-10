---
title: Deine aktiven SAML-Sitzungen anzeigen und verwalten
intro: Du kannst Deine aktiven SAML-Sitzungen in Deinen Sicherheitseinstellungen anzeigen und widerrufen.
redirect_from:
  - /articles/viewing-and-managing-your-active-saml-sessions
versions:
  free-pro-team: '*'
---

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
3. Under "Sessions," you can see your active SAML sessions. ![Liste der aktiven SAML-Sitzungen](/assets/images/help/settings/saml-active-sessions.png)
4. To see the session details, click **See more**. ![Button to open SAML session details](/assets/images/help/settings/saml-expand-session-details.png)
5. To revoke a session, click **Revoke SAML**. ![Schaltfläche zum Widerrufen einer SAML-Sitzung](/assets/images/help/settings/saml-revoke-session.png)

  {% note %}

  **Hinweis:** Beim Widerrufen einer Sitzung entfernst Du Deine SAML-Authentifizierung zu dieser Organisation. Zum erneuten Zugriff auf die Organisation musst Du Dich über Deinen Identitätsanbieter via Single Sign-On anmelden. Weitere Informationen findest Du unter „[Informationen zur Authentifizierung mit SAML SSO](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on).“

  {% endnote %}

### Weiterführende Informationen

- „[Informationen zur Authentifizierung mit SAML SSO](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)“