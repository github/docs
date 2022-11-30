---
title: Webhooks
intro: A API de webhooks permite que você crie e gerencie webhooks para seus repositórios.
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
children:
  - /repo-config
  - /repo-deliveries
  - /repos
redirect_from:
  - /rest/reference/webhooks
ms.openlocfilehash: 9216b892bbc19752266cea22d88bec655363ecaf
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882340'
---
Os webhooks de repositório permitem que você receba conteúdo `POST` HTTP sempre que determinados eventos acontecem em um repositório. {% data reusables.webhooks.webhooks-rest-api-links %}

Caso deseje configurar um só webhook para receber eventos de todos os repositórios da sua organização, confira nossa documentação da API para [Webhooks da organização](/rest/reference/orgs#webhooks).

Além da API REST, o {% data variables.product.prodname_dotcom %} também pode servir como um hub [PubSubHubbub](#pubsubhubbub) para repositórios.

## Receber Webhooks

Para que {% data variables.product.product_name %} envie cargas de webhook, seu servidor deve ser acessível pela internet. É altamente recomendável o uso de SSL para que possamos enviar cargas criptografadas por HTTPS.

### Cabeçalhos de webhook

{% data variables.product.product_name %} enviará ao longo de vários cabeçalhos de HTTP para diferenciar entre tipos de evento e identificadores de carga. Confira [Cabeçalhos de webhook](/developers/webhooks-and-events/webhook-events-and-payloads#delivery-headers) para ver detalhes.

## PubSubHubbub

O GitHub também pode servir como um hub [PubSubHubbub](https://github.com/pubsubhubbub/PubSubHubbub) para todos os repositórios. O PSHB é um simples protocolo de publicação/assinatura que permite o registro de servidores para receber atualizações quando um tópico é atualizado. As atualizações são enviadas com uma solicitação HTTP do tipo POST para uma URL de chamada de retorno.
As URLs dos tópicos dos pushes de um repositório do GitHub estão neste formato:

`https://github.com/{owner}/{repo}/events/{event}`

O evento pode ser qualquer evento de webhook disponível. Para obter mais informações, confira "[Eventos e cargas do webhook](/developers/webhooks-and-events/webhook-events-and-payloads)".

### Formato da resposta

O formato padrão é o que os [ganchos de pós-recebimento existentes devem esperar](/post-receive-hooks/): um corpo JSON enviado como o parâmetro `payload` em um POST.  Você também pode especificar o recebimento do corpo JSON bruto com um cabeçalho `Accept` ou uma extensão `.json`.

    Accept: application/json
    https://github.com/{owner}/{repo}/events/push.json

### URLs de chamada de retorno

As URLs de retorno de chamada podem usar o protocolo `http://`.

    # Send updates to postbin.org
    http://postbin.org/123

### Assinar

O ponto de extremidade PubSubHubbub do GitHub é: `{% data variables.product.api_url_code %}/hub`. Uma solicitação bem-sucedida com o curl parece como:

``` shell
curl -u "user" -i \
  {% data variables.product.api_url_pre %}/hub \
  -F "hub.mode=subscribe" \
  -F "hub.topic=https://github.com/{owner}/{repo}/events/push" \
  -F "hub.callback=http://postbin.org/123"
```

Solicitações do PubSubHubbub podem ser enviadas várias vezes. Se o hook já existe, ele será modificado de acordo com a solicitação.

#### Parâmetros

Nome | Tipo | Descrição
-----|------|--------------
``hub.mode``|`string` | **Obrigatório**. `subscribe` ou `unsubscribe`.
``hub.topic``|`string` |**Obrigatório**.  A URI do repositório do GitHub a ser assinada.  O caminho precisa estar no formato `/{owner}/{repo}/events/{event}`.
``hub.callback``|`string` | A URI para receber as atualizações do tópico.
``hub.secret``|`string` | Uma chave de segredo compartilhado que gera uma assinatura de hash do conteúdo de saída do texto.  Você pode verificar se um push veio do GitHub comparando o corpo bruto da solicitação com o conteúdo de {% ifversion fpt or ghes or ghec %}`X-Hub-Signature` ou `X-Hub-Signature-256` cabeçalhos{% elsif ghae %}`X-Hub-Signature-256` cabeçalho{% endif %}. Veja [a documentação do PubSubHubbub](https://pubsubhubbub.github.io/PubSubHubbub/pubsubhubbub-core-0.4.html#authednotify) para obter mais detalhes.
