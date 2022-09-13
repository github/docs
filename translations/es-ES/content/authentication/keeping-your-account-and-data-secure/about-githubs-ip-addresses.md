---
title: Acerca de las direcciones de IP de GitHub
intro: '{% data variables.product.product_name %} proporciona aplicaciones desde varios rangos de dirección IP, que están disponibles usando la API.'
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145119985'
---
Puede recuperar una lista de las direcciones IP de {% data variables.product.prodname_dotcom %} del punto de conexión de API [meta](https://api.github.com/meta). Para más información, vea "[Meta](/rest/reference/meta)".

{% note %}

**Nota:** La lista de direcciones IP de {% data variables.product.prodname_dotcom %} que devuelve la API Meta no pretende ser una lista exhaustiva. Por ejemplo, puede que no se listen las direcciones IP para algunos servicios de {% data variables.product.prodname_dotcom %}, tales como LFS o {% data variables.product.prodname_registry %}.

{% endnote %}

{% data variables.product.prodname_dotcom %} utiliza estas direcciones IP para servir nuestro contenido, entregar webhooks y realizar compilaciones de {% data variables.product.prodname_actions %} hospedadas.

Estos rangos están en [notación CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation). Puede usar una herramienta de conversión en línea para convertir la notación CIDR en intervalos de direcciones IP, por ejemplo: [sitio de conversión de CIDR a IPv4](https://www.ipaddressguide.com/cidr).

Hacemos cambios a nuestras direcciones IP de vez en cuando. No te recomendamos hacer una lista blanca por dirección de IP, sin embargo, si utilizas estos rangos de IP te exhortamos enfáticamente a monitorear nuestra API con frecuencia.

Para que las aplicaciones funcionen, debe permitir los puertos TCP 22, 80, 443 y 9418 mediante nuestros intervalos IP para `github.com`.

## Información adicional

- "[Solución de problemas de conectividad](/articles/troubleshooting-connectivity-problems)"
