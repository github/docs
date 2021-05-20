---
title: About anonymized URLs
intro: 'If you upload an image or video to {% data variables.product.product_name %}, the URL of the image or video will be modified so your information is not trackable.'
redirect_from:
  - /articles/why-do-my-images-have-strange-urls/
  - /articles/about-anonymized-image-urls
  - /authenticating-to-github/about-anonymized-image-urls
  - /github/authenticating-to-github/about-anonymized-urls
versions:
  free-pro-team: '*'
topics:
  - Identity
  - Access management
---
Para hospedar imagens, o {% data variables.product.product_name %} usa o [Camo do projeto de código aberto](https://github.com/atmos/camo). Camo generates an anonymous URL proxy for each file which hides your browser details and related information from other users. A URL começa `https://<subdomain>.githubusercontent.com/`, com subdomínios diferentes dependendo de como você fez o upload da imagem.

Videos also get anonymized URLs with the same format as image URLs, but are not processed through Camo. This is because {% data variables.product.prodname_dotcom %} does not support externally hosted videos, so the anonymized URL is a link to the uploaded video hosted by {% data variables.product.prodname_dotcom %}.

Anyone who receives your anonymized URL, directly or indirectly, may view your image or video. To keep sensitive media files private, restrict them to a private network or a server that requires authentication instead of using Camo.

### Solucionar problemas com o Camo

As imagens que são processadas por meio do Camo raramente não aparecem no {% data variables.product.prodname_dotcom %}. Veja a seguir algumas etapas que podem ser seguidas para determinar onde está o problema.

{% windows %}

{% tip %}

Os usuários do Windows precisam usar o Git Powershell (que é instalado com o [{% data variables.product.prodname_desktop %}](https://desktop.github.com/)) ou baixar um [curl para Windows](http://curl.haxx.se/download.html).

{% endtip %}

{% endwindows %}

#### Uma imagem não está sendo exibida

If an image is showing up in your browser but not on {% data variables.product.prodname_dotcom %}, you can try requesting it locally.

{% data reusables.command_line.open_the_multi_os_terminal %}
1. Solicite os headers da imagem usando `curl`.
  ```shell
  $ curl -I https://www.my-server.com/images/some-image.png
  > HTTP/2 200
  > Date: Fri, 06 Jun 2014 07:27:43 GMT
  > Expires: Sun, 06 Jul 2014 07:27:43 GMT
  > Content-Type: image/x-png
  > Server: Google Frontend
  > Content-Length: 6507
  ```
3. Verifique o valor de `Content-Type`. Nesse caso, é `image/x-png`.
4. Verifique o tipo de conteúdo em relação [à lista de tipos compatíveis com o Camo](https://github.com/atmos/camo/blob/master/mime-types.json).

Se o tipo de conteúdo não for compatível com o Camo, você poderá tentar várias ações:
  * Se tiver posse do servidor que está hospedando a imagem, modifique-o para que ele retorne um tipo de conteúdo correto para imagens.
  * Se estiver usando um serviço externo para hospedar imagens, entre em contato com o suporte do serviço em questão.
  * Faça uma pull request ao Camo a fim de adicionar seu tipo de conteúdo à lista.

#### Uma imagem que foi alterada recentemente não está atualizando

Se você alterou uma imagem recentemente e ela está sendo exibida no navegador, mas não no {% data variables.product.prodname_dotcom %}, tente redefinir o cache da imagem.

{% data reusables.command_line.open_the_multi_os_terminal %}
1. Solicite os headers da imagem usando `curl`.
  ```shell
  $ curl -I https://www.my-server.com/images/some-image.png
  > HTTP/2 200
  > Expires: Fri, 01 Jan 1984 00:00:00 GMT
  > Content-Type: image/png
  > Content-Length: 2339
  > Server: Jetty(8.y.z-SNAPSHOT)
  ```

Verifique o valor de `Cache-Control`. Neste exemplo, não há `Cache-Contro`. Nesse caso:
  * Se tiver posse do servidor que está hospedando a imagem, modifique-o para que ele retorne um `Cache-Control` de `no-cache` para imagens.
  * Se estiver usando um serviço externo para hospedar imagens, entre em contato com o suporte do serviço em questão.

 Se `Cache-Control` *estiver * definido como `no-cache`, entre em contato com {% data variables.contact.contact_support %} ou pesquise no {% data variables.contact.community_support_forum %}.

#### Remover uma imagem do cache do Camo

A limpeza do cache força os usuários do {% data variables.product.prodname_dotcom %} a solicitar novamente a imagem. Portanto, você deve usá-la bem moderadamente e somente no caso em que as etapas acima não funcionarem.

{% data reusables.command_line.open_the_multi_os_terminal %}
1. Limpe a imagem usando `curl-X PURGE` na URL do Camo.
  ```shell
  $ curl -X PURGE https://camo.githubusercontent.com/4d04abe0044d94fefcf9af2133223....
  > {"status": "ok", "id": "216-8675309-1008701"}
  ```

#### Exibir imagens em redes privadas

Se uma imagem estiver sendo fornecida por uma rede privada ou um servidor que exige autenticação, ela não poderá ser exibida pelo {% data variables.product.prodname_dotcom %}. Na verdade, a imagem não pode ser exibida pelos usuários sem que eles façam login no servidor.

Para corrigir isso, mova a imagem para um serviço que esteja disponível publicamente.

### Leia mais

- "[Retransmitir imagens do usuário](https://github.com/blog/1766-proxying-user-images)" em {% data variables.product.prodname_blog %}
