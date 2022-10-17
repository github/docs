---
title: Notificações
intro: 'A API de Notificações permite que você gerencie notificações do {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 2d68f2b563578608ab66eafbb055edbe5d88d172
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147064271'
---
## Sobre a API de Notificações

A API de Notificações permite que você gerencie notificações do {% data variables.product.product_name %}. Para obter mais informações sobre as notificações, confira "[Sobre notificações](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)".

Todas as chamadas à API de Notificação exigem os escopos de API `notifications` ou `repo`.  Fazer isto dará acesso somente-leitura a algum problema e fará commit do conteúdo. Você ainda precisará do escopo `repo` para acessar problemas e commits dos respectivos pontos de extremidade.

Notificações retornam como "correntes".  Uma corrente contém informações sobre a discussão atual de um problema, pull request ou commit.

As notificações são otimizadas para sondagem com o cabeçalho `Last-Modified`.  Se não houver novas notificações, você verá uma resposta `304 Not Modified`, mantendo o limite de taxa atual intacto.  Há um cabeçalho `X-Poll-Interval` que especifica a frequência (em segundos) com que você tem permissão de sondagem.  Em tempos de alta carga do servidor, o tempo pode aumentar.  Obedeça o cabeçalho.

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

### Sobre motivos de notificação

Ao recuperar respostas da API de Notificações, cada conteúdo tem uma chave intitulada `reason`. Estas correspondem a eventos que ativam uma notificação.

Estes são possíveis `reason`s para recebimento de uma notificação:

Nome da razão | Descrição
------------|------------
`assign` | O problema foi atribuído a você.
`author` | Você criou a corrente.
`comment` | Você comentou na corrente.
`ci_activity` | A execução de um fluxo de trabalho {% data variables.product.prodname_actions %} que você acionou foi concluída.
`invitation` | Você aceitou um convite para contribuir com o repositório.
`manual` | Você assinou a corrente (por meio de um problema ou pull request).
`mention` | Você foi especificamente **@mentioned** no conteúdo.
`review_requested` | Foi solicitado que você ou uma equipe da qual você é integrante revise um pull request.{% ifversion fpt or ghec %}
`security_alert` | O {% data variables.product.prodname_dotcom %} descobriu uma [vulnerabilidade de segurança](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies) no seu repositório.{% endif %}
`state_change` | Você alterou o estado da corrente (por exemplo, fechando um problema ou mesclando um pull request).
`subscribed` | Você está inspecionando o repositório.
`team_mention` | Você estava em uma equipe que foi mencionada.

Observe que o `reason` é modificado a cada conversa e poderá mudar se o `reason` em uma notificação posterior for diferente.

Por exemplo, se você for o autor de um problema, as notificações seguintes sobre esse problema terão um `reason` igual a `author`. Em seguida, se você for **@mentioned** no mesmo problema, as notificações que você buscar depois disso terão um `reason` igual a `mention`. O `reason` continua sendo `mention`, independentemente de você ser mencionado novamente.
