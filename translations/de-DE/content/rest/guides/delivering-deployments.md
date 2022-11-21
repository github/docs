---
title: Übermitteln von Bereitstellungen
intro: 'Mithilfe der REST-API für Bereitstellungen kannst du benutzerdefinierte Tools erstellen, die mit deinem Server und einer Drittanbieter-App interagieren.'
redirect_from:
  - /guides/delivering-deployments
  - /guides/automating-deployments-to-integrators
  - /v3/guides/delivering-deployments
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: 7ac423a27fe8b1c145efa3c135d88f08487f153a
ms.sourcegitcommit: 6b1c6174d0df40c90edfd7526496baabb1dd159d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/04/2022
ms.locfileid: '148132989'
---
Mit der [Bereitstellungs-API][deploy API] kannst du deine Projekte, die auf {% data variables.product.product_name %} gehostet werden, auf einem Server starten, den du besitzt. In Verbindung mit [der Status-API][status API] kannst du deine Bereitstellungen koordinieren, sobald der Code im Standardbranch vorliegt.

In diesem Leitfaden wird diese API verwendet, um ein Setup zu veranschaulichen, das du verwenden kannst.
In unserem Szenario werden wir Folgendes tun:

* Wir führen einen Pull Request zusammen.
* Wenn die CI abgeschlossen ist, legen wir den Status des Pull Request entsprechend fest.
* Wenn der Pull Request zusammengeführt wurde, führen wir unsere Bereitstellung auf dem Server aus.

Unser CI-System und der Hostserver sind Produkte unserer Vorstellungskraft. Dabei könnte es sich um Heroku, Amazon oder etwas ganz anderes handeln. Im Mittelpunkt dieses Leitfadens steht die Einrichtung und Konfiguration des Servers, der die Kommunikation verwaltet.

Wenn du den [Download von `ngrok`][ngrok] noch nicht durchgeführt hast, solltest du dies tun und den [Umgang damit lernen][using ngrok]. Dieses Toll ist hilfreich bei der Veröffentlichung lokaler Anwendungen im Internet.

{% ifversion cli-webhook-forwarding %} {% note %}

**Hinweis:** Alternativ kannst du die Webhookweiterleitung verwenden, um deine lokale Umgebung für den Empfang von Webhooks einzurichten. Weitere Informationen finden Sie unter [Empfangen von Webhooks mit der GitHub CLI](/developers/webhooks-and-events/webhooks/receiving-webhooks-with-the-github-cli).

{% endnote %} {% endif %}

Hinweis: Du kannst den vollständigen Quellcode für dieses Projekt [aus dem Repository mit den Plattformbeispielen][platform samples] herunterladen.

## Schreiben des Servers

Wir schreiben eine einfache Sinatra-App, um zu zeigen, dass unsere lokalen Verbindungen funktionieren.
Beginnen wir hiermit:

``` ruby
require 'sinatra'
require 'json'

post '/event_handler' do
  payload = JSON.parse(params[:payload])
  "Well, it worked!"
end
```

(Wenn du nicht mit der Funktionsweise von Sinatra vertraut bist, solltest du den [Sinatra-Leitfaden][Sinatra] lesen.)

Starte diesen Server. Sinatra wird standardmäßig auf Port `4567` gestartet. Daher solltest du `ngrok` so konfigurieren, dass es ebenfalls auf diesen Port lauscht.

