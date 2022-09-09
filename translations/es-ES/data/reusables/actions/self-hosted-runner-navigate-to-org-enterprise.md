---
ms.openlocfilehash: e63c220aff35a6efc7b2b2e2738b2b7645386d43
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/13/2022
ms.locfileid: "145069440"
---
{% ifversion fpt %}
1. Vaya a la página principal de la organización en la que está registrado su ejecutor autohospedado.
2. Haga clic en {% octicon "gear" aria-label="The Settings gear" %} **Settings** (Configuración).
{% data reusables.organizations.settings-sidebar-actions-runners %} {% elsif ghec or ghes or ghae %}
1. Navega a donde está registrado tu ejecutor auto-hospedado:
   * **En una organización**: vaya a la página principal y haga clic en {% octicon "gear" aria-label="The Settings gear" %} **Settings** (Configuración).
   * **Si usa un ejecutor de nivel empresarial**:

{% indented_data_reference reusables.enterprise-accounts.access-enterprise spaces=5 %}
1. Navega a los ajustes de {% data variables.product.prodname_actions %}:
   * **En una organización**: 

{% indented_data_reference reusables.actions.settings-ui.settings-actions-runners spaces=5 %}
   * **Si usa un ejecutor de nivel empresarial**: 

{% indented_data_reference reusables.enterprise-accounts.policies-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-runners-tab spaces=5 %} {% endif %}
