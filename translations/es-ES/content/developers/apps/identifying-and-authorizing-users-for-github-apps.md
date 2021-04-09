---
title: Identificar y autorizar usuarios para las GitHub Apps
intro: '{% data reusables.shortdesc.identifying_and_authorizing_github_apps %}'
redirect_from:
  - /early-access/integrations/user-identification-authorization/
  - /apps/building-integrations/setting-up-and-registering-github-apps/identifying-users-for-github-apps/
  - /apps/building-github-apps/identifying-and-authorizing-users-for-github-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - github apps
---


{% data reusables.pre-release-program.expiring-user-access-tokens %}

Cuando tu GitHub App actúe en nombre de un usuario, ésta realiza solicitudes de usuario a servidor. Estas solicitudes deben autorizarse con un token de acceso de usuario. Las solicitudes de usuario a servidor incluyen el solicitar datos para un usuario, como el determinar qué repositorios mostrar a un usuario en particular. Estas solicitudes también incluyen las acciones que activa un usuario, como ejecutar una compilación.

{% data reusables.apps.expiring_user_authorization_tokens %}

### Identificar usuarios en tu sitio

Para autorizar a los usuarios para las apps estándar que se ejecutan en el buscador, utiliza el [flujo de aplicaciones web](#web-application-flow).

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
Para autorizar a los usuarios para apps sin interfaz gráfica sin acceso directo al buscador, tales como las herramientas de CLI o administradores de credenciales de Git, utiliza el [flujo del dispositivo](#device-flow). El flujo de dispositivos utiliza el [Otorgamiento de Autorizción de Dispositivos](https://tools.ietf.org/html/rfc8628) de OAuth 2.0.
{% endif %}

### Flujo de aplicaciones Web

Al utilizar el flujo de aplicaciones web, el proceso para identificar a los usuarios en tu sitio es:

1. Se redirecciona a los usuarios para solicitar su identidad de GitHub
2. GitHub redirecciona a los usuarios de vuelta a tu sitio
3. Tu GitHub App accede a la API con el token de acceso del usuario

Si seleccionas **Solicitar la autorización del usuario (OAuth) durante la instalación** cuando crees o modifiques tu app, el paso 1 se completará durante la instalación de la misma. Para obtener más información, consulta la sección "[Autorizar usuarios durante la instalación](/apps/installing-github-apps/#authorizing-users-during-installation)".

#### 1. Solicita la identidad de un usuario de GitHub

    GET {% data variables.product.oauth_host_code %}/login/oauth/authorize

Cuando tu GitHub App especifica un parámetro de `login`, solicita a los usuarios con una cuenta específica que pueden utilizar para registrarse y autorizar tu app.

##### Parámetros

| Nombre         | Type        | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `client_id`    | `secuencia` | **Requerido.** La ID de cliente para tu GitHub App. Puedes encontrarla en los [Ajustes de tu GitHub App](https://github.com/settings/apps) cuando selecciones tu app.                                                                                                                                                                                                                                                                                                                 |
| `redirect_uri` | `secuencia` | La URL en tu aplicación a donde se enviará a los usuarios después de la autorización. Esta debe ser una copia exacta de {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %} una de las URL que proporcionaste como **URL de rellamado** {% else %} la URL que proporcionaste en el campo **URL de rellamado de autorización de usuario** {% endif %} cuando configuraste tu GitHub App y no puede contener ningún parámetro adicional. |
| `state`        | `secuencia` | Este deberá contener una secuencia aleatoria para dar protección contra los ataques de falsificación y podría contener cualquier otros datos arbitrarios.                                                                                                                                                                                                                                                                                                                             |
| `login`        | `secuencia` | Sugiere una cuenta específica para utilizar para registrarse y autorizar la app.                                                                                                                                                                                                                                                                                                                                                                                                      |
| `allow_signup` | `secuencia` | Ya sea que se ofrezca no una opción para que los usuarios autenticados se registren para {% data variables.product.prodname_dotcom %} durante el flujo de OAuth. la opción predeterminada es `true`. Utiliza `false` cuando una política prohíba los registros.                                                                                                                                                                                                                       |

{% note %}

**Nota:** No necesitas proporcionar alcances en tu solicitud de autorización. A diferencia de la OAuth trandicional, el token de autorizción se limita a los permisos asociados con tu GitHub App y a aquellos del usuario.

{% endnote %}

#### 2. GitHub redirecciona a los usuarios de vuelta a tu sitio

Si el usuario acepta tu solicitud, GitHub te redirecciona de regreso a tu sitio con un `code` temporal en un parámetro de código así como con el estado que proporcionaste en el paso anterior en el parámetro `state`. Si los estados no coinciden significa que un tercero creó la solicitud y que se debe anular el proceso.

{% note %}

**Nota:** Si seleccionas **Solicitar la autorización del usuario (OAuth) durante la instalación ** cuando creas o modificas tu app, GitHub regreará un `code` temporal que necesitarás intercambiar por un token de acceso. El parámetro `state` no se regresa cuando GitHub inicia el flujo de OAuth durante la instalación de la app.

{% endnote %}

Intercambia este `code` por un token de acceso. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %} Cuando los tokens con vigencia se habilitan, el token de acceso vence en 8 horas y el token de actualización en 6 meses. Cada que actualizas el token, obtienes un nuevo token de actualización. Para obtener más información, consulta la sección "[Actualizar los tokens de acceso de usuario a servidor](/developers/apps/refreshing-user-to-server-access-tokens)".

Los tokens de usuario con vigencia determinada son una característica opcional actualmente y están sujetos a cambios. Para decidir unirse a la característica de vigencia determinada de los tokens de usuario a servidor, consulta la sección "[Activar las características opcionales para las apps](/developers/apps/activating-optional-features-for-apps)".{% endif %}

    POST {% data variables.product.oauth_host_code %}/login/oauth/access_token

##### Parámetros

| Nombre          | Type        | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `client_id`     | `secuencia` | **Requerido.** La ID de cliente para tu GitHub App.                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `client_secret` | `secuencia` | **Requerido.** El secreto de cliente para tu GitHub App.                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `código`        | `secuencia` | **Requerido.** El código que recibiste como respuesta al Paso 1.                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `redirect_uri`  | `secuencia` | La URL en tu aplicación a donde se enviará a los usuarios después de la autorización. Esta debe ser una copia exacta de {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %} una de las URL que proporcionaste como **URL de rellamado** {% else %} la URL que proporcionaste en el campo **URL de rellamado de autorización de usuario** {% endif %} cuando configuraste tu GitHub App y no puede contener ningún parámetro adicional. |
| `state`         | `secuencia` | La secuencia aleatoria indescifrable que proporcionaste en el Paso 1.                                                                                                                                                                                                                                                                                                                                                                                                                 |

##### Respuesta

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}

Predeterminadamente, la respuesta toma la siguiente forma. Los parámetros de respuesta `expires_in`, `refresh_token`,  y `refresh_token_expires_in` solo se devuelven cuando habilitas la vigencia determinada para los tokens de acceso de usuario a servidor.

```json
{
  "access_token": "e72e16c7e42f292c6912e7710c838347ae178b4a",
  "expires_in": 28800,
  "refresh_token": "r1.c1b4a2e77838347a7e420ce178f2e7c6912e1692",
  "refresh_token_expires_in": 15811200,
  "scope": "",
  "token_type": "bearer"
}
```
{% else %}

Predeterminadamente, la respuesta toma la siguiente forma:

    access_token=e72e16c7e42f292c6912e7710c838347ae178b4a&token_type=bearer

{% endif %}

#### 3. Tu GitHub App accede a la API con el token de acceso del usuario

El token de acceso del usuario permite que la GitHub App haga solicitudes a la API a nombre del usuario.

    Authorization: token OAUTH-TOKEN
    GET {% data variables.product.api_url_code %}/user

Por ejemplo, en curl, puedes configurar el encabezado de autorización de la siguiente manera:

```shell
curl -H "Authorization: token OAUTH-TOKEN" {% data variables.product.api_url_pre %}/user
```

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
### Flujo de dispositivos

{% if currentVersion ver_lt "enterprise-server@3.1" %}
{% note %}

**Nota:** El flujo de dispositivos se encuentra en un beta público y está sujeto a cambios.

{% endnote %}
{% endif %}

Este flujo de dispositivos te permite autorizar usuarios para una app sin encabezado, tal como una herramienta de CLI o un administrador de credenciales de Git.

Para obtener más información acerca de autorizar a usuarios utilizando el flujo de dispositivos, consulta la sección "[Autorizar Apps de OAuth](/developers/apps/authorizing-oauth-apps#device-flow)".

{% endif %}

### Revisar a qué recursos de instalación puede acceder un usuario

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
{% data reusables.pre-release-program.machine-man-preview %}
{% data reusables.pre-release-program.api-preview-warning %}
{% endif %}

Ya que tengas un token de OAuth para un usuario, puedes revisar a qué instalaciones puede acceder.

    Authorization: token OAUTH-TOKEN
    GET /user/installations

También puedes verificar qué repositorios se encuentran accesibles para un usuario para una instalación.

    Authorization: token OAUTH-TOKEN
    GET /user/installations/:installation_id/repositories

Puedes encontrar más detalles en: [Listar instalaciones de app accesibles para el token de acceso del usuario](/rest/reference/apps#list-app-installations-accessible-to-the-user-access-token) y [Listar repositorios accesibles para el token de acceso del usuario](/rest/reference/apps#list-repositories-accessible-to-the-user-access-token).

### Gestionar una autorización revocada a una GitHub App

Si un usuario revoca su autorización de una GitHub App, dicha app recibirá el webhook [`github_app_authorization`](/webhooks/event-payloads/#github_app_authorization) predeterminadamente. Las GitHub Apps no pueden desuscribirse de este evento. {% data reusables.webhooks.authorization_event %}

### Permisos a nivel de usuario

Puedes agregar permisos a nivel de usuario a tu GitHub App para acceder a los recursos del usuario, tales como correos electrónicos del usuario, los cuales otorgan los usuarios independientes como parte del [flujo de autorización del usuario](#identifying-users-on-your-site). Los permisos a nivel de usuario difieren de los [permisos a nivel de organización y de repositorio](/rest/reference/permissions-required-for-github-apps), los cuales se otorgan en el momento de la instalación en una cuenta de usuario o de organización.

Puedes seleccionar los permisos a nivel de usuario desde dentro de la configuración de tu GitHub App en la sección de **Permisos de usuario** de la página de **Permisos & webhooks**. Para obtener más información sobre seleccionar permisos, consulta la sección [Editar los permisos de una GitHub App](/apps/managing-github-apps/editing-a-github-app-s-permissions/)".

Cuando un usuario instala tu app en su cuenta, el aviso de instalación listará los permisos a nivel de usuario que tu app está solicitando y explicará que la app puede pedir estos permisos a los usuarios independientes.

Ya que los permisos a nivel de usuario se otorgan individualmente, puedes agregarlos a tu app existente sin solicitar que los usuarios los mejoren. Sin embargo, necesitarás enviar usuarios existentes a través del flujo de autorización de usuarios para autorizar los permisos nuevos y obtener un token nuevo de usuario a servidor para estas solicitudes.

### Solicitudes de usuario a servidor

Mientras que la mayoría de tu interacción con la API deberá darse utilizando tus tokens de acceso a la instalación de servidor a servidor, ciertas terminales te permiten llevar a cabo acciones a través de la API utilizando un token de acceso. Tu app puede hacer las siguientes solicitudes utilizando las terminales de [GraphQL v4](/graphql) o de [REST v3](/rest).

#### Terminales compatibles

{% if currentVersion == "free-pro-team@latest" %}
##### Ejecutores de Acciones

* [Listar aplicaciones de ejecutores para un repositorio](/rest/reference/actions#list-runner-applications-for-a-repository)
* [Listar ejecutores auto-hospedados para un repositorio](/rest/reference/actions#list-self-hosted-runners-for-a-repository)
* [Obtener un ejecutor auto-hospedado para un repositorio](/rest/reference/actions#get-a-self-hosted-runner-for-a-repository)
* [Borrar un ejecutor auto-hospedado de un repositorio](/rest/reference/actions#delete-a-self-hosted-runner-from-a-repository)
* [Crear un token de registro para un repositorio](/rest/reference/actions#create-a-registration-token-for-a-repository)
* [Crear un token de eliminación para un repositorio](/rest/reference/actions#create-a-remove-token-for-a-repository)
* [Listar aplicaciones de ejecutores para una organización](/rest/reference/actions#list-runner-applications-for-an-organization)
* [Listar ejecutores auto-hospedados para una organización](/rest/reference/actions#list-self-hosted-runners-for-an-organization)
* [Obtener ejecutores auto-hospedados para una organización](/rest/reference/actions#get-a-self-hosted-runner-for-an-organization)
* [Borrar un ejecutor auto-hospedado de una organización](/rest/reference/actions#delete-a-self-hosted-runner-from-an-organization)
* [Crear un token de registro para una organización](/rest/reference/actions#create-a-registration-token-for-an-organization)
* [Crear un token de eliminación para una organización](/rest/reference/actions#create-a-remove-token-for-an-organization)

##### Secretos de las Acciones

* [Obtener la llave pública de un repositorio](/rest/reference/actions#get-a-repository-public-key)
* [Listar los secretos del repositorio](/rest/reference/actions#list-repository-secrets)
* [Obtener el secreto de un repositorio](/rest/reference/actions#get-a-repository-secret)
* [Crear o actualizar el secreto de un repositorio](/rest/reference/actions#create-or-update-a-repository-secret)
* [Borrar el secreto de un repositorio](/rest/reference/actions#delete-a-repository-secret)
* [Obtener la llave pública de una organización](/rest/reference/actions#get-an-organization-public-key)
* [Listar los secretos de la organización](/rest/reference/actions#list-organization-secrets)
* [Obtener el secreto de una organización](/rest/reference/actions#get-an-organization-secret)
* [Crear o actualizar el secreto de una organización](/rest/reference/actions#create-or-update-an-organization-secret)
* [Listar los repositorios seleccionados para el secreto de una organización](/rest/reference/actions#list-selected-repositories-for-an-organization-secret)
* [Configurar los repositorios seleccionados para el secreto de una organización](/rest/reference/actions#set-selected-repositories-for-an-organization-secret)
* [Agregar el repositorio seleccionado al secreto de una organización](/rest/reference/actions#add-selected-repository-to-an-organization-secret)
* [Eliminar el repositorio seleccionado del secreto de una organización](/rest/reference/actions#remove-selected-repository-from-an-organization-secret)
* [Borrar el secreto de una organización](/rest/reference/actions#delete-an-organization-secret)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
##### Artefactos

* [Listar artefactos para un repositorio](/rest/reference/actions#delete-an-organization-secret)
* [Listar artefactos de ejecución de flujo de trabajo](/rest/reference/actions#list-workflow-run-artifacts)
* [Obtener un artefacto](/rest/reference/actions#get-an-artifact)
* [Borrar un artefacto](/rest/reference/actions#delete-an-artifact)
* [Descargar un artefacto](/rest/reference/actions#download-an-artifact)
{% endif %}

##### Ejecuciones de Verificación

* [Crear una ejecución de verificación](/rest/reference/checks#create-a-check-run)
* [Obtener una ejecución de verificación](/rest/reference/checks#get-a-check-run)
* [Actualizar una ejecución de verificación](/rest/reference/checks#update-a-check-run)
* [Listar las anotaciones de una ejecución de verificación](/rest/reference/checks#list-check-run-annotations)
* [Listar las ejecuciones de verificación en un conjunto de verificaciones](/rest/reference/checks#list-check-runs-in-a-check-suite)
* [Listar las ejecuciones de verificación para una referencia de Git](/rest/reference/checks#list-check-runs-for-a-git-reference)

##### Conjuntos de Verificaciones

* [Crear un conjunto de verificaciones](/rest/reference/checks#create-a-check-suite)
* [Obtener un conjunto de verificaciones](/rest/reference/checks#get-a-check-suite)
* [Solicitar un conjunto de verificaciones](/rest/reference/checks#rerequest-a-check-suite)
* [Actualizar las preferencias del repositorio para los conjuntos de verificaciones](/rest/reference/checks#update-repository-preferences-for-check-suites)
* [Listar conjuntos de verificaciones para una referencia de Git](/rest/reference/checks#list-check-suites-for-a-git-reference)

##### Códigos de Conducta

* [Obtener todos los códigos de conducta](/rest/reference/codes-of-conduct#get-all-codes-of-conduct)
* [Obtener un código de conducta específico](/rest/reference/codes-of-conduct#get-a-code-of-conduct)

##### Estados de Despliegue

* [Listar los estados de despliegue](/rest/reference/repos#list-deployment-statuses)
* [Crear los estados de despliegue](/rest/reference/repos#create-a-deployment-status)
* [Obtener un estado de despliegue](/rest/reference/repos#get-a-deployment-status)

##### Implementaciones

* [Listar los despliegues](/rest/reference/repos#list-deployments)
* [Crear un despliegue](/rest/reference/repos#create-a-deployment)
* [Obtén un despliegue](/rest/reference/repos#get-a-deployment){% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
* [Borrar un despliegue](/rest/reference/repos#delete-a-deployment){% endif %}

##### Eventos

* [Listar eventos públicos para una red de repositorios](/rest/reference/activity#list-public-events-for-a-network-of-repositories)
* [Listar eventos de organizaciones públicas](/rest/reference/activity#list-public-organization-events)

##### Fuentes

* [Obtener fuentes](/rest/reference/activity#get-feeds)

##### Blobs de Git

* [Crear un blob](/rest/reference/git#create-a-blob)
* [Obtener un blob](/rest/reference/git#get-a-blob)

##### Confirmaciones de Git

* [Crear una confirmación](/rest/reference/git#create-a-commit)
* [Obtener una confirmación](/rest/reference/git#get-a-commit)

##### Referencias de Git

* [Crea una referencia](/rest/reference/git#create-a-reference)* [Obtén una referencia](/rest/reference/git#get-a-reference)
* [Lista las referencias coincidentes](/rest/reference/git#list-matching-references)
* [Actualizar una referencia](/rest/reference/git#update-a-reference)
* [Borrar una referencia](/rest/reference/git#delete-a-reference)

##### Matrículas de Git

* [Crear un objeto de matrícula](/rest/reference/git#create-a-tag-object)
* [Obtener una matrícula](/rest/reference/git#get-a-tag)

##### Árboles de Git

* [Crear un árbol](/rest/reference/git#create-a-tree)
* [Obtener un árbol](/rest/reference/git#get-a-tree)

##### Plantillas de Gitignore

* [Obtener todas las plantillas de gitignore](/rest/reference/gitignore#get-all-gitignore-templates)
* [Obtener una plantilla específica de gitignore](/rest/reference/gitignore#get-a-gitignore-template)

##### Instalaciones

* [Listar repositorios accesibles para el token de acceso del usuario](/rest/reference/apps#list-repositories-accessible-to-the-user-access-token)

{% if currentVersion == "free-pro-team@latest" %}
##### Límites de interacción

* [Obtener restricciones de interacción para una organización](/rest/reference/interactions#get-interaction-restrictions-for-an-organization)
* [Configurar restricciones de interacción para una organización](/rest/reference/interactions#set-interaction-restrictions-for-an-organization)
* [Eliminar restricciones de interacción para una organización](/rest/reference/interactions#remove-interaction-restrictions-for-an-organization)
* [Obtener restricciones de interacción para un repositorio](/rest/reference/interactions#get-interaction-restrictions-for-a-repository)
* [Configurar restricciones de interacción para un repositorio](/rest/reference/interactions#set-interaction-restrictions-for-a-repository)
* [Eliminar restricciones de interacción para un repositorio](/rest/reference/interactions#remove-interaction-restrictions-for-a-repository)
{% endif %}

##### Asignados de Informes de Problemas

* [Agregar asignados a un informe de problemas](/rest/reference/issues#add-assignees-to-an-issue)
* [Eliminar asignados de un informe de problemas](/rest/reference/issues#remove-assignees-from-an-issue)

##### Comentarios de Informes de Problemas

* [Listar comentarios del informe de problemas](/rest/reference/issues#list-issue-comments)
* [Crear un comentario del informe de problemas](/rest/reference/issues#create-an-issue-comment)
* [Listar cometnarios del informe de problemas para un repositorio](/rest/reference/issues#list-issue-comments-for-a-repository)
* [Obtener un comentario de un informe de problemas](/rest/reference/issues#get-an-issue-comment)
* [Actualizar un comentario de un informe de problemas](/rest/reference/issues#update-an-issue-comment)
* [Borrar un comentario de un informe de problemas](/rest/reference/issues#delete-an-issue-comment)

##### Eventos de Informe de Problemas

* [Listar eventos del informe de problemas](/rest/reference/issues#list-issue-events)

##### Línea de tiempo del Informe de Problemas

* [Listar eventos de la línea de tiempo para un informe de problemas](/rest/reference/issues#list-timeline-events-for-an-issue)

##### Problemas

* [Listar informes de problemas asignados al usuario autenticado](/rest/reference/issues#list-issues-assigned-to-the-authenticated-user)
* [Listar asignados](/rest/reference/issues#list-assignees)
* [Revisar si se puede asignar un usuario](/rest/reference/issues#check-if-a-user-can-be-assigned)
* [Listar informes de problemas del repositorio](/rest/reference/issues#list-repository-issues)
* [Crear un informe de problemas](/rest/reference/issues#create-an-issue)
* [Obtener un informe de problemas](/rest/reference/issues#get-an-issue)
* [Actualizar un informe de problemas](/rest/reference/issues#update-an-issue)
* [Bloquear un informe de problemas](/rest/reference/issues#lock-an-issue)
* [Desbloquear un informe de problemas](/rest/reference/issues#unlock-an-issue)

{% if currentVersion == "free-pro-team@latest" %}
##### Jobs

* [Obener un job para una ejecución de flujo de trabajo](/rest/reference/actions#get-a-job-for-a-workflow-run)
* [Descargar bitácoras del job para una ejecución de flujode trabajo](/rest/reference/actions#download-job-logs-for-a-workflow-run)
* [Listar jobs para una ejecución de flujo de trabajo](/rest/reference/actions#list-jobs-for-a-workflow-run)
{% endif %}

##### Etiquetas

* [Listar las etiquetas para un informe de problemas](/rest/reference/issues#list-labels-for-an-issue)
* [Agregar etiquetas a un informe de problemas](/rest/reference/issues#add-labels-to-an-issue)
* [Configurar eitquetas para un informe de problemas](/rest/reference/issues#set-labels-for-an-issue)
* [Eliminar todas las etiquetas de un informe de problemas](/rest/reference/issues#remove-all-labels-from-an-issue)
* [Eliminar una etiqueta de un informe de problemas](/rest/reference/issues#remove-a-label-from-an-issue)
* [Listar etiquetas para un repositorio](/rest/reference/issues#list-labels-for-a-repository)
* [Crear una etiqueta](/rest/reference/issues#create-a-label)
* [Obtener una etiqueta](/rest/reference/issues#get-a-label)
* [Actualizar una etiqueta](/rest/reference/issues#update-a-label)
* [Borrar una etiqueta](/rest/reference/issues#delete-a-label)
* [Obtener etiquetas para cada informe de problemas en un hito](/rest/reference/issues#list-labels-for-issues-in-a-milestone)

##### Licencias

* [Obtener todas las licencias que se utilizan habitualmente](/rest/reference/licenses#get-all-commonly-used-licenses)
* [Obtener una licencia](/rest/reference/licenses#get-a-license)

##### Markdown

* [Generar un documento de Markdown](/rest/reference/markdown#render-a-markdown-document)
* [Generar un documento de markdwon en modo raw](/rest/reference/markdown#render-a-markdown-document-in-raw-mode)

##### Meta

* [Meta](/rest/reference/meta#meta)

##### Hitos

* [Listar hitos](/rest/reference/issues#list-milestones)
* [Crear un hito](/rest/reference/issues#create-a-milestone)
* [Obtener un hito](/rest/reference/issues#get-a-milestone)
* [Actualizar un hito](/rest/reference/issues#update-a-milestone)
* [Borrar un hito](/rest/reference/issues#delete-a-milestone)

##### Ganchos de organización

* [Listar los webhooks de la organización](/rest/reference/orgs#webhooks/#list-organization-webhooks)
* [Crear un webhook para una organización](/rest/reference/orgs#webhooks/#create-an-organization-webhook)
* [Obtener un webhook de una organización](/rest/reference/orgs#webhooks/#get-an-organization-webhook)
* [Actualizar el webhook de una organización](/rest/reference/orgs#webhooks/#update-an-organization-webhook)
* [Borrar el webhook de una organización](/rest/reference/orgs#webhooks/#delete-an-organization-webhook)
* [Hacer ping al webhook de una organización](/rest/reference/orgs#webhooks/#ping-an-organization-webhook)

{% if currentVersion == "free-pro-team@latest" %}
##### Invitaciones a las Organizaciones

* [Listar las invitaciones pendientes a una organización](/rest/reference/orgs#list-pending-organization-invitations)
* [Crear una invitación a una organización](/rest/reference/orgs#create-an-organization-invitation)
* [Listar los equipos de invitación a una organización](/rest/reference/orgs#list-organization-invitation-teams)
{% endif %}

##### Miembros de la Organización

* [Listar a los miembros de la organización](/rest/reference/orgs#list-organization-members)
* [Verificar la membrecía de organización de un usuario](/rest/reference/orgs#check-organization-membership-for-a-user)
* [Eliminar a un miembro de una organización](/rest/reference/orgs#remove-an-organization-member)
* [Obtener la membrecía de organización para un usuario](/rest/reference/orgs#get-organization-membership-for-a-user)
* [Configurar una mebrecía de organización para un usuario](/rest/reference/orgs#set-organization-membership-for-a-user)
* [Eliminar la membrecía de organización de un usuario](/rest/reference/orgs#remove-organization-membership-for-a-user)
* [Listar los miembros de una organización pública](/rest/reference/orgs#list-public-organization-members)
* [Verificar la membrecía de una organización pública de un usuario](/rest/reference/orgs#check-public-organization-membership-for-a-user)
* [Configurar la membrecía de una organización pública para el usuario autenticado](/rest/reference/orgs#set-public-organization-membership-for-the-authenticated-user)
* [Eliminar la membrecía de una organizción pública del usuario autenticado](/rest/reference/orgs#remove-public-organization-membership-for-the-authenticated-user)

##### Colaboradores Externos de una Organización

* [Listar los colaboradores externos de una organización](/rest/reference/orgs#list-outside-collaborators-for-an-organization)
* [Convertir a un miembro de la organización en colaborador externo](/rest/reference/orgs#convert-an-organization-member-to-outside-collaborator)
* [Eliminar a un colaborador externo de la organización](/rest/reference/orgs#remove-outside-collaborator-from-an-organization)

{% if enterpriseServerVersions contains currentVersion %}
##### Ganchos de Pre-recepción de la Organización

* [Listar los ganchos de pre-recepción de una organización](/enterprise/user/rest/reference/enterprise-admin#list-pre-receive-hooks-for-an-organization)
* [Obtener los ganchos de pre-recepción de una organización](/enterprise/user/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-an-organization)
* [Actualizar el requerir los ganchos de pre-recepción para una organización](/enterprise/user/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-an-organization)
* [Eliminar el requerir los ganchos de pre-recepción para una organización](/enterprise/user/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-an-organization)
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
##### Poyectos de Equipo de una Organización

* [Listar los proyectos de equipo](/rest/reference/teams#list-team-projects)
* [Verificar los permisos del equipo para un proyecto](/rest/reference/teams#check-team-permissions-for-a-project)
* [Agregar o actualizar los permisos de un proyecto de equipo](/rest/reference/teams#add-or-update-team-project-permissions)
* [Eliminar a un proyecto de un equipo](/rest/reference/teams#remove-a-project-from-a-team)
{% endif %}

##### Repositorios de Equipo de la Organización

* [Listar los repositorios de equipo](/rest/reference/teams#list-team-repositories)
* [Verificar los permisos de un equipo para un repositorio](/rest/reference/teams#check-team-permissions-for-a-repository)
* [Agregar o actualizar los permisos de un repositorio de equipo](/rest/reference/teams#add-or-update-team-repository-permissions)
* [Eliminar a un repositorio de un equipo](/rest/reference/teams#remove-a-repository-from-a-team)

{% if currentVersion == "free-pro-team@latest" %}
##### Sincronización de Equipos de la Organización

* [Listar los grupos de IdP de un equipo](/rest/reference/teams#list-idp-groups-for-a-team)
* [Crear o actualizar las conexiones de un grupo de IdP](/rest/reference/teams#create-or-update-idp-group-connections)
* [Listar grupos de IdP para una organización](/rest/reference/teams#list-idp-groups-for-an-organization)
{% endif %}

##### Equipos de la Organización

* [Listar equipos](/rest/reference/teams#list-teams)
* [Crear un equipo](/rest/reference/teams#create-a-team)
* [Obtener un equipo por su nombre](/rest/reference/teams#get-a-team-by-name)
{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.21" %}
* [Obtener un equipo](/rest/reference/teams#get-a-team)
{% endif %}
* [Actualizar un equipo](/rest/reference/teams#update-a-team)
* [Borrar un equipo](/rest/reference/teams#delete-a-team)
{% if currentVersion == "free-pro-team@latest" %}
* [Listar invitaciones pendientes al equipo](/rest/reference/teams#list-pending-team-invitations)
{% endif %}
* [Listar miembros del equipo](/rest/reference/teams#list-team-members)
* [Obtener la membresía de equipo de un usuario](/rest/reference/teams#get-team-membership-for-a-user)
* [Agregar o actualizar la membrecía de equipo de un usuario](/rest/reference/teams#add-or-update-team-membership-for-a-user)
* [Eliminar la membrecía de equipo para un usuario](/rest/reference/teams#remove-team-membership-for-a-user)
* [Listar los equipos hijos](/rest/reference/teams#list-child-teams)
* [Listar los equipos para el usuario autenticado](/rest/reference/teams#list-teams-for-the-authenticated-user)

##### Organizaciones

* [Listar organizaciones](/rest/reference/orgs#list-organizations)
* [Obtener una organización](/rest/reference/orgs#get-an-organization)
* [Actualizar una organización](/rest/reference/orgs#update-an-organization)
* [Listar membrecías de organización para el usuario autenticado](/rest/reference/orgs#list-organization-memberships-for-the-authenticated-user)
* [Obtener la membrecía de organización para el usuario autenticado](/rest/reference/orgs#get-an-organization-membership-for-the-authenticated-user)
* [Actualizar la membrecía de una organización para el usuario autenticado](/rest/reference/orgs#update-an-organization-membership-for-the-authenticated-user)
* [Listar las organizaciones para el usuario autenticado](/rest/reference/orgs#list-organizations-for-the-authenticated-user)
* [Listar las organizaciones de un usuario](/rest/reference/orgs#list-organizations-for-a-user)

{% if currentVersion == "free-pro-team@latest" %}
##### Autorizaciones de Credencial para las Organizaciones

* [Listar las autorizaciones del SSO de SAML para una organización](/rest/reference/orgs#list-saml-sso-authorizations-for-an-organization)
* [Eliminar las autorizaciones del SSO de SAML de una organización](/rest/reference/orgs#remove-a-saml-sso-authorization-for-an-organization)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
##### Scim de las Organizaciones

* [Listar las identidades aprovisionadas de SCIM](/rest/reference/scim#list-scim-provisioned-identities)
* [Aprovisionar e invitar a un usuario de SCIM](/rest/reference/scim#provision-and-invite-a-scim-user)
* [Obtener la información de aprovisionamiento de SCIM para un usuario](/rest/reference/scim#get-scim-provisioning-information-for-a-user)
* [Configurar la información de SCIM para un usuario aprovisionado](/rest/reference/scim#set-scim-information-for-a-provisioned-user)
* [Actualizar un atributo para un usuario de SCIM](/rest/reference/scim#update-an-attribute-for-a-scim-user)
* [Borrar a un usuario de SCIM de una organización](/rest/reference/scim#delete-a-scim-user-from-an-organization)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
##### Importaciones de Código Fuente

* [Obtener el estado de una importación](/rest/reference/migrations#get-an-import-status)
* [Iniciar una importación](/rest/reference/migrations#start-an-import)
* [Actualizar una importación](/rest/reference/migrations#update-an-import)
* [Cancelar una importación](/rest/reference/migrations#cancel-an-import)
* [Obtener los autores de una confirmación](/rest/reference/migrations#get-commit-authors)
* [Mapear al autor de una confirmación](/rest/reference/migrations#map-a-commit-author)
* [Obtener archivos grandes](/rest/reference/migrations#get-large-files)
* [Actualizar la preferencia de LFS de Git](/rest/reference/migrations#update-git-lfs-preference)
{% endif %}

##### Colaboradores de Proyecto

* [Listar colaboradores del proyecto](/rest/reference/projects#list-project-collaborators)
* [Agregar a un colaborador del proyecto](/rest/reference/projects#add-project-collaborator)
* [Eliminar a un colaborador del proyecto](/rest/reference/projects#remove-project-collaborator)
* [Obtener permisos del proyecto para un usuario](/rest/reference/projects#get-project-permission-for-a-user)

##### Proyectos

* [Listar los proyectos de la organización](/rest/reference/projects#list-organization-projects)
* [Crear un proyecto en la organización](/rest/reference/projects#create-an-organization-project)
* [Obtener un proyecto](/rest/reference/projects#get-a-project)
* [Actualizar un proyecto](/rest/reference/projects#update-a-project)
* [Borrar un proyecto](/rest/reference/projects#delete-a-project)
* [Listar las columnas del proyecto](/rest/reference/projects#list-project-columns)
* [Crear una columna de proyecto](/rest/reference/projects#create-a-project-column)
* [Obtener una columna de proyecto](/rest/reference/projects#get-a-project-column)
* [Actualizar una column de proyecto](/rest/reference/projects#update-a-project-column)
* [Borrar una columna de proyecto](/rest/reference/projects#delete-a-project-column)
* [Listar las tarjetas del proyecto](/rest/reference/projects#list-project-cards)
* [Crear una tarjeta de proyecto](/rest/reference/projects#create-a-project-card)
* [Mover una columna de proyecto](/rest/reference/projects#move-a-project-column)
* [Obtener una tarjeta de proyecto](/rest/reference/projects#get-a-project-card)
* [Actualizar una tarjeta de proyecto](/rest/reference/projects#update-a-project-card)
* [Borrar una tarjeta de proyecto](/rest/reference/projects#delete-a-project-card)
* [Mover una tarjeta de proyecto](/rest/reference/projects#move-a-project-card)
* [Listar los proyectos de un repositorio](/rest/reference/projects#list-repository-projects)
* [Crear un proyecto en un repositorio](/rest/reference/projects#create-a-repository-project)

##### Comentarios de Extracción

* [Listar comentarios de revisión en una solicitud de extracción](/rest/reference/pulls#list-review-comments-on-a-pull-request)
* [Crear un comentario de revisión para una solicitud de extracción](/rest/reference/pulls#create-a-review-comment-for-a-pull-request)
* [Listar comentarios de revisión en un repositorio](/rest/reference/pulls#list-review-comments-in-a-repository)
* [Obtener un comentario de revisión para una solicitud de extracción](/rest/reference/pulls#get-a-review-comment-for-a-pull-request)
* [Actualizar un comentario de revisión para una solicitud de extracción](/rest/reference/pulls#update-a-review-comment-for-a-pull-request)
* [Borrar un comentario de revisión para una solicitud de extracción](/rest/reference/pulls#delete-a-review-comment-for-a-pull-request)

##### Eventos de Revisión en Solciitudes de Extracción

* [Descartar una revisión para una solicitud de extracción](/rest/reference/pulls#dismiss-a-review-for-a-pull-request)
* [Emitir una revisión para una solicitud de extracción](/rest/reference/pulls#submit-a-review-for-a-pull-request)

##### Solicitudes de Revisión para Solicitudes de Extracción

* [Listar a los revisores requeridos para una solicitud de extracción](/rest/reference/pulls#list-requested-reviewers-for-a-pull-request)
* [Solicitar a los revisores para una solicitud de extracción](/rest/reference/pulls#request-reviewers-for-a-pull-request)
* [Eliminar a los revisores solicitados para una solicitud de extracción](/rest/reference/pulls#remove-requested-reviewers-from-a-pull-request)

##### Revisiones de Solicitudes de Extracción

* [Listar revisores para una solicitud de extracción](/rest/reference/pulls#list-reviews-for-a-pull-request)
* [Crear revisión para una solicitud de extracción](/rest/reference/pulls#create-a-review-for-a-pull-request)
* [Obtener una revisión para una solicitud de extracción](/rest/reference/pulls#get-a-review-for-a-pull-request)
* [Actualizar una revisión para una solicitud de extracción](/rest/reference/pulls#update-a-review-for-a-pull-request)
* [Listar los comentarios para una revisión de una solicitud de extracción](/rest/reference/pulls#list-comments-for-a-pull-request-review)

##### Extracciones

* [Listar solicitudes extracción](/rest/reference/pulls#list-pull-requests)
* [Crear una solicitud de extracción](/rest/reference/pulls#create-a-pull-request)
* [Obtener una solicitud de extracción](/rest/reference/pulls#get-a-pull-request)
* [Actualizar una solicitud de extracción](/rest/reference/pulls#update-a-pull-request)
* [Listar las confirmaciones en una solicitud de extracción](/rest/reference/pulls#list-commits-on-a-pull-request)
* [Listar los archivos en una solicitud de extracción](/rest/reference/pulls#list-pull-requests-files)
* [Revisar si se ha fusionado una solicitud de extracción](/rest/reference/pulls#check-if-a-pull-request-has-been-merged)
* [Fusionar una solicitud de extracción (Botón de Fusionar)](/rest/reference/pulls#merge-a-pull-request)

##### Reacciones

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}* [Borrar una reacción](/rest/reference/reactions#delete-a-reaction-legacy){% else %}* [Borrar una reacción](/rest/reference/reactions#delete-a-reaction){% endif %}
* [Listar las reacciones a un comentario de una confirmación](/rest/reference/reactions#list-reactions-for-a-commit-comment)
* [Crear una reacción para el comentario de una confirmación](/rest/reference/reactions#create-reaction-for-a-commit-comment)
* [Listar las reacciones de un informe de problemas](/rest/reference/reactions#list-reactions-for-an-issue)
* [Crear una reacción para un informe de problemas](/rest/reference/reactions#create-reaction-for-an-issue)
* [Listar las reacciones para el comentario de un informe de problemas](/rest/reference/reactions#list-reactions-for-an-issue-comment)
* [Crear una reacción para el comentario de informe de problemas](/rest/reference/reactions#create-reaction-for-an-issue-comment)
* [Listar las reacciones para el comentario de revisión de una solicitud de extracción](/rest/reference/reactions#list-reactions-for-a-pull-request-review-comment)
* [Crear una reacción para un comentario de revisión de una solicitud de extracción](/rest/reference/reactions#create-reaction-for-a-pull-request-review-comment)
* [Listar las reacciones para un comentario de debate de equipo](/rest/reference/reactions#list-reactions-for-a-team-discussion-comment)
* [Crear una reacción para un comentario de debate de equipo](/rest/reference/reactions#create-reaction-for-a-team-discussion-comment)
* [Listar las reaciones a un debate de equipo](/rest/reference/reactions#list-reactions-for-a-team-discussion)
* [Crear una reacción para un debate de equipo](/rest/reference/reactions#create-reaction-for-a-team-discussion){% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
* [Borrar la reacción a un comentario de una confirmación](/rest/reference/reactions#delete-a-commit-comment-reaction)
* [Borrar la reacción a un comentario](/rest/reference/reactions#delete-an-issue-reaction)
* [Borrar la reacción a un comentario de una confirmación](/rest/reference/reactions#delete-an-issue-comment-reaction)
* [Borrar la reacción a un comentario de una solicitud de extracción](/rest/reference/reactions#delete-a-pull-request-comment-reaction)
* [Borrar la reacción a un debate de equipo](/rest/reference/reactions#delete-team-discussion-reaction)
* [Borrar la reacción a un comentario de un debate de equipo](/rest/reference/reactions#delete-team-discussion-comment-reaction){% endif %}

##### Repositorios

* [Listar los repositorios de una organización](/rest/reference/repos#list-organization-repositories)
* [Crear un repositorio para el usuario autenticado](/rest/reference/repos#create-a-repository-for-the-authenticated-user)
* [Obtener un repositorio](/rest/reference/repos#get-a-repository)
* [Actualizar un repositorio](/rest/reference/repos#update-a-repository)
* [Borrar un repositorio](/rest/reference/repos#delete-a-repository)
* [Comparar dos confirmaciones](/rest/reference/repos#compare-two-commits)
* [Listar los colaboradores del repositorio](/rest/reference/repos#list-repository-contributors)
* [Listar las bifurcaciones](/rest/reference/repos#list-forks)
* [Crear una bifuración](/rest/reference/repos#create-a-fork)
* [Listar los lenguajes de un repositorio](/rest/reference/repos#list-repository-languages)
* [Listar las matrículas de un repositorio](/rest/reference/repos#list-repository-tags)
* [Listar los equipos de un repositorio](/rest/reference/repos#list-repository-teams)
* [Transferir un repositorio](/rest/reference/repos#transfer-a-repository)
* [Listar los repositorios públicos](/rest/reference/repos#list-public-repositories)
* [Listar los repositorios para el usuario autenticado](/rest/reference/repos#list-repositories-for-the-authenticated-user)
* [Listar los repositorios para un usuario](/rest/reference/repos#list-repositories-for-a-user)
* [Crear un repositorio utilizando una plantilla de repositorio](/rest/reference/repos#create-repository-using-a-repository-template)

##### Actividad del Repositorio

* [Listar Stargazers](/rest/reference/activity#list-stargazers)
* [Listar observadores](/rest/reference/activity#list-watchers)
* [Listar los repositorios que el usuario ha marcado con una estrella](/rest/reference/activity#list-repositories-starred-by-a-user)
* [Verificar si el usuario autenticado ha marcado al repositorio con una estrella](/rest/reference/activity#check-if-a-repository-is-starred-by-the-authenticated-user)
* [Marcar un repositorio con una estrella para el usuario autenticado](/rest/reference/activity#star-a-repository-for-the-authenticated-user)
* [Quitar la estrella de un repositorio para el usuario autenticado](/rest/reference/activity#unstar-a-repository-for-the-authenticated-user)
* [Listar los repositorios que el usuario está observando](/rest/reference/activity#list-repositories-watched-by-a-user)

{% if currentVersion == "free-pro-team@latest" %}
##### Correcciones de Seguridad Automatizadas de un Repositorio

* [Habilitar las correcciones de seguridad automatizadas](/rest/reference/repos#enable-automated-security-fixes)
* [Inhabilitar las correcciones de seguridad automatizadas](/rest/reference/repos#disable-automated-security-fixes)
{% endif %}

##### Ramas de los Repositorios

* [Listar ramas](/rest/reference/repos#list-branches)
* [Obtener una rama](/rest/reference/repos#get-a-branch)
* [Obtener la protección de una rama](/rest/reference/repos#get-branch-protection)
* [Actualizar la protección de una rama](/rest/reference/repos#update-branch-protection)
* [Borrar la protección de una rama](/rest/reference/repos#delete-branch-protection)
* [Obtener la protección administrativa de una rama](/rest/reference/repos#get-admin-branch-protection)
* [Configurar la protección administrativa de una rama](/rest/reference/repos#set-admin-branch-protection)
* [Borrar la protección administrativa de una rama](/rest/reference/repos#delete-admin-branch-protection)
* [Obtener la protección de la revisión de una solicitud de extracción](/rest/reference/repos#get-pull-request-review-protection)
* [Actualizar la protección de la revisión de una solicitud de extracción](/rest/reference/repos#update-pull-request-review-protection)
* [Borrar la protección de la revisión de una solicitud de extracción](/rest/reference/repos#delete-pull-request-review-protection)
* [Obtener la protección de firma de una confirmación](/rest/reference/repos#get-commit-signature-protection)
* [Crear la protección de firma de una confirmación](/rest/reference/repos#create-commit-signature-protection)
* [Borrar la protección de firma de una confirmación](/rest/reference/repos#delete-commit-signature-protection)
* [Obtener la protección de las verificaciones de estado](/rest/reference/repos#get-status-checks-protection)
* [Actualizar la protección para la verificación de estados](/rest/reference/repos#update-status-check-protection)
* [Eliminar la protección de las verificaciones de estado](/rest/reference/repos#remove-status-check-protection)
* [Obtener todos los contextos de verificaciones de estado](/rest/reference/repos#get-all-status-check-contexts)
* [Agregar un contexto de verificación de estado](/rest/reference/repos#add-status-check-contexts)
* [Obtener un contexto de verificación de estado](/rest/reference/repos#set-status-check-contexts)
* [Eliminar los contextos de verificación de estado](/rest/reference/repos#remove-status-check-contexts)
* [Obtener restricciones de acceso](/rest/reference/repos#get-access-restrictions)
* [Borrar restricciones de acceso](/rest/reference/repos#delete-access-restrictions)
* [Listar a los equipos con acceso a la rama protegida](/rest/reference/repos#list-teams-with-access-to-the-protected-branch)
* [Agregar restricciones de acceso a equipos](/rest/reference/repos#add-team-access-restrictions)
* [Obtener restricciones de acceso a equipos](/rest/reference/repos#set-team-access-restrictions)
* [Eliminar restricciones de acceso a equipos](/rest/reference/repos#remove-team-access-restrictions)
* [Listar las restricciones de usuario para la rama protegida](/rest/reference/repos#list-users-with-access-to-the-protected-branch)
* [Agregar las restricciones de acceso para los usuarios](/rest/reference/repos#add-user-access-restrictions)
* [Configurar las restricciones de acceso para los usuarios](/rest/reference/repos#set-user-access-restrictions)
* [Eliminar las restricciones de acceso para los usuarios](/rest/reference/repos#remove-user-access-restrictions)
* [Fusionar una rama](/rest/reference/repos#merge-a-branch)

##### Colaboradores del Repositorio

* [Listar los colaboradores del repositorio](/rest/reference/repos#list-repository-collaborators)
* [Verificar si un usuario es colaborador de un repositorio](/rest/reference/repos#check-if-a-user-is-a-repository-collaborator)
* [Agregar un colaborador de repositorio](/rest/reference/repos#add-a-repository-collaborator)
* [Eliminar a un colaborador del repositorio](/rest/reference/repos#remove-a-repository-collaborator)
* [Obtener permisos del repositorio para un usuario](/rest/reference/repos#get-repository-permissions-for-a-user)

##### Comentarios de Confirmaciones de un Repositorio

* [Listar los comentarios de confirmaciones en un repositorio](/rest/reference/repos#list-commit-comments-for-a-repository)
* [Obtener un comentario de una confirmación](/rest/reference/repos#get-a-commit-comment)
* [Actualizar un comentario de una confirmación](/rest/reference/repos#update-a-commit-comment)
* [Borrar un comentario de una confirmación](/rest/reference/repos#delete-a-commit-comment)
* [Listar los comentarios de una confirmación](/rest/reference/repos#list-commit-comments)
* [Crear un comentario de una confirmación](/rest/reference/repos#create-a-commit-comment)

##### Confirmaciones de Repositorio

* [Listar confirmaciones](/rest/reference/repos#list-commits)
* [Obtener una confirmación](/rest/reference/repos#get-a-commit)
* [Listar ramas para la confirmación principal](/rest/reference/repos#list-branches-for-head-commit)
* [Listar solicitudes de extracción asociadas con una confirmación](/rest/reference/repos#list-pull-requests-associated-with-commit)

##### Comunidad del Repositorio

* [Obtener el código de conducta de un repositorio](/rest/reference/codes-of-conduct#get-the-code-of-conduct-for-a-repository)
{% if currentVersion == "free-pro-team@latest" %}
* [Obtener las métricas de perfil de la comunidad](/rest/reference/repos#get-community-profile-metrics)
{% endif %}

##### Contenido de los Repositorios

* [Descargar un archivo de un repositorio](/rest/reference/repos#download-a-repository-archive)
* [Obtener el contenido de un repositorio](/rest/reference/repos#get-repository-content)
* [Crear o actualizar los contenidos de archivo](/rest/reference/repos#create-or-update-file-contents)
* [Borrar un archivo](/rest/reference/repos#delete-a-file)
* [Obtener el README de un repositorio](/rest/reference/repos#get-a-repository-readme)
* [Obtener la licencia para un repositorio](/rest/reference/licenses#get-the-license-for-a-repository)

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
##### Envíos de Evento de un Repositorio

* [Crear un evento de envío de un repositorio](/rest/reference/repos#create-a-repository-dispatch-event)
{% endif %}

##### Ganchos de Repositorio

* [Listar los webhooks de un repositorio](/rest/reference/repos#list-repository-webhooks)
* [Crear un webhook para un repositorio](/rest/reference/repos#create-a-repository-webhook)
* [Obtener un webhook para un repositorio](/rest/reference/repos#get-a-repository-webhook)
* [Actualizar el webhook de un repositorio](/rest/reference/repos#update-a-repository-webhook)
* [Borrar el webhook de un repositorio](/rest/reference/repos#delete-a-repository-webhook)
* [Hacer ping al webhook de un repositorio](/rest/reference/repos#ping-a-repository-webhook)
* [Probar el webhook de carga a un repositorio](/rest/reference/repos#test-the-push-repository-webhook)

##### Invitaciones a un repositorio

* [Listar las invitaciones a un repositorio](/rest/reference/repos#list-repository-invitations)
* [Actualizar la invitación a un repositorio](/rest/reference/repos#update-a-repository-invitation)
* [Borrar la invitación a un repositorio](/rest/reference/repos#delete-a-repository-invitation)
* [Listar las invitaciones a un repositorio para el usuario autenticado](/rest/reference/repos#list-repository-invitations-for-the-authenticated-user)
* [Aceptar la invitación a un repositorio](/rest/reference/repos#accept-a-repository-invitation)
* [Rechazar la invitación a un repositorio](/rest/reference/repos#decline-a-repository-invitation)

##### Claves de Repositorio

* [Listar claves de despliegue](/rest/reference/repos#list-deploy-keys)
* [Crear una clave de despliegue](/rest/reference/repos#create-a-deploy-key)
* [Obtener una clave de despliegue](/rest/reference/repos#get-a-deploy-key)
* [Borrar una clave de despiegue](/rest/reference/repos#delete-a-deploy-key)

##### Páginas de Repositorio

* [Obtener un sitio de GitHub Pages](/rest/reference/repos#get-a-github-pages-site)
* [Crear un sitio de GitHub Pages](/rest/reference/repos#create-a-github-pages-site)
* [Actualizar la información acerca de un sitio de GitHub Pages](/rest/reference/repos#update-information-about-a-github-pages-site)
* [Borrar un sitio de GitHub Pages](/rest/reference/repos#delete-a-github-pages-site)
* [Listar las compilaciones de GitHub Pages](/rest/reference/repos#list-github-pages-builds)
* [Solicitar una compilación de GitHub Pages](/rest/reference/repos#request-a-github-pages-build)
* [Obtener una compilación de GitHub Pages](/rest/reference/repos#get-github-pages-build)
* [Obtener la última compilación de pages](/rest/reference/repos#get-latest-pages-build)

{% if enterpriseServerVersions contains currentVersion %}
##### Ganchos de Pre-recepción de un Repositorio

* [Listar los ganchos de pre-recepción para un repositorio](/enterprise/user/rest/reference/enterprise-admin#list-pre-receive-hooks-for-a-repository)
* [Obtener un gancho de pre-recepción de un repositorio](/enterprise/user/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-a-repository)
* [Actualizar el requerir ganchos de pre-recepción en un repositorio](/enterprise/user/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-a-repository)
* [Eliminar el requerir ganchos de pre-recepción para un repositorio](/enterprise/user/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-a-repository)
{% endif %}

##### Lanzamientos de repositorio

* [Listar los lanzamientos](/rest/reference/repos/#list-releases)
* [Crear un lanzamiento](/rest/reference/repos/#create-a-release)
* [Obtener un lanzamiento](/rest/reference/repos/#get-a-release)
* [Actualizar un lanzamiento](/rest/reference/repos/#update-a-release)
* [Borrar un lanzamiento](/rest/reference/repos/#delete-a-release)
* [Listar activos de lanzamiento](/rest/reference/repos/#list-release-assets)
* [Obtener un activo de lanzamiento](/rest/reference/repos/#get-a-release-asset)
* [Actualizar un activo de lanzamiento](/rest/reference/repos/#update-a-release-asset)
* [Borrar un activo de lanzamiento](/rest/reference/repos/#delete-a-release-asset)
* [Obtener el lanzamiento más reciente](/rest/reference/repos/#get-the-latest-release)
* [Obtener un lanzamiento por nombre de matrícula](/rest/reference/repos/#get-a-release-by-tag-name)

##### Estadísticas de Repositorio

* [Obtener la actividad de confirmaciones semanal](/rest/reference/repos#get-the-weekly-commit-activity)
* [Obtener la actividad de confirmaciones del año pasado](/rest/reference/repos#get-the-last-year-of-commit-activity)
* [Obtener la actividad de confirmaciones de todos los colaboradores](/rest/reference/repos#get-all-contributor-commit-activity)
* [Obtener la cuenta semanal de confirmaciones](/rest/reference/repos#get-the-weekly-commit-count)
* [Obtener la cuenta de confirmaciones por hora para cada día](/rest/reference/repos#get-the-hourly-commit-count-for-each-day)

{% if currentVersion == "free-pro-team@latest" %}
##### Alertas de Vulnerabilidad en Repositorios

* [Habilitar las alertas de vulnerabilidades](/rest/reference/repos#enable-vulnerability-alerts)
* [Inhabilitar las alertas de vulnerabilidades](/rest/reference/repos#disable-vulnerability-alerts)
{% endif %}

##### Raíz

* [Terminal raíz](/rest#root-endpoint)
* [Emojis](/rest/reference/emojis#emojis)
* [Obtener un estado de límite de tasa para el usuario autenticado](/rest/reference/rate-limit#get-rate-limit-status-for-the-authenticated-user)

##### Buscar

* [Buscar código](/rest/reference/search#search-code)
* [Buscar confirmaciones](/rest/reference/search#search-commits)
* [Buscar etiquetas](/rest/reference/search#search-labels)
* [Buscar repositorios](/rest/reference/search#search-repositories)
* [Buscar temas](/rest/reference/search#search-topics)
* [Buscar usuarios](/rest/reference/search#search-users)

##### Estados

* [Obtener el estado combinado para una referencia específica](/rest/reference/repos#get-the-combined-status-for-a-specific-reference)
* [Listar los estados de confirmación para una referencia](/rest/reference/repos#list-commit-statuses-for-a-reference)
* [Crear un estado de confirmación](/rest/reference/repos#create-a-commit-status)

##### Debates de Equipo

* [Listar debates](/rest/reference/teams#list-discussions)
* [Crear un debate](/rest/reference/teams#create-a-discussion)
* [Obtener un debate](/rest/reference/teams#get-a-discussion)
* [Actualizar un debate](/rest/reference/teams#update-a-discussion)
* [Borrar un debate](/rest/reference/teams#delete-a-discussion)
* [Listar los comentarios del debate](/rest/reference/teams#list-discussion-comments)
* [Crear un comentario sobre un debate](/rest/reference/teams#create-a-discussion-comment)
* [Obtener un comentario de un debate](/rest/reference/teams#get-a-discussion-comment)
* [Actualizar un comentario en un debate](/rest/reference/teams#update-a-discussion-comment)
* [Borrar un comentario de un debate](/rest/reference/teams#delete-a-discussion-comment)

##### Temas

* [Obtener todos los temas de un repositorio](/rest/reference/repos#get-all-repository-topics)
* [Reemplazar todos los temas de un repositorio](/rest/reference/repos#replace-all-repository-topics)

{% if currentVersion == "free-pro-team@latest" %}
##### Tráfico

* [Obtener los clones de un repositorio](/rest/reference/repos#get-repository-clones)
* [Obtener las rutas de referencia superior](/rest/reference/repos#get-top-referral-paths)
* [Obtener las fuentes de referencia superior](/rest/reference/repos#get-top-referral-sources)
* [Obtener las visualizaciones de página](/rest/reference/repos#get-page-views)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
##### Bloquear Usuarios

* [Listar a los usuarios que ha bloqueado el usuario autenticado](/rest/reference/users#list-users-blocked-by-the-authenticated-user)
* [Verificar si el usuario autenticado bloqueó a un usuario](/rest/reference/users#check-if-a-user-is-blocked-by-the-authenticated-user)
* [Listar a los usuarios que habloqueado la organización](/rest/reference/orgs#list-users-blocked-by-an-organization)
* [Verificar si una organización bloqueó a un usuario](/rest/reference/orgs#check-if-a-user-is-blocked-by-an-organization)
* [Bloquear a un usuario de una organización](/rest/reference/orgs#block-a-user-from-an-organization)
* [Desbloquear a un usuario de una organización](/rest/reference/orgs#unblock-a-user-from-an-organization)
* [Bloquear a un usuario](/rest/reference/users#block-a-user)
* [Desbloquear a un usuario](/rest/reference/users#unblock-a-user)
{% endif %}

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
##### Correo Electrónico de Usuario

{% if currentVersion == "free-pro-team@latest" %}
* [Configurar la visibilidad del correo electrónico principal para el usuario autenticado](/rest/reference/users#set-primary-email-visibility-for-the-authenticated-user)
{% endif %}
* [Listar las direcciones de correo electrónico para el usuario autenticado](/rest/reference/users#list-email-addresses-for-the-authenticated-user)
* [Agregar la(s) dirección(es) de correo electrónico](/rest/reference/users#add-an-email-address-for-the-authenticated-user)
* [Borrar la(s) direccion(es) de correo electrónico](/rest/reference/users#delete-an-email-address-for-the-authenticated-user)
* [Listar las direcciones de correo electrónico del usuario autenticado](/rest/reference/users#list-public-email-addresses-for-the-authenticated-user)
{% endif %}

##### Seguidores del Usuario

* [Listar los seguidores de un usuario](/rest/reference/users#list-followers-of-a-user)
* [Listar a las personas que sigue un usuario](/rest/reference/users#list-the-people-a-user-follows)
* [Revisar si el usuario autenticado sigue a una persona](/rest/reference/users#check-if-a-person-is-followed-by-the-authenticated-user)
* [Seguir a un usuario](/rest/reference/users#follow-a-user)
* [Dejar de seguri a un usuario](/rest/reference/users#unfollow-a-user)
* [Verificar si el usuario sigue a otro usuario](/rest/reference/users#check-if-a-user-follows-another-user)

##### Utilizar Llaves Gpg

* [Listar las llaves GPG para el usuario autenticado](/rest/reference/users#list-gpg-keys-for-the-authenticated-user)
* [Crear una llave GPG para el usuario autenticado](/rest/reference/users#create-a-gpg-key-for-the-authenticated-user)
* [Obtener una llave GPG para el usuario autenticado](/rest/reference/users#get-a-gpg-key-for-the-authenticated-user)
* [Borrar una llave GPG para el usuario autenticado](/rest/reference/users#delete-a-gpg-key-for-the-authenticated-user)
* [Listar las llaves GPG de un usuario](/rest/reference/users#list-gpg-keys-for-a-user)

##### Llaves Públicas de Usuario

* [Listar las llaves SSH para el usuario autenticado](/rest/reference/users#list-public-ssh-keys-for-the-authenticated-user)
* [Crear una llave SSH para el usuario autenticado](/rest/reference/users#create-a-public-ssh-key-for-the-authenticated-user)
* [Obtener una llave SSH pública para el usuario autenticado](/rest/reference/users#get-a-public-ssh-key-for-the-authenticated-user)
* [Borrar una llave pública de SSH para el usuario autenticado](/rest/reference/users#delete-a-public-ssh-key-for-the-authenticated-user)
* [Listar las llaves públicas de un usuario](/rest/reference/users#list-public-keys-for-a-user)

##### Usuarios

* [Obtener al usuario autenticado](/rest/reference/users#get-the-authenticated-user)
* [Listar las instalaciones de apps accesibles para el token de acceso del usuario](/rest/reference/apps#list-app-installations-accessible-to-the-user-access-token)
{% if currentVersion == "free-pro-team@latest" %}
* [Listar las suscripciones del usuario autenticado](/rest/reference/apps#list-subscriptions-for-the-authenticated-user)
{% endif %}
* [Listar usuarios](/rest/reference/users#list-users)
* [Obtener un usuario](/rest/reference/users#get-a-user)

{% if currentVersion == "free-pro-team@latest" %}
##### Ejecuciones de Flujo de Trabajo

* [Listar las ejecuciones de flujode trabajo de un repositorio](/rest/reference/actions#list-workflow-runs-for-a-repository)
* [Obtener una ejecución de flujo de trabajo](/rest/reference/actions#get-a-workflow-run)
* [Cancelar una ejecución de flujo de trabajo](/rest/reference/actions#cancel-a-workflow-run)
* [Descargar las bitácoras de ejecución de flujo de trabajo](/rest/reference/actions#download-workflow-run-logs)
* [Borrar las bitácoras de ejecución de flujo de trabajo](/rest/reference/actions#delete-workflow-run-logs)
* [Re-ejecutar un flujo de trabajo](/rest/reference/actions#re-run-a-workflow)
* [Listar las ejecuciones de flujo de trabajo](/rest/reference/actions#list-workflow-runs)
* [Obtener las estadísticas de uso de las ejecuciones de flujo de trabajo](/rest/reference/actions#get-workflow-run-usage)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
##### Flujos de trabajo

* [Listar los flujos de trabajo del repositorio](/rest/reference/actions#list-repository-workflows)
* [Obtener un flujo de trabajo](/rest/reference/actions#get-a-workflow)
* [Obtener el uso de un flujo de trabajo](/rest/reference/actions#get-workflow-usage)
{% endif %}
