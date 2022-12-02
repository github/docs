---
title: Autorización de aplicaciones de OAuth
intro: 'Puedes conectar tu identidad {% data variables.product.product_name %} con aplicaciones de terceros mediante OAuth. Al autorizar un {% data variables.product.prodname_oauth_app %}, deberías asegurarte de que confías en la aplicación, revisar quién la desarrolló y revisar los tipos de información a la que desea acceder la aplicación.'
redirect_from:
  - /articles/authorizing-oauth-apps
  - /github/authenticating-to-github/authorizing-oauth-apps
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
ms.openlocfilehash: 7d116f8fc5117cdcbdbd5582e007351c47b2d55d
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/28/2022
ms.locfileid: '148184024'
---
Cuando un {% data variables.product.prodname_oauth_app %} quiere identificarte mediante tu cuenta de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}, verás una página con la información de contacto del desarrollador de la aplicación y una lista de los datos específicos que se están solicitando.

{% ifversion fpt or ghec %}

{% tip %}

**Sugerencia:** Debe [comprobar su dirección de correo electrónico](/articles/verifying-your-email-address) para poder autorizar una {% data variables.product.prodname_oauth_app %}.

{% endtip %}

{% endif %}

## Acceso a {% data variables.product.prodname_oauth_app %}

{% data variables.product.prodname_oauth_apps %} pueden tener acceso de *lectura* o *escritura* a sus datos de {% data variables.product.product_name %}.

- **El acceso de lectura** solo permite que una aplicación *examine los* datos.
- **El acceso de escritura** permite a una aplicación *cambiar* los datos.

{% tip %}

**Sugerencia:** {% data reusables.user-settings.review_oauth_tokens_tip %}

{% endtip %}

### Acerca de los alcances de OAuth

Los *alcances* son grupos de permisos específicos que puede solicitar una {% data variables.product.prodname_oauth_app %} para acceder a datos públicos y no públicos.

Cuando quieres usar una {% data variables.product.prodname_oauth_app %} que se integra con {% data variables.product.product_name %}, la app te permite conocer qué tipo de acceso a tus datos serán necesarios. Si otorgas acceso a la app, la app podrá realizar acciones en tu nombre, como leer o modificar datos. Por ejemplo, si quiere usar una aplicación que solicita el ámbito `user:email`, la aplicación tendrá acceso de solo lectura a las direcciones de correo electrónico privadas. Para obtener más información, consulte "[Acerca de los alcances de {% data variables.product.prodname_oauth_apps %}](/apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps)".

{% tip %}

**Nota:** Actualmente, no se puede definir el alcance del acceso al código fuente como de solo lectura.

{% endtip %}

{% data reusables.apps.oauth-token-limit %}

### Tipos de datos solicitados

Las {% data variables.product.prodname_oauth_apps %} pueden solicitar diferentes tipos de datos.

| Tipo de datos | Descripción |
| --- | --- |
| Estado de confirmación | Puedes otorgar acceso para una app para que informe tu estado de confirmación. El acceso al estado de confirmación permite que las apps determinen si una construcción es exitosa frente a una confirmación específica. Las apps no tendrán acceso a tu código, pero podrán leer y escribir el estado de la información frente a una confirmación específica. |
| Implementaciones | El estado de implementación permite que las apps determinen si una implementación es exitosa frente a una confirmación específica para repositorios públicos y privados. Las apps no tendrán acceso a tu código. |
| Gists | El acceso a [gist](https://gist.github.com) permite que las aplicaciones lean o escriban en los gists públicos y secretos. |
| Enlaces | El acceso a [webhooks](/webhooks) permite a las aplicaciones leer o escribir configuraciones de enlace en repositorios que usted administra. |
| Notificaciones | El acceso a las notificaciones permite que las apps lean tus notificaciones de {% data variables.product.product_name %}, como comentarios sobre propuestas y solicitudes de extracción. Sin embargo, las apps permanecen inhabilitadas para acceder a tus repositorios. |
| Las organizaciones y los equipos | El acceso a organizaciones y equipos permite que las apps accedan y administren la membresía de la organización y del equipo. |
| Datos de usuario personales | Entre los datos del usuario se incluye información que se encuentra en tu perfil de usuario, como tu nombre, dirección de correo electrónico y ubicación. |
| Repositorios | La información del repositorio incluye los nombres de los colaboradores, las ramas que creaste y los archivos actuales dentro de tu repositorio. Las apps pueden solicitar acceso a repositorios públicos o privados a nivel del usuario. |
| Eliminación de repositorio | Las apps pueden solicitar la eliminación de los repositorios que administras,, pero no tendrán acceso a tu código. |{% ifversion projects-oauth-scope %}
| Proyectos | Acceso a instancias de {% data variables.projects.projects_v2 %} del usuario y la organización. Las aplicaciones pueden solicitar acceso de lectura y escritura o de solo lectura. |{% endif %}

## Solicitar permisos actualizados

Cuando las {% data variables.product.prodname_oauth_apps %} solicitan permisos de acceso nuevos, te notificarán sobre las diferencias entre los permisos actuales y los permisos nuevos.

{% ifversion fpt or ghec %}

## {% data variables.product.prodname_oauth_apps %} y organizaciones

Al autorizar una {% data variables.product.prodname_oauth_app %} para tu cuenta personal, también verás cómo afectará la autorización a cada organización de la que seas miembro.

- **Para las organizaciones *con* restricciones de acceso a {% data variables.product.prodname_oauth_app %}, puede solicitar que los administradores de la organización aprueben la aplicación para usarla dentro de la organización.** Si la organización no aprueba la aplicación, esta solo podrá acceder a los recursos públicos de la organización. Si es administrador de la organización, puede [aprobar la aplicación](/articles/approving-oauth-apps-for-your-organization) usted mismo.

- **Para las organizaciones *sin* restricciones de acceso a {% data variables.product.prodname_oauth_app %}, la aplicación se autorizará automáticamente para el acceso a los recursos de la organización.** Por este motivo, debe tener cuidado con qué {% data variables.product.prodname_oauth_apps %} aprueba para que accedan a los recursos de su cuenta personal, así como a los recursos de la organización.

Si perteneces a cualquier organización con el inicio de sesión único (SSO) de SAML habilitado y has creado una identidad vinculada para esa organización con la autenticación a través de SAML en el pasado, debes tener una sesión de SAML activa para cada organización cada vez que autorices un {% data variables.product.prodname_oauth_app %}.

{% note %}

**Nota:** Si tienes problemas con un {% data variables.product.prodname_oauth_app %} o {% data variables.product.prodname_github_app %} autorizados que acceden a una organización protegida por SAML, es posible que tengas que revocar la aplicación de la página [{% data variables.product.prodname_github_apps %} autorizado](https://github.com/settings/applications) o [{% data variables.product.prodname_oauth_apps %} autorizado](https://github.com/settings/apps/authorizations), visitar la organización para autenticarte y establecer una sesión SAML activa y, a continuación, intentar volver a autorizar la aplicación accediendo a ella.

{% endnote %}

## Información adicional

- "[Acerca de las restricciones de acceso a {% data variables.product.prodname_oauth_app %}](/articles/about-oauth-app-access-restrictions)"
- "[Autorización de aplicaciones de GitHub](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-github-apps)"
- "[Compatibilidad con {% data variables.product.prodname_marketplace %}](/articles/github-marketplace-support)"

{% endif %}
