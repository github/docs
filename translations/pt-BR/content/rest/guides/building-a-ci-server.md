---
title: Criar um servidor de CI
intro: Crie o seu próprio sistema CI usando a API de status.
redirect_from:
  - /guides/building-a-ci-server/
  - /v3/guides/building-a-ci-server
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---



A [API de Status][status API] é responsável por unir commits com um serviço de teste. para que cada push que você fizer possa ser testado e representado em um pull request do {% data variables.product.product_name %}.

Este guia usará a API para demonstrar uma configuração que você pode usar. No nosso cenário, iremos:

* Executar o nosso conjunto de CI quando um pull request for aberto (iremos definir o status de CI como pendente).
* Quando o CI terminar, definiremos o status do pull request.

O nosso sistema de CI e servidor de hospedagem serão imaginários. Eles podem ser Travis, Jenkins, ou qualquer outra coisa completamente diferente. O principal deste guia será criar e configurar o servidor de gerenciamento da comunicação.

Se você ainda não tiver, certifique-se de [fazer o download do ngrok][ngrok]e aprender como [usá-lo][using ngrok]. Nós achamos que é uma ferramenta muito útil para expor conexões locais.

Observação: você pode baixar o código-fonte completo para este projeto [no repositório de amostra de plataforma][platform samples].

### Escrever o seu servidor

Vamos escrever um aplicativo rápido do Sinatra para provar que nossas conexões locais estão funcionando. Vamos começar com isso:

``` ruby
require 'sinatra'
require 'json'

post '/event_handler' do
  payload = JSON.parse(params[:payload])
  "Well, it worked!"
end
```

(Se você não estiver familiarizado com a forma como Sinatra funciona, recomendamos [a leitura do guia do Sinatra][Sinatra].)

Inicie este servidor. Por padrão, o Sinatra começa na porta `4567`. Portanto, você deverá configurar o ngrok para começar a ouvir isso também.

Para que esse servidor funcione, precisamos configurar um repositório com um webhook. O webhook deve ser configurado para ser acionado sempre que um pull request for criado ou mesclada. Vá em frente e crie um repositório com o qual você esteja confortável para fazer testes. Podemos sugerir [@octocat's Spoon/Knife repository](https://github.com/octocat/Spoon-Knife)? Em seguida, você criará um novo webhook no seu repositório, alimentando-o com a URL que o ngrok forneceu a você e escolhendo `application/x-www-form-urlencoded` como o tipo de conteúdo:

![Uma nova URL do ngrok](/assets/images/webhook_sample_url.png)

Clique em **Update webhook** (Atualizar webhook). Você deve ver uma resposta de texto de `Well, it worked!`. Ótimo! Clique em **Permita-me selecionar eventos individuais**e selecione o seguinte:

* Status
* Pull Request

Esses são os eventos que {% data variables.product.product_name %} serão enviados ao nosso servidor sempre que ocorrer a ação relevante. Vamos atualizar nosso servidor para *apenas* lidar com o cenário de pull request agora:

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

O que está acontecendo? Cada evento que {% data variables.product.product_name %} envia, anexa um cabeçalho de HTTP de `X-GitHub-Event`. Por enquanto, nos importaremos apenas com os eventos do PR. De lá, nós usaremos a carga das informações e retornaremos o campo de título. Em um cenário ideal, nosso servidor ficaria preocupado com cada vez que um pull request é atualizado, e não apenas quando ele é aberto. Isso asseguraria que todos os novos pushes passassem pelos testes de CI. Mas, para essa demonstração, nós nos preocuparemos quando ela for aberta.

Para testar esta prova de conceito, faça algumas alterações em um branch no repositório de teste e abra um pull request. Seu servidor deve responder de acordo!

### Trabalhar com status

Já que configuramos o nosso servidor, estamos prontos para iniciar nosso primeiro requisito, que é configurar (e atualizar) os status de CI. Observe que a sempre que você atualizar o seu servidor, você poderá clicar em **Entregar novamente** para enviar a mesma carga. Não há necessidade de fazer um novo pull request toda vez que você fizer uma alteração!

Uma vez que estamos interagindo com a API de {% data variables.product.product_name %} , usaremos [Octokit.rb][octokit.rb] para gerenciar nossas interações. Vamos configurar esse cliente com

``` ruby
# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
ACCESS_TOKEN = ENV['MY_PERSONAL_TOKEN']

before do
  @client ||= Octokit::Client.new(:access_token => ACCESS_TOKEN)
end
```

Em seguida, vamos precisar atualizar o pull request no {% data variables.product.product_name %} para deixar claro que estamos processando na CI:

``` ruby
def process_pull_request(pull_request)
  puts "Processing pull request..."
  @client.create_status(pull_request['base']['repo']['full_name'], pull_request['head']['sha'], 'pending')
end
```

Aqui, estamos fazendo três coisas muito básicas:

* estamos procurando o nome completo do repositório
* estamos procurando o último SHA do pull request
* estamos definindo o status como "pendente"

Pronto! A partir daqui, você pode executar qualquer processo de que precise para executar o seu conjunto de testes. Talvez você vá passar seu código para o Jenkins, ou chamar em outro serviço da web através da sua API, como [Travis][travis api]. Em seguida, certifique-se de atualizar o status novamente. No nosso exemplo, vamos definir isso como`"sucesso"`:

``` ruby
def process_pull_request(pull_request)
  @client.create_status(pull_request['base']['repo']['full_name'], pull_request['head']['sha'], 'pending')
  sleep 2 # do busy work...
  @client.create_status(pull_request['base']['repo']['full_name'], pull_request['head']['sha'], 'success')
  puts "Pull request processed!"
end
```

### Conclusão

No GitHub, usamos uma versão do [Janky][janky] para gerenciar a nossa CI durante anos. O fluxo básico é essencialmente o mesmo que o servidor que construímos acima. No GitHub, nós:

* Notificamos tudo ao Jenkins quando um pull request é criado ou atualizado (via Janky)
* Esperamos por uma resposta no estado da CI
* Se o código for verde, fazemos o merge do pull request

Toda esta comunicação é canalizada de volta para nossas salas de bate-papo. Você não precisa construir sua própria configuração de CI para usar este exemplo. Você sempre pode confiar nas[Integrações do GitHub][integrations].

[status API]: /rest/reference/repos#statuses
[ngrok]: https://ngrok.com/
[using ngrok]: /webhooks/configuring/#using-ngrok
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/building-a-ci-server
[Sinatra]: http://www.sinatrarb.com/
[octokit.rb]: https://github.com/octokit/octokit.rb
[travis api]: https://api.travis-ci.org/docs/
[janky]: https://github.com/github/janky
[integrations]: https://github.com/integrations
