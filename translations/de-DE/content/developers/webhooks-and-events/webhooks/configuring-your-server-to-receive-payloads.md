---
title: Konfigurieren des Servers zum Empfangen von Payloads
intro: 'Hier erfährst du, wie du einen Server einrichtest, um eingehende Webhooknutzlasten zu verwalten.'
redirect_from:
  - /webhooks/configuring
  - /developers/webhooks-and-events/configuring-your-server-to-receive-payloads
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
shortTitle: Configure server for webhooks
ms.openlocfilehash: c306cadf4dd8d9cd573d694419a51179c8995797
ms.sourcegitcommit: 6b1c6174d0df40c90edfd7526496baabb1dd159d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/04/2022
ms.locfileid: '148132982'
---
Nachdem unser Webhook bereit ist, Nachrichten zu übermitteln, richten wir einen grundlegenden Sinatra-Server ein, um eingehende Payloads zu verarbeiten.

{% note %}

**Hinweis**: Du kannst den vollständigen Quellcode für dieses Projekt [aus dem Repository mit den Plattformbeispielen][platform samples] herunterladen.

{% endnote %}

## Schreiben des Servers

Wir möchten, dass unser Server unter `/payload` auf `POST`-Anforderungen lauscht, da wir GitHub mitgeteilt haben, dass sich dort unsere Webhook-URL befindet. Da wir `ngrok` verwenden, um unsere lokale Umgebung verfügbar zu machen, müssen wir keinen echten Server irgendwo online einrichten und können unseren Code einfach lokal testen.

Richten wir eine kleine Sinatra-App ein, damit etwas mit den Informationen passiert. Die erste Einrichtung könnte ungefähr so aussehen:

``` ruby
require 'sinatra'
require 'json'

post '/payload' do
  push = JSON.parse(request.body.read)
  puts "I got some JSON: #{push.inspect}"
end
```

(Wenn du nicht mit der Funktionsweise von Sinatra vertraut bist, solltest du den [Sinatra-Leitfaden][Sinatra] lesen.)

Starte diesen Server.

Da wir unseren Webhook so eingerichtet haben, dass er auf Ereignisse zu `Issues` lauscht, erstelle ein neues Issue in dem Repository, mit dem du testest. Wechsle nach der Erstellung wieder zum Terminal. In der Ausgabe sollte etwa Folgendes angezeigt werden:

```shell
$ ~/Developer/platform-samples/hooks/ruby/configuring-your-server $ ruby server.rb
> == Sinatra/1.4.4 has taken the stage on 4567 for development with backup from Thin
> >> Thin web server (v1.5.1 codename Straight Razor)
> >> Maximum connections set to 1024
> >> Listening on localhost:4567, CTRL+C to stop
> I got some JSON: {"action"=>"opened", "issue"=>{"url"=>"...
```

Erfolg! Du hast deinen Server erfolgreich so konfiguriert, dass er auf Webhooks lauscht. Dein Server kann diese Informationen jetzt auf jede Weise verarbeiten, die dir gefällt. Wenn du beispielsweise eine echte Webanwendung einrichtest, kann es sinnvoll sein, die JSON-Ausgabe in einer Datenbank zu protokollieren.

Weitere Informationen zum Arbeiten mit Webhooks – ob beruflich oder rein aus Spaß – findest du im Leitfaden zum [Testen von Webhooks](/webhooks/testing).

[platform samples]: https://github.com/github/platform-samples/tree/master/hooks/ruby/configuring-your-server
[Sinatra]: http://www.sinatrarb.com/
