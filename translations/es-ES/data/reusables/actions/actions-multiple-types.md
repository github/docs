---
ms.openlocfilehash: 4c39c079fb88a8a1b86ed9359ebe55be268389bb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145114746"
---
Si especificas los tipos de actividad o filtros para un evento y tu flujo de trabajo activa eventos múltiples, deberás configurar cada uno de ellos por separado. Debe agregar dos puntos (`:`) a todos los eventos, incluidos aquellos sin configuración.

Por ejemplo, un flujo de trabajo con el valor `on` siguiente se ejecutará cuando:

- Se crea una etiqueta
- Se hace una inserción a la rama `main` en el repositorio.
- Se hace una subida a la rama habilitada por {% data variables.product.prodname_pages %}

```yaml
on:
  label:
    types:
      - created
  push:
    branches:
      - main
  page_build:
```
