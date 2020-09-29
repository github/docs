---
title: Actividad
redirect_from:
  - /v3/activity
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Eventos

La API de eventos es una API de solo lectura para los eventos de {% data variables.product.prodname_dotcom %}. Estos eventos alimentan a los diversos flujos de actividad en el sitio.

La API de eventos puede devolver tipos diferentes de eventos que se activan por actividad en {% data variables.product.product_name %}. La API de eventos puede devolver tipos diferentes de eventos que se activan por actividad en {% data variables.product.product_name %}. Para obtener más información acerca de los eventos específicos que puedes recibir de la API de Eventos, consulta la sección "[Tipos de evento en {% data variables.product.prodname_dotcom %}](/developers/webhooks-and-events/github-event-types)". Para obtener más información, consulta la "[API de Eventos de Informes de Problemas](/rest/reference/issues#events)".

Los eventos se optimizan para el sondeo con el encabezado "ETag". Si no se han desencadenado eventos nuevos, verás la respuesta "304 Sin Modificar", y tu límite de tasa actual permanecerá intacto. También hay un encabezado de "X-Poll-Interval" que especifica la frecuencia (en segundos) en la que se te permite hacer sondeos. Este tiempo podría incrementarse durante los periodos de carga fuerte en el servidor. Por favor obedece al encabezado.

``` shell
$ curl -I {% data variables.product.api_url_pre %}/users/tater/events
> HTTP/1.1 200 OK
> X-Poll-Interval: 60
> ETag: "a18c3bded88eb5dbb5c849a489412bf3"

# The quotes around the ETag value are important
$ curl -I {% data variables.product.api_url_pre %}/users/tater/events \
$    -H 'If-None-Match: "a18c3bded88eb5dbb5c849a489412bf3"'
> HTTP/1.1 304 Not Modified
> X-Poll-Interval: 60
```

Los eventos son compatibles con la paginación, sin embargo, la opción `per_page` no es compatible. El tamaño de página fijo es de 30 elementos. Se puede obtener hasta diez páginas para obtener un total de 300 eventos. Para obtener más información, consulta la sección "[Desplazarse con la paginación](/rest/guides/traversing-with-pagination)".

Solo los eventos creados en los últimos 90 días se incluirán en las líneas de tiempo. Los eventos de más de 90 días de antigüedad no se incluirán (aún si la cantidad total de eventos en la línea de tiempo es de 300).

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'events' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Fuentes

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'feeds' %}{% include rest_operation %}{% endif %}
{% endfor %}

### Ejemplo de obtención de un canal de Atom

Para obtener un canal en formato de Atom, debes especificar el tipo `application/atom+xml` en el encabezado `Accept`. Por ejemplo, para obtener un canal de Atom para las asesorías de seguridad de GitHub:

    curl -H "Accept: application/atom+xml" https://github.com/security-advisories

#### Respuesta

```shell
Status: 200 OK
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/" xml:lang="en-US">
  <id>tag:github.com,2008:/security-advisories</id>
  <link rel="self" type="application/atom+xml" href="https://github.com/security-advisories.atom"/>
  <title>GitHub Security Advisory Feed</title>
  <author>
    <name>GitHub</name>
  </author>
  <updated>2019-01-14T19:34:52Z</updated>
     <entry>
      <id>tag:github.com,2008:GHSA-abcd-12ab-23cd</id>
      <published>2018-07-26T15:14:52Z</published>
      <updated>2019-01-14T19:34:52Z</updated>
      <title type="html">[GHSA-abcd-12ab-23cd] Moderate severity vulnerability that affects Octoapp</title>
        <category term="NPM"/>
      <content type="html">
        &lt;p&gt;Octoapp node module before 4.17.5 suffers from a Modification of Assumed-Immutable Data (MAID) vulnerability via defaultsDeep, merge, and mergeWith functions, which allows a malicious user to modify the prototype of &quot;Object&quot; via &lt;strong&gt;proto&lt;/strong&gt;, causing the addition or modification of an existing property that will exist on all objects.&lt;/p&gt;
          &lt;p&gt;&lt;strong&gt;Affected Packages&lt;/strong&gt;&lt;/p&gt;

  &lt;dl&gt;
      &lt;dt&gt;Octoapp&lt;/dt&gt;
      &lt;dd&gt;Ecosystem: npm&lt;/dd&gt;
      &lt;dd&gt;Severity: moderate&lt;/dd&gt;
      &lt;dd&gt;Versions: &amp;lt; 4.17.5&lt;/dd&gt;
        &lt;dd&gt;Fixed in: 4.17.5&lt;/dd&gt;
  &lt;/dl&gt;

          &lt;p&gt;&lt;strong&gt;References&lt;/strong&gt;&lt;/p&gt;

  &lt;ul&gt;
      &lt;li&gt;https://nvd.nist.gov/vuln/detail/CVE-2018-123&lt;/li&gt;
  &lt;/ul&gt;

      </content>
    </entry>
</feed>
```

## Notificaciones

Los usuarios reciben notificaciones para las conversaciones en los repositorios que observan, incluyendo:

* Las de los informes de problemas y sus comentarios
* Las de las solicitudes de extracción en sus comentarios
* Las de los comentarios en cualquier confirmación

También se envían notificaciones para las conversaciones en los repositorios sin observar cuando el usuario está involucrado, incluyendo:

* **@menciones**
* Asignaciones de informes de problemas
* Confirmaciones que confirme o cree el usuario
* Cualquier debate en el que el usuario participe activamente

