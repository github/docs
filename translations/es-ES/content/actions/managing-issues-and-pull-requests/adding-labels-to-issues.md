---
title: Agregar etiquetas a las propuestas
shortTitle: Add labels to issues
intro: 'Puedes utilizar las {% data variables.product.prodname_actions %} para etiquetar las propuestas automáticamente.'
redirect_from:
  - /actions/guides/adding-labels-to-issues
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
ms.openlocfilehash: a3523069b9422ecd8107007ca5e00fb0071dd738
ms.sourcegitcommit: 4d6d3735d32540cb6de3b95ea9a75b8b247c580d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/30/2022
ms.locfileid: '148185565'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

En este tutorial se muestra cómo usar la [acción `actions/github-script`](https://github.com/marketplace/actions/github-script) en un flujo de trabajo para etiquetar los problemas recientemente abiertos o vueltos a abrir. Por ejemplo, puede agregar la etiqueta `triage` cada vez que se abre o se vuelve a abrir un problema. Después, puede ver todas los problemas que necesitan clasificarse filtrando los problemas con la etiqueta `triage`.

La acción `actions/github-script` permite usar fácilmente la API {% data variables.product.prodname_dotcom %} en un flujo de trabajo.

En el tutorial, primero creará un archivo de flujo de trabajo en el que se usa la [acción `actions/github-script`](https://github.com/marketplace/actions/github-script). Después, personalizarás el flujo de trabajo de acuerdo con tus necesidades.

## Crear un flujo de trabajo

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. Copia el siguiente contenido de YAML en tu archivo de flujo de trabajo.
  
    ```yaml{:copy}
    name: Label issues
    on:
      issues:
        types:
          - reopened
          - opened
    jobs:
      label_issues:
        runs-on: ubuntu-latest
        permissions:
          issues: write
        steps:
          - uses: {% data reusables.actions.action-github-script %}
            with:
              script: |
                github.rest.issues.addLabels({
                  issue_number: context.issue.number,
                  owner: context.repo.owner,
                  repo: context.repo.repo,
                  labels: ["triage"]
                })
    ```

4. Personaliza el parámetro `script` en tu archivo de flujo de trabajo:
   - Los valores `issue_number`, `owner` y `repo` se establecen automáticamente mediante el objeto `context`. Normalmente no es necesario cambiar estos valores.
   - Cambie el valor de `labels` a la lista de etiquetas que quiera agregar al problema. Separa las etiquetas con comas. Por ejemplo, `["help wanted", "good first issue"]`. Para obtener más información sobre las etiquetas, vea "[Administrar etiquetas](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)".
5. {% data reusables.actions.commit-workflow %}

## Prueba el flujo de trabajo

Cada que se abre o re-abre una propuesta en tu repositorio, este flujo de trabajo agregará a la propuesta las etiquetas que especificaste.

Prueba tu flujo de trabajo creando una propuesta en tu repositorio.

1. Crea una propuesta en tu repositorio. Para más información, vea "[Creación de una incidencia](/github/managing-your-work-on-github/creating-an-issue)".
2. Para ver la ejecución de flujo de trabajo que se activó al crear la propuesta, ve el historial de tus ejecuciones de flujo de trabajo. Para más información, vea "[Visualización del historial de ejecución de flujos de trabajo](/actions/managing-workflow-runs/viewing-workflow-run-history)".
3. Cuando se complete el flujo de trabajo, la propuesta que creaste deberá tener agregadas las etiquetas que especificaste.

## Pasos siguientes

- Para más información sobre las tareas adicionales que puedes realizar con la acción `actions/github-script`, como agregar reacciones, visita la [documentación de la acción `actions/github-script`](https://github.com/marketplace/actions/github-script).
- Para obtener más información acerca de los distintos eventos que pueden desencadenar el flujo de trabajo, vea "[Eventos que desencadenan flujos de trabajo](/actions/reference/events-that-trigger-workflows#issues)".
- [Busque en GitHub](https://github.com/search?q=%22uses:+actions/github-script%22&type=code) ejemplos de flujos de trabajo mediante esta acción.
