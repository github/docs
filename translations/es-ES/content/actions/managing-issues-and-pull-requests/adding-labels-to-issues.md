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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

Este tutorial ilustra cómo utilizar la [acción`andymckay/labeler`](https://github.com/marketplace/actions/simple-issue-labeler) en un flujo de trabajo para etiquetar las propuestas recientemente abiertas o re-abiertas. Por ejemplo, puedes agregar la etiqueta `triage` cada que se abre o re-abre una propuesta. Después, puedes ver todas las propuestas que necesitan clasificarse si filtras las propuestas con la etiqueta `triage`.

En el tutorial, primero harás un archivo de flujo de trabajo que utilice la [acción `andymckay/labeler`](https://github.com/marketplace/actions/simple-issue-labeler). Después, personalizarás el flujo de trabajo de acuerdo con tus necesidades.

## Crear un flujo de trabajo

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. Copia el siguiente contenido de YAML en tu archivo de flujo de trabajo.

    ```yaml{:copy}
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}

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
   - Cambia el valor de `add-labels` a la lista de etiquetas que quieras agregar a la propuesta. Separa las etiquetas con comas. Por ejemplo, `"help wanted, good first issue"`. Para obtener más información sobre las etiquetas, consulta la sección "[Administrar etiquetas](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)".
5. {% data reusables.actions.commit-workflow %}

## Probar el flujo de trabajo

Cada que se abre o re-abre una propuesta en tu repositorio, este flujo de trabajo agregará a la propuesta las etiquetas que especificaste.

Prueba tu flujo de trabajo creando una propuesta en tu repositorio.

1. Crea una propuesta en tu repositorio. Para obtener más información, consulta la sección "[Crear una propuesta](/github/managing-your-work-on-github/creating-an-issue)".
2. Para ver la ejecución de flujo de trabajo que se activó al crear la propuesta, ve el historial de tus ejecuciones de flujo de trabajo. Para obtener más información, consulta la sección "[Visualizar el historial de ejecuciones de un flujo de trabajo](/actions/managing-workflow-runs/viewing-workflow-run-history)".
3. Cuando se complete el flujo de trabajo, la propuesta que creaste deberá tener agregadas las etiquetas que especificaste.

## Pasos siguientes

- Para aprender más sobre las cosas adicionales que puedes hacer con la acción `andymckay/labeler`, como quitar etiquetas o saltarte esta acción si la propuesta se asigna o si tiene una etiqueta específica, consulta la [documentación de la acción `andymckay/labeler`](https://github.com/marketplace/actions/simple-issue-labeler).
- Para aprender más sobre los diversos eventos que pueden activar tu flujo de trabajo, consulta la sección "[Eventos que activan flujos de trabajo](/actions/reference/events-that-trigger-workflows#issues)". La acción `andymckay/labeler` funciona en los eventos de `issues`, `pull_request`, o `project_card`.
- [Busca en GitHub](https://github.com/search?q=%22uses:+andymckay/labeler%22&type=code) los ejemplos de los flujos de trabajo que utilizan esta acción.
