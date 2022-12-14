---
title: Informationen zu Lizenzen für GitHub Enterprise
intro: '{% ifversion ghec %}Wenn du {% data variables.product.prodname_ghe_server %} bereitstellst und zusätzlich {% data variables.product.prodname_ghe_cloud %} nutzt, {% else %}Du{% endif %} kannst deine Lizenznutzung zwischen Bereitstellungen von{% ifversion ghes %} {% data variables.product.prodname_enterprise %}{% endif %} synchronisieren und eine Lizenzdatei zum Entsperren der einzelnen {% data variables.product.prodname_ghe_server %}-Instanzen verwenden.'
versions:
  ghec: '*'
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Licensing
shortTitle: About licenses
ms.openlocfilehash: eb904ed497df785cfefa25cee7a5cb1fe5acfaa0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145910511'
---
## Informationen zur Lizenzierung für {% data variables.product.prodname_enterprise %}

{% data reusables.enterprise.about-deployment-methods %}

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

Damit dieselben Benutzer*innen nicht mehr als eine Lizenz für mehrere Enterprise-Bereitstellungen verbrauchen, kannst du die Lizenznutzung zwischen deinen {% data variables.product.prodname_ghe_server %}- und {% data variables.product.prodname_ghe_cloud %}-Bereitstellungen synchronisieren.

Um eine {% data variables.product.prodname_ghe_server %}-Instanz zu verwenden, musst du die Lizenzdatei hochladen, die {% data variables.product.company_short %} beim Kauf bereitstellt. Du kannst Benutzerlizenzen auch erneuern oder zu {% data variables.product.prodname_enterprise %} hinzufügen.

## Informationen zur Synchronisierung der Lizenzverwendung für {% data variables.product.prodname_enterprise %}

{% data reusables.enterprise-licensing.about-license-sync %} Weitere Informationen findest du unter [Synchronisieren der Lizenznutzung zwischen {% data variables.product.prodname_ghe_server %} und {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud).

## Informationen zu Lizenzdateien für {% data variables.product.prodname_enterprise %}

Wenn du {% data variables.product.prodname_enterprise %} erwirbst oder verlängerst, stellt {% data variables.product.company_short %} eine Lizenzdatei {% ifversion ghec %}für deine Bereitstellungen von {% data variables.product.prodname_ghe_server %}{% elsif ghes %}für {% data variables.product.product_location_enterprise %}{% endif %} bereit. Eine Lizenzdatei hat ein Ablaufdatum und steuert die Anzahl der Personen, die {% data variables.product.product_location_enterprise %} verwenden können. Nachdem du {% data variables.product.prodname_ghe_server %} heruntergeladen und installiert hast, musst du die Lizenzdatei hochladen, um die Anwendung zu entsperren, damit du sie verwenden kannst.

Weitere Informationen zum Herunterladen deiner Lizenzdatei findest du unter [Herunterladen deiner Lizenz für {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise). 

Weitere Informationen zum Hochladen deiner Lizenzdatei findest du unter {% ifversion ghec %}[Hochladen einer neuen Lizenz auf {% data variables.product.prodname_ghe_server %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server) in der Dokumentation zu {% data variables.product.prodname_ghe_server %}.{% elsif ghes %}[Hochladen einer neuen Lizenz auf {% data variables.product.prodname_ghe_server %}](/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server).{% endif %}

Wenn deine Lizenz abläuft, kannst du nicht über einen Webbrowser oder Git auf {% data variables.product.prodname_ghe_server %} zugreifen. Bei Bedarf kannst du Befehlszeilenprogramme zum Sichern deiner gesamten Daten verwenden. Weitere Informationen findest du unter {% ifversion ghec %}[Konfigurieren von Sicherungen für deine Appliance]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/guides/installation/configuring-backups-on-your-appliance) in der Dokumentation zu {% data variables.product.prodname_ghe_server %}.{% elsif ghes %}[Konfigurieren von Sicherungen für deine Appliance](/admin/guides/installation/configuring-backups-on-your-appliance). {% endif %}

Wenn du Fragen zur Erneuerung deiner Lizenz hast, kontaktiere {% data variables.contact.contact_enterprise_sales %}.

## Weitere Informationsquellen

- [Informationen zur Abrechnung für dein Unternehmen](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)
- Website der [{% data variables.product.prodname_enterprise %}-Releases](https://enterprise.github.com/releases/)
- [Einrichten einer {% data variables.product.prodname_ghe_server %}-Instanz]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/installation/setting-up-a-github-enterprise-server-instance)
