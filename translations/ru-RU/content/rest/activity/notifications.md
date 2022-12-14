---
title: Уведомления
intro: 'API уведомлений позволяет управлять уведомлениями {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 6459a2a2e5d26b0250d52688488eb4092939ab7b
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098972'
---
## Сведения об API уведомлений

{% данных, многократно используемых.user-settings.notifications-api-classic-pat-only %}

API уведомлений позволяет управлять уведомлениями {% data variables.product.product_name %}. Дополнительные сведения об уведомлениях см. в статье [Сведения об уведомлениях](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications).

Для всех вызовов API уведомлений требуется область API: `notifications` или `repo`.  Это позволит получить доступ только для чтения к некоторым проблемам и зафиксировать содержимое. Вам по-прежнему потребуется область `repo` для доступа к проблемам и фиксациям из соответствующих конечных точек.

Уведомления возвращаются как "потоки".  Поток содержит сведения о текущем обсуждении проблемы, запроса на вытягивание или фиксации.

Уведомления оптимизированы для опроса с заголовком `Last-Modified`.  Если новых уведомлений нет, вы увидите ответ `304 Not Modified`, а текущее ограничение скорости останется неизменным.  Заголовок `X-Poll-Interval` показывает, с какой частотой (в секундах) вы можете проводить опросы.  Во время высокой нагрузки на сервер время может увеличиться.  Заголовку следует подчиняться.

``` shell
# Add authentication to your requests
$ curl -I {% data variables.product.api_url_pre %}/notifications
HTTP/2 200
Last-Modified: Thu, 25 Oct 2012 15:16:27 GMT
X-Poll-Interval: 60

# Pass the Last-Modified header exactly
$ curl -I {% data variables.product.api_url_pre %}/notifications
$    -H "If-Modified-Since: Thu, 25 Oct 2012 15:16:27 GMT"
> HTTP/2 304
> X-Poll-Interval: 60
```

### Сведения о причинах уведомлений

При получении ответов из API уведомлений для всех полезных данных существует ключ с заголовком `reason`. Они соответствуют событиям, которые активируют уведомление.

Это потенциальные `reason` для получения уведомления:

Название причины | Описание
------------|------------
`assign` | Вам назначена эта проблема.
`author` | Вы создали поток.
`comment` | Вы оставили комментарий для потока.
`ci_activity` | Инициированный вами рабочий процесс {% data variables.product.prodname_actions %} завершен.
`invitation` | Вы приняли приглашение поучаствовать в репозитории.
`manual` | Вы подписались на поток (через проблему или запрос на вытягивание).
`mention` | Вы были конкретно **@mentioned** в содержимом.
`review_requested` | Вам или вашей команде было предложено проверить запрос на вытягивание.{% ifversion fpt or ghec %}
`security_alert` | {% data variables.product.prodname_dotcom %} обнаружил [уязвимость системы безопасности](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies) в репозитории.{% endif %}
`state_change` | Вы изменили состояние потока (например, закрытие проблемы или объединение запроса на вытягивание).
`subscribed` | Вы просматриваете репозиторий.
`team_mention` | Вы были в упомянутой команде.

Обратите внимание, что `reason` изменяется для каждого потока и может измениться, если `reason` отличается в позднем уведомлении.

Например, если вы являетесь автором проблемы, последующие уведомления по этой проблеме будут иметь `reason` для `author`. Если вы **@mentioned** в той же проблеме, уведомления, которые вы извлекаете после этого, будут иметь `reason` для `mention`. `reason` остается как `mention`, независимо от того, упоминаетесь ли вы снова.
