---
title: Almacenar los datos de los flujos de trabajo como artefactos
shortTitle: Storing workflow artifacts
intro: Los artefactos te permiten compartir datos entre puestos en un flujo de trabajo y almacenar los datos una vez que se ha completado ese flujo de trabajo.
redirect_from:
  - /articles/persisting-workflow-data-using-artifacts
  - /github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts
  - /actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts
  - /actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts
  - /actions/guides/storing-workflow-data-as-artifacts
  - /actions/advanced-guides/storing-workflow-data-as-artifacts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
ms.openlocfilehash: d23b62f1e77fd08fd798f4fb1af9f44e4d1b1123
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179739'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca de los artefactos de flujo de trabajo

Los artefactos te permiten hacer datos persistentes después de que se complete un job y comparten estos datos con otro job en el mismo flujo de trabajo. Un artefacto es un archivo o recopilación de archivos producidos durante una ejecución de flujo de trabajo. Por ejemplo, puedes utilizar artefactos para guardar tu compilación y probar el resultado después de que haya terminado una ejecución de flujo de trabajo. {% data reusables.actions.reusable-workflow-artifacts %}

{% data reusables.actions.artifact-log-retention-statement %} El período de retención de una solicitud de incorporación de cambios vuelve a empezar cada vez que alguien envía una nueva confirmación a la solicitud de incorporación de cambios.

Estos son algunos de los artefactos comunes que puedes subir:

- Archivos de registro y vaciados de memoria
- Resultados de prueba, fallas y capturas de pantalla
- Archivos binarios o comprimidos
- Resultado de la prueba de rendimiento y resultados de la cobertura del código

{% ifversion fpt or ghec %}

Almacenar artefactos consume espacio de almacenamiento en {% data variables.product.product_name %}. {% data reusables.actions.actions-billing %} Para obtener más información, consulta "[Administración de la facturación para {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions)".

{% else %}

Los artefactos caducan automáticamente después de 90 días, pero siempre puedes reclamar el almacenamiento utilizado de {% data variables.product.prodname_actions %} si borras artefactos antes de que caduquen en {% data variables.product.product_location %}.

{% endif %}

Los artefactos se cargan durante una ejecución de flujo de trabajo y puedes ver el nombre y tamaño de estos en la IU. Cuando se descarga un artefacto utilizando la IU de {% data variables.product.product_name %}, todos los archivos que se hayan subido de manera individual como parte del mismo se comprimirán en un solo archivo. Esto significa que los costos se calcularán con base en el tamaño del artefacto cargado y no en aquél del archivo comprimido.

