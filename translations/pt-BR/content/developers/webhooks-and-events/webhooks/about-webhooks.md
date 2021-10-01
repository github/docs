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
topics:
  - Webhooks
---

Webhooks allow you to build or set up integrations, such as [{% data variables.product.prodname_github_apps %}](/apps/building-github-apps/) or [{% data variables.product.prodname_oauth_apps %}](/apps/building-oauth-apps/), which subscribe to certain events on GitHub.com. Quando um desses eventos é acionado, enviaremos uma carga de POST por HTTP POST para a URL de configuração do webhook. Os webhooks podem ser usados para atualizar um rastreador de problemas externo, acionar criações de CI, atualizar um espelho de backup, ou até mesmo fazer uma implantação no seu servidor de produção. A sua imaginação é o único limite.

Os webhooks podem ser instalados em{% ifversion ghes or ghae %} [{% data variables.product.prodname_enterprise %}](/rest/reference/enterprise-admin#global-webhooks/),{% endif %} uma [organização][org-hooks], em um repositório[específico][repo-hooks] ou em {% data variables.product.prodname_github_app %}. Uma vez instalado, o webhook será enviado cada vez que ocorrer um ou mais eventos assinados.

Você pode criar até {% ifversion ghes or ghae %}250{% else %}20{% endif %} webhooks para cada evento em cada destino de instalação {% ifversion ghes or ghae %}instância({% data variables.product.prodname_ghe_server %} de organização específica ou repositório específico).{% else %}(organização específica ou repositório específico).{% endif %}

## Eventos

{% data reusables.webhooks.webhooks_intro %}

Cada evento corresponde a um certo conjunto de ações que podem ocorrer na sua organização e/ou repositório. Por exemplo, se você assinar o evento `problemas`, você receberá cargas detalhadas toda vez que uma tarefa for aberta, fechada, etiquetada, etc.

Para obter uma lista completa de eventos de webhook disponíveis e suas cargas, consulte "[Eventos e cargas de webhook](/developers/webhooks-and-events/webhook-events-and-payloads)".

## Evento de ping

{% data reusables.webhooks.ping_short_desc %}

Para obter mais informações sobre a carga do webhook do evento de `ping`, consulte o evento [`ping`](/webhooks/event-payloads/#ping).

[org-hooks]: /rest/reference/orgs#webhooks/
[repo-hooks]: /rest/reference/repos#hooks
