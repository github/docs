---
title: Sobre URLs anônimas de imagem
intro: 'Se você fizer upload de uma imagem no {% data variables.product.product_name %}, a URL da imagem será modificada para que suas informações não possam ser rastreadas.'
redirect_from:
  - /articles/why-do-my-images-have-strange-urls/
  - /articles/about-anonymized-image-urls
versions:
  free-pro-team: '*'
topics:
  - identidade
  - gerenciamento de acesso
---

Para hospedar imagens, o {% data variables.product.product_name %} usa o [Camo do projeto de código aberto](https://github.com/atmos/camo). Camo gera um proxy de URL anônimo para cada imagem que oculta os detalhes do seu navegador e informações relacionadas de outros usuários. A URL começa `https://<subdomain>.githubusercontent.com/`, com subdomínios diferentes dependendo de como você fez o upload da imagem.

Qualquer pessoa que recebe sua URL anônima de imagem, direta ou indiretamente, pode exibir a imagem. Para manter a privacidade de imagens confidenciais, restrinja-as a uma rede privada ou a um servidor que exija autenticação em vez de usar o Camo.

### Solucionar problemas com o Camo

As imagens que são processadas por meio do Camo raramente não aparecem no {% data variables.product.prodname_dotcom %}. Veja a seguir algumas etapas que podem ser seguidas para determinar onde está o problema.

{% windows %}

{% tip %}

Os usuários do Windows precisam usar o Git Powershell (que é instalado com o [{% data variables.product.prodname_desktop %}](https://desktop.github.com/)) ou baixar um [curl para Windows](http://curl.haxx.se/download.html).

{% endtip %}

{% endwindows %}

#### Uma imagem não está sendo exibida

Se uma imagem estiver sendo exibida no navegador, mas não no {% data variables.product.prodname_dotcom %}, você pode tentar solicitar a imagem localmente.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Solicite os headers da imagem usando `curl`.
  ```shell
  $ curl -I https://www.my-server.com/images/some-image.png
  > HTTP/1.1 200 OK
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
2. Solicite os headers da imagem usando `curl`.
  ```shell
  $ curl -I https://www.my-server.com/images/some-image.png
  > HTTP/1.1 200 OK
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
2. Limpe a imagem usando `curl-X PURGE` na URL do Camo.
  ```shell
  $ curl -X PURGE https://camo.githubusercontent.com/4d04abe0044d94fefcf9af2133223....
  > {"status": "ok", "id": "216-8675309-1008701"}
  ```

#### Exibir imagens em redes privadas

Se uma imagem estiver sendo fornecida por uma rede privada ou um servidor que exige autenticação, ela não poderá ser exibida pelo {% data variables.product.prodname_dotcom %}. Na verdade, a imagem não pode ser exibida pelos usuários sem que eles façam login no servidor.

Para corrigir isso, mova a imagem para um serviço que esteja disponível publicamente.

### Leia mais

- "[Retransmitir imagens do usuário](https://github.com/blog/1766-proxying-user-images)" em {% data variables.product.prodname_blog %}
