---
ms.openlocfilehash: ed7e94a18edf6d5c55ba6fb12c5f09236a9f2fe5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "145103992"
---
| Aktion | BESCHREIBUNG
|------------------|-------------------
| `remove_self_hosted_runner` | Wird ausgelöst, wenn ein selbstgehosteter Runner entfernt wird.
| `register_self_hosted_runner` | Wird ausgelöst, wenn ein neuer selbstgehosteter Runner registriert wird. Weitere Informationen findest du unter [Hinzufügen von selbstgehosteten Runnern](/actions/hosting-your-own-runners/adding-self-hosted-runners).
| `runner_group_created` | Wird ausgelöst, wenn eine selbstgehostete Runnergruppe erstellt wird. Weitere Informationen findest du unter [Informationen zu selbstgehosteten Runnergruppen](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#about-self-hosted-runner-groups).
| `runner_group_removed` | Wird ausgelöst, wenn eine selbstgehostete Runnergruppe entfernt wird. Weitere Informationen findest du unter [Removing a self-hosted runner group](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group) („Entfernen einer selbstgehosteten Runnergruppe“).
| `runner_group_runner_removed` | Wird ausgelöst, wenn die REST-API verwendet wird, um einen selbstgehosteten Runner aus einer Gruppe zu entfernen.
| `runner_group_runners_added` | Wird ausgelöst, wenn ein selbstgehosteter Runner zu einer Gruppe hinzugefügt wird. Weitere Informationen findest du unter [Verschieben eines selbstgehosteten Runners in eine Gruppe](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group).
| `runner_group_runners_updated` | Wird ausgelöst, wenn die Mitgliederliste einer Runnergruppe aktualisiert wird. Weitere Informationen findest du unter [Set self-hosted runners in a group for an organization](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization) („Festlegen von selbstgehosteten Runnern in einer Gruppe für eine Organisation“).
| `runner_group_updated` | Wird ausgelöst, wenn die Konfiguration einer selbstgehosteten Runnergruppe geändert wird. Weitere Informationen findest du unter [Ändern der Zugriffsrichtlinie einer selbstgehosteten Runnergruppe](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group).
| `self_hosted_runner_updated` | Wird ausgelöst, wenn die Runneranwendung aktualisiert wird. Kann über die REST-API und die Benutzeroberfläche angezeigt werden. Im JSON-/CSV-Export ist dieses Ereignis nicht sichtbar. Weitere Informationen findest du unter [Informationen zu selbstgehosteten Runnern](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners).{% ifversion fpt or ghec %}
| `self_hosted_runner_online` | Wird ausgelöst, wenn die Runneranwendung gestartet wird. Kann nur über die REST-API angezeigt werden. Über die Benutzeroberfläche oder im JSON/CSV-Export ist dieses Ereignis nicht sichtbar. Weitere Informationen findest du unter [Checking the status of a self-hosted runner](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner) („Überprüfen des Status eines selbstgehosteten Runners“).
| `self_hosted_runner_offline` | Wird ausgelöst, wenn die Runneranwendung angehalten wird. Kann nur über die REST-API angezeigt werden. Über die Benutzeroberfläche oder im JSON/CSV-Export ist dieses Ereignis nicht sichtbar. Weitere Informationen findest du unter [Checking the status of a self-hosted runner](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner) („Überprüfen des Status eines selbstgehosteten Runners“).{% endif %}
