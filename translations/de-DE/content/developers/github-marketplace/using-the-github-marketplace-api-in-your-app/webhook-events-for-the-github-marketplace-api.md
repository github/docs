---
title: Webhook-Ereignisse für die GitHub Marketplace-API
intro: 'Eine {% data variables.product.prodname_marketplace %}-App empfängt Informationen zu Änderungen am Plan eines Benutzers aus dem Marketplace-Kaufereignis-Webhook. Ein Marketplace-Kaufereignis wird ausgelöst, wenn ein Benutzer seinen Zahlungsplan kauft, abbricht oder ändert.'
redirect_from:
  - /apps/marketplace/setting-up-github-marketplace-webhooks/about-webhook-payloads-for-a-github-marketplace-listing
  - /apps/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events
  - /marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events
  - /developers/github-marketplace/webhook-events-for-the-github-marketplace-api
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Webhook events
ms.openlocfilehash: 63b99005c5b0da23c59794d8fd7ad724f5afd13a
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147710403'
---
## {% data variables.product.prodname_marketplace %}-Kauf-Webhook-Payload

Webhook-`POST`-Anforderungen verfügen über spezielle Header. Weitere Einzelheiten findest du unter [Webhook-Übermittlungsheader](/webhooks/event-payloads/#delivery-headers). Bei fehlerhaften Übermittlungsversuchen führt GitHub keine erneute Übermittlung durch. Stelle daher sicher, dass deine App alle von GitHub gesendeten Webhook-Payloads empfangen kann.

Abgebrochene Vorgänge und Downgrades werden am ersten Tag des nächsten Abrechnungszyklus wirksam. Ereignisse für Downgrades und abgebrochene Vorgänge werden gesendet, wenn der neue Plan zu Beginn des nächsten Abrechnungszyklus wirksam wird. Ereignisse für neue Käufe und Upgrades beginnen umgehend. Verwende `effective_date` in der Webhook-Payload, um den Zeitpunkt zu bestimmen, an dem eine Änderung wirksam wird.

{% data reusables.marketplace.marketplace-malicious-behavior %}

Jede `marketplace_purchase`-Webhook-Payload umfasst die folgenden Informationen:


Schlüssel | type | BESCHREIBUNG
----|------|-------------
`action` | `string` | Die Aktion, die zum Generieren des Webhooks ausgeführt wurde. Mögliche Aktionen sind `purchased`, `cancelled`, `pending_change`, `pending_change_cancelled` oder `changed`. Weitere Informationen findest du in den Beispielen für Webhook-Payloads unten. **Hinweis:** Die Payloads `pending_change` und `pending_change_cancelled` enthalten dieselben Schlüssel wie das [`changed`-Payload-Beispiel](#example-webhook-payload-for-a-changed-event).
`effective_date` | `string` | Das Datum, an dem die Aktion (`action`) wirksam wird.
`sender` | `object` | Die Person, die die Aktion (`action`) ausgeführt hat, durch die der Webhook ausgelöst wurde.
`marketplace_purchase` | `object` | Die {% data variables.product.prodname_marketplace %}-Kaufinformationen.

Das Objekt `marketplace_purchase` verfügt über die folgenden Schlüssel:

Schlüssel | type | BESCHREIBUNG
----|------|-------------
`account` | `object` | Das mit dem `organization`- oder `user`-Konto verknüpfte Abonnement. Organisationskonten umfassen einen `organization_billing_email`-Wert, bei dem es sich um die administrative E-Mail-Adresse der Organisation handelt. Für die Suche nach E-Mail-Adressen für persönliche Konten kannst du den Endpunkt [Abrufen des authentifizierten Benutzers](/rest/reference/users#get-the-authenticated-user) verwenden.
`billing_cycle` | `string` | Kann `yearly` oder `monthly` sein. Wenn die*der `account`-Besitzer*in über einen kostenlosen GitHub-Plan verfügt und einen kostenlosen {% data variables.product.prodname_marketplace %}-Plan erworben hat, weist `billing_cycle` den Wert `nil` auf.
`unit_count`  | `integer` | Anzahl von erworbenen Einheiten.
`on_free_trial` | `boolean` | `true`, wenn das Konto (`account`) mit der kostenlosen Testversion verwendet wird.
`free_trial_ends_on` | `string` | Das Datum, an dem die kostenlose Testversion abläuft.
`next_billing_date` | `string` | Das Datum, an dem der nächste Abrechnungszyklus beginnt. Wenn die*der `account`-Besitzer*in über einen kostenlosen GitHub.com-Plan verfügt und einen kostenlosen {% data variables.product.prodname_marketplace %}-Plan erworben hat, weist `next_billing_date` den Wert `nil` auf.
`plan` | `object` | Der Plan, der von der Benutzerin oder vom Benutzer (`user`) oder von der Organisation (`organization`) erworben wurde.

Das Objekt `plan` verfügt über die folgenden Schlüssel:

Schlüssel | type | BESCHREIBUNG
----|------|-------------
`id` | `integer` | Der eindeutige Bezeichner für diesen Plan.
`name` | `string` | Der Name des Plans.
`description` | `string` | Die Beschreibung dieses Plans.
`monthly_price_in_cents` | `integer` | Der monatliche Preis dieses Plans in Cent (US-Währung). Beispiel: Der Preis für einen Eintrag, der 10 US-Dollar pro Monat kostet, beträgt 1.000 Cent.
`yearly_price_in_cents` | `integer` | Der jährliche Preis dieses Plans in Cent (US-Währung). Beispiel: Der Preis für einen Eintrag, der 100 US-Dollar pro Monat kostet, beträgt 120.000 Cent.
`price_model` | `string` | Das Preismodell für diesen Eintrag. Kann `flat-rate`, `per-unit` oder `free` sein.
`has_free_trial` | `boolean` | `true`, wenn für diesen Eintrag eine kostenlose Testversion verfügbar ist.
`unit_name` | `string` | Der Name der Einheit. Wenn das Preismodell nicht `per-unit` ist, lautet der Wert `nil`.
`bullet` | `array of strings` | Die Namen der Aufzählungspunkte im Tarif.

<br/>

### Beispiel-Webhook-Payload für ein `purchased`-Ereignis
Dieses Beispiel zeigt die Payload für das `purchased`-Ereignis.

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.purchased }}

### Beispiel-Webhook-Payload für ein `changed`-Ereignis

Änderungen an einem Plan umfassen Upgrades und Downgrades. Dieses Beispiel zeigt die Payloads für die Ereignisse `changed`, `pending_change` und `pending_change_cancelled`. Die Aktion gibt an, welches dieser drei Ereignisse aufgetreten ist.

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.changed }}

### Beispiel-Webhook-Payload für ein `cancelled`-Ereignis

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.cancelled }}
