---
title: Exportieren der Überwachungsprotokollaktivität für dein Unternehmen
intro: Du kannst die Daten von Überwachungs- und Git-Ereignissen zur Offlineanalyse in eine Datei exportieren.
shortTitle: Export audit logs
permissions: Enterprise owners can export the audit log.
miniTocMaxHeadingLevel: 3
versions:
  ghec: '*'
type: tutorial
topics:
  - Auditing
  - Enterprise
  - Logging
ms.openlocfilehash: 208e086fa93c89879357d340aa459b3d40824383
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060738'
---
## Informationen zum Exportieren von Überwachungsprotokoll und Git-Ereignisdaten

Du kannst das Überwachungsprotokoll exportieren, indem du eine JSON- oder CSV-Datei aus deinem Unternehmen auf {% data variables.product.product_name %} herunterlädst. Wenn du Überwachungsprotokollereignisse exportierst, kannst du eine oder mehrere dieser unterstützten Qualifizierer abfragen, um für den Export nach bestimmten Protokollereignissen zu filtern. Weitere Informationen zu Suchqualifizierern findest du unter [Suchen basierend auf der ausgeführten Aktion](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise#search-based-on-the-action-performed).

Du kannst Git-Ereignisdaten exportieren, indem du eine JSON-Datei aus dem Überwachungsprotokoll deines Unternehmens herunterlädst. Im Gegensatz zu Überwachungsprotokolldaten kannst du keine Abfrage für bestimmte Git-Ereignisse durchführen, um auf der Benutzeroberfläche des Überwachungsprotokolls zu filtern und zu exportieren. 

{% data reusables.audit_log.git-events-export-limited %}

{% data reusables.audit_log.exported-log-keys-and-values %}

Alternativ zum Exportieren von Protokollereignissen kannst du die API zum Abrufen von Überwachungsprotokollereignissen verwenden oder {% data variables.product.product_name %} zum Streamen von Überwachungsdaten einrichten, wenn Ereignisse protokolliert werden. Weitere Informationen findest du unter [Verwenden der Überwachungsprotokoll-API für dein Unternehmen](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise) und [Streamen des Überwachungsprotokolls für dein Unternehmen](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise).

## Exportieren von Überwachungsprotokolldaten

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %}
1. Optional kannst du nur die gefilterten Ergebnisse exportieren, indem du nach mindestens einem unterstützten Qualifizierer suchst oder Protokollfilter verwendest.
2. Wähle im Dropdownmenü **Export** {% octicon "download" aria-label="The Download icon" %} und dann das Dateiformat (JSON oder CSV) aus, in das Protokollereignisse exportiert werden sollen.

    ![Schaltfläche "Exportieren"](/assets/images/help/organizations/org-audit-log-export.png)

## Exportieren von Git-Ereignisdaten

Du kannst auch Git-Ereignisdaten für einen Datumsbereich exportieren.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %}
1. Wähle im Dropdownmenü **Git-Ereignisse exportieren** {% octicon "download" aria-label="The Download icon" %} und dann den Datumsbereich aus, für den Protokollereignisse exportiert werden sollen.

    ![Schaltfläche „Git-Ereignisse exportieren“](/assets/images/help/organizations/org-audit-log-export-git-events.png)
1. Klicke auf {% octicon "file-zip" aria-label="The File-zip icon" %} **Ergebnisse herunterladen**, um die Datei herunterzuladen.
1. Die Daten werden als komprimierte JSON-Datei exportiert. Um die JSON-Daten zu extrahieren, dekomprimierst du die Datei mit einem Hilfsprogrammclient oder Befehl für Archive. Beispiel:

    ```
    gunzip export-avocado-corp-1642896556.json.gz
    ```
