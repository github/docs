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
---

Os webhooks de repositório permitem que você receba cargas de `POST` de HTTP sempre que certos eventos ocorrerem em um repositório. {% data reusables.webhooks.webhooks-rest-api-links %}

Se você deseja configurar um único webhook para receber eventos de todos os repositórios da organização, consulte nossa documentação de API para [Webhooks de organização](/rest/reference/orgs#webhooks).

Além da API REST, {% data variables.product.prodname_dotcom %} também pode servir como um núcleo de [PubSubHubbub](#pubsubhubbub) para repositórios.

## Receber Webhooks

Para que {% data variables.product.product_name %} envie cargas de webhook, seu servidor deve ser acessível pela internet. É altamente recomendável o uso de SSL para que possamos enviar cargas criptografadas por HTTPS.

### Cabeçalhos de webhook

{% data variables.product.product_name %} enviará ao longo de vários cabeçalhos de HTTP para diferenciar entre tipos de evento e identificadores de carga. Consulte [cabeçalhos de webhook](/developers/webhooks-and-events/webhook-events-and-payloads#delivery-headers) para obter informações.

## PubSubHubbub

O GitHub também pode servir como um centro de [PubSubHubbub](https://github.com/pubsubhubbub/PubSubHubbub) para todos os repositórios. O PSHB é um simples protocolo de publicação/assinatura que permite o registro de servidores para receber atualizações quando um tópico é atualizado. As atualizações são enviadas com uma solicitação HTTP do tipo POST para uma URL de chamada de retorno. As URLs dos tópicos dos pushes de um repositório do GitHub estão neste formato:

`https://github.com/{owner}/{repo}/events/{event}`

O evento pode ser qualquer evento de webhook disponível. Para obter mais informações, consulte "[Eventos e cargas de Webhook](/developers/webhooks-and-events/webhook-events-and-payloads)".

### Formato de resposta

O formato padrão é o que [os hooks post-receive existentes devem esperar](/post-receive-hooks/): Um texto JSON enviado como parâmetro `payload` em um POST.  Você também pode especificar para receber o texto do JSON sem processar com um cabeçalho `Aceitar` ou uma extensão `.json`.

    Accept: application/json
    https://github.com/{owner}/{repo}/events/push.json

### URLs de chamada de retorno

As URLs de chamada de retorno podem usar o protocolo `http://`.

    # Send updates to postbin.org
    http://postbin.org/123

### Assinar

O ponto de extremidade do GitHub PubSubHubbub é: `{% data variables.product.api_url_code %}/hub`. Uma solicitação bem-sucedida com o curl parece como:

``` shell
curl -u "user" -i \
  {% data variables.product.api_url_pre %}/hub \
  -F "hub.mode=subscribe" \
  -F "hub.topic=https://github.com/{owner}/{repo}/events/push" \
  -F "hub.callback=http://postbin.org/123"
```

Solicitações do PubSubHubbub podem ser enviadas várias vezes. Se o hook já existe, ele será modificado de acordo com a solicitação.

#### Parâmetros

| Nome           | Tipo     | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hub.mode`     | `string` | **Obrigatório**. `Assine` ou `cancele a assinatura`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `hub.topic`    | `string` | **Obrigatório**.  A URI do repositório do GitHub a ser assinada.  O caminho deve estar no formato `/{owner}/{repo}/events/{event}`.                                                                                                                                                                                                                                                                                                                                                                                 |
| `hub.callback` | `string` | A URI para receber as atualizações do tópico.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `hub.secret`   | `string` | Uma chave de segredo compartilhado que gera uma assinatura de hash do conteúdo de saída do texto.  You can verify a push came from GitHub by comparing the raw request body with the contents of the {% ifversion fpt or ghes or ghec %}`X-Hub-Signature` or `X-Hub-Signature-256` headers{% elsif ghae %}`X-Hub-Signature-256` header{% endif %}. Você pode ver [a documentação do PubSubHubbub](https://pubsubhubbub.github.io/PubSubHubbub/pubsubhubbub-core-0.4.html#authednotify) para obter mais informações. |
