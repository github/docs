---
title: Informationen zu Webhooks
intro: 'Hier lernst du die Grundlagen der Funktionsweise von Webhooks kennen, damit du Integrationen erstellen und einrichten kannst.'
redirect_from:
  - /webhooks
  - /developers/webhooks-and-events/about-webhooks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
ms.openlocfilehash: 08b038d5a35c4c692502545e640d04993d169b6a
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145102788'
---
Mit Webhooks kannst du Integrationen erstellen oder einrichten, wie z. B. [{% data variables.product.prodname_github_apps %}](/apps/building-github-apps/) oder [{% data variables.product.prodname_oauth_apps %}](/apps/building-oauth-apps/), die bestimmte Ereignisse auf GitHub.com abonnieren. Wenn ein solches Ereignis ausgelöst wird, senden wir HTTP POST-Nutzdaten an die für den Webhook konfigurierte URL. Webhooks können verwendet werden, um einen externen Issue-Tracker zu aktualisieren, CI-Builds auszulösen, eine Sicherungsspiegelung zu aktualisieren oder sogar eine Bereitstellung auf deinem Produktionsserver durchzuführen. Nur deine Fantasie setzt die Grenzen.

Webhooks können auf{% ifversion ghes or ghae %} [{% data variables.product.prodname_enterprise %}](/rest/reference/enterprise-admin#global-webhooks/),{% endif %} einer [Organisation][org-hooks], einem bestimmten [Repository][repo-hooks] oder einer {% data variables.product.prodname_github_app %} installiert werden. Nach der Installation wird der Webhook jedes Mal gesendet, wenn ein oder mehrere abonnierte Ereignisse auftreten.

Du kannst bis zu {% ifversion ghes or ghae %}250{% else %}20{% endif %} Webhooks für jedes Ereignis auf jedem Installationsziel {% ifversion ghes or ghae %}({% data variables.product.prodname_ghe_server %}-Instanz, bestimmte Organisation oder bestimmtes Repository erstellen).{% else %}(bestimmte Organisation oder bestimmtes Repository) erstellen.{% endif %}

## Ereignisse

{% data reusables.webhooks.webhooks_intro %}

Jedes Ereignis entspricht einer bestimmten Gruppe von Aktionen, die bei deiner Organisation und bzw. oder dem Repository auftreten können. Wenn du beispielsweise das `issues`-Ereignis abonnierst, erhältst du jedes Mal detaillierte Nutzdaten, wenn ein Issue geöffnet, geschlossen, gekennzeichnet wird usw.

Eine vollständige Liste der verfügbaren Webhook-Ereignisse und ihrer Nutzdaten findest du unter [Webhook-Ereignisse und Nutzdaten](/developers/webhooks-and-events/webhook-events-and-payloads).

## Ping-Ereignis

{% data reusables.webhooks.ping_short_desc %}

Weitere Informationen zu `ping`-Ereigniswebhook-Nutzdaten findest du im [`ping`](/webhooks/event-payloads/#ping)-Ereignis.

[org-hooks]: /rest/reference/orgs#webhooks/
[repo-hooks]: /rest/reference/repos#webhooks
