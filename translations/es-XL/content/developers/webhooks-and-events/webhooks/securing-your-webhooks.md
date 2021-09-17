---
title: Asegurar tus webhooks
intro: 'Asegúrate de que tu servidor está recibiendo únicamente las solicitudes de {% data variables.product.prodname_dotcom %} esperadas por razones de seguridad.'
redirect_from:
  - /webhooks/securing
  - /developers/webhooks-and-events/securing-your-webhooks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Webhooks
---
Una vez que tu servidor se configure para recibir cargas útiles, éste escuchará a cualquiera de ellas que se envíe a la terminal que configuraste. Por razones de seguridad, probablemente quieras limitar las solicitudes a aquellas que vengan de GitHub. Hay algunas formas de solucionar esto, por ejemplo, podrías decidir el permitir las solicitudes que vengan de la dirección IP de GitHub, pero una manera mucho más fácil es configurar un token secreto y validar la información.


### Configurar tu token secreto

Necesitarás configurar tu token secreto en dos lugares: GitHub y tu servidor.

Para configurar tu token en GitHub:

1. Navega al repositorio en donde configuraste tu webhook.
2. Llena la caja de texto del secreto. Utiliza una secuencia aleatoria con entropía alta (por ejemplo, tomando la salida de `ruby -rsecurerandom -e 'puts SecureRandom.hex(20)'` en la terminal). ![Campo de webhook y de token secreto](/assets/images/webhook_secret_token.png)
3. Da clic en **Actualizar Webhook**.

Después, configura una variable de ambiente en tu servidor, la cual almacene este token. Por lo general, esto es tan simple como el ejecutar:

```shell
$ export SECRET_TOKEN=<em>your_token</em>
```

¡**Jamás** preprogrames el token en tu app!

### Validar cargas útiles de GitHub

Cuando configuras tu token secreto, GitHub lo utiliza para crear una firma de hash con cada carga útil.

Esta firma de hash se pasa entre cada solicitud en los encabezados como una `X-Hub-Signature`. Supongamos que tienes un servidor básico escuchando a los webhooks y que se ve así:

``` ruby
require 'sinatra'
require 'json'

post '/payload' do
  push = JSON.parse(params[:payload])
  "I got some JSON: #{push.inspect}"
end
```

La meta es calcular el hash utilizando tu `SECRET_TOKEN`, y garantizar que el hash de GitHub empate con éste. GitHub utiliza un hexdigest de HMAC para calcular el hash, así que podrías cambiar tu servidor para que se vea así:

``` ruby
post '/payload' do
  request.body.rewind
  payload_body = request.body.read
  verify_signature(payload_body)
  push = JSON.parse(params[:payload])
  "I got some JSON: #{push.inspect}"
end

def verify_signature(payload_body)
  signature = 'sha1=' + OpenSSL::HMAC.hexdigest(OpenSSL::Digest.new('sha1'), ENV['SECRET_TOKEN'], payload_body)
  return halt 500, "Signatures didn't match!" unless Rack::Utils.secure_compare(signature, request.env['HTTP_X_HUB_SIGNATURE'])
end
```

Obviamente, tus implementaciones de lenguaje y de servidor podrían diferir de este código. Hay un par de cosas muy importantes que señalar, sin embargo:

* Sin importar qué implementación utilices, a firma de hash comienza con `sha1=`, utilizando la llave de tu token secreto y el cuerpo de tu carga útil.

* **No se recomienda** utilizar un simple operador de `==`. Un método tal como [`secure_compare`][secure_compare] lleva a cabo una comparación de secuencias en "tiempo constante", lo cual la hace segura contra ciertos ataques de tiempo contra los operadores de igualdad habitual.

[secure_compare]: http://rubydoc.info/github/rack/rack/master/Rack/Utils.secure_compare
