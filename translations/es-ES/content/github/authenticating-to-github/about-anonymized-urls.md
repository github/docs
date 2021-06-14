---
title: About anonymized URLs
intro: 'If you upload an image or video to {% data variables.product.product_name %}, the URL of the image or video will be modified so your information is not trackable.'
redirect_from:
  - /articles/why-do-my-images-have-strange-urls/
  - /articles/about-anonymized-image-urls
  - /authenticating-to-github/about-anonymized-image-urls
versions:
  free-pro-team: '*'
topics:
  - Identity
  - Access management
---

Para alojar tus imágenes, {% data variables.product.product_name %} usa el [Camo del proyecto de código abierto](https://github.com/atmos/camo). Camo generates an anonymous URL proxy for each file which hides your browser details and related information from other users. La URL inicia a `https://<subdomain>.githubusercontent.com/`, con subdominios diferentes dependiendo de cómo la cargues.

Videos also get anonymized URLs with the same format as image URLs, but are not processed through Camo. This is because {% data variables.product.prodname_dotcom %} does not support externally hosted videos, so the anonymized URL is a link to the uploaded video hosted by {% data variables.product.prodname_dotcom %}.

Anyone who receives your anonymized URL, directly or indirectly, may view your image or video. To keep sensitive media files private, restrict them to a private network or a server that requires authentication instead of using Camo.

### Solución de problemas con Camo

En circunstancias excepcionales, las imágenes procesadas mediante Camo podrían no aparecer en {% data variables.product.prodname_dotcom %}. Aquí presentamos algunos pasos que puedes tomar para determinar dónde está el problema.

{% windows %}

{% tip %}

Los usuarios de Windows necesitarán usar PowerShell de Git (que está instalado junto a [{% data variables.product.prodname_desktop %}](https://desktop.github.com/)) o descargar [curl para Windows](http://curl.haxx.se/download.html).

{% endtip %}

{% endwindows %}

#### Una imagen no aparece

If an image is showing up in your browser but not on {% data variables.product.prodname_dotcom %}, you can try requesting it locally.

{% data reusables.command_line.open_the_multi_os_terminal %}
1. Solicita los encabezados de la imagen usando `curl`.
  ```shell
  $ curl -I https://www.my-server.com/images/some-image.png
  > HTTP/2 200
  > Date: Fri, 06 Jun 2014 07:27:43 GMT
  > Expires: Sun, 06 Jul 2014 07:27:43 GMT
  > Content-Type: image/x-png
  > Server: Google Frontend
  > Content-Length: 6507
  ```
3. Verifica el valor de `Content-Type`. En este caso, es `image/x-png`.
4. Verifica ese tipo de contenido con [la lista de tipos admitidos por Camo](https://github.com/atmos/camo/blob/master/mime-types.json).

Si Camo no admite tu tipo de contenido, puedes probar varias acciones:
  * Si eres propietario del servidor que aloja la imagen, modifícalo para que devuelva un tipo de contenido correcto para las imágenes.
  * Si estás usando un servicio externo para alojar imágenes, comunícate con servicio técnico para ese servicio.
  * Realiza una solicitud de extracción para que Camo agregue tu tipo de contenido a la lista.

#### Una imagen que cambió recientemente no se está actualizando

Si recientemente modificaste una imagen y aparece en tu navegador pero no en {% data variables.product.prodname_dotcom %}, puedes intentar restablecer la caché de la imagen.

{% data reusables.command_line.open_the_multi_os_terminal %}
1. Solicita los encabezados de la imagen usando `curl`.
  ```shell
  $ curl -I https://www.my-server.com/images/some-image.png
  > HTTP/2 200
  > Expires: Fri, 01 Jan 1984 00:00:00 GMT
  > Content-Type: image/png
  > Content-Length: 2339
  > Server: Jetty(8.y.z-SNAPSHOT)
  ```

Verifica el valor de `Cache-Control`. En este ejemplo, no hay `Cache-Control`. En ese caso:
  * Si eres propietario del servidor que aloja la imagen, modifícalo para que devuelva un `Cache-Control` de `no-cache` para las imágenes.
  * Si estás usando un servicio externo para alojar imágenes, comunícate con servicio técnico para ese servicio.

 Si `Cache-Control` se *configura* como `no-cache`, contacta a {% data variables.contact.contact_support %} o busca ayuda en el {% data variables.contact.community_support_forum %}.

#### Eliminar una imagen desde la caché de Camo

Purgar la caché fuerza a cada usuario de {% data variables.product.prodname_dotcom %} a volver a solicitar la imagen, por lo que deberías usarla con mucha prudencia y solo en el caso de que los pasos anteriores no hayan funcionado.

{% data reusables.command_line.open_the_multi_os_terminal %}
1. Purga la imagen usando `curl -X PURGE` en la URL de Camo.
  ```shell
  $ curl -X PURGE https://camo.githubusercontent.com/4d04abe0044d94fefcf9af2133223....
  > {"status": "ok", "id": "216-8675309-1008701"}
  ```

#### Visualizar imágenes en redes privadas

Si una imagen está siendo proporcionada desde una red privada o desde un servidor que requiere de autenticación, se puede ver mediante {% data variables.product.prodname_dotcom %}. De hecho, no puede ser vista por ningún usuario sin pedirle que se registre en el servidor.

Para solucionar esto, mueva la imagen a un servicio que esté disponible públicamente.

### Leer más

- "[Imágenes de usuarios de conexiones proxy](https://github.com/blog/1766-proxying-user-images)" en {% data variables.product.prodname_blog %}
