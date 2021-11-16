---
title: Administración de GitHub Enterprise
intro: 'You can use these {{ site.data.variables.product.prodname_ghe_cloud }} endpoints to administer your enterprise account. Entre las tareas que puedes realizar con esta API hay muchas que se relacionan con las GitHub Actions.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /v3/enterprise-admin
  - /v3/enterprise
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
shortTitle: Administración empresarial
---

{% ifversion fpt or ghec %}

{% note %}

**Nota:** Este artículo aplica a {% data variables.product.prodname_ghe_cloud %}. Para ver la versión de {% data variables.product.prodname_ghe_managed %} o de {% data variables.product.prodname_ghe_server %}, utiliza el menú desplegable de **{% data ui.pages.article_version %}**.

{% endnote %}

{% endif %}

### URL de las Terminales

Las terminales de la API de REST{% ifversion ghes %}—excepto las terminales de la API de [Consola de Administración](#management-console)—{% endif %} se prefijan con la siguiente URL:

```shell
{% data variables.product.api_url_pre %}
```

{% ifversion ghes %}
Las terminales de la API de [Consola de Administración](#management-console) solo llevan un prefijo con un nombre de host:

```shell
http(s)://<em>hostname</em>/
```
{% endif %}
{% ifversion ghae or ghes %}
### Autenticación

Las terminales de la API para tu instalación de {% data variables.product.product_name %} acceptan [los mismos métodos de autenticación](/rest/overview/resources-in-the-rest-api#authentication) que los de la API de GitHub.com. Puedes autenticarte con **[Tokens de OAuth](/apps/building-integrations/setting-up-and-registering-oauth-apps/)** {% ifversion ghes %}(los cuales se pueden crear utilizando la [API de autorizciones](/rest/reference/oauth-authorizations#create-a-new-authorization)) {% endif %}o con la **[autenticación básica](/rest/overview/resources-in-the-rest-api#basic-authentication)**. {% ifversion ghes %} Los tokens de OAuth deben tener el [alcance de OAuth](/developers/apps/scopes-for-oauth-apps#available-scopes) de `site_admin` cuando se utilicen con las terminales específicas de la empresa. {% endif %}

Solo los administradores de sitio autenticados en {% data variables.product.product_name %} pueden acceder a las terminales de la API de administración empresarial{% ifversion ghes %}, con exepción de la API de [Consola de Administración](#management-console), la cual requiere la [contraseña de la Consola de Administración](/enterprise/admin/articles/accessing-the-management-console/){% endif %}.

{% endif %}

{% ifversion ghae or ghes %}
### Información de la versión

La versión actual de tu empresa se devuelve en el encabezado de respuesta de cada API: `X-GitHub-Enterprise-Version: {{currentVersion}}.0` También puedes leer la versión actual si llamas a la [terminal de meta](/rest/reference/meta/).

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

{% endif %}

{% ifversion fpt or ghec %}

## Registro de auditoría

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'audit-log' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion fpt or ghec %}
## Facturación

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'billing' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

## GitHub Actions

{% data reusables.actions.ae-beta %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'actions' %}{% include rest_operation %}{% endif %}
{% endfor %}


{% ifversion ghae or ghes %}
## Estadísticas de los Administradores

La API de estadísticas de los administradores proporciona diversas métricas sobre tu instalación. *Solo se encuentra disponible para los administradores de sitio [autenticados.](/rest/overview/resources-in-the-rest-api#authentication)* Los usuarios normales recibirán una respuesta `404` si intentan acceder a ella.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'admin-stats' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion ghae or ghes > 2.22 %}

## Anuncios

La API de anuncios te permite administrar el letrero de anuncios globales en tu empresa. Para obtener más información, consulta la sección "[Personalizar los mensajes de usuario para tu empresa](/admin/user-management/customizing-user-messages-for-your-enterprise#creating-a-global-announcement-banner)".

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'announcement' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion ghae or ghes %}

## Webhooks globales

Los webhooks globales se instalan en tu empresa. Puedes utilizar los webhooks globales para monitorear, responder a, o requerir las reglas para los usuarios, organizaciones, equipos y repositorios en tu empresa. Los webhooks globales se pueden suscribir a los tipos de evento para [organizaciones](/developers/webhooks-and-events/webhook-events-and-payloads#organization), [usuarios](/developers/webhooks-and-events/webhook-events-and-payloads#user), [repositorios](/developers/webhooks-and-events/webhook-events-and-payloads#repository), [equipos](/developers/webhooks-and-events/webhook-events-and-payloads#team), [miembros](/developers/webhooks-and-events/webhook-events-and-payloads#member), [membrecías](/developers/webhooks-and-events/webhook-events-and-payloads#membership), [bifuraciones](/developers/webhooks-and-events/webhook-events-and-payloads#fork), y [pings](/developers/webhooks-and-events/about-webhooks#ping-event).

*Esta API solo se encuentra disponible para los administradores de sitio [autenticados.](/rest/overview/resources-in-the-rest-api#authentication)* Los usuarios normales recibirán una respuesta `404` si intentan acceder a ella. Para aprender cómo configurar los webhooks globales, consulta la sección [Acerca de los webhooks globales](/enterprise/admin/user-management/about-global-webhooks).

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'global-webhooks' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion ghes %}

## LDAP

Puedes utilizar la API de LDAP para actualizar las relaciones de cuenta entre un usuario de {% data variables.product.product_name %} o un equipo y su entrada enlazada de LDAP o poner en cola una sincronización nueva.

Con las terminales de mapeo de LDAP, puedes actualizar el Nombre Distintivo (DN, por sus siglas en inglés) al cual mapea un usuario o equipo. Toma en cuenta que las terminales de LDAP generalmente solo son efectivas si tu aplicativo de {% data variables.product.product_name %} [habilitó la sincronización con LDAP](/enterprise/admin/authentication/using-ldap). La terminal de [mapeo de LDAP para actualización para un usuario](#update-ldap-mapping-for-a-user) puede utilizarse cuando se habilita LDAP, aún si la sincronización con LDAP está inhabilitada.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'ldap' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion ghae or ghes %}
## Licencia

La API de licencias proporciona información sobre tu licencia empresarial. *Solo se encuentra disponible para los administradores de sitio [autenticados.](/rest/overview/resources-in-the-rest-api#authentication)* Los usuarios normales recibirán una respuesta `404` si intentan acceder a ella.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'license' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion ghes %}

## Consola de administración

La API de la Consola de Administración te ayuda a administrar tu instalación de {% data variables.product.product_name %}.

{% tip %}

Debes configurar el número de puerto explícitamente cuando haces llamadas de la API hacia la Consola de Administración. Si habilitaste TLS en tu empresa, el número de puerto es `8443`; de lo contrario, el número de puerto es `8080`.

Si no quieres proporcionar un número de puerto, necesitarás configurar tu herramienta para seguir automáticamente las redirecciones.

Podría que también necesites agregar el [marcador `-k`](http://curl.haxx.se/docs/manpage.html#-k) cuando utilices `curl`, ya que {% data variables.product.product_name %} utiliza un certificado auto-firmado antes de que [agregues tu propio certificado TLS](/enterprise/admin/guides/installation/configuring-tls/).

{% endtip %}

### Autenticación

Necesitas pasar tu [Contraseña de la Consola de Administración](/enterprise/admin/articles/accessing-the-management-console/) como un token de autenticación para cada terminal de la API de ésta, con excepción de [`/setup/api/start`](#create-a-github-enterprise-server-license).

Utiliza el parámetro de `api_key` para enviar este token con cada solicitud. Por ejemplo:

```shell
$ curl -L 'https://<em>hostname</em>:<em>admin_port</em>/setup/api?api_key=<em>your-amazing-password</em>'
```

También puedes utilizar la autenticación HTTP estándar para enviar este token. Por ejemplo:

```shell
$ curl -L 'https://api_key:<em>your-amazing-password</em>@<em>hostname</em>:<em>admin_port</em>/setup/api'
```

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'management-console' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion ghae or ghes %}
## Organizaciones

La API de Administración Organizacional te permite crear organizaciones en tu empresa. *Solo se encuentra disponible para los administradores de sitio [autenticados.](/rest/overview/resources-in-the-rest-api#authentication)* Los usuarios normales recibirán una respuesta `404` si intentan acceder a ella.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'orgs' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion ghes %}
## Ganchos de Pre-recepción de la Organización

La API de Ganchos de Pre-recepción de la Organización te permite ver y modificar la aplicación de dichos ganchos que están disponibles para una organización.

### Atributos de objeto

| Nombre                           | Type        | Descripción                                               |
| -------------------------------- | ----------- | --------------------------------------------------------- |
| `name (nombre)`                  | `secuencia` | El nombre del gancho.                                     |
| `enforcement`                    | `secuencia` | El estado de imposición del gancho en este repositorio.   |
| `allow_downstream_configuration` | `boolean`   | Si los repositorios pueden ignorar la imposición o no.    |
| `configuration_url`              | `secuencia` | URL para la terminal en donde se configuró la imposición. |

Los valores posibles para *enforcement* son `enabled`, `disabled` y `testing`. El valor `disabled` indica que el gancho de pre-recepción no se ejecutará. El valor `enabled` indica que se ejecutará y rechazará cualquier carga que resulte en un estado diferente a zero. El valor `testing` indica que el script va a ejecutarse pero no va a causar que se rechace ninguna carga.

`configuration_url` podría ser un enlace a esta terminal o ser la configuración global de este gancho. Solo los administradores de sistema pueden acceder a la configuración global.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'org-pre-receive-hooks' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion ghes %}

## Ambientes de pre-recepción

La API de Ambientes de Pre-recepción te permite crear, listar, actualizar y borrar ambientes para los ganchos de pre-recepción. *Solo se encuentra disponible para los administradores de sitio [autenticados.](/rest/overview/resources-in-the-rest-api#authentication)* Los usuarios normales recibirán una respuesta `404` si intentan acceder a ella.

### Atributos de objeto

#### Ambiente de pre-recepción

| Nombre                | Type        | Descripción                                                                                         |
| --------------------- | ----------- | --------------------------------------------------------------------------------------------------- |
| `name (nombre)`       | `secuencia` | El nombre del ambiente como se muestra en la IU.                                                    |
| `image_url`           | `secuencia` | La URL del tarball que se descargará y extraerá.                                                    |
| `default_environment` | `boolean`   | Si este es el ambiente predeterminado que viene con {% data variables.product.product_name %} o no. |
| `download`            | `objeto`    | El estado de descarga de este ambiente.                                                             |
| `hooks_count`         | `número`    | La cantidad de ganchos de pre-recepción que utilizan este ambiente.                                 |

#### Descarga del Ambiente de Pre-recepción

| Nombre          | Type        | Descripción                                                                      |
| --------------- | ----------- | -------------------------------------------------------------------------------- |
| `state`         | `secuencia` | El estado de la mayoría de las descargas recientes.                              |
| `downloaded_at` | `secuencia` | La hora en la cual iniciaron la mayoría de las descrgas recientes.               |
| `message`       | `secuencia` | Cuando algo falla, este tendrá cualquier mensaje de error que se haya producido. |

Los valores posibles para `state` son `not_started`, `in_progress`, `success`, `failed`.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'pre-receive-environments' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion ghes %}
## Ganchos de pre-recepción

La API de Ganchos Pre-recepción te permite crear, listar, actualizar y borrar los ganchos de pre-recepción. *Solo se encuentra disponible para los administradores de sitio [autenticados.](/rest/overview/resources-in-the-rest-api#authentication)* Los usuarios normales recibirán una respuesta `404` si intentan acceder a ella.

### Atributos de objeto

#### Ganchos de pre-recepción

| Nombre                           | Type        | Descripción                                                                         |
| -------------------------------- | ----------- | ----------------------------------------------------------------------------------- |
| `name (nombre)`                  | `secuencia` | El nombre del gancho.                                                               |
| `script`                         | `secuencia` | El script que ejecuta el gancho.                                                    |
| `script_repository`              | `objeto`    | El repositorio de GitHub en donde se mantiene el script.                            |
| `environment`                    | `objeto`    | El ambiente de pre-recepción en donde se ejecuta el script.                         |
| `enforcement`                    | `secuencia` | El estado de las imposiciones para este gancho.                                     |
| `allow_downstream_configuration` | `boolean`   | Si las imposiciones pueden o no ignorarse a nivel de organización o de repositorio. |

Los valores posibles para *enforcement* son `enabled`, `disabled` y `testing`. El valor `disabled` indica que el gancho de pre-recepción no se ejecutará. El valor `enabled` indica que se ejecutará y rechazará cualquier carga que resulte en un estado diferente a zero. El valor `testing` indica que el script va a ejecutarse pero no va a causar que se rechace ninguna carga.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'pre-receive-hooks' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion ghes %}

## Ganchos de pre-recepción del repositorio

La API de Ganchos de Pre-recepción para Repositorios te permite ver y modificar la imposición de los ganchos de pre-recepción que están disponibles para un repositorio.

### Atributos de objeto

| Nombre              | Type        | Descripción                                               |
| ------------------- | ----------- | --------------------------------------------------------- |
| `name (nombre)`     | `secuencia` | El nombre del gancho.                                     |
| `enforcement`       | `secuencia` | El estado de imposición del gancho en este repositorio.   |
| `configuration_url` | `secuencia` | URL para la terminal en donde se configuró la imposición. |

Los valores posibles para *enforcement* son `enabled`, `disabled` y `testing`. El valor `disabled` indica que el gancho de pre-recepción no se ejecutará. El valor `enabled` indica que se ejecutará y rechazará cualquier carga que resulte en un estado diferente a zero. El valor `testing` indica que el script va a ejecutarse pero no va a causar que se rechace ninguna carga.

`configuration_url` podría ser un enlace a este repositorio, al propietario de su organización o a su configuración global. La autorización para acceder a esta terminal en `configuration_url` se determina a nivel de administrador de sitio o de propietario.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'repo-pre-receive-hooks' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion ghae or ghes %}
## Usuarios

La API de Administración de Usuarios te permite suspender{% ifversion ghes %}, dejar de suspender, promover, y degradar{% endif %}{% ifversion ghae %} y dejar de suspender{% endif %} a los usuarios en tu empresa. *Solo se encuentra disponible para los administradores de sitio [autenticados.](/rest/overview/resources-in-the-rest-api#authentication)* Los usuarios normales recibirán una respuesta `403` si intentan acceder a ella.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'users' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}
