---
title: Создание сервера непрерывной интеграции
intro: Создайте собственную систему непрерывной интеграции с помощью API состояния.
redirect_from:
  - /guides/building-a-ci-server
  - /v3/guides/building-a-ci-server
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: e8a22317562e209adca6cafa3fb8f1d55b1e04ee
ms.sourcegitcommit: 6b1c6174d0df40c90edfd7526496baabb1dd159d
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/04/2022
ms.locfileid: '148132950'
---
[API состояния][status API] отвечает за связывание фиксаций со службой тестирования, чтобы каждую выполняемую отправку можно было протестировать и представить в запросе на вытягивание {% data variables.product.product_name %}.

В этом руководстве данный интерфейс API используется для демонстрации возможной конфигурации.
В описываемом сценарии мы выполним указанные ниже действия.

* Запустите наш набор непрерывной интеграции (CI) при открытии запроса на вытягивание (мы зададим состояние CI "в ожидании").
* По завершении непрерывной интеграции мы зададим соответствующее состояние запроса на вытягивание.

Система непрерывной интеграции и сервер размещения будут вымышленными. Это может быть Travis, Jenkins или что-то совершенно иное. Основная цель этого руководства — настроить сервер, управляющий взаимодействием.

Если вы еще этого не сделали, [скачайте `ngrok`][ngrok]и узнайте, как [использовать его][using ngrok]. Мы считаем, что это очень полезный инструмент для предоставления локальных приложений в Интернете.

{% ifversion cli-webhook-forwarding %} {% note %}

**Примечание:** Кроме того, вы можете использовать перенаправление веб-перехватчиков, чтобы настроить локальную среду для получения веб-перехватчиков. Дополнительные сведения см. в разделе [Получение веб-перехватчиков с помощью GitHub CLI](/developers/webhooks-and-events/webhooks/receiving-webhooks-with-the-github-cli).

{% endnote %} {% endif %}

Примечание. Полный исходный код для этого проекта можно скачать из [репозитория platform-samples][platform samples].

## Создание сервера

Мы создадим небольшое приложение Sinatra, чтобы подтвердить работоспособность локальных подключений.
Начнем с этого:

``` ruby
require 'sinatra'
require 'json'

post '/event_handler' do
  payload = JSON.parse(params[:payload])
  "Well, it worked!"
end
```

(Если вы не знакомы с тем, как работает Sinatra, рекомендуем [ознакомиться с руководством по Sinatra][Sinatra].)

Запустите этот сервер. По умолчанию Sinatra запускается через порт `4567`, поэтому вам также потребуется настроить `ngrok` для этого прослушивание.

Чтобы этот сервер работал, необходимо настроить репозиторий с веб-перехватчиком.
Веб-перехватчик должен быть настроен так, чтобы он активировался каждый раз при создании или слиянии запроса на вытягивание.
Давайте создадим репозиторий, с которым можно спокойно экспериментировать. Мы предлагаем [репозиторий @octocat Spoon/Knife](https://github.com/octocat/Spoon-Knife).
После этого вы создадите новый веб-перехватчик в репозитории, подаете ему URL-адрес `ngrok` и выберите `application/x-www-form-urlencoded` в качестве типа контента:

![Новый URL-адрес ngrok](/assets/images/webhook_sample_url.png)

Щелкните **Обновить веб-перехватчик**. Вы должны увидеть текст ответа `Well, it worked!`.
Отлично! Установите переключатель в положение **Разрешить мне выбрать отдельные события** и выберите следующее:

* Состояние
* Запрос на вытягивание

Это события, которые {% data variables.product.product_name %} будет отправлять на наш сервер каждый раз, когда происходит соответствующее действие. Давайте обновим сервер так, чтобы пока он обрабатывал *только* сценарий запроса на вытягивание:

``` ruby
post '/event_handler' do
  @payload = JSON.parse(params[:payload])

  case request.env['HTTP_X_GITHUB_EVENT']
  when "pull_request"
    if @payload["action"] == "opened"
      process_pull_request(@payload["pull_request"])
    end
  end
end

helpers do
  def process_pull_request(pull_request)
    puts "It's #{pull_request['title']}"
  end
end
```

Что происходит? К каждому событию, которое отправляет {% data variables.product.product_name %}, прикреплен заголовок HTTP `X-GitHub-Event`. Пока нас интересуют только события, связанные с запросами на вытягивание. Из них мы возьмем полезные данные и вернем поле заголовка. В идеальном сценарии сервер должен обрабатывать каждое обновление запроса на вытягивание, а не только его открытие. Это позволяет гарантировать, что каждая новая отправка проходит тесты CI.
Однако в этой демонстрации нас будет интересовать только открытие запроса.

Чтобы проверить этот эксперимент, внесите какие-нибудь изменения в ветвь тестового репозитория и откройте запрос на вытягивание. Ваш сервер должен вернуть соответствующий ответ.

## Работа с состояниями

Реализовав сервер, мы готовы приступить к выполнению первого требования: заданию (и обновлению) состояний CI. Обратите внимание, что при каждом обновлении сервера можно щелкнуть **Доставить повторно**, чтобы отправить те же полезные данные. Создавать новый запрос на вытягивание каждый раз, когда вы вносите изменения, не нужно.

Так как мы взаимодействуем с API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}, мы используем [Octokit.rb][octokit.rb] для управления взаимодействием. Мы настроим этот клиент с [помощью {% data variables.product.pat_generic %}][access token]:

