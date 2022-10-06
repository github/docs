---
title: Autenticarse con GitHub Apps
intro: '{% data reusables.shortdesc.authenticating_with_github_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-authentication-options-for-github-apps
  - /apps/building-github-apps/authentication-options-for-github-apps
  - /apps/building-github-apps/authenticating-with-github-apps
  - /developers/apps/authenticating-with-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Authentication
ms.openlocfilehash: 6862e33adfc29cc1568d5801ac50e44587c86fa9
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147718057'
---
## Generar una llave privada

Después de que creas una GitHub App, necesitarás generar una o más llaves privadas. Utilizarás la llave privada para firmar las solicitudes de token de acceso.

Puedes crear varias llaves privadas y rotarlas para prevenir el tiempo de inactividad si alguna llave se pone en riesgo o se pierde. Para comprobar que una clave privada coincide con una clave pública, consulta [Verificación de claves privadas](#verifying-private-keys).

Para generar una llave privada:

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %} {% data reusables.user-settings.modify_github_app %}
5. En "Claves privadas", haz clic en **Generar una clave privada**.
![Generar clave privada](/assets/images/github-apps/github_apps_generate_private_keys.png)
6. Verás una llave privada en formato PEM que se descarga en tu ordenador. Asegúrate de almacenar este archivo, ya que GitHub solo almacena la porción pública de la llave.

{% note %}

**Nota:** Si usas una biblioteca que requiere un formato de archivo específico, el archivo PEM que descargues estará en formato `PKCS#1 RSAPrivateKey`.

{% endnote %}

## Verificar las llaves privadas
{% data variables.product.product_name %} genera una huella digital para cada par de llaves pública y privada utilizando la función de hash SHA-256. Puedes verificar que tu llave privada empate con la llave pública almacenada en {% data variables.product.product_name %} generando la huella digital de tu llave privada y comparándola con la huella digital que se muestra en {% data variables.product.product_name %}.

Para verificar una llave privada:

