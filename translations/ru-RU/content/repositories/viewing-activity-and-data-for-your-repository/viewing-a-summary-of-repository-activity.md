---
title: Просмотр списка действий с репозиторием
intro: 'Вы можете просмотреть общие сведения о запросах на вытягивание, проблемах и фиксациях репозитория.'
product: '{% data reusables.gated-features.repository-insights %}'
redirect_from:
  - /articles/viewing-a-summary-of-repository-activity
  - /github/visualizing-repository-data-with-graphs/viewing-a-summary-of-repository-activity
  - /github/visualizing-repository-data-with-graphs/accessing-basic-repository-data/viewing-a-summary-of-repository-activity
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View repository activity
ms.openlocfilehash: 2dafe04a8214e2840d8b36bdd3aaeb87f0ad2764
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882306'
---
## Сведения о Pulse

Общие сведения о действиях с репозиторием можно просмотреть в Pulse. Pulse включает список открытых и объединенных запросов на вытягивание, открытые и закрытые проблемы, а также график фиксаций по 15 пользователям, совершившим больше всего фиксаций в ветвь проекта по умолчанию за выбранный [период времени](/articles/viewing-a-summary-of-repository-activity#filtering-by-time).

Соавторы фиксаций включаются в список фиксаций, если их фиксации были объединены в ветвь репозитория по умолчанию и они входят в число 15 пользователей, совершивших больше всего фиксаций.

## Доступ к Pulse

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %}

## Фильтрация по времени

По умолчанию Pulse показывает действия с репозиторием за последние семь дней. Чтобы выбрать другой период, щелкните раскрывающийся список **Период** в правом верхнем углу обзора Pulse.

![Фильтрация действий в Pulse по времени](/assets/images/help/pulse/pulse_time_filter_dropdown.png)
