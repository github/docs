---
title: Conectar con aplicaciones de terceros
intro: 'Puedes conectar tu identidad {% data variables.product.product_name %} con aplicaciones de terceros mediante OAuth. Al autorizar una de estas aplicaciones, deberías asegurarte de que confías en la aplicación, revisar quién la desarrolló y revisar los tipos de información a la que desea acceder la aplicación.'
redirect_from:
  - /articles/connecting-with-third-party-applications
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---

Cuando una aplicación de terceros desea identificarte mediante tu inicio de sesión de {% data variables.product.product_name %}, verás una página con la información de contacto del programador y una lista de los datos específicos que se han solicitado.

### Contactarse con el programador de la aplicación

Dado que una aplicación está desarrollada por un tercero que no es {% data variables.product.product_name %}, no sabemos exactamente cómo una aplicación usa los datos a los que solicita acceso. Puedes usar la información del programador en la parte superior de la página para contactarte con el administrador de la aplicación si tienes preguntas o inquietudes sobre tu aplicación.

![Información del propietario de {% data variables.product.prodname_oauth_app %}](/assets/images/help/platform/oauth_owner_bar.png)

Si el programador ha elegido suministrarla, el lateral derecho de la página brinda una descripción detallada de la aplicación, así como su sitio web asociado.

![Información de la aplicación OAuth y sitio web](/assets/images/help/platform/oauth_app_info.png)

### Tipos de acceso a la aplicación y datos

Las aplicaciones pueden tener acceso de *lectura* o *escritura* a tus datos de {% data variables.product.product_name %}.

- El **acceso de lectura** solo permite que una aplicación *mire* tus datos.
- El **acceso de escritura** permite que una aplicación *cambie* tus datos.

#### Acerca de los alcances de OAuth

*Alcances* son grupos de permisos designados que una aplicación puede solicitar para acceder a los datos públicos y no públicos.

Cuando quieres usar una aplicación de terceros que se integra con {% data variables.product.product_name %}, esa aplicación te permite conocer qué tipo de acceso a tus datos serán necesarios. Si otorgas acceso a la aplicación, la aplicación podrá realizar acciones en tu nombre, como leer o modificar datos. Por ejemplo, si quieres usar una app que solicita el alcance `usuario:correo electrónico`, la app solo tendrá acceso de lectura a tus direcciones de correo electrónico privado. Para obtener más información, consulta la sección "[Acerca de los alcances para {% data variables.product.prodname_oauth_app %}](/apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps)".

{% tip %}

**Nota:** Actualmente, no puedes demarcar el acceso al código fuente a solo lectura.

{% endtip %}

#### Tipos de datos solicitados

Existen varios tipos de datos que las aplicaciones pueden solicitar.

![Detalles de acceso a OAuth](/assets/images/help/platform/oauth_access_types.png)

{% tip %}

**Sugerencia:** {% data reusables.user_settings.review_oauth_tokens_tip %}

{% endtip %}

| Tipos de datos               | Descripción                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Estado de confirmación       | Puedes otorgar acceso a una aplicación de terceros para que informe tu estado de confirmación. El acceso al estado de confirmación permite que las aplicaciones determinen si una construcción es exitosa frente a una confirmación específica. Las aplicaciones no tendrán acceso a tu código, pero <em>pueden</em> leer y escribir la información del estado frente a una confirmación específica. |
| Implementaciones             | El acceso a los estados de despliegue les permite a las aplicaciones determinar si un despliegue es exitoso contra una confirmación específica para un repositorio. Las aplicaciones no tendrán acceso a tu código.                                                                                                                                                                                          |
| Gists                        | El acceso a los [Gists](https://gist.github.com) permite a las aplicaciones leer o escribir tanto en{% if currentVersion != "github-ae@latest" %}tus gists públicos y{% else %}tus gists internos y{% endif %} secretos.                                                                                                                                                                                     |
| Ganchos                      | El acceso a [webhooks](/webhooks) permite que las aplicaciones lean o escriban configuraciones de gancho en los repositorios que administras.                                                                                                                                                                                                                                                                |
| Notificaciones               | El acceso a las notificaciones permite a las aplicaciones leer tus notificaciones de {% data variables.product.product_name %}, tales como los comentarios sobre las propuestas y las solicitudes de cambios. Sin embargo, las aplicaciones permanecen inhabilitadas para acceder a tus repositorios.                                                                                                        |
| Organizaciones y equipos     | El acceso a organizaciones y equipos permite que las apps accedan y administren la membresía de la organización y del equipo.                                                                                                                                                                                                                                                                                |
| Datos personales del usuario | Entre los datos del usuario se incluye información que se encuentra en tu perfil de usuario, como tu nombre, dirección de correo electrónico y ubicación.                                                                                                                                                                                                                                                    |
| Repositorios                 | La información del repositorio incluye los nombres de los colaboradores, las ramas que creaste y los archivos actuales dentro de tu repositorio. Las aplicaciones pueden solicitar acceso tanto para los repositorios {% if currentVersion != "github-ae@latest" %}públicos{% else %}como internos{% endif %}o privados a nivel de todos los usuarios.                                                       |
| Eliminación de repositorio   | Las aplicaciones pueden solicitar la eliminación de los repositorios que administras,, pero no tendrán acceso a tu código.                                                                                                                                                                                                                                                                                   |

### Solicitar permisos actualizados

Las aplicaciones pueden solicitar nuevos privilegios de acceso. Al solicitar permisos actualizados, la aplicación te notificará de las diferencias.

![Cambiar el acceso a aplicaciones de terceros](/assets/images/help/platform/oauth_existing_access_pane.png)
