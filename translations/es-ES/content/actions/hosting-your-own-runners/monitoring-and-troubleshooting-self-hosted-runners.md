---
title: Supervisión y solución de problemas de ejecutores autohospedados
intro: Puedes monitorear tus ejecutores auto-hospedados para ver su actividad y diagnosticar problemas comunes.
redirect_from:
  - /actions/hosting-your-own-runners/checking-the-status-of-self-hosted-runners
  - /github/automating-your-workflow-with-github-actions/checking-the-status-of-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/checking-the-status-of-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
defaultPlatform: linux
shortTitle: Monitor & troubleshoot
ms.openlocfilehash: 57ca9cad51c1936171fcadd73497cf313dd86dd7
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '147065638'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Comprobar el estado de un servicio del ejecutor autoalojado

{% data reusables.actions.self-hosted-runner-management-permissions-required %}

{% data reusables.actions.self-hosted-runner-navigate-repo-and-org %} {% data reusables.organizations.settings-sidebar-actions-runners %}
1. En "Ejecutores", puedes ver una lista de los ejecutores registrados, incluyendo su nombre, etiquetas y estado.

    El estado puede ser uno de los siguientes:

    * **Inactivo**: el ejecutor está conectado a {% data variables.product.product_name %} y está listo para ejecutar trabajos.
    * **Activo**: el ejecutor ejecuta actualmente un trabajo.
    * **Sin conexión**: el ejecutor no está conectado a {% data variables.product.product_name %}. Esto puede deberse a que la máquina está fuera de línea, la aplicación del ejecutor autoalojado no se está ejecutando en la máquina o la aplicación del ejecutor autoalojado no se puede comunicar con {% data variables.product.product_name %}.

## Solucionar problemas de la conectividad de red

### Verificar la conectividad de red del ejecutor auto-hospedado

Puede usar el script `run` de la aplicación de ejecutor autohospedado con el parámetro `--check` para comprobar que un ejecutor autohospedado puede acceder a todos los servicios de red necesarios en {% data variables.product.product_location %}.

Además de `--check`, debe proporcionar dos argumentos al script:

* `--url` con la URL al repositorio, organización o empresa de {% data variables.product.company_short %}. Por ejemplo, `--url https://github.com/octo-org/octo-repo`.
* `--pat` con el valor de un token de acceso personal, que debe tener el ámbito `workflow`. Por ejemplo, `--pat ghp_abcd1234`. Para más información, vea "[Creación de un token de acceso personal](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)".

Por ejemplo:

{% mac %}

{% data reusables.actions.self-hosted-runner-check-mac-linux %}

{% endmac %} {% linux %}

{% data reusables.actions.self-hosted-runner-check-mac-linux %}

{% endlinux %} {% windows %}

```shell
run.cmd --check --url <em>https://github.com/octo-org/octo-repo</em> --pat <em>ghp_abcd1234</em>
```

{% endwindows %}

El script prueba cada servicio y genera un valor `PASS`o `FAIL` para cada uno. Si tienes cualquier verificación fallida, puedes ver más detalles del problema en el archivo de bitácora de la verificación. Los archivos de registro se encuentra en el directorio `_diag` donde haya instalado la aplicación de ejecutor y la ruta del archivo de registro para cada comprobación se muestra en la salida de consola del script.

