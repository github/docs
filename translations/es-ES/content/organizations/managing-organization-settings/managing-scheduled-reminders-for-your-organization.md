---
title: Administrar los recordatorios programados para tu organización
intro: Puedes obtener recordatorios en Slack para todas las solicitudes de extracción de las cuales se haya solicitado revisión por parte de los equipos en tu organización.
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145126219'
---
## Acerca de los recordatorios programados para las solicitudes de extracción

{% data reusables.reminders.about-scheduled-reminders-teams-orgs %}

Los propietarios de la organización pueden programar un recordatorio para uno mas equipos en ella que contemple todas las solicitudes de extracción que han solicitado la revisión de uno o más equipos de ésta.

{% data reusables.reminders.scheduled-reminders-limitations %}

## Crear un recordatorio programado para una organización
{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.reminders.scheduled-reminders %} {% data reusables.reminders.add-reminder %} {% data reusables.reminders.authorize-slack %} {% data reusables.reminders.slack-channel %} {% data reusables.reminders.days-dropdown %} {% data reusables.reminders.times-dropdowns %} {% data reusables.reminders.tracked-repos %}
1.  En "Filter by team assigned to review code" (Filtrar por equipo asignado para revisar el código), haga clic en el menú desplegable **Add a team** (Agregar un equipo) y elija uno o más equipos. Puedes agregar hasta 100 equipos. Si el equipo que seleccionas carece de acceso a los "Repositorios rastreados" seleccionados anteriormente, no podrás crear el recordatorio programado.
![Menú desplegable Add a team](/assets/images/help/organizations/scheduled-reminders-add-teams.png) (Agregar un equipo) {% data reusables.reminders.ignore-drafts %} {% data reusables.reminders.no-review-requests %} {% data reusables.reminders.author-reviews %} {% data reusables.reminders.approved-prs %} {% data reusables.reminders.min-age %} {% data reusables.reminders.min-staleness %} {% data reusables.reminders.ignored-terms %} {% data reusables.reminders.ignored-labels %} {% data reusables.reminders.required-labels %} {% data reusables.reminders.create-reminder %}

## Administrar un recordatorio programado para una organización
{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.reminders.scheduled-reminders %} {% data reusables.reminders.edit-existing %} {% data reusables.reminders.edit-page %} {% data reusables.reminders.update-buttons %}

## Borrar un recordatorio programado para una organización
{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.reminders.scheduled-reminders %} {% data reusables.reminders.delete %}

## Lecturas adicionales

- "[Administración de los recordatorios programados](/github/setting-up-and-managing-your-github-user-account/managing-your-scheduled-reminders)"
- "[Administración de los recordatorios programados para el equipo](/organizations/organizing-members-into-teams/managing-scheduled-reminders-for-your-team)"
