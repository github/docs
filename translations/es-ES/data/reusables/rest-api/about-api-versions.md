---
ms.openlocfilehash: dd7c5f37ab5b2d699b47460195e02ae21fca1733
ms.sourcegitcommit: d2f0b59ed096b9e68ef8f6fa019cd925165762ec
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/29/2022
ms.locfileid: "148184411"
---
La API REST {% data variables.product.product_name %} tiene versiones. El nombre de la versión de la API se basa en la fecha en la que se publicó dicha versión. Por ejemplo, la versión `{{ initialRestVersioningReleaseDate }}` de la API se publicó el {{ initialRestVersioningReleaseDateLong }}.

Todos los cambios importantes se publicarán en una nueva versión de API. Los cambios importantes son cambios que pueden interrumpir una integración. Los cambios importantes incluyen:

- quitar una operación completa
- quitar un parámetro o cambiar su nombre
- quitar un campo de respuesta o cambiar su nombre
- agregar un nuevo parámetro obligatorio
- hacer que se requiera un parámetro opcional anteriormente
- cambiar el tipo de un parámetro o campo de respuesta
- quitar valores de enumeración
- agregar una nueva regla de validación a un parámetro existente
- cambiar los requisitos de autenticación o autorización

Todos los cambios aditivos (no importantes) estarán disponibles en todas las versiones de API admitidas. Los cambios aditivos son cambios que no deben interrumpir una integración. Los cambios aditivos incluyen:

- agregar una operación
- agregar un parámetro opcional
- agregar un encabezado de solicitud opcional
- agregar un campo de respuesta
- agregar un campo de respuesta
- agregar valores de enumeración

Cuando se publica una nueva versión de la API REST, la versión anterior de la API se admitirá durante al menos 24 meses más después del lanzamiento de la nueva versión de la API.
