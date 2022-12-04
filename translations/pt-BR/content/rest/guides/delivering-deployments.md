---
title: Entregar implantações
intro: 'Ao usar a API RESt de implantações, você pode criar ferramentas personalizadas que interagem com seu servidor e um aplicativo de terceiros.'
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
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/04/2022
ms.locfileid: '148132977'
---
A [API de Implantações][deploy API] fornece aos seus projetos hospedados no {% data variables.product.product_name %} a capacidade de iniciá-los em um servidor do qual você é o proprietário. Quando ela é combinada com [a API de Status][status API], você pode coordenar suas implantações no momento em que o código chega ao branch padrão.

Este guia usará a API para demonstrar uma configuração que você pode usar.
No nosso cenário, iremos:

* Fazer merge de um pull request.
* Quando a CI terminar, definiremos o status do pull request.
* Quando o pull request for mesclado, executaremos a nossa implantação no nosso servidor.

O nosso sistema de CI e servidor de hospedagem serão imaginários. Eles podem ser o Heroku, o Amazon ou qualquer outro completamente diferente. O aspecto fundamental deste guia será configurar o servidor que gerencia a comunicação.

Caso ainda não tenha feito isso, [baixe o `ngrok`][ngrok] e saiba como [usá-lo][using ngrok]. Ele é uma ferramenta muito útil para expor aplicativos locais à Internet.

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
O webhook deve ser configurado para ser acionado sempre que um pull request for criado ou mesclado.
Vá em frente e crie um repositório com o qual você esteja confortável para fazer testes. Podemos sugerir [o repositório do Spoon/do Knife de @octocat](https://github.com/octocat/Spoon-Knife)?
Depois disso, você criará um webhook no repositório, alimentando-o com a URL que foi fornecida por `ngrok` e escolhendo `application/x-www-form-urlencoded` como o tipo de conteúdo:

![Uma nova URL do ngrok](/assets/images/webhook_sample_url.png)

Clique em **Atualizar webhook**. Você verá a resposta de corpo `Well, it worked!`.
Ótimo! Clique em **Deixe-me selecionar eventos individuais** e selecione o seguinte:

* Implantação
* Status da Implantação
* Pull Request

Esses são os eventos que o {% data variables.product.product_name %} enviará ao nosso servidor sempre que ocorrer a ação relevante. Vamos configurar nosso servidor para *apenas* tratar as solicitações de pull quando elas forem mescladas agora:

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

O que está havendo? Cada evento que o {% data variables.product.product_name %} envia anexa um cabeçalho HTTP `X-GitHub-Event`. Por enquanto, nos importaremos apenas com os eventos do PR. Quando uma solicitação de pull for mesclada (o estado dela é `closed`, e `merged` é `true`), iniciaremos uma implantação.

Para testar esta prova de conceito, faça algumas alterações em um branch no repositório de teste, abra uma solicitação de pull e mescle-a. Seu servidor deve responder de acordo!

## Trabalhando com implantações

Como o servidor implementado, o código sendo revisado e a solicitação de pull mesclada, queremos implantar nosso projeto.

Vamos começar modificando o ouvinte de evento para processar as solicitações de pull quando elas forem mescladas e começar a prestar atenção às implantações:

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

Com base nas informações da solicitação de pull, começaremos preenchendo o método `start_deployment`:

``` ruby
def start_deployment(pull_request)
  user = pull_request['user']['login']
  payload = JSON.generate(:environment => 'production', :deploy_user => user)
  @client.create_deployment(pull_request['head']['repo']['full_name'], pull_request['head']['sha'], {:payload => payload, :description => "Deploying my sweet branch"})
end
```

As implantações podem ter alguns metadados anexados na forma de um `payload` e uma `description`. Embora esses valores sejam opcionais, é útil usá-los para registrar em log e representar informações.

Quando uma nova implantação é criada, um evento completamente separado é acionado. É por isso que temos um novo caso `switch` no manipulador de eventos para `deployment`. Você pode usar essas informações para receber uma notificação de quando uma implantação é disparada.

As implantações podem demorar um pouco. Portanto, vamos precisar ouvir vários eventos, como quando a implantação foi criada e em que estado se ela encontra.

Vamos simular uma implantação que realiza um trabalho e observar o efeito que ela tem na saída. Primeiro, vamos concluir o método `process_deployment`:

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

Por fim, vamos fazer a simulação do armazenamento da informação de status como a saída do console:

``` ruby
def update_deployment_status
  puts "Deployment status for #{@payload['id']} is #{@payload['state']}"
end
```

Vamos dividir o que está acontecendo. Uma nova implantação é criada por `start_deployment`, que dispara o evento `deployment`. Nele, chamamos `process_deployment` para simular o trabalho que está sendo feito. Durante esse processamento, também fazemos uma chamada a `create_deployment_status`, que permite que um destinatário saiba o que está acontecendo, à medida que alternamos o status para `pending`.

Após a conclusão da implantação, definimos o status como `success`.

## Conclusão

No GitHub, há vários anos, usamos uma versão do [Heaven][heaven] para gerenciar nossas implantações. Um fluxo comum é essencialmente o mesmo que o servidor que criamos acima:

* Aguarde uma resposta sobre o estado das verificações de CI (sucesso ou falha)
* Se as verificações forem bem-sucedidas, faça o merge do pull request
* Heaven toma o código mesclado e o implementa nos servidores de teste e produção
* Enquanto isso, o Heaven também notifica todos sobre o build por meio do [Hubot][hubot] sentado nas salas de chat

É isso! Você não precisa criar sua própria configuração de implantação para usar este exemplo.
Você sempre pode contar com as [integrações do GitHub][integrations].

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
