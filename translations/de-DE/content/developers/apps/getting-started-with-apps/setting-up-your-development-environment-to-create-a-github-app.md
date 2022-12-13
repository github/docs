---
title: Einrichten der Entwicklungsumgebung zum Erstellen einer GitHub-App
intro: 'Hier erfährst du mehr über die Grundlagen zum Erweitern und Erstellen neuer {% data variables.product.prodname_github_apps %}.'
redirect_from:
  - /apps/quickstart-guides/setting-up-your-development-environment
  - /developers/apps/setting-up-your-development-environment-to-create-a-github-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Development environment
ms.openlocfilehash: 61370cfa0643bcba91cfe78e077346cd40286e1e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145089940'
---
## Einführung

In diesem Leitfaden werden die zum Konfigurieren einer GitHub-App und ihrer Ausführung auf einem Server erforderlichen Schritte erläutert. Für GitHub-Apps sind einige Einrichtungsschritte erforderlich, damit es möglich wird, Webhookereignisse zu verwalten und die App-Registrierung auf GitHub mit deinem Code zu verbinden. Die App in diesem Leitfaden dient als Grundlage, mit der du neue GitHub-Apps erweitern und erstellen kannst.

Am Ende dieses Leitfadens hast du eine GitHub-App registriert und einen Webserver zum Empfangen von Webhookereignissen eingerichtet. Du erfährst, wie du ein Tool namens Smee verwendest, um Webhooknutzlasten zu erfassen und an die lokale Entwicklungsumgebung weiterzuleiten. Die Vorlagen-App, die du in diesem Abschnitt konfigurierst, erfüllt noch keine besondere Aufgabe, dient aber als Framework, mit dem du App-Code mithilfe der API schreiben oder andere [Schnellstartanleitungen](/apps/quickstart-guides/) abschließen kannst. {% ifversion fpt or ghec %}Du kannst erfolgreiche Beispiele für Apps auf [GitHub Marketplace](https://github.com/marketplace) und [Works with GitHub](https://github.com/works-with) auschecken.{% endif %}

Nach Abschluss dieses Projekts verstehst du, wie du eine GitHub-App und eine Installation authentifizierst und inwieweit sich diese Authentifizierungsmethoden unterscheiden.

Nachstehend sind die Schritte festgehalten, die du ausführst, um die als Vorlage dienende GitHub-App zu konfigurieren:

1. [Starten eines neuen Smee-Kanals](#step-1-start-a-new-smee-channel)
1. [Registrieren einer neuen GitHub-App](#step-2-register-a-new-github-app)
1. [Speichern des privaten Schlüssels und der App-ID](#step-3-save-your-private-key-and-app-id)
1. [Vorbereiten der Laufzeitumgebung](#step-4-prepare-the-runtime-environment)
1. [Überprüfen des GitHub-App-Vorlagencodes](#step-5-review-the-github-app-template-code)
1. [Starten des Servers](#step-6-start-the-server)
1. [Installieren der App in deinem Konto](#step-7-install-the-app-on-your-account)

{% data reusables.apps.app-ruby-guides %}

## Voraussetzungen

Du dürftest es als hilfreich empfinden, ein grundlegendes Verständnis von Folgendem zu haben:

* [GitHub Apps](/apps/about-apps)
* [Webhooks](/webhooks)
* [Programmiersprache Ruby](https://www.ruby-lang.org/en/)
* [REST-APIs](/rest)
* [Sinatra](http://sinatrarb.com/)

Du kannst die Schritte jedoch mit jedem Kenntnisstand nachverfolgen. Auf während des Durcharbeitens benötigte Informationen wird jeweils mit einem Link verwiesen.

Bevor du beginnst, musst du das Repository mit dem Vorlagencode klonen, der in dieser Schnellstartanleitung verwendet wird. Öffne die Terminal-App, und suche nach einem Verzeichnis, in dem du den Code speichern möchtest. Führe diesen Befehl aus, um das Repository der [GitHub-App-Vorlage](https://github.com/github-developer/github-app-template) zu klonen:

```shell
$ git clone https://github.com/github-developer/github-app-template.git
```

## Schritt 1: Starten eines neuen Smee-Kanals

Damit du bewerkstelligen kannst, dass von GitHub Webhooks an deinen lokalen Computer gesendet werden, ohne ihn im Internet verfügbar zu machen, kannst du ein Tool namens Smee verwenden. Wechsle zunächst zu https://smee.io, und klicke dann auf **Start a new channel** (Einen neuen Kanal starten). Wenn du bereits mit anderen Tools vertraut bist, die deinen lokalen Computer im Internet verfügbar machen, z. B. [`ngrok`](https://dashboard.ngrok.com/get-started) oder [`localtunnel`](https://localtunnel.github.io/www/), kannst du natürlich auch diese verwenden.

![Schaltfläche für einen neuen Kanal in Smee](/assets/images/smee-new-channel.png)

Beim Starten eines neuen Smee-Kanals wird eine eindeutige Domäne erstellt, in der von GitHub Webhooknutzlasten gesendet werden können. Diese Domäne musst du kennen, damit du den nächsten Schritt ausführen kannst. Hier ist ein Beispiel für eine eindeutige Domäne unter `https://smee.io/qrfeVRbFbffd6vD`:

![Ein individueller Smee-Kanal](/assets/images/smee-unique-domain.png)

Wechsle wieder zur Terminal-App, und führe die folgenden Schritte aus, um den Client der Smee-Befehlszeilenschnittstelle (Command-Line Interface, CLI) auszuführen:

{% note %}

**Hinweis:** Die folgenden Schritte unterscheiden sich geringfügig von den unter „Use the CLI“ (Verwenden der Befehlszeilenschnittstelle) aufgeführten Anweisungen, die du auf der Seite des Smee-Kanals siehst. Du musst **nicht** den Anweisungen unter „Use the Node.js client“ (Verwenden des Node.js-Clients) oder „Using Probot's built-in support“ (Verwenden der integrierten Unterstützung von Probot) folgen.

{% endnote %}

1. Installieren des Clients:

    ```shell
    $ npm install --global smee-client
    ```

2. Führe den Client aus (ersetze `https://smee.io/qrfeVRbFbffd6vD` durch deine eigene Domäne):

    ```shell
    $ smee --url https://smee.io/qrfeVRbFbffd6vD --path /event_handler --port 3000
    ```

    Ihnen sollte eine Ausgabe wie die folgende angezeigt werden:

    ```shell
    Forwarding https://smee.io/qrfeVRbFbffd6vD to http://127.0.0.1:3000/event_handler
    Connected https://smee.io/qrfeVRbFbffd6vD
    ```

Durch den Befehl `smee --url <unique_channel>` wird Smee veranlasst, alle vom Smee-Kanal empfangenen Webhookereignisse an den Smee-Client weiterzuleiten, der auf deinem Computer ausgeführt wird. Mit der Option `--path /event_handler` werden Ereignisse an die `/event_handler`-Route weitergeleitet, die in einem [späteren Abschnitt](#step-5-review-the-github-app-template-code) behandelt wird. Mit der Option `--port 3000` wird Port 3000 angegeben. Dies ist der Port, der von deinem Server überwacht wird. Mithilfe von Smee muss der Computer nicht für das öffentliche Internet verfügbar sein, damit er Webhooks von GitHub empfangen kann. Du kannst auch die Smee-URL im Browser öffnen, um Webhooknutzlasten zu überprüfen, wenn sie eingehen.

Es empfiehlt sich, dieses Terminalfenster geöffnet zu lassen und die Verbindung mit Smee aufrechtzuerhalten, während du die restlichen Schritte in diesem Leitfaden ausführst. Obwohl du die Verbindung mit dem Smee-Client trennen und erneut herstellen _kannst_, ohne deine eindeutige Domäne zu verlieren (im Gegensatz zu `ngrok`), ist es einfacher, die Verbindung aufrechtzuerhalten und andere Befehlszeilenaufgaben in einem anderen Terminalfenster auszuführen.

## Schritt 2: Registrieren einer neuen GitHub-App

Wenn du noch kein GitHub-Konto hast, ist jetzt ein [hervorragender Zeitpunkt zum Erstellen eines Kontos](https://github.com/join). Denke daran, deine E-Mail-Adresse zu bestätigen, bevor du den Vorgang fortsetzt. Besuche zum Registrieren einer neuen App die [Seite der App-Einstellungen](https://github.com/settings/apps) in deinem GitHub-Profil, und klicke auf **New GitHub App** (Neue GitHub-App).

![GitHub-Website mit der Anzeige der **neuen App**](/assets/images/new-app.png)

Es wird ein Formular angezeigt, in dem du Details zu deiner App eingeben kannst. Weitere Informationen zu den Feldern auf dieser Seite findest du unter [Creating a GitHub App](/apps/building-github-apps/creating-a-github-app/) (Erstellen einer GitHub-App). Für die Zwecke dieses Leitfadens musst du in einigen Feldern bestimmte Daten eingeben:

{% note %}

**Hinweis:** Du kannst diese Einstellungen später jederzeit aktualisieren, um auf einen gehosteten Server zu verweisen.

{% endnote %}

* Verwende für die „Homepage-URL“ die von Smee ausgestellte Domäne. Beispiel:

    ![Formular mit der Smee-Domäne, die für die Homepage-URL eingetragen ist](/assets/images/homepage-url.png)

* Verwende für die „Webhook-URL“ wieder die von Smee ausgestellte Domäne. Beispiel:

    ![Formular mit der Smee-Domäne, die für die Webhook-URL eingetragen ist](/assets/images/webhook-url.png)

* Erstelle für den geheimen Webhookschlüssel (Webhook secret) ein Kennwort, um die Webhook-Endpunkte abzusichern. Dieser Schlüssel sollte nur Ihnen (und GitHub über dieses Formular) bekannt sein. Das Geheimnis ist wichtig, da du Nutzdaten aus dem öffentlichen Internet erhältst. Du verwendest dieses Geheimnis, um den Webhookabsender zu überprüfen. Beachte, dass die GitHub-App-Einstellungen besagen, dass der geheime Webhookschlüssel optional ist. In den meisten Fällen ist dies wahr, aber du musst einen geheimen Webhookschlüssel festlegen, damit der Code der Vorlagen-App funktioniert.

    ![Formular mit ausgefülltem geheimem Webhookschlüssel](/assets/images/webhook-secret.png)

* Auf der Seite „Permissions & Webhooks“ (Berechtigungen und Webhooks) kannst du Berechtigungen für deine App angeben, die bestimmen, auf wie viele Daten die App zugreifen kann. Scrolle im Abschnitt „Repositoryberechtigungen“ nach unten zu „Metadaten“, und wähle `Access: Read-only` aus. Wenn du dich dazu entscheidest, diese Vorlagen-App zu erweitern, kannst du diese Berechtigungen später aktualisieren.

* Gib unten auf der Seite „Permissions & Webhooks“ (Berechtigungen und Webhooks) an, ob es sich um eine private App oder um eine öffentliche App handelt. Diese Angabe bezieht sich darauf, wer die App installieren kann: nur du oder jede beliebige Person. Belasse die Kennzeichnung der App fürs Erste als privat, indem du **Only on this account** (Nur in diesem Konto) auswählst.

    ![GitHub-App-Datenschutz](/assets/images/create_app.png)

Klicke auf **Create GitHub App** (GitHub-App erstellen), um die App zu erstellen.

## Schritt 3: Speichern des privaten Schlüssels und der App-ID

Nachdem du die App erstellt hast, wirst du wieder zur [Seite der App-Einstellungen](https://github.com/settings/apps) geleitet. Auf dieser Seite musst du zwei weitere Aufgaben ausführen:

* **Generiere einen privaten Schlüssel für die App.** Dies ist erforderlich, um die App später zu authentifizieren. Scrolle auf der Seite nach unten, und klicke auf **Generate a private key** (Privaten Schlüssel generieren). Speichere die resultierende `PEM`-Datei (die _`app-name`_-_`date`_-`private-key.pem` oder ähnlich benannt ist) in einem Verzeichnis, in dem du die Datei wiederfinden kannst.

    ![Dialogfeld zum Generieren eines privaten Schlüssels](/assets/images/private_key.png)

* **Notiere dich die App-ID, die der App von GitHub zugewiesen wurde.** du benötigst diese App-ID, um die Laufzeitumgebung vorzubereiten.

    <img src="/assets/images/app_id.png" alt="Your app's ID number" width="200px"/>

## Schritt 4. Vorbereiten der Laufzeitumgebung

Damit deine Informationen sicher aufbewahrt bleiben, empfiehlt es sich, alle App-bezogenen Geheimnisse im Arbeitsspeicher des Computers zu hinterlegen, wo sie für die App auffindbar sind, anstatt sie direkt in den Code einzufügen. Mit einem praktischen Entwicklungstool namens [dotenv](https://github.com/bkeepers/dotenv) werden projektspezifische Umgebungsvariablen von einer `.env`-Datei in `ENV` geladen. Checke die `.env`-Datei nie in GitHub ein. Dies ist eine lokale Datei, in der vertrauliche Informationen gespeichert sind, die du nicht im öffentlichen Internet offenlegen möchtest. Die `.env`-Datei ist bereits in der [`.gitignore`](/github/getting-started-with-github/ignoring-files/)-Datei des Repositorys enthalten, damit dies verhindert wird.

Der im Abschnitt [Voraussetzungen](#prerequisites) heruntergeladene Vorlagencode enthält bereits eine Beispieldatei namens `.env-example`. Benenne die Beispieldatei von `.env-example` in `.env` um, oder erstelle eine Kopie der `.env-example`-Datei namens `.env`. Du hast dotenv noch nicht installiert, aber du wirst das Tool an einer späteren Stelle dieser Schnellstartanleitung installieren, wenn du `bundle install` ausführst. **Hinweis:** Schnellstartanleitungen, die auf die Schritte in diesem Leitfaden verweisen, können zusätzliche Umgebungsvariablen in der `.env-example`-Datei enthalten. Ziehe die Schnellstartanleitung für das Projekt zurate, das du auf GitHub geklont hast, um Anleitungen zum Festlegen dieser zusätzlichen Umgebungsvariablen einzusehen.

Du musst diese Variablen der `.env`-Datei hinzufügen:

* _`GITHUB_PRIVATE_KEY`_: Füge den privaten Schlüssel hinzu, den du [zuvor generiert und gespeichert hast](#step-3-save-your-private-key-and-app-id). Öffne die `.pem`-Datei mit einem Text-Editor, oder verwende die Befehlszeile, um den Inhalt der Datei anzuzeigen: `cat path/to/your/private-key.pem`. Kopiere den gesamten Inhalt der Datei als den Wert `GITHUB_PRIVATE_KEY` in die `.env`-Datei. **Hinweis:** Da die PEM-Datei aus mehr als einer Zeile besteht, musst du den Wert in Anführungszeichen einschließen, wie das folgende Beispiel zeigt.
* _`GITHUB_APP_IDENTIFIER`_: Verwende die App-ID, die du dir im vorherigen Abschnitt notiert hast.
* _`GITHUB_WEBHOOK_SECRET`_: Füge den geheimen Webhookschlüssel hinzu.

Hier ist ein Beispiel für eine `.env`-Datei:

```
GITHUB_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----
...
HkVN9...
...
-----END DSA PRIVATE KEY-----"
GITHUB_APP_IDENTIFIER=12345
GITHUB_WEBHOOK_SECRET=your webhook secret
```

## Schritt 5: Überprüfen des GitHub-App-Vorlagencodes

Der Code der Vorlagen-App enthält bereits Code, den jede GitHub-App benötigt. In diesen Abschnitten wird der Code erläutert, der bereits in der GitHub-App-Vorlage vorhanden ist. Es gibt keine Schritte, die du in diesem Abschnitt ausführen musst. Wenn du bereits mit dem Vorlagencode vertraut bist, kannst du mit [Schritt 6: Starten des Servers](#step-6-start-the-server) fortfahren.

Öffne die Datei `template_server.rb` in einem Text-Editor deiner Wahl. In dieser Datei werden Kommentare angezeigt, die zusätzlichen Kontext für den Vorlagencode bereitstellen. Es empfiehlt sich, diese Kommentare sorgfältig zu lesen und sogar eigene Kommentare zu neuem Code hinzuzufügen, den du schreibst.

Oben in der Datei siehst du den Code `set :port 3000`. Damit wird der Port festgelegt, der beim Starten des Webservers verwendet wird, sodass eine Entsprechung mit dem Port erreicht wird, an den du die Webhooknutzlasten in [Schritt 1: Starten eines neuen Smee-Kanals](#step-1-start-a-new-smee-channel) umgeleitet hast.

Der nächste Code, den du siehst, ist die Deklaration `class GHApp < Sinatra::Application`. Du schreibst den gesamten Code für die GitHub-App innerhalb dieser Klasse.

In bereits vorliegender Form werden von der Klasse in der Vorlage die folgenden Aufgaben ausgeführt:
* [Lesen der Umgebungsvariablen](#read-the-environment-variables)
* [Aktiviere die Protokollierung.](#turn-on-logging)
* [Definieren eines Before-Filters](#define-a-before-filter)
* [Definieren des Routenhandlers](#define-a-route-handler)
* [Definieren der Hilfsmethoden](#define-the-helper-methods)

### Lesen der Umgebungsvariablen

Zuerst werden von dieser Klasse die drei Umgebungsvariablen gelesen, die du in [Schritt 4: Vorbereiten der Laufzeitumgebung](#step-4-prepare-the-runtime-environment) festgelegt hast, und in Variablen gespeichert, die später verwendet werden sollen:

``` ruby
# Expects that the private key in PEM format. Converts the newlines
PRIVATE_KEY = OpenSSL::PKey::RSA.new(ENV['GITHUB_PRIVATE_KEY'].gsub('\n', "\n"))

# Your registered app must have a secret set. The secret is used to verify
# that webhooks are sent by GitHub.
WEBHOOK_SECRET = ENV['GITHUB_WEBHOOK_SECRET']

# The GitHub App's identifier (type integer) set when registering an app.
APP_IDENTIFIER = ENV['GITHUB_APP_IDENTIFIER']
```

### Aktivieren Sie die Protokollierung.

Als Nächstes wird ein Codeblock angezeigt, der die Protokollierung während der Entwicklung ermöglicht. Dies ist die Standardumgebung in Sinatra. Mit diesem Code wird die Protokollierung auf `DEBUG`-Ebene aktiviert, sodass eine nützliche Ausgabe im Terminal angezeigt wird, während du die App entwickelst:

``` ruby
# Turn on Sinatra's verbose logging during development
configure :development do
  set :logging, Logger::DEBUG
end
```

### Definieren eines Before-Filters

In Sinatra werden [Before-Filter](https://github.com/sinatra/sinatra#filters) verwendet, mit denen du Code vor dem Routenhandler ausführen kannst. Vom `before`-Block in der Vorlage werden vier [Hilfsmethoden](https://github.com/sinatra/sinatra#helpers) aufgerufen. Von der Vorlagen-App werden diese Hilfsmethoden in einem [späteren Abschnitt](#define-the-helper-methods) definiert.

``` ruby
# Before each request to the `/event_handler` route
before '/event_handler' do
  get_payload_request(request)
  verify_webhook_signature
  authenticate_app
  # Authenticate the app installation in order to run API operations
  authenticate_installation(@payload)
end
```

### Definieren eines Routenhandlers

Im Vorlagencode ist eine leere Route enthalten. Über diesen Code werden alle `POST`-Anforderungen an die `/event_handler`-Route verarbeitet. Im Rahmen dieser Schnellstartanleitung schreibst du diesen Ereignishandler zwar nicht, aber in den anderen [Schnellstartanleitungen](/apps/quickstart-guides/) werden Beispiele dafür beschrieben, wie du diese Vorlagen-App erweiterst.

``` ruby
post '/event_handler' do

end
```

### Definieren der Hilfsmethoden

Der Großteil der entscheidenden Aufgaben wird von den Hilfsmethoden in dieser Vorlage ausgeführt. In diesem Abschnitt des Codes sind vier Hilfsmethoden definiert.

#### Verarbeiten der Webhooknutzlast

Mit der ersten Methode, `get_payload_request`, wird die Webhooknutzlast erfasst und in das JSON-Format konvertiert. Dadurch wird der Zugriff auf die Daten der Nutzlast deutlich erleichtert.

#### Überprüfen der Webhooksignatur

Mithilfe der zweiten Methode, `verify_webhook_signature`, wird die Überprüfung der Webhooksignatur durchgeführt, damit sichergestellt ist, dass das Ereignis von GitHub generiert wurde. Weitere Informationen zum Code in der Hilfsmethode `verify_webhook_signature` findest du unter [Absichern von Webhooks](/webhooks/securing/). Wenn die Webhooks sicher sind, werden mit dieser Methode alle am Terminal eingehenden Nutzlasten protokolliert. Der Protokollierungscode ist hilfreich, damit du dich vergewissern kannst, dass der Webserver funktioniert, aber du kannst den Code später jederzeit entfernen.

#### Authentifizieren als GitHub-App

Zum Tätigen von API-Aufrufen verwendest du die [Octokit-Bibliothek](http://octokit.github.io/octokit.rb/). Alle interessanten Aufgaben, die du mithilfe dieser Bibliothek ausführen kannst, setzen eine Authentifizierung der App voraus. GitHub-Apps verfügen über zwei Methoden der Authentifizierung:

- Authentifizierung als GitHub-App per [JSON Web Token (JWT).](https://jwt.io/introduction)
- Authentifizierung als bestimmte Installation einer GitHub-App mithilfe eines Installationszugriffstokens.

Im [nächsten Abschnitt](#authenticating-as-an-installation) erfährst du mehr über die Authentifizierung als Installation.

Mithilfe der [Authentifizierung als GitHub-App](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) kannst du einige Aufgaben durchführen:

 * Du kannst allgemeine Verwaltungsinformationen zu der GitHub-App abrufen.
 * Du kannst Zugriffstoken für eine Installation der App anfordern.

Du würdest beispielsweise die Authentifizierung als GitHub-App durchführen, um eine Liste der Konten (Organisationskonten und persönliche Konten) abzurufen, von denen die App installiert wurde. Mithilfe dieser Authentifizierungsmethode kannst du jedoch nicht besonders viel mit der API anfangen. Du musst eine Authentifizierung als Installation durchführen, um auf die Daten eines Repositorys zugreifen und Vorgänge im Auftrag der Installation ausführen zu können. Dazu musst du zuerst eine Authentifizierung als GitHub-App durchführen, um ein Installationszugriffstoken anzufordern.

Bevor du die Octokit.rb-Bibliothek zum Tätigen von API-Aufrufen verwenden kannst, musst du einen [Octokit-Client](http://octokit.github.io/octokit.rb/Octokit/Client.html) initialisieren, der als GitHub-App authentifiziert wurde. Die `authenticate_app`-Hilfsmethode erfüllt genau diesen Zweck.

``` ruby
# Instantiate an Octokit client authenticated as a GitHub App.
# GitHub App authentication requires that you construct a
# JWT (https://jwt.io/introduction/) signed with the app's private key,
# so GitHub can be sure that it came from the app an not altered by
# a malicious third party.
def authenticate_app
  payload = {
      # The time that this JWT was issued, _i.e._ now.
      iat: Time.now.to_i,

      # JWT expiration time (10 minute maximum)
      exp: Time.now.to_i + (10 * 60),

      # Your GitHub App's identifier number
      iss: APP_IDENTIFIER
  }

  # Cryptographically sign the JWT
  jwt = JWT.encode(payload, PRIVATE_KEY, 'RS256')

  # Create the Octokit client, using the JWT as the auth token.
  @app_client ||= Octokit::Client.new(bearer_token: jwt)
end
```

Vom obigen Code wird ein [JSON Web Token (JWT)](https://jwt.io/introduction) generiert und (zusammen mit dem privaten Schlüssel der App) zum Initialisieren des Octokit-Clients verwendet. Von GitHub wird die Authentifizierung einer Anforderung durch Verifizierung des Tokens mit dem gespeicherten öffentlichen Schlüssel der App überprüft. Weitere Informationen dazu, wie dieser Code funktioniert, findest du unter [Authentifizierung als GitHub-App](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app).

#### Authentifizieren als Installation

Eine _Installation_ bezieht sich auf ein beliebiges Benutzer- oder Organisationskonto, für das die App installiert wurde. Auch wenn jemand die App in mehreren Repositorys installiert, zählt sie nur als eine einzige Installation, da sie sich innerhalb desselben Kontos befindet. Mit der letzten Hilfsmethode, `authenticate_installation`, wird ein [Octokit-Client](http://octokit.github.io/octokit.rb/Octokit/Client.html) initialisiert, der als Installation authentifiziert wurde. Diesen Octokit-Client würdest du verwenden, um authentifizierte API-Aufrufe zu tätigen.

``` ruby
# Instantiate an Octokit client authenticated as an installation of a
# GitHub App to run API operations.
def authenticate_installation(payload)
  installation_id = payload['installation']['id']
  installation_token = @app_client.create_app_installation_access_token(installation_id)[:token]
  @installation_client = Octokit::Client.new(bearer_token: installation_token)
end
```

Mit der Octokit-Methode [`create_app_installation_access_token`](http://octokit.github.io/octokit.rb/Octokit/Client/Apps.html#create_app_installation_access_token-instance_method) wird ein Installationstoken erstellt. Diese Methode akzeptiert zwei Argumente:

* Installation (ganze Zahl): ID einer GitHub-App-Installation
* Optionen (Hash, Standardwert ist `{}`): anpassbare Optionen

Jedes Mal, wenn eine GitHub-App einen Webhook empfängt, ist ein `installation`-Objekt mit einer `id` darin enthalten. Mit dem Client, der als GitHub-App authentifiziert wurde, übergibst du diese ID an die Methode `create_app_installation_access_token`, um ein Zugriffstoken für jede einzelne Installation zu generieren. Da du keine Optionen an die Methode übergibst, werden die Optionen standardmäßig einem leeren Hash zugewiesen. Wenn du dir noch einmal [die Dokumentation](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) ansiehst, wirst du feststellen, dass die Antwort für `create_app_installation_access_token` zwei Felder beinhaltet: `token` und `expired_at`. Vom Vorlagencode wird das Token in der Antwort ausgewählt und ein Installationsclient initialisiert.

Bei dieser Methode wird jedes Mal, wenn die App eine neue Webhooknutzlast empfängt, ein Client für die Installation erstellt, die das Ereignis ausgelöst hat. Mit diesem Authentifizierungsprozess kann die GitHub-App für alle Installationen eines beliebigen Kontos genutzt werden.

Jetzt kannst du mit der Erstellung von API-Aufrufen beginnen.

## Schritt 6: Starten des Servers

Die App hat _noch keine eigentliche Funktion_, aber an diesem Punkt kannst du die App auf dem Server ausführen.

Führe Smee weiterhin auf der aktuellen Registerkarte im Terminal aus. Öffne eine neue Registerkarte und `cd` im Verzeichnis, in dem du den [Vorlagen-App-Code geklont hast](#prerequisites). Vom Ruby-Code in diesem Repository wird ein [Sinatra](http://sinatrarb.com/)-Webserver gestartet. Dieser Code verfügt über einige Abhängigkeiten. Diese kannst du durch die Ausführung von folgendem Code installieren:

```shell
$ gem install bundler
```

Gefolgt von:

```shell
$ bundle install
```

Wenn die Abhängigkeiten installiert sind, kannst du den Server starten:

```shell
$ bundle exec ruby template_server.rb
```

Du solltest in etwa folgende Rückgabe erhalten:

```shell
> == Sinatra (v2.0.3) has taken the stage on 3000 for development with backup from Puma
> Puma starting in single mode...
> * Version 3.11.2 (ruby 2.4.0-p0), codename: Love Song
> * Min threads: 0, max threads: 16
> * Environment: development
> * Listening on tcp://localhost:3000
> Use Ctrl-C to stop
```

Wenn ein Fehler angezeigt wird, vergewissere dich, dass du die `.env`-Datei in dem Verzeichnis erstellt hast, das die Datei `template_server.rb` enthält.

Sobald der Server ausgeführt wird, kannst du einen Test durchführen, indem du im Browser die Adresse `http://localhost:3000` aufrufst. Wenn die App wie erwartet funktioniert, wird eine hilfreiche Fehlerseite angezeigt:

<img src="/assets/images/sinatra-404.png" alt="Sinatra's 404 error page" width="500px"/>

Das ist gut. Zwar wird eine Fehlerseite angezeigt, aber eben eine _Sinatra_-Fehlerseite. Das bedeutet, dass die App wie erwartet mit dem Server verbunden ist. Diese Meldung wird angezeigt, weil die App nichts anderes anzeigen kann.

## Schritt 7. Installieren der App in deinem Konto

Du kannst testen, ob der Server die App überwacht, indem du ein zu empfangendes Ereignis auslöst. Ein einfaches Ereignis, das du testen kannst, besteht darin, die App in deinem GitHub-Konto zu installieren. Dadurch sollte das [`installation`](/webhooks/event-payloads/#installation)-Ereignis gesendet werden. Wenn die App das Ereignis empfängt, solltest du eine Ausgabe auf der Terminalregisterkarte sehen, auf der du `template_server.rb` gestartet hast.

Besuche zum Installieren der App die [Seite der App-Einstellungen](https://github.com/settings/apps), wähle deine App aus, und klicke auf der Seitenleiste auf **Install App** (App installieren). Klicke neben deinem Benutzernamen auf **Install** (Installieren).

Du wirst gefragt, ob die App in allen Repositorys oder in ausgewählten Repositorys installiert werden soll. Wenn du die App nicht in _allen_ Repositorys installieren möchtest, ist das in Ordnung. Gegebenenfalls musst du ein Sandboxrepository für Testzwecke erstellen und die App dort installieren.

<img src="/assets/images/install_permissions.png" alt="App installation permissions" width="500px"/>

Nachdem du auf **Install** (Installieren) geklickt hast, sieh dir die Ausgabe im Terminal an. Die Ausgabe sollte in etwa wie folgt aussehen:

```shell
> D, [2018-06-29T15:45:43.773077 #30488] DEBUG -- : ---- received event integration_installation
> D, [2018-06-29T15:45:43.773141 #30488] DEBUG -- : ----         action created
> 192.30.252.44 - - [29/Jun/2018:15:45:43 -0400] "POST / HTTP/2" 200 2 0.0067
> D, [2018-06-29T15:45:43.833016 #30488] DEBUG -- : ---- received event installation
> D, [2018-06-29T15:45:43.833062 #30488] DEBUG -- : ----         action created
> 192.30.252.39 - - [29/Jun/2018:15:45:43 -0400] "POST / HTTP/2" 200 2 0.0019
```

Das ist gut. Es bedeutet: Die App hat eine Benachrichtigung erhalten, dass sie in deinem GitHub-Konto installiert wurde. Wenn eine ähnliche Meldung wie diese angezeigt wird, wird die App wie erwartet auf dem Server ausgeführt. 🙌

Wenn die Ausgabe nicht angezeigt wird, vergewissere dich, dass Smee ordnungsgemäß auf einer anderen Terminalregisterkarte ausgeführt wird. Wenn du Smee neu starten musst, musst du auch die App _deinstallieren_ und _erneut installieren_, um das `installation`-Ereignis noch mal an die App zu senden und die Ausgabe im Terminal anzuzeigen. Wenn Smee nicht das Problem ist, lies den Abschnitt [Problembehandlung](#troubleshooting), um andere Ursachen zu identifizieren.

Wenn du dich fragst, wo die oben beschriebene Terminalausgabe herkommt: Sie wird im [App-Vorlagencode](#prerequisites) in `template_server.rb` geschrieben.

## Problembehandlung

Im Folgenden werden einige häufige Probleme beschrieben und entsprechende Lösungen vorgeschlagen. Wenn du auf andere Probleme stößt, erhältst du im {% data variables.product.prodname_support_forum_with_url %} Unterstützung oder Beratung.

* **F:** Wenn ich versuche, den Smee-Befehlszeilenclient zu installieren, erhalte ich den folgenden Fehler:

    ```shell
    > npm: command not found
    ```

    **A:** Sieht so aus, als hättest du npm nicht installiert. Die beste Möglichkeit zum Installieren von npm ist es, das Node.js-Paket unter https://nodejs.org herunterzuladen und die Installationsanweisungen für dein System zu befolgen. npm wird zusammen mit Node.js installiert.

* **F:** Wenn ich den Server ausführe, erhalte ich den folgenden Fehler:

    ```shell
    > server.rb:38:in `initialize': Neither PUB key nor PRIV key: header too long (OpenSSL::PKey::RSAError)
    ```

    **A:** Wahrscheinlich hast du die Umgebungsvariable für den privaten Schlüssel nicht richtig eingerichtet. Die `GITHUB_PRIVATE_KEY`-Variable sollte wie folgt aussehen:

    ```
    GITHUB_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----
    ...
    HkVN9...
    ...
    -----END RSA PRIVATE KEY-----"
    ```

    Vergewissere dich, dass du den richtigen öffentlichen Schlüssel in die `.env`-Datei kopiert hast.

* **F:** Wenn ich den Server ausführe, stürzt er mit diesem Fehler ab:

    ```shell
    > Octokit::Unauthorized ... 401 - Bad credentials`
    ```

    **A:** Möglicherweise erfolgt die Authentifizierung als GitHub-App, aber nicht als Installation. Achte darauf, dass du alle unter [Authentifizieren als Installation](#authenticating-as-an-installation) genannten Schritte ausführst und die (mit einem Installationszugriffstoken authentifizierte) `@installation_client`-Instanzvariable für die API-Vorgänge verwenden, nicht die (mit einem JWT authentifizierte) `@app_client`-Instanzvariable. Mit der `@app_client`-Instanzvariable können nur allgemeine Informationen über die App sowie Installationszugriffstoken abgerufen werden. Weitere Aufgaben können damit über die API nicht durchgeführt werden.

* **F:** Mein Server überwacht keine Ereignisse. Der Smee-Client wird in einem Terminalfenster ausgeführt, und ich installiert die App in einem Repository auf GitHub, aber ich sehe keine Ausgabe im Terminalfenster, in dem ich den Server ausführe.

    **A:** Es kann sein, dass du den Smee-Client nicht ausführst, den Smee-Befehl mit den falschen Parametern ausführst oder in den GitHub-App-Einstellungen nicht über die richtige Smee-Domäne verfügst. Überprüfe zunächst, ob der Smee-Client auf einer Terminalregisterkarte ausgeführt wird. Wenn das nicht das Problem ist, besuche die [Seite der App-Einstellungen](https://github.com/settings/apps), und überprüfe die Felder, die unter [Schritt 2: Registrieren einer neuen GitHub-App](#step-2-register-a-new-github-app) angezeigt werden. Vergewissere dich, dass die Domäne in diesen Feldern mit der Domäne übereinstimmt, die du im Befehl `smee -u <unique_channel>` unter [Schritt 1: Starten eines neuen Smee-Kanals](#step-1-start-a-new-smee-channel) verwendet hast. Wenn keine der obigen Maßnahmen hilft, überprüfe, ob du den vollständigen Smee-Befehl ausführst, einschließlich der Optionen `--path` und `--port`, z. B.: `smee --url https://smee.io/qrfeVRbFbffd6vD --path /event_handler --port 3000` (Ersetze `https://smee.io/qrfeVRbFbffd6vD` durch deine eigene Smee-Domäne).

* **F:** Ich erhalte in meiner Debugausgabe den Fehler `Octokit::NotFound` 404:
    ```
    2018-12-06 15:00:56 - Octokit::NotFound - POST {% data variables.product.api_url_code %}/app/installations/500991/access_tokens: 404 - Not Found // See: /v3/apps/#create-a-new-installation-token:
    ```

    **F:** Vergewissere dich, dass die Variablen in deiner `.env`-Datei richtig sind. Vergewissere dich, dass du keine identischen Variablen in anderen Umgebungsvariablendateien wie `bash_profile` festgelegt hast. Du kannst die von der App verwendeten Umgebungsvariablen überprüfen, indem du dem App-Code `puts`-Anweisungen hinzufügen und den Code erneut ausführst. Wenn du dich beispielsweise vergewissern möchtest, dass du über die richtigen privaten Schlüssel verfügst, könntest du dem App-Code `puts PRIVATE_KEY` hinzufügen:

    ```
    PRIVATE_KEY = OpenSSL::PKey::RSA.new(ENV['GITHUB_PRIVATE_KEY'].gsub('\n', "\n"))
    puts PRIVATE_KEY
    ```

## Schlussbemerkung

Nachdem du diesen Leitfaden durchgearbeitet hast, bist du nun mit den grundlegenden Bausteinen für die Entwicklung von GitHub-Apps vertraut. Du hast folgende Schritte durchgeführt:

* Registrieren einer neuen GitHub-App
* Verwenden von Smee zum Empfangen von Webhooknutzlasten
* Ausführen eines einfachen Webservers über Sinatra
* Authentifizierung als GitHub-App
* Authentifizierung als Installation

## Nächste Schritte

Du verfügst jetzt über eine GitHub-App, die auf einem Server ausgeführt wird. Zwar werden von der App noch keine besonderen Aufgaben ausgeführt, aber in den anderen [Schnellstartanleitungen](/apps/quickstart-guides/) kannst du dir schon einige der Möglichkeiten ansehen, wie du die GitHub-App-Vorlage anpassen kannst.
