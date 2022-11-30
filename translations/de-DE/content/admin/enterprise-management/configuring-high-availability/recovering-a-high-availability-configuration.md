---
title: Hochverfügbarkeitskonfiguration wiederherstellen
intro: 'Nachdem du ein Failover zur {% data variables.product.prodname_ghe_server %}-Appliance durchgeführt hast, solltest du schnellstmöglich die Redundanz zurückerlangen, anstatt sich auf eine einzelne Appliance zu verlassen.'
redirect_from:
  - /enterprise/admin/installation/recovering-a-high-availability-configuration
  - /enterprise/admin/enterprise-management/recovering-a-high-availability-configuration
  - /admin/enterprise-management/recovering-a-high-availability-configuration
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: Recover a HA configuration
ms.openlocfilehash: a61cdf4b3f7338c986112f67a0ca66be33d75c5f
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/12/2022
ms.locfileid: '146332768'
---
## Informationen zur Wiederherstellung für eine Hochverfügbarkeitskonfiguration

Du kannst die vorherige primäre Appliance als neue Replikat-Appliance verwenden, sofern das Failover geplant war oder nicht mit dem Appliance-Zustand in Zusammenhang stand. Wenn das Failover mit einem Problem an der primären Appliance zusammenhing, solltest du ggf. eine neue Replikat-Appliance erstellen. Weitere Informationen findest du unter [Erstellen eines Hochverfügbarkeitsreplikats](/enterprise/admin/guides/installation/creating-a-high-availability-replica/).

{% warning %}

**Warnung:** Du musst den Wartungsmodus aktivieren, bevor du eine ehemalige primäre Appliance als neues Replikat konfigurierst. Wenn du den Wartungsmodus nicht aktivieren, verursachst du einen Produktionsausfall.

{% endwarning %}

## Vorherige primäre Appliance als neues Replikat konfigurieren

1. Stelle mittels SSH eine Verbindung zur IP-Adresse der vorherigen primären Appliance her.
  ```shell
  $ ssh -p 122 admin@<em>FORMER PRIMARY IP</em>
  ```
1. Aktiviere den Wartungsmodus für die ehemalige primäre Appliance. Weitere Informationen findest du unter [Aktivieren und Planen des Wartungsmodus](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode).
1. Führe auf der ehemaligen primären Appliance den Befehl `ghe-repl-setup` mit der IP-Adresse des ehemaligen Replikats aus.
  ```shell
  $ ghe-repl-setup <em>FORMER REPLICA IP</em>
  ```
{% data reusables.enterprise_installation.add-ssh-key-to-primary %}
1. Führe erneut `ghe-repl-setup` aus, um die Verbindung mit dem primären Replikat zu überprüfen und den Replikatmodus für das neue Replikat zu aktivieren.
  ```shell
  $ ghe-repl-setup <em>FORMER REPLICA IP</em>
  ```
{% data reusables.enterprise_installation.replication-command %}
