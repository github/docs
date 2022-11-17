---
title: Внедрение отзывов в запрос на вытягивание
intro: 'Когда рецензенты предлагают изменения в запросе на вытягивание, вы можете автоматически включить изменения в запрос на вытягивание или открыть проблему для отслеживания предложений, не включенных в область.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request
  - /articles/incorporating-feedback-in-your-pull-request
  - /github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Incorporate feedback
ms.openlocfilehash: b94c7ddc682b1e53077770877140eb2a218a19de
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145139521'
---
## Применение предлагаемых изменений

Другие люди могут предлагать определенные изменения в вашем запросе на вытягивание. Эти предлагаемые изменения вы можете применить непосредственно в запросе на вытягивание, если у вас есть доступ на запись в репозиторий. Если запрос на вытягивание был создан из вилки, и автор разрешил редактирование от обслуживающих пользователей, вы также можете применить предлагаемые изменения, если у вас есть доступ на запись в вышестоящий репозиторий. Дополнительные сведения см. в разделах [Комментирование в запросе на вытягивание](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request) и [Разрешение изменений в ветви запроса на вытягивание, созданной из вилки](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork).

Чтобы быстро включить несколько предлагаемых изменений в одну фиксацию, можно также применить предлагаемые изменения в пакете. Применение одного предлагаемого изменения или пакета изменений создает единую фиксацию в ветви сравнения запроса на вытягивание.

Каждый пользователь, предложивший изменение, включенное в фиксацию, будет соавтором фиксации. Пользователь, который применяет предлагаемые изменения, будет соавтором и фиксатором фиксации. Дополнительные сведения о термине "фиксатор" в Git см. в разделе [Основы Git — просмотр журнала фиксаций](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History) на сайте книги _Pro Git_.

{% data reusables.repositories.sidebar-pr %}
2. В списке запросов на вытягивание выберите запрос на вытягивание, к которому вы хотите применить предлагаемое изменение.
3. Перейдите к первому предлагаемому изменению, которое вы хотите применить.
    - Чтобы применить изменение в его собственной фиксации, нажмите кнопку **Зафиксировать предложение**.
  ![Кнопка фиксации предложения](/assets/images/help/pull_requests/commit-suggestion-button.png)
    - Чтобы добавить предложение в пакет изменений, нажмите **Добавить предложение в пакет**. Продолжайте добавлять предлагаемые изменения, которые вы хотите включить в одну фиксацию. Завершив добавление предлагаемых изменений, нажмите кнопку **Зафиксировать предложения**.
  ![Кнопка добавления предложения в пакет](/assets/images/help/pull_requests/add-suggestion-to-batch.png)
4. В поле сообщения фиксации введите короткое понятное сообщение фиксации, описывающее изменение, внесенное в файл или файлы.
![Поле сообщения о фиксации](/assets/images/help/pull_requests/suggested-change-commit-message-field.png)
5. Щелкните **Зафиксировать изменения.** 
![ Кнопка фиксации изменений](/assets/images/help/pull_requests/commit-changes-button.png)

## Повторный запрос проверки

{% data reusables.pull_requests.re-request-review %}

## Открытие проблемы для предложения, выходящего за рамки области

Если кто-то предлагает изменения в запросе на вытягивание, и эти изменения выходят за рамки области запроса на вытягивание, вы можете открыть новую проблему для отслеживания отзывов. Дополнительные сведения см. в разделе [Открытие проблемы из комментария](/github/managing-your-work-on-github/opening-an-issue-from-a-comment).

## Дополнительные материалы

- [Сведения о проверках запроса на вытягивание](/github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews)
- [Просмотр предлагаемых изменений в запросе на вытягивание](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)
- [Комментирование запроса на вытягивание](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)
- [Запрос проверки запроса на вытягивание](/github/collaborating-with-issues-and-pull-requests/requesting-a-pull-request-review)
- [Открытие проблемы из комментария](/github/managing-your-work-on-github/opening-an-issue-from-a-comment)
