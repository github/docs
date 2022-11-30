---
title: Migrieren von OAuth-Apps zu GitHub-Apps
intro: 'Erfahre, welche Vorteile die Migration deiner {% data variables.product.prodname_oauth_app %} zu einer {% data variables.product.prodname_github_app %} hat und wie du eine {% data variables.product.prodname_oauth_app %} migrierst, die nicht auf {% data variables.product.prodname_marketplace %} gelistet ist. '
redirect_from:
  - /apps/migrating-oauth-apps-to-github-apps
  - /developers/apps/migrating-oauth-apps-to-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Migrate from OAuth Apps
ms.openlocfilehash: 4fea258cc9677401d8212634fdcc04abf22724c9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147081032'
---
Dieser Artikel enthält Richtlinien für vorhandene Integratoren, die die Migration von einer OAuth-App zu einer GitHub-App in Betracht ziehen.

## Gründe für den Wechsel zu GitHub-Apps

[GitHub-Apps](/apps/) sind die offiziell empfohlene Möglichkeit, eine Integration mit GitHub durchzuführen, da sie viele Vorteile gegenüber einer reinen OAuth-basierten Integration bieten:

- [Abgestimmte Berechtigungen](/apps/differences-between-apps/#requesting-permission-levels-for-resources) zielen auf die spezifischen Informationen ab, auf die eine GitHub-App zugreifen kann, sodass die App mit Sicherheitsrichtlinien von einem breiteren Kreis an Personen und Organisationen genutzt werden kann, als dies mit OAuth-Apps möglich wäre, die nicht durch Berechtigungen begrenzt werden können.
- [Kurzlebige Token](/apps/differences-between-apps/#token-based-identification) bieten im Vergleich zu OAuth-Token eine sicherere Authentifizierungsmethode. Ein OAuth-Token läuft erst ab, wenn die Person, die die OAuth-App autorisiert hat, das Token widerruft. Von GitHub-Apps werden Token verwendet, die schnell ablaufen. Dadurch entsteht ein viel kleineres Zeitfenster für die Verwendung kompromittierter Token.
- [Integrierte, zentralisierte Webhooks](/apps/differences-between-apps/#webhooks) empfangen Ereignisse für alle Repositorys und Organisationen, auf die die App zugreifen kann. Umgekehrt muss für OAuth-Apps ein Webhook für die jeweiligen Repositorys und Organisationen konfiguriert werden, auf die der Benutzer zugreifen kann.
- [Bot-Konten](/apps/differences-between-apps/#machine-vs-bot-accounts) verbrauchen keinen {% data variables.product.product_name %}-Arbeitsplatz und bleiben auch dann installiert, wenn die Person, die die App ursprünglich installiert hat, die Organisation verlässt.
- Die integrierte Unterstützung für OAuth ist mit [Benutzer-zu-Server-Endpunkten](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/) weiterhin für GitHub-Apps verfügbar.
- Dedizierte [API-Ratelimits](/apps/building-github-apps/understanding-rate-limits-for-github-apps/) für Bot-Konten lassen sich mit der jeweiligen Integration skalieren.
- Für Repositorybesitzer ist die [Installation von GitHub-Apps](/apps/differences-between-apps/#who-can-install-github-apps-and-authorize-oauth-apps) in Organisationsrepositorys möglich. Wenn die Konfiguration einer GitHub-App über Berechtigungen verfügt, mit denen die Ressourcen einer Organisation angefordert werden, muss der Organisationsbesitzer die Installation genehmigen.
- Support seitens der Open-Source-Community ist über [Octokit-Bibliotheken](/rest/overview/libraries) und andere Frameworks wie [Probot](https://probot.github.io/) verfügbar.
- Integratoren, die GitHub-Apps erstellen, haben Möglichkeiten, früheren Zugriff auf APIs zu übernehmen.

## Konvertieren einer OAuth-App in eine GitHub-App

Diese Richtlinien gehen davon aus, dass du über eine registrierte OAuth-App verfügst{% ifversion fpt or ghec %}, die möglicherweise in GitHub Marketplace aufgeführt ist{% endif %}. Ganz allgemein musst du die folgenden Schritte ausführen:

1. [Überprüfen der verfügbaren API-Endpunkte für GitHub-Apps](#review-the-available-api-endpoints-for-github-apps)
1. [Entwerfen einer Konzeption innerhalb des API-Ratenlimits](#design-to-stay-within-api-rate-limits)
1. [Registrieren einer neuen GitHub-App](#register-a-new-github-app)
1. [Ermitteln der von der App benötigten Berechtigungen](#determine-the-permissions-your-app-requires)
1. [Abonnieren von Webhooks](#subscribe-to-webhooks)
1. [Verstehen der verschiedenen Authentifizierungsmethoden](#understand-the-different-methods-of-authentication)
1. [Anleiten der Benutzer beim Installieren deiner GitHub-App in Repositorys](#direct-users-to-install-your-github-app-on-repositories)
1. [Entfernen von unnötigen Repositoryhooks](#remove-any-unnecessary-repository-hooks)
1. [Ermutigen der Benutzer zum Widerrufen des Zugriffs auf die OAuth-App](#encourage-users-to-revoke-access-to-your-oauth-app)
1. [Löschen der OAuth-App](#delete-the-oauth-app)

### Überprüfen der verfügbaren API-Endpunkte für GitHub-Apps

Während die meisten [REST-API](/rest)-Endpunkte und [GraphQL](/graphql)-Abfragen heute für GitHub-Apps verfügbar sind, wird weiterhin daran gearbeitet, bestimmte Endpunkte verfügbar zu machen. Sieh dir die [verfügbaren REST-Endpunkte](/rest/overview/endpoints-available-for-github-apps) an, um dich zu vergewissern, dass die von dir benötigten Endpunkte mit GitHub-Apps kompatibel sind. Beachte, dass einige der API-Endpunkte, die für GitHub-Apps verfügbar sind, ermöglichen, dass die App im Namen des Benutzers handeln kann. Unter [Benutzer-zu-Server-Anforderungen](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-to-server-requests) findest du eine Liste von Endpunkten, die zulassen, dass sich eine GitHub-App als Benutzer authentifizieren kann.

Es wird empfohlen, die Liste der benötigten API-Endpunkte so früh wie möglich durchzugehen. Teile dem Support mit, ob es einen von dir benötigten Endpunkt gibt, der noch nicht für {% data variables.product.prodname_github_apps %} aktiviert ist.

### Entwerfen einer Konzeption innerhalb des API-Ratenlimits

Für GitHub-Apps werden [Gleitregeln für Ratenlimits](/apps/building-github-apps/understanding-rate-limits-for-github-apps/) verwendet, die basierend auf der Anzahl der Repositorys und Benutzer in der Organisation erhöht werden können. Eine GitHub-App kann auch [bedingte Anforderungen](/rest/overview/resources-in-the-rest-api#conditional-requests) verwenden oder Anforderungen mithilfe der [GraphQL-API](/graphql) konsolidieren.

### Registrieren einer neuen GitHub-App

Nachdem du dich entschieden hast, zu GitHub-Apps zu wechseln, musst du [eine neue GitHub-App erstellen](/apps/building-github-apps/).

### Ermitteln der von der App benötigten Berechtigungen

Wenn du deine GitHub-App registrierst, musst du die für jeden im Code der App verwendeten Endpunkt erforderlichen Berechtigungen auswählen. Unter [GitHub-App-Berechtigungen](/rest/reference/permissions-required-for-github-apps) findest du eine Liste der Berechtigungen, die für jeden Endpunkt erforderlich sind, der für GitHub-Apps verfügbar ist.

In den Einstellungen deiner GitHub-App kannst du angeben, ob deine App `No Access`-, `Read-only`- oder `Read & Write`-Zugriff für die jeweiligen Berechtigungstypen benötigt. Durch die angepassten Berechtigungen kann die App gezielt auf die jeweils benötigte Teilmenge von Daten zugreifen. Es empfiehlt sich, die jeweils kleinste Anzahl von Berechtigungen anzugeben, mit denen die gewünschte Funktionalität bereitgestellt werden kann.

### Abonnieren von Webhooks

Nachdem du eine neue GitHub-App erstellt und die für sie benötigten Berechtigungen ausgewählt hast, kannst du die Webhookereignisse auswählen, die du abonnieren möchtest. Informationen zum Abonnieren von Webhooks findest du unter [Bearbeiten der Berechtigungen einer GitHub-App](/apps/managing-github-apps/editing-a-github-app-s-permissions/).

### Verstehen der verschiedenen Authentifizierungsmethoden

Für GitHub-Apps wird hauptsächlich eine tokenbasierte Authentifizierung verwendet, die nach kurzer Zeit abläuft und mehr Sicherheit als ein OAuth-Token bietet, das nicht abläuft. Es ist wichtig, die verschiedenen Methoden der Authentifizierung zu verstehen, die dir zur Verfügung stehen, und zu wissen, wann du diese verwenden musst:

* Ein **JSON-Webtoken (JWT)** [dient der Authentifizierung als GitHub-App](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app). Du kannst dich beispielsweise mit einem **JWT** authentifizieren, um Anwendungsinstallationsdetails abzurufen oder das **JWT** gegen ein **Installationszugriffstoken** auszutauschen.
* Ein **Installationszugriffstoken** [dient der Authentifizierung als eine bestimmte Installation deiner GitHub-App](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) (auch als Server-zu-Server-Anforderungen bezeichnet). Du kannst dich beispielsweise mit einem **Installationszugriffstoken** authentifizieren, um ein Issue zu öffnen oder Feedback zu einem Pull Request bereitzustellen.
* Ein **OAuth-Zugriffstoken** dient der [Authentifizierung als Benutzer deiner GitHub-App](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site) (auch als Benutzer-zu-Server-Anforderungen bezeichnet). Du kannst beispielsweise ein OAuth-Zugriffstoken verwenden, um dich als Benutzer zu authentifizieren, wenn eine GitHub-App die Identität eines Benutzers überprüfen oder im Namen eines Benutzers handeln muss.

Das am häufigsten verwendete Szenario besteht darin, eine Authentifizierung als eine bestimmte Installation mithilfe eines **Installationszugriffstokens** durchzuführen.

### Anleiten der Benutzer beim Installieren deiner GitHub-App in Repositorys

Nachdem du den Wechsel von einer OAuth-App zu einer GitHub-App durchgeführt hast, musst du den Benutzern mitteilen, dass die GitHub-App zur Installation verfügbar ist. Du kannst beispielsweise einen Installationslink für die GitHub-App in ein Handlungsaufforderungsbanner in deine Anwendung einfügen. Zur Erleichterung des Übergangs kannst du Abfrageparameter verwenden, um das Benutzer- oder Organisationskonto zu identifizieren, für das der Installationsflow für deine GitHub-App ausgeführt wird, und alle Repositorys, auf die deine OAuth-App Zugriff hatte, vorab auszuwählen. Auf diese Weise können Benutzer deine GitHub-App ganz einfach in Repositorys installieren, auf die sie bereits Zugriff haben.

#### Abfrageparameter

| Name | BESCHREIBUNG |
|------|-------------|
| `suggested_target_id` | **Erforderlich**: ID des Benutzers oder der Organisation, der/die deine GitHub-App installiert. |
| `repository_ids[]` | Array von Repository-IDs. Wenn nicht angegeben, werden alle Repositorys ausgewählt. Die maximale Anzahl von Repositorys, die vorab ausgewählt werden können, beträgt 100. |

#### Beispiel-URL
```
https://github.com/apps/YOUR_APP_NAME/installations/new/permissions?suggested_target_id=ID_OF_USER_OR_ORG&repository_ids[]=REPO_A_ID&repository_ids[]=REPO_B_ID
```

Du musst `YOUR_APP_NAME` durch den Namen deiner GitHub-App und `ID_OF_USER_OR_ORG` durch die ID des Zielbenutzers oder der Zielorganisation ersetzen und bis zu 100 Repository-IDs (`REPO_A_ID` und `REPO_B_ID`) einbeziehen. Zum Abrufen einer Liste der Repositorys, auf die deine OAuth-App Zugriff hat, verwendest du die Endpunkte [Auflisten von Repositorys für den authentifizierten Benutzer](/rest/reference/repos#list-repositories-for-the-authenticated-user) und [Auflisten von Organisationsrepositorys](/rest/reference/repos#list-organization-repositories).

### Entfernen von unnötigen Repositoryhooks

Nachdem deine GitHub-App in einem Repository installiert wurde, solltest du unnötige Webhooks entfernen, die von der OAuth-Legacy-App erstellt wurden. Wenn beide Apps in einem Repository installiert sind, können sie möglicherweise die Funktionalität für den Benutzer duplizieren. Zum Entfernen von Webhooks kannst du mit der Aktion `repositories_added` eine Überwachung auf den [`installation_repositories`-Webhook](/webhooks/event-payloads/#installation_repositories) durchführen und [einen Repositorywebhook in den Repositorys löschen](/rest/reference/webhooks#delete-a-repository-webhook), die von der OAuth-App erstellt wurden.

### Ermutigen der Benutzer zum Widerrufen des Zugriffs auf die OAuth-App

Wenn die Installationsbasis deiner GitHub-App wächst, solltest du die Benutzer ermutigen, den Zugriff auf die OAuth-Legacy-Integration zu widerrufen. Weitere Informationen findest du unter [Autorisieren von OAuth-Apps](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps).

### Löschen der OAuth-App

Zum Verhindern der missbräuchlichen Verwendung der Anmeldeinformationen für die OAuth-App sollte die OAuth-App gelöscht werden. Mit dieser Aktion werden auch alle verbleibenden Autorisierungen der OAuth-App widerrufen. Weitere Informationen findest du unter [Löschen einer OAuth-App](/developers/apps/managing-oauth-apps/deleting-an-oauth-app).
