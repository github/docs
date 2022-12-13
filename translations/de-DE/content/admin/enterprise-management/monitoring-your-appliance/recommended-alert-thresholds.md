---
title: Empfohlene Schwellenwerte für Meldungen
intro: 'Du kannst eine Meldung so konfigurieren, dass du in Bezug auf Systemressourcenprobleme benachrichtigt wirst, bevor sie sich auf die Leistung deiner {% data variables.product.prodname_ghe_server %}-Appliance auswirken.'
redirect_from:
  - /enterprise/admin/guides/installation/about-recommended-alert-thresholds
  - /enterprise/admin/installation/about-recommended-alert-thresholds
  - /enterprise/admin/installation/recommended-alert-thresholds
  - /enterprise/admin/enterprise-management/recommended-alert-thresholds
  - /admin/enterprise-management/recommended-alert-thresholds
versions:
  ghes: '*'
type: reference
topics:
  - Enterprise
  - Infrastructure
  - Monitoring
  - Performance
  - Storage
shortTitle: Recommended alert thresholds
ms.openlocfilehash: 73adc62a8a322666e08da01a76568c16ed18458c
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145102963'
---
## Speicher überwachen

Du solltest die Root- und Benutzerspeichergeräte überwachen und eine Meldung mit Werten konfigurieren, die eine ausreichende Antwortzeit gestatten, wenn der verfügbare Disk-Speicher niedrig ist.

| severity | Schwellenwert |
| -------- | --------- |
| **Warning** | Disk-Nutzung überschreitet 70 % des insgesamt verfügbaren Speichers |
| **Critical** (Kritisch) | Disk-Nutzung überschreitet 85 % des insgesamt verfügbaren Speichers |

Du kannst diese Werte basierend auf der insgesamt zugeordneten Speicherkapazität, historischen Wachstumsmustern und der erwarteten Antwortzeit anpassen. Wir empfehlen eine übermäßige Zuordnung an Speicherressourcen, um Wachstum zu ermöglichen und die zum Zuordnen des zusätzlichen Speichers erforderliche Ausfallzeit zu verhindern.

## CPU- und durchschnittliche Auslastung überwachen

Obwohl es normal ist, dass die CPU-Nutzung basierend auf ressourcenintensiven Git-Vorgängen schwankt, solltest du eine Meldung für ungewöhnlich hohe CPU-Auslastungen konfigurieren, da verlängerte Spitzen darauf hindeuten können, dass deine Instanz unterversorgt ist. Es wird empfohlen, die fünfzehnminütige durchschnittliche Auslastung des Systems auf Werte zu überwachen, die der Anzahl der der virtuellen Maschine zugeordneten CPU-Kerne nahekommen oder diese überschreiten.

| severity | Schwellenwert |
| -------- | --------- |
| **Warning** | Fünfzehnminütige durchschnittliche Auslastung überschreitet 1x CPU-Kerne |
| **Critical** (Kritisch) | Fünfzehnminütige durchschnittliche Auslastung überschreitet 2x CPU-Kerne |

Darüber hinaus wird empfohlen, dass du die „Diebstahlzeit“ der Virtualisierung überwachst, um sicherzustellen, dass andere virtuelle Maschinen, die auf demselben Hostsystem ausgeführt werden, nicht alle Ressourcen der Instanz verwenden.

## Überwachen der Arbeitsspeichernutzung

Die {% data variables.product.product_location %} zugeordnete Menge an physischem Arbeitsspeicher kann eine große Auswirkung auf die Gesamtleistung und Anwendungsreaktionsfähigkeit haben. Zum Beschleunigen von Git-Vorgängen soll das System den Kernel-Disk-Cache intensiv verwenden. Es wird empfohlen, dass der normale RSS-Arbeitssatz bei maximaler Nutzung 50 % des gesamten verfügbaren RAMs abdeckt.

| severity | Schwellenwert |
| -------- | --------- |
| **Warning**  | Nachhaltige RSS-Nutzung überschreitet 50 % des insgesamt verfügbaren Arbeitsspeichers |
| **Critical** (Kritisch) | Nachhaltige RSS-Nutzung überschreitet 70 % des insgesamt verfügbaren Arbeitsspeichers |

Wenn der Arbeitsspeicher erschöpft ist, versucht der OOM-Killer des Kernels Arbeitsspeicherressourcen freizugeben. Dazu werden zwangsweise RAM-intensive Anwendungsprozesse beendet, was zu einer Dienstunterbrechung führen kann. Du solltest der virtuellen Maschine mehr Arbeitsspeicher zuordnen, als dies im normalen Betriebsablauf erforderlich ist.
