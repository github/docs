---
ms.openlocfilehash: 31301d6de4160cc4a94b864a72232dd32cefd1cb
ms.sourcegitcommit: 872c4751a3fc255671295a5dea6a2081c66b7b71
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 08/30/2022
ms.locfileid: "145089181"
---
{% ifversion fpt %}
1. Перейдите на главную страницу репозитория или организации, где находятся группы локальных средств выполнения.
2. Щелкните {% octicon "gear" aria-label="The Settings gear" %} **Параметры**.
{% data reusables.organizations.settings-sidebar-actions-runner-groups %} {% elsif ghec or ghes or ghae %}
1. Перейдите к расположению групп локального средства выполнения.
   * **В организации**: перейдите на главную страницу и щелкните {% octicon "gear" aria-label="The Settings gear" %} **Параметры**.
   * **При использовании группы уровня предприятия**:

{% indented_data_reference reusables.enterprise-accounts.access-enterprise spaces=5 %}
2. Перейдите к параметрам "Группы средств выполнения":
   * **В организации**:

{% indented_data_reference reusables.actions.settings-ui.settings-actions-runner-groups spaces=5 %}
   * **При использовании группы уровня предприятия**:

{% indented_data_reference reusables.enterprise-accounts.policies-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-runner-groups-tab spaces=5 %} {% endif %}
