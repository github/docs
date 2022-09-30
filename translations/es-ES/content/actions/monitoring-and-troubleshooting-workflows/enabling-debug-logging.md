---
title: Habilitación del registro de depuración
intro: 'Si los registros de flujo de trabajo no proporcionan suficiente detalle para diagnosticar por qué un flujo de trabajo o paso no funciona como se espera, puedes habilitar más registros de depuración.'
redirect_from:
  - /actions/managing-workflow-runs/enabling-debug-logging
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: a2a7f6ff009782c636fd7b9e453bba869d6c799d
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/12/2022
ms.locfileid: '146179387'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

Estas bitácoras extra se habilitan configurando los secretos en el repositorio que contiene el flujo de trabajo, así que aplicarán los mismos requisitos de los permisos:

- {% data reusables.actions.permissions-statement-secrets-repository %}
- {% data reusables.actions.permissions-statement-secrets-environment %}
- {% data reusables.actions.permissions-statement-secrets-organization %}
- {% data reusables.actions.permissions-statement-secrets-api %}

Para obtener más información sobre cómo establecer secretos, consulte "[Creación y uso de secretos cifrados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

{% ifversion debug-reruns %}

Además, cualquier persona que tenga acceso para ejecutar un flujo de trabajo puede habilitar el registro de diagnóstico del ejecutor y el registro de depuración de pasos para volver a ejecutar un flujo de trabajo. Para más información, consulta "[Volver a ejecutar flujos de trabajo y trabajos](/actions/managing-workflow-runs/re-running-workflows-and-jobs)".

 {% endif %}

## Habilitar el registro de diagnóstico del ejecutor

Las bitácoras de diagnóstico del ejecutor proporcionan archivos de bitácora adicionales que contienen información acerca de cómo éstos ejecutan un job. Dos archivos de registro adicionales se agregan al archivo de registro:

* El registro del proceso del ejecutor, que incluye información acerca de la coordinación y la configuración de los ejecutores para ejecutar tareas.
* El registro del proceso del trabajador, que registra la ejecución de una tarea.

1. Para habilitar el registro de diagnóstico del ejecutor, establezca el secreto `ACTIONS_RUNNER_DEBUG` en `true` en el repositorio que contiene el flujo de trabajo.

1. Para descargar los registros de diagnóstico del ejecutor, descarga el archivo de registro del flujo de trabajo. Los registros de diagnóstico del ejecutor se encuentran en la carpeta `runner-diagnostic-logs`. Para obtener más información sobre cómo descargar los registros, consulte "[Descarga de registros](/actions/managing-workflow-runs/using-workflow-run-logs/#downloading-logs)".

## Habilitar el registro de depuración del paso

El registro de depuración del paso aumenta el nivel de detalle de los registros de un trabajo durante y después de la ejecución de una tarea.

1. Para habilitar el registro de depuración de pasos, establezca el secreto `ACTIONS_STEP_DEBUG` en `true` en el repositorio que contiene el flujo de trabajo.

1. Después de establecer el secreto, se muestran más eventos de depuración en los registros del paso. Para obtener más información, consulte "[Visualización de registros para diagnosticar errores](/actions/managing-workflow-runs/using-workflow-run-logs/#viewing-logs-to-diagnose-failures)".
