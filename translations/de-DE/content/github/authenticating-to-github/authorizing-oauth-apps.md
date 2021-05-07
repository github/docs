---
title: OAuth-Apps autorisieren
intro: 'Sie können Ihre {% data variables.product.product_name %}-Identität über OAuth mit Drittanbieter-Anwendungen verbinden. Wenn Sie eine {% data variables.product.prodname_oauth_app %} autorisieren, sollten Sie sicherstellen, dass die Anwendung vertrauenswürdig ist, und überprüfen, von wem sie entwickelt wurde und auf welche Daten sie zugreifen will.'
redirect_from:
  - /articles/authorizing-oauth-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---

Wenn eine {% data variables.product.prodname_oauth_app %} Sie anhand Ihres {% data variables.product.product_name %}-Kontos identifizieren möchte, wird eine Seite mit den Kontaktdaten des Anwendungsentwicklers und einer Liste der Daten angezeigt, die angefordert werden.

{% if currentVersion == "free-pro-team@latest" %}

{% tip %}

**Tipp:** Du musst [Deine E-Mail-Adresse verifizieren](/articles/verifying-your-email-address), bevor Du eine {% data variables.product.prodname_oauth_app %} autorisieren kannst.

{% endtip %}

{% endif %}

### {% data variables.product.prodname_oauth_app %}-Zugriff

{% data variables.product.prodname_oauth_app %}s können *Lese*- oder *Schreib*zugriff auf Ihre {% data variables.product.product_name %}-Daten haben.

- Bei einem **Lesezugriff** kann eine App Deine Daten nur *anzeigen*.
- Bei einem **Schreibzugriff** kann eine App Deine Daten auch *ändern*.

{% tip %}

**Tipp:**{% data reusables.user_settings.review_oauth_tokens_tip %}

{% endtip %}

#### Informationen zu OAuth-Scopes

*Scopes* sind benannte Gruppen von Berechtigungen, die eine {% data variables.product.prodname_oauth_app %} anfordern kann, um auf öffentliche wie nicht öffentliche Daten zuzugreifen.

Wenn Sie eine {% data variables.product.prodname_oauth_app %} verwenden möchten, die in {% data variables.product.product_name %} integriert ist, teilt die App Ihnen mit, welche Art von Zugriff auf Ihre Daten benötigt wird. Wenn Du der App Zugriff erteilen, kann sie Aktionen für Dich durchführen, beispielsweise das Lesen oder Ändern von Daten. Wenn Du beispielsweise eine App verwenden möchtest, die den Scope `user:email` fordert, hat die App Lesezugriff auf Deine privaten E-Mail-Adressen. For more information, see "[About scopes for {% data variables.product.prodname_oauth_app %}s](/apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps)."

{% tip %}

**Hinweis:** Derzeit kannst Du Quellcode-Zugriff nicht in einen Lesezugriff ändern.

{% endtip %}

#### Arten der angeforderten Daten

{% data variables.product.prodname_oauth_app %}s können mehrere Arten von Daten anfordern.

| Arten von Daten           | Beschreibung                                                                                                                                                                                                                                                                                                                    |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Commit-Status             | Du kannst einer App Zugriff gewähren, um Deinen Commit-Status zu melden. Mit dem Commit-Status-Zugriff können Apps anhand eines bestimmten Commits ermitteln, ob ein Build erfolgreich ist. Apps erhalten keinen Zugriff auf Deinen Code, aber sie können Statusinformationen für einen bestimmten Commit lesen und bearbeiten. |
| Bereitstellungen          | Mit dem Zugriff auf den Bereitstellungsstatus können Apps anhand eines bestimmten Commits für öffentliche und private Repositorys ermitteln, ob eine Bereitstellung erfolgreich ist. Apps können nicht auf Deinen Code zugreifen.                                                                                               |
| Gists                     | Der [Gist](https://gist.github.com)-Zugriff gewährt Apps den Lese- oder Schreibzugriff auf Deine öffentlichen wie geheimen Gists.                                                                                                                                                                                               |
| Hooks                     | Der [Webhooks](/webhooks)-Zugriff gewährt Apps den Lese- oder Schreibzugriff auf Hook-Konfigurationen auf von Dir verwalteten Repositorys.                                                                                                                                                                                      |
| Benachrichtigungen        | Der Benachrichtigungszugriff erlaubt es Apps, Ihre {% data variables.product.product_name %}-Benachrichtigungen wie Kommentare zu Issues und Pull Requests zu lesen. Die Apps können jedoch auf keine Elemente in Deinem Repositorys zugreifen.                                                                                 |
| Organisationen und Teams  | Mit dem Organisations- und Teamzugriff können Apps auf Organisations- und Teammitglieder zugreifen und sie verwalten.                                                                                                                                                                                                           |
| Persönliche Benutzerdaten | Zu Benutzerdaten gehören die Angaben in Deinem Benutzerprofil, beispielsweise Dein Name, Deine E-Mail-Adresse und Dein Standort.                                                                                                                                                                                                |
| Repositorys               | Repository-Informationen umfassen die Namen der Mitarbeiter, die von Dir erstellten Branches und die effektiven Dateien in Deinem Repository. Apps können den Zugriff für öffentliche oder private Repositorys auf benutzerweiter Ebene anfordern.                                                                              |
| Repository-Löschung       | Apps können das Löschen von Repositorys anfordern, die Du verwaltest, aber sie haben keinen Zugriff auf Deinen Code.                                                                                                                                                                                                            |

### Aktualisierte Berechtigungen anfordern

Wenn {% data variables.product.prodname_oauth_app %}s neue Zugriffsrechte anfordern, informieren sie Sie über die Unterschiede zwischen den aktuellen und den neuen Berechtigungen.

{% if currentVersion == "free-pro-team@latest" %}

### {% data variables.product.prodname_oauth_app %}s und Organisationen

Wenn Sie eine {% data variables.product.prodname_oauth_app %} für Ihr persönliches Benutzerkonto autorisieren, sehen Sie auch, wie sich die Autorisierung auf jede Organisation auswirkt, bei der Sie Mitglied sind.

- **Für Organisationen *mit* eingeschränktem {% data variables.product.prodname_oauth_app %}-Zugriff kannst Du verlangen, dass die Organisationsadministratoren die Verwendung der Anwendung in der Organisation genehmigen.** Wenn die Organisation die Anwendung nicht genehmigt, kann die Anwendung nur auf die öffentlichen Ressourcen der Organisation zugreifen. Wenn Du ein Organisationsadministrator bist, kannst Du [die Anwendung selbst genehmigen](/articles/approving-oauth-apps-for-your-organization).

- **Für Organisationen *ohne* eingeschränkten {% data variables.product.prodname_oauth_app %}-Zugriff wird der Zugriff der Anwendung auf die Ressourcen dieser Organisation automatisch genehmigt.** Daher solltest Du genau überlegen, für welche {% data variables.product.prodname_oauth_app %}s Du den Zugriff auf die Ressourcen Deines persönlichen Kontos und Deiner Organisation gewährst.

Wenn Du einer Organisation angehörst, die SAML Single-Sign-on erzwingt, musst Du eine aktive SAML-Sitzung für jede Organisation haben, jedes mal wenn Du eine {% data variables.product.prodname_oauth_app %} autorisierst.

### Weiterführende Informationen

- „[Informationen zu Einschränkungen für den {% data variables.product.prodname_oauth_app %}-Zugriff](/articles/about-oauth-app-access-restrictions)“
- „[{% data variables.product.prodname_marketplace %}-Support](/articles/github-marketplace-support)“

{% endif %}
