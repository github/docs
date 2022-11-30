---
title: Erstellen von Webhooks
intro: 'Erfahre, wie du einen Webhook erstellst, indem du die Ereignisse auswählst, die dein Webhook auf {% data variables.product.prodname_dotcom %} und wie du einen Server einrichtest, um die Webhook-Nutzlast zu empfangen und zu verwalten.'
redirect_from:
  - /webhooks/creating
  - /developers/webhooks-and-events/creating-webhooks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
ms.openlocfilehash: ced763e71ecc9f99d8dd5037dcdb6d87cfdba91d
ms.sourcegitcommit: 6b1c6174d0df40c90edfd7526496baabb1dd159d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/04/2022
ms.locfileid: '148132971'
---
Nachdem wir uns mit den [Grundlagen von Webhooks][webhooks-overview] vertraut gemacht haben, gehen wir nun den Prozess durch, der zum Ausbauen unserer eigenen webhookunterstützten Integration erforderlich ist. In diesem Tutorial erstellen wir einen Repositorywebhook, der die Popularität unseres Repositorys basierend auf der Anzahl der pro Tag eingehenden Issues auflistet.

Die Erstellung eines Webhooks erfolgt in zwei Schritten. Du musst zunächst festlegen, an welche Ereignisse dein Webhook lauschen soll. Anschließend musst du deinen Server für Empfang und Verwaltung der Nutzdaten einrichten.


{% data reusables.webhooks.webhooks-rest-api-links %}

## Verfügbarmachen des Localhosts im Internet

Im Rahmen dieses Tutorials verwenden wir einen lokalen Server, um Webhookereignisse von {% data variables.product.prodname_dotcom %} zu empfangen. 

Zunächst müssen wir unsere lokale Entwicklungsumgebung im Internet verfügbar machen, damit {% data variables.product.prodname_dotcom %} Ereignisse liefern kann. Wir verwenden dazu [`ngrok`](https://ngrok.com).

{% ifversion cli-webhook-forwarding %} {% note %}

**Hinweis:** Alternativ kannst du die Webhookweiterleitung verwenden, um deine lokale Umgebung für den Empfang von Webhooks einzurichten. Weitere Informationen finden Sie unter [Empfangen von Webhooks mit der GitHub CLI](/developers/webhooks-and-events/webhooks/receiving-webhooks-with-the-github-cli).

{% endnote %} {% endif %}

`ngrok` ist kostenlos für alle gängigen Betriebssysteme verfügbar. Weitere Informationen findest du auf der [`ngrok`-Downloadseite](https://ngrok.com/download).

Nach der Installation von `ngrok` kannst du deinen Localhost verfügbar machen, indem du über die Befehlszeile `./ngrok http 4567` ausführst. `4567` ist die Portnummer, auf der unser Server auf Meldungen lauscht. Du solltest eine Zeile sehen, die wie folgt aussieht:

```shell
$ Forwarding  http://7e9ea9dc.ngrok.io -> 127.0.0.1:4567
```

Notiere dir die `*.ngrok.io`-URL. Wir werden sie für die Einrichtung des Webhooks verwenden.

## Einrichten eines Webhooks

Du kannst Webhooks in einer Organisation oder in einem bestimmten Repository installieren.

Zum Einrichten eines Webhooks gehe zur Einstellungsseite des Repositorys oder der Organisation. Klicke von dort aus auf **Webhooks** und dann auf **Webhook hinzufügen**.

Alternativ kannst du einen Webhook [über die Webhook-API erstellen und verwalten][webhook-api].

Bevor du Webhooks verwenden kannst, sind einige Konfigurationsoptionen für sie erforderlich. Diese Einstellungen werden im Folgenden einzeln erläutert.

## URL der Nutzlast

{% data reusables.webhooks.payload_url %}

Da die Entwicklung lokal für das Tutorial erfolgt, legen wir die `*.ngrok.io`-URL fest, gefolgt von `/payload`. Beispiel: `http://7e9ea9dc.ngrok.io/payload`.

## Inhaltstyp

{% data reusables.webhooks.content_type %} Für dieses Tutorial ist der Standardinhaltstyp `application/json` in Ordnung.

## `Secret`

{% data reusables.webhooks.secret %}

## SSL-Überprüfung

{% data reusables.webhooks.webhooks_ssl %}

## Aktiv

Webhookzustellungen sind standardmäßig „Aktiv“. Du kannst die Zustellung von Webhooknutzdaten während der Entwicklung deaktivieren, indem du die Auswahl von „Aktiv“ aufhebst.

## Ereignisse

Ereignisse sind das Kernstück von Webhooks. Diese Webhooks werden ausgelöst, wenn eine bestimmte Aktion im Repository ausgeführt wird. Die Nutzdaten-URL des Servers fängt diese ab und reagiert darauf.

Eine vollständige Liste der Webhookereignisse und Informationen dazu, wann diese ausgeführt werden, findest du in der Referenz zur [Webhooks-API][hooks-api].

Da der Webhook Issues in einem Repository behandelt, klicken wir auf **Einzelne Ereignisse auswählen** und dann auf **Issues**. Stelle sicher, dass zum Empfangen von Problemereignissen für ausgelöste Webhooks **Aktiv** ausgewählt ist. Du kannst auch alle Ereignisse mithilfe der Standardoption auswählen.

Wenn du fertig bist, klicke auf **Webhook hinzufügen**. 

Nachdem du den Webhook erstellt hast, ist es an der Zeit, den lokalen Server einzurichten, um den Webhook zu testen. Navigiere zu [Konfigurieren des Servers](/webhooks/configuring/), um zu erfahren, wie du dabei vorgehen musst.

### Platzhalterereignis

Zum Konfigurieren eines Webhooks für alle Ereignisse verwende das Platzhalterzeichen (`*`), um die Webhookereignisse anzugeben. Wenn du das Platzhalterereignis hinzufügst, ersetzen wir alle vorhandenen Ereignisse, die du mit dem Platzhalterereignis konfiguriert hast, und senden dir Nutzdaten für alle unterstützten Ereignisse zu. Außerdem erhältst du automatisch alle neuen Ereignisse, die wir in Zukunft hinzufügen.

[webhooks-overview]: /webhooks/
[webhook-api]: /rest/reference/repos#hooks
[hooks-api]: /webhooks/#events
