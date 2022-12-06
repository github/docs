---
title: Erstellen eines Supporttickets
intro: 'Über das {% ifversion ghae %}{% data variables.contact.ae_azure_portal %}{% else %}{% data variables.contact.support_portal %}{% endif %} kannst du ein Supportticket erstellen und den {% data variables.contact.github_support %} kontaktieren.'
shortTitle: Creating a ticket
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
redirect_from:
  - /enterprise/admin/enterprise-support/preparing-to-submit-a-ticket
  - /admin/enterprise-support/preparing-to-submit-a-ticket
  - /admin/enterprise-support/receiving-help-from-github-support/preparing-to-submit-a-ticket
  - /enterprise/admin/guides/enterprise-support/reaching-github-enterprise-support
  - /enterprise/admin/enterprise-support/reaching-github-support
  - /admin/enterprise-support/reaching-github-support
  - /admin/enterprise-support/receiving-help-from-github-support/reaching-github-support
  - /enterprise/admin/enterprise-support/submitting-a-ticket
  - /admin/enterprise-support/submitting-a-ticket
  - /admin/enterprise-support/receiving-help-from-github-support/submitting-a-ticket
  - /articles/submitting-a-ticket
  - /github/working-with-github-support/submitting-a-ticket
topics:
  - Support
ms.openlocfilehash: 4be0e3be4154354bbc8ea592c9c13af4c0e217b4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145134174'
---
{% ifversion fpt or ghec or ghes %}

## Informationen zu Supporttickets

{% data reusables.support.zendesk-old-tickets %}

{% ifversion fpt %} {% data reusables.support.free-and-paid-support %} {% endif %}

{% ifversion ghes or ghec %} {% data reusables.enterprise-accounts.support-entitlements %} {% endif %}

{% ifversion ghes %} Du kannst dein Ticket mit dem {% data variables.contact.support_portal %} erstellen oder die Verwaltungskonsole von GitHub Enterprise Server verwenden, wenn du Diagnoseinformationen hinzufügen möchtest.
{% endif %}

Nachdem du dein Ticket erstellt hast, kannst du es sowie Antworten vom {% data variables.contact.github_support %} auf dem {% data variables.contact.contact_landing_page_portal %} anzeigen. Weitere Informationen findest du unter [Anzeigen und Aktualisieren von Supporttickets](/support/contacting-github-support/viewing-and-updating-support-tickets). 

## Was in deinem Supportticket enthalten sein sollte

Wenn du dem {% data variables.contact.github_support %} alles gibst, was benötigt wird, um ein Problem zu verstehen, zu ermitteln und nachzustellen, ermöglicht eine schnellere Lösung und weniger Kommunikation zwischen dir und dem Supportteam. Damit der {% data variables.contact.github_support %} dir helfen kann, beachte beim Schreiben deines Tickets die folgenden Punkte:

- Sammle Informationen, die dem {% data variables.contact.github_support %} helfen können, das Problem zu verfolgen, zu priorisieren, zu reproduzieren oder zu untersuchen.
- Füge vollständige URLs, Repositorynamen und Benutzernamen hinzu, sofern möglich.
- Reproduziere das Problem nach Möglichkeit und sei darauf eingestellt, die Schritte darzulegen.
- Bereite dich darauf vor, eine vollständige Beschreibung des Problems und der erwarteten Ergebnisse aufzuführen.
- Kopiere den genauen Wortlaut aller Fehlermeldungen, die mit deinem Problem zusammenhängen.
- Stelle fest, ob es in irgend einer laufenden Kommunikation mit {% data variables.contact.github_support %} eine vorhandene Ticketnummer gibt.
- Füge relevante Protokolle hinzu sowie alle Screenshots, die das Problem veranschaulichen.

{% ifversion ghes %}
## Ansprechpartner auswählen

