---
title: Behandeln von Planänderungen
intro: 'Durch das Up- oder Downgrade einer {% data variables.product.prodname_marketplace %}-App wird der [`marketplace_purchase`-Ereigniswebhook](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) mit der `changed`-Aktion ausgelöst, die den Up- oder Downgradeflow auslöst.'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/upgrading-or-downgrading-plans
  - /apps/marketplace/integrating-with-the-github-marketplace-api/upgrading-and-downgrading-plans
  - /marketplace/integrating-with-the-github-marketplace-api/upgrading-and-downgrading-plans
  - /developers/github-marketplace/handling-plan-changes
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
ms.openlocfilehash: fd5cc838c01130ab9e8a1f7c040b254655cbaef0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145131302'
---
Weitere Informationen zu Upgrades und Downgrades im Zusammenhang mit der Abrechnung findest du unter [Integration in die {% data variables.product.prodname_marketplace %}-API](/marketplace/integrating-with-the-github-marketplace-api/).

## Schritt 1: Ereignis zur Preisplanänderung

GitHub sendet den `marketplace_purchase`-Webhook mit der `changed`-Aktion an deine App, wenn ein Kunde eine der folgenden Änderungen an seiner {% data variables.product.prodname_marketplace %}-Bestellung vornimmt:
* Durchführen eines Upgrades auf einen teureren Preisplan oder eines Downgrades auf einen günstigeren Preisplan
* Hinzufügen oder Entfernen von Arbeitsplätzen zum bzw. aus dem vorhandenen Plan
* Ändern des Abrechnungszyklus

GitHub sendet den Webhook, wenn die Änderung wirksam wird. Wenn ein Kunde z. B. einen Plan herabstuft, sendet GitHub den Webhook am Ende des Abrechnungszyklus für den Kunden. Wenn ein Kunde ein Upgrade für seinen Plan durchführt, sendet GitHub sofort einen Webhook an deine App, damit der Kunde direkt auf den neuen Dienst zugreifen kann. Wenn ein Kunde von einem monatlichen zu einem jährlichen Abrechnungszyklus wechselt, wird dies als Upgrade betrachtet. Weitere Informationen dazu, welche Aktionen als Upgrade oder Downgrade eingestuft werden, findest du unter [Abrechnen für Kunden im {% data variables.product.prodname_marketplace %}](/marketplace/selling-your-app/billing-customers-in-github-marketplace/).

Lies `effective_date`, `marketplace_purchase` und `previous_marketplace_purchase` aus dem `marketplace_purchase`-Webhook, um das Startdatum des Plans zu aktualisieren und Änderungen am Abrechnungszyklus und am Preisplan des Kunden vorzunehmen. Unter [{% data variables.product.prodname_marketplace %}-Webhookereignisse](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) findest du ein Beispiel für die `marketplace_purchase`-Ereignisnutzdaten.

Wenn deine App kostenlose Testversionen anbietet, erhältst du den `marketplace_purchase`-Webhook mit der `changed`-Aktion, wenn die kostenlose Testversion abläuft. Wenn die kostenlose Testversion des Kunden abläuft, führe für den Kunden ein Upgrade auf die kostenpflichtige Version des kostenlosen Testplans durch.

## Schritt 2: Aktualisieren von Kundenkonten

Du musst die Kontoinformationen des Kunden auf die Abrechnungszyklus- und Preisplanänderungen aktualisieren, die der Kunde an seiner {% data variables.product.prodname_marketplace %}-Bestellung vorgenommen hat. Zeige Upgrades auf den Preisplan, `seat_count` (für Preispläne pro Einheit) und Abrechnungszyklus auf der Website deiner Marketplace-App oder der Benutzeroberfläche deiner App an, wenn du den `changed`-Aktionswebhook erhältst.

Wenn ein Kunde einen Plan herabstuft, empfiehlt es sich, zu überprüfen, ob der Kunde die Grenzwerte des Plans überschritten hat. In diesem Fall solltest du direkt in deiner Benutzeroberfläche oder per Telefon oder E-Mail Kontakt aufnehmen.

Um Personen zum Upgrade zu ermuntern, kannst du eine Upgrade-URL in der Benutzeroberfläche deiner App anzeigen. Weitere Informationen findest du unter [Informationen zu Upgrade-URLs](#about-upgrade-urls).

{% note %}

**Hinweis:** Es wird empfohlen, eine regelmäßige Synchronisierung über `GET /marketplace_listing/plans/:id/accounts` durchzuführen, um sicherzustellen, dass deine App für jedes Konto über den richtigen Plan, die korrekten Informationen zum Abrechnungszyklus und die richtige Einheitenanzahl (für Preise pro Einheit) verfügt.

{% endnote %}

## Fehlerhafte Upgradezahlungen

{% data reusables.marketplace.marketplace-failed-purchase-event %}

## Informationen zu Upgrade-URLs

Über eine Upgrade-URL kannst du Benutzer von der Benutzeroberfläche deiner App umleiten, um ein Upgrade auf GitHub auszuführen:

```text
https://www.github.com/marketplace/<LISTING_NAME>/upgrade/<LISTING_PLAN_NUMBER>/<CUSTOMER_ACCOUNT_ID>
```

Wenn du beispielsweise feststellst, dass ein Kunde einen 5-Personen-Plan verwendet und zu einem 10-Personen-Plan wechseln muss, kannst du in der Benutzeroberfläche deiner App eine Schaltfläche mit dem Hinweis „Hier erhältst du Informationen zum Upgrade“ oder ein Banner mit einem Link zur Upgrade-URL anzeigen. Die Upgrade-URL führt den Kunden zur Upgradebestätigungsseite deines Listingplans.

Verwende die `LISTING_PLAN_NUMBER` für den Plan, den der Kunde erwerben möchte. Wenn du neue Preispläne erstellst, erhalten diese eine `LISTING_PLAN_NUMBER`, die für jeden Plan in deinem Listing eindeutig ist, sowie eine `LISTING_PLAN_ID`, die für jeden Plan im {% data variables.product.prodname_marketplace %} eindeutig ist. Du kannst diese Nummern finden, indem du [Pläne auflistest](/rest/reference/apps#list-plans). Dadurch werden die Preispläne deines Listings identifiziert. Verwende die `LISTING_PLAN_ID` und den Endpunkt [Konten für einen Plan auflisten](/rest/reference/apps#list-accounts-for-a-plan), um den `CUSTOMER_ACCOUNT_ID`-Endpunkt abzurufen.


{% note %}

**Hinweis**: Wenn dein Kunde ein Upgrade auf zusätzliche Einheiten (z. B. Arbeitsplätze) durchführt, kannst du ihn zwar an den entsprechenden Plan für den Kauf verweisen, aber wir können `unit_count`-Parameter derzeit nicht unterstützen.

{% endnote %}
