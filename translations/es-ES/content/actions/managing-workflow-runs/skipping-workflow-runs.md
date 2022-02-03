---
title: Saltarse las ejecuciones de código
intro: Puedes omitir las ejecuciones de flujo de trabajo que se activen con los eventos de `push` y `pull_request` si incluyes un comando en tu mensaje de confirmación.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Omitir ejecuciones de flujo de trabajo
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

Los flujos de trabajo que comúnmente se activarían utilizando `on: push` o `on: pull_request`, no se activarán si agregas cualquiera de las siguientes secuencias al mensaje de confirmación en una subida o a la confirmación PRINCIPAL (HEAD) de una solicitud de cambios:

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

Las instrucciones de omisión solo aplican a las ejecuciones de flujo de trabajo que pudieran activarse mediante la confirmación que contiene dichas instrucciones. También puedes inhabilitar un flujo de trabajo para que no se ejecute. Para obtener más información, consulta la sección "[Inhabilitar y habilitar un flujo de trabajo](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow)".
