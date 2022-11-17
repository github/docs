---
title: Управление проверками запросов на вытягивание в репозитории
intro: 'Вы можете настроить ограничения касательно того, какие пользователи могут одобрять или запрашивать изменения в запросах на вытягивание в общедоступном репозитории.'
versions:
  feature: pull-request-approval-limit
permissions: Repository administrators can limit which users can approve or request changes to a pull request in a public repository.
topics:
  - Repositories
  - Pull requests
shortTitle: Manage pull request reviews
ms.openlocfilehash: 81c58a856e7dddc316a41413d4c7787bf463cf7c
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145136709'
---
## Сведения об ограничениях проверки кода

По умолчанию в общедоступных репозиториях любой пользователь может отправлять отзывы, которые утверждают или запрашивают изменения запроса на вытягивание.

Можно ограничить, какие пользователи могут отправлять проверки, утверждающие или запрашивающие изменения в запросах на вытягивание в общедоступном репозитории. После включения ограничений по проверке кода любой пользователь может прокомментировать запросы на вытягивание в общедоступных репозиториях, однако только пользователи с явным доступом к репозиторию могут утверждать запрос на вытягивание или вносить изменения.

Можно также включить ограничения проверки кода для организации. Если включить ограничения для организации, вы тем самым переопределите все ограничения для отдельных репозиториев, принадлежащих организации. Дополнительные сведения см. в разделе [Управление проверками запросов на вытягивание в организации](/organizations/managing-organization-settings/managing-pull-request-reviews-in-your-organization).

## Включение ограничений по проверке кода

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. В разделе **Доступ** щелкните **Параметры модерации**.
![Параметры репозитория для параметров модерации](/assets/images/help/repository/access-settings-repositories.png)
1. В разделе **Параметры модерации** щелкните **Ограничения проверки кода**.
![Репозитории с ограничениями проверки кода](/assets/images/help/repository/code-review-limits-repositories.png)
1. Выберите или отмените выбор **ограничения для пользователей с явно предоставленным доступом для чтения или более высоким уровнем доступа**.
![Проверка ограничения в репозитории](/assets/images/help/repository/limit-reviews-in-repository.png)
