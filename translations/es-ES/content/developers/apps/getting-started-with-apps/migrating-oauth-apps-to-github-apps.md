---
title: Migrar de Apps de OAuth a GitHub Apps
intro: 'Aprende sobre las ventajas de migrarte de tu {% data variables.product.prodname_oauth_app %} a una {% data variables.product.prodname_github_app %} y sobre como migrar una {% data variables.product.prodname_oauth_app %} que no se encuentre listada en {% data variables.product.prodname_marketplace %}. '
redirect_from:
  - /apps/migrating-oauth-apps-to-github-apps
  - /developers/apps/migrating-oauth-apps-to-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Migrate from OAuth Apps
ms.openlocfilehash: 4fea258cc9677401d8212634fdcc04abf22724c9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147081036'
---
Este artículo proporciona los lineamientos para los integradores existentes que están considerando migrarse de una App de OAuth a una GitHub App.

## Razones para cambiar a GitHub Apps

Las [aplicaciones de GitHub](/apps/) son la forma recomendada de integrarse con GitHub, ya que ofrecen muchas ventajas en comparación una integración puramente basada en OAuth:

- Los [permisos personalizados](/apps/differences-between-apps/#requesting-permission-levels-for-resources) hacen referencia a la información específica a la que puede acceder una aplicación de GitHub, lo que permite que la aplicación puedan usarla más personas y organizaciones con directivas de seguridad que en el caso de las aplicaciones de OAuth, que no se pueden restringir con permisos.
- Los [tokens de corta duración](/apps/differences-between-apps/#token-based-identification) proporcionan un método de autenticación más seguro que los tokens de OAuth. Un token de OAuth no caduca hasta que la persona que autorizó la App de OAuth revoque el token. Las GitHub Apps utilizan tokens que caducan rápidamente, lo cual permite tener una ventana de tiempo mucho menor para que se utilicen los tokens que se hayan puesto en riesgo, en caso de existir.
- Los [webhooks centralizados integrados](/apps/differences-between-apps/#webhooks) reciben eventos de todos los repositorios y organizaciones a los que puede acceder la aplicación. Por el contrario, las Apps de OAuth requieren configurar un webhook para cada repositorio y organización que sea accesible para el usuario.
- Las [cuentas de bot](/apps/differences-between-apps/#machine-vs-bot-accounts) no consumen un puesto de{% data variables.product.product_name %} y permanecen instaladas aunque la persona que instaló inicialmente la aplicación deje la organización.
- La compatibilidad integrada con OAuth sigue estando disponible para aplicaciones de GitHub gracias a los [puntos de conexión de usuario a servidor](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/).
- Los [límites de frecuencia de API](/apps/building-github-apps/understanding-rate-limits-for-github-apps/) específicos para las cuentas de bot se escalan junto con la integración.
- Los propietarios del repositorio pueden [instalar aplicaciones de GitHub](/apps/differences-between-apps/#who-can-install-github-apps-and-authorize-oauth-apps) en repositorios de la organización. Si la configuración de una GitHub App tiene permisos que solicitan los recursos de una organización, el propietario de dicha organización debe aprobar la instalación.
- La compatibilidad con la comunidad de código abierto está disponible gracias a las [bibliotecas de Octokit](/rest/overview/libraries) y otros marcos como [Probot](https://probot.github.io/).
- Los integradores que crean GitHub Apps tienen la oportunidad para adoptar un acceso temprano a las API.

## Convertir una App de OAuth en una GitHub App

En estas pautas se asume que ha registrado una aplicación de OAuth{% ifversion fpt or ghec %} que puede aparecer o no aparecer en GitHub Marketplace{% endif %}. A nivel superior, necesitarás llevar a cabo los siguientes pasos:

1. [Revisar los puntos de conexión de API disponibles para las aplicaciones de GitHub](#review-the-available-api-endpoints-for-github-apps)
1. [Diseñar dentro de los límites de frecuencia de la API](#design-to-stay-within-api-rate-limits)
1. [Registrar una aplicación de GitHub nueva](#register-a-new-github-app)
1. [Determinar los permisos que necesitará la aplicación](#determine-the-permissions-your-app-requires)
1. [Suscribirse a webhooks](#subscribe-to-webhooks)
1. [Comprender los distintos métodos de autenticación](#understand-the-different-methods-of-authentication)
1. [Dirigir a los usuarios para instalar su aplicación de GitHub en los repositorios](#direct-users-to-install-your-github-app-on-repositories)
1. [Eliminar cualquier enlace innecesario en los repositorios](#remove-any-unnecessary-repository-hooks)
1. [Animar a los usuarios a revocar el acceso a su aplicación de OAuth](#encourage-users-to-revoke-access-to-your-oauth-app)
1. [Eliminar la aplicación de OAuth](#delete-the-oauth-app)

### Revisar las terminales de la API disponibles para las GitHub Apps

Aunque la mayoría de los puntos de conexión de la [API de REST](/rest) y las consultas [de GraphQL](/graphql) están disponibles para las aplicaciones de GitHub en la actualidad, todavía estamos en proceso de habilitar algunos puntos de conexión. Revise los [puntos de conexión REST disponibles](/rest/overview/endpoints-available-for-github-apps) para asegurarse de que los puntos que necesita son compatibles con las aplicaciones de GitHub. Nota que algunas de las terminales de la API que están habilitadas para las GtiHub Apps permiten que éstas interactúen en nombre del usuario. Consulte "[Solicitudes de usuario a servidor](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-to-server-requests)" para obtener una lista de los puntos de conexión que permiten que una aplicación de GitHub se autentique como usuario.

Te recomendamos revisar la lista de terminales de la API que necesitas tan pronto como te sea posible. Por favor, comunícale a soporte si hay alguna terminal que requieras y que no esté habilitada aún para las {% data variables.product.prodname_github_apps %}.

### Diseñar con apego a los límites de tasa de la API

Las aplicaciones de GitHub usan [reglas flexibles para los límites de frecuencia](/apps/building-github-apps/understanding-rate-limits-for-github-apps/), que pueden aumentar en función del número de repositorios y usuarios de la organización. Una aplicación de GitHub también puede usar [solicitudes condicionales](/rest/overview/resources-in-the-rest-api#conditional-requests) o consolidar solicitudes mediante [GraphQL API](/graphql).

### Registra una GitHub App nueva

Una vez que haya decidido cambiar a las aplicaciones de GitHub, deberá [crear una nueva aplicación de GitHub](/apps/building-github-apps/).

### Determinar los permisos que necesitará tu app

Cuando registras tu GitHub App, necesitarás seleccionar los permisos que requiere cada terminal que se utilice en el código de tu app. Consulte "[Permisos de una aplicación de GitHub](/rest/reference/permissions-required-for-github-apps)" para obtener una lista de los permisos necesarios para cada punto de conexión disponible para las aplicaciones de GitHub.

En la configuración de la aplicación de GitHub, puede especificar si la aplicación necesita acceso a `No Access`, `Read-only` o `Read & Write` para cada tipo de permiso. Los permisos detallados le permiten a tu app obtener acceso específico a el subconjunto de datos que necesites. Te recomendamos especifcar el conjunto de datos más definido que sea posible, el cual proporcione la funcionalidad deseada.

### Suscribirte a los webhooks

Después de que creaste una GitHub App nueva y seleccionaste sus permisos, puedes seleccionar los eventos de webhook a los cuales deseas suscribirte. Consulte "[Editar los permisos de una aplicación de GitHub](/apps/managing-github-apps/editing-a-github-app-s-permissions/)" para obtener información sobre cómo suscribirse a webhooks.

### Entender los diferentes métodos de autenticación

Las GitHub Apps utilizan principalmente una autenticación basada en tokens que caducan después de un periodo de tiempo corto, lo cual proporciona más seguirdad que un token de OAuth que no caduca. Es importante entender los diferentes métodos de autenticación que tienes disponibles cuando necesitas utilizarlos:

* Un **JSON Web Token (JWT)** [se autentica como la aplicación de GitHub](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app). Por ejemplo, puede autenticarse con un **JWT** para capturar los detalles de la instalación de la aplicación o intercambiar el **JWT** por un **token de acceso a la instalación**.
* Un **token de acceso a la instalación**[se autentica como una instalación específica de la aplicación de GitHub](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) (también denominadas solicitudes de servidor a servidor). Por ejemplo, puede autenticarse con un **token de acceso a la instalación** para abrir una incidencia o proporcionar comentarios sobre una solicitud de incorporación de cambios.
* Un **token de acceso de OAuth** se puede [autenticar como un usuario de la aplicación de GitHub](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site) (también denominadas solicitudes de usuario a servidor). Por ejemplo, puedes utilizar un token de acceso de OAuth para autenticarte como un usuario cuando una GitHub App necesite verificar la identidad del usuario o actuar en nombre de un usuario.

El escenario más común es autenticarse como una instalación específica utilizando un **token de acceso a la instalación**.

### Dirigir a los usuarios a instalar tu GitHub App en los repositorios

Una vez que hiciste la transición de una App de OAuth a una GitHub App, necesitarás informar a los usuarios que esta GitHub App se encuentra disponible para su instalación. Por ejemplo, puedes incluir un enlace de instalación para la GitHub App en un letrero de llamada a la acción dentro de tu aplicación. Para facilitar la transición, puedes utilizar parámetros de consulta para identificar a la cuenta de usuario o de organización que esté pasando por el flujo de instalación para tu GitHub App y pre-seleccionar cualquier repositorio al que tuviera acceso tu App de OAuth. Esto les permite a los usuarios instalar tu GitHub App en los repositorios a los que ya tengas acceso.

#### Parámetros de consulta

| Nombre | Descripción |
|------|-------------|
| `suggested_target_id` | **Obligatorio**: identificador del usuario o la organización que está instalando la aplicación de GitHub. |
| `repository_ids[]` | Matriz de las ID de repositorio. Si se omite, seleccionaremos todos los repositorios. La cantidad máxima de repositorios que se pueden pre-seleccionar es de 100. |

#### Example URL (URL de ejemplo)
```
https://github.com/apps/YOUR_APP_NAME/installations/new/permissions?suggested_target_id=ID_OF_USER_OR_ORG&repository_ids[]=REPO_A_ID&repository_ids[]=REPO_B_ID
```

Deberá reemplazar `YOUR_APP_NAME` por el nombre de la aplicación de GitHub y `ID_OF_USER_OR_ORG` por el identificador del usuario o la organización de destino e incluir hasta 100 identificadores de repositorio (`REPO_A_ID` y `REPO_B_ID`). Para obtener una lista de repositorios a los que tiene acceso la aplicación de OAuth, use los puntos de conexión [List repositories for the authenticated user](/rest/reference/repos#list-repositories-for-the-authenticated-user) y [List organization repositories](/rest/reference/repos#list-organization-repositories).

### Eliminar cualquier gancho innecesario en los repositorios

Una vez que ti GitHub App se haya instalado en un repositorio, deberías eliminar cualquier webhook innecesario que haya creado tu App tradicional de OAuth. Si ambas apps están instaladas en un repositorio, puede que se duplique la funcionalidad para el usuario. Para quitar webhooks, puede escuchar el [webhook `installation_repositories`](/webhooks/event-payloads/#installation_repositories) con la acción `repositories_added` y [eliminar un webhook de repositorio](/rest/reference/webhooks#delete-a-repository-webhook) en los repositorios creados en la aplicación de OAuth.

### Animar a los usuarios a que revoquen el acceso a tu App de OAuth

En medida en que vaya creciendo tu base de instalación de la GitHub App, considera exhortar a tus usuarios para revocar el acceso a la integración tradicional de OAuth. Para obtener más información, consulte "[Autorización de aplicaciones de OAuth](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps)".

### Borra la App de OAuth

Para evitar el abuso de las credenciales de las Apps de OAuth, considera borrar la App de OAuth. Esta acción también revocará todas las autorizaciones restantes de la App de OAuth. Para obtener más información, consulte "[Eliminación de una aplicación de OAuth](/developers/apps/managing-oauth-apps/deleting-an-oauth-app)."