``` ruby
# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
ACCESS_TOKEN = ENV['MY_PERSONAL_TOKEN']

before do
  @client ||= Octokit::Client.new(:access_token => ACCESS_TOKEN)
end
```

После этого нужно просто обновить запрос на вытягивание на {% data variables.product.product_name %}, чтобы было ясно, что обработка выполняется в рамках непрерывной интеграции:

``` ruby
def process_pull_request(pull_request)
  puts "Processing pull request..."
  @client.create_status(pull_request['base']['repo']['full_name'], pull_request['head']['sha'], 'pending')
end
```

Здесь мы выполняем три основных задачи:

* ищем полное имя репозитория;
* ищем последнее значение SHA запроса на вытягивание;
* устанавливаем состояния "в ожидании".

Вот и все! Далее можно запустить любой необходимый процесс для выполнения набора тестов. Возможно, вы собираетесь передать код в Jenkins или вызвать другую веб-службу через ее API, например [Travis][travis api]. После этого потребуется еще раз обновить состояние. В нашем примере мы просто задаем `"success"`:

``` ruby
def process_pull_request(pull_request)
  @client.create_status(pull_request['base']['repo']['full_name'], pull_request['head']['sha'], 'pending')
  sleep 2 # do busy work...
  @client.create_status(pull_request['base']['repo']['full_name'], pull_request['head']['sha'], 'success')
  puts "Pull request processed!"
end
``` 

## Заключение

В GitHub для управления CI уже много лет используется одна из версий [Janky][janky].
Процесс в целом такой же, как и в случае с созданным выше сервером.
Мы делаем следующее:

* активируем Jenkins при создании или обновлении запроса на вытягивание (через Janky);
* ожидаем ответа о состоянии CI;
* если код зеленый, выполняется слияние запроса на вытягивание.

Все это взаимодействие передается в наши комнаты чата. Чтобы использовать этот пример, не нужно создавать собственную конфигурацию CI.
Всегда можно воспользоваться [интеграциями GitHub][integrations].

[deploy API]: /rest/reference/repos#deployments
[status API]: /rest/reference/commits#commit-statuses
[ngrok]: https://ngrok.com/
[using ngrok]: /webhooks/configuring/#using-ngrok
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/building-a-ci-server
[Sinatra]: http://www.sinatrarb.com/
[webhook]: /webhooks/
[octokit.rb]: https://github.com/octokit/octokit.rb
[access token]: /articles/creating-an-access-token-for-command-line-use
[travis api]: https://api.travis-ci.org/docs/
[janky]: https://github.com/github/janky
[heaven]: https://github.com/atmos/heaven
[hubot]: https://github.com/github/hubot
[integrations]: https://github.com/integrations
