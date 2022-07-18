---
title: Conectando-se a uma rede privada
intro: 'Você pode conectar {% data variables.product.prodname_github_codespaces %} a recursos de uma rede privada, incluindo registros de pacotes, servidores de licenças e bancos de dados no local.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
---

## Sobre a rede do codespace

Por padrão, os seus códigos têm acesso a todos os recursos na internet pública, incluindo os gestores de pacotes, servidores de licença, bancos de dados e APIs da plataforma em nuvem, mas eles não têm acesso a recursos em redes privadas.

## Conectando-se a recursos em uma rede privada

O método atualmente compatível para acessar os recursos em uma rede privada é usar uma VPN. Atualmente, não se recomenda permitir o acesso aos IPs de códigos, pois isso permitiria que todos os códigos (seus e dos de outros clientes) acessassem os recursos protegidos pela rede.

### Usar uma VPN para acessar recursos por trás de uma rede privada

A maneira mais fácil de acessar os recursos por trás de uma rede privada é criar uma VPN nessa rede de dentro do seu codespace.

Recomendamos ferramentas de VPN como, por exemplo, [OpenVPN](https://openvpn.net/) para acessar recursos em uma rede privada. Para obter mais informações, consulte "[Usando o cliente da OpenVPN em codespaces do GitHub](https://github.com/codespaces-contrib/codespaces-openvpn)".

Há também um número de soluções de terceiros que, embora não explicitamente aprovadas por {% data variables.product.prodname_dotcom %}, forneceu exemplos de como fazer a integração com {% data variables.product.prodname_codespaces %}.

Essas soluções de terceiros incluem:

- [Tailscale](https://tailscale.com/kb/1160/github-codespaces/)

### Permitir a listagem de recursos privados para codespaces

Embora {% data variables.product.prodname_dotcom %} publica intervalos de IP para vários produtos na sua Meta API, os IPs dos codespaces são atribuídos dinamicamente, o que significa que o seu código não tem a garantia de ter o mesmo endereço IP dia após dia. É altamente desaconselhável que os usuários de permitam toda uma faixa de IP, pois isso daria acesso excessivamente amplo a todos os codespaces (incluindo usuários não associados aos seus codespaces).

Para obter mais informações sobre a Meta API, consulte "[Meta](/rest/reference/meta)".

## Restringindo o acesso à internet pública

Atualmente, não há forma de restringir os codespaces de acessar a Internet pública ou de restringir o acesso de usuários devidamente autenticados a uma porta encaminhada.

For more information on how to secure your codespaces, see "[Security in {% data variables.product.prodname_github_codespaces %}](/codespaces/codespaces-reference/security-in-github-codespaces)."
