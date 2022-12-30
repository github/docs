---
title: Administrar tus recordatorios programados
intro: Obtén recordatorios en Slack cuando tú o tu equipo tenga solicitudes de extracción pendientes de revisión.
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145165181'
---
## Acerca de los recordatorios programados para usuarios

Los recordatorios programados se utilizan para garantizar que los usuarios se enfoquen en las solicitudes de revisión más importantes que requieren de su atención. Los recordatorios programados para solicitudes de extracción te enviarán un mensaje en Slack con las solicitudes de extracción que estén abiertas y necesiten de tu revisión en un periodo específico. Por ejemplo, puedes configurar tus recordatorios programados para que te envíen un mensaje en Slack cada mañana a las 10 AM con las solicitudes de extracción que requieren de tu revisión o de la de alguno de tus equipos.

Para ciertos eventos, también puedes habilitar las alertas en tiempo real para los recordatorios programados. Las alertas en tiempo real se envían a tu canal de Slack tan pronto se suscita un evento importante, tal como cuando se te asigna una revisión.

Puedes configurar recordatorios programados para solicitudes de revisión a nivel personal o a nivel de equipo para las solicitudes de extracción en las organizaciones de las cuales eres miembro. Antes de que puedas crear un recordatorio programado para ti mismo, un propietario de la organización debe autorizar tu espacio de trabajo en Slack. Para más información, vea "[Administración de recordatorios programados para la organización](/organizations/managing-organization-settings/managing-scheduled-reminders-for-your-organization)".

{% data reusables.reminders.scheduled-reminders-limitations %}

## Creación de recordatorios programados para tu cuenta personal

{% data reusables.user-settings.access_settings %} {% data reusables.reminders.scheduled-reminders %}
1. Junto a la organización para la que quiera programar recordatorios, haga clic en **Editar**.
![Botón Editar para recordatorios programados](/assets/images/help/settings/scheduled-reminders-org-choice.png) {% data reusables.reminders.add-reminder %} {% data reusables.reminders.authorize-slack %} {% data reusables.reminders.days-dropdown %} {% data reusables.reminders.times-dropdowns %}
8. Opcionalmente, a fin de recibir recordatorios programados para las revisiones que le hayan asignado, seleccione **Revisar las solicitudes que le han asignado**.
![Casilla para revisar las solicitudes que le han asignado](/assets/images/help/profile/scheduled-reminders-your-requests.png)
9. Opcionalmente, a fin de recibir los recordatorios programados para las revisiones que se han asignado a algún equipo del que sea miembro, seleccione **Revisar solicitudes asignadas al equipo**.
![Casilla para revisar las solicitudes asignadas al equipo](/assets/images/help/profile/scheduled-reminders-your-team-requests.png) {% data reusables.reminders.real-time-alerts %} ![Casilla para habilitar alertas en tiempo real](/assets/images/help/settings/scheduled-reminders-real-time-alerts-personal.png) {% data reusables.reminders.create-reminder %}

## Administración de recordatorios programados para tu cuenta personal
{% data reusables.user-settings.access_settings %} {% data reusables.reminders.scheduled-reminders %}
1. Junto a la organización en la que quiera editar los recordatorios programados, haga clic en **Editar**.
![Botón de edición de recordatorios programados](/assets/images/help/settings/scheduled-reminders-org-choice.png) {% data reusables.reminders.edit-page %} {% data reusables.reminders.update-buttons %}

## Eliminación de recordatorios programados para tu cuenta personal
{% data reusables.user-settings.access_settings %} {% data reusables.reminders.scheduled-reminders %}
1. Junto a la organización en la que quiera eliminar recordatorios, haga clic en **Editar**.
![Botón de edición de recordatorios programados](/assets/images/help/settings/scheduled-reminders-org-choice.png) {% data reusables.reminders.delete %}

## Información adicional

- "[Administración de recordatorios programados para la organización](/organizations/managing-organization-settings/managing-scheduled-reminders-for-your-organization)"
- "[Administración de los recordatorios programados para el equipo](/organizations/organizing-members-into-teams/managing-scheduled-reminders-for-your-team)"
