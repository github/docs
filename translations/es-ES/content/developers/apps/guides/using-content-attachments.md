---
title: Utilizar adjuntos de contenido
intro: Los adjuntos de contenido permiten que una GitHub App proporcione más información en GitHub para las URL que vinculan a los dominios registrados. GitHub interpreta la información que proporciona la app bajo la URL en el cuerpo o el comentario de un informe de problemas o de una solicitud de extracción.
redirect_from:
  - /apps/using-content-attachments
  - /developers/apps/using-content-attachments
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub Apps
---

{% data reusables.pre-release-program.content-attachments-public-beta %}

### Acerca de los adjuntos de contenido

Una GitHub App puede registrar dominios que activarán los eventos de `content_reference`. Cuando alguien incluye una URL que vincule a un dominio registrado en el cuerpo o en el comentario de un informe de problemas o de una solicitud de extracción, la app recibe el [webhook de `content_reference`](/webhooks/event-payloads/#content_reference). Puedes utilizar los adjuntos de contenido para proporcionar visualmente más contenido o datos para la URL que se agregó a un informe de problemas o a una solicitud de extracción. La URL debe estar completamente calificada, comenzando ya sea con `http://` o con `https://`. Las URL que sean parte de un enlace de markdown se ignorarán y no activarán el evento de `content_reference`.

Antes de que puedas utilizar la API de {% data variables.product.prodname_unfurls %}, necesitarás configurar las referencias de contenido para tu GitHub App:
* Concede los permisos de `Read & write` a tu app para "Referencias de contenido".
* Registra hasta 5 dominios válidos y accesibles al público cuando configures el permiso de "Referencias de contenido". No utilices direcciones IP cuando configures dominios con referencias de contenido. Puedes registrar un nombre de dominio (ejemplo.com) o un subdominio (subdominio.ejemplo.com).
* Suscribe a tu app al evento de "Referencia de contenido".

Una vez que tu app se instale en un repositorio, los comentarios de solicitudes de extracción o de informes de problemas en éste, los cuales contengan URL para tus dominios registrados, generarán un evento de referencia de contenido. La app debe crear un adjunto de contenido en las seis horas siguientes a la publicación de la URL de referencia de contenido.

Los adjuntos de contenido no actualizarán las URL retroactivamente. Esto solo funciona para aquellas URL que se agerguen a las solicitudes de extracción o informes de problemas después de que configuras la app utilizando los requisitos descritos anteriormente y que después alguien instale la app en su repositorio.

Consulta la sección "[Crear una GitHub App](/apps/building-github-apps/creating-a-github-app/)" o "[Editar los permisos de las GitHub Apps](/apps/managing-github-apps/editing-a-github-app-s-permissions/)" para encontrar los pasos necesarios para configurar los permisos de las GitHub Apps y las suscripciones a eventos.

### Implementar el flujo de los adjuntos de contenido

El flujo de los adjuntos de contenido te muestra la relación entre la URL en el informe de problemas o en la solicitud de extracción, el evento de webhook de `content_reference`, y la terminal de la API de REST que necesitas para llamar o actualizar dicho informe de problemas o solicitud de extracción con información adicional:

**Paso 1.** Configura tu app utilizando los lineamientos descritos en la sección [Acerca de los adjuntos de contenido](#about-content-attachments). También puedes utilizar el [ejemplo de la App de Probot](#example-using-probot-and-github-app-manifests) para iniciar con los adjuntos de contenido.

**Paso 2.** Agrega la URL para el dominio que registraste a un informe de problemas o solicitud de extracción. Debes utilizar una URL totalmente calificada que comience con `http://` o con `https://`.

![URL que se agregó a un informe de problemas](/assets/images/github-apps/github_apps_content_reference.png)

**Paso 3.** Tu app recibirá el [webhook de `content_reference`](/webhooks/event-payloads/#content_reference) con la acción `created`.

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

**Paso 4.** La app utiliza los campos de la `id` de `content_reference` y del `full_name` del `repository` para [Crear un adjunto de contenido ](/rest/reference/apps#create-a-content-attachment) utilizando la API de REST. También necesitas la `id` de la `installation` para autenticarte como una [Instalación de una GitHub App](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation).

{% data reusables.pre-release-program.corsair-preview %}
{% data reusables.pre-release-program.api-preview-warning %}

El parámetro `body` puede contener lenguaje de markdown:

    ```shell
    curl -X POST \
      https://api.github.com/repos/Codertocat/Hello-World/content_references/17/attachments \
      -H 'Accept: application/vnd.github.corsair-preview+json' \
      -H 'Authorization: Bearer $INSTALLATION_TOKEN' \
      -d '{
        "title": "[A-1234] Error found in core/models.py file",
        "body": "You have used an email that already exists for the user_email_uniq field.\n ## DETAILS:\n\nThe (email)=(Octocat@github.com) already exists.\n\n The error was found in core/models.py in get_or_create_user at line 62.\n\n self.save()"
    }'
    ```

Para obtener más información acerca de crear un token de instalación, consulta la sección "[Autenticarte como una GitHub App](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)".

**Paso 5.** Verás como el nuevo adjunto de contenido aparece bajo el enlace en un comentario de una solicitud de extracción o informe de problemas:

![Contenido adjunto a una referencia en un informe de problemas](/assets/images/github-apps/content_reference_attachment.png)

### Utilizar adjuntos de contenido en GraphQL
Proporcionamos la `node_id` en el evento de [Webhook de `content_reference` ](/webhooks/event-payloads/#content_reference) para que puedas referirte a la mutación `createContentAttachment` en la API de GraphQL.

{% data reusables.pre-release-program.corsair-preview %}
{% data reusables.pre-release-program.api-preview-warning %}

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
curl -X "POST" "https://api.github.com/graphql" \
     -H 'Authorization: Bearer $INSTALLATION_TOKEN' \
     -H 'Accept: application/vnd.github.corsair-preview+json' \
     -H 'Content-Type: application/json; charset=utf-8' \
     -d $'{
  "query": "mutation {\\n  createContentAttachment(input:{contentReferenceId: \\"MDE2OkNvbnRlbnRSZWZlcmVuY2UxNjA1\\", title:\\"[A-1234] Error found in core/models.py file\\", body:\\"You have used an email that already exists for the user_email_uniq field.\n ## DETAILS:\n\nThe (email)=(Octocat@github.com) already exists.\n\n The error was found in core/models.py in get_or_create_user at line 62.\n\n\self.save()\\"}) {\\n    contentAttachment {\\n      id,\\n      title,\\n      body\\n    }\\n  }\\n}"
}'
```

Para obtener más información aacerca de `node_id`, consulta la sección "[Utilizar las Node ID Globales](/graphql/guides/using-global-node-ids)".

### Ejemplo de uso con Probot y Manifiestos de GitHub Apps

Para configurar rápidamente una GitHub App que pueda utilizar la API de {% data variables.product.prodname_unfurls %}, puedes utilizar el [Probot](https://probot.github.io/). Consulta la sección "[Crear Github Apps a partir de un manifiesto](/apps/building-github-apps/creating-github-apps-from-a-manifest/)" para aprender cómo el Probot utiliza los Manifiestos de las GitHub Apps.

Para crear una App de Probot, sigue estos pasos:

1. [Genera una GitHub App Nueva](https://probot.github.io/docs/development/#generating-a-new-app).
2. Abre el proyecto que creaste y personaliza la configuración en el archivo `app.yml`. Suscríbete al evento `content_reference` y habilita los permisos de escritura de `content_references`:

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

3. Agrega este código al archivo `index.js` para gestionar los eventos de `content_reference` y llamar a la API de REST:

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

4. [Ejecuta la GitHub App localmente](https://probot.github.io/docs/development/#running-the-app-locally). Navega hasta `http://localhost:3000`, y da clic en el botón **Registrar GitHub App**:

   ![Registrar una GitHub App de Probot](/assets/images/github-apps/github_apps_probot-registration.png)

5. Instala la app en un repositorio de prueba.
6. Crea un informe de problemas en tu repositorio de prueba.
7. Agrega un comentario en el informe de problemas que abriste, el cual incluya la URL que configuraste en el archivo `app.yml`.
8. Revisa el comentario del informe de problemas y verás una actualización que se ve así:

   ![Contenido adjunto a una referencia en un informe de problemas](/assets/images/github-apps/content_reference_attachment.png)
