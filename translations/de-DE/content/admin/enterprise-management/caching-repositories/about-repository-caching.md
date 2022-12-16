---
title: Informationen zum Zwischenspeichern von Repositorys
intro: Du kannst die Leistung von Git-Lesevorgängen für verteilte Teams und CI-Farmen mittels Zwischenspeichern von Repositorys erhöhen.
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
ms.openlocfilehash: e32df9becd6142f581d45784e4758cf19a8d1af0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108322'
---
{% data reusables.enterprise.repository-caching-release-phase %}

Wenn du über Teams und CI-Farmen auf der ganzen Welt verfügst, kann die Leistung deiner primären {% data variables.product.prodname_ghe_server %}-Instanz beeinträchtigt sein. Aktive Georeplikate können zwar die Leistung von Leseanfragen verbessern, doch geht dies zu Lasten des Schreibdurchsatzes. Um die Auslastung deiner primären Instanz zu verringern und die Leistung des Schreibdurchsatzes zu verbessern, kannst du einen Repositorycache konfigurieren, eine asynchrone schreibgeschützte Spiegelung von Repositorys, die sich in der Nähe dieser geografisch verteilten Clients befinden. 

Indem deine Repositorydaten in der Nähe von CI-Farmen und verteilten Teams bereitgestellt werden, macht ein Repositorycache es überflüssig, dass {% data variables.product.product_name %} dieselben Git-Daten mehrfach über eine lange Netzwerkverbindung übertragen muss, um mehrere Clients zu bedienen. Wenn beispielsweise deine primäre Instanz in Nordamerika ist und deine Präsenz in Asien auch groß ist, profitierst du davon, den Repositorycache in Asien einzurichten, damit er dort von CI-Runnern genutzt werden kann.

Der Repositorycache lauscht auf die primäre Instanz, unabhängig davon, ob es sich um eine einzelne Instanz oder einen georeplizierten Satz von Instanzen handelt, um Änderungen an Git-Daten vorzunehmen. CI-Farmen und andere leseintensive Verbraucher klonen aus dem Repositorycache und rufen daraus ab, anstatt aus der primären Instanz. Änderungen werden in regelmäßigen Abständen einmal pro Cacheinstanz und nicht einmal pro Client verteilt. Git-Daten werden in der Regel innerhalb von mehreren Minuten nach dem Pushen der Daten an die primäre Instanz im Repositorycache angezeigt.  {% ifversion ghes > 3.3 %} Der [`cache_sync`-Webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#cache_sync) kann von CI-Systemen verwendet werden, um auf Daten zu reagieren, die im Cache verfügbar sind.{% endif %}

Du hast präzise Kontrolle darüber, welche Repositorys mit dem Repositorycache synchronisiert werden dürfen. Git-Daten werden nur an den von dir angegebenen Speicherorten repliziert.

{% data reusables.enterprise.repository-caching-config-summary %} Weitere Informationen findest du unter [Konfigurieren eines Repositorycaches](/admin/enterprise-management/caching-repositories/configuring-a-repository-cache).
