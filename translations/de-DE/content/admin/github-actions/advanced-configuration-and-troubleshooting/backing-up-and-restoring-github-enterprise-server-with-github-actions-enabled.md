---
title: Sichern und Wiederherstellen von GitHub Enterprise Server mit aktivierten GitHub Actions
shortTitle: Backing up and restoring
intro: 'Um eine Sicherung von {% data variables.location.product_location %} wiederherzustellen, wenn {% data variables.product.prodname_actions %} aktiviert ist, musst du {% data variables.product.prodname_actions %} konfigurieren, bevor du die Sicherung mit {% data variables.product.prodname_enterprise_backup_utilities %} wiederherstellst.'
versions:
  ghes: '*'
type: how_to
topics:
  - Actions
  - Backups
  - Enterprise
  - Infrastructure
redirect_from:
  - /admin/github-actions/backing-up-and-restoring-github-enterprise-server-with-github-actions-enabled
ms.openlocfilehash: 43279c6b99cce6618de9253c5d0451c0a661b095
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107309'
---
## Informationen zu Sicherungen von {% data variables.product.product_name %} bei Verwendung von {% data variables.product.prodname_actions %}

Du kannst {% data variables.product.prodname_enterprise_backup_utilities %} verwenden, um die Daten und die Konfiguration für {% data variables.location.product_location %} in einer neuen Instanz zu sichern und wiederherzustellen. Weitere Informationen findest du unter [Konfigurieren von Sicherungen auf deiner Appliance](/admin/configuration/configuring-backups-on-your-appliance).

Allerdings sind nicht alle Daten für {% data variables.product.prodname_actions %} in diesen Sicherungen enthalten. {% data reusables.actions.enterprise-storage-ha-backups %}

## Wiederherstellen einer Sicherung von {% data variables.product.product_name %}, wenn {% data variables.product.prodname_actions %} aktiviert ist

Um eine Sicherung von {% data variables.location.product_location %} mit {% data variables.product.prodname_actions %} wiederherzustellen, musst du die Netzwerkeinstellungen und den externen Speicher auf der Zielinstanz manuell konfigurieren, bevor du deine Sicherung aus {% data variables.product.prodname_enterprise_backup_utilities %} wiederherstellst. 

1. Vergewissere dich, dass die Quellinstanz offline ist.
1. Führe eine manuelle Konfiguration der Netzwerkeinstellungen auf der {% data variables.product.prodname_ghe_server %}-Ersatzinstanz durch. Netzwerkeinstellungen sind aus der Sicherungsmomentaufnahme ausgeschlossen und werden von `ghe-restore` nicht überschrieben. Weitere Informationen findest du unter [Konfigurieren von Netzwerkeinstellungen](/admin/configuration/configuring-network-settings).
1. Stelle eine SSH-Verbindung mit der Zielinstanz her. Weitere Informationen findest du unter [Zugreifen auf die Verwaltungsshell (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh).

   ```shell{:copy}
   $ ssh -p 122 admin@HOSTNAME
   ```
1. Konfiguriere die Zielinstanz so, dass sie denselben externen Speicherdienst für {% data variables.product.prodname_actions %} verwendet wie die Quellinstanz, indem du einen der folgenden Befehle eingibst.
{% indented_data_reference reusables.actions.configure-storage-provider-platform-commands spaces=3 %} {% data reusables.actions.configure-storage-provider %}
1. Um die Aktivierung von {% data variables.product.prodname_actions %} auf der Zielinstanz vorzubereiten, gibst du den folgenden Befehl ein.

   ```shell{:copy}
   ghe-config app.actions.enabled true
   ```
{% data reusables.actions.apply-configuration-and-enable %}
1. Nachdem {% data variables.product.prodname_actions %} konfiguriert und aktiviert wurde, kannst du mit dem Befehl `ghe-restore` die übrigen Daten aus der Sicherung wiederherstellen. Weitere Informationen findest du unter [Wiederherstellen einer Sicherung](/admin/configuration/configuring-backups-on-your-appliance#restoring-a-backup).
1. Registriere deine selbstgehosteten Runner auf der Zielinstanz neu. Weitere Informationen findest du unter [Hinzufügen von selbstgehosteten Runnern](/actions/hosting-your-own-runners/adding-self-hosted-runners).
