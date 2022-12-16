---
title: Erstellen einer GitHub-App aus einem Manifest
intro: 'Ein GitHub-App-Manifest ist eine vorkonfigurierte GitHub-App, die du für alle Benutzer*innen freigeben kannst, die deine App in ihren persönlichen Repositorys nutzen möchten. Der Manifestflow ermöglicht es Benutzer*innen, schnell eine GitHub-App zu erstellen, zu installieren und zu erweitern, ohne die App zu registrieren oder die Registrierung mit dem gehosteten App-Code zu verbinden.'
redirect_from:
  - /apps/building-github-apps/creating-github-apps-from-a-manifest
  - /developers/apps/creating-a-github-app-from-a-manifest
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: App creation manifest flow
ms.openlocfilehash: 9ff6fa93e0f31de16e6ee2d96f1d7665742151d3
ms.sourcegitcommit: 6bd8fe6d49214743f82fa2dc71847c241f140c87
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135709'
---
## Informationen zu Manifesten für GitHub-Apps

Benutzer*innen, die eine GitHub-App aus einem Manifest erstellen möchten, müssen nur einer URL folgen und die App benennen. Das Manifest enthält die Berechtigungen, Ereignisse und die Webhook-URL, die für die automatische Registrierung der App erforderlich sind. Der Manifestflow erstellt die Registrierung der GitHub-App und ruft das Webhookgeheimnis, den privaten Schlüssel (PEM-Datei) und die ID der GitHub-App ab. Die Person, die die App aus dem Manifest erstellt, wird zu ihrem Besitzer und kann die [Konfigurationseinstellungen der App bearbeiten](/apps/managing-github-apps/modifying-a-github-app/), sie löschen oder einer anderen Person auf GitHub übertragen.

