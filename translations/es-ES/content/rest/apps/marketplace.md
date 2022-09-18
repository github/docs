---
title: Marketplace de GitHub
allowTitleToDifferFromFilename: true
shortTitle: Marketplace
intro: ''
topics:
  - API
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
ms.openlocfilehash: acbdb60fc93898dd7c56c21f60e12fb9dbadb31d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145136326'
---
## Acerca de la API de {% data variables.product.prodname_marketplace %}

Para más información sobre {% data variables.product.prodname_marketplace %}, vea "[GitHub Marketplace](/marketplace/)".

La API de {% data variables.product.prodname_marketplace %} te permite ver qué clientes están utilizando un plan de precios, ver sus compras y también ver si una cuenta tiene una suscripción activa.

### Hacer pruebas con terminales de muestra

Esta API incluye puntos de conexión que le permiten [probar {% data variables.product.prodname_github_app %}](/marketplace/integrating-with-the-github-marketplace-api/testing-github-marketplace-apps/) con **datos auxiliares**. Los datos de muestra son datos falsos y preprogramados que no cambiarán con base en las suscripciones reales.

Para hacer pruebas con estos datos, utiliza una terminal de muestra en vez de su contraparte productiva. Esto te permite probar si la lógica de la API tendrá éxito antes de listar tus {% data variables.product.prodname_github_apps %} en {% data variables.product.prodname_marketplace %}.

Asegúrate de reemplazar tus terminales de muestra con aquellas productivas antes de desplegar tu {% data variables.product.prodname_github_app %}.
