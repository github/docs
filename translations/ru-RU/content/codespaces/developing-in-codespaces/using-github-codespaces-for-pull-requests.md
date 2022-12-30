---
title: Использование GitHub Codespaces для запросов на вытягивание
shortTitle: Pull requests
intro: '{% data variables.product.prodname_github_codespaces %} можно использовать в веб-браузере или в {% data variables.product.prodname_vscode %} для создания запросов на вытягивание, проверки запросов на вытягивание и примечаний к просмотру.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Visual Studio Code
  - Developer
redirect_from:
  - /codespaces/developing-in-codespaces/using-codespaces-for-pull-requests
ms.openlocfilehash: 6932f8eb9095987bfe808080983970c8807b6d93
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160010'
---
## Сведения о запросах на вытягивание в {% data variables.product.prodname_github_codespaces %}

{% data variables.product.prodname_github_codespaces %} предоставляет множество возможностей, которые могут понадобиться для работы с запросами на вытягивание:

- [Создание запроса на вытягивание](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace#raising-a-pull-request) — с помощью команд терминала и Git или представления системы управления версиями можно создавать запросы на вытягивание так же, как и в {% data variables.product.prodname_dotcom_the_website %}. Если репозиторий использует шаблон запроса на вытягивание, можно использовать его в представлении системы управления версиями.
- [Открытие запроса на вытягивание](#opening-a-pull-request-in-codespaces) — можно открыть существующий запрос на вытягивание в codespace, если у вас есть доступ к codespace ветви, в которую нужно выполнить слияние.
- [Проверка запроса на вытягивание](#reviewing-a-pull-request-in-codespaces) — после открытия запроса на вытягивание в codespace можно использовать представление "Запрос на вытягивание GitHub" для добавления комментариев к проверке и подтверждения запросов на вытягивание. Вы также можете использовать {% data variables.product.prodname_github_codespaces %} для [просмотра комментариев к рецензированием](#view-comments-from-a-review-in-codespaces).

## Открытие запроса на вытягивание в {% data variables.product.prodname_codespaces %}

{% data reusables.repositories.sidebar-pr %}

1. В списке запросов на вытягивание щелкните запрос на вытягивание, который нужно открыть в {% data variables.product.prodname_codespaces %}.
1. В правой части экрана щелкните **Код {% octicon "code" aria-label="The code icon" %}** . 
1. На вкладке {% data variables.product.prodname_codespaces %} щелкните знак "плюс" ({% octicon "plus" aria-label="The plus icon" %})

   ![Параметр открытия запроса на вытягивание в codespace](/assets/images/help/codespaces/open-with-codespaces-pr.png)

   Codespace создается для ветви запроса на вытягивание и открывается в редакторе по умолчанию для {% data variables.product.prodname_github_codespaces %}.

## Проверка запроса на вытягивание в {% data variables.product.prodname_codespaces %}

1. Если для редактора по умолчанию задано значение {% data variables.product.prodname_vscode %} или {% data variables.product.prodname_vscode %} для Интернета, откройте запрос на вытягивание в codespace, как описано в разделе ["Открытие запроса на вытягивание](/codespaces/developing-in-codespaces/using-codespaces-for-pull-requests#opening-a-pull-request-in-codespaces)" выше.
2. На панели действий щелкните представление **Запрос на вытягивание GitHub**. Это представление отображается только при открытии запроса на вытягивание в codespace.
  ![Команда для открытия запроса на вытягивание в codespace](/assets/images/help/codespaces/github-pr-view.png)
3. Чтобы просмотреть определенный файл, щелкните значок **Открыть файл** на боковой панели.
  ![Команда для открытия запроса на вытягивание в codespace](/assets/images/help/codespaces/changes-in-files.png)
4. Чтобы добавить комментарии к проверке, щелкните значок **+** рядом с номером строки. Введите комментарий к проверке и нажмите кнопку **Начать проверку**.
  ![Команда для открытия запроса на вытягивание в codespace](/assets/images/help/codespaces/start-review.png)
5. Завершив добавление примечаний к рецензированием, на боковой панели можно выбрать отправку примечаний, утверждение изменений или запрос изменений.
  ![Команда для открытия запроса на вытягивание в codespace](/assets/images/help/codespaces/submit-review.png)

Дополнительные сведения о проверке запроса на вытягивание см. в разделе [Проверка предлагаемых изменений в запросе на вытягивание](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request).

## Просмотр комментариев к проверке в {% data variables.product.prodname_codespaces %}

Получив отзыв о запросе на вытягивание, вы можете [открыть его в codespace](#opening-a-pull-request-in-codespaces) в веб-браузере или в {% data variables.product.prodname_vscode_shortname %}, чтобы просмотреть [комментарии к отзыву](#reviewing-a-pull-request-in-codespaces). Там можно отвечать на комментарии, добавлять реакции или отклонить отзыв. 

  ![Параметр открытия запроса на вытягивание в codespace](/assets/images/help/codespaces/incorporating-codespaces.png)



