---
title: Verwalten Deiner geplanten Erinnerungen
intro: Get reminders in Slack when you or your team have pull requests waiting for review.
versions:
  fpt: '*'
  ghec: '*'
topics:
- Accounts
redirect_from:
- /github/setting-up-and-managing-your-github-user-account/managing-your-scheduled-reminders
- /github/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/managing-your-scheduled-reminders
shortTitle: Manage scheduled reminders
ms.openlocfilehash: 41670a8c8b8aa1e6eade16c42f5a146f1ec0f5ee
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 05/17/2022
ms.locfileid: "145088795"
---
## <a name="about-scheduled-reminders-for-users"></a>Über geplante Erinnerungen für Benutzer

Geplante Erinnerungen werden verwendet, um sicherzustellen, dass Benutzer sich auf die wichtigsten Review-Anforderungen konzentrieren, die ihre Aufmerksamkeit erfordern. Geplante Erinnerungen für Pull Requests senden Dir in Slack eine Nachricht mit offenen Pull Requests, die Deinen Review zu einem bestimmten Zeitpunkt benötigen. Du kannst beispielsweise planmäßige Erinnerungen so einrichten, dass sie Dir jeden Morgen um 10 Uhr eine Nachricht in Slack zusenden über Pull Requests, die von Dir oder einem Deiner Teams überprüft werden müssen.

Für bestimmte Ereignisse kannst Du auch Echtzeit-Alarmierung für geplante Erinnerungen einrichten. Echtzeit-Alarme werden in Deinen Slack-Kanal gesendet, sobald ein wichtiges Ereignis stattfindet, beispielsweise wenn Du einem Review zugewiesen wirst.

Du kannst geplante Erinnerungen für persönliche oder für Team-Review-Anfragen für Pull Requests in Organisationen festlegen, in denen Du Mitglied bist. Bevor Du eine geplante Erinnerung für Dich selbst erstellen kannst, muss ein Organisationsinhaber Deinen Slack-Arbeitsbereich autorisieren. Weitere Informationen findest Du unter "[Verwalten geplanter Erinnerungen für Deine Organisation](/organizations/managing-organization-settings/managing-scheduled-reminders-for-your-organization)".

{% data reusables.reminders.scheduled-reminders-limitations %}

## <a name="creating-scheduled-reminders-for-your-personal-account"></a>Erstellen geplanter Erinnerungen für Dein persönliches Konto

{% data reusables.user-settings.access_settings %} {% data reusables.reminders.scheduled-reminders %}
1. Neben der Organisation, für die Du Erinnerungen planen möchtest, klicke auf **Edit** (Bearbeiten).
![Schaltfläche zum Bearbeiten geplanter Erinnerungen](/assets/images/help/settings/scheduled-reminders-org-choice.png) {% data reusables.reminders.add-reminder %} {% data reusables.reminders.authorize-slack %} {% data reusables.reminders.days-dropdown %} {% data reusables.reminders.times-dropdowns %}
8. Um optional geplante Erinnerungen für Reviews zu erhalten, die Dir zugewiesen wurden, wähle **Review requests assigned to you** (Review-Anforderungen, die Dir zugewiesen wurden).
![Kontrollkästchen "Review requests assigned to you" (Dir zugewiesene Review-Anforderungen)](/assets/images/help/profile/scheduled-reminders-your-requests.png)
9. Um geplante Erinnerungen für Reviews zu erhalten, die einem Team zugewiesen wurden, dem Du angehörst, kannst Du auch **Review requests assigned to your team** (Review-Anforderungen, die Deinem Team zugewiesen wurden) auswählen.
![Kontrollkästchen "Review requests assigned to your team" (Review-Anforderungen, die Deinem Team zugewiesen wurden)](/assets/images/help/profile/scheduled-reminders-your-team-requests.png) {% data reusables.reminders.real-time-alerts %} ![Kontrollkästchen "Enable real-time alerts" (Echtzeitbenachrichtigungen aktivieren)](/assets/images/help/settings/scheduled-reminders-real-time-alerts-personal.png) {% data reusables.reminders.create-reminder %}

## <a name="managing-scheduled-reminders-for-your-personal-account"></a>Erstellen geplanter Erinnerungen für Dein persönliches Konto
{% data reusables.user-settings.access_settings %} {% data reusables.reminders.scheduled-reminders %}
1. Neben der Organisation, für die Du Erinnerungen planen möchtest, klicke auf **Edit** (Bearbeiten).
![Schaltfläche "Scheduled reminders edit" (Geplante Erinnerungen bearbeiten)](/assets/images/help/settings/scheduled-reminders-org-choice.png) {% data reusables.reminders.edit-page %} {% data reusables.reminders.update-buttons %}

## <a name="deleting-scheduled-reminders-for-your-personal-account"></a>Löschen geplanter Erinnerungen für Dein persönliches Konto
{% data reusables.user-settings.access_settings %} {% data reusables.reminders.scheduled-reminders %}
1. Neben der Organisation, für die Du Erinnerungen löschen möchtest, klicke auf **Edit** (Bearbeiten).
![Schaltfläche "Scheduled reminders edit" (Geplante Erinnerungen bearbeiten)](/assets/images/help/settings/scheduled-reminders-org-choice.png) {% data reusables.reminders.delete %}

## <a name="further-reading"></a>Weiterführende Themen

- "[Geplante Erinnerungen für Deine Organisation verwalten](/organizations/managing-organization-settings/managing-scheduled-reminders-for-your-organization)"
- "[Geplante Erinnerungen für Dein Team verwalten](/organizations/organizing-members-into-teams/managing-scheduled-reminders-for-your-team)"
