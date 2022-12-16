---
title: Anzeigen und Aktualisieren von Supporttickets
intro: 'Du kannst deine Supporttickets{% ifversion ghes or ghec %} anzeigen, mit Kollegen an Tickets zusammenarbeiten{% endif %} und dem {% data variables.contact.github_support %} über das {% data variables.contact.support_portal %} antworten.'
shortTitle: Managing your tickets
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Support
ms.openlocfilehash: b735331d90c590ff6911fed44e181563b44bfc27
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193387'
---
## Informationen zur Ticketverwaltung

{% data reusables.support.zendesk-old-tickets %}

Du kannst das [GitHub-Supportportal](https://support.github.com/) verwenden, um aktuelle und frühere Supporttickets anzuzeigen und dem {% data variables.contact.github_support %} zu antworten. Nach 120 Tagen werden aufgelöste Tickets archiviert{% ifversion ghec or ghes or ghae %}, und archivierte Tickets können nur für Unternehmenskonten angezeigt werden{% endif %}.

{% ifversion ghes or ghec %} {% data reusables.enterprise-accounts.support-entitlements %} {% endif %}

## Anzeigen deiner letzten Supporttickets

{% data reusables.support.view-open-tickets %}
1. Unter dem Textfeld kannst du den Kommentarverlauf lesen. Die letzte Antwort wird an oberster Stelle angezeigt.

   ![Screenshot: Supportticket-Kommentarverlauf mit der neuesten Antwort am Anfang](/assets/images/help/support/support-recent-response.png)

1. Der Ticketkommentar kann optional übersetzt werden. Klicke hierzu auf {% octicon "globe" aria-label="The globe icon" %}, und wähle aus dem Dropdownmenü deine bevorzugte Sprache aus. Supportticket können in folgende Sprachen übersetzt werden: Chinesisch (vereinfacht), Französisch, Deutsch, Japanisch, Portugiesisch (Brasilien) und Spanisch.

   ![Screenshot: Supportticket mit hervorgehobenen Übersetzungsoptionen im Dropdownmenü](/assets/images/help/support/support-ticket-translation-options.png)

{% ifversion ghec or ghes or ghae %}

## Anzeigen deiner archivierten Supporttickets

Du kannst nur archivierte Tickets für ein Unternehmenskonto anzeigen.

{% data reusables.support.navigate-to-my-tickets %}
1. Wähle das Dropdownmenü **Meine Tickets** aus, und klicke auf den Namen des Unternehmenskontos. 

{% indented_data_reference reusables.support.entitlements-note spaces=3 %}

   ![Screenshot des Dropdownmenüs "Meine Tickets".](/assets/images/help/support/ticket-context.png)
1. Klicke in der Tabelle „Meine Tickets“ auf **Archivierte Tickets anzeigen**.

{% endif %}

## Aktualisieren von Supporttickets

{% data reusables.support.view-open-tickets %}
1. Wenn das Problem behoben ist, kannst du optional unter dem Textfeld auf **Ticket schließen** klicken.
![Screenshot: Position der Schaltfläche „Ticket schließen“.](/assets/images/help/support/close-ticket.png)
1. Um dem GitHub-Support zu antworten und dem Ticket einen neuen Kommentar hinzuzufügen, gib deine Antwort in das Textfeld ein.
![Screenshot des Textfelds „Kommentar hinzufügen“.](/assets/images/help/support/new-comment-field.png)
1. Um dem Ticket deinen Kommentar hinzuzufügen, klicke auf **Kommentar**.
![Screenshot der Schaltfläche „Kommentar“.](/assets/images/help/support/add-comment.png)

{% ifversion ghec or ghes %}
## Zusammenarbeit an Supporttickets

Du kannst mit deinen Kollegen über das Supportportal an Supporttickets zusammenarbeiten. Besitzer, Abrechnungsmanager und andere Unternehmensmitglieder mit Supportberechtigungen können Tickets anzeigen, die sich auf ein Unternehmenskonto oder eine von einem Unternehmenskonto verwaltete Organisation beziehen. Weitere Informationen findest du unter [Verwalten von Supportberechtigungen für dein Unternehmen](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise).

Neben dem Anzeigen von Tickets kannst du auch Kommentare zu Supporttickets hinzufügen, wenn deine E-Mail-Adresse in das Ticket kopiert wurde oder wenn die Person, die das Ticket geöffnet hat, eine E-Mail-Adresse mit einer Domäne verwendet hat, die für das Unternehmenskonto oder die von einem Unternehmenskonto verwaltete Organisation verifiziert wurde. Weitere Informationen zum Überprüfen einer Domäne findest du unter [Überprüfen oder Genehmigen einer Domäne für dein Unternehmen](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise) und [Überprüfen oder Genehmigen einer Domäne für deine Organisation](/enterprise-cloud@latest/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization).

{% endif %}

## Weitere Informationsquellen

- [Informationen zum GitHub-Support](/support/learning-about-github-support/about-github-support)
