---
title: Instalación de un paquete
intro: 'Puedes instalar un paquete desde {% data variables.product.prodname_registry %} y usar el paquete como dependencia en tu propio proyecto.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/installing-a-package
  - /packages/publishing-and-managing-packages/installing-a-package
  - /packages/manage-packages/installing-a-package
permissions: You can install any package that you have permission to view.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 86c095ab1eddc969e4e04f3305059678ffcb9c20
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145140522'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

## Acerca de la instalación del paquete

También puedes buscar en {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} para encontrar paquetes en el {% data variables.product.prodname_registry %} que puedes instalar en tu propio proyecto. Para más información, vea "[Búsqueda de paquetes en {% data variables.product.prodname_registry %}](/search-github/searching-on-github/searching-for-packages)".

Una vez que encuentres un paquete, puedes leer las instrucciones de la descripción y la instalación y el uso del paquete en la página del paquete.

## Instalación de un paquete

Puede instalar un paquete desde {% data variables.product.prodname_registry %} mediante cualquier {% ifversion fpt or ghae or ghec %}cliente de paquete admitido{% else %}tipo de paquete habilitado para la instancia{% endif %} si sigue las mismas instrucciones generales.

1. Autenticar para {% data variables.product.prodname_registry %} usando las instrucciones para tu cliente de paquete. Para más información, vea "[Autenticación en paquetes de GitHub](/packages/learn-github-packages/introduction-to-github-packages#authenticating-to-github-packages)".
2. Instala el paquete usando las instrucciones para tu cliente de paquete.

Para obtener instrucciones específicas para el cliente del paquete, vea "[Trabajo con un registro de {% data variables.product.prodname_registry %}](/packages/working-with-a-github-packages-registry)".
