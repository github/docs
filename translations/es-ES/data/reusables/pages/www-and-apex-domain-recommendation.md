---
ms.openlocfilehash: 9007a7541d3ee57656a975af1bf430673c796d09
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145121458"
---
Si usa un dominio de vértice como el dominio personalizado, también se recomienda configurar un subdominio `www`. Si configuras los registros correctos para cada dominio, teclea a tu proveedor de DNS, {% data variables.product.prodname_pages %} creará automáticamente redireccionamientos entre los dominios. Por ejemplo, si configura `www.example.com` como dominio personalizado para el sitio y tiene registros DNS de {% data variables.product.prodname_pages %} configurados para los dominios de vértice y `www`, `example.com` se redirigirá a `www.example.com`. Tenga en cuenta que las redirecciones automáticas solo se aplican al subdominio `www`. Las redirecciones automáticas no se aplican a ningún otro subdominio, como `blog`.
