---
title: Crear una GitHub App a partir de un manifiesto
intro: 'Un Manifiesto de una GitHub App es una GitHub App preconfigurada que puedes compartir con cualquiera que desée utilizar tu app en sus repositorios personales. El flujo del manifiesto les permite a los usuarios crear, instalar y comenzar a extender una GitHub App rápidamente sin necesidad de registrarla o de conectar el registro al código hospedado de la app.'
redirect_from:
  - /apps/building-github-apps/creating-github-apps-from-a-manifest
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub Apps
---


### Acerca de los Manifiestos de las GitHub Apps

Cuando alguien crea una GitHub App desde un manifiesto, únicamente necesitan seguir una URL y nombrar a la app. El manifiesto incluye los permisos, eventos, y URL de los webhooks que se necesiten para registrar la app automáticamente. El flujo del manifiesto crea el registro de la GitHub App y recupera el secreto del webhook, llave privada (archivo PEM), e ID de la GitHub App. Quien sea que cree la app desde el manifiesto será el propietario de la misma y podrá elegir [editar los ajustes de la configuración de seguridad de la app](/apps/managing-github-apps/modifying-a-github-app/), eliminarlos, o transferirlos a otra persona en GitHub.

Puedes utilizar al [Probot](https://probot.github.io/) para comenzar a utilizar los Manifiestos de las GitHub Apps o ver un ejemplo de implementación. Consulta la sección "[Utilizar al Probot para implementar el flujo del Manifiesto de las GitHub Apps](#using-probot-to-implement-the-github-app-manifest-flow)" para obtener más información.

Aquí te mostramos algunos escenarios en donde podrías utilizar los Manifiestos de las GitHub Apps para crear apps preconfiguradas:

* Para ayudar a los miembros nuevos del equipo a que se familiaricen rápidamente con el desarrollo de las GitHub Apps.
* Para permitir que otros extiendan una GitHub App utilizando las API de GitHub sin que necesiten configurar dicha app.
* Para crear diseños de referencia de GitHub Apps y compartirlos con la comunidad de GitHub.
* Para garantizar que despliegas GitHub Apps en los ambientes de desarrollo y de producción utilizando la misma configuración.
* Para rastrear las revisiones hechas en la configuración de una GitHub App.

### Implementar el flujo del Manifiesto de una GitHub App

El flujo del Manifiesto de una GitHub App utiliza un proceso de intercambio similar al del [flujo de OAuth](/apps/building-oauth-apps/authorizing-oauth-apps/). El flujo utiliza un manifiesto para [registrar una GitHub App](/apps/building-github-apps/creating-a-github-app/) y recibe un `code` temporal que se utiliza para recuperar la llave privada, webhoo, secreto, e ID de la misma.

{% note %}

**Nota:** Tienes solo una hora para completar los tres pasos del flujo del Manifiesto de la GitHub App.

{% endnote %}

Sigue estos pasos par aimplementar el flujo del Manifiesto de la GitHub App:

1. Redireccionas a las personas a GitHub para crear una GitHub App Nueva.
1. GitHub redirige a las personas de vuelta a tu sitio.
1. Intercambias el código temporal para recuperar la configuración de la app.

#### 1. Redireccionas a las personas a GitHub para crear una GitHub App Nueva

Para redireccionar a las personas a crear una GitHub App nueva, [proporciona un enlace](#examples) para que ellos den clic y envíen una solicitud de `POST` a `https://github.com/settings/apps/new` para una cuenta de usuario o a `https://github.com/organizations/ORGANIZATION/settings/apps/new` para una cuenta de organización, reemplazando `ORGANIZATION` con el nombre de la cuenta de organización en donde se creará la app.

Debes incluir los [Parámetros del Manifiesto de la GitHub App](#github-app-manifest-parameters) como una secuencia cifrada con JSON en un parámetro que se llame `manifest`. También puedes incluir un [parámetro](#parameters) de `state` para agregar seguridad adicional.

Se redirigirá al creador de la app a una página de GitHub en donde encontrará un campo de entrada y ahí podrá editar el nombre de la app que incluiste en el parámetro de `manifest`. Si no incluyes un `name` en el `manifest`, podrán configurar un nombre de su elección para la app en este campo.

![Crear un Manifiesto de una GitHub App](/assets/images/github-apps/create-github-app-manifest.png)

##### Parámetros del Manifiesto de la GitHub App

 | Nombre                | Type                     | Descripción                                                                                                                                                                                                                                                     |
 | --------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 | `name (nombre)`       | `secuencia`              | El nombre dela GitHub App.                                                                                                                                                                                                                                      |
 | `url`                 | `secuencia`              | **Requerido.** La página principal de tu GitHub App.                                                                                                                                                                                                            |
 | `hook_attributes`     | `objeto`                 | La configuración del webhook de la GitHub App.                                                                                                                                                                                                                  |
 | `redirect_url`        | `secuencia`              | The full URL to redirect to after a user initiates the creation of a GitHub App from a manifest.{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@next" or currentVersion ver_gt "enterprise-server@3.0" %}
 | `callback_urls`       | `conjunto de secuencias` | A full URL to redirect to after someone authorizes an installation. You can provide up to 10 callback URLs.{% else %}
 | `callback_url`        | `secuencia`              | A full URL to redirect to after someone authorizes an installation.{% endif %}
 | `descripción`         | `secuencia`              | Una descripción de la GitHub App.                                                                                                                                                                                                                               |
 | `public`              | `boolean`                | Configúralo como `true` cuando tu GitHub App esté disponible al público o como `false` si solo puede acceder el propietario de la misma.                                                                                                                        |
 | `default_events`      | `arreglo`                | La lista de [eventos](/webhooks/event-payloads) a la cual se suscribe la GitHub App.                                                                                                                                                                            |
 | `default_permissions` | `objeto`                 | El conjunto de [permisos](/rest/reference/permissions-required-for-github-apps) que requiere la GitHub App. El formato del objeto utiliza el nombre del permiso para la clave (por ejemplo, `issues`) y el tipo de acceso para el valor (por ejemplo, `write`). |

El objeto `hook_attributes` tiene la siguiente clave:

| Nombre   | Type        | Descripción                                                                                   |
| -------- | ----------- | --------------------------------------------------------------------------------------------- |
| `url`    | `secuencia` | **Requerido.** La URL del servidor que recibirá las solicitudes de `POST` del webhook.        |
| `active` | `boolean`   | Entrega detalles del evento cuando se activa este gancho y su valor predeterminado es "true". |

##### Parámetros

 | Nombre  | Type        | Descripción                                 |
 | ------- | ----------- | ------------------------------------------- |
 | `state` | `secuencia` | {% data reusables.apps.state_description %}

##### Ejemplos

Este ejemplo utiliza un formato en una página web con un botón que activa la solicitud de tipo `POST` para una cuenta de usuario:

```html
<form action="https://github.com/settings/apps/new?state=abc123" method="post">
 Create a GitHub App Manifest: <input type="text" name="manifest" id="manifest"><br>
 <input type="submit" value="Submit">
</form>

<script>
 input = document.getElementById("manifest")
 input.value = JSON.stringify({
   "name": "Octoapp",
   "url": "https://www.example.com",
   "hook_attributes": {
     "url": "https://example.com/github/events",
   },
   "redirect_url": "https://example.com/redirect",
   {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@next" or currentVersion ver_gt "enterprise-server@3.0" %}"callback_urls": [
     "https://example.com/callback"
   ],{% else %}"callback_url": "https://example.com/callback",{% endif %}
   "public": true,
   "default_permissions": {
     "issues": "write",
     "checks": "write"
   },
   "default_events": [
     "issues",
     "issue_comment",
     "check_suite",
     "check_run"
   ]
 })
</script>
```

Este ejemplo utiliza un formato en una página web con un botón que activa la solicitud de tipo `POST` para una cuenta de organización. Reemplaza a `ORGANIZATION` con el nombre de la cuenta de organización en donde quieras crear la app.

```html
<form action="https://github.com/organizations/ORGANIZATION/settings/apps/new?state=abc123" method="post">
 Create a GitHub App Manifest: <input type="text" name="manifest" id="manifest"><br>
 <input type="submit" value="Submit">
</form>

<script>
 input = document.getElementById("manifest")
 input.value = JSON.stringify({
   "name": "Octoapp",
   "url": "https://www.example.com",
   "hook_attributes": {
     "url": "https://example.com/github/events",
   },
   "redirect_url": "https://example.com/redirect",
   {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@next" or currentVersion ver_gt "enterprise-server@3.0" %}"callback_urls": [
     "https://example.com/callback"
   ],{% else %}"callback_url": "https://example.com/callback",{% endif %}
   "public": true,
   "default_permissions": {
     "issues": "write",
     "checks": "write"
   },
   "default_events": [
     "issues",
     "issue_comment",
     "check_suite",
     "check_run"
   ]
 })
</script>
```

#### 2. GitHub redirige a las personas de vuelta a tu sitio

Cuando la persona dé clic en **Crear GitHub App**, Github lo redirigirá a la `redirect_url` con un `code` temporal en un parámetro de código. Por ejemplo:

    https://example.com/redirect?code=a180b1a3d263c81bc6441d7b990bae27d4c10679

Si proporcionaste un parámetro de `state`, también verás este parámetro en la `redirect_url`. Por ejemplo:

    https://example.com/redirect?code=a180b1a3d263c81bc6441d7b990bae27d4c10679&state=abc123

#### 3. Intercambias el código temporal para recuperar la configuración de la app

Para completar el intercambio, envía el `code` temporal en una solicitud de tipo `POST` a la terminal [Crear una Github App a partir de un manifiesto](/rest/reference/apps#create-a-github-app-from-a-manifest). La respuesta incluirá la `id` (GitHub App ID), la `pem` (llave privada), y el `webhook_secret`. GitHub crea un secreto de webhook para la app de forma automática. Puedes almacenar estos valores en variables de ambiente dentro del servidor de la app. Por ejemplo, si tu app utiliza [dotenv](https://github.com/bkeepers/dotenv) para almacenar las variables de ambiente, almacenarías las variables en el archivo `.env` de tu app.

Tienes solo una hora para completar este paso en el flujo del Manifiesto de la GitHub App.

{% note %}

**Nota:** Esta terminal tiene un límite de tasa. Consulta la sección [Límites de tasa](/rest/reference/rate-limit) para aprender cómo obtener tu estado actual de límite de tasa.

{% endnote %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.21" %}
{% data reusables.pre-release-program.fury-pre-release %}
{% data reusables.pre-release-program.api-preview-warning %}
{% endif %}

    POST /app-manifests/:code/conversions

Para obtener más información acerca de la respuesta de la terminal, consulta la sección [Crear una GitHub App desde un manifiesto](/rest/reference/apps#create-a-github-app-from-a-manifest).

Cuando se complete el último paso del flujo del manifiesto, la persona que cree la app desde el flujo será el propietario de una GitHub App registrada que podrá instalar en cualquiera de sus repositorios personales. En cualquier momento podrán elegir extender la app utilizando las API de GitHub, transferir la propiedad a alguien más, o borrarla.

### Utilizar el Probot par aimplementar el flujo del Manifiesto de la GitHub App

El [Probot](https://probot.github.io/) es un marco de trabajo que se creó con [Node.js](https://nodejs.org/) y que realiza muchas de las tareas que todas las GitHub Apps requieren, como el validar webhooks y llevar a cabo la autenticación. El Probot implementa el [flujo del manifiesto de las GitHub Apps](#implementing-the-github-app-manifest-flow), lo cual facilita el crear y compartir los diseños de referencia de las GitHub Apps con la comunidad de GtiHub.

Para crear una App de Probot que puedas compartir, sigue estos pasos:

1. [Genera una GitHub App Nueva](https://probot.github.io/docs/development/#generating-a-new-app).
1. Abre el proyecto que creaste y personaliza la configuración en el archivo `app.yml`. El Probot utiliza la configuración en `app.yml` como los [parámetros del manifiesto dela GitHub App](#github-app-manifest-parameters).
1. Agrega el código personalizado de tu aplicación.
1. [Ejecuta la GitHub App localmente](https://probot.github.io/docs/development/#running-the-app-locally) u [hospédala en donde quieras](#hosting-your-app-with-glitch). Cuando navegues a la URL de la app hospedada, encontrarás una página web con un botón de **Registrar GitHub App** en el que as personas podrán dar clic para crear una app preconfigurada. La siguiente página web es la implementación del Probot para el [paso 1](#1-you-redirect-people-to-github-to-create-a-new-github-app) en el flujo del Manifiesto de la GitHub App:

![Registrar una GitHub App de Probot](/assets/images/github-apps/github_apps_probot-registration.png)

Al utilizar [dotenv](https://github.com/bkeepers/dotenv), el Probot crea un archivo de tipo `.env` y configura las variables de ambiente para la `APP_ID`, `PRIVATE_KEY`, y el `WEBHOOK_SECRET` con los valores que [recupera de la configuración de la app](#3-you-exchange-the-temporary-code-to-retrieve-the-app-configuration).

#### Hospedar tu app con Glitch

Puedes ver un ejemplo de una [App de Probot de muestra](https://glitch.com/~auspicious-aardwolf) que utiliza [Glitch](https://glitch.com/) para hospedar y compartir la app. El ejemplo utiliza la [API de verificaciones](/rest/reference/checks) y selecciona los eventos necesarios de la misma y los permisos en el archivo `app.yml`. Glitch es una herramienta que te permite "Remezclar tus propias apps". El remezclar una app crea una copia de la app que Glitch hospeda y despliega. Consulta la sección "[Acerca de Glitch](https://glitch.com/about/)" para aprender sobre cómo remezclar las apps de Glitch.
