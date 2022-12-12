---
title: Authentifizieren mit GitHub-Apps
intro: '{% data reusables.shortdesc.authenticating_with_github_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-authentication-options-for-github-apps
  - /apps/building-github-apps/authentication-options-for-github-apps
  - /apps/building-github-apps/authenticating-with-github-apps
  - /developers/apps/authenticating-with-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Authentication
ms.openlocfilehash: 6862e33adfc29cc1568d5801ac50e44587c86fa9
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147718053'
---
## Generieren eines privaten Schlüssels

Nachdem du eine GitHub-App erstellt hast, musst du mindestens einen privaten Schlüssel generieren. Du verwendest den privaten Schlüssel, um Zugriffstokenanforderungen zu signieren.

Du kannst mehrere private Schlüssel erstellen und diese rotieren, um Ausfallzeiten zu verhindern, wenn ein Schlüssel kompromittiert wird oder verloren geht. Informationen zum Überprüfen, ob ein privater Schlüssel mit einem öffentlichen Schlüssel übereinstimmt, findest du unter [Überprüfen privater Schlüssel](#verifying-private-keys).

So generierst du einen privaten Schlüssel

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %} {% data reusables.user-settings.modify_github_app %}
5. Klicke in „Private Schlüssel“ auf **Privaten Schlüssel generieren**.
![Generieren eines privaten Schlüssels](/assets/images/github-apps/github_apps_generate_private_keys.png)
6. Es wird ein privater Schlüssel im PEM-Format auf deinen Computer heruntergeladen. Du muss diese Datei unbedingt speichern, da GitHub nur den öffentlichen Teil des Schlüssels speichert.

{% note %}

**Hinweis:** Wenn du eine Bibliothek verwendest, die ein bestimmtes Dateiformat erfordert, weist die heruntergeladene PEM-Datei das Format `PKCS#1 RSAPrivateKey` auf.

{% endnote %}

## Überprüfen privater Schlüssel
{% data variables.product.product_name %} generiert mit der SHA-256-Hashfunktion einen Fingerabdruck für jedes Paar aus privatem und öffentlichem Schlüssel. Du kannst überprüfen, ob dein privater Schlüssel dem öffentlichen Schlüssel entspricht, der auf {% data variables.product.product_name %} gespeichert ist, indem du den Fingerabdruck deines privaten Schlüssels generierst und mit dem Fingerabdruck vergleichst, der auf {% data variables.product.product_name %} angezeigt wird.

So überprüfst du einen privaten Schlüssel

