---
title: Criar webhooks
intro: 'Aprenda a criar um webhook, escolhendo os eventos que seu webhook irá ouvir em {% data variables.product.prodname_dotcom %} e como configurar um servidor para receber e gerenciar a carga de webhook.'
redirect_from:
  - /webhooks/creating
  - /developers/webhooks-and-events/creating-webhooks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
ms.openlocfilehash: ced763e71ecc9f99d8dd5037dcdb6d87cfdba91d
ms.sourcegitcommit: 6b1c6174d0df40c90edfd7526496baabb1dd159d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/04/2022
ms.locfileid: '148132968'
---
Agora que entendemos os [conceitos básicos dos webhooks][webhooks-overview], vamos ver o processo de criação da nossa integração habilitada para webhook. Neste tutorial, vamos criar um webhook de repositório que será responsável por listar quão popular é o nosso repositório, com base no número de problemas que recebe por dia.

Criar um webhook é um processo de duas etapas. Primeiro, configure quais eventos o webhook deve ouvir. Em seguida, você irá configurar seu servidor para receber e gerenciar a carga.


{% data reusables.webhooks.webhooks-rest-api-links %}

## Expor o host local na internet

Para os propósitos deste tutorial, você usará um servidor local para receber eventos de webhook de {% data variables.product.prodname_dotcom %}. 

Em primeiro lugar, é preciso expor o ambiente de desenvolvimento local à Internet para que o {% data variables.product.prodname_dotcom %} possa entregar eventos. Use o [`ngrok`](https://ngrok.com) para isso.

{% ifversion cli-webhook-forwarding %} {% note %}

**Observação:** como alternativa, é possível usar o encaminhamento de webhook a fim de configurar o ambiente local para receber webhooks. Para saber mais, confira "[Receber webhooks com a CLI do GitHub](/developers/webhooks-and-events/webhooks/receiving-webhooks-with-the-github-cli)".

{% endnote %} {% endif %}

O `ngrok` está disponível gratuitamente para todos os principais sistemas operacionais. Para obter mais informações, confira a [página de download do `ngrok`](https://ngrok.com/download).

Depois de instalar `ngrok`, você poderá expor o localhost executando `./ngrok http 4567` na linha de comando. `4567` é o número da porta em que o servidor escutará as mensagens. Você deve ver uma linha parecida mais ou menos com isso:

```shell
$ Forwarding  http://7e9ea9dc.ngrok.io -> 127.0.0.1:4567
```

Anote a URL do `*.ngrok.io`. Vamos usá-lo para configurar nosso webhook.

## Configurando um webhook

É possível instalar webhooks em uma organização ou em um repositório específico.

Para configurar um webhook, vá para a página de configurações do seu repositório ou organização. Nela, clique em **Webhooks** e em **Adicionar webhook**.

Como alternativa, você pode optar por criar e gerenciar um webhook [por meio da API de Webhooks][webhook-api].

Os webhooks exigem algumas opções de configuração antes de você poder usá-los. Iremos analisar cada uma destas configurações abaixo.

## URL do conteúdo

{% data reusables.webhooks.payload_url %}

Como estamos fazendo o desenvolvimento local para nosso tutorial, vamos defini-la como a URL `*.ngrok.io`, seguido de `/payload`. Por exemplo, `http://7e9ea9dc.ngrok.io/payload`.

## Tipo de conteúdo

{% data reusables.webhooks.content_type %} Para este tutorial, o tipo de conteúdo padrão `application/json` é adequado.

## Segredo

{% data reusables.webhooks.secret %}

## Verificação SSL

{% data reusables.webhooks.webhooks_ssl %}

## Ativo

Por padrão, as entregas de webhook estão "Ativas". Você pode optar por desativar a entrega das cargas de webhook, desmarcando "Ativo".

## Eventos

Os eventos encontram-se no núcleo dos webhooks. Esses webhooks são acionados sempre que uma determinada ação é tomada no repositório, a qual a URL da carga do seu servidor intercepta e e sobre a qual atua.

Encontre uma lista completa de eventos de webhook e quando eles podem ser executados na referência da [API de webhooks][hooks-api].

Como o webhook está lidando com problemas em um repositório, clicaremos em **Deixar-me selecionar eventos individuais** e em **Problemas**. Verifique se você selecionou **Ativo** para receber eventos de problema para webhooks disparados. Você também pode selecionar todos os eventos usando a opção-padrão.

Quando terminar, clique em **Adicionar webhook**. 

Agora que você criou o webhook, é hora de configurar nosso servidor local para testar o webhook. Acesse [Como configurar o servidor](/webhooks/configuring/) para saber como fazer isso.

### Evento curinga

Para configurar um webhook para todos os eventos, use o caractere curinga (`*`) para especificar os eventos de webhook. Ao adicionar o evento curinga, substituiremos todos os eventos existentes que você tenha configurado pelo evento curinga e enviaremos todas as cargas para os eventos compatíveis. Você também obterá automaticamente todos os novos eventos que possamos adicionar no futuro.

[webhooks-overview]: /webhooks/
[webhook-api]: /rest/reference/repos#hooks
[hooks-api]: /webhooks/#events
