---
title: Сведения о графах репозитория
intro: Графы репозитория позволяют просматривать и анализировать данные для репозитория.
redirect_from:
  - /articles/using-graphs
  - /articles/about-repository-graphs
  - /github/visualizing-repository-data-with-graphs/about-repository-graphs
  - /github/visualizing-repository-data-with-graphs/accessing-basic-repository-data/about-repository-graphs
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: a8e2b228e4729e0c86d0234aadc7f0eebab7d2d5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145136631'
---
Графы репозитория предоставляют сведения о {% ifversion fpt or ghec %} трафике, проектах, которые зависят от репозитория,{% endif %} участниках и фиксациях в репозитории, а также о вилках и сети репозитория. Если вы обслуживаете репозиторий, то с помощью этих данных можете лучше понять, кто использует репозиторий и зачем.

{% ifversion fpt or ghec %}

Некоторые графы репозитория доступны только в общедоступных репозиториях с {% data variables.product.prodname_free_user %}:
- Импульс
- Соавторы
- Трафик
- Фиксации
- Периодичность кода
- Сеть

Все остальные графы репозитория доступны для всех репозиториев. Каждый граф репозитория доступен в общедоступных и частных репозиториях с {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %} и {% data variables.product.prodname_ghe_cloud %}. {% data reusables.gated-features.more-info %}

{% endif %}
