---
title: Identifying and authorizing users for GitHub Apps (Identifizieren und Autorisieren von Benutzer*innen für GitHub-Apps)
intro: '{% data reusables.shortdesc.identifying_and_authorizing_github_apps %}'
redirect_from:
  - /early-access/integrations/user-identification-authorization
  - /apps/building-integrations/setting-up-and-registering-github-apps/identifying-users-for-github-apps
  - /apps/building-github-apps/identifying-and-authorizing-users-for-github-apps
  - /developers/apps/identifying-and-authorizing-users-for-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Identify & authorize users
ms.openlocfilehash: 302e7a25931c3af2957dae7a67e0ca080fc5bd50
ms.sourcegitcommit: f54d01e643f994ce48f0774dbc680ad77dd6193f
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160580'
---
{% data reusables.pre-release-program.expiring-user-access-tokens %}

Wenn die GitHub-App im Auftrag eines Benutzers eingesetzt wird, werden von ihr Benutzer-zu-Server-Anforderungen ausgeführt. Diese Anforderungen müssen mit dem Zugriffstoken eines Benutzers autorisiert werden. Benutzer-zu-Server-Anforderungen umfassen das Anfordern von Daten für einen Benutzer, z. B. die Bestimmung, welche Repositorys für einen bestimmten Benutzer angezeigt werden sollen. Diese Anforderungen enthalten auch Aktionen, die von einem Benutzer ausgelöst werden, z. B. das Ausführen eines Builds.

{% data reusables.apps.expiring_user_authorization_tokens %}

## Identifizieren von Benutzern auf der Website

