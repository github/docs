---
title: Testar webhooks
intro: 'Revise as entregas de webhook em {% data variables.product.prodname_dotcom %}, incluindo a solicitação HTTP, a carga, bem como a resposta.'
redirect_from:
  - /webhooks/testing
  - /developers/webhooks-and-events/testing-webhooks
  - /articles/testing-webhooks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
ms.openlocfilehash: 5b9287030169ecac751b407ad915d4fa69bf8182
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145996214'
---
Agora que você [configurou o servidor local](/webhooks/configuring/), talvez esteja interessado em levar seu código até o limite. Para isso, a exibição de webhooks do GitHub fornece algumas ferramentas para testar as cargas implantadas.

## Listar as entregas recentes

Cada webhook tem sua própria seção "Entregas Recentes", que lista, se uma entrega foi bem sucedida (verificação verde) ou falhou (vermelho x). Você também pode identificar quando se tentou cada entrega.

O {% data variables.product.product_name %} mantém um log de cada entrega de webhook por {% ifversion fpt or ghec %} 30 {% else %} oito {% endif %} dias.

![Vista das entregas recentes](/assets/images/webhooks_recent_deliveries.png)

## Aprofundar os resultados

Expandindo uma entrega individual, você poderá testemunhar *precisamente* as informações que o GitHub está tentando enviar ao servidor. Isto inclui tanto a solicitação HTTP quanto a resposta.

### Solicitação

A vista da entrega de webhook fornece informações sobre quais cabeçalhos foram enviados pelo GitHub.
Também inclui detalhes sobre a carga do JSON.

![Visualizar uma solicitação de carga](/assets/images/payload_request_tab.png)

### Resposta

A guia da resposta lista como seu servidor respondeu quando recebeu a carga do GitHub. Isso inclui o código de status, os cabeçalhos e todos os dados adicionais no texto da resposta.

![Visualizar uma resposta de carga](/assets/images/payload_response_tab.png)