1. Suche den Fingerabdruck für das Schlüsselpaar aus privatem und öffentlichem Schlüssel, das du auf der Seite mit den Entwicklereinstellungen deiner {% data variables.product.prodname_github_app %} im Abschnitt „Private Schlüssel“ findest. Weitere Informationen findest du unter [Generating a private key](#generating-a-private-key) („Generieren eines privaten Schlüssels“).
![Fingerabdruck des privaten Schlüssels](/assets/images/github-apps/github_apps_private_key_fingerprint.png)
2. Generiere den Fingerabdruck deines privaten Schlüssels (PEM) lokal mithilfe des folgenden Befehls:
    ```shell
    $ openssl rsa -in <em>PATH_TO_PEM_FILE</em> -pubout -outform DER | openssl sha256 -binary | openssl base64
    ```
3. Vergleiche die Ergebnisse des lokal generierten Fingerabdrucks mit dem Fingerabdruck, der in {% data variables.product.product_name %} angezeigt wird.

## Löschen privater Schlüssel
Du kannst einen verloren gegangenen oder kompromittierten privaten Schlüssel entfernen, indem du ihn löschst, du benötigst aber immer mindestens einen privaten Schlüssel. Wenn du nur über einen Schlüssel verfügst, musst du zunächst einen neuen generieren, bevor du den alten löschst.
![Löschen des letzten privaten Schlüssels](/assets/images/github-apps/github_apps_delete_key.png)

## Authentifizieren als {% data variables.product.prodname_github_app %}

Die Authentifizierung als {% data variables.product.prodname_github_app %} ermöglicht dir verschiedene Aktionen:

* Du kannst Verwaltungsinformationen auf hoher Ebene über deine {% data variables.product.prodname_github_app %} abrufen.
* Du kannst Zugriffstoken für eine Installation der App anfordern.

Für die Authentifizierung als {% data variables.product.prodname_github_app %} [generierst du einen privaten Schlüssel](#generating-a-private-key) im PEM-Format und lädst ihn auf deinen lokalen Computer herunter. Du verwendest diesen Schlüssel, um ein [JSON Web Token (JWT)](https://jwt.io/introduction) zu signieren und mithilfe des `RS256`-Algorithmus zu codieren. {% data variables.product.product_name %} überprüft, ob die Anforderung authentifiziert ist, indem das Token mit dem gespeicherten öffentlichen Schlüssel der App verglichen wird.

Mit diesem kurzen Ruby-Skript kannst du ein JWT generieren. Achte darauf, dass du vor der Verwendung zunächst `gem install jwt` ausführen musst.

<a name="jwt-payload"></a>
```ruby
require 'openssl'
require 'jwt'  # https://rubygems.org/gems/jwt

# Private key contents
private_pem = File.read("YOUR_PATH_TO_PEM")
private_key = OpenSSL::PKey::RSA.new(private_pem)

# Generate the JWT
payload = {
  # issued at time, 60 seconds in the past to allow for clock drift
  iat: Time.now.to_i - 60,
  # JWT expiration time (10 minute maximum)
  exp: Time.now.to_i + (10 * 60),
  # {% data variables.product.prodname_github_app %}'s identifier
  iss: "YOUR_APP_ID"
}

jwt = JWT.encode(payload, private_key, "RS256")
puts jwt
```

`YOUR_PATH_TO_PEM` und `YOUR_APP_ID` sind die Werte, die du ersetzen musst. Die Werte müssen in doppelte Anführungszeichen eingeschlossen werden.

Verwende den Bezeichner deiner {% data variables.product.prodname_github_app %} (`YOUR_APP_ID`) als Wert für den JWT-Anspruch [iss](https://tools.ietf.org/html/rfc7519#section-4.1.1) (Aussteller). Du kannst den Bezeichner der {% data variables.product.prodname_github_app %} über den anfänglichen Webhook-Ping nach dem [Erstellen der App](/apps/building-github-apps/creating-a-github-app/) oder jederzeit über die App-Einstellungsseite auf der Benutzeroberfläche von GitHub.com abrufen.

Lege das JWT nach dem Erstellen im `Header` der API-Anforderung fest:

```shell
$ curl -i -H "Authorization: Bearer YOUR_JWT" -H "Accept: application/vnd.github+json" {% data variables.product.api_url_pre %}/app
```

Du musst den Wert `YOUR_JWT` ersetzen.

Im obigen Beispiel wird eine maximale Ablaufzeit von 10 Minuten verwendet. Danach gibt die API eines `401`-Fehler zurück:

```json
{
  "message": "'Expiration' claim ('exp') must be a numeric value representing the future time at which the assertion expires.",
  "documentation_url": "{% data variables.product.doc_url_pre %}"
}
```

Du musst nach Ablauf der Zeit ein neues JWT erstellen.

## Zugreifen auf API-Endpunkte als {% data variables.product.prodname_github_app %}

Eine Liste der REST-API-Endpunkte, mit der du Informationen zu einer {% data variables.product.prodname_github_app %} abrufen kannst, findest du unter [GitHub-Apps](/rest/reference/apps).

## Authentifizieren als Installation

Mit der Authentifizierung als Installation kannst du Aktionen in der API für diese Installation ausführen. Vor der Authentifizierung als Installation muss du ein Installationszugriffstoken erstellen. Stelle sicher, dass deine GitHub-App bereits in mindestens einem Repository installiert ist. Es ist unmöglich, ein Installationstoken ohne eine Installation zu erstellen. Diese Installationszugriffstoken werden von {% data variables.product.prodname_github_apps %} für die Authentifizierung verwendet. Weitere Informationen findest du unter [Installieren von GitHub-Apps](/developers/apps/managing-github-apps/installing-github-apps).

Standardmäßig gelten Installationszugriffstoken für alle Repositorys, auf die eine Installation Zugriff hat. Du kannst den Bereich für das Installationszugriffstoken auf bestimmte Repositorys beschränken, indem du den Parameter `repository_ids` verwendest. Weitere Details findest du unter [Erstellen eines Installationszugriffstokens für eine App](/rest/reference/apps#create-an-installation-access-token-for-an-app). Installationszugriffstoken verfügen über die Berechtigungen, die von der {% data variables.product.prodname_github_app %} konfiguriert wurden, und sie laufen nach einer Stunde ab.

Um die Installationen für eine authentifizierte App aufzulisten, fügst du das [oben generierte](#jwt-payload) JWT in den Autorisierungsheader der API-Anforderung ein:

```shell
$ curl -i -X GET \
-H "Authorization: Bearer YOUR_JWT" \
-H "Accept: application/vnd.github+json" \
{% data variables.product.api_url_pre %}/app/installations
```

Die Antwort enthält eine Liste der Installationen, in der jede `id` der Installation zum Erstellen eines Installationszugriffstokens verwendet werden kann. Weitere Informationen zum Antwortformat findest du unter [Auflisten von Installationen für eine authentifizierte App](/rest/reference/apps#list-installations-for-the-authenticated-app).

Um ein Installationszugriffstoken zu erstellen, fügst du das [oben generierte](#jwt-payload) JWT in den Autorisierungsheader der API-Anforderung ein und ersetzt`:installation_id` durch die `id` der Installation:

```shell
$ curl -i -X POST \
-H "Authorization: Bearer YOUR_JWT" \
-H "Accept: application/vnd.github+json" \
{% data variables.product.api_url_pre %}/app/installations/:installation_id/access_tokens
```

Die Antwort umfasst dein Installationszugriffstoken, das Ablaufdatum, die Berechtigungen des Token und die Repositorys, auf die das Token Zugriff hat. Weitere Informationen zum Antwortformat findest du unter [Erstellen eines Installationszugriffstokens für eine App](/rest/reference/apps#create-an-installation-access-token-for-an-app).

Für die Autorisierung mit einem Installationszugriffstoken fügst du dieses in den Autorisierungsheader der API-Anforderung ein:

```shell
$ curl -i \
-H "Authorization: Bearer YOUR_INSTALLATION_ACCESS_TOKEN" \
-H "Accept: application/vnd.github+json" \
{% data variables.product.api_url_pre %}/installation/repositories
```

Du musst den Wert `YOUR_INSTALLATION_ACCESS_TOKEN` ersetzen.

{% note %}

**Hinweis:** {% data reusables.getting-started.bearer-vs-token %}

{% endnote %}

## Zugreifen auf API-Endpunkte als Installation

Eine Liste der REST-API-Endpunkte, die für die Verwendung von {% data variables.product.prodname_github_apps %} mit einem Installationszugriffstoken verfügbar sind, findest du unter [Verfügbare Endpunkte](/rest/overview/endpoints-available-for-github-apps).

Eine Liste der Endpunkte im Zusammenhang mit Installationen findest du unter [Installationen](/rest/reference/apps#installations).

## HTTP-basierter Git-Zugriff durch eine Installation

Installationen mit [Berechtigungen](/apps/building-github-apps/setting-permissions-for-github-apps/) für `contents` in einem Repository können ihre Installationszugriffstoken verwenden, um sich für den Git-Zugriff zu authentifizieren. Verwende dazu das Installationszugriffstoken als HTTP-Kennwort:

```shell
git clone https://x-access-token:&lt;token&gt;@github.com/owner/repo.git
```
