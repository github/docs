---
title: Alcances para las Apps de OAuth
intro: '{% data reusables.shortdesc.understanding_scopes_for_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps
  - /apps/building-oauth-apps/scopes-for-oauth-apps
  - /apps/building-oauth-apps/understanding-scopes-for-oauth-apps
  - /developers/apps/scopes-for-oauth-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - OAuth Apps
ms.openlocfilehash: 8398a7162b3ab77677651d5404c0738c6d0877b1
ms.sourcegitcommit: 34d500fe45b362043b4b4685d6705a7bfb484d11
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/15/2022
ms.locfileid: '148164368'
---
Cuando estás configurando una App de OAuth en GitHub, los alcances solicitados se muestran al usuario en el formato de autorización.

{% note %}

**Nota:** Si va a compilar una aplicación de GitHub, no es necesario proporcionar alcances en la solicitud de autorización. Para obtener más información sobre el tema, consulte "[Identificación y autorización de usuarios para aplicaciones de GitHub](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)".

{% endnote %}

Si tu {% data variables.product.prodname_oauth_app %} no tiene acceso a un buscador, tal como una herramienta de CLI, entonces no necesitarás especificar un alcance para que los usuarios se autentiquen dicha app. Para obtener más información, consulte "[Autorización de aplicaciones de OAuth](/developers/apps/authorizing-oauth-apps#device-flow)".

Verifica los encabezados para ver qué alcances de OAuth tienes, y cuáles acepta la acción de la API:

```shell
$ curl -H "Authorization: Bearer OAUTH-TOKEN" {% data variables.product.api_url_pre %}/users/codertocat -I
HTTP/2 200
X-OAuth-Scopes: repo, user
X-Accepted-OAuth-Scopes: user
```

* `X-OAuth-Scopes` enumera los alcances que el token ha autorizado.
* `X-Accepted-OAuth-Scopes` enumera los alcances que comprueba la acción.

## Ámbitos disponibles

