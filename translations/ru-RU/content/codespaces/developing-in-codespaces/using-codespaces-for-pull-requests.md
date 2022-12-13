---
title: Использование Codespaces для запросов на вытягивание
shortTitle: Pull requests
intro: Вы можете использовать {% data variables.product.prodname_codespaces %} в рабочем процессе разработки, чтобы создавать запросы на вытягивание, просматривать запросы на вытягивание и просматривать комментарии по проверке.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Codespaces
- Visual Studio Code
- Developer
ms.openlocfilehash: f3c0a007f1f9d53796e5969102bc8b6622702a96
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 07/13/2022
ms.locfileid: "145125258"
---
## <a name="about-pull-requests-in--data-variablesproductprodname_codespaces-"></a>Сведения о запросах на вытягивание в {% data variables.product.prodname_codespaces %}

{% data variables.product.prodname_codespaces %} предоставляет множество возможностей, которые могут понадобиться для работы с запросами на вытягивание:

- [Создание запроса на вытягивание](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace#raising-a-pull-request) — с помощью команд терминала и Git или представления системы управления версиями можно создавать запросы на вытягивание так же, как и в {% data variables.product.prodname_dotcom_the_website %}. Если репозиторий использует шаблон запроса на вытягивание, можно использовать его в представлении системы управления версиями.
- [Открытие запроса на вытягивание](#opening-a-pull-request-in-codespaces) — можно открыть существующий запрос на вытягивание в codespace, если у вас есть доступ к codespace ветви, в которую нужно выполнить слияние.
- [Проверка запроса на вытягивание](#reviewing-a-pull-request-in-codespaces) — после открытия запроса на вытягивание в codespace можно использовать представление "Запрос на вытягивание GitHub" для добавления комментариев к проверке и подтверждения запросов на вытягивание. Также можно использовать {% data variables.product.prodname_codespaces %} для [просмотра комментариев к проверке](#view-comments-from-a-review-in-codespaces).

## <a name="opening-a-pull-request-in--data-variablesproductprodname_codespaces-"></a>Открытие запроса на вытягивание в {% data variables.product.prodname_codespaces %}

{% data reusables.repositories.sidebar-pr %}

2. В списке запросов на вытягивание щелкните запрос на вытягивание, который нужно открыть в {% data variables.product.prodname_codespaces %}.
3. В правой части экрана щелкните **Код {% octicon "code" aria-label="The code icon" %}** . 
4. На вкладке {% data variables.product.prodname_codespaces %} нажмите **Создать codespace в ВЕТВИ**.
  ![Команда для открытия запроса на вытягивание в codespace](/assets/images/help/codespaces/open-with-codespaces-pr.png)

## <a name="reviewing-a-pull-request-in--data-variablesproductprodname_codespaces-"></a>Проверка запроса на вытягивание в {% data variables.product.prodname_codespaces %}

{% data reusables.codespaces.review-pr %}

Дополнительные сведения о проверке запроса на вытягивание см. в разделе [Проверка предлагаемых изменений в запросе на вытягивание](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request).

## <a name="view-comments-from-a-review-in--data-variablesproductprodname_codespaces-"></a>Просмотр комментариев к проверке в {% data variables.product.prodname_codespaces %}

Получив отзыв о запросе на вытягивание, можно [открыть его в codespace](#opening-a-pull-request-in-codespaces), чтобы просмотреть [комментарии к проверке](#reviewing-a-pull-request-in-codespaces). Там можно отвечать на комментарии, добавлять реакции или отклонить отзыв. 

  ![Параметр открытия запроса на вытягивание в codespace](/assets/images/help/codespaces/incorporating-codespaces.png)
