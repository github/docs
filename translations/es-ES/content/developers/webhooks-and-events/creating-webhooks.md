---
title: Crear webhooks
intro: 'Aprende a crear un webhook, escoger los eventos a los cuales escuchará en {% data variables.product.prodname_dotcom %} y cómo configurar un servidor para recibir y administrar su carga útil.'
redirect_from:
  - /webhooks/creating
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - webhooks
---



Ahora que entendemos [lo básico de los webhooks][webhooks-overview], vamos a revisar el proceso de creación de nuestra propia integración impulsada por webhooks. En este tutorial, crearemos un webhook de repositorio que será responsable de listar qué tan popular es nuestro repositorio con base en la cantidad de propuestas que recibe diariamente.

Crear un webhook es un proceso de dos pasos. Primero necesitas configurar la forma en la que quieres que se comporte tu webhook a través de {% data variables.product.product_name %}, es decir: a qué eventos quieres que escuche. Después, configurarás tu servidor para recibir y administrar la carga útil.


{% data reusables.webhooks.webhooks-rest-api-links %}

### Exponer un host local al internet

Para los propósitos de este tutorial, utilizaremos un servidor local para recibir imágenes de {% data variables.product.prodname_dotcom %}. Así que, primero que nada, necesitamos exponer nuestro ambiente de desarrollo local al internet. Utilizaremos ngrok para hacerlo. ngrok está disponible, gratuitamente, para los sistemas operativos principales. Para obtener más información, consulta [la página de descarga de ngrok](https://ngrok.com/download).

Después de instalar ngrok, puedes exponer a tu host local si ejecutas `./ngrok http 4567` en la línea de comandos. el número de puerto en el que nuestro servidor escuchará mensajes es el 4567. Deberías ver una línea que se ve más o menos así:

```shell
$ Forwarding    http://7e9ea9dc.ngrok.io -> 127.0.0.1:4567
```

Anota la URL de `*.ngrok.io`. La utilizaremos para configurar nuestro webhook.

### Configurar un webhook

Puedes instalar webhooks en una organización o en un repositorio específico.

Para configurar un webhook, ve a la página de configuración de tu repositorio u organización. Desde ahí, da clic en **Webhooks**, y luego en **Agregar webhook**.

Como alternativa, puedes elegir el crear y administrar un webhook [através de la API de Webhooks][webhook-api].

Los Webhooks necesitan configurar algunas de sus opciones antes de que los puedas utilizar. Vamos a ver cada una de éstas opciones a continuación.

### URL de la carga útil

{% data reusables.webhooks.payload_url %}

Ya que estamos desarrollando todo localmente para nuestro tutorial, lo configuraremos en la URL `*.ngrok.io`, seguido de `/payload`. Por ejemplo, `http://7e9ea9dc.ngrok.io/payload`.

### Tipo de contenido

{% data reusables.webhooks.content_type %} Para efecto de este tutorial, está bien si usas el tipo de contenido predeterminado de `application/json`.

### Secreto

{% data reusables.webhooks.secret %}

### Verificación SSL

{% data reusables.webhooks.webhooks_ssl %}

### Activo

Predeterminadamente, las entregas de webhook están "Activas". También puedes elegir inhabilitar la entrega de cargas útiles de webhooks si deseleccionas "Activo".

### Eventos

Los eventos son el núcleo de los webhooks. Estos webhooks se disparan cuando se toma alguna acción específica en el repositorio, la cual intercepta tu URL de carga útil de l servidor para actuar sobre ella.

Puedes encontrar un listado completo de eventos de webhook y del cuándo se ejecutan en la referencia de [la API de webhooks][hooks-api].

Ya que nuestro webhook trata con informes de problemas en un repositorio, vamos a dar clic en **Permíteme seleccionar eventos individuales** y, posteriormente, en **Informes de problemas**. Asegúrate de seleccionar **Activo** para recibir eventos de los informes de problemas para los webhooks que se activen. También puedes seleccionar todos los eventos utilizando la opción predeterminada.

Cuando hayas terminado, da clic en **Agregar webhook**.

Ahora que creaste el webhook, es momento de configurar nuestro servidor local para probarlo. Dirígete a [Configurar tu Servidor](/webhooks/configuring/) para aprender cómo hacerlo.

#### Evento de comodín

Para configurar un webhook para todos los eventos, utiliza el caracter de comodín (`*`) para especificar dichos eventos. Cuando agregas el evento de comodín, reemplazaremos cualquier evento existente que hayas configurado con el evento de comodín se te enviarán las cargas útiles para todos los eventos compatibles. También obtendrás automáticamente cualquier evento nuevo que pudiéramos agregar posteriormente.

[webhooks-overview]: /webhooks/
[webhook-api]: /rest/reference/repos#hooks
[hooks-api]: /webhooks/#events
