---
title: Informationen zu Zugriffsbeschränkungen für OAuth-Apps
intro: 'Organizations can choose which {% data variables.product.prodname_oauth_apps %} have access to their repositories and other resources by enabling {% data variables.product.prodname_oauth_app %} access restrictions.'
redirect_from:
  - /articles/about-third-party-application-restrictions/
  - /articles/about-oauth-app-access-restrictions
  - /github/setting-up-and-managing-organizations-and-teams/about-oauth-app-access-restrictions
versions:
  fpt: '*'
topics:
  - Organizations
  - Teams
shortTitle: OAuth App access
---

## Informationen zu Zugriffsbeschränkungen für OAuth-Apps

Wenn {% data variables.product.prodname_oauth_app %}-Zugriffseinschränkungen aktiviert sind, können Organisationsmitglieder den {% data variables.product.prodname_oauth_app %}-Zugriff auf Organisationsressourcen nicht autorisieren. Organization members can request owner approval for {% data variables.product.prodname_oauth_apps %} they'd like to use, and organization owners receive a notification of pending requests.

{% data reusables.organizations.oauth_app_restrictions_default %}

{% tip %}

**Tipp**: Wenn eine Organisation keine {% data variables.product.prodname_oauth_app %}-Zugriffsbeschränkungen eingerichtet hat, kann jede {% data variables.product.prodname_oauth_app %} mit Autorisierung eines Organisationsmitglieds auch auf die privaten Ressourcen der Organisation zugreifen.

{% endtip %}

To further protect your organization's resources, you can upgrade to {% data variables.product.prodname_ghe_cloud %}, which includes security features like SAML single sign-on. {% data reusables.enterprise.link-to-ghec-trial %}

## {% data variables.product.prodname_oauth_app %}-Zugriffseinschränkungen einrichten

Wenn ein Organisationsinhaber zum ersten Mal {% data variables.product.prodname_oauth_app %}-Zugriffseinschränkungen einrichtet, trifft Folgendes zu:

- **Anwendungen im Besitz der Organisation** erhalten automatisch Zugriff auf die Ressourcen der Organisation.
- **{% data variables.product.prodname_oauth_apps %}** immediately lose access to the organization's resources.
- **Vor Februar 2014 erstellte SSH-Schlüssel** verlieren sofort den Zugriff auf die Ressourcen der Organisation (dazu gehören auch Benutzer- und Deployment-Schlüssel).
- **SSH keys created by {% data variables.product.prodname_oauth_apps %} during or after February 2014** immediately lose access to the organization's resources.
- **Hook deliveries from private organization repositories** will no longer be sent to unapproved {% data variables.product.prodname_oauth_apps %}.
- **API access** to private organization resources is not available for unapproved {% data variables.product.prodname_oauth_apps %}. Darüber hinaus gibt es keine privilegierten Aktionen zum Erstellen, Aktualisieren oder Löschen für öffentliche Ressourcen der Organisation.
- **Von Benutzern erstellte Hooks und vor Mai 2014** erstellte Hooks sind davon nicht betroffen.
- **Private Forks von organisationseigenen Repositorys** unterliegen den Zugriffsbeschränkungen der Organisation.

## SSH-Zugriffsfehler beheben

Wenn ein vor Februar 2014 erstellter SSH-Schlüssel den Zugriff auf eine Organisation mit aktivierten {% data variables.product.prodname_oauth_app %}-Zugriffsbeschränkungen verliert, schlagen nachfolgende SSH-Zugriffsversuche fehl. Benutzern wird eine Fehlermeldung mit einer URL angezeigt, über die sie den Schlüssel genehmigen oder stattdessen einen vertrauenswürdigen Schlüssel hochladen können.

## Webhooks

Wenn einer {% data variables.product.prodname_oauth_app %} Zugriff auf die Organisation gewährt wird, nachdem die Einschränkungen aktiviert wurden, werden alle bereits vorhandenen Webhooks, die von dieser {% data variables.product.prodname_oauth_app %} erstellt wurden, weiter versendet.

Wenn eine Organisation den Zugriff einer zuvor genehmigten {% data variables.product.prodname_oauth_app %} entfernt, werden alle bereits vorhandenen Webhooks, die von dieser Anwendung erstellt wurden, nicht mehr versendet (diese Hooks werden deaktiviert, aber nicht gelöscht).

## Zugriffsbeschränkungen wieder aktivieren

Wenn eine Organisation {% data variables.product.prodname_oauth_app %}-Zugriffseinschränkungen deaktiviert und später wieder aktiviert, erhalten zuvor genehmigte {% data variables.product.prodname_oauth_app %}s automatisch Zugriff auf die Ressourcen der Organisation.

## Weiterführende Informationen

- „[{% data variables.product.prodname_oauth_app %}-Zugriffsbeschränkungen für Deine Organisation aktivieren](/articles/enabling-oauth-app-access-restrictions-for-your-organization)“
- "[Approving {% data variables.product.prodname_oauth_apps %} for your organization](/articles/approving-oauth-apps-for-your-organization)"
- „[Installierte Integrationen Deiner Organisation überprüfen](/articles/reviewing-your-organization-s-installed-integrations)“
- „[Zugriff einer zuvor genehmigten {% data variables.product.prodname_oauth_app %} für Deine Organisation verweigern](/articles/denying-access-to-a-previously-approved-oauth-app-for-your-organization)“
- „[{% data variables.product.prodname_oauth_app %}-Zugriffsbeschränkungen für Deine Organisation deaktivieren](/articles/disabling-oauth-app-access-restrictions-for-your-organization)“
- "[Requesting organization approval for {% data variables.product.prodname_oauth_apps %}](/articles/requesting-organization-approval-for-oauth-apps)"
- "[Authorizing {% data variables.product.prodname_oauth_apps %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps)"
