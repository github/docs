---
title: Защита веб-перехватчиков
intro: 'Убедитесь, что сервер получает только ожидаемые запросы {% data variables.product.prodname_dotcom %} по соображениям безопасности.'
redirect_from:
  - /webhooks/securing
  - /developers/webhooks-and-events/securing-your-webhooks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
ms.openlocfilehash: c58d4f301eadff8e20d626074b95fd8b888f65c4
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148008871'
---
После настройки сервера для получения полезных данных он будет ожидать передачи всех полезных данных, отправляемых в настроенную конечную точку. Из соображений безопасности можно разрешить только запросы, поступающие из GitHub. Это можно сделать несколькими способами. Например, можно разрешить запросы с IP-адреса GitHub, но гораздо проще настроить секретный маркер и проверить сведения.

{% data reusables.webhooks.webhooks-rest-api-links %}

## Настройка секретного маркера

Вам потребуется настроить секретный маркер в двух местах: в GitHub и на сервере.

Чтобы задать маркер в GitHub, выполните следующие действия.

1. Перейдите в репозиторий, в котором вы настраиваете веб-перехватчик.
2. Заполните текстовое поле "Секрет". Используйте произвольную строку с высокой энтропией (например, путем принятия выходных данных `ruby -rsecurerandom -e 'puts SecureRandom.hex(20)'` в терминале).
![Поле маркера секрета веб-перехватчика](/assets/images/webhook_secret_token.png)
3. Щелкните **Обновить веб-перехватчик**.

Затем настройте переменную среды на сервере, в которой хранится этот маркер. Как правило, для этого достаточно просто выполнить:

```shell
$ export SECRET_TOKEN=YOUR-TOKEN
```

**Никогда не** применяйте жесткое кодирование маркера в приложении!

## Проверка полезных данных из GitHub

При установке секретного маркера {% data variables.product.product_name %} будет использовать его для создания хэш-подписи для каждой полезной нагрузки. Эта хэш-подпись включается в заголовки каждого запроса как `x-hub-signature-256`.

{% ifversion fpt or ghes or ghec %} {% note %}

**Примечание.** Чтобы обеспечить обратную совместимость, мы также включаем заголовок `x-hub-signature`, созданный с помощью хэш-функции SHA-1. По возможности рекомендуется использовать заголовок `x-hub-signature-256` для повышения безопасности. В приведенном ниже примере показано использование заголовка `x-hub-signature-256`.

{% endnote %} {% endif %}

Например, если у вас есть базовый сервер, который прослушивает веб-перехватчики, его можно настроить следующим образом:

``` ruby
require 'sinatra'
require 'json'

post '/payload' do
  request.body.rewind
  push = JSON.parse(request.body.read)
  "I got some JSON: #{push.inspect}"
end
```

Цель состоит в том, чтобы вычислить хэш с помощью вашего `SECRET_TOKEN` и убедиться, что результат соответствует хэшу из {% data variables.product.product_name %}. {% data variables.product.product_name %} использует хэш-код HMAC в шестнадцатеричном формате для вычисления хэша, что позволяет перенастроить сервер примерно следующим образом:

``` ruby
post '/payload' do
  request.body.rewind
  payload_body = request.body.read
  verify_signature(payload_body)
  push = JSON.parse(payload_body)
  "I got some JSON: #{push.inspect}"
end

def verify_signature(payload_body)
  signature = 'sha256=' + OpenSSL::HMAC.hexdigest(OpenSSL::Digest.new('sha256'), ENV['SECRET_TOKEN'], payload_body)
  return halt 500, "Signatures didn't match!" unless Rack::Utils.secure_compare(signature, request.env['HTTP_X_HUB_SIGNATURE_256'])
end
```

{% note %}

**Примечание.** Полезные данные веб-перехватчика могут содержать символы Юникода. Если в реализации языка и сервера указана кодировка символов, убедитесь, что полезные данные обрабатываются как символы UTF-8.

{% endnote %}

Используемая вами реализации языка и сервера может отличаться от этого примера кода. Однако есть ряд важных моментов, которые следует учесть:

* Независимо от используемой реализации хэш-подпись начинается с `sha256=`, используя ключ секретного маркера и текстовую область полезных данных.

* Использовать обычный оператор `==` **не рекомендуется**. Такой метод, как [`secure_compare`][secure_compare], выполняет сравнение "постоянных во времени" строк, что позволяет снизить определенные атаки по времени на регулярные операторы равенства.

[secure_compare]: https://rubydoc.info/github/rack/rack/main/Rack/Utils:secure_compare
