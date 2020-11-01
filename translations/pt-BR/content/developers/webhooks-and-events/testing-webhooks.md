---
title: Testar webhooks
intro: 'Revise as entregas de webhook em {% data variables.product.prodname_dotcom %}, incluindo a solicitação HTTP, a carga, bem como a resposta.'
redirect_from:
  - /webhooks/testing
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---


Agora que você [configurou seu servidor local](/webhooks/configuring/), você pode estar interessado em fazer push do seu código em seus limites. Para isso, a visualização de webhooks do GitHub fornece algumas ferramentas para testar suas cargas implantadas.

### Listar as entregas recentes

Cada webhook tem sua própria seção "Entregas Recentes", que lista, se uma entrega foi bem sucedida (verificação verde) ou falhou (vermelho x). Você também pode identificar quando se tentou cada entrega.

{% data variables.product.product_name %} mantém um registro de cada entrega de webhook para {% if currentVersion == "free-pro-team@latest" %} 30 {% else %} 8 {% endif %} dias.

![Vista das entregas recentes](/assets/images/webhooks_recent_deliveries.png)

### Aprofundar os resultados

Ao expandir uma entrega individual, você poderá conhecer *precisamente* quais informações o GitHub está tentando enviar para o seu servidor. Isto inclui tanto a solicitação HTTP quanto a resposta.

#### Solicitação

A vista da entrega de webhook fornece informações sobre quais cabeçalhos foram enviados pelo GitHub. Também inclui detalhes sobre a carga do JSON.

![Visualizar uma solicitação de carga](/assets/images/payload_request_tab.png)

#### Resposta

A aba de resposta lista como seu servidor respondeu quando recebeu a carga do GitHub. Isso inclui o código de status, os cabeçalhos e quaisquer dados adicionais dentro do texto da resposta.

![Visualizar uma resposta de carga](/assets/images/payload_response_tab.png)
