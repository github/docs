---
title: Utilizar adjuntos de contenido
intro: Los adjuntos de contenido permiten que una GitHub App proporcione más información en GitHub para las URL que vinculan a los dominios registrados. GitHub interpreta la información que proporciona la app bajo la URL en el cuerpo o el comentario de un informe de problemas o de una solicitud de extracción.
redirect_from:
  - /apps/using-content-attachments
  - /developers/apps/using-content-attachments
versions:
  ghes: <3.4
topics:
  - GitHub Apps
ms.openlocfilehash: f557a804d48144df24398f75e90a589d563d941b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147081028'
---
{% data reusables.pre-release-program.content-attachments-public-beta %}

## Acerca de los adjuntos de contenido

Una aplicación de GitHub puede registrar dominios que desencadenarán eventos de `content_reference`. Cuando alguien incluye una dirección URL que se vincula a un dominio registrado en el cuerpo o comentario de una incidencia o solicitud de incorporación de cambios, la aplicación recibe el [`content_reference` webhook](/webhooks/event-payloads/#content_reference). Puedes utilizar los adjuntos de contenido para proporcionar visualmente más contenido o datos para la URL que se agregó a un informe de problemas o a una solicitud de extracción. La dirección URL debe ser una URL completa que empiece por `http://` o `https://`. Las direcciones URL que forman parte de un vínculo de Markdown se omiten y no desencadenan el evento `content_reference`.

Antes de que puedas utilizar la API de {% data variables.product.prodname_unfurls %}, necesitarás configurar las referencias de contenido para tu GitHub App:
* Conceda permisos de `Read & write` a la aplicación para "Referencias de contenido".
* Registra hasta 5 dominios válidos y accesibles al público cuando configures el permiso de "Referencias de contenido". No utilices direcciones IP cuando configures dominios con referencias de contenido. Puedes registrar un nombre de dominio (ejemplo.com) o un subdominio (subdominio.ejemplo.com).
* Suscribe a tu app al evento de "Referencia de contenido".

Una vez que tu app se instale en un repositorio, los comentarios de solicitudes de extracción o de informes de problemas en éste, los cuales contengan URL para tus dominios registrados, generarán un evento de referencia de contenido. La app debe crear un adjunto de contenido en seis horas desde que se publique la URL de referencia de contenido.

Los adjuntos de contenido no actualizarán las URL retroactivamente. Esto solo funciona para aquellas URL que se agerguen a las solicitudes de extracción o informes de problemas después de que configuras la app utilizando los requisitos descritos anteriormente y que después alguien instale la app en su repositorio.

Consulte "[Crear una aplicación de GitHub](/apps/building-github-apps/creating-a-github-app/)" o "[Editar los permisos de una aplicación de GitHub](/apps/managing-github-apps/editing-a-github-app-s-permissions/)" para conocer los pasos necesarios para configurar permisos de aplicación y suscripciones de eventos de GitHub.

## Implementar el flujo de los adjuntos de contenido

El flujo de los datos adjuntos de contenido muestra la relación entre la dirección URL en la incidencia o solicitud de incorporación de cambios, el evento de webhook de `content_reference` y el punto de conexión de la API de REST a la que necesita llamar para actualizar la incidencia o solicitud de incorporación de cambios con información adicional:

**Paso 1.** Configure la aplicación con las directrices que se describen en [Acerca de los datos adjuntos de contenido](#about-content-attachments). También puede usar el [ejemplo de la aplicación Probot](#example-using-probot-and-github-app-manifests) para empezar a trabajar con datos adjuntos de contenido.

**Paso 2.** Agregue la dirección URL del dominio que registró en una incidencia o solicitud de incorporación de cambios. Debe usar una dirección URL completa que comience por `http://` o `https://`.

![URL que se agregó a un informe de problemas](/assets/images/github-apps/github_apps_content_reference.png)

**Paso 3.** La aplicación recibirá el [`content_reference` webhook](/webhooks/event-payloads/#content_reference) con la acción `created`.

``` json
{
  "action": "created",
  "content_reference": {
    "id": 17,
    "node_id": "MDE2OkNvbnRlbnRSZWZlcmVuY2UxNjA5",
    "reference": "errors.ai"
  },
  "repository": {
    "full_name": "Codertocat/Hello-World",
  },
  "sender": {...},
  "installation": {
    "id": 371641,
    "node_id": "MDIzOkludGVncmF0aW9uSW5zdGFsbGF0aW9uMzcxNjQx"
  }
}
```

**Paso 4.** La aplicación usa los campos `content_reference``id` y `repository``full_name` para [crear datos adjuntos de contenido](/rest/reference/apps#create-a-content-attachment) mediante la API de REST. También necesitará `installation` `id` para autenticarse como una [instalación de aplicación de GitHub](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation).

{% data reusables.pre-release-program.corsair-preview %} {% data reusables.pre-release-program.api-preview-warning %}

El parámetro `body` puede contener Markdown:

```shell
curl -X POST \
  {% data variables.product.api_url_code %}/repos/Codertocat/Hello-World/content_references/17/attachments \
  -H 'Accept: application/vnd.github.corsair-preview+json' \
  -H 'Authorization: Bearer $INSTALLATION_TOKEN' \
  -d '{
    "title": "[A-1234] Error found in core/models.py file",
    "body": "You have used an email that already exists for the user_email_uniq field.\n ## DETAILS:\n\nThe (email)=(Octocat@github.com) already exists.\n\n The error was found in core/models.py in get_or_create_user at line 62.\n\n self.save()"
}'
```

Para obtener más información sobre cómo crear un token de instalación, consulte "[Autenticación como una aplicación de GitHub](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)".

**Paso 5.** Verá que los nuevos datos adjuntos de contenido aparecen debajo del vínculo en una solicitud de incorporación de cambios o un comentario de incidencia:

![Contenido adjunto a una referencia en un informe de problemas](/assets/images/github-apps/content_reference_attachment.png)

## Utilizar adjuntos de contenido en GraphQL
Proporcionamos el `node_id` en el evento de [`content_reference`webhook](/webhooks/event-payloads/#content_reference) para que pueda hacer referencia a la mutación de `createContentAttachment` en GraphQL API.

{% data reusables.pre-release-program.corsair-preview %} {% data reusables.pre-release-program.api-preview-warning %}

Por ejemplo:

``` graphql
mutation {
  createContentAttachment(input: {
    contentReferenceId: "MDE2OkNvbnRlbnRSZWZlcmVuY2UxNjA1",
    title: "[A-1234] Error found in core/models.py file",
    body:"You have used an email that already exists for the user_email_uniq field.\n ## DETAILS:\n\nThe (email)=(Octocat@github.com) already exists.\n\n The error was found in core/models.py in get_or_create_user at line 62.\n\n self.save()"
  }) {
    contentAttachment {
      ... on ContentAttachment {
        id
        title
        body
      }
    }
  }
}
```
cURL de ejemplo:

```shell
curl -X "POST" "{% data variables.product.api_url_code %}/graphql" \
     -H 'Authorization: Bearer $INSTALLATION_TOKEN' \
     -H 'Accept: application/vnd.github.corsair-preview+json' \
     -H 'Content-Type: application/json; charset=utf-8' \
     -d $'{
  "query": "mutation {\\n  createContentAttachment(input:{contentReferenceId: \\"MDE2OkNvbnRlbnRSZWZlcmVuY2UxNjA1\\", title:\\"[A-1234] Error found in core/models.py file\\", body:\\"You have used an email that already exists for the user_email_uniq field.\n ## DETAILS:\n\nThe (email)=(Octocat@github.com) already exists.\n\n The error was found in core/models.py in get_or_create_user at line 62.\n\n\self.save()\\"}) {\\n    contentAttachment {\\n      id,\\n      title,\\n      body\\n    }\\n  }\\n}"
}'
```

Para obtener más información sobre `node_id`, consulte "[Uso de identificadores de nodo global](/graphql/guides/using-global-node-ids)".

## Ejemplo de uso con Probot y Manifiestos de GitHub Apps

Para configurar rápidamente una aplicación de GitHub que puede usar la API de {% data variables.product.prodname_unfurls %}, puede utilizar [Probot](https://probot.github.io/). Consulte "[Creación de aplicaciones GitHub a partir de un manifiesto](/apps/building-github-apps/creating-github-apps-from-a-manifest/)" para obtener información sobre cómo usa Probot los manifiestos de aplicaciones de GitHub.

Para crear una App de Probot, sigue estos pasos:

1. [Genere una nueva aplicación de GitHub](https://probot.github.io/docs/development/#generating-a-new-app).
2. Abra el proyecto que ha creado y personalice la configuración en el archivo `app.yml`. Suscríbase al evento `content_reference` y habilite los permisos de escritura `content_references`:

   ``` yml
    default_events:
      - content_reference
    # The set of permissions needed by the GitHub App. The format of the object uses
    # the permission name for the key (for example, issues) and the access type for
    # the value (for example, write).
    # Valid values are `read`, `write`, and `none`
    default_permissions:
      content_references: write

    content_references:
      - type: domain
        value: errors.ai
      - type: domain
        value: example.org
   ```

3. Agregue este código al archivo `index.js` para controlar eventos de `content_reference` y llame a la API de REST:

    ``` javascript
    module.exports = app => {
      // Your code here
      app.log('Yay, the app was loaded!')
       app.on('content_reference.created', async context => {
        console.log('Content reference created!', context.payload)
         // Call the "Create a content reference" REST endpoint
        await context.github.request({
          method: 'POST',
          headers: { accept: 'application/vnd.github.corsair-preview+json' },
          url: `/repos/${context.payload.repository.full_name}/content_references/${context.payload.content_reference.id}/attachments`,
          // Parameters
          title: '[A-1234] Error found in core/models.py file',
          body: 'You have used an email that already exists for the user_email_uniq field.\n ## DETAILS:\n\nThe (email)=(Octocat@github.com) already exists.\n\n The error was found in core/models.py in get_or_create_user at line 62.\n\nself.save()'
        })
      })
    }
    ```

4. [Ejecute la aplicación de GitHub localmente](https://probot.github.io/docs/development/#running-the-app-locally). Vaya a `http://localhost:3000` y haga clic en el botón **Register GitHub App**:

   ![Registrar una GitHub App de Probot](/assets/images/github-apps/github_apps_probot-registration.png)

5. Instala la app en un repositorio de prueba.
6. Crea un informe de problemas en tu repositorio de prueba.
7. Agregue un comentario a la incidencia que abrió que incluye la dirección URL que configuró en el archivo `app.yml`.
8. Revisa el comentario del informe de problemas y verás una actualización que se ve así:

   ![Contenido adjunto a una referencia en un informe de problemas](/assets/images/github-apps/content_reference_attachment.png)
