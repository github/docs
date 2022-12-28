---
title: Verwalten Deiner geplanten Erinnerungen
intro: 'Du kannst in Slack Erinnerungen erhalten, wenn für Dich oder Dein Team Pull Requests auf einen Review warten.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
redirect_from:
  - /github/setting-up-and-managing-your-github-user-account/managing-your-scheduled-reminders
  - /github/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/managing-your-scheduled-reminders
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/managing-your-scheduled-reminders
shortTitle: Manage scheduled reminders
ms.openlocfilehash: 7dab3826b1791d3b06b3a2594c3ba132c6d675b4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145164897'
---
## Über geplante Erinnerungen für Benutzer

Geplante Erinnerungen werden verwendet, um sicherzustellen, dass Benutzer sich auf die wichtigsten Review-Anforderungen konzentrieren, die ihre Aufmerksamkeit erfordern. Geplante Erinnerungen für Pull Requests senden Dir in Slack eine Nachricht mit offenen Pull Requests, die Deinen Review zu einem bestimmten Zeitpunkt benötigen. Du kannst beispielsweise planmäßige Erinnerungen so einrichten, dass sie Dir jeden Morgen um 10 Uhr eine Nachricht in Slack zusenden über Pull Requests, die von Dir oder einem Deiner Teams überprüft werden müssen.

Für bestimmte Ereignisse kannst Du auch Echtzeit-Alarmierung für geplante Erinnerungen einrichten. Echtzeit-Alarme werden in Deinen Slack-Kanal gesendet, sobald ein wichtiges Ereignis stattfindet, beispielsweise wenn Du einem Review zugewiesen wirst.

Du kannst geplante Erinnerungen für persönliche oder für Team-Review-Anfragen für Pull Requests in Organisationen festlegen, in denen Du Mitglied bist. Bevor Du eine geplante Erinnerung für Dich selbst erstellen kannst, muss ein Organisationsinhaber Deinen Slack-Arbeitsbereich autorisieren. Weitere Informationen findest du unter [Verwalten geplanter Erinnerungen für deine Organisation](/organizations/managing-organization-settings/managing-scheduled-reminders-for-your-organization).

{% data reusables.reminders.scheduled-reminders-limitations %}

## Erstellen geplanter Erinnerungen für dein persönliches Konto

{% data reusables.user-settings.access_settings %} {% data reusables.reminders.scheduled-reminders %}
1. Klicke neben der Organisation, für die du Erinnerungen planen möchtest, auf **Bearbeiten**.
![Schaltfläche zum Bearbeiten geplanter Erinnerungen](/assets/images/help/settings/scheduled-reminders-org-choice.png) {% data reusables.reminders.add-reminder %} {% data reusables.reminders.authorize-slack %} {% data reusables.reminders.days-dropdown %} {% data reusables.reminders.times-dropdowns %}
8. Um geplante Erinnerungen für Reviews zu erhalten, die dir zugewiesen wurden, kannst du optional **Dir zugewiesene Reviewaufträge** auswählen.
![Kontrollkästchen „Dir zugewiesene Reviewaufträge“](/assets/images/help/profile/scheduled-reminders-your-requests.png)
9. Um geplante Erinnerungen für Reviews zu erhalten, die einem Team zugewiesen wurden, dem du angehörst, kannst du optional **Deinem Team zugewiesene Reviewaufträge** auswählen.
![Kontrollkästchen „Deinem Team zugewiesene Reviewaufträge“](/assets/images/help/profile/scheduled-reminders-your-team-requests.png) {% data reusables.reminders.real-time-alerts %} ![Kontrollkästchen „Echtzeitbenachrichtigungen aktivieren“](/assets/images/help/settings/scheduled-reminders-real-time-alerts-personal.png) {% data reusables.reminders.create-reminder %}

## Erstellen geplanter Erinnerungen für dein persönliches Konto
{% data reusables.user-settings.access_settings %} {% data reusables.reminders.scheduled-reminders %}
1. Klicke neben der Organisation, für die du geplante Erinnerungen bearbeiten möchtest, auf **Bearbeiten**.
![Schaltfläche „Geplante Erinnerungen bearbeiten“](/assets/images/help/settings/scheduled-reminders-org-choice.png) {% data reusables.reminders.edit-page %} {% data reusables.reminders.update-buttons %}

## Löschen geplanter Erinnerungen für dein persönliches Konto
{% data reusables.user-settings.access_settings %} {% data reusables.reminders.scheduled-reminders %}
1. Klicke neben der Organisation, für die du Erinnerungen löschen möchtest, auf **Bearbeiten**.
![Schaltfläche „Geplante Erinnerungen bearbeiten“](/assets/images/help/settings/scheduled-reminders-org-choice.png) {% data reusables.reminders.delete %}

## Weiterführende Themen

- [Verwalten geplanter Erinnerungen für deine Organisation](/organizations/managing-organization-settings/managing-scheduled-reminders-for-your-organization)
- [Verwalten geplanter Erinnerungen für dein Team](/organizations/organizing-members-into-teams/managing-scheduled-reminders-for-your-team)
