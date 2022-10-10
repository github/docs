---
title: Solucionar problemas de consultas de búsqueda
intro: 'Si encuentras resultados inesperados cuando buscas en {% data variables.product.product_name %}, puedes solucionar los problemas revisando los problemas comunes y las limitaciones.'
redirect_from:
  - /articles/troubleshooting-search-queries
  - /github/searching-for-information-on-github/troubleshooting-search-queries
  - /github/searching-for-information-on-github/getting-started-with-searching-on-github/troubleshooting-search-queries
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
shortTitle: Troubleshoot search queries
ms.openlocfilehash: 2c90d144401974ebc44f4b80a1509593fe987329
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145118937'
---
## Interrupciones potenciales

Algunas consultas son costosas desde el punto de vista informático para que las ejecute nuestra infraestructura de búsqueda. Para que la búsqueda siga siendo rápida para todos, limitamos la cantidad de tiempo que se puede ejecutar una consulta individual. En pocas situaciones, cuando una consulta supera el límite de tiempo, la búsqueda devuelve todas las coincidencias que se encontraron antes de que se acabara el tiempo y te informa que se acabó el tiempo.

Llegar a una interrupción no necesariamente significa que los resultados de búsqueda estén incompletos. Solo significa que la consulta se interrumpió antes de que se buscara en todos los datos posibles.

## Limitaciones sobre la longitud de la consulta

Existen algunos límites en la longitud de las consultas cuando se busca en {% data variables.product.product_name %}:

* No se admiten consultas que superen los 256 caracteres
* No se puede construir una consulta con más de cinco operadores `AND`, `OR` o `NOT`.

Los tipos de búsqueda específicos, como la búsqueda de código, pueden tener más limitaciones. Revisa la documentación de estos tipos de búsqueda para obtener más información.

## Información adicional

- "[Acerca de la búsqueda en GitHub](/search-github/getting-started-with-searching-on-github/about-searching-on-github)"
