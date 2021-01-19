---
title: Subir un archivo SARIF a GitHub
shortTitle: Cargar un archivo SARIF
intro: '{% data reusables.code-scanning.you-can-upload-third-party-analysis %}'
permissions: 'Las personas con permisos de escritura en un repositorio pueden cargar datos de {% data variables.product.prodname_code_scanning %} desde una herramienta de terceros.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/managing-security-vulnerabilities/uploading-a-code-scanning-analysis-to-github
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### Acerca de la carga de archivos SARIF para {% data variables.product.prodname_code_scanning %}

{% data variables.product.prodname_dotcom %} crea alertas de {% data variables.product.prodname_code_scanning %} en un repositorio utilizando información de los archivos de Formato de Intercambio para Resultados de Análisis Estático (SARIF). El archivo SARIF puede generarse desde una herramienta de análisis compatible con SARIF que ejecutes en el mismo flujo de trabajo de {% data variables.product.prodname_actions %} que utilizaste para cargar el archivo. Como alternativa, cuando se genere el archivo como un artefacto fuera de tu repositorio, puedes cargar el archivo SARIF directamente a algún repositorio y utilizar el flujo de trabajo para subir este archivo. Para obtener más información, consulta la sección "[Administrar las alertas de {% data variables.product.prodname_code_scanning %} para tu repositorio](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository)".

Puedes generar archivos SARIF utilizando muchas herramientas de prueba de seguridad para análisis estático, incluyendo a {% data variables.product.prodname_codeql %}. Para cargar resultados desde herramientas de terceros debes utilizar el Formato de Intercambio para Resultados de Análisis Estático (SARIF) 2.1.0. Para obtener más información, consulta la sección "[Acerca de la compatibilidad de SARIF con {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-sarif-support-for-code-scanning)".

Puedes cargar los resultados utilizando las {% data variables.product.prodname_actions %}{% if currentVersion == "enterprise-server@2.22" %} (disponibles si tu organización está participando en el programa del beta){% endif %}, la API del {% data variables.product.prodname_code_scanning %}, o el {% data variables.product.prodname_codeql_runner %}. El mejor método de carga dependerá de cómo generas el archivo SARIF, por ejemplo, si utilizas:

- {% data variables.product.prodname_actions %} para ejecutar la acción de {% data variables.product.prodname_codeql %}, no hay que hacer nada más. La acción de {% data variables.product.prodname_codeql %} carga el archivo de SARIF automáticamente cuando completa el análisis.
- "[Administrar una ejecución de flujo de trabajo](/actions/configuring-and-managing-workflows/managing-a-workflow-run#viewing-your-workflow-history)"
- {% data variables.product.prodname_dotcom %} mostrará alertas de {% data variables.product.prodname_code_scanning %} desde el archivo SARIF cargado en tu repositorio. Si bloqueas la carga automática, cuando estés listo para cargar los resultados, puedes utilizar el comando `upload` (para obtener más información, consulta la seción "[Ejecutar el {% data variables.product.prodname_code_scanning %} en tu sistema de IC](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system)").
- Una herramienta que genera resultados como un artefacto fuera de tu repositorio, puedes utilizar la API de {% data variables.product.prodname_code_scanning %} para cargar el archivo (para obtener más ifnormación, consulta la sección "[Cargar un archivo de SARIF](/rest/reference/code-scanning#upload-a-sarif-file)").

{% data reusables.code-scanning.not-available %}

### Cargar un análisis de {% data variables.product.prodname_code_scanning %} con {% data variables.product.prodname_actions %}

Para cargar un archivo SARIF de terceros a {% data variables.product.prodname_dotcom %}, necesitarás un flujo de trabajo de {% data variables.product.prodname_actions %}. Para obtener más información, consulta la sección "[Aprende sobre las {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)" y "[Aprende sobre las {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