Die Person die mit dem {% data variables.contact.github_support %} Kontakt aufnimmt, sollte speziell für Tickets mit Priorität „{% data variables.product.support_ticket_priority_urgent %}“ (dringend):

 - sachkundig in Bezug auf deine internen Systeme, Tools, Richtlinien und Prozesse
 - über Erfahrung mit {% data variables.product.product_name %} verfügen.
 - uneingeschränkten Zugriff auf und alle Berechtigungen für alle Dienste haben, die zur Behebung des Problems erforderlich sind.
 - ist berechtigt, die empfohlenen Änderungen an deinem Netzwerk und den entsprechenden Produkten vorzunehmen

{% endif %}

## Erstellen eines Supporttickets{% ifversion ghes %} mithilfe des Supportportals{% endif %}

1. Rufe das {% data variables.contact.contact_support_portal %} auf.
{% data reusables.support.submit-a-ticket %}

{% ifversion ghes %}

## Erstellen eines Tickets mithilfe der Verwaltungskonsole von GitHub Enterprise Server

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.type-management-console-password %} {% data reusables.enterprise_management_console.support-link %}
1. Wenn du deinem Supportticket Diagnoseinformationen hinzufügen möchtest, klicke unter „Diagnose“ auf **Diagnoseinformationen herunterladen**, und speichere die Datei lokal. Die Datei kannst du später an dein Supportticket anhängen.
  ![Screenshot der Schaltfläche „Diagnoseinformationen herunterladen“ auf der Supportseite der Verwaltungskonsole](/assets/images/enterprise/support/download-diagnostics-info-button.png)
1. Um das Ticket zu vervollständigen und das {% data variables.contact.enterprise_portal %} anzuzeigen, klicke unter „Supportanfrage öffnen“ auf **Neue Supportanfrage**.
  ![Screenshot der Schaltfläche „Neue Supportanfrage“ auf der Supportseite der Verwaltungskonsole](/assets/images/enterprise/management-console/open-support-request.png)
{% data reusables.support.submit-a-ticket %}

{% endif %}

{% elsif ghae %}

Du kannst ein Supportticket mit {% data variables.product.prodname_ghe_managed %} vom {% data variables.contact.ae_azure_portal %} aus absenden.

## Voraussetzungen

Um ein Ticket für {% data variables.product.prodname_ghe_managed %} im {% data variables.contact.ae_azure_portal %} abzusenden, musst du die ID deines Abonnements von {% data variables.product.prodname_ghe_managed %} in Azure bei deinem oder deiner Customer Success Account Manager*in (CSAM) bei Microsoft angeben.

## Absenden eines Tickets über das {% data variables.contact.ae_azure_portal %}

Gewerbekunden können Supportanfragen über das {% data variables.contact.contact_ae_portal %} absenden. Behördenkunden sollten das [Azure-Portal für Behördenkunden](https://portal.azure.us/#blade/Microsoft_Azure_Support/HelpAndSupportBlade) verwenden. Weitere Informationen findest du unter [Erstellen einer Azure-Supportanfrage](https://docs.microsoft.com/azure/azure-portal/supportability/how-to-create-azure-support-request) in der Microsoft-Dokumentation.

## Problembehandlung im {% data variables.contact.ae_azure_portal %}

{% data variables.product.company_short %} kann keine Zugriffs- und Abonnementprobleme im Azure-Portal behandeln. Wenn du Hilfe mit dem Azure-Portal benötigst, wende dich an deine*n CSAM bei Microsoft, oder lies die folgenden Informationen.

- Wenn du dich nicht beim Azure-Portal anmelden kannst, lies den Artikel [Behandeln von Anmeldeproblemen bei Azure-Abonnements](https://docs.microsoft.com/en-US/azure/cost-management-billing/manage/troubleshoot-sign-in-issue) in der Microsoft-Dokumentation, oder [sende direkt eine Anfrage](https://support.microsoft.com/en-us/supportrequestform/84faec50-2cbc-9b8a-6dc1-9dc40bf69178).

- Wenn du dich beim Azure-Portal anmelden, jedoch kein Ticket für {% data variables.product.prodname_ghe_managed %} absenden kannst, lies die Voraussetzungen zum Absenden eines Tickets. Weitere Informationen findest du unter [Voraussetzungen](#prerequisites).

{% endif %}

## Weitere Informationsquellen

- [Informationen zum GitHub-Support](/support/learning-about-github-support/about-github-support)
