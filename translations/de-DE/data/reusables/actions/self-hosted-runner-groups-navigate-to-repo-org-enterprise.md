---
ms.openlocfilehash: 31301d6de4160cc4a94b864a72232dd32cefd1cb
ms.sourcegitcommit: 872c4751a3fc255671295a5dea6a2081c66b7b71
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 08/30/2022
ms.locfileid: "145089180"
---
{% ifversion fpt %}
1. Navigiere zur Hauptseite des Repositorys oder der Organisation, in dem bzw. der sich deine selbstgehosteten Runnergruppen befinden.
2. Klicke auf {% octicon "gear" aria-label="The Settings gear" %} **Einstellungen**.
{% data reusables.organizations.settings-sidebar-actions-runner-groups %} {% elsif ghec or ghes or ghae %}
1. Navigiere zu dem Ort, an dem sich deine selbstgehosteten Runnergruppen befinden:
   * **In einer Organisation**: Navigiere zur Hauptseite, und klicke auf {% octicon "gear" aria-label="The Settings gear" %} **Einstellungen**.
   * **Bei Verwendung einer Gruppe auf Unternehmensebene**:

{% indented_data_reference reusables.enterprise-accounts.access-enterprise spaces=5 %}
2. Navigiere zu den Einstellungen für Runnergruppen:
   * **In einer Organisation**:

{% indented_data_reference reusables.actions.settings-ui.settings-actions-runner-groups spaces=5 %}
   * **Bei Verwendung einer Gruppe auf Unternehmensebene**:

{% indented_data_reference reusables.enterprise-accounts.policies-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-runner-groups-tab spaces=5 %} {% endif %}
