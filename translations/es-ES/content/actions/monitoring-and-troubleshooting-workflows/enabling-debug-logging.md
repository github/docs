---
title: Habilitar registro de depuración
intro: 'Si los registros de flujo de trabajo no proporcionan suficiente detalle para diagnosticar por qué un flujo de trabajo o paso no funciona como se espera, puedes habilitar más registros de depuración.'
redirect_from:
  - /actions/managing-workflow-runs/enabling-debug-logging
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

Estas bitácoras extra se habilitan configurando los secretos en el repositorio que contiene el flujo de trabajo, así que aplicarán los mismos requisitos de los permisos:

- {% data reusables.actions.permissions-statement-secrets-repository %}
- {% data reusables.actions.permissions-statement-secrets-environment %}
- {% data reusables.actions.permissions-statement-secrets-organization %}
- {% data reusables.actions.permissions-statement-secrets-api %}

Para obtener más información sobre cómo establecer secretos, consulta la sección "[Crear y usar secretos cifrados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)."

{% ifversion debug-reruns %}

Adicionalmente, cualquiera que tenga acceso para ejecutar un flujo de trabajo puede habilitar el registro de diagnóstico de ejecutor y registro de depuración de pasos para una re-ejecución de flujo de trabajo. Para obtener más información, consulta la sección "[Re-ejecución de flujos de trabajo y jobs](/actions/managing-workflow-runs/re-running-workflows-and-jobs)".

 {% endif %}

## Habilitar el registro de diagnóstico del ejecutor

El registro de diagnóstico en bitácoras para los ejecutores proporciona archivos de bitácora adicionales que contienen información acerca de como se ejecutan los jobs en estos. Los archivos de registro adicionales se agregan al archivo de registro:

* El registro del proceso del ejecutor, que incluye información acerca de la coordinación y la configuración de los ejecutores para ejecutar tareas.
* El registro del proceso del trabajador, que registra la ejecución de una tarea.

1. Para habilitar el registro de diagnóstico del ejecutor, establece el siguiente secreto en el repositorio que contiene el flujo de trabajo: `ACTIONS_RUNNER_DEBUG` en `true`.

1. Para descargar los registros de diagnóstico del ejecutor, descarga el archivo de registro del flujo de trabajo. Los registros de diagnóstico del ejecutor se encuentran en la carpeta `correner-diagnostic-logs`. Para obtener más información sobre cómo descargar bitácoras, consulta la sección "[Descargar bitácoras](/actions/managing-workflow-runs/using-workflow-run-logs/#downloading-logs)".

## Habilitar el registro de depuración del paso

El registro de depuración del paso aumenta el nivel de detalle de los registros de una tarea durante y después de la ejecución de una tarea.

1. Para habilitar el registro de depuración del paso, debes establecer el siguiente secreto en el repositorio que contiene el flujo de trabajo: `ACTIONS_RUNNER_DEBUG` en `true`.

1. Después de establecer el secreto, se muestran más eventos de depuración en los registros del paso. Para obtener más información, consulta ["Ver registros para diagnosticar fallas"](/actions/managing-workflow-runs/using-workflow-run-logs/#viewing-logs-to-diagnose-failures).
