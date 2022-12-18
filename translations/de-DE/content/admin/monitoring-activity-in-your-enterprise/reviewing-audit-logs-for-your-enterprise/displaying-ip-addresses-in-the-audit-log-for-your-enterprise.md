---
title: Anzeigen von IP-Adressen im Überwachungsprotokoll für dein Unternehmen
intro: Du kannst die Quell-IP-Adresse für Ereignisse im Überwachungsprotokoll deines Unternehmens anzeigen.
shortTitle: IP addresses in audit log
permissions: Enterprise owners can display IP addresses in the audit log for an enterprise.
versions:
  feature: enterprise-audit-log-ip-addresses
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
  - Networking
  - Security
ms.openlocfilehash: 7dad3642866b637432442591d8e5714e3db6f59f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147508075'
---
## Informationen zur Anzeige von IP-Adressen im Überwachungsprotokoll

Standardmäßig zeigt {% data variables.product.product_name %} die Quell-IP-Adresse für Ereignisse im Überwachungsprotokoll deines Unternehmens nicht an. Optional kannst du die vollständige IP-Adresse anzeigen, die dem oder der für jedes Ereignis verantwortlichen Akteur*in zugeordnet ist, um die Compliance sicherzustellen und auf Bedrohungen zu reagieren. Akteur*innen sind in der Regel Benutzer*innen, können aber auch Apps oder Integrationen sein.

Du bist dafür verantwortlich, dass gesetzliche Vorschriften eingehalten werden, die für das Anzeigen oder Speichern der IP-Adressen im Überwachungsprotokoll deines Unternehmens gelten.

Wenn du die Anzeige von IP-Adressen aktivierst, werden diese nur im Überwachungsprotokoll deines Unternehmens angezeigt. IP-Adressen werden nicht für Ereignisse in den Überwachungsprotokollen für einzelne Organisationen angezeigt, die deinem Unternehmen gehören. Weitere Informationen zum Organisieren von Überwachungsprotokollen findest du unter [Überprüfen des Überwachungsprotokolls deiner Organisation](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization).

Du kannst IP-Adressen unabhängig davon im Überwachungsprotokoll anzeigen, welche Authentifizierungsmethode du auf {% data variables.product.product_location %} für dein Unternehmen verwendest. Weitere Informationen findest du unter [Informationen zur Authentifizierung für dein Unternehmen](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise).

Wenn ein*e Benutzer*in ein Konto auf {% data variables.product.product_location %} erstellt, stimmt diese*r der Sammlung allgemeiner Informationen zur Verbindungsherstellung mit {% data variables.product.company_short %}-Diensten durch {% data variables.product.company_short %} zu. Darunter fällt auch die Quell-IP-Adresse. Weitere Informationen findest du in den [GitHub-Datenschutzbestimmungen](/free-pro-team@latest/site-policy/privacy-policies/github-privacy-statement#usage-information).

## Ereignisse, die IP-Adressen im Überwachungsprotokoll anzeigen

{% data variables.product.product_name %} zeigt eine IP-Adresse im Überwachungsprotokoll an, wenn ein Mitglied des Unternehmens mit einer Ressource interagiert, die sich im Besitz deines Unternehmens oder einer Organisation in deinem Unternehmen befindet. Beispielsweise wird eine IP-Adresse für überwachte Ereignisse angezeigt, die ein internes oder privates Repository im Besitz einer Organisation in deinem Unternehmen einbeziehen, oder Ressourcen, die diesen Repositorys zugeordnet sind, z. B. ein Issue, ein Pull Request, eine Aktion oder ein Projekt.

Wenn die Mitglieder deines Unternehmens auf {% data variables.product.product_location %} mit persönlichen Konten zugreifen, die sie selbst verwalten, weil {% data variables.product.prodname_emus %} nicht verwendet wird, zeigt {% data variables.product.product_name %} für die folgenden Aktionen kein Ereignis und keine IP-Adresse im Überwachungsprotokoll an.
  
- Authentifizierung bei {% data variables.product.product_location %}
- Interaktionen mit einer Ressource im Besitz des persönlichen Kontos, einschließlich eines Repositorys, Gists oder Projekts
- Interaktionen mit einem öffentlichen Repository im Besitz einer Organisation in deinem Unternehmen

## Aktivieren der Anzeige von IP-Adressen im Überwachungsprotokoll

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %}
1. Klicke unter „Überwachungsprotokoll“ auf **Quell-IP-Offenlegung**.

   ![Screenshot der Registerkarte „Quell-IP-Offenlegung“](/assets/images/help/enterprises/audit-log-source-ip-disclosure-tab.png)
1. Wähle unter „IP-Adressen von Akteuren in Überwachungsprotokollen offenlegen“ die Option **Quell-IP-Offenlegung aktivieren** aus.

   ![Screenshot: Kontrollkästchen zum Aktivieren der Anzeige von IP-Adressen in Überwachungsprotokollen](/assets/images/help/enterprises/audit-log-enable-source-ip-disclosure-checkbox.png)
1. Klicke auf **Speichern**.

Nachdem du das Feature aktiviert hast, kannst du auf das Überwachungsprotokoll zugreifen, um Ereignisse anzuzeigen, die IP-Adressen enthalten. Weitere Informationen findest du unter [Zugreifen auf das Überwachungsprotokoll für dein Unternehmen](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise).
