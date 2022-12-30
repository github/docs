---
title: Configurar tu servidor para recibir cargas útiles
intro: Aprende a conigurar un servidor para administrar las cargas útiles de webhook entrantes.
redirect_from:
  - /webhooks/configuring
  - /developers/webhooks-and-events/configuring-your-server-to-receive-payloads
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
shortTitle: Configure server for webhooks
ms.openlocfilehash: c306cadf4dd8d9cd573d694419a51179c8995797
ms.sourcegitcommit: 6b1c6174d0df40c90edfd7526496baabb1dd159d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/04/2022
ms.locfileid: '148132990'
---
Ahora que nuestro webhook está listo para entregar mensajes, configuraremos un servidor básico de Sinatra para controlar las cargas entrantes.

{% note %}

[Nota:][platform samples] Puede descargar el código fuente completo de este proyecto **desde el repositorio platform-samples**.

{% endnote %}

## Escribir el servidor

Queremos que nuestro servidor escuche las solicitudes `POST`, en `/payload`, porque es donde hemos dicho a GitHub que está nuestra dirección URL. Como estamos usando `ngrok` para exponer nuestro entorno local, no necesitamos configurar un servidor real en línea, y podemos probar nuestro código cómodamente de manera local.

Vamos a configurar una pequeña app de Sinatra para que haga algo con la información. Nuestra configuración inicial podría tener un aspecto similar a este:

``` ruby
require 'sinatra'
require 'json'

post '/payload' do
  push = JSON.parse(request.body.read)
  puts "I got some JSON: #{push.inspect}"
end
```

(Si no está familiarizado con el funcionamiento de Sinatra, le recomendamos [leer la guía de Sinatra][Sinatra]).

Inicia este servidor.

Dado que hemos configurado nuestros webhooks para escuchar eventos relacionados con `Issues`, continúe y cree una nueva incidencia en el repositorio en el que está haciendo las pruebas. Una vez creada, regrese al terminal. Deberías ver algo más o menos como esto en tu salida:

```shell
$ ~/Developer/platform-samples/hooks/ruby/configuring-your-server $ ruby server.rb
> == Sinatra/1.4.4 has taken the stage on 4567 for development with backup from Thin
> >> Thin web server (v1.5.1 codename Straight Razor)
> >> Maximum connections set to 1024
> >> Listening on localhost:4567, CTRL+C to stop
> I got some JSON: {"action"=>"opened", "issue"=>{"url"=>"...
```

¡Hecho! Configuraste exitosamente tu servidor para que escuche a los webhooks. Ahora el servidor puede procesar esta información de la manera que prefiera. Por ejemplo, si estuviera configurando una aplicación web "real", tal vez querría registrar parte de la salida JSON en una base de datos.

Para obtener más información sobre cómo trabajar con webhooks para divertirse y obtener beneficios, consulte la guía [Prueba de webhooks](/webhooks/testing).

[platform samples]: https://github.com/github/platform-samples/tree/master/hooks/ruby/configuring-your-server
[Sinatra]: http://www.sinatrarb.com/
