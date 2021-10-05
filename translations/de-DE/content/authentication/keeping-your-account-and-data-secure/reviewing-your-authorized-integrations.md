---
title: Deine autorisierten Integrationen überprüfen
intro: 'Du kannst Deine autorisierten Integrationen überprüfen, um den Zugriff der einzelnen Integrationen auf Dein Konto und Deine Daten zu prüfen.'
redirect_from:
  - /articles/reviewing-your-authorized-integrations
  - /github/authenticating-to-github/reviewing-your-authorized-integrations
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-authorized-integrations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Identity
  - Access management
shortTitle: Authorized integrations
---

## Reviewing your authorized {% data variables.product.prodname_oauth_apps %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.access_applications %}
{% data reusables.user_settings.access_authorized_oauth_apps %}
{% data reusables.user_settings.review-oauth-apps %}

## Reviewing your authorized {% data variables.product.prodname_github_apps %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.access_applications %}
3. Click the **Authorized {% data variables.product.prodname_github_apps %}** tab. ![Authorized {% data variables.product.prodname_github_apps %} tab](/assets/images/help/settings/settings-authorized-github-apps-tab.png)
3. Review the {% data variables.product.prodname_github_apps %} that have access to your account. Klicke bei Dir unbekannten oder veralteten Apps auf **Revoke** (Widerrufen). To revoke all {% data variables.product.prodname_github_apps %}, click **Revoke all**. ![Liste der autorisierten {% data variables.product.prodname_github_app %}s](/assets/images/help/settings/revoke-github-app.png)

## Weiterführende Informationen
{% ifversion fpt %}
- „[Informationen zu Integrationen](/articles/about-integrations)“{% endif %}
- „[Deine autorisierten Anwendungen (OAuth) überprüfen](/articles/reviewing-your-authorized-applications-oauth)“
