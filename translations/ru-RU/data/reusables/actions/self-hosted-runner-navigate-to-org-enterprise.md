---
ms.openlocfilehash: 48dc95869bae901bf79df320e83b65979dedfd65
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/09/2022
ms.locfileid: "147763751"
---
{% ifversion fpt %}
1. Перейдите на главную страницу организации, где зарегистрировано локальное средство выполнения.
2. Щелкните {% octicon "gear" aria-label="The Settings gear" %} **Параметры**.
{% data reusables.organizations.settings-sidebar-actions-runners %} {% elsif ghec or ghes or ghae %}
1. Перейдите к месту регистрации средства выполнения:
   * **В организации**: перейдите на главную страницу и щелкните {% octicon "gear" aria-label="The Settings gear" %} **Параметры**.
   * **При использовании средства запуска уровня предприятия**:

{% indented_data_reference reusables.enterprise-accounts.access-enterprise spaces=5 %}
1. Перейдите к параметрам {% data variables.product.prodname_actions %}:
   * **В организации**: 

{% indented_data_reference reusables.actions.settings-ui.settings-actions-runners spaces=5 %}
   * **При использовании средства запуска уровня предприятия**: 

{% indented_data_reference reusables.enterprise-accounts.policies-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-runners-tab spaces=5 %} {% endif %}
