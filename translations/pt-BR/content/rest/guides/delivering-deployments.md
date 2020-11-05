---
title: Entregar implantações
intro: 'Ao usar a API RESt de implantações, você pode criar ferramentas personalizadas que interagem com seu servidor e um aplicativo de terceiros.'
redirect_from:
  - /guides/delivering-deployments/
  - /guides/automating-deployments-to-integrators/
  - /v3/guides/delivering-deployments
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
 
  

A [API de Implantações][deploy API] fornece seus projetos hospedados em {% data variables.product.product_name %} com a capacidade de lançá-los em um servidor do qual você é proprietário. Combinado com [a API de Status][status API], você será capaz de coordenar suas implantações no momento em que seu código chegar ao branch-padrão.

Este guia usará a API para demonstrar uma configuração que você pode usar. No nosso cenário, iremos:

* Fazer merge de um pull request
* Quando a CI terminar, definiremos o status do pull request.
* Quando o pull request for mesclado, executaremos a nossa implantação no nosso servidor.

O nosso sistema de CI e servidor de hospedagem serão imaginários. Eles podem ser Heroku, Amazon, ou qualquer outra coisa completamente diferente. O principal deste guia será criar e configurar o servidor de gerenciamento da comunicação.

Se você ainda não tiver, certifique-se de [fazer o download do ngrok][ngrok] e aprender como [usá-lo][using ngrok]. Nós achamos que é uma ferramenta muito útil para expor conexões locais.

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

Para que esse servidor funcione, precisamos configurar um repositório com um webhook. O webhook deve ser configurado para ser acionado sempre que um pull request for criado ou mesclado. Vá em frente e crie um repositório com o qual você esteja confortável para fazer testes. Podemos sugerir [@octocat's Spoon/Knife repository](https://github.com/octocat/Spoon-Knife)? Em seguida, você criará um novo webhook no seu repositório, alimentando-o com a URL que o ngrok forneceu a você e escolhendo `application/x-www-form-urlencoded` como o tipo de conteúdo:

![Uma nova URL do ngrok](/assets/images/webhook_sample_url.png)

Clique em **Update webhook** (Atualizar webhook). Você deve ver uma resposta de texto de `Well, it worked!`. Ótimo! Clique em **Permita-me selecionar eventos individuais** e selecione o seguinte:

* Implantação
* Status da implantação
* Pull Request

Esses são os eventos que {% data variables.product.product_name %} serão enviados ao nosso servidor sempre que ocorrer a ação relevante. Vamos configurar nosso servidor para o manipular *apenas* quando pull requests forem mesclados neste momento:

``` ruby
post '/event_handler' do
  @payload = JSON.parse(params[:payload])

  case request.env['HTTP_X_GITHUB_EVENT']
  when "pull_request"
    if @payload["action"] == "closed" && @payload["pull_request"]["merged"]
      puts "A pull request was merged! Uma implantação deve começar agora..."
    end
  end
end
```

O que está acontecendo? Cada evento que {% data variables.product.product_name %} envia, anexa um cabeçalho de HTTP de `X-GitHub-Event`. Por enquanto, nos importaremos apenas com os eventos do PR. Quando um pull request é mesclado (seu estado é `fechado` e `mesclado` é `verdadeiro`), vamos iniciar uma implantação.

Para testar esta validação de conceito, faça algumas alterações em um branch no repositório de testes, abra um pull request e faça o merge. Seu servidor deve responder de acordo!

### Trabalhando com implantações

Como já temos o servidor configurado, o código que está sendo revisado e nosso pull request mesclado, queremos que nosso projeto seja implantado.

Vamos começar modificando nosso detector de evento para processar pull requests quando tiverem feito merge e começar a prestar atenção às implantações:

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

Com base na informação de uma solicitação, começaremos preenchendo o método `start_deployment`:

``` ruby
def start_deployment(pull_request)
  user = pull_request['user']['login']
  payload = JSON.generate(:environment => 'production', :deploy_user => user)
  @client.create_deployment(pull_request['head']['repo']['full_name'], pull_request['head']['sha'], {:payload => payload, :description => "Deploying my sweet branch"})
end
```

As implantações podem ter alguns metadados anexados, na forma de `carga` e `descrição`. Embora esses valores sejam opcionais, é útil usar para registrar e representar informações.

Quando uma nova implantação é criada, um evento completamente separado é acionado. É por isso que temos um novo caso de `switch` no manipulador de eventos para `implantação`. Você pode usar esta informação para ser notificado quando uma implantação for acionada.

As implantações podem demorar um pouco. Portanto, nós vamos precisar ouvir vários eventos, como quando a implantação foi criada e em que estado se encontra.

Vamos simular uma implantação realize um trabalho e notar o efeito que ela tem na saída. Primeiro, vamos completar nosso método `process_deploy`:

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

Vamos dividir o que está acontecendo. Uma nova implantação é criada por `start_deployment`, que aciona o evento `implantação`. A partir daí, chamamos `process_deployment` para simular o trabalho que está ocorrendo. Durante esse processamento, também fazemos uma chamada para `create_deployment_status`, que permite que um destinatário saiba o que está acontecendo, pois nós alteramos o status para `pendente`.

Após a conclusão da implantação, definimos o status para `sucesso`.

### Conclusão

No GitHub, usamos uma versão do [Heavan][heaven] para gerenciar nossas implantações por anos. O fluxo básico é essencialmente o mesmo que o servidor que construímos acima. No GitHub, nós:

* Esperamos por uma resposta no estado da CI
* Se o código for verde, fazemos o merge do pull request
* O Heaven recebe o código mesclado e o implementa nos nossos servidores de produção e treinamento
* Enquanto isso, o Heaven também notifica todos sobre a criação por meio do [Hubot][hubot] que aguarda nas nossas salas de bate-papo

Pronto! Você não precisa criar sua própria configuração de implantação para usar este exemplo. Você sempre pode confiar nas [Integrações do GitHub][integrations].

[deploy API]: /v3/repos/deployments/
[status API]: /guides/building-a-ci-server
[ngrok]: https://ngrok.com/
[using ngrok]: /webhooks/configuring/#using-ngrok
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/delivering-deployments
[Sinatra]: http://www.sinatrarb.com/
[heaven]: https://github.com/atmos/heaven
[hubot]: https://github.com/github/hubot
[integrations]: https://github.com/integrations
