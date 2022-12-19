---
title: Programar la creación de propuestas
intro: 'Puedes utilizar {% data variables.product.prodname_actions %} para crear una propuesta frecuentemente para asuntos como juntas diarias o revisiones trimestrales.'
redirect_from:
  - /actions/guides/scheduling-issue-creation
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
ms.openlocfilehash: 6a68e7cab1c20a7f89bdef438d299c5bda32315c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410070'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

En este tutorial se muestra cómo usar la [acción `imjohnbo/issue-bot`](https://github.com/marketplace/actions/issue-bot-action) para crear una incidencia de forma periódica. Por ejemplo, puedes crear una propuesta semanalmente o utilizarla como el itinerario de una junta de equipo.

En el tutorial, primero creará un archivo de flujo de trabajo en el que se usa la [acción `imjohnbo/issue-bot`](https://github.com/marketplace/actions/issue-bot-action). Después, personalizarás el flujo de trabajo de acuerdo con tus necesidades.

## Crear un flujo de trabajo

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. Copia el siguiente contenido de YAML en tu archivo de flujo de trabajo.

    ```yaml{:copy}
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}

{% indented_data_reference reusables.actions.actions-use-sha-pinning-comment spaces=4 %}
    
    name: Weekly Team Sync
    on:
      schedule:
        - cron: 20 07 * * 1

    jobs:
      create_issue:
        name: Create team sync issue
        runs-on: ubuntu-latest
        permissions:
          issues: write
        steps:
          - name: Create team sync issue
            uses: imjohnbo/issue-bot@3daae12aa54d38685d7ff8459fc8a2aee8cea98b
            with:
              assignees: "monalisa, doctocat, hubot"
              labels: "weekly sync, docs-team"
              title: "Team sync"
              body: |
                ### Agenda

                - [ ] Start the recording
                - [ ] Check-ins
                - [ ] Discussion points
                - [ ] Post the recording
                        
                ### Discussion Points
                Add things to discuss below

                - [Work this week](https://github.com/orgs/github/projects/3)
              pinned: false
              close-previous: false
            env:
              GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
    ```

4. Personaliza los parámetros en tu archivo de flujo de trabajo:
   - Cambie el valor de `on.schedule` para determinar cuándo quiere que se ejecute este flujo de trabajo. En el ejemplo anterior, el flujo de trabajo se ejecutará cada lunes a las 7:20 UTC. Para obtener más información sobre los flujos de trabajo programados, consulte "[Eventos programados](/actions/reference/events-that-trigger-workflows#scheduled-events)".
   - Cambie el valor de `assignees` a la lista de nombres de usuario de {% data variables.product.prodname_dotcom %} que quiera asignar a la incidencia.
   - Cambie el valor de `labels` a la lista de etiquetas que quiera aplicar a la incidencia.
   - Cambie el valor de `title` por el título que quiera que tenga la incidencia.
   - Cambie el valor de `body` por el texto que quiera que aparezca en el cuerpo de la incidencia. El carácter `|` permite usar un valor de varias líneas para este parámetro.
   - Si quiere anclar esta incidencia en el repositorio, establezca `pinned` en `true`. Para obtener más información sobre las incidencias ancladas, consulte "[Anclaje de una incidencia al repositorio](/articles/pinning-an-issue-to-your-repository)".
   - Si quiere cerrar la incidencia anterior generada por este flujo de trabajo cada vez que se crea una nueva incidencia, establezca `close-previous` en `true`. El flujo de trabajo cerrará la incidencia más reciente que tenga las etiquetas definidas en el campo `labels`. Para evitar que se cierre la propuesta equivocada, utiliza una etiqueta única o una combinación de etiquetas.
5. {% data reusables.actions.commit-workflow %}

## Resultados esperados

En función del parámetro `schedule` (por ejemplo, cada lunes a las 7:20 UTC), el flujo de trabajo creará una nueva incidencia con los usuarios asignados, las etiquetas, el título y el cuerpo que especificó. Si establece `pinned` en `true`, el flujo de trabajo anclará la incidencia en el repositorio. Si establece `close-previous` en true, el flujo de trabajo cerrará la incidencia más reciente con las etiquetas coincidentes.

{% data reusables.actions.schedule-delay %}

Puedes ver el historial de tus ejecuciones de flujo de trabajo para ver que este flujo de trabajo se ejecute regularmente. Para más información, vea "[Visualización del historial de ejecución de flujos de trabajo](/actions/managing-workflow-runs/viewing-workflow-run-history)".

## Pasos siguientes

- Para obtener más información sobre otras cosas que puede hacer con la acción `imjohnbo/issue-bot`, como rotar los usuarios asignados o usar una plantilla de incidencia, consulte la [documentación de la acción `imjohnbo/issue-bot`](https://github.com/marketplace/actions/issue-bot-action).
- [Busque en GitHub](https://github.com/search?q=%22uses%3A+imjohnbo%2Fissue-bot%22&type=code) ejemplos de flujos de trabajo mediante esta acción.
