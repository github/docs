---
title: Erstellen eines CI-Servers
intro: Erstelle dein eigenes CI-System mithilfe der Status-API.
redirect_from:
  - /guides/building-a-ci-server
  - /v3/guides/building-a-ci-server
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: e8a22317562e209adca6cafa3fb8f1d55b1e04ee
ms.sourcegitcommit: 6b1c6174d0df40c90edfd7526496baabb1dd159d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/04/2022
ms.locfileid: '148132947'
---
Die [Status-API][status API] verknüpft Commits mit einem Testdienst, sodass jeder von Ihnen vorgenommene Push in einem {% data variables.product.product_name %}-Pull Request getestet und dargestellt werden kann.

In diesem Leitfaden wird diese API verwendet, um ein Setup zu veranschaulichen, das du verwenden kannst.
In unserem Szenario werden wir Folgendes tun:

* Wir führen unsere CI-Suite aus, wenn ein Pull Request geöffnet wird (wir legen den CI-Status auf „Ausstehend“ fest).
* Wenn die CI abgeschlossen ist, legen wir den Status des Pull Request entsprechend fest.

Unser CI-System und der Hostserver sind Produkte unserer Vorstellungskraft. Es kann sich um Travis, Jenkins oder ein völlig anderes Produkt handeln. Im Mittelpunkt dieses Leitfadens steht die Einrichtung und Konfiguration des Servers, der die Kommunikation verwaltet.

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

* Status
* Pull Request

Dies sind die Ereignisse, die {% data variables.product.product_name %} an unseren Server sendet, wenn die relevante Aktion durchgeführt wird. Aktualisieren wir unseren Server so, dass er im Moment *nur* das Pull Request-Szenario verarbeitet:

``` ruby
post '/event_handler' do
  @payload = JSON.parse(params[:payload])

  case request.env['HTTP_X_GITHUB_EVENT']
  when "pull_request"
    if @payload["action"] == "opened"
      process_pull_request(@payload["pull_request"])
    end
  end
end

helpers do
  def process_pull_request(pull_request)
    puts "It's #{pull_request['title']}"
  end
end
```

Woran liegt das? Jedes Ereignis, das {% data variables.product.product_name %} sendet, verfügt über einen `X-GitHub-Event`-HTTP-Header. Wir kümmern uns jetzt nur um die PR-Veranstaltungen. Anschließend nehmen wir die Nutzdaten der Informationen und geben das Titelfeld zurück. Im Idealfall würde unser Server bei jeder Aktualisierung eines Pull Request reagieren, nicht nur, wenn er geöffnet wird. Dadurch wäre sichergestellt, dass jeder neue Push die CI-Tests übergibt.
In dieser Demo betrachten wir jedoch nur Fälle, in denen sie geöffnet werden.

Nimm einige Änderungen in einem Branch deines Testrepositorys vor, öffne einen Pull Request, um diesen Proof of Concept zu testen. Dein Server sollte entsprechend reagieren.

## Arbeiten mit Status

Da unser Server nun eingerichtet ist, können wir mit unserer ersten Anforderung beginnen, nämlich dem Festlegen (und Aktualisieren) des CI-Status. Beachte, dass du bei jeder Aktualisierung des Servers auf **Redeliver** (Erneut übermitteln) klicken kannst, um die gleichen Nutzdaten zu senden. Du musst nicht für jede Änderung einen neuen Pull-Request erstellen.

Da wir mit der {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}-API arbeiten, verwenden wir [Octokit.rb][octokit.rb] zum Verwalten unserer Interaktionen. Wir konfigurieren diesen Client mit [einem {% data variables.product.pat_generic %}][access token]:

``` ruby
# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
ACCESS_TOKEN = ENV['MY_PERSONAL_TOKEN']

before do
  @client ||= Octokit::Client.new(:access_token => ACCESS_TOKEN)
end
```

Danach müssen wir den Pull Request auf {% data variables.product.product_name %} lediglich aktualisieren, um zu signalisieren, dass wir einen CI-Prozess ausführen:

``` ruby
def process_pull_request(pull_request)
  puts "Processing pull request..."
  @client.create_status(pull_request['base']['repo']['full_name'], pull_request['head']['sha'], 'pending')
end
```

Hier führen wir drei grundlegende Aktionen aus:

* Wir suchen den vollständigen Namen des Repositorys.
* Wir suchen nach dem letzten SHA-Wert des Pull Request.
* Wir legen den Status auf „Ausstehend“ fest.

Das ist alles! Anschließend kannst du jeden Prozess ausführen, den du zum Ausführen deiner Testsammlung benötigst. Vielleicht übergibst du deinen Code an Jenkins oder rufen einen anderen Webdienst wie [Travis][travis api] über die API auf. Danach solltest du den Status erneut aktualisieren. In unserem Beispiel legen wir ihn einfach auf `"success"` fest:

``` ruby
def process_pull_request(pull_request)
  @client.create_status(pull_request['base']['repo']['full_name'], pull_request['head']['sha'], 'pending')
  sleep 2 # do busy work...
  @client.create_status(pull_request['base']['repo']['full_name'], pull_request['head']['sha'], 'success')
  puts "Pull request processed!"
end
``` 

## Zusammenfassung

Bei GitHub verwenden wir seit Jahren eine Version von [Janky][janky] zum Verwalten der CI.
Der grundlegende Ablauf ist im Wesentlichen derselbe wie bei dem Server, den wir oben erstellt haben.
Bei GitHub tun wir Folgendes:

* Wir tätigen eine Übermittlung an Jenkins, wenn ein Pull Request erstellt oder aktualisiert wird (über Janky).
* Wir warten auf eine Antwort bezüglich des Status der CI.
* Wenn der Code keine Fehler aufweist, führen wir den Pull Request zusammen.

Die gesamte Kommunikation wird zurück in unsere Chatrooms geleitet. Du musst kein eigenes CI-Setup einrichten, um dieses Beispiel zu verwenden.
Du kannst immer auf [GitHub-Integrationen][integrations] zurückgreifen.

[deploy API]: /rest/reference/repos#deployments
[status API]: /rest/reference/commits#commit-statuses
[ngrok]: https://ngrok.com/
[using ngrok]: /webhooks/configuring/#using-ngrok
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/building-a-ci-server
[Sinatra]: http://www.sinatrarb.com/
[webhook]: /webhooks/
[octokit.rb]: https://github.com/octokit/octokit.rb
[access token]: /articles/creating-an-access-token-for-command-line-use
[travis api]: https://api.travis-ci.org/docs/
[janky]: https://github.com/github/janky
[heaven]: https://github.com/atmos/heaven
[hubot]: https://github.com/github/hubot
[integrations]: https://github.com/integrations
