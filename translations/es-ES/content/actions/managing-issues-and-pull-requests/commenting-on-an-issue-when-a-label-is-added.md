---
title: Comentar en una propuesta cuando se le agrega una etiqueta
intro: 'Puedes utilizar las {% data variables.product.prodname_actions %} para comentar automáticamente en las propuestas cuando se les aplica una etiqueta específica.'
redirect_from:
  - /actions/guides/commenting-on-an-issue-when-a-label-is-added
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
shortTitle: Add label to comment on issue
ms.openlocfilehash: 02484ffce5af753f06ac0523ef8e6ab853f47454
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '147409047'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

En este tutorial se muestra cómo usar la [acción `peter-evans/create-or-update-comment`](https://github.com/marketplace/actions/create-or-update-comment) para comentar una incidencia cuando se aplica una etiqueta específica. Por ejemplo, cuando se agrega la etiqueta `help-wanted` a una incidencia, se puede agregar un comentario para animar a los colaboradores a que trabajen en esa incidencia.

En el tutorial, primero creará un archivo de flujo de trabajo en el que se usa la [acción `peter-evans/create-or-update-comment`](https://github.com/marketplace/actions/create-or-update-comment). Después, personalizarás el flujo de trabajo de acuerdo con tus necesidades.

## Crear un flujo de trabajo

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. Copia el siguiente contenido de YAML en tu archivo de flujo de trabajo.

    ```yaml{:copy}
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}

{% indented_data_reference reusables.actions.actions-use-sha-pinning-comment spaces=4 %}

    name: Add comment
    on:
      issues:
        types:
          - labeled
    jobs:
      add-comment:
        if: github.event.label.name == 'help-wanted'
        runs-on: ubuntu-latest
        permissions:
          issues: write
        steps:
          - name: Add comment
            uses: peter-evans/create-or-update-comment@a35cf36e5301d70b76f316e867e7788a55a31dae
            with:
              issue-number: {% raw %}${{ github.event.issue.number }}{% endraw %}
              body: |
                This issue is available for anyone to work on. **Make sure to reference this issue in your pull request.** :sparkles: Thank you for your contribution! :sparkles:
    ```

4. Personaliza los parámetros en tu archivo de flujo de trabajo:
   - Reemplace `help-wanted` en `if: github.event.label.name == 'help-wanted'` por la etiqueta sobre la que quiera actuar. Si quiere actuar sobre más de una etiqueta, separe las condiciones con `||`. Por ejemplo, `if: github.event.label.name == 'bug' || github.event.label.name == 'fix me'` comentará cada vez que se agreguen las etiquetas `bug` o `fix me` a una incidencia.
   - Cambie el valor de `body` por el comentario que quiera agregar. El lenguaje de marcado enriquecido de GitHub es compatible. Para más información sobre el Markdown, vea "[Sintaxis básica de escritura y formato](/github/writing-on-github/basic-writing-and-formatting-syntax)".
5. {% data reusables.actions.commit-workflow %}

## Prueba el flujo de trabajo

Cada vez que se etiqueta a una propuesta de tu repositorio, se ejecutará este flujo de trabajo. Si la etiqueta que se ha agregado es una de las especificadas en el archivo de flujo de trabajo, la acción `peter-evans/create-or-update-comment` agregará a la incidencia el comentario que haya especificado.

Prueba tu flujo de trabajo aplicando tu etiqueta especificada a una propuesta.

1. Abre una propuesta en tu repositorio. Para más información, vea "[Creación de una incidencia](/github/managing-your-work-on-github/creating-an-issue)".
2. Etiqueta la propuesta con la etiqueta que se especificó en tu flujo de trabajo. Para más información, vea "[Administración de etiquetas](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)".
3. Para ver la ejecución de flujo de trabajo que se activó al etiquetar la propuesta, visualiza el historial de tus ejecuciones de flujo de trabajo. Para más información, vea "[Visualización del historial de ejecución de flujo de trabajo](/actions/managing-workflow-runs/viewing-workflow-run-history)".
4. Cuando se complete el flujo de trabajo, la propuesta que etiquetaste debe tener un comentario agregado.

## Pasos siguientes

- Para más información sobre las tareas adicionales que puede realizar con la acción `peter-evans/create-or-update-comment`, como agregar reacciones, visite la [documentación de la acción `peter-evans/create-or-update-comment`](https://github.com/marketplace/actions/create-or-update-comment).
