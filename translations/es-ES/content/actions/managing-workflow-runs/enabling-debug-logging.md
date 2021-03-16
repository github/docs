---
title: Habilitar registro de depuración
intro: 'Si los registros de flujo de trabajo no proporcionan suficiente detalle para diagnosticar por qué un flujo de trabajo o paso no funciona como se espera, puedes habilitar más registros de depuración.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

Estas bitácoras extra se habilitan configurando los secretos en el repositorio que contiene el flujo de trabajo, así que aplicarán los mismos requisitos de los permisos:

- {% data reusables.github-actions.permissions-statement-secrets-repository %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
- {% data reusables.github-actions.permissions-statement-secrets-environment %}
{% endif %}
- {% data reusables.github-actions.permissions-statement-secrets-organization %}
- {% data reusables.github-actions.permissions-statement-secrets-api %}

Para obtener más información sobre cómo establecer secretos, consulta la sección "[Crear y usar secretos cifrados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)."

### Habilitar el registro de diagnóstico del ejecutor

El registro de diagnósticos de ejecución proprociona archivos de bitácora adicionales que contienen información acera de cómo un ejecutor está ejecutando un job. Dos archivos de registro adicionales se agregan al archivo de registro:

* El registro del proceso del ejecutor, que incluye información acerca de la coordinación y la configuración de los ejecutores para ejecutar tareas.
* El registro del proceso del trabajador, que registra la ejecución de una tarea.

1. Para habilitar el registro de diagnóstico del ejecutor, establece el siguiente secreto en el repositorio que contiene el flujo de trabajo: `ACTIONS_RUNNER_DEBUG` en `true`.

1. Para descargar los registros de diagnóstico del ejecutor, descarga el archivo de registro del flujo de trabajo. Los registros de diagnóstico del ejecutor se encuentran en la carpeta `correner-diagnostic-logs`. Para obtener más información sobre cómo descargar bitácoras, consulta la sección "[Descargar bitácoras](/actions/managing-workflow-runs/using-workflow-run-logs/#downloading-logs)".

### Habilitar el registro de depuración del paso

El registro de depuración del paso aumenta el nivel de detalle de los registros de un trabajo durante y después de la ejecución de una tarea.

1. Para habilitar el registro de depuración del paso, debes establecer el siguiente secreto en el repositorio que contiene el flujo de trabajo: `ACTIONS_RUNNER_DEBUG` en `true`.

1. Después de establecer el secreto, se muestran más eventos de depuración en los registros del paso. Para obtener más información, consulta ["Ver registros para diagnosticar fallas"](/actions/managing-workflow-runs/using-workflow-run-logs/#viewing-logs-to-diagnose-failures).
