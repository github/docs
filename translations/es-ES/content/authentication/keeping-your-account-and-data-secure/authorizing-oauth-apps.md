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
topics:
  - Identity
  - Access management
---

Cuando una {% data variables.product.prodname_oauth_app %} quiere identificarte a través de tu cuenta de {% data variables.product.product_name %}, verás una página con la información de contacto del desarrollador de la app y una lista de los datos específicos que se han solicitado.

{% ifversion fpt %}

{% tip %}

**Sugerencia:** Debes [verificar tu dirección de correo electrónico](/articles/verifying-your-email-address) antes de que puedas autorizar una {% data variables.product.prodname_oauth_app %}.

{% endtip %}

{% endif %}

## Acceso a {% data variables.product.prodname_oauth_app %}

{% data variables.product.prodname_oauth_apps %} can have *read* or *write* access to your {% data variables.product.product_name %} data.

- El **acceso de lectura** solo permite que una app *mire* tus datos.
- El **acceso de escritura** permite que una app *cambie* tus datos.

{% tip %}

**Sugerencia:** {% data reusables.user_settings.review_oauth_tokens_tip %}

{% endtip %}

### Acerca de los alcances de OAuth

Los *alcances* son los grupos de permiso denominados que una {% data variables.product.prodname_oauth_app %} puede solicitar para acceder a datos públicos y no públicos.

Cuando quieres usar una {% data variables.product.prodname_oauth_app %} que se integra con {% data variables.product.product_name %}, la app te permite conocer qué tipo de acceso a tus datos serán necesarios. Si otorgas acceso a la app, la app podrá realizar acciones en tu nombre, como leer o modificar datos. Por ejemplo, si quieres usar una app que solicita el alcance `usuario:correo electrónico`, la app solo tendrá acceso de lectura a tus direcciones de correo electrónico privado. For more information, see "[About scopes for {% data variables.product.prodname_oauth_apps %}](/apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps)."

{% tip %}

**Nota:** Actualmente, no puedes demarcar el acceso al código fuente a solo lectura.

{% endtip %}

{% data reusables.apps.oauth-token-limit %}

### Tipos de datos solicitados

{% data variables.product.prodname_oauth_apps %} can request several types of data.

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
| Eliminación de repositorio   | Las apps pueden solicitar la eliminación de los repositorios que administras,, pero no tendrán acceso a tu código.                                                                                                                                                                                                                                            |

## Solicitar permisos actualizados

When {% data variables.product.prodname_oauth_apps %} request new access permissions, they will notify you of the differences between their current permissions and the new permissions.

{% ifversion fpt %}

## {% data variables.product.prodname_oauth_apps %} and organizations

Cuando autorizas una {% data variables.product.prodname_oauth_app %} para tu cuenta de usuario personal, verás cómo la autorización afectará a cada organización de la que eres miembro.

- **Para organizaciones *con restricciones de acceso a * {% data variables.product.prodname_oauth_app %}, puedes solicitar que los administradores de la organización aprueben la aplicación para usar en esa organización.** Si la organización no aprueba la aplicación, la aplicación solo podrá acceder a los recursos públicos de la organización. Si eres administrador de una organización, puedes [aprobar la aplicación](/articles/approving-oauth-apps-for-your-organization) por tu cuenta.

- **For organizations *without* {% data variables.product.prodname_oauth_app %} access restrictions, the application will automatically be authorized for access to that organization's resources.** For this reason, you should be careful about which {% data variables.product.prodname_oauth_apps %} you approve for access to your personal account resources as well as any organization resources.

Si perteneces a cualquier organizacion que imponga el inicio de sesión único de SAML, debes tener una sesión activa de SAML para cada organización cada vez que autorices un {% data variables.product.prodname_oauth_app %}.

{% note %}

**Note:** If you are encountering errors authenticating to an organization that enforces SAML single sign-on, you may need to revoke the OAuth App from your [account settings page](https://github.com/settings/applications) and repeat the authentication flow to reauthorize the app.

{% endnote %}

## Leer más

- "[Acerca de las restricciones de acceso a {% data variables.product.prodname_oauth_app %}](/articles/about-oauth-app-access-restrictions)"
- "[Authorizing GitHub Apps](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-github-apps)"
- "[Soporte técnico de {% data variables.product.prodname_marketplace %}](/articles/github-marketplace-support)"

{% endif %}
