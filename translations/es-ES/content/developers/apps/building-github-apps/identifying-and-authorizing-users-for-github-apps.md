---
title: Identificación y autorización de usuarios para aplicaciones de GitHub
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
shortTitle: Identify & authorize users
ms.openlocfilehash: 302e7a25931c3af2957dae7a67e0ca080fc5bd50
ms.sourcegitcommit: f54d01e643f994ce48f0774dbc680ad77dd6193f
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160584'
---
{% data reusables.pre-release-program.expiring-user-access-tokens %}

Cuando tu GitHub App actúe en nombre de un usuario, ésta realiza solicitudes de usuario a servidor. Estas solicitudes deben autorizarse con un token de acceso de usuario. Las solicitudes de usuario a servidor incluyen el solicitar datos para un usuario, como el determinar qué repositorios mostrar a un usuario en particular. Estas solicitudes también incluyen las acciones que activa un usuario, como ejecutar una compilación.

{% data reusables.apps.expiring_user_authorization_tokens %}

## Identificar usuarios en tu sitio

A fin de autorizar a los usuarios para las aplicaciones estándar que se ejecutan en el buscador, use el [flujo de aplicaciones web](#web-application-flow).

A fin de autorizar a los usuarios para aplicaciones sin interfaz gráfica sin acceso directo al buscador, como las herramientas de CLI o administradores de credenciales de Git, use el [flujo de dispositivos](#device-flow). En el flujo de dispositivos se usa la [concesión de autorización de dispositivos](https://tools.ietf.org/html/rfc8628) de OAuth 2.0.

## Flujo de aplicaciones Web

Al utilizar el flujo de aplicaciones web, el proceso para identificar a los usuarios en tu sitio es:

1. Se redirecciona a los usuarios para solicitar su identidad de GitHub
2. GitHub redirecciona a los usuarios de vuelta a tu sitio
3. Tu GitHub App accede a la API con el token de acceso del usuario

Si selecciona **Solicitar la autorización del usuario (OAuth) durante la instalación** al crear o modificar la aplicación, el paso 1 se completará durante la instalación de la aplicación. Para más información, vea "[Autorización de usuarios durante la instalación](/apps/installing-github-apps/#authorizing-users-during-installation)".

### 1. Solicitud de la identidad de un usuario de GitHub
Dirige al usuario a la siguiente URL en su buscador:

    GET {% data variables.product.oauth_host_code %}/login/oauth/authorize

Cuando la aplicación de GitHub especifica un parámetro `login`, solicita a los usuarios a una cuenta específica que pueden utilizar para iniciar sesión y autorizar la aplicación.

#### Parámetros

Nombre | Tipo | Descripción
-----|------|------------
`client_id` | `string` | **Obligatorio.** Id. de cliente de la aplicación de GitHub. Puede encontrarlo en la [configuración de la aplicación de GitHub](https://github.com/settings/apps) al seleccionarla. **Nota:** El id. de la aplicación y el id. de cliente no son iguales y tampoco son intercambiables.
`redirect_uri` | `string` | La URL en tu aplicación a donde se enviará a los usuarios después de la autorización. Esto debe ser una coincidencia exacta con {% ifversion fpt or ghes or ghec %} una de las URL que ha proporcionado como **URL de devolución de llamada** {% else %} la URL que ha proporcionado en el campo **URL de devolución de llamada de autorización del usuario**{% endif %} al configurar la aplicación de GitHub y no puede contener ningún parámetro adicional.
`state` | `string` | Este deberá contener una secuencia aleatoria para dar protección contra los ataques de falsificación y podría contener cualquier otros datos arbitrarios.
`login` | `string` | Sugiere una cuenta específica para utilizar para registrarse y autorizar la app.
`allow_signup` | `string` | Ya sea que se ofrezca no una opción para que los usuarios autenticados se registren para {% data variables.product.prodname_dotcom %} durante el flujo de OAuth. El valor predeterminado es `true`. Use `false` cuando una directiva prohíba los registros.

{% note %}

**Nota:** No es necesario proporcionar ámbitos en la solicitud de autorización. A diferencia de la OAuth trandicional, el token de autorizción se limita a los permisos asociados con tu GitHub App y a aquellos del usuario.

{% endnote %}

### 2. GitHub redirecciona a los usuarios de vuelta al sitio

Si el usuario acepta la solicitud, GitHub le redirecciona de vuelta al sitio con un valor `code` temporal en un parámetro de código así como con el estado que haya proporcionado en el paso anterior en un parámetro `state`. Si los estados no coinciden significa que un tercero creó la solicitud y que se debe anular el proceso.

{% note %}

**Nota:** Si selecciona **Solicitar autorización de usuario (OAuth) durante la instalación** al crear o modificar la aplicación, GitHub devuelve un valor `code` temporal que tendrá que intercambiar por un token de acceso. El parámetro `state` no se devuelve cuando GitHub inicia el flujo de OAuth durante la instalación de la aplicación.

{% endnote %}

Intercambie este valor `code` por un token de acceso.  Cuando se habilita el vencimiento de tokens, el token de acceso vence en 8 horas y el token de actualización en 6 meses. Cada que actualizas el token, obtienes un nuevo token de actualización. Para más información, vea "[Actualización de tokens de acceso de usuario a servidor](/developers/apps/refreshing-user-to-server-access-tokens)".

Los tokens de usuario con vigencia determinada son una característica opcional actualmente y están sujetos a cambios. Para participar en la característica de expiración de tokens de usuario a servidor, vea "[Activación de características opcionales para aplicaciones](/developers/apps/activating-optional-features-for-apps)".

Haz una solicitud a la siguiente terminal para recibir un token de acceso:

    POST {% data variables.product.oauth_host_code %}/login/oauth/access_token

#### Parámetros

Nombre | Tipo | Descripción
-----|------|------------
`client_id` | `string` | **Obligatorio.** Id. de cliente de la aplicación de GitHub.
`client_secret` | `string`   | **Obligatorio.** Secreto de cliente de la aplicación de GitHub.
`code` | `string`   | **Obligatorio.** Código que ha recibido como respuesta al paso 1.
`redirect_uri` | `string` | La URL en tu aplicación a donde se enviará a los usuarios después de la autorización. Esto debe ser una coincidencia exacta con {% ifversion fpt or ghes or ghec %} una de las URL que ha proporcionado como **URL de devolución de llamada** {% else %} la URL que ha proporcionado en el campo **URL de devolución de llamada de autorización del usuario**{% endif %} al configurar la aplicación de GitHub y no puede contener ningún parámetro adicional.

#### Response

Predeterminadametne, la respuesta lleva el siguiente formato. Los parámetros de respuesta `expires_in`, `refresh_token` y `refresh_token_expires_in` solo se devuelven cuando se habilitan los tokens de acceso de usuario a servidor que expiran.

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

### 3. La aplicación de GitHub accede a la API con el token de acceso del usuario

El token de acceso del usuario permite que la GitHub App haga solicitudes a la API a nombre del usuario.

    Authorization: Bearer OAUTH-TOKEN
    GET {% data variables.product.api_url_code %}/user

Por ejemplo, en curl, puedes configurar el encabezado de autorización de la siguiente manera:

```shell
curl -H "Authorization: Bearer OAUTH-TOKEN" {% data variables.product.api_url_pre %}/user
```

## Flujo de dispositivos

{% note %}

**Nota:** El flujo de dispositivos se encuentra en versión beta pública y está sujeto a cambios.

{% endnote %}

Este flujo de dispositivos te permite autorizar usuarios para una app sin encabezado, tal como una herramienta de CLI o un administrador de credenciales de Git.

{% ifversion device-flow-is-opt-in %}Antes de que puedas utilizar el flujo de dispositivos para identificar y autorizar usuarios, primero debes habilitarlo en la configuración de la aplicación. Para más información sobre cómo habilitar el flujo de dispositivos, vea "[Modificación de una aplicación de GitHub](/developers/apps/managing-github-apps/modifying-a-github-app)". {% endif %} Para más información sobre cómo autorizar a los usuarios mediante el flujo de dispositivos, vea "[Autorización de aplicaciones de OAuth](/developers/apps/authorizing-oauth-apps#device-flow)".

## Revisar a qué recursos de instalación puede acceder un usuario

Ya que tengas un token de OAuth para un usuario, puedes revisar a qué instalaciones puede acceder.

    Authorization: Bearer OAUTH-TOKEN
    GET /user/installations

También puedes verificar qué repositorios se encuentran accesibles para un usuario para una instalación.

    Authorization: Bearer OAUTH-TOKEN
    GET /user/installations/:installation_id/repositories

Puede encontrar más detalles en: [Enumeración de las instalaciones de aplicaciones accesibles para el token de acceso de usuario](/rest/apps#list-app-installations-accessible-to-the-user-access-token) y [Enumeración de repositorios accesibles para el token de acceso de usuario](/rest/apps#list-repositories-accessible-to-the-user-access-token).

## Gestionar una autorización revocada a una GitHub App

Si un usuario revoca su autorización de una aplicación de GitHub, la aplicación recibirá el webhook [`github_app_authorization`](/webhooks/event-payloads/#github_app_authorization) de forma predeterminada. Las GitHub Apps no pueden desuscribirse de este evento. {% data reusables.webhooks.authorization_event %}

## Permisos a nivel de usuario

Puede agregar permisos de nivel de usuario a la aplicación de GitHub para acceder a los recursos del usuario, como los correos electrónicos, que conceden usuarios independientes como parte del [flujo de autorización de usuarios](#identifying-users-on-your-site). Los permisos de nivel de usuario difieren de los [permisos de nivel de organización y repositorio](/rest/overview/permissions-required-for-github-apps), que se conceden en el momento de la instalación en una cuenta personal o de la organización.

Puede seleccionar permisos de nivel de usuario desde la configuración de la aplicación de GitHub en la sección **Permisos de usuario** de la página **Permisos y webhooks**. Para más información sobre cómo seleccionar permisos, vea "[Edición de permisos de una aplicación de GitHub](/apps/managing-github-apps/editing-a-github-app-s-permissions/)".

Cuando un usuario instala tu app en su cuenta, el aviso de instalación listará los permisos a nivel de usuario que tu app está solicitando y explicará que la app puede pedir estos permisos a los usuarios independientes.

Ya que los permisos a nivel de usuario se otorgan individualmente, puedes agregarlos a tu app existente sin solicitar que los usuarios los mejoren. Sin embargo, necesitarás enviar usuarios existentes a través del flujo de autorización de usuarios para autorizar los permisos nuevos y obtener un token nuevo de usuario a servidor para estas solicitudes.

## Solicitudes de usuario a servidor

Mientras que la mayoría de tu interacción con la API deberá darse utilizando tus tokens de acceso a la instalación de servidor a servidor, ciertas terminales te permiten llevar a cabo acciones a través de la API utilizando un token de acceso. La aplicación puede realizar las siguientes solicitudes mediante puntos de conexión [GraphQL](/graphql) o [REST](/rest).

### Terminales compatibles

{% ifversion fpt or ghec %}
#### Ejecutores de Acciones

* [Enumerar aplicaciones de ejecutor para un repositorio](/rest/actions#list-runner-applications-for-a-repository)
* [Enumerar ejecutores autohospedados para un repositorio](/rest/actions#list-self-hosted-runners-for-a-repository)
* [Obtener un ejecutor autohospedado para un repositorio](/rest/actions#get-a-self-hosted-runner-for-a-repository)
* [Borrar un ejecutor autohospedado de un repositorio](/rest/actions#delete-a-self-hosted-runner-from-a-repository)
* [Crear un token de registro para un repositorio](/rest/actions#create-a-registration-token-for-a-repository)
* [Crear un token de eliminación para un repositorio](/rest/actions#create-a-remove-token-for-a-repository)
* [Enumerar aplicaciones de ejecutor para una organización](/rest/actions#list-runner-applications-for-an-organization)
* [Enumerar ejecutores autohospedados para una organización](/rest/actions#list-self-hosted-runners-for-an-organization)
* [Obtener ejecutores autohospedados para una organización](/rest/actions#get-a-self-hosted-runner-for-an-organization)
* [Borrar un ejecutor autohospedado de una organización](/rest/actions#delete-a-self-hosted-runner-from-an-organization)
* [Crear un token de registro para una organización](/rest/actions#create-a-registration-token-for-an-organization)
* [Crear un token de eliminación para una organización](/rest/actions#create-a-remove-token-for-an-organization)

#### Secretos de las Acciones

* [Obtener la clave pública de un repositorio](/rest/actions#get-a-repository-public-key)
* [Enumerar los secretos del repositorio](/rest/actions#list-repository-secrets)
* [Obtener el secreto de un repositorio](/rest/actions#get-a-repository-secret)
* [Crear o actualizar el secreto de un repositorio](/rest/actions#create-or-update-a-repository-secret)
* [Eliminar el secreto de un repositorio](/rest/actions#delete-a-repository-secret)
* [Obtener la clave pública de una organización](/rest/actions#get-an-organization-public-key)
* [Enumerar los secretos de la organización](/rest/actions#list-organization-secrets)
* [Obtener el secreto de una organización](/rest/actions#get-an-organization-secret)
* [Crear o actualizar el secreto de una organización](/rest/actions#create-or-update-an-organization-secret)
* [Enumerar repositorios seleccionados para el secreto de una organización](/rest/actions#list-selected-repositories-for-an-organization-secret)
* [Configurar repositorios seleccionados para el secreto de una organización](/rest/actions#set-selected-repositories-for-an-organization-secret)
* [Agregar un repositorio seleccionado al secreto de una organización](/rest/actions#add-selected-repository-to-an-organization-secret)
* [Eliminar un repositorio seleccionado del secreto de una organización](/rest/actions#remove-selected-repository-from-an-organization-secret)
* [Eliminar el secreto de una organización](/rest/actions#delete-an-organization-secret) {% endif %}

{% ifversion fpt or ghec %}
#### Artifacts

* [Enumerar artefactos para un repositorio](/rest/actions#list-artifacts-for-a-repository)
* [Enumerar artefactos de ejecución de flujo de trabajo](/rest/actions#list-workflow-run-artifacts)
* [Obtener un artefacto](/rest/actions#get-an-artifact)
* [Eliminar un artefacto](/rest/actions#delete-an-artifact)
* [Descargar un artefacto](/rest/actions#download-an-artifact) {% endif %}

#### Ejecuciones de Verificación

* [Crear una ejecución de comprobación](/rest/checks#create-a-check-run)
* [Obtener una ejecución de comprobación](/rest/checks#get-a-check-run)
* [Actualizar una ejecución de comprobación](/rest/checks#update-a-check-run)
* [Enumerar las anotaciones de una ejecución de comprobación](/rest/checks#list-check-run-annotations)
* [Enumerar las ejecuciones de comprobación de un conjunto de comprobaciones](/rest/checks#list-check-runs-in-a-check-suite)
* [Enumerar las ejecuciones de comprobación para una referencia de Git](/rest/checks#list-check-runs-for-a-git-reference)

#### Conjuntos de Verificaciones

* [Crear un conjunto de comprobaciones](/rest/checks#create-a-check-suite)
* [Obtener un conjunto de comprobaciones](/rest/checks#get-a-check-suite)
* [Volver a solicitar un conjunto de comprobaciones](/rest/checks#rerequest-a-check-suite)
* [Actualizar las preferencias del repositorio para los conjuntos de comprobaciones](/rest/checks#update-repository-preferences-for-check-suites)
* [Enumerar los conjuntos de comprobaciones para una referencia de Git](/rest/checks#list-check-suites-for-a-git-reference)

#### Códigos de Conducta

* [Obtener todos los códigos de conducta](/rest/codes-of-conduct#get-all-codes-of-conduct)
* [Obtener un código de conducta](/rest/codes-of-conduct#get-a-code-of-conduct)

#### Estados de Despliegue

* [Enumerar los estados de implementación](/rest/deployments#list-deployment-statuses)
* [Crear un estado de implementación](/rest/deployments#create-a-deployment-status)
* [Obtener un estado de implementación](/rest/deployments#get-a-deployment-status)

#### Implementaciones

* [Enumerar implementaciones](/rest/deployments#list-deployments)
* [Creación de una implementación](/rest/deployments#create-a-deployment)
* [Obtener una implementación](/rest/deployments#get-a-deployment)
* [Eliminación de una implementación](/rest/deployments#delete-a-deployment)

#### Eventos

* [Enumerar los eventos públicos para una red de repositorios](/rest/activity#list-public-events-for-a-network-of-repositories)
* [Enumerar eventos de organizaciones públicas](/rest/activity#list-public-organization-events)

#### Fuentes

* [Obtener fuentes](/rest/activity#get-feeds)

#### Blobs de Git

* [Creación de un blob](/rest/git#create-a-blob)
* [Obtener un blob](/rest/git#get-a-blob)

#### Confirmaciones de GIT

* [Crear una confirmación](/rest/git#create-a-commit)
* [Obtener una confirmación](/rest/git#get-a-commit)

#### Referencias de Git

* [Crear una referencia](/rest/git#create-a-reference)
* [Obtener una referencia](/rest/git#get-a-reference)
* [Enumerar las referencias coincidentes](/rest/git#list-matching-references)
* [Actualizar una referencia](/rest/git#update-a-reference)
* [Eliminar una referencia](/rest/git#delete-a-reference)

#### Matrículas de Git

* [Crear un objeto de etiqueta](/rest/git#create-a-tag-object)
* [Obtener una etiqueta](/rest/git#get-a-tag)

#### Árboles de Git

* [Crear un árbol](/rest/git#create-a-tree)
* [Obtener un árbol](/rest/git#get-a-tree)

#### Plantillas de Gitignore

* [Obtener todas las plantillas de Gitignore](/rest/gitignore#get-all-gitignore-templates)
* [Obtener una plantilla de Gitignore](/rest/gitignore#get-a-gitignore-template)

#### Instalaciones

* [Enumerar repositorios accesibles para el token de acceso del usuario](/rest/apps#list-repositories-accessible-to-the-user-access-token)

{% ifversion fpt or ghec %}
#### Límites de interacción

* [Obtener restricciones de interacción para una organización](/rest/interactions#get-interaction-restrictions-for-an-organization)
* [Establecer restricciones de interacción para una organización](/rest/interactions#set-interaction-restrictions-for-an-organization)
* [Quitar restricciones de interacción para una organización](/rest/interactions#remove-interaction-restrictions-for-an-organization)
* [Obtener restricciones de interacción para un repositorio](/rest/interactions#get-interaction-restrictions-for-a-repository)
* [Establecer restricciones de interacción para un repositorio](/rest/interactions#set-interaction-restrictions-for-a-repository)
* [Quitar restricciones de interacción para un repositorio](/rest/interactions#remove-interaction-restrictions-for-a-repository) {% endif %}

#### Asignados de Informes de Problemas

* [Agregar usuarios asignados a una incidencia](/rest/issues#add-assignees-to-an-issue)
* [Quitar usuarios asignados de una incidencia](/rest/issues#remove-assignees-from-an-issue)

#### Comentarios de Informes de Problemas

* [Enumerar comentarios de incidencias](/rest/issues#list-issue-comments)
* [Crear un comentario de incidencia](/rest/issues#create-an-issue-comment)
* [Enumerar comentarios de incidencias para un repositorio](/rest/issues#list-issue-comments-for-a-repository)
* [Obtener un comentario de incidencias](/rest/issues#get-an-issue-comment)
* [Actualizar un comentario de incidencias](/rest/issues#update-an-issue-comment)
* [Eliminar un comentario de incidencias](/rest/issues#delete-an-issue-comment)

#### Eventos de Informe de Problemas

* [Enumerar eventos de incidencias](/rest/issues#list-issue-events)

#### Línea de tiempo del Informe de Problemas

* [Enumerar eventos de escala de tiempo para una incidencia](/rest/issues#list-timeline-events-for-an-issue)

#### Issues

* [Enumerar las incidencias asignadas al usuario autenticado](/rest/issues#list-issues-assigned-to-the-authenticated-user)
* [Enumerar usuarios asignados](/rest/issues#list-assignees)
* [Comprobar si se puede asignar un usuario](/rest/issues#check-if-a-user-can-be-assigned)
* [Enumerar incidencias del repositorio](/rest/issues#list-repository-issues)
* [Crear una incidencia](/rest/issues#create-an-issue)
* [Obtener una incidencia](/rest/issues#get-an-issue)
* [Actualizar una incidencia](/rest/issues#update-an-issue)
* [Bloquear una incidencia](/rest/issues#lock-an-issue)
* [Desbloquear una incidencia](/rest/issues#unlock-an-issue)

{% ifversion fpt or ghec %}
#### Trabajos

* [Obtener un trabajo para una ejecución de flujo de trabajo](/rest/actions#get-a-job-for-a-workflow-run)
* [Descargar registros de trabajo para una ejecución de flujo de trabajo](/rest/actions#download-job-logs-for-a-workflow-run)
* [Enumerar trabajos para una ejecución de flujo de trabajo](/rest/actions#list-jobs-for-a-workflow-run) {% endif %}

#### Etiquetas

* [Enumerar las etiquetas para una incidencia](/rest/issues#list-labels-for-an-issue)
* [Agregar etiquetas a una incidencia](/rest/issues#add-labels-to-an-issue)
* [Establecer etiquetas para una incidencia](/rest/issues#set-labels-for-an-issue)
* [Eliminar todas las etiquetas de una incidencia](/rest/issues#remove-all-labels-from-an-issue)
* [Eliminar una etiqueta de una incidencia](/rest/issues#remove-a-label-from-an-issue)
* [Enumerar etiquetas para un repositorio](/rest/issues#list-labels-for-a-repository)
* [Creación de una etiqueta](/rest/issues#create-a-label)
* [Obtener una etiqueta](/rest/issues#get-a-label)
* [Actualizar una etiqueta](/rest/issues#update-a-label)
* [Eliminar una etiqueta](/rest/issues#delete-a-label)
* [Obtener etiquetas para cada incidencia en un hito](/rest/issues#list-labels-for-issues-in-a-milestone)

#### Licencias

* [Obtener todas las licencias que se usan habitualmente](/rest/licenses#get-all-commonly-used-licenses)
* [Obtener una licencia](/rest/licenses#get-a-license)

#### Markdown

* [Representar un documento de Markdown](/rest/markdown#render-a-markdown-document)
* [Representar un documento de documento en modo sin formato](/rest/markdown#render-a-markdown-document-in-raw-mode)

#### Meta

* [Meta](/rest/meta#meta)

#### Hitos

* [Enumerar hitos](/rest/issues#list-milestones)
* [Crear un hito](/rest/issues#create-a-milestone)
* [Obtener un hito](/rest/issues#get-a-milestone)
* [Actualizar un hito](/rest/issues#update-a-milestone)
* [Eliminar un hito](/rest/issues#delete-a-milestone)

#### Ganchos de organización

* [Enumerar los webhooks de la organización](/rest/orgs#webhooks/#list-organization-webhooks)
* [Crear un webhook para una organización](/rest/orgs#webhooks/#create-an-organization-webhook)
* [Obtener un webhook de una organización](/rest/orgs#webhooks/#get-an-organization-webhook)
* [Actualizar el webhook de una organización](/rest/orgs#webhooks/#update-an-organization-webhook)
* [Eliminar el webhook de una organización](/rest/orgs#webhooks/#delete-an-organization-webhook)
* [Hacer ping al webhook de una organización](/rest/orgs#webhooks/#ping-an-organization-webhook)

{% ifversion fpt or ghec %}
#### Invitaciones a las Organizaciones

* [Enumerar las invitaciones pendientes a una organización](/rest/orgs#list-pending-organization-invitations)
* [Crear una invitación a una organización](/rest/orgs#create-an-organization-invitation)
* [Enumerar los equipos de invitación a una organización](/rest/orgs#list-organization-invitation-teams) {% endif %}

#### Miembros de la Organización

* [Enumerar los miembros de la organización](/rest/orgs#list-organization-members)
* [Comprobar la pertenencia a una organización de un usuario](/rest/orgs#check-organization-membership-for-a-user)
* [Quitar a un miembro de una organización](/rest/orgs#remove-an-organization-member)
* [Obtener la pertenencia a una organización de un usuario](/rest/orgs#get-organization-membership-for-a-user)
* [Establecer la pertenencia a una organización de un usuario](/rest/orgs#set-organization-membership-for-a-user)
* [Quitar la pertenencia a una organización de un usuario](/rest/orgs#remove-organization-membership-for-a-user)
* [Enumerar los miembros de una organización pública](/rest/orgs#list-public-organization-members)
* [Comprobar la pertenencia a una organización pública de un usuario](/rest/orgs#check-public-organization-membership-for-a-user)
* [Establecer la pertenencia a una organización pública para el usuario autenticado](/rest/orgs#set-public-organization-membership-for-the-authenticated-user)
* [Quitar la pertenencia a una organización pública para el usuario autenticado](/rest/orgs#remove-public-organization-membership-for-the-authenticated-user)

#### Colaboradores Externos de una Organización

* [Enumerar los colaboradores externos de una organización](/rest/orgs#list-outside-collaborators-for-an-organization)
* [Convertir a un miembro de la organización en colaborador externo](/rest/orgs#convert-an-organization-member-to-outside-collaborator)
* [Quitar a un colaborador externo de la organización](/rest/orgs#remove-outside-collaborator-from-an-organization)

{% ifversion ghes %}
#### Ganchos de Pre-recepción de la Organización

* [Enumerar los enlaces de recepción previa de una organización](/enterprise/user/rest/reference/enterprise-admin#list-pre-receive-hooks-for-an-organization)
* [Obtener un enlace de recepción previa para una organización](/enterprise/user/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-an-organization)
* [Actualizar la aplicación de enlaces de recepción previa para una organización](/enterprise/user/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-an-organization)
* [Quitar la aplicación de enlaces de recepción previa para una organización](/enterprise/user/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-an-organization) {% endif %}

#### Poyectos de Equipo de una Organización

* [Enumerar los proyectos de equipo](/rest/teams#list-team-projects)
* [Comprobar los permisos de equipo para un proyecto](/rest/teams#check-team-permissions-for-a-project)
* [Agregar o actualizar los permisos de un proyecto de equipo](/rest/teams#add-or-update-team-project-permissions)
* [Eliminar un proyecto de un equipo](/rest/teams#remove-a-project-from-a-team)

#### Repositorios de Equipo de la Organización

* [Enumerar los repositorios de equipo](/rest/teams#list-team-repositories)
* [Comprobar los permisos de un equipo para un repositorio](/rest/teams#check-team-permissions-for-a-repository)
* [Agregar o actualizar los permisos de un repositorio de equipo](/rest/teams#add-or-update-team-repository-permissions)
* [Quitar un repositorio de un equipo](/rest/teams#remove-a-repository-from-a-team)

{% ifversion fpt or ghec %}
#### Sincronización de Equipos de la Organización

* [Enumerar los grupos de IdP para un equipo](/rest/teams#list-idp-groups-for-a-team)
* [Crear o actualizar conexiones de grupo de IdP](/rest/teams#create-or-update-idp-group-connections)
* [Enumerar los grupos de IdP para una organización](/rest/teams#list-idp-groups-for-an-organization) {% endif %}

#### Equipos de la Organización

* [Enumerar equipos](/rest/teams#list-teams)
* [Creación de un equipo](/rest/teams#create-a-team)
* [Obtener un equipo por nombre](/rest/teams#get-a-team-by-name)
* [Actualizar un equipo](/rest/teams#update-a-team)
* [Eliminar un equipo](/rest/teams#delete-a-team) {% ifversion fpt or ghec %}
* [Enumerar invitaciones pendientes al equipo](/rest/teams#list-pending-team-invitations) {% endif %}
* [Enumerar los miembros del equipo](/rest/teams#list-team-members)
* [Obtener la pertenencia a un equipo de un usuario](/rest/teams#get-team-membership-for-a-user)
* [Agregar o actualizar la pertenencia a un equipo de un usuario](/rest/teams#add-or-update-team-membership-for-a-user)
* [Quitar la pertenencia a un equipo de un usuario](/rest/teams#remove-team-membership-for-a-user)
* [Enumerar los equipos secundarios](/rest/teams#list-child-teams)
* [Enumerar los equipos para el usuario autenticado](/rest/teams#list-teams-for-the-authenticated-user)

#### Las organizaciones

* [Enumeración de organizaciones](/rest/orgs#list-organizations)
* [Obtención de una organización](/rest/orgs#get-an-organization)
* [Actualización de una organización](/rest/orgs#update-an-organization)
* [Enumerar las pertenencias a organizaciones para el usuario autenticado](/rest/orgs#list-organization-memberships-for-the-authenticated-user)
* [Obtener la pertenencia a una organización para el usuario autenticado](/rest/orgs#get-an-organization-membership-for-the-authenticated-user)
* [Actualizar la pertenencia a una organización para el usuario autenticado](/rest/orgs#update-an-organization-membership-for-the-authenticated-user)
* [Enumerar las organizaciones para el usuario autenticado](/rest/orgs#list-organizations-for-the-authenticated-user)
* [Enumerar las organizaciones para un usuario](/rest/orgs#list-organizations-for-a-user)

{% ifversion fpt or ghec %}
#### Autorizaciones de Credencial para las Organizaciones

* [Enumerar las autorizaciones de SSO de SAML para una organización](/rest/orgs#list-saml-sso-authorizations-for-an-organization)
* [Quitar una autorización de SSO de SAML de una organización](/rest/orgs#remove-a-saml-sso-authorization-for-an-organization) {% endif %}

{% ifversion fpt or ghec %}
#### Scim de las Organizaciones

* [Enumerar las identidades aprovisionadas de SCIM](/rest/scim#list-scim-provisioned-identities)
* [Aprovisionar e invitar a un usuario de SCIM](/rest/scim#provision-and-invite-a-scim-user)
* [Obtener la información de aprovisionamiento de SCIM para un usuario](/rest/scim#get-scim-provisioning-information-for-a-user)
* [Establecer la información de SCIM para un usuario aprovisionado](/rest/scim#set-scim-information-for-a-provisioned-user)
* [Actualizar un atributo para un usuario de SCIM](/rest/scim#update-an-attribute-for-a-scim-user)
* [Borrar a un usuario de SCIM de una organización](/rest/scim#delete-a-scim-user-from-an-organization) {% endif %}

{% ifversion fpt or ghec %}
#### Importaciones de Código Fuente

* [Obtener el estado de una importación](/rest/migrations#get-an-import-status)
* [Iniciar una importación](/rest/migrations#start-an-import)
* [Actualizar una importación](/rest/migrations#update-an-import)
* [Cancelar una importación](/rest/migrations#cancel-an-import)
* [Obtener los creadores de una confirmación](/rest/migrations#get-commit-authors)
* [Asignar el creador de una confirmación](/rest/migrations#map-a-commit-author)
* [Obtener archivos grandes](/rest/migrations#get-large-files)
* [Actualizar la preferencia de LFS de Git](/rest/migrations#update-git-lfs-preference) {% endif %}

#### Colaboradores de Proyecto

* [Enumerar los colaboradores del proyecto](/rest/projects#list-project-collaborators)
* [Agregar un colaborador del proyecto](/rest/projects#add-project-collaborator)
* [Quitar un colaborador del proyecto](/rest/projects#remove-project-collaborator)
* [Obtener permisos del proyecto para un usuario](/rest/projects#get-project-permission-for-a-user)

#### Proyectos

* [Enumerar los proyectos de la organización](/rest/projects#list-organization-projects)
* [Crear un proyecto de la organización](/rest/projects#create-an-organization-project)
* [Obtener un proyecto](/rest/projects#get-a-project)
* [Actualizar un proyecto](/rest/projects#update-a-project)
* [Eliminación de un proyecto](/rest/projects#delete-a-project)
* [Enumerar las columnas del proyecto](/rest/projects#list-project-columns)
* [Crear una columna de proyecto](/rest/projects#create-a-project-column)
* [Obtener una columna de proyecto](/rest/projects#get-a-project-column)
* [Actualizar una columna de proyecto](/rest/projects#update-a-project-column)
* [Eliminar una columna de proyecto](/rest/projects#delete-a-project-column)
* [Enumerar las tarjetas del proyecto](/rest/projects#list-project-cards)
* [Crear una tarjeta de proyecto](/rest/projects#create-a-project-card)
* [Mover una columna de proyecto](/rest/projects#move-a-project-column)
* [Obtener una tarjeta de proyecto](/rest/projects#get-a-project-card)
* [Actualizar una tarjeta de proyecto](/rest/projects#update-a-project-card)
* [Eliminar una tarjeta de proyecto](/rest/projects#delete-a-project-card)
* [Mover una tarjeta de proyecto](/rest/projects#move-a-project-card)
* [Enumerar los proyectos de un repositorio](/rest/projects#list-repository-projects)
* [Crear un proyecto de repositorio](/rest/projects#create-a-repository-project)

#### Comentarios de Extracción

* [Enumerar los comentarios de revisión en una solicitud de incorporación de cambios](/rest/pulls#list-review-comments-on-a-pull-request)
* [Crear un comentario de revisión para una solicitud de incorporación de cambios](/rest/pulls#create-a-review-comment-for-a-pull-request)
* [Enumerar los comentarios de revisión en un repositorio](/rest/pulls#list-review-comments-in-a-repository)
* [Obtener un comentario de revisión para una solicitud de incorporación de cambios](/rest/pulls#get-a-review-comment-for-a-pull-request)
* [Actualizar un comentario de revisión para una solicitud de incorporación de cambios](/rest/pulls#update-a-review-comment-for-a-pull-request)
* [Eliminar un comentario de revisión de una solicitud de incorporación de cambios](/rest/pulls#delete-a-review-comment-for-a-pull-request)

#### Eventos de Revisión en Solciitudes de Extracción

* [Descartar una revisión para una solicitud de incorporación de cambios](/rest/pulls#dismiss-a-review-for-a-pull-request)
* [Enviar una revisión para una solicitud de incorporación de cambios](/rest/pulls#submit-a-review-for-a-pull-request)

#### Solicitudes de Revisión para Solicitudes de Extracción

* [Enumerar los revisores necesarios para una solicitud de incorporación de cambios](/rest/pulls#list-requested-reviewers-for-a-pull-request)
* [Solicitar revisores para una solicitud de incorporación de cambios](/rest/pulls#request-reviewers-for-a-pull-request)
* [Eliminar revisores solicitados para una solicitud de incorporación de cambios](/rest/pulls#remove-requested-reviewers-from-a-pull-request)

#### Revisiones de Solicitudes de Extracción

* [Enumerar revisores para una solicitud de incorporación de cambios](/rest/pulls#list-reviews-for-a-pull-request)
* [Crear una revisión para una solicitud de incorporación de cambios](/rest/pulls#create-a-review-for-a-pull-request)
* [Obtener una revisión para una solicitud de incorporación de cambios](/rest/pulls#get-a-review-for-a-pull-request)
* [Actualizar una revisión para una solicitud de incorporación de cambios](/rest/pulls#update-a-review-for-a-pull-request)
* [Enumerar los comentarios para una revisión de una solicitud de incorporación de cambios](/rest/pulls#list-comments-for-a-pull-request-review)

#### Extracciones

* [Enumerar solicitudes de incorporación de cambios](/rest/pulls#list-pull-requests)
* [Creación de una solicitud de incorporación de cambios](/rest/pulls#create-a-pull-request)
* [Obtener una solicitud de incorporación de cambios](/rest/pulls#get-a-pull-request)
* [Actualizar una solicitud de incorporación de cambios](/rest/pulls#update-a-pull-request)
* [Enumerar las confirmaciones en una solicitud de incorporación de cambios](/rest/pulls#list-commits-on-a-pull-request)
* [Enumerar los archivos en una solicitud de incorporación de cambios](/rest/pulls#list-pull-requests-files)
* [Comprobar si se ha combinando una solicitud de incorporación de cambios](/rest/pulls#check-if-a-pull-request-has-been-merged)
* [Combinar una solicitud de incorporación de cambios (Botón Fusionar mediante combinación)](/rest/pulls#merge-a-pull-request)

#### Reacciones

* [Eliminar una reacción](/rest/reactions)
* [Enumerar las reacciones a un comentario de una confirmación](/rest/reactions#list-reactions-for-a-commit-comment)
* [Crear una reacción para el comentario de una confirmación](/rest/reactions#create-reaction-for-a-commit-comment)
* [Enumerar las reacciones a una incidencia](/rest/reactions#list-reactions-for-an-issue)
* [Crear una reacción para una incidencia](/rest/reactions#create-reaction-for-an-issue)
* [Enumerar las reacciones al comentario de una incidencia](/rest/reactions#list-reactions-for-an-issue-comment)
* [Crear una reacción para el comentario de una incidencia](/rest/reactions#create-reaction-for-an-issue-comment)
* [Enumerar las reacciones para el comentario de revisión de una solicitud de incorporación de cambios](/rest/reactions#list-reactions-for-a-pull-request-review-comment)
* [Crear una reacción para un comentario de revisión de una solicitud de incorporación de cambios](/rest/reactions#create-reaction-for-a-pull-request-review-comment)
* [Enumerar las reacciones a un comentario de debate de equipo](/rest/reactions#list-reactions-for-a-team-discussion-comment)
* [Crear una reacción para un comentario de debate de equipo](/rest/reactions#create-reaction-for-a-team-discussion-comment)
* [Enumerar las reacciones a un debate de equipo](/rest/reactions#list-reactions-for-a-team-discussion)
* [Crear una reacción para un debate de equipo](/rest/reactions#create-reaction-for-a-team-discussion)
* [Eliminar la reacción a un comentario de una confirmación](/rest/reactions#delete-a-commit-comment-reaction)
* [Eliminar la reacción a una incidencia](/rest/reactions#delete-an-issue-reaction)
* [Eliminar la reacción a un comentario de una confirmación](/rest/reactions#delete-an-issue-comment-reaction)
* [Eliminar la reacción a un comentario de una solicitud de incorporación de cambios](/rest/reactions#delete-a-pull-request-comment-reaction)
* [Eliminar la reacción a un debate de equipo](/rest/reactions#delete-team-discussion-reaction)
* [Eliminar la reacción a un comentario de debate de equipo](/rest/reactions#delete-team-discussion-comment-reaction)

#### Repositorios

* [Enumerar los repositorios de una organización](/rest/repos#list-organization-repositories)
* [Crear un repositorio para el usuario autenticado](/rest/repos#create-a-repository-for-the-authenticated-user)
* [Obtener un repositorio](/rest/repos#get-a-repository)
* [Actualizar un repositorio](/rest/repos#update-a-repository)
* [Eliminar un repositorio](/rest/repos#delete-a-repository)
* [Comparar dos confirmaciones](/rest/commits#compare-two-commits)
* [Enumerar los colaboradores del repositorio](/rest/repos#list-repository-contributors)
* [Enumerar las bifurcaciones](/rest/repos#list-forks)
* [Crear una bifurcación](/rest/repos#create-a-fork)
* [Enumerar los lenguajes de un repositorio](/rest/repos#list-repository-languages)
* [Enumerar las etiquetas de un repositorio](/rest/repos#list-repository-tags)
* [Enumerar los equipos de un repositorio](/rest/repos#list-repository-teams)
* [Transferir un repositorio](/rest/repos#transfer-a-repository)
* [Enumerar los repositorios públicos](/rest/repos#list-public-repositories)
* [Enumerar los repositorios para el usuario autenticado](/rest/repos#list-repositories-for-the-authenticated-user)
* [Enumerar los repositorios para un usuario](/rest/repos#list-repositories-for-a-user)
* [Crear un repositorio mediante una plantilla de repositorio](/rest/repos#create-repository-using-a-repository-template)

#### Actividad del Repositorio

* [Enumerar Stargazers](/rest/activity#list-stargazers)
* [Enumerar observadores](/rest/activity#list-watchers)
* [Enumerar los repositorios que el usuario ha marcado con una estrella](/rest/activity#list-repositories-starred-by-a-user)
* [Comprobar si el usuario autenticado ha marcado el repositorio con una estrella](/rest/activity#check-if-a-repository-is-starred-by-the-authenticated-user)
* [Marcar un repositorio con una estrella para el usuario autenticado](/rest/activity#star-a-repository-for-the-authenticated-user)
* [Quitar la estrella de un repositorio para el usuario autenticado](/rest/activity#unstar-a-repository-for-the-authenticated-user)
* [Enumerar los repositorios que el usuario inspecciona](/rest/activity#list-repositories-watched-by-a-user)

{% ifversion fpt or ghec %}
#### Correcciones de Seguridad Automatizadas de un Repositorio

* [Habilitar las correcciones de seguridad automatizadas](/rest/repos#enable-automated-security-fixes)
* [Deshabilitar las correcciones de seguridad automatizadas](/rest/repos#disable-automated-security-fixes) {% endif %}

#### Ramas de los Repositorios

* [Enumerar ramas](/rest/branches#list-branches)
* [Obtener una rama](/rest/branches#get-a-branch)
* [Obtener la protección de una rama](/rest/branches#get-branch-protection)
* [Actualizar la protección de una rama](/rest/branches#update-branch-protection)
* [Eliminar la protección de una rama](/rest/branches#delete-branch-protection)
* [Obtener la protección administrativa de una rama](/rest/branches#get-admin-branch-protection)
* [Establecer la protección administrativa de una rama](/rest/branches#set-admin-branch-protection)
* [Eliminar la protección administrativa de una rama](/rest/branches#delete-admin-branch-protection)
* [Obtener la protección de la revisión de una solicitud de incorporación de cambios](/rest/branches#get-pull-request-review-protection)
* [Actualizar la protección de la revisión de una solicitud de incorporación de cambios](/rest/branches#update-pull-request-review-protection)
* [Eliminar la protección de la revisión de una solicitud de incorporación de cambios](/rest/branches#delete-pull-request-review-protection)
* [Obtener la protección de firma de una confirmación](/rest/branches#get-commit-signature-protection)
* [Crear la protección de firma de una confirmación](/rest/branches#create-commit-signature-protection)
* [Eliminar la protección de firma de una confirmación](/rest/branches#delete-commit-signature-protection)
* [Obtener la protección de las comprobaciones de estado](/rest/branches#get-status-checks-protection)
* [Actualizar la protección para la comprobación de estado](/rest/branches#update-status-check-protection)
* [Eliminar la protección de la comprobación de estado](/rest/branches#remove-status-check-protection)
* [Obtener todos los contextos de comprobación de estado](/rest/branches#get-all-status-check-contexts)
* [Agregar un contexto de comprobación de estado](/rest/branches#add-status-check-contexts)
* [Establecer el contexto de comprobación de estado](/rest/branches#set-status-check-contexts)
* [Quitar los contextos de comprobación de estado](/rest/branches#remove-status-check-contexts)
* [Obtener restricciones de acceso](/rest/branches#get-access-restrictions)
* [Eliminar restricciones de acceso](/rest/branches#delete-access-restrictions)
* [Enumerar los equipos con acceso a la rama protegida](/rest/repos#list-teams-with-access-to-the-protected-branch)
* [Agregar restricciones de acceso a equipos](/rest/branches#add-team-access-restrictions)
* [Establecer restricciones de acceso a equipos](/rest/branches#set-team-access-restrictions)
* [Quitar restricciones de acceso a equipos](/rest/branches#remove-team-access-restrictions)
* [Enumerar las restricciones de usuario para la rama protegida](/rest/repos#list-users-with-access-to-the-protected-branch)
* [Agregar restricciones de acceso para el usuario](/rest/branches#add-user-access-restrictions)
* [Establecer restricciones de acceso para el usuario](/rest/branches#set-user-access-restrictions)
* [Quitar restricciones de acceso para el usuario](/rest/branches#remove-user-access-restrictions)
* [Combinar una bifurcación](/rest/branches#merge-a-branch)

#### Colaboradores del Repositorio

* [Enumerar los colaboradores del repositorio](/rest/collaborators#list-repository-collaborators)
* [Comprobar si un usuario es colaborador de un repositorio](/rest/collaborators#check-if-a-user-is-a-repository-collaborator)
* [Agregar un colaborador del repositorio](/rest/collaborators#add-a-repository-collaborator)
* [Quitar a un colaborador del repositorio](/rest/collaborators#remove-a-repository-collaborator)
* [Obtener permisos del repositorio para un usuario](/rest/collaborators#get-repository-permissions-for-a-user)

#### Comentarios de Confirmaciones de un Repositorio

* [Enumerar los comentarios de confirmación en un repositorio](/rest/commits#list-commit-comments-for-a-repository)
* [Obtener un comentario de confirmación](/rest/commits#get-a-commit-comment)
* [Actualizar un comentario de confirmación](/rest/commits#update-a-commit-comment)
* [Eliminar un comentario de confirmación](/rest/commits#delete-a-commit-comment)
* [Enumerar los comentarios de confirmación](/rest/commits#list-commit-comments)
* [Crear un comentario de confirmación](/rest/commits#create-a-commit-comment)

#### Confirmaciones de Repositorio

* [Enumeración de las confirmaciones](/rest/commits#list-commits)
* [Obtener una confirmación](/rest/commits#get-a-commit)
* [Enumerar las ramas para la confirmación principal](/rest/commits#list-branches-for-head-commit)
* [Enumerar las solicitudes de incorporación de cambios asociadas con una confirmación](/rest/repos#list-pull-requests-associated-with-commit)

#### Comunidad del Repositorio

* [Obtener el código de conducta de un repositorio](/rest/codes-of-conduct#get-the-code-of-conduct-for-a-repository) {% ifversion fpt or ghec %}
* [Obtener las métricas de perfil de la comunidad](/rest/metrics#get-community-profile-metrics) {% endif %}

#### Contenido de los Repositorios

* [Descargar un archivo de un repositorio](/rest/repos#download-a-repository-archive)
* [Obtener el contenido de un repositorio](/rest/repos#get-repository-content)
* [Crear o actualizar contenido de archivo](/rest/repos#create-or-update-file-contents)
* [Eliminar un archivo](/rest/repos#delete-a-file)
* [Obtener el archivo Léame de un repositorio](/rest/repos#get-a-repository-readme)
* [Obtener la licencia para un repositorio](/rest/licenses#get-the-license-for-a-repository)

#### Envíos de Evento de un Repositorio

* [Crear un evento de envío de un repositorio](/rest/repos#create-a-repository-dispatch-event)

#### Ganchos de Repositorio

* [Enumerar los webhooks de un repositorio](/rest/webhooks#list-repository-webhooks)
* [Crear un webhook de repositorio](/rest/webhooks#create-a-repository-webhook)
* [Obtener un webhook de repositorio](/rest/webhooks#get-a-repository-webhook)
* [Actualizar el webhook de un repositorio](/rest/webhooks#update-a-repository-webhook)
* [Eliminar el webhook de un repositorio](/rest/webhooks#delete-a-repository-webhook)
* [Hacer ping al webhook de un repositorio](/rest/webhooks#ping-a-repository-webhook)
* [Probar el webhook del repositorio de inserción](/rest/repos#test-the-push-repository-webhook)

#### Invitaciones a un repositorio

* [Enumerar las invitaciones a un repositorio](/rest/collaborators#list-repository-invitations)
* [Actualizar la invitación a un repositorio](/rest/collaborators#update-a-repository-invitation)
* [Eliminar la invitación a un repositorio](/rest/collaborators#delete-a-repository-invitation)
* [Enumerar las invitaciones a un repositorio para el usuario autenticado](/rest/collaborators#list-repository-invitations-for-the-authenticated-user)
* [Aceptar la invitación a un repositorio](/rest/collaborators#accept-a-repository-invitation)
* [Rechazar la invitación a un repositorio](/rest/collaborators#decline-a-repository-invitation)

#### Claves de Repositorio

* [Enumerar las claves de implementación](/rest/deployments#list-deploy-keys)
* [Crear una clave de implementación](/rest/deployments#create-a-deploy-key)
* [Obtener una clave de implementación](/rest/deployments#get-a-deploy-key)
* [Eliminar una clave de implementación](/rest/deployments#delete-a-deploy-key)

#### Páginas de Repositorio

* [Obtener un sitio de GitHub Pages](/rest/pages#get-a-github-pages-site)
* [Crear un sitio de GitHub Pages](/rest/pages#create-a-github-pages-site)
* [Actualizar la información sobre un sitio de GitHub Pages](/rest/pages#update-information-about-a-github-pages-site)
* [Eliminar un sitio de GitHub Pages](/rest/pages#delete-a-github-pages-site)
* [Enumerar compilaciones de GitHub Pages](/rest/pages#list-github-pages-builds)
* [Solicitar una compilación de GitHub Pages](/rest/pages#request-a-github-pages-build)
* [Obtener una compilación de GitHub Pages](/rest/pages#get-github-pages-build)
* [Obtener la última compilación de Pages](/rest/pages#get-latest-pages-build)

{% ifversion ghes %}
#### Ganchos de Pre-recepción de un Repositorio

* [Enumerar los enlaces de recepción previa para un repositorio](/enterprise/user/rest/enterprise-admin#list-pre-receive-hooks-for-a-repository)
* [Obtener un enlace de recepción previa para un repositorio](/enterprise/user/rest/enterprise-admin#get-a-pre-receive-hook-for-a-repository)
* [Actualizar la aplicación de enlaces de recepción previa para un repositorio](/enterprise/user/rest/enterprise-admin#update-pre-receive-hook-enforcement-for-a-repository)
* [Eliminar la aplicación de enlaces de recepción previa para un repositorio](/enterprise/user/rest/enterprise-admin#remove-pre-receive-hook-enforcement-for-a-repository) {% endif %}

#### Lanzamientos de repositorio

* [Lista de versiones](/rest/repos#list-releases)
* [Creación de una versión](/rest/repos#create-a-release)
* [Obtener una versión](/rest/repos#get-a-release)
* [Actualizar una versión](/rest/repos#update-a-release)
* [Eliminar una versión](/rest/repos#delete-a-release)
* [Enumerar recursos de versión](/rest/repos#list-release-assets)
* [Obtener un recurso de versión](/rest/repos#get-a-release-asset)
* [Actualizar un recurso de versión](/rest/repos#update-a-release-asset)
* [Eliminar un recurso de versión](/rest/repos#delete-a-release-asset)
* [Obtener la versión más reciente](/rest/repos#get-the-latest-release)
* [Obtener una versión por nombre de etiqueta](/rest/repos#get-a-release-by-tag-name)

#### Estadísticas de Repositorio

* [Obtener la actividad de confirmaciones semanal](/rest/metrics#get-the-weekly-commit-activity)
* [Obtener la actividad de confirmaciones del último año](/rest/metrics#get-the-last-year-of-commit-activity)
* [Obtener la actividad de confirmaciones de todos los colaboradores](/rest/metrics#get-all-contributor-commit-activity)
* [Obtener el recuento semanal de confirmaciones](/rest/metrics#get-the-weekly-commit-count)
* [Obtener el recuento diario de confirmaciones por hora](/rest/metrics#get-the-hourly-commit-count-for-each-day)

{% ifversion fpt or ghec %}
#### Alertas de Vulnerabilidad en Repositorios

* [Habilitar las alertas de vulnerabilidades](/rest/repos#enable-vulnerability-alerts)
* [Deshabilitar las alertas de vulnerabilidades](/rest/repos#disable-vulnerability-alerts) {% endif %}

#### Root

* [Punto de conexión raíz](/rest#root-endpoint)
* [Emojis](/rest/emojis#emojis)
* [Obtener un estado de límite de frecuencia para el usuario autenticado](/rest/rate-limit#get-rate-limit-status-for-the-authenticated-user)

#### Buscar

* [Código de búsqueda](/rest/search#search-code)
* [Buscar confirmaciones](/rest/search#search-commits)
* [Buscar etiquetas](/rest/search#search-labels)
* [Buscar repositorios](/rest/search#search-repositories)
* [Buscar temas](/rest/search#search-topics)
* [Buscar usuarios](/rest/search#search-users)

#### Estados

* [Obtener el estado combinado para una referencia específica](/rest/commits#get-the-combined-status-for-a-specific-reference)
* [Enumerar los estados de confirmación para una referencia](/rest/commits#list-commit-statuses-for-a-reference)
* [Crear un estado de confirmación](/rest/commits#create-a-commit-status)

#### Debates de Equipo

* [Enumerar debates](/rest/teams#list-discussions)
* [Crear un debate](/rest/teams#create-a-discussion)
* [Obtener un debate](/rest/teams#get-a-discussion)
* [Actualizar un debate](/rest/teams#update-a-discussion)
* [Borrar un debate](/rest/teams#delete-a-discussion)
* [Enumerar los comentarios del debate](/rest/teams#list-discussion-comments)
* [Crear un comentario sobre un debate](/rest/teams#create-a-discussion-comment)
* [Obtener un comentario de un debate](/rest/teams#get-a-discussion-comment)
* [Actualizar un comentario en un debate](/rest/teams#update-a-discussion-comment)
* [Eliminar un comentario de un debate](/rest/teams#delete-a-discussion-comment)

#### Temas

* [Obtener todos los temas de un repositorio](/rest/repos#get-all-repository-topics)
* [Reemplazar todos los temas de un repositorio](/rest/repos#replace-all-repository-topics)

{% ifversion fpt or ghec %}
#### Tráfico

* [Obtener los clones de un repositorio](/rest/metrics#get-repository-clones)
* [Obtener las rutas de referencia principales](/rest/metrics#get-top-referral-paths)
* [Obtener las fuentes de referencia principales](/rest/metrics#get-top-referral-sources)
* [Obtener vistas de página](/rest/metrics#get-page-views) {% endif %}

{% ifversion fpt or ghec %}
#### Bloquear Usuarios

* [Enumerar los usuarios que ha bloqueado el usuario autenticado](/rest/users#list-users-blocked-by-the-authenticated-user)
* [Comprobar si el usuario autenticado ha bloqueado a un usuario](/rest/users#check-if-a-user-is-blocked-by-the-authenticated-user)
* [Enumerar los usuarios bloqueados por una organización](/rest/orgs#list-users-blocked-by-an-organization)
* [Comprobar si una organización ha bloqueado a un usuario](/rest/orgs#check-if-a-user-is-blocked-by-an-organization)
* [Bloquear a un usuario de una organización](/rest/orgs#block-a-user-from-an-organization)
* [Desbloquear a un usuario de una organización](/rest/orgs#unblock-a-user-from-an-organization)
* [Bloquear a un usuario](/rest/users#block-a-user)
* [Desbloquear a un usuario](/rest/users#unblock-a-user) {% endif %}

{% ifversion fpt or ghes or ghec %}
#### Correos electrónicos de usuario

{% ifversion fpt or ghec %}
* [Configurar la visibilidad del correo electrónico principal para el usuario autenticado](/rest/users#set-primary-email-visibility-for-the-authenticated-user) {% endif %}
* [Enumerar las direcciones de correo electrónico para el usuario autenticado](/rest/users#list-email-addresses-for-the-authenticated-user)
* [Agregar direcciones de correo electrónico](/rest/users#add-an-email-address-for-the-authenticated-user)
* [Eliminar direcciones de correo electrónico](/rest/users#delete-an-email-address-for-the-authenticated-user)
* [Enumerar las direcciones de correo electrónico del usuario autenticado](/rest/users#list-public-email-addresses-for-the-authenticated-user) {% endif %}

#### Seguidores del Usuario

* [Enumerar los seguidores de un usuario](/rest/users#list-followers-of-a-user)
* [Enumerar las personas a las que sigue un usuario](/rest/users#list-the-people-a-user-follows)
* [Comprobar si el usuario autenticado sigue a una persona](/rest/users#check-if-a-person-is-followed-by-the-authenticated-user)
* [Seguir a un usuario](/rest/users#follow-a-user)
* [Dejar de seguir a un usuario](/rest/users#unfollow-a-user)
* [Comprobar si el usuario sigue a otro usuario](/rest/users#check-if-a-user-follows-another-user)

#### Utilizar Llaves Gpg

* [Enumerar las claves de GPG para el usuario autenticado](/rest/users#list-gpg-keys-for-the-authenticated-user)
* [Crear una clave de GPG para el usuario autenticado](/rest/users#create-a-gpg-key-for-the-authenticated-user)
* [Obtener una clave de GPG para el usuario autenticado](/rest/users#get-a-gpg-key-for-the-authenticated-user)
* [Eliminar una clave de GPG para el usuario autenticado](/rest/users#delete-a-gpg-key-for-the-authenticated-user)
* [Enumerar las claves de GPG para un usuario](/rest/users#list-gpg-keys-for-a-user)

#### Llaves Públicas de Usuario

* [Enumerar las claves SSH públicas para el usuario autenticado](/rest/users#list-public-ssh-keys-for-the-authenticated-user)
* [Crear una clave SSH pública para el usuario autenticado](/rest/users#create-a-public-ssh-key-for-the-authenticated-user)
* [Obtener una clave SSH pública para el usuario autenticado](/rest/users#get-a-public-ssh-key-for-the-authenticated-user)
* [Eliminar una clave SSH pública para el usuario autenticado](/rest/users#delete-a-public-ssh-key-for-the-authenticated-user)
* [Enumerar las claves públicas para un usuario](/rest/users#list-public-keys-for-a-user)

#### Usuarios

* [Obtener el usuario autenticado](/rest/users#get-the-authenticated-user)
* [Enumerar las instalaciones de aplicaciones accesibles para el token de acceso del usuario](/rest/apps#list-app-installations-accessible-to-the-user-access-token) {% ifversion fpt or ghec %}
* [Enumerar las suscripciones del usuario autenticado](/rest/apps#list-subscriptions-for-the-authenticated-user) {% endif %}
* [Enumerar usuarios](/rest/users#list-users)
* [Obtener un usuario](/rest/users#get-a-user)

{% ifversion fpt or ghec %}
#### Ejecuciones de Flujo de Trabajo

* [Enumerar las ejecuciones de flujo de trabajo de un repositorio](/rest/actions#list-workflow-runs-for-a-repository)
* [Obtener una ejecución de flujo de trabajo](/rest/actions#get-a-workflow-run)
* [Cancelar una ejecución de flujo de trabajo](/rest/actions#cancel-a-workflow-run)
* [Descargar los registros de ejecución de flujo de trabajo](/rest/actions#download-workflow-run-logs)
* [Eliminar los registros de ejecución de flujo de trabajo](/rest/actions#delete-workflow-run-logs)
* [Volver a ejecutar un flujo de trabajo](/rest/actions#re-run-a-workflow)
* [Enumerar las ejecuciones de flujo de trabajo](/rest/actions#list-workflow-runs)
* [Obtener el uso de las ejecuciones de flujo de trabajo](/rest/actions#get-workflow-run-usage) {% endif %}

{% ifversion fpt or ghec %}
#### Workflows

* [Enumerar los flujos de trabajo del repositorio](/rest/actions#list-repository-workflows)
* [Obtener un flujo de trabajo](/rest/actions#get-a-workflow)
* [Obtener el uso de un flujo de trabajo](/rest/actions#get-workflow-usage) {% endif %}

## Información adicional

- "[Acerca de la autenticación en {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github#githubs-token-formats)"

