---
title: Ejecutar scripts antes o después de un job
intro: 'Los scripts se pueden ejecutar automáticamente en un ejecutor auto-hospedado, directamente antes o después de un job.'
versions:
  feature: job-hooks-for-runners
type: tutorial
miniTocMaxHeadingLevel: 3
shortTitle: Ejecuta un script antes o después de un job
---

{% note %}

**Nota**: Esta característica se encuentra actualmente en beta y está sujeta a cambios.

{% endnote %}

## Acerca de los scripts pre- y post-job

Puedes ejecutar scripts automáticamente en un ejecutor auto-hospedado, ya sea antes de que se ejecute un job o después de que este haya terminado de ejecutarse. Podrías utilizar estos scripts apoyar los requisitos del job, tal como crear o tirar un ambiente ejecutor o limpiar los directorios. También podrías utilizar estos scripts para rastrear la telemetría de cómo se están utilizando tus ejecutores.

Los scripts personalizados se activan automáticamente cuando una variable de ambiente se configura en el ejecutor; la variable de ambiente debe contener la ruta absoluta al script. Para obtener más información, consulta la sección "[Activar los scripts](#triggering-the-scripts)" más adelante.

Los siguientes lenguajes para hacer scripts son compatibles:

- **Bash**: Utiliza `bash` y puede revertirse a `sh`. Se ejecuta corriendo `-e {pathtofile}`.
- **PowerShell**: Utiliza `pwsh` y puede revertirse a `powershell`. Se ejecuta corriendo `-command \". '{pathtofile}'\"`.

## Escribir los scripts

Tus scripts personalizados pueden utilizar las siguientes características:

- **Variables de ambiente**: Los scripts tienen acceso a las variables de ambiente predeterminadas. La carga de evento de webhook completa puede encontrarse en `GITHUB_EVENT_PATH`. Para obtener más información, consulta "[Variables del entorno](/actions/learn-github-actions/environment-variables#default-environment-variables)".
- **Comandos de flujo de trabajo**: Los scripts pueden utilizar comandos de flujo de trabajo. Para obtener más información, consulta la sección de [Comandos de flujo de trabajo para las {% data variables.product.prodname_actions %}](/actions/using-workflows/workflow-commands-for-github-actions)", con la excepción de los comandos `save-state` y `set-output`, los cuales no son compatibles con estos scripts. Los scripts también pueden utilizar archivos de ambiente. Para obtener más información, consulta la sección [Archivos de ambiente](/actions/using-workflows/workflow-commands-for-github-actions#environment-files).

{% note %}

**Nota**: Evita utilizar tus scripts para enviar información sensible hacia al consola, ya que cualquiera con acceso de lectura al repositorio podría ser capaz de ver la salida en las bitácoras de la IU.

{% endnote %}

### Manejar los códigos de salida

Para los scripts previos a los jobs, el código de salida `0` indica que el script se completó con éxito y el job procederá a ejecutarse entonces. Si hay cualquier otro código de salida, el job no se ejecutará y se marcará como fallido. Para ver los resultados de tus scripts previos al job, verifica las bitácoras de las entradas de `Set up runner`. Para obtener más información sobre cómo verificar las bitácoras, consulta la sección "[Visualizar las bitácoras para diagnosticar las fallas](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#viewing-logs-to-diagnose-failures)".

El ajuste [`continue-on-error`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idcontinue-on-error) no es compatible para su uso con estos scripts.

## Activar los scripts

Los scripts personalizados deben ubicarse en el ejecutor, pero no deben almacenarse en el directorio de aplicación `actions-runner`. Los scripts se ejecutan en el contexto de seguridad de la cuenta de servicio que está ejecutando el servicio del ejecutor.

{% note %}

**Nota**: Los scripts activados se procesan sincrónicamente, así que estos bloquearán la ejecución del job mientras se ejecutan.

{% endnote %}

Los scripts se ejecutan automáticamente cuando el ejecutor tiene las siguientes variables de ambiente que contienen una ruta absoluta hacia el script:
- `ACTIONS_RUNNER_HOOK_JOB_STARTED`: El script que se define en esta variable de ambiente se activa cuando un job se asigna a un ejecutor, pero antes de que el job comience a ejecutarse.
- `ACTIONS_RUNNER_HOOK_JOB_COMPLETED`: El script que se define en esta variable de ambiente se activa después de que el job termina de procesarse.

Para configurar estas variables de ambiente, puedes ya sea agregarlas al sistema operativo o a un archivo llamado `.env` dentro del directorio de aplicación del ejecutor auto-hospedado. Por ejemplo, la siguiente entrada `.env` hará que el ejecutor ejecute automáticamente un script llamado `cleanup_script.sh` antes de que se ejecute cada job:

```bash
ACTIONS_RUNNER_HOOK_JOB_STARTED=/cleanup_script.sh
```

## Solución de problemas


### Sin ajuste de tiempo de inactividad

Actualmente, no hay un ajuste de tiempo de inactividad disponible para los scripts que ejecuta `ACTIONS_RUNNER_HOOK_JOB_STARTED` o `ACTIONS_RUNNER_HOOK_JOB_COMPLETED`. Como resultado, podrías considerar agregar un manejo de tiempo de inactividad a tu script.

### Revisar la bitácora de ejecución de flujo de trabajo

Para confirmar si se están ejecutando tus scripts, puedes revisar las bitácoras de ese job. Los scripts se listarán dentro de pasos separados ya sea para `Set up runner` o `Complete runner`, dependiendo de qué variable de ambiente está activando el script. Para obtener más información sobre cómo verificar las bitácoras, consulta la sección "[Visualizar las bitácoras para diagnosticar las fallas](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#viewing-logs-to-diagnose-failures)".
