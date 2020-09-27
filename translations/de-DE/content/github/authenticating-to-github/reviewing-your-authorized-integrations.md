---
title: Deine autorisierten Integrationen überprüfen
intro: 'Du kannst Deine autorisierten Integrationen überprüfen, um den Zugriff der einzelnen Integrationen auf Dein Konto und Deine Daten zu prüfen.'
redirect_from:
  - /articles/reviewing-your-authorized-integrations
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Deine autorisierten {{ site.data.variables.product.prodname_oauth_app }}s überprüfen

{{ site.data.reusables.user_settings.access_settings }}
{{ site.data.reusables.user_settings.access_applications }}
{{ site.data.reusables.user_settings.access_authorized_oauth_apps }}
{{ site.data.reusables.user_settings.review-oauth-apps }}

### Deine autorisierten {{ site.data.variables.product.prodname_github_app }}s überprüfen

{{ site.data.reusables.user_settings.access_settings }}
{{ site.data.reusables.user_settings.access_applications }}
3. Klicke auf die Registerkarte **Authorized {{ site.data.variables.product.prodname_github_app }}s** (Autorisiert Apps). ![Registerkarte „Authorized {{ site.data.variables.product.prodname_github_app }}s“ (Autorisierte Apps)](/assets/images/help/settings/settings-authorized-github-apps-tab.png)
3. Überprüfe die {{ site.data.variables.product.prodname_github_app }}s, die Zugriff auf Dein Konto haben. Klicke bei Dir unbekannten oder veralteten Apps auf **Revoke** (Widerrufen). Wenn Du alle {{ site.data.variables.product.prodname_github_app }}s widerrufen möchtest, klicke auf **Revoke all** (Alle widerrufen). ![Liste der autorisierten {{ site.data.variables.product.prodname_github_app }}s](/assets/images/help/settings/revoke-github-app.png)

### Weiterführende Informationen
{% if currentVersion == "free-pro-team@latest" %}
- „[Informationen zu Integrationen](/articles/about-integrations)“{% endif %}
- „[Deine autorisierten Anwendungen (OAuth) überprüfen](/articles/reviewing-your-authorized-applications-oauth)“
