---
title: Ejecución de scripts antes o después de un trabajo
intro: 'Los scripts se pueden ejecutar automáticamente en un ejecutor autohospedado, directamente antes o después de un trabajo.'
versions:
  feature: job-hooks-for-runners
type: tutorial
miniTocMaxHeadingLevel: 3
shortTitle: Run a script before or after a job
ms.openlocfilehash: 11b2f63cd70c5276f0626a6016593553d1bedd0c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147067654'
---
{% note %}

**Nota:** Esta característica se encuentra en versión beta y está sujeta a cambios.

{% endnote %}

## Acerca de los scripts previos y posteriores al trabajo

Puede ejecutar scripts de forma automática en un ejecutor autohospedado, ya sea antes de que se ejecute un trabajo o después de que un trabajo termine de ejecutarse. Puede usar estos scripts para admitir los requisitos del trabajo, como compilar o anular un entorno de ejecutor, o limpiar directorios. También puede usar estos scripts para realizar el seguimiento de la telemetría de uso de los ejecutores.

Los scripts personalizados se desencadenan automáticamente cuando se establece una variable de entorno específica en el ejecutor; la variable de entorno debe contener la ruta de acceso absoluta al script. Para más información, vea "[Desencadenamiento de los scripts](#triggering-the-scripts)" a continuación.

Se admiten los siguientes lenguajes de scripting:

- **Bash**: usa `bash` y puede recurrir a `sh`. Se ejecuta mediante la ejecución de `-e {pathtofile}`.
- **PowerShell**: usa `pwsh` y puede recurrir a `powershell`. Se ejecuta mediante la ejecución de `-command \". '{pathtofile}'\"`.

## Escritura de los scripts

Los scripts personalizados pueden usar las características siguientes:

- **Variables de entorno**: los scripts tienen acceso a las variables de entorno predeterminadas. La carga completa del evento de webhook se puede encontrar en `GITHUB_EVENT_PATH`. Para más información, vea "[Variables de entorno](/actions/learn-github-actions/environment-variables#default-environment-variables)".
- **Comandos de flujo de trabajo**: los scripts pueden usar comandos de flujo de trabajo. Para más información, vea ["Comandos de flujo de trabajo para {% data variables.product.prodname_actions %}"](/actions/using-workflows/workflow-commands-for-github-actions), con la excepción de `save-state` y `set-output`, que no son compatibles con estos scripts. Los scripts también pueden usar archivos de entorno. Para más información, vea [Archivos de entorno](/actions/using-workflows/workflow-commands-for-github-actions#environment-files).

{% note %}

**Nota**: Evite usar los scripts para mostrar información confidencial en la consola, ya que cualquiera con acceso de lectura al repositorio podría ver la salida en los registros de la interfaz de usuario.

{% endnote %}

### Control de códigos de salida

En el caso de los scripts previos al trabajo, el código de salida `0` indica que el script se ha completado correctamente y que el trabajo se ejecutará a continuación. Si hay otro código de salida, el trabajo no se ejecutará y se marcará como con error. Para ver los resultados de los scripts previos al trabajo, compruebe las entradas `Set up runner` de los registros. Para más información sobre cómo comprobar los registros, vea "[Visualización de registros para diagnosticar errores](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#viewing-logs-to-diagnose-failures)".

Estos scripts no admiten la configuración [`continue-on-error`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idcontinue-on-error).

## Desencadenamiento de los scripts

Los scripts personalizados deben estar ubicados en el ejecutor, pero no se deben almacenar en el directorio `actions-runner` de la aplicación. Los scripts se ejecutan en el contexto de seguridad de la cuenta de servicio que ejecuta el servicio del ejecutor.

{% note %}

**Nota**: Los scripts desencadenados se procesan de forma sincrónica, por lo que bloquearán la ejecución del trabajo mientras se ejecutan.

{% endnote %}

Los scripts se ejecutan de forma automática cuando el ejecutor tiene las siguientes variables de entorno que contienen una ruta de acceso absoluta al script:
- `ACTIONS_RUNNER_HOOK_JOB_STARTED`: el script definido en esta variable de entorno se desencadena cuando se ha asignado un trabajo a un ejecutor, pero antes de que el trabajo empiece a ejecutarse.
- `ACTIONS_RUNNER_HOOK_JOB_COMPLETED`: el script definido en esta variable de entorno se desencadena después de que el trabajo haya terminado de procesarse.

Para establecer estas variables de entorno, puede agregarlas al sistema operativo o a un archivo denominado `.env` dentro del directorio de aplicaciones del ejecutor autohospedado. Por ejemplo, la siguiente entrada `.env` hará que el ejecutor ejecute automáticamente un script denominado `cleanup_script.sh` antes de que se ejecute cada trabajo:

```bash
ACTIONS_RUNNER_HOOK_JOB_STARTED=/cleanup_script.sh
```

## Solución de problemas


### Sin configuración de tiempo de espera

Actualmente no hay ninguna configuración de tiempo de espera disponible para los scripts ejecutados por `ACTIONS_RUNNER_HOOK_JOB_STARTED` o `ACTIONS_RUNNER_HOOK_JOB_COMPLETED`. Como resultado, podría considerar la posibilidad de agregar el control de tiempo de espera al script.

### Revisión del registro de ejecución del flujo de trabajo

Para confirmar si los scripts se están ejecutando, puede revisar los registros de ese trabajo. Los scripts se mostrarán en pasos independientes para `Set up runner` o `Complete runner`, en función de la variable de entorno que desencadene el script. Para más información sobre cómo comprobar los registros, vea "[Visualización de registros para diagnosticar errores](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#viewing-logs-to-diagnose-failures)".
