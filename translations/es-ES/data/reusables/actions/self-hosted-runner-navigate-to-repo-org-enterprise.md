---
ms.openlocfilehash: 4dec7e56b1ae0aef9251a60bcb100208c7251f4e
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/13/2022
ms.locfileid: "145091996"
---
{% ifversion fpt %}
1. Navega a la página principal de la organización o repositorio en donde se registró tu grupo de ejecutores auto-hospedados.
2. Haga clic en {% octicon "gear" aria-label="The Settings gear" %} **Settings** (Configuración).
{% data reusables.organizations.settings-sidebar-actions-runners %} {% elsif ghec or ghes or ghae %}
1. Navega a donde está registrado tu ejecutor auto-hospedado:
   * **En un repositorio u organización**: vaya a la página principal y haga clic en {% octicon "gear" aria-label="The Settings gear" %} **Settings** (Configuración).
   * **Si usa un ejecutor de nivel empresarial**:

{% indented_data_reference reusables.enterprise-accounts.access-enterprise spaces=5 %}
2. Navega a los ajustes de {% data variables.product.prodname_actions %}:
   * **En una organización o repositorio**:

{% indented_data_reference reusables.actions.settings-ui.settings-actions-runners spaces=5 %} {%- ifversion ghec or ghae or ghes %}
   * **Si usa un ejecutor de nivel empresarial**:

{% indented_data_reference reusables.enterprise-accounts.policies-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-runners-tab spaces=5 %} {%- endif %} {% endif %}
