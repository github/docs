---
title: OAuth-App-Zugriffsbeschränkungen für Deine Organisation deaktivieren
intro: 'Organization owners can disable restrictions on the {% data variables.product.prodname_oauth_apps %} that have access to the organization''s resources.'
redirect_from:
  - /articles/disabling-third-party-application-restrictions-for-your-organization/
  - /articles/disabling-oauth-app-access-restrictions-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/disabling-oauth-app-access-restrictions-for-your-organization
versions:
  fpt: '*'
topics:
  - Organizations
  - Teams
shortTitle: Disable OAuth App
---

{% danger %}

**Warnung:** Wenn Du {% data variables.product.prodname_oauth_app %}-Zugriffsbeschränkungen für Deine Organisation deaktivierst, autorisieren automatisch alle Mitglieder der Organisation den {% data variables.product.prodname_oauth_app %}-Zugriff auf die privaten Ressourcen der Organisation, wenn sie die Nutzung einer Anwendung in den Einstellungen ihrer persönlichen Konten genehmigen.

{% enddanger %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.oauth_app_access %}
5. Klicke auf **Remove restrictions** (Einschränkungen entfernen). ![Schaltfläche „Remove restrictions“ (Beschränkungen entfernen)](/assets/images/help/settings/settings-third-party-remove-restrictions.png)
6. Wenn Du die Informationen zum Deaktivieren der Beschränkungen von Drittanbieter-Anwendungen gelesen hast, klicke auf **Yes, remove application restrictions** (Ja, Anwendungsbeschränkungen entfernen). ![Remove confirmation button](/assets/images/help/settings/settings-third-party-confirm-disable.png)
