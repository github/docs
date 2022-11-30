---
title: Konfigurieren des Überwachungsprotokolls für dein Unternehmen
intro: Du kannst Einstellungen für das Überwachungsprotokoll deines Unternehmens konfigurieren.
shortTitle: Configure audit logs
permissions: Enterprise owners can configure the audit log.
versions:
  feature: audit-data-retention-tab
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
ms.openlocfilehash: f624607d5729d32d836efedf1fa355a96489a175
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106565'
---
## Informationen zur Konfiguration des Überwachungsprotokolls

Du kannst einen Aufbewahrungszeitraum für Überwachungsprotokolldaten konfigurieren und Indexspeicherdetails anzeigen.

{% ifversion enable-git-events %} Nachdem du einen Aufbewahrungszeitraum konfiguriert hast, kannst du die Anzeige Git-bezogener Ereignisse im Überwachungsprotokoll aktivieren oder deaktivieren.
{% endif %}

## Konfigurieren eines Aufbewahrungszeitraums für Überwachungsprotokolldaten

Du kannst einen Aufbewahrungszeitraum für Überwachungsprotokolldaten für {% data variables.location.product_location %} konfigurieren. Daten, die den von dir konfigurierten Zeitraum überschreiten, werden dauerhaft vom Datenträger entfernt.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %} {% data reusables.audit_log.audit-data-retention-tab %}
1. Wähle unter „Aufbewahrungseinstellungen für Überwachungsprotokolle konfigurieren“ das Dropdownmenü aus, und klicke auf einen Aufbewahrungszeitraum.

   ![Screenshot des Dropdownmenüs für die Aufbewahrungseinstellungen für Überwachungsprotokolle](/assets/images/help/enterprises/audit-log-retention-dropdown.png)
1. Klicke auf **Speichern**.

{% ifversion enable-git-events %}
## Verwalten von Git-Ereignissen im Überwachungsprotokoll

Du kannst die Anzeige von Git-bezogenen Ereignissen wie `git.clone` und `git.push`im Überwachungsprotokoll deaktivieren. Eine Liste der Git-Ereignisse, die protokolliert werden, findest du unter [Überwachungsprotokollereignisse für dein Unternehmen](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#git-category-actions).

Wenn du Git-Ereignisse aktivierst, ist es aufgrund der großen Anzahl der protokollierten Git-Ereignisse empfehlenswert, den Dateispeicher deiner Instanz zu überwachen und die zugehörigen Warnungskonfigurationen zu überprüfen. Weitere Informationen findest du unter [Überwachen des Speichers](/admin/enterprise-management/monitoring-your-appliance/recommended-alert-thresholds#monitoring-storage).

Bevor du Git-Ereignisse im Überwachungsprotokoll aktivieren kannst, musst du einen Aufbewahrungszeitraum für Überwachungsprotokolldaten konfigurieren, der nicht „unendlich“ ist. Weitere Informationen findest du unter [Konfigurieren eines Aufbewahrungszeitraums für Überwachungsprotokolldaten](#configuring-a-retention-period-for-audit-log-data).

{% data reusables.audit_log.git-events-not-in-search-results %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %} {% data reusables.audit_log.audit-data-retention-tab %}
1. Wähle oder deaktiviere unter „Git-Ereignis-Opt-In“ die Option **Git-Ereignisse im Überwachungsprotokoll aktivieren**.

   ![Screenshot des Kontrollkästchens zum Aktivieren von Git-Ereignissen im Überwachungsprotokoll](/assets/images/help/enterprises/enable-git-events-checkbox.png)
1. Klicke auf **Speichern**.

{% endif %}
