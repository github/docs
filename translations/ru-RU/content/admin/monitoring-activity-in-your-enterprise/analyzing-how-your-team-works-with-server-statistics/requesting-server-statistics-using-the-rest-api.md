---
title: "Запрос статистики сервера с помощью REST\_API"
shortTitle: Server Statistics and REST API
intro: 'Вы можете использовать собственные средства для анализа использования {% data variables.product.prodname_ghe_server %} с течением времени, запрашивая метрики {% data variables.product.prodname_server_statistics %}, собранные с помощью REST API.'
versions:
  feature: server-statistics
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/requesting-server-statistics-using-the-rest-api
ms.openlocfilehash: d93a51a1d39840187b14480eb91e06e0a4606332
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409334'
---
Можно запросить метрики за период до 365 дней в одном запросе REST API {% data variables.product.prodname_server_statistics %}. Эти данные, которые включают статистические метрики в репозиториях, проблемах и запросах на вытягивание, могут помочь определить потребности вашей организации, понять, как работает ваша команда, и показать ценность использования {% data variables.product.prodname_ghe_server %}. Список собираемых метрик см. в разделе [Собираемые данные {% data variables.product.prodname_server_statistics %}](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics#server-statistics-data-collected).

Перед использованием REST API {% data variables.product.prodname_server_statistics %} необходимо включить {% data variables.product.prodname_server_statistics %}. Дополнительные сведения см. в статье [Включение {% data variables.product.prodname_server_statistics %} для предприятия](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise). 

Дополнительные сведения об использовании REST API для запроса статистики сервера см. в разделе [Получение статистики {% data variables.product.prodname_ghe_server %}](/enterprise-cloud@latest/rest/enterprise-admin/admin-stats#get-github-enterprise-server-statistics) в документации по REST API {% data variables.product.prodname_ghe_cloud %}.
