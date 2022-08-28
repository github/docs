---
title: Saltarse las ejecuciones de código
intro: You can skip workflow runs triggered by the `push` and `pull_request` events by including a command in your commit message.
product: '{% data reusables.gated-features.actions %}'
versions:
  fpt: '*'
  ghes: '>=3.0'
  ghae: ghae-next
shortTitle: Skip workflow runs
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

Workflows that would otherwise be triggered using `on: push` or `on: pull_request` won't be triggered if you add any of the following strings to the commit message in a push, or the HEAD commit of a pull request:

* `[skip ci]`
* `[ci skip]`
* `[no ci]`
* `[skip actions]`
* `[actions skip]`

Como alternativa, puedes finalizar el mensaje de confirmación con dos líneas vacías seguidas de ya sea `skip-checks: true` o `skip-checks:true`.

No podrás fusionar la solicitud de cambios si tu repositorio se cofiguró para requerir que las verificaciones específicas pasen primero. Para permitir que la solicitud de cambios se fusione, puedes subir una confirmación nueva a la solicitud de cambios sin la instrucción de salto en el mensaje de confirmación.

{% note %}

**Nota:** Las instrucciones de salto solo aplican para los eventos de `push` y `pull_request`. Por ejemplo, el agregar `[skip ci]` a un mensaje de confirmación no impedirá que se ejecute un flujo de trabajo que se activa con `on: pull_request_target`.

{% endnote %}

Skip instructions only apply to the workflow run(s) that would be triggered by the commit that contains the skip instructions. You can also disable a workflow from running. Para obtener más información, consulta la sección "[Inhabilitar y habilitar un flujo de trabajo](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow)".
