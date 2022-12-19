---
ms.openlocfilehash: 31301d6de4160cc4a94b864a72232dd32cefd1cb
ms.sourcegitcommit: 872c4751a3fc255671295a5dea6a2081c66b7b71
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 08/30/2022
ms.locfileid: "145092009"
---
{% ifversion fpt %}
1. Navega a la página principal del repositorio u organización en donde se ubican tus grupos de ejecutores auto-hospedados.
2. Haga clic en {% octicon "gear" aria-label="The Settings gear" %} **Configuración**.
{% data reusables.organizations.settings-sidebar-actions-runner-groups %} {% elsif ghec or ghes or ghae %}
1. Navega a donde se ubiquen tus grupos de ejecutores auto-hospedados:
   * **En una organización**: vaya a la página principal y haga clic en {% octicon "gear" aria-label="The Settings gear" %} **Configuración**.
   * **Si usa un grupo de nivel de empresa**:

{% indented_data_reference reusables.enterprise-accounts.access-enterprise spaces=5 %}
2. Navega a los ajustes de los "Grupos de ejecutores":
   * **En una organización**:

{% indented_data_reference reusables.actions.settings-ui.settings-actions-runner-groups spaces=5 %}
   * **Si usa un grupo de nivel de empresa**:

{% indented_data_reference reusables.enterprise-accounts.policies-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-runner-groups-tab spaces=5 %} {% endif %}
