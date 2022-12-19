---
title: Eliminar una etiqueta cuando se agrega una tarjeta a una columna de un tablero de proyecto
intro: 'Puedes utilizar las {% data variables.product.prodname_actions %} para eliminar una etiqueta automáticamente cuando una incidencia o solicitud de cambios se agrega a una columna específica en un {% data variables.projects.projects_v1_board %}.'
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
ms.openlocfilehash: d86d9e5ad198c9cf8811b47f2a6c8a7114e20104
ms.sourcegitcommit: 4d6d3735d32540cb6de3b95ea9a75b8b247c580d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/30/2022
ms.locfileid: '148185633'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

En este tutorial se muestra cómo usar la [acción `actions/github-script`](https://github.com/marketplace/actions/github-script) junto con un condicional para quitar una etiqueta de incidencias y solicitudes de incorporación de cambios que se agregan a una columna específica de un {% data variables.projects.projects_v1_board %}. Por ejemplo, puede quitar la etiqueta `needs review` cuando las tarjetas de proyecto se mueven a la columna `Done`.

En el tutorial, primero creará un archivo de flujo de trabajo en el que se usa la [acción `actions/github-script`](https://github.com/marketplace/actions/github-script). Después, personalizarás el flujo de trabajo de acuerdo con tus necesidades.

## Crear un flujo de trabajo

1. {% data reusables.actions.choose-repo %}
2. Elige un {% data variables.projects.projects_v1_board %} que pertenezca al repositorio. Este flujo de trabajo no puede utilizarse con los proyectos que pertenezcan a usuarios u organizaciones. Puedes usar un {% data variables.projects.projects_v1_board %} existente o puedes crear un nuevo {% data variables.projects.projects_v1_board %}. Para obtener más información sobre cómo crear un proyecto, consulta "[Creación de un {% data variables.product.prodname_project_v1 %}](/github/managing-your-work-on-github/creating-a-project-board)."
3. {% data reusables.actions.make-workflow-file %}
4. Copia el siguiente contenido de YAML en tu archivo de flujo de trabajo.

    ```yaml{:copy}
    name: Remove a label
    on:
      project_card:
        types:
          - moved
    jobs:
      remove_label:
        if: github.event.project_card.column_id == '12345678'
        runs-on: ubuntu-latest
        permissions:
          issues: write
          pull-requests: write
        steps:
          - uses: {% data reusables.actions.action-github-script %}
            with:
              script: |
                // this gets the number at the end of the content URL, which should be the issue/PR number
                const issue_num = context.payload.project_card.content_url.split('/').pop()
                github.rest.issues.removeLabel({
                  issue_number: issue_num,
                  owner: context.repo.owner,
                  repo: context.repo.repo,
                  name: ["needs review"]
                })
    ```

5. Personaliza los parámetros en tu archivo de flujo de trabajo:
   - En `github.event.project_card.column_id == '12345678'`, reemplace `12345678` por el identificador de la columna de la que quiera quitar las etiquetas de las incidencias y solicitudes de incorporación de cambios que se han movido allí.

     Para buscar el identificador de columna, ve a tu {% data variables.projects.projects_v1_board %}. Junto al título de la columna, haga clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} y luego en **Copy column link** (Copiar vínculo de columna). La ID de columna es el número al final del enlace que copiaste. Por ejemplo, `24687531` es el identificador de columna de `https://github.com/octocat/octo-repo/projects/1#column-24687531`.

     Si quiere actuar sobre más de una columna, separe las condiciones con `||`. Por ejemplo, `if github.event.project_card.column_id == '12345678' || github.event.project_card.column_id == '87654321'` actuará cada vez que se agregue una tarjeta de proyecto a las columnas `12345678` o `87654321`. Las columnas podrían estan en tableros de proyecto diferentes.
   - Cambia el valor de `name` en la función `github.rest.issues.removeLabel()` al nombre de la etiqueta que quieras eliminar de las incidencias o solicitudes de incorporación de cambios que se han movido a las columnas especificadas. Para más información sobre las etiquetas, vea "[Administración de etiquetas](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)".
6. {% data reusables.actions.commit-workflow %}

## Prueba el flujo de trabajo

Este flujo de trabajo se ejecutará cada vez que se mueva una tarjeta de proyecto en un {% data variables.projects.projects_v1_board %} de tu repositorio. Si la tarjeta es una incidencia o una solicitud de cambios y se mueve a la columna que especificaste, entonces el flujo de trabajo eliminará las etiquetas específicas de dichas incidencias o solicitudes de incorporación de cambios. Las tarjetas que sean notas no se verán afectadas.

Prueba tu flujo de trabajo moviendo una incidencia de tu {% data variables.projects.projects_v1_board %} a la columna de destino.

1. Abre una propuesta en tu repositorio. Para más información, vea "[Creación de una incidencia](/github/managing-your-work-on-github/creating-an-issue)".
2. Etiqueta la incidencia con las etiquetas que quieres que elimine el flujo de trabajo. Para más información, vea "[Administración de etiquetas](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)".
3. Agrega la incidencia a la columna del {% data variables.projects.projects_v1_board %} que has especificado en tu flujo de trabajo. Para más información, consulta "[Adición de incidencias y solicitudes de incorporación de cambios a una instancia de {% data variables.product.prodname_project_v1 %}](/github/managing-your-work-on-github/adding-issues-and-pull-requests-to-a-project-board)".
4. Para ver la ejecución de flujo de trabajo que se activó al agregar la propuesta al proyecto, ve el historial de tus ejecuciones de flujo de trabajo. Para más información, vea "[Visualización del historial de ejecución de flujo de trabajo](/actions/managing-workflow-runs/viewing-workflow-run-history)".
5. Cuando se complete el flujo de trabajo, se deberá haber eliminado la etiqueta especificada en la incidencia que agregaste a la columna del proyecto.

## Pasos siguientes

- Para más información sobre las tareas adicionales que puede realizar con la acción `actions/github-script`, como agregar reacciones, visita la [documentación de la acción `actions/github-script`](https://github.com/marketplace/actions/github-script).
- [Busque en GitHub](https://github.com/search?q=%22uses:+actions/github-script%22&type=code) ejemplos de flujos de trabajo mediante esta acción.
