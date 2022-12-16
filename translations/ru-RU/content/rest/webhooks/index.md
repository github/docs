---
title: Веб-перехватчики репозитория
intro: Используйте REST API для создания веб-перехватчиков для репозиториев и управления ими.
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
children:
  - /repo-config
  - /repo-deliveries
  - /repos
redirect_from:
  - /rest/reference/webhooks
ms.openlocfilehash: 5654fb1644f654c4664cccdeb987667c157b16cf
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193539'
---
## Сведения о веб-перехватчиках репозитория

Веб-перехватчики репозитория позволяют получать полезные данные HTTP-запроса `POST` всякий раз, когда в репозитории происходят определенные события. {% data reusables.webhooks.webhooks-rest-api-links %}

Если вы хотите настроить один веб-перехватчик для получения событий из всех репозиториев вашей организации, ознакомьтесь с нашей документацией по REST API для [веб-перехватчиков организации](/rest/reference/orgs#webhooks).

Помимо REST API, {% data variables.product.prodname_dotcom %} также может служить центром [PubSubHubbub](#pubsubhubbub) для репозиториев.

### Получение веб-перехватчиков

Для отправки полезных данных веб-перехватчика из {% data variables.product.product_name %} требуется доступ к серверу через Интернет. Также настоятельно рекомендуется использовать SSL для передачи зашифрованных полезных данных по протоколу HTTPS.

#### Заголовки веб-перехватчиков

{% data variables.product.product_name %} может отправлять несколько разных заголовков HTTP, которые позволяют различать типы событий и идентификаторы полезных данных. Дополнительные сведения см. разделе [Заголовки веб-перехватчика](/developers/webhooks-and-events/webhook-events-and-payloads#delivery-headers).

### PubSubHubbub

GitHub также может служить центром [PubSubHubbub](https://github.com/pubsubhubbub/PubSubHubbub) для всех репозиториев. PSHB — это простой протокол публикации и подписки, который позволяет серверам регистрироваться для получения обновлений при обновлении раздела. Обновления отправляются с HTTP-запросом POST на URL-адрес обратного вызова.
URL-адреса разделов для отправок GitHub репозитория представлены в следующем формате:

`https://github.com/{owner}/{repo}/events/{event}`

Событие может быть любым доступным событием веб-перехватчика. Дополнительные сведения см. в разделе [События веб-перехватчика и полезные данные](/developers/webhooks-and-events/webhook-events-and-payloads).

#### Формат ответа

Формат по умолчанию — это то, что [должны ожидать существующие перехватчики после получения](/post-receive-hooks/): текста JSON, отправленного в качестве параметра `payload` в POST.  Можно также указать получение необработанного текста JSON с заголовком `Accept` или расширением `.json`.

    Accept: application/json
    https://github.com/{owner}/{repo}/events/push.json

#### URL-адреса обратных вызовов

URL-адреса обратного вызова могут использовать протокол `http://`.

    # Send updates to postbin.org
    http://postbin.org/123

#### Подписка

Конечная точка PubSubHubbub GitHub: `{% data variables.product.api_url_code %}/hub`. Успешный запрос с curl выглядит следующим образом:

``` shell
curl -u "user" -i \
  {% data variables.product.api_url_pre %}/hub \
  -F "hub.mode=subscribe" \
  -F "hub.topic=https://github.com/{owner}/{repo}/events/push" \
  -F "hub.callback=http://postbin.org/123"
```

Запросы PubSubHubbub можно отправлять несколько раз. Если перехватчик уже существует, он будет изменен в соответствии с запросом.

##### Параметры

Имя | Тип | Описание
-----|------|--------------
``hub.mode``|`string` | **Обязательно**. `subscribe` или `unsubscribe`.
``hub.topic``|`string` |**Обязательно**.  Универсальный код ресурса (URI) репозитория GitHub для подписки.  Этот путь должен иметь следующий формат: `/{owner}/{repo}/events/{event}`.
``hub.callback``|`string` | Универсальный код ресурса (URI) для получения обновлений раздела.
``hub.secret``|`string` | Общий секретный ключ, который создает хэш-подпись исходящего содержимого текста.  Вы можете убедиться, что отправка поступила из GitHub, сравнивая необработанный текст запроса с содержимым {% ifversion fpt or ghes or ghec %}заголовков `X-Hub-Signature` или `X-Hub-Signature-256`{% elsif ghae %}заголовка `X-Hub-Signature-256`{% endif %}. Дополнительные сведения см. в [документации по PubSubHubbub](https://pubsubhubbub.github.io/PubSubHubbub/pubsubhubbub-core-0.4.html#authednotify).
