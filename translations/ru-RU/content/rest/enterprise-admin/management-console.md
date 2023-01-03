---
title: Консоль управления
intro: 'API консоли управления помогает управлять установкой {% data variables.product.product_name %}.'
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 5d9ba417c5b9eff26b88d9db46f5442ab7a4871c
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094412'
---
{% tip %}

При вызове API в консоли управления необходимо явно задать номер порта. Если протокол TLS включен в вашей организации, номер порта равен `8443`, в противном случае — `8080`.

Если вы не хотите указывать номер порта, необходимо настроить средство для автоматического выполнения перенаправлений.

При использовании [также может потребоваться добавить `-k`](http://curl.haxx.se/docs/manpage.html#-k) флаг`curl`, так как {% data variables.product.product_name %} использует самозаверяющий сертификат перед [добавлением собственного сертификата TLS](/enterprise/admin/guides/installation/configuring-tls/).

{% endtip %}

### Аутентификация

[Пароль консоли управления](/enterprise/admin/articles/accessing-the-management-console/) необходимо передать в качестве маркера проверки подлинности в каждую конечную точку API консоли управления, кроме [`/setup/api/start`](#create-a-github-enterprise-server-license).

Используйте параметр `api_key` для отправки этого маркера с каждым запросом. Пример:

```shell
$ curl -L 'https://HOSTNAME:ADMIN-PORT/setup/api?api_key=YOUR_PASSWORD'
```

Для отправки этого маркера можно также использовать стандартную проверку подлинности HTTP. Пример:

```shell
$ curl -L -u "api_key:YOUR_PASSWORD" 'https://HOSTNAME:ADMIN-PORT/setup/api'
```

{% данных reusables.user-settings.enterprise-admin-api-classic-pat-only %}
