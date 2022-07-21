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

The following scripting languages are supported:

- **Bash**: Uses `bash` and can fallback to `sh`. Executes by running `-e {pathtofile}`.
- **PowerShell**: Uses `pwsh` and can fallback to `powershell`. Executes by running `-command \". '{pathtofile}'\"`.

## Writing the scripts

Your custom scripts can use the following features:

- **Environment variables**:  Scripts have access to the default environment variables. The full webhook event payload can be found in `GITHUB_EVENT_PATH`. Para obtener más información, consulta "[Variables del entorno](/actions/learn-github-actions/environment-variables#default-environment-variables)".
- **Workflow commands**: Scripts can use workflow commands. For more information, see ["Workflow commands for {% data variables.product.prodname_actions %}"](/actions/using-workflows/workflow-commands-for-github-actions), with the exception of `save-state` and `set-output`, which are not supported by these scripts. Scripts can also use environment files. For more information, see [Environment files](/actions/using-workflows/workflow-commands-for-github-actions#environment-files).

{% note %}

**Note**: Avoid using your scripts to output sensitive information to the console, as anyone with read access to the repository might be able to see the output in the UI logs.

{% endnote %}

### Handling exit codes

For pre-job scripts, exit code `0` indicates that the script completed successfully, and the job will then proceed to run. If there is any other exit code, the job will not run and will be marked as failed. To see the results of your pre-job scripts, check the logs for `Set up runner` entries. Para obtener más información sobre cómo verificar las bitácoras, consulta la sección "[Visualizar las bitácoras para diagnosticar las fallas](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#viewing-logs-to-diagnose-failures)".

The [`continue-on-error`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idcontinue-on-error) setting is not supported for use by these scripts.

## Triggering the scripts

The custom scripts must be located on the runner, but should not be stored in the `actions-runner` application directory. The scripts are executed in the security context of the service account that's running the runner service.

{% note %}

**Note**: The triggered scripts are processed synchronously, so they will block job execution while they are running.

{% endnote %}

The scripts are automatically executed when the runner has the following environment variables containing an absolute path to the script:
- `ACTIONS_RUNNER_HOOK_JOB_STARTED`: The script defined in this environment variable is triggered when a job has been assigned to a runner, but before the job starts running.
- `ACTIONS_RUNNER_HOOK_JOB_COMPLETED`: The script defined in this environment variable is triggered after the job has finished processing.

To set these environment variables, you can either add them to the operating system, or add them to a file named `.env` within the self-hosted runner application directory. For example, the following `.env` entry will have the runner automatically run a script named `cleanup_script.sh` before each job runs:

```bash
ACTIONS_RUNNER_HOOK_JOB_STARTED=/cleanup_script.sh
```

## Solución de problemas


### No timeout setting

There is currently no timeout setting available for scripts executed by `ACTIONS_RUNNER_HOOK_JOB_STARTED` or `ACTIONS_RUNNER_HOOK_JOB_COMPLETED`. As a result, you could consider adding timeout handling to your script.

### Reviewing the workflow run log

To confirm whether your scripts are executing, you can review the logs for that job. The scripts will be listed within separate steps for either `Set up runner` or `Complete runner`, depending on which environment variable is triggering the script. Para obtener más información sobre cómo verificar las bitácoras, consulta la sección "[Visualizar las bitácoras para diagnosticar las fallas](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#viewing-logs-to-diagnose-failures)".
