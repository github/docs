---
title: Criar um servidor de CI
intro: Crie o seu próprio sistema CI usando a API de status.
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
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/04/2022
ms.locfileid: '148132944'
---
A [API de Status][status API] é responsável por unir commits a um serviço de teste, de modo que cada push que você efetuar possa ser testado e representado em uma solicitação de pull do {% data variables.product.product_name %}.

Este guia usará a API para demonstrar uma configuração que você pode usar.
No nosso cenário, iremos:

* Executar o nosso conjunto de CI quando um pull request for aberto (iremos definir o status de CI como pendente).
* Quando o CI terminar, definiremos o status do pull request.

O nosso sistema de CI e servidor de hospedagem serão imaginários. Eles podem ser o Travis, o Jenkins ou qualquer outro completamente diferente. O aspecto fundamental deste guia será configurar o servidor que gerencia a comunicação.

Caso ainda não tenha feito isso, [baixe o `ngrok`][ngrok] e aprenda como [usá-lo][using ngrok]. Ele é uma ferramenta muito útil para expor aplicativos locais à Internet.

{% ifversion cli-webhook-forwarding %} {% note %}

**Observação:** como alternativa, é possível usar o encaminhamento de webhook a fim de configurar o ambiente local para receber webhooks. Para saber mais, confira "[Receber webhooks com a CLI do GitHub](/developers/webhooks-and-events/webhooks/receiving-webhooks-with-the-github-cli)".

{% endnote %} {% endif %}

Observação: baixe o código-fonte completo deste projeto [no repositório platform-samples][platform samples].

## Escrever o seu servidor

Vamos escrever um aplicativo rápido do Sinatra para provar que nossas conexões locais estão funcionando.
Vamos começar com isso:

``` ruby
require 'sinatra'
require 'json'

post '/event_handler' do
  payload = JSON.parse(params[:payload])
  "Well, it worked!"
end
```

(Se você não estiver familiarizado com o funcionamento do Sinatra, recomendamos [ler o guia do Sinatra][Sinatra]).

Inicie este servidor. Como o Sinatra é iniciado na porta `4567` por padrão, é recomendado configurar o `ngrok` para começar a ouvir nessa porta também.

Para que esse servidor funcione, precisamos configurar um repositório com um webhook.
O webhook deve ser configurado para ser acionado sempre que um pull request for criado ou mesclada.
Vá em frente e crie um repositório com o qual você esteja confortável para fazer testes. Podemos sugerir [o repositório do Spoon/do Knife de @octocat](https://github.com/octocat/Spoon-Knife)?
Depois disso, você criará um webhook no repositório, alimentando-o com a URL que foi fornecida por `ngrok` e escolhendo `application/x-www-form-urlencoded` como o tipo de conteúdo:

![Uma nova URL do ngrok](/assets/images/webhook_sample_url.png)

Clique em **Atualizar webhook**. Você verá a resposta de corpo `Well, it worked!`.
Ótimo! Clique em **Deixe-me selecionar eventos individuais** e selecione o seguinte:

* Status
* Pull Request

Esses são os eventos que o {% data variables.product.product_name %} enviará ao nosso servidor sempre que ocorrer a ação relevante. Vamos atualizar nosso servidor para *apenas* lidar com o cenário de solicitação de pull agora:

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

O que está havendo? Cada evento que o {% data variables.product.product_name %} envia anexa um cabeçalho HTTP `X-GitHub-Event`. Por enquanto, nos importaremos apenas com os eventos do PR. Daí em diante, usaremos o conteúdo das informações e retornaremos o campo de título. Em um cenário ideal, nosso servidor ficará preocupado com a atualização de cada solicitação de pull, não apenas quando ela é aberta. Isso asseguraria que todos os novos pushes passassem pelos testes de CI.
Mas, para essa demonstração, nós nos preocuparemos quando ela for aberta.

Para testar esta prova de conceito, faça algumas alterações em um branch no repositório de teste e abra uma solicitação de pull. Seu servidor deve responder de acordo!

## Trabalhar com status

Com o servidor implementado, estamos prontos para iniciar nosso primeiro requisito, que é configurar (e atualizar) os status de CI. Observe que, a qualquer momento, você pode clicar em **Entregar novamente** para enviar o mesmo conteúdo. Não há necessidade de fazer uma nova solicitação de pull toda vez que você faz uma alteração.

Como estamos interagindo com os dados da API do {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}, usaremos o [Octokit.rb][octokit.rb] para gerenciar as interações. Esse cliente será configurado com [um {% data variables.product.pat_generic %}][access token]:

``` ruby
# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
ACCESS_TOKEN = ENV['MY_PERSONAL_TOKEN']

before do
  @client ||= Octokit::Client.new(:access_token => ACCESS_TOKEN)
end
```

Em seguida, apenas precisaremos atualizar a solicitação de pull no {% data variables.product.product_name %} para deixar claro que estamos fazendo o processamento na CI:

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

É isso! Daí em diante, você pode executar qualquer processo de que precise para executar o conjunto de testes. Talvez você transmita seu código para o Jenkins ou ligue para outro serviço Web por meio da API, como o [Travis][travis api]. Em seguida, lembre-se de atualizar o status novamente. Em nosso exemplo, vamos apenas defini-lo como `"success"`:

``` ruby
def process_pull_request(pull_request)
  @client.create_status(pull_request['base']['repo']['full_name'], pull_request['head']['sha'], 'pending')
  sleep 2 # do busy work...
  @client.create_status(pull_request['base']['repo']['full_name'], pull_request['head']['sha'], 'success')
  puts "Pull request processed!"
end
``` 

## Conclusão

No GitHub, usamos uma versão do [Janky][janky] para gerenciar a CI por vários anos.
O fluxo básico é essencialmente o mesmo que o servidor que construímos acima.
No GitHub, nós:

* Notificamos tudo ao Jenkins quando um pull request é criado ou atualizado (via Janky)
* Esperamos por uma resposta no estado da CI
* Se o código for verde, fazemos o merge do pull request

Toda esta comunicação é canalizada de volta para nossas salas de bate-papo. Você não precisa criar sua configuração de CI para usar este exemplo.
Você sempre pode contar com as [integrações do GitHub][integrations].

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
