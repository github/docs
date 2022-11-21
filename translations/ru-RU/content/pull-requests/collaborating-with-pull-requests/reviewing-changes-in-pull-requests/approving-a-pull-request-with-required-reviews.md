---
title: Утверждение запроса на вытягивание с необходимыми проверками
intro: 'Если для репозитория требуются проверки, запросы на вытягивание должны содержать определенное количество утверждений от пользователей с разрешениями _на запись_ или разрешениями _администратора_ для репозитория, прежде чем их можно будет объединить.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/approving-a-pull-request-with-required-reviews
  - /articles/approving-a-pull-request-with-required-reviews
  - /github/collaborating-with-issues-and-pull-requests/approving-a-pull-request-with-required-reviews
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/approving-a-pull-request-with-required-reviews
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Required reviews
ms.openlocfilehash: 4554ac9e9b9d0c0f184e0b6b60e732806d2f4a17
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145139574'
---
Дополнительные сведения о необходимых проверках см. в разделе"[Сведения о защищенных ветвях](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging).

Вы можете закомментировать запрос на вытягивание, утвердить изменения или запросить улучшения перед утверждением. Дополнительные сведения см. в разделе [Просмотр предлагаемых изменений в запросе на вытягивание](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request).

{% data reusables.search.requested_reviews_search %}

{% tip %}

**Совет.** Если утвержденный запрос на вытягивание значительно изменился, вы можете закрыть проверку. Перед объединением запроса на вытягивание потребуется новая проверка. Дополнительные сведения см. в разделе [Пропуск проверки запроса на вытягивание](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review).

{% endtip %}

{% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.choose-pr-review %} {% data reusables.repositories.changed-files %}
4. Просмотрите изменения в запросе на вытягивание и при необходимости [закомментируйте конкретные строки](/articles/reviewing-proposed-changes-in-a-pull-request/#starting-a-review).
{% data reusables.repositories.review-changes %} {% data reusables.repositories.review-summary-comment %}
7. Выберите **Утвердить**, чтобы утвердить объединение изменений, предложенных в запросе на вытягивание.
{% data reusables.repositories.submit-review %}

{% data reusables.repositories.request-changes-tips %}

## Дополнительные материалы

- [Просмотр предлагаемых изменений в запросе на вытягивание](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)
- [Комментирование запроса на вытягивание](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)
