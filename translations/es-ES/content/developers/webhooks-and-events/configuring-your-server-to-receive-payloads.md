---
title: Configurar tu servidor para recibir cargas útiles
intro: Aprende a conigurar un servidor para administrar las cargas útiles de webhook entrantes.
redirect_from:
  - /webhooks/configuring
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Webhooks
---



Ahora que tu webhook está listo para entregar mensajes, configuraremos un servidor básico de Sinatra para gestionar las cargas útiles entrantes.

{% note %}

**Nota:** Puedes descargar el código fuente completo para este proyecto [del repositorio de ejemplos de plataforma][platform samples].

{% endnote %}

### Escribir el servidor

Queremos que nuestro servidor escuche a las solicitudes de `POST`, en `/payload`, porque es donde le dijimos a GitHub que estaba nuestra URL. Ya que estamos utilizando ngrok para exponer nuestro ambiente local, no necesitamos configurar un servidor real en línea, y podemos probar nuestro código felizmente de manera local.

Vamos a configurar una pequeña app de Sinatra para que haga algo con la información. Nuestra configuración inicial se verá más o menos así:

``` ruby
require 'sinatra'
require 'json'

post '/payload' do
  push = JSON.parse(request.body.read)
  puts "I got some JSON: #{push.inspect}"
end
```

(Si no estás familiarizado con como funciona Sinatra, te recomendamos [leer la guía de Sinatra][Sinatra].)

Inicia este servidor.

Ya que configuramos nuestros webhooks para escuchar a los eventos que tengan que ver con `Issues`, continúa y crea una propuesta nueva en el repositorio en el cual estés haciendo las pruebas. Una vez que lo hayas creado, regresa a tu terminal. Deberías ver algo más o menos como esto en tu salida:

```shell
$ ~/Developer/platform-samples/hooks/ruby/configuring-your-server $ ruby server.rb
> == Sinatra/1.4.4 has taken the stage on 4567 for development with backup from Thin
> >> Thin web server (v1.5.1 codename Straight Razor)
> >> Maximum connections set to 1024
> >> Listening on localhost:4567, CTRL+C to stop
> I got some JSON: {"action"=>"opened", "issue"=>{"url"=>"...
```

¡Exito! Configuraste exitosamente tu servidor para que escuche a los webhooks. Ahora tu servidor puede procesar esta información en cualquier manera que te parezca pertinente. Por ejemplo, si estuvieras configurando una aplicación web "real", tal vez quisieras registrar algo de la salida de JSON en una base de datos.

Para obtener información adicional sobre cómo trabajar con los webhooks por diverción y por ganancias, dirígete a la guía de cómo [Probar los Webhooks](/webhooks/testing).

[platform samples]: https://github.com/github/platform-samples/tree/master/hooks/ruby/configuring-your-server
[Sinatra]: http://www.sinatrarb.com/
