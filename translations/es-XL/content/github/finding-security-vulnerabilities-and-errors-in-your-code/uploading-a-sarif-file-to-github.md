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

{% data variables.product.prodname_dotcom %} creates {% data variables.product.prodname_code_scanning %} alerts in a repository using information from Static Analysis Results Interchange Format (SARIF) files. El archivo SARIF puede generarse desde una herramienta de análisis compatible con SARIF que ejecutes en el mismo flujo de trabajo de {% data variables.product.prodname_actions %} que utilizaste para cargar el archivo. Como alternativa, cuando se genere el archivo como un artefacto fuera de tu repositorio, puedes cargar el archivo SARIF directamente a algún repositorio y utilizar el flujo de trabajo para subir este archivo. Para obtener más información, consulta la sección "[Administrar alertas desde {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-alerts-from-code-scanning)".

You can generate SARIF files using many static analysis security testing tools, including {% data variables.product.prodname_codeql %}. Para cargar resultados desde herramientas de terceros debes utilizar el Formato de Intercambio para Resultados de Análisis Estático (SARIF) 2.1.0. Para obtener más información, consulta la sección "[Acerca de la compatibilidad de SARIF con {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-sarif-support-for-code-scanning)".

You can upload the results using {% data variables.product.prodname_actions %}{% if currentVersion == "enterprise-server@2.22" %} (available if your organization is taking part in the beta program){% endif %}, the {% data variables.product.prodname_code_scanning %} API, or the {% data variables.product.prodname_codeql_runner %}. The best upload method will depend on how you generate the SARIF file, for example, if you use:

- {% data variables.product.prodname_actions %} to run the {% data variables.product.prodname_codeql %} action, there is no further action required. The {% data variables.product.prodname_codeql %} action uploads the SARIF file automatically when it completes analysis.
- "[Administrar una ejecución de flujo de trabajo](/actions/configuring-and-managing-workflows/managing-a-workflow-run#viewing-your-workflow-history)"
- {% data variables.product.prodname_dotcom %} mostrará alertas de {% data variables.product.prodname_code_scanning %} desde el archivo SARIF cargado en tu repositorio. Para obtener más información, consulta la sección "[Administrar alertas de {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-alerts-from-code-scanning)".
- A tool that generates results as an artifact outside of your repository, you can use the {% data variables.product.prodname_code_scanning %} API to upload the file (for more information, see "[Upload a SARIF file](/rest/reference/code-scanning#upload-a-sarif-file)").

### Cargar un análisis de {% data variables.product.prodname_code_scanning %} con {% data variables.product.prodname_actions %}

Para cargar un archivo SARIF de terceros a {% data variables.product.prodname_dotcom %}, necesitarás un flujo de trabajo de {% data variables.product.prodname_actions %}. Para obtener más información, consulta las secciónes "[Acerca de {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)" y "[Configurar un flujo de trabajo](/actions/configuring-and-managing-workflows/configuring-a-workflow)".

Tu flujo de trabajo necesitará utilizar la acción `upload-sarif`, que tiene parámetros de entrada que puedes utilizar para configurar la carga. It has input parameters that you can use to configure the upload. El parámetro de entrada principal que utilizarás será `sarif-file`, el cual configura el archivo o directorio de los archivos SARIF a cargar. El directorio o ruta de archivo es relativo a la raíz del repositorio. Para obtener más información, consulta la [acción `upload-sarif`](https://github.com/github/codeql-action/tree/HEAD/upload-sarif).

La acción `upload-sarif` puede configurarse para ejecutarse cuando ocurren los eventos `push` y `scheduled`. Para obtener más información acerca de los eventos {% data variables.product.prodname_actions %}, consulta la sección [Eventos que activan flujos de trabajo](/actions/reference/events-that-trigger-workflows)".

Si tu archivo SARIF no incluye `partialFingerprints`, la acción `upload-sarif` calculará el campo `partialFingerprints` para ti e intentará prevenir las alertas duplicadas. {% data variables.product.prodname_dotcom %} solo puede crear `partialFingerprints` cuando el repositorio contenga tanto el archivo SARIF como el código fuente utilizado en el análisis estático. Para obtener más información acerca de prevenir alertas duplicadas, consulta la sección "[Acerca de la compatibilidad de SARIF con el escaneo de código](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-sarif-support-for-code-scanning#preventing-duplicate-alerts-using-fingerprints)".

#### Ejemplo de flujo de trabajo para los archivos SARIF generados fuera de un repositorio

Puedes crear un nuevo flujo de trabajo que cargue archivos SARIF después de que los confirmes en tu repositorio. Esto es útil cuando el archivo SARIF se genera como un artefacto fuera de tu repositorio.

Este flujo de trabajo de ejemplo se ejecuta cada que las confirmaciones se cargan al repositorio. La acción utiliza la propiedad `partialFingerprints` para determinar si ha habido cambios. Adicionalmente a ejecutarse cuando se cargan las confirmaciones, el flujo de trabajo se programa para su ejecución una vez por semana. Para obtener más información, consulta "[Eventos que activan los flujos de trabajo](/actions/reference/events-that-trigger-workflows)".

Este flujo de trabajo carga el archivo `results.sarif` ubicado en la raíz del repositorio. Para obtener más información acerca de crear un archivo de flujo de trabajo, consulta la sección "[Configurar un flujo de trabajo](/actions/configuring-and-managing-workflows/configuring-a-workflow)".

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

Si generas tu archivo SARIF de terceros como parte de un flujo de trabajo de integración contínua (IC), puedes agregar la acción `upload-sarif` como un paso después de ejecutar tus pruebas de IC. Si aún no tienes un flujo de trabajo de IC, puedes crearlo utilizando una plantilla de {% data variables.product.prodname_actions %}. Para obtener más información, consulta "[Comenzar con plantillas de flujo de trabajo preconfiguradas](/actions/getting-started-with-github-actions/starting-with-preconfigured-workflow-templates)."

Este flujo de trabajo de ejemplo se ejecuta cada que las confirmaciones se cargan al repositorio. La acción utiliza la propiedad `partialFingerprints` para determinar si ha habido cambios. Adicionalmente a ejecutarse cuando se cargan las confirmaciones, el flujo de trabajo se programa para su ejecución una vez por semana. Para obtener más información, consulta "[Eventos que activan los flujos de trabajo](/actions/reference/events-that-trigger-workflows)".

El flujo de trabajo muestra un ejemplo de ejecución de la herramienta de análisis estático ESLint como un paso en un flujo de trabajo. El paso `Run ESLint` ejecuta la herramienta ESLint y da como salida el archivo `results.sarif`. El flujo de trabajo entonces carga el archivo `results.sarif` a {% data variables.product.prodname_dotcom %} utilizando la acción `upload-sarif`. Para obtener más información acerca de crear un archivo de flujo de trabajo, consulta la sección "[Configurar un flujo de trabajo](/actions/configuring-and-managing-workflows/configuring-a-workflow)".

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

### Leer más

- "[Sintaxis de flujo de trabajo para las {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions)"
- "[Administrar una ejecución de flujo de trabajo](/actions/configuring-and-managing-workflows/managing-a-workflow-run#viewing-your-workflow-history)"
- "[Sintaxis de flujo de trabajo para las {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions)"
- "[Upload a SARIF file](/rest/reference/code-scanning#upload-a-sarif-file)"