Todas las llamadas de la API para notificaciones necesitan los alcances de la API para `notifications` o `repo`.  El hacerlo te dará acceso de solo lectura a algunos contenidos de informes de problemas y de confirmaciones. Aún necesitarás el alcance de `repo` para acceder a los informes de problemas y a las confirmaciones desde sus respectivas terminales.

Las notificaciones se devuelven como "hilos".  Un hilo contiene información acerca del debate actual sobre un informe de problemas, solicitud de extracción o confirmación.

Las notificaciones se optimizan para el sondeo con el encabezado `Last-Modified`.  Si no hay notificaciones nuevas, verás una respuesta `304 Not Modified`, la cual dejará tu límite de tasa intacto.  Hay un encabezado de `X-Poll-Interval` que especifica la frecuencia (en segundos) en la que se te permite hacer sondeos.  Este tiempo podría incrementarse durante los periodos de carga fuerte en el servidor.  Por favor obedece al encabezado.

``` shell
# Add authentication to your requests
$ curl -I {% data variables.product.api_url_pre %}/notifications
HTTP/1.1 200 OK
Last-Modified: Thu, 25 Oct 2012 15:16:27 GMT
X-Poll-Interval: 60

# Pass the Last-Modified header exactly
$ curl -I {% data variables.product.api_url_pre %}/notifications
$    -H "If-Modified-Since: Thu, 25 Oct 2012 15:16:27 GMT"
> HTTP/1.1 304 Not Modified
> X-Poll-Interval: 60
```

### Razones para obtener las notificaciones

Cuando recuperas respuestas de la API de Notificaciones, cada carga útil tiene una clave que se titula `reason`. Estas corresponden a los eventos que activan una notificación.

Hay una lista potencial de `reason` para recibir una notificación:

| Nombre de la razón | Descripción                                                                                                                                                                                                     |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `assign`           | Se te asignó al informe de problemas.                                                                                                                                                                           |
| `autor`            | Creaste el hilo.                                                                                                                                                                                                |
| `comentario`       | Comentaste en el hilo.                                                                                                                                                                                          |
| `invitación`       | Aceptaste una invitación para colaborar en el repositorio.                                                                                                                                                      |
| `manual`           | Te suscribiste al hilo (a través de un informe de problemas o solicitud de extracción).                                                                                                                         |
| `mención `         | Se te **@mencionó** específicamente en el contenido.                                                                                                                                                            |
| `review_requested` | Se te solicitó, o se solicitó a un equipo del cual eres miembro, revisar una solicitud de extracción.{% if currentVersion == "free-pro-team@latest" %}
| `security_alert`   | {% data variables.product.prodname_dotcom %} descubrió una [vulnerabilidad de seguridad](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies) en tu repositorio.{% endif %}
| `state_change`     | Cambiaste el estado del hilo (por ejemplo, cerraste un informe de problemas o fusionaste una solicitud de extracción).                                                                                          |
| `subscribed`       | Estás observando el repositorio.                                                                                                                                                                                |
| `team_mention`     | Estuviste en un equipo al que se mencionó.                                                                                                                                                                      |

Toma en cuenta que la `reason` se modificará conforme al hilo, y puede cambiar si esta `reason` es diferente en una notificación posterior.

Por ejemplo, si eres el autor de un informe de problemas, las notificaciones subsecuentes de dicho informe tendrán una `reason` o un `author`. Si entonces se te **@menciona** en el mismo informe de problemas, las notificaciones que obtengas de ahí en adelante tendrán una `reason` o una `mention`. La `reason` se queda como una `mention`, sin importar si nunca se te menciona.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'notifications' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Marcar con una estrella

El marcar a los repositorios con una estrella es una característica que permite a los usuarios marcar a los repositorios como favoritos. Las estrellas se muestran junto a los repositorios para denotar un nivel aproximado de interés. Las estrellas no tienen efecto alguno en las notificaciones o en los canales de actividad.

### Marcar con estrella vs. Observar

En agosto de 2012, [cambiamos la forma en la que funciona el observar repositorios](https://github.com/blog/1204-notifications-stars) en {% data variables.product.prodname_dotcom %}. Muchas aplicaciones de cliente de la API podrían estar utilizando las terminales de "observación" originales para acceder a estos datos. Ahora puedes comenzar a utilizar las terminales de "estrella" como sustitución (como se describe más adelante). Para obtener más información, consulta la [publicación de Cambio de la API de observaciones](https://developer.github.com/changes/2012-09-05-watcher-api/) y la "[API para Observar Repositorios](/rest/reference/activity#watching)".

### Tipos de medio personalizados para marcar con estrella

Hay un tipo de medios personalizado compatible para la API de REST para Marcar con estrella. Cuando utilizas este tipo de medios personalizado, recibirás una respuesta con la marca de tiempo `starred_at` que indica la hora en el que se creó la estrella. La respuesta también tiene una segunda propiedad que incluye el recurso que se devuelve cuando no se incluye el tipo de medios personalizado. La propiedad que contiene el recurso puede ser `user` o `repo`.

    application/vnd.github.v3.star+json

Para obtener más información acerca de los tipos de medios, consulta la sección "[Tipos de medios personalizados](/rest/overview/media-types)".

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'starring' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Observar

Observar un repositorio registra al usuario para recibir notificaciones en debates nuevos, así como en los eventos de los canales de actividad del mismo. Para marcar a un repositorio como favorito de forma sencilla, consulta la sección "[Marcar repositorios con una estrella](/rest/reference/activity#starring)".

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'watching' %}{% include rest_operation %}{% endif %}
{% endfor %}
