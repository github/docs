---
title: Eliminar una etiqueta cuando se agrega una tarjeta a una columna de un tablero de proyecto
intro: 'Puedes utilizar las {% data variables.product.prodname_actions %} para eliminar una etiqueta automáticamente cuando una propuesta o solicitud de cambios se agrega a una columna específica en un tablero de proyecto.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
topics:
  - Workflows
  - Project management
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}
{% data reusables.actions.ae-self-hosted-runners-notice %}

### Introducción

Este tutorial ilustra cómo utilizar la [acción`andymckay/labeler`](https://github.com/marketplace/actions/simple-issue-labeler) en conjunto con un condicional para eliminar una etiqueta de las propuestas o solicitudes de cambios que se agregan a una columna específica en un tablero de proyecto. Por ejemplo, puedes eliminar la etiqueta `needs review` cuando las tarjetas de proyecto se muevan a la columna `Done`.

En el tutorial, primero harás un archivo de flujo de trabajo que utilice la [acción `andymckay/labeler`](https://github.com/marketplace/actions/simple-issue-labeler). Después, personalizarás el flujo de trabajo de acuerdo con tus necesidades.

### Crear un flujo de trabajo

1. {% data reusables.actions.choose-repo %}
2. Elige un proyecto que le pertenezca al repositorio. Este flujo de trabajo no puede utilizarse con los proyectos que pertenezcan a usuarios u organizaciones. Puedes utilizar un proyecto existente o crear uno nuevo. Para obtener más información sobre cómo crear un proyecto, consulta la sección "[Crear un tablero de proyecto](/github/managing-your-work-on-github/creating-a-project-board)".
3. {% data reusables.actions.make-workflow-file %}
4. Copia el siguiente contenido de YAML en tu archivo de flujo de trabajo.

    ```yaml{:copy}
    name: Remove labels
    on:
      project_card:
        types:
          - moved
    jobs:
      remove_labels:
        if: github.event.project_card.column_id == '12345678'
        runs-on: ubuntu-latest{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
        permissions:
          issues: write
          pull-requests: write{% endif %}
        steps:
          - name: remove labels
            uses: andymckay/labeler@master
            with:
              remove-labels: "needs review"
              repo-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
    ```

5. Personaliza los parámetros en tu archivo de flujo de trabajo:
   - En `github.event.project_card.column_id == '12345678'`, reemplaza a `12345678` con la ID de la columna en donde quieras desetiquetar las propuestas y solicitudes de cambio que se movieron a ella.

    Para encontrar la ID de columna, navega a tu tablero de proyecto. Junto al título de la columna, haz clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} y luego en **Copiar enlace de la columna**. La ID de columna es el número al final del enlace que copiaste. Por ejemplo, la ID de columna para `https://github.com/octocat/octo-repo/projects/1#column-24687531` es `24687531`.

     Si quieres actuar sobre más de una columna, separa las condiciones con `||`. Por ejemplo, `if github.event.project_card.column_id == '12345678' || github.event.project_card.column_id == '87654321'` actuará cuando una tarjeta de proyecto se agregue a la columna `12345678` o a la columna `87654321`. Las columnas podrían estan en tableros de proyecto diferentes.
   - Cambia el valor de `remove-labels` a la lista de etiquetas que quieras eliminar de las propuestas o solicitudes de cambio que se mueven a la(s) columna(s) que especificaste. Separa las etiquetas con comas. Por ejemplo, `"help wanted, good first issue"`. Para obtener más información sobre las etiquetas, consulta la sección "[Administrar etiquetas](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)".
6. {% data reusables.actions.commit-workflow %}

### Prueba el flujo de trabajo

Este flujo de trabajo se ejecutará cada que se mueve una tarjeta de proyecto en un proyecto de tu repositorio. Si la tarjeta es una propuesta o una solicitud de cambios y se mueve a la columna que especificaste, entonces el flujo de trabajo eliminará las etiquetas específicas de dichas propuestas o solicitudes de cambios. Las tarjetas que sean notas no se verán afectadas.

Prueba tu flujo de trabajo moviendo una propuesta de tu proyecto a la columna destino.

1. Abre una propuesta en tu repositorio. Para obtener más información, consulta la sección "[Crear una propuesta](/github/managing-your-work-on-github/creating-an-issue)".
2. Etiqueta la propuesta con las etiquetas que quieres que elimine el flujo de trabajo. Para obtener más información, consulta la sección "[Administrar etiquetas](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)".
3. Agrega la propuesta a la columna de proyecto que especificaste en tu archivo de flujo de trabajo. Para obtener más información, consulta "[Agregar propuestas y solicitudes de extracción a un tablero de proyecto](/github/managing-your-work-on-github/adding-issues-and-pull-requests-to-a-project-board)".
4. Para ver la ejecución de flujo de trabajo que se activó al agregar la propuesta al proyecto, ve el historial de tus ejecuciones de flujo de trabajo. Para obtener más información, consulta la sección "[Visualizar el historial de ejecuciones de un flujo de trabajo](/actions/managing-workflow-runs/viewing-workflow-run-history)".
5. Cuando se complete el flujo de trabajo, se deberán haber eliminado las etiquetas especificadas en la propuesta que agregaste a la columna del proyecto.

### Pasos siguientes

- Para aprender más sobre las cosas adicionales que puedes hacer con la acción `andymckay/labeler`, como agregar etiquetas o saltarte esta acción si la propuesta se asigna o si tiene una etiqueta específica, visita la [documentación de la acción `andymckay/labeler`](https://github.com/marketplace/actions/simple-issue-labeler).
- [Busca en GitHub](https://github.com/search?q=%22uses:+andymckay/labeler%22&type=code) los ejemplos de los flujos de trabajo que utilizan esta acción.
