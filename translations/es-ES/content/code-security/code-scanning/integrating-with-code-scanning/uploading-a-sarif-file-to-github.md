---
title: Subir un archivo SARIF a GitHub
shortTitle: Upload a SARIF file
intro: '{% data reusables.code-scanning.you-can-upload-third-party-analysis %}'
permissions: 'People with write permissions to a repository can upload {% data variables.product.prodname_code_scanning %} data generated outside {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/managing-security-vulnerabilities/uploading-a-code-scanning-analysis-to-github
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/uploading-a-sarif-file-to-github
  - /code-security/secure-coding/uploading-a-sarif-file-to-github
  - /code-security/secure-coding/integrating-with-code-scanning/uploading-a-sarif-file-to-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Integration
  - Actions
  - Repositories
  - CI
  - SARIF
ms.openlocfilehash: 3def104e487f54e2c48d462d1dcfe8bab63c6fa3
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161169'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## Acerca de la carga de archivos SARIF para {% data variables.product.prodname_code_scanning %}

{% data variables.product.prodname_dotcom %} crea alertas de {% data variables.product.prodname_code_scanning %} en un repositorio utilizando información de los archivos de Formato de Intercambio para Resultados de Análisis Estático (SARIF). El archivo SARIF puede generarse desde una herramienta de análisis compatible con SARIF que ejecutes en el mismo flujo de trabajo de {% data variables.product.prodname_actions %} que utilizaste para cargar el archivo. Como alternativa, cuando se genere el archivo como un artefacto fuera de tu repositorio, puedes cargar el archivo SARIF directamente a algún repositorio y utilizar el flujo de trabajo para subir este archivo. Para más información, vea "[Administración de alertas de {% data variables.product.prodname_code_scanning %} para el repositorio](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)".

Puedes generar archivos SARIF utilizando muchas herramientas de prueba de seguridad para análisis estático, incluyendo a {% data variables.product.prodname_codeql %}. Los resultados deben usar la versión 2.1.0 de SARIF. Para más información, vea "[Compatibilidad con SARIF para {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/sarif-support-for-code-scanning)".

Puedes cargar los resultados mediante {% data variables.product.prodname_actions %}, la API de {% data variables.product.prodname_code_scanning %},{% ifversion codeql-runner-supported %} el {% data variables.code-scanning.codeql_runner %}{% endif %} o la {% data variables.product.prodname_codeql_cli %}. El mejor método de carga dependerá de cómo generas el archivo SARIF, por ejemplo, si utilizas:

- {% data variables.product.prodname_actions %} para ejecutar la acción de {% data variables.product.prodname_codeql %}, no hay que hacer nada más. La acción de {% data variables.product.prodname_codeql %} carga el archivo de SARIF automáticamente cuando completa el análisis.
- {% data variables.product.prodname_actions %} para ejecutar una herramienta de análisis compatible con SARIF, podías actualizar el flujo de trabajo para que incluya un último paso que cargue los resultados (míralo más adelante).
 - La {% data variables.product.prodname_codeql_cli %} para ejecutar el {% data variables.product.prodname_code_scanning %} en el sistema de CI, puedes usar la CLI para cargar los resultados en {% data variables.product.prodname_dotcom %} (para obtener más información, consulta "[Instalación de la {% data variables.product.prodname_codeql_cli %} en el sistema de CI](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)").{% ifversion codeql-runner-supported %}
- El {% data variables.code-scanning.codeql_runner %}, para ejecutar {% data variables.product.prodname_code_scanning %} en tu sistema de CI, de manera predeterminada, el ejecutor carga automáticamente los resultados en {% data variables.product.prodname_dotcom %} tras la finalización. Si bloquea la carga automática, cuando esté listo para cargar los resultados, puede usar el comando `upload` (para más información, vea "[Ejecución de {% data variables.code-scanning.codeql_runner %} en el sistema de CI](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)").{% endif %}
- Una herramienta que genera resultados como un artefacto fuera del repositorio, puede usar la API {% data variables.product.prodname_code_scanning %} para cargar el archivo (para más información, vea "[Carga de un análisis como datos de SARIF](/rest/reference/code-scanning#upload-an-analysis-as-sarif-data)").

