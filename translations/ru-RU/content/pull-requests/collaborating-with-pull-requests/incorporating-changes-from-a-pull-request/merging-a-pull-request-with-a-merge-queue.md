---
title: Слияние для запроса на вытягивание с очередью слияния
intro: 'Если очередь слияния требуется для ветви параметром защиты ветви, вы можете добавить запросы на вытягивание в очередь слияния, а {% data variables.product.product_name %} объединит запросы на вытягивание после прохождения всех необходимых проверок.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Merge PR with merge queue
redirect_from:
  - /pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/adding-a-pull-request-to-the-merge-queue
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/adding-a-pull-request-to-the-merge-queue
ms.openlocfilehash: ce2bc87b82e3590c2a7f55f528fc9f71dc0ceb0d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147614274'
---
{% data reusables.pull_requests.merge-queue-beta %}

## Сведения об очередях слияния

{% data reusables.pull_requests.merge-queue-overview %} {% data reusables.pull_requests.merge-queue-references %}

## Добавление запроса на вытягивание в очередь слияния

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}

1. В списке "Запросы на вытягивание" щелкните запрос на вытягивание, который нужно добавить в очередь слияния.

1. Чтобы добавить запрос на вытягивание в очередь слияния, щелкните **Объединить, когда будете готовы**. Кроме того, если вы являетесь администратором, можно:
   -  Выполнить прямое слияние для запроса на вытягивание, установив флажок для пунктов **Объединить, не ожидая выполнения требований ({% ifversion bypass-branch-protections %}Обход защиты ветви{% else %}Только для администраторов{% endif %})** , если это разрешено параметрами защиты ветви, и следовать стандартному процессу.
   ![Параметры очереди слияния](/assets/images/help/pull_requests/merge-queue-options.png)

  {% tip %}

  **Совет.** Когда все будет готово к слиянию предлагаемых изменений, можно щелкнуть **Выполнить слияние**. {% data variables.product.product_name %} автоматически добавит запрос на вытягивание в очередь слияния после выполнения необходимых условий утверждения и проверок состояния.

  {% endtip %}

1. Подтвердите добавление запроса на вытягивание в очередь слияния, щелкнув **Подтвердить слияние по готовности**.

## Удаление запроса на вытягивание из очереди слияния

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}

1. В списке "Запросы на вытягивание" щелкните запрос на вытягивание, который нужно удалить из очереди слияния.

1. Чтобы удалить запрос на вытягивание из очереди, щелкните **Удалить из очереди**.
  ![Удаление запроса на вытягивание из очереди](/assets/images/help/pull_requests/remove-from-queue-button.png)

Кроме того, можно перейти на страницу очереди слияния для базовой ветви, щелкнуть **...** возле запроса на вытягивание, который нужно удалить, и выбрать **Удалить из очереди**. Сведения о том, как открыть страницу очереди слияния для базовой ветви, см. в разделе ниже.

## Просмотр очередей слияния

Очередь слияния для базовой ветви можно просмотреть в различных местах в {% data variables.product.product_name %}.

- На странице **Ветви** для репозитория. Рекомендуется использовать этот маршрут, если у вас нет запроса на вытягивание или вы не знаете о запросе, который уже есть в очереди, и если вы хотите узнать, что находится в этой очереди. Дополнительные сведения см. в разделе [Просмотр ветвей в репозитории](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/viewing-branches-in-your-repository).

  ![Просмотр очереди слияния на странице "Ветви"](/assets/images/help/pull_requests/merge-queue-branches-page.png)

- На странице **Запросы на вытягивание** вашего репозитория щелкните {% octicon "clock" aria-label="The clock symbol" %} рядом с любым запросом на вытягивание в очереди слияния.

  ![Просмотр очереди слияния на странице "Запросы на вытягивание"](/assets/images/help/pull_requests/clock-icon-in-pull-request-list.png)

- На странице запросов на вытягивание, когда для слияния требуется очередь слияния, прокрутите страницу до нижней части временной шкалы и щелкните ссылку на **очередь слияния**.

  ![Ссылка на очередь слияния в запросе на вытягивание](/assets/images/help/pull_requests/merge-queue-link.png)

- В представлении очереди слияния отображаются запросы на вытягивание, которые в настоящее время находятся в очереди. Ваши запросы на вытягивание явно помечены.

  ![Представление очереди слияния](/assets/images/help/pull_requests/merge-queue-view.png)

## Обработка запросов на вытягивание, удаленных из очереди слияния

{% data reusables.pull_requests.merge-queue-reject %}
