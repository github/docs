---
title: Administración de GitHub Enterprise
allowTitleToDifferFromFilename: true
redirect_from:
  - /v3/enterprise-admin
  - /v3/enterprise
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

You can use these {% data variables.product.prodname_ghe_cloud %} endpoints to administer your enterprise account.

{% if currentVersion == "free-pro-team@latest" %}

{% note %}

**Nota:** Este artículo aplica a {% data variables.product.prodname_ghe_cloud %}. Si quieres ver la versión para {% data variables.product.prodname_ghe_server %}, utiliza el menú desplegable de **{% data ui.pages.article_version %}**.

{% endnote %}

{% endif %}

{% if currentVersion != "free-pro-team@latest" %}

### URL de las Terminales

Las terminales de la API de REST—excepto aquellas API de [Consola de Administración](#management-console)—llevan un prefijo con la siguiente URL:

```shell
http(s)://<em>hostname</em>/api/v3/
```

Las terminales de la API de [Consola de Administración](#management-console) solo llevan un prefijo con un nombre de host:

```shell
http(s)://<em>hostname</em>/
```

### Autenticación

Las terminales de la API para tu instalación de {% data variables.product.product_name %} acceptan [los mismos métodos de autenticación](/rest/overview/resources-in-the-rest-api#authentication) que los de la API de GitHub.com. Puedes autenticarte con **[Tokens de OAuth](/apps/building-integrations/setting-up-and-registering-oauth-apps/)** (que se pueden crear utilizando la [API de Autorizaciones](/rest/reference/oauth-authorizations#create-a-new-authorization)) o con **[autenticación básica](/rest/overview/resources-in-the-rest-api#basic-authentication)**. {% if currentVersion != "free-pro-team@latest" %} Los tokens de OAuth deben tener el [alcance de OAuth](/developers/apps/scopes-for-oauth-apps#available-scopes) de `site_admin` cuando se utilicen con las terminales específicas de la empresa. {% endif %}

Solo puede accederse a las terminales de la API para la administración empresarial si se trata de administradores de sitio de {% data variables.product.product_name %}, excepto por la API de [Consola de Administración](#management-console), la cual requiere la [contraseña de la Consola de Administración](/enterprise/admin/articles/accessing-the-management-console/).

### Información de la versión

La versión actual de una instancia de {% data variables.product.product_name %} se devuelve en el encabezado de respuesta de todas las API: `X-GitHub-Enterprise-Version: {{currentVersion}}.0` También puedes leer la versión actual si llamas a la [terminal de meta](/rest/reference/meta/).

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

## Facturación

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'billing' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
## GitHub Actions

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'actions' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
## SCIM

### Aprovisionamiento de SCIM para Empresas

Los Proveedores de Identidad (IdPs) con SCIM habilitado pueden utilizar la API de SCIM para automatizar el aprovisionamiento de la membresía empresarial. La API de {% data variables.product.product_name %} se basa en la versión 2.0 del [estándar de SCIM](http://www.simplecloud.info/).

El IdP debe utilizar `{% data variables.product.api_url_code %}/scim/v2/enterprises/{enterprise}/` como la terminal de SCIM.

{% note %}

**Nota:** La API empresarial de SCIM solo se encuentra disponible para las empresas en [{% data variables.product.prodname_ghe_cloud %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-accounts) que cuenten con el [SSO de SAML](/v3/auth/#authenticating-for-saml-sso) habilitado. Para obtener más información acerca de SCIM, consulta "[Acerca de SCIM](/github/setting-up-and-managing-organizations-and-teams/about-scim)".

{% endnote %}

### Autenticar las llamadas a la API de SCIM

Debes autenticarte como un propietario de una empresa de {% data variables.product.product_name %} para utilizar su API de SCIM. La API espera que se incluya un token [Portador de OAuth 2.0](/developers/apps/authenticating-with-github-apps) en el encabezado `Authorization`. También podrías utilizar un token de acceso personal, pero primero debes [autorizarlo para su uso con tu SSO empresarial de SAML](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on).

### Mapeo de los datos de SAML y de SCIM

El IdP de SAML y el cliente de SCIM deben utilizar valores coincidentes de `NameID` y `userName` para cada usuario. Esto le permite al usuario que se autentica mediante SAML el poder enlazarse con su identidad aprovisionada de SCIM.

Los grupos de SCIM se empatan con las organizaciones de {% data variables.product.product_name %} que tienen exactamente el mismo nombre, y que son propiedad de la cuenta empresarial.

El IdP de SAML y el cliente de SCIM deben configurarse para empatar exactamente el `displayName` del grupo de SCIM con el nombre correspondiente de la organización de {% data variables.product.product_name %}. Esto le permite a {% data variables.product.product_name %} enlazar el grupo de SCIM con la membrecía organizacional de {% data variables.product.product_name %}.

### Atributos de Usuario de SCIM compatibles

| Nombre                 | Tipo        | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `userName`             | `secuencia` | El nombre de usuario para el usuario.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `name.givenName`       | `secuencia` | El primer nombre del usuario.                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `name.lastName`        | `secuencia` | El apellido del usuario.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `correos electrónicos` | `array`     | Lista de correos electrónicos del usuario.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `externalId`           | `secuencia` | El proveedor de SAML genera este identificador, el cual utiliza como una ID única para empatarla contra un usuario de GitHub. Puedes encontrar la `externalID` para un usuario ya sea con el proveedor de SAML, o utilizar la terminal de [Listar las identidades aprovisionadas de SCIM para una empresa](#list-scim-provisioned-identities-for-an-enterprise) y filtrar otros atributos conocidos, tales como el nombre de usuario o la dirección de correo electrónico de un usuario de GitHub. |
| `id`                   | `secuencia` | Identificador que genera la terminal de SCIM de GitHub.                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `active`               | `boolean`   | Se utiliza para indicar si la identidad está activa (true) o si debe desaprovisionarse (false).                                                                                                                                                                                                                                                                                                                                                                                                    |
| `groups`               | `array`     | Lista opcional de las ID del grupo de SCIM del cual el usuario es miembro.                                                                                                                                                                                                                                                                                                                                                                                                                         |

{% note %}

**Nota:** Las URL de terminal para la API de SCIM distinguen entre mayúsculas y minúsculas. Por ejemplo, la primera letra en la terminal `Users` debe ponerse en mayúscula:

```shell
GET /scim/v2/enterprises/{enterprise}/Users/{scim_user_id}
```

{% endnote %}

### Atributos del Grupo de SCIM compatibles

| Nombre        | Tipo        | Descripción                                                                                                                                                                                                                                                                            |
| ------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `displayName` | `secuencia` | El nombre del grupo de SCIM, el cual debe empatar exactamente con el nombre de la organización de {% data variables.product.product_name %} correspondiente. Por ejemplo, si la URL de la organización es `https://github.com/octo-org`, el nombre del grupo debe ser `octo-org`. |
| `members`     | `array`     | Lista de IDs de usuario de SCIM que son miembros del grupo.                                                                                                                                                                                                                            |


{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'scim' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% if currentVersion != "free-pro-team@latest" %}

## Estadísticas de los Administradores

La API de estadísticas de los administradores proporciona diversas métricas sobre tu instalación. *Solo se encuentra disponible para los administradores de sitio [autenticados.](/rest/overview/resources-in-the-rest-api#authentication)* Los usuarios normales recibirán una respuesta `404` si intentan acceder a ella.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'admin-stats' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Webhooks globales

Los webhooks globales se instalan en una instancia de {% data variables.product.prodname_enterprise %}. Puedes utilizar los webhooks globales para controlar, responder o aplicar reglas automáticamente para la administración de usuarios, organizaciones, equipos y repositorios en tu instancia. Los webhooks globales se pueden suscribir a los tipos de evento para [organizaciones](/developers/webhooks-and-events/webhook-events-and-payloads#organization), [usuarios](/developers/webhooks-and-events/webhook-events-and-payloads#user), [repositorios](/developers/webhooks-and-events/webhook-events-and-payloads#repository), [equipos](/developers/webhooks-and-events/webhook-events-and-payloads#team), [miembros](/developers/webhooks-and-events/webhook-events-and-payloads#member), [membrecías](/developers/webhooks-and-events/webhook-events-and-payloads#membership), [bifuraciones](/developers/webhooks-and-events/webhook-events-and-payloads#fork), y [pings](/developers/webhooks-and-events/about-webhooks#ping-event).

*Esta API solo se encuentra disponible para los administradores de sitio [autenticados.](/rest/overview/resources-in-the-rest-api#authentication)* Los usuarios normales recibirán una respuesta `404` si intentan acceder a ella. Para aprender cómo configurar los webhooks globales, consulta la sección [Acerca de los webhooks globales](/enterprise/admin/user-management/about-global-webhooks).

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'global-webhooks' %}{% include rest_operation %}{% endif %}
{% endfor %}

## LDAP

Puedes utilizar la API de LDAP para actualizar las relaciones de cuenta entre un usuario de {% data variables.product.prodname_ghe_server %} o un equipo y su entrada enlazada de LDAP o poner en cola una sincronización nueva.

Con las terminales de mapeo de LDAP, puedes actualizar el Nombre Distintivo (DN, por sus siglas en inglés) al cual mapea un usuario o equipo. Nota que las terminales de LDAP generalmente solo son efectivas si tu aplicativo de {% data variables.product.prodname_ghe_server %} [habilitó la sincronización con LDAP](/enterprise/admin/authentication/using-ldap). La terminal de [mapeo de LDAP para actualización para un usuario](#update-ldap-mapping-for-a-user) puede utilizarse cuando se habilita LDAP, aún si la sincronización con LDAP está inhabilitada.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'ldap' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Licencia

La API de licencias proporciona información sobre tu licencia empresarial. *Solo se encuentra disponible para los administradores de sitio [autenticados.](/rest/overview/resources-in-the-rest-api#authentication)* Los usuarios normales recibirán una respuesta `404` si intentan acceder a ella.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'license' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Consola de administración

La API de la Consola de Administración te ayuda a administrar tu {% data variables.product.prodname_ghe_server %} instalación.

{% tip %}

Debes configurar el número de puerto explícitamente cuando haces llamadas de la API hacia la Consola de Administración. Si se habilita el TLS en tu instancia empresarial, el número de puerto es `8443`; de lo contrario, el número de puerto será `8080`.

Si no quieres proporcionar un número de puerto, necesitarás configurar tu herramienta para seguir automáticamente las redirecciones.

También necesitas agregar el [marcador `-k`](http://curl.haxx.se/docs/manpage.html#-k) cuando utilices `curl`, ya que {% data variables.product.prodname_ghe_server %} utiliza un certificado auto-firmado antes de que [agregues tu propio certificado TLS](/enterprise/admin/guides/installation/configuring-tls/).

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

## Organizaciones

La API de Administración de la organización te permite crear organizaciones en un aplicativo de {% data variables.product.prodname_ghe_server %}. *Solo se encuentra disponible para los administradores de sitio [autenticados.](/rest/overview/resources-in-the-rest-api#authentication)* Los usuarios normales recibirán una respuesta `404` si intentan acceder a ella.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'orgs' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Ganchos de Pre-recepción de la Organización

La API de Ganchos de Pre-recepción de la Organización te permite ver y modificar la aplicación de dichos ganchos que están disponibles para una organización.

### Atributos de objeto

| Nombre                           | Tipo        | Descripción                                               |
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

## Ambientes de pre-recepción

La API de Ambientes de Pre-recepción te permite crear, listar, actualizar y borrar ambientes para los ganchos de pre-recepción. *Solo se encuentra disponible para los administradores de sitio [autenticados.](/rest/overview/resources-in-the-rest-api#authentication)* Los usuarios normales recibirán una respuesta `404` si intentan acceder a ella.

### Atributos de objeto

#### Ambiente de pre-recepción

| Nombre                | Tipo        | Descripción                                                                                                       |
| --------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------- |
| `name (nombre)`       | `secuencia` | El nombre del ambiente como se muestra en la IU.                                                                  |
| `image_url`           | `secuencia` | La URL del tarball que se descargará y extraerá.                                                                  |
| `default_environment` | `boolean`   | Si este es el ambiente predeterminado que viene con {% data variables.product.prodname_ghe_server %} o no. |
| `descargar`           | `objeto`    | El estado de descarga de este ambiente.                                                                           |
| `hooks_count`         | `número`    | La cantidad de ganchos de pre-recepción que utilizan este ambiente.                                               |

#### Descarga del Ambiente de Pre-recepción

| Nombre          | Tipo        | Descripción                                                                      |
| --------------- | ----------- | -------------------------------------------------------------------------------- |
| `state`         | `secuencia` | El estado de la mayoría de las descargas recientes.                              |
| `downloaded_at` | `secuencia` | La hora en la cual iniciaron la mayoría de las descrgas recientes.               |
| `message`       | `secuencia` | Cuando algo falla, este tendrá cualquier mensaje de error que se haya producido. |

Los valores posibles para `state` son `not_started`, `in_progress`, `success`, `failed`.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'pre-receive-environments' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Ganchos de pre-recepción

La API de Ganchos Pre-recepción te permite crear, listar, actualizar y borrar los ganchos de pre-recepción. *Solo se encuentra disponible para los administradores de sitio [autenticados.](/rest/overview/resources-in-the-rest-api#authentication)* Los usuarios normales recibirán una respuesta `404` si intentan acceder a ella.

### Atributos de objeto

#### Ganchos de pre-recepción

| Nombre                           | Tipo        | Descripción                                                                         |
| -------------------------------- | ----------- | ----------------------------------------------------------------------------------- |
| `name (nombre)`                  | `secuencia` | El nombre del gancho.                                                               |
| `script`                         | `secuencia` | El script que ejecuta el gancho.                                                    |
| `script_repository`              | `objeto`    | El repositorio de GitHub en donde se mantiene el script.                            |
| `entorno`                        | `objeto`    | El ambiente de pre-recepción en donde se ejecuta el script.                         |
| `enforcement`                    | `secuencia` | El estado de las imposiciones para este gancho.                                     |
| `allow_downstream_configuration` | `boolean`   | Si las imposiciones pueden o no ignorarse a nivel de organización o de repositorio. |

Los valores posibles para *enforcement* son `enabled`, `disabled` y `testing`. El valor `disabled` indica que el gancho de pre-recepción no se ejecutará. El valor `enabled` indica que se ejecutará y rechazará cualquier carga que resulte en un estado diferente a zero. El valor `testing` indica que el script va a ejecutarse pero no va a causar que se rechace ninguna carga.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'pre-receive-hooks' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Ganchos de pre-recepción del repositorio

La API de Ganchos de Pre-recepción para Repositorios te permite ver y modificar la imposición de los ganchos de pre-recepción que están disponibles para un repositorio.

### Atributos de objeto

| Nombre              | Tipo        | Descripción                                               |
| ------------------- | ----------- | --------------------------------------------------------- |
| `name (nombre)`     | `secuencia` | El nombre del gancho.                                     |
| `enforcement`       | `secuencia` | El estado de imposición del gancho en este repositorio.   |
| `configuration_url` | `secuencia` | URL para la terminal en donde se configuró la imposición. |

Los valores posibles para *enforcement* son `enabled`, `disabled` y `testing`. El valor `disabled` indica que el gancho de pre-recepción no se ejecutará. El valor `enabled` indica que se ejecutará y rechazará cualquier carga que resulte en un estado diferente a zero. El valor `testing` indica que el script va a ejecutarse pero no va a causar que se rechace ninguna carga.

`configuration_url` podría ser un enlace a este repositorio, al propietario de su organización o a su configuración global. La autorización para acceder a esta terminal en `configuration_url` se determina a nivel de administrador de sitio o de propietario.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'repo-pre-receive-hooks' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Buscar en los índices

La API de Búsqueda en los índices te permite poner en cola varias tareas de búsqueda en los índices. *Solo se encuentra disponible para los administradores de sitio [autenticados.](/rest/overview/resources-in-the-rest-api#authentication)* Los usuarios normales recibirán una respuesta `404` si intentan acceder a ella.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'search-indexing' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Usuarios

La API de Administración de usuarios te permite promover, degradar, suspender y dejar de suspender a los usuarios en un aplicativo de {% data variables.product.prodname_ghe_server %}. *Solo se encuentra disponible para los administradores de sitio [autenticados.](/rest/overview/resources-in-the-rest-api#authentication)* Los usuarios normales recibirán una respuesta `403` si intentan acceder a ella.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'users' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}
