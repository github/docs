---
title: Основные сведения о подключениях между репозиториями
intro: Используйте список сетевых графов и вилок для анализа сетей вилки.
product: '{% data reusables.gated-features.repository-insights %}'
redirect_from:
  - /articles/viewing-a-repository-s-network
  - /articles/viewing-a-repositorys-network
  - /github/visualizing-repository-data-with-graphs/viewing-a-repositorys-network
  - /articles/understanding-connections-between-repositories
  - /articles/listing-the-forks-of-a-repository
  - /github/visualizing-repository-data-with-graphs/listing-the-forks-of-a-repository
  - /github/visualizing-repository-data-with-graphs/viewing-the-dependencies-of-a-repository
  - /github/visualizing-repository-data-with-graphs/understanding-connections-between-repositories
  - /github/visualizing-repository-data-with-graphs/understanding-connections-between-repositories/viewing-a-repositorys-network
  - /github/visualizing-repository-data-with-graphs/understanding-connections-between-repositories/listing-the-forks-of-a-repository
  - /github/visualizing-repository-data-with-graphs/understanding-connections-between-repositories/viewing-the-dependencies-of-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Connections between repositories
ms.openlocfilehash: 46cc440093c3ca8dc0952933847a6f04b0446661
ms.sourcegitcommit: 468a0323fa636517985a3e08e2772dbb0545cab8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/03/2022
ms.locfileid: '148191366'
---
## Просмотр сети репозитория

На сетевом графе отображается журнал ветвей всей сети репозитория, включая ветви вилки. Этот график представляет собой временную шкалу последних фиксаций и отображает до 100 последних ветвей, отправленных в. Первая строка ссылается на дату, а первый столбец ссылается на владельца ветви. Используйте клавиши со стрелками или другие сочетания клавиш, чтобы упростить навигацию по графу. Они предоставляются во всплывающем окне "Доступные сочетания клавиш" под графиком.


![Сетевой граф репозитория](/assets/images/help/graphs/repo_network_graph.png)

{% tip %}

**Совет.** Чтобы увидеть более старые ветви, нажмите и перетащите в пределах графа.

{% endtip %}

## Доступ к сетевому графу

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %}
3. На левой боковой панели щелкните **Сеть**.
![Вкладка "Network" (Сеть)](/assets/images/help/graphs/network_tab.png)

## Список вилок репозитория

На графе "Элементы" отображаются все вилки репозитория.

Вилки перечислены в алфавитном порядке организацией или именем пользователя, создавшего вилку репозитория. Вы можете щелкнуть организацию или имя пользователя для перенаправления на страницу профиля {% data variables.product.product_name %} организации или пользователя, или щелкнуть имя вилки для перенаправления на конкретную вилку репозитория.

{% ifversion fpt or ghec %}

![Граф членов репозитория](/assets/images/help/graphs/repo_forks_graph_dotcom.png)

{% else %}

![Граф членов репозитория](/assets/images/help/graphs/repo_members_graph.png)

{% endif %}

### Доступ к графу "Члены"

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %}
3. На левой боковой панели щелкните **Вилки**.
![Вкладка "Вилки"](/assets/images/help/graphs/graphs-sidebar-forks-tab.png)

## Просмотр зависимостей репозитория

Можно использовать граф зависимостей для изучения кода, от которого зависит репозиторий.

Почти все программное обеспечение полагается на код, разработанный и поддерживаемый другими разработчиками, часто известный как цепочка поставок. Например, утилиты, библиотеки и платформы. Эти зависимости являются целочисленным элементом кода, и любые ошибки или уязвимости в них могут повлиять на код. Важно проверять и обслуживать эти зависимости.

Граф зависимостей предоставляет отличный способ визуализации и изучения зависимостей для репозитория. Дополнительные сведения см. в разделах [Сведения о графе зависимостей](/code-security/supply-chain-security/about-the-dependency-graph) и [Изучение зависимостей репозитория](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository).

Также можно настроить репозиторий, чтобы {% data variables.product.company_short %} автоматически оповещал вас всякий раз при обнаружении уязвимости безопасности в одной из зависимостей. Дополнительные сведения см. в статье "[Сведения о {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)".
