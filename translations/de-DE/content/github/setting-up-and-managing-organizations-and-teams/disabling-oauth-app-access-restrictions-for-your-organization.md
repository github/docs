---
title: OAuth-App-Zugriffsbeschränkungen für Deine Organisation deaktivieren
intro: 'Organisationsinhaber können Beschränkungen für {% data variables.product.prodname_oauth_app %}s aufheben, die Zugriff auf die Ressourcen der Organisation haben.'
redirect_from:
  - /articles/disabling-third-party-application-restrictions-for-your-organization/
  - /articles/disabling-oauth-app-access-restrictions-for-your-organization
versions:
  free-pro-team: '*'
---

{% danger %}

**Warnung:** Wenn Du {% data variables.product.prodname_oauth_app %}-Zugriffsbeschränkungen für Deine Organisation deaktivierst, autorisieren automatisch alle Mitglieder der Organisation den {% data variables.product.prodname_oauth_app %}-Zugriff auf die privaten Ressourcen der Organisation, wenn sie die Nutzung einer Anwendung in den Einstellungen ihrer persönlichen Konten genehmigen.

{% enddanger %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.oauth_app_access %}
5. Klicke auf **Remove restrictions** (Einschränkungen entfernen). ![Schaltfläche „Remove restrictions“ (Beschränkungen entfernen)](/assets/images/help/settings/settings-third-party-remove-restrictions.png)
6. Wenn Du die Informationen zum Deaktivieren der Beschränkungen von Drittanbieter-Anwendungen gelesen hast, klicke auf **Yes, remove application restrictions** (Ja, Anwendungsbeschränkungen entfernen). ![Schaltfläche „Remove confirmation" (Bestätigen der Entfernung)](/assets/images/help/settings/settings-third-party-confirm-disable.png)
