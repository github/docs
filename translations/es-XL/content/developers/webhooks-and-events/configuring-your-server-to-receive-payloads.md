---
title: Configurar tu servidor para recibir cargas útiles
intro: Aprende a conigurar un servidor para administrar las cargas útiles de webhook entrantes.
redirect_from:
  - /webhooks/configuring
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---



Ahora que tu webhook está listo para entregar mensajes, configuraremos un servidor básico de Sinatra para gestionar las cargas útiles entrantes.

Recuerda que configuramos nuestra URL del webhook específicamente como `http://localhost:4567/payload`. Ya que estamos desarrollando localmente, necesitaremos exponer nuestro ambiente de desarrollo local a la internet para que GitHub pueda enviar mensajes y para que nuestro servidor local los pueda procesar.

Nota: puedes descargar el código fuente completo para este proyecto [del repositorio de ejemplos de plataforma][platform samples].

### Utilizando ngrok

Primero, instalaremos un programa para exponer nuestro host local a la internet. Utilizaremos ngrok para hacerlo. [ngrok es una descarga gratuita](https://ngrok.com/download) disponible para todos los sistemas operativos principales.

Cuando termines de hacerlo, puedes exponer tu localhost si ejecutas `./ngrok http 4567` en la línea de comandos. Deberías ver una línea que se ve más o menos así:

```shell
$ Forwarding    http://7e9ea9dc.ngrok.io -> 127.0.0.1:4567
```

¡Copia esa URL rara de `*.ngrok.io`! Ahora vamos a *regresar* a la URL de la carga útil y vamos a pegar este servidor en ese campo. Se vería ver más o menos como `http://7e9ea9dc.ngrok.io/payload`.

Cuando lo hacemos, nos hemos preparado para exponer nuestro localhost a la internet en la ruta `/payload`.

### Escribir el servidor

¡Ahora viene lo divertido! Queremos que nuestro servidor escuche a las solicitudes de `POST`, en `/payload`, porque es donde le dijimos a GitHub que estaba nuestra URL. Ya que ngrok expone nuestro ambiente local, no necesitamos configurar un servidor real en línea, y podemos probar nuestro código felizmente de manera local.

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

Ya que configuramos nuestros webhooks para escuchar a los eventos que tengan que ver con `Issues`, continúa y crea un informe de problemas nuevo en el repositorio en el cual estés haciendo las pruebas. Una vez que lo hayas creado, regresa a tu terminal. Deberías ver algo más o menos como esto en tu salida:

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
