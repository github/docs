---
title: Almacenar los datos de los flujos de trabajo como artefactos
shortTitle: Almacenar artefactos de los flujos de trabajo
intro: Los artefactos te permiten compartir datos entre puestos en un flujo de trabajo y almacenar los datos una vez que se ha completado ese flujo de trabajo.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/persisting-workflow-data-using-artifacts
  - /github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts
  - /actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts
  - /actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
topics:
  - Workflows
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Acerca de los artefactos de flujo de trabajo

Los artefactos te permiten hacer datos persistentes después de que se complete un job y comparten estos datos con otro job en el mismo flujo de trabajo. Un artefacto es un archivo o recopilación de archivos producidos durante una ejecución de flujo de trabajo. Por ejemplo, puedes utilizar artefactos para guardar tu compilación y probar el resultado después de que haya terminado una ejecución de flujo de trabajo.

{% data reusables.github-actions.artifact-log-retention-statement %} El periodo de retención para una solicitud de cambios se reinicia cada vez que alguien sube una confirmación nueva en dicha solicitud.

Estos son algunos de los artefactos comunes que puedes subir:

- Archivos de registro y vaciados de memoria
- Resultados de prueba, fallas y capturas de pantalla
- Archivos binarios o comprimidos
- Resultados de la prueba de rendimiento y resultados de cobertura del código

{% if currentVersion == "free-pro-team@latest" %}

Almacenar artefactos consume espacio de almacenamiento en {% data variables.product.product_name %}. {% data reusables.github-actions.actions-billing %} Para obtener más información, consulta "[Administrar la facturación para {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".

{% else %}

Los artefactos caducan automáticamente después de 90 días, pero siempre puedes reclamar el almacenamiento utilizado de {% data variables.product.prodname_actions %} si borras artefactos antes de que caduquen en {% data variables.product.product_name %}.

{% endif %}

Los artefactos se cargan durante una ejecución de flujo de trabajo y puedes ver el nombre y tamaño de estos en la IU. Cuando se descarga un artefacto utilizando la IU de {% data variables.product.product_name %}, todos los archivos que se hayan subido de manera individual como parte del mismo se comprimirán en un solo archivo. Esto significa que los costos se calcularán con base en el tamaño del artefacto cargado y no en aquél del archivo comprimido.

