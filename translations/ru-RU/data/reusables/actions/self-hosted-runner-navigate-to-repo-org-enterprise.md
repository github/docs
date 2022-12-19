---
ms.openlocfilehash: 8e533fd0a00968e8a7d9e05db91c69e8c6a2a47b
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/09/2022
ms.locfileid: "147763775"
---
{% ifversion fpt %}
1. Перейдите на главную страницу организации или репозитория, где зарегистрирована локальных средств выполнения.
2. Щелкните {% octicon "gear" aria-label="The Settings gear" %} **Параметры**.
{% data reusables.organizations.settings-sidebar-actions-runners %} {% elsif ghec or ghes or ghae %}
1. Перейдите к месту регистрации средства выполнения:
   * **В организации или репозитории**: перейдите на главную страницу и щелкните {% octicon "gear" aria-label="The Settings gear" %} **Параметры**
   * **При использовании средства запуска уровня предприятия**:

{% indented_data_reference reusables.enterprise-accounts.access-enterprise spaces=5 %}
2. Перейдите к параметрам {% data variables.product.prodname_actions %}:
   * **В организации или репозитории**:

{% indented_data_reference reusables.actions.settings-ui.settings-actions-runners spaces=5 %} {%- ifversion ghec or ghae or ghes %}
   * **При использовании средства запуска уровня предприятия**:

{% indented_data_reference reusables.enterprise-accounts.policies-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-runners-tab spaces=5 %} {%- endif %} {% endif %}
