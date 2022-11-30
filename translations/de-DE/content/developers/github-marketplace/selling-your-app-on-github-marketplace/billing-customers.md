---
title: Abrechnung mit Kunden
intro: 'Apps auf {% data variables.product.prodname_marketplace %} müssen die Abrechnungsleitlinien von GitHub befolgen und empfohlene Dienste unterstützen. Die Befolgung unserer Leitlinien verhilft unseren Kunden zu einem Abrechnungsprozess ohne Überraschungen.'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/billing-customers-in-github-marketplace
  - /apps/marketplace/selling-your-app/billing-customers-in-github-marketplace
  - /marketplace/selling-your-app/billing-customers-in-github-marketplace
  - /developers/github-marketplace/billing-customers
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
ms.openlocfilehash: 86f012c4a74d010ddaed9ec495ae2f5d8a8dd9eb
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145089644'
---
## Grundlegendes zum Abrechnungszeitraum

Kunden können einen monatlichen oder jährlichen Abrechnungszeitraum auswählen, wenn sie deine App kaufen. Alle Änderungen, die Kunden am Abrechnungszeitraum und an der Planauswahl vornehmen, lösen ein `marketplace_purchase`-Ereignis aus. Du kannst den `marketplace_purchase`-Webhooknutzdaten entnehmen, welchen Abrechnungszeitraum ein Kunde auswählt und wann das nächste Abrechnungsdatum beginnt (`effective_date`). Weitere Informationen zu Webhooknutzdaten findest du unter „[Webhook-Ereignisse für die {% data variables.product.prodname_marketplace %}-API](/developers/github-marketplace/webhook-events-for-the-github-marketplace-api)“.

## Bereitstellen von Abrechnungsdiensten in der Benutzeroberfläche deiner App

Kunden sollten in der Lage sein, über die Website deiner App die folgenden Aktionen auszuführen:
- Kunden sollten in der Lage sein, ihre {% data variables.product.prodname_marketplace %}-Pläne für persönliche und Organisationskonten separat zu ändern oder zu kündigen.
{% data reusables.marketplace.marketplace-billing-ui-requirements %}

## Abrechnungsdienste für Upgrades, Downgrades und Kündigungen

Befolge die folgenden Richtlinien für Upgrades, Downgrades und Kündigungen, damit der Abrechnungsprozess klar und konsistent bleibt. Ausführlichere Anweisungen zu den {% data variables.product.prodname_marketplace %}-Kaufereignissen findest du unter „[Verwenden der {% data variables.product.prodname_marketplace %}-API in deiner App](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)“.

Du kannst den `effective_date`-Schlüssel des `marketplace_purchase`-Webhooks verwenden, um festzustellen, wann eine Planänderung eintritt, und die [Auflistung von Konten für einen Plan](/rest/reference/apps#list-accounts-for-a-plan) regelmäßig synchronisieren.

### Upgrades

Wenn ein Kunde ein Upgrade für seinen Preisplan vornimmt oder seinen Abrechnungszeitraum von monatlich in jährlich ändert, solltest du die Änderung für ihn sofort wirksam machen. Du musst einen anteiligen Rabatt auf den neuen Plan anwenden und den Abrechnungszeitraum ändern.

{% data reusables.marketplace.marketplace-failed-purchase-event %}

Informationen zum Erstellen von Upgrade- und Downgradeworkflows in deiner App findest du unter „[Behandeln von Planänderungen](/developers/github-marketplace/handling-plan-changes)“.

### Downgrades und Kündigungen

Downgrades treten auf, wenn ein Kunde von einem kostenlosen Plan zu einem kostenpflichtigen Plan wechselt, einen Plan mit niedrigeren Kosten als bei seinem aktuellen Plan auswählt oder seinen Abrechnungszeitraum von jährlich in monatlich ändert. Bei Downgrades oder Kündigungen musst du keine Rückerstattung leisten. Stattdessen bleibt der aktuelle Plan bis zum letzten Tag des aktuellen Abrechnungszeitraums aktiv. Das `marketplace_purchase`-Ereignis wird gesendet, wenn der neue Plan am Anfang des nächsten Abrechnungszeitraums des Kunden wirksam wird.

Wenn ein Kunde einen Plan kündigt, musst du:
- Den Kunden automatisch auf den kostenlosen Plan herunterstufen (sofern vorhanden).
  
  {% data reusables.marketplace.cancellation-clarification %}
- Dem Kunden die Möglichkeit eines Upgrades des Plans über GitHub einräumen, falls er ihn zu einem späteren Zeitpunkt fortsetzen möchte.

Informationen zum Erstellen von Kündigungsworkflows in deiner App findest du unter „[Behandeln von Plankündigungen](/developers/github-marketplace/handling-plan-cancellations)“.
