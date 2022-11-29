---
title: Crear una GitHub App a partir de un manifiesto
intro: 'Un Manifiesto de una GitHub App es una GitHub App preconfigurada que puedes compartir con cualquiera que desée utilizar tu app en sus repositorios personales. El flujo del manifiesto les permite a los usuarios crear, instalar y comenzar a extender una GitHub App rápidamente sin necesidad de registrarla o de conectar el registro al código hospedado de la app.'
redirect_from:
  - /apps/building-github-apps/creating-github-apps-from-a-manifest
  - /developers/apps/creating-a-github-app-from-a-manifest
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: App creation manifest flow
ms.openlocfilehash: 9ff6fa93e0f31de16e6ee2d96f1d7665742151d3
ms.sourcegitcommit: 6bd8fe6d49214743f82fa2dc71847c241f140c87
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135719'
---
## Acerca de los Manifiestos de las GitHub Apps

Cuando alguien crea una GitHub App desde un manifiesto, únicamente necesitan seguir una URL y nombrar a la app. El manifiesto incluye los permisos, eventos, y URL de los webhooks que se necesiten para registrar la app automáticamente. El flujo del manifiesto crea el registro de la GitHub App y recupera el secreto del webhook, llave privada (archivo PEM), e ID de la GitHub App. La persona que crea la aplicación a partir del manifiesto será propietaria de la aplicación y puede elegir [editar la configuración de la aplicación](/apps/managing-github-apps/modifying-a-github-app/), eliminarla o transferirla a otra persona en GitHub.

