---
title: Основы аутентификации
intro: 'Изучите несколько примеров, демонстрирующих различные способы проверки подлинности.'
redirect_from:
  - /guides/basics-of-authentication
  - /v3/guides/basics-of-authentication
  - /rest/basics-of-authentication
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: 3e2796e83047f4e8bb6b7e9a503eee6dac63f019
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145135965'
---
Этот раздел посвящен основам проверки подлинности. В частности, мы создадим сервер Ruby (с помощью [Sinatra][Sinatra]), который реализует [веб-поток][webflow] приложения несколькими разными способами.

{% tip %}

Полный исходный код для этого проекта можно скачать из [репозитория platform-samples](https://github.com/github/platform-samples/tree/master/api/).

{% endtip %}

## Регистрация приложения

Сначала нужно [зарегистрировать приложение][new oauth app]. Каждому зарегистрированному приложению OAuth назначается уникальный идентификатор клиента и секрет клиента.
Секрет клиента нельзя разглашать! Это касается и возврата строки в репозиторий.

Вы можете заполнить все поля как угодно, за исключением **URL-адреса обратного вызова авторизации**. Это, пожалуй, самый важный элемент при настройке приложения. Это URL-адрес обратного вызова, на который {% data variables.product.product_name %} возвращает пользователя после успешной проверки подлинности.

Так как мы запускаем обычный сервер Sinatra, в качестве расположения локального экземпляра задается `http://127.0.0.1:4567`. Давайте заполним URL-адрес обратного вызова значением `http://127.0.0.1:4567/callback`.

## Подтверждение авторизации пользователя

{% data reusables.apps.deprecating_auth_with_query_parameters %}

Теперь давайте приступим к настройке нашего простого сервера. Создайте файл с именем _server.rb_ и вставьте в него следующий код:

``` ruby
require 'sinatra'
require 'rest-client'
require 'json'

CLIENT_ID = ENV['GH_BASIC_CLIENT_ID']
CLIENT_SECRET = ENV['GH_BASIC_SECRET_ID']

get '/' do
  erb :index, :locals => {:client_id => CLIENT_ID}
end
```

Идентификатор и секретные ключи клиента берутся со [страницы конфигурации приложения][app settings].{% ifversion fpt or ghec %} **Никогда _не_** следует хранить эти значения в {% data variables.product.product_name %} или в любом другом общедоступном месте.{% endif %} Мы рекомендуем хранить их в [переменных среды][about env vars], как в данном случае.

Далее вставьте в файл _views/index.erb_ следующее содержимое:

``` erb
<html>
  <head>
  </head>
  <body>
    <p>
      Well, hello there!
    </p>
    <p>
      We're going to now talk to the GitHub API. Ready?
      <a href="https://github.com/login/oauth/authorize?scope=user:email&client_id=<%= client_id %>">Click here</a> to begin!
    </p>
    <p>
      If that link doesn't work, remember to provide your own <a href="/apps/building-oauth-apps/authorizing-oauth-apps/">Client ID</a>!
    </p>
  </body>
</html>
```

(Если вы не знакомы с тем, как работает Sinatra, рекомендуем [ознакомиться с руководством по Sinatra][Sinatra guide].)

Кроме того, обратите внимание, что в URL-адресе используется параметр запроса `scope` для определения [областей][oauth scopes], запрашиваемых приложением. Для нашего приложения мы запрашиваем область `user:email` для чтения частных адресов электронной почты.

В браузере перейдите по адресу `http://127.0.0.1:4567`. Щелкнув ссылку, вы перейдете на {% data variables.product.product_name %}, где откроется диалоговое окно наподобие следующего: ![Запрос OAuth GitHub](/assets/images/oauth_prompt.png)

Если вы доверяете себе, нажмите кнопку **Авторизовать приложение**. Ой! Sinatra выдает ошибку `404`. Что же случилось?!

Помните, мы указали `callback` в качестве URL-адреса обратного вызова? Мы не предоставили маршрут для него, поэтому {% data variables.product.product_name %} не знает, куда направлять пользователя после авторизации приложения. Давайте исправим это.

### Предоставление обратного вызова

В файле _server.rb_ добавьте маршрут, чтобы указать, что должен делать обратный вызов:

``` ruby
get '/callback' do
  # get temporary GitHub code...
  session_code = request.env['rack.request.query_hash']['code']

  # ... and POST it back to GitHub
  result = RestClient.post('https://github.com/login/oauth/access_token',
                          {:client_id => CLIENT_ID,
                           :client_secret => CLIENT_SECRET,
                           :code => session_code},
                           :accept => :json)

  # extract the token and granted scopes
  access_token = JSON.parse(result)['access_token']
end
```

После успешной проверки подлинности приложения {% data variables.product.product_name %} предоставляет временное значение `code`.
Этот код потребуется отправить (`POST`) обратно на {% data variables.product.product_name %} в обмен на `access_token`.
Чтобы упростить HTTP-запросы GET и POST, мы используем [rest-client][REST Client].
Обратите внимание, что вы, вероятно, никогда не будете обращаться к API через REST. Для более серьезного приложения, вероятно, следует использовать [библиотеку, написанную на выбранном вами языке][libraries].

### Проверка предоставленных областей

Пользователи могут изменять запрошенные области, изменяя URL-адрес напрямую. Таким образом приложению может предоставляться более ограниченный доступ, чем вы запросили изначально. So, before making any requests with the token, you should check the scopes that were granted for the token by the user. Дополнительные сведения о запрошенных и предоставленных областях см. в разделе [Области для приложений OAuth](/developers/apps/scopes-for-oauth-apps#requested-scopes-and-granted-scopes).

Предоставленные области возвращаются в ответе обмена токеном.

``` ruby
get '/callback' do
  # ...
  # Get the access_token using the code sample above
  # ...

  # check if we were granted user:email scope
  scopes = JSON.parse(result)['scope'].split(',')
  has_user_email_scope = scopes.include? 'user:email'
end
```

В нашем приложении мы используем `scopes.include?` для проверки того, была ли предоставлена область `user:email`, необходимая для получения частных адресов электронной почты пользователя, прошедшего проверку подлинности. Если бы приложение запрашивало другие области, мы бы также проверили их.

Кроме того, так как между областями существуют иерархические отношения, следует проверить, предоставлен ли вам минимальный уровень требуемых областей. Например, если приложение запросило область `user`, возможно, ему была предоставлена только область `user:email`. В этом случае приложению не предоставлен запрошенный уровень, но предоставленных областей все равно достаточно.

Проверки областей только перед выполнением запросов недостаточно, так как пользователи могут изменять области в период между проверкой и фактическим запросом.
В этом случае вызовы API, которые должны выполняться успешно, могут завершаться ошибкой с состоянием `404` или `401` или возвращать другие сведения.

Для корректной обработки таких событий все ответы API на запросы, выполняемые с допустимыми токенами, также содержат [заголовок `X-OAuth-Scopes`][oauth scopes].
Этот заголовок содержит список областей токена, который использовался для выполнения запроса. Помимо этого, API приложений OAuth предоставляет конечную точку для {% ifversion fpt or ghes or ghec %} [проверки токена на допустимость](/rest/reference/apps#check-a-token){% else %}[проверки токена на допустимость](/rest/reference/apps#check-an-authorization){% endif %}.
Используйте эти сведения для обнаружения изменений в областях токена и информирования пользователей об изменениях в доступных функциональных возможностях приложения.

### Выполнение запросов с проверкой подлинности

Наконец, с помощью этого маркера доступа вы можете выполнять запросы, прошедшие проверку подлинности, как пользователь, вошедший в систему:

``` ruby
# fetch user information
auth_result = JSON.parse(RestClient.get('{% data variables.product.api_url_code %}/user',
                                        {:params => {:access_token => access_token}}))

# if the user authorized it, fetch private emails
if has_user_email_scope
  auth_result['private_emails'] =
    JSON.parse(RestClient.get('{% data variables.product.api_url_code %}/user/emails',
                              {:params => {:access_token => access_token}}))
end

erb :basic, :locals => auth_result
```

С результатами можно делать что угодно. В этом случае мы просто сбросим их в файл _basic.erb_:

``` erb
<p>Hello, <%= login %>!</p>
<p>
  <% if !email.nil? && !email.empty? %> It looks like your public email address is <%= email %>.
  <% else %> It looks like you don't have a public email. That's cool.
  <% end %>
</p>
<p>
  <% if defined? private_emails %>
  With your permission, we were also able to dig up your private email addresses:
  <%= private_emails.map{ |private_email_address| private_email_address["email"] }.join(', ') %>
  <% else %>
  Also, you're a bit secretive about your private email addresses.
  <% end %>
</p>
```

## Реализация сохраняемой проверки подлинности

Если бы пользователям требовалось входить в приложение каждый раз, когда им нужно посетить веб-страницу, это было бы неудобно. Например, попробуйте перейти непосредственно по адресу `http://127.0.0.1:4567/basic`. Вы получите ошибку.

Что если бы мы могли обойти весь ручной процесс и _сделать так_, чтобы пользователь, вошедший на {% data variables.product.product_name %}, мог автоматически получать доступ к приложению? Приготовься, ведь _именно это мы собираемся сделать_.

Описанный выше сервер довольно прост. Чтобы добавить интеллектуальные возможности проверки подлинности, мы перейдем на использование сеансов для хранения токенов.
Это сделает проверку подлинности прозрачной для пользователя.

Кроме того, так как области хранятся в сеансе, нам потребуется обрабатывать случаи, когда пользователь изменяет области после их проверки или отзывает токен. Для этого мы используем блок `rescue` и проверим, выполнен ли первый вызов API успешно и, следовательно, действителен ли токен. После этого мы проверим заголовок ответа `X-OAuth-Scopes`, чтобы убедиться в том, что пользователь не отозвал область `user:email`.

Создайте файл с именем _advanced_server.rb_ и вставьте в него следующие строки:

``` ruby
require 'sinatra'
require 'rest_client'
require 'json'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
# if ENV['GITHUB_CLIENT_ID'] && ENV['GITHUB_CLIENT_SECRET']
#  CLIENT_ID        = ENV['GITHUB_CLIENT_ID']
#  CLIENT_SECRET    = ENV['GITHUB_CLIENT_SECRET']
# end

CLIENT_ID = ENV['GH_BASIC_CLIENT_ID']
CLIENT_SECRET = ENV['GH_BASIC_SECRET_ID']

use Rack::Session::Pool, :cookie_only => false

def authenticated?
  session[:access_token]
end

def authenticate!
  erb :index, :locals => {:client_id => CLIENT_ID}
end

get '/' do
  if !authenticated?
    authenticate!
  else
    access_token = session[:access_token]
    scopes = []

    begin
      auth_result = RestClient.get('{% data variables.product.api_url_code %}/user',
                                   {:params => {:access_token => access_token},
                                    :accept => :json})
    rescue => e
      # request didn't succeed because the token was revoked so we
      # invalidate the token stored in the session and render the
      # index page so that the user can start the OAuth flow again

      session[:access_token] = nil
      return authenticate!
    end

    # the request succeeded, so we check the list of current scopes
    if auth_result.headers.include? :x_oauth_scopes
      scopes = auth_result.headers[:x_oauth_scopes].split(', ')
    end

    auth_result = JSON.parse(auth_result)

    if scopes.include? 'user:email'
      auth_result['private_emails'] =
        JSON.parse(RestClient.get('{% data variables.product.api_url_code %}/user/emails',
                       {:params => {:access_token => access_token},
                        :accept => :json}))
    end

    erb :advanced, :locals => auth_result
  end
end

get '/callback' do
  session_code = request.env['rack.request.query_hash']['code']

  result = RestClient.post('https://github.com/login/oauth/access_token',
                          {:client_id => CLIENT_ID,
                           :client_secret => CLIENT_SECRET,
                           :code => session_code},
                           :accept => :json)

  session[:access_token] = JSON.parse(result)['access_token']

  redirect '/'
end
```

Большая часть кода должна выглядеть знакомо. Например, мы по-прежнему используем `RestClient.get` для вызова API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} и по-прежнему передаем результаты для обработки в шаблоне ERB (на этот раз он называется `advanced.erb`).

Кроме того, теперь у нас есть метод `authenticated?`, который проверяет, прошел ли пользователь проверку подлинности. Если нет, вызывается метод `authenticate!`, который выполняет поток OAuth и обновляет сеанс с учетом предоставленных токена и областей.

Затем создайте в папке _views_ файл с именем _advanced.erb_ и вставьте в него следующую разметку:

``` erb
<html>
  <head>
  </head>
  <body>
    <p>Well, well, well, <%= login %>!</p>
    <p>
      <% if !email.empty? %> It looks like your public email address is <%= email %>.
      <% else %> It looks like you don't have a public email. That's cool.
      <% end %>
    </p>
    <p>
      <% if defined? private_emails %>
      With your permission, we were also able to dig up your private email addresses:
      <%= private_emails.map{ |private_email_address| private_email_address["email"] }.join(', ') %>
      <% else %>
      Also, you're a bit secretive about your private email addresses.
      <% end %>
    </p>
  </body>
</html>
```

В командной строке вызовите `ruby advanced_server.rb`, чтобы запустить сервер через порт `4567` — тот же порт, который мы использовали с простым приложением Sinatra.
При переходе по адресу `http://127.0.0.1:4567` приложение вызывает `authenticate!`, в результате чего вы перенаправляетесь на `/callback`. Затем `/callback` отправляет нас обратно на `/`, и так как мы прошли проверку подлинности, отрисовывается содержимое файла _advanced.erb_.

Мы могли бы сильно упростить эту циклическую маршрутизацию, просто изменив URL-адрес обратного вызова в {% data variables.product.product_name %} на `/`. Но, так как и _server.rb_, и _advanced.rb_ используют один и тот же URL-адрес обратного вызова, для этого необходимы дополнительные действия.

Кроме того, если бы мы никогда прежде не разрешали приложению доступ к данным {% data variables.product.product_name %}, появилось бы то же диалоговое окно с предупреждением, что и ранее.

[webflow]: /apps/building-oauth-apps/authorizing-oauth-apps/
[Sinatra]: http://www.sinatrarb.com/
[about env vars]: http://en.wikipedia.org/wiki/Environment_variable#Getting_and_setting_environment_variables
[Sinatra guide]: https://github.com/sinatra/sinatra-book/blob/master/book/Introduction.markdown#hello-world-application
[REST Client]: https://github.com/archiloque/rest-client
[libraries]: /libraries/
[oauth scopes]: /apps/building-oauth-apps/understanding-scopes-for-oauth-apps/
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/basics-of-authentication
[new oauth app]: https://github.com/settings/applications/new
[app settings]: https://github.com/settings/developers
