---
title: События
intro: "API событий\_— это API только для чтения для событий {% data variables.product.prodname_dotcom %}."
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 09ad462fe00e84344bd1f0a33f97380a3f03e656
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064309'
---
Эти события отправляются в различные потоки действий на сайте.

API событий может возвращать различные типы событий, вызываемых действиями {% data variables.product.product_name %}. Дополнительные сведения о конкретных событиях, которые можно получить из API событий, см. в статье [Типы событий {% data variables.product.prodname_dotcom %}](/developers/webhooks-and-events/github-event-types). Также доступен API событий для проблем с репозиторием. Дополнительные сведения см. в разделе [API событий проблем](/rest/reference/issues#events).

События оптимизированы для опроса с заголовком ETag. Если новые события не вызывались, вы увидите ответ "304 Не изменено", а текущее ограничение скорости останется без изменений. Существует также заголовок X-Poll-Interval — он показывает, с какой частотой (в секундах) вы можете проводить опросы. Во время высокой нагрузки на сервер время может увеличиться. Заголовку следует подчиняться.

``` shell
$ curl -I {% data variables.product.api_url_pre %}/users/tater/events
> HTTP/2 200
> X-Poll-Interval: 60
> ETag: "a18c3bded88eb5dbb5c849a489412bf3"

# The quotes around the ETag value are important
$ curl -I {% data variables.product.api_url_pre %}/users/tater/events \
$    -H 'If-None-Match: "a18c3bded88eb5dbb5c849a489412bf3"'
> HTTP/2 304
> X-Poll-Interval: 60
```

На временных шкалах отображаются только события, созданные за последние 90 дней. События старше 90 дней не включаются (даже если общее количество событий на временной шкале меньшее 300).
