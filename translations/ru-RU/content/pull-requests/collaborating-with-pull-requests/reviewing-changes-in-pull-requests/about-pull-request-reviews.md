---
title: Сведения о проверках запроса на вытягивание
intro: 'Проверки позволяют участникам совместной работы комментировать изменения, предложенные в запросах на включение внесенных изменений, утверждать изменения или создавать запросы на дальнейшие изменения до объединения запросов на включение внесенных изменений. Администраторы репозитория могут требовать утверждения всех запросов на вытягивание перед слиянием.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews
  - /articles/about-pull-request-reviews
  - /github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: About PR reviews
ms.openlocfilehash: b68da308dc1e405f2b8fff5b0dd85dadbeabef80
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179410'
---
## Сведения о проверках запроса на вытягивание

После открытия запроса на вытягивание любой пользователь с доступом на *чтение* может просматривать и комментировать предложенные изменения. Вы также можете предложить конкретные изменения в строках кода, которые автор может применить непосредственно из запроса на вытягивание. Дополнительные сведения см. в разделе [Просмотр предлагаемых изменений в запросе на вытягивание](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request).

{% ifversion pull-request-approval-limit %}{% data reusables.pull_requests.code-review-limits %}{% endif %}

Владельцы репозитория и участники совместной работы могут запросить проверку запроса на вытягивание у определенного пользователя. Участники организации также могут запросить проверку запроса на вытягивание у команды с доступом на чтение к репозиторию. Дополнительные сведения см. в разделе [Запрос проверки запроса на вытягивание](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review). Вы можете указать подмножество участников команды, которые будут автоматически назначены вместо всей команды. Дополнительные сведения см. в статье [Управление параметрами проверки кода для вашей команды](/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team).

Проверки позволяют обсуждать предлагаемые изменения и помогают гарантировать, что изменения соответствуют рекомендациям по участию в разработке и другим стандартам качества репозитория. Вы можете определить, какие пользователи или команды имеют определенные типы или области кода в файле CODEOWNERS. Когда запрос на вытягивание изменяет код с определенным владельцем, этот пользователь или команда автоматически запрашивается в качестве рецензента. Дополнительные сведения см. в разделе [Сведения о владельцах кода](/articles/about-code-owners/).

{% ifversion fpt or ghec %}Вы можете запланировать напоминания для запросов на вытягивание, которые необходимо проверить. Дополнительные сведения см. в статье [Управление запланированными напоминаниями для запросов на вытягивание](/github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-pull-requests).{% endif %}

![Заголовок проверки запрашивающего изменения с комментариями к строкам](/assets/images/help/pull_requests/review-header-with-line-comment.png)

Проверка имеет три возможных состояния:
- **Комментарий.** Отправляет общий отзыв, не утверждая изменения явным образом и не запрашивая дополнительные изменения.
- **Утверждение.** Отправляет отзыв и утверждает слияние изменений, предложенных в запросе на вытягивание.
- **Запрос изменений.** Отправляет отзыв, который необходимо обработать перед слиянием запроса на вытягивание.

![Изображение состояний проверки](/assets/images/help/pull_requests/pull-request-review-statuses.png)

{% data reusables.repositories.request-changes-tips %}

Вы можете просмотреть все проверки запроса на вытягивание, полученные на временной шкале беседы, и можете просмотреть отзывы владельцев репозитория и участников совместной работы в поле слияния запроса на вытягивание.

![Изображение проверок в поле слияния](/assets/images/help/pull_requests/merge_box/pr-reviews-in-merge-box.png)

{% data reusables.search.requested_reviews_search_tip %}

{% data reusables.pull_requests.resolving-conversations %}

## Повторная отправка запроса на проверку

{% data reusables.pull_requests.re-request-review %}

## Обязательные проверки

{% data reusables.pull_requests.required-reviews-for-prs-summary %} Дополнительные сведения см. в статье [Сведения о защищенных ветвях](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging).

{% tip %}

**Совет.** При необходимости пользователи с доступом *администратора* или доступом на *запись* в репозитории могут закрыть проверку запроса на вытягивание. Дополнительные сведения см. в разделе [Пропуск проверки запроса на вытягивание](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review).

{% endtip %}

## Дополнительные материалы

- [Просмотр предлагаемых изменений в запросе на вытягивание](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)
- [Просмотр проверки запроса на вытягивание](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/viewing-a-pull-request-review)
- "[Создание рекомендаций для участников репозитория](/articles/setting-guidelines-for-repository-contributors)"