Si tienes alguna verificación fallida, también debes verificar que tu máquina ejecutora auto-hospedada cumpla con todos los requisitos de comunicación. Para más información, consulte [Seguridad del ejecutor autohospedado con repositorios públicos](/actions/hosting-your-own-runners/about-self-hosted-runners#communication-requirements).

### Inhabilitar la verificación de certificados TLS
{% ifversion ghes %} De manera predeterminada, la aplicación de ejecutor autohospedado comprueba el certificado TLS para {% data variables.product.product_name %}.  Si tu {% data variables.product.product_name %} tiene un certificado auto-firmado o emitido internamente, deberás inhabilitar la verificación de certificados TLS para propósitos de pruebas.
{% else %} De manera predeterminada, la aplicación de ejecutor autohospedado comprueba el certificado TLS para {% data variables.product.product_name %}.  Si encuentras problemas de red, deberás inhabilitar la verificación de certificados TLS para propósitos de pruebas.
{% endif %}

Para deshabilitar la comprobación de la certificación TLS en la aplicación de ejecutor autohospedado, establezca la variable de entorno `GITHUB_ACTIONS_RUNNER_TLS_NO_VERIFY` en `1` antes de configurar y ejecutar la aplicación de ejecutor autohospedado.

```shell
export GITHUB_ACTIONS_RUNNER_TLS_NO_VERIFY=1
./config.sh --url <em>https://github.com/octo-org/octo-repo</em> --token
./run.sh
```

{% warning %}

**Advertencia**: No se recomienda inhabilitar la comprobación TLS, ya que TLS proporciona privacidad e integridad de datos entre la aplicación de ejecutor autohospedado y {% data variables.product.product_name %}. Te recomendamos instalar el certificado {% data variables.product.product_name %} en el almacén de certificados del sistema operativo para tu ejecutor auto-hospedado. Para encontrar instrucciones sobre cómo instalar el certificado {% data variables.product.product_name %}, verifícalo con el proveedor del sistema operativo.

{% endwarning %}

## Revisar los archivos de bitácora de la aplicación del ejecutor auto-hospedado

Puedes monitorear el estado de la aplicación del ejecutor auto-hospedado y de sus actividades. Los archivos de registro se conservan en el directorio `_diag` donde ha instalado la aplicación de ejecutor y cada vez que se inicia la aplicación se genera un registro nuevo. El nombre de archivo comienza con *Runner_* , seguido de una marca de tiempo UTC del inicio de la aplicación.

Para obtener registros detallados sobre las ejecuciones de trabajos de flujo de trabajo, vea la sección siguiente, en la que se describen los archivos *Worker_* .

## Revisar el archivo de bitácora de un job

La aplicación del ejecutor auto-hospedado crea un archivo de bitácora detallado para cada job que procesa. Estos archivos se almacenan en el directorio `_diag` donde ha instalado la aplicación de ejecutor y el nombre de archivo comienza por *Worker_* .

{% linux %}

## Utilizar journalctl para revisar el servicio de la aplicación del ejecutor auto-hospedado

Para los ejecutores autohospedados basados en Linux que ejecutan la aplicación mediante un servicio, puede usar `journalctl` a fin de supervisar su actividad en tiempo real. El servicio predeterminado basado en systemd usa la siguiente convención de nomenclatura: `actions.runner.<org>-<repo>.<runnerName>.service`. Este nombre se trunca si supera los 80 caracteres, por lo que la manera preferida de buscar el nombre del servicio consiste en comprobar el archivo _.service_. Por ejemplo:

```shell
$ cat ~/actions-runner/.service
actions.runner.octo-org-octo-repo.runner01.service
```

Si esto falla debido a que el servicio se instaló en alguna otra parte, puedes encontrar el nombre del servicio en la lista de servicios en ejecución. Por ejemplo, en la mayoría de los sistemas Linux, puede usar el comando `systemctl`:

```shell
$ systemctl --type=service | grep actions.runner
actions.runner.octo-org-octo-repo.hostname.service loaded active running GitHub Actions Runner (octo-org-octo-repo.hostname)
```

Puede usar `journalctl` para supervisar la actividad en tiempo real del ejecutor autohospedado:

```shell
$ sudo journalctl -u actions.runner.octo-org-octo-repo.runner01.service -f
```

En esta salida de ejemplo, puede ver que se inicia `runner01`, se recibe un trabajo denominado `testAction` y, después, se muestra el estado resultante:

```shell
Feb 11 14:57:07 runner01 runsvc.sh[962]: Starting Runner listener with startup type: service
Feb 11 14:57:07 runner01 runsvc.sh[962]: Started listener process
Feb 11 14:57:07 runner01 runsvc.sh[962]: Started running service
Feb 11 14:57:16 runner01 runsvc.sh[962]: √ Connected to GitHub
Feb 11 14:57:17 runner01 runsvc.sh[962]: 2020-02-11 14:57:17Z: Listening for Jobs
Feb 11 16:06:54 runner01 runsvc.sh[962]: 2020-02-11 16:06:54Z: Running job: testAction
Feb 11 16:07:10 runner01 runsvc.sh[962]: 2020-02-11 16:07:10Z: Job testAction completed with result: Succeeded
```

Para ver la configuración de `systemd`, puede encontrar el archivo de servicio aquí: `/etc/systemd/system/actions.runner.<org>-<repo>.<runnerName>.service`.
Si quieres personalizar el servicio de la aplicación del ejecutor auto-hospedado, no modifiques directamente este archivo. Siga las instrucciones descritas en "[Configuración de la aplicación de ejecutor autohospedado como servicio](/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service#customizing-the-self-hosted-runner-service)".

{% endlinux %}

{% mac %}

## Uso de `launchd` para comprobar el servicio de la aplicación de ejecutor autohospedado

Para los ejecutores autohospedados basados en macOS que ejecutan la aplicación como un servicio, puede usar `launchctl` a fin de supervisar su actividad en tiempo real. El servicio predeterminado basado en launchd usa la siguiente convención de nomenclatura: `actions.runner.<org>-<repo>.<runnerName>`. Este nombre se trunca si supera los 80 caracteres, por lo que la manera preferida de buscar el nombre del servicio consiste en comprobar el archivo _.service_ en el directorio del ejecutor:

```shell
% cat ~/actions-runner/.service
/Users/exampleUsername/Library/LaunchAgents/actions.runner.octo-org-octo-repo.runner01.plist
```

El script `svc.sh` usa `launchctl` para comprobar si la aplicación está en ejecución. Por ejemplo:

```shell
$ ./svc.sh status
status actions.runner.example.runner01:
/Users/exampleUsername/Library/LaunchAgents/actions.runner.example.runner01.plist
Started:
379 0 actions.runner.example.runner01
```

La salida generada incluye el id. del proceso y el nombre del servicio `launchd` de la aplicación.

Para ver la configuración de `launchd`, puede encontrar el archivo de servicio aquí: `/Users/exampleUsername/Library/LaunchAgents/actions.runner.<repoName>.<runnerName>.service`.
Si quieres personalizar el servicio de la aplicación del ejecutor auto-hospedado, no modifiques directamente este archivo. Siga las instrucciones descritas en "[Configuración de la aplicación de ejecutor autohospedado como servicio](/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service#customizing-the-self-hosted-runner-service-1)".

{% endmac %}

{% windows %}

## Utilizar PowerShell para revisar el servicio de la aplicación del ejecutor auto-hospedado

Para los ejecutores auto-hospedados basados en Windows que se ejecuten en la aplicación como servicio, puedes utilizar PowerShell para monitorear su actividad en tiempo real. El servicio usa la convención de nomenclatura `GitHub Actions Runner (<org>-<repo>.<runnerName>)`. También puede buscar el nombre del servicio si consulta el archivo _.service_ en el directorio del ejecutor:

```shell
PS C:\actions-runner> Get-Content .service
actions.runner.octo-org-octo-repo.runner01.service
```

Puede ver el estado del ejecutor en la aplicación _Servicios_ de Windows (`services.msc`). También puedes utilizar PowerShell para revisar si el servicio se está ejecutando:

```shell
PS C:\actions-runner> Get-Service "actions.runner.octo-org-octo-repo.runner01.service" | Select-Object Name, Status
Name                                                  Status
----                                                  ------
actions.runner.octo-org-octo-repo.runner01.service    Running
```

Puedes utilizar PowerShell para revisar la actividad reciente del ejecutor auto-hospedado. En esta salida de ejemplo, puede ver que se inicia la aplicación, se recibe un trabajo denominado `testAction` y, después, se muestra el estado resultante:

```shell
PS C:\actions-runner> Get-EventLog -LogName Application -Source ActionsRunnerService

   Index Time          EntryType   Source                 InstanceID Message
   ----- ----          ---------   ------                 ---------- -------
     136 Mar 17 13:45  Information ActionsRunnerService          100 2020-03-17 13:45:48Z: Job Greeting completed with result: Succeeded
     135 Mar 17 13:45  Information ActionsRunnerService          100 2020-03-17 13:45:34Z: Running job: testAction
     134 Mar 17 13:41  Information ActionsRunnerService          100 2020-03-17 13:41:54Z: Listening for Jobs
     133 Mar 17 13:41  Information ActionsRunnerService          100 û Connected to GitHub
     132 Mar 17 13:41  Information ActionsRunnerService            0 Service started successfully.
     131 Mar 17 13:41  Information ActionsRunnerService          100 Starting Actions Runner listener
     130 Mar 17 13:41  Information ActionsRunnerService          100 Starting Actions Runner Service
     129 Mar 17 13:41  Information ActionsRunnerService          100 create event log trace source for actions-runner service
```

{% endwindows %}

## Monitorear el proceso de actualización automática

Te recomendamos que revises el proceso de actualización automático a menudo, ya que el ejecutor auto-hospedado no podrá procesar jobs si cae debajo de cierto umbral de versiones. La aplicación del ejecutor auto-hospedado se actualiza automáticamente, pero nota que este proceso no incluye ninguna actualización al sistema operativo ni a otro tipo de software; necesitarás administrar estas actualizaciones por separado.

Puede ver las actividades de actualización en los archivos de registro *Runner_* . Por ejemplo:

```shell
[Feb 12 12:37:07 INFO SelfUpdater] An update is available.
```

Además, puede buscar más información en los archivos de registro _SelfUpdate_ ubicados en el directorio `_diag` donde ha instalado la aplicación de ejecutor.

{% linux %}

## Solucionar problemas en los contenedores de los ejecutores auto-hospedados

### Revisar que se haya instalado Docker

Si tus jobs necesitan contenedores, entonces el ejecutor auto-hospedado debe estar basado en Linux y necesita contar con Docker instalado. Revisa que tu ejecutor auto-hospedado tenga Docker instalado y que el servicio se esté ejecutando.

Puede usar `systemctl` para comprobar el estado del servicio:

```shell
$ sudo systemctl is-active docker.service
active
```

Si no se ha instalado Docker, entonces las acciones dependientes fallarán con los siguientes errores:

```shell
[2020-02-13 16:56:10Z INFO DockerCommandManager] Which: 'docker'
[2020-02-13 16:56:10Z INFO DockerCommandManager] Not found.
[2020-02-13 16:56:10Z ERR  StepsRunner] Caught exception from step: System.IO.FileNotFoundException: File not found: 'docker'
```

### Revisar los permisos de Docker

Si tu job falla con el siguiente error:

```shell
dial unix /var/run/docker.sock: connect: permission denied
```

Revisa que la cuenta de servicio del ejecutor auto-hospedado tenga permiso de utilizar el servicio de Docker. Puede identificar esta cuenta si comprueba la configuración del ejecutor autohospedado en `systemd`. Por ejemplo:

```shell
$ sudo systemctl show -p User actions.runner.octo-org-octo-repo.runner01.service
User=runner-user
```

{% endlinux %}

{% ifversion ghes %}
## Resolución de ejecutores sin conexión después de una actualización de {% data variables.product.product_location %}

{% data reusables.actions.upgrade-runners-before-upgrade-ghes %} 

Si los ejecutores están sin conexión por este motivo, actualízalos manualmente. Para obtener más información, consulta las instrucciones de instalación de [la última versión](https://github.com/actions/runner/releases/latest) en el repositorio actions/runner.
{% endif %}