{% data variables.product.product_name %} proporciona dos acciones que puedes usar para cargar y descargar artefactos de construcción. Para obtener más información, consulta las acciones {% if currentVersion == "free-pro-team@latest" %}[actions/upload-artifact](https://github.com/actions/upload-artifact) y [download-artifact](https://github.com/actions/download-artifact){% else %} `actions/upload-artifact` y `download-artifact` en {% data variables.product.product_location %}{% endif %}.

Para compartir datos entre jobs:

* **Cargar archivos**: Asigna un nombre al archivo cargado y sube los datos antes de que termine el job.
* **Descargar archivos**: Solo puedes descargar artefactos que se hayan subido durante la misma ejecución del flujo de trabajo. Cuando descargas un archivo, puedes referenciarlo por su nombre.

Los pasos de un job comparten el mismo ambiente en la máquina ejecutora, pero se ejecutan en su propio proceso individual. Para pasar datos entre pasos en un job, puedes usar entradas y salidas. Para obtener más información sobre entradas y salidas, consulta "[Sintaxis de metadatos para {% data variables.product.prodname_actions %}](/articles/metadata-syntax-for-github-actions)".

### Cargar artefactos de construcción y prueba

Puedes crear un flujo de trabajo de integración continua (CI) para construir y probar tu código. Para obtener más información acerca de cómo utilizar {% data variables.product.prodname_actions %} para realizar la IC, consulta la sección "[Acerca de la integración contínua](/articles/about-continuous-integration)".

El resultado de la construcción y la prueba de tu código frecuentemente produce archivos que puedes usar para depurar fallas de prueba y códigos de producción que puedes implementar. Puedes configurar un flujo de trabajo para construir y probar el código subido a tu repositorio e informar un estado satisfactorio o de falla. Puedes cargar los resultados de construcción y prueba para usar en implementaciones, pruebas de depuración fallidas o fallos, y para visualizar la cobertura del conjunto de prueba.

Puedes usar la acción `upload-Artifact` para cargar artefactos. Cuando cargues un artefacto, puedes especificar un archivo sencillo o un directorio, o varios archivos o directorios. También puedes excluir ciertos archivos o directorios y utilizar patrones de comodín. Te recomendamos que proporciones un nombre para cada artefacto pero, si no se lo das, entonces el nombre predeterminado que se utilizará será `artifact`. Para obtener más información sobre la sintaxis, consulta la acción {% if currentVersion == "free-pro-team@latest" %}[actions/upload-artifact](https://github.com/actions/upload-artifact){% else %} `actions/upload-artifact` en {% data variables.product.product_location %}{% endif %}.

#### Ejemplo

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

En este ejemplo se muestra cómo crear un flujo de trabajo para un proyecto Node.js que construye el código en el directorio `src` y ejecuta las pruebas en el directorio `tests`. Puedes suponer que la ejecución `npm test` produce un informe de cobertura de código denominado `code-coverage.html` almacenada en el directorio `output/test/`.

El flujo de trabajo carga los artefactos de producción en el directorio `dist`, pero excluye cualquier archivo de markdown. También carga el reporte `code-coverage.html` como otro artefacto.

```yaml{:copy}
name: Node CI

on: [push]

jobs:
  build_and_test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2
      - name: npm install, build, and test
        run: |
          npm install
          npm run build --if-present
          npm test
      - name: Archive production artifacts
        uses: actions/upload-artifact@v2
        with:
          name: dist-without-markdown
          path: |
            dist
            !dist/**/*.md
      - name: Archive code coverage results
        uses: actions/upload-artifact@v2
        with:
          name: code-coverage-report
          path: output/test/code-coverage.html
```

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
### Configurar un periodo de retención de artefactos personalizado

Puedes definir un periodo de retención personalizado para los artefactos indivudales que crea un flujo de trabajo. Cuando utilices un flujo de trabajo para crear un artefacto nuevo, puedes utilizar `retention-days` con la acción `upload-artifact`. Este ejemplo ilustra cómo configurar un periodo de retención personalizado de 5 días para el artefacto que se llama `my-artifact`:

```yaml{:copy}
  - name: 'Upload Artifact'
    uses: actions/upload-artifact@v2
    with:
      name: my-artifact
      path: my_file.txt
      retention-days: 5
```

El valor `retention-days` no puede exceder el límite de retención que configuró el repositorio, organización o empresa.
{% endif %}

### Descargar o eliminar artefactos

Durante una ejecución de flujo de trabajo, puedes utilizar la acción [`download-artifact`](https://github.com/actions/download-artifact) para descargar los artefactos que se cargaron previamente en la misma ejecución de flujo de trabajo.

Después de que se haya completado una ejecución de flujo de trabajo, puedes descargar o borrar los artefactos en {% data variables.product.prodname_dotcom %} o utilizando la API de REST. Para obtener más información, consulta las secciones "[Descargar los artefactos de un flujo de trabajo](/actions/managing-workflow-runs/downloading-workflow-artifacts)", "[eliminar los artefactos de un flujo de trabajo](/actions/managing-workflow-runs/removing-workflow-artifacts)", y la "[API de REST de Artefactos](/rest/reference/actions#artifacts)".

#### Descargar artefactos durante una ejecución de flujo de trabajo

La acción [`actions/download-artifact`](https://github.com/actions/download-artifact) puede utilizarse para descargar artefactos que se hayan cargado previamente durante una ejecución de flujo de trabajo.

{% note %}

**Nota:** Solo podrás descargar los artefactos que se hayan cargado durante la misma ejecución de flujo de trabajo.

{% endnote %}

Especificar el nombre de un artefacto para descargar un artefacto individual. Si cargaste un artefacto sin especificar un nombre, el nombre predeterminado de éste será `artifact`.

```yaml
- name: Download a single artifact
  uses: actions/download-artifact@v2
  with:
    name: my-artifact
```

También puedes descargar todos los artefactos en una ejecución de flujo de trabajo si no especificas un nombre para éstos. Esto puede ser útil si estás trabajando con muchos artefactos.

```yaml
- name: Download all workflow run artifacts
  uses: actions/download-artifact@v2
```

Si descargas todos los artefactos de una ejecución de flujo de trabajo, se creará un directorio para cada uno de ellos utilizando su nombre.

Para obtener más información sobre la sintaxis, consulta la acción {% if currentVersion == "free-pro-team@latest" %}[actions/download-artifact](https://github.com/actions/download-artifact){% else %} `actions/download-artifact` en {% data variables.product.product_location %}{% endif %}.

### Pasar datos entre jobs en un flujo de trabajo

Puedes usar las acciones `upload-artifact` y `download-artifact` para compartir datos entre jobs en un flujo de trabajo. Este flujo de trabajo de ejemplo ilustra cómo pasar datos entre jobs en el mismo flujo de trabajo. Para obtener más información, consulta las acciones {% if currentVersion == "free-pro-team@latest" %}[actions/upload-artifact](https://github.com/actions/upload-artifact) y [download-artifact](https://github.com/actions/download-artifact){% else %} `actions/upload-artifact` y `download-artifact` en {% data variables.product.product_location %}{% endif %}.

Los jobs que dependen de los artefactos de un trabajo anterior deben esperar que el trabajo dependiente se complete exitosamente. Este flujo de trabajo usa la palabra clave `needs` para garantizar que `job_1`, `job_2` y `job_3` se ejecuten secuencialmente. Por ejemplo, `job_2` requiere `job_1` mediante la sintaxis `needs: job_1`.

El job 1 realiza estos pasos:
- Realiza un cálculo matemático y guarda el resultado en un archivo de texto llamado `math-homework.txt`.
- Utiliza la acción `upload-artifact` para cargar el archivo `math-homework.txt` con el nombre de archivo `homework`.

El job 2 usa el resultado del trabajo anterior:
- Descarga el artefacto `homework` cargado en el trabajo anterior. De manera predeterminada, la acción `download-artifact` descarga artefactos en el directorio del espacio de trabajo que ejecuta el paso. Puedes utilizar el parámetro de entrada `path` para especificar un directorio de descarga diferente.
- Lee el valor en el archivo `math-homework.txt`, realiza un cálculo matemático, y guarda el resultado en `math-homework.txt` nuevamente, sobreescribiendo su contenido.
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
        uses: actions/upload-artifact@v2
        with:
          name: homework
          path: math-homework.txt

  job_2:
    name: Multiply by 9
    needs: job_1
    runs-on: windows-latest
    steps:
      - name: Download math result for job 1
        uses: actions/download-artifact@v2
        with:
          name: homework
      - shell: bash
        run: |
          value=`cat math-homework.txt`
          expr $value \* 9 > math-homework.txt
      - name: Upload math result for job 2
        uses: actions/upload-artifact@v2
        with:
          name: homework
          path: math-homework.txt

  job_3:
    name: Display results
    needs: job_2
    runs-on: macOS-latest
    steps:
      - name: Download math result for job 2
        uses: actions/download-artifact@v2
        with:
          name: homework
      - name: Print the final result
        shell: bash
        run: |
          value=`cat math-homework.txt`
          echo The result is $value
```

La ejecución de flujo de trabajo archivará cualquier artefacto que haya generado. Para obtener más información sobre cómo descargar los artefactos archivados, consulta la sección "[Descargar artefactos de flujo de trabajo](/actions/managing-workflow-runs/downloading-workflow-artifacts)".
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
![Flujo de trabajo que pasa datos entre jobs para realizar cálculos matemáticos](/assets/images/help/repository/passing-data-between-jobs-in-a-workflow-updated.png)
{% else %}
![Flujo de trabajo que pasa datos entre jobs para realizar cálculos matemáticos](/assets/images/help/repository/passing-data-between-jobs-in-a-workflow.png)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

### Leer más

- "[Administrar la facturación de {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".

{% endif %}
