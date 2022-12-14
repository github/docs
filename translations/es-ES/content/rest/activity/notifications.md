---
title: Notificaciones
intro: 'Notifications API permite administrar las notificaciones {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 2d68f2b563578608ab66eafbb055edbe5d88d172
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064278'
---
## Acerca de Notifications API

Notifications API permite administrar las notificaciones {% data variables.product.product_name %}. Para obtener más información acerca de las notificaciones, consulta "[Acerca de las notificaciones](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)".

Todas las llamadas de la API de Notificaciones requieren los ámbitos de API `notifications` o `repo`.  El hacerlo te dará acceso de solo lectura a algunos contenidos de informes de problemas y de confirmaciones. Aún necesitarás el ámbito `repo` para acceder a los informes de problemas y a las confirmaciones desde sus respectivos puntos de conexión.

Las notificaciones se devuelven como "hilos".  Un hilo contiene información acerca del debate actual sobre un informe de problemas, solicitud de extracción o confirmación.

Las notificaciones se optimizan para el sondeo con el encabezado `Last-Modified`.  Si no hay notificaciones nuevas, verás una respuesta `304 Not Modified`, la cual dejará el límite de tasa intacto.  También hay un encabezado `X-Poll-Interval` que especifica la frecuencia (en segundos) en la que se permite hacer sondeos.  Este tiempo podría incrementarse durante los periodos de carga fuerte en el servidor.  Por favor obedece al encabezado.

``` shell
# Add authentication to your requests
$ curl -I {% data variables.product.api_url_pre %}/notifications
HTTP/2 200
Last-Modified: Thu, 25 Oct 2012 15:16:27 GMT
X-Poll-Interval: 60

# Pass the Last-Modified header exactly
$ curl -I {% data variables.product.api_url_pre %}/notifications
$    -H "If-Modified-Since: Thu, 25 Oct 2012 15:16:27 GMT"
> HTTP/2 304
> X-Poll-Interval: 60
```

### Acerca de las razones para obtener las notificaciones

Cuando recupera respuestas de la API de Notificaciones, cada carga útil tiene una clave que se titula `reason`. Estas corresponden a los eventos que activan una notificación.

Estos son los posibles elementos `reason` para recibir una notificación:

Nombre de la razón | Descripción
------------|------------
`assign` | Se te asignó al informe de problemas.
`author` | Creaste el hilo.
`comment` | Comentaste en el hilo.
`ci_activity` | Se completó una ejecución de flujo de trabajo de {% data variables.product.prodname_actions %}.
`invitation` | Aceptaste una invitación para colaborar en el repositorio.
`manual` | Te suscribiste al hilo (a través de un informe de problemas o solicitud de extracción).
`mention` | Aparece específicamente **@mentioned** en el contenido.
`review_requested` | Se te solicitó, o se solicitó a un equipo del cual eres miembro, revisar una solicitud de extracción.{% ifversion fpt or ghec %}
`security_alert` | {% data variables.product.prodname_dotcom %} detectó una [vulnerabilidad de seguridad](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies) en el repositorio.{% endif %}
`state_change` | Cambiaste el estado del hilo (por ejemplo, cerraste un informe de problemas o fusionaste una solicitud de extracción).
`subscribed` | Estás observando el repositorio.
`team_mention` | Estuviste en un equipo al que se mencionó.

Tenga cuenta que `reason` se modificará conforme al subproceso, y puede cambiar si `reason` es diferente en una notificación posterior.

Por ejemplo, si es el autor de un problema, las notificaciones posteriores de dicho problema tendrán un elemento `reason` con el valor `author`. Si luego aparece **@mentioned** en el mismo problema, las notificaciones que capture a partir de entonces tendrán un elemento `reason` con el valor `mention`. `reason` permanece como `mention`, independientemente de si alguna vez se le menciona de nuevo.
