---
title: Características esenciales de Acciones de GitHub
shortTitle: Essential features
intro: 'Las {% data variables.product.prodname_actions %} se diseñaron para ayudarte a crear automatizaciones robustas y dinámicas. Esta guía te mostrará cómo crear flujos de trabajo de {% data variables.product.prodname_actions %} que incluyan variables de ambiente, scripts personalizados, y más.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Fundamentals
ms.openlocfilehash: 46a6a33928d9ff4587707972fc26de86c59f9ac6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145070098'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Información general

Las {% data variables.product.prodname_actions %} te permiten personalizar tus flujos de trabajo para satisfacer las necesidades específicas de tu aplicación y de tu equipo. En esta guía, presentaremos algunas de las técnicas de personalización esenciales, tales como el uso de variables, la ejecución de scripts, y el compartir datos y artefactos entre jobs.

##  Utilizar varibales en tus flujos de trabajo

Las {% data variables.product.prodname_actions %} incluyen variables de ambiente predeterminadas para cada ejecución de flujo de trabajo. Si necesitas utilizar variables de ambiente personalizadas, puedes configurarlas en tu archivo de flujo de trabajo de YAML. En este ejemplo se muestra cómo crear variables personalizadas con los nombres `POSTGRES_HOST` y `POSTGRES_PORT`. Estas variables están disponibles para el script `node client.js`.

```yaml
jobs:
  example-job:
      steps:
        - name: Connect to PostgreSQL
          run: node client.js
          env:
            POSTGRES_HOST: postgres
            POSTGRES_PORT: 5432
```

Para más información, vea "[Uso de variables de entorno](/actions/configuring-and-managing-workflows/using-environment-variables)".

## Agregar scripts a tu flujo de trabajo

Puedes utilizar acciones para ejecutar scripts y comandos de shell, los cuales se ejecutarán después en el ejecutor asignado. En este ejemplo se muestra cómo una acción puede usar la palabra clave `run` para ejecutarse en el ejecutor `npm install -g bats`.

```yaml
jobs:
  example-job:
    steps:
      - run: npm install -g bats
```

Por ejemplo, para ejecutar un script como una acción, puedes almacenarlo en tu repositorio e indicar la ruta y tipo de shell.

```yaml
jobs:
  example-job:
    steps:
      - name: Run build script
        run: ./.github/scripts/build.sh
        shell: bash
```

Para más información, vea "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun)".

## Compartir datos entre jobs

Si el trabajo genera archivos que quiere compartir con otro trabajo del mismo flujo de trabajo, o bien si quiere guardar los archivos para referencia futura, puede almacenarlos en {% data variables.product.prodname_dotcom %} como _artefactos_. Los artefactos son los archivos que se crean cuando desarrollas y pruebas tu código. Por ejemplo, los artefactos podrían incluir archivos binarios o de paquete, resultados de pruebas, capturas de pantalla o archivos de registro. Los artefactos se asocian con la ejecución del flujo de trabajo en donde se crearon y otro job puede utilizarlos. {% data reusables.actions.reusable-workflow-artifacts %}

Por ejemplo, puedes crear un archivo y luego subirlo como un artefacto.

```yaml
jobs:
  example-job:
    name: Save output
    steps:
      - shell: bash
        run: |
          expr 1 + 1 > output.log
      - name: Upload output file
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: output-log-file
          path: output.log
```

Para descargar un artefacto de una ejecución de flujo de trabajo independiente, puede usar la acción `actions/download-artifact`. Por ejemplo, puede descargar el artefacto denominado `output-log-file`.

```yaml
jobs:
  example-job:
    steps:
      - name: Download a single artifact
        uses: {% data reusables.actions.action-download-artifact %}
        with:
          name: output-log-file
```

Para descargar un artefacto desde la misma ejecución de flujo de trabajo, el trabajo de descarga debe especificar `needs: upload-job-name` para que no se inicie hasta que finalice el trabajo de carga.

Para más información sobre los artefactos, vea "[Conservación de datos de flujo de trabajo mediante artefactos](/actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts)".

## Pasos siguientes

Para continuar el aprendizaje sobre {% data variables.product.prodname_actions %}, vea "[Administración de flujos de trabajo complejos](/actions/learn-github-actions/managing-complex-workflows)".
