---
title: Agregar etiquetas a las propuestas
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
ms.openlocfilehash: 8e80990a1a533ed303f47cbad8dafb95c890893d
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884313'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

En este tutorial se muestra cómo usar la [acción `andymckay/labeler`](https://github.com/marketplace/actions/simple-issue-labeler) en un flujo de trabajo para etiquetar los problemas recientemente abiertos o vueltos a abrir. Por ejemplo, puede agregar la etiqueta `triage` cada vez que se abre o se vuelve a abrir un problema. Después, puede ver todas los problemas que necesitan clasificarse filtrando los problemas con la etiqueta `triage`.

En el tutorial, primero creará un archivo de flujo de trabajo en el que se usa la [acción `andymckay/labeler`](https://github.com/marketplace/actions/simple-issue-labeler). Después, personalizarás el flujo de trabajo de acuerdo con tus necesidades.

## Crear un flujo de trabajo

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. Copia el siguiente contenido de YAML en tu archivo de flujo de trabajo.

    ```yaml{:copy}
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}

{% indented_data_reference reusables.actions.actions-use-sha-pinning-comment spaces=4 %}

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
          - name: Label issues
            uses: andymckay/labeler@e6c4322d0397f3240f0e7e30a33b5c5df2d39e90
            with:
              add-labels: "triage"
              repo-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
    ```

4. Personaliza los parámetros en tu archivo de flujo de trabajo:
   - Cambie el valor de `add-labels` a la lista de etiquetas que quiera agregar al problema. Separa las etiquetas con comas. Por ejemplo, `"help wanted, good first issue"`. Para obtener más información sobre las etiquetas, vea "[Administrar etiquetas](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)".
5. {% data reusables.actions.commit-workflow %}

## Prueba el flujo de trabajo

Cada que se abre o re-abre una propuesta en tu repositorio, este flujo de trabajo agregará a la propuesta las etiquetas que especificaste.

Prueba tu flujo de trabajo creando una propuesta en tu repositorio.

1. Crea una propuesta en tu repositorio. Para más información, vea "[Creación de una incidencia](/github/managing-your-work-on-github/creating-an-issue)".
2. Para ver la ejecución de flujo de trabajo que se activó al crear la propuesta, ve el historial de tus ejecuciones de flujo de trabajo. Para más información, vea "[Visualización del historial de ejecución de flujos de trabajo](/actions/managing-workflow-runs/viewing-workflow-run-history)".
3. Cuando se complete el flujo de trabajo, la propuesta que creaste deberá tener agregadas las etiquetas que especificaste.

## Pasos siguientes

- Para obtener más información acerca de otras tareas que puede realizar con la acción `andymckay/labeler`, como eliminar etiquetas u omitir esta acción si se asigna al problema una etiqueta específica, o la tiene, vea la [documentación de la acción `andymckay/labeler`](https://github.com/marketplace/actions/simple-issue-labeler).
- Para obtener más información acerca de los distintos eventos que pueden desencadenar el flujo de trabajo, vea "[Eventos que desencadenan flujos de trabajo](/actions/reference/events-that-trigger-workflows#issues)". La acción `andymckay/labeler` solo funciona en eventos `issues`, `pull_request` o `project_card`.
- [Busque en GitHub](https://github.com/search?q=%22uses:+andymckay/labeler%22&type=code) ejemplos de flujos de trabajo mediante esta acción.