Nombre | Descripción -----|-----------|{% ifversion not ghae %} **`(no scope)`** | Concede acceso de solo lectura a la información pública (incluida la información del perfil de usuario, la información del repositorio y los gists){% endif %}{% ifversion ghes or ghae %} **`site_admin`** | Concede a los administradores del sitio acceso a los [puntos de conexión de la API de administración de {% data variables.product.prodname_ghe_server %}](/rest/reference/enterprise-admin).{% endif %} **`repo`** | Concede acceso total a los repositorios públicos{% ifversion ghec or ghes or ghae %}, internos{% endif %} y privados, incluido acceso de lectura y escritura al código, estados de confirmación, invitaciones del repositorio, colaboradores, estados de implementación y webhooks de repositorio. **Nota**: Además de los recursos relacionados con el repositorio, el ámbito `repo` también concede acceso para administrar recursos propiedad de la organización, incluidos proyectos, invitaciones, pertenencias a equipos y webhooks. Este ámbito también concede la capacidad de administrar proyectos propiedad de los usuarios.
&emsp;`repo:status`| Otorga acceso de lectura/escritura a los estados de confirmación en los repositorios {% ifversion fpt %}públicos y privados{% elsif ghec or ghes %}públicos, privados e internos{% elsif ghae %}privados e internos{% endif %}. Este alcance solo se necesita para otorgar acceso a otros usuarios o servicios a los estados de las confirmaciones en repositorios privados *sin* otorgarles acceso al código.
&emsp;`repo_deployment`| Concede acceso a los [estados de implementación](/rest/reference/repos#deployments) de repositorios {% ifversion not ghae %}públicos{% else %}internos{% endif %} y privados. Este alcance solo es necesario para conceder acceso a otros usuarios o servicios a los estados de implementación *sin* conceder acceso al código.{% ifversion not ghae %} &emsp;`public_repo`| Limita el acceso a los repositorios públicos. Esto incluye el acceso de lectura/escritura al código, estados de las confirmaciones, proyectos de repositorio, colaboradores y estados de despliegue para los repositorios públicos y para las organizaciones. También es necesario para marcar con asterisco los repositorios públicos.{% endif %} &emsp;`repo:invite` | Concede capacidades para aceptar o rechazar las invitaciones de colaboración en un repositorio. Este alcance solo es necesario para otorgar acceso a otros usuarios o servicios a las invitaciones *sin* otorgar acceso al código.{% ifversion fpt or ghes or ghec %} &emsp;`security_events` | Concesiones: <br/> acceso de lectura y escritura a eventos de seguridad en la [API de {% data variables.product.prodname_code_scanning %}](/rest/reference/code-scanning) {%- ifversion ghec %}<br/> acceso de lectura y escritura a eventos de seguridad en la [API de {% data variables.product.prodname_secret_scanning %}](/rest/reference/secret-scanning){%- endif %} <br/> Este alcance solo es necesario para conceder acceso a otros usuarios o servicios a eventos de seguridad *sin* conceder acceso al código.{% endif %} **`admin:repo_hook`** | Concede acceso de lectura, escritura, ping y eliminación a los enlaces de repositorios {% ifversion fpt %}públicos o privados{% elsif ghec or ghes %}públicos, privados o internos{% elsif ghae %}privados o internos{% endif %}. {% ifversion fpt or ghec or ghes %}Los alcances `repo` y `public_repo` conceden{% else %}El alcance concede{% endif %} acceso total a los repositorios, incluidos los enlaces de repositorio. Use el alcance `admin:repo_hook` para limitar el acceso solo a los enlaces de repositorio.
&emsp;`write:repo_hook` | Otorga acceso de lectura, escritura y ping a los enlaces en repositorios {% ifversion fpt %}públicos o privados{% elsif ghec or ghes %}públicos, privados o internos{% elsif ghae %}privados o internos{% endif %}.
&emsp;`read:repo_hook`| Otorga acceso de lectura y ping a los enlaces en repositorios {% ifversion fpt %}públicos o privados{% elsif ghec or ghes %}públicos, privados o internos{% elsif ghae %}privados o internos{% endif %}.
**`admin:org`** | Para administrar totalmente la organización y los equipos, proyectos y pertenencias.
&emsp;`write:org`| Acceso de lectura y escritura a la pertenencia de la organización, los proyectos de la organización y la pertenencia a equipos.
&emsp;`read:org`| Acceso de solo lectura a la pertenencia de la organización, los proyectos de la organización y la pertenencia a equipos.
**`admin:public_key`** | Administre totalmente las claves públicas.
&emsp;`write:public_key`| Cree, enumere y vea los detalles de claves públicas.
&emsp;`read:public_key`| Enumere y vea los detalles de claves públicas.
**`admin:org_hook`** | Otorga acceso de lectura, escritura, ping y borrado a los enlaces de la organización. **Nota:** Los tokens de OAuth solo podrán realizar estas acciones en los enlaces de la organización que se hayan creado con la aplicación de OAuth. Un {% data variables.product.pat_generic_caps %} solo podrá llevar a cabo estas acciones en los ganchos de la organización que cree un usuario.
**`gist`** | Otorga acceso de escritura a los gists.
**`notifications`** | Concesiones: <br/>* acceso de lectura a las notificaciones de un usuario <br/>* acceso de marcación y lectura a subprocesos <br/>* acceso de inspección y anulación de inspección de un repositorio <br/>* acceso de lectura, escritura y eliminación a suscripciones de subprocesos
**`user`** | Otorga acceso de lectura/escritura únicamente a la información de perfiles.  Tenga en cuenta que este alcance incluye `user:email` y `user:follow`.
&emsp;`read:user`| Otorga acceso para leer los datos del perfil de un usuario.
&emsp;`user:email`| Otorga acceso de lectura a las direcciones de correo electrónico de un usuario.
&emsp;`user:follow`| Concede acceso para seguir o dejar de seguir a otros usuarios.{% ifversion projects-oauth-scope %} **`project`** | Concede acceso de lectura y escritura a instancias de {% data variables.projects.projects_v2 %} de usuario y organización.
&emsp;`read:project`| Concede acceso de solo lectura a instancias de {% data variables.projects.projects_v2 %} de usuario y organización (beta).{% endif %} **`delete_repo`** | Concede acceso para eliminar repositorios administrables.
**`write:discussion`** | Permite el acceso de lectura y escritura a debates de equipo.
&emsp;`read:discussion` | Permite el acceso de lectura a debates de equipo.
**`write:packages`** | Otorga acceso para cargar o publicar un paquete en {% data variables.product.prodname_registry %}. Para obtener más información, consulte "[Publicación de un paquete](/github/managing-packages-with-github-packages/publishing-a-package)".
**`read:packages`** | Otorga acceso para descargar o instalar paquetes desde {% data variables.product.prodname_registry %}. Para obtener más información, consulte "[Instalación de un paquete](/github/managing-packages-with-github-packages/installing-a-package)".
**`delete:packages`** | Otorga acceso para eliminar paquetes de {% data variables.product.prodname_registry %}. Para más información, consulta "[Eliminación y restauración de un paquete](/packages/learn-github-packages/deleting-and-restoring-a-package)".
**`admin:gpg_key`** | Administración completa de claves de GPG.
&emsp;`write:gpg_key`| Cree, enumere y visualice los detalles de claves GPG.
&emsp;`read:gpg_key`| Enumere y vea los detalles de claves GPG.{% ifversion fpt or ghec %} **`codespace`** | Concede la capacidad de crear y administrar Codespaces. Los codespaces pueden exponer un GITHUB_TOKEN que puede tener un conjunto de alcances diferente. Para más información, consulta "[Seguridad en {% data variables.product.prodname_github_codespaces %}](/codespaces/codespaces-reference/security-in-github-codespaces#authentication)".{% endif %} **`workflow`** | Concede la capacidad de agregar y actualizar archivos de flujo de trabajo de {% data variables.product.prodname_actions %}. Los archivos de flujo de trabajo pueden confirmarse sin este alcance en caso de que el mismo archivo (con la misma ruta y el mismo contenido) exista en otra rama en el mismo repositorio. Los archivos de flujo de trabajo pueden exponer `GITHUB_TOKEN`, que pueden tener un conjunto diferente de alcances. Para obtener más información, consulta "[Autenticación en un flujo de trabajo](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)". {% ifversion not fpt %} **`admin:enterprise`** | Proporciona control total de la funcionalidad empresarial. Para obtener más información, consulta "[Administración de cuentas empresariales](/graphql/guides/managing-enterprise-accounts)" en la documentación de la API de GraphQL.<br><br>Incluye `manage_runners:enterprise`{% ifversion ghec or ghes > 3.3 %}, `manage_billing:enterprise`,{% endif %} y `read:enterprise`. &emsp;`manage_runners:enterprise` | Proporciona control total sobre los ejecutores autohospedados dentro de la empresa. Para más información, consulte [Seguridad del ejecutor autohospedado con repositorios públicos](/actions/hosting-your-own-runners/about-self-hosted-runners). {% ifversion ghec or ghes > 3.3 %} &emsp;`manage_billing:enterprise` | Lectura y escritura de datos de facturación de la empresa. Para obtener más información, consulta "[Facturación](/rest/billing)" en la documentación de la API de REST. {% endif %} &emsp;`read:enterprise` | Lectura de todos los datos de un perfil de empresa. No incluye los datos de perfil de los miembros de la empresa ni de las organizaciones.{% endif %}{% ifversion read-audit-scope %} **`read:audit_log`** | Lee los datos del registro de auditoría.{% endif %} {% note %}

**Nota:** La aplicación de OAuth puede solicitar los alcances en el redireccionamiento inicial. Puede especificar varios alcances si los separa con un espacio utilizando `%20`:

    https://github.com/login/oauth/authorize?
      client_id=...&
      scope=user%20repo_deployment

{% endnote %}

## Alcances solicitados y otorgados

El atributo `scope` enumera los alcances vinculados al token que otorgó el usuario. Normalmente, estos alcances serán idénticos a lo que solicitaste.
Sin embargo, los usuarios pueden editar sus alcances, lo cual
es efectivo para otorgar a la organización menos accesos de los que se solicitó en un principio. Además, los usuarios pueden editar los alcances de los tokens después de completar un flujo de OAuth.
Debe conocer esta posibilidad y ajustar el comportamiento de la aplicación en consecuencia.

Es importante gestionar los casos de error en donde un usuario elige otorgarle menos acceso del que solicitó en un principio. Por ejemplo, las aplicaciones pueden advertir o comunicar de cualquier otra forma a sus usuarios que se ha reducido el rendimiento o que no son capaces de realizar alguna acción.

Además, las aplicaciones siempre pueden redirigir a los usuarios a través del flujo para obtener permisos adicionales, pero no olvide que dichos usuarios siempre pueden negarse a hacerlo.

Consulte la [Guía de aspectos básicos de la autenticación](/guides/basics-of-authentication/), que proporciona sugerencias sobre cómo controlar alcances de tokens modificables.

## Alcances normalizados

Cuando se solicitan varios alcances, el token se guarda con una lista de alcances normalizada y se descartan aquellos que se incluyen de manera implícita en otro alcance solicitado. Por ejemplo, la solicitud `user,gist,user:email` dará como resultado un token con únicamente los alcances `user` y `gist`, porque el acceso concedido con el alcance `user:email` se incluye en el alcance `user`.
