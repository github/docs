---
title: Просмотр трафика в репозиторий
intro: 'Любой пользователь, имеющий разрешения на доступ к репозиторию для передачи данных, может просматривать свой трафик, включая полные клоны (без извлечения), посетителей за последние 14 дней, ссылки на сайты и популярное содержимое в графе трафика.'
product: 'This repository insights graph is available in public repositories with {% data variables.product.prodname_free_user %} and {% data variables.product.prodname_free_team %} for organizations, and in public and private repositories with {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %}, and {% data variables.product.prodname_ghe_cloud %}.{% ifversion fpt %} For more information, see "[About repository graphs](/articles/about-repository-graphs)" and "[{% data variables.product.prodname_dotcom %}''s products](/articles/github-s-products)."{% endif %}'
redirect_from:
  - /articles/viewing-traffic-to-a-repository
  - /github/visualizing-repository-data-with-graphs/viewing-traffic-to-a-repository
  - /github/visualizing-repository-data-with-graphs/accessing-basic-repository-data/viewing-traffic-to-a-repository
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View repository traffic
ms.openlocfilehash: 75b4900893a0874e42b076962d25babcb4c09233
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145136586'
---
Вы можете переходить на сайты-источники перехода, за исключением поисковых систем и самого сайта {% data variables.product.product_name %}, по ссылкам, из которых были переданы конкретные пути. Ссылки на популярное содержимое, создающее трафик.

Сайты-источники перехода и популярное содержимое упорядочиваются по представлениям и уникальным посетителям. Полные клоны и сведения о посетителях обновляются каждый час, а разделы с сайтами-источниками перехода и популярным содержимым — ежедневно. Все данные на графике трафика соответствуют часовому поясу UTC+0 независимо от вашего местонахождения.

{% tip %}

**Совет**. Вы можете навести указатель мыши на определенный день на графике трафика, чтобы просмотреть точные данные за этот день.

{% endtip %}

![Графики трафика репозитория с подсказкой](/assets/images/help/graphs/repo_traffic_graphs_tooltip_dotcom.png)

## Доступ к графику трафика

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %}
3. На левой боковой панели выберите вкладку **Трафик**.
![Вкладка "Трафик"](/assets/images/help/graphs/traffic_tab.png)
