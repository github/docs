---
title: Autorisieren von OAuth-Apps
intro: '{% data reusables.shortdesc.authorizing_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/about-authorization-options-for-oauth-apps
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/directing-users-to-review-their-access
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/creating-multiple-tokens-for-oauth-apps
  - /v3/oauth
  - /apps/building-oauth-apps/authorization-options-for-oauth-apps
  - /apps/building-oauth-apps/authorizing-oauth-apps
  - /developers/apps/authorizing-oauth-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - OAuth Apps
ms.openlocfilehash: d35b65add4259df72d9ae8b179829a148abd7174
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106709'
---
Die OAuth-Implementierung von {% data variables.product.product_name %} unterstützt den [Standardautorisierungscode-Gewährungstyp](https://tools.ietf.org/html/rfc6749#section-4.1) und die OAuth 2.0-[Geräteautorisierungserteilung](https://tools.ietf.org/html/rfc8628) für Apps, die keinen Zugriff auf einen Webbrowser haben.

Wenn du die Autorisierung deiner App auf übliche Art überspringen möchtest, z. B. beim Testen deiner App, kannst du den [Nicht-Webanwendungsfluss](#non-web-application-flow) verwenden.

Überlege für die Autorisierung deiner OAuth-App, welcher Autorisierungsfluss am besten zu deiner App passt.

- [Webanwendungsfluss](#web-application-flow): Wird verwendet, um Benutzer für Standard-OAuth-Apps zu autorisieren, die im Browser ausgeführt werden. (Der [implizite Gewährungstyp](https://tools.ietf.org/html/rfc6749#section-4.2) wird nicht unterstützt.)
- [Gerätefluss](#device-flow): Wird für Headless-Apps verwendet, z. B. CLI-Tools.

## Webanwendungsfluss

{% note %}

**Hinweis:** Wenn du eine GitHub App erstellst, kannst du den OAuth-Webanwendungsfluss weiterhin verwenden, aber das Setup hat einige wichtige Unterschiede. Weitere Informationen findest du unter [Identifizieren und Autorisieren von Benutzer*innen für GitHub-Apps](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/).

{% endnote %}

Der Webanwendungsfluss zum Autorisieren von Benutzer*innen für deine App lautet wie folgt:

1. Benutzer werden umgeleitet, um ihre GitHub-Identität anzufordern.
2. Benutzer*innen werden von GitHub wieder zu deiner Website umgeleitet.
3. Die App greift mit dem Zugriffstoken des Benutzers auf die API zu.

### 1. Anfordern der GitHub-Identität eines Benutzers

    GET {% data variables.product.oauth_host_code %}/login/oauth/authorize

Wenn von der GitHub-App ein `login`-Parameter angegeben wird, erfolgt die Benutzeraufforderung mit einem bestimmten Konto, das die Benutzer für die Anmeldung und Autorisierung der App verwenden können.

#### Parameter

Name | type | BESCHREIBUNG
-----|------|--------------
`client_id`|`string` | **Erforderlich**. Die Client-ID, die du von GitHub bei deiner {% ifversion fpt or ghec %}[Registrierung](https://github.com/settings/applications/new){% else %}Registrierung{% endif %} erhalten hast.
`redirect_uri`|`string` | Die URL in der Anwendung, an die Benutzer nach der Autorisierung gesendet werden. Weitere Informationen zu [Umleitungs-URLs](#redirect-urls) findest du unten.
`login` | `string` | Schlägt ein bestimmtes Konto vor, das zum Anmelden und Autorisieren der App verwendet werden soll.
`scope`|`string` | Eine durch Leerzeichen getrennte Liste von [Bereichen](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). Falls nicht angegeben, wird für `scope` standardmäßig eine leere Liste für Benutzer verwendet, die keine Bereiche für die Anwendung autorisiert haben. Für Benutzer, die über autorisierte Bereiche für die Anwendung verfügen, wird nicht die OAuth-Autorisierungsseite mit der Liste der Bereiche angezeigt. Stattdessen wird dieser Schritt des Flusses automatisch mit den Bereichen abgeschlossen, die der Benutzer für die Anwendung autorisiert hat. Wenn ein Benutzer beispielsweise den Webfluss schon zweimal ausgeführt hat und ein Token mit dem Bereich `user` und ein anderes Token mit dem Bereich `repo` autorisiert hat, erhält ein dritter Webfluss, der keinen Bereich (`scope`) bereitstellt, ein Token mit dem Bereich `user` und `repo`.
`state` | `string` | {% data reusables.apps.state_description %}
`allow_signup`|`string` | Gibt an, ob nicht authentifizierten Benutzern während des OAuth-Flusses eine Option zum Registrieren für GitHub angeboten wird. Der Standardwert lautet `true`. Verwende `false`, wenn eine Richtlinie die Anmeldung verbietet.

### 2. Benutzer*innen werden von GitHub wieder zu deiner Website umgeleitet.

Wenn der Benutzer die Anforderung akzeptiert, wird er von {% data variables.product.product_name %} mit einem temporären `code` in einem Codeparameter sowie dem Status, den du im vorherigen Schritt in einem `state`-Parameter bereitgestellt hast, wieder zu deiner Website umgeleitet. Der temporäre Code läuft nach 10 Minuten ab. Wenn die Zustände nicht übereinstimmen, hat ein Dritter die Anforderung erstellt, und du solltest den Prozess abbrechen.

Tausche diesen `code` gegen ein Zugriffstoken aus:

    POST {% data variables.product.oauth_host_code %}/login/oauth/access_token

#### Parameter

Name | type | BESCHREIBUNG
-----|------|--------------
`client_id` | `string` | **Erforderlich.** Die Client-ID, die du von {% data variables.product.product_name %} für deine {% data variables.product.prodname_oauth_app %} erhalten hast.
`client_secret` | `string` | **Erforderlich.** Der geheime Clientschlüssel, den du von {% data variables.product.product_name %} für deine {% data variables.product.prodname_oauth_app %} erhalten hast.
`code` | `string` | **Erforderlich.** Der Code, den du als Antwort auf Schritt 1 erhalten hast.
`redirect_uri` | `string` | Die URL in der Anwendung, an die Benutzer nach der Autorisierung gesendet werden.

#### Antwort

Standardmäßig weist die Antwort das folgende Format auf:

```
access_token=gho_16C7e42F292c6912E7710c838347Ae178B4a&scope=repo%2Cgist&token_type=bearer
```

{% data reusables.apps.oauth-auth-vary-response %}

```json
Accept: application/json
{
  "access_token":"gho_16C7e42F292c6912E7710c838347Ae178B4a",
  "scope":"repo,gist",
  "token_type":"bearer"
}
```

```xml
Accept: application/xml
<OAuth>
  <token_type>bearer</token_type>
  <scope>repo,gist</scope>
  <access_token>gho_16C7e42F292c6912E7710c838347Ae178B4a</access_token>
</OAuth>
```

### 3. Verwenden des Zugriffstokens für den Zugriff auf die API

Mit dem Zugriffstoken kannst du Anforderungen an die API im Namen eines Benutzers vornehmen.

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

Mit dem Gerätefluss kannst du Benutzer für eine monitorlose App autorisieren, z. B. ein CLI-Tool oder Git Credential Manager.

{% ifversion device-flow-is-opt-in %}

Bevor du den Gerätefluss verwenden können, um Benutzer zu autorisieren und zu identifizieren, musst du ihn zuerst in den Einstellungen deiner App aktivieren. Weitere Informationen zum Aktivieren des Geräteflusses in deiner App findest du unter [Ändern einer OAuth App](/developers/apps/managing-oauth-apps/modifying-an-oauth-app) für OAuth-Apps und [Ändern einer GitHub-App](/developers/apps/managing-github-apps/modifying-a-github-app) für GitHub-Apps.

{% endif %}

### Übersicht über den Gerätefluss

1. Deine App fordert Geräte- und Benutzerüberprüfungscodes an und ruft die Autorisierungs-URL ab, in die die Benutzer*innen den Benutzerüberprüfungscode eingeben.
2. Die App fordert den Benutzer auf, einen Benutzerüberprüfungscode bei {% data variables.product.device_authorization_url %} einzugeben.
3.  Die App fragt den Benutzerauthentifizierungsstatus ab. Nachdem der Benutzer das Gerät autorisiert hat, kann die App API-Aufrufe mit einem neuen Zugriffstoken tätigen.

### Schritt 1: App fordert die Geräte- und Benutzerüberprüfungscodes von GitHub an

    POST {% data variables.product.oauth_host_code %}/login/device/code

Deine App muss einen Benutzerüberprüfungscode und eine Überprüfungs-URL anfordern, die die App verwendet, um die Benutzer*innen im nächsten Schritt zum Authentifizieren aufzufordern. Diese Anforderung gibt auch einen Geräteüberprüfungscode zurück, den die App verwenden muss, um ein Zugriffstoken zu empfangen und den Status der Benutzerauthentifizierung zu überprüfen.

#### Eingabeparameter

Name | type | BESCHREIBUNG
-----|------|--------------
`client_id` | `string` | **Erforderlich.** Die Client-ID, die du von {% data variables.product.product_name %} für deine App erhalten hast.
`scope` | `string` | Bereich, für den deine App Zugriffsberechtigungen anfordert

#### Antwort

Standardmäßig weist die Antwort das folgende Format auf:

```
device_code=3584d83530557fdd1f46af8289938c8ef79f9dc5&expires_in=900&interval=5&user_code=WDJB-MJHT&verification_uri=https%3A%2F%{% data variables.product.product_url %}%2Flogin%2Fdevice
```

{% data reusables.apps.oauth-auth-vary-response %}

```json
Accept: application/json
{
  "device_code": "3584d83530557fdd1f46af8289938c8ef79f9dc5",
  "user_code": "WDJB-MJHT",
  "verification_uri": "{% data variables.product.oauth_host_code %}/login/device",
  "expires_in": 900,
  "interval": 5
}
```

```xml
Accept: application/xml
<OAuth>
  <device_code>3584d83530557fdd1f46af8289938c8ef79f9dc5</device_code>
  <user_code>WDJB-MJHT</user_code>
  <verification_uri>{% data variables.product.oauth_host_code %}/login/device</verification_uri>
  <expires_in>900</expires_in>
  <interval>5</interval>
</OAuth>
```

#### Antwortparameter

Name | type | BESCHREIBUNG
-----|------|--------------
`device_code` | `string` | Der Geräteüberprüfungscode umfasst 40 Zeichen und wird verwendet, um das Gerät zu überprüfen.
`user_code` | `string` | Der Benutzerüberprüfungscode wird auf dem Gerät angezeigt, damit der Benutzer den Code in einen Browser eingeben kann. Dieser Code umfasst 8 Zeichen mit einem Bindestrich in der Mitte.
`verification_uri` | `string` | Die Überprüfungs-URL, in der Benutzer den Benutzercode (`user_code`) eingeben müssen: {% data variables.product.device_authorization_url %}.
`expires_in` | `integer`| Die Anzahl der Sekunden, bevor `device_code` und `user_code` ablaufen. Der Standardwert beträgt 900 Sekunden (oder 15 Minuten).
`interval` | `integer` | Die Zeit in Sekunden, die mindestens verstreichen muss, bevor du eine neue Zugriffstokenanforderung (`POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`) vornehmen kannst, um die Geräteautorisierung abzuschließen. Wenn das Intervall beispielsweise 5 ist, kannst du erst eine neue Anforderung vornehmen, wenn 5 Sekunden vergangen sind. Wenn du mehr als eine Anforderung in 5 Sekunden vornimmst, wird der Grenzwert für die Rate erreicht und ein `slow_down`-Fehler angezeigt.

### Schritt 2: Fordere den Benutzer auf, den Benutzercode in einen Browser einzugeben

Dein Gerät zeigt den Benutzerüberprüfungscode an und fordert die Benutzer*innen auf, den Code unter {% data variables.product.device_authorization_url %} einzugeben.

  ![Feld, um den Benutzerüberprüfungscode einzugeben, der auf deinem Gerät angezeigt wird](/assets/images/github-apps/device_authorization_page_for_user_code.png)

### Schritt 3: App fragt GitHub ab, um zu überprüfen, ob der Benutzer das Gerät autorisiert hat

    POST {% data variables.product.oauth_host_code %}/login/oauth/access_token

Deine App stellt Geräteautorisierungsanforderungen, die `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token` abfragen, bis Geräte- und Benutzercodes ablaufen oder Benutzer*innen die App erfolgreich mit einem gültigen Benutzercode autorisiert haben. Die App muss das Mindestabrufintervall (`interval`) verwenden, das in Schritt 1 abgerufen wird, um Fehler durch Ratenbegrenzung zu vermeiden. Weitere Informationen findest du unter [Grenzwerte für den Gerätefluss](#rate-limits-for-the-device-flow).

Der Benutzer muss innerhalb von 15 Minuten (oder 900 Sekunden) einen gültigen Code eingeben. Nach 15 Minuten musst du mit `POST {% data variables.product.oauth_host_code %}/login/device/code` einen neuen Geräteautorisierungscode anfordern.

Nachdem der Benutzer autorisiert wurde, erhält die App ein Zugriffstoken, das verwendet werden kann, um im Auftrag eines Benutzers Anforderungen an die API vorzunehmen.

#### Eingabeparameter

Name | type | BESCHREIBUNG
-----|------|--------------
`client_id` | `string` | **Erforderlich.** Die Client-ID, die du von {% data variables.product.product_name %} für deine {% data variables.product.prodname_oauth_app %} erhalten hast.
`device_code` | `string` | **Erforderlich.** Der Geräteüberprüfungscode, den du von der `POST {% data variables.product.oauth_host_code %}/login/device/code`-Anforderung erhalten hast.
`grant_type` | `string` | **Erforderlich.** Der Gewährungstyp muss `urn:ietf:params:oauth:grant-type:device_code` sein.

#### Antwort

Standardmäßig weist die Antwort das folgende Format auf:

```
access_token=gho_16C7e42F292c6912E7710c838347Ae178B4a&token_type=bearer&scope=repo%2Cgist
```

{% data reusables.apps.oauth-auth-vary-response %}

```json
Accept: application/json
{
 "access_token": "gho_16C7e42F292c6912E7710c838347Ae178B4a",
  "token_type": "bearer",
  "scope": "repo,gist"
}
```

```xml
Accept: application/xml
<OAuth>
  <access_token>gho_16C7e42F292c6912E7710c838347Ae178B4a</access_token>
  <token_type>bearer</token_type>
  <scope>gist,repo</scope>
</OAuth>
```

### Grenzwerte für den Gerätefluss

Wenn ein Benutzer den Überprüfungscode im Browser sendet, gibt es einen Grenzwert von 50 Übermittlungen in einer Stunde pro Anwendung.

Wenn du mehr als eine Zugriffstokenanforderung (`POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`) innerhalb des erforderlichen Mindestzeitrahmens zwischen Anforderungen (oder `interval`) vornimmst, wird der Grenzwert für die Rate erreicht und ein `slow_down`-Fehler angezeigt. Die `slow_down`-Fehlerantwort fügt dem letzten Intervall (`interval`) 5 Sekunden hinzu. Weitere Informationen findest du unter [Fehler für den Gerätefluss](#errors-for-the-device-flow).

### Fehlercodes für den Gerätefluss

| Fehlercode | BESCHREIBUNG |
|----|----|
| `authorization_pending`| Dieser Fehler tritt auf, wenn die Autorisierungsanforderung aussteht und der Benutzer noch nicht den Benutzercode eingegeben hat. Von der App wird erwartet, dass sie weiterhin die `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`-Anforderung ohne Überschreiten des Intervalls ([`interval`](#response-parameters)) abfragt, was eine Mindestanzahl von Sekunden zwischen jeder Anforderung erfordert. |
| `slow_down` | Wenn du den `slow_down`-Fehler erhältst, werden 5 zusätzliche Sekunden dem Mindestintervall (`interval`) oder -zeitrahmen hinzugefügt, das bzw. der zwischen deinen Anforderungen mit `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token` erforderlich ist. Wenn beispielsweise für das Startintervall mindestens 5 Sekunden zwischen Anforderungen erforderlich waren und ein `slow_down`-Fehler angezeigt wird, musst du jetzt mindestens 10 Sekunden warten, bevor du eine neue Anforderung für ein OAuth-Zugriffstoken vornimmst. Die Fehlerantwort enthält den neuen Wert für `interval`, den du verwenden musst.
| `expired_token` | Wenn der Gerätecode abgelaufen ist, wird der `token_expired`-Fehler angezeigt. Du musst eine neue Anforderung für einen Gerätecode vornehmen.
| `unsupported_grant_type` | Der Gewährungstyp muss `urn:ietf:params:oauth:grant-type:device_code` sein und als Eingabeparameter enthalten sein, wenn du die OAuth-Tokenanforderung `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token` abfragst.
| `incorrect_client_credentials` | Für den Gerätefluss musst du die Client-ID deiner App übergeben, die du auf der Seite „Einstellungen“ deiner App findest. Der geheime Clientschlüssel (`client_secret`) ist für den Gerätefluss nicht erforderlich.
| `incorrect_device_code` | Der angegebene device_code ist ungültig.
| `access_denied` | Wenn Benutzer*innen während des Autorisierungsprozesses auf „Abbrechen“ klicken, wird ein `access_denied`-Fehler angezeigt, und die Benutzer*innen können den Überprüfungscode nicht noch mal verwenden.{% ifversion device-flow-is-opt-in %}
| `device_flow_disabled` | Der Gerätefluss wurde in den Einstellungen der App nicht aktiviert. Weitere Informationen findest du unter [Gerätefluss](#device-flow). {% endif %}

Weitere Informationen findest du unter [OAuth 2.0-Geräteautorisierungsgewährung](https://tools.ietf.org/html/rfc8628#section-3.5).

## Nicht-Webanwendungsfluss

Nicht-Webauthentifizierung ist für begrenzte Situationen wie Tests verfügbar. Bei Bedarf kannst du mithilfe der [Standardauthentifizierung](/rest/overview/other-authentication-methods#basic-authentication) ein {% data variables.product.pat_generic %} mithilfe deiner [{% data variables.product.pat_generic %}-Einstellungsseite](/articles/creating-an-access-token-for-command-line-use) erstellen. Mit dieser Technik kann der Benutzer den Zugriff jederzeit widerrufen.

{% ifversion fpt or ghes or ghec %} {% note %}

**Hinweis:** Wenn du den Nicht-Webanwendungsfluss verwendest, um ein OAuth2-Token zu erstellen, musst du verstehen, wie du [mit zweistufiger Authentifizierung arbeitest](/rest/overview/other-authentication-methods#working-with-two-factor-authentication), wenn du oder deine Benutzer zweistufige Authentifizierung aktiviert haben.

{% endnote %} {% endif %}

## Umleitungs-URLs

Das `redirect_uri` ist optional. Wenn ausgelassen, leitet GitHub Benutzer an die Rückruf-URL um, die in den OAuth-Anwendungseinstellungen konfiguriert ist. Wenn angegeben, müssen Host (Unterdomänen ausgenommen) und Port der Umleitungs-URL genau mit der Rückruf-URL übereinstimmen. Der Pfad der Umleitungs-URL muss auf ein Unterverzeichnis der Rückruf-URL verweisen.

    CALLBACK: http://example.com/path

    GOOD: http://example.com/path
    GOOD: http://example.com/path/subdir/other
    GOOD: http://oauth.example.com/path
    GOOD: http://oauth.example.com/path/subdir/other
    BAD:  http://example.com/bar
    BAD:  http://example.com/
    BAD:  http://example.com:8080/path
    BAD:  http://oauth.example.com:8080/path
    BAD:  http://example.org

### Loopback-Umleitungs-URLs

Der optionale Parameter `redirect_uri` kann auch für Loopback-URLs verwendet werden. Wenn die Anwendung eine Loopback-URL und einen Port angibt, werden Benutzer nach der Autorisierung der Anwendung an die angegebene URL und den Port weitergeleitet. Der `redirect_uri` muss nicht mit dem Port übereinstimmen, der in der Rückruf-URL für die App angegeben ist.

Für die `http://127.0.0.1/path`-Rückruf-URL kannst du folgenden `redirect_uri` verwenden:

```
http://127.0.0.1:1234/path
```

Beachte, dass OAuth RFC [empfiehlt, nicht `localhost` zu verwenden](https://datatracker.ietf.org/doc/html/rfc8252#section-7.3), sondern stattdessen Loopback-Literal `127.0.0.1` oder IPv6 `::1`.

## Erstellen mehrerer Token für OAuth-Apps

Du kannst mehrere Token für eine Kombination aus Benutzer/Anwendung/Bereich erstellen, um Token für bestimmte Anwendungsfälle zu erstellen.

Dies ist nützlich, wenn deine OAuth-App einen Workflow unterstützt, der GitHub für die Anmeldung verwendet und nur grundlegende Benutzerinformationen erfordert. Ein anderer Workflow kann den Zugriff auf private Repositorys eines Benutzers erfordern. Mithilfe mehrerer Token kann deine OAuth-App den Webfluss für jeden Anwendungsfall ausführen und nur die erforderlichen Bereiche anfordern. Wenn Benutzer*innen deine Anwendung nur zum Anmelden verwenden, sind sie niemals erforderlich, um deiner OAuth-App Zugriff auf ihre privaten Repositorys zu gewähren.

{% data reusables.apps.oauth-token-limit %}

{% data reusables.apps.deletes_ssh_keys %}

## Anleiten von Benutzern, ihren Zugriff zu überprüfen

Du kannst Autorisierungsinformationen für eine OAuth-App verknüpfen, damit Benutzer ihre Anwendungsberechtigungen überprüfen und widerrufen können.

Zum Erstellen dieses Links benötigst du deine OAuth-Apps-`client_id`, die du von GitHub erhalten hast, wenn du die Anwendung registriert hast.

```
{% data variables.product.oauth_host_code %}/settings/connections/applications/:client_id
```

{% tip %}

**Tipp:** Weitere Informationen zu den Ressourcen, auf die deine OAuth-App für einen Benutzer zugreifen kann, findest du unter [Ermitteln von Ressourcen für einen Benutzer](/rest/guides/discovering-resources-for-a-user).

{% endtip %}

## Problembehandlung

* [Problembehandlung bei Autorisierungsanforderungsfehlern](/apps/managing-oauth-apps/troubleshooting-authorization-request-errors)
* [Problembehandlung bei OAuth App-Zugriffstokenanforderungsfehlern](/apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors)
* [Geräteflussfehler](#error-codes-for-the-device-flow)
* [Tokenablauf und Sperrung](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation)

## Weitere Informationsquellen

- [Informationen zur Authentifizierung in {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github)