Damit dieser Server funktioniert, müssen wir ein Repository mit einem Webhook einrichten.
Dieser Webhook sollte so konfiguriert werden, dass er ausgelöst wird, wenn ein Pull Request erstellt oder zusammengeführt wird.
Erstelle nun ein Repository, mit dem du experimentieren kannst. Wie wäre es mit dem @octocatSpoon/Knife-Repository von [?](https://github.com/octocat/Spoon-Knife)
Danach erstellst du einen neuen Webhook in deinem Repository, fügst die von `ngrok` bereitgestellte URL hinzu und wählst `application/x-www-form-urlencoded` als Inhaltstyp aus:

![Eine neue ngrok-URL](/assets/images/webhook_sample_url.png)

Klicke auf **Webhook aktualisieren**. Der Antworttext `Well, it worked!` sollte angezeigt werden.
Sehr gut! Klicke auf **Individuelle Ereignisse auswählen**, und wähle Folgendes aus:

* Bereitstellung
* Bereitstellungsstatus
* Pull Request

Dies sind die Ereignisse, die {% data variables.product.product_name %} an unseren Server sendet, wenn die relevante Aktion durchgeführt wird. Wir konfigurieren unseren Server so, dass er *nur* Verarbeitungen durchführt, wenn Pull Requests sofort zusammengeführt werden:

``` ruby
post '/event_handler' do
  @payload = JSON.parse(params[:payload])

  case request.env['HTTP_X_GITHUB_EVENT']
  when "pull_request"
    if @payload["action"] == "closed" && @payload["pull_request"]["merged"]
      puts "A pull request was merged! A deployment should start now..."
    end
  end
end
```

Woran liegt das? Jedes Ereignis, das {% data variables.product.product_name %} sendet, verfügt über einen `X-GitHub-Event`-HTTP-Header. Wir kümmern uns jetzt nur um die PR-Veranstaltungen. Wenn ein Pull Request zusammengeführt wird (der Status lautet `closed`, und `merged` ist `true`), starten wir eine Bereitstellung.

Nimm einige Änderungen in einem Branch deines Testrepositorys vor, öffne einen Pull Request, und merge sie, um diesen Proof of Concept zu testen. Dein Server sollte entsprechend reagieren.

## Arbeiten mit Bereitstellungen

Sobald unser Server eingerichtet ist, der Code überprüft und unser Pull Request zusammengeführt wurde, möchten wir unser Projekt bereitstellen.

Zunächst ändern wir unseren Ereignislistener so, dass er Pull Requests verarbeitet, wenn sie zusammengeführt werden, und beginnen, auf Bereitstellungen zu reagieren:

``` ruby
when "pull_request"
  if @payload["action"] == "closed" && @payload["pull_request"]["merged"]
    start_deployment(@payload["pull_request"])
  end
when "deployment"
  process_deployment(@payload)
when "deployment_status"
  update_deployment_status
end
```

Anhand der Informationen aus dem Pull Request beginnen wir mit dem Ausfüllen der `start_deployment`-Methode:

``` ruby
def start_deployment(pull_request)
  user = pull_request['user']['login']
  payload = JSON.generate(:environment => 'production', :deploy_user => user)
  @client.create_deployment(pull_request['head']['repo']['full_name'], pull_request['head']['sha'], {:payload => payload, :description => "Deploying my sweet branch"})
end
```

Bereitstellungen können in Form einer `payload` und einer `description` über Metadaten verfügen. Auch wenn diese Werte optional sind, ist es hilfreich, sie zum Protokollieren und Darstellen von Informationen zu verwenden.

Wenn eine neue Bereitstellung erstellt wird, wird ein völlig separates Ereignis ausgelöst. Daher haben wir einen neuen `switch`-Fall im Ereignishandler für `deployment`. Du kannst diese Informationen verwenden, um benachrichtigt zu werden, wenn eine Bereitstellung ausgelöst wurde.

Bereitstellungen können eine lange Zeit dauern. Daher sollten wir auf verschiedene Ereignisse lauschen, z. B. wann die Bereitstellung erstellt wurde und in welchem Zustand sie sich befindet.

Lass uns eine Bereitstellung simulieren, die einige Aufgaben ausführt, und beobachten, wie sich dies auf die Ausgabe auswirkt. Zunächst sollten wir unsere `process_deployment`-Methode abschließen:

``` ruby
def process_deployment
  payload = JSON.parse(@payload['payload'])
  # you can send this information to your chat room, monitor, pager, etc.
  puts "Processing '#{@payload['description']}' for #{payload['deploy_user']} to #{payload['environment']}"
  sleep 2 # simulate work
  @client.create_deployment_status("repos/#{@payload['repository']['full_name']}/deployments/#{@payload['id']}", 'pending')
  sleep 2 # simulate work
  @client.create_deployment_status("repos/#{@payload['repository']['full_name']}/deployments/#{@payload['id']}", 'success')
end
```

Schließlich simulieren wir das Speichern der Statusinformationen als Konsolenausgabe:

``` ruby
def update_deployment_status
  puts "Deployment status for #{@payload['id']} is #{@payload['state']}"
end
```

Lass uns aufschlüsseln, was gerade passiert. Eine neue Bereitstellung wird von `start_deployment` erstellt, wodurch das `deployment`-Ereignis ausgelöst wird. Anschließend rufen wir `process_deployment` auf, um andauernde Prozesse zu simulieren. Während dieser Verarbeitung rufen wir ebenfalls `create_deployment_status` auf, wodurch wir einen Empfänger über den Stand der Dinge informieren, während wir den Status auf `pending` festlegen.

Nach Abschluss der Bereitstellung legen wir den Status auf `success` fest.

## Zusammenfassung

Bei GitHub haben wir seit Jahren eine Version von [Heaven][heaven] verwendet, um unsere Bereitstellungen zu verwalten. Der allgemeine Ablauf ist im Wesentlichen derselbe wie bei dem Server, den wir oben erstellt haben:

* Warte auf eine Antwort auf den Status der CI-Überprüfungen (Erfolg oder Fehler).
* Wenn die erforderlichen Überprüfungen erfolgreich waren, führe den Pull Request zusammen.
* Heaven nimmt den zusammengeführten Code und stellt ihn für Staging- und Produktionsserver bereit.
* In der Zwischenzeit benachrichtigt Heaven auch alle über den Build, und zwar über den [Hubot][hubot]-Agent, der sich in unseren Chaträumen befindet.

Das ist alles! Um dieses Beispiel zu verwenden, musst du kein eigenes Bereitstellungssetup kompilieren.
Du kannst immer auf [GitHub-Integrationen][integrations] zurückgreifen.

[deploy API]: /rest/reference/repos#deployments
[status API]: /guides/building-a-ci-server
[ngrok]: https://ngrok.com/
[using ngrok]: /webhooks/configuring/#using-ngrok
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/delivering-deployments
[Sinatra]: http://www.sinatrarb.com/
[webhook]: /webhooks/
[octokit.rb]: https://github.com/octokit/octokit.rb
[access token]: /articles/creating-an-access-token-for-command-line-use
[travis api]: https://api.travis-ci.org/docs/
[janky]: https://github.com/github/janky
[heaven]: https://github.com/atmos/heaven
[hubot]: https://github.com/github/hubot
[integrations]: https://github.com/integrations
