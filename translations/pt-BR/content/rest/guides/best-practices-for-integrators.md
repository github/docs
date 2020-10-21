---
title: Práticas recomendadas para integradores
intro: 'Crie um aplicativo que interage de forma confiável com a API do {% data variables.product.prodname_dotcom %} e fornece a melhor experiência para seus usuários.'
redirect_from:
  - /guides/best-practices-for-integrators/
  - /v3/guides/best-practices-for-integrators
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---


Interessado em integrar-se à plataforma do GitHub? [Você está em boas mãos](https://github.com/integrations). Este guia ajudará você a construir um aplicativo que fornece a melhor experiência para seus usuários *e* garantir que interaja, de modo confiável, com a API.

### Garante cargas seguras entregues a partir do GitHub

É muito importante que você assegure [as cargas enviadas pelo GitHub][event-types]. Embora nenhuma informação pessoal (como senha) seja transmitida em uma carga, não é bom vazar *quaisquer informações*. Algumas informações que podem ser sensíveis incluem endereços de e-mail do committer ou os nomes de repositórios privados.

Há várias etapas que você pode dar para garantir o recebimento de cargas entregues pelo GitHub:

1. Certifique-se de que seu servidor de recebimento tenha uma conexão HTTPS. Por padrão, o GitHub verificará os certificados SSL ao entregar cargas.{% if currentVersion == "free-pro-team@latest" %}
1. Você pode adicionar [o endereço IP que usamos ao entregar hooks](/github/authenticating-to-github/about-githubs-ip-addresses) à lista de permissões do seu servidor. Para garantir que você esteja sempre verificando o endereço IP correto, você pode [usar o ponto de extremidade `/meta`](/v3/meta/#meta) para encontrar o endereço que utilizamos.{% endif %}
1. Forneça [um token secreto](/webhooks/securing/) para garantir que as cargas estão definitivamente vindo do GitHub. Ao impor um token secreto, você garantirá que todos os dados recebidos pelo seu servidor estejam absolutamente vindo do GitHub. Idealmente, você deve fornecer um token secreto diferente *por usuário* do seu serviço. Dessa forma, se um token for comprometido, nenhum outro usuário será afetado.

### Favoreça o trabalho assíncrono em detrimento do trabalho síncrono

O GitHub espera que as integrações respondam dentro de {% if currentVersion == "free-pro-team@latest" %}10{% else %}30{% endif %} segundos para receber a carga do webhook. Se o seu serviço demorar mais do que isso para ser concluído, o GitHub encerrará a conexão e a carga será perdida.

Como é impossível prever a rapidez com que o seu serviço será concluído, você deve fazer todo o "trabalho real" em um trabalho que atue em segundo plano. [Resque](https://github.com/resque/resque/) (para Ruby), [RQ](http://python-rq.org/) (para Python) ou [RabbitMQ](http://www.rabbitmq.com/) (para Java) são exemplos de bibliotecas que podem lidar com a fila e o processamento de trabalhos em segundo plano.

Observe que mesmo com um trabalho em segundo plano em andamento, o GitHub ainda espera que o seu servidor responda dentro de {% if currentVersion == "free-pro-team@latest" %}dez{% else %}trinta{% endif %} segundos. Seu servidor precisa reconhecer que recebeu a carga enviando algum tipo de resposta. É fundamental que o seu serviço realize qualquer validação em uma carga o mais rápido possível para que você possa relatar com precisão se o seu servidor irá continuar com a solicitação ou não.

### Use códigos de status de HTTP apropriados ao responder ao GitHub

Cada webhook tem sua própria seção de "Entregas Recentes", que lista se uma implantação foi bem-sucedida ou não.

![Vista das entregas recentes](/assets/images/webhooks_recent_deliveries.png)

Você deve usar códigos de status de HTTP apropriados para informar aos usuários. Você pode usar códigos como `201` ou `202` para reconhecer que o recebimento da carga não será processado (por exemplo, uma carga entregue por um branch que não é padrão). Reserve o código de erro `500` para falhas catastróficas.

### Forneça o máximo de informações possível para o usuário

Os usuários podem entrar nas respostas do servidor que você enviar de volta ao GitHub. Certifique-se de que suas mensagens sejam claras e informativas.

![Visualizar uma resposta de carga](/assets/images/payload_response_tab.png)

### Siga qualquer redirecionamento que a API enviar para você

O GitHub é explícito ao informar quando um recurso foi movido, fornecendo um código de estado de redirecionamento. Você deveria seguir estes redirecionamentos. Cada resposta de redirecionamento define o cabeçalho da `Localização` com a nova URI a ser acessada. Se você receber um redirecionamento, é melhor atualizar seu código para seguir a nova URI, caso você esteja solicitando um caminho obsoleto que possamos remover.

Nós fornecemos [uma lista de códigos de status de HTTP](/v3/#http-redirects) que você pode consultar ao projetar o seu aplicativo para seguir redirecionamentos.

### Não analise as URLs manualmente

Muitas vezes, as respostas da API contêm dados na forma de URLs. Por exemplo, ao solicitar um repositório, enviaremos uma chave denominada `clone_url` com uma URL que você pode usar para clonar o repositório.

Para a estabilidade do seu aplicativo, você não deve tentar analisar esses dados ou tentar adivinhar e construir o formato de URLs futuras. Seu app será poderá falhar se decidirmos alterar a URL.

Por exemplo, ao trabalhar com resultados paginados, muitas vezes é tentador construir URLs que anexam `?page=<number>` ao final. Evite essa tentação. [Nosso guia sobre paginação](/guides/traversing-with-pagination) oferece algumas dicas seguras sobre o acompanhamento de resultados paginados de forma dependente.

### Verifique o tipo de evento e a ação antes de processar o evento

Existem vários [tipos de eventos de webhook][event-types], e cada evento pode ter várias ações. À medida que a configuração de recursos do GitHub crescer, adicionaremos, ocasionalmente, novos tipos de evento ou adicionaremos novas ações aos tipos de evento existentes. Certifique-se de que sua aplicação verifica, explicitamente, o tipo e a ação de um evento antes de realizar qualquer processamento de webhook. O cabeçalho de solicitação `X-GitHub-Event` pode ser usado para saber qual evento foi recebido para que o processamento possa ser tratado adequadamente. Da mesma forma, a carga tem uma chave de `ação` de nível superior que pode ser usada para saber qual ação foi tomada no objeto relevante.

Por exemplo, se você configurou um webhook do GitHub para "Envie-me **tudo**", o seu aplicativo começará a receber novos tipos de eventos e ações conforme forem adicionados. Portanto, **não se recomenda usar qualquer tipo de cláusula "else", que recebe tudo**. Veja o código a seguir como exemplo:

```ruby
# Not recommended: a catch-all else clause
def receive
  event_type = request.headers["X-GitHub-Event"]
  payload    = request.body

  case event_type
  when "repository"
    process_repository(payload)
  when "issues"
    process_issues(payload)
  else
    process_pull_requests
  end
end
```

Neste exemplo de código, os métodos `process_repository` e `process_issues` serão corretamente chamados se o evento `repositório` ou `problemas` foi recebido. No entanto, qualquer outro tipo de evento resultaria na chamada de `process_pull_requests`. Uma vez que novos tipos de eventos são adicionados, isso resultaria em comportamento incorreto e novos tipos de eventos seriam processados da mesma forma que um evento `pull_request` seria processado.

Em vez disso, sugerimos que se verifiquem explicitamente os tipos de eventos e que se se tomem as ações de acordo com isso. No exemplo a seguir do código, verificamos, explicitamente, um evento `pull_request` e a cláusula `else` simplesmente registra que recebemos um novo tipo de evento:

```ruby
# Recommended: explicitly check each event type
def receive
  event_type = request.headers["X-GitHub-Event"]
  payload    = JSON.parse(request.body)

  case event_type
  when "repository"
    process_repository(payload)
  when "issues"
    process_issue(payload)
  when "pull_request"
    process_pull_requests(payload)
  else
    puts "Oooh, something new from GitHub: #{event_type}"
  end
end
```

Como cada evento também pode ter várias ações, recomenda-se que as ações sejam verificadas da mesma forma. Por exemplo, o [`IssuesEvent`](/webhooks/event-payloads/#issues) tem várias ações possíveis. Estas incluem `aberto` quando o problema é criado, `fechado` quando o problema é fechado e `atribuído` quando o problema é atribuído a alguém.

Assim como a adição de tipos de evento, podemos adicionar novas ações aos eventos existentes. Portanto, novamente **não se recomenda usar qualquer tipo de cláusula "else" para receber tudo** ao verificar a ação de um evento. Em vez disso, sugerimos que verifique explicitamente as ações de eventos, como fizemos com o tipo de evento. Um exemplo disso parece muito semelhante ao que sugerimos para os tipos de eventos acima:

```ruby
# Recommended: explicitly check each action
def process_issue(payload)
  case payload["action"]
  when "opened"
    process_issue_opened(payload)
  when "assigned"
    process_issue_assigned(payload)
  when "closed"
    process_issue_closed(payload)
  else
    puts "Oooh, something new from GitHub: #{payload["action"]}"
  end
end
```

Neste exemplo, a ação `fechada` é verificada antes de chamar o método `process_closed`. Quaisquer ações não identificadas são registradas para referência futura.

{% if currentVersion == "free-pro-team@latest" %}

### Lidar com limites de taxa

O limite de câmbio da API [do GitHub](/rest/overview/resources-in-the-rest-api#rate-limiting) garante que a API seja rápida e disponível para todos.

Se você atingir um limite de câmbio, espera-se que você recue ao fazer solicitações e tente novamente mais tarde quando for permitido fazer isso. O não cumprimento pode resultar no banimento do seu aplicativo.

Você sempre poderá [verificar o status do seu limite de taxa](/rest/reference/rate-limit) a qualquer momento. Verificar seu limite de taxa não gera nenhum custo para o mesmo.

### Lidar com abuso dos limites de taxa

[Os abusos dos limites da taxa](/rest/overview/resources-in-the-rest-api#abuse-rate-limits) são outra forma de garantir a disponibilidade da API. Para evitar atingir este limite, você deverá certificar-se de que o seu aplicativo segue as diretrizes abaixo.

* Faça solicitações autenticadas, ou use o ID de cliente e segredo do seu aplicativo. Solicitações não autenticadas estão sujeitas a um abuso de limitação da taxa mais agressivo.
* Faça solicitações de um único usuário ou ID de cliente em série. Não faça solicitações para um único usuário ou ID de cliente simultaneamente.
* Se você estiver fazendo um grande número de solicitações `POST`, `PATCH`, `PUT` ou `DELETE` para um único usuário ou ID de cliente, espere pelo menos um segundo entre cada solicitação.
* Ao receber alguma restrição, use o cabeçalho de resposta `Retry-After` para diminuir a velocidade. O valor do cabeçalho `Retry-After` será sempre um inteiro, que representa o número de segundos que você deve esperar antes de fazer solicitações novamente. Por exemplo, `Retry-After: 30` significa que você deve esperar 30 segundos antes de enviar mais solicitações.
* Solicitações que criam conteúdo que acionam notificações, tais como problemas, comentários e pull requests, podem ser ainda mais limitadas e não incluirão um cabeçalho `Retry-After` na resposta. Crie este conteúdo em um ritmo razoável para evitar maiores limitações.

Nos nos reservamos o direito de alterar essas diretrizes, conforme necessário, para garantir a disponibilidade.

{% endif %}

### Lidar com erros da API

Embora o seu código nunca introduzisse um erro, você pode descobrir que encontrou erros sucessivos ao tentar acessar a API.

Ao invés de ignorar os códigos de status repetidos `4xx` e `5xx`, você deverá certificar-se de que você está interagindo corretamente com a API. Por exemplo, se um ponto de extremidade solicitar um string de caracteres e você estiver passando um valor numérico, você receberá um erro de validação de `5xx` e sua chamada não terá sucesso. Da mesma forma, tentar acessar um ponto de extremidade não autorizado ou inexistente, gerará um erro `4xx`.

Ignorar intencionalmente erros de validação repetidos pode resultar na suspensão do seu aplicativo por abuso.

[event-types]: /webhooks/event-payloads

[event-types]: /webhooks/event-payloads
