---
title: À propos des adresses IP de GitHub
intro: '{% data variables.product.product_name %} traite les applications de plusieurs plages d’adresses IP, qui sont disponibles en utilisant l’API.'
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145106586'
---
Vous pouvez récupérer une liste des adresses IP de {% data variables.product.prodname_dotcom %} à partir du point de terminaison d’API [meta](https://api.github.com/meta). Pour plus d’informations, consultez « [Meta](/rest/reference/meta) ».

{% note %}

**Remarque :** La liste d’adresses IP {% data variables.product.prodname_dotcom %} retournée par l’API Meta n’est pas exhaustive. Par exemple, il se peut que les adresses IP pour certains services {% data variables.product.prodname_dotcom %}, par exemple LFS ou {% data variables.product.prodname_registry %}, ne soient pas listées.

{% endnote %}

Ces adresses IP sont utilisées par {% data variables.product.prodname_dotcom %} pour servir notre contenu, fournir des webhooks et effectuer des builds {% data variables.product.prodname_actions %} hébergées.

Ces plages sont en [notation CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation). Vous pouvez utiliser un outil de conversion en ligne pour effectuer une conversion de la notation CIDR en plages d’adresses IP, par exemple le site [CIDR to IPv4 Conversion](https://www.ipaddressguide.com/cidr).

Nous apportons parfois des modifications à nos adresses IP. Nous ne vous recommandons pas d’appliquer des autorisations par adresse IP. Toutefois, si vous utilisez ces plages d’adresses IP, nous vous encourageons vivement à surveiller régulièrement notre API.

Pour que les applications fonctionnent, vous devez autoriser les ports TCP 22, 80, 443 et 9418 par le biais de nos plages d’adresses IP pour `github.com`.

## Pour aller plus loin

- « [Résolution des problèmes liés à la connectivité](/articles/troubleshooting-connectivity-problems) »
