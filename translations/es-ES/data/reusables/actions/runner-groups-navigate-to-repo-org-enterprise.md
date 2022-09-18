---
ms.openlocfilehash: c1f0ddf259431616bbada45e736385bb45ba3d75
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: "147764102"
---
{% ifversion fpt %}
1. Navega a la página principal del repositorio u organización en donde se ubican tus grupos de ejecutores.
2. Haga clic en {% octicon "gear" aria-label="The Settings gear" %} **Configuración**.
{% data reusables.organizations.settings-sidebar-actions-runner-groups %} {% elsif ghec or ghes or ghae %}
1. Navega a donde se ubiquen tus grupos de ejecutores:
   * **En una organización**: vaya a la página principal y haga clic en {% octicon "gear" aria-label="The Settings gear" %} **Configuración**.
   * **Si usa un grupo de nivel de empresa**:

{% indented_data_reference reusables.enterprise-accounts.access-enterprise spaces=5 %}
2. Navega a los ajustes de los "Grupos de ejecutores":
   * **En una organización**:

{% indented_data_reference reusables.actions.settings-ui.settings-actions-runner-groups spaces=5 %}
   * **Si usa un grupo de nivel de empresa**:

{% indented_data_reference reusables.enterprise-accounts.policies-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-runner-groups-tab spaces=5 %} {% endif %}
