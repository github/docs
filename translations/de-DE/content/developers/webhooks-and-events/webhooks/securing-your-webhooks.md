---
title: Sichern deiner Webhooks
intro: 'Stelle aus Sicherheitsgründen sicher, dass dein Server nur die erwarteten Anforderungen von {% data variables.product.prodname_dotcom %} erhält.'
redirect_from:
  - /webhooks/securing
  - /developers/webhooks-and-events/securing-your-webhooks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
ms.openlocfilehash: c3597365ae7cf9f96375201d6938c4f6675a8eae
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147707479'
---
Sobald dein Server für das Erhalten von Nutzdaten konfiguriert ist, lauscht dieser auf jegliche Nutzdaten, die zu dem von dir konfigurierten Endpunkt gesendet werden. Aus Sicherheitsgründen solltest du ausschließlich Anforderungen von GitHub zulassen. Dafür gibt es verschiedene Möglichkeiten. Beispielsweise kannst du bestimmen, dass nur Anforderungen von der IP-Adresse von GitHub angenommen werden. Es ist jedoch weitaus einfacher, ein geheimes Token einzurichten und die Informationen zu überprüfen.

{% data reusables.webhooks.webhooks-rest-api-links %}

## Einrichten des geheimen Tokens

Du musst dein geheimes Token an zwei Orten einrichten: auf GitHub und auf deinem Server.

So richtest du dein Token auf GitHub ein:

1. Navigiere zu dem Repository, in dem du den Webhook einrichtest.
2. Fülle das Textfeld „Geheimnis“ aus. Verwende eine zufällige Zeichenfolge mit hoher Entropie, z. B. durch die Ausgabe von `ruby -rsecurerandom -e 'puts SecureRandom.hex(20)'` am Terminal.
![Das Feld für das geheime Token des Webhooks](/assets/images/webhook_secret_token.png)
3. Klicke auf **Webhook aktualisieren**.

Richte als Nächstes eine Umgebungsvariable auf deinem Server ein, die dieses Token speichert. Dazu musst du in der Regel nur Folgendes ausführen:

```shell
$ export SECRET_TOKEN=<em>your_token</em>
```

Du solltest das Token **niemals** in deine App hartcodieren.

## Überprüfen von GitHub-Nutzlasten

Wenn dein geheimes Token eingerichtet ist, wird es von {% data variables.product.product_name %} verwendet, um eine Hashsignatur für alle Nutzdaten zu erstellen. Diese Hashsignatur ist in den Headern jeder Anforderung als `x-hub-signature-256` enthalten.

{% ifversion fpt or ghes or ghec %} {% note %}

**Hinweis:** Aus Gründen der Abwärtskompatibilität fügen wir auch den `x-hub-signature`-Header ein, der mithilfe der SHA-1-Hashfunktion generiert wird. Wenn möglich, solltest du den `x-hub-signature-256`-Header verwenden, um mehr Sicherheit zu gewährleisten. Im Beispiel unten wird die Verwendung des `x-hub-signature-256`-Headers veranschaulicht.

{% endnote %} {% endif %}

Wenn du beispielsweise über einen einfachen Server verfügst, der auf Webhooks lauscht, kann er folgendermaßen konfiguriert sein:

``` ruby
require 'sinatra'
require 'json'

post '/payload' do
  request.body.rewind
  push = JSON.parse(request.body.read)
  "I got some JSON: #{push.inspect}"
end
```

Mithilfe deines `SECRET_TOKEN` soll ein Hash berechnet und sichergestellt werden, dass das Ergebnis mit dem Hash von {% data variables.product.product_name %} übereinstimmt. {% data variables.product.product_name %} verwendet einen HMAC-Digest mit hexadezimalen Ziffern, um den Hash zu berechnen, sodass du deinen Server so neu konfigurieren können, dass er wie folgt aussieht:

``` ruby
post '/payload' do
  request.body.rewind
  payload_body = request.body.read
  verify_signature(payload_body)
  push = JSON.parse(payload_body)
  "I got some JSON: #{push.inspect}"
end

def verify_signature(payload_body)
  signature = 'sha256=' + OpenSSL::HMAC.hexdigest(OpenSSL::Digest.new('sha256'), ENV['SECRET_TOKEN'], payload_body)
  return halt 500, "Signatures didn't match!" unless Rack::Utils.secure_compare(signature, request.env['HTTP_X_HUB_SIGNATURE_256'])
end
```

{% note %}

**Hinweis:** Webhook-Nutzdaten können Unicode-Zeichen enthalten. Wenn deine Sprach- und Serverimplementierung eine Zeichencodierung angibt, musst du sicherstellen, dass diese Nutzdaten als UTF-8 behandelt werden.

{% endnote %}

Deine Sprach- und Serverimplementierungen können sich von denen in diesem Beispielcode unterscheiden. Einige wichtige Dinge solltest du jedoch beachten:

* Unabhängig von der verwendeten Implementierung beginnt die Hashsignatur mit `sha256=` und verwendet den Schlüssel deines geheimen Tokens sowie deinen Nutzdatentext.

* Die Verwendung eines einfachen `==`-Operators wird **nicht empfohlen**. Eine Methode wie [`secure_compare`][secure_compare] führt einen „constant time“-Zeichenfolgenvergleich durch, wodurch bestimmte Zeitangriffe gegen Gleichheitsoperatoren verringert werden.

[secure_compare]: https://rubydoc.info/github/rack/rack/main/Rack/Utils:secure_compare
