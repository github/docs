---
title: 인증의 기본 사항
intro: 몇 가지 예제를 사용하여 인증하는 다양한 방법에 대해 알아봅니다.
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
ms.sourcegitcommit: 6edb015070d3f0fda4525c6c931f1324626345dc
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/12/2022
ms.locfileid: '147887320'
---
이 섹션에서는 인증의 기본 사항에 중점을 둡니다. 특히 여러 가지 방법으로 애플리케이션의 [웹 흐름][webflow]을 구현하는 Ruby 서버([Sinatra][Sinatra] 사용)를 만듭니다.

{% tip %}

이 프로젝트에 대한 전체 소스 코드는 [platform-samples 리포지토리](https://github.com/github/platform-samples/tree/master/api/)에서 다운로드할 수 있습니다.

{% endtip %}

## 앱 등록

먼저 [애플리케이션을 등록][new oauth app]해야 합니다. 등록된 모든 OAuth 애플리케이션에는 고유한 클라이언트 ID 및 클라이언트 암호가 할당됩니다.
클라이언트 암호는 공유하면 안 됩니다! 여기에는 문자열을 리포지토리에 체크 인하는 것이 포함됩니다.

**권한 부여 콜백 URL** 을 제외한 모든 정보를 원하는 대로 입력할 수 있습니다. 이는 애플리케이션을 설정하는 데 가장 중요한 요소입니다. 인증에 성공하면 {% data variables.product.product_name %}에서 사용자를 반환하는 콜백 URL입니다.

일반 Sinatra 서버를 실행하므로 로컬 인스턴스의 위치는 `http://127.0.0.1:4567`로 설정됩니다. 콜백 URL을 `http://127.0.0.1:4567/callback`으로 입력해 보겠습니다.

## 사용자 권한 부여 수락

{% data reusables.apps.deprecating_auth_with_query_parameters %}

이제 간단한 서버 작성을 시작해 보겠습니다. _server.rb_ 라는 파일을 만들고, 다음 내용을 이 파일에 붙여넣습니다.

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

클라이언트 ID 및 클라이언트 암호 키는 [애플리케이션의 구성 페이지][app settings]에서 가져옵니다.{% ifversion fpt or ghec %} 이와 관련하여 이러한 값은 {% data variables.product.product_name %} 또는 다른 공공 장소에 **결코, _절대로_** 저장하면 안 됩니다.{% endif %} 다시 말해 바로 여기서 수행한 작업인 [환경 변수][about env vars]로 저장하는 것이 좋습니다.

다음으로 _views/index.erb_ 에서 다음 콘텐츠를 붙여넣습니다.

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

(Sinatra의 작동 방식에 익숙하지 않은 경우 [ 가이드를 읽는 것이][Sinatra guide] 좋습니다.)

또한 URL은 `scope` 쿼리 매개 변수를 사용하여 애플리케이션에서 요청한 [범위][oauth scopes]를 정의합니다. 이 애플리케이션의 경우 프라이빗 이메일 주소를 읽기 위한 `user:email` 범위를 요청하고 있습니다.

브라우저를 `http://127.0.0.1:4567`로 이동합니다. 링크를 클릭하면 {% data variables.product.product_name %}으로 이동하고 다음과 같은 대화 상자가 표시됩니다. ![GitHub의 OAuth 프롬프트](/assets/images/oauth_prompt.png)

자신을 신뢰하는 경우 **앱 권한 부여** 를 클릭합니다. 우오! Sinatra에서 `404` 오류를 내보냅니다. 무엇을 제공할까요?

콜백 URL을 `callback`으로 지정한 경우를 기억하세요? 이에 대한 경로를 제공하지 않았으므로 {% data variables.product.product_name %}에서 사용자가 앱에 권한을 부여한 후 사용자를 삭제할 위치를 인식할 수 없습니다. 이제 수정해 보겠습니다!

### 콜백 제공

_server.rb_ 에서 콜백에서 수행해야 하는 작업을 지정하는 경로를 추가합니다.

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

앱 인증에 성공하면 {% data variables.product.product_name %}에서 임시 `code` 값을 제공합니다.
`access_token`을 대신하여 이 코드를 {% data variables.product.product_name %}에 다시 게시(`POST`)해야 합니다.
GET 및 POST HTTP 요청을 간소화하기 위해 [rest-client][REST Client]를 사용하고 있습니다.
아마도 REST를 통해 API에 액세스하지 못할 수 있습니다. 더 심각한 애플리케이션의 경우 [선택한 언어로 작성된 라이브러리][libraries]를 사용해야 합니다.

### 부여된 범위 확인

사용자는 URL을 직접 변경하여 요청한 범위를 편집할 수 있습니다. 이렇게 하면 원래 요청한 것보다 적은 액세스 권한을 애플리케이션에 부여할 수 있습니다. 토큰을 사용하여 요청하기 전에 사용자가 토큰에 대해 부여한 범위를 확인합니다. 요청된 범위 및 부여된 범위에 대한 자세한 내용은 "[OAuth 앱에 대한 범위](/developers/apps/scopes-for-oauth-apps#requested-scopes-and-granted-scopes)"를 참조하세요.

부여된 범위는 토큰 교환에서 응답의 일부로 반환됩니다.

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

이 애플리케이션에서는 `scopes.include?`를 사용하여 인증된 사용자의 프라이빗 이메일 주소를 가져오는 데 필요한 `user:email` 범위가 부여되었는지 확인합니다. 애플리케이션에서 다른 범위를 요청한 경우 해당 범위도 확인했을 것입니다.

또한 범위 간에 계층적 관계가 있으므로 가장 낮은 수준의 필수 범위가 부여되었는지 확인해야 합니다. 예를 들어 애플리케이션에서 `user` 범위를 요청한 경우 `user:email` 범위만 부여되었을 수 있습니다. 이 경우 요청한 범위가 애플리케이션에 부여되지 않았지만 부여된 범위는 여전히 충분했을 것입니다.

사용자가 확인과 실제 요청 간에 범위를 변경할 수 있으므로 요청하기 전에만 범위를 확인하는 것만으로는 충분하지 않습니다.
이 경우 성공할 것으로 예상되는 API 호출에서 `404` 또는 `401` 상태와 함께 실패하거나 정보의 다른 하위 집합을 반환할 수 있습니다.

이러한 상황을 정상적으로 처리할 수 있도록 유효한 토큰을 사용하여 만든 요청에 대한 모든 API 응답에는 [`X-OAuth-Scopes` 헤더][oauth scopes]도 포함됩니다.
이 헤더에는 요청을 만드는 데 사용된 토큰의 범위 목록이 포함되어 있습니다. 그 외에도 OAuth 애플리케이션 API는 {% ifversion fpt or ghes or ghec %} [토큰 유효성 검사](/rest/reference/apps#check-a-token){% else %}[토큰 유효성 검사](/rest/reference/apps#check-an-authorization){% endif %}에 대한 엔드포인트를 제공합니다.
이 정보를 사용하여 토큰 범위의 변경 내용을 검색하고 사용 가능한 애플리케이션 기능의 변경 내용을 사용자에게 알립니다.

### 인증된 요청 만들기

마지막으로 이 액세스 토큰을 사용하면 로그인한 사용자로 인증된 요청을 할 수 있습니다.

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

결과를 사용하여 원하는 작업이 무엇이든 모두 수행할 수 있습니다. 이 경우 _basic.erb_ 로 바로 덤프합니다.

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

## "영구적" 인증 구현

사용자가 웹 페이지에 액세스해야 할 때마다 앱에 로그인해야 하는 경우 이는 매우 나쁜 모델일 수 있습니다. 예를 들어 `http://127.0.0.1:4567/basic`으로 직접 이동하려고 시도합니다. 오류가 발생합니다.

"여기를 클릭" 프로세스 전체를 우회할 수 있고 사용자가 {% data variables.product.product_name %}에 로그인하는 한 이 애플리케이션에 액세스할 수 있어야 한다는 점을 _기억_ 할 수 있다면 어떨까요? ? _이것이 바로 수행할 작업_ 이므로 꼭 붙들고 있어야 합니다.

위의 작은 서버는 다소 간단합니다. 일부 인텔리전트 인증에 쐐기를 박기 위해 세션을 토큰 저장에 사용하도록 전환하겠습니다.
이렇게 하면 인증이 사용자에게 투명해집니다.

또한 범위를 세션 내에서 유지하므로 사용자가 범위를 확인한 후 범위를 업데이트하거나 토큰을 철회하는 경우를 처리해야 합니다. 이렇게 하려면 `rescue` 블록을 사용하고 토큰이 여전히 유효한지 확인하는 첫 번째 API 호출이 성공했는지 확인합니다. 그런 다음, `X-OAuth-Scopes` 응답 헤더를 확인하여 사용자가 `user:email` 범위를 철회하지 않았는지 확인합니다.

_advanced_server.rb_ 라는 파일을 만들고, 다음 줄을 이 파일에 붙여넣습니다.

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

대부분의 코드가 친숙해 보일 것입니다. 예를 들어 여전히 `RestClient.get`을 계속 사용하여 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API를 호출하고 있고, 여전히 ERB 템플릿(이번에는 `advanced.erb`라고 함)에서 렌더링되도록 결과를 전달하고 있습니다.

또한 이제 사용자가 이미 인증되었는지 확인하는 `authenticated?` 메서드가 있습니다. 그렇지 않은 경우 OAuth 흐름을 수행하고 세션을 부여된 토큰 및 범위로 업데이트하는 `authenticate!` 메서드가 호출됩니다.

다음으로, _보기_ 에서 _advanced.erb_ 라는 파일을 만들고, 다음 태그를 이 파일에 붙여넣습니다.

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

명령줄에서 `4567` 포트에서 서버를 시작하는 `ruby advanced_server.rb`를 호출합니다. 이는 간단한 Sinatra 앱이 있을 때 사용한 것과 동일한 포트입니다.
`http://127.0.0.1:4567`로 이동하면 앱에서 `authenticate!`를 호출하여 `/callback`으로 리디렉션합니다. 그런 다음, `/callback`에서 다시 `/`로 보내고, 인증되었으므로 _advanced.erb_ 를 렌더링합니다.

{% data variables.product.product_name %}의 콜백 URL을 `/`로 변경하기만 하면 이 왕복 라우팅을 완전히 간소화할 수 있습니다. 그러나 _server.rb_ 및 _advanced.rb_ 에서 모두 동일한 콜백 URL을 사용하므로 약간의 멋진 작업을 수행하여 작동해야 합니다.

또한 {% data variables.product.product_name %} 데이터에 액세스할 수 있는 권한을 이 애플리케이션에 부여한 적이 없는 경우 이전 팝업에서 동일한 확인 대화 상자를 보고 경고를 받았을 것입니다.

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
