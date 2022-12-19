---
ms.openlocfilehash: 31301d6de4160cc4a94b864a72232dd32cefd1cb
ms.sourcegitcommit: 872c4751a3fc255671295a5dea6a2081c66b7b71
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 08/30/2022
ms.locfileid: "145083819"
---
{% ifversion fpt %}
1. Acesse a página principal do repositório ou da organização em que os grupos de executor auto-hospedado estão localizados.
2. Clique em {% octicon "gear" aria-label="The Settings gear" %} **Configurações**.
{% data reusables.organizations.settings-sidebar-actions-runner-groups %} {% elsif ghec or ghes or ghae %}
1. Navegue até onde seus grupos de executor auto-hospedado estão localizados:
   * **Em uma organização**: navegue até a página principal e clique em {% octicon "gear" aria-label="The Settings gear" %} **Configurações**.
   * **Se estiver usando um grupo de classe empresarial**:

{% indented_data_reference reusables.enterprise-accounts.access-enterprise spaces=5 %}
2. Navegue até as configurações "Grupos de executor":
   * **Em uma organização**:

{% indented_data_reference reusables.actions.settings-ui.settings-actions-runner-groups spaces=5 %}
   * **Se estiver usando um grupo de classe empresarial**:

{% indented_data_reference reusables.enterprise-accounts.policies-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-runner-groups-tab spaces=5 %} {% endif %}
