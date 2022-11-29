---
title: Crear webhooks
intro: 'Aprende a crear un webhook, escoger los eventos a los cuales escuchará en {% data variables.product.prodname_dotcom %} y cómo configurar un servidor para recibir y administrar su carga útil.'
redirect_from:
  - /webhooks/creating
  - /developers/webhooks-and-events/creating-webhooks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
ms.openlocfilehash: ced763e71ecc9f99d8dd5037dcdb6d87cfdba91d
ms.sourcegitcommit: 6b1c6174d0df40c90edfd7526496baabb1dd159d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/04/2022
ms.locfileid: '148132975'
---
Ahora que entendemos [los conceptos básicos de los webhooks][webhooks-overview], vamos a recorrer el proceso de creación de nuestra propia integración con tecnología de webhook. En este tutorial, crearemos un webhook de repositorio que será responsable de listar qué tan popular es nuestro repositorio con base en la cantidad de propuestas que recibe diariamente.

Crear un webhook es un proceso de dos pasos. En primer lugar, deberás configurar los eventos que debe escuchar el webhook. Después, configurarás tu servidor para recibir y administrar la carga útil.


{% data reusables.webhooks.webhooks-rest-api-links %}

## Exponer un host local al internet

Para los propósitos de este tutorial, utilizaremos un servidor local para recibir eventos de webhook de {% data variables.product.prodname_dotcom %}. 

En primer lugar, es necesario exponer nuestro entorno de desarrollo local a Internet para que {% data variables.product.prodname_dotcom %} pueda entregar eventos. Utilizaremos [`ngrok`](https://ngrok.com) para hacerlo.

{% ifversion cli-webhook-forwarding %} {% note %}

**Nota:** Como alternativa, puedes usar el reenvío de webhooks para configurar el entorno local para recibir webhooks. Para obtener más información, consulta "[Recepción de webhooks con la CLI de GitHub](/developers/webhooks-and-events/webhooks/receiving-webhooks-with-the-github-cli)".

{% endnote %} {% endif %}

`ngrok` está disponible, gratuitamente, para los sistemas operativos principales. Para obtener más información, consulte la [página de descarga de `ngrok`](https://ngrok.com/download).

Después de instalar `ngrok`, puede exponer el host local ejecutando `./ngrok http 4567` en la línea de comandos. `4567` es el número de puerto en el que nuestro servidor escuchará mensajes. Deberías ver una línea que se ve más o menos así:

```shell
$ Forwarding  http://7e9ea9dc.ngrok.io -> 127.0.0.1:4567
```

Anote los valores de la dirección URL de `*.ngrok.io`. La utilizaremos para configurar nuestro webhook.

## Configuración de un webhook

Puedes instalar webhooks en una organización o en un repositorio específico.

Para configurar un webhook, ve a la página de configuración de tu repositorio u organización. Desde allí, haga clic en **Webhooks** y, a continuación, en **Add webhook**.

También puede elegir compilar y administrar un webhook desde la [API de webhooks][webhook-api].

Los Webhooks necesitan configurar algunas de sus opciones antes de que los puedas utilizar. Vamos a ver cada una de éstas opciones a continuación.

## Dirección URL de carga

{% data reusables.webhooks.payload_url %}

Dado que estamos desarrollando a nivel local para nuestro tutorial, lo estableceremos en la dirección URL de `*.ngrok.io`, seguida de `/payload`. Por ejemplo, `http://7e9ea9dc.ngrok.io/payload`.

## Tipo de contenido

{% data reusables.webhooks.content_type %} Para este tutorial, el tipo de contenido predeterminado `application/json` está bien.

## Secreto

{% data reusables.webhooks.secret %}

## Verificación SSL

{% data reusables.webhooks.webhooks_ssl %}

## Activo

Predeterminadamente, las entregas de webhook están "Activas". También puedes elegir inhabilitar la entrega de cargas útiles de webhooks si deseleccionas "Activo".

## Eventos

Los eventos son el núcleo de los webhooks. Estos webhooks se disparan cuando se toma alguna acción específica en el repositorio, la cual intercepta tu URL de carga útil de l servidor para actuar sobre ella.

Encontrará una lista completa de eventos de webhook, especificando cuándo se ejecutan, en la referencia de la [API de webhooks][hooks-api].

Dado que nuestro webhook gestiona las incidencias de un repositorio, haremos clic en **Let me select individual events** y, a continuación, en **Issues**. Asegúrese de seleccionar **Active** (Activo) para recibir eventos de problema para los webhook desencadenados. También puedes seleccionar todos los eventos utilizando la opción predeterminada.

Cuando haya terminado, haga clic en **Add webhook**. 

Ahora que creaste el webhook, es momento de configurar nuestro servidor local para probarlo. Vaya a [ Configuración del servidor](/webhooks/configuring/) para saber cómo hacerlo.

### Evento de comodín

Para configurar un webhook para todos los eventos, utilice el carácter comodín (`*`) para especificar los eventos. Cuando agregas el evento de comodín, reemplazaremos cualquier evento existente que hayas configurado con el evento de comodín se te enviarán las cargas útiles para todos los eventos compatibles. También obtendrás automáticamente cualquier evento nuevo que pudiéramos agregar posteriormente.

[webhooks-overview]: /webhooks/
[webhook-api]: /rest/reference/repos#hooks
[hooks-api]: /webhooks/#events
