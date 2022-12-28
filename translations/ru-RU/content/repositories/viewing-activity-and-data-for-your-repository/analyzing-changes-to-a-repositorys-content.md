---
title: Анализ изменений в содержимом репозитория
intro: 'Вы можете просмотреть изменения содержимого в репозитории, проанализировав фиксации репозитория, частоту фиксаций, а также операции добавления и удаления содержимого.'
product: '{% data reusables.gated-features.repository-insights %}'
redirect_from:
  - /articles/visualizing-additions-and-deletions-to-content-in-a-repository
  - /github/visualizing-repository-data-with-graphs/visualizing-additions-and-deletions-to-content-in-a-repository
  - /articles/viewing-commit-frequency-in-a-repository
  - /articles/analyzing-changes-to-a-repository-s-content
  - /articles/analyzing-changes-to-a-repositorys-content
  - /articles/visualizing-commits-in-a-repository
  - /github/visualizing-repository-data-with-graphs/visualizing-commits-in-a-repository
  - /github/visualizing-repository-data-with-graphs/analyzing-changes-to-a-repositorys-content
  - /github/visualizing-repository-data-with-graphs/analyzing-changes-to-a-repositorys-content/visualizing-commits-in-a-repository
  - /github/visualizing-repository-data-with-graphs/analyzing-changes-to-a-repositorys-content/visualizing-additions-and-deletions-to-content-in-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Analyze changes
ms.openlocfilehash: 7b6c9918b5d3de0fbae3b94fb8e90ece694a4076
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145136628'
---
## Визуализация фиксаций в репозитории

Все фиксации, выполненные в репозитории за последний год (за исключением фиксаций слиянием), отображаются на диаграммах фиксаций.

На верхней диаграмме показаны фиксации за весь год по неделям.

![Годовая диаграмма фиксаций в репозитории](/assets/images/help/graphs/repo_commit_activity_year_graph.png)

На нижней диаграмме показано среднее число фиксаций по дням недели за выбранную неделю.

![Недельная диаграмма фиксаций в репозитории](/assets/images/help/graphs/repo_commit_activity_week_graph.png)

### Доступ к диаграммам фиксаций

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %}
3. На левой боковой панели выберите вкладку **Фиксации**.
![Вкладка "Фиксации"](/assets/images/help/graphs/commits_tab.png)

## Визуализация добавления и удаления содержимого в репозитории

На диаграмме периодичности кода отображаются добавления и удаления содержимого за каждую неделю в журнале репозитория.

{% ifversion fpt or ghec %}

![График частоты кода](/assets/images/help/graphs/repo_code_frequency_graph_dotcom.png)

{% endif %}

### Доступ к диаграмме периодичности кода

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %}
3. На левой боковой панели выберите вкладку **Периодичность кода**.
![Вкладка "Периодичность кода"](/assets/images/help/graphs/code_frequency_tab.png)
