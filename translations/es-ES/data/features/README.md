---
ms.openlocfilehash: 3e44864fd82617c799cc4af8a3ab31b9279ed950
ms.sourcegitcommit: 96bbb6b8f3c9172209d80cb1502017ace3019807
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879433"
---
## Versiionamiento basado en características

El versionamiento basado en características nos permite definir y controlar las versiones de una "característica" nombrada arbitrariamente en un lguar.

**Nota**: No elimine `data/features/placeholder.yml` porque se usa en las pruebas.

## Funcionamiento

Agrega un archivo YAML nuevo con el nombre de característica que quieras utilizar en este directorio. Para una característica denominada `meow`, que sería `data/features/meow.yml`.

Agrega un bloque `versions` al archivo YML con los nombres cortos de las versiones en las que está disponible la característica. Por ejemplo:

```yaml
versions:
  fpt: '*'
  ghes: '>3.1'
  ghae: '*'
```

El formato y los valores permitidos son los mismos que en la [propiedad preliminar de versiones](/content#versions).

### Condicionales líquidas

Ahora puede usar `{% ifversion meow %} ... {% endif %}` en archivos de contenido.

### Preliminar

También puedes utilizar la característica como preliminar en los archivos de contenido:

```yaml
versions:
  fpt: '*'
  ghes: '>3.1'
  feature: 'meow'
```

No se puede usar `feature:` para especificar varias versiones simultáneas, ya que no se admite. Como alternativa, puedes crear un nuevo archivo de control de versiones basado en características con el control de versiones necesario.

## Cumplimiento de esquemas

El esquema para validar el control de versiones de características está en [`tests/helpers/schemas/feature-versions-schema.js`](/tests/helpers/schemas/feature-versions-schema.js) y lo ejerce [`tests/linting/lint-versioning.js`](/tests/linting/lint-versioning.js).

## Script para eliminar las etiquetas de característica

Por determinar
