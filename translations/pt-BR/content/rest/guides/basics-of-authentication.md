---
title: Fundamentos da autenticação
intro: Aprenda sobre as diferentes maneiras de efetuar a autenticação com alguns exemplos.
redirect_from:
  - /guides/basics-of-authentication
  - /v3/guides/basics-of-authentication
  - /rest/basics-of-authentication
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---


Nesta seção, vamos nos concentrar nos fundamentos da autenticação. Mais especificamente, Vamos criar um servidor no Ruby (usando [Sinatra][Sinatra]) que implementa o [fluxo web][webflow] de um aplicativo de várias maneiras diferentes.

{% tip %}

Você pode fazer o download do código-fonte completo para este projeto[no repositório de amostra de plataforma](https://github.com/github/platform-samples/tree/master/api/).

{% endtip %}

### Registrar seu aplicativo

Primeiro, você precisará [registrar o seu aplicativo][new oauth app]. A cada aplicativo OAuth registrado recebe um ID de Cliente único e um Segredo de Cliente. O Segredo do Cliente não deve ser compartilhado! Isso inclui verificar o string de caracteres no seu repositório.

Você pode preencher cada informação da forma que preferir, exceto a **URL de chamada de retorno de autorização**. Esta é facilmente a parte mais importante para configurar o seu aplicativo. É a URL de chamada de retorno que o {% data variables.product.product_name %} retorna ao usuário após a autenticação bem-sucedida.

Como estamos executando um servidor regular Sinatra, a localidade da instância local está definido como `http://localhost:4567`. Vamos preencher a URL de chamada de retorno como `http://localhost:4567/callback`.

### Aceitar a autorização do usuário

{% data reusables.apps.deprecating_auth_with_query_parameters %}

Agora vamos começar a preencher o nosso servidor simples. Crie um arquivo denominado _server.rb_ e cole-o em:

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

O seu ID de cliente e as chaves secretas de cliente vêm da [página de configuração do seu aplicativo][app settings].
{% if currentVersion == "free-pro-team@latest" %} Você **nunca, __** deve armazenar esses valores em
{% data variables.product.product_name %}--ou qualquer outro lugar público, para essa questão.{% endif %}Recomendamos armazená-los como
[Variáveis de ambiente][about env vars]--que é exatamente o que fizemos aqui.

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
      We're going to now talk to the GitHub API. Pronto?
      <a href="https://github.com/login/oauth/authorize?scope=user:email&client_id=<%= client_id %>">Click here</a> to begin!</a>
    </p>
    <p>
      If that link doesn't work, remember to provide your own <a href="/apps/building-oauth-apps/authorizing-oauth-apps/">Client ID</a>!
    </p>
  </body>
</html>
```

(Se você não estiver familiarizado com a forma como Sinatra funciona, recomendamos [a leitura do guia do Sinatra][Sinatra guide].)

Observe também que a URL usa o parâmetro da consulta do `escopo` para definir os [escopos][oauth scopes] solicitados pelo aplicativo. Para o nosso aplicativo, estamos solicitando o escopo `user:email` para ler endereços de e-mail privados.

Acesse, a partir do seu navegador, `http://localhost:4567`. Depois de clicar no link, você será direcionado para {% data variables.product.product_name %} e visualizará uma caixa de diálogo que se parece com isso: ![Diálogo do GitHub's OAuth](/assets/images/oauth_prompt.png)

Se você confiar em você, clique em **Autorizar aplicativo**. Ah ha! O Sinatra envia um erro `404`. O que está acontecendo?!

Bem, lembre-se de quando especificamos uma URL de retorno de chamada para ser `retorno de chamada`? Não fornecemos um encaminhamento para isso. Portanto o {% data variables.product.product_name %} não sabe onde soltar o usuário depois que ele autorizar o aplicativo. Vamos consertar isso agora!

#### Fornecer um retorno de chamada

Em _server.rb_, adicione um encaminhamento para especificar o que o retorno de chamada deve fazer:

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

Após uma autenticação de aplicativo bem-sucedida, o {% data variables.product.product_name %} fornecerá um valor `temporário de código`. Você precisará fazer `POST` deste código de volta para {% data variables.product.product_name %} em troca de um `access_token`. Para simplificar nossas solicitações HTTP de GET e POST, estamos usando o [rest-client][REST Client]. Observe que você provavelmente nunca terá acesso à API através de REST. Para aplicar de modo mais sério, você deve provavelmente usar [uma biblioteca escrita na sua linguagem preferida][libraries].

#### Verificar os escopos concedidos

Os usuários podem editar os escopos que você solicitou alterando diretamente a URL. Isso pode conceder ao seu aplicativo menos acesso do que o que você solicitou originalmente. Antes de fazer qualquer solicitação com o token, verifique os escopos que foram concedidos para o token pelo usuário. Para obter mais informações sobre escopos solicitados e concedidos, consulte "[Escopos para aplicativos OAuth](/developers/apps/scopes-for-oauth-apps#requested-scopes-and-granted-scopes)".

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

No nosso aplicativo, estamos usando `scopes.include?` para verificar se recebemos o escopo de`user:email` necessário para obter os endereços de e-mail privado do usuário autenticado. Se o aplicativo tivesse solicitado outros escopos, nós teríamos verificado isso também.

Além disso, uma vez que existe uma relação hierárquica entre os escopos, você deve verificar se você recebeu o nível mais baixo dos escopos necessários. Por exemplo, se o aplicativo tivesse solicitado o escopo `usuário`, ele pode ter recebido apenas o escopo `user:email`. Nesse caso, o aplicativo não teria sido concedido o que pediu, mas os escopos concedidos ainda seriam suficientes.

Verificar escopos apenas antes de fazer solicitações não é suficiente, já que é possível que os usuários mudem os escopos entre a sua verificação e a solicitação real. Caso isso aconteça, as chamadas par a API que você espera ter sucesso podem falhar com o status `404` ou `401` ou retornar um subconjunto diferente de informações.

Para ajudá-lo a gerenciar essas situações facilmente, todas as respostas da API para solicitações feitas com tokens válidos também contêm um [`cabeçalho de ` X-OAuth-Scopes][oauth scopes]. Este cabeçalho contém a lista de escopos do token que foi usado para fazer a solicitação. Além disso, a API de aplicativos OAuth fornece um ponto de extremidade para {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} \[verifique se há validade de um token\]\[/rest/reference/apps#check-a-token\]{% else %}\[verifique se há validade de um token\]\[/rest/reference/apps#check-an-authorization\]{% endif %}. Use esta informação para detectar alterações no escopo do token e informar os seus usuários sobre mudanças nas funcionalidades do aplicativo disponível.

#### Fazer solicitações autenticadas

Finalmente, com esse token de acesso, você será capaz de fazer solicitações autenticadas como o usuário conectado:

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

### Implementar autenticação "persistente"

Seria um modelo muito ruim se exigíssemos que os usuários se conectassem ao aplicativo todas as vezes que eles precisassem para acessar a página web. Por exemplo, tente acessar diretamente `http://localhost:4567/basic`. Você receberá uma mensagem de erro.

E se pudéssemos contornar todo o processo de "clique aqui", e apenas _lembrar-se_ disso, enquanto o usuário estiver conectado
{% data variables.product.product_name %}, devem conseguir acessar este aplicativo? Espere um pouco,
porque _é exatamente o que vamos fazer_.

Nosso pequeno servidor acima é bastante simples. Para inserir um tipo de autenticação inteligente, vamos alternar para o uso de sessões para armazenar tokens. Isto tornará a autenticação transparente para o usuário.

Além disso, já que estamos fazendo persistir escopos dentro da sessão, precisaremos lidar com casos quando o usuário atualiza os escopos depois de verificá-los ou quando o token for revogado. Para fazer isso, usaremos um bloco de `resgate` e verificaremos se a primeira chamada da API foi bem-sucedida, que verifica se o token ainda é válido. Depois disso, vamos verificar o cabeçalho de resposta do `X-OAuth-Scopes` para verificar se o usuário não revogou o escopo `user:email`.

Crie um arquivo denominado _advanced_server.rb_ e cole essas linhas em:

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

Grande parte do código deve parecer familiar. Por exemplo, ainda estamos usando o `RestClient.get` para chamar para a API do {% data variables.product.product_name %}, e ainda estamos passando nossos resultados para serem interpretados em um modelo de ERB (dessa vez, ele é denominado `advanced.erb`).

Além disso, agora temos o método `authenticated?` que verifica se o usuário já está autenticado. Caso não esteja, chama-se o método `authenticate!`, que executa o fluxo do OAuth e atualiza a sessão com o token e escopos concedidos.

Em seguida, crie um arquivo em _views_ denominado _advanced.erb_, e cole este markup nele:

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

A partir da linha de comando, chame `ruby advanced_server.rb`, que inicia o seu servidor na porta `4567` -- a mesma porta que usamos quando tínhamos um aplicativo Sinatra simples. Ao acessar `http://localhost:4567`, o aplicativo chama `authenticate!`, que redireciona você para `/callback`. Em seguida, `/callback` nos envia de volta para `/`, e, já que fomos autenticados, interpreta _advanced.erb_.

Nós poderíamos simplificar completamente este encaminhamento de ida e volta simplesmente mudando a nossa URL de chamada de retorno em {% data variables.product.product_name %} para `/`. No entanto, uma vez que _server.rb_ e _advanced.rb_ dependem da mesma URL de chamada de retorno, temos que fazer um pouco mais de ajuste para que funcione.

Além disso, se nunca tivéssemos autorizado este aplicativo a acessar nossos dados de {% data variables.product.product_name %}, teríamos visto o mesmo diálogo de confirmação em um pop-up anterior para nos avisar.

[webflow]: /apps/building-oauth-apps/authorizing-oauth-apps/
[Sinatra]: http://www.sinatrarb.com/
[about env vars]: http://en.wikipedia.org/wiki/Environment_variable#Getting_and_setting_environment_variables
[Sinatra guide]: https://github.com/sinatra/sinatra-book/blob/master/book/Introduction.markdown#hello-world-application
[REST Client]: https://github.com/archiloque/rest-client
[libraries]: /libraries/
[oauth scopes]: /apps/building-oauth-apps/understanding-scopes-for-oauth-apps/
[oauth scopes]: /apps/building-oauth-apps/understanding-scopes-for-oauth-apps/
[new oauth app]: https://github.com/settings/applications/new
[app settings]: https://github.com/settings/developers
