---
title: Informationen zu Zugriffsbeschränkungen für OAuth-Apps
intro: 'Organisationen können wählen, welche {% data variables.product.prodname_oauth_app %}s Zugriff auf ihre Repositorys und andere Ressourcen haben, indem sie {% data variables.product.prodname_oauth_app %}-Zugriffsbeschränkungen aktivieren.'
redirect_from:
  - /articles/about-third-party-application-restrictions/
  - /articles/about-oauth-app-access-restrictions
  - /github/setting-up-and-managing-organizations-and-teams/about-oauth-app-access-restrictions
versions:
  free-pro-team: '*'
topics:
  - Organizations
  - Teams
---

Wenn {% data variables.product.prodname_oauth_app %}-Zugriffseinschränkungen aktiviert sind, können Organisationsmitglieder den {% data variables.product.prodname_oauth_app %}-Zugriff auf Organisationsressourcen nicht autorisieren. Organisationsmitglieder können die Genehmigung des Inhabers für {% data variables.product.prodname_oauth_app %}s beantragen, die sie verwenden möchten, und Organisationsinhaber erhalten eine Benachrichtigung über ausstehende Anfragen.

{% data reusables.organizations.oauth_app_restrictions_default %}

{% tip %}

**Tipp**: Wenn eine Organisation keine {% data variables.product.prodname_oauth_app %}-Zugriffsbeschränkungen eingerichtet hat, kann jede {% data variables.product.prodname_oauth_app %} mit Autorisierung eines Organisationsmitglieds auch auf die privaten Ressourcen der Organisation zugreifen.

{% endtip %}

### {% data variables.product.prodname_oauth_app %}-Zugriffseinschränkungen einrichten

Wenn ein Organisationsinhaber zum ersten Mal {% data variables.product.prodname_oauth_app %}-Zugriffseinschränkungen einrichtet, trifft Folgendes zu:

- **Anwendungen im Besitz der Organisation** erhalten automatisch Zugriff auf die Ressourcen der Organisation.
- **{% data variables.product.prodname_oauth_app %}s** verlieren sofort den Zugriff auf die Ressourcen der Organisation.
- **Vor Februar 2014 erstellte SSH-Schlüssel** verlieren sofort den Zugriff auf die Ressourcen der Organisation (dazu gehören auch Benutzer- und Deployment-Schlüssel).
- **Von {% data variables.product.prodname_oauth_app %}s im oder nach Februar 2014 erstellte SSH-Schlüssel** verlieren sofort den Zugriff auf die Ressourcen der Organisation.
- **Hook-Auslieferungen aus privaten Repositorys der Organisation** werden nicht mehr an nicht genehmigte {% data variables.product.prodname_oauth_app %}s gesendet.
- **API-Zugriff** auf private Ressourcen der Organisation ist für nicht genehmigte {% data variables.product.prodname_oauth_app %}s nicht verfügbar. Darüber hinaus gibt es keine privilegierten Aktionen zum Erstellen, Aktualisieren oder Löschen für öffentliche Ressourcen der Organisation.
- **Von Benutzern erstellte Hooks und vor Mai 2014** erstellte Hooks sind davon nicht betroffen.
- **Private Forks von organisationseigenen Repositorys** unterliegen den Zugriffsbeschränkungen der Organisation.

### SSH-Zugriffsfehler beheben

Wenn ein vor Februar 2014 erstellter SSH-Schlüssel den Zugriff auf eine Organisation mit aktivierten {% data variables.product.prodname_oauth_app %}-Zugriffsbeschränkungen verliert, schlagen nachfolgende SSH-Zugriffsversuche fehl. Benutzern wird eine Fehlermeldung mit einer URL angezeigt, über die sie den Schlüssel genehmigen oder stattdessen einen vertrauenswürdigen Schlüssel hochladen können.

### Webhooks

Wenn einer {% data variables.product.prodname_oauth_app %} Zugriff auf die Organisation gewährt wird, nachdem die Einschränkungen aktiviert wurden, werden alle bereits vorhandenen Webhooks, die von dieser {% data variables.product.prodname_oauth_app %} erstellt wurden, weiter versendet.

Wenn eine Organisation den Zugriff einer zuvor genehmigten {% data variables.product.prodname_oauth_app %} entfernt, werden alle bereits vorhandenen Webhooks, die von dieser Anwendung erstellt wurden, nicht mehr versendet (diese Hooks werden deaktiviert, aber nicht gelöscht).

### Zugriffsbeschränkungen wieder aktivieren

Wenn eine Organisation {% data variables.product.prodname_oauth_app %}-Zugriffseinschränkungen deaktiviert und später wieder aktiviert, erhalten zuvor genehmigte {% data variables.product.prodname_oauth_app %}s automatisch Zugriff auf die Ressourcen der Organisation.

### Weiterführende Informationen

- „[{% data variables.product.prodname_oauth_app %}-Zugriffsbeschränkungen für Deine Organisation aktivieren](/articles/enabling-oauth-app-access-restrictions-for-your-organization)“
- „[{% data variables.product.prodname_oauth_app %}s für Ihre Organisation genehmigen](/articles/approving-oauth-apps-for-your-organization)“
- „[Installierte Integrationen Deiner Organisation überprüfen](/articles/reviewing-your-organization-s-installed-integrations)“
- „[Zugriff einer zuvor genehmigten {% data variables.product.prodname_oauth_app %} für Deine Organisation verweigern](/articles/denying-access-to-a-previously-approved-oauth-app-for-your-organization)“
- „[{% data variables.product.prodname_oauth_app %}-Zugriffsbeschränkungen für Deine Organisation deaktivieren](/articles/disabling-oauth-app-access-restrictions-for-your-organization)“
- „[Von einer Organisation die Genehmigung für {% data variables.product.prodname_oauth_app %}s anfordern](/articles/requesting-organization-approval-for-oauth-apps)“
- „[{% data variables.product.prodname_oauth_app %}s autorisieren](/articles/authorizing-oauth-apps)“
