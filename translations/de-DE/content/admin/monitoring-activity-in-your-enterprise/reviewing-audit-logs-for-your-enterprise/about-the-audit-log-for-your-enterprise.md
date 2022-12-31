---
title: Informationen zum Überwachungsprotokoll für dein Unternehmen
intro: 'Zur Unterstützung des Debuggens sowie interner und externer Compliance stellt {% data variables.product.product_name %} Protokolle von überwachten {% ifversion ghes %} System-,{% endif %} Benutzer-, Organisations- und Repositoryereignissen bereit.'
shortTitle: About audit logs
redirect_from:
  - /enterprise/admin/articles/audit-logging
  - /enterprise/admin/installation/audit-logging
  - /enterprise/admin/user-management/audit-logging
  - /admin/user-management/audit-logging
  - /admin/user-management/monitoring-activity-in-your-enterprise/audit-logging
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/auditing-activity-in-your-enterprise
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/auditing-activity-in-your-enterprise
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/auditing-activity-in-your-enterprise
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Auditing
  - Enterprise
  - Logging
  - Security
ms.openlocfilehash: be8600e2037793a145fd2484742ddd3eb52e91a4
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159037'
---
## Informationen zu Überwachungsprotokollen

{% data reusables.audit_log.retention-periods %}

{% data reusables.audit_log.audit-log-search-list-info-about-action %}

Zusätzlich zum Anzeigen deines Überwachungsprotokolls kannst du Aktivitäten in deinem Unternehmen auf andere Arten überwachen, z. B. durch {% ifversion ghes or ghae %}Anzeigen von Pushprotokollen und {% endif %} Verwalten von globalen Webhooks. Weitere Informationen findest du unter „[Erkunden von Benutzeraktivitäten in deinem Unternehmen](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity)“.

## Verwendung deiner Überwachungsprotokolle

Als Unternehmensbesitzer{% ifversion ghes %} oder Websiteadministrator{% endif %} kannst du mit den Überwachungsprotokolldaten für dein Unternehmen auf mehrere Arten interagieren:
- Du kannst das Überwachungsprotokoll für dein Unternehmen anzeigen. Weitere Informationen findest du unter „[Zugreifen auf das Überwachungsprotokoll für dein Unternehmen](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise)“.
- Du kannst das Überwachungsprotokoll nach bestimmten Ereignissen durchsuchen{% ifversion ghec %} und Überwachungsprotokolldaten exportieren{% endif %}. Weitere Informationen findest du unter [Durchsuchen des Überwachungsprotokolls für dein Unternehmen](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise){% ifversion ghec %} und [Exportieren des Überwachungsprotokolls für dein Unternehmen](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/exporting-audit-log-activity-for-your-enterprise){% endif %}.{% ifversion token-audit-log %}
- Du kannst alle Ereignisse identifizieren, die von einem bestimmten Zugriffstoken ausgeführt wurden. Weitere Informationen findest du unter [Identifizieren von Überwachungsprotokollereignissen, die von einem Zugriffstoken ausgeführt werden](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token).{% endif %} {% ifversion audit-data-retention-tab %}
- Du kannst Einstellungen konfigurieren, z. B. den Aufbewahrungszeitraum für Überwachungsprotokollereignisse{% ifversion enable-git-events %} und ob Git-Ereignisse enthalten sein sollen{% endif %}. Weitere Informationen findest du unter [Konfigurieren des Überwachungsprotokolls für dein Unternehmen](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/configuring-the-audit-log-for-your-enterprise).{% endif %} {%- ifversion enterprise-audit-log-ip-addresses %}
- Du kannst die IP-Adresse anzeigen, die Ereignissen im Überwachungsprotokoll zugeordnet ist. Weitere Informationen findest du unter [Anzeigen von IP-Adressen im Überwachungsprotokoll für dein Unternehmen](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/displaying-ip-addresses-in-the-audit-log-for-your-enterprise)
{%- endif %} {%- ifversion audit-log-streaming %}
- Du kannst Überwachungs- und Git-Ereignisdaten aus {% data variables.product.prodname_dotcom %} in ein externes Datenverwaltungssystem streamen. Weitere Informationen findest du unter „[Streamen des Überwachungsprotokolls für dein Unternehmen](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise)“.
{%- endif %} {%- ifversion ghes %}
- Du kannst Überwachungs- und Systemprotokolle aus deinem Unternehmen an ein von einem Drittanbieter gehostetes Überwachungssystem weiterleiten. Weitere Informationen findest du unter [Protokollweiterleitung](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding).
{%- endif %}
- Du kannst mithilfe der Überwachungsprotokoll-API Aktionen anzeigen, die in deinem Unternehmen ausgeführt werden. Weitere Informationen findest du unter „[Verwenden der Überwachungsprotokoll-API für dein Unternehmen](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise)“.

Eine vollständige Liste der Überwachungsprotokollaktionen, die im Überwachungsprotokoll deines Unternehmens möglicherweise angezeigt werden, findest du unter „[Überwachungsprotokollaktionen für dein Unternehmen](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)“.

## Weiterführende Themen
- „[Überprüfen des Überwachungsprotokolls für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization)“ {%- ifversion ghes %}
- „[Informationen zu Systemprotokollen](/admin/enterprise-management/monitoring-your-appliance/about-system-logs)“ {%- endif %}
