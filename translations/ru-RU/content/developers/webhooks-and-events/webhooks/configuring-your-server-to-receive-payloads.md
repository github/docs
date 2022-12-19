---
title: Настройка сервера для получения полезных данных
intro: 'Узнайте, как настроить сервер для управления входящими полезными данными веб-перехватчика.'
redirect_from:
  - /webhooks/configuring
  - /developers/webhooks-and-events/configuring-your-server-to-receive-payloads
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
shortTitle: Configure server for webhooks
ms.openlocfilehash: c306cadf4dd8d9cd573d694419a51179c8995797
ms.sourcegitcommit: 6b1c6174d0df40c90edfd7526496baabb1dd159d
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/04/2022
ms.locfileid: '148132985'
---
После подготовки веб-перехватчика к доставке сообщений мы настроим базовый сервер Sinatra для обработки входящих полезных данных.

{% note %}

**Примечание.** Полный исходный код для этого проекта можно скачать [из репозитория platform-samples][platform samples].

{% endnote %}

## Написание сервера

Мы хотим, чтобы сервер прослушивал запросы `POST` в `/payload`, поскольку именно это расположение мы указали в GitHub как URL-адрес нашего веб-перехватчика. Так как мы используем для `ngrok` предоставления доступа к локальной среде, нам не нужно настраивать реальный сервер где-то в Интернете, и мы можем с радостью протестировать наш код локально.

Давайте настроим небольшое приложение Sinatra для выполнения каких-либо действий с информацией. Исходная настройка может выглядеть так:

``` ruby
require 'sinatra'
require 'json'

post '/payload' do
  push = JSON.parse(request.body.read)
  puts "I got some JSON: #{push.inspect}"
end
```

(Если вы не знакомы с тем, как работает Sinatra, рекомендуем [ознакомиться с руководством по Sinatra][Sinatra].)

Запустите этот сервер.

Поскольку мы настроили наш веб-перехватчик для прослушивания событий, которые работают с `Issues`, давайте создадим новую проблему в репозитории, который вы используете для тестирования. После его создания вернитесь в терминал. В выходных данных должны отобразиться примерно такие данные:

```shell
$ ~/Developer/platform-samples/hooks/ruby/configuring-your-server $ ruby server.rb
> == Sinatra/1.4.4 has taken the stage on 4567 for development with backup from Thin
> >> Thin web server (v1.5.1 codename Straight Razor)
> >> Maximum connections set to 1024
> >> Listening on localhost:4567, CTRL+C to stop
> I got some JSON: {"action"=>"opened", "issue"=>{"url"=>"...
```

Готово! Вы успешно настроили сервер для прослушивания веб-перехватчиков. Теперь сервер может обрабатывать эти сведения любым выбранным способом. Например, если вы настроили "реальное" веб-приложение, может потребоваться записать некоторые выходные данные JSON в базу данных.

Дополнительные сведения об использовании веб-перехватчиков для удовольствия и выгоды см. в руководстве по [тестированию веб-перехватчиков](/webhooks/testing).

[platform samples]: https://github.com/github/platform-samples/tree/master/hooks/ruby/configuring-your-server
[Sinatra]: http://www.sinatrarb.com/
