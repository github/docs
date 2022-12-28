---
title: Behandeln von Plankündigungen
intro: 'Durch die Kündigung einer {% data variables.product.prodname_marketplace %}-App wird der [`marketplace_purchase`-Ereigniswebhook](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events) mit der Aktion `cancelled` ausgelöst, wodurch der Kündigungsprozess gestartet wird.'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/cancelling-plans
  - /apps/marketplace/integrating-with-the-github-marketplace-api/cancelling-plans
  - /marketplace/integrating-with-the-github-marketplace-api/cancelling-plans
  - /developers/github-marketplace/handling-plan-cancellations
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Plan cancellations
ms.openlocfilehash: 253506f1ac32f55649dd533559a7a16508cca98f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145089612'
---
Weitere Informationen zu Kündigungen im Zusammenhang mit der Abrechnung findest du unter [Abrechnen für Kunden im {% data variables.product.prodname_marketplace %}](/apps//marketplace/administering-listing-plans-and-user-accounts/billing-customers-in-github-marketplace).

## Schritt 1: Kündigungsereignis

Wenn ein Kunde eine {% data variables.product.prodname_marketplace %}-Bestellung kündigt, sendet GitHub einen [`marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)-Webhook mit der `cancelled`-Aktion an deine App, sobald die Kündigung wirksam wird. Wenn der Kunde während einer kostenlosen Testperiode kündigt, erhält deine App das Ereignis sofort. Wenn ein Kunde einen kostenpflichtigen Plan kündigt, erfolgt die Kündigung zum Ende des Abrechnungszeitraums des Kunden.

## Schritt 2: Deaktivieren von Kundenkonten

Wenn ein Kunde einen kostenlosen oder kostenpflichtigen Plan kündigt, muss deine App die folgenden Schritte zum Abschließen der Kündigung ausführen:

1. Das Konto des Kunden deaktivieren, der seinen Plan gekündigt hat.
1. Das OAuth-Token widerrufen, das deine App für den Kunden erhalten hat.
1. Wenn es sich bei deiner App um eine OAuth-App handelt, entferne alle Webhooks, die deine App für Repositorys erstellt hat.
1. Alle Kundendaten innerhalb von 30 Tagen nach Erhalt des `cancelled`-Ereignisses entfernen.

{% note %}

**Hinweis:** Es wird empfohlen, `effective_date` des [`marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)-Webhooks zu verwenden, um festzustellen, wann eine Planänderung eintritt, und die [Auflistung von Konten für einen Plan](/rest/reference/apps#list-accounts-for-a-plan) regelmäßig zu synchronisieren. Weitere Informationen zu Webhooks findest du unter [{% data variables.product.prodname_marketplace %}-Webhookereignisse](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/).

{% endnote %}
