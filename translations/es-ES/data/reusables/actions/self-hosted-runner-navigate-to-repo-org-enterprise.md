---
ms.openlocfilehash: 8e533fd0a00968e8a7d9e05db91c69e8c6a2a47b
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: "147763776"
---
{% ifversion fpt %}
1. Navega a la página principal de la organización o repositorio en donde se registró tu grupo de ejecutores auto-hospedados.
2. Haga clic en {% octicon "gear" aria-label="The Settings gear" %} **Settings** (Configuración).
{% data reusables.organizations.settings-sidebar-actions-runners %} {% elsif ghec or ghes or ghae %}
1. Navega a donde está registrado tu ejecutor:
   * **En un repositorio u organización**: vaya a la página principal y haga clic en {% octicon "gear" aria-label="The Settings gear" %} **Settings** (Configuración).
   * **Si usa un ejecutor de nivel empresarial**:

{% indented_data_reference reusables.enterprise-accounts.access-enterprise spaces=5 %}
2. Navega a los ajustes de {% data variables.product.prodname_actions %}:
   * **En una organización o repositorio**:

{% indented_data_reference reusables.actions.settings-ui.settings-actions-runners spaces=5 %} {%- ifversion ghec or ghae or ghes %}
   * **Si usa un ejecutor de nivel empresarial**:

{% indented_data_reference reusables.enterprise-accounts.policies-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-runners-tab spaces=5 %} {%- endif %} {% endif %}
