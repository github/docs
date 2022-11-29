---
title: Отклонение проверки запроса на вытягивание
intro: 'Если репозиторию требуются проверки, можно закрыть проверки запросов на вытягивание, которые больше не являются допустимыми или не могут быть утверждены рецензентом.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review
  - /articles/dismissing-a-pull-request-review
  - /github/collaborating-with-issues-and-pull-requests/dismissing-a-pull-request-review
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Dismiss a PR review
ms.openlocfilehash: 658f0b69a24c622a3b5f75d6e330d132040d62c5
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/09/2022
ms.locfileid: '147878690'
---
{% data reusables.pull_requests.dismiss_review %}При этом состояние проверки изменяется на комментарий к проверке. При отклонении проверки необходимо добавить комментарий с объяснением причины отклонения. Комментарий будет добавлен в беседу по запросу на вытягивание.

{% data reusables.search.requested_reviews_search %}

{% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.choose-pr-review %}
3. На вкладке "Беседа" прокрутите страницу до проверки, которую нужно отклонить, а затем щелкните {% octicon "chevron-down" aria-label="The down button" %}. ![Значок шеврона в поле объединения](/assets/images/help/pull_requests/merge_box/pull-request-open-menu.png)
4. Щелкните {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} и выберите **Отклонить проверку**.
![Значок горизонтального многоточия в поле объединения](/assets/images/help/pull_requests/merge_box/pull-request-dismiss-review.png)
5. Введите причину отклонения и нажмите кнопку **Отклонить проверку**.
  ![Кнопка "Отклонить проверку"](/assets/images/help/pull_requests/merge_box/pull-request-dismiss-review-button.png)

## Дополнительные материалы

- [Сведения о проверках запроса на вытягивание](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)
- [Просмотр предлагаемых изменений в запросе на вытягивание](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)
- [Сведения о защищенных ветвях](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)
