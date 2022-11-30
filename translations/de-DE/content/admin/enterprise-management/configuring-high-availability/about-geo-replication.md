---
title: Informationen zur Geo-Replikation
intro: 'Die Geo-Replikation auf {% data variables.product.prodname_ghe_server %} verwendet mehrere aktive Replikate, um Anforderungen von geografisch verteilten Rechenzentren zu erfüllen.'
redirect_from:
  - /enterprise/admin/installation/about-geo-replication
  - /enterprise/admin/enterprise-management/about-geo-replication
  - /admin/enterprise-management/about-geo-replication
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - High availability
ms.openlocfilehash: d24b222ee411d6e8d06366dd78da6b0001280c4d
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108419'
---
Mehrere aktive Replikate können eine kürzere Entfernung zum nächstgelegenen Replikat ermöglichen. Beispielsweise kann eine Organisation mit Niederlassungen in San Francisco, New York und London die primäre Appliance in einem Rechenzentrum in der Nähe von New York und zwei Replikate in Rechenzentren nahe San Francisco und London betreiben. Mittels Geolocation-fähigem DNS können Benutzer an den nächstgelegenen verfügbaren Server weitergeleitet werden und schneller auf Repository-Daten zugreifen. Wenn die Appliance nahe New York als die primäre Instanz festgelegt wird, ist die Latenz zwischen den Hosts niedriger, als dies der Fall wäre, wenn die Appliance nahe San Francisco als die primäre Instanz festgelegt werden würde, deren Verbindung nach London wiederum eine höhere Latenz aufweist.

Das aktive Replikat vermittelt Anforderungen, die es nicht selbst verarbeiten kann, an die primäre Instanz. Die Replikate fungieren als ein Point of Presence und beenden alle SSL-Verbindungen. Der Traffic zwischen den Hosts wird über eine verschlüsselte VPN-Verbindung gesendet. Dies ähnelt einer Hochverfügbarkeitskonfiguration mit zwei Knoten ohne Geo-Replikation.

Git-Anforderungen und bestimmte Dateiserveranforderungen, beispielsweise LFS und Dateiuploads, können direkt vom Replikat aus bereitgestellt werden, ohne Daten aus der primären Instanz zu laden. Webanforderungen werden immer an die primäre Instanz weitergeleitet. Wenn das Replikat jedoch näher am Benutzer ist, sind die Anforderungen aufgrund der engeren SSL-Terminierung schneller.

Damit die Georeplikation ordnungsgemäß funktioniert, wird Geo DNS (beispielsweise der [Route 53-Dienst von Amazon](http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policy-geo)) benötigt. Der Hostname für die Instanz sollte im Replikat aufgelöst werden, das dem Standort des Benutzers am nächsten liegt.

## Einschränkungen

Zum Senden von Anforderungen an das Replikat müssen die Daten an die primäre Instanz und an alle Replikate gesendet werden. Folglich wird die Leistung sämtlicher Schreibvorgänge durch das langsamste Replikat begrenzt. Neue Georeplikate können jedoch für den Großteil ihrer Daten ein Seeding aus bestehenden Georeplikaten am gleichen Standort durchführen anstatt aus der primären Instanz. Um die Wartezeit und die Bandbreite, die durch verteilte Teams und große CI-Farmen verursacht werden, zu verringern, ohne den Schreibdurchsatz zu beeinträchtigen, kannst du stattdessen das Zwischenspeichern von Repositorys konfigurieren. Weitere Informationen findest du unter [Informationen zum Repositoryspeichern](/admin/enterprise-management/caching-repositories/about-repository-caching).

Von der Geo-Replikation werden einer {% data variables.product.prodname_ghe_server %}-Instanz weder Kapazitäten hinzugefügt noch werden Leistungsprobleme in Bezug auf unzureichende CPU- oder Arbeitsspeicherressourcen behoben. Wenn die primäre Appliance offline ist, können aktive Replikate keine Lese- oder Schreibanforderungen verarbeiten. 

{% data reusables.enterprise_installation.replica-limit %}

## Geo-Replikationskonfiguration überwachen

{% data reusables.enterprise_installation.monitoring-replicas %}

## Weiterführende Themen
- [Replikate der Georeplikation erstellen](/enterprise/admin/guides/installation/creating-a-high-availability-replica/#creating-geo-replication-replicas)
