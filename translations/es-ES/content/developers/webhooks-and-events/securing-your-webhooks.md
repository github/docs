---
title: Asegurar tus webhooks
intro: 'Asegúrate de que tu servidor está recibiendo únicamente las solicitudes de {% data variables.product.prodname_dotcom %} esperadas por razones de seguridad.'
redirect_from:
  - /webhooks/securing
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - webhooks
---



Una vez que tu servidor se configure para recibir cargas útiles, éste escuchará a cualquiera de ellas que se envíe a la terminal que configuraste. Por razones de seguridad, probablemente quieras limitar las solicitudes a aquellas que vengan de GitHub. Hay algunas formas de solucionar esto, por ejemplo, podrías decidir el permitir las solicitudes que vengan de la dirección IP de GitHub, pero una manera mucho más fácil es configurar un token secreto y validar la información.

{% data reusables.webhooks.webhooks-rest-api-links %}

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

Cuando se configura tu token secreto, {% data variables.product.product_name %} lo utiliza para crear una firma de hash con cada carga útil. Esta firma de hash se incluye con los encabezados de cada solicitud como una {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}`X-Hub-Signature-256`{% elsif currentVersion ver_lt "enterprise-server@2.23" %}`X-Hub-Signature`{% endif %}.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
{% note %}

**Nota:** Para tener compatibilidad en versiones anteriores, también incluimos el encabezado `X-Hub-Signature` que se genera utilizando la función de hash SHA-1. De ser posible, te recomendamos que utilices el encabezado de `X-Hub-Signature-256` para mejorar la seguridad. El ejemplo siguiente demuestra cómo utilizar el encabezado `X-Hub-Signature-256`.

{% endnote %}
{% endif %}

Por ejemplo, si tienes un servidor básico que escucha a los webhooks, puede configurarse de forma similar a esto:

``` ruby
require 'sinatra'
require 'json'

post '/payload' do
  push = JSON.parse(params[:payload])
  "I got some JSON: #{push.inspect}"
end
```

La intención es calcular un hash utilizando tu `SECRET_TOKEN`, y asegurarse de que el resultado empate con el hash de {% data variables.product.product_name %}. {% data variables.product.product_name %} utiliza un resumen hexadecimal de HMAC para calcular el hash, así que podrías reconfigurar tu servidor para que se viera así:

``` ruby
post '/payload' do
  request.body.rewind
  payload_body = request.body.read
  verify_signature(payload_body)
  push = JSON.parse(params[:payload])
  "I got some JSON: #{push.inspect}"
end

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
def verify_signature(payload_body)
  signature = 'sha256=' + OpenSSL::HMAC.hexdigest(OpenSSL::Digest.new('sha256'), ENV['SECRET_TOKEN'], payload_body)
  return halt 500, "Signatures didn't match!" unless Rack::Utils.secure_compare(signature, request.env['HTTP_X_HUB_SIGNATURE_256'])
end{% elsif currentVersion ver_lt "enterprise-server@2.23" %}
def verify_signature(payload_body)
  signature = 'sha1=' + OpenSSL::HMAC.hexdigest(OpenSSL::Digest.new('sha1'), ENV['SECRET_TOKEN'], payload_body)
  return halt 500, "Signatures didn't match!" unless Rack::Utils.secure_compare(signature, request.env['HTTP_X_HUB_SIGNATURE'])
end{% endif %}
```

{% note %}

**Nota:** Las cargas útiles de los webhooks pueden contener caracteres en unicode. Si tu implementación de idioma y servidor especifican un cifrado de caracteres, asegúrate de que estés manejando la carga útil como UTF-8.

{% endnote %}

Tus implementaciones de lenguaje y de servidor pueden diferir de esta muestra de código. Sin embargo, hay varias cosas muy importantes que destacar:

* Sin importar qué implementación utilices, la firma de hash comienza con {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or "github-ae@latest" %}`sha256=`{% elsif currentVersion ver_lt "enterprise-server@2.23" %}`sha1=`{% endif %}, utilizando la llave de tu token secreto y el cuerpo de tu carga útil.

* **No se recomienda** utilizar un simple operador de `==`. A method like [`secure_compare`][secure_compare] performs a "constant time" string comparison, which helps mitigate certain timing attacks against regular equality operators.

[secure_compare]: https://rubydoc.info/github/rack/rack/master/Rack/Utils:secure_compare
