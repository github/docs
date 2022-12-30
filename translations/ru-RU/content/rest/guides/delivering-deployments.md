---
title: Доставка развертываний
intro: С помощью REST API развертывания можно создавать пользовательские средства для взаимодействия с сервером и сторонним приложением.
redirect_from:
  - /guides/delivering-deployments
  - /guides/automating-deployments-to-integrators
  - /v3/guides/delivering-deployments
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: 7ac423a27fe8b1c145efa3c135d88f08487f153a
ms.sourcegitcommit: 6b1c6174d0df40c90edfd7526496baabb1dd159d
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/04/2022
ms.locfileid: '148132986'
---
Интерфейс [API развертываний][deploy API] дает возможность запуска проектов, размещенных на {% data variables.product.product_name %}, на принадлежащем вам сервере. В сочетании с [API состояния][status API] он позволяет координировать развертывания, как только код окажется в ветви по умолчанию.

В этом руководстве данный интерфейс API используется для демонстрации возможной конфигурации.
В описываемом сценарии мы выполним указанные ниже действия.

* Выполним слияние запроса на вытягивание.
* По завершении непрерывной интеграции мы зададим соответствующее состояние запроса на вытягивание.
* После слияния запроса на вытягивание мы запустим развертывание на нашем сервере.

Система непрерывной интеграции и сервер размещения будут вымышленными. Это может быть Heroku, Amazon или что-то совершенно иное. Основная цель этого руководства — настроить сервер, управляющий взаимодействием.

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

* Развертывание
* Состояния развертывания
* Запрос на вытягивание

Это события, которые {% data variables.product.product_name %} будет отправлять на наш сервер каждый раз, когда происходит соответствующее действие. Пока мы настроим сервер так, чтобы он обрабатывал *только* слияния запросов на вытягивание:

``` ruby
post '/event_handler' do
  @payload = JSON.parse(params[:payload])

  case request.env['HTTP_X_GITHUB_EVENT']
  when "pull_request"
    if @payload["action"] == "closed" && @payload["pull_request"]["merged"]
      puts "A pull request was merged! A deployment should start now..."
    end
  end
end
```

Что происходит? К каждому событию, которое отправляет {% data variables.product.product_name %}, прикреплен заголовок HTTP `X-GitHub-Event`. Пока нас интересуют только события, связанные с запросами на вытягивание. При слиянии запроса на вытягивание (состояние `closed`, `merged` имеет значение `true`) запускается развертывание.

Чтобы проверить этот эксперимент, внесите какие-нибудь изменения в ветвь тестового репозитория, откройте запрос на вытягивание и выполните его слияние. Ваш сервер должен вернуть соответствующий ответ.

## Работа с развертываниями

Реализовав сервер, проверив код и выполнив слияние запроса на вытягивание, теперь мы хотим развернуть проект.

Сначала мы изменим прослушиватель событий для обработки запросов на вытягивание при их слиянии и приступим к развертыванию:

``` ruby
when "pull_request"
  if @payload["action"] == "closed" && @payload["pull_request"]["merged"]
    start_deployment(@payload["pull_request"])
  end
when "deployment"
  process_deployment(@payload)
when "deployment_status"
  update_deployment_status
end
```

На основе сведений из запроса на вытягивание мы начнем заполнять метод `start_deployment`:

``` ruby
def start_deployment(pull_request)
  user = pull_request['user']['login']
  payload = JSON.generate(:environment => 'production', :deploy_user => user)
  @client.create_deployment(pull_request['head']['repo']['full_name'], pull_request['head']['sha'], {:payload => payload, :description => "Deploying my sweet branch"})
end
```

Развертывания могут сопровождаться метаданными в виде `payload` и `description`. Хотя эти значения являются необязательными, они полезны для ведения журнала и представления сведений.

При создании нового развертывания активируется отдельное событие. Вот почему нужен новый случай `switch` в обработчике событий `deployment`. Эти сведения можно использовать для получения уведомления об активации развертывания.

Развертывания могут занимать довольно много времени, поэтому необходимо прослушивать различные события, например создание развертывания и изменение его состояния.

Давайте сымитируем развертывание, которое выполняет некоторые действия, и посмотрим, какое влияние оно оказывает на выходные данные. Сначала завершим метод `process_deployment`:

``` ruby
def process_deployment
  payload = JSON.parse(@payload['payload'])
  # you can send this information to your chat room, monitor, pager, etc.
  puts "Processing '#{@payload['description']}' for #{payload['deploy_user']} to #{payload['environment']}"
  sleep 2 # simulate work
  @client.create_deployment_status("repos/#{@payload['repository']['full_name']}/deployments/#{@payload['id']}", 'pending')
  sleep 2 # simulate work
  @client.create_deployment_status("repos/#{@payload['repository']['full_name']}/deployments/#{@payload['id']}", 'success')
end
```

Наконец, сымитируем сохранение сведений о состоянии путем вывода их в консоли:

``` ruby
def update_deployment_status
  puts "Deployment status for #{@payload['id']} is #{@payload['state']}"
end
```

Давайте разберемся, что происходит. Развертывание создается методом `start_deployment`, который активирует событие `deployment`. Далее мы вызываем метод `process_deployment`, который имитирует выполнение некоторых задач. Во время этой обработки мы также вызываем `create_deployment_status`, чтобы получатель мог узнать, что происходит, когда состояние переведено в `pending`.

После завершения развертывания задается состояние `success`.

## Заключение

В GitHub для управления развертываниями уже много лет используется одна из версий [Heaven][heaven]. Процесс в целом такой же, как и в случае с созданным выше сервером.

* Ожидается ответ о состоянии проверок непрерывной интеграции (успешно или сбой).
* Если необходимые проверки пройдены успешно, выполняется слияние запроса на вытягивание.
* Heaven принимает объединенный код и развертывает его на промежуточных и рабочих серверах.
* В то же время Heaven также уведомляет всех участников о сборке посредством бота [Hubot][hubot] в наших комнатах чата.

Вот и все! Чтобы использовать этот пример, не нужно создавать собственную конфигурацию развертывания.
Всегда можно воспользоваться [интеграциями GitHub][integrations].

[deploy API]: /rest/reference/repos#deployments
[status API]: /guides/building-a-ci-server
[ngrok]: https://ngrok.com/
[using ngrok]: /webhooks/configuring/#using-ngrok
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/delivering-deployments
[Sinatra]: http://www.sinatrarb.com/
[webhook]: /webhooks/
[octokit.rb]: https://github.com/octokit/octokit.rb
[access token]: /articles/creating-an-access-token-for-command-line-use
[travis api]: https://api.travis-ci.org/docs/
[janky]: https://github.com/github/janky
[heaven]: https://github.com/atmos/heaven
[hubot]: https://github.com/github/hubot
[integrations]: https://github.com/integrations
