---
title: Geplante Erinnerungen für Deine Organisation verwalten
intro: 'Du kannst in Slack Erinnerungen für alle Pull Requests erhalten, für die Teams in deiner Organisation zum Review angefordert wurden.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage scheduled reminders
ms.openlocfilehash: 870e22581488689a72cc70f317b6d97fdc4f5ed5
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145125714'
---
## Über geplante Erinnerungen für Pull Requests

{% data reusables.reminders.about-scheduled-reminders-teams-orgs %}

Organisationsinhaber können Erinnerungen für eines oder mehrere Teams in ihrer Organisation planen, für alle Pull Requests, für welche ein Team oder Teams zum Review angefordert wurde(n).

{% data reusables.reminders.scheduled-reminders-limitations %}

## Eine geplante Erinnerung für eine Organisation erstellen
{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.reminders.scheduled-reminders %} {% data reusables.reminders.add-reminder %} {% data reusables.reminders.authorize-slack %} {% data reusables.reminders.slack-channel %} {% data reusables.reminders.days-dropdown %} {% data reusables.reminders.times-dropdowns %} {% data reusables.reminders.tracked-repos %}
1.  Klicke unter „Nach für Code Review zugewiesenem Team filtern“ auf das Dropdownmenü **Team hinzufügen**, und wähle mindestens ein Team aus. Du kannst bis zu 100 Teams auswählen. Wenn das ausgewählte Team keinen Zugriff auf die oben ausgewählten "Tracked Repositories" (verfolgte Repositorys) hat, kannst Du die geplante Erinnerung nicht erstellen.
![Hinzufügen eines Team-Dropdownmenüs](/assets/images/help/organizations/scheduled-reminders-add-teams.png) {% data reusables.reminders.ignore-drafts %} {% data reusables.reminders.no-review-requests %} {% data reusables.reminders.author-reviews %} {% data reusables.reminders.approved-prs %} {% data reusables.reminders.min-age %} {% data reusables.reminders.min-staleness %} {% data reusables.reminders.ignored-terms %} {% data reusables.reminders.ignored-labels %} {% data reusables.reminders.required-labels %} {% data reusables.reminders.create-reminder %}

## Geplante Erinnerungen für eine Organisation verwalten
{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.reminders.scheduled-reminders %} {% data reusables.reminders.edit-existing %} {% data reusables.reminders.edit-page %} {% data reusables.reminders.update-buttons %}

## Geplante Erinnerungen für eine Organisation löschen
{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.reminders.scheduled-reminders %} {% data reusables.reminders.delete %}

## Weiterführende Themen

- [Verwalten deiner geplanten Erinnerungen](/github/setting-up-and-managing-your-github-user-account/managing-your-scheduled-reminders)
- [Verwalten geplanter Erinnerungen für dein Team](/organizations/organizing-members-into-teams/managing-scheduled-reminders-for-your-team)