Tu flujo de trabajo necesitará utilizar la acción `upload-sarif`, que tiene parámetros de entrada que puedes utilizar para configurar la carga. Tiene parámetros de entrada que puedes utilizar para configurar la carga. El parámetro de entrada principal que utilizarás será `sarif-file`, el cual configura el archivo o directorio de los archivos SARIF a cargar. El directorio o ruta de archivo es relativo a la raíz del repositorio. Para obtener más información, consulta la [acción `upload-sarif`](https://github.com/github/codeql-action/tree/HEAD/upload-sarif).

La acción `upload-sarif` puede configurarse para ejecutarse cuando ocurren los eventos `push` y `scheduled`. Para obtener más información acerca de los eventos {% data variables.product.prodname_actions %}, consulta la sección [Eventos que activan flujos de trabajo](/actions/reference/events-that-trigger-workflows)".

Si tu archivo SARIF no incluye `partialFingerprints`, la acción `upload-sarif` calculará el campo `partialFingerprints` para ti e intentará prevenir las alertas duplicadas. {% data variables.product.prodname_dotcom %} solo puede crear `partialFingerprints` cuando el repositorio contenga tanto el archivo SARIF como el código fuente utilizado en el análisis estático. Para obtener más información acerca de prevenir alertas duplicadas, consulta la sección "[Acerca de la compatibilidad de SARIF con el escaneo de código](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-sarif-support-for-code-scanning#preventing-duplicate-alerts-using-fingerprints)".

#### Ejemplo de flujo de trabajo para los archivos SARIF generados fuera de un repositorio

Puedes crear un nuevo flujo de trabajo que cargue archivos SARIF después de que los confirmes en tu repositorio. Esto es útil cuando el archivo SARIF se genera como un artefacto fuera de tu repositorio.

Este flujo de trabajo de ejemplo se ejecuta cada que las confirmaciones se cargan al repositorio. La acción utiliza la propiedad `partialFingerprints` para determinar si ha habido cambios. Adicionalmente a ejecutarse cuando se cargan las confirmaciones, el flujo de trabajo se programa para su ejecución una vez por semana. Para obtener más información, consulta "[Eventos que activan los flujos de trabajo](/actions/reference/events-that-trigger-workflows)".

Este flujo de trabajo carga el archivo `results.sarif` ubicado en la raíz del repositorio. Para obtener más información acerca de cómo crear un archivo de flujo de trabajo, consulta la sección "[Aprende sobre las {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

Como alternativa, puedes modificar este flujo de trabajo para cargar un directorio de archivos SARIF. Por ejemplo, puedes colocar todos los archivos SARIF en un directorio en la raíz de tu repositorio, el cual se llame `sarif-output` y configurar el parámetro de entrada de la acción `sarif_file` como `sarif-output`.

```yaml
name: "Upload SARIF"

# Run workflow each time code is pushed to your repository and on a schedule.
# The scheduled workflow runs every at 00:00 on Sunday UTC time.
on:
  push:
  schedule:
  - cron: '0 0 * * 0'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    # This step checks out a copy of your repository.
    - name: Checkout repository
      uses: actions/checkout@v2
    - name: Upload SARIF file
      uses: github/codeql-action/upload-sarif@v1
      with:
        # Path to SARIF file relative to the root of the repository
        sarif_file: results.sarif
```

#### Ejemplo de flujo de trabajo que ejecuta la herramienta de análisis ESLint

Si generas tu archivo SARIF de terceros como parte de un flujo de trabajo de integración contínua (IC), puedes agregar la acción `upload-sarif` como un paso después de ejecutar tus pruebas de IC. Si aún no tienes un flujo de trabajo de IC, puedes crearlo utilizando una plantilla de {% data variables.product.prodname_actions %}. Para obtener más información, consulta la "[guía rápida de {% data variables.product.prodname_actions %}](/actions/quickstart)".

Este flujo de trabajo de ejemplo se ejecuta cada que las confirmaciones se cargan al repositorio. La acción utiliza la propiedad `partialFingerprints` para determinar si ha habido cambios. Adicionalmente a ejecutarse cuando se cargan las confirmaciones, el flujo de trabajo se programa para su ejecución una vez por semana. Para obtener más información, consulta "[Eventos que activan los flujos de trabajo](/actions/reference/events-that-trigger-workflows)".

El flujo de trabajo muestra un ejemplo de ejecución de la herramienta de análisis estático ESLint como un paso en un flujo de trabajo. El paso `Run ESLint` ejecuta la herramienta ESLint y da como salida el archivo `results.sarif`. El flujo de trabajo entonces carga el archivo `results.sarif` a {% data variables.product.prodname_dotcom %} utilizando la acción `upload-sarif`. Para obtener más información acerca de cómo crear un archivo de flujo de trabajo, consulta la sección "[Introducción a Github Actions](/actions/learn-github-actions/introduction-to-github-actions)".

```yml
name: "ESLint analysis"

# Run workflow each time code is pushed to your repository and on a schedule.
# The scheduled workflow runs every at 00:00 on Sunday UTC time.
on:
  push:
  schedule:
  - cron: '0 0 * * 0'

jobs:
  build:
    steps:
    - uses: actions/checkout@v2
    - name: Run npm install
      run: npm install
    # Runs the ESlint code analysis
    - name: Run ESLint
      # eslint exits 1 if it finds anything to report
      run: node_modules/.bin/eslint build docs lib script spec-main -f node_modules/@microsoft/eslint-formatter-sarif/sarif.js -o results.sarif || true
    # Uploads results.sarif to GitHub repository using the upload-sarif action
    - uses: github/codeql-action/upload-sarif@v1
      with:
        # Path to SARIF file relative to the root of the repository
        sarif_file: results.sarif
```

### Further reading

- "[Sintaxis de flujo de trabajo para las {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions)"
- "[Visualizar tu historial de flujos de trabajo](/actions/managing-workflow-runs/viewing-workflow-run-history)"
- "[Ejecutar el {% data variables.product.prodname_code_scanning %} en tu sistema de IC](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system)"
- "[Cargar un archivo SARIF](/rest/reference/code-scanning#upload-a-sarif-file)"
