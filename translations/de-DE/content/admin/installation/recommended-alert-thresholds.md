---
title: Empfohlene Schwellenwerte für Meldungen
intro: 'Sie können eine Meldung so konfigurieren, dass Sie in Bezug auf Systemressourcenprobleme benachrichtigt werden, bevor sie sich auf die Leistung Ihrer {% data variables.product.prodname_ghe_server %}-Appliance auswirken.'
redirect_from:
  - /enterprise/admin/guides/installation/about-recommended-alert-thresholds/
  - /enterprise/admin/installation/recommended-alert-thresholds
versions:
  enterprise-server: '*'
---

### Speicher überwachen

Sie sollten die Root- und Benutzerspeichergeräte überwachen und eine Meldung mit Werten konfigurieren, die eine ausreichende Antwortzeit gestatten, wenn der verfügbare Disk-Speicher niedrig ist.

| Schweregrad  | Schwellenwert                                                       |
| ------------ | ------------------------------------------------------------------- |
| **Warnung**  | Disk-Nutzung überschreitet 70 % des insgesamt verfügbaren Speichers |
| **Kritisch** | Disk-Nutzung überschreitet 85 % des insgesamt verfügbaren Speichers |

Sie können diese Werte basierend auf der insgesamt zugeordneten Speicherkapazität, historischen Wachstumsmustern und der erwarteten Antwortzeit anpassen. Wir empfehlen eine übermäßige Zuordnung an Speicherressourcen, um Wachstum zu ermöglichen und die zum Zuordnen des zusätzlichen Speichers erforderliche Ausfallzeit zu verhindern.

### CPU- und durchschnittliche Auslastung überwachen

Obwohl es normal ist, dass die CPU-Nutzung basierend auf ressourcenintensiven Git-Vorgängen schwankt, sollten Sie eine Meldung für ungewöhnlich hohe CPU-Auslastungen konfigurieren, da verlängerte Spitzen darauf hindeuten können, dass Ihre Instanz unterversorgt ist. Es wird empfohlen, die fünfzehnminütige durchschnittliche Auslastung des Systems auf Werte zu überwachen, die der Anzahl der der virtuellen Maschine zugeordneten CPU-Kerne nahekommen oder diese überschreiten.

| Schweregrad  | Schwellenwert                                                            |
| ------------ | ------------------------------------------------------------------------ |
| **Warnung**  | Fünfzehnminütige durchschnittliche Auslastung überschreitet 1x CPU-Kerne |
| **Kritisch** | Fünfzehnminütige durchschnittliche Auslastung überschreitet 2x CPU-Kerne |

Darüber hinaus wird empfohlen, dass Sie die „Diebstahlzeit“ der Virtualisierung überwachen, um sicherzustellen, dass andere virtuelle Maschinen, die auf demselben Hostsystem ausgeführt werden, nicht alle Ressourcen der Instanz verwenden.

### Arbeitsspeicherauslastung überwachen

Die {% data variables.product.product_location_enterprise %} zugeordnete Menge an physischem Arbeitsspeicher kann eine große Auswirkung auf die Gesamtleistung und Anwendungsreaktionsfähigkeit haben. Zum Beschleunigen von Git-Vorgängen soll das System den Kernel-Disk-Cache intensiv verwenden. Es wird empfohlen, dass der normale RSS-Arbeitssatz bei maximaler Nutzung 50 % des gesamten verfügbaren RAMs abdeckt.

| Schweregrad  | Schwellenwert                                                                         |
| ------------ | ------------------------------------------------------------------------------------- |
| **Warnung**  | Nachhaltige RSS-Nutzung überschreitet 50 % des insgesamt verfügbaren Arbeitsspeichers |
| **Kritisch** | Nachhaltige RSS-Nutzung überschreitet 70 % des insgesamt verfügbaren Arbeitsspeichers |

Wenn der Arbeitsspeicher erschöpft ist, versucht der OOM-Killer des Kernels Arbeitsspeicherressourcen freizugeben. Dazu werden zwangsweise RAM-intensive Anwendungsprozesse beendet, was zu einer Dienstunterbrechung führen kann. Sie sollten der virtuellen Maschine mehr Arbeitsspeicher zuordnen, als dies im normalen Betriebsablauf erforderlich ist.
