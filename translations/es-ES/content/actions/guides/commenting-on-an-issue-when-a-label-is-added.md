---
title: Comentar en una propuesta cuando se le agrega una etiqueta
intro: Puedes utilizar las {% data variables.product.prodname_actions %} para comentar automáticamente en las propuestas cuando se les aplica una etiqueta específica.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: 'tutorial'
topics:
  - 'Flujos de trabajo'
  - 'Administración de proyectos'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}
{% data reusables.actions.ae-self-hosted-runners-notice %}

### Introducción

Este tutorial ilustra cómo utilizar la [acción `peter-evans/create-or-update-comment`](https://github.com/marketplace/actions/create-or-update-comment) para comentar en una propuesta cuando se le aplica una etiqueta específica. Por ejemplo, cuando se agrega la etiqueta `help-wanted` a una propuesta, puedes agregar un comentario para animar a los colaboradores a que trabajen sobre dicha propuesta.

En el tutorial, primero harás un archivo de flujo de trabajo que utilice la [acción `peter-evans/create-or-update-comment`](https://github.com/marketplace/actions/create-or-update-comment). Después, personalizarás el flujo de trabajo de acuerdo con tus necesidades.

### Crear un flujo de trabajo

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. Copia el siguiente contenido de YAML en tu archivo de flujo de trabajo.

    {% raw %}
    ```yaml{:copy}
    name: Add comment
    on:
      issues:
        types:
          - labeled
    jobs:
      add-comment:
        if: github.event.label.name == 'help-wanted'
        runs-on: ubuntu-latest
        steps:
          - name: Add comment
            uses: peter-evans/create-or-update-comment@v1
            with:
              issue-number: ${{ github.event.issue.number }}
              body: |
                This issue is available for anyone to work on. **Make sure to reference this issue in your pull request.** :sparkles: Thank you for your contribution! :sparkles:
    ```
    {% endraw %}
4. Personaliza los parámetros en tu archivo de flujo de trabajo:
   - Reemplaza a `help-wanted` en `if: github.event.label.name == 'help-wanted'` con la etiqueta sobre la cual quieres actuar. Si quieres actuar sobre más de una etiqueta, separa las condiciones con `||`. Por ejemplo, `if: github.event.label.name == 'bug' || github.event.label.name == 'fix me'` comentará cada que se agreguen las etiquetas `bug` o `fix me` a una propuesta.
   - Cambia el valor de `body` al comentario que quieras agregar. El lenguaje de marcado enriquecido de GitHub es compatible. Para obtener más información sobre el lenguaje de marcado, consulta la sección "[Sintaxis básica de escritura y formato](/github/writing-on-github/basic-writing-and-formatting-syntax)".
5. {% data reusables.actions.commit-workflow %}

### Probar el flujo de trabajo

Cada vez que se etiqueta a una propuesta de tu repositorio, se ejecutará este flujo de trabajo. Si la etiqueta que se agregó es una de las que especificaste en tu archivo de flujo de trabajo, la acción `peter-evans/create-or-update-comment` agregará el comentario que especificaste a la propuesta.

Prueba tu flujo de trabajo aplicando tu etiqueta especificada a una propuesta.

1. Abre una propuesta en tu repositorio. Para obtener más información, consulta la sección "[Crear una propuesta](/github/managing-your-work-on-github/creating-an-issue)".
2. Etiqueta la propuesta con la etiqueta que se especificó en tu flujo de trabajo. Para obtener más información, consulta la sección "[Administrar etiquetas](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)".
3. Para ver la ejecución de flujo de trabajo que se activó al etiquetar la propuesta, visualiza el historial de tus ejecuciones de flujo de trabajo. Para obtener más información, consulta la sección "[Visualizar el historial de ejecuciones de un flujo de trabajo](/actions/managing-workflow-runs/viewing-workflow-run-history)".
4. Cuando se complete el flujo de trabajo, la propuesta que etiquetaste debe tener un comentario agregado.

### Pasos siguientes

- Para aprender más sobre las cosas adicionales que puedes hacer con la acción `peter-evans/create-or-update-comment`, como agregar reacciones, visita la [documentación de la acción `peter-evans/create-or-update-comment`](https://github.com/marketplace/actions/create-or-update-comment).
