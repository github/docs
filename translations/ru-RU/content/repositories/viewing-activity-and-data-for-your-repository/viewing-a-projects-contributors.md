---
title: Просмотр участников проекта
intro: 'Вы можете увидеть, кто внес фиксации в репозиторий{% ifversion fpt or ghec %} и его зависимости{% endif %}.'
redirect_from:
  - /articles/i-don-t-see-myself-in-the-contributions-graph
  - /articles/viewing-contribution-activity-in-a-repository
  - /articles/viewing-a-projects-contributors
  - /github/visualizing-repository-data-with-graphs/viewing-a-projects-contributors
  - /github/visualizing-repository-data-with-graphs/accessing-basic-repository-data/viewing-a-projects-contributors
product: '{% data reusables.gated-features.repository-insights %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View project contributors
ms.openlocfilehash: a5c3c5e1cb83039003b42a0526a49cb1db039888
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147369164'
---
## Сведения об участниках

Вы можете просмотреть первых 100 участников репозитория{% ifversion ghes or ghae %}, включая соавторов фиксации,{% endif %} в графе участников. Фиксации слияния и пустые фиксации не учитываются как вклад для этого графа.

{% ifversion fpt or ghec %} Можно также просмотреть список пользователей, которые внесли свой вклад в зависимости Python проекта. Чтобы получить доступ к этому списку участников сообщества, посетите страницу `https://github.com/REPO-OWNER/REPO-NAME/community_contributors`.
{% endif %}

## Доступ к графу участников

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %}
3. На левой боковой панели щелкните **Участники**.
  ![Вкладка "Участники"](/assets/images/help/graphs/contributors_tab.png)
4. Если необходимо просмотреть участников за определенный период времени, щелкните его, а затем перетащите курсор, пока не будет выбран период времени. Граф участников суммирует еженедельные количества фиксаций каждое воскресенье, поэтому период времени должен включать в себя воскресенье.
  ![Выбранный диапазон времени в графе участников](/assets/images/help/graphs/repo_contributors_click_drag_graph.png)

## Устранение неполадок с участниками

Если вы не видите себя в графе участников репозитория, это может быть вызвано следующими причинами:
- Вы не один из первых 100 участников.
- Для фиксаций не было выполнено слияние в ветвь по умолчанию.
- Адрес электронной почты, используемый для создания фиксаций, не подключен к вашей учетной записи на {% data variables.product.product_name %}.

{% tip %}

**Совет.** Список всех участников фиксации в репозитории см. в разделе "[Список участников репозитория](/rest/repos/repos#list-repository-contributors)".

{% endtip %}

Если все фиксации в репозитории находятся в ветвях, отличных от ветвей по умолчанию, вы не будете находиться в графе участников. Например, фиксации в ветви `gh-pages` не включаются в граф, если только `gh-pages` не является ветвью репозитория по умолчанию. Чтобы для фиксаций было выполнено слияние в ветвь по умолчанию, можно создать запрос на вытягивание. Дополнительные сведения см. в разделе [Сведения о запросах на вытягивание](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests).

Если адрес электронной почты, используемый для создания фиксаций, не подключен к вашей учетной записи на {% data variables.product.product_name %}, фиксации не будут связаны с вашей учетной записью и вы не будете отображаться в графе участников. Дополнительные сведения см. в разделах [Настройка адреса электронной почты для фиксаций](/articles/setting-your-commit-email-address){% ifversion not ghae %} и [Добавление адреса электронной почты в учетную запись {% data variables.product.prodname_dotcom %}](/articles/adding-an-email-address-to-your-github-account){% endif %}.
