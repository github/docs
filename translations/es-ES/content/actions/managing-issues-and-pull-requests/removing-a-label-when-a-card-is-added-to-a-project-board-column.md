---
title: Eliminar una etiqueta cuando se agrega una tarjeta a una columna de un tablero de proyecto
intro: 'Puedes utilizar las {% data variables.product.prodname_actions %} para eliminar una etiqueta automáticamente cuando una propuesta o solicitud de cambios se agrega a una columna específica en un tablero de proyecto.'
redirect_from:
  - /actions/guides/removing-a-label-when-a-card-is-added-to-a-project-board-column
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
shortTitle: Remove label when adding card
ms.openlocfilehash: c23edb495719c7059c9c5d8dab1c29acb0e78cb6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410111'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

En este tutorial se muestra cómo usar la [acción `andymckay/labeler`](https://github.com/marketplace/actions/simple-issue-labeler) junto con un condicional para quitar una etiqueta de incidencias y solicitudes de incorporación de cambios que se agregan a una columna específica de un panel de proyecto. Por ejemplo, puede quitar la etiqueta `needs review` cuando las tarjetas de proyecto se mueven a la columna `Done`.

En el tutorial, primero creará un archivo de flujo de trabajo en el que se usa la [acción `andymckay/labeler`](https://github.com/marketplace/actions/simple-issue-labeler). Después, personalizarás el flujo de trabajo de acuerdo con tus necesidades.

## Crear un flujo de trabajo

1. {% data reusables.actions.choose-repo %}
2. Elige un proyecto que le pertenezca al repositorio. Este flujo de trabajo no puede utilizarse con los proyectos que pertenezcan a usuarios u organizaciones. Puedes utilizar un proyecto existente o crear uno nuevo. Para más información sobre cómo crear un proyecto, vea "[Creación de un panel de proyecto](/github/managing-your-work-on-github/creating-a-project-board)".
3. {% data reusables.actions.make-workflow-file %}
4. Copia el siguiente contenido de YAML en tu archivo de flujo de trabajo.
    ```yaml{:copy}
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}

{% indented_data_reference reusables.actions.actions-use-sha-pinning-comment spaces=4 %}

    name: Remove labels
    on:
      project_card:
        types:
          - moved
    jobs:
      remove_labels:
        if: github.event.project_card.column_id == '12345678'
        runs-on: ubuntu-latest
        permissions:
          issues: write
          pull-requests: write
        steps:
          - name: remove labels
            uses: andymckay/labeler@5c59dabdfd4dd5bd9c6e6d255b01b9d764af4414
            with:
              remove-labels: "needs review"
              repo-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
    ```

5. Personaliza los parámetros en tu archivo de flujo de trabajo:
   - En `github.event.project_card.column_id == '12345678'`, reemplace `12345678` por el identificador de la columna de la que quiera quitar las etiquetas de las incidencias y solicitudes de incorporación de cambios que se han movido allí.

    Para encontrar la ID de columna, navega a tu tablero de proyecto. Junto al título de la columna, haga clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} y luego en **Copy column link** (Copiar vínculo de columna). La ID de columna es el número al final del enlace que copiaste. Por ejemplo, `24687531` es el identificador de columna de `https://github.com/octocat/octo-repo/projects/1#column-24687531`.

     Si quiere actuar sobre más de una columna, separe las condiciones con `||`. Por ejemplo, `if github.event.project_card.column_id == '12345678' || github.event.project_card.column_id == '87654321'` actuará cada vez que se agregue una tarjeta de proyecto a las columnas `12345678` o `87654321`. Las columnas podrían estan en tableros de proyecto diferentes.
   - Cambie el valor de `remove-labels` por la lista de etiquetas que quiera eliminar de las incidencias o solicitudes de incorporación de cambios que se han movido a la columna especificada. Separa las etiquetas con comas. Por ejemplo, `"help wanted, good first issue"`. Para más información sobre las etiquetas, vea "[Administración de etiquetas](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)".
6. {% data reusables.actions.commit-workflow %}

## Prueba el flujo de trabajo

Este flujo de trabajo se ejecutará cada que se mueve una tarjeta de proyecto en un proyecto de tu repositorio. Si la tarjeta es una propuesta o una solicitud de cambios y se mueve a la columna que especificaste, entonces el flujo de trabajo eliminará las etiquetas específicas de dichas propuestas o solicitudes de cambios. Las tarjetas que sean notas no se verán afectadas.

Prueba tu flujo de trabajo moviendo una propuesta de tu proyecto a la columna destino.

1. Abre una propuesta en tu repositorio. Para más información, vea "[Creación de una incidencia](/github/managing-your-work-on-github/creating-an-issue)".
2. Etiqueta la propuesta con las etiquetas que quieres que elimine el flujo de trabajo. Para más información, vea "[Administración de etiquetas](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)".
3. Agrega la propuesta a la columna de proyecto que especificaste en tu archivo de flujo de trabajo. Para más información, vea "[Adición de incidencias y solicitudes de incorporación de cambios a un panel de proyecto](/github/managing-your-work-on-github/adding-issues-and-pull-requests-to-a-project-board)".
4. Para ver la ejecución de flujo de trabajo que se activó al agregar la propuesta al proyecto, ve el historial de tus ejecuciones de flujo de trabajo. Para más información, vea "[Visualización del historial de ejecución de flujo de trabajo](/actions/managing-workflow-runs/viewing-workflow-run-history)".
5. Cuando se complete el flujo de trabajo, se deberán haber eliminado las etiquetas especificadas en la propuesta que agregaste a la columna del proyecto.

## Pasos siguientes

- Para más información sobre otras tareas que puede realizar con la acción `andymckay/labeler`, como agregar etiquetas o omitir esta acción si se asigna a la incidencia una etiqueta específica (o la tiene), visite la [documentación de la acción `andymckay/labeler`](https://github.com/marketplace/actions/simple-issue-labeler).
- [Busque en GitHub](https://github.com/search?q=%22uses:+andymckay/labeler%22&type=code) ejemplos de flujos de trabajo mediante esta acción.
