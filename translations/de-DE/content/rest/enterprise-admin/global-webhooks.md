---
title: Globale Webhooks
intro: 'Globale Webhooks werden in deinem Unternehmen installiert. Du kannst globale Webhooks verwenden, um automatisch Regeln für Benutzer, Organisationen, Teams und Repositorys in deinem Unternehmen zu überwachen, darauf zu reagieren oder sie zu erzwingen.'
versions:
  ghes: '*'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 66186eeba470274d91b61aaae700e25716c26ef5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147067226'
---
Globale Webhooks können die Ereignistypen [Organisation](/developers/webhooks-and-events/webhook-events-and-payloads#organization), [Benutzer](/developers/webhooks-and-events/webhook-events-and-payloads#user), [Repository](/developers/webhooks-and-events/webhook-events-and-payloads#repository), [Team](/developers/webhooks-and-events/webhook-events-and-payloads#team), [Mitglied](/developers/webhooks-and-events/webhook-events-and-payloads#member), [Mitgliedschaft](/developers/webhooks-and-events/webhook-events-and-payloads#membership), [Fork](/developers/webhooks-and-events/webhook-events-and-payloads#fork) und [Ping](/developers/webhooks-and-events/about-webhooks#ping-event) abonnieren.

*Diese API ist nur für [authentifizierte](/rest/overview/resources-in-the-rest-api#authentication) Websiteadministratoren verfügbar.* Normale Benutzer erhalten eine `404`-Antwort, wenn sie versuchen, darauf zuzugreifen. Eine Anleitung zum Konfigurieren globaler Webhooks findest du unter [Informationen zu globalen Webhooks](/enterprise/admin/user-management/about-global-webhooks).
