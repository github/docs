---
ms.openlocfilehash: c1f0ddf259431616bbada45e736385bb45ba3d75
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "147764103"
---
{% ifversion fpt %}
1. Перейдите на главную страницу репозитория или организации, где находятся группы средств выполнения.
2. Щелкните {% octicon "gear" aria-label="The Settings gear" %} **Параметры**.
{% data reusables.organizations.settings-sidebar-actions-runner-groups %} {% elsif ghec or ghes or ghae %}
1. Перейдите к расположению групп средства выполнения.
   * **В организации**: перейдите на главную страницу и щелкните {% octicon "gear" aria-label="The Settings gear" %} **Параметры**.
   * **При использовании группы уровня предприятия**:

{% indented_data_reference reusables.enterprise-accounts.access-enterprise spaces=5 %}
2. Перейдите к параметрам "Группы средств выполнения":
   * **В организации**:

{% indented_data_reference reusables.actions.settings-ui.settings-actions-runner-groups spaces=5 %}
   * **При использовании группы уровня предприятия**:

{% indented_data_reference reusables.enterprise-accounts.policies-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-runner-groups-tab spaces=5 %} {% endif %}
