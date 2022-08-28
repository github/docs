---
title: Acerca de webhooks
intro: Aprende lo básico sobre cómo funcionan los webhooks para ayudarte a ccrear y configurar integraciones.
redirect_from:
  - /webhooks
  - /developers/webhooks-and-events/about-webhooks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Webhooks
---

Los Webhooks te permiten crear y configurar integraciones, tales como [{% data variables.product.prodname_github_app %}](/apps/building-github-apps/) o [{% data variables.product.prodname_oauth_app %}](/apps/building-oauth-apps/), las cuales se suscriben a ciertos eventos en GitHub.com. Cuando se activa alguno de esos eventos, enviamos una carga útil de POST por HTTP a la URL que el webhook tiene configurada. Los webhooks pueden utilizarse para actualizar un rastreador de problemas externo, activar compilaciones de IC, actualizar un espejo de respaldo, o incluso para desplegar en tu servidor productivo. Solo te limita tu imaginación.

Los webhooks pueden instalarse en{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %} [{% data variables.product.prodname_enterprise %}](/rest/reference/enterprise-admin#global-webhooks/),{% endif %} una [organización][org-hooks], un [repositorio][repo-hooks] específico, o una {% data variables.product.prodname_github_app %}. Una vez que se instalan, el webhook se enviará cada vez que ocurra uno o más eventos suscritos.

Puedes crear hasta {% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}250{% else %}20{% endif %} webhooks para cada evento en cada destino de instalación {% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %} (instancia de {% data variables.product.prodname_ghe_server %}, organización específica, o repositorio específico).{% else %} (organización específica o repositorio específico).{% endif %}

### Eventos

{% data reusables.webhooks.webhooks_intro %}

Cada evento corresponde a conjuntos de acciones específicos que pueden suceder en tu organización y/o repositorio. Por ejemplo, si te suscribes al evento `issues`, recibirás cargas útiles detalladas cada vez que un informe de problemas se abra, cierre, etiquete, etc.

Para encontrar una lista completa de eventos de webhook disponibles y sus cargas útiles, consulta la sección "[Eventos de webhook y cargas útiles](/developers/webhooks-and-events/webhook-events-and-payloads)".

### Evento de Ping

{% data reusables.webhooks.ping_short_desc %}

Para obtener más información acerca de la carga útil del webhook del evento `ping`, consulta el evento [`ping`](/webhooks/event-payloads/#ping).

[org-hooks]: /rest/reference/orgs#webhooks/
[repo-hooks]: /rest/reference/repos#hooks
