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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

Este tutorial ilustra cómo utilizar la [acción `imjohnbo/issue-bot`](https://github.com/marketplace/actions/issue-bot-action) para crear una propuesta con frecuencia. Por ejemplo, puedes crear una propuesta semanalmente o utilizarla como el itinerario de una junta de equipo.

En el tutorial, primero crearás un archivo de flujo de trabajo que utilice la [acción `imjohnbo/issue-bot`](https://github.com/marketplace/actions/issue-bot-action). Después, personalizarás el flujo de trabajo de acuerdo con tus necesidades.

## Crear un flujo de trabajo

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. Copia el siguiente contenido de YAML en tu archivo de flujo de trabajo.

    ```yaml{:copy}
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}

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
   - Cambia el valor de `on.schedule` para que dicte cuándo quieres que se ejecute este flujo de trabajo. En el ejemplo anterior, el flujo de trabajo se ejecutará cada lunes a las 7:20 UTC. Para obtener más información sobre los flujos de trabajo que has programado, consulta la sección "[Ejemplos programados](/actions/reference/events-that-trigger-workflows#scheduled-events)".
   - Cambia el valor de `assignees` a la lista de nombres de usuarios de {% data variables.product.prodname_dotcom %} que quieras asignar a la propuesta.
   - Cambia el valor de `labels` a la lista de etiquetas que quieras aplicar a la propuesta.
   - Cambia el valor de `title` al título que quieres que tenga la propuesta.
   - Cambia el valor de `body` al texto que quieras en el cuerpo de la propuesta. El caracter `|` te permite utilizar un valor de línea múltiple para este parámetro.
   - Si quieres fijar esta propuesta en tu repositorio, configura `pinned` en `true`. Para obtener más información acerca de las propuestas fijas, consulta "[Fijar una propuesta a tu repositorio](/articles/pinning-an-issue-to-your-repository)".
   - Si quieres cerrar la propuesta previa que generó este flujo de trabajo cada vez que se crea una propuesta nueva, configura `close-previous` en `true`. El flujo de trabajo cerrará la propuesta más reciente que tenga las etiquetas que se definen en el campo `labels`. Para evitar que se cierre la propuesta equivocada, utiliza una etiqueta única o una combinación de etiquetas.
5. {% data reusables.actions.commit-workflow %}

## Resultados esperados

Con base en el parámetro `schedule` (por ejemplo, cada lunes a las 7:20 UTC), tu flujo de trabajo creará una propuesta con los asignados, etiquetas, título y cuerpo que especifiques. Si configuras `pinned` como `true`, el flujo de trabajo fijará la propuesta a tu repositorio. Si configuras `close-previous` como "true", el flujo de trabajo cerrará la propuesta más reciente con las etiquetas coincidentes.

{% data reusables.actions.schedule-delay %}

Puedes ver el historial de tus ejecuciones de flujo de trabajo para ver que este flujo de trabajo se ejecute regularmente. Para obtener más información, consulta la sección "[Visualizar el historial de ejecuciones de un flujo de trabajo](/actions/managing-workflow-runs/viewing-workflow-run-history)".

## Pasos siguientes

- Para aprender más sobre las cosas adicionales que puedes hacer con la acción `imjohnbo/issue-bot`, como rotar asignados o utilizar una plantilla de propuesta, consulta la [documentación de la acción `imjohnbo/issue-bot`](https://github.com/marketplace/actions/issue-bot-action).
- [Busca en GitHub](https://github.com/search?q=%22uses%3A+imjohnbo%2Fissue-bot%22&type=code) los ejemplos de los flujos de trabajo que utilizan esta acción.
