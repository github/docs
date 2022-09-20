---
ms.openlocfilehash: 48dc95869bae901bf79df320e83b65979dedfd65
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: "147763752"
---
{% ifversion fpt %}
1. Vaya a la página principal de la organización en la que está registrado su ejecutor autohospedado.
2. Haga clic en {% octicon "gear" aria-label="The Settings gear" %} **Settings** (Configuración).
{% data reusables.organizations.settings-sidebar-actions-runners %} {% elsif ghec or ghes or ghae %}
1. Navega a donde está registrado tu ejecutor:
   * **En una organización**: vaya a la página principal y haga clic en {% octicon "gear" aria-label="The Settings gear" %} **Settings** (Configuración).
   * **Si usa un ejecutor de nivel empresarial**:

{% indented_data_reference reusables.enterprise-accounts.access-enterprise spaces=5 %}
1. Navega a los ajustes de {% data variables.product.prodname_actions %}:
   * **En una organización**: 

{% indented_data_reference reusables.actions.settings-ui.settings-actions-runners spaces=5 %}
   * **Si usa un ejecutor de nivel empresarial**: 

{% indented_data_reference reusables.enterprise-accounts.policies-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-runners-tab spaces=5 %} {% endif %}
