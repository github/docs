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
---


{% data reusables.pre-release-program.expiring-user-access-tokens-beta %}

Cuando tu GitHub App actúe en nombre de un usuario, ésta realiza solicitudes de usuario a servidor. Estas solicitudes deben autorizarse con un token de acceso de usuario. Las solicitudes de usuario a servidor incluyen el solicitar datos para un usuario, como el determinar qué repositorios mostrar a un usuario en particular. Estas solicitudes también incluyen las acciones que activa un usuario, como ejecutar una compilación.

{% data reusables.apps.expiring_user_authorization_tokens %}

### Identificar usuarios en tu sitio

Para autorizar a los usuarios para las apps estándar que se ejecutan en el buscador, utiliza el [flujo de aplicaciones web](#web-application-flow).

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
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

| Nombre         | Tipo        | Descripción                                                                                                                                                                                                                                                                                              |
| -------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `client_id`    | `secuencia` | **Requerido.** La ID de cliente para tu GitHub App. Puedes encontrarla en los [Ajustes de tu GitHub App](https://github.com/settings/apps) cuando selecciones tu app.                                                                                                                                    |
| `redirect_uri` | `secuencia` | La URL en tu aplicación a donde se enviará a los usuarios después de la autorización.  Esta deberá ser una coincidencia exacta de la URL que proporcionaste en el campo **URL de rellamado para autorización del usuario** cuando configuraste tu GitHub App y no puede contener parámetros adicionales. |
| `state`        | `secuencia` | Este deberá contener una secuencia aleatoria para dar protección contra los ataques de falsificación y podría contener cualquier otros datos arbitrarios.                                                                                                                                                |
| `login`        | `secuencia` | Sugiere una cuenta específica para utilizar para registrarse y autorizar la app.                                                                                                                                                                                                                         |

{% note %}

**Nota:** No necesitas proporcionar alcances en tu solicitud de autorización. A diferencia de la OAuth trandicional, el token de autorizción se limita a los permisos asociados con tu GitHub App y a aquellos del usuario.

{% endnote %}

#### 2. GitHub redirecciona a los usuarios de vuelta a tu sitio

Si el usuario acepta tu solicitud, GitHub te redirecciona de regreso a tu sitio con un `code` temporal en un parámetro de código así como con el estado que proporcionaste en el paso anterior en el parámetro `state`. Si los estados no coinciden significa que un tercero creó la solicitud y que se debe anular el proceso.

{% note %}

**Nota:** Si seleccionas **Solicitar la autorización del usuario (OAuth) durante la instalación ** cuando creas o modificas tu app, GitHub regreará un `code` temporal que necesitarás intercambiar por un token de acceso. El parámetro `state` no se regresa cuando GitHub inicia el flujo de OAuth durante la instalación de la app.

{% endnote %}

Intercambia este `code` por un token de acceso. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %} Cuando se habilita la caducidad de los tokens, el token de acceso caduca en 8 horas y el token de actualización en 6. Cada que actualizas el token, obtienes un nuevo token de actualización. Para obtener más información, consulta la sección "[Actualizar los tokens de acceso de usuario a servidor](/apps/building-github-apps/refreshing-user-to-server-access-tokens/)".

Los tokens de usuario con caducidad son parte del beta de caducidad de tokens de usuario a servidor actualmente y están sujetos a cambios. Para participar en la característica beta de tokens de usuario a servidor con caducidad, consulta la sección "[Activar las características beta para las aplicaciones](/developers/apps/activating-beta-features-for-apps)".{% endif %}

    POST {% data variables.product.oauth_host_code %}/login/oauth/access_token

##### Parámetros

| Nombre          | Tipo        | Descripción                                                                                |
| --------------- | ----------- | ------------------------------------------------------------------------------------------ |
| `client_id`     | `secuencia` | **Requerido.** La ID de cliente para tu GitHub App.                                        |
| `client_secret` | `secuencia` | **Requerido.** El secreto de cliente para tu GitHub App.                                   |
| `código`        | `secuencia` | **Requerido.** El código que recibiste como respuesta al Paso 1.                           |
| `redirect_uri`  | `secuencia` | La URL en tu aplicación, hacia la cual se envía a los usuarios después de su autorización. |
| `state`         | `secuencia` | La secuencia aleatoria indescifrable que proporcionaste en el Paso 1.                      |

##### Respuesta

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}

Predeterminadamente, la respuesta toma la siguiente forma. Los parámetros de respuesta `expires_in`, `refresh_token`,  y `refresh_token_expires_in`  solo se devuelven cuando habilitas el beta para la caducidad de los tokens de acceso de usuario a servidor.

