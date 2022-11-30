---
title: Konfigurieren eines Webhooks zur Benachrichtigung über Planänderungen
intro: 'Nach dem [Erstellen eines Angebotsentwurfs für {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/) kannst du einen Webhook konfigurieren, der dich benachrichtigt, wenn Änderungen an den Kundenkontoplänen auftreten. Nachdem du den Webhook konfiguriert hast, kann der [Ereignistyp `marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) in deiner App verarbeitet werden.'
redirect_from:
  - /apps/adding-integrations/managing-listings-on-github-marketplace/adding-webhooks-for-a-github-marketplace-listing
  - /apps/marketplace/managing-github-marketplace-listings/adding-webhooks-for-a-github-marketplace-listing
  - /apps/marketplace/setting-up-github-marketplace-webhooks/creating-a-webhook-for-a-github-marketplace-listing
  - /apps/marketplace/listing-on-github-marketplace/configuring-the-github-marketplace-webhook
  - /marketplace/listing-on-github-marketplace/configuring-the-github-marketplace-webhook
  - /developers/github-marketplace/configuring-a-webhook-to-notify-you-of-plan-changes
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Webhooks for plan changes
ms.openlocfilehash: 85ffaa8809860ff4b693075e416723717296f86c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145089700'
---
Der {% data variables.product.prodname_marketplace %}-Ereigniswebhook kann nur über die {% data variables.product.prodname_marketplace %}-Angebotsseite deiner Anwendung eingerichtet werden. Alle anderen Ereignisse kannst du auf der [Seite „Entwicklereinstellungen“ deiner Anwendung](https://github.com/settings/developers) konfigurieren. Wenn du kein {% data variables.product.prodname_marketplace %}-Angebot erstellt hast, findest du Informationen dazu unter [Erstellen eines {% data variables.product.prodname_marketplace %}-Angebotsentwurfs](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/).

## Erstellen eines Webhooks

Zum Erstellen eines Webhooks für dein {% data variables.product.prodname_marketplace %}-Angebot, klicke auf der linken Seitenleiste deiner [{% data variables.product.prodname_marketplace %}-Angebotsseite](https://github.com/marketplace/manage) auf **Webhook**. Es werden die folgenden Optionen für die Webhookkonfiguration angezeigt, die zum Konfigurieren deines Webhooks erforderlich sind:

### URL der Nutzlast

{% data reusables.webhooks.payload_url %}

### Inhaltstyp

{% data reusables.webhooks.content_type %} GitHub empfiehlt die Verwendung des Inhaltstyps `application/json`.

### `Secret`

{% data reusables.webhooks.secret %}

### Aktiv

Standardmäßig sind Webhookübermittlungen „Aktiv“. Du kannst die Übermittlung von Webhooknutzlasten während der Entwicklung deaktivieren, indem du die Auswahl von „Aktiv“ aufhebst. Wenn du Webhookübermittlungen deaktiviert hast, musst du „Aktiv“ auswählen, bevor du deine App zur Überprüfung übermittelst.

## Anzeigen von Webhookübermittlungen

Nachdem du deinen {% data variables.product.prodname_marketplace %}-Webhook konfiguriert hast, kannst du `POST`-Anforderungsnutzdaten auf der Seite **Webhook** des [{% data variables.product.prodname_marketplace %}-Angebots](https://github.com/marketplace/manage) deiner Anwendung überprüfen. Bei fehlerhaften Übermittlungsversuchen führt GitHub keine erneute Übermittlung durch. Stelle daher sicher, dass deine App alle von GitHub gesendeten Webhooknutzlasten empfangen kann.

![Überprüfen der letzten {% data variables.product.prodname_marketplace %}-Webhookübermittlungen](/assets/images/marketplace/marketplace_webhook_deliveries.png)
