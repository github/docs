---
title: Webhooks für Ereignisse in deinem unterstützten Konto konfigurieren
intro: 'Du kannst Webhooks konfigurieren, damit du benachrichtigt wirst, wenn du ein neues Sponsoring erhältst, oder wenn bestehende Sponsoren Änderungen an ihren Sponsorings machen.'
redirect_from:
  - /github/supporting-the-open-source-community-with-github-sponsors/configuring-webhooks-for-events-in-your-sponsored-account
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Webhooks
  - Events
  - Open Source
shortTitle: Webhooks for events
ms.openlocfilehash: 2ac78162ae29c10861c7bf3bad8c18b9e0a56ccf
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145106011'
---
## Informationen zu Webhooks für Ereignisse in deinem gesponserten Konto

Damit Du Änderungen wie zum Beispiel die Kündigung eines Sponsorings am Ende der Zahlungsperiode überwachen kannst, kannst Du Webhooks für Deine unterstützten Benutzer- oder Organisations-Konten erstellen. Wenn du einen Webhook für Dein gesponsertes Konto einrichtest, erhältst du Updates, wenn Sponsorings erstellt, bearbeitet oder gelöscht werden. Weitere Informationen findest du im [Webhook-Ereignis `sponsorship`](/webhooks/event-payloads/#sponsorship).

## Verwalten von Webhooks für Ereignisse in deinem gesponserten Konto

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-webhooks-tab %} {% data reusables.sponsors.add-webhook %} {% data reusables.sponsors.add-payload-url %} {% data reusables.sponsors.webhook-content-formatting %} {% data reusables.sponsors.webhook-secret-token %} {% data reusables.sponsors.add-active-triggers %} {% data reusables.sponsors.confirm-add-webhook %} {% data reusables.sponsors.manage-existing-webhooks %}
