---
title: OAuth-App-Zugriffsbeschränkungen für Deine Organisation aktivieren
intro: 'Organisationsinhaber können {{ site.data.variables.product.prodname_oauth_app }}-Zugriffseinschränkungen aktivieren, um zu verhindern, dass nicht vertrauenswürdige Apps auf die Ressourcen der Organisation zugreifen, und gleichzeitig Organisationsmitgliedern die Nutzung von {{ site.data.variables.product.prodname_oauth_app }} für ihre persönlichen Konten zu erlauben.'
redirect_from:
  - /articles/enabling-third-party-application-restrictions-for-your-organization/
  - /articles/enabling-oauth-app-access-restrictions-for-your-organization
versions:
  free-pro-team: '*'
---

{{ site.data.reusables.organizations.oauth_app_restrictions_default }}

{% warning %}

**Warnings**:
- Durch die Aktivierung der {{ site.data.variables.product.prodname_oauth_app }}-Zugriffseinschränkungen wird allen zuvor autorisierten {{ site.data.variables.product.prodname_oauth_app }}s und SSH-Schlüsseln der Zugriff auf die Organisation entzogen. Weitere Informationen findest Du unter „[Informationen zu {{ site.data.variables.product.prodname_oauth_app }}-Zugriffsbeschränkungen](/articles/about-oauth-app-access-restrictions).“
- Wenn Du die {{ site.data.variables.product.prodname_oauth_app }}-Zugriffsbeschränkungen eingerichtet hast, stelle sicher, dass Du alle {{ site.data.variables.product.prodname_oauth_app }}s erneut autorisierst, die regelmäßig Zugriff auf die privaten Daten der Organisation benötigen. Alle Organisationsmitglieder müssen neue SSH-Schlüssel erstellen, und die Organisation muss nach Bedarf neue Deployment-Schlüssel erstellen.
- Wenn {{ site.data.variables.product.prodname_oauth_app }}-Zugriffseinschränkungen aktiviert sind, können Anwendungen mit einem OAuth-Token auf Informationen zu {{ site.data.variables.product.prodname_marketplace }}-Transaktionen zugreifen.

{% endwarning %}

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.oauth_app_access }}
5. Klicke unter „Third-party application access policy“ (Zugriffsrichtlinie für Drittanbieter-Anwendungen) auf **Setup application access restrictions** (Zugriffsbeschränkungen für Anwendungen einrichten). ![Schaltfläche „Set up restrictions" (Einrichten von Beschränkungen)](/assets/images/help/settings/settings-third-party-set-up-restrictions.png)
6. Wenn Du die Informationen zu Drittanbieter-Zugriffsbeschränkungen gelesen hast, klicke auf **Restrict third-party application access** (Zugriff von Drittanbieter-Anwendungen beschränken). ![Schaltfläche „Restriction confirmation" (Beschränkungen bestätigen)](/assets/images/help/settings/settings-third-party-restrict-confirm.png)
