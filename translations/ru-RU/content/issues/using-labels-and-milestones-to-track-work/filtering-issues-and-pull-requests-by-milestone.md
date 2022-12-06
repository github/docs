---
title: Фильтрация проблем и запросов на вытягивание по вехам
intro: 'Проблемы и запросы на вытягивание можно отфильтровать по вехе, с которой они связаны. После того как вы [связали проблему или запрос на вытягивание с вехой](/articles/associating-milestones-with-issues-and-pull-requests), вы можете выполнять поиск элементов по вехам. В рамках вехи можно определить приоритеты проблем и запросов на вытягивание.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-milestones/filtering-issues-and-pull-requests-by-milestone
  - /articles/filtering-issues-and-pull-requests-by-milestone
  - /github/managing-your-work-on-github/filtering-issues-and-pull-requests-by-milestone
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Filter by milestone
ms.openlocfilehash: 6eda4a52df3212b37c3052832291f03aa2285fd5
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145135293'
---
{% tip %}

**Советы**

- Если вы предпочитаете фильтровать проблемы и запросы на вытягивание с помощью панели поиска, можно использовать синтаксис поиска вехи. Для вехи с именем My Milestone синтаксис поиска будет следующим: `milestone:"My Milestone"`.
- Чтобы очистить фильтр, нажмите кнопку **Очистить текущий поисковый запрос, фильтры и сортировки**.
-  Вы также можете фильтровать проблемы или запросы на вытягивание, используя {% data variables.product.prodname_cli %}. Дополнительные сведения см. в разделе [`gh issue list`](https://cli.github.com/manual/gh_issue_list) или [`gh pr list`](https://cli.github.com/manual/gh_pr_list)" документации по {% data variables.product.prodname_cli %}.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %}
3. Выберите **Вехи**, чтобы просмотреть список всех доступных вех для репозитория.
  ![Кнопка "Вехи"](/assets/images/help/issues/issues_milestone_button.png)
4. Выберите нужную веху из списка. Вы можете просмотреть соответствующие сведения для вехи, включая все проблемы и связанные с ней запросы на вытягивание, на странице вехи. Дополнительные сведения см. в статье об [Сведения о вехах](/articles/about-milestones).

## Дополнительные материалы

- [Фильтрация и поиск проблем и запросов на вытягивание](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests)
- [Фильтрация карточек на доске проекта](/articles/filtering-cards-on-a-project-board)
