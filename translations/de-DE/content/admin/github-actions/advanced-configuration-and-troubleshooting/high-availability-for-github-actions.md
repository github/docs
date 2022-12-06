---
title: Hohe Verfügbarkeit für GitHub Actions
intro: 'Beim Verwalten von {% data variables.product.prodname_actions %} in einer Konfiguration mit Hochverfügbarkeit müssen einige Besonderheiten berücksichtigt werden.'
versions:
  ghes: '*'
type: reference
topics:
  - Actions
  - Enterprise
  - High availability
  - Infrastructure
  - Storage
redirect_from:
  - /admin/github-actions/high-availability-for-github-actions
shortTitle: HA for GitHub Actions
ms.openlocfilehash: c8b71ddb651baa0757100c356ce3f9edb0e1edee
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145102947'
---
## Replikation oder Redundanz deiner {% data variables.product.prodname_actions %}-Daten

{% data reusables.actions.enterprise-storage-ha-backups %}

Es wird dringend empfohlen, dass du deine externen {% data variables.product.prodname_actions %}-Speicher so konfigurierst, dass du die Datenredundanz oder -replikation nutzen kannst. Weitere Informationen findest du in der Dokumentation deines Speicheranbieters:

* [Azure Storage-Redundanzdokumentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-redundancy)
* [Amazon S3-Replikationsdokumentation](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication.html)

## Hochverfügbarkeitsreplikate

### Fördern eines Replikats

Bei der Aktivierung einer Hochverfügbarkeitskonfiguration werden sämtliche Replikate automatisch so konfiguriert, dass sie die externe {% data variables.product.prodname_actions %}-Speicherkonfiguration nutzen. Wenn du einen Failover initiieren musst, um ein Replikat zu fördern, sind keine zusätzlichen Konfigurationsänderungen für {% data variables.product.prodname_actions %} erforderlich.

Weitere Informationen findest du unter "[Initiieren eines Failovers für deine Replikat-Appliance](/admin/enterprise-management/initiating-a-failover-to-your-replica-appliance)".

### Hochverfügbarkeitsreplikat entfernen

Vermeide, dass mehrere Instanzen in denselben externen {% data variables.product.prodname_actions %}-Speicher schreiben können. Dies kann der Fall sein, wenn der `ghe-repl-teardown` Befehl verwendet wird, um ein aktiviertes {% data variables.product.prodname_actions %}-Replikat zu beenden und dauerhaft zu entfernen. Dies liegt daran, dass das Replikat in einen eigenständigen {% data variables.product.prodname_ghe_server %} konvertiert wird und dass nach dem Abbruch weiterhin dieselbe externe Speicherkonfiguration wie die primäre verwendet wird.

Um dieses Problem zu umgehen, empfiehlt es sich, den Replikatserver zu deaktivieren oder seine {% data variables.product.prodname_actions %}-Konfiguration mit einem anderen externen Speicher zu aktualisieren.
