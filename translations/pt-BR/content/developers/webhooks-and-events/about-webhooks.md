---
title: Sobre webhooks
intro: Aprenda os princípios básicos de como os webhooks funcionam para ajudá-lo a criar e configurar integrações.
redirect_from:
  - /webhooks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---



Os webhooks permitem que você crie ou configure integrações, como [{% data variables.product.prodname_github_app %}s](/apps/building-github-apps/) ou [{% data variables.product.prodname_oauth_app %}s](/apps/building-oauth-apps/), que assinam determinados eventos no GitHub.com. Quando um desses eventos é acionado, enviaremos uma carga de POST por HTTP POST para a URL de configuração do webhook. Os webhooks podem ser usados para atualizar um rastreador de problemas externo, acionar criações de CI, atualizar um espelho de backup, ou até mesmo fazer uma implantação no seu servidor de produção. A sua imaginação é o único limite.

Os webhooks podem ser instalados em{% if currentVersion != "free-pro-team@latest" %} uma instância do [{% data variables.product.prodname_ghe_server %}](/v3/enterprise-admin/global_webhooks/),{% endif %} uma [organização][org-hooks], um repositório [específico][repo-hooks]ou em um {% data variables.product.prodname_github_app %}. Uma vez instalado, o webhook será enviado cada vez que ocorrer um ou mais eventos assinados.

Você pode criar até {% if currentVersion != "free-pro-team@latest" %}250{% else %}20{% endif %} webhooks para cada evento em cada destino de instalação {% if currentVersion != "free-pro-team@latest" %}instância({% data variables.product.prodname_ghe_server %} de organização específica ou repositório específico).{% else %}(organização específica ou repositório específico).{% endif %}

### Eventos

{% data reusables.webhooks.webhooks_intro %}

Cada evento corresponde a um certo conjunto de ações que podem ocorrer na sua organização e/ou repositório. Por exemplo, se você assinar o evento `problemas`, você receberá cargas detalhadas toda vez que uma tarefa for aberta, fechada, etiquetada, etc.

Consulte "[Cargas de evento do eebhook](/webhooks/event-payloads)" para a lista de eventos de webhook disponíveis e suas cargas.

### Evento de ping

{% data reusables.webhooks.ping_short_desc %}

Para obter mais informações sobre a carga do webhook do evento de `ping`, consulte o evento [`ping`](/webhooks/event-payloads/#ping).

[org-hooks]: /v3/orgs/hooks/
[repo-hooks]: /v3/repos/hooks/
