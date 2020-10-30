---
title: Acerca de webhooks
intro: Aprende lo básico sobre cómo funcionan los webhooks para ayudarte a ccrear y configurar integraciones.
redirect_from:
  - /webhooks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---



Los Webhooks te permiten crear y configurar integraciones, tales como [{% data variables.product.prodname_github_app %}](/apps/building-github-apps/) o [{% data variables.product.prodname_oauth_app %}](/apps/building-oauth-apps/), las cuales se suscriben a ciertos eventos en GitHub.com. Cuando se activa alguno de esos eventos, enviamos una carga útil de POST por HTTP a la URL que el webhook tiene configurada. Los webhooks pueden utilizarse para actualizar un rastreador de problemas externo, activar compilaciones de IC, actualizar un espejo de respaldo, o incluso para desplegar en tu servidor productivo. Solo te limita tu imaginación.

Los webhooks se pueden instalar en {% if currentVersion != "free-pro-team@latest" %} una [instancia de {% data variables.product.prodname_ghe_server %}](/v3/enterprise-admin/global_webhooks/),{% endif %} una[organización][org-hooks], un [repositorio][repo-hooks] específico, o una {% data variables.product.prodname_github_app %}. Una vez que se instalan, el webhook se enviará cada vez que ocurra uno o más eventos suscritos.

Puedes crear hasta {% if currentVersion != "free-pro-team@latest" %}250{% else %}20{% endif %} webhooks para cada evento en cada destino de instalación {% if currentVersion != "free-pro-team@latest" %}(instancia de {% data variables.product.prodname_ghe_server %}, organización específica, o repositorio específico).{% else %}(organización específica o repositorio específico).{% endif %}

### Eventos

{% data reusables.webhooks.webhooks_intro %}

Cada evento corresponde a conjuntos de acciones específicos que pueden suceder en tu organización y/o repositorio. Por ejemplo, si te suscribes al evento `issues`, recibirás cargas útiles detalladas cada vez que un informe de problemas se abra, cierre, etiquete, etc.

Consulta la sección "[Cargas útiles de los eventos de webhook](/webhooks/event-payloads)" para encontrar una lista de los eventos de webhook disponibles y de sus cargas útiles.

### Evento de Ping

{% data reusables.webhooks.ping_short_desc %}

Para obtener más información acerca de la carga útil del webhook del evento `ping`, consulta el evento [`ping`](/webhooks/event-payloads/#ping).

[org-hooks]: /v3/orgs/hooks/
[repo-hooks]: /v3/repos/hooks/
