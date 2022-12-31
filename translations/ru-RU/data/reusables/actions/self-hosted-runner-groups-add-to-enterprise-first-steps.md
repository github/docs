---
ms.openlocfilehash: dcb31ab7b27f6f3ebe89699a3a2e96dd1e78a5db
ms.sourcegitcommit: 872c4751a3fc255671295a5dea6a2081c66b7b71
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 08/30/2022
ms.locfileid: "145067991"
---
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {%- ifversion ghec or ghes > 3.3 or ghae-issue-5091 %} {% data reusables.enterprise-accounts.actions-runner-groups-tab %}
1. Нажмите кнопку **Создать группу средств выполнения тестов**.
{%- elsif ghes < 3.4 or ghae %} {% data reusables.enterprise-accounts.actions-runners-tab %}
1. В раскрывающемся списке **Добавить** выберите команду **Создать группу**.
{%- endif %}
1. В поле "Имя группы" введите имя группы средств выполнения тестов.
