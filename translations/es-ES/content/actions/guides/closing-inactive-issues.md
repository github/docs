---
title: Cerrar las propuestas inactivas
intro: 'Puedes utilizar las {% data variables.product.prodname_actions %} para comentar o cerrar las propuestas que han estado inactivas por algún tiempo.'
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

Este tutorial ilustra cómo utilizar la [acción `actions/stale`](https://github.com/marketplace/actions/close-stale-issues) para comentar y cerrar las propuestas que han estado inactivas por algún tiempo. Por ejemplo, puedes comentar si una propúesta ha estado inactiva durante 30 días para pedir a los participantes que tomen alguna acción. Posteriormente, si no hay ningún tipo de actividad en los siguientes 14 días, puedes cerrar la propuesta.

En el tutorial, prmero crearás un archivo de flujo de trabajo que utilice la [acción `actions/stale`](https://github.com/marketplace/actions/close-stale-issues). Después, personalizarás el flujo de trabajo de acuerdo con tus necesidades.

### Crear un flujo de trabajo

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. Copia el siguiente contenido de YAML en tu archivo de flujo de trabajo.

    {% raw %}
    ```yaml{:copy}
    name: Close inactive issues
    on:
      schedule:
        - cron: "30 1 * * *"

    jobs:
      close-issues:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/stale@v3
            with:
              days-before-issue-stale: 30
              days-before-issue-close: 14
              stale-issue-label: "stale"
              stale-issue-message: "This issue is stale because it has been open for 30 days with no activity."
              close-issue-message: "This issue was closed because it has been inactive for 14 days since being marked as stale."
              days-before-pr-stale: -1
              days-before-pr-close: -1
              repo-token: ${{ secrets.GITHUB_TOKEN }}
    ```
    {% endraw %}
4. Personaliza los parámetros en tu flujo de trabajo:
   - Cambia el valor de `on.schedule` para que dicte cuándo quieres que se ejecute este flujo de trabajo. En el ejemplo anterior, el flujo de trabajo se ejecutará diario a la 1:30 UTC. Para obtener más información sobre los flujos de trabajo que has programado, consulta la sección "[Ejemplos programados](/actions/reference/events-that-trigger-workflows#scheduled-events)".
   - Cambia el valor de `days-before-issue-stale` a la cantidad de días de inactividad para esperar antes de que la acción `actions/stale` etiquete una propuesta. Si quieres que esta acción jamás etiquete las propuestas, configura el valor en `-1`.
   - Cambia el valor de `days-before-issue-close` a la cantidad de días sin actividad a esperar antes de que la acción `actions/stale` cierre una propuesta. Si quieres que esta acción jamás cierre las propuestas, configura el valor en `-1`.
   - Cambia el valor de `stale-issue-label` a la etiqueta que quieras aplicar a las propuestas que hayan estado inactivas por la cantidad de tiempo que especificaste en `days-before-issue-stale`.
   - Cambia el valor de `stale-issue-message` al comentario que quieres agregar a las propuestas que etiqueta la acción `actions/stale`.
   - Cambia el valor de `close-issue-message` al comentario que quieres agregar a las propuestas que cerró la acción `actions/stale`.
5. {% data reusables.actions.commit-workflow %}

### Resultados esperados

Con base en el parámetro `schedule` (por ejemplo, todos los días a la 1:39 UTC), tu flujo de trabajo encontrará propuestas que hayan estado inactivas por el periodo de tiempo que especificaste y agregará el comentario y etiqueta que especificaste. Adicionalmente, tu flujo de trabajo cerrará cualquier propuesta que se haya etiquetado previamente si no ha habido ningún tipo de actividad adicional en el periodo de tiempo que especificaste.

{% data reusables.actions.schedule-delay %}

Puedes ver el historial de tus ejecuciones de flujo de trabajo para ver que este flujo de trabajo se ejecute regularmente. Para obtener más información, consulta la sección "[Visualizar el historial de ejecuciones de un flujo de trabajo](/actions/managing-workflow-runs/viewing-workflow-run-history)".

Este flujo de trabajo solo etiquetará o cerrará 30 propuestas a la vez para evitar caer en un abuso de límite de tasa. Puedes configurar esto con el ajuste de `operations-per-run`. Para obtener más información, consulta la [documentación de la acción `actions/stale`](https://github.com/marketplace/actions/close-stale-issues).

### Pasos siguientes

- Para aprender más sobre las cosas adicionales que puedes hacer con la acción `actions/stale`, como cerrar las solicitudes de cambios inactivas, ignorar las propuestas que tengan ciertas etiquetas o hitos, o verificar solo las propuestas que tengan ciertas etiquetas, consulta la [documentación de la acción `actions/stale`](https://github.com/marketplace/actions/close-stale-issues).
- [Busca en GitHub](https://github.com/search?q=%22uses%3A+actions%2Fstale%22&type=code) los ejemplos de los flujos de trabajo utilizando esta acción.
