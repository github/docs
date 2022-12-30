---
title: Configurar tu ambiente de desarrollo para crear una GitHub App
intro: 'Aprende los fundamentos para extender y crear {% data variables.product.prodname_github_apps %} nuevas.'
redirect_from:
  - /apps/quickstart-guides/setting-up-your-development-environment
  - /developers/apps/setting-up-your-development-environment-to-create-a-github-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Development environment
ms.openlocfilehash: 61370cfa0643bcba91cfe78e077346cd40286e1e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145092199'
---
## Introducción

Esta guía te mostrará los pasos necesarios para configurar una GitHub App y para ejecutarla en un servidor. Las GitHub Apps necesitan algunos pasos de configuración para administrar eventos de webhook y así conectar el registro de la App en GitHub hacia tu código. La app en esta guía sirve como una base que puedes utilizar para extender y crear GitHub Apps nuevas.

Al finalizar esta guía habrás registrado una GitHub App y habrás configurado un servidor web para recibir eventos de webhook. Aprenderás como utilizar una herramienta llamada Smee para capturar las cargas útiles de los webhooks y reenviarlas a tu ambiente de desarrollo local. La aplicación de plantilla que configurará en esta sección todavía no hará nada especial, pero funcionará como un marco que puede usar para comenzar a escribir código de aplicaciones mediante la API, o bien para completar otras [guías de inicio rápido](/apps/quickstart-guides/). {% ifversion fpt or ghec %}Puede consultar ejemplos correctos de aplicaciones en [GitHub Marketplace](https://github.com/marketplace) y [Trabajos con GitHub](https://github.com/works-with).{% endif %}

Después de completar este proyecto entenderás cómo autenticarte como una GitHub App y como una instalación, así como la forma en que difieren estos métodos de autenticación.

Aquí están los pasos que tomarás para configurar la plantilla de la GitHub App:

1. [Inicio de un canal de Smee nuevo ](#step-1-start-a-new-smee-channel)
1. [Registro de una aplicación de GitHub nueva](#step-2-register-a-new-github-app)
1. [Almacenamiento de la clave privada y el identificador de aplicación](#step-3-save-your-private-key-and-app-id)
1. [Preparación del entorno de ejecución](#step-4-prepare-the-runtime-environment)
1. [Revisión del código de la plantilla de aplicación de GitHub](#step-5-review-the-github-app-template-code)
1. [Inicio del servidor](#step-6-start-the-server)
1. [Instalación de la aplicación en la cuenta](#step-7-install-the-app-on-your-account)

{% data reusables.apps.app-ruby-guides %}

## Prerrequisitos

Puede que te sea útil tener un entendimiento básico de lo siguiente:

* [Aplicaciones de GitHub](/apps/about-apps)
* [Webhooks](/webhooks)
* [Lenguaje de programación Ruby](https://www.ruby-lang.org/en/)
* [API de REST](/rest)
* [Sinatra](http://sinatrarb.com/)

Pero puedes seguir esta guía sin importar tu nivel de experiencia. ¡Colocaremos enlaces para la información que requieras en cada fase!

Antes de comenzar, necesitarás clonar el repositorio con el código de la plantilla que se utiliza en esta guía de inicio rápido. Abre tu app de terminal y encuentra el directorio en donde quieras almacenar el código. Ejecute este comando para clonar el repositorio de [plantillas de aplicación de GitHub](https://github.com/github-developer/github-app-template):

```shell
$ git clone https://github.com/github-developer/github-app-template.git
```

## Paso 1. Inicia un canal nuevo de Smee

Para ayudar a que GitHub envíe webhooks a tu máquina local sin exponerla al internet, puedes utilizar una herramienta llamada Smee. En primer lugar, vaya a https://smee.io y haga clic en **Iniciar un nuevo canal**. Si ya está familiarizado con otras herramientas que exponen el equipo local a Internet como [`ngrok`](https://dashboard.ngrok.com/get-started) o [`localtunnel`](https://localtunnel.github.io/www/), no dude en usarlas.

![El botón de nuevo canal de Smee](/assets/images/smee-new-channel.png)

El iniciar un canal de Smee nuevo crea un dominio único en donde GitHub puede enviar cargas útiles de webhooks. Necesitas saber cuál es este dominio para continuar con el siguiente paso. Este es un ejemplo de un dominio único en `https://smee.io/qrfeVRbFbffd6vD`:

![Un canal de Smee único](/assets/images/smee-unique-domain.png)

Posteriormente, regresa a la terminal y sigue estos pasos para ejecutar el cliente de la interface de línea de comandos (CLI) de Smee:

{% note %}

**Nota:** Los pasos siguientes son ligeramente diferentes a las instrucciones de "Uso de la CLI" que verá en la página del canal de Smee. **No** es necesario seguir las instrucciones de "Uso del cliente de Node.js" ni "Uso del soporte integrado de Probot".

{% endnote %}

1. Instalar el cliente:

    ```shell
    $ npm install --global smee-client
    ```

2. Ejecute el cliente (reemplace `https://smee.io/qrfeVRbFbffd6vD` por un dominio propio):

    ```shell
    $ smee --url https://smee.io/qrfeVRbFbffd6vD --path /event_handler --port 3000
    ```

    El resultado debe ser parecido a lo siguiente:

    ```shell
    Forwarding https://smee.io/qrfeVRbFbffd6vD to http://127.0.0.1:3000/event_handler
    Connected https://smee.io/qrfeVRbFbffd6vD
    ```

El comando `smee --url <unique_channel>` indica a Smee que reenvíe todos los eventos de webhook recibidos por el canal Smee al cliente Smee que se ejecuta en el equipo. La opción `--path /event_handler` reenvía los eventos a la ruta `/event_handler`, que se describirá en una [sección posterior](#step-5-review-the-github-app-template-code). La opción `--port 3000` especifica el puerto 3000, que es al que escuchará el servidor. Si utilizas Smee, tu máquina no necesita estar abierta al internet público para recibir webhooks de GitHub. También puedes abrir la URL de Smee en tu buscador para inspeccionar las cargas útiles de los webhooks como vayan llegando.

Te recomendamos dejar abierta esta ventana de terminal y mantener a Smee conectado mientras completas el resto de los pasos de esta guía. Aunque _puede_ desconectar y el cliente de Smee y volverlo a conectar sin perder el dominio único (a diferencia de `ngrok`), es posible que le resulte más sencillo dejarlo conectado y realizar otras tareas de la línea de comandos en otra ventana de terminal.

## Paso 2. Registra una GitHub App nueva

Si todavía no tiene una cuenta de GitHub, ahora es un [buen momento para unirse](https://github.com/join). ¡No te olvides de verificar tu dirección de correo electrónico antes de continuar! Para registrar una aplicación nueva, visite la [página de configuración de aplicaciones](https://github.com/settings/apps) en el perfil de GitHub y haga clic en **Nueva aplicación de GitHub**.

![El sitio web de Github, mostrando la **App Nueva**](/assets/images/new-app.png)

Verás un formato en el cual puedes ingresar detalles sobre tu app. Vea "[Creación de una aplicación de GitHub](/apps/building-github-apps/creating-a-github-app/)" para obtener información general sobre los campos de esta página. Para los fines de esta guía, necesitaras ingresar datos específicos en unos cuantos campos:

{% note %}

**Nota:** Siempre puede actualizar esta configuración más adelante para que apunte a un servidor hospedado.

{% endnote %}

* En "URL de la página principal", utiliza el dominio que emitió Smee. Por ejemplo:

    ![Formato completado con el dominio de Smee para la URL de una página principal](/assets/images/homepage-url.png)

* Para la "URL del webhook", utiliza nuevamente el dominio que emitió Smee. Por ejemplo:

    ![Formato completado con el dominio de Smee para la URl de un webhook](/assets/images/webhook-url.png)

* Para el "Secreto del webhook", crea una contraseña para asegurar las terminales de tu webhook. Este debería ser algo que solo tú (y GitHub, a través de este formulario) sepas. El secreto es importante, ya que estarás recibiendo cargas útiles desde el internet público, y utilizarás este secreto para verificar el remitente del webhook. Nota que la configuración de la GitHub App dice que el secreto de webhook es opcional, lo cual es verdad en la mayoría de los casos, pero para que funcione el código de la plantilla de la app, debes configurar un secreto de webhook.

    ![Formato completado con el secreto de un webhook](/assets/images/webhook-secret.png)

* En la página Permisos y webhooks, puede especificar un conjunto de permisos para la aplicación, que determinan la cantidad de datos a los que tiene acceso. En la sección "Permisos de repositorio", desplácese hacia abajo hasta "Metadatos" y seleccione `Access: Read-only`. Si decides extender esta app de plantilla, puedes actualizar estos permisos más adelante.

* En la parte inferior de la página Permisos y webhooks, especifique si es una aplicación privada o pública. Esto se refiere a quién puede instalarla: ¿solo tú, o alguien más en general? Por ahora, seleccione **Solo en esta cuenta** para dejar la aplicación como privada.

    ![Privacidad de GitHub App](/assets/images/create_app.png)

Haga clic en **Crear aplicación de GitHub** para crear la aplicación.

## Paso 3. Guarda tu llave privada e ID de tu App

Después de crear la aplicación, volverá a la [página de configuración de la aplicación](https://github.com/settings/apps). Tienes dos cosas más para hacer aquí:

* **Generar una clave privada para la aplicación.** Esto es necesario para autenticar la aplicación más adelante. Desplácese hacia abajo en la página y haga clic en **Generar una clave privada**. Guarde el archivo `PEM` resultante (con un nombre similar a _`app-name`_ - _`date`_ -`private-key.pem`) en un directorio donde pueda encontrarlo después.

    ![El diálogo de generación de la llave privada](/assets/images/private_key.png)

* **Anote el id. de la aplicación que GitHub ha asignado a la aplicación.** Lo necesitará para preparar el entorno de ejecución.

    <img src="/assets/images/app_id.png" alt="Your app's ID number" width="200px"/>

## Paso 4. Prepara el ambiente de ejecución

Para mantener tu información segura, te recomendamos poner todos los secretos relacionados con tu app en la memoria de tu ordenador en donde tu app pueda encontrarlos, en vez de ponerlos directamente en tu código. Una herramienta de desarrollo útil denominada [dotenv](https://github.com/bkeepers/dotenv) carga variables de entorno específicas del proyecto desde un archivo `.env` a `ENV`. Nunca confirme el archivo `.env` en GitHub. Este es un archivo local que almacena la información sensible que no quieres sacar al internet público. El archivo `.env` ya está incluido en el archivo [`.gitignore`](/github/getting-started-with-github/ignoring-files/) del repositorio para evitarlo.

El código de plantilla que ha descargado en la sección [Requisitos previos](#prerequisites) ya tiene un archivo de ejemplo denominado `.env-example`. Cambie el nombre del archivo de ejemplo de `.env-example` a `.env`, o bien cree una copia del archivo `.env-example` con el nombre `.env`. Todavía no ha instalado dotenv, pero lo hará más adelante en este inicio rápido al ejecutar `bundle install`. **Nota:** Los inicios rápidos que hacen referencia a los pasos de esta guía pueden incluir variables de entorno adicionales en el archivo `.env-example`. Referencia la guía de inicio rápido para el proyecto que clonaste en GitHub para obtener orientación para configurar estas variables de ambiente adicionales.

Debe agregar estas variables al archivo `.env`:

* _`GITHUB_PRIVATE_KEY`_ : agregue la clave privada que [ha generado y guardado antes](#step-3-save-your-private-key-and-app-id). Abra el archivo `.pem` con un editor de texto o use la línea de comandos para mostrar el contenido del archivo: `cat path/to/your/private-key.pem`. Copie todo el contenido del archivo como valor de `GITHUB_PRIVATE_KEY` en el archivo `.env`. **Nota:** Como el archivo PEM tiene más de una línea de código, tendrá que incluir el valor entre comillas como en el ejemplo siguiente.
* _`GITHUB_APP_IDENTIFIER`_ : use el id. de la aplicación que ha anotado en la sección anterior.
* _`GITHUB_WEBHOOK_SECRET`_ : agregue el secreto de webhook.

A continuación, se muestra un archivo `.env` de ejemplo:

```
GITHUB_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----
...
HkVN9...
...
-----END DSA PRIVATE KEY-----"
GITHUB_APP_IDENTIFIER=12345
GITHUB_WEBHOOK_SECRET=your webhook secret
```

## Paso 5. Revisar el código de la GitHub App de plantilla

Éste contiene código que todas las GitHub Apps necesitarán. Esta sección te muestra el código que ya existe en la plantilla de la GitHub App. No hay algún paso que necesites completar en esta sección. Si ya está familiarizado con el código de plantilla, puede pasar a "[Paso 6. Inicio del servidor](#step-6-start-the-server)".

Abra el archivo `template_server.rb` en el editor de texto que prefiera. Verás los comentarios a lo largo de este archivo, los cuales proporcionan contexto adicional para el código de la plantilla. Te recomendamos leer estos comentarios cuidadosamente, e incluso, agregar tus propios comentarios para complementar el código que escribas.

En la parte superior del archivo verá `set :port 3000`, que establece el puerto que se usa al iniciar el servidor web para que coincida con el puerto al que haya redirigido las cargas de webhook en "[Paso 1. Inicio de un canal nuevo de Smee](#step-1-start-a-new-smee-channel)".

El código siguiente que verá es la declaración `class GHApp < Sinatra::Application`. Escribirás todo el código de tu GitHub App dentro de esta clase.

Fuera de esta caja, la clase en la plantilla realiza lo siguiente:
* [Lee las variables de entorno](#read-the-environment-variables)
* [Active el registro.](#turn-on-logging)
* [Define un filtro anterior](#define-a-before-filter)
* [Define el controlador de ruta](#define-a-route-handler)
* [Definición de métodos auxiliares](#define-the-helper-methods)

### Lee las variables de ambiente

Lo primero que hace esta clase es leer las tres variables de entorno establecidas en "[Paso 4. Preparación del entorno de ejecución](#step-4-prepare-the-runtime-environment)" y las almacena en variables para usarlas después:

``` ruby
# Expects that the private key in PEM format. Converts the newlines
PRIVATE_KEY = OpenSSL::PKey::RSA.new(ENV['GITHUB_PRIVATE_KEY'].gsub('\n', "\n"))

# Your registered app must have a secret set. The secret is used to verify
# that webhooks are sent by GitHub.
WEBHOOK_SECRET = ENV['GITHUB_WEBHOOK_SECRET']

# The GitHub App's identifier (type integer) set when registering an app.
APP_IDENTIFIER = ENV['GITHUB_APP_IDENTIFIER']
```

### Active el registro.

Posteriormente, hay un bloqueo de código que habilita el inicio de sesión durante el desarrollo, el cual es el ambiente predeterminado en Sinatra. Este código activa el registro en el nivel `DEBUG` para mostrar una salida útil en la terminal mientras desarrolla la aplicación:

``` ruby
# Turn on Sinatra's verbose logging during development
configure :development do
  set :logging, Logger::DEBUG
end
```

### Define un filtro del antes

Sinatra usa [filtros anteriores](https://github.com/sinatra/sinatra#filters) que permiten ejecutar código antes del controlador de ruta. El bloque `before` de la plantilla llama a cuatro [métodos auxiliares](https://github.com/sinatra/sinatra#helpers). La aplicación de plantilla define esos métodos auxiliares en una [sección posterior](#define-the-helper-methods).

``` ruby
# Before each request to the `/event_handler` route
before '/event_handler' do
  get_payload_request(request)
  verify_webhook_signature
  authenticate_app
  # Authenticate the app installation in order to run API operations
  authenticate_installation(@payload)
end
```

### Define el gestor de la ruta

Se incluye una ruta vacía en el código de la plantilla. Este código controla todas las solicitudes `POST` a la ruta `/event_handler`. No escribirá este controlador de eventos en este inicio rápido, pero vea las otras [guías de inicio rápido](/apps/quickstart-guides/) para obtener ejemplos de cómo ampliar esta aplicación de plantilla.

``` ruby
post '/event_handler' do

end
```

### Definición de métodos auxiliares

Los métodos auxiliares en esta plantilla hacen la mayoria del trabajo pesado. Se definen cuatro métodos auxiliares en esta sección del código.

#### Gestionar la carga útil del webhok

El primer método `get_payload_request` captura la carga de webhook y la convierte a formato JSON, lo que facilita mucho el acceso a los datos de la carga.

#### Verificar la firma del webhook

El segundo método `verify_webhook_signature` realiza la comprobación de la firma de webhook para asegurarse de que GitHub ha generado el evento. Para más información sobre el código del método auxiliar `verify_webhook_signature`, vea "[Protección de los webhooks](/webhooks/securing/)". Si los webhooks son seguros, este método registrará todas las cárgas útiles en tu terminal. El código de registro es útil para verificar que tu servidor web esté trabajando, pero siempre lo puedes eliminar más adelante.

#### Autenticarse como una GitHub App

Para realizar llamadas API, usará la [biblioteca Octokit](http://octokit.github.io/octokit.rb/). Para que puedas hacer algo interesante con esta biblioteca necesitarás, o más bien, tu app necesitará autenticarse. GitHub Apps tiene dos métodos de autenticación:

- Autenticación como una aplicación de GitHub mediante un [token web JSON (JWT)](https://jwt.io/introduction).
- Autenticación como una instalación específica de una GitHub App utilizando un token de acceso de instalación.

Obtendrá información sobre la autenticación como una instalación en la [sección siguiente](#authenticating-as-an-installation).

La [autenticación como una aplicación de GitHub](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) le permite realizar un par de tareas:

 * Puedes recuperar información administrativa de alto nivel sobre tu GitHub App.
 * Puedes solicitar tokens de acceso para una instalación de la app.

Por ejemplo, te podrías autenticar como una GitHub App para solicitar una lista de las cuentas (de organización y de persona) que han instalado tu app. Pero este método de autenticación no te permite hacer mucho con la API. Para acceder a los datos del repositorio y realizar operaciones en nombre de la instalación, necesitas autenticarte como una instalación. Para hacerlo, primero necesitarás autenticarte como una GitHub App para solicitar un token de acceso a la instalación.

A fin de poder usar la biblioteca Octokit.rb para realizar llamadas API, tendrá que inicializar un [cliente de Octokit](http://octokit.github.io/octokit.rb/Octokit/Client.html) autenticado como una aplicación de GitHub. El método auxiliar `authenticate_app` se encarga precisamente de eso.

``` ruby
# Instantiate an Octokit client authenticated as a GitHub App.
# GitHub App authentication requires that you construct a
# JWT (https://jwt.io/introduction/) signed with the app's private key,
# so GitHub can be sure that it came from the app an not altered by
# a malicious third party.
def authenticate_app
  payload = {
      # The time that this JWT was issued, _i.e._ now.
      iat: Time.now.to_i,

      # JWT expiration time (10 minute maximum)
      exp: Time.now.to_i + (10 * 60),

      # Your GitHub App's identifier number
      iss: APP_IDENTIFIER
  }

  # Cryptographically sign the JWT
  jwt = JWT.encode(payload, PRIVATE_KEY, 'RS256')

  # Create the Octokit client, using the JWT as the auth token.
  @app_client ||= Octokit::Client.new(bearer_token: jwt)
end
```

El código anterior genera un [JSON Web Token (JWT)](https://jwt.io/introduction) y lo usa, junto con la clave privada de la aplicación, para inicializar el cliente de Octokit. GitHub revisa la autenticación de una solicitud verificando el token con la llave pública almacenada en la app. Para más información sobre cómo funciona este código, vea "[Autenticación como una aplicación de GitHub](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app)".

#### Autenticarse como una instalación

Una _instalación_ hace referencia a cualquier cuenta de usuario u organización que haya instalado la aplicación. Aún si alguien instala la app en más de un repositorio, esto únicamente cuenta como una instalación, ya que toma lugar en la misma cuenta. El último método auxiliar `authenticate_installation` inicializa un [cliente de Octokit](http://octokit.github.io/octokit.rb/Octokit/Client.html) autenticado como una instalación. Este cliente de Octokit es lo que utilizarás para hacer llamadas autenticadas a la API.

``` ruby
# Instantiate an Octokit client authenticated as an installation of a
# GitHub App to run API operations.
def authenticate_installation(payload)
  installation_id = payload['installation']['id']
  installation_token = @app_client.create_app_installation_access_token(installation_id)[:token]
  @installation_client = Octokit::Client.new(bearer_token: installation_token)
end
```

El método [`create_app_installation_access_token`](http://octokit.github.io/octokit.rb/Octokit/Client/Apps.html#create_app_installation_access_token-instance_method) de Octokit crea un token de instalación. Este método acepta dos argumentos:

* Instalación (número entero): la ID de la instalación de una GitHub App
* Opciones (hash, el valor predeterminado es `{}`): un conjunto personalizable de opciones

Cada vez que una aplicación de GitHub recibe un webhook, incluye un objeto `installation` con una instancia de `id`. Mediante el cliente autenticado como una aplicación de GitHub, este identificador se pasa al método `create_app_installation_access_token` a fin de generar un token de acceso para cada instalación. Ya que no estás pasando ninguna opción al método, ésta será un hash vacío predeterminadamente. Si examina [la documentación](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation), puede ver que la respuesta para `create_app_installation_access_token` incluye dos campos: `token` y `expired_at`. El código de la plantilla selecciona al token en la respuesta e inicializa un cliente de instalación.

Una vez teniendo listo este métido, cada vez que tu app reciba una nueva carga útil de un webhook, este creará un cliente para la instalación que activó dicho evento. Este proceso de autenticación habilita a tu GitHub App para que trabaje para todas las instalaciones en cualquier cuenta.

¡Ahora estás listo para comenzar a hacer llamadas a la API!

## Paso 6. Inicio del servidor

La aplicación todavía no _hace_ nada, pero en este punto, puede hacer que se ejecute en el servidor.

Mantén a Smee ejecutándose en la pestaña actual dentro de tu terminal. Abra una nueva pestaña y ejecute `cd` en el directorio donde [ha clonado el código de la aplicación de plantilla](#prerequisites). El código de Ruby de este repositorio iniciará un servidor web de [Sinatra](http://sinatrarb.com/). Este código tiene algunas cuantas dependencias. Puedes instalarlas si ejecutas:

```shell
$ gem install bundler
```

Seguido de:

```shell
$ bundle install
```

Con las dependencias instaladas, puedes iniciar el servidor:

```shell
$ bundle exec ruby template_server.rb
```

Debería obtener una respuesta similar a la siguiente:

```shell
> == Sinatra (v2.0.3) has taken the stage on 3000 for development with backup from Puma
> Puma starting in single mode...
> * Version 3.11.2 (ruby 2.4.0-p0), codename: Love Song
> * Min threads: 0, max threads: 16
> * Environment: development
> * Listening on tcp://localhost:3000
> Use Ctrl-C to stop
```

Si ve un error, asegúrese de que ha creado el archivo `.env` en el directorio que contiene `template_server.rb`.

Una vez que el servidor esté en ejecución, puede probarlo si va a `http://localhost:3000` en el explorador. Si la app funciona como se espera, verás una página de error útil:

<img src="/assets/images/sinatra-404.png" alt="Sinatra's 404 error page" width="500px"/>

¡Esto es bueno! Aunque es una página de error, es una página de error de _Sinatra_, lo que significa que la aplicación está conectada al servidor de la forma esperada. Estás viendo este mensaje porque no le has dado nada más que mostrar a la app.

## Paso 7. Instala la app en tu cuenta

Puedes probar que el servidor está escuchando a tu app si activas un evento para que lo reciba. Un evento sencillo que puede probar consiste en instalar la aplicación en la cuenta de GitHub, que debe enviar el evento [`installation`](/webhooks/event-payloads/#installation). Si la aplicación lo recibe, debería ver alguna salida en la pestaña Terminal donde ha iniciado `template_server.rb`.

Para instalar la aplicación, visite la [página de configuración de la aplicación](https://github.com/settings/apps), elija la aplicación y haga clic en **Instalar aplicación** en la barra lateral. Junto al nombre de usuario, haga clic en **Instalar**.

Se te solicitará si quieres instalar la app en todos los repositorios o solo en los seleccionados. No hay problema si no quiere instalar la aplicación en _todos_ los repositorios. Tal vez quieras crear un repositorio de entorno de pruebas para e instalar tu app ahí.

<img src="/assets/images/install_permissions.png" alt="App installation permissions" width="500px"/>

Después de hacer clic en **Instalar**, examine la salida en el terminal. Deberíamos ver algo parecido a lo siguiente:

```shell
> D, [2018-06-29T15:45:43.773077 #30488] DEBUG -- : ---- received event integration_installation
> D, [2018-06-29T15:45:43.773141 #30488] DEBUG -- : ----         action created
> 192.30.252.44 - - [29/Jun/2018:15:45:43 -0400] "POST / HTTP/2" 200 2 0.0067
> D, [2018-06-29T15:45:43.833016 #30488] DEBUG -- : ---- received event installation
> D, [2018-06-29T15:45:43.833062 #30488] DEBUG -- : ----         action created
> 192.30.252.39 - - [29/Jun/2018:15:45:43 -0400] "POST / HTTP/2" 200 2 0.0019
```

¡Estas son buenas noticias! Esto significa que tu app recibió una notificación de que se instaló en tu cuenta de GitHub. Si ves algo como esto, tu app está ejecutándose en el servidor como lo esperabas. 🙌

Si no ve la salida, asegúrese de que Smee se ejecuta correctamente en otra pestaña de terminal. Si tiene que reiniciar Smee, recuerde que también tendrá que _desinstalar_ la aplicación y _volverla a instalar_ para enviar el evento `installation` a la aplicación de nuevo y ver la salida en el terminal. Si Smee no es el problema, vea la sección "[Solución de problemas](#troubleshooting)" para obtener otras ideas.

Si se pregunta de dónde procede la salida del terminal anterior, está escrita en el [código de plantilla de la aplicación](#prerequisites) en `template_server.rb`.

## Solución de problemas

Aquí te mostramos algunos problemas comunes y algunas soluciones sugeridas. Si te encuentras con cualquier otro problema, puedes pedir ayuda o consejo en el {% data variables.product.prodname_support_forum_with_url %}.

* **P:** Cuando intento instalar el cliente de línea de comandos Smee, se produce el error siguiente:

    ```shell
    > npm: command not found
    ```

    **R:** Parece que no ha instalado npm. La mejor forma de instalarlo consiste en descargar el paquete de Node.js en https://nodejs.org y seguir las instrucciones de instalación para el sistema. Se instalará npm junto con Node.js.

* **P:** Cuando ejecuto el servidor, se produce el error siguiente:

    ```shell
    > server.rb:38:in `initialize': Neither PUB key nor PRIV key: header too long (OpenSSL::PKey::RSAError)
    ```

    **R:** Probablemente no ha configurado la variable de entorno de clave privada de forma correcta. La variable `GITHUB_PRIVATE_KEY` debería tener este aspecto:

    ```
    GITHUB_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----
    ...
    HkVN9...
    ...
    -----END RSA PRIVATE KEY-----"
    ```

    Compruebe que ha copiado la clave pública correcta en el archivo `.env`.

* **P:** Cuando ejecuto el servidor, se bloquea con este error:

    ```shell
    > Octokit::Unauthorized ... 401 - Bad credentials`
    ```

    **R:** Es posible que se haya autenticado como una aplicación de GitHub, pero no como una instalación. Asegúrese de seguir todos los pasos descritos en "[Autenticación como instalación](#authenticating-as-an-installation)" y use la variable de instancia `@installation_client` (autenticada con un token de acceso de instalación) para las operaciones de API, no la variable de instancia `@app_client` (autenticada con un JWT). `@app_client` solo puede recuperar información general sobre la aplicación y obtener tokens de acceso de instalación. No puede más que esto en la API.

* **P:** Mi servidor no escucha eventos. El cliente de Smee está ejecutándose en una ventana de la terminal, y estoy instalando la app en un repositorio con GitHub, pero no veo ninguna salida en la ventana de la terminal en donde estoy ejecutando el servidor.

    **R:** Es posible que el cliente de Smee no esté en ejecución, que ejecute el comando de Smee con los parámetros incorrectos, o bien que no tenga el dominio de Smee correcto en la configuración de la aplicación de GitHub. En primer lugar, compruebe que el cliente Smee se ejecuta en una pestaña Terminal. Si ese no es el problema, visite la [página de configuración de la aplicación](https://github.com/settings/apps) y compruebe los campos que se muestran en "[Paso 2. Registro de una nueva aplicación de GitHub](#step-2-register-a-new-github-app)". Asegúrese de que el dominio de esos campos coincide con el dominio que ha usado en el comando `smee -u <unique_channel>` en "[Paso 1. Inicio de un nuevo canal Smee](#step-1-start-a-new-smee-channel)". Si no funcionada nada de lo anterior, compruebe que ejecuta el comando de Smee completo, incluidas las opciones `--path` y `--port`, por ejemplo: `smee --url https://smee.io/qrfeVRbFbffd6vD --path /event_handler --port 3000` (reemplace `https://smee.io/qrfeVRbFbffd6vD` por un dominio de Smee propio).

* **P:** Se produce un error `Octokit::NotFound` 404 en la salida de depuración:
    ```
    2018-12-06 15:00:56 - Octokit::NotFound - POST {% data variables.product.api_url_code %}/app/installations/500991/access_tokens: 404 - Not Found // See: /v3/apps/#create-a-new-installation-token:
    ```

    **R:** Asegúrese de que las variables del archivo `.env` son correctas. Asegúrese de que no ha configurado variables idénticas en otros archivos de variable de entorno como `bash_profile`. Puede comprobar las variables de entorno que usa la aplicación si agrega instrucciones `puts` en el código de la aplicación y vuelve a ejecutar el código. Por ejemplo, para asegurarse de que ha establecido la clave privada correcta, podría agregar `puts PRIVATE_KEY` al código de la aplicación:

    ```
    PRIVATE_KEY = OpenSSL::PKey::RSA.new(ENV['GITHUB_PRIVATE_KEY'].gsub('\n', "\n"))
    puts PRIVATE_KEY
    ```

## Conclusión

Después de seguir esta guía, ¡habrás aprendido los fundamentos básicos para desarrollar GitHub Apps! Para hacer una revisión:

* Registrar una GitHub App nueva
* Utilizar Smee para recibir cargas útiles de los webhooks
* Ejecutar un servidor web simple a través de Sinatra
* Autenticarte como una GitHub App
* Autenticarte como una instalación

## Pasos siguientes

Ahora tienes una GitHub App ejecutándose en un servidor. Todavía no hace nada especial, pero compruebe algunas de las formas de personalizar la plantilla de aplicación de GitHub en las otras [guías de inicio rápido](/apps/quickstart-guides/).