Mithilfe von [Probot](https://probot.github.io/) kannst du erste Erfahrungen mit Manifesten für GitHub-Apps sammeln oder eine Beispielimplementierung anzeigen. Weitere Informationen findest du unter [Implementieren des Manifestflows für GitHub-Apps mithilfe von Probot](#using-probot-to-implement-the-github-app-manifest-flow).

In den folgenden Szenarios können Manifeste für GitHub-Apps zum Erstellen von vorkonfigurierten Apps nützlich sein:

* Du möchtest neuen Teammitgliedern den Einstieg in die Entwicklung von GitHub-Apps erleichtern.
* Du möchtest anderen Personen die Erweiterung einer GitHub-App mithilfe von GitHub-APIs ermöglichen, ohne dass diese die App konfigurieren müssen.
* Du möchtest Referenzentwürfe für GitHub-Apps erstellen und diese für die GitHub-Community freigeben.
* Du möchtest sicherstellen, dass die in Entwicklungs- und Produktionsumgebungen bereitgestellten GitHub-Apps dieselbe Konfiguration aufweisen.
* Du möchtest Bearbeitungen von Konfigurationen einer GitHub-App nachverfolgen.

## Implementieren des Manifestflows für GitHub-Apps

Der Manifestflow für GitHub-Apps verwendet ähnlich wie der [OAuth-Flow](/apps/building-oauth-apps/authorizing-oauth-apps/) einen Handshake-Prozess. Der Flow verwendet ein Manifest zur [Registrierung einer GitHub-App](/apps/building-github-apps/creating-a-github-app/) und erhält einen temporären `code`-Parameter, um den privaten Schlüssel, das Webhookgeheimnis und die ID der App abzurufen.

{% note %}

**Hinweis**: Alle drei Schritte des Manifestflows für GitHub-Apps müssen innerhalb von einer Stunde ausgeführt werden.

{% endnote %}

Führe die folgenden Schritte aus, um den Manifestflow für GitHub-Apps zu implementieren:

1. Leite Personen zu GitHub um, damit diese eine neue GitHub-App erstellen.
1. GitHub leitet diese Personen zurück zu deiner Website.
1. Du tauschst den temporären Code zum Abrufen der App-Konfiguration aus.

### 1. Umleiten von Benutzer*innen zu GitHub, damit diese eine neue GitHub-App erstellen

Stelle Personen, die du zum Erstellen einer neuen GitHub-App weiterleiten möchtest, [einen Link](#examples) bereit, der eine `POST`-Anforderung für ein persönliches Konto an `https://github.com/settings/apps/new` bzw. für ein Organisationskonto an `https://github.com/organizations/ORGANIZATION/settings/apps/new` sendet. Ersetze `ORGANIZATION` durch den Namen des Organisationskontos, in dem die App erstellt werden soll.

Stelle die [Manifestparameter für GitHub-Apps](#github-app-manifest-parameters) als JSON-Zeichenfolge in einem Parameter mit dem Namen `manifest` bereit. Für zusätzliche Sicherheit kannst du auch den [Parameter](#parameters) `state` einschließen.

Die Person, die die App erstellt, wird auf eine GitHub-Seite mit einem Eingabefeld umgeleitet, in dem der Name der App, den du im `manifest`-Parameter bereitgestellt hast, bearbeitet werden kann. Enthält der `manifest`-Parameter keinen `name`-Wert, kann in diesem Feld ein beliebiger Name eingetragen werden.

![Erstellen eines Manifests für GitHub-Apps](/assets/images/github-apps/create-github-app-manifest.png)

#### Manifestparameter für GitHub-Apps

 Name | type | BESCHREIBUNG
-----|------|-------------
`name` | `string` | Name der GitHub-App.
`url` | `string` | **Erforderlich.** Homepage deiner GitHub-App.
`hook_attributes` | `object` | Konfiguration des Webhooks der GitHub-App.
`redirect_url` | `string` | Vollständige URL, an die Benutzer*innen umgeleitet werden, nachdem sie die Erstellung einer GitHub-App aus einem Manifest initiiert haben.
`callback_urls` | `array of strings` | Vollständige URL, an die Benutzer*innen nach der Autorisierung einer Installation umgeleitet werden. Du kannst bis zu zehn Rückruf-URLs bereitstellen.
`setup_url` | `string` | Vollständige URL, an die Benutzer nach der Installation der GitHub-App umgeleitet werden, wenn eine zusätzliche Einrichtung erforderlich ist.
`description` | `string` | Beschreibung der GitHub-App.
`public` | `boolean` | Lege diesen Parameter auf `true` fest, wenn deine GitHub-App öffentlich verfügbar sein soll, oder auf `false`, wenn nur der Besitzer der App darauf zugreifen darf.
`default_events` | `array` | Liste der [Ereignisse](/webhooks/event-payloads), die die GitHub-App abonniert.
`default_permissions` | `object` | [Berechtigungen](/rest/reference/permissions-required-for-github-apps), die von der GitHub-App benötigt werden. Das Format des Objekts verwendet den Berechtigungsnamen für den Schlüssel (z. B. `issues`) und den Zugriffstyp für den Wert (z. B. `write`).

Das `hook_attributes`-Objekt verfügt über den folgenden Schlüssel:

Name | type | BESCHREIBUNG
-----|------|-------------
`url` | `string` | **Erforderlich.** URL des Servers, an den die `POST`-Anforderungen des Webhooks gesendet werden.
`active` | `boolean` | Stellt Ereignisdetails bereit, wenn dieser Hook ausgelöst wird. Der Standardwert lautet TRUE.

#### Parameter

 Name | type | BESCHREIBUNG
-----|------|-------------
`state`| `string` | {% data reusables.apps.state_description %}

#### Beispiele

In diesem Beispiel wird ein Formular auf einer Webseite mit einer Schaltfläche verwendet, die die `POST`-Anforderung für ein persönliches Konto auslöst:

```html
<form action="https://github.com/settings/apps/new?state=abc123" method="post">
 Create a GitHub App Manifest: <input type="text" name="manifest" id="manifest"><br>
 <input type="submit" value="Submit">
</form>

<script>
 input = document.getElementById("manifest")
 input.value = JSON.stringify({
   "name": "Octoapp",
   "url": "https://www.example.com",
   "hook_attributes": {
     "url": "https://example.com/github/events",
   },
   "redirect_url": "https://example.com/redirect",
   "callback_urls": [
     "https://example.com/callback"
   ],
   "public": true,
   "default_permissions": {
     "issues": "write",
     "checks": "write"
   },
   "default_events": [
     "issues",
     "issue_comment",
     "check_suite",
     "check_run"
   ]
 })
</script>
```

In diesem Beispiel wird ein Formular auf einer Webseite mit einer Schaltfläche verwendet, die die `POST`-Anforderung für ein Organisationskonto auslöst. Ersetze `ORGANIZATION` durch den Namen des Organisationskontos, in dem du die App erstellen möchtest.

```html
<form action="https://github.com/organizations/ORGANIZATION/settings/apps/new?state=abc123" method="post">
 Create a GitHub App Manifest: <input type="text" name="manifest" id="manifest"><br>
 <input type="submit" value="Submit">
</form>

<script>
 input = document.getElementById("manifest")
 input.value = JSON.stringify({
   "name": "Octoapp",
   "url": "https://www.example.com",
   "hook_attributes": {
     "url": "https://example.com/github/events",
   },
   "redirect_url": "https://example.com/redirect",
   "callback_urls": [
     "https://example.com/callback"
   ],
   "public": true,
   "default_permissions": {
     "issues": "write",
     "checks": "write"
   },
   "default_events": [
     "issues",
     "issue_comment",
     "check_suite",
     "check_run"
   ]
 })
</script>
```

### 2. GitHub leitet die Benutzer*innen zurück zu deiner Website

Durch Klicken auf **GitHub-App erstellen** wird die Person von GitHub wieder zu `redirect_url` mit einem temporären `code`-Parameter in einem Codeparameter zurückgeleitet. Beispiel:

    https://example.com/redirect?code=a180b1a3d263c81bc6441d7b990bae27d4c10679

Wenn du einen `state`-Parameter bereitgestellt hast, wird dieser auch in `redirect_url` angezeigt. Beispiel:

    https://example.com/redirect?code=a180b1a3d263c81bc6441d7b990bae27d4c10679&state=abc123

### 3. Austauschen des temporären Codes zum Abrufen der App-Konfiguration

Sende den temporären `code`-Parameter in einer `POST`-Anforderung an den Endpunkt [Erstellen einer GitHub-App aus einem Manifest](/rest/reference/apps#create-a-github-app-from-a-manifest), um den Handshake-Prozess abzuschließen. Die Antwort enthält `id` (die ID der GitHub-App), `pem` (den privaten Schlüssel) und `webhook_secret`. GitHub erstellt automatisch ein Webhookgeheimnis für die App. Du kannst diese Werte in Umgebungsvariablen auf dem Server der App speichern. Verwendet deine App zum Speichern der Umgebungsvariablen z. B. [dotenv](https://github.com/bkeepers/dotenv), speicherst du die Variablen in der `.env`-Datei deiner App.

Dieser Schritt des Manifestflows für GitHub-Apps muss innerhalb von einer Stunde abgeschlossen werden.

{% note %}

**Hinweis**: Dieser Endpunkt weist eine Ratenbegrenzung auf. Weitere Informationen zum Abrufen des Status deiner Ratenbegrenzung findest du unter [Ratenbegrenzungen](/rest/reference/rate-limit).

{% endnote %}

    POST /app-manifests/{code}/conversions

Weitere Informationen zur Antwort des Endpunkts findest du unter [Erstellen einer GitHub-App aus einem Manifest](/rest/reference/apps#create-a-github-app-from-a-manifest).

Sobald der letzte Schritt des Manifestflows abgeschlossen ist, ist die Person, die die App aus dem Manifest erstellt hat, der Besitzer einer registrierten GitHub-App und kann diese in einem beliebigen persönlichen Repository installieren. Sie kann die App mithilfe der GitHub-APIs erweitern, den Besitz an eine andere Person übertragen oder die App jederzeit löschen.

## Implementieren des Manifestflows für GitHub-Apps mithilfe von Probot

[Probot](https://probot.github.io/) ist ein Framework basierend auf [Node.js](https://nodejs.org/), das eine Vielzahl der von allen GitHub-Apps benötigten Aufgaben ausführt, wie etwa die Überprüfung von Webhooks oder die Ausführung von Authentifizierungen. Probot implementiert den [Manifestflow für GitHub-Apps](#implementing-the-github-app-manifest-flow) und erleichtert die Erstellung von Referenzentwürfen für GitHub-Apps und ihre Freigabe für die GitHub-Community.

Führe die folgenden Schritte aus, um eine Probot-App zur Freigabe zu erstellen:

1. [Erstelle eine neue GitHub-App](https://probot.github.io/docs/development/#generating-a-new-app).
1. Öffne das erstellte Projekt, und passe die Einstellungen in der Datei `app.yml` an. Diese Einstellungen in `app.yml` verwendet Probot als [Manifestparameter für GitHub-Apps](#github-app-manifest-parameters).
1. Füge den benutzerdefinierten Code deiner Anwendung hinzu.
1. [Führe die GitHub-App lokal aus](https://probot.github.io/docs/development/#running-the-app-locally), oder [hoste sie an einem beliebigen Standort](#hosting-your-app-with-glitch). Unter der URL der gehosteten App befindet sich eine Webseite mit der Schaltfläche **GitHub-App registrieren**, auf die Benutzer*innen klicken können, um eine vorkonfigurierte App zu erstellen. Die folgende Webseite zeigt die Probot-Implementierung von [Schritt 1](#1-you-redirect-people-to-github-to-create-a-new-github-app) des Manifestflows für GitHub-Apps:

![Registrieren einer GitHub-App mit Probot](/assets/images/github-apps/github_apps_probot-registration.png)

Mithilfe von [dotenv](https://github.com/bkeepers/dotenv) erstellt Probot eine `.env`-Datei und legt die Umgebungsvariablen `APP_ID`, `PRIVATE_KEY` und `WEBHOOK_SECRET` auf die Wert fest, die [aus der App-Konfiguration abgerufen wurden](#3-you-exchange-the-temporary-code-to-retrieve-the-app-configuration).

### Hosten deiner App mit Glitch

In der [Probot-Beispiel-App](https://glitch.com/~auspicious-aardwolf) wird die App mit [Glitch](https://glitch.com/) gehostet und freigegeben. Im Beispiel wird die [API für Überprüfungen](/rest/reference/checks) verwendet, und die erforderlichen Ereignisse und Berechtigungen der Überprüfungs-API werden in der Datei `app.yml` ausgewählt. Glitch ist ein Tool, mit dem du deine eigenen Apps „Neu mischen“ kannst. Dabei wird eine Kopie der App erstellt, die Glitch hostet und bereitstellt. Weitere Informationen zu den Funktionen von Glitch-Apps findest du unter [Informationen zu Glitch](https://glitch.com/about/).
