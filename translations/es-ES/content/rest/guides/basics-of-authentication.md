---
title: Información básica sobre la autenticación
intro: Aprende acerca de las formas diferentes de autenticarse con algunos ejemplos.
redirect_from:
  - /guides/basics-of-authentication
  - /v3/guides/basics-of-authentication
  - /rest/basics-of-authentication
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---


En esta sección, vamos a enfocarnos en lo básico de la autenticación. Específicamente, vamos a crear un servidor en Ruby (utilizando [Sintatra][Sinatra]) que implemente el [flujo web][webflow] de una aplicación en varias formas diferentes.

{% tip %}

Puedes descargar todo el código fuente de este proyecto [del repo platform-samples](https://github.com/github/platform-samples/tree/master/api/).

{% endtip %}

### Registrar tu app

Primero, necesitas [registrar tu aplicación][new oauth app]. A cada aplicación de OAuth que se registra se le asigna una ID de Cliente única y un Secreto de Cliente. ¡El Secreto de Cliente no puede compartirse! Eso incluye el verificar la secuencia en tu repositorio.

Puedes llenar toda la información como más te guste, con excepción de la **URL de rellamado para la autorización**. Esta es fácilmente la parte más importante para configurar tu aplicación. Es la URL de rellamado a la cual {% data variables.product.product_name %} devuelve al usuario después de una autenticación exitosa.

Ya que estamos ejecutando un servidor común de Sinatra, la ubicación de la instancia local se configura como `http://localhost:4567`. Vamos a llenar la URL de rellamado como `http://localhost:4567/callback`.

### Aceptar la autorización del usuario

{% data reusables.apps.deprecating_auth_with_query_parameters %}

Ahora, vamos a comenzar a llenar nuestro servidor común. Crea un archivo que se llame _server.rb_ y pégale esto:

``` ruby
require 'sinatra'
require 'rest-client'
require 'json'

CLIENT_ID = ENV['GH_BASIC_CLIENT_ID']
CLIENT_SECRET = ENV['GH_BASIC_SECRET_ID']

get '/' do
  erb :index, :locals => {:client_id => CLIENT_ID}
end
```

Tu ID de cliente y tus llaves secretas de cliente vienen de [la página de configuración de tu aplicación][app settings].
{% if currentVersion == "free-pro-team@latest" %} **Nunca, _jamás_** almacenes estos valores en
{% data variables.product.product_name %} ni en algún otro lugar público, para el caso.{% endif %} Te recomendamos almacenarlos como
[variables de ambiente][about env vars]--que es exactamente lo que hemos hecho aquí.

Posteriormente, pega este contenido en _views/index.erb_:

``` erb
<html>
  <head>
  </head>
  <body>
    <p>
      Well, hello there!
    </p>
    <p>
      We're going to now talk to the GitHub API. Ready?
      <a href="https://github.com/login/oauth/authorize?scope=user:email&client_id=<%= client_id %>">Click here</a> to begin!</a>
    </p>
    <p>
      If that link doesn't work, remember to provide your own <a href="/apps/building-oauth-apps/authorizing-oauth-apps/">Client ID</a>!
    </p>
  </body>
</html>
```

(Si no estás familiarizado con la forma en que funciona Sinatra, te recomendamos [leer la guía de Sinatra][Sinatra guide].)

También, ten en cuenta que la URL utiliza el parámetro de consulta `scope` para definir los [alcances][oauth scopes] que solicita la aplicación. Para nuestra aplicación, estamos solicitando el alcance `user:email` para leer las direcciones de correo electrónico privadas.

Navega en tu buscador hacia `http://localhost:4567`. Después de dar clic en el enlace, se te llevará a {% data variables.product.product_name %} y se te mostrará un diálogo que se ve más o menos así: ![Diálogo de OAuth de GitHub](/assets/images/oauth_prompt.png)

Si confías en ti mismo, da clic en **Autorizar App**. ¡Oh-oh! Sinatra te arroja un error `404`. ¡¿Qué pasa?!

Bueno, ¡¿recuerdas cuando especificamos la URL de rellamado como `callback`? No proporcionamos una ruta para ésta, así que {% data variables.product.product_name %} no sabe dónde dejar al usuario después de autorizar la app. ¡Arreglémoslo ahora!

#### Proporcionar un rellamado

En _server.rb_, agrega una ruta para especificar lo que debe hacer la rellamada:

``` ruby
get '/callback' do
  # get temporary GitHub code...
  session_code = request.env['rack.request.query_hash']['code']

  # ... and POST it back to GitHub
  result = RestClient.post('https://github.com/login/oauth/access_token',
                          {:client_id => CLIENT_ID,
                           :client_secret => CLIENT_SECRET,
                           :code => session_code},
                           :accept => :json)

  # extract the token and granted scopes
  access_token = JSON.parse(result)['access_token']
end
```

Después de que la app se autentica exitosamente, {% data variables.product.product_name %} proporciona un valor temporal de `code`. Necesitas hacer `POST` para este código en {% data variables.product.product_name %} para intercambiarlo por un `access_token`. Para simplificar nuestras solicitudes HTTP de GET y de POST, utilizamos el [rest-client][REST Client]. Nota que probablemente jamás accedas a la API a través de REST. Para aplicarlo con más seriedad, probablemente debas usar [una biblioteca escrita en tu lenguaje preferido][libraries].

#### Verificar los alcances otorgados

Los usuarios pueden editar los alcances que solicitaste cambiando directamente la URL. Esto puee otorgar a tu aplicación menos accesos de los que solicitaste originalmente. Antes de hacer cualquier solicitud con el token, verifica los alcances que el usuario le otorgó a éste. Para obtener más información acerca de los alcances solicitados y otorgados, consulta la sección "[Alcances para las Apps de OAuth](/developers/apps/scopes-for-oauth-apps#requested-scopes-and-granted-scopes)".

Los alcances que otorgamos se devuelven como parte de la respuesta de intercambiar un token.

``` ruby
get '/callback' do
  # ...
  # Get the access_token using the code sample above
  # ...

  # check if we were granted user:email scope
  scopes = JSON.parse(result)['scope'].split(',')
  has_user_email_scope = scopes.include? 'user:email'
end
```

En nuestra aplicación, estamos utilizando `scopes.include?` para verificar si se nos otorgó el alcance de `user:email` que necesitamos para recuperar las direcciones de correo electrónico. Si la aplicación hubiera preguntado por otros alcances, habríamos verificado esas también.

También, ya que hay una relación jerárquica entre alcances, debes verificar que se te haya otorgado el nuvel más bajo de los alcances que se requieren. Por ejemplo, si la aplicación hubiera pedido el alcance `user`, puede que se le haya otorgado únicamente el alcance `user:email`. En ese caso, a la applicación no se le hubiera otorgado lo que pidió, pero los alcances que obtuvo hubieran seguido siendo suficientes.

No es suficiente verificar los alcances solo antes de hacer las solicitudes, ya que es posible que los usuarios cambien los alcances entre tus solicitudes de verificación y las solicitudes reales. En caso de que esto suceda, las llamadas a la API que esperas tengan éxito podrían fallar con un estado `404` o `401`, o bien, podrían devolver un subconjunto de información diferente.

Para ayudarte a manejar estas situaciones fácilmente, todas las respuestas de la API a las solicitudes que se hagan con tokens válidos también contienen un [encabezado de `X-OAuth-Scopes`][oauth scopes]. Este encabezado contiene la lista de alcances del token que se utilizó para realizar la solicitud. Adicionalmente a esto, la API de Aplicaciones de OAuth proporciona una terminal para {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} [verificar la validez de un token](/rest/reference/apps#check-a-token){% else %}[verificar la validez de un token](/rest/reference/apps#check-an-authorization){% endif %}. Utiliza esta información para detectar los cambios en los alcances de los tokens, y para informar a tus usuarios sobre los cambios disponibles en la funcionalidad de la aplicación.

#### Realizar solicitudes autenticadas

Por fin, con este token de acceso, podrás hacer solicitudes autenticadas como el usuario que inició sesión:

``` ruby
# fetch user information
auth_result = JSON.parse(RestClient.get('{% data variables.product.api_url_code %}/user',
                                        {:params => {:access_token => access_token}}))

# if the user authorized it, fetch private emails
if has_user_email_scope
  auth_result['private_emails'] =
    JSON.parse(RestClient.get('{% data variables.product.api_url_code %}/user/emails',
                              {:params => {:access_token => access_token}}))
end

erb :basic, :locals => auth_result
```

Podemos hacer lo que queramos con nuestros resultados. En este caso, solo las vaciaremos directamente en _basic.erb_:

``` erb
<p>Hello, <%= login %>!</p>
<p>
  <% if !email.nil? && !email.empty? %> It looks like your public email address is <%= email %>.
  <% else %> It looks like you don't have a public email. That's cool.
  <% end %>
</p>
<p>
  <% if defined? private_emails %>
  With your permission, we were also able to dig up your private email addresses:
  <%= private_emails.map{ |private_email_address| private_email_address["email"] }.join(', ') %>
  <% else %>
  Also, you're a bit secretive about your private email addresses.
  <% end %>
</p>
```

### Implementar la autenticación "persistente"

Estaríamos hablando de un pésimo modelo si requerimos que los usuarios inicien sesión en la app cada vez que necesiten acceder a la página web. Por ejemplo, intenta navegar directamente a `http://localhost:4567/basic`. Obtendrás un error.

¿Qué pasaría si pudiéramos evitar todo el proceso de "da clic aquí", y solo lo _recordáramos_, mientras que los usuarios sigan en sesión dentro de
{% data variables.product.product_name %}, y pudieran acceder a esta aplicación? Agárrate,
porque _eso es exactamente lo que vamos a hacer_.

Nuestro pequeño servidor que mostramos antes es muy simple. Para poder insertar algún tipo de autenticación inteligente, vamos a optar por utilizar sesiones para almacenar los tokens. Esto hará que la autenticación sea transparente para el usuario.

También, ya que estamos haciendo persistir a los alcances dentro de la sesión, necesitaremos gestionar los casos cuando el usuario actualice los alcances después de que los verifiquemos, o cuando revoque el token. Para lograrlo, utilizaremos un bloque de `rescue` y verificaremos que la primera llamada a la API sea exitosa, lo cual verificará que el token sea válido. Después de esto, verificaremos el encabezado de respuesta de `X-OAuth-Scopes` para verificar que el usuario no haya revocado el alcance `user:email`.

Crea un archivo que se llame _advanced_server.rb_, y pega estas líneas en él:

``` ruby
require 'sinatra'
require 'rest_client'
require 'json'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
# if ENV['GITHUB_CLIENT_ID'] && ENV['GITHUB_CLIENT_SECRET']
#  CLIENT_ID        = ENV['GITHUB_CLIENT_ID']
#  CLIENT_SECRET    = ENV['GITHUB_CLIENT_SECRET']
# end

CLIENT_ID = ENV['GH_BASIC_CLIENT_ID']
CLIENT_SECRET = ENV['GH_BASIC_SECRET_ID']

use Rack::Session::Pool, :cookie_only => false

def authenticated?
  session[:access_token]
end

def authenticate!
  erb :index, :locals => {:client_id => CLIENT_ID}
end

get '/' do
  if !authenticated?
    authenticate!
  else
    access_token = session[:access_token]
    scopes = []

    begin
      auth_result = RestClient.get('{% data variables.product.api_url_code %}/user',
                                   {:params => {:access_token => access_token},
                                    :accept => :json})
    rescue => e
      # request didn't succeed because the token was revoked so we
      # invalidate the token stored in the session and render the
      # index page so that the user can start the OAuth flow again

      session[:access_token] = nil
      return authenticate!
    end

    # the request succeeded, so we check the list of current scopes
    if auth_result.headers.include? :x_oauth_scopes
      scopes = auth_result.headers[:x_oauth_scopes].split(', ')
    end

    auth_result = JSON.parse(auth_result)

    if scopes.include? 'user:email'
      auth_result['private_emails'] =
        JSON.parse(RestClient.get('{% data variables.product.api_url_code %}/user/emails',
                       {:params => {:access_token => access_token},
                        :accept => :json}))
    end

    erb :advanced, :locals => auth_result
  end
end

get '/callback' do
  session_code = request.env['rack.request.query_hash']['code']

  result = RestClient.post('https://github.com/login/oauth/access_token',
                          {:client_id => CLIENT_ID,
                           :client_secret => CLIENT_SECRET,
                           :code => session_code},
                           :accept => :json)

  session[:access_token] = JSON.parse(result)['access_token']

  redirect '/'
end
```

La mayoría de este código debería serte familiar. Por ejemplo, aún estamos utilizando `RestClient.get` para llamar a la API de {% data variables.product.product_name %}, y aún estamos pasando nuestros resultados par que se interpreten en una plantilla de ERB (en esta ocasión, se llama `advanced.erb`).

También, ahora tenemos el método `authenticated?`, el cual verifica si el usuario ya se autenticó. Si no, se llamará al método `authenticate!`, el cual lleva a cabo el flujo de OAuth y actualiza la sesión con el token que se otorgó y con los alcances.

Después, crea un archivo en _views_, el cual se llame _advanced.erb_ y pega este markup dentro de él:

``` erb
<html>
  <head>
  </head>
  <body>
    <p>Well, well, well, <%= login %>!</p>
    <p>
      <% if !email.empty? %> It looks like your public email address is <%= email %>.
      <% else %> It looks like you don't have a public email. That's cool.
      <% end %>
    </p>
    <p>
      <% if defined? private_emails %>
      With your permission, we were also able to dig up your private email addresses:
      <%= private_emails.map{ |private_email_address| private_email_address["email"] }.join(', ') %>
      <% else %>
      Also, you're a bit secretive about your private email addresses.
      <% end %>
    </p>
  </body>
</html>
```

Desde la líne de comandos, llama a `ruby advanced_server.rb`, lo cual inicia tu servidor en el puerto `4567` -- el mismo puerto que utilizamos cuando tuvimos una app de Sinatra sencilla. Cuando navegas a `http://localhost:4567`, la app llama a `authenticate!`, lo cual te redirige a `/callback`. Entonces, `/callback` nos regresa a `/` y, ya que estuvimos autenticados, interpreta a _advanced.erb_.

Podríamos simplificar completamente esta ruta redonda si solo cambiamos nuestra URL de rellamado en {% data variables.product.product_name %} a `/`. Pero, ya que tanto _server.rb_ como _advanced.rb_ dependen de la misma URL de rellamado, necesitamos hacer un poco más de ajustes para que funcione.

También, si nunca hubiéramos autorizado esta aplicación para acceder a nuestros datos de {% data variables.product.product_name %}, habríamos visto el mismo diálogo de confirmación del pop-up anterior para advertirnos.

[webflow]: /apps/building-oauth-apps/authorizing-oauth-apps/
[Sinatra]: http://www.sinatrarb.com/
[about env vars]: http://en.wikipedia.org/wiki/Environment_variable#Getting_and_setting_environment_variables
[Sinatra guide]: https://github.com/sinatra/sinatra-book/blob/master/book/Introduction.markdown#hello-world-application
[REST Client]: https://github.com/archiloque/rest-client
[libraries]: /libraries/
[oauth scopes]: /apps/building-oauth-apps/understanding-scopes-for-oauth-apps/
[oauth scopes]: /apps/building-oauth-apps/understanding-scopes-for-oauth-apps/
[new oauth app]: https://github.com/settings/applications/new
[app settings]: https://github.com/settings/developers
