---
title: Sobre os endereços IP do GitHub
intro: 'O {% data variables.product.product_name %} atende a aplicativos de vários intervalos de endereços IP, que são disponibilizados usando a API.'
redirect_from:
  - /articles/what-ip-addresses-does-github-use-that-i-should-whitelist
  - /categories/73/articles
  - /categories/administration
  - /articles/github-s-ip-addresses
  - /articles/about-github-s-ip-addresses
  - /articles/about-githubs-ip-addresses
  - /github/authenticating-to-github/about-githubs-ip-addresses
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/about-githubs-ip-addresses
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: GitHub's IP addresses
ms.openlocfilehash: ab598fa408512a43ab07c069119480b5ae03278e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145095794'
---
Recupere uma lista de endereços IP do {% data variables.product.prodname_dotcom %} no ponto de extremidade da [meta](https://api.github.com/meta) API. Para obter mais informações, confira "[Meta](/rest/reference/meta)".

{% note %}

**Observação:** a lista de endereços IP do {% data variables.product.prodname_dotcom %} retornados pela Meta API não pretende ser uma lista completa. Por exemplo, endereços IP para alguns serviços de {% data variables.product.prodname_dotcom %} não podem ser listados, como LFS ou {% data variables.product.prodname_registry %}.

{% endnote %}

Esses endereços IP são usados por {% data variables.product.prodname_dotcom %} para fornecer nosso conteúdo, webhooks e executar compilações de {% data variables.product.prodname_actions %} hospedadas.

Esses intervalos estão na [notação CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation). Use uma ferramenta de conversão online para conversão da notação CIDR em intervalos de endereços IP, por exemplo: [site de conversão CIDR para IPv4](https://www.ipaddressguide.com/cidr).

Nós alteramos nossos endereços IP de vez em quando. Não recomendamos permitir por endereço IP. No entanto, se você usar esses intervalos de IP, é altamente recomendável o monitoramento regular da nossa API.

Para que os aplicativos funcionem, você precisa permitir as portas TCP 22, 80, 443 e 9418 por meio de nossos intervalos de IP para `github.com`.

## Leitura adicional

- "[Solução de problemas de conectividade](/articles/troubleshooting-connectivity-problems)"