{% data variables.product.product_name %} proporciona dos acciones que puedes usar para cargar y descargar artefactos de construcción. Para obtener más información, consulta las acciones {% ifversion fpt or ghec %}[actions/upload-artifact](https://github.com/actions/upload-artifact) y [download-artifact](https://github.com/actions/download-artifact) {% else %} `actions/upload-artifact` y `download-artifact` las acciones en {% data variables.product.product_location %}{% endif %}.

Para compartir datos entre jobs:

* **Carga de archivos**: asigna un nombre al archivo cargado y carga los datos antes de que finalice el trabajo.
* **Descarga de archivos**: Solo puedes descargar artefactos que se cargaron durante la misma ejecución de flujo de trabajo. Cuando descargas un archivo, puedes referenciarlo por su nombre.

Los pasos de un job comparten el mismo ambiente en la máquina ejecutora, pero se ejecutan en su propio proceso individual. Para pasar datos entre pasos en un job, puedes usar entradas y salidas. Para obtener más información sobre las entradas y salidas, consulta "[Sintaxis de metadatos para {% data variables.product.prodname_actions %}](/articles/metadata-syntax-for-github-actions)".

{% ifversion actions-caching %}

{% data reusables.actions.comparing-artifacts-caching %}

Para obtener más información sobre el almacenamiento en caché de dependencias, consulta "[Almacenamiento en caché de dependencias para acelerar los flujos de trabajo](/actions/using-workflows/caching-dependencies-to-speed-up-workflows#comparing-artifacts-and-dependency-caching)".

{% endif %}

## Cargar artefactos de construcción y evaluación

Puedes crear un flujo de trabajo de integración continua (CI) para construir y probar tu código. Para obtener más información sobre el uso de {% data variables.product.prodname_actions %} para realizar la CI, consulta "[Acerca de la integración continua](/articles/about-continuous-integration)".

El resultado de la construcción y la prueba de tu código frecuentemente produce archivos que puedes usar para depurar fallas de prueba y códigos de producción que puedes implementar. Puedes configurar un flujo de trabajo para construir y probar el código subido a tu repositorio e informar un estado satisfactorio o de falla. Puedes cargar los resultados de construcción y prueba para usar en implementaciones, pruebas de depuración fallidas o fallos, y para visualizar la cobertura del conjunto de prueba.

Puedes usar la acción `upload-artifact` para cargar artefactos. Cuando cargues un artefacto, puedes especificar un archivo sencillo o un directorio, o varios archivos o directorios. También puedes excluir ciertos archivos o directorios y utilizar patrones de comodín. Te recomendamos que proporciones un nombre para cada artefacto pero, si no se lo das, entonces el nombre predeterminado que se utilizará será `artifact`. Para obtener más información sobre la sintaxis, consulta las acciones {% ifversion fpt or ghec %}[actions/upload-artifact](https://github.com/actions/upload-artifact) y{% else %} `actions/upload-artifact` en {% data variables.product.product_location %}{% endif %}.

### Ejemplo

Por ejemplo, tu repositorio o una aplicación web podrían contener archivos de SASS y TypeScript que debes convertir a CSS y JavaScript. Teniendo en cuenta que tu configuración de construcción envía los archivos compilados al directorio `dist`, puedes implementar los archivos en el directorio `dist` para tu servidor de aplicación web si todas las pruebas se completaron satisfactoriamente.

```
|-- hello-world (repository)
|   └── dist
|   └── tests
|   └── src
|       └── sass/app.scss
|       └── app.ts
|   └── output
|       └── test
|   
```

En este ejemplo se muestra cómo crear un flujo de trabajo para un proyecto de Node.js que compila el código en el directorio `src` y ejecuta las pruebas en el directorio `tests`. Puedes suponer que la ejecución de `npm test` genera un informe de cobertura de código denominado `code-coverage.html` almacenado en el directorio `output/test/`.

El flujo de trabajo carga los artefactos de producción en el directorio `dist`, pero excluye cualquier archivo Markdown. También carga el informe `code-coverage.html` como otro artefacto.

```yaml{:copy}
name: Node CI

on: [push]

jobs:
  build_and_test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}
      - name: npm install, build, and test
        run: |
          npm install
          npm run build --if-present
          npm test
      - name: Archive production artifacts
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: dist-without-markdown
          path: |
            dist
            !dist/**/*.md
      - name: Archive code coverage results
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: code-coverage-report
          path: output/test/code-coverage.html
```

## Configurar un periodo de retención de artefactos personalizado

Puedes definir un periodo de retención personalizado para los artefactos indivudales que crea un flujo de trabajo. Al usar un flujo de trabajo para crear un nuevo artefacto, puedes usar `retention-days` con la acción `upload-artifact`. En este ejemplo se muestra cómo configurar un período de retención personalizado de 5 días para el artefacto que se llama `my-artifact`:

```yaml{:copy}
  - name: 'Upload Artifact'
    uses: {% data reusables.actions.action-upload-artifact %}
    with:
      name: my-artifact
      path: my_file.txt
      retention-days: 5
```

El valor `retention-days` no puede superar el límite de retención establecido por el repositorio, la organización o la empresa.

## Descargar o eliminar artefactos

Durante una ejecución de flujo de trabajo, puedes usar la acción [`download-artifact`](https://github.com/actions/download-artifact) para descargar artefactos que se hayan cargado previamente en la misma ejecución de flujo de trabajo.

Después de que se haya completado una ejecución de flujo de trabajo, puedes descargar o borrar los artefactos en {% data variables.product.prodname_dotcom %} o utilizando la API de REST. Para obtener más información, consulta "[Descarga de artefactos de flujo de trabajo](/actions/managing-workflow-runs/downloading-workflow-artifacts)", "[Eliminación de artefactos de flujo de trabajo](/actions/managing-workflow-runs/removing-workflow-artifacts)" y "[API de REST de artefactos](/rest/reference/actions#artifacts)".

### Descargar artefactos durante una ejecución de flujo de trabajo

La acción [`actions/download-artifact`](https://github.com/actions/download-artifact) se puede usar para descargar artefactos cargados previamente durante una ejecución de flujo de trabajo.

{% note %}

**Nota:** Solo puedes descargar artefactos de un flujo de trabajo que se cargaron durante la misma ejecución de flujo de trabajo.

{% endnote %}

Especificar el nombre de un artefacto para descargar un artefacto individual. Si cargaste un artefacto sin especificar un nombre, el nombre predeterminado es `artifact`.

```yaml
- name: Download a single artifact
  uses: {% data reusables.actions.action-download-artifact %}
  with:
    name: my-artifact
```

También puedes descargar todos los artefactos en una ejecución de flujo de trabajo si no especificas un nombre para éstos. Esto puede ser útil si estás trabajando con muchos artefactos.

```yaml
- name: Download all workflow run artifacts
  uses: {% data reusables.actions.action-download-artifact %}
```

Si descargas todos los artefactos de una ejecución de flujo de trabajo, se creará un directorio para cada uno de ellos utilizando su nombre.

Para obtener más información sobre la sintaxis, consulta las acciones {% ifversion fpt or ghec %}[actions/download-artifact](https://github.com/actions/download-artifact) y{% else %} `actions/download-artifact` en {% data variables.product.product_location %}{% endif %}.

## Paso de datos entre trabajos de un flujo de trabajo

Puedes usar las acciones `upload-artifact` y `download-artifact` para compartir datos entre los trabajos de un flujo de trabajo. Este flujo de trabajo de ejemplo ilustra cómo pasar datos entre jobs en el mismo flujo de trabajo. Para obtener más información, consulta las acciones {% ifversion fpt or ghec %}[actions/upload-artifact](https://github.com/actions/upload-artifact) y [download-artifact](https://github.com/actions/download-artifact) {% else %} `actions/upload-artifact` y `download-artifact` las acciones en {% data variables.product.product_location %}{% endif %}.

Los jobs que dependen de los artefactos de un trabajo anterior deben esperar que el trabajo dependiente se complete exitosamente. Este flujo de trabajo usa la palabra clave `needs` para asegurarse de que `job_1`, `job_2` y `job_3` se ejecutan secuencialmente. Por ejemplo, `job_2` necesita `job_1` mediante la sintaxis `needs: job_1`.

El job 1 realiza estos pasos:
- Realiza un cálculo matemático y guarda el resultado en un archivo de texto denominado `math-homework.txt`.
- Usa la acción `upload-artifact` para cargar el archivo `math-homework.txt` con el nombre de artefacto `homework`.

El job 2 usa el resultado del trabajo anterior:
- Descarga el artefacto `homework` cargado en el trabajo anterior. De manera predeterminada, la acción `download-artifact` descarga artefactos en el directorio del área de trabajo en la que se ejecuta el paso. Puedes usar el parámetro de entrada `path` para especificar un directorio de descarga diferente.
- Lee el valor en el archivo `math-homework.txt`, realiza un cálculo matemático y guarda el resultado en `math-homework.txt` de nuevo, sobrescribiendo su contenido.
- Carga el archivo `math-homework.txt`. Esta carga sobreescribe el artefacto que se cargó previamente, ya que comparten el mismo nombre.

El job 3 muestra el resultado cargado en el trabajo anterior:
- Descarga el artefacto `homework`.
- Imprime el resultado de la ecuación matemática en el registro.

La operación matemática completa realizada en este ejemplo de flujo de trabajo es `(3 + 7) x 9 = 90`.

```yaml{:copy}
name: Share data between jobs

on: [push]

jobs:
  job_1:
    name: Add 3 and 7
    runs-on: ubuntu-latest
    steps:
      - shell: bash
        run: |
          expr 3 + 7 > math-homework.txt
      - name: Upload math result for job 1
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: homework
          path: math-homework.txt

  job_2:
    name: Multiply by 9
    needs: job_1
    runs-on: windows-latest
    steps:
      - name: Download math result for job 1
        uses: {% data reusables.actions.action-download-artifact %}
        with:
          name: homework
      - shell: bash
        run: |
          value=`cat math-homework.txt`
          expr $value \* 9 > math-homework.txt
      - name: Upload math result for job 2
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: homework
          path: math-homework.txt

  job_3:
    name: Display results
    needs: job_2
    runs-on: macOS-latest
    steps:
      - name: Download math result for job 2
        uses: {% data reusables.actions.action-download-artifact %}
        with:
          name: homework
      - name: Print the final result
        shell: bash
        run: |
          value=`cat math-homework.txt`
          echo The result is $value
```

La ejecución de flujo de trabajo archivará cualquier artefacto que haya generado. Para obtener más información sobre cómo descargar artefactos archivados, consulta "[Descarga de artefactos de flujo de trabajo](/actions/managing-workflow-runs/downloading-workflow-artifacts)".
![Flujo de trabajo que pasa datos entre trabajos para realizar cálculos matemáticos](/assets/images/help/repository/passing-data-between-jobs-in-a-workflow-updated.png)

{% ifversion fpt or ghec %}

## Información adicional

- "[Administración de la facturación para {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions)"

{% endif %}
