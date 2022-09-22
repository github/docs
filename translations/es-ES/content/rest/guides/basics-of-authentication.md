---
title: Fundamentos de la autenticación
intro: Aprende acerca de las formas diferentes de autenticarse con algunos ejemplos.
redirect_from:
  - /guides/basics-of-authentication
  - /v3/guides/basics-of-authentication
  - /rest/basics-of-authentication
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: 3e2796e83047f4e8bb6b7e9a503eee6dac63f019
ms.sourcegitcommit: 6edb015070d3f0fda4525c6c931f1324626345dc
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/12/2022
ms.locfileid: '147887322'
---
En esta sección, vamos a enfocarnos en lo básico de la autenticación. En concreto, vamos a crear un servidor de Ruby (mediante [Sinatra][Sinatra]) que implemente el [flujo web][webflow] de una aplicación de varias maneras diferentes.

{% tip %}

Puede descargar el código fuente completo de este proyecto [desde el repositorio platform-samples](https://github.com/github/platform-samples/tree/master/api/).

{% endtip %}

## Registrar la aplicación

En primer lugar, debe [registrar la aplicación][new oauth app]. A cada aplicación de OAuth que se registra se le asigna un id. de cliente y un secreto de cliente únicos.
¡El Secreto de Cliente no puede compartirse! Esto incluye verificar la cadena en el repositorio.

Puede rellenar cada fragmento de información que desee, excepto la **URL de devolución de llamada**. Esta es sin duda la parte más importante para configurar una aplicación. Es la URL de devolución de llamada a la que {% data variables.product.product_name %} devuelve al usuario después de autenticarse correctamente.

Como ejecutamos un servidor habitual de Sinatra, la ubicación de la instancia local está configurada en `http://127.0.0.1:4567`. Vamos a rellenar la URL de devolución de llamada como `http://127.0.0.1:4567/callback`.

## Aceptar la autorización del usuario

{% data reusables.apps.deprecating_auth_with_query_parameters %}

Ahora, vamos a comenzar a llenar nuestro servidor común. Cree un archivo denominado _server.rb_ y péguelo en el servidor:

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

El identificador de cliente y las claves secretas de cliente proceden de [la página de configuración de la aplicación][app settings].{% ifversion fpt or ghec %} **Nunca _debe_** almacenar estos valores en {% data variables.product.product_name %} o en cualquier otro lugar público.{% endif %} Se recomienda almacenarlos como [variables de entorno][about env vars], que es exactamente lo que hemos hecho aquí.

A continuación, en _views/index.erb_, pegue este contenido:

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
      <a href="https://github.com/login/oauth/authorize?scope=user:email&client_id=<%= client_id %>">Click here</a> to begin!
    </p>
    <p>
      If that link doesn't work, remember to provide your own <a href="/apps/building-oauth-apps/authorizing-oauth-apps/">Client ID</a>!
    </p>
  </body>
</html>
```

(Si no está familiarizado con el funcionamiento de Sinatra, le recomendamos [leer la guía de Sinatra][Sinatra guide]).

Además, tenga en cuenta que la dirección URL usa el `scope` parámetro de consulta para definir los [alcances][oauth scopes] solicitados por la aplicación. Para nuestra aplicación, solicitamos el alcance `user:email` para leer direcciones de correo electrónico privadas.

Vaya al explorador y vaya a `http://127.0.0.1:4567`. Después de hacer clic en el vínculo, se le llevará a {% data variables.product.product_name %} y se le mostrará un diálogo que se ve más o menos así: ![Diálogo de OAuth de GitHub](/assets/images/oauth_prompt.png).

Si confía en usted mismo, haga clic en **Authorize App**. ¡Oh-oh! Sinatra muestra un error de `404`. ¡¿Qué pasa?!

¿Se acuerda de cuándo especificamos la dirección URL de devolución de llamada como `callback`? No proporcionamos ninguna ruta, así que {% data variables.product.product_name %} no sabe dónde soltar al usuario después de autorizar la aplicación. ¡Arreglémoslo ahora!

### Proporcionar un rellamado

En _server.rb_, agregue una ruta para especificar lo que debe hacer la devolución de llamada:

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

Cuando una aplicación se autentica correctamente, {% data variables.product.product_name %} proporciona un valor temporal para `code`.
Tendrá que `POST` este código a {% data variables.product.product_name %} a cambio de un `access_token`.
Para simplificar nuestras solicitudes HTTP GET y POST, usamos [rest-client][REST Client].
Nota que probablemente jamás accedas a la API a través de REST. Si va a hacer un uso más intensivo, probablemente debería usar [una biblioteca escrita en el idioma que prefiera][libraries].

### Verificar los alcances otorgados

Los usuarios pueden editar los alcances que solicitaste cambiando directamente la URL. Esto puee otorgar a tu aplicación menos accesos de los que solicitaste originalmente. Antes de hacer cualquier solicitud con el token, verifica los alcances que el usuario le otorgó a éste. Para obtener más información sobre los alcances solicitados y concedidos, consulte "[Ámbitos para aplicaciones de OAuth](/developers/apps/scopes-for-oauth-apps#requested-scopes-and-granted-scopes)".

Los alcances que otorgamos se devuelven como parte de la respuesta de intercambio de un token.

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

En nuestra aplicación, usamos `scopes.include?` para comprobar si se ha concedido el alcance de `user:email` necesario para capturar las direcciones de correo electrónico privadas del usuario autenticado. Si la aplicación hubiera preguntado por otros alcances, las habríamos comprobado también.

Además, dado que hay una relación jerárquica entre alcances, debe comprobar que se le haya otorgado el nivel más bajo de los alcances que se requieren. Por ejemplo, si la aplicación había solicitado el alcance `user`, podría haberse concedido solo el ámbito `user:email`. En ese caso, a la aplicación no se le hubiera otorgado lo que solicitó, pero los alcances que obtuvo seguirían siendo suficientes.

Comprobar los alcances solo antes de realizar las solicitudes no es suficiente, ya que es posible que los usuarios cambien los alcances entre la comprobación y la solicitud real.
En caso de que esto suceda, las llamadas API que esperaba que se realizaran correctamente podrían mostrar un error con el estado `404` o `401` devolver un subconjunto diferente de información.

Para ayudarle a controlar estas situaciones correctamente, todas las respuestas de API para las solicitudes realizadas con tokens válidos también contienen un [`X-OAuth-Scopes` encabezado][oauth scopes].
Este encabezado contiene la lista de alcances del token que se utilizó para realizar la solicitud. Además, la API de aplicaciones de OAuth proporciona un punto de conexión para {% ifversion fpt or ghes or ghec %} [comprobar si hay un token de validez](/rest/reference/apps#check-a-token){% else %}[comprobar la validez de un token](/rest/reference/apps#check-an-authorization){% endif %}.
Utilice esta información para detectar cambios en los alcances de los tokens y para informar a los usuarios sobre los cambios disponibles en la funcionalidad de la aplicación disponible.

### Realizar solicitudes autenticadas

Por último, con este token de acceso, podrá realizar solicitudes autenticadas como el usuario que inició sesión:

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

Podemos hacer lo que queramos con nuestros resultados. En este caso, los volcaremos directamente en _basic.erb_:

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

## Implementar la autenticación "persistente"

No es muy buena idea exigir que los usuarios inicien sesión en la aplicación cada vez que necesiten acceder a la página web. Por ejemplo, intente navegar directamente a `http://127.0.0.1:4567/basic`. Obtendrás un error.

¿Qué pasaría si pudiéramos eludir todo el proceso de "hacer clic aquí" y simplemente _recordarlo_ siempre que los usuarios estén conectados a {% data variables.product.product_name %} y así ellos podrían acceder a esta aplicación? Agárrese porque... _eso es exactamente lo que vamos a hacer_.

Nuestro pequeño servidor que mostramos antes es muy simple. Para poder insertar algún tipo de autenticación inteligente, vamos a optar por utilizar sesiones para almacenar los tokens.
Esto hará que la autenticación sea transparente para el usuario.

Ya que estamos usando los mismos alcances dentro de la sesión, necesitaremos gestionar los casos cuando el usuario actualice los alcances después de que los comprobemos, o cuando se revoque el token. Para lograrlo, utilizaremos un bloque de `rescue` y verificaremos que la primera llamada a la API se realizó correctamente, lo cual confirmará que el token sigue siendo válido. Después de eso, comprobaremos el encabezado de respuesta `X-OAuth-Scopes` para verificar que el usuario no haya revocado el alcance `user:email`.

Cree un archivo denominado _advanced_server.rb_ y pegue estas líneas en él:

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

La mayoría de este código debería serte familiar. Por ejemplo, seguimos utilizando `RestClient.get` para llamar a la API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} y aún estamos pasando los resultados para que se interpreten en una plantilla ERB (esta vez, se llama `advanced.erb`).

Además, ahora tenemos el método `authenticated?`, que comprueba si el usuario ya está autenticado. Si no, se llamará al método `authenticate!`, el cual lleva a cabo el flujo de OAuth y actualiza la sesión con el token y los alcances que se otorgaron.

A continuación, cree un archivo en _views_ denominado _advanced.erb_ y pegue este marcado en él:

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

Desde la línea de comandos, llame a `ruby advanced_server.rb`, que inicia el servidor en el puerto `4567`, el mismo puerto que usamos cuando teníamos una aplicación sencilla de Sinatra.
Al navegar a `http://127.0.0.1:4567`, la aplicación llama a `authenticate!`, que le redirige a `/callback`. A continuación, `/callback` nos envía de vuelta a `/` y, como nos hemos autenticado, se representa el archivo _advanced.erb_.

Podríamos simplificar completamente esta ruta de ida y vuelta solo con cambiar nuestra URL de devolución de llamada en {% data variables.product.product_name %} a `/`. Pero, dado que _server.rb_ y _advanced.rb_ se basan en la misma URL de devolución de llamada, tenemos que hacer un poco más de trabajo para que funcione.

Además, si nunca hubiéramos autorizado esta aplicación para acceder a nuestros datos de {% data variables.product.product_name %}, habríamos visto el mismo diálogo de confirmación del elemento emergente anterior a modo de advertencia.

[webflow]: /apps/building-oauth-apps/authorizing-oauth-apps/
[Sinatra]: http://www.sinatrarb.com/
[about env vars]: http://en.wikipedia.org/wiki/Environment_variable#Getting_and_setting_environment_variables
[Sinatra guide]: https://github.com/sinatra/sinatra-book/blob/master/book/Introduction.markdown#hello-world-application
[REST Client]: https://github.com/archiloque/rest-client
[libraries]: /libraries/
[oauth scopes]: /apps/building-oauth-apps/understanding-scopes-for-oauth-apps/
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/basics-of-authentication
[new oauth app]: https://github.com/settings/applications/new
[app settings]: https://github.com/settings/developers
