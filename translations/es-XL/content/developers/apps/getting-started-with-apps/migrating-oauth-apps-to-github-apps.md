---
title: Migrar de Apps de OAuth a GitHub Apps
intro: 'Aprende sobre las ventajas de migrarte de tu {% data variables.product.prodname_oauth_app %} a una {% data variables.product.prodname_github_app %} y sobre como migrar una {% data variables.product.prodname_oauth_app %} que no se encuentre listada en {% data variables.product.prodname_marketplace %}.'
redirect_from:
  - /apps/migrating-oauth-apps-to-github-apps
  - /developers/apps/migrating-oauth-apps-to-github-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub Apps
---
Este artículo proporciona los lineamientos para los integradores existentes que están considerando migrarse de una App de OAuth a una GitHub App.


### Razones para cambiar a GitHub Apps

Las [GitHub Apps](/apps/) son la forma recomendada de integrarse con GitHub, ya que ofrecen muchas ventajas sobre una integración puramente basada en OAuth:

- [Permisos detallados](/apps/differences-between-apps/#requesting-permission-levels-for-resources) que se enfocan en la información específica a la que puede acceder una GitHub App, lo cual permite que las personas y organizaciones la utilicen más ampliamente con políticas de seguridad a diferencia de las Apps de OAuth, las cuales no se pueden limitar con permisos.
- [Tokens de vida corta](/apps/differences-between-apps/#token-based-identification) que proporcionan un método de autenticación más segura qu la de los tokens de OAuth. Un token de OAuth no caduca hasta que la persona que autorizó la App de OAuth revoque el token. Las GitHub Apps utilizan tokens que caducan rápidamente, lo cual permite tener una ventana de tiempo mucho menor para que se utilicen los tokens que se hayan puesto en riesgo, en caso de existir.
- [Webhooks integrados y centralizados](/apps/differences-between-apps/#webhooks) que reciben eventos para todos los repositorios y organizaciones a los cuales puede acceder la app. Por el contrario, las Apps de OAuth requieren configurar un webhook para cada repositorio y organización que sea accesible para el usuario.
- [Cuentas Bot](/apps/differences-between-apps/#machine-vs-bot-accounts) que no consument una plaza de {% data variables.product.prodname_ghe_server %} y permanecen instaladas aún cuando la persona que las instaló inicialmente deja la organización.
- El soporte integrado para OAuth aún estará disponible para las GitHub Apps que utilicen [terminales de usuario a servidor](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/).
- Los [límites de tasa de la API](/apps/building-github-apps/understanding-rate-limits-for-github-apps/) dedicados para cuentas bot se escalarán con tu integración.
- Los propietarios de los repositorios pueden [Instalar GitHub Apps](/apps/differences-between-apps/#who-can-install-github-apps-and-authorize-oauth-apps) en repositorios de organización. Si la configuración de una GitHub App tiene permisos que solicitan los recursos de una organización, el propietario de dicha organización debe aprobar la instalación.
- El apoyo de la comunidad de código abierto se encuentra disponible mediante las [bibliotecas Octokit](/v3/libraries/) y mediante otros marcos de trabajo, tales como el [Probot](https://probot.github.io/).
- Los integradores que crean GitHub Apps tienen la oportunidad para adoptar un acceso temprano a las API.

### Convertir una App de OAuth en una GitHub App

Estos lineamientos asumen que has registrado una App de OAuth{% if currentVersion == "free-pro-team@latest" %} que puede o no estar listada en GitHub Marketplace{% endif %}. A nivel superior, necesitarás llevar a cabo los siguientes pasos:

1. [Revisar las terminales de la API disponibles para las Github Apps](#review-the-available-api-endpoints-for-github-apps)
1. [Diseñar con apego a los límites de tasa de la API](#design-to-stay-within-api-rate-limits)
1. [Registrar una GitHub App nueva](#register-a-new-github-app)
1. [Determinar los permisos que necesitará tu app](#determine-the-permissions-your-app-requires)
1. [Suscribirte a los webhooks](#subscribe-to-webhooks)
1. [Entender los diferentes métodos de autenticación](#understand-the-different-methods-of-authentication)
1. [Dirigir a los usuarios a instalar tu GitHub App en los repositorios](#direct-users-to-install-your-github-app-on-repositories)
1. [Eliminar cualquier gancho innecesario en los repositorios](#remove-any-unnecessary-repository-hooks)
1. [Animar a los usuarios a que revoquen el acceso a tu App de OAuth](#encourage-users-to-revoke-access-to-your-oauth-app)

#### Revisar las terminales de la API disponibles para las Github Apps

Mientras que la mayoría de las terminales de la [API de REST](/v3) y de las consultas de [GraphQL](/v4) están disponibles hoy en día para las GitHub Apps, aún estamos en el proceso de habilitar algunas de ellas. Revisa las [terminales disponibles de REST](/v3/apps/available-endpoints/) para garantizar que las terminales que necesitas sean compatibles con las GitHub Apps. Nota que algunas de las terminales de la API que están habilitadas para las GtiHub Apps permiten que éstas interactúen en nombre del usuario. Consulta la sección "[Solicitudes de usuario a servidor](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-to-server-requests)" para encontrar una lista de terminales disponibles para que una GitHub App se autentique como un usuario.

Te recomendamos revisar la lista de terminales de la API que necesitas tan pronto como te sea posible. Por favor, comunícale a soporte si hay alguna terminal que requieras y que no esté habilitada aún para las {% data variables.product.prodname_github_app %}.

#### Diseñar con apego a los límites de tasa de la API

Las GitHub Apps utilizan [reglas móviles para los límites de tasa](/apps/building-github-apps/understanding-rate-limits-for-github-apps/), las cuales pueden incrementar con base en la cantidad de repositorios y usuarios de la organización. Una GitHub App también puede hacer uso de [solicitudes condicionales](/v3/#conditional-requests) o de solicitudes consolidadas si utiliza la [API de GraphQL V4](/v4/).

#### Registrar una GitHub App nueva

Una vez que hayas decidido hacer el cambio hacia GitHub Apps, necesitarás [crear una GitHub App nueva](/apps/building-github-apps/).

#### Determinar los permisos que necesitará tu app

Cuando registras tu GitHub App, necesitarás seleccionar los permisos que requiere cada terminal que se utilice en el código de tu app. Consulta la sección "[Permisos de la GitHub App](/v3/apps/permissions/)" para encontrar un listado de permisos que necesita cada terminal disponible para las GitHub Apps.

En la configuración de tu GitHub App, puedes especificar si tu app necesita acceso de tipo `No Access`, `Read-only`, o `Read & Write` para cada tipo de permiso. Los permisos detallados le permiten a tu app obtener acceso específico a el subconjunto de datos que necesites. Te recomendamos especifcar el conjunto de datos más definido que sea posible, el cual proporcione la funcionalidad deseada.

#### Suscribirte a los webhooks

Después de que creaste una GitHub App nueva y seleccionaste sus permisos, puedes seleccionar los eventos de webhook a los cuales deseas suscribirte. Consulta la sección "[Editar los permisos de una GitHub App](/apps/managing-github-apps/editing-a-github-app-s-permissions/)" para aprender sobre cómo suscribirte a los webhooks.

#### Entender los diferentes métodos de autenticación

Las GitHub Apps utilizan principalmente una autenticación basada en tokens que caducan después de un periodo de tiempo corto, lo cual proporciona más seguirdad que un token de OAuth que no caduca. Es importante entender los diferentes métodos de autenticación que tienes disponibles cuando necesitas utilizarlos:

* Un **Token Web de JSON (JWT)** [ se autentica como la GitHub App](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app). Por ejemplo, puedes autenticarte con un **JWT** para obtener los detalles de instalación de la aplicación o para intercambiar dicho **JWT** por un **token de acceso a la instalación**.
* Un **token de acceso de la instalación** [se autentica como una instalación específica de tu GitHub App](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) (también se les conoce como solicitudes de servidor a servidor). Por ejemplo, puedes autenticarte con un **token de acceso de la instalación** para abrir un informe de problemas o para proporcionar retroalimentación en una solicitud de extracción.
* Un **Token de acceso de OAuth** puede [autenticarse como un usuario de tu GitHub App](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site) (también se les conoce como solicitudes de usuario a servidor). Por ejemplo, puedes utilizar un token de acceso de OAuth para autenticarte como un usuario cuando una GitHub App necesite verificar la identidad del usuario o actuar en nombre de un usuario.

El escenario más común es autenticarse como una instalación específica utilizando un **token de acceso de la instalación**.

#### Dirigir a los usuarios a instalar tu GitHub App en los repositorios

Una vez que hiciste la transición de una App de OAuth a una GitHub App, necesitarás informar a los usuarios que esta GitHub App se encuentra disponible para su instalación. Por ejemplo, puedes incluir un enlace de instalación para la GitHub App en un letrero de llamada a la acción dentro de tu aplicación. Para facilitar la transición, puedes utilizar parámetros de consulta para identificar a la cuenta de usuario o de organización que esté pasando por el flujo de instalación para tu GitHub App y pre-seleccionar cualquier repositorio al que tuviera acceso tu App de OAuth. Esto les permite a los usuarios instalar tu GitHub App en los repositorios a los que ya tengas acceso.

##### Parámetros de consulta

| Nombre                | Descripción                                                                                                                                                       |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `suggested_target_id` | **Requerido**: La ID del usuario u organización que está instalando tu GitHub App.                                                                                |
| `repository_ids[]`    | Matriz de las ID de repositorio. Si se omite, seleccionaremos todos los repositorios. La cantidad máxima de repositorios que se pueden pre-seleccionar es de 100. |

##### URL de Ejemplo
```
https://github.com/apps/YOUR_APP_NAME/installations/new/permissions?suggested_target_id=ID_OF_USER_OR_ORG&repository_ids[]=REPO_A_ID&repository_ids[]=REPO_B_ID
```

Necesitarás reemplazar a `YOUR_APP_NAME` con el nombre de tu GitHub App, a `ID_OF_USER_OR_ORG` con la ID de tu usuario u organización destino, e incluir hasta 100 ID de repositorio (`REPO_A_ID` y `REPO_B_ID`). Para obtener una lista de repositorios a los cuales tiene acceso tu aplicación de OAuth, utiliza las terminales [Listar repositorios para el usuario autenticado](/v3/repos/#list-repositories-for-the-authenticated-user) y [Listar repositorios de la organización](/v3/repos/#list-organization-repositories).

#### Eliminar cualquier gancho innecesario en los repositorios

Una vez que ti GitHub App se haya instalado en un repositorio, deberías eliminar cualquier webhook innecesario que haya creado tu App tradicional de OAuth. Si ambas apps están instaladas en un repositorio, puede que se duplique la funcionalidad para el usuario. Para eliminar los webhooks, puedes escuchar al [webhook de `installation_repositories`](/webhooks/event-payloads/#installation_repositories) con la acción `repositories_added` y al [webhook para borrar un repositorio](/v3/repos/hooks/#delete-a-repository-webhook) en los repositorios que creó tu App de OAuth.

#### Animar a los usuarios a que revoquen el acceso a tu App de OAuth

En medida en que vaya creciendo tu base de instalación de la GitHub App, considera exhortar a tus usuarios para [revocar el acceso](/articles/authorizing-oauth-apps/) a la integración tradicional de OAuth.