{% data reusables.code-scanning.not-available %}

## Cargar un análisis de {% data variables.product.prodname_code_scanning %} con {% data variables.product.prodname_actions %}

Para utilizar las {% data variables.product.prodname_actions %} para cargar un archivo SARIF de terceros en un repositorio, necesitas un flujo de trabajo. Para más información, vea "[Más información sobre {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

El flujo de trabajo tendrá que usar la acción `upload-sarif`, que forma parte del repositorio `github/codeql-action`. Tiene parámetros de entrada que puedes utilizar para configurar la carga. Los parámetros de entrada principales que utilizarás serán:

- `sarif-file`, que configura el archivo o directorio de los archivos SARIF que se van a cargar. La ruta de acceso del directorio o archivo es relativa a la raíz del repositorio.
- `category` (opcional), que asigna una categoría para los resultados en el archivo SARIF. Esto te permite analizar la misma confirmación de varias formas y revisar los resultados utilizando la vista del {% data variables.product.prodname_code_scanning %} en {% data variables.product.prodname_dotcom %}. Por ejemplo, puedes analizar herramientas múltiples y, en los mono-repositorios, puedes analizar pedazos diferentes del repositorio con base en el subconjunto de archivos que cambiaron.

Para más información, vea la [acción `upload-sarif`](https://github.com/github/codeql-action/tree/{% ifversion actions-node16-action %}v2{% else %}v1{% endif %}/upload-sarif).

La acción `upload-sarif` se puede configurar para ejecutarse cuando se producen los eventos `push` y `scheduled`. Para más información sobre los eventos de {% data variables.product.prodname_actions %}, vea "[Eventos que desencadenan flujos de trabajo](/actions/reference/events-that-trigger-workflows)".

Si el archivo SARIF no incluye `partialFingerprints`, la acción `upload-sarif` calculará el campo `partialFingerprints` automáticamente e intentará evitar alertas duplicadas. {% data variables.product.prodname_dotcom %} solo puede crear `partialFingerprints` cuando el repositorio contiene el archivo SARIF y el código fuente usado en el análisis estático. Para más información sobre cómo evitar alertas duplicadas, vea "[Acerca de la compatibilidad con SARIF para el análisis de código](/code-security/secure-coding/sarif-support-for-code-scanning#providing-data-to-track-code-scanning-alerts-across-runs)".

{% data reusables.code-scanning.upload-sarif-alert-limit %}

### Ejemplo de flujo de trabajo para los archivos SARIF generados fuera de un repositorio

Puedes crear un nuevo flujo de trabajo que cargue archivos SARIF después de que los confirmes en tu repositorio. Esto resulta útil cuando el archivo SARIF se genera como un artefacto fuera del repositorio.

Este ejemplo de flujo de trabajo se ejecuta cada que las confirmaciones se cargan al repositorio. La acción usa la propiedad `partialFingerprints` para determinar si se han producido cambios. Además de ejecutarse cuando se insertan confirmaciones, el flujo de trabajo está programado para ejecutarse una vez a la semana. Para más información, vea "[Eventos que desencadenan flujos de trabajo](/actions/reference/events-that-trigger-workflows)".

Este flujo de trabajo carga el archivo `results.sarif` ubicado en la raíz del repositorio. Para más información sobre cómo crear un archivo de flujo de trabajo, vea "[Más información sobre {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

Como alternativa, puedes modificar este flujo de trabajo para cargar un directorio de archivos SARIF. Por ejemplo, podría colocar todos los archivos SARIF en un directorio en la raíz del repositorio denominado `sarif-output` y establecer el parámetro de entrada de la acción `sarif_file` en `sarif-output`. Tenga en cuenta que si carga un directorio, cada archivo SARIF debe incluir un valor `runAutomationDetails.id` único para definir la categoría de los resultados. Para más información, vea "[Objeto `runAutomationDetails`](/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning#runautomationdetails-object)".

```yaml
name: "Upload SARIF"

# Run workflow each time code is pushed to your repository and on a schedule.
# The scheduled workflow runs every Thursday at 15:45 UTC.
on:
  push:
  schedule:
    - cron: '45 15 * * 4'

jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      # required for all workflows
      security-events: write
      # only required for workflows in private repositories
      actions: read
      contents: read
    steps:
      # This step checks out a copy of your repository.
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}
      - name: Upload SARIF file
        uses: {% data reusables.actions.action-codeql-action-upload-sarif %}
        with:
          # Path to SARIF file relative to the root of the repository
          sarif_file: results.sarif
          # Optional category for the results
          # Used to differentiate multiple results for one commit
          category: my-analysis-tool
```

### Ejemplo de flujo de trabajo que ejecuta la herramienta de análisis ESLint

Si genera el archivo SARIF de terceros como parte de un flujo de trabajo de integración continua (CI), puede agregar la acción `upload-sarif` como un paso después de ejecutar las pruebas de CI. Si aún no tienes un flujo de trabajo de IC, puedes crearlo utilizando una plantilla de {% data variables.product.prodname_actions %}. Para más información, vea el "[Inicio rápido de {% data variables.product.prodname_actions %}](/actions/quickstart)".

Este ejemplo de flujo de trabajo se ejecuta cada que las confirmaciones se cargan al repositorio. La acción usa la propiedad `partialFingerprints` para determinar si se han producido cambios. Además de ejecutarse cuando se insertan confirmaciones, el flujo de trabajo está programado para ejecutarse una vez a la semana. Para más información, vea "[Eventos que desencadenan flujos de trabajo](/actions/reference/events-that-trigger-workflows)".

El flujo de trabajo muestra un ejemplo de ejecución de la herramienta de análisis estático ESLint como un paso en un flujo de trabajo. El paso `Run ESLint` ejecuta la herramienta ESLint y genera el archivo `results.sarif`. Después, el flujo de trabajo carga el archivo `results.sarif` en {% data variables.product.prodname_dotcom %} mediante la acción `upload-sarif`. Para más información sobre cómo crear un archivo de flujo de trabajo, vea "[Introducción a Acciones de GitHub](/actions/learn-github-actions/introduction-to-github-actions)".

```yaml
name: "ESLint analysis"

# Run workflow each time code is pushed to your repository and on a schedule.
# The scheduled workflow runs every Wednesday at 15:45 UTC.
on:
  push:
  schedule:
    - cron: '45 15 * * 3'

jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      # required for all workflows
      security-events: write
      # only required for workflows in private repositories
      actions: read
      contents: read
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Run npm install
        run: npm install
      # Runs the ESlint code analysis
      - name: Run ESLint
        # eslint exits 1 if it finds anything to report
        run: node_modules/.bin/eslint build docs lib script spec-main -f node_modules/@microsoft/eslint-formatter-sarif/sarif.js -o results.sarif || true
      # Uploads results.sarif to GitHub repository using the upload-sarif action
      - uses: {% data reusables.actions.action-codeql-action-upload-sarif %}
        with:
          # Path to SARIF file relative to the root of the repository
          sarif_file: results.sarif
```

## Información adicional

- "[Sintaxis de flujos de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions)"
- "[Visualización del historial de flujos de trabajo](/actions/managing-workflow-runs/viewing-workflow-run-history)"
- "[Acerca de {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} en el sistema de CI](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system)"
- "[Carga de un análisis como datos de SARIF](/rest/reference/code-scanning#upload-an-analysis-as-sarif-data)"
