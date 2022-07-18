---
title: Identificar y autorizar usuarios para las GitHub Apps
intro: '{% data reusables.shortdesc.identifying_and_authorizing_github_apps %}'
redirect_from:
  - /early-access/integrations/user-identification-authorization
  - /apps/building-integrations/setting-up-and-registering-github-apps/identifying-users-for-github-apps
  - /apps/building-github-apps/identifying-and-authorizing-users-for-github-apps
  - /developers/apps/identifying-and-authorizing-users-for-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Identificar & autorizar usuarios
---

{% data reusables.pre-release-program.expiring-user-access-tokens %}

Cuando tu GitHub App actúe en nombre de un usuario, ésta realiza solicitudes de usuario a servidor. Estas solicitudes deben autorizarse con un token de acceso de usuario. Las solicitudes de usuario a servidor incluyen el solicitar datos para un usuario, como el determinar qué repositorios mostrar a un usuario en particular. Estas solicitudes también incluyen las acciones que activa un usuario, como ejecutar una compilación.

{% data reusables.apps.expiring_user_authorization_tokens %}

## Identificar usuarios en tu sitio

Para autorizar a los usuarios para las apps estándar que se ejecutan en el buscador, utiliza el [flujo de aplicaciones web](#web-application-flow).

Para autorizar a los usuarios para apps sin interfaz gráfica sin acceso directo al buscador, tales como las herramientas de CLI o administradores de credenciales de Git, utiliza el [flujo del dispositivo](#device-flow). El flujo de dispositivos utiliza el [Otorgamiento de Autorizción de Dispositivos](https://tools.ietf.org/html/rfc8628) de OAuth 2.0.

## Flujo de aplicaciones Web

Al utilizar el flujo de aplicaciones web, el proceso para identificar a los usuarios en tu sitio es:

1. Se redirecciona a los usuarios para solicitar su identidad de GitHub
2. GitHub redirecciona a los usuarios de vuelta a tu sitio
3. Tu GitHub App accede a la API con el token de acceso del usuario

Si seleccionas **Solicitar la autorización del usuario (OAuth) durante la instalación** cuando crees o modifiques tu app, el paso 1 se completará durante la instalación de la misma. Para obtener más información, consulta la sección "[Autorizar usuarios durante la instalación](/apps/installing-github-apps/#authorizing-users-during-installation)".

### 1. Solicita la identidad de un usuario de GitHub
Dirige al usuario a la siguiente URL en su buscador:

    GET {% data variables.product.oauth_host_code %}/login/oauth/authorize

Cuando tu GitHub App especifica un parámetro de `login`, solicita a los usuarios con una cuenta específica que pueden utilizar para registrarse y autorizar tu app.

#### Parámetros

| Nombre         | Tipo        | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `client_id`    | `secuencia` | **Requerido.** La ID de cliente para tu GitHub App. Puedes encontrarla en los [Ajustes de tu GitHub App](https://github.com/settings/apps) cuando selecciones tu app. **Nota:** La ID de app y de cliente no son las mismas y no son intercambiables.                                                                                                                                                                                       |
| `redirect_uri` | `secuencia` | La URL en tu aplicación a donde se enviará a los usuarios después de la autorización. Esto debe ser una coincidencia exacta con {% ifversion fpt or ghes or ghec %} una de las URL que proporcionaste como **URL de rellamado** {% else %} en la URL que proporcionaste dentro del campo **URL de rellamado para la autorización de usuario** {% endif %} cuando configuraste tu GitHub App y no puede contener ningún parámetro adicional. |
| `state`        | `secuencia` | Este deberá contener una secuencia aleatoria para dar protección contra los ataques de falsificación y podría contener cualquier otros datos arbitrarios.                                                                                                                                                                                                                                                                                   |
| `login`        | `secuencia` | Sugiere una cuenta específica para utilizar para registrarse y autorizar la app.                                                                                                                                                                                                                                                                                                                                                            |
| `allow_signup` | `secuencia` | Ya sea que se ofrezca no una opción para que los usuarios autenticados se registren para {% data variables.product.prodname_dotcom %} durante el flujo de OAuth. la opción predeterminada es `true`. Utiliza `false` cuando una política prohíba los registros.                                                                                                                                                                             |

{% note %}

**Nota:** No necesitas proporcionar alcances en tu solicitud de autorización. A diferencia de la OAuth trandicional, el token de autorizción se limita a los permisos asociados con tu GitHub App y a aquellos del usuario.

{% endnote %}

### 2. GitHub redirecciona a los usuarios de vuelta a tu sitio

Si el usuario acepta tu solicitud, GitHub te redirecciona de regreso a tu sitio con un `code` temporal en un parámetro de código así como con el estado que proporcionaste en el paso anterior en el parámetro `state`. Si los estados no coinciden significa que un tercero creó la solicitud y que se debe anular el proceso.

{% note %}

**Nota:** Si seleccionas **Solicitar la autorización del usuario (OAuth) durante la instalación ** cuando creas o modificas tu app, GitHub regreará un `code` temporal que necesitarás intercambiar por un token de acceso. El parámetro `state` no se regresa cuando GitHub inicia el flujo de OAuth durante la instalación de la app.

{% endnote %}

Intercambia este `code` por un token de acceso.  Cuando se habilita el vencimiento de tokens, el token de acceso vence en 8 horas y el token de actualización en 6 meses. Cada que actualizas el token, obtienes un nuevo token de actualización. Para obtener más información, consulta la sección "[Actualziar los tokens de acceso usuario-servidor](/developers/apps/refreshing-user-to-server-access-tokens)".

Los tokens de usuario con vigencia determinada son una característica opcional actualmente y están sujetos a cambios. Para decidir participar en la característica de vencimiento de tokens usuario-servidor, consulta la sección "[Activar las características opcionales para las apps](/developers/apps/activating-optional-features-for-apps)".

Haz una solicitud a la siguiente terminal para recibir un token de acceso:

    POST {% data variables.product.oauth_host_code %}/login/oauth/access_token

#### Parámetros

| Nombre          | Tipo        | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `client_id`     | `secuencia` | **Requerido.** La ID de cliente para tu GitHub App.                                                                                                                                                                                                                                                                                                                                                                                         |
| `client_secret` | `secuencia` | **Requerido.** El secreto de cliente para tu GitHub App.                                                                                                                                                                                                                                                                                                                                                                                    |
| `código`        | `secuencia` | **Requerido.** El código que recibiste como respuesta al Paso 1.                                                                                                                                                                                                                                                                                                                                                                            |
| `redirect_uri`  | `secuencia` | La URL en tu aplicación a donde se enviará a los usuarios después de la autorización. Esto debe ser una coincidencia exacta con {% ifversion fpt or ghes or ghec %} una de las URL que proporcionaste como **URL de rellamado** {% else %} en la URL que proporcionaste dentro del campo **URL de rellamado para la autorización de usuario** {% endif %} cuando configuraste tu GitHub App y no puede contener ningún parámetro adicional. |
| `state`         | `secuencia` | La secuencia aleatoria indescifrable que proporcionaste en el Paso 1.                                                                                                                                                                                                                                                                                                                                                                       |

#### Respuesta

Predeterminadametne, la respuesta lleva el siguiente formato. Los parámetros de respuesta `expires_in`, `refresh_token`,  y `refresh_token_expires_in` solo se devuelven cuando habilitas la vigencia determinada para los tokens de acceso de usuario a servidor.

```json
{
  "access_token": "ghu_16C7e42F292c6912E7710c838347Ae178B4a",
  "expires_in": 28800,
  "refresh_token": "ghr_1B4a2e77838347a7E420ce178F2E7c6912E169246c34E1ccbF66C46812d16D5B1A9Dc86A1498",
  "refresh_token_expires_in": 15811200,
  "scope": "",
  "token_type": "bearer"
}
```

### 3. Tu GitHub App accede a la API con el token de acceso del usuario

El token de acceso del usuario permite que la GitHub App haga solicitudes a la API a nombre del usuario.

    Authorization: token OAUTH-TOKEN
    GET {% data variables.product.api_url_code %}/user

Por ejemplo, en curl, puedes configurar el encabezado de autorización de la siguiente manera:

```shell
curl -H "Authorization: token OAUTH-TOKEN" {% data variables.product.api_url_pre %}/user
```

## Flujo de dispositivos

{% note %}

**Nota:** El flujo de dispositivos se encuentra en un beta público y está sujeto a cambios.

{% endnote %}

Este flujo de dispositivos te permite autorizar usuarios para una app sin encabezado, tal como una herramienta de CLI o un administrador de credenciales de Git.

{% ifversion device-flow-is-opt-in %}Antes de que puedas utilizar el flujo de dispositivos para identificar y autorizar usuarios, primero debes habilitarlo en los ajustes de tu app. Para obtener más información sobre cómo habilitar el flujo de dispositivos, consulta la sección "[Modificar una GitHub App](/developers/apps/managing-github-apps/modifying-a-github-app)". {% endif %}Para obtener más información sobre cómo autorizar usuarios utilizando el flujo de dispositivos, consulta la sección "[Autorizar las Apps de OAuth](/developers/apps/authorizing-oauth-apps#device-flow)".

## Revisar a qué recursos de instalación puede acceder un usuario

Ya que tengas un token de OAuth para un usuario, puedes revisar a qué instalaciones puede acceder.

    Authorization: token OAUTH-TOKEN
    GET /user/installations

También puedes verificar qué repositorios se encuentran accesibles para un usuario para una instalación.

    Authorization: token OAUTH-TOKEN
    GET /user/installations/:installation_id/repositories

Puedes encontrar más detalles en: [Listar instalaciones de app accesibles para el token de acceso del usuario](/rest/apps#list-app-installations-accessible-to-the-user-access-token) y [Listar repositorios accesibles para el token de acceso del usuario](/rest/apps#list-repositories-accessible-to-the-user-access-token).

## Gestionar una autorización revocada a una GitHub App

Si un usuario revoca su autorización de una GitHub App, dicha app recibirá el webhook [`github_app_authorization`](/webhooks/event-payloads/#github_app_authorization) predeterminadamente. Las GitHub Apps no pueden desuscribirse de este evento. {% data reusables.webhooks.authorization_event %}

## Permisos a nivel de usuario

Puedes agregar permisos a nivel de usuario a tu GitHub App para acceder a los recursos del usuario, tales como correos electrónicos del usuario, los cuales otorgan los usuarios independientes como parte del [flujo de autorización del usuario](#identifying-users-on-your-site). Los permisos a nivel de usuario difieren de los [permisos a nivel de organización y de repositorio](/rest/overview/permissions-required-for-github-apps), los cuales se otorgan en el momento de la instalación en una cuenta personal o de organización.

Puedes seleccionar los permisos a nivel de usuario desde dentro de la configuración de tu GitHub App en la sección de **Permisos de usuario** de la página de **Permisos & webhooks**. Para obtener más información sobre seleccionar permisos, consulta la sección [Editar los permisos de una GitHub App](/apps/managing-github-apps/editing-a-github-app-s-permissions/)".

Cuando un usuario instala tu app en su cuenta, el aviso de instalación listará los permisos a nivel de usuario que tu app está solicitando y explicará que la app puede pedir estos permisos a los usuarios independientes.

Ya que los permisos a nivel de usuario se otorgan individualmente, puedes agregarlos a tu app existente sin solicitar que los usuarios los mejoren. Sin embargo, necesitarás enviar usuarios existentes a través del flujo de autorización de usuarios para autorizar los permisos nuevos y obtener un token nuevo de usuario a servidor para estas solicitudes.

## Solicitudes de usuario a servidor

Mientras que la mayoría de tu interacción con la API deberá darse utilizando tus tokens de acceso a la instalación de servidor a servidor, ciertas terminales te permiten llevar a cabo acciones a través de la API utilizando un token de acceso. Tu app puede hacer las siguientes solicitudes utilizando terminales de [GraphQL](/graphql) o de [REST](/rest).

### Terminales compatibles

{% ifversion fpt or ghec %}
#### Ejecutores de Acciones

* [Listar aplicaciones de ejecutores para un repositorio](/rest/actions#list-runner-applications-for-a-repository)
* [Listar ejecutores auto-hospedados para un repositorio](/rest/actions#list-self-hosted-runners-for-a-repository)
* [Obtener un ejecutor auto-hospedado para un repositorio](/rest/actions#get-a-self-hosted-runner-for-a-repository)
* [Borrar un ejecutor auto-hospedado de un repositorio](/rest/actions#delete-a-self-hosted-runner-from-a-repository)
* [Crear un token de registro para un repositorio](/rest/actions#create-a-registration-token-for-a-repository)
* [Crear un token de eliminación para un repositorio](/rest/actions#create-a-remove-token-for-a-repository)
* [Listar aplicaciones de ejecutores para una organización](/rest/actions#list-runner-applications-for-an-organization)
* [Listar ejecutores auto-hospedados para una organización](/rest/actions#list-self-hosted-runners-for-an-organization)
* [Obtener ejecutores auto-hospedados para una organización](/rest/actions#get-a-self-hosted-runner-for-an-organization)
* [Borrar un ejecutor auto-hospedado de una organización](/rest/actions#delete-a-self-hosted-runner-from-an-organization)
* [Crear un token de registro para una organización](/rest/actions#create-a-registration-token-for-an-organization)
* [Crear un token de eliminación para una organización](/rest/actions#create-a-remove-token-for-an-organization)

#### Secretos de las Acciones

* [Obtener la llave pública de un repositorio](/rest/actions#get-a-repository-public-key)
* [Listar los secretos del repositorio](/rest/actions#list-repository-secrets)
* [Obtener el secreto de un repositorio](/rest/actions#get-a-repository-secret)
* [Crear o actualizar el secreto de un repositorio](/rest/actions#create-or-update-a-repository-secret)
* [Borrar el secreto de un repositorio](/rest/actions#delete-a-repository-secret)
* [Obtener la llave pública de una organización](/rest/actions#get-an-organization-public-key)
* [Listar los secretos de la organización](/rest/actions#list-organization-secrets)
* [Obtener el secreto de una organización](/rest/actions#get-an-organization-secret)
* [Crear o actualizar el secreto de una organización](/rest/actions#create-or-update-an-organization-secret)
* [Listar los repositorios seleccionados para el secreto de una organización](/rest/actions#list-selected-repositories-for-an-organization-secret)
* [Configurar los repositorios seleccionados para el secreto de una organización](/rest/actions#set-selected-repositories-for-an-organization-secret)
* [Agregar el repositorio seleccionado al secreto de una organización](/rest/actions#add-selected-repository-to-an-organization-secret)
* [Eliminar el repositorio seleccionado del secreto de una organización](/rest/actions#remove-selected-repository-from-an-organization-secret)
* [Borrar el secreto de una organización](/rest/actions#delete-an-organization-secret)
{% endif %}

{% ifversion fpt or ghec %}
#### Artefactos

* [Listar artefactos para un repositorio](/rest/actions#list-artifacts-for-a-repository)
* [Listar artefactos de ejecución de flujo de trabajo](/rest/actions#list-workflow-run-artifacts)
* [Obtener un artefacto](/rest/actions#get-an-artifact)
* [Borrar un artefacto](/rest/actions#delete-an-artifact)
* [Descargar un artefacto](/rest/actions#download-an-artifact)
{% endif %}

#### Ejecuciones de Verificación

* [Crear una ejecución de verificación](/rest/checks#create-a-check-run)
* [Obtener una ejecución de verificación](/rest/checks#get-a-check-run)
* [Actualizar una ejecución de verificación](/rest/checks#update-a-check-run)
* [Listar las anotaciones de una ejecución de verificación](/rest/checks#list-check-run-annotations)
* [Listar las ejecuciones de verificación en un conjunto de verificaciones](/rest/checks#list-check-runs-in-a-check-suite)
* [Listar las ejecuciones de verificación para una referencia de Git](/rest/checks#list-check-runs-for-a-git-reference)

#### Conjuntos de Verificaciones

* [Crear un conjunto de verificaciones](/rest/checks#create-a-check-suite)
* [Obtener un conjunto de verificaciones](/rest/checks#get-a-check-suite)
* [Solicitar un conjunto de verificaciones](/rest/checks#rerequest-a-check-suite)
* [Actualizar las preferencias del repositorio para los conjuntos de verificaciones](/rest/checks#update-repository-preferences-for-check-suites)
* [Listar conjuntos de verificaciones para una referencia de Git](/rest/checks#list-check-suites-for-a-git-reference)

#### Códigos de Conducta

* [Obtener todos los códigos de conducta](/rest/codes-of-conduct#get-all-codes-of-conduct)
* [Obtener un código de conducta específico](/rest/codes-of-conduct#get-a-code-of-conduct)

#### Estados de Despliegue

* [Listar los estados de despliegue](/rest/deployments#list-deployment-statuses)
* [Crear los estados de despliegue](/rest/deployments#create-a-deployment-status)
* [Obtener un estado de despliegue](/rest/deployments#get-a-deployment-status)

#### Implementaciones

* [Listar los despliegues](/rest/deployments#list-deployments)
* [Crear un despliegue](/rest/deployments#create-a-deployment)
* [Obtén un despliegue](/rest/deployments#get-a-deployment)
* [Borra un despliegue](/rest/deployments#delete-a-deployment)

#### Eventos

* [Listar eventos públicos para una red de repositorios](/rest/activity#list-public-events-for-a-network-of-repositories)
* [Listar eventos de organizaciones públicas](/rest/activity#list-public-organization-events)

#### Fuentes

* [Obtener fuentes](/rest/activity#get-feeds)

#### Blobs de Git

* [Crear un blob](/rest/git#create-a-blob)
* [Obtener un blob](/rest/git#get-a-blob)

#### Confirmaciones de Git

* [Crear una confirmación](/rest/git#create-a-commit)
* [Obtener una confirmación](/rest/git#get-a-commit)

#### Referencias de Git

* [Crear una referencia](/rest/git#create-a-reference)
* [Obtener una referencia](/rest/git#get-a-reference)
* [Lista las referencias coincidentes](/rest/git#list-matching-references)
* [Actualizar una referencia](/rest/git#update-a-reference)
* [Borrar una referencia](/rest/git#delete-a-reference)

#### Matrículas de Git

* [Crear un objeto de matrícula](/rest/git#create-a-tag-object)
* [Obtener una matrícula](/rest/git#get-a-tag)

#### Árboles de Git

* [Crear un árbol](/rest/git#create-a-tree)
* [Obtener un árbol](/rest/git#get-a-tree)

#### Plantillas de Gitignore

* [Obtener todas las plantillas de gitignore](/rest/gitignore#get-all-gitignore-templates)
* [Obtener una plantilla específica de gitignore](/rest/gitignore#get-a-gitignore-template)

#### Instalaciones

* [Listar repositorios accesibles para el token de acceso del usuario](/rest/apps#list-repositories-accessible-to-the-user-access-token)

{% ifversion fpt or ghec %}
#### Límites de interacción

* [Obtener restricciones de interacción para una organización](/rest/interactions#get-interaction-restrictions-for-an-organization)
* [Configurar restricciones de interacción para una organización](/rest/interactions#set-interaction-restrictions-for-an-organization)
* [Eliminar restricciones de interacción para una organización](/rest/interactions#remove-interaction-restrictions-for-an-organization)
* [Obtener restricciones de interacción para un repositorio](/rest/interactions#get-interaction-restrictions-for-a-repository)
* [Configurar restricciones de interacción para un repositorio](/rest/interactions#set-interaction-restrictions-for-a-repository)
* [Eliminar restricciones de interacción para un repositorio](/rest/interactions#remove-interaction-restrictions-for-a-repository)
{% endif %}

#### Asignados de Informes de Problemas

* [Agregar asignados a un informe de problemas](/rest/issues#add-assignees-to-an-issue)
* [Eliminar asignados de un informe de problemas](/rest/issues#remove-assignees-from-an-issue)

#### Comentarios de Informes de Problemas

* [Listar comentarios del informe de problemas](/rest/issues#list-issue-comments)
* [Crear un comentario del informe de problemas](/rest/issues#create-an-issue-comment)
* [Listar cometnarios del informe de problemas para un repositorio](/rest/issues#list-issue-comments-for-a-repository)
* [Obtener un comentario de un informe de problemas](/rest/issues#get-an-issue-comment)
* [Actualizar un comentario de un informe de problemas](/rest/issues#update-an-issue-comment)
* [Borrar un comentario de un informe de problemas](/rest/issues#delete-an-issue-comment)

#### Eventos de Informe de Problemas

* [Listar eventos del informe de problemas](/rest/issues#list-issue-events)

#### Línea de tiempo del Informe de Problemas

* [Listar eventos de la línea de tiempo para un informe de problemas](/rest/issues#list-timeline-events-for-an-issue)

#### Problemas

* [Listar informes de problemas asignados al usuario autenticado](/rest/issues#list-issues-assigned-to-the-authenticated-user)
* [Listar asignados](/rest/issues#list-assignees)
* [Revisar si se puede asignar un usuario](/rest/issues#check-if-a-user-can-be-assigned)
* [Listar informes de problemas del repositorio](/rest/issues#list-repository-issues)
* [Crear un informe de problemas](/rest/issues#create-an-issue)
* [Obtener un informe de problemas](/rest/issues#get-an-issue)
* [Actualizar un informe de problemas](/rest/issues#update-an-issue)
* [Bloquear un informe de problemas](/rest/issues#lock-an-issue)
* [Desbloquear un informe de problemas](/rest/issues#unlock-an-issue)

{% ifversion fpt or ghec %}
#### Jobs

* [Obener un job para una ejecución de flujo de trabajo](/rest/actions#get-a-job-for-a-workflow-run)
* [Descargar bitácoras del job para una ejecución de flujode trabajo](/rest/actions#download-job-logs-for-a-workflow-run)
* [Listar jobs para una ejecución de flujo de trabajo](/rest/actions#list-jobs-for-a-workflow-run)
{% endif %}

#### Etiquetas

* [Listar las etiquetas para un informe de problemas](/rest/issues#list-labels-for-an-issue)
* [Agregar etiquetas a un informe de problemas](/rest/issues#add-labels-to-an-issue)
* [Configurar eitquetas para un informe de problemas](/rest/issues#set-labels-for-an-issue)
* [Eliminar todas las etiquetas de un informe de problemas](/rest/issues#remove-all-labels-from-an-issue)
* [Eliminar una etiqueta de un informe de problemas](/rest/issues#remove-a-label-from-an-issue)
* [Listar etiquetas para un repositorio](/rest/issues#list-labels-for-a-repository)
* [Crear una etiqueta](/rest/issues#create-a-label)
* [Obtener una etiqueta](/rest/issues#get-a-label)
* [Actualizar una etiqueta](/rest/issues#update-a-label)
* [Borrar una etiqueta](/rest/issues#delete-a-label)
* [Obtener etiquetas para cada informe de problemas en un hito](/rest/issues#list-labels-for-issues-in-a-milestone)

#### Licencias

* [Obtener todas las licencias que se utilizan habitualmente](/rest/licenses#get-all-commonly-used-licenses)
* [Obtener una licencia](/rest/licenses#get-a-license)

#### Markdown

* [Generar un documento de Markdown](/rest/markdown#render-a-markdown-document)
* [Generar un documento de markdwon en modo raw](/rest/markdown#render-a-markdown-document-in-raw-mode)

#### Meta

* [Meta](/rest/meta#meta)

#### Hitos

* [Listar hitos](/rest/issues#list-milestones)
* [Crear un hito](/rest/issues#create-a-milestone)
* [Obtener un hito](/rest/issues#get-a-milestone)
* [Actualizar un hito](/rest/issues#update-a-milestone)
* [Borrar un hito](/rest/issues#delete-a-milestone)

#### Ganchos de organización

* [Listar los webhooks de la organización](/rest/orgs#webhooks/#list-organization-webhooks)
* [Crear un webhook para una organización](/rest/orgs#webhooks/#create-an-organization-webhook)
* [Obtener un webhook de una organización](/rest/orgs#webhooks/#get-an-organization-webhook)
* [Actualizar el webhook de una organización](/rest/orgs#webhooks/#update-an-organization-webhook)
* [Borrar el webhook de una organización](/rest/orgs#webhooks/#delete-an-organization-webhook)
* [Hacer ping al webhook de una organización](/rest/orgs#webhooks/#ping-an-organization-webhook)

{% ifversion fpt or ghec %}
#### Invitaciones a las Organizaciones

* [Listar las invitaciones pendientes a una organización](/rest/orgs#list-pending-organization-invitations)
* [Crear una invitación a una organización](/rest/orgs#create-an-organization-invitation)
* [Listar los equipos de invitación a una organización](/rest/orgs#list-organization-invitation-teams)
{% endif %}

#### Miembros de la Organización

* [Listar a los miembros de la organización](/rest/orgs#list-organization-members)
* [Verificar la membrecía de organización de un usuario](/rest/orgs#check-organization-membership-for-a-user)
* [Eliminar a un miembro de una organización](/rest/orgs#remove-an-organization-member)
* [Obtener la membrecía de organización para un usuario](/rest/orgs#get-organization-membership-for-a-user)
* [Configurar una mebrecía de organización para un usuario](/rest/orgs#set-organization-membership-for-a-user)
* [Eliminar la membrecía de organización de un usuario](/rest/orgs#remove-organization-membership-for-a-user)
* [Listar los miembros de una organización pública](/rest/orgs#list-public-organization-members)
* [Verificar la membrecía de una organización pública de un usuario](/rest/orgs#check-public-organization-membership-for-a-user)
* [Configurar la membrecía de una organización pública para el usuario autenticado](/rest/orgs#set-public-organization-membership-for-the-authenticated-user)
* [Eliminar la membrecía de una organizción pública del usuario autenticado](/rest/orgs#remove-public-organization-membership-for-the-authenticated-user)

#### Colaboradores Externos de una Organización

* [Listar los colaboradores externos de una organización](/rest/orgs#list-outside-collaborators-for-an-organization)
* [Convertir a un miembro de la organización en colaborador externo](/rest/orgs#convert-an-organization-member-to-outside-collaborator)
* [Eliminar a un colaborador externo de la organización](/rest/orgs#remove-outside-collaborator-from-an-organization)

{% ifversion ghes %}
#### Ganchos de Pre-recepción de la Organización

* [Listar los ganchos de pre-recepción de una organización](/enterprise/user/rest/reference/enterprise-admin#list-pre-receive-hooks-for-an-organization)
* [Obtener los ganchos de pre-recepción de una organización](/enterprise/user/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-an-organization)
* [Actualizar el requerir los ganchos de pre-recepción para una organización](/enterprise/user/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-an-organization)
* [Eliminar el requerir los ganchos de pre-recepción para una organización](/enterprise/user/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-an-organization)
{% endif %}

#### Poyectos de Equipo de una Organización

* [Listar los proyectos de equipo](/rest/teams#list-team-projects)
* [Verificar los permisos del equipo para un proyecto](/rest/teams#check-team-permissions-for-a-project)
* [Agregar o actualizar los permisos de un proyecto de equipo](/rest/teams#add-or-update-team-project-permissions)
* [Eliminar a un proyecto de un equipo](/rest/teams#remove-a-project-from-a-team)

#### Repositorios de Equipo de la Organización

* [Listar los repositorios de equipo](/rest/teams#list-team-repositories)
* [Verificar los permisos de un equipo para un repositorio](/rest/teams#check-team-permissions-for-a-repository)
* [Agregar o actualizar los permisos de un repositorio de equipo](/rest/teams#add-or-update-team-repository-permissions)
* [Eliminar a un repositorio de un equipo](/rest/teams#remove-a-repository-from-a-team)

{% ifversion fpt or ghec %}
#### Sincronización de Equipos de la Organización

* [Lista de grupos de IdP para un equipo](/rest/teams#list-idp-groups-for-a-team)
* [Crear o actualizar conexiones de grupo de IdP](/rest/teams#create-or-update-idp-group-connections)
* [Listar grupos de IdP para una organización](/rest/teams#list-idp-groups-for-an-organization)
{% endif %}

#### Equipos de la Organización

* [Listar equipos](/rest/teams#list-teams)
* [Crear un equipo](/rest/teams#create-a-team)
* [Obtener un equipo por su nombre](/rest/teams#get-a-team-by-name)
* [Actualizar un equipo](/rest/teams#update-a-team)
* [Borrar un equipo](/rest/teams#delete-a-team)
{% ifversion fpt or ghec %}
* [Listar invitaciones pendientes al equipo](/rest/teams#list-pending-team-invitations)
{% endif %}
* [Listar miembros del equipo](/rest/teams#list-team-members)
* [Obtener la membresía de equipo de un usuario](/rest/teams#get-team-membership-for-a-user)
* [Agregar o actualizar la membrecía de equipo de un usuario](/rest/teams#add-or-update-team-membership-for-a-user)
* [Eliminar la membrecía de equipo para un usuario](/rest/teams#remove-team-membership-for-a-user)
* [Listar los equipos hijos](/rest/teams#list-child-teams)
* [Listar los equipos para el usuario autenticado](/rest/teams#list-teams-for-the-authenticated-user)

#### Organizaciones

* [Listar organizaciones](/rest/orgs#list-organizations)
* [Obtener una organización](/rest/orgs#get-an-organization)
* [Actualizar una organización](/rest/orgs#update-an-organization)
* [Listar membrecías de organización para el usuario autenticado](/rest/orgs#list-organization-memberships-for-the-authenticated-user)
* [Obtener la membrecía de organización para el usuario autenticado](/rest/orgs#get-an-organization-membership-for-the-authenticated-user)
* [Actualizar la membrecía de una organización para el usuario autenticado](/rest/orgs#update-an-organization-membership-for-the-authenticated-user)
* [Listar las organizaciones para el usuario autenticado](/rest/orgs#list-organizations-for-the-authenticated-user)
* [Listar las organizaciones de un usuario](/rest/orgs#list-organizations-for-a-user)

{% ifversion fpt or ghec %}
#### Autorizaciones de Credencial para las Organizaciones

* [Listar las autorizaciones del SSO de SAML para una organización](/rest/orgs#list-saml-sso-authorizations-for-an-organization)
* [Eliminar las autorizaciones del SSO de SAML de una organización](/rest/orgs#remove-a-saml-sso-authorization-for-an-organization)
{% endif %}

{% ifversion fpt or ghec %}
#### Scim de las Organizaciones

* [Listar las identidades aprovisionadas de SCIM](/rest/scim#list-scim-provisioned-identities)
* [Aprovisionar e invitar a un usuario de SCIM](/rest/scim#provision-and-invite-a-scim-user)
* [Obtener la información de aprovisionamiento de SCIM para un usuario](/rest/scim#get-scim-provisioning-information-for-a-user)
* [Configurar la información de SCIM para un usuario aprovisionado](/rest/scim#set-scim-information-for-a-provisioned-user)
* [Actualizar un atributo para un usuario de SCIM](/rest/scim#update-an-attribute-for-a-scim-user)
* [Borrar a un usuario de SCIM de una organización](/rest/scim#delete-a-scim-user-from-an-organization)
{% endif %}

{% ifversion fpt or ghec %}
#### Importaciones de Código Fuente

* [Obtener el estado de una importación](/rest/migrations#get-an-import-status)
* [Iniciar una importación](/rest/migrations#start-an-import)
* [Actualizar una importación](/rest/migrations#update-an-import)
* [Cancelar una importación](/rest/migrations#cancel-an-import)
* [Obtener los autores de una confirmación](/rest/migrations#get-commit-authors)
* [Mapear al autor de una confirmación](/rest/migrations#map-a-commit-author)
* [Obtener archivos grandes](/rest/migrations#get-large-files)
* [Actualizar la preferencia de LFS de Git](/rest/migrations#update-git-lfs-preference)
{% endif %}

#### Colaboradores de Proyecto

* [Listar colaboradores del proyecto](/rest/projects#list-project-collaborators)
* [Agregar a un colaborador del proyecto](/rest/projects#add-project-collaborator)
* [Eliminar a un colaborador del proyecto](/rest/projects#remove-project-collaborator)
* [Obtener permisos del proyecto para un usuario](/rest/projects#get-project-permission-for-a-user)

#### Proyectos

* [Listar los proyectos de la organización](/rest/projects#list-organization-projects)
* [Crear un proyecto en la organización](/rest/projects#create-an-organization-project)
* [Obtener un proyecto](/rest/projects#get-a-project)
* [Actualizar un proyecto](/rest/projects#update-a-project)
* [Borrar un proyecto](/rest/projects#delete-a-project)
* [Listar las columnas del proyecto](/rest/projects#list-project-columns)
* [Crear una columna de proyecto](/rest/projects#create-a-project-column)
* [Obtener una columna de proyecto](/rest/projects#get-a-project-column)
* [Actualizar una column de proyecto](/rest/projects#update-a-project-column)
* [Borrar una columna de proyecto](/rest/projects#delete-a-project-column)
* [Listar las tarjetas del proyecto](/rest/projects#list-project-cards)
* [Crear una tarjeta de proyecto](/rest/projects#create-a-project-card)
* [Mover una columna de proyecto](/rest/projects#move-a-project-column)
* [Obtener una tarjeta de proyecto](/rest/projects#get-a-project-card)
* [Actualizar una tarjeta de proyecto](/rest/projects#update-a-project-card)
* [Borrar una tarjeta de proyecto](/rest/projects#delete-a-project-card)
* [Mover una tarjeta de proyecto](/rest/projects#move-a-project-card)
* [Listar los proyectos de un repositorio](/rest/projects#list-repository-projects)
* [Crear un proyecto en un repositorio](/rest/projects#create-a-repository-project)

#### Comentarios de Extracción

* [Listar comentarios de revisión en una solicitud de extracción](/rest/pulls#list-review-comments-on-a-pull-request)
* [Crear un comentario de revisión para una solicitud de extracción](/rest/pulls#create-a-review-comment-for-a-pull-request)
* [Listar comentarios de revisión en un repositorio](/rest/pulls#list-review-comments-in-a-repository)
* [Obtener un comentario de revisión para una solicitud de extracción](/rest/pulls#get-a-review-comment-for-a-pull-request)
* [Actualizar un comentario de revisión para una solicitud de extracción](/rest/pulls#update-a-review-comment-for-a-pull-request)
* [Borrar un comentario de revisión para una solicitud de extracción](/rest/pulls#delete-a-review-comment-for-a-pull-request)

#### Eventos de Revisión en Solciitudes de Extracción

* [Descartar una revisión para una solicitud de extracción](/rest/pulls#dismiss-a-review-for-a-pull-request)
* [Emitir una revisión para una solicitud de extracción](/rest/pulls#submit-a-review-for-a-pull-request)

#### Solicitudes de Revisión para Solicitudes de Extracción

* [Listar a los revisores requeridos para una solicitud de extracción](/rest/pulls#list-requested-reviewers-for-a-pull-request)
* [Solicitar a los revisores para una solicitud de extracción](/rest/pulls#request-reviewers-for-a-pull-request)
* [Eliminar a los revisores solicitados para una solicitud de extracción](/rest/pulls#remove-requested-reviewers-from-a-pull-request)

#### Revisiones de Solicitudes de Extracción

* [Listar revisores para una solicitud de extracción](/rest/pulls#list-reviews-for-a-pull-request)
* [Crear revisión para una solicitud de extracción](/rest/pulls#create-a-review-for-a-pull-request)
* [Obtener una revisión para una solicitud de extracción](/rest/pulls#get-a-review-for-a-pull-request)
* [Actualizar una revisión para una solicitud de extracción](/rest/pulls#update-a-review-for-a-pull-request)
* [Listar los comentarios para una revisión de una solicitud de extracción](/rest/pulls#list-comments-for-a-pull-request-review)

#### Extracciones

* [Listar solicitudes extracción](/rest/pulls#list-pull-requests)
* [Crear una solicitud de extracción](/rest/pulls#create-a-pull-request)
* [Obtener una solicitud de extracción](/rest/pulls#get-a-pull-request)
* [Actualizar una solicitud de extracción](/rest/pulls#update-a-pull-request)
* [Listar las confirmaciones en una solicitud de extracción](/rest/pulls#list-commits-on-a-pull-request)
* [Listar los archivos en una solicitud de extracción](/rest/pulls#list-pull-requests-files)
* [Revisar si se ha fusionado una solicitud de extracción](/rest/pulls#check-if-a-pull-request-has-been-merged)
* [Fusionar una solicitud de extracción (Botón de Fusionar)](/rest/pulls#merge-a-pull-request)

#### Reacciones

* [Borra una reacción](/rest/reactions)
* [Listar las reacciones a un comentario de una confirmación](/rest/reactions#list-reactions-for-a-commit-comment)
* [Crear una reacción para el comentario de una confirmación](/rest/reactions#create-reaction-for-a-commit-comment)
* [Listar las reacciones de un informe de problemas](/rest/reactions#list-reactions-for-an-issue)
* [Crear una reacción para un informe de problemas](/rest/reactions#create-reaction-for-an-issue)
* [Listar las reacciones para el comentario de un informe de problemas](/rest/reactions#list-reactions-for-an-issue-comment)
* [Crear una reacción para el comentario de informe de problemas](/rest/reactions#create-reaction-for-an-issue-comment)
* [Listar las reacciones para el comentario de revisión de una solicitud de extracción](/rest/reactions#list-reactions-for-a-pull-request-review-comment)
* [Crear una reacción para un comentario de revisión de una solicitud de extracción](/rest/reactions#create-reaction-for-a-pull-request-review-comment)
* [Listar las reacciones para un comentario de debate de equipo](/rest/reactions#list-reactions-for-a-team-discussion-comment)
* [Crear una reacción para un comentario de debate de equipo](/rest/reactions#create-reaction-for-a-team-discussion-comment)
* [Listar las reaciones a un debate de equipo](/rest/reactions#list-reactions-for-a-team-discussion)
* [Crear una reacción para un debate de equipo](/rest/reactions#create-reaction-for-a-team-discussion)
* [Borrar la reacción a un comentario de una confirmación](/rest/reactions#delete-a-commit-comment-reaction)
* [Borrar la reacción a un comentario](/rest/reactions#delete-an-issue-reaction)
* [Borrar la reacción a un comentario de una confirmación](/rest/reactions#delete-an-issue-comment-reaction)
* [Borrar la reacción a un comentario de una solicitud de extracción](/rest/reactions#delete-a-pull-request-comment-reaction)
* [Borrar la reacción a un debate de equipo](/rest/reactions#delete-team-discussion-reaction)
* [Borrar una reacción a un comentario en un debate de equipo](/rest/reactions#delete-team-discussion-comment-reaction)

#### Repositorios

* [Listar los repositorios de una organización](/rest/repos#list-organization-repositories)
* [Crear un repositorio para el usuario autenticado](/rest/repos#create-a-repository-for-the-authenticated-user)
* [Obtener un repositorio](/rest/repos#get-a-repository)
* [Actualizar un repositorio](/rest/repos#update-a-repository)
* [Borrar un repositorio](/rest/repos#delete-a-repository)
* [Comparar dos confirmaciones](/rest/commits#compare-two-commits)
* [Listar los colaboradores del repositorio](/rest/repos#list-repository-contributors)
* [Listar las bifurcaciones](/rest/repos#list-forks)
* [Crear una bifuración](/rest/repos#create-a-fork)
* [Listar los lenguajes de un repositorio](/rest/repos#list-repository-languages)
* [Listar las matrículas de un repositorio](/rest/repos#list-repository-tags)
* [Listar los equipos de un repositorio](/rest/repos#list-repository-teams)
* [Transferir un repositorio](/rest/repos#transfer-a-repository)
* [Listar los repositorios públicos](/rest/repos#list-public-repositories)
* [Listar los repositorios para el usuario autenticado](/rest/repos#list-repositories-for-the-authenticated-user)
* [Listar los repositorios para un usuario](/rest/repos#list-repositories-for-a-user)
* [Crear un repositorio utilizando una plantilla de repositorio](/rest/repos#create-repository-using-a-repository-template)

#### Actividad del Repositorio

* [Listar Stargazers](/rest/activity#list-stargazers)
* [Listar observadores](/rest/activity#list-watchers)
* [Listar los repositorios que el usuario ha marcado con una estrella](/rest/activity#list-repositories-starred-by-a-user)
* [Verificar si el usuario autenticado ha marcado al repositorio con una estrella](/rest/activity#check-if-a-repository-is-starred-by-the-authenticated-user)
* [Marcar un repositorio con una estrella para el usuario autenticado](/rest/activity#star-a-repository-for-the-authenticated-user)
* [Quitar la estrella de un repositorio para el usuario autenticado](/rest/activity#unstar-a-repository-for-the-authenticated-user)
* [Listar los repositorios que el usuario está observando](/rest/activity#list-repositories-watched-by-a-user)

{% ifversion fpt or ghec %}
#### Correcciones de Seguridad Automatizadas de un Repositorio

* [Habilitar las correcciones de seguridad automatizadas](/rest/repos#enable-automated-security-fixes)
* [Inhabilitar las correcciones de seguridad automatizadas](/rest/repos#disable-automated-security-fixes)
{% endif %}

#### Ramas de los Repositorios

* [Listar ramas](/rest/branches#list-branches)
* [Obtener una rama](/rest/branches#get-a-branch)
* [Obtener la protección de una rama](/rest/branches#get-branch-protection)
* [Actualizar la protección de una rama](/rest/branches#update-branch-protection)
* [Borrar la protección de una rama](/rest/branches#delete-branch-protection)
* [Obtener la protección administrativa de una rama](/rest/branches#get-admin-branch-protection)
* [Configurar la protección administrativa de una rama](/rest/branches#set-admin-branch-protection)
* [Borrar la protección administrativa de una rama](/rest/branches#delete-admin-branch-protection)
* [Obtener la protección de la revisión de una solicitud de extracción](/rest/branches#get-pull-request-review-protection)
* [Actualizar la protección de la revisión de una solicitud de extracción](/rest/branches#update-pull-request-review-protection)
* [Borrar la protección de la revisión de una solicitud de extracción](/rest/branches#delete-pull-request-review-protection)
* [Obtener la protección de firma de una confirmación](/rest/branches#get-commit-signature-protection)
* [Crear la protección de firma de una confirmación](/rest/branches#create-commit-signature-protection)
* [Borrar la protección de firma de una confirmación](/rest/branches#delete-commit-signature-protection)
* [Obtener la protección de las verificaciones de estado](/rest/branches#get-status-checks-protection)
* [Actualizar la protección para la verificación de estados](/rest/branches#update-status-check-protection)
* [Eliminar la protección de las verificaciones de estado](/rest/branches#remove-status-check-protection)
* [Obtener todos los contextos de verificaciones de estado](/rest/branches#get-all-status-check-contexts)
* [Agregar un contexto de verificación de estado](/rest/branches#add-status-check-contexts)
* [Obtener un contexto de verificación de estado](/rest/branches#set-status-check-contexts)
* [Eliminar los contextos de verificación de estado](/rest/branches#remove-status-check-contexts)
* [Obtener restricciones de acceso](/rest/branches#get-access-restrictions)
* [Borrar restricciones de acceso](/rest/branches#delete-access-restrictions)
* [Listar a los equipos con acceso a la rama protegida](/rest/repos#list-teams-with-access-to-the-protected-branch)
* [Agregar restricciones de acceso a equipos](/rest/branches#add-team-access-restrictions)
* [Obtener restricciones de acceso a equipos](/rest/branches#set-team-access-restrictions)
* [Eliminar restricciones de acceso a equipos](/rest/branches#remove-team-access-restrictions)
* [Listar las restricciones de usuario para la rama protegida](/rest/repos#list-users-with-access-to-the-protected-branch)
* [Agregar las restricciones de acceso para los usuarios](/rest/branches#add-user-access-restrictions)
* [Configurar las restricciones de acceso para los usuarios](/rest/branches#set-user-access-restrictions)
* [Eliminar las restricciones de acceso para los usuarios](/rest/branches#remove-user-access-restrictions)
* [Fusionar una rama](/rest/branches#merge-a-branch)

#### Colaboradores del Repositorio

* [Listar los colaboradores del repositorio](/rest/collaborators#list-repository-collaborators)
* [Verificar si un usuario es colaborador de un repositorio](/rest/collaborators#check-if-a-user-is-a-repository-collaborator)
* [Agregar un colaborador de repositorio](/rest/collaborators#add-a-repository-collaborator)
* [Eliminar a un colaborador del repositorio](/rest/collaborators#remove-a-repository-collaborator)
* [Obtener permisos del repositorio para un usuario](/rest/collaborators#get-repository-permissions-for-a-user)

#### Comentarios de Confirmaciones de un Repositorio

* [Listar los comentarios de confirmaciones en un repositorio](/rest/commits#list-commit-comments-for-a-repository)
* [Obtener un comentario de una confirmación](/rest/commits#get-a-commit-comment)
* [Actualizar un comentario de una confirmación](/rest/commits#update-a-commit-comment)
* [Borrar un comentario de una confirmación](/rest/commits#delete-a-commit-comment)
* [Listar los comentarios de una confirmación](/rest/commits#list-commit-comments)
* [Crear un comentario de una confirmación](/rest/commits#create-a-commit-comment)

#### Confirmaciones de Repositorio

* [Listar confirmaciones](/rest/commits#list-commits)
* [Obtener una confirmación](/rest/commits#get-a-commit)
* [Listar ramas para la confirmación principal](/rest/commits#list-branches-for-head-commit)
* [Listar solicitudes de extracción asociadas con una confirmación](/rest/repos#list-pull-requests-associated-with-commit)

#### Comunidad del Repositorio

* [Obtener el código de conducta de un repositorio](/rest/codes-of-conduct#get-the-code-of-conduct-for-a-repository)
{% ifversion fpt or ghec %}
* [Obtener las métricas de perfil de la comunidad](/rest/metrics#get-community-profile-metrics)
{% endif %}

#### Contenido de los Repositorios

* [Descargar un archivo de un repositorio](/rest/repos#download-a-repository-archive)
* [Obtener el contenido de un repositorio](/rest/repos#get-repository-content)
* [Crear o actualizar los contenidos de archivo](/rest/repos#create-or-update-file-contents)
* [Borrar un archivo](/rest/repos#delete-a-file)
* [Obtener el README de un repositorio](/rest/repos#get-a-repository-readme)
* [Obtener la licencia para un repositorio](/rest/licenses#get-the-license-for-a-repository)

#### Envíos de Evento de un Repositorio

* [Crear un evento de envío de un repositorio](/rest/repos#create-a-repository-dispatch-event)

#### Ganchos de Repositorio

* [Listar los webhooks de un repositorio](/rest/webhooks#list-repository-webhooks)
* [Crear un webhook para un repositorio](/rest/webhooks#create-a-repository-webhook)
* [Obtener un webhook para un repositorio](/rest/webhooks#get-a-repository-webhook)
* [Actualizar el webhook de un repositorio](/rest/webhooks#update-a-repository-webhook)
* [Borrar el webhook de un repositorio](/rest/webhooks#delete-a-repository-webhook)
* [Hacer ping al webhook de un repositorio](/rest/webhooks#ping-a-repository-webhook)
* [Probar el webhook de carga a un repositorio](/rest/repos#test-the-push-repository-webhook)

#### Invitaciones a un repositorio

* [Listar las invitaciones a un repositorio](/rest/collaborators#list-repository-invitations)
* [Actualizar la invitación a un repositorio](/rest/collaborators#update-a-repository-invitation)
* [Borrar la invitación a un repositorio](/rest/collaborators#delete-a-repository-invitation)
* [Listar las invitaciones a un repositorio para el usuario autenticado](/rest/collaborators#list-repository-invitations-for-the-authenticated-user)
* [Aceptar la invitación a un repositorio](/rest/collaborators#accept-a-repository-invitation)
* [Rechazar la invitación a un repositorio](/rest/collaborators#decline-a-repository-invitation)

#### Claves de Repositorio

* [Listar claves de despliegue](/rest/deployments#list-deploy-keys)
* [Crear una clave de despliegue](/rest/deployments#create-a-deploy-key)
* [Obtener una clave de despliegue](/rest/deployments#get-a-deploy-key)
* [Borrar una clave de despiegue](/rest/deployments#delete-a-deploy-key)

#### Páginas de Repositorio

* [Obtener un sitio de GitHub Pages](/rest/pages#get-a-github-pages-site)
* [Crear un sitio de GitHub Pages](/rest/pages#create-a-github-pages-site)
* [Actualizar la información acerca de un sitio de GitHub Pages](/rest/pages#update-information-about-a-github-pages-site)
* [Borrar un sitio de GitHub Pages](/rest/pages#delete-a-github-pages-site)
* [Listar las compilaciones de GitHub Pages](/rest/pages#list-github-pages-builds)
* [Solicitar una compilación de GitHub Pages](/rest/pages#request-a-github-pages-build)
* [Obtener una compilación de GitHub Pages](/rest/pages#get-github-pages-build)
* [Obtener la última compilación de pages](/rest/pages#get-latest-pages-build)

{% ifversion ghes %}
#### Ganchos de Pre-recepción de un Repositorio

* [Listar los ganchos de pre-recepción para un repositorio](/enterprise/user/rest/enterprise-admin#list-pre-receive-hooks-for-a-repository)
* [Obtener un gancho de pre-recepción de un repositorio](/enterprise/user/rest/enterprise-admin#get-a-pre-receive-hook-for-a-repository)
* [Actualizar el requerir ganchos de pre-recepción en un repositorio](/enterprise/user/rest/enterprise-admin#update-pre-receive-hook-enforcement-for-a-repository)
* [Eliminar el requerir ganchos de pre-recepción para un repositorio](/enterprise/user/rest/enterprise-admin#remove-pre-receive-hook-enforcement-for-a-repository)
{% endif %}

#### Lanzamientos de repositorio

* [Listar los lanzamientos](/rest/repos#list-releases)
* [Crear un lanzamiento](/rest/repos#create-a-release)
* [Obtener un lanzamiento](/rest/repos#get-a-release)
* [Actualizar un lanzamiento](/rest/repos#update-a-release)
* [Borrar un lanzamiento](/rest/repos#delete-a-release)
* [Listar activos de lanzamiento](/rest/repos#list-release-assets)
* [Obtener un activo de lanzamiento](/rest/repos#get-a-release-asset)
* [Actualizar un activo de lanzamiento](/rest/repos#update-a-release-asset)
* [Borrar un activo de lanzamiento](/rest/repos#delete-a-release-asset)
* [Obtener el lanzamiento más reciente](/rest/repos#get-the-latest-release)
* [Obtener un lanzamiento por nombre de matrícula](/rest/repos#get-a-release-by-tag-name)

#### Estadísticas de Repositorio

* [Obtener la actividad de confirmaciones semanal](/rest/metrics#get-the-weekly-commit-activity)
* [Obtener la actividad de confirmaciones del año pasado](/rest/metrics#get-the-last-year-of-commit-activity)
* [Obtener la actividad de confirmaciones de todos los colaboradores](/rest/metrics#get-all-contributor-commit-activity)
* [Obtener la cuenta semanal de confirmaciones](/rest/metrics#get-the-weekly-commit-count)
* [Obtener la cuenta de confirmaciones por hora para cada día](/rest/metrics#get-the-hourly-commit-count-for-each-day)

{% ifversion fpt or ghec %}
#### Alertas de Vulnerabilidad en Repositorios

* [Habilitar las alertas de vulnerabilidades](/rest/repos#enable-vulnerability-alerts)
* [Inhabilitar las alertas de vulnerabilidades](/rest/repos#disable-vulnerability-alerts)
{% endif %}

#### Raíz

* [Terminal raíz](/rest#root-endpoint)
* [Emojis](/rest/emojis#emojis)
* [Obtener un estado de límite de tasa para el usuario autenticado](/rest/rate-limit#get-rate-limit-status-for-the-authenticated-user)

#### Buscar

* [Buscar código](/rest/search#search-code)
* [Buscar confirmaciones](/rest/search#search-commits)
* [Buscar etiquetas](/rest/search#search-labels)
* [Buscar repositorios](/rest/search#search-repositories)
* [Buscar temas](/rest/search#search-topics)
* [Buscar usuarios](/rest/search#search-users)

#### Estados

* [Obtener el estado combinado para una referencia específica](/rest/commits#get-the-combined-status-for-a-specific-reference)
* [Listar los estados de confirmación para una referencia](/rest/commits#list-commit-statuses-for-a-reference)
* [Crear un estado de confirmación](/rest/commits#create-a-commit-status)

#### Debates de Equipo

* [Listar debates](/rest/teams#list-discussions)
* [Crear un debate](/rest/teams#create-a-discussion)
* [Obtener un debate](/rest/teams#get-a-discussion)
* [Actualizar un debate](/rest/teams#update-a-discussion)
* [Borrar un debate](/rest/teams#delete-a-discussion)
* [Listar los comentarios del debate](/rest/teams#list-discussion-comments)
* [Crear un comentario sobre un debate](/rest/teams#create-a-discussion-comment)
* [Obtener un comentario de un debate](/rest/teams#get-a-discussion-comment)
* [Actualizar un comentario en un debate](/rest/teams#update-a-discussion-comment)
* [Borrar un comentario de un debate](/rest/teams#delete-a-discussion-comment)

#### Temas

* [Obtener todos los temas de un repositorio](/rest/repos#get-all-repository-topics)
* [Reemplazar todos los temas de un repositorio](/rest/repos#replace-all-repository-topics)

{% ifversion fpt or ghec %}
#### Tráfico

* [Obtener los clones de un repositorio](/rest/metrics#get-repository-clones)
* [Obtener las rutas de referencia superior](/rest/metrics#get-top-referral-paths)
* [Obtener las fuentes de referencia superior](/rest/metrics#get-top-referral-sources)
* [Obtener las visualizaciones de página](/rest/metrics#get-page-views)
{% endif %}

{% ifversion fpt or ghec %}
#### Bloquear Usuarios

* [Listar a los usuarios que ha bloqueado el usuario autenticado](/rest/users#list-users-blocked-by-the-authenticated-user)
* [Verificar si el usuario autenticado bloqueó a un usuario](/rest/users#check-if-a-user-is-blocked-by-the-authenticated-user)
* [Listar a los usuarios que habloqueado la organización](/rest/orgs#list-users-blocked-by-an-organization)
* [Verificar si una organización bloqueó a un usuario](/rest/orgs#check-if-a-user-is-blocked-by-an-organization)
* [Bloquear a un usuario de una organización](/rest/orgs#block-a-user-from-an-organization)
* [Desbloquear a un usuario de una organización](/rest/orgs#unblock-a-user-from-an-organization)
* [Bloquear a un usuario](/rest/users#block-a-user)
* [Desbloquear a un usuario](/rest/users#unblock-a-user)
{% endif %}

{% ifversion fpt or ghes or ghec %}
#### Correo Electrónico de Usuario

{% ifversion fpt or ghec %}
* [Configurar la visibilidad del correo electrónico principal para el usuario autenticado](/rest/users#set-primary-email-visibility-for-the-authenticated-user)
{% endif %}
* [Listar las direcciones de correo electrónico para el usuario autenticado](/rest/users#list-email-addresses-for-the-authenticated-user)
* [Agregar la(s) dirección(es) de correo electrónico](/rest/users#add-an-email-address-for-the-authenticated-user)
* [Borrar la(s) direccion(es) de correo electrónico](/rest/users#delete-an-email-address-for-the-authenticated-user)
* [Listar las direcciones de correo electrónico del usuario autenticado](/rest/users#list-public-email-addresses-for-the-authenticated-user)
{% endif %}

#### Seguidores del Usuario

* [Listar los seguidores de un usuario](/rest/users#list-followers-of-a-user)
* [Listar a las personas que sigue un usuario](/rest/users#list-the-people-a-user-follows)
* [Revisar si el usuario autenticado sigue a una persona](/rest/users#check-if-a-person-is-followed-by-the-authenticated-user)
* [Seguir a un usuario](/rest/users#follow-a-user)
* [Dejar de seguri a un usuario](/rest/users#unfollow-a-user)
* [Verificar si el usuario sigue a otro usuario](/rest/users#check-if-a-user-follows-another-user)

#### Utilizar Llaves Gpg

* [Listar las llaves GPG para el usuario autenticado](/rest/users#list-gpg-keys-for-the-authenticated-user)
* [Crear una llave GPG para el usuario autenticado](/rest/users#create-a-gpg-key-for-the-authenticated-user)
* [Obtener una llave GPG para el usuario autenticado](/rest/users#get-a-gpg-key-for-the-authenticated-user)
* [Borrar una llave GPG para el usuario autenticado](/rest/users#delete-a-gpg-key-for-the-authenticated-user)
* [Listar las llaves GPG de un usuario](/rest/users#list-gpg-keys-for-a-user)

#### Llaves Públicas de Usuario

* [Listar las llaves SSH para el usuario autenticado](/rest/users#list-public-ssh-keys-for-the-authenticated-user)
* [Crear una llave SSH para el usuario autenticado](/rest/users#create-a-public-ssh-key-for-the-authenticated-user)
* [Obtener una llave SSH pública para el usuario autenticado](/rest/users#get-a-public-ssh-key-for-the-authenticated-user)
* [Borrar una llave pública de SSH para el usuario autenticado](/rest/users#delete-a-public-ssh-key-for-the-authenticated-user)
* [Listar las llaves públicas de un usuario](/rest/users#list-public-keys-for-a-user)

#### Usuarios

* [Obtener al usuario autenticado](/rest/users#get-the-authenticated-user)
* [Listar las instalaciones de apps accesibles para el token de acceso del usuario](/rest/apps#list-app-installations-accessible-to-the-user-access-token)
{% ifversion fpt or ghec %}
* [Listar las suscripciones del usuario autenticado](/rest/apps#list-subscriptions-for-the-authenticated-user)
{% endif %}
* [Listar usuarios](/rest/users#list-users)
* [Obtener un usuario](/rest/users#get-a-user)

{% ifversion fpt or ghec %}
#### Ejecuciones de Flujo de Trabajo

* [Listar las ejecuciones de flujode trabajo de un repositorio](/rest/actions#list-workflow-runs-for-a-repository)
* [Obtener una ejecución de flujo de trabajo](/rest/actions#get-a-workflow-run)
* [Cancelar una ejecución de flujo de trabajo](/rest/actions#cancel-a-workflow-run)
* [Descargar las bitácoras de ejecución de flujo de trabajo](/rest/actions#download-workflow-run-logs)
* [Borrar las bitácoras de ejecución de flujo de trabajo](/rest/actions#delete-workflow-run-logs)
* [Re-ejecutar un flujo de trabajo](/rest/actions#re-run-a-workflow)
* [Listar las ejecuciones de flujo de trabajo](/rest/actions#list-workflow-runs)
* [Obtener las estadísticas de uso de las ejecuciones de flujo de trabajo](/rest/actions#get-workflow-run-usage)
{% endif %}

{% ifversion fpt or ghec %}
#### Flujos de trabajo

* [Listar los flujos de trabajo del repositorio](/rest/actions#list-repository-workflows)
* [Obtener un flujo de trabajo](/rest/actions#get-a-workflow)
* [Obtener el uso de un flujo de trabajo](/rest/actions#get-workflow-usage)
{% endif %}

## Leer más

- "[Acerca de la autenticación en {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github#githubs-token-formats)"

