---
title: Upgrade-Anforderungen
intro: 'Lese vor dem Upgrade von {% data variables.product.prodname_ghe_server %} diese Empfehlungen und Anforderungen, um deine Upgradestrategie zu planen.'
redirect_from:
  - /enterprise/admin/installation/upgrade-requirements
  - /enterprise/admin/guides/installation/finding-the-current-github-enterprise-release
  - /enterprise/admin/enterprise-management/upgrade-requirements
  - /admin/enterprise-management/upgrade-requirements
  - /enterprise/admin/guides/installation/about-upgrade-requirements
versions:
  ghes: '*'
type: reference
topics:
  - Enterprise
  - Upgrades
ms.openlocfilehash: 23ac63dd30c11f4c29cd17313a583579d2e2cea1
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106877'
---
{% note %}

**Hinweise:**
- Upgradepakete für unterstützte Versionen sind unter [enterprise.github.com](https://enterprise.github.com/releases) verfügbar. Verifiziere die Verfügbarkeit der Upgrade-Pakete, die du zum Abschließen des Upgrades benötigst. Wende dich an {% data variables.contact.contact_ent_support %}, falls ein Paket nicht verfügbar ist.
- Wenn du {% data variables.product.prodname_ghe_server %}-Clustering verwendest, lies [Upgraden eines Clusters](/enterprise/admin/guides/clustering/upgrading-a-cluster/) im {% data variables.product.prodname_ghe_server %}-Clusteringleitfaden für clusteringspezifische Anweisungen.
- Die Versionshinweise für {% data variables.product.prodname_ghe_server %} enthalten eine umfassende Liste der neuen Features jeder Version von {% data variables.product.prodname_ghe_server %}. Weitere Informationen findest du auf der [Releaseübersichtsseite](https://enterprise.github.com/releases).

{% endnote %}

## Empfehlungen

- Du solltest möglichst wenig Upgrades in deinen Upgrade-Prozess einbeziehen. Anstatt ein Upgrade von {% data variables.product.prodname_enterprise %} {{ enterpriseServerReleases.supported[2] }} auf {{ enterpriseServerReleases.supported[1] }} und auf {{ enterpriseServerReleases.latest }} durchzuführen, könntest du ein Upgrade von {% data variables.product.prodname_enterprise %} {{ enterpriseServerReleases.supported[2] }} auf {{ enterpriseServerReleases.latest }} durchführen. Verwende den [{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade), um den Upgradepfad aus deinem aktuellen Release zu finden.
- Wenn du mehrere Versionen im Rückstand bist, aktualisiere {% data variables.location.product_location %} in jedem Schritt deines Upgradeprozesses so weit wie möglich. Wenn du nach Möglichkeit die neueste Version für jedes Upgrade verwendest, kannst du von Leistungsverbesserungen und Bug-Korrekturen profitieren. So kannst du beispielsweise ein Upgrade von {% data variables.product.prodname_enterprise %} 2.7 auf 2.8 auf 2.10 vornehmen. Beim Upgrade von {% data variables.product.prodname_enterprise %} 2.7 auf 2.9 auf 2.10 wird im zweiten Schritt jedoch eine neuere Version verwendet.
- Verwende beim Upgraden die neueste Patch-Veröffentlichung. {% data reusables.enterprise_installation.enterprise-download-upgrade-pkg %}
- Verwende eine Testinstanz zum Testen der Upgrade-Schritte. Weitere Informationen findest du unter [Einrichten einer Staginginstanz](/enterprise/admin/guides/installation/setting-up-a-staging-instance/).
- Warte beim Durchführen mehrerer Upgrades mindestens 24 Stunden zwischen den Feature-Upgrades, damit im Hintergrund laufende Datenmigrationen und Upgrade-Aufgaben vollständig abgeschlossen werden.
- Erstelle vor dem Upgrade deines virtuellen Computers eine Momentaufnahme. Weitere Informationen findest du unter [Eine Momentaufnahme erstellen](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server#taking-a-snapshot). 
- Stelle sicher, dass du über eine aktuelle, erfolgreiche Sicherung deiner Instanz verfügst. Weitere Informationen findest du in der [„README.md“-Datei {% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#readme).

## Anforderungen

- Du musst ein Upgrade aus einem Featurerelease durchführen, das **mindestens** zwei Releases zurückliegt. Um beispielsweise ein Upgrade auf {% data variables.product.prodname_enterprise %} {{ enterpriseServerReleases.latest }} durchzuführen, musst du über {% data variables.product.prodname_enterprise %} {{ enterpriseServerReleases.supported[1] }} oder {{ enterpriseServerReleases.supported[2] }} verfügen.
- Wenn du mithilfe eines Upgradepakets ein Upgrade durchführst, solltest du ein Wartungsfenster für {% data variables.product.prodname_ghe_server %}-Endbenutzer*innen einplanen.
- {% data reusables.enterprise_installation.hotpatching-explanation %}
- Ein Hotpatch kann Ausfallzeiten nach sich ziehen, falls für die betroffenen Dienste (z. B. der Kernel, MySQL oder ElasticSearch) ein VM- oder Dienstneustart erforderlich ist. Du wirst benachrichtigt, falls ein Neustart erforderlich ist. Du kannst den Neustart zu einem späteren Zeitpunkt abschließen.
- Beim Upgrade mittels Hotpatching muss zusätzlicher Root-Storage verfügbar sein, da bis zum Abschluss des Upgrades mehrere Versionen bestimmter Dienste installiert werden. Bei Preflightüberprüfungen werden Benachrichtigungen gesendet, falls nicht genügend Stammdatenträgerspeicher verfügbar ist.
- Beim Upgrade mittels Hotpatching darf deine Instanz keine zu große Auslastung aufweisen, da sich dies gegebenenfalls auf den Hotpatchingprozess auswirkt.
- Beim Upgrade auf {% data variables.product.prodname_ghe_server %} 2.17 werden deine Auditprotokolle von Elasticsearch zu MySQL migriert. Diese Migration erhöht die erforderliche Dauer und den Speicherplatz, die bzw. der zum Wiederherstellen eines Snapshots erforderlich ist. Überprüfe vor der Migration die Anzahl an Bytes in deinen ElasticSearch-Auditprotokollindizes. Führe dazu den folgenden Befehl aus:
``` shell
curl -s http://localhost:9201/audit_log/_stats/store | jq ._all.primaries.store.size_in_bytes
```
Anhand der Zahl kannst du schätzen, wie viel Speicherplatz die MySQL-Auditprotokolle benötigen werden. Darüber hinaus überwacht das Skript den freien Speicherplatz, während der Import ausgeführt wird. Die Überwachung dieser Zahl ist besonders nützlich, wenn der freie Speicherplatz dem für die Migration erforderlichen Speicherplatz nahekommt.

## Nächste Schritte

Nachdem du diese Empfehlungen und Anforderungen gelesen hast, kannst du {% data variables.product.prodname_ghe_server %} upgraden. Weitere Informationen findest du unter [Upgrade für {% data variables.product.prodname_ghe_server %} durchführen](/enterprise/admin/guides/installation/upgrading-github-enterprise-server/).
