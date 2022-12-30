---
title: Identitätswechsel für Benutzer*innen
intro: 'Du kannst die Identität zu anderen Benutzer*innen wechseln und in ihrem Namen zur Problembehandlung, zum Aufheben von Sperren und aus anderen legitimen Gründen Aktionen durchführen.'
permissions: Enterprise owners can impersonate users within their enterprise.
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Administrator
  - Enterprise
  - User account
shortTitle: Impersonate a user
ms.openlocfilehash: df0513c3ca2931378e656f228939540dd5ea5816
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109289'
---
## Informationen zu Identitätswechseln für Benutzer*innen

Wenn du ein Benutzerkonto vorübergehend übernehmen musst (z. B. bei der Problembehandlung für diesen Benutzer oder wenn der Benutzer nicht verfügbar ist und dringende Maßnahmen erforderlich sind), kannst du eine Sitzung mit Identitätswechsel starten, um im Auftrag dieser Benutzer*innen zu agieren.

Für jede Sitzung mit Identitätswechsel musst du einen Grund für den Identitätswechsel angeben. Eine solche Sitzung ist auf eine Stunde begrenzt. Du erhältst dabei denselben Zugriff wie der oder die Benutzer*in, für den bzw. die du den Identitätswechsel vollziehst.

Aktionen, die du während einer Sitzung mit Identitätswechsel ausführst, werden als Ereignisse im Unternehmensüberwachungsprotokoll sowie im Sicherheitsprotokoll der imitierten Benutzer*innen aufgezeichnet. Die Person, zu deren Identität du wechselst, erhält eine E-Mail-Benachrichtigung, wenn die Sitzung mit Identitätswechsel gestartet wird. Weitere Informationen findest du unter [Ereignisse im Überwachungsprotokoll für dein Unternehmen](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise) und [Überprüfen deines Sicherheitsprotokolls](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log).

## Identitätswechsel für Benutzer*innen

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user %} {% data reusables.enterprise_site_admin_settings.click-user %}
4. Klicke links oben auf der Seite auf **Benutzerinformationen**.

   ![Benutzerinformationen](/assets/images/enterprise/stafftools/user-info.png)
5. Klicke unter „Gefahrenzone“ auf **Als @username bei GitHub anmelden**.

   ![Identität des Benutzers annehmen](/assets/images/enterprise/stafftools/impersonate.png)
6. Wähle in der Dropdownliste einen Grund aus. Wenn du **Andere** auswählst, musst du im Abschnitt **Notizen** zusätzlichen Kontext bereitstellen. Klicke auf **Identitätswechsel starten**, um die Sitzung zu starten.

   ![Grund für den Identitätswechsel](/assets/images/enterprise/stafftools/impersonation-reason.png)
7. Wenn du fertig bist und die Sitzung mit Identitätswechsel beenden möchtest, klickst du oben auf der Seite auf das Banner **Zu normalem Benutzernamen zurück wechseln**.

   ![Beenden eines Identitätswechsels](/assets/images/enterprise/stafftools/end-impersonation.png)
