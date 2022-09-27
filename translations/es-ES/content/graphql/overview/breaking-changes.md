---
title: Cambios importantes
intro: 'Aprende sobre los cambios sustanciales recientes y venideros a la API de GraphQL de {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /v4/breaking_changes
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: ee38f60dfd12d00688e46c739fc41f328203daf5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147496656'
---
## Acerca de los cambios sustanciales

Los cambios sustanciales son aquellos que pudieran necesitar que nuestros integradores realicen alguna acción al respecto. Dividimos estos cambios en dos categorías:

- **Importantes:** cambios que interrumpirán consultas existentes a GraphQL API. Por ejemplo, eliminar un campo sería un cambio sustancial.
- **Peligrosos:** cambios que no interrumpirán las consultas existentes, pero que podrían afectar al comportamiento del tiempo de ejecución de los clientes. Agregar un valor de enumerador es un ejemplo de un cambio peligroso.

Nos esforzamos por proporcionar API estables para nuestros integradores. Cuando una característica nueva sigue en evolución, se publica detrás de una [versión preliminar del esquema](/graphql/overview/schema-previews).

Anunciaremos los cambios sustanciales por venir por lo menos tres meses antes de aplicarlos al modelo de GraphQL, para proporcionar a los integradores tiempo para realizar los ajustes necesarios. Los cambios toman efecto en el primer día de un trimestre (1 de enero, 1 de abril, 1 de julio, o 1 de octubre). Por ejemplo, si anunciamos un cambio en el 15 de enero, se aplicará en el 1 de julio.
