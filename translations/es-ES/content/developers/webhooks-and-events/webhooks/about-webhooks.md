---
title: Acerca de webhooks
intro: Aprende lo básico sobre cómo funcionan los webhooks para ayudarte a ccrear y configurar integraciones.
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145112386'
---
Los webhooks permiten crear o configurar integraciones, como [{% data variables.product.prodname_github_apps %}](/apps/building-github-apps/) o [{% data variables.product.prodname_oauth_apps %}](/apps/building-oauth-apps/), que se suscriben a determinados eventos en GitHub.com. Cuando se activa alguno de esos eventos, enviamos una carga útil de POST por HTTP a la URL que el webhook tiene configurada. Los webhooks pueden utilizarse para actualizar un rastreador de problemas externo, activar compilaciones de IC, actualizar un espejo de respaldo, o incluso para desplegar en tu servidor productivo. Solo te limita tu imaginación.

Los webhooks se pueden instalar en{% ifversion ghes or ghae %} [{% data variables.product.prodname_enterprise %}](/rest/reference/enterprise-admin#global-webhooks/),{% endif %} una [organización][org-hooks], un [repositorio][repo-hooks] específico o una {% data variables.product.prodname_github_app %}. Una vez que se instalan, el webhook se enviará cada vez que ocurra uno o más eventos suscritos.

Puede crear hasta {% ifversion ghes or ghae %}250{% else %}20{% endif %} webhooks para cada evento en cada destino de instalación {% ifversion ghes or ghae %}(instancia, organización específica o repositorio específico de {% data variables.product.prodname_ghe_server %}).{% else %} (organización o repositorio específico).{% endif %}

## Eventos

{% data reusables.webhooks.webhooks_intro %}

Cada evento corresponde a conjuntos de acciones específicos que pueden suceder en tu organización y/o repositorio. Por ejemplo, si se suscribe al evento `issues`, recibirá cargas útiles detalladas cada vez que una incidencia se abra, se cierre, se etiquete, etc.

Para obtener una lista completa de los eventos de webhook disponibles y sus cargas, vea "[Eventos y cargas de webhook](/developers/webhooks-and-events/webhook-events-and-payloads)".

## Evento de Ping

{% data reusables.webhooks.ping_short_desc %}

Para obtener más información sobre la carga del webhook del evento `ping`, vea el evento [`ping`](/webhooks/event-payloads/#ping).

[org-hooks]: /rest/reference/orgs#webhooks/
[repo-hooks]: /rest/reference/repos#webhooks
