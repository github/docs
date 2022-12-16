---
title: Включение статистики сервера для предприятия
intro: 'Вы можете анализировать собственные статистические данные из {% data variables.product.prodname_ghe_server %} и помочь нам улучшить продукты {% data variables.product.company_short %}, включив {% data variables.product.prodname_server_statistics %}.'
versions:
  feature: server-statistics
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/about-server-statistics/enabling-server-statistics
topics:
  - Enterprise
shortTitle: Server Statistics
ms.openlocfilehash: 125651de793a45240008de34845762e6de637040
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191873'
---
## Сведения о {% data variables.product.prodname_server_statistics %}

{% data variables.product.prodname_server_statistics %} собирает статистические данные об использовании из {% data variables.location.product_location %}, которые можно использовать для лучшего прогнозирования потребностей организации, понимания принципов работы команды и отображения ценности, которую вы получаете от {% data variables.product.prodname_ghe_server %}. 

{% data variables.product.prodname_server_statistics %} собирает только определенные статистические метрики в репозиториях, проблемах, запросах на вытягивание и других функциях. Содержимое {% data variables.product.prodname_dotcom %}, например код, проблемы, комментарии или содержимое запроса на вытягивание, не собирается. Дополнительную информацию см. в разделе [Сведения о {% data variables.product.prodname_server_statistics %}](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics).

Включив {% data variables.product.prodname_server_statistics %}, вы также помогаете улучшить {% data variables.product.company_short %}. Агрегированные данные, которые вы предоставите, помогут нам понять, как наши клиенты используют {% data variables.product.prodname_dotcom %}, и принимать более целесообразные и обоснованные решения о продукте, в конечном итоге получая выгоду.

## Включение {% data variables.product.prodname_server_statistics %}

Прежде чем включить {% data variables.product.prodname_server_statistics %}, необходимо сначала подключить экземпляр {% data variables.product.prodname_ghe_server %} к {% data variables.product.prodname_dotcom_the_website %} через {% data variables.product.prodname_github_connect %}. Дополнительные сведения см. в разделе [Подключение {% data variables.product.prodname_ghe_server %} к {% data variables.product.prodname_ghe_cloud %}](/enterprise-server@3.1/admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/connecting-github-enterprise-server-to-github-enterprise-cloud).

Можно отключить {% data variables.product.prodname_server_statistics %} из {% data variables.product.prodname_ghe_server %} в любое время.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}
4. В разделе "Общий доступ к статистике сервера с помощью GitHub.com" выберите раскрывающееся меню и щелкните **Включено** или **Отключено**.
  ![Снимок экрана: раскрывающееся меню {% data variables.product.prodname_server_statistics %} с отключенными или включенными параметрами](/assets/images/help/server-statistics/server-statistics-enable-disable-options.png)
