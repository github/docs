---
title: Securing your webhooks (Protección de sus webhooks)
intro: 'Asegúrate de que tu servidor está recibiendo únicamente las solicitudes de {% data variables.product.prodname_dotcom %} esperadas por razones de seguridad.'
redirect_from:
  - /webhooks/securing
  - /developers/webhooks-and-events/securing-your-webhooks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
ms.openlocfilehash: c3597365ae7cf9f96375201d6938c4f6675a8eae
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147707483'
---
Una vez que tu servidor se configure para recibir cargas útiles, éste escuchará a cualquiera de ellas que se envíe a la terminal que configuraste. Por razones de seguridad, probablemente quieras limitar las solicitudes a aquellas que vengan de GitHub. Hay algunas formas de solucionar esto, por ejemplo, podrías decidir el permitir las solicitudes que vengan de la dirección IP de GitHub, pero una manera mucho más fácil es configurar un token secreto y validar la información.

{% data reusables.webhooks.webhooks-rest-api-links %}

## Configurar tu token secreto

Necesitarás configurar tu token secreto en dos lugares: GitHub y tu servidor.

Para configurar tu token en GitHub:

1. Desplácese hasta el repositorio donde está configurando el webhook.
2. Llena la caja de texto del secreto. Use una cadena aleatoria con entropía alta (por ejemplo, tome la salida de `ruby -rsecurerandom -e 'puts SecureRandom.hex(20)'` en el terminal).
![Campo de token secreto de webhook](/assets/images/webhook_secret_token.png)
3. Haga clic en **Update Webhook** (Actualizar webhook).

Después, configura una variable de ambiente en tu servidor, la cual almacene este token. Por lo general, esto es tan simple como el ejecutar:

```shell
$ export SECRET_TOKEN=<em>your_token</em>
```

**Nunca** codifique de forma rígida el token en la aplicación.

## Validación de las cargas de GitHub

Cuando se configura tu token secreto, {% data variables.product.product_name %} lo utiliza para crear una firma de hash con cada carga útil. Esta firma de hash se incluye con los encabezados de cada solicitud como `x-hub-signature-256`.

{% ifversion fpt or ghes or ghec %} {% note %}

**Nota:** Para la compatibilidad con versiones anteriores, también se incluye el encabezado `x-hub-signature` que se genera mediante la función de hash SHA-1. Si es posible, se recomienda usar el encabezado `x-hub-signature-256` para mejorar la seguridad. En el ejemplo siguiente se muestra el uso del encabezado `x-hub-signature-256`.

{% endnote %} {% endif %}

Por ejemplo, si tienes un servidor básico que escucha a los webhooks, puede configurarse de forma similar a esto:

``` ruby
require 'sinatra'
require 'json'

post '/payload' do
  request.body.rewind
  push = JSON.parse(request.body.read)
  "I got some JSON: #{push.inspect}"
end
```

La intención es calcular un hash mediante el valor `SECRET_TOKEN` y asegurarse de que el resultado coincida con el hash de {% data variables.product.product_name %}. {% data variables.product.product_name %} utiliza un resumen hexadecimal de HMAC para calcular el hash, así que podrías reconfigurar tu servidor para que se viera así:

``` ruby
post '/payload' do
  request.body.rewind
  payload_body = request.body.read
  verify_signature(payload_body)
  push = JSON.parse(payload_body)
  "I got some JSON: #{push.inspect}"
end

def verify_signature(payload_body)
  signature = 'sha256=' + OpenSSL::HMAC.hexdigest(OpenSSL::Digest.new('sha256'), ENV['SECRET_TOKEN'], payload_body)
  return halt 500, "Signatures didn't match!" unless Rack::Utils.secure_compare(signature, request.env['HTTP_X_HUB_SIGNATURE_256'])
end
```

{% note %}

**Nota:** Las cargas de webhook pueden contener caracteres Unicode. Si tu implementación de idioma y servidor especifican un cifrado de caracteres, asegúrate de que estés manejando la carga útil como UTF-8.

{% endnote %}

Tus implementaciones de lenguaje y de servidor pueden diferir de esta muestra de código. Sin embargo, hay varias cosas muy importantes que destacar:

* Con independencia de la implementación que use, la firma de hash comienza con `sha256=` y se utiliza la clave del token secreto y el cuerpo de la carga.

* `==`No se recomienda **usar un operador** sin formato. Un método como [`secure_compare`][secure_compare] realiza una comparación de cadenas de "tiempo constante", lo que ayuda a mitigar determinados ataques de tiempo contra operadores de igualdad convencionales.

[secure_compare]: https://rubydoc.info/github/rack/rack/main/Rack/Utils:secure_compare
