---
title: Комментирование в запросе на вытягивание
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request
  - /articles/adding-commit-comments
  - /articles/commenting-on-the-diff-of-a-pull-request
  - /articles/commenting-on-differences-between-files
  - /articles/commenting-on-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request
intro: После открытия запроса на вытягивание в репозитории участники совместной работы или участники группы могут комментировать сравнение файлов между двумя указанными ветвями или добавлять комментарии общего характера к проекту в целом.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Comment on a PR
ms.openlocfilehash: eb1b80fa6088bc083f0b2006a2c894a820cd6c10
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578959'
---
## Сведения о комментариях в запросах на вытягивание

Вы можете добавить комментарий на вкладке **Беседа** запроса на вытягивание, чтобы оставить общие комментарии, вопросы или реквизиты. Кроме того, вы можете предложить изменения, которые автор запроса на вытягивание может применить непосредственно из вашего комментария.

![Беседа запроса на вытягивание](/assets/images/help/pull_requests/conversation.png)

Вы также можете прокомментировать определенные разделы файла на вкладке **Измененные файлы** запроса на вытягивание в форме отдельных строковых комментариев или в рамках [проверки запроса на вытягивание](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews). Добавление строковых комментариев — отличный способ обсудить вопросы о реализации или оставить отзыв для автора.

Дополнительные сведения о добавлении строковых комментариев к проверке запроса на вытягивание см. в разделе [Проверка предлагаемых изменений в запросе на вытягивание](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request).

{% note %}

**Примечание.** Если вы отвечаете на запрос на вытягивание по электронной почте, ваш комментарий будет добавлен на вкладке **Беседа** и не будет частью проверки запроса на вытягивание.

{% endnote %}

Чтобы ответить на имеющийся строковый комментарий, необходимо перейти к этому комментарию на вкладке **Беседа** или **Измененные файлы** и добавить под ним дополнительный строковый комментарий.

{% tip %}

**Советы**
- Для комментариев запроса на вытягивание используются те же [элементы формата](/categories/writing-on-github), что и для обычных комментариев в {% data variables.product.product_name %}, например, @mentions, эмодзи и ссылки.
- Вы можете добавить реакции на комментарии в запросах на вытягивание на вкладке **Измененные файлы**.

{% endtip %}

## Добавление строковых комментариев в запрос на вытягивание

{% data reusables.repositories.sidebar-pr %}
2. В списке запросов на вытягивание щелкните запрос на вытягивание, в котором вы хотите оставить строковые комментарии.
{% data reusables.repositories.changed-files %} {% data reusables.repositories.start-line-comment %} {% data reusables.repositories.type-line-comment %} {% data reusables.repositories.suggest-changes %}
5. Внеся комментарий, нажмите **Добавить один комментарий**.
  ![Встроенное окно комментариев](/assets/images/help/commits/inline-comment.png)

Все, кто просматривает запрос на вытягивание или репозиторий, получат уведомление о вашем комментарии.

{% data reusables.pull_requests.resolving-conversations %}

## Дополнительные материалы

- [Создание документов на GitHub](/github/writing-on-github) {% ifversion fpt or ghec %}- [Сообщение о злоупотреблениях или спаме](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam) {% endif %}
