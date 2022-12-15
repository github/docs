---
ms.openlocfilehash: a9678c48ca3bd557f99816ef21c70c2332fb4e46
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "145138793"
---
Администраторы репозиториев могут включать или отключать граф зависимостей для частных репозиториев.

Вы также можете включать или отключать граф зависимостей для всех репозиториев, принадлежащих вашей учетной записи пользователя или организации. Дополнительные сведения см. в разделе [Настройка графа зависимостей](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph).

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. Прочтите сообщение о предоставлении доступа только для чтения {% data variables.product.product_name %} к данным репозитория для включения графа зависимостей, а затем рядом с пунктом "Граф зависимостей" нажмите кнопку **Включить**.
   ![Кнопка "Включить" для графа зависимостей](/assets/images/help/repository/dependency-graph-enable-button.png) Можно в любое время отключить граф зависимостей, нажав кнопку **Отключить** рядом с пунктом "Граф зависимостей" на странице параметров раздела {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}"Безопасность и анализ кода"."{% else %}"Безопасность и анализ."{% endif %}