Verwende den [Webanwendungsfluss](#web-application-flow) zum Autorisieren von Benutzer*innen für Standard-Apps, die im Browser ausgeführt werden.

Verwende den [Gerätefluss](#device-flow) zum Autorisieren von Benutzer*innen für monitorlose Apps ohne direkten Zugriff auf den Browser, z. B. CLI-Tools oder Git Credential Manager. Im Gerätefluss wird die Erweiterung OAuth 2.0 [Device Authorization Grant](https://tools.ietf.org/html/rfc8628) verwendet.

## Webanwendungsfluss

Mithilfe des Webanwendungsflusses läuft der Prozess zum Identifizieren von Benutzer*innen auf deiner Website wie folgt ab:

1. Benutzer werden umgeleitet, um ihre GitHub-Identität anzufordern.
2. Benutzer*innen werden von GitHub wieder zu deiner Website umgeleitet.
3. Die GitHub-App greift mit dem Zugriffstoken des Benutzers auf die API zu.

Wenn du beim Erstellen oder Ändern der App **Anfordern der Benutzerautorisierung (OAuth) während der Installation** auswählst, wird Schritt 1 während der App-Installation abgeschlossen. Weitere Informationen findest du unter [Autorisieren von Benutzer*innen während der Installation](/apps/installing-github-apps/#authorizing-users-during-installation).

### 1. Anfordern der GitHub-Identität eines Benutzers
Leite den Benutzer bzw. die Benutzerin im Browser an die folgende URL weiter:

    GET {% data variables.product.oauth_host_code %}/login/oauth/authorize

Wenn von der GitHub-App ein `login`-Parameter angegeben wird, erfolgt die Benutzeraufforderung mit einem bestimmten Konto, das die Benutzer für die Anmeldung und Autorisierung der App verwenden können.

#### Parameter

Name | Typ | BESCHREIBUNG
-----|------|------------
`client_id` | `string` | **Erforderlich.** Die Client-ID für die GitHub-App. Du kannst diese in den [GitHub-App-Einstellungen](https://github.com/settings/apps) finden, wenn du deine App auswählst. **Hinweis:** Die App-ID und die Client-ID sind nicht identisch und können nicht ausgetauscht werden.
`redirect_uri` | `string` | Die URL in der Anwendung, an die Benutzer nach der Autorisierung gesendet werden. Diese muss genau mit {% ifversion fpt or ghes or ghec %} einer der URLs übereinstimmen, die du als **Rückruf-URL** bereitgestellt hast {% else %} der URL übereinstimmen, die du im Feld **Rückruf-URL für die Benutzerautorisierung** bereitgestellt hast{% endif %}, als du deine GitHub-App eingerichtet hast, und darf keine zusätzlichen Parameter enthalten.
`state` | `string` | Dies sollte zum Schutz vor Fälschungsangriffen eine zufällige Zeichenfolge enthalten und könnte andere beliebige Daten umfassen.
`login` | `string` | Schlägt ein bestimmtes Konto vor, das zum Anmelden und Autorisieren der App verwendet werden soll.
`allow_signup` | `string` | Ob nicht authentifizierten Benutzern während des OAuth-Flusses eine Option zum Registrieren für {% data variables.product.prodname_dotcom %} angeboten wird. Der Standardwert ist `true`. Verwende `false`, wenn eine Richtlinie die Anmeldung verbietet.

{% note %}

**Hinweis:** Du musst keine Bereiche in der Autorisierungsanforderung angeben. Im Gegensatz zum herkömmlichen OAuth-Protokoll ist das Autorisierungstoken auf die Berechtigungen beschränkt, die der GitHub-App und denen des Benutzers zugeordnet sind.

{% endnote %}

### 2. Benutzer*innen werden von GitHub wieder zu deiner Website umgeleitet.

Wenn Benutzer*innen die Anforderung akzeptieren, werden sie von GitHub mit einem temporären `code` in einem Codeparameter sowie dem Status, den du im vorherigen Schritt in einem `state`-Parameter bereitgestellt hast, wieder zu deiner Website umgeleitet. Wenn die Status nicht übereinstimmen, wurde die Anforderung von Dritten erstellt und der Prozess sollte abgebrochen werden.

{% note %}

**Hinweis:** Wenn du beim Erstellen oder Ändern der App **Anfordern der Benutzerautorisierung (OAuth) während der Installation** auswählst, wird von GitHub ein temporärer `code` zurückgegeben, den du gegen ein Zugriffstoken austauschen musst. Der `state`-Parameter wird nicht zurückgegeben, wenn der OAuth-Fluss während der App-Installation von GibHub initiiert wird.

{% endnote %}

Tausche diesen `code` gegen ein Zugriffstoken aus.  Wenn ablaufende Token aktiviert sind, läuft das Zugriffstoken in 8 Stunden ab, und das Aktualisierungstoken läuft in 6 Monaten ab. Jedes Mal, wenn du das Token aktualisierst, erhältst du ein neues Aktualisierungstoken. Weitere Informationen findest du unter [Aktualisieren von Benutzer-zu-Server-Zugriffstoken](/developers/apps/refreshing-user-to-server-access-tokens).

Ablaufende Benutzertoken sind derzeit ein optionales Feature, bei dem sich Änderungen ergeben können. Wenn du das Feature für ablaufende Benutzer-zu-Server-Token aktivieren möchtest, findest du entsprechende Informationen unter [Aktivieren optionaler Features für Apps](/developers/apps/activating-optional-features-for-apps).

Stelle eine Anforderung an den folgenden Endpunkt, um ein Zugriffstoken zu erhalten:

    POST {% data variables.product.oauth_host_code %}/login/oauth/access_token

#### Parameter

Name | Typ | BESCHREIBUNG
-----|------|------------
`client_id` | `string` | **Erforderlich.** Die Client-ID für die GitHub-App.
`client_secret` | `string`   | **Erforderlich.** Der geheime Clientschlüssel für die GitHub-App.
`code` | `string`   | **Erforderlich.** Der Code, den du als Antwort auf Schritt 1 erhalten hast.
`redirect_uri` | `string` | Die URL in der Anwendung, an die Benutzer nach der Autorisierung gesendet werden. Diese muss genau mit {% ifversion fpt or ghes or ghec %} einer der URLs übereinstimmen, die du als **Rückruf-URL** bereitgestellt hast {% else %} der URL übereinstimmen, die du im Feld **Rückruf-URL für die Benutzerautorisierung** bereitgestellt hast{% endif %}, als du deine GitHub-App eingerichtet hast, und darf keine zusätzlichen Parameter enthalten.

#### Antwort

Standardmäßig weist die Antwort das folgende Format auf. Die Antwortparameter `expires_in`, `refresh_token` und `refresh_token_expires_in` werden nur zurückgegeben, wenn du ablaufende Benutzer-zu-Server-Zugriffstoken aktivierst.

```json
{
  "access_token": "ghu_16C7e42F292c6912E7710c838347Ae178B4a",
  "expires_in": 28800,
  "refresh_token": "ghr_1B4a2e77838347a7E420ce178F2E7c6912E169246c34E1ccbF66C46812d16D5B1A9Dc86A1498",
  "refresh_token_expires_in": 15811200,
  "scope": "",
  "token_type": "bearer"
}
```

### 3. Die GitHub-App greift mit dem Zugriffstoken des Benutzers auf die API zu.

Das Zugriffstoken des Benutzers ermöglicht es der GitHub-App, Anforderungen im Auftrag eines Benutzers an die API zu senden.

    Authorization: Bearer OAUTH-TOKEN
    GET {% data variables.product.api_url_code %}/user

In curl kannst du beispielsweise den Autorisierungsheader wie folgt festlegen:

```shell
curl -H "Authorization: Bearer OAUTH-TOKEN" {% data variables.product.api_url_pre %}/user
```

## Gerätefluss

{% note %}

**Hinweis:** Der Gerätefluss befindet sich in der öffentlichen Betaversion und kann geändert werden.

{% endnote %}

Mit dem Gerätefluss kannst du Benutzer*innen für eine monitorlose App autorisieren, z. B. ein CLI-Tool oder Git Credential Manager.

{% ifversion device-flow-is-opt-in %}Bevor du den Gerätefluss verwenden kannst, um Benutzer*innen zu identifizieren und zu autorisieren, musst du ihn zuerst in den Einstellungen der App aktivieren. Weitere Informationen zum Aktivieren des Geräteflusses findest du unter [Ändern einer GitHub-App](/developers/apps/managing-github-apps/modifying-a-github-app). {% endif %}Weitere Informationen zum Autorisieren von Benutzer*innen mit dem Gerätefluss findest du unter [Autorisieren von OAuth-Apps](/developers/apps/authorizing-oauth-apps#device-flow).

## Überprüfen, auf welche Ressourcen der Installation ein Benutzer zugreifen kann

Sobald du über ein OAuth-Token für einen Benutzer oder eine Benutzerin verfügst, kannst du überprüfen, auf welche Installationen er oder sie zugreifen kann.

    Authorization: Bearer OAUTH-TOKEN
    GET /user/installations

Du kannst auch überprüfen, welche Repositorys für Benutzer*innen zum Installieren zugänglich sind.

    Authorization: Bearer OAUTH-TOKEN
    GET /user/installations/:installation_id/repositories

Weitere Details findest du unter [Auflisten der für das Benutzerzugriffstoken zugänglichen App-Installationen](/rest/apps#list-app-installations-accessible-to-the-user-access-token) und [Auflisten der für das Benutzerzugriffstoken zugänglichen Repositorys](/rest/apps#list-repositories-accessible-to-the-user-access-token).

## Behandeln einer widerrufenen GitHub-App-Autorisierung

Wenn ein Benutzer die Autorisierung einer GitHub-App widerruft, erhält die App standardmäßig den [`github_app_authorization`](/webhooks/event-payloads/#github_app_authorization)-Webhook. GitHub-Apps können sich nicht von diesem Ereignis abmelden. {% data reusables.webhooks.authorization_event %}

## Berechtigungen auf Benutzerebene

Du kannst der GitHub-App Berechtigungen auf Benutzerebene für den Zugriff auf Benutzerressourcen hinzufügen, z. B. auf E-Mails, die von einzelnen Benutzer*innen als Teil des [Benutzerberechtigungsflusses](#identifying-users-on-your-site) gewährt werden. Berechtigungen auf Benutzerebene unterscheiden sich von [Berechtigungen auf Repository- und Organisationsebene](/rest/overview/permissions-required-for-github-apps), die zum Zeitpunkt der Installation für eine Organisation oder ein persönliches Konto gewährt werden.

Du kannst Berechtigungen auf Benutzerebene in den Einstellungen der GitHub-App auf der Seite **Berechtigungen und Webhooks** im Abschnitt **Benutzerberechtigungen** auswählen. Weitere Informationen zum Auswählen von Berechtigungen findest du unter [Bearbeiten der Berechtigungen einer GitHub-App](/apps/managing-github-apps/editing-a-github-app-s-permissions/).

Wenn Benutzer*innen deine App mit ihrem Konto installieren, werden in der Installationsaufforderung die Berechtigungen auf Benutzerebene aufgelistet, die von der App angefordert werden. Außerdem wird erläutert, dass einzelne Benutzer*innen von der App nach diesen Berechtigungen gefragt werden können.

Da Berechtigungen auf Benutzerebene für einzelne Benutzer*innen gewährt werden, kannst du diese der vorhandenen App hinzufügen, ohne Benutzer*innen zum Upgrade aufzufordern. Du musst vorhandene Benutzer*innen jedoch den Benutzerberechtigungsfluss durchlaufen lassen, um die neue Berechtigung zu autorisieren und ein neues Benutzer-zu-Server-Token für diese Anforderungen abzurufen.

## Benutzer-zu-Server-Anforderungen

Während der Großteil der API-Interaktion unter Verwendung der Server-zu-Server-Zugriffstoken für die Installation erfolgen sollte, lassen es bestimmte Endpunkte zu, dass du Aktionen über die API mithilfe eines Benutzerzugriffstokens ausführst. Von der App können die folgenden Anforderungen mithilfe der [GraphQL](/graphql)- oder [REST](/rest)-Endpunkte durchgeführt werden.

### Unterstützte Endpunkte

{% ifversion fpt or ghec %}
#### Runner für Aktionen

* [Auflisten von Runneranwendungen für ein Repository](/rest/actions#list-runner-applications-for-a-repository)
* [Auflisten selbstgehosteter Runner für ein Repository](/rest/actions#list-self-hosted-runners-for-a-repository)
* [Abrufen eines selbstgehosteten Runners für ein Repository](/rest/actions#get-a-self-hosted-runner-for-a-repository)
* [Löschen eines selbstgehosteten Runners aus einem Repository](/rest/actions#delete-a-self-hosted-runner-from-a-repository)
* [Erstellen eines Registrierungstokens für ein Repository](/rest/actions#create-a-registration-token-for-a-repository)
* [Erstellen eines Entfernungstokens für ein Repository](/rest/actions#create-a-remove-token-for-a-repository)
* [Auflisten von Runneranwendungen für eine Organisation](/rest/actions#list-runner-applications-for-an-organization)
* [Auflisten selbstgehosteter Runner für eine Organisation](/rest/actions#list-self-hosted-runners-for-an-organization)
* [Abrufen eines selbstgehosteten Runners für eine Organisation](/rest/actions#get-a-self-hosted-runner-for-an-organization)
* [Löschen eines selbstgehosteten Runners von einer Organisation](/rest/actions#delete-a-self-hosted-runner-from-an-organization)
* [Erstellen eines Registrierungstokens für eine Organisation](/rest/actions#create-a-registration-token-for-an-organization)
* [Erstellen eines Entfernungstokens für eine Organisation](/rest/actions#create-a-remove-token-for-an-organization)

#### Geheimnisse für Aktionen

* [Abrufen eines öffentlichen Schlüssels für ein Repository](/rest/actions#get-a-repository-public-key)
* [Auflisten von geheimen Repositoryschlüsseln](/rest/actions#list-repository-secrets)
* [Abrufen eines geheimen Repositoryschlüssels](/rest/actions#get-a-repository-secret)
* [Erstellen oder Aktualisieren eines geheimen Repositoryschlüssels](/rest/actions#create-or-update-a-repository-secret)
* [Löschen eines geheimen Repositoryschlüssels](/rest/actions#delete-a-repository-secret)
* [Abrufen eines öffentlichen Schlüssels für eine Organisation](/rest/actions#get-an-organization-public-key)
* [Auflisten von geheimen Organisationsschlüsseln](/rest/actions#list-organization-secrets)
* [Abrufen eines geheimen Organisationsschlüssels](/rest/actions#get-an-organization-secret)
* [Erstellen oder Aktualisieren eines geheimen Organisationsschlüssels](/rest/actions#create-or-update-an-organization-secret)
* [Auflisten ausgewählter Repositorys für einen geheimen Organisationsschlüssel](/rest/actions#list-selected-repositories-for-an-organization-secret)
* [Festlegen ausgewählter Repositorys für einen geheimen Organisationsschlüssel](/rest/actions#set-selected-repositories-for-an-organization-secret)
* [Hinzufügen ausgewählter Repositorys für einen geheimen Organisationsschlüssel](/rest/actions#add-selected-repository-to-an-organization-secret)
* [Entfernen ausgewählter Repositorys von einem geheimen Organisationsschlüssel](/rest/actions#remove-selected-repository-from-an-organization-secret)
* [Löschen eines geheimen Organisationsschlüssels](/rest/actions#delete-an-organization-secret) {% endif %}

{% ifversion fpt or ghec %}
#### Artifacts

* [Auflisten von Artefakten für ein Repository](/rest/actions#list-artifacts-for-a-repository)
* [Auflisten von Artefakten für Workflowausführungen](/rest/actions#list-workflow-run-artifacts)
* [Abrufen eines Artefakts](/rest/actions#get-an-artifact)
* [Löschen eines Artefakts](/rest/actions#delete-an-artifact)
* [Herunterladen eines Artefaktes](/rest/actions#download-an-artifact) {% endif %}

#### Überprüfungsausführungen

* [Erstellen einer Überprüfungsausführung](/rest/checks#create-a-check-run)
* [Abrufen einer Überprüfungsausführung](/rest/checks#get-a-check-run)
* [Aktualisieren einer Überprüfungsausführung](/rest/checks#update-a-check-run)
* [Auflisten von Anmerkungen von Überprüfungsausführungen](/rest/checks#list-check-run-annotations)
* [Auflisten von Überprüfungsausführungen in einer Überprüfungssammlung](/rest/checks#list-check-runs-in-a-check-suite)
* [Auflisten von Überprüfungsausführungen für einen Git-Verweis](/rest/checks#list-check-runs-for-a-git-reference)

#### Prüfsuiten

* [Erstellen einer Überprüfungssammlung](/rest/checks#create-a-check-suite)
* [Abrufen einer Überprüfungssammlung](/rest/checks#get-a-check-suite)
* [Anfordern einer Überprüfungssammlung](/rest/checks#rerequest-a-check-suite)
* [Aktualisieren von Repositoryeinstellungen für Überprüfungssamlungen](/rest/checks#update-repository-preferences-for-check-suites)
* [Auflisten von Überprüfungssammlungen für einen Git-Verweis](/rest/checks#list-check-suites-for-a-git-reference)

#### Verhaltensregeln

* [Abrufen aller Verhaltensregeln](/rest/codes-of-conduct#get-all-codes-of-conduct)
* [Abrufen einer Verhaltensregel](/rest/codes-of-conduct#get-a-code-of-conduct)

#### Bereitstellungsstatus

* [Auflisten von Bereitstellungsstatus](/rest/deployments#list-deployment-statuses)
* [Erstellen eines Bereitstellungsstatus](/rest/deployments#create-a-deployment-status)
* [Abrufen eines Bereitstellungsstatus](/rest/deployments#get-a-deployment-status)

#### Bereitstellungen

* [Auflisten von Bereitstellungen](/rest/deployments#list-deployments)
* [Erstellen einer Bereitstellung](/rest/deployments#create-a-deployment)
* [Abrufen einer Bereitstellung](/rest/deployments#get-a-deployment)
* [Löschen einer Bereitstellung](/rest/deployments#delete-a-deployment)

#### Ereignisse

* [Auflisten öffentlicher Ereignisse für ein Netzwerk von Repositorys](/rest/activity#list-public-events-for-a-network-of-repositories)
* [Auflisten öffentlicher Organisationsereignisse](/rest/activity#list-public-organization-events)

#### Feeds

* [Abrufen von Feeds](/rest/activity#get-feeds)

#### Git-Blobs

* [Erstellen eines Blobs](/rest/git#create-a-blob)
* [Abrufen eines Blobs](/rest/git#get-a-blob)

#### Git-Commits

* [Erstellen eines Commits](/rest/git#create-a-commit)
* [Abrufen eines Commits](/rest/git#get-a-commit)

#### Git-Verweise

* [Erstellen eines Verweises](/rest/git#create-a-reference)
* [Abrufen eines Verweises](/rest/git#get-a-reference)
* [Auflisten übereinstimmender Verweise](/rest/git#list-matching-references)
* [Aktualisieren eines Verweises](/rest/git#update-a-reference)
* [Löschen eines Verweises](/rest/git#delete-a-reference)

#### Git-Tags

* [Erstellen eines Tagobjekts](/rest/git#create-a-tag-object)
* [Abrufen eines Tags](/rest/git#get-a-tag)

#### Git-Strukturen

* [Erstellen einer Struktur](/rest/git#create-a-tree)
* [Abrufen einer Struktur](/rest/git#get-a-tree)

#### Gitignore-Vorlagen

* [Abrufen aller gitignore-Vorlagen](/rest/gitignore#get-all-gitignore-templates)
* [Abrufen einer gitignore-Vorlage](/rest/gitignore#get-a-gitignore-template)

#### Installationen

* [Auflisten von Repositorys, die für das Benutzerzugriffstoken zugänglich sind](/rest/apps#list-repositories-accessible-to-the-user-access-token)

{% ifversion fpt or ghec %}
#### Interaktionsgrenzwerte

* [Abrufen von Interaktionseinschränkungen für eine Organisation](/rest/interactions#get-interaction-restrictions-for-an-organization)
* [Festlegen von Interaktionseinschränkungen für eine Organisation](/rest/interactions#set-interaction-restrictions-for-an-organization)
* [Entfernen von Interaktionseinschränkungen für eine Organisation](/rest/interactions#remove-interaction-restrictions-for-an-organization)
* [Abrufen von Interaktionseinschränkungen für ein Repository](/rest/interactions#get-interaction-restrictions-for-a-repository)
* [Festlegen von Interaktionseinschränkungen für ein Repository](/rest/interactions#set-interaction-restrictions-for-a-repository)
* [Entfernen von Interaktionseinschränkungen für ein Repository](/rest/interactions#remove-interaction-restrictions-for-a-repository) {% endif %}

#### Issues zugewiesene Personen

* [Hinzufügen von zugewiesenen Personen zu einem Issue](/rest/issues#add-assignees-to-an-issue)
* [Entfernen von zugewiesenen Personen von einem Issue](/rest/issues#remove-assignees-from-an-issue)

#### Issue-Kommentare

* [Auflisten von Issue-Komponenten](/rest/issues#list-issue-comments)
* [Erstellen eines Issue-Kommentars](/rest/issues#create-an-issue-comment)
* [Auflisten von Issue-Kommentaren für ein Repository](/rest/issues#list-issue-comments-for-a-repository)
* [Abrufen eines Issue-Kommentars](/rest/issues#get-an-issue-comment)
* [Aktualisieren eines Issue-Kommentars](/rest/issues#update-an-issue-comment)
* [Löschen eines Issue-Kommentars](/rest/issues#delete-an-issue-comment)

#### Issue-Ereignisse

* [Auflisten von Issue-Ereignissen](/rest/issues#list-issue-events)

#### Issue-Zeitachse

* [Auflisten von Zeitachsenereignissen für ein Issue](/rest/issues#list-timeline-events-for-an-issue)

#### Probleme

* [Auflisten der dem authentifizierten Benutzer zugewiesenen Issues](/rest/issues#list-issues-assigned-to-the-authenticated-user)
* [Auflisten der zugewiesenen Personen](/rest/issues#list-assignees)
* [Überprüfen, ob ein Benutzer zugewiesen werden kann](/rest/issues#check-if-a-user-can-be-assigned)
* [Auflisten von Repository-Issues](/rest/issues#list-repository-issues)
* [Ausgabe erstellen](/rest/issues#create-an-issue)
* [Abrufen eines Issues](/rest/issues#get-an-issue)
* [Aktualisieren eines Issues](/rest/issues#update-an-issue)
* [Sperren eines Issues](/rest/issues#lock-an-issue)
* [Entsperren eines Issues](/rest/issues#unlock-an-issue)

{% ifversion fpt or ghec %}
#### Aufträge

* [Abrufen eines Auftrags für eine Workflowausführung](/rest/actions#get-a-job-for-a-workflow-run)
* [Herunterladen von Auftragsprotokollen für eine Workflowausführung](/rest/actions#download-job-logs-for-a-workflow-run)
* [Auflisten von Aufträgen für eine Workflowausführung](/rest/actions#list-jobs-for-a-workflow-run) {% endif %}

#### Bezeichnungen

* [Auflisten von Bezeichnungen für ein Issue](/rest/issues#list-labels-for-an-issue)
* [Hinzufügen von Bezeichnungen zu einem Issue](/rest/issues#add-labels-to-an-issue)
* [Festlegen von Bezeichnungen für ein Issue](/rest/issues#set-labels-for-an-issue)
* [Entfernen aller Bezeichnungen aus einem Issue](/rest/issues#remove-all-labels-from-an-issue)
* [Entfernen einer Bezeichnung aus einem Issue](/rest/issues#remove-a-label-from-an-issue)
* [Auflisten von Bezeichnungen für ein Repository](/rest/issues#list-labels-for-a-repository)
* [Erstellen einer Bezeichnung](/rest/issues#create-a-label)
* [Abrufen einer Bezeichnung](/rest/issues#get-a-label)
* [Aktualisieren einer Bezeichnung](/rest/issues#update-a-label)
* [Löschen einer Bezeichnung](/rest/issues#delete-a-label)
* [Abrufen von Bezeichnungen für jedes Issue in einem Meilenstein](/rest/issues#list-labels-for-issues-in-a-milestone)

#### Lizenzen

* [Abrufen aller häufig verwendeten Lizenzen](/rest/licenses#get-all-commonly-used-licenses)
* [Abrufen einer Lizenz](/rest/licenses#get-a-license)

#### Markdown

* [Rendern eines Markdowndokuments](/rest/markdown#render-a-markdown-document)
* [Rendern eines Markdowndokuments im Rohmodus](/rest/markdown#render-a-markdown-document-in-raw-mode)

#### Meta

* [Meta](/rest/meta#meta)

#### Meilensteine

* [Auflisten von Meilensteinen](/rest/issues#list-milestones)
* [Erstellen eines Meilensteins](/rest/issues#create-a-milestone)
* [Abrufen eines Meilensteins](/rest/issues#get-a-milestone)
* [Aktualisieren eines Meilensteins](/rest/issues#update-a-milestone)
* [Löschen eines Meilensteins](/rest/issues#delete-a-milestone)

#### Organisationshooks

* [Auflisten von Organisationswebhooks](/rest/orgs#webhooks/#list-organization-webhooks)
* [Erstellen eines Organisationswebhooks](/rest/orgs#webhooks/#create-an-organization-webhook)
* [Abrufen eines Organisationswebhooks](/rest/orgs#webhooks/#get-an-organization-webhook)
* [Aktualisieren eines Organisationswebhooks](/rest/orgs#webhooks/#update-an-organization-webhook)
* [Löschen eines Organisationswebhooks](/rest/orgs#webhooks/#delete-an-organization-webhook)
* [Pingen eines Organisationswebhooks](/rest/orgs#webhooks/#ping-an-organization-webhook)

{% ifversion fpt or ghec %}
#### Organisationseinladungen

* [Auflisten ausstehender Organisationseinladungen](/rest/orgs#list-pending-organization-invitations)
* [Auflisten einer Organisationseinladung](/rest/orgs#create-an-organization-invitation)
* [Auflisten von Organisationseinladungsteams](/rest/orgs#list-organization-invitation-teams) {% endif %}

#### Organisationsmitglieder

* [Auflisten von Organisationsmitgliedern](/rest/orgs#list-organization-members)
* [Überprüfen der Organisationsmitgliedschaft für einen Benutzer](/rest/orgs#check-organization-membership-for-a-user)
* [Entfernen eines Organisationsmitglieds](/rest/orgs#remove-an-organization-member)
* [Abrufen der Organisationsmitgliedschaft für einen Benutzer](/rest/orgs#get-organization-membership-for-a-user)
* [Festlegen der Organisationsmitgliedschaft für einen Benutzer](/rest/orgs#set-organization-membership-for-a-user)
* [Entfernen der Organisationsmitgliedschaft für einen Benutzer](/rest/orgs#remove-organization-membership-for-a-user)
* [Auflisten öffentlicher Organisationsmitglieder](/rest/orgs#list-public-organization-members)
* [Überprüfen der Organisationsmitgliedschaft für einen Benutzer](/rest/orgs#check-public-organization-membership-for-a-user)
* [Festlegen der öffentlichen Organisationsmitgliedschaft für den authentifizierten Benutzer](/rest/orgs#set-public-organization-membership-for-the-authenticated-user)
* [Entfernen der öffentlichen Organisationsmitgliedschaft für den authentifizierten Benutzer](/rest/orgs#remove-public-organization-membership-for-the-authenticated-user)

#### Projektmitarbeiter außerhalb der Organisation

* [Auflisten von externen Projektmitarbeitern für eine Organisation](/rest/orgs#list-outside-collaborators-for-an-organization)
* [Umwandeln eines Organisationsmitglieds in einen externen Projektmitarbeiter](/rest/orgs#convert-an-organization-member-to-outside-collaborator)
* [Entfernen eines externen Projektmitarbeiters aus einer Organisation](/rest/orgs#remove-outside-collaborator-from-an-organization)

{% ifversion ghes %}
#### Pre-Receive-Hooks für eine Organisation

* [Auflisten von Pre-Receive-Hooks für eine Organisation](/enterprise/user/rest/reference/enterprise-admin#list-pre-receive-hooks-for-an-organization)
* [Abrufen eines Pre-Receive-Hooks für eine Organisation](/enterprise/user/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-an-organization)
* [Aktualisieren der Erzwingung eines Pre-Receive-Hooks für eine Organisation](/enterprise/user/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-an-organization)
* [Entfernen der Erzwingung eines Pre-Receive-Hooks für eine Organisation](/enterprise/user/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-an-organization) {% endif %}

#### Teamprojekte einer Organisation

* [Auflisten von Teamprojekten](/rest/teams#list-team-projects)
* [Überprüfen der Teamberechtigungen für ein Projekt](/rest/teams#check-team-permissions-for-a-project)
* [Hinzufügen oder Aktualisieren von Teamprojektberechtigungen](/rest/teams#add-or-update-team-project-permissions)
* [Entfernen eines Projekts aus einem Team](/rest/teams#remove-a-project-from-a-team)

#### Teamrepositorys einer Organisation

* [Auflisten von Teamrepositorys](/rest/teams#list-team-repositories)
* [Überprüfen der Teamberechtigungen für ein Repository](/rest/teams#check-team-permissions-for-a-repository)
* [Hinzufügen oder Aktualisieren von Berechtigungen für Teamrepositorys](/rest/teams#add-or-update-team-repository-permissions)
* [Entfernen eines Repositorys aus einem Team](/rest/teams#remove-a-repository-from-a-team)

{% ifversion fpt or ghec %}
#### Teamsynchronisierung für eine Organisation

* [Auflisten von IdP-Gruppen für ein Team](/rest/teams#list-idp-groups-for-a-team)
* [Erstellen oder Aktualisieren von IdP-Gruppenverbindungen](/rest/teams#create-or-update-idp-group-connections)
* [Auflisten von IdP-Gruppen für eine Organisation](/rest/teams#list-idp-groups-for-an-organization) {% endif %}

#### Organisationsteams

* [Auflisten von Teams](/rest/teams#list-teams)
* [Zusammenstellen eines Teams](/rest/teams#create-a-team)
* [Abrufen eines Teams nach Namen](/rest/teams#get-a-team-by-name)
* [Aktualisieren eines Teams](/rest/teams#update-a-team)
* [Löschen eines Teams](/rest/teams#delete-a-team) {% ifversion fpt or ghec %}
* [Auflisten ausstehender Teameinladungen](/rest/teams#list-pending-team-invitations) {% endif %}
* [Auflisten von Teammitgliedern](/rest/teams#list-team-members)
* [Abrufen der Teammitgliedschaft für einen Benutzer](/rest/teams#get-team-membership-for-a-user)
* [Hinzufügen oder Aktualisieren der Teammitgliedschaft für einen Benutzer](/rest/teams#add-or-update-team-membership-for-a-user)
* [Entfernen der Teammitgliedschaft für einen Benutzer](/rest/teams#remove-team-membership-for-a-user)
* [Auflisten untergeordneter Teams](/rest/teams#list-child-teams)
* [Auflisten von Teams für den authentifizierten Benutzer](/rest/teams#list-teams-for-the-authenticated-user)

#### Organisationen

* [Auflisten von Organisationen](/rest/orgs#list-organizations)
* [Abrufen einer Organisation](/rest/orgs#get-an-organization)
* [Aktualisieren einer Organisation](/rest/orgs#update-an-organization)
* [Auflisten von Organisationsmitgliedschaften für den authentifizierten Benutzer](/rest/orgs#list-organization-memberships-for-the-authenticated-user)
* [Abrufen der Organisationsmitgliedschaft für den authentifizierten Benutzer](/rest/orgs#get-an-organization-membership-for-the-authenticated-user)
* [Aktualisieren der Organisationsmitgliedschaft für den authentifizierten Benutzer](/rest/orgs#update-an-organization-membership-for-the-authenticated-user)
* [Auflisten von Organisationen für den authentifizierten Benutzer](/rest/orgs#list-organizations-for-the-authenticated-user)
* [Auflisten von Organisationen für einen Benutzer](/rest/orgs#list-organizations-for-a-user)

{% ifversion fpt or ghec %}
#### Autorisierungen von Anmeldeinformationen in Organisationen

* [Auflisten von SAML-SSO-Autorisierungen für eine Organisation](/rest/orgs#list-saml-sso-authorizations-for-an-organization)
* [Entfernen einer SAML-SSO-Autorisierung für eine Organisation](/rest/orgs#remove-a-saml-sso-authorization-for-an-organization) {% endif %}

{% ifversion fpt or ghec %}
#### SCIM in Organisationen

* [Auflisten von gemäß SCIM bereitgestellten Identitäten](/rest/scim#list-scim-provisioned-identities)
* [Bereitstellen und Einladen eines SCIM-Benutzers](/rest/scim#provision-and-invite-a-scim-user)
* [Abrufen von SCIM-Bereitstellungsinformationen für einen Benutzer](/rest/scim#get-scim-provisioning-information-for-a-user)
* [Festlegen von SCIM-Informationen für einen bereitgestellten Benutzer](/rest/scim#set-scim-information-for-a-provisioned-user)
* [Aktualisieren eines Attributs für einen SCIM-Benutzer](/rest/scim#update-an-attribute-for-a-scim-user)
* [Löschen eines SCIM-Benutzers aus einer Organisation](/rest/scim#delete-a-scim-user-from-an-organization) {% endif %}

{% ifversion fpt or ghec %}
#### Quellimporte

* [Abrufen eines Importstatus](/rest/migrations#get-an-import-status)
* [Starten eines Imports](/rest/migrations#start-an-import)
* [Aktualisieren eines Imports](/rest/migrations#update-an-import)
* [Abbrechen eines Imports](/rest/migrations#cancel-an-import)
* [Abrufen von Commitautoren](/rest/migrations#get-commit-authors)
* [Zuordnen eines Commitautors](/rest/migrations#map-a-commit-author)
* [Abrufen großer Dateien](/rest/migrations#get-large-files)
* [Aktualisieren der Git LFS-Einstellung](/rest/migrations#update-git-lfs-preference) {% endif %}

#### Projektmitarbeiter

* [Auflisten von Projektmitarbeitern](/rest/projects#list-project-collaborators)
* [Hinzufügen eines Projektmitarbeiters](/rest/projects#add-project-collaborator)
* [Entfernen eines Projektmitarbeiters](/rest/projects#remove-project-collaborator)
* [Abrufen der Projektberechtigung für einen Benutzer](/rest/projects#get-project-permission-for-a-user)

#### Projekte

* [Auflisten von Organisationsprojekten](/rest/projects#list-organization-projects)
* [Erstellen eines Organisationsprojekts](/rest/projects#create-an-organization-project)
* [Abrufen eines Projekts](/rest/projects#get-a-project)
* [Aktualisieren eines Projekts](/rest/projects#update-a-project)
* [Löschen eines Projekts](/rest/projects#delete-a-project)
* [Auflisten von Projektspalten](/rest/projects#list-project-columns)
* [Auflisten einer Projektspalte](/rest/projects#create-a-project-column)
* [Abrufen einer Projektspalte](/rest/projects#get-a-project-column)
* [Aktualisieren einer Projektspalte](/rest/projects#update-a-project-column)
* [Löschen einer Projektspalte](/rest/projects#delete-a-project-column)
* [Auflisten von Projektkarten](/rest/projects#list-project-cards)
* [Erstellen einer Projektkarte](/rest/projects#create-a-project-card)
* [Verschieben einer Projektspalte](/rest/projects#move-a-project-column)
* [Abrufen einer Projektkarte](/rest/projects#get-a-project-card)
* [Aktualisieren einer Projektkarte](/rest/projects#update-a-project-card)
* [Löschen einer Projektkarte](/rest/projects#delete-a-project-card)
* [Verschieben einer Projektkarte](/rest/projects#move-a-project-card)
* [Auflisten von Repositoryprojekten](/rest/projects#list-repository-projects)
* [Erstellen eines Repositoryprojekts](/rest/projects#create-a-repository-project)

#### Pullkommentare

* [Auflisten von Überprüfungskommentaren zu einem Pull Request](/rest/pulls#list-review-comments-on-a-pull-request)
* [Erstellen eines Überprüfungskommentars für einen Pull Request](/rest/pulls#create-a-review-comment-for-a-pull-request)
* [Auflisten von Überprüfungskommentaren in einem Repository](/rest/pulls#list-review-comments-in-a-repository)
* [Abrufen eines Überprüfungskommentars für einen Pull Request](/rest/pulls#get-a-review-comment-for-a-pull-request)
* [Aktualisieren eines Überprüfungskommentars für einen Pull Request](/rest/pulls#update-a-review-comment-for-a-pull-request)
* [Löschen eines Überprüfungskommentars für einen Pull Request](/rest/pulls#delete-a-review-comment-for-a-pull-request)

#### Überprüfungsereignisse für Pull Requests

* [Schließen einer Überprüfung für einen Pull Request](/rest/pulls#dismiss-a-review-for-a-pull-request)
* [Übermitteln einer Überprüfung für einen Pull Request](/rest/pulls#submit-a-review-for-a-pull-request)

#### Überprüfungsanforderungen für Pull Requests

* [Auflisten angeforderter Prüfer für einen Pull Request](/rest/pulls#list-requested-reviewers-for-a-pull-request)
* [Anfordern von Prüfern für einen Pull Request](/rest/pulls#request-reviewers-for-a-pull-request)
* [Entfernen angeforderter Prüfer aus einem Pull Request](/rest/pulls#remove-requested-reviewers-from-a-pull-request)

#### Prüfer von Pull Requests

* [Auflisten von Prüfungen für einen Pull Request](/rest/pulls#list-reviews-for-a-pull-request)
* [Erstellen einer Überprüfung für einen Pull Request](/rest/pulls#create-a-review-for-a-pull-request)
* [Abrufen einer Überprüfung für einen Pull Request](/rest/pulls#get-a-review-for-a-pull-request)
* [Aktualisieren einer Überprüfung für einen Pull Request](/rest/pulls#update-a-review-for-a-pull-request)
* [Auflisten von Kommentaren für eine Überprüfung eines Pull Requests](/rest/pulls#list-comments-for-a-pull-request-review)

#### Pulls

* [Auflisten von Pull Requests](/rest/pulls#list-pull-requests)
* [Erstellen eines Pull Requests](/rest/pulls#create-a-pull-request)
* [Abrufen eines Pull Requests](/rest/pulls#get-a-pull-request)
* [Aktualisieren eines Pull Requests](/rest/pulls#update-a-pull-request)
* [Auflisten von Commits in einem Pull Request](/rest/pulls#list-commits-on-a-pull-request)
* [Auflisten von Pull-Request-Dateien](/rest/pulls#list-pull-requests-files)
* [Überprüfen, ob ein Pull Request zusammengeführt wurde](/rest/pulls#check-if-a-pull-request-has-been-merged)
* [Zusammenführen eines Pull Requests (Schaltfläche „Zusammenführen“)](/rest/pulls#merge-a-pull-request)

#### Reaktionen

* [Löschen einer Reaktion](/rest/reactions)
* [Auflisten von Reaktionen für einen Commitkommentar](/rest/reactions#list-reactions-for-a-commit-comment)
* [Erstellen einer Reaktionen für einen Commitkommentar](/rest/reactions#create-reaction-for-a-commit-comment)
* [Auflisten von Reaktionen für ein Issue](/rest/reactions#list-reactions-for-an-issue)
* [Erstellen einer Reaktionen für ein Issue](/rest/reactions#create-reaction-for-an-issue)
* [Auflisten von Reaktionen für einen Issuekommentar](/rest/reactions#list-reactions-for-an-issue-comment)
* [Erstellen einer Reaktion für einen Issuekommentar](/rest/reactions#create-reaction-for-an-issue-comment)
* [Auflisten von Reaktionen für einen Überprüfungskommentar für einen Pull Request](/rest/reactions#list-reactions-for-a-pull-request-review-comment)
* [Erstellen einer Reaktion für einen Überprüfungskommentar für einen Pull Request](/rest/reactions#create-reaction-for-a-pull-request-review-comment)
* [Auflisten von Reaktionen für einen Teamdiskussionskommentar](/rest/reactions#list-reactions-for-a-team-discussion-comment)
* [Erstellen einer Reaktion für einen Teamdiskussionskommentar](/rest/reactions#create-reaction-for-a-team-discussion-comment)
* [Auflisten von Reaktionen für eine Teamdiskussion](/rest/reactions#list-reactions-for-a-team-discussion)
* [Erstellen einer Reaktion auf eine Teamdiskussion](/rest/reactions#create-reaction-for-a-team-discussion)
* [Löschen einer Reaktion für einen Commitkommentar](/rest/reactions#delete-a-commit-comment-reaction)
* [Löschen einer Issue-Reaktion](/rest/reactions#delete-an-issue-reaction)
* [Löschen einer Reaktion auf einen Commitkommentar](/rest/reactions#delete-an-issue-comment-reaction)
* [Löschen einer Reaktion für einen Pull-Request-Kommentar](/rest/reactions#delete-a-pull-request-comment-reaction)
* [Löschen einer Teamdiskussionsreaktion](/rest/reactions#delete-team-discussion-reaction)
* [Löschen einer Reaktion auf einen Teamdiskussionskommentar](/rest/reactions#delete-team-discussion-comment-reaction)

#### Repositorys

* [Auflisten von Organisationsrepositorys](/rest/repos#list-organization-repositories)
* [Erstellen eines Repositorys für den authentifizierten Benutzer](/rest/repos#create-a-repository-for-the-authenticated-user)
* [Abrufen eines Repositorys](/rest/repos#get-a-repository)
* [Aktualisieren eines Repositorys](/rest/repos#update-a-repository)
* [Löschen eines Repositorys](/rest/repos#delete-a-repository)
* [Vergleichen von zwei Commits](/rest/commits#compare-two-commits)
* [Auflisten von Mitwirkenden eines Repositorys](/rest/repos#list-repository-contributors)
* [Auflisten von Forks](/rest/repos#list-forks)
* [Erstellen eines Forks](/rest/repos#create-a-fork)
* [Auflisten von Repositorysprachen](/rest/repos#list-repository-languages)
* [Auflisten von Repositorytags](/rest/repos#list-repository-tags)
* [Auflisten von Repositoryteams](/rest/repos#list-repository-teams)
* [Übertragen eines Repositorys](/rest/repos#transfer-a-repository)
* [Auflisten öffentlicher Repositorys](/rest/repos#list-public-repositories)
* [Auflisten von Repositorys für den authentifizierten Benutzer](/rest/repos#list-repositories-for-the-authenticated-user)
* [Auflisten von Repositorys für einen Benutzer](/rest/repos#list-repositories-for-a-user)
* [Erstellen eines Repositorys mithilfe einer Repositoryvorlage](/rest/repos#create-repository-using-a-repository-template)

#### Repositoryaktivität

* [Auflisten von Stargazern](/rest/activity#list-stargazers)
* [Auflisten von Watchern](/rest/activity#list-watchers)
* [Auflisten der von einem Benutzer markierten Repositorys](/rest/activity#list-repositories-starred-by-a-user)
* [Überprüfen, ob ein Repository vom authentifizierten Benutzer markiert ist](/rest/activity#check-if-a-repository-is-starred-by-the-authenticated-user)
* [Markieren eines Repositorys für den authentifizierten Benutzer](/rest/activity#star-a-repository-for-the-authenticated-user)
* [Aufheben der Markierung eines Repositorys für den authentifizierten Benutzer](/rest/activity#unstar-a-repository-for-the-authenticated-user)
* [Auflisten von Repositorys, die von einem Benutzer überwacht werden](/rest/activity#list-repositories-watched-by-a-user)

{% ifversion fpt or ghec %}
#### Automatisierte Sicherheitskorrekturen für Repositorys

* [Aktivieren automatisierter Sicherheitskorrekturen](/rest/repos#enable-automated-security-fixes)
* [Deaktivieren automatisierter Sicherheitskorrekturen](/rest/repos#disable-automated-security-fixes) {% endif %}

#### Repositorybranches

* [Auflisten von Branches](/rest/branches#list-branches)
* [Abrufen von Branches](/rest/branches#get-a-branch)
* [Abrufen von Branchschutz](/rest/branches#get-branch-protection)
* [Aktualisieren von Branchschutz](/rest/branches#update-branch-protection)
* [Löschen von Branchschutz](/rest/branches#delete-branch-protection)
* [Abrufen von Administratorbranchschutz](/rest/branches#get-admin-branch-protection)
* [Festlegen von Administratorbranchschutz](/rest/branches#set-admin-branch-protection)
* [Löschen von Administratorbranchschutz](/rest/branches#delete-admin-branch-protection)
* [Abrufen von Schutz für Pull-Request-Überprüfungen](/rest/branches#get-pull-request-review-protection)
* [Aktualisieren von Schutz für Pull-Request-Überprüfungen](/rest/branches#update-pull-request-review-protection)
* [Löschen von Schutz für Pull-Request-Überprüfungen](/rest/branches#delete-pull-request-review-protection)
* [Abrufen von Schutz für Commitsignaturen](/rest/branches#get-commit-signature-protection)
* [Erstellen von Schutz für Commitsignaturen](/rest/branches#create-commit-signature-protection)
* [Löschen von Schutz für Commitsignaturen](/rest/branches#delete-commit-signature-protection)
* [Abrufen von Schutz für Statusüberprüfungen](/rest/branches#get-status-checks-protection)
* [Aktualisieren von Schutz für Statusüberprüfungen](/rest/branches#update-status-check-protection)
* [Entfernen von Schutz für Statusüberprüfungen](/rest/branches#remove-status-check-protection)
* [Abrufen aller Statusüberprüfungskontexte](/rest/branches#get-all-status-check-contexts)
* [Hinzufügen von Statusüberprüfungskontexten](/rest/branches#add-status-check-contexts)
* [Festlegen von Statusüberprüfungskontexten](/rest/branches#set-status-check-contexts)
* [Entfernen von Statusüberprüfungskontexten](/rest/branches#remove-status-check-contexts)
* [Abrufen von Zugriffseinschränkungen](/rest/branches#get-access-restrictions)
* [Löschen von Zugriffseinschränkungen](/rest/branches#delete-access-restrictions)
* [Auflisten von Teams mit Zugriff auf den geschützten Branch](/rest/repos#list-teams-with-access-to-the-protected-branch)
* [Hinzufügen von Teamzugriffseinschränkungen](/rest/branches#add-team-access-restrictions)
* [Festlegen von Teamzugriffseinschränkungen](/rest/branches#set-team-access-restrictions)
* [Entfernen von Teamzugriffseinschränkungen](/rest/branches#remove-team-access-restrictions)
* [Auflisten von Benutzereinschränkungen von geschützten Branches](/rest/repos#list-users-with-access-to-the-protected-branch)
* [Hinzufügen von Benutzerzugriffseinschränkungen](/rest/branches#add-user-access-restrictions)
* [Festlegen von Benutzerzugriffseinschränkungen](/rest/branches#set-user-access-restrictions)
* [Entfernen von Benutzerzugriffseinschränkungen](/rest/branches#remove-user-access-restrictions)
* [Zusammenführen einer Verzweigung](/rest/branches#merge-a-branch)

#### Projektmitarbeiter für Repositorys

* [Auflisten von Projektmitarbeitern für Repositorys](/rest/collaborators#list-repository-collaborators)
* [Überprüfen, ob ein Benutzer ein Projektmitarbeiter für Repositorys ist](/rest/collaborators#check-if-a-user-is-a-repository-collaborator)
* [Hinzufügen eines Projektmitarbeiters für Repositorys](/rest/collaborators#add-a-repository-collaborator)
* [Entfernen eines Projektmitarbeiters für Repositorys](/rest/collaborators#remove-a-repository-collaborator)
* [Abrufen von Repositoryberechtigungen für einen Benutzer](/rest/collaborators#get-repository-permissions-for-a-user)

#### Commitkommentare für Repositorys

* [Auflisten von Commitkommentaren für ein Repository](/rest/commits#list-commit-comments-for-a-repository)
* [Abrufen eines Commitkommentars](/rest/commits#get-a-commit-comment)
* [Aktualisieren eines Commitkommentars](/rest/commits#update-a-commit-comment)
* [Löschen eines Commitkommentars](/rest/commits#delete-a-commit-comment)
* [Auflisten von Commitkommentaren](/rest/commits#list-commit-comments)
* [Erstellen eines Commitkommentars](/rest/commits#create-a-commit-comment)

#### Repositorycommits

* [Auflisten von Commits](/rest/commits#list-commits)
* [Abrufen eines Commits](/rest/commits#get-a-commit)
* [Auflisten von Branches für Head-Commit](/rest/commits#list-branches-for-head-commit)
* [Auflisten von mit dem Commit verknüpften Pull Requests](/rest/repos#list-pull-requests-associated-with-commit)

#### Repositorycommunity

* [Abrufen der Verhaltensregeln für ein Repository](/rest/codes-of-conduct#get-the-code-of-conduct-for-a-repository) {% ifversion fpt or ghec %}
* [Abrufen von Communityprofilmetriken](/rest/metrics#get-community-profile-metrics) {% endif %}

#### Repositoryinhalte

* [Herunterladen eines Repositoryarchivs](/rest/repos#download-a-repository-archive)
* [Abrufen von Repositoryinhalt](/rest/repos#get-repository-content)
* [Erstellen oder Aktualisieren von Dateiinhalten](/rest/repos#create-or-update-file-contents)
* [Löschen von Dateien](/rest/repos#delete-a-file)
* [Abrufen der Infodatei eines Repositorys](/rest/repos#get-a-repository-readme)
* [Abrufen der Lizenz für ein Repository](/rest/licenses#get-the-license-for-a-repository)

#### Repositoryereignisdispatches

* [Erstellen eines Repositorydispatchereignisses](/rest/repos#create-a-repository-dispatch-event)

#### Repositoryhooks

* [Auflisten von Repositorywebhooks](/rest/webhooks#list-repository-webhooks)
* [Erstellen eines Repositorywebhooks](/rest/webhooks#create-a-repository-webhook)
* [Abrufen eines Repositorywebhooks](/rest/webhooks#get-a-repository-webhook)
* [Aktualisieren eines Repositorywebhooks](/rest/webhooks#update-a-repository-webhook)
* [Löschen eines Repositorywebhooks](/rest/webhooks#delete-a-repository-webhook)
* [Pingen eines Repositorywebhooks](/rest/webhooks#ping-a-repository-webhook)
* [Testen des Pushrepositorywebhooks](/rest/repos#test-the-push-repository-webhook)

#### Repositoryeinladungen

* [Auflisten von Repositoryeinladungen](/rest/collaborators#list-repository-invitations)
* [Aktualisieren einer Repositoryeinladung](/rest/collaborators#update-a-repository-invitation)
* [Löschen einer Repositoryeinladung](/rest/collaborators#delete-a-repository-invitation)
* [Auflisten von Repositoryeinladungen für den authentifizierten Benutzer](/rest/collaborators#list-repository-invitations-for-the-authenticated-user)
* [Akzeptieren einer Repositoryeinladung](/rest/collaborators#accept-a-repository-invitation)
* [Ablehnen einer Repositoryeinladung](/rest/collaborators#decline-a-repository-invitation)

#### Repositoryschlüssel

* [Auflisten von Bereitstellungsschlüsseln](/rest/deployments#list-deploy-keys)
* [Erstellen eines Bereitstellungsschlüssels](/rest/deployments#create-a-deploy-key)
* [Abrufen eines Bereitstellungsschlüssels](/rest/deployments#get-a-deploy-key)
* [Löschen eines Bereitstellungsschlüssels](/rest/deployments#delete-a-deploy-key)

#### Repositoryseiten

* [Abrufen einer GitHub Pages-Website](/rest/pages#get-a-github-pages-site)
* [Erstellen einer GitHub Pages-Website](/rest/pages#create-a-github-pages-site)
* [Aktualisieren von Informationen zu einer GitHub Pages-Website](/rest/pages#update-information-about-a-github-pages-site)
* [Löschen einer GitHub Pages-Website](/rest/pages#delete-a-github-pages-site)
* [Auflisten von GitHub Pages-Builds](/rest/pages#list-github-pages-builds)
* [Anfordern eines GitHub Pages-Builds](/rest/pages#request-a-github-pages-build)
* [Abrufen eines GitHub Pages-Builds](/rest/pages#get-github-pages-build)
* [Abrufen des aktuellen Pages-Builds](/rest/pages#get-latest-pages-build)

{% ifversion ghes %}
#### Pre-Receive-Hooks für Repository

* [Auflisten von Pre-Receive-Hooks für ein Repository](/enterprise/user/rest/enterprise-admin#list-pre-receive-hooks-for-a-repository)
* [Abrufen eines Pre-Receive-Hooks für ein Repository](/enterprise/user/rest/enterprise-admin#get-a-pre-receive-hook-for-a-repository)
* [Aktualisieren der Erzwingung eines Pre-Receive-Hooks für ein Repository](/enterprise/user/rest/enterprise-admin#update-pre-receive-hook-enforcement-for-a-repository)
* [Entfernen der Erzwingung eines Pre-Receive-Hooks für ein Repository](/enterprise/user/rest/enterprise-admin#remove-pre-receive-hook-enforcement-for-a-repository) {% endif %}

#### Repositoryreleases

* [Releases auflisten](/rest/repos#list-releases)
* [Erstellen eines Release](/rest/repos#create-a-release)
* [Abrufen eines Release](/rest/repos#get-a-release)
* [Aktualisieren eines Release](/rest/repos#update-a-release)
* [Löschen eines Release](/rest/repos#delete-a-release)
* [Auflisten von Releaseressourcen](/rest/repos#list-release-assets)
* [Abrufen einer Releaseressource](/rest/repos#get-a-release-asset)
* [Aktualisieren einer Releaseressource](/rest/repos#update-a-release-asset)
* [Löschen einer Releaseressource](/rest/repos#delete-a-release-asset)
* [Abrufen des aktuellen Release](/rest/repos#get-the-latest-release)
* [Abrufen eines Release nach Tagnamen](/rest/repos#get-a-release-by-tag-name)

#### Repositorystatistiken

* [Abrufen der wöchentlichen Commitaktivität](/rest/metrics#get-the-weekly-commit-activity)
* [Abrufen des letzten Jahres der Commitaktivität](/rest/metrics#get-the-last-year-of-commit-activity)
* [Abrufen aller Commitaktivitäten für Mitwirkende](/rest/metrics#get-all-contributor-commit-activity)
* [Abrufen der wöchentlichen Commitanzahl](/rest/metrics#get-the-weekly-commit-count)
* [Abrufen der stündlichen Commitanzahl für jeden Tag](/rest/metrics#get-the-hourly-commit-count-for-each-day)

{% ifversion fpt or ghec %}
#### Sicherheitsrisikowarnungen für Repositorys

* [Aktivieren von Sicherheitsrisikowarnungen](/rest/repos#enable-vulnerability-alerts)
* [Deaktivieren von Sicherheitsrisikowarnungen](/rest/repos#disable-vulnerability-alerts) {% endif %}

#### Root

* [Stammendpunkt](/rest#root-endpoint)
* [Emojis](/rest/emojis#emojis)
* [Abrufen des Ratenbegrenzungsstatus für den authentifizierten Benutzer](/rest/rate-limit#get-rate-limit-status-for-the-authenticated-user)

#### Suche

* [Durchsuchen von Code](/rest/search#search-code)
* [Durchsuchen von Commits](/rest/search#search-commits)
* [Durchsuchen von Bezeichnungen](/rest/search#search-labels)
* [Durchsuchen von Repositorys](/rest/search#search-repositories)
* [Durchsuchen von Themen](/rest/search#search-topics)
* [Benutzer suchen](/rest/search#search-users)

#### Status

* [Abrufen des kombinierten Status für einen bestimmten Verweis](/rest/commits#get-the-combined-status-for-a-specific-reference)
* [Auflisten von Commitstatus für einen Verweis](/rest/commits#list-commit-statuses-for-a-reference)
* [Erstellen eines Commitstatus](/rest/commits#create-a-commit-status)

#### Teamdiskussionen

* [Auflisten von Diskussionen](/rest/teams#list-discussions)
* [Erstellen einer Diskussion](/rest/teams#create-a-discussion)
* [Abrufen einer Diskussion](/rest/teams#get-a-discussion)
* [Aktualisieren einer Diskussion](/rest/teams#update-a-discussion)
* [Löschen einer Diskussion](/rest/teams#delete-a-discussion)
* [Auflisten von Diskussionskommentaren](/rest/teams#list-discussion-comments)
* [Erstellen eines Diskussionskommentars](/rest/teams#create-a-discussion-comment)
* [Abrufen eines Diskussionskommentars](/rest/teams#get-a-discussion-comment)
* [Aktualisieren eines Diskussionskommentars](/rest/teams#update-a-discussion-comment)
* [Löschen eines Diskussionskommentars](/rest/teams#delete-a-discussion-comment)

#### Themen

* [Abrufen aller Repositorythemen](/rest/repos#get-all-repository-topics)
* [Ersetzen aller Repositorythemen](/rest/repos#replace-all-repository-topics)

{% ifversion fpt or ghec %}
#### Verkehr

* [Abrufen von Repositoryklonen](/rest/metrics#get-repository-clones)
* [Abrufen der Top-Empfehlungspfade](/rest/metrics#get-top-referral-paths)
* [Abrufen der Top-Empfehlungsquellen](/rest/metrics#get-top-referral-sources)
* [Abrufen von Seitenansichten](/rest/metrics#get-page-views) {% endif %}

{% ifversion fpt or ghec %}
#### Benutzerblockierung

* [Auflisten der vom authentifizierten Benutzer blockierten Benutzer](/rest/users#list-users-blocked-by-the-authenticated-user)
* [Überprüfen, ob ein Benutzer vom authentifizierten Benutzer blockiert wurde](/rest/users#check-if-a-user-is-blocked-by-the-authenticated-user)
* [Auflisten der von einer Organisation blockierten Benutzer](/rest/orgs#list-users-blocked-by-an-organization)
* [Überprüfen, ob ein Benutzer von einer Organisation blockiert wurde](/rest/orgs#check-if-a-user-is-blocked-by-an-organization)
* [Blockieren eines Benutzers aus einer Organisation](/rest/orgs#block-a-user-from-an-organization)
* [Aufheben der Blockierung eines Benutzers aus einer Organisation](/rest/orgs#unblock-a-user-from-an-organization)
* [Sperren eines Benutzers](/rest/users#block-a-user)
* [Aufheben der Blockierung eines Benutzers](/rest/users#unblock-a-user) {% endif %}

{% ifversion fpt or ghes or ghec %}
#### Benutzer-E-Mails

{% ifversion fpt or ghec %}
* [Festlegen der primären E-Mail-Sichtbarkeit für den authentifizierten Benutzer](/rest/users#set-primary-email-visibility-for-the-authenticated-user) {% endif %}
* [Auflisten von E-Mail-Adressen für den authentifizierten Benutzer](/rest/users#list-email-addresses-for-the-authenticated-user)
* [Hinzufügen von E-Mail-Adresse(n)](/rest/users#add-an-email-address-for-the-authenticated-user)
* [Löschen von E-Mail-Adresse(n)](/rest/users#delete-an-email-address-for-the-authenticated-user)
* [Auflisten öffentlicher E-Mail-Adressen für den authentifizierten Benutzer](/rest/users#list-public-email-addresses-for-the-authenticated-user) {% endif %}

#### Benutzerfollower

* [Auflisten der Follower eines Benutzers](/rest/users#list-followers-of-a-user)
* [Auflisten der Personen, denen ein Benutzer folgt](/rest/users#list-the-people-a-user-follows)
* [Überprüfen, ob der authentifizierte Benutzer einer Person folgt](/rest/users#check-if-a-person-is-followed-by-the-authenticated-user)
* [Einem Benutzer folgen](/rest/users#follow-a-user)
* [Einem Benutzer nicht mehr folgen](/rest/users#unfollow-a-user)
* [Überprüfen, ob ein Benutzer einem anderen Benutzer folgt](/rest/users#check-if-a-user-follows-another-user)

#### Benutzer-GPG-Schlüssel

* [Auflisten von GPG-Schlüsseln für den authentifizierten Benutzer](/rest/users#list-gpg-keys-for-the-authenticated-user)
* [Erstellen eines GPG-Schlüssels für den authentifizierten Benutzer](/rest/users#create-a-gpg-key-for-the-authenticated-user)
* [Festlegen eines GPG-Schlüssels für den authentifizierten Benutzer](/rest/users#get-a-gpg-key-for-the-authenticated-user)
* [Löschen eines GPG-Schlüssels für den authentifizierten Benutzer](/rest/users#delete-a-gpg-key-for-the-authenticated-user)
* [Auflisten von GPG-Schlüsseln für einen Benutzer](/rest/users#list-gpg-keys-for-a-user)

#### Öffentliche Schlüssel für Benutzer

* [Auflisten der öffentlichen SSH-Schlüssel für den authentifizierten Benutzer](/rest/users#list-public-ssh-keys-for-the-authenticated-user)
* [Erstellen eines öffentlichen SSH-Schlüssels für den authentifizierten Benutzer](/rest/users#create-a-public-ssh-key-for-the-authenticated-user)
* [Abrufen eines öffentlichen SSH-Schlüssels für den authentifizierten Benutzer](/rest/users#get-a-public-ssh-key-for-the-authenticated-user)
* [Löschen eines öffentlichen SSH-Schlüssels für den authentifizierten Benutzer](/rest/users#delete-a-public-ssh-key-for-the-authenticated-user)
* [Auflisten öffentlicher Schlüssel für einen Benutzer](/rest/users#list-public-keys-for-a-user)

#### Benutzer

* [Abrufen des authentifizierten Benutzers](/rest/users#get-the-authenticated-user)
* [Auflisten der mit dem Benutzerzugriffstoken zugänglichen App-Installationen](/rest/apps#list-app-installations-accessible-to-the-user-access-token) {% ifversion fpt or ghec %}
* [Auflisten von Abonnements für den authentifizierten Benutzer](/rest/apps#list-subscriptions-for-the-authenticated-user) {% endif %}
* [Auflisten von Benutzern](/rest/users#list-users)
* [Abrufen eines Benutzers](/rest/users#get-a-user)

{% ifversion fpt or ghec %}
#### Workflowausführungen

* [Auflisten der Workflowausführungen für ein Repository](/rest/actions#list-workflow-runs-for-a-repository)
* [Abrufen einer Workflowausführung](/rest/actions#get-a-workflow-run)
* [Abbrechen einer Workflowausführung](/rest/actions#cancel-a-workflow-run)
* [Herunterladen von Workflowausführungsprotokollen](/rest/actions#download-workflow-run-logs)
* [Löschen von Workflowausführungsprotokollen](/rest/actions#delete-workflow-run-logs)
* [Erneutes Ausführen eines Workflows](/rest/actions#re-run-a-workflow)
* [Auflisten von Workflowausführungen](/rest/actions#list-workflow-runs)
* [Abrufen der Verwendung von Workflowausführungen](/rest/actions#get-workflow-run-usage) {% endif %}

{% ifversion fpt or ghec %}
#### Workflows

* [Auflisten von Repositoryworkflows](/rest/actions#list-repository-workflows)
* [Abrufen eines Workflows](/rest/actions#get-a-workflow)
* [Abrufen der Workflowverwendung](/rest/actions#get-workflow-usage) {% endif %}

## Weiterführende Themen

- [Informationen zur Authentifizierung in {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github#githubs-token-formats)

