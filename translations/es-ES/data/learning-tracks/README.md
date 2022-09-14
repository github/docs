---
ms.openlocfilehash: dcc6cf1e8adf15c4997d4d62cd34bde99f7d37cd
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "145109722"
---
# Enfoques de Aprendizaje (conocidas como Rutas de Aprendizaje)

Los enfoques de aprendizaje son una recolección de artículos que te ayudan a dominar un tema específico. Los enfoques de aprendizaje se definen por producto. Por ejemplo, vea https://docs.github.com/en/actions/guides.

## Funcionamiento

El aprender a rastrear datos de un producto se define en dos lugares:

1. Un arreglo siempre para aprender a rastrear nombres se define en el índice de las guías de la página preliminar de llegada del producto.

    Por ejemplo, en `content/actions/guides/index.md`:
    ```
    learningTracks:
      - getting_started
      - continuous_integration
      - continuous_deployment
      - deploy_to_the_cloud
      - hosting_your_own_runners
      - create_actions
    ```

2. Se definen datos adicionales de cada seguimiento en un archivo YAML con el nombre del **producto** en el directorio `data`.

    Por ejemplo, en `data/learning-tracks/actions.yml`, cada uno de los elementos de la matriz `learningTracks` del archivo de contenido se representa con datos adicionales, como `title`, `description` y una matriz de vínculos `guides`.

    Una pista de aprendizaje en este archivo YAML **por versión** se debe designar como una pista de aprendizaje "destacada" mediante `featured_track: true`, que la configurará para que aparezca en la parte superior de la página de guías del producto. Las pruebas fallaràn si falta esta propiedad.

    La propiedad `featured_track` puede ser un valor booleano simple (por ejemplo, `featured_track: true`), o bien puede ser una cadena que incluya instrucciones de control de versiones (por ejemplo, `featured_track: '{% ifversion fpt %}true{% else %}false{% endif %}'`). Si usa el control de versiones, tendrá varios elementos `featured_track` por archivo YML, pero debe asegurarse de que solo se represente uno en cada versión compatible actual. Las pruebas fallarán si hay más o menos de un enlace destacado para cada versión.

## Control de versiones

El versionamiento para aprender pistas se procesa en l ahora interpretada de la página. El código se encuentra en [`lib/learning-tracks.js`](lib/learning-tracks.js), al que llama `page.render()`. Después, las pistas de aprendizaje procesadas se representan mediante `components/guides`.

Las condicionales líquidas **no** deben usarse para el control de versiones en el archivo YAML para las guías. Solo las guías de pistas de aprendizaje que aplican a la versión actual se interpretarán automáticamente. Si no hay pistas con guías que pertenezcan a la versión actual, la sección de pistas de aprendizaje no se interpretará en lo absoluto.

También es compatible el versionamiento explícito dentro de los datos de YML de las pistas de aprendizaje del producto. El formato y los valores permitidos son los mismos que en la [propiedad preliminar de versiones](/content#versions).

Por ejemplo:

```
learning_track_name:
  title: 'Learning track title'
  description: 'Learning track description'
  featured_track: true
  versions:
    ghes: '>=3.0'
  guides:
   - /path/to/guide1
   - /path/to/guide2
```

Si no se incluye la propiedad `versions`, se asume que la pista está disponible en todas las versiones.

## Cumplimiento de esquemas

El esquema para validar el archivo YAML de pistas de aprendizaje se encuentra en [`tests/helpers/schemas/learning-tracks-schema.js`](tests/helpers/schemas/learning-tracks-schema.js) y lo ejecuta [`tests/content/lint-files.js`](tests/content/lint-files.js).