Puedes usar [Probot](https://probot.github.io/) para empezar a trabajar con manifiestos de aplicación de GitHub o ver una implementación de ejemplo. Consulta "[Uso de Probot para implementar el flujo de manifiesto de aplicación de GitHub](#using-probot-to-implement-the-github-app-manifest-flow)" para más información.

Aquí te mostramos algunos escenarios en donde podrías utilizar los Manifiestos de las GitHub Apps para crear apps preconfiguradas:

* Para ayudar a los miembros nuevos del equipo a que se familiaricen rápidamente con el desarrollo de las GitHub Apps.
* Para permitir que otros extiendan una GitHub App utilizando las API de GitHub sin que necesiten configurar dicha app.
* Para crear diseños de referencia de GitHub Apps y compartirlos con la comunidad de GitHub.
* Para garantizar que despliegas GitHub Apps en los ambientes de desarrollo y de producción utilizando la misma configuración.
* Para rastrear las revisiones hechas en la configuración de una GitHub App.

## Implementar el flujo del Manifiesto de una GitHub App

El flujo de manifiesto de aplicación de GitHub usa un proceso de protocolo de enlace similar al [flujo de OAuth](/apps/building-oauth-apps/authorizing-oauth-apps/). El flujo usa un manifiesto para [registrar una aplicación de GitHub](/apps/building-github-apps/creating-a-github-app/) y recibe un valor temporal `code` que se usa para recuperar la clave privada de la aplicación, el secreto de webhook y el identificador.

{% note %}

**Nota:** Debes completar los tres pasos del flujo de manifiesto de aplicación de GitHub en un plazo de una hora.

{% endnote %}

Sigue estos pasos par aimplementar el flujo del Manifiesto de la GitHub App:

1. Redireccionas a las personas a GitHub para crear una GitHub App Nueva.
1. GitHub redirige a las personas de vuelta a tu sitio.
1. Intercambias el código temporal para recuperar la configuración de la app.

### 1. Los usuarios se redirigen a GitHub para crear una nueva aplicación de GitHub.

Para redirigir a los usuarios a la creación de una nueva aplicación de GitHub, [proporciona un vínculo](#examples) para que hagan clic en él y envíen una solicitud `POST` a `https://github.com/settings/apps/new` en el caso de una cuenta personal o a `https://github.com/organizations/ORGANIZATION/settings/apps/new` si se trata de una cuenta de la organización, reemplazando `ORGANIZATION` por el nombre de la cuenta de la organización donde se creará la aplicación.

Debes incluir los [parámetros del manifiesto de aplicación de GitHub](#github-app-manifest-parameters) como una cadena codificada en JSON en un parámetro denominado `manifest`. También puedes incluir un [parámetro `state`](#parameters) para mayor seguridad.

A la persona que crea la aplicación se le redirigirá a una página de GitHub con un campo de entrada donde puede editar el nombre de la aplicación que incluyó en el parámetro `manifest`. Si no incluyes un valor `name` en el elemento `manifest`, la persona puede establecer su propio nombre para la aplicación en este campo.

![Crear un Manifiesto de una GitHub App](/assets/images/github-apps/create-github-app-manifest.png)

#### Parámetros del Manifiesto de la GitHub App

 Nombre | Tipo | Descripción
-----|------|-------------
`name` | `string` | El nombre dela GitHub App.
`url` | `string` | **Obligatorio.** Página principal de la aplicación de GitHub.
`hook_attributes` | `object` | La configuración del webhook de la GitHub App.
`redirect_url` | `string` | La URL completa a la cual redireccionar después de que un usuario inicie la creación de una GitHub App desde un manifiesto.
`callback_urls` | `array of strings` | Una URL completa a la cual redirigir cuando alguien autorice una instalación. Puedes proporcionar hasta 10 URL de rellamado.
`setup_url` | `string` | Una dirección URL completa a la que redirigir a los usuarios después de instalar la aplicación de GitHub si se requiere una configuración adicional.
`description` | `string` | Una descripción de la GitHub App.
`public` | `boolean` | Establécela en `true` cuando la aplicación de GitHub esté disponible para el público o en `false` cuando solo sea accesible para el propietario de la aplicación.
`default_events` | `array` | Lista de [eventos](/webhooks/event-payloads) a los que se suscribe la aplicación de GitHub.
`default_permissions` | `object` | Conjunto de [permisos](/rest/reference/permissions-required-for-github-apps) necesarios para la aplicación de GitHub. El formato del objeto usa el nombre de permiso para la clave (por ejemplo, `issues`) y el tipo de acceso para el valor (por ejemplo, `write`).

El objeto `hook_attributes` tiene la clave siguiente:

Nombre | Tipo | Descripción
-----|------|-------------
`url` | `string` | **Obligatorio.** La dirección URL del servidor que va a recibir las solicitudes `POST` del webhook.
`active` | `boolean` | Entrega detalles del evento cuando se activa este gancho y su valor predeterminado es "true".

#### Parámetros

 Nombre | Tipo | Descripción
-----|------|-------------
`state`| `string` | {% data reusables.apps.state_description %}

#### Ejemplos

En este ejemplo se usa un formulario de una página web con un botón que desencadena la solicitud `POST` para una cuenta personal:

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
   "callback_urls": [
     "https://example.com/callback"
   ],
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

En este ejemplo se usa un formulario de una página web con un botón que desencadena la solicitud `POST` de una cuenta de organización. Reemplaza `ORGANIZATION` por el nombre de la cuenta de organización donde quieres crear la aplicación.

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
   "callback_urls": [
     "https://example.com/callback"
   ],
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

### 2. GitHub redirige a las personas de nuevo a tu sitio.

Cuando la persona hace clic en **Crear aplicación de GitHub**, GitHub la redirige de nuevo a `redirect_url` con un elemento temporal `code` en un parámetro de código. Por ejemplo:

    https://example.com/redirect?code=a180b1a3d263c81bc6441d7b990bae27d4c10679

Si proporcionaste un parámetro `state`, también verás ese parámetro en `redirect_url`. Por ejemplo:

    https://example.com/redirect?code=a180b1a3d263c81bc6441d7b990bae27d4c10679&state=abc123

### 3. Se intercambia el código temporal para recuperar la configuración de la aplicación.

Para completar el protocolo de enlace, envía el elemento temporal `code` de una solicitud `POST` al punto de conexión. Consulta [Creación de una aplicación de GitHub desde un manifiesto](/rest/reference/apps#create-a-github-app-from-a-manifest). La respuesta incluirá los valores de `id` (identificador de aplicación de GitHub), `pem` (clave privada) y `webhook_secret`. GitHub crea un secreto de webhook para la app de forma automática. Puedes almacenar estos valores en variables de ambiente dentro del servidor de la app. Por ejemplo, si la aplicación usa [dotenv](https://github.com/bkeepers/dotenv) para almacenar variables de entorno, almacenarías las variables en el archivo `.env` de la aplicación.

Tienes solo una hora para completar este paso en el flujo del Manifiesto de la GitHub App.

{% note %}

**Nota:** Este punto de conexión es de velocidad limitada. Consulta [Límites de velocidad](/rest/reference/rate-limit) para información sobre cómo obtener el estado del límite de velocidad actual.

{% endnote %}

    POST /app-manifests/{code}/conversions

Para más información sobre la respuesta del punto de conexión, consulta [Creación de una aplicación de GitHub a partir de un manifiesto](/rest/reference/apps#create-a-github-app-from-a-manifest).

Cuando se complete el último paso del flujo del manifiesto, la persona que cree la app desde el flujo será el propietario de una GitHub App registrada que podrá instalar en cualquiera de sus repositorios personales. En cualquier momento podrán elegir extender la app utilizando las API de GitHub, transferir la propiedad a alguien más, o borrarla.

## Utilizar el Probot par aimplementar el flujo del Manifiesto de la GitHub App

[Probot](https://probot.github.io/) es un marco creado con [Node.js](https://nodejs.org/) que realiza muchas de las tareas que necesitan todas las aplicaciones de GitHub, como validar webhooks y realizar la autenticación. Probot implementa el [flujo de manifiesto de aplicación de GitHub](#implementing-the-github-app-manifest-flow), lo que facilita la creación y el uso compartido de diseños de referencia de aplicaciones de GitHub con la comunidad de GitHub.

Para crear una App de Probot que puedas compartir, sigue estos pasos:

1. [Genere una nueva aplicación de GitHub](https://probot.github.io/docs/development/#generating-a-new-app).
1. Abra el proyecto que ha creado y personalice la configuración en el archivo `app.yml`. Probot usa la configuración de `app.yml` como [parámetros de manifiesto de aplicación de GitHub](#github-app-manifest-parameters).
1. Agrega el código personalizado de tu aplicación.
1. [Ejecuta la aplicación de GitHub localmente](https://probot.github.io/docs/development/#running-the-app-locally) o bien [hospédala en el lugar que prefieras](#hosting-your-app-with-glitch). Al desplazarte a la dirección URL de la aplicación hospedada, encontrarás una página web con un botón **Registrar aplicación de GitHub** en el que los usuarios pueden hacer clic para crear una aplicación preconfigurada. La página web siguiente es la implementación del [paso 1](#1-you-redirect-people-to-github-to-create-a-new-github-app) de Probot en el flujo de manifiesto de aplicación de GitHub:

![Registrar una GitHub App de Probot](/assets/images/github-apps/github_apps_probot-registration.png)

Con [dotenv](https://github.com/bkeepers/dotenv), Probot crea un archivo `.env` y establece las variables de entorno `APP_ID`, `PRIVATE_KEY` y `WEBHOOK_SECRET` con los valores [recuperados de la configuración de la aplicación](#3-you-exchange-the-temporary-code-to-retrieve-the-app-configuration).

### Hospedar tu app con Glitch

Puedes ver una [aplicación Probot de ejemplo](https://glitch.com/~auspicious-aardwolf) que usa [Glitch](https://glitch.com/) para hospedar y compartir la aplicación. En el ejemplo se usa [Checks API](/rest/reference/checks) y se seleccionan los eventos y permisos necesarios de Checks API en el archivo `app.yml`. Glitch es una herramienta que te permite "Remezclar tus propias apps". El remezclar una app crea una copia de la app que Glitch hospeda y despliega. Consulta "[Acerca de Glitch](https://glitch.com/about/)" para información sobre la remezcla de aplicaciones Glitch.
