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
ms.openlocfilehash: 80bf210d2090833e6057fcc89989170b1f68f2f4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147546303'
---
## Sobre a rede do codespace

Por padrão, os seus códigos têm acesso a todos os recursos na internet pública, incluindo os gestores de pacotes, servidores de licença, bancos de dados e APIs da plataforma em nuvem, mas eles não têm acesso a recursos em redes privadas.

## Conectando-se a recursos em uma rede privada

Atualmente, existem dois métodos de acesso a recursos em uma rede privada dentro de Codespaces.
- Com uma extensão {% data variables.product.prodname_cli %} para configurar seu computador local como um gateway para recursos remotos.
- Como usar uma VPN. 

### Como usar a extensão da CLI do GitHub para acessar recursos remotos

{% note %}

**Observação**: a extensão {% data variables.product.prodname_cli %} está atualmente na versão beta e sujeita a alterações. 

{% endnote %}

A extensão {% data variables.product.prodname_cli %} permite que você crie uma ponte entre um codespace e seu computador local para que o codespace possa acessar qualquer recurso remoto que esteja acessível em seu computador. O codespace usa seu computador local como um gateway de rede para alcançar esses recursos. Para obter mais informações, confira "[Como usar {% data variables.product.prodname_cli %} para acessar recursos remotos](https://github.com/github/gh-net#codespaces-network-bridge)."

   
   

### Usar uma VPN para acessar recursos por trás de uma rede privada

Como alternativa à extensão {% data variables.product.prodname_cli %}, você pode usar uma VPN para acessar recursos por trás de uma rede privada de dentro do seu codespace.

Recomendamos o uso de ferramentas de VPN como o [OpenVPN](https://openvpn.net/) para acessar recursos em uma rede privada. Para obter mais informações, confira "[Como usar o cliente do OpenVPN no GitHub Codespaces](https://github.com/codespaces-contrib/codespaces-openvpn)".

Há também um número de soluções de terceiros que, embora não explicitamente aprovadas por {% data variables.product.prodname_dotcom %}, forneceu exemplos de como fazer a integração com {% data variables.product.prodname_codespaces %}.

Essas soluções de terceiros incluem:

- [Tailscale](https://tailscale.com/kb/1160/github-codespaces/)

### Permitir a listagem de recursos privados para codespaces

Embora {% data variables.product.prodname_dotcom %} publica intervalos de IP para vários produtos na sua Meta API, os IPs dos codespaces são atribuídos dinamicamente, o que significa que o seu código não tem a garantia de ter o mesmo endereço IP dia após dia. É altamente desaconselhável que os usuários de permitam toda uma faixa de IP, pois isso daria acesso excessivamente amplo a todos os codespaces (incluindo usuários não associados aos seus codespaces).

Para obter mais informações sobre a Meta API, confira "[Meta](/rest/reference/meta)".

## Restringindo o acesso à internet pública

Atualmente, não há forma de restringir os codespaces de acessar a Internet pública ou de restringir o acesso de usuários devidamente autenticados a uma porta encaminhada.

Para ver mais informações sobre como proteger seus codespaces, confira "[Segurança em {% data variables.product.prodname_github_codespaces %}](/codespaces/codespaces-reference/security-in-github-codespaces)".
