---
ms.openlocfilehash: e63c220aff35a6efc7b2b2e2738b2b7645386d43
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145065346"
---
{% ifversion fpt %}
1. Navegue até a página principal da organização em que o executor auto-hospedado está registrado.
2. Clique em {% octicon "gear" aria-label="The Settings gear" %} **Configurações**.
{% data reusables.organizations.settings-sidebar-actions-runners %} {% elsif ghec or ghes or ghae %}
1. Navegue por onde seu runner auto-hospedado está registrado:
   * **Em uma organização**: navegue até a página principal e clique em {% octicon "gear" aria-label="The Settings gear" %} **Configurações**.
   * **Se estiver usando um executor de classe empresarial**:

{% indented_data_reference reusables.enterprise-accounts.access-enterprise spaces=5 %}
1. Navegue até as configurações {% data variables.product.prodname_actions %}:
   * **Em uma organização**: 

{% indented_data_reference reusables.actions.settings-ui.settings-actions-runners spaces=5 %}
   * **Se estiver usando um executor de classe empresarial**: 

{% indented_data_reference reusables.enterprise-accounts.policies-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-runners-tab spaces=5 %} {% endif %}
