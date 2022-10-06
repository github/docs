---
title: Noções básicas de autenticação
intro: Aprenda sobre as diferentes maneiras de efetuar a autenticação com alguns exemplos.
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
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145126778'
---
Nesta seção, vamos nos concentrar nos fundamentos da autenticação. Especificamente, vamos criar um servidor do Ruby (usando o [Sinatra][Sinatra]) que implementa o [fluxo da Web][webflow] de um aplicativo de várias maneiras diferentes.

{% tip %}

Baixe o código-fonte completo deste projeto [no repositório platform-samples](https://github.com/github/platform-samples/tree/master/api/).

{% endtip %}

## Registrando seu aplicativo

Primeiro, você precisará [registrar seu aplicativo][new oauth app]. Cada aplicativo OAuth registrado recebe uma ID do Cliente e um Segredo do Cliente exclusivos.
O Segredo do Cliente não deve ser compartilhado! Isso inclui a verificação da cadeia de caracteres no repositório.

Você pode preencher cada informação da forma que preferir, exceto a **URL de retorno de chamada de autorização**. Esta é facilmente a parte mais importante da configuração do seu aplicativo. É a URL de retorno de chamada que o {% data variables.product.product_name %} retorna ao usuário após a autenticação bem-sucedida.

Como estamos executando um servidor normal do Sinatra, a localização da instância local está definida como `http://127.0.0.1:4567`. Vamos preencher a URL de retorno de chamada como `http://127.0.0.1:4567/callback`.

## Aceitar a autorização do usuário

{% data reusables.apps.deprecating_auth_with_query_parameters %}

Agora vamos começar a preencher o nosso servidor simples. Crie um arquivo chamado _server.rb_ e cole isto nele:

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

A ID do cliente e as chaves secretas do cliente são obtidas na [página de configuração do aplicativo][app settings].{% ifversion fpt or ghec %} Você **nunca** deve armazenar esses valores no {% data variables.product.product_name %} ou em qualquer outro local público, nesse caso.{% endif %} Recomendamos armazená-los como [variáveis de ambiente][about env vars], que é exatamente o que fizemos aqui.

Em seguida, em _views/index.erb_, cole este conteúdo:

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

(Se você não estiver familiarizado com o funcionamento do Sinatra, recomendamos [ler o guia do Sinatra][Sinatra guide]).

Além disso, observe que a URL usa o parâmetro de consulta `scope` para definir os [escopos][oauth scopes] solicitados pelo aplicativo. Para nosso aplicativo, estamos solicitando o escopo `user:email` para ler endereços de email particulares.

Acesse `http://127.0.0.1:4567` no navegador. Depois de clicar no link, você será direcionado para o {% data variables.product.product_name %} e verá uma caixa de diálogo que se parece com esta: ![Prompt do OAuth no GitHub](/assets/images/oauth_prompt.png)

Se você confiar em si mesmo, clique em **Autorizar Aplicativo**. Ah ha! O Sinatra gera um erro `404`. O que está acontecendo?!

Bem, lembre-se de quando especificamos uma URL de retorno de chamada como `callback`? Não fornecemos uma rota para ela. Portanto o {% data variables.product.product_name %} não sabe em que local deixar o usuário depois que ele autorizar o aplicativo. Vamos consertar isso agora!

### Fornecer um retorno de chamada

Em _server.rb_, adicione uma rota para especificar o que o retorno de chamada deve fazer:

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

Após uma autenticação de aplicativo bem-sucedida, o {% data variables.product.product_name %} fornece um valor `code` temporário.
Você precisará fazer `POST` desse código novamente para o {% data variables.product.product_name %} em troca de um `access_token`.
Para simplificar as solicitações HTTP GET e POST, estamos usando o [cliente REST][REST Client].
Observe que você provavelmente nunca terá acesso à API através de REST. Para uma aplicação mais séria, provavelmente, você deve usar [uma biblioteca escrita na sua linguagem preferida][libraries].

### Verificar os escopos concedidos

Os usuários podem editar os escopos que você solicitou alterando diretamente a URL. Isso pode conceder ao seu aplicativo menos acesso do que o que você solicitou originalmente. Antes de fazer qualquer solicitação com o token, verifique os escopos que foram concedidos para o token pelo usuário. Para obter mais informações sobre os escopos solicitados e concedidos, confira "[Escopos para Aplicativos OAuth](/developers/apps/scopes-for-oauth-apps#requested-scopes-and-granted-scopes)".

Os escopos que foram concedidos são retornados como parte da resposta da troca de um token.

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

No aplicativo, estamos usando `scopes.include?` para verificar se recebemos o escopo `user:email` necessário para buscar os endereços de email particulares do usuário autenticado. Se o aplicativo tivesse solicitado outros escopos, nós os teríamos verificado também.

Além disso, como existe uma relação hierárquica entre os escopos, você deve verificar se recebeu o nível mais baixo dos escopos necessários. Por exemplo, se o aplicativo tiver solicitado o escopo `user`, ele poderá ter recebido apenas o escopo `user:email`. Nesse caso, o aplicativo não teria sido concedido o que solicitou, mas os escopos concedidos ainda seriam suficientes.

A verificação de escopos apenas antes das solicitações não é suficiente, pois é possível que os usuários mudem os escopos entre a sua verificação e a solicitação real.
Caso isso aconteça, as chamadas à API que você espera que sejam bem-sucedidas podem falhar com o status `404` ou `401` ou retornar um subconjunto diferente de informações.

Para ajudar você a lidar com essas situações normalmente, todas as respostas da API para solicitações feitas com tokens válidos também contêm um [cabeçalho `X-OAuth-Scopes`][oauth scopes].
Esse cabeçalho contém a lista de escopos do token que foi usado para fazer a solicitação. Além disso, a API de Aplicativos OAuth fornece um ponto de extremidade para {% ifversion fpt or ghes or ghec %} [verificar um token quanto à validade](/rest/reference/apps#check-a-token){% else %}[verificar um token quanto à validade](/rest/reference/apps#check-an-authorization){% endif %}.
Use essas informações para detectar alterações no escopo do token e informar seus usuários sobre mudanças nas funcionalidades do aplicativo disponível.

### Fazer solicitações autenticadas

Finalmente, com esse token de acesso, você poderá fazer solicitações autenticadas como o usuário conectado:

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

Podemos fazer o que quisermos com os nossos resultados. Nesse caso, vamos simplesmente descartá-los diretamente no _basic.erb_:

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

## Implementar autenticação "persistente"

Esse seria um modelo muito ruim se exigíssemos que os usuários se conectassem ao aplicativo todas as vezes que eles precisassem acessar a página da Web. Por exemplo, experimente navegar diretamente até `http://127.0.0.1:4567/basic`. Você receberá uma mensagem de erro.

E se pudéssemos contornar todo o processo de "clique aqui" e apenas nos _lembrarmos_ de que, desde que o usuário estivesse conectado ao {% data variables.product.product_name %}, ele poderia acessar esse aplicativo? Espere um pouco, porque _isso é exatamente o que vamos fazer_.

Nosso pequeno servidor acima é bastante simples. Para inserir um tipo de autenticação inteligente, vamos alternar para o uso de sessões para armazenar tokens.
Isto tornará a autenticação transparente para o usuário.

Além disso, como estamos persistindo escopos na sessão, precisaremos lidar com os casos em que o usuário atualiza os escopos depois de verificá-los ou revoga o token. Para fazer isso, usaremos um bloco `rescue` e verificaremos se a primeira chamada à API foi bem-sucedida, o que verifica se o token ainda é válido. Depois disso, verificaremos o cabeçalho de resposta `X-OAuth-Scopes` para ver se o usuário não revogou o escopo `user:email`.

Crie um arquivo chamado _advanced_server.rb_ e cole estas linhas nele:

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

Grande parte do código deve parecer familiar. Por exemplo, ainda estamos usando o `RestClient.get` para chamar a API do {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} e ainda estamos transmitindo os resultados para serem renderizados em um modelo ERB (desta vez, chamado `advanced.erb`).

Além disso, agora temos o método `authenticated?` que verifica se o usuário já está autenticado. Caso não esteja, o método `authenticate!` é chamado, que executa o fluxo do OAuth e atualiza a sessão com o token e os escopos concedidos.

Em seguida, crie um arquivo em _views_ chamado _advanced.erb_ e cole esta marcação nele:

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

Na linha de comando, chame `ruby advanced_server.rb`, o que inicia o servidor na porta `4567`, a mesma porta que usamos quando tínhamos um aplicativo simples do Sinatra.
Quando você navega até `http://127.0.0.1:4567`, o aplicativo chama `authenticate!`, que redireciona você para `/callback`. Em seguida, `/callback` nos envia novamente para `/`, e como fomos autenticados, ele renderiza _advanced.erb_.

Podemos simplificar por completo este roteamento de ida e volta apenas alterando a URL de retorno de chamada no {% data variables.product.product_name %} para `/`. No entanto, como _server.rb_ e _advanced.rb_ dependem da mesma URL de retorno de chamada, precisamos fazer alguns outros ajustes para que isso funcione.

Além disso, se nunca tivéssemos autorizado este aplicativo a acessar nossos dados do {% data variables.product.product_name %}, teríamos visto a mesma caixa de diálogo de confirmação do pop-up anterior para nos avisar.

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
