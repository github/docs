---
ms.openlocfilehash: c1f0ddf259431616bbada45e736385bb45ba3d75
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: "147763974"
---
{% ifversion fpt %}
1. Navigiere zur Hauptseite des Repositorys oder der Organisation, in dem bzw. der sich deine Runnergruppen befinden.
2. Klicke auf {% octicon "gear" aria-label="The Settings gear" %} **Einstellungen**.
{% data reusables.organizations.settings-sidebar-actions-runner-groups %} {% elsif ghec or ghes or ghae %}
1. Navigiere zu dem Ort, an dem sich deine Runnergruppen befinden:
   * **In einer Organisation**: Navigiere zur Hauptseite, und klicke auf {% octicon "gear" aria-label="The Settings gear" %} **Einstellungen**.
   * **Bei Verwendung einer Gruppe auf Unternehmensebene**:

{% indented_data_reference reusables.enterprise-accounts.access-enterprise spaces=5 %}
2. Navigiere zu den Einstellungen für Runnergruppen:
   * **In einer Organisation**:

{% indented_data_reference reusables.actions.settings-ui.settings-actions-runner-groups spaces=5 %}
   * **Bei Verwendung einer Gruppe auf Unternehmensebene**:

{% indented_data_reference reusables.enterprise-accounts.policies-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-runner-groups-tab spaces=5 %} {% endif %}
