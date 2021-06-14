---
title: Crear webhooks
intro: 'Aprende a crear un webhook, escoger los eventos a los cuales escuchará en {% data variables.product.prodname_dotcom %} y cómo configurar un servidor para recibir y administrar su carga útil.'
redirect_from:
  - /webhooks/creating
  - /developers/webhooks-and-events/creating-webhooks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Webhooks
---
Ahora que entendemos [lo básico de los webhooks][webhooks-overview], vamos a revisar el proceso de creación de nuestra propia integración impulsada por webhooks. En este tutorial, crearemos un webhook de repositorio que será responsable de listar qué tan popular es nuestro repositorio con base en la cantidad de informes de problemas que recibe diariamente.

Crear un webhook es un proceso de dos pasos. Primero necesitas configurar la forma en la que quieres que se comporte tu webhook a través de {% data variables.product.product_name %}, es decir: a qué eventos quieres que escuche. Después, configurarás tu servidor para recibir y administrar la carga útil.

### Configurar un Webhook

Puedes instalar webhooks en una organización o en un repositorio específico.

Para configurar un webhook, ve a la página de configuración de tu repositorio u organización. Desde ahí, da clic en **Webhooks**, y luego en **Agregar webhook**.

Como alternativa, puedes elegir el crear y administrar un webhook [através de la API de Webhooks][webhook-api].

Los Webhooks necesitan configurar algunas de sus opciones antes de que los puedas utilizar. Vamos a ver cada una de éstas opciones a continuación.

### URL de la carga útil

{% data reusables.webhooks.payload_url %}

Ya que estamos desarrollando todo localmente para nuestro tutorial, configurémosla como `http://localhost:4567/payload`. Te explicaremos por qué en los documentos de [Configurar tu Servidor](/webhooks/configuring/).

### Tipo de Contenido

{% data reusables.webhooks.content_type %} Para efecto de este tutorial, está bien si usas el tipo de contenido predeterminado de `application/json`.

### Secreto

{% data reusables.webhooks.secret %}

### Verificación de SSL

{% data reusables.webhooks.webhooks_ssl %}

### Activo

Predeterminadamente, las entregas de webhook están "Activas". También puedes elegir inhabilitar la entrega de cargas útiles de webhooks si deseleccionas "Activo".

### Eventos

Los eventos son el núcleo de los webhooks. Estos webhooks se disparan cuando se toma alguna acción específica en el repositorio, la cual intercepta tu URL de carga útil de l servidor para actuar sobre ella.

Puedes encontrar un listado completo de eventos de webhook y del cuándo se ejecutan en la referencia de [la API de webhooks][hooks-api].

Ya que nuestro webhook trata con informes de problemas en un repositorio, vamos a dar clic en **Permíteme seleccionar eventos individuales** y, posteriormente, en **Informes de problemas**. Asegúrate de seleccionar **Activo** para recibir eventos de los informes de problemas para los webhooks que se activen. También puedes seleccionar todos los eventos utilizando la opción predeterminada.

Cuando hayas terminado, da clic en **Agregar webhook**. ¡Uf! Ahora que creaste el webhook, es momento de configurar nuestro servidor local para probarlo. Dirígete a [Configurar tu Servidor](/webhooks/configuring/) para aprender cómo hacerlo.

#### Evento de Comodín

Para configurar un webhook para todos los eventos, utiliza el caracter de comodín (`*`) para especificar dichos eventos. Cuando agregas el evento de comodín, reemplazaremos cualquier evento existente que hayas configurado con el evento de comodín se te enviarán las cargas útiles para todos los eventos compatibles. También obtendrás automáticamente cualquier evento nuevo que pudiéramos agregar posteriormente.

[webhooks-overview]: /webhooks/
[webhook-api]: /v3/repos/hooks/
[hooks-api]: /webhooks/#events