1. Encuentra la huella digital del par de llaves pública y privada que quieras verificar en la sección "Llaves privadas" de tu página de configuración de desarrollador de {% data variables.product.prodname_github_app %}. Para más información, vea [Generación de una clave privada](#generating-a-private-key).
![Huella digital de clave privada](/assets/images/github-apps/github_apps_private_key_fingerprint.png)
2. Genera la huella digital de tu clave privada (PEM) localmente utilizando el siguiente comando:
    ```shell
    $ openssl rsa -in <em>PATH_TO_PEM_FILE</em> -pubout -outform DER | openssl sha256 -binary | openssl base64
    ```
3. Compara los resultados de la huella digital generada localmente con aquella que ves en {% data variables.product.product_name %}.

## Borra las llaves privadas
Puedes eliminar una llave privada que se haya perdido o puesto en riesgo si la borras, pero debes de tener por lo menos una llave privada. Cuando solo tienes una llave, necesitas generar una nueva antes de borrar la anterior.
![Eliminación de la última clave privada](/assets/images/github-apps/github_apps_delete_key.png)

## Autenticarse como una {% data variables.product.prodname_github_app %}

El autenticarte como una {% data variables.product.prodname_github_app %} te permite hacer un par de cosas:

* Puedes recuperar información administrativa de alto nivel acerca de tu {% data variables.product.prodname_github_app %}.
* Puedes solicitar tokens de acceso para una instalación de la app.

Para autenticarte como {% data variables.product.prodname_github_app %}, [genera una clave privada](#generating-a-private-key) en formato PEM y descárgala en la máquina local. Usarás esta clave para firmar un [token web JSON (JWT)](https://jwt.io/introduction) y codificarlo mediante el algoritmo `RS256`. {% data variables.product.product_name %} revisa que la solicitud se autentique verificando el token con la llave pública almacenada de la app.

Aquí se muestra rápidamente un script de Ruby que puedes utilizar para generar un JWT. Ten en cuenta que tendrás que ejecutar `gem install jwt` antes de usarla.

<a name="jwt-payload"></a>
```ruby
require 'openssl'
require 'jwt'  # https://rubygems.org/gems/jwt

# Private key contents
private_pem = File.read("YOUR_PATH_TO_PEM")
private_key = OpenSSL::PKey::RSA.new(private_pem)

# Generate the JWT
payload = {
  # issued at time, 60 seconds in the past to allow for clock drift
  iat: Time.now.to_i - 60,
  # JWT expiration time (10 minute maximum)
  exp: Time.now.to_i + (10 * 60),
  # {% data variables.product.prodname_github_app %}'s identifier
  iss: "YOUR_APP_ID"
}

jwt = JWT.encode(payload, private_key, "RS256")
puts jwt
```

`YOUR_PATH_TO_PEM` y `YOUR_APP_ID` son los valores que debes reemplazar. Asegúrate de poner los valores entre comillas dobles.

Usa el identificador de {% data variables.product.prodname_github_app %} (`YOUR_APP_ID`) como valor de la notificación de JWT [iss](https://tools.ietf.org/html/rfc7519#section-4.1.1) (emisor). Puedes obtener el identificador de {% data variables.product.prodname_github_app %} a través del ping de webhook inicial después de [crear la aplicación](/apps/building-github-apps/creating-a-github-app/) o en cualquier momento desde la página de configuración de la aplicación en la interfaz de usuario de GitHub.com.

Después de crear el JWT, establécelo en el elemento `Header` de la solicitud de API:

```shell
$ curl -i -H "Authorization: Bearer YOUR_JWT" -H "Accept: application/vnd.github+json" {% data variables.product.api_url_pre %}/app
```

`YOUR_JWT` es el valor que debes reemplazar.

En el ejemplo anterior se usa el tiempo de expiración máximo de 10 minutos, después del cual la API comenzará a devolver un error `401`:

```json
{
  "message": "'Expiration' claim ('exp') must be a numeric value representing the future time at which the assertion expires.",
  "documentation_url": "{% data variables.product.doc_url_pre %}"
}
```

Necesitarás crear un nuevo JWT después de que el tiempo caduque.

## Acceder a terminales de API como una {% data variables.product.prodname_github_app %}

Para ver una lista de los puntos de conexión de la API REST que puedes usar para obtener información de alto nivel sobre una {% data variables.product.prodname_github_app %}, consulta "[Aplicaciones de GitHub](/rest/reference/apps)".

## Autenticarse como una instalación

El autenticarte como una instalación te permite realizar acciones en la API para dicha instalación. Antes de autenticarte como una instalación, debes crear un token de acceso a ésta. Asegúrate de que ya hayas instalado tu GitHub App en por lo menos un repositorio; es imposible crear un token de instalación si una sola instalación. Las {% data variables.product.prodname_github_apps %} utilizan estos tokens de acceso a la instalación para autenticarse. Para obtener más información, consulta "[Instalar GitHub Apps](/developers/apps/managing-github-apps/installing-github-apps)."

Predeterimenadamente, los tokens de acceso de instalación tienen un alcance de todos los repositorios a los cuales tiene acceso dicha instalación. Puedes limitar el ámbito del token de acceso de instalación a repositorios específicos mediante el parámetro `repository_ids`. Para más información, consulta [Creación de un token de acceso de instalación para un punto de conexión de aplicación](/rest/reference/apps#create-an-installation-access-token-for-an-app). Los tokens de acceso de instalación cuentan con permisos configurados por la {% data variables.product.prodname_github_app %} y caducan después de una hora.

Para enumerar las instalaciones de una aplicación autenticada, incluye el JWT [generado anteriormente](#jwt-payload) en el encabezado de autorización de la solicitud de API:

```shell
$ curl -i -X GET \
-H "Authorization: Bearer YOUR_JWT" \
-H "Accept: application/vnd.github+json" \
{% data variables.product.api_url_pre %}/app/installations
```

La respuesta incluirá una lista de instalaciones en las que se puede usar el valor de `id` de cada instalación para crear un token de acceso de instalación. Para más información sobre el formato de respuesta, consulta "[Enumeración de instalaciones para la aplicación autenticada](/rest/reference/apps#list-installations-for-the-authenticated-app)".

Para crear un token de acceso de instalación, incluye el JWT [generado anteriormente](#jwt-payload) en el encabezado de autorización de la solicitud de API y reemplaza `:installation_id` por el valor de `id` de la instalación:

```shell
$ curl -i -X POST \
-H "Authorization: Bearer YOUR_JWT" \
-H "Accept: application/vnd.github+json" \
{% data variables.product.api_url_pre %}/app/installations/:installation_id/access_tokens
```

La respuesta incluirá tu token de acceso de instalación, la fecha de caducidad, los permisos del token, y los repositorios a los cuales tiene acceso. Para más información sobre el formato de respuesta, consulta [Creación de un token de acceso de instalación para un punto de conexión de aplicación](/rest/reference/apps#create-an-installation-access-token-for-an-app).

Para autenticarte con un token de acceso de instalación, inclúyela en el encabezado de Autorización en la solicitud de la API:

```shell
$ curl -i \
-H "Authorization: Bearer YOUR_INSTALLATION_ACCESS_TOKEN" \
-H "Accept: application/vnd.github+json" \
{% data variables.product.api_url_pre %}/installation/repositories
```

`YOUR_INSTALLATION_ACCESS_TOKEN` es el valor que debes reemplazar.

{% note %}

**Nota:** {% data reusables.getting-started.bearer-vs-token %}

{% endnote %}

## Acceder a las terminales de la API como una instalación

Para ver una lista de los puntos de conexión de la API REST que están disponibles para su uso por {% data variables.product.prodname_github_apps %} mediante un token de acceso de instalación, consulta "[Puntos de conexión disponibles](/rest/overview/endpoints-available-for-github-apps)".

Para ver una lista de los puntos de conexión relacionados con las instalaciones, consulta "[Instalaciones](/rest/reference/apps#installations)".

## Acceso a Git basado en HTTP mediante una instalación

Las instalaciones con [permisos](/apps/building-github-apps/setting-permissions-for-github-apps/) en el elemento `contents` de un repositorio pueden usar sus tokens de acceso de instalación para autenticarse para el acceso de Git. Utiliza el token de acceso de instalación como la contraseña HTTP:

```shell
git clone https://x-access-token:&lt;token&gt;@github.com/owner/repo.git
```
