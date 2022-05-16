---
title: Notificaciones
intro: 'The Notifications API lets you manage {% data variables.product.product_name %} notifications.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## About the Notifications API

The Notifications API lets you manage {% data variables.product.product_name %} notifications. For more information about notifications, see "[About notifications](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)."

Todas las llamadas de la API para notificaciones necesitan los alcances de la API para `notifications` o `repo`.  El hacerlo te dará acceso de solo lectura a algunos contenidos de informes de problemas y de confirmaciones. Aún necesitarás el alcance de `repo` para acceder a los informes de problemas y a las confirmaciones desde sus respectivas terminales.

Las notificaciones se devuelven como "hilos".  Un hilo contiene información acerca del debate actual sobre un informe de problemas, solicitud de extracción o confirmación.

Las notificaciones se optimizan para el sondeo con el encabezado `Last-Modified`.  Si no hay notificaciones nuevas, verás una respuesta `304 Not Modified`, la cual dejará tu límite de tasa intacto.  Hay un encabezado de `X-Poll-Interval` que especifica la frecuencia (en segundos) en la que se te permite hacer sondeos.  Este tiempo podría incrementarse durante los periodos de carga fuerte en el servidor.  Por favor obedece al encabezado.

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

### About notification reasons

Cuando recuperas respuestas de la API de Notificaciones, cada carga útil tiene una clave que se titula `reason`. Estas corresponden a los eventos que activan una notificación.

These are the potential `reason`s for receiving a notification:

| Nombre de la razón | Descripción                                                                                                                                                                                                |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `assign`           | Se te asignó al informe de problemas.                                                                                                                                                                      |
| `autor`            | Creaste el hilo.                                                                                                                                                                                           |
| `comentario`       | Comentaste en el hilo.                                                                                                                                                                                     |
| `ci_activity`      | Se completó una ejecución de flujo de trabajo de {% data variables.product.prodname_actions %}.                                                                                                            |
| `invitación`       | Aceptaste una invitación para colaborar en el repositorio.                                                                                                                                                 |
| `manual`           | Te suscribiste al hilo (a través de un informe de problemas o solicitud de extracción).                                                                                                                    |
| `mención`          | Se te **@mencionó** específicamente en el contenido.                                                                                                                                                       |
| `review_requested` | Se te solicitó, o se solicitó a un equipo del cual eres miembro, revisar una solicitud de extracción.{% ifversion fpt or ghec %}
| `security_alert`   | {% data variables.product.prodname_dotcom %} descubrió una [vulnerabilidad de seguridad](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies) en tu repositorio.{% endif %}
| `state_change`     | Cambiaste el estado del hilo (por ejemplo, cerraste un informe de problemas o fusionaste una solicitud de extracción).                                                                                     |
| `subscribed`       | Estás observando el repositorio.                                                                                                                                                                           |
| `team_mention`     | Estuviste en un equipo al que se mencionó.                                                                                                                                                                 |

Toma en cuenta que la `reason` se modificará conforme al hilo, y puede cambiar si esta `reason` es diferente en una notificación posterior.

Por ejemplo, si eres el autor de un informe de problemas, las notificaciones subsecuentes de dicho informe tendrán una `reason` o un `author`. Si entonces se te **@menciona** en el mismo informe de problemas, las notificaciones que obtengas de ahí en adelante tendrán una `reason` o una `mention`. La `reason` se queda como una `mention`, sin importar si nunca se te menciona.