```
{
  "access_token": "e72e16c7e42f292c6912e7710c838347ae178b4a",
  "expires_in": "28800",
  "refresh_token": "r1.c1b4a2e77838347a7e420ce178f2e7c6912e1692",
  "refresh_token_expires_in": "15811200",
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

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
### Flujo de dispositivos

{% note %}

**Nota:** El flujo de dispositivos se encuentra en beta público y está sujeto a cambios.{% if currentVersion == "free-pro-team@latest" %} Para habilitar esta característica beta, consulta la sección "[Activar las características beta para las apps](/developers/apps/activating-beta-features-for-apps)".{% endif %}

{% endnote %}

Este flujo de dispositivos te permite autorizar usuarios para una app sin encabezado, tal como una herramienta de CLI o un administrador de credenciales de Git.

Para obtener más información acerca de autorizar a usuarios utilizando el flujo de dispositivos, consulta la sección "[Autorizar Apps de OAuth](/developers/apps/authorizing-oauth-apps#device-flow)".

{% endif %}

### Revisar a qué recursos de instalación puede acceder un usuario

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.22" %}
{% data reusables.pre-release-program.machine-man-preview %}
{% data reusables.pre-release-program.api-preview-warning %}
{% endif %}

Ya que tengas un token de OAuth para un usuario, puedes revisar a qué instalaciones puede acceder.

    Authorization: token OAUTH-TOKEN
    GET /user/installations

También puedes verificar qué repositorios se encuentran accesibles para un usuario para una instalación.

    Authorization: token OAUTH-TOKEN
    GET /user/installations/:installation_id/repositories

Puedes encontrar más detalles en: [Listar instalaciones de app accesibles para el token de acceso del usuario](/v3/apps/installations/#list-app-installations-accessible-to-the-user-access-token) y [Listar repositorios accesibles para el token de acceso del usuario](/v3/apps/installations/#list-repositories-accessible-to-the-user-access-token).

### Gestionar una autorización revocada a una GitHub App

Si un usuario revoca su autorización de una GitHub App, dicha app recibirá el webhook [`github_app_authorization`](/webhooks/event-payloads/#github_app_authorization) predeterminadamente. Las GitHub Apps no pueden desuscribirse de este evento. {% data reusables.webhooks.authorization_event %}

### Permisos a nivel de usuario

Puedes agregar permisos a nivel de usuario a tu GitHub App para acceder a los recursos del usuario, tales como correos electrónicos del usuario, los cuales otorgan los usuarios independientes como parte del [flujo de autorización del usuario](#identifying-users-on-your-site). Los permisos a nivel de usuario difieren de los [permisos a nivel de organización y de repositorio](/v3/apps/permissions/), los cuales se otorgan en el momento de la instalación en una cuenta de usuario o de organización.

Puedes seleccionar los permisos a nivel de usuario desde dentro de la configuración de tu GitHub App en la sección de **Permisos de usuario** de la página de **Permisos & webhooks**. Para obtener más información sobre seleccionar permisos, consulta la sección [Editar los permisos de una GitHub App](/apps/managing-github-apps/editing-a-github-app-s-permissions/)".

Cuando un usuario instala tu app en su cuenta, el aviso de instalación listará los permisos a nivel de usuario que tu app está solicitando y explicará que la app puede pedir estos permisos a los usuarios independientes.

Ya que los permisos a nivel de usuario se otorgan individualmente, puedes agregarlos a tu app existente sin solicitar que los usuarios los mejoren. Sin embargo, necesitarás enviar usuarios existentes a través del flujo de autorización de usuarios para autorizar los permisos nuevos y obtener un token nuevo de usuario a servidor para estas solicitudes.

### Solicitudes de usuario a servidor

Mientras que la mayoría de tu interacción con la API deberá darse utilizando tus tokens de acceso a la instalación de servidor a servidor, ciertas terminales te permiten llevar a cabo acciones a través de la API utilizando un token de acceso. Tu app puede hacer las siguientes solicitudes utilizando las terminales de [GraphQL v4](/v4/) o de [REST v3](/v3/).

#### Terminales compatibles

{% if currentVersion == "free-pro-team@latest" %}
##### Ejecutores de Acciones

* [Listar aplicaciones de ejecutores para un repositorio](/v3/actions/self-hosted-runners/#list-runner-applications-for-a-repository)
* [Listar ejecutores auto-hospedados para un repositorio](/v3/actions/self-hosted-runners/#list-self-hosted-runners-for-a-repository)
* [Obtener un ejecutor auto-hospedado para un repositorio](/v3/actions/self-hosted-runners/#get-a-self-hosted-runner-for-a-repository)
* [Borrar un ejecutor auto-hospedado de un repositorio](/v3/actions/self-hosted-runners/#delete-a-self-hosted-runner-from-a-repository)
* [Crear un token de registro para un repositorio](/v3/actions/self-hosted-runners/#create-a-registration-token-for-a-repository)
* [Crear un token de eliminación para un repositorio](/v3/actions/self-hosted-runners/#create-a-remove-token-for-a-repository)
* [Listar aplicaciones de ejecutores para una organización](/v3/actions/self-hosted-runners/#list-runner-applications-for-an-organization)
* [Listar ejecutores auto-hospedados para una organización](/v3/actions/self-hosted-runners/#list-self-hosted-runners-for-an-organization)
* [Obtener ejecutores auto-hospedados para una organización](/v3/actions/self-hosted-runners/#get-a-self-hosted-runner-for-an-organization)
* [Borrar un ejecutor auto-hospedado de una organización](/v3/actions/self-hosted-runners/#delete-a-self-hosted-runner-from-an-organization)
* [Crear un token de registro para una organización](/v3/actions/self-hosted-runners/#create-a-registration-token-for-an-organization)
* [Crear un token de eliminación para una organización](/v3/actions/self-hosted-runners/#create-a-remove-token-for-an-organization)

##### Secretos de las Acciones

* [Obtener la llave pública de un repositorio](/v3/actions/secrets/#get-a-repository-public-key)
* [Listar los secretos del repositorio](/v3/actions/secrets/#list-repository-secrets)
* [Obtener el secreto de un repositorio](/v3/actions/secrets/#get-a-repository-secret)
* [Crear o actualizar el secreto de un repositorio](/v3/actions/secrets/#create-or-update-a-repository-secret)
* [Borrar el secreto de un repositorio](/v3/actions/secrets/#delete-a-repository-secret)
* [Obtener la llave pública de una organización](/v3/actions/secrets/#get-an-organization-public-key)
* [Listar los secretos de la organización](/v3/actions/secrets/#list-organization-secrets)
* [Obtener el secreto de una organización](/v3/actions/secrets/#get-an-organization-secret)
* [Crear o actualizar el secreto de una organización](/v3/actions/secrets/#create-or-update-an-organization-secret)
* [Listar los repositorios seleccionados para el secreto de una organización](/v3/actions/secrets/#list-selected-repositories-for-an-organization-secret)
* [Configurar los repositorios seleccionados para el secreto de una organización](/v3/actions/secrets/#set-selected-repositories-for-an-organization-secret)
* [Agregar el repositorio seleccionado al secreto de una organización](/v3/actions/secrets/#add-selected-repository-to-an-organization-secret)
* [Eliminar el repositorio seleccionado del secreto de una organización](/v3/actions/secrets/#remove-selected-repository-from-an-organization-secret)
* [Borrar el secreto de una organización](/v3/actions/secrets/#delete-an-organization-secret)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
##### Artefactos

* [Listar artefactos para un repositorio](/v3/actions/artifacts/#list-artifacts-for-a-repository)
* [Listar artefactos de ejecución de flujo de trabajo](/v3/actions/artifacts/#list-workflow-run-artifacts)
* [Obtener un artefacto](/v3/actions/artifacts/#get-an-artifact)
* [Borrar un artefacto](/v3/actions/artifacts/#delete-an-artifact)
* [Descargar un artefacto](/v3/actions/artifacts/#download-an-artifact)
{% endif %}

##### Ejecuciones de Verificación

* [Crear una ejecución de verificación](/v3/checks/runs/#create-a-check-run)
* [Obtener una ejecución de verificación](/v3/checks/runs/#get-a-check-run)
* [Actualizar una ejecución de verificación](/v3/checks/runs/#update-a-check-run)
* [Listar las anotaciones de una ejecución de verificación](/v3/checks/runs/#list-check-run-annotations)
* [Listar las ejecuciones de verificación en un conjunto de verificaciones](/v3/checks/runs/#list-check-runs-in-a-check-suite)
* [Listar las ejecuciones de verificación para una referencia de Git](/v3/checks/runs/#list-check-runs-for-a-git-reference)

##### Comprobar Suites

* [Crear un conjunto de verificaciones](/v3/checks/suites/#create-a-check-suite)
* [Obtener un conjunto de verificaciones](/v3/checks/suites/#get-a-check-suite)
* [Solicitar un conjunto de verificaciones](/v3/checks/suites/#rerequest-a-check-suite)
* [Actualizar las preferencias del repositorio para los conjuntos de verificaciones](/v3/checks/suites/#update-repository-preferences-for-check-suites)
* [Listar conjuntos de verificaciones para una referencia de Git](/v3/checks/suites/#list-check-suites-for-a-git-reference)

##### Códigos de Conducta

* [Obtener todos los códigos de conducta](/v3/codes_of_conduct/#get-all-codes-of-conduct)
* [Obtener un código de conducta específico](/v3/codes_of_conduct/#get-a-code-of-conduct)

##### Estados de Despliegue

* [Listar los estados de despliegue](/v3/repos/deployments/#list-deployment-statuses)
* [Crear los estados de despliegue](/v3/repos/deployments/#create-a-deployment-status)
* [Obtener un estado de despliegue](/v3/repos/deployments/#get-a-deployment-status)

##### Implementaciones

* [Listar los despliegues](/v3/repos/deployments/#list-deployments)
* [Crear un despliegue](/v3/repos/deployments/#create-a-deployment)
* [Obtener un despliegue](/v3/repos/deployments/#get-a-deployment){% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
* [Borrar un despliegue](/v3/repos/deployments/#delete-a-deployment){% endif %}

##### Eventos

* [Listar eventos públicos para una red de repositorios](/v3/activity/events/#list-public-events-for-a-network-of-repositories)
* [Listar eventos de organizaciones públicas](/v3/activity/events/#list-public-organization-events)

##### Fuentes

* [Obtener fuentes](/v3/activity/feeds/#get-feeds)

##### Blobs de Git

* [Crear un blob](/v3/git/blobs/#create-a-blob)
* [Obtener un blob](/v3/git/blobs/#get-a-blob)

##### Confirmaciones de Git

* [Crear una confirmación](/v3/git/commits/#create-a-commit)
* [Obtener una confirmación](/v3/git/commits/#get-a-commit)

##### Referencias de Git

* [Crear una referencia](/v3/git/refs/#create-a-reference){% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.19" %}
* [Listar referencias](/v3/git/refs/#list-references)
* [Obtener una referencia](/v3/git/refs/#get-a-reference){% else %}
* [Obtener una referencia](/v3/git/refs/#get-a-reference)
* [Listar referencias coincidentes](/v3/git/refs/#list-matching-references){% endif %}
* [Actualizar una referencia](/v3/git/refs/#update-a-reference)
* [Borrar una referencia](/v3/git/refs/#delete-a-reference)

##### Matrículas de Git

* [Crear un objeto de matrícula](/v3/git/tags/#create-a-tag-object)
* [Obtener una matrícula](/v3/git/tags/#get-a-tag)

##### Árboles de Git

* [Crear un árbol](/v3/git/trees/#create-a-tree)
* [Obtener un árbol](/v3/git/trees/#get-a-tree)

##### Plantillas de Gitignore

* [Obtener todas las plantillas de gitignore](/v3/gitignore/#get-all-gitignore-templates)
* [Obtener una plantilla específica de gitignore](/v3/gitignore/#get-a-gitignore-template)

##### Instalaciones

* [Listar repositorios accesibles para el token de acceso del usuario](/v3/apps/installations/#list-repositories-accessible-to-the-user-access-token)

{% if currentVersion == "free-pro-team@latest" %}
##### Límites de interacción

* [Obtener restricciones de interacción para una organización](/v3/interactions/orgs/#get-interaction-restrictions-for-an-organization)
* [Configurar restricciones de interacción para una organización](/v3/interactions/orgs/#set-interaction-restrictions-for-an-organization)
* [Eliminar restricciones de interacción para una organización](/v3/interactions/orgs/#remove-interaction-restrictions-for-an-organization)
* [Obtener restricciones de interacción para un repositorio](/v3/interactions/repos/#get-interaction-restrictions-for-a-repository)
* [Configurar restricciones de interacción para un repositorio](/v3/interactions/repos/#set-interaction-restrictions-for-a-repository)
* [Eliminar restricciones de interacción para un repositorio](/v3/interactions/repos/#remove-interaction-restrictions-for-a-repository)
{% endif %}

##### Asignados de Informes de Problemas

* [Agregar asignados a un informe de problemas](/v3/issues/assignees/#add-assignees-to-an-issue)
* [Eliminar asignados de un informe de problemas](/v3/issues/assignees/#remove-assignees-from-an-issue)

##### Comentarios de Informes de Problemas

* [Listar comentarios del informe de problemas](/v3/issues/comments/#list-issue-comments)
* [Crear un comentario del informe de problemas](/v3/issues/comments/#create-an-issue-comment)
* [Listar cometnarios del informe de problemas para un repositorio](/v3/issues/comments/#list-issue-comments-for-a-repository)
* [Obtener un comentario de un informe de problemas](/v3/issues/comments/#get-an-issue-comment)
* [Actualizar un comentario de un informe de problemas](/v3/issues/comments/#update-an-issue-comment)
* [Borrar un comentario de un informe de problemas](/v3/issues/comments/#delete-an-issue-comment)

##### Eventos de Informe de Problemas

* [Listar eventos del informe de problemas](/v3/issues/events/#list-issue-events)

##### Línea de tiempo del Informe de Problemas

* [Listar eventos de la línea de tiempo para un informe de problemas](/v3/issues/timeline/#list-timeline-events-for-an-issue)

##### Problemas

* [Listar informes de problemas asignados al usuario autenticado](/v3/issues/#list-issues-assigned-to-the-authenticated-user)
* [Listar asignados](/v3/issues/assignees/#list-assignees)
* [Revisar si se puede asignar un usuario](/v3/issues/assignees/#check-if-a-user-can-be-assigned)
* [Listar informes de problemas del repositorio](/v3/issues/#list-repository-issues)
* [Crear un informe de problemas](/v3/issues/#create-an-issue)
* [Obtener un informe de problemas](/v3/issues/#get-an-issue)
* [Actualizar un informe de problemas](/v3/issues/#update-an-issue)
* [Bloquear un informe de problemas](/v3/issues/#lock-an-issue)
* [Desbloquear un informe de problemas](/v3/issues/#unlock-an-issue)

{% if currentVersion == "free-pro-team@latest" %}
##### Jobs

* [Obener un job para una ejecución de flujo de trabajo](/v3/actions/workflow-jobs/#get-a-job-for-a-workflow-run)
* [Descargar bitácoras del job para una ejecución de flujode trabajo](/v3/actions/workflow-jobs/#download-job-logs-for-a-workflow-run)
* [Listar jobs para una ejecución de flujo de trabajo](/v3/actions/workflow-jobs/#list-jobs-for-a-workflow-run)
{% endif %}

##### Etiquetas

* [Listar las etiquetas para un informe de problemas](/v3/issues/labels/#list-labels-for-an-issue)
* [Agregar etiquetas a un informe de problemas](/v3/issues/labels/#add-labels-to-an-issue)
* [Configurar eitquetas para un informe de problemas](/v3/issues/labels/#set-labels-for-an-issue)
* [Eliminar todas las etiquetas de un informe de problemas](/v3/issues/labels/#remove-all-labels-from-an-issue)
* [Eliminar una etiqueta de un informe de problemas](/v3/issues/labels/#remove-a-label-from-an-issue)
* [Listar etiquetas para un repositorio](/v3/issues/labels/#list-labels-for-a-repository)
* [Crear una etiqueta](/v3/issues/labels/#create-a-label)
* [Obtener una etiqueta](/v3/issues/labels/#get-a-label)
* [Actualizar una etiqueta](/v3/issues/labels/#update-a-label)
* [Borrar una etiqueta](/v3/issues/labels/#delete-a-label)
* [Obtener etiquetas para cada informe de problemas en un hito](/v3/issues/labels/#list-labels-for-issues-in-a-milestone)

##### Licencias

* [Obtener todas las licencias que se utilizan habitualmente](/v3/licenses/#get-all-commonly-used-licenses)
* [Obtener una licencia](/v3/licenses/#get-a-license)

##### Markdown

* [Generar un documento de Markdown](/v3/markdown/#render-a-markdown-document)
* [Generar un documento de markdwon en modo raw](/v3/markdown/#render-a-markdown-document-in-raw-mode)

##### Meta

* [Meta](/v3/meta/#meta)

##### Hitos

* [Listar hitos](/v3/issues/milestones/#list-milestones)
* [Crear un hito](/v3/issues/milestones/#create-a-milestone)
* [Obtener un hito](/v3/issues/milestones/#get-a-milestone)
* [Actualizar un hito](/v3/issues/milestones/#update-a-milestone)
* [Borrar un hito](/v3/issues/milestones/#delete-a-milestone)

##### Ganchos de organización

* [Listar los webhooks de la organización](/v3/orgs/hooks/#list-organization-webhooks)
* [Crear un webhook para una organización](/v3/orgs/hooks/#create-an-organization-webhook)
* [Obtener un webhook de una organización](/v3/orgs/hooks/#get-an-organization-webhook)
* [Actualizar el webhook de una organización](/v3/orgs/hooks/#update-an-organization-webhook)
* [Borrar el webhook de una organización](/v3/orgs/hooks/#delete-an-organization-webhook)
* [Hacer ping al webhook de una organización](/v3/orgs/hooks/#ping-an-organization-webhook)

{% if currentVersion == "free-pro-team@latest" %}
##### Invitaciones a las Organizaciones

* [Listar las invitaciones pendientes a una organización](/v3/orgs/members/#list-pending-organization-invitations)
* [Crear una invitación a una organización](/v3/orgs/members/#create-an-organization-invitation)
* [Listar los equipos de invitación a una organización](/v3/orgs/members/#list-organization-invitation-teams)
{% endif %}

##### Miembros de la Organización

* [Listar a los miembros de la organización](/v3/orgs/members/#list-organization-members)
* [Verificar la membrecía de organización de un usuario](/v3/orgs/members/#check-organization-membership-for-a-user)
* [Eliminar a un miembro de una organización](/v3/orgs/members/#remove-an-organization-member)
* [Obtener la membrecía de organización para un usuario](/v3/orgs/members/#get-organization-membership-for-a-user)
* [Configurar una mebrecía de organización para un usuario](/v3/orgs/members/#set-organization-membership-for-a-user)
* [Eliminar la membrecía de organización de un usuario](/v3/orgs/members/#remove-organization-membership-for-a-user)
* [Listar los miembros de una organización pública](/v3/orgs/members/#list-public-organization-members)
* [Verificar la membrecía de una organización pública de un usuario](/v3/orgs/members/#check-public-organization-membership-for-a-user)
* [Configurar la membrecía de una organización pública para el usuario autenticado](/v3/orgs/members/#set-public-organization-membership-for-the-authenticated-user)
* [Eliminar la membrecía de una organizción pública del usuario autenticado](/v3/orgs/members/#remove-public-organization-membership-for-the-authenticated-user)

##### Colaboradores Externos de una Organización

* [Listar los colaboradores externos de una organización](/v3/orgs/outside_collaborators/#list-outside-collaborators-for-an-organization)
* [Convertir a un miembro de la organización en colaborador externo](/v3/orgs/outside_collaborators/#convert-an-organization-member-to-outside-collaborator)
* [Eliminar a un colaborador externo de la organización](/v3/orgs/outside_collaborators/#remove-outside-collaborator-from-an-organization)

{% if currentVersion != "free-pro-team@latest" %}
##### Ganchos de Pre-recepción de la Organización

* [Listar los ganchos de pre-recepción de una organización](/enterprise/user/rest/reference/enterprise-admin#list-pre-receive-hooks-for-an-organization)
* [Obtener los ganchos de pre-recepción de una organización](/enterprise/user/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-an-organization)
* [Actualizar el requerir los ganchos de pre-recepción para una organización](/enterprise/user/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-an-organization)
* [Eliminar el requerir los ganchos de pre-recepción para una organización](/enterprise/user/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-an-organization)
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
##### Poyectos de Equipo de una Organización

* [Listar los proyectos de equipo](/v3/teams/#list-team-projects)
* [Verificar los permisos del equipo para un proyecto](/v3/teams/#check-team-permissions-for-a-project)
* [Agregar o actualizar los permisos de un proyecto de equipo](/v3/teams/#add-or-update-team-project-permissions)
* [Eliminar a un proyecto de un equipo](/v3/teams/#remove-a-project-from-a-team)
{% endif %}

##### Repositorios de Equipo de la Organización

* [Listar los repositorios de equipo](/v3/teams/#list-team-repositories)
* [Verificar los permisos de un equipo para un repositorio](/v3/teams/#check-team-permissions-for-a-repository)
* [Agregar o actualizar los permisos de un repositorio de equipo](/v3/teams/#add-or-update-team-repository-permissions)
* [Eliminar a un repositorio de un equipo](/v3/teams/#remove-a-repository-from-a-team)

{% if currentVersion == "free-pro-team@latest" %}
##### Sincronización de Equipos de la Organización

* [Listar los grupos de IdP de un equipo](/v3/teams/team_sync/#list-idp-groups-for-a-team)
* [Crear o actualizar las conexiones de un grupo de IdP](/v3/teams/team_sync/#create-or-update-idp-group-connections)
* [Listar grupos de IdP para una organización](/v3/teams/team_sync/#list-idp-groups-for-an-organization)
{% endif %}

##### Equipos de la Organización

* [Listar equipos](/v3/teams/#list-teams)
* [Crear un equipo](/v3/teams/#create-a-team)
* [Obtener un equipo por su nombre](/v3/teams/#get-a-team-by-name)
{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.21" %}
* [Obtener un equipo](/v3/teams/#get-a-team)
{% endif %}
* [Actualizar un equipo](/v3/teams/#update-a-team)
* [Borrar un equipo](/v3/teams/#delete-a-team)
{% if currentVersion == "free-pro-team@latest" %}
* [Listar invitaciones pendientes al equipo](/v3/teams/members/#list-pending-team-invitations)
{% endif %}
* [Listar miembros del equipo](/v3/teams/members/#list-team-members)
* [Obtener la membresía de equipo de un usuario](/v3/teams/members/#get-team-membership-for-a-user)
* [Agregar o actualizar la membrecía de equipo de un usuario](/v3/teams/members/#add-or-update-team-membership-for-a-user)
* [Eliminar la membrecía de equipo para un usuario](/v3/teams/members/#remove-team-membership-for-a-user)
* [Listar los equipos hijos](/v3/teams/#list-child-teams)
* [Listar los equipos para el usuario autenticado](/v3/teams/#list-teams-for-the-authenticated-user)

##### Organizaciones

* [Listar organizaciones](/v3/orgs/#list-organizations)
* [Obtener una organización](/v3/orgs/#get-an-organization)
* [Actualizar una organización](/v3/orgs/#update-an-organization)
* [Listar membrecías de organización para el usuario autenticado](/v3/orgs/members/#list-organization-memberships-for-the-authenticated-user)
* [Obtener la membrecía de organización para el usuario autenticado](/v3/orgs/members/#get-an-organization-membership-for-the-authenticated-user)
* [Actualizar la membrecía de una organización para el usuario autenticado](/v3/orgs/members/#update-an-organization-membership-for-the-authenticated-user)
* [Listar las organizaciones para el usuario autenticado](/v3/orgs/#list-organizations-for-the-authenticated-user)
* [Listar las organizaciones de un usuario](/v3/orgs/#list-organizations-for-a-user)

{% if currentVersion == "free-pro-team@latest" %}
##### Autorizaciones de Credencial para las Organizaciones

* [Listar las autorizaciones del SSO de SAML para una organización](/v3/orgs/#list-saml-sso-authorizations-for-an-organization)
* [Eliminar las autorizaciones del SSO de SAML de una organización](/v3/orgs/#remove-a-saml-sso-authorization-for-an-organization)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
##### Scim de las Organizaciones

* [Listar las identidades aprovisionadas de SCIM](/v3/scim/#list-scim-provisioned-identities)
* [Aprovisionar e invitar a un usuario de SCIM](/v3/scim/#provision-and-invite-a-scim-user)
* [Obtener la información de aprovisionamiento de SCIM para un usuario](/v3/scim/#get-scim-provisioning-information-for-a-user)
* [Configurar la información de SCIM para un usuario aprovisionado](/v3/scim/#set-scim-information-for-a-provisioned-user)
* [Actualizar un atributo para un usuario de SCIM](/v3/scim/#update-an-attribute-for-a-scim-user)
* [Borrar a un usuario de SCIM de una organización](/v3/scim/#delete-a-scim-user-from-an-organization)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
##### Importaciones de Código Fuente

* [Obtener el estado de una importación](/v3/migrations/source_imports/#get-an-import-status)
* [Iniciar una importación](/v3/migrations/source_imports/#start-an-import)
* [Actualizar una importación](/v3/migrations/source_imports/#update-an-import)
* [Cancelar una importación](/v3/migrations/source_imports/#cancel-an-import)
* [Obtener los autores de una confirmación](/v3/migrations/source_imports/#get-commit-authors)
* [Mapear al autor de una confirmación](/v3/migrations/source_imports/#map-a-commit-author)
* [Obtener archivos grandes](/v3/migrations/source_imports/#get-large-files)
* [Actualizar la preferencia de LFS de Git](/v3/migrations/source_imports/#update-git-lfs-preference)
{% endif %}

##### Colaboradores de Proyecto

* [Listar colaboradores del proyecto](/v3/projects/collaborators/#list-project-collaborators)
* [Agregar a un colaborador del proyecto](/v3/projects/collaborators/#add-project-collaborator)
* [Eliminar a un colaborador del proyecto](/v3/projects/collaborators/#remove-project-collaborator)
* [Obtener permisos del proyecto para un usuario](/v3/projects/collaborators/#get-project-permission-for-a-user)

##### Proyectos

* [Listar los proyectos de la organización](/v3/projects/#list-organization-projects)
* [Crear un proyecto en la organización](/v3/projects/#create-an-organization-project)
* [Obtener un proyecto](/v3/projects/#get-a-project)
* [Actualizar un proyecto](/v3/projects/#update-a-project)
* [Borrar un proyecto](/v3/projects/#delete-a-project)
* [Listar las columnas del proyecto](/v3/projects/columns/#list-project-columns)
* [Crear una columna de proyecto](/v3/projects/columns/#create-a-project-column)
* [Obtener una columna de proyecto](/v3/projects/columns/#get-a-project-column)
* [Actualizar una column de proyecto](/v3/projects/columns/#update-a-project-column)
* [Borrar una columna de proyecto](/v3/projects/columns/#delete-a-project-column)
* [Listar las tarjetas del proyecto](/v3/projects/cards/#list-project-cards)
* [Crear una tarjeta de proyecto](/v3/projects/cards/#create-a-project-card)
* [Mover una columna de proyecto](/v3/projects/columns/#move-a-project-column)
* [Obtener una tarjeta de proyecto](/v3/projects/cards/#get-a-project-card)
* [Actualizar una tarjeta de proyecto](/v3/projects/cards/#update-a-project-card)
* [Borrar una tarjeta de proyecto](/v3/projects/cards/#delete-a-project-card)
* [Mover una tarjeta de proyecto](/v3/projects/cards/#move-a-project-card)
* [Listar los proyectos de un repositorio](/v3/projects/#list-repository-projects)
* [Crear un proyecto en un repositorio](/v3/projects/#create-a-repository-project)

##### Comentarios de Extracción

* [Listar comentarios de revisión en una solicitud de extracción](/v3/pulls/comments/#list-review-comments-on-a-pull-request)
* [Crear un comentario de revisión para una solicitud de extracción](/v3/pulls/comments/#create-a-review-comment-for-a-pull-request)
* [Listar comentarios de revisión en un repositorio](/v3/pulls/comments/#list-review-comments-in-a-repository)
* [Obtener un comentario de revisión para una solicitud de extracción](/v3/pulls/comments/#get-a-review-comment-for-a-pull-request)
* [Actualizar un comentario de revisión para una solicitud de extracción](/v3/pulls/comments/#update-a-review-comment-for-a-pull-request)
* [Borrar un comentario de revisión para una solicitud de extracción](/v3/pulls/comments/#delete-a-review-comment-for-a-pull-request)

##### Eventos de Revisión en Solciitudes de Extracción

* [Descartar una revisión para una solicitud de extracción](/v3/pulls/reviews/#dismiss-a-review-for-a-pull-request)
* [Emitir una revisión para una solicitud de extracción](/v3/pulls/reviews/#submit-a-review-for-a-pull-request)

##### Solicitudes de Revisión para Solicitudes de Extracción

* [Listar a los revisores requeridos para una solicitud de extracción](/v3/pulls/review_requests/#list-requested-reviewers-for-a-pull-request)
* [Solicitar a los revisores para una solicitud de extracción](/v3/pulls/review_requests/#request-reviewers-for-a-pull-request)
* [Eliminar a los revisores solicitados para una solicitud de extracción](/v3/pulls/review_requests/#remove-requested-reviewers-from-a-pull-request)

##### Revisiones de Solicitudes de Extracción

* [Listar revisores para una solicitud de extracción](/v3/pulls/reviews/#list-reviews-for-a-pull-request)
* [Crear revisión para una solicitud de extracción](/v3/pulls/reviews/#create-a-review-for-a-pull-request)
* [Obtener una revisión para una solicitud de extracción](/v3/pulls/reviews/#get-a-review-for-a-pull-request)
* [Actualizar una revisión para una solicitud de extracción](/v3/pulls/reviews/#update-a-review-for-a-pull-request)
* [Listar los comentarios para una revisión de una solicitud de extracción](/v3/pulls/reviews/#list-comments-for-a-pull-request-review)

##### Extracciones

* [Listar solicitudes extracción](/v3/pulls/#list-pull-requests)
* [Crear una solicitud de extracción](/v3/pulls/#create-a-pull-request)
* [Obtener una solicitud de extracción](/v3/pulls/#get-a-pull-request)
* [Actualizar una solicitud de extracción](/v3/pulls/#update-a-pull-request)
* [Listar las confirmaciones en una solicitud de extracción](/v3/pulls/#list-commits-on-a-pull-request)
* [Listar los archivos en una solicitud de extracción](/v3/pulls/#list-pull-requests-files)
* [Revisar si se ha fusionado una solicitud de extracción](/v3/pulls/#check-if-a-pull-request-has-been-merged)
* [Fusionar una solicitud de extracción (Botón de Fusionar)](/v3/pulls/#merge-a-pull-request)

##### Reacciones

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}*[Borrar una reacción](/v3/reactions/#delete-a-reaction-legacy){% else %}*[Borrar una reacción](/v3/reactions/#delete-a-reaction){% endif %}
* [Listar las reacciones a un comentario de una confirmación](/v3/reactions/#list-reactions-for-a-commit-comment)
* [Crear una reacción para el comentario de una confirmación](/v3/reactions/#create-reaction-for-a-commit-comment)
* [Listar las reacciones de un informe de problemas](/v3/reactions/#list-reactions-for-an-issue)
* [Crear una reacción para un informe de problemas](/v3/reactions/#create-reaction-for-an-issue)
* [Listar las reacciones para el comentario de un informe de problemas](/v3/reactions/#list-reactions-for-an-issue-comment)
* [Crear una reacción para el comentario de informe de problemas](/v3/reactions/#create-reaction-for-an-issue-comment)
* [Listar las reacciones para el comentario de revisión de una solicitud de extracción](/v3/reactions/#list-reactions-for-a-pull-request-review-comment)
* [Crear una reacción para un comentario de revisión de una solicitud de extracción](/v3/reactions/#create-reaction-for-a-pull-request-review-comment)
* [Listar las reacciones para un comentario de debate de equipo](/v3/reactions/#list-reactions-for-a-team-discussion-comment)
* [Crear una reacción para un comentario de debate de equipo](/v3/reactions/#create-reaction-for-a-team-discussion-comment)
* [Listar las reaciones a un debate de equipo](/v3/reactions/#list-reactions-for-a-team-discussion)
* [Crear una reacción para un debate de equipo](/v3/reactions/#create-reaction-for-a-team-discussion){% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
* [Borrar la reacción a un comentario de una confirmación](/v3/reactions/#delete-a-commit-comment-reaction)
* [Borrar la reacción a un comentario](/v3/reactions/#delete-an-issue-reaction)
* [Borrar la reacción a un comentario de una confirmación](/v3/reactions/#delete-an-issue-comment-reaction)
* [Borrar la reacción a un comentario de una solicitud de extracción](/v3/reactions/#delete-a-pull-request-comment-reaction)
* [Borrar la reacción a un debate de equipo](/v3/reactions/#delete-team-discussion-reaction)
* [Borrar la reacción a un comentario de un debate de equipo](/v3/reactions/#delete-team-discussion-comment-reaction){% endif %}

##### Repositorios

* [Listar los repositorios de una organización](/v3/repos/#list-organization-repositories)
* [Crear un repositorio para el usuario autenticado](/v3/repos/#create-a-repository-for-the-authenticated-user)
* [Obtener un repositorio](/v3/repos/#get-a-repository)
* [Actualizar un repositorio](/v3/repos/#update-a-repository)
* [Borrar un repositorio](/v3/repos/#delete-a-repository)
* [Comparar dos confirmaciones](/v3/repos/commits/#compare-two-commits)
* [Listar los colaboradores del repositorio](/v3/repos/#list-repository-contributors)
* [Listar las bifurcaciones](/v3/repos/forks/#list-forks)
* [Crear una bifuración](/v3/repos/forks/#create-a-fork)
* [Listar los lenguajes de un repositorio](/v3/repos/#list-repository-languages)
* [Listar las matrículas de un repositorio](/v3/repos/#list-repository-tags)
* [Listar los equipos de un repositorio](/v3/repos/#list-repository-teams)
* [Transferir un repositorio](/v3/repos/#transfer-a-repository)
* [Listar los repositorios públicos](/v3/repos/#list-public-repositories)
* [Listar los repositorios para el usuario autenticado](/v3/repos/#list-repositories-for-the-authenticated-user)
* [Listar los repositorios para un usuario](/v3/repos/#list-repositories-for-a-user)
* [Crear un repositorio utilizando una plantilla de repositorio](/v3/repos/#create-repository-using-a-repository-template)

##### Actividad del Repositorio

* [Listar Stargazers](/v3/activity/starring/#list-stargazers)
* [Listar observadores](/v3/activity/watching/#list-watchers)
* [Listar los repositorios que el usuario ha marcado con una estrella](/v3/activity/starring/#list-repositories-starred-by-a-user)
* [Verificar si el usuario autenticado ha marcado al repositorio con una estrella](/v3/activity/starring/#check-if-a-repository-is-starred-by-the-authenticated-user)
* [Marcar un repositorio con una estrella para el usuario autenticado](/v3/activity/starring/#star-a-repository-for-the-authenticated-user)
* [Quitar la estrella de un repositorio para el usuario autenticado](/v3/activity/starring/#unstar-a-repository-for-the-authenticated-user)
* [Listar los repositorios que el usuario está observando](/v3/activity/watching/#list-repositories-watched-by-a-user)

{% if currentVersion == "free-pro-team@latest" %}
##### Correcciones de Seguridad Automatizadas de un Repositorio

* [Habilitar las correcciones de seguridad automatizadas](/v3/repos/#enable-automated-security-fixes)
* [Inhabilitar las correcciones de seguridad automatizadas](/v3/repos/#disable-automated-security-fixes)
{% endif %}

##### Ramas de los Repositorios

* [Listar ramas](/v3/repos/branches/#list-branches)
* [Obtener una rama](/v3/repos/branches/#get-a-branch)
* [Obtener la protección de una rama](/v3/repos/branches/#get-branch-protection)
* [Actualizar la protección de una rama](/v3/repos/branches/#update-branch-protection)
* [Borrar la protección de una rama](/v3/repos/branches/#delete-branch-protection)
* [Obtener la protección administrativa de una rama](/v3/repos/branches/#get-admin-branch-protection)
* [Configurar la protección administrativa de una rama](/v3/repos/branches/#set-admin-branch-protection)
* [Borrar la protección administrativa de una rama](/v3/repos/branches/#delete-admin-branch-protection)
* [Obtener la protección de la revisión de una solicitud de extracción](/v3/repos/branches/#get-pull-request-review-protection)
* [Actualizar la protección de la revisión de una solicitud de extracción](/v3/repos/branches/#update-pull-request-review-protection)
* [Borrar la protección de la revisión de una solicitud de extracción](/v3/repos/branches/#delete-pull-request-review-protection)
* [Obtener la protección de firma de una confirmación](/v3/repos/branches/#get-commit-signature-protection)
* [Crear la protección de firma de una confirmación](/v3/repos/branches/#create-commit-signature-protection)
* [Borrar la protección de firma de una confirmación](/v3/repos/branches/#delete-commit-signature-protection)
* [Obtener la protección de las verificaciones de estado](/v3/repos/branches/#get-status-checks-protection)
* [Actualizar la protección de las verificaciones de estado](/v3/repos/branches/#update-status-check-potection)
* [Eliminar la protección de las verificaciones de estado](/v3/repos/branches/#remove-status-check-protection)
* [Obtener todos los contextos de verificaciones de estado](/v3/repos/branches/#get-all-status-check-contexts)
* [Agregar un contexto de verificación de estado](/v3/repos/branches/#add-status-check-contexts)
* [Obtener un contexto de verificación de estado](/v3/repos/branches/#set-status-check-contexts)
* [Eliminar los contextos de verificación de estado](/v3/repos/branches/#remove-status-check-contexts)
* [Obtener restricciones de acceso](/v3/repos/branches/#get-access-restrictions)
* [Borrar restricciones de acceso](/v3/repos/branches/#delete-access-restrictions)
* [Listar a los equipos con acceso a la rama protegida](/v3/repos/branches/#list-teams-with-access-to-the-protected-branch)
* [Agregar restricciones de acceso a equipos](/v3/repos/branches/#add-team-access-restrictions)
* [Obtener restricciones de acceso a equipos](/v3/repos/branches/#set-team-access-restrictions)
* [Eliminar restricciones de acceso a equipos](/v3/repos/branches/#remove-team-access-restrictions)
* [Listar las restricciones de usuario para la rama protegida](/v3/repos/branches/#list-users-with-access-to-the-protected-branch)
* [Agregar las restricciones de acceso para los usuarios](/v3/repos/branches/#add-user-access-restrictions)
* [Configurar las restricciones de acceso para los usuarios](/v3/repos/branches/#set-user-access-restrictions)
* [Eliminar las restricciones de acceso para los usuarios](/v3/repos/branches/#remove-user-access-restrictions)
* [Fusionar una rama](/v3/repos/merging/#merge-a-branch)

##### Colaboradores del Repositorio

* [Listar los colaboradores del repositorio](/v3/repos/collaborators/#list-repository-collaborators)
* [Verificar si un usuario es colaborador de un repositorio](/v3/repos/collaborators/#check-if-a-user-is-a-repository-collaborator)
* [Agregar un colaborador de repositorio](/v3/repos/collaborators/#add-a-repository-collaborator)
* [Eliminar a un colaborador del repositorio](/v3/repos/collaborators/#remove-a-repository-collaborator)
* [Obtener permisos del repositorio para un usuario](/v3/repos/collaborators/#get-repository-permissions-for-a-user)

##### Comentarios de Confirmaciones de un Repositorio

* [Listar los comentarios de confirmaciones en un repositorio](/v3/repos/comments/#list-commit-comments-for-a-repository)
* [Obtener un comentario de una confirmación](/v3/repos/comments/#get-a-commit-comment)
* [Actualizar un comentario de una confirmación](/v3/repos/comments/#update-a-commit-comment)
* [Borrar un comentario de una confirmación](/v3/repos/comments/#delete-a-commit-comment)
* [Listar los comentarios de una confirmación](/v3/repos/comments/#list-commit-comments)
* [Crear un comentario de una confirmación](/v3/repos/comments/#create-a-commit-comment)

##### Confirmaciones de Repositorio

* [Listar confirmaciones](/v3/repos/commits/#list-commits)
* [Obtener una confirmación](/v3/repos/commits/#get-a-commit)
* [Listar ramas para la confirmación principal](/v3/repos/commits/#list-branches-for-head-commit)
* [Listar solicitudes de extracción asociadas con una confirmación](/v3/repos/commits/#list-pull-requests-associated-with-commit)

##### Comunidad del Repositorio

* [Obtener el código de conducta de un repositorio](/v3/codes_of_conduct/#get-the-code-of-conduct-for-a-repository)
{% if currentVersion == "free-pro-team@latest" %}
* [Obtener las métricas de perfil de la comunidad](/v3/repos/community/#get-community-profile-metrics)
{% endif %}

##### Contenido de los Repositorios

* [Descargar un archivo de un repositorio](/v3/repos/contents/#download-a-repository-archive)
* [Obtener el contenido de un repositorio](/v3/repos/contents/#get-repository-content)
* [Crear o actualizar los contenidos de archivo](/v3/repos/contents/#create-or-update-file-contents)
* [Borrar un archivo](/v3/repos/contents/#delete-a-file)
* [Obtener el README de un repositorio](/v3/repos/contents/#get-a-repository-readme)
* [Obtener la licencia para un repositorio](/v3/licenses/#get-the-license-for-a-repository)

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
##### Envíos de Evento de un Repositorio

* [Crear un evento de envío de un repositorio](/v3/repos/#create-a-repository-dispatch-event)
{% endif %}

##### Ganchos de Repositorio

* [Listar los webhooks de un repositorio](/v3/repos/hooks/#list-repository-webhooks)
* [Crear un webhook para un repositorio](/v3/repos/hooks/#create-a-repository-webhook)
* [Obtener un webhook para un repositorio](/v3/repos/hooks/#get-a-repository-webhook)
* [Actualizar el webhook de un repositorio](/v3/repos/hooks/#update-a-repository-webhook)
* [Borrar el webhook de un repositorio](/v3/repos/hooks/#delete-a-repository-webhook)
* [Hacer ping al webhook de un repositorio](/v3/repos/hooks/#ping-a-repository-webhook)
* [Probar el webhook de carga a un repositorio](/v3/repos/hooks/#test-the-push-repository-webhook)

##### Invitaciones a un repositorio

* [Listar las invitaciones a un repositorio](/v3/repos/invitations/#list-repository-invitations)
* [Actualizar la invitación a un repositorio](/v3/repos/invitations/#update-a-repository-invitation)
* [Borrar la invitación a un repositorio](/v3/repos/invitations/#delete-a-repository-invitation)
* [Listar las invitaciones a un repositorio para el usuario autenticado](/v3/repos/invitations/#list-repository-invitations-for-the-authenticated-user)
* [Aceptar la invitación a un repositorio](/v3/repos/invitations/#accept-a-repository-invitation)
* [Rechazar la invitación a un repositorio](/v3/repos/invitations/#decline-a-repository-invitation)

##### Claves de Repositorio

* [Listar claves de despliegue](/v3/repos/keys/#list-deploy-keys)
* [Crear una clave de despliegue](/v3/repos/keys/#create-a-deploy-key)
* [Obtener una clave de despliegue](/v3/repos/keys/#get-a-deploy-key)
* [Borrar una clave de despiegue](/v3/repos/keys/#delete-a-deploy-key)

##### Páginas de Repositorio

* [Obtener un sitio de GitHub Pages](/v3/repos/pages/#get-a-github-pages-site)
* [Crear un sitio de GitHub Pages](/v3/repos/pages/#create-a-github-pages-site)
* [Actualizar la información acerca de un sitio de GitHub Pages](/v3/repos/pages/#update-information-about-a-github-pages-site)
* [Borrar un sitio de GitHub Pages](/v3/repos/pages/#delete-a-github-pages-site)
* [Listar las compilaciones de GitHub Pages](/v3/repos/pages/#list-github-pages-builds)
* [Solicitar una compilación de GitHub Pages](/v3/repos/pages/#request-a-github-pages-build)
* [Obtener una compilación de GitHub Pages](/v3/repos/pages/#get-github-pages-build)
* [Obtener la última compilación de pages](/v3/repos/pages/#get-latest-pages-build)

{% if currentVersion != "free-pro-team@latest" %}
##### Ganchos de Pre-recepción de un Repositorio

* [Listar los ganchos de pre-recepción para un repositorio](/enterprise/user/rest/reference/enterprise-admin#list-pre-receive-hooks-for-a-repository)
* [Obtener un gancho de pre-recepción de un repositorio](/enterprise/user/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-a-repository)
* [Actualizar el requerir ganchos de pre-recepción en un repositorio](/enterprise/user/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-a-repository)
* [Eliminar el requerir ganchos de pre-recepción para un repositorio](/enterprise/user/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-a-repository)
{% endif %}

##### Lanzamientos de repositorio

* [Listar los lanzamientos](/v3/repos/releases/#list-releases)
* [Crear un lanzamiento](/v3/repos/releases/#create-a-release)
* [Obtener un lanzamiento](/v3/repos/releases/#get-a-release)
* [Actualizar un lanzamiento](/v3/repos/releases/#update-a-release)
* [Borrar un lanzamiento](/v3/repos/releases/#delete-a-release)
* [Listar activos de lanzamiento](/v3/repos/releases/#list-release-assets)
* [Obtener un activo de lanzamiento](/v3/repos/releases/#get-a-release-asset)
* [Actualizar un activo de lanzamiento](/v3/repos/releases/#update-a-release-asset)
* [Borrar un activo de lanzamiento](/v3/repos/releases/#delete-a-release-asset)
* [Obtener el lanzamiento más reciente](/v3/repos/releases/#get-the-latest-release)
* [Obtener un lanzamiento por nombre de matrícula](/v3/repos/releases/#get-a-release-by-tag-name)

##### Estadísticas de Repositorio

* [Obtener la actividad de confirmaciones semanal](/v3/repos/statistics/#get-the-weekly-commit-activity)
* [Obtener la actividad de confirmaciones del año pasado](/v3/repos/statistics/#get-the-last-year-of-commit-activity)
* [Obtener la actividad de confirmaciones de todos los colaboradores](/v3/repos/statistics/#get-all-contributor-commit-activity)
* [Obtener la cuenta semanal de confirmaciones](/v3/repos/statistics/#get-the-weekly-commit-count)
* [Obtener la cuenta de confirmaciones por hora para cada día](/v3/repos/statistics/#get-the-hourly-commit-count-for-each-day)

{% if currentVersion == "free-pro-team@latest" %}
##### Alertas de Vulnerabilidad en Repositorios

* [Habilitar las alertas de vulnerabilidades](/v3/repos/#enable-vulnerability-alerts)
* [Inhabilitar las alertas de vulnerabilidades](/v3/repos/#disable-vulnerability-alerts)
{% endif %}

##### Raíz

* [Terminal raíz](/v3/#root-endpoint)
* [Emojis](/v3/emojis/#emojis)
* [Obtener un estado de límite de tasa para el usuario autenticado](/v3/rate_limit/#get-rate-limit-status-for-the-authenticated-user)

##### Buscar

* [Buscar código](/v3/search/#search-code)
* [Buscar confirmaciones](/v3/search/#search-commits)
* [Buscar etiquetas](/v3/search/#search-labels)
* [Buscar repositorios](/v3/search/#search-repositories)
* [Buscar temas](/v3/search/#search-topics)
* [Buscar usuarios](/v3/search/#search-users)

##### Estados

* [Obtener el estado combinado para una referencia específica](/v3/repos/statuses/#get-the-combined-status-for-a-specific-reference)
* [Listar los estados de confirmación para una referencia](/v3/repos/statuses/#list-commit-statuses-for-a-reference)
* [Crear un estado de confirmación](/v3/repos/statuses/#create-a-commit-status)

##### Debates de Equipo

* [Listar debates](/v3/teams/discussions/#list-discussions)
* [Crear un debate](/v3/teams/discussions/#create-a-discussion)
* [Obtener un debate](/v3/teams/discussions/#get-a-discussion)
* [Actualizar un debate](/v3/teams/discussions/#update-a-discussion)
* [Borrar un debate](/v3/teams/discussions/#delete-a-discussion)
* [Listar los comentarios del debate](/v3/teams/discussion_comments/#list-discussion-comments)
* [Crear un comentario sobre un debate](/v3/teams/discussion_comments/#create-a-discussion-comment)
* [Obtener un comentario de un debate](/v3/teams/discussion_comments/#get-a-discussion-comment)
* [Actualizar un comentario en un debate](/v3/teams/discussion_comments/#update-a-discussion-comment)
* [Borrar un comentario de un debate](/v3/teams/discussion_comments/#delete-a-discussion-comment)

##### Temas

* [Obtener todos los temas de un repositorio](/v3/repos#get-all-repository-topics)
* [Reemplazar todos los temas de un repositorio](/v3/repos/#replace-all-repository-topics)

{% if currentVersion == "free-pro-team@latest" %}
##### Tráfico

* [Obtener los clones de un repositorio](/v3/repos/traffic/#get-repository-clones)
* [Obtener las rutas de referencia superior](/v3/repos/traffic/#get-top-referral-paths)
* [Obtener las fuentes de referencia superior](/v3/repos/traffic/#get-top-referral-sources)
* [Obtener las visualizaciones de página](/v3/repos/traffic/#get-page-views)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
##### Bloquear Usuarios

* [Listar a los usuarios que ha bloqueado el usuario autenticado](/v3/users/blocking/#list-users-blocked-by-the-authenticated-user)
* [Verificar si el usuario autenticado bloqueó a un usuario](/v3/users/blocking/#check-if-a-user-is-blocked-by-the-authenticated-user)
* [Listar a los usuarios que habloqueado la organización](/v3/orgs/blocking/#list-users-blocked-by-an-organization)
* [Verificar si una organización bloqueó a un usuario](/v3/orgs/blocking/#check-if-a-user-is-blocked-by-an-organization)
* [Bloquear a un usuario de una organización](/v3/orgs/blocking/#block-a-user-from-an-organization)
* [Desbloquear a un usuario de una organización](/v3/orgs/blocking/#unblock-a-user-from-an-organization)
* [Bloquear a un usuario](/v3/users/blocking/#block-a-user)
* [Desbloquear a un usuario](/v3/users/blocking/#unblock-a-user)
{% endif %}

##### Correo Electrónico de Usuario

{% if currentVersion == "free-pro-team@latest" %}
* [Configurar la visibilidad del correo electrónico principal para el usuario autenticado](/v3/users/emails/#set-primary-email-visibility-for-the-authenticated-user)
{% endif %}
* [Listar las direcciones de correo electrónico para el usuario autenticado](/v3/users/emails/#list-email-addresses-for-the-authenticated-user)
* [Agregar la(s) dirección(es) de correo electrónico](/v3/users/emails/#add-an-email-address-for-the-authenticated-user)
* [Borrar la(s) direccion(es) de correo electrónico](/v3/users/emails/#delete-an-email-address-for-the-authenticated-user)
* [Listar las direcciones de correo electrónico del usuario autenticado](/v3/users/emails/#list-public-email-addresses-for-the-authenticated-user)

##### Seguidores del Usuario

* [Listar los seguidores de un usuario](/v3/users/followers/#list-followers-of-a-user)
* [Listar a las personas que sigue un usuario](/v3/users/followers/#list-the-people-a-user-follows)
* [Revisar si el usuario autenticado sigue a una persona](/v3/users/followers/#check-if-a-person-is-followed-by-the-authenticated-user)
* [Seguir a un usuario](/v3/users/followers/#follow-a-user)
* [Dejar de seguri a un usuario](/v3/users/followers/#unfollow-a-user)
* [Verificar si el usuario sigue a otro usuario](/v3/users/followers/#check-if-a-user-follows-another-user)

##### Utilizar Llaves Gpg

* [Listar las llaves GPG para el usuario autenticado](/v3/users/gpg_keys/#list-gpg-keys-for-the-authenticated-user)
* [Crear una llave GPG para el usuario autenticado](/v3/users/gpg_keys/#create-a-gpg-key-for-the-authenticated-user)
* [Obtener una llave GPG para el usuario autenticado](/v3/users/gpg_keys/#get-a-gpg-key-for-the-authenticated-user)
* [Borrar una llave GPG para el usuario autenticado](/v3/users/gpg_keys/#delete-a-gpg-key-for-the-authenticated-user)
* [Listar las llaves GPG de un usuario](/v3/users/gpg_keys/#list-gpg-keys-for-a-user)

##### Llaves Públicas de Usuario

* [Listar las llaves SSH para el usuario autenticado](/v3/users/keys/#list-public-ssh-keys-for-the-authenticated-user)
* [Crear una llave SSH para el usuario autenticado](/v3/users/keys/#create-a-public-ssh-key-for-the-authenticated-user)
* [Obtener una llave SSH pública para el usuario autenticado](/v3/users/keys/#get-a-public-ssh-key-for-the-authenticated-user)
* [Borrar una llave pública de SSH para el usuario autenticado](/v3/users/keys/#delete-a-public-ssh-key-for-the-authenticated-user)
* [Listar las llaves públicas de un usuario](/v3/users/keys/#list-public-keys-for-a-user)

##### Usuarios

* [Obtener al usuario autenticado](/v3/users/#get-the-authenticated-user)
* [Listar las instalaciones de apps accesibles para el token de acceso del usuario](/v3/apps/installations/#list-app-installations-accessible-to-the-user-access-token)
{% if currentVersion == "free-pro-team@latest" %}
* [Listar las suscripciones del usuario autenticado](/v3/apps/marketplace/#list-subscriptions-for-the-authenticated-user)
{% endif %}
* [Listar usuarios](/v3/users/#list-users)
* [Obtener un usuario](/v3/users/#get-a-user)

{% if currentVersion == "free-pro-team@latest" %}
##### Ejecuciones de Flujo de Trabajo

* [Listar las ejecuciones de flujode trabajo de un repositorio](/v3/actions/workflow-runs/#list-workflow-runs-for-a-repository)
* [Obtener una ejecución de flujo de trabajo](/v3/actions/workflow-runs/#get-a-workflow-run)
* [Cancelar una ejecución de flujo de trabajo](/v3/actions/workflow-runs/#cancel-a-workflow-run)
* [Descargar las bitácoras de ejecución de flujo de trabajo](/v3/actions/workflow-runs/#download-workflow-run-logs)
* [Borrar las bitácoras de ejecución de flujo de trabajo](/v3/actions/workflow-runs/#delete-workflow-run-logs)
* [Re-ejecutar un flujo de trabajo](/v3/actions/workflow-runs/#re-run-a-workflow)
* [Listar las ejecuciones de flujo de trabajo](/v3/actions/workflow-runs/#list-workflow-runs)
* [Obtener las estadísticas de uso de las ejecuciones de flujo de trabajo](/v3/actions/workflow-runs/#get-workflow-run-usage)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
##### Flujos de trabajo

* [Listar los flujos de trabajo del repositorio](/v3/actions/workflows/#list-repository-workflows)
* [Obtener un flujo de trabajo](/v3/actions/workflows/#get-a-workflow)
* [Obtener el uso de un flujo de trabajo](/v3/actions/workflows/#get-workflow-usage)
{% endif %}
