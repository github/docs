---
title: Просмотр предлагаемых изменений в запросе на вытягивание
intro: 'В запросе на вытягивание можно просматривать и обсуждать фиксации, измененные файлы и различия (diff) между файлами в базе и сравнивать ветви.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request
  - /articles/reviewing-proposed-changes-in-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/reviewing-proposed-changes-in-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Review proposed changes
ms.openlocfilehash: 8ea199ad1dc2f574f8820bde3e0529112645bc23
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158592'
---
## Сведения о просмотре запросов на вытягивание

Вы можете просматривать изменения в запросе на вытягивание по одному файлу за раз. При просмотре файлов в запросе на вытягивание можно оставлять комментарии к отдельным изменениям. Завершив проверку файла, можно пометить его как просмотренный. Файл свернется, так что вы легко сможете определить файлы, которые еще требуют проверки. Индикатор выполнения в заголовке запроса на вытягивание показывает количество просмотренных файлов. После просмотра нужных файлов можно утвердить запрос на вытягивание или запросить дополнительные изменения, отправив отзыв с кратким комментарием.

{% data reusables.search.requested_reviews_search_tip %}

## Начало проверки

{% webui %}

{% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.choose-pr-review %} {% data reusables.repositories.changed-files %} {% ifversion fpt or ghec or ghes > 3.3 or ghae %}

   Чтобы изменить формат представления различий на этой вкладке, щелкните значок {% octicon "gear" aria-label="The Settings gear" %} и выберите общее или разделенное представление. Выбранное представление применится при просмотре различий для других запросов на вытягивание.

   ![Параметры представления различий](/assets/images/help/pull_requests/diff-view-settings.png)

   Вы также можете скрыть различия в пробелах. Выбранная настройка применяется только к данному запросу на вытягивание и будет сохранена при следующем посещении этой страницы.
{% endif %}
1. При необходимости отфильтруйте файлы, которые требуется проверить{% ifversion pr-tree-view %}, или используйте дерево файлов для перехода к определенному файлу{% endif %}. Дополнительные сведения см. в разделе [Фильтрация файлов в запросе на вытягивание](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request).
{% data reusables.repositories.start-line-comment %} {% data reusables.repositories.type-line-comment %} {% data reusables.repositories.suggest-changes %}
1. По завершении нажмите кнопку **Начать проверку**. Если вы уже начали проверку, можно нажать кнопку **Добавить комментарий проверки**.

   ![Кнопка "Начать проверку"](/assets/images/help/pull_requests/start-a-review-button.png)

До отправки отзыва ваши комментарии к строкам находятся в состоянии _ожидания_ и видны только вам. Комментарии в состоянии ожидания можно изменять в любое время до отправки отзыва. Чтобы отменить проверку в состоянии ожидания, включая все комментарии, прокрутите вниз до конца временной шкалы на вкладке "Беседа", а затем нажмите кнопку **Отмена проверки**.

![Кнопка "Отмена проверки"](/assets/images/help/pull_requests/cancel-review-button.png) {% endwebui %}

{% ifversion fpt or ghec %}

{% codespaces %}

Для тестирования, выполнения и проверки запросов на вытягивание можно использовать [{% data variables.product.prodname_github_codespaces %}](/codespaces/overview).

1. Откройте запрос на вытягивание в codespace, как описано в разделе [Открытие запроса на вытягивание](/codespaces/developing-in-codespaces/using-codespaces-for-pull-requests#opening-a-pull-request-in-codespaces).
1. На панели действий щелкните представление **Запрос на вытягивание GitHub**. Это представление отображается только при открытии запроса на вытягивание в codespace.

   ![Параметр открытия запроса на вытягивание в codespace](/assets/images/help/codespaces/github-pr-view.png)

1. Чтобы просмотреть определенный файл, щелкните значок **Открыть файл** на боковой панели.

   ![Параметр открытия запроса на вытягивание в codespace](/assets/images/help/codespaces/changes-in-files.png)

1. Чтобы добавить комментарии к проверке, щелкните значок **+** рядом с номером строки. Введите комментарий к проверке и нажмите кнопку **Начать проверку**.

   ![Параметр открытия запроса на вытягивание в codespace](/assets/images/help/codespaces/start-review.png)

1. Завершив добавление комментариев к проверке, с боковой панели можно отправить комментарии, утвердить изменения или запросить изменения.

   ![Параметр открытия запроса на вытягивание в codespace](/assets/images/help/codespaces/submit-review.png)

Дополнительные сведения о проверке запросов на вытягивание в {% data variables.product.prodname_github_codespaces %} см. в разделе [Использование {% data variables.product.prodname_github_codespaces %} для запросов на вытягивание](/codespaces/developing-in-codespaces/using-github-codespaces-for-pull-requests).

{% endcodespaces %} {% endif %}

{% ifversion fpt or ghes or ghec %}
## Просмотр изменений в зависимостях

Если запрос на вытягивание содержит изменения зависимостей, вы можете выполнить проверку зависимостей в файле манифеста или блокировок, чтобы узнать, что изменилось, и проверить, не приводят ли изменения к уязвимостям системы безопасности. Дополнительные сведения см. в разделе [Просмотр изменений зависимостей в запросе на вытягивание](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request).

{% data reusables.repositories.changed-files %}

1. Справа от заголовка файла манифеста или блокировок откройте проверку зависимостей, нажав кнопку расширенных различий  **{% octicon "file" aria-label="The rich diff icon" %}** .

   ![Кнопка расширенных различий](/assets/images/help/pull_requests/dependency-review-rich-diff.png)

{% data reusables.repositories.return-to-source-diff %} {% endif %}

## Пометка файла как просмотренного

После завершения проверки файла можно пометить его как просмотренный, и он свернется. Если файл изменится после проверки, пометка просмотренного будет снята.

{% data reusables.repositories.changed-files %}
2. Справа от заголовка файла, проверка которого завершена, щелкните **Просмотрено**.

   ![Флажок "Просмотрено"](/assets/images/help/pull_requests/viewed-checkbox.png)

## Отправка отзыва

Завершив проверку всех нужных файлов в запросе на вытягивание, отправьте отзыв.

{% data reusables.repositories.changed-files %} {% data reusables.repositories.review-changes %} {% data reusables.repositories.review-summary-comment %}
4. Выберите тип отзыва, который нужно оставить:

   ![Переключатели с параметрами отзыва](/assets/images/help/pull_requests/pull-request-review-statuses.png)

    - Выберите **Комментарий**, чтобы оставить общий отзыв, не утверждая изменения явным образом и не запрашивая дополнительные изменения.
    - Выберите **Утверждение**, чтобы отправить отзыв и утвердить слияние изменений, предложенных в запросе на вытягивание.
    - Выберите **Запрос изменений**, чтобы отправить отзыв, который необходимо обработать перед слиянием запроса на вытягивание.
{% data reusables.repositories.submit-review %}

{% data reusables.repositories.request-changes-tips %}

## Дополнительные материалы

- [Сведения о защищенных ветвях](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)
- [Фильтрация запросов на вытягивание по состоянию проверки](/github/managing-your-work-on-github/filtering-pull-requests-by-review-status)
