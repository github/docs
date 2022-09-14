---
title: Sobre webhooks
intro: Aprenda os princípios básicos de como os webhooks funcionam para ajudá-lo a criar e configurar integrações.
redirect_from:
  - /webhooks
  - /developers/webhooks-and-events/about-webhooks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
ms.openlocfilehash: 08b038d5a35c4c692502545e640d04993d169b6a
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145093895'
---
Os webhooks permitem que você crie ou configure integrações, como [{% data variables.product.prodname_github_apps %}](/apps/building-github-apps/) ou [{% data variables.product.prodname_oauth_apps %}](/apps/building-oauth-apps/), que se inscrevem em determinados eventos no GitHub.com. Quando um desses eventos é acionado, enviaremos uma carga de POST por HTTP POST para a URL de configuração do webhook. Os webhooks podem ser usados para atualizar um rastreador de problemas externo, acionar criações de CI, atualizar um espelho de backup, ou até mesmo fazer uma implantação no seu servidor de produção. A sua imaginação é o único limite.

Os webhooks podem ser instalados no{% ifversion ghes or ghae %} [{% data variables.product.prodname_enterprise %}](/rest/reference/enterprise-admin#global-webhooks/),{% endif %} em uma [organização][org-hooks], em um [repositório][repo-hooks] específico ou em um {% data variables.product.prodname_github_app %}. Uma vez instalado, o webhook será enviado cada vez que ocorrer um ou mais eventos assinados.

Você pode criar até {% ifversion ghes or ghae %}250{% else %}20{% endif %} webhooks para cada evento em cada destino de instalação {% ifversion ghes or ghae %}(instância do {% data variables.product.prodname_ghe_server %}, organização específica ou repositório específico).{% else %}(organização específica ou repositório específico).{% endif %}

## Eventos

{% data reusables.webhooks.webhooks_intro %}

Cada evento corresponde a um certo conjunto de ações que podem ocorrer na sua organização e/ou repositório. Por exemplo, se você se inscrever no evento `issues`, receberá cargas detalhadas sempre que um problema for aberto, fechado, rotulado etc.

Para ver a lista completa dos eventos de webhook disponíveis e as respectivas cargas, confira "[Eventos e cargas de webhook](/developers/webhooks-and-events/webhook-events-and-payloads)".

## Evento de ping

{% data reusables.webhooks.ping_short_desc %}

Para obter mais informações sobre a carga do webhook de evento `ping`, confira o evento [`ping`](/webhooks/event-payloads/#ping).

[org-hooks]: /rest/reference/orgs#webhooks/
[repo-hooks]: /rest/reference/repos#webhooks
