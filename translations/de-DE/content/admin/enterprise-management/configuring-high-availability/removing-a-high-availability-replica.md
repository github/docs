---
title: Hochverfügbarkeitsreplikat entfernen
intro: 'Du kannst die Replikation in ein {% data variables.product.prodname_ghe_server %}-Replikat temporär stoppen oder die Replikation dauerhaft entfernen.'
redirect_from:
  - /enterprise/admin/installation/removing-a-high-availability-replica
  - /enterprise/admin/enterprise-management/removing-a-high-availability-replica
  - /admin/enterprise-management/removing-a-high-availability-replica
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - High availability
  - Enterprise
  - Infrastructure
shortTitle: Remove a HA replica
ms.openlocfilehash: 12fe196d38f93cb29bf49413ef9912028d662130
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145104983'
---
## Temporäres Stoppen der Replikation

1. Stoppe bei Bedarf, dass ein Replikat der Geo-Replikation den Benutzer-Traffic bedient, indem du die Geo DNS-Einträge für das Replikat entfernst.
2. Führe auf dem Replikat, auf dem du die Replikation temporär stoppen möchtest, den Befehl „ghe-repl-stop“ aus.
  ```shell
  $ ghe-repl-stop
  ```
3. Führe `ghe-repl-start` aus, um die Replikation erneut zu starten.
  ```shell
  $ ghe-repl-start
  ```

## Dauerhaftes Entfernen der Replikation

1. Stoppe bei Bedarf, dass ein Replikat der Geo-Replikation den Benutzer-Traffic bedient, indem du die Geo DNS-Einträge für das Replikat entfernst.
2. Führe `ghe-repl-stop` auf dem Replikat die Replikation aus, aus der du die Replikation entfernen möchtest.
  ```shell
  $ ghe-repl-stop
  ```
3. Führe `ghe-repl-teardown` auf dem Replikat den Replikationszustand aus, um den Replikationszustand zu schließen.
  ```shell
  $ ghe-repl-teardown
  ```

  {% ifversion ghes %} {% note %}
  
  **Hinweis:** Wenn du {% data variables.product.prodname_actions %} aktiviert hast, solltest du den ehemaligen Replikationsserver ausschalten oder seine {% data variables.product.prodname_actions %} Konfiguration aktualisieren, um einen anderen externen Speicher zu verwenden. Weitere Informationen findest du unter "[Hohe Verfügbarkeit für {% data variables.product.prodname_actions %}](/admin/github-actions/high-availability-for-github-actions#high-availability-replicas)."
  
  {% endnote %} {% endif %}
