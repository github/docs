---
title: Autorizar aplicaciones OAuth
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
---

Cuando una {% data variables.product.prodname_oauth_app %} quiere identificarte mediante tu cuenta de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, verás una página con la información de contacto del desarrollador de la app y una lista de los datos específicos que se están solicitando.

{% ifversion fpt or ghec %}

{% tip %}

**Sugerencia:** Debes [verificar tu dirección de correo electrónico](/articles/verifying-your-email-address) antes de que puedas autorizar una {% data variables.product.prodname_oauth_app %}.

{% endtip %}

{% endif %}

## Acceso a {% data variables.product.prodname_oauth_app %}

Las {% data variables.product.prodname_oauth_apps %} pueden tener acceso de *lectura* o *escritura* en tus datos de {% data variables.product.product_name %}.

- El **acceso de lectura** solo permite que una app *mire* tus datos.
- El **acceso de escritura** permite que una app *cambie* tus datos.

{% tip %}

**Sugerencia:** {% data reusables.user-settings.review_oauth_tokens_tip %}

{% endtip %}

### Acerca de los alcances de OAuth

Los *alcances* son los grupos de permiso denominados que una {% data variables.product.prodname_oauth_app %} puede solicitar para acceder a datos públicos y no públicos.

Cuando quieres usar una {% data variables.product.prodname_oauth_app %} que se integra con {% data variables.product.product_name %}, la app te permite conocer qué tipo de acceso a tus datos serán necesarios. Si otorgas acceso a la app, la app podrá realizar acciones en tu nombre, como leer o modificar datos. Por ejemplo, si quieres usar una app que solicita el alcance `usuario:correo electrónico`, la app solo tendrá acceso de lectura a tus direcciones de correo electrónico privado. Para obtener más información, consulta la sección "[Acerca de los alcances para {% data variables.product.prodname_oauth_apps %}](/apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps)".

{% tip %}

**Nota:** Actualmente, no puedes demarcar el acceso al código fuente a solo lectura.

{% endtip %}

{% data reusables.apps.oauth-token-limit %}

### Tipos de datos solicitados

Las {% data variables.product.prodname_oauth_apps %} pueden solicitar diferentes tipos de datos.

| Tipos de datos               | Descripción                                                                                                                                                                                                                                                                                                                                                   |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Estado de confirmación       | Puedes otorgar acceso para una app para que informe tu estado de confirmación. El acceso al estado de confirmación permite que las apps determinen si una construcción es exitosa frente a una confirmación específica. Las apps no tendrán acceso a tu código, pero podrán leer y escribir el estado de la información frente a una confirmación específica. |
| Implementaciones             | El estado de implementación permite que las apps determinen si una implementación es exitosa frente a una confirmación específica para repositorios públicos y privados. Las apps no tendrán acceso a tu código.                                                                                                                                              |
| Gists                        | El acceso a [Gist](https://gist.github.com) permite que las apps lean o escriban en tus Gists públicos y secretos.                                                                                                                                                                                                                                            |
| Ganchos                      | El acceso a [webhooks](/webhooks) permite que las apps lean o escriban configuraciones de gancho en los repositorios que administras.                                                                                                                                                                                                                         |
| Notificaciones               | El acceso a las notificaciones permite que las apps lean tus notificaciones de {% data variables.product.product_name %}, como comentarios sobre propuestas y solicitudes de extracción. Sin embargo, las apps permanecen inhabilitadas para acceder a tus repositorios.                                                                                      |
| Organizaciones y equipos     | El acceso a organizaciones y equipos permite que las apps accedan y administren la membresía de la organización y del equipo.                                                                                                                                                                                                                                 |
| Datos personales del usuario | Entre los datos del usuario se incluye información que se encuentra en tu perfil de usuario, como tu nombre, dirección de correo electrónico y ubicación.                                                                                                                                                                                                     |
| Repositorios                 | La información del repositorio incluye los nombres de los colaboradores, las ramas que creaste y los archivos actuales dentro de tu repositorio. Las apps pueden solicitar acceso a repositorios públicos o privados a nivel del usuario.                                                                                                                     |
| Eliminación de repositorio   | Las apps pueden solicitar la eliminación de los repositorios que administras,, pero no tendrán acceso a tu código. |{% ifversion projects-oauth-scope %}
| Proyectos                    | Acceso a los proyectos (beta) de usuarios y organizaciones. Las apps pueden solicitar ya sea un acceso de lectura/escritura o de solo lectura. 
{% endif %}

## Solicitar permisos actualizados

Cuando las {% data variables.product.prodname_oauth_apps %} solicitan permisos de acceso nuevos, te notificarán sobre las diferencias entre los permisos actuales y los permisos nuevos.

{% ifversion fpt or ghec %}

## {% data variables.product.prodname_oauth_apps %} y organizaciones

Cuando autorizas una {% data variables.product.prodname_oauth_app %} para tu cuenta personal, también verás cómo esta autorización afectará a cada organización de la cuál seas miembro.

- **Para organizaciones *con restricciones de acceso a * {% data variables.product.prodname_oauth_app %}, puedes solicitar que los administradores de la organización aprueben la aplicación para usar en esa organización.** Si la organización no aprueba la aplicación, la aplicación solo podrá acceder a los recursos públicos de la organización. Si eres administrador de una organización, puedes [aprobar la aplicación](/articles/approving-oauth-apps-for-your-organization) por tu cuenta.

- **En el caso de las organizaciones *sin* restricciones de aceso a {% data variables.product.prodname_oauth_app %}, la aplicación se autorizará automáticamente para el acceso alos recursos de dicha organización.** Es por esto que debes tener cuidado con qué {% data variables.product.prodname_oauth_apps %} apruebas para que tengan acceso a los recursos de tu cuenta personal, así como para cualquier recurso de la organización.

Si perteneces a cualquier organizacion que imponga el inicio de sesión único de SAML, debes tener una sesión activa de SAML para cada organización cada vez que autorices un {% data variables.product.prodname_oauth_app %}.

{% note %}

**Nota:** Si te encuentras errores al autenticarte en una organización que requiera el inicio de sesión único de SAML, podrías necesitar revocar la OAuth App de tu [página de ajustes de cuenta](https://github.com/settings/applications) y repetir el flujo de autenticación para volver a autorizar a la app.

{% endnote %}

## Leer más

- "[Acerca de las restricciones de acceso a {% data variables.product.prodname_oauth_app %}](/articles/about-oauth-app-access-restrictions)"
- "[Autorizar las GitHub Apps](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-github-apps)"
- "[Soporte técnico de {% data variables.product.prodname_marketplace %}](/articles/github-marketplace-support)"

{% endif %}
