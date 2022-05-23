---
title: Notificações
intro: 'The Notifications API lets you manage {% data variables.product.product_name %} notifications.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## About the Notifications API

The Notifications API lets you manage {% data variables.product.product_name %} notifications. For more information about notifications, see "[About notifications](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)."

Todas as chamadas de notificação da API requerem escopos da API para `notificações` ou `repositórios`.  Fazer isto dará acesso somente-leitura a algum problema e fará commit do conteúdo. Você ainda precisará do escopo de `repositório` para acessar problemas e commits de seus respectivos pontos de extremidade.

Notificações retornam como "correntes".  Uma corrente contém informações sobre a discussão atual de um problema, pull request ou commit.

As notificações são otimizadas para sondagem com o cabeçalho `Last-Modified`.  Se não houver novas notificações, você verá uma resposta `304 Not Modified`, deixando a sua taxa de limite atual inalterada.  Há um cabeçalho `X-Poll-Interval` que especifica com que frequência (em segundos) que você pode fazer a sondagem.  Em tempos de alta carga do servidor, o tempo pode aumentar.  Obedeça o cabeçalho.

``` shell
# Add authentication to your requests
$ curl -I {% data variables.product.api_url_pre %}/notifications
HTTP/2 200
Last-Modified: Thu, 25 Oct 2012 15:16:27 GMT
X-Poll-Interval: 60

# Pass the Last-Modified header exactly
$ curl -I {% data variables.product.api_url_pre %}/notifications
$    -H "If-Modified-Since: Thu, 25 Oct 2012 15:16:27 GMT"
> HTTP/2 304
> X-Poll-Interval: 60
```

### About notification reasons

Ao recuperar respostas da API de Notificações, cada carga tem uma carga denominada `drazão`. Estas correspondem a eventos que ativam uma notificação.

These are the potential `reason`s for receiving a notification:

| Nome da razão      | Descrição                                                                                                                                                                                                      |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `assign`           | O problema foi atribuído a você.                                                                                                                                                                               |
| `autor`            | Você criou a corrente.                                                                                                                                                                                         |
| `comentário`       | Você comentou na corrente.                                                                                                                                                                                     |
| `ci_activity`      | A execução de um fluxo de trabalho {% data variables.product.prodname_actions %} que você acionou foi concluída.                                                                                               |
| `convite`          | Você aceitou um convite para contribuir com o repositório.                                                                                                                                                     |
| `manual`           | Você assinou a corrente (por meio de um problema ou pull request).                                                                                                                                             |
| `menção`           | Você foi especificamente **@mentioned** no conteúdo.                                                                                                                                                           |
| `review_requested` | Foi solicitado que você ou uma equipe da qual você é integrante revise um pull request.{% ifversion fpt or ghec %}
| `security_alert`   | O {% data variables.product.prodname_dotcom %} descobriu uma [vulnerabilidade de segurança](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies) no seu repositório.{% endif %}
| `state_change`     | Você alterou o estado da corrente (por exemplo, fechando um problema ou mesclando um pull request).                                                                                                            |
| `assinado`         | Você está inspecionando o repositório.                                                                                                                                                                         |
| `team_mention`     | Você estava em uma equipe que foi mencionada.                                                                                                                                                                  |

Observe que a `razão` é modificada em uma base de corrente e pode mudar se a `razão` em uma notificação posterior for diferente.

Por exemplo, se você é o autor de um problema, as notificações subsequentes sobre essa problema terão uma `razão` do `autor`. Portanto, se você for  **@mentioned** no mesmo problema, as notificações que você buscar subsequentemente terão uma `razão` a `mencionar`. A `razão` permanece como `menção`, independentemente se você já foi mencionado novamente.
