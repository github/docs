---
title: Conectando-se a uma rede privada
intro: 'Você pode conectar {% data variables.product.prodname_github_codespaces %} a recursos de uma rede privada, incluindo registros de pacotes, servidores de licenças e bancos de dados no local.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
ms.openlocfilehash: 92b8f2b9ea438a4cc799aec1969ff6773f90c298
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159315'
---
## Sobre a rede do codespace

Por padrão, os seus códigos têm acesso a todos os recursos na internet pública, incluindo os gestores de pacotes, servidores de licença, bancos de dados e APIs da plataforma em nuvem, mas eles não têm acesso a recursos em redes privadas.

## Conectando-se a recursos em uma rede privada

No momento, existem dois métodos de acesso a recursos em uma rede privada dentro dos {% data variables.product.prodname_github_codespaces %}.
- Com uma extensão {% data variables.product.prodname_cli %} para configurar seu computador local como um gateway para recursos remotos.
- Como usar uma VPN. 

### Como usar a extensão da CLI do GitHub para acessar recursos remotos

{% note %}

**Observação**: a extensão {% data variables.product.prodname_cli %} está atualmente na versão beta e sujeita a alterações. 

{% endnote %}

A extensão {% data variables.product.prodname_cli %} permite que você crie uma ponte entre um codespace e seu computador local para que o codespace possa acessar qualquer recurso remoto que esteja acessível em seu computador. O codespace usa seu computador local como um gateway de rede para alcançar esses recursos. Para obter mais informações, confira "[Como usar {% data variables.product.prodname_cli %} para acessar recursos remotos](https://github.com/github/gh-net#codespaces-network-bridge)."

   
   

### Usar uma VPN para acessar recursos por trás de uma rede privada

Como alternativa à extensão {% data variables.product.prodname_cli %}, você pode usar uma VPN para acessar recursos por trás de uma rede privada de dentro do seu codespace.

Recomendamos o uso de ferramentas de VPN como o [OpenVPN](https://openvpn.net/) para acessar recursos em uma rede privada. Para obter mais informações, confira "[Como usar o cliente OpenVPN dos {% data variables.product.prodname_github_codespaces %}](https://github.com/codespaces-contrib/codespaces-openvpn)".

Também existem várias soluções de terceiros que, embora não sejam aprovadas explicitamente pelo {% data variables.product.prodname_dotcom %}, oferecem exemplos de como fazer a integração com os {% data variables.product.prodname_github_codespaces %}.

Essas soluções de terceiros incluem:

- [Tailscale](https://tailscale.com/kb/1160/github-codespaces/)

### Permitir a listagem de recursos privados para codespaces

Embora {% data variables.product.prodname_dotcom %} publica intervalos de IP para vários produtos na sua Meta API, os IPs dos codespaces são atribuídos dinamicamente, o que significa que o seu código não tem a garantia de ter o mesmo endereço IP dia após dia. É altamente desaconselhável que os usuários de permitam toda uma faixa de IP, pois isso daria acesso excessivamente amplo a todos os codespaces (incluindo usuários não associados aos seus codespaces).

Para obter mais informações sobre a Meta API, confira "[Meta](/rest/reference/meta)".

## Restringindo o acesso à internet pública

Atualmente, não há forma de restringir os codespaces de acessar a Internet pública ou de restringir o acesso de usuários devidamente autenticados a uma porta encaminhada.

Para ver mais informações sobre como proteger seus codespaces, confira "[Segurança em {% data variables.product.prodname_github_codespaces %}](/codespaces/codespaces-reference/security-in-github-codespaces)".
