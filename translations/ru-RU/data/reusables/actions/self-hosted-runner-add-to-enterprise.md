---
ms.openlocfilehash: 8396b563704c372a9bbc22a29f22484681adc3f9
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 07/13/2022
ms.locfileid: "145089202"
---
{%- ifversion ghec or ghes > 3.3 or ghae-issue-5091 %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.enterprise-accounts.actions-runners-tab %}
1. Нажмите **Создать средство выполнения**.
{% data reusables.actions.self-hosted-runner-configure %} {%- elsif ghae or ghes < 3.4 %} Чтобы добавить локальное средство выполнения в организацию, необходимо быть ее владельцем.
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.enterprise-accounts.actions-runners-tab %}
1. Щелкните **Добавить** и выберите пункт **Новое средство выполнения**.
{% data reusables.actions.self-hosted-runner-configure %} {%- endif %}
