---
title: Monitorear y solucionar problemas para los ejecutores auto-hospedados
intro: Puedes monitorear tus ejecutores auto-hospedados para ver su actividad y diagnosticar problemas comunes.
redirect_from:
  - /actions/hosting-your-own-runners/checking-the-status-of-self-hosted-runners
  - /github/automating-your-workflow-with-github-actions/checking-the-status-of-self-hosted-runners
  - /Actions/Automating-Your-Workflow-with-GitHub-Actions/Checking-The-status-of-Self-Hosted-Runners
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Comprobar el estado de un ejecutor autoalojado utilizando {% data variables.product.prodname_dotcom %}

{% data reusables.github-actions.self-hosted-runner-management-permissions-required %}

{% data reusables.github-actions.self-hosted-runner-navigate-repo-and-org %}
{% data reusables.organizations.settings-sidebar-actions %}
1. Debajo de "Ejecutores auto-hospedados", puedes ver una lista de ejecutores registrados, incluyendo su nombre, etiquetas y estado.

    ![Lista de ejecutores](/assets/images/help/settings/actions-runner-list.png)

    El estado puede ser uno de los siguientes:

    * **Idle (Inactivo)**: El ejecutor está conectado a {% data variables.product.product_name %} y está listo para ejecutar puestos de trabajo.
    * **Active (Activo)**: Actualmente, el ejecutor está ejecutando un puesto de trabajo.
    * **Offline (Sin conexión)**: El ejecutor no está conectado a {% data variables.product.product_name %}. Esto puede deberse a que la máquina está fuera de línea, la aplicación del ejecutor autoalojado no se está ejecutando en la máquina o la aplicación del ejecutor autoalojado no se puede comunicar con {% data variables.product.product_name %}.


### Revisar los archivos de bitácora de la aplicación del ejecutor auto-hospedado

Puedes monitorear el estado de la aplicación del ejecutor auto-hospedado y de sus actividades. Los archivos de bitácora se mantienen en el directorio `_diag`, y se genera uno nuevo cada que se inicia la aplicación. El nombre de archivo comienza con *Runner_*, y le sige una marca de tiempo UTC de cuando se inició la aplicación.

Para obtener registros detallados sobre las ejecuciones de jobs en el flujo de trabajo, consulta la siguiente sección que describe los archivos *Worker_*.

### Revisar el archivo de bitácora de un job

La aplicación del ejecutor auto-hospedado crea un archivo de bitácora detallado para cada job que procesa. Estos archivos se guardan en el directorio `_diag`, y el nombre de archivo comienza con el prefijo *Worker_*.

{% linux %}

### Utilizar journalctl para revisar el servicio de la aplicación del ejecutor auto-hospedado

Para los ejecutores auto-hospedados basados en Linux que se ejecutan en la aplicación utilizando un servicio, puedes utilizar `journalctl` para monitorear su actividad en tiempo real. El servicio predeterminado basado en systemd utiliza la siguiente convención de nomenclatura: `actions.runner.<org>-<repo>.<runnerName>.service`. Este nombre se trunca si excede los 80 caracteres, así que la manera preferente de encontrar el nombre de un servicio es revisando el archivo _.service_. Por ejemplo:

```shell
$ cat ~/actions-runner/.service
actions.runner.octo-org-octo-repo.runner01.service
```

Puedes utilizar `journalctl` para monitorear la actividad del ejecutor auto-hospedado en tiempo real:

```shell
$ sudo journalctl -u actions.runner.octo-org-octo-repo.runner01.service -f
```

En este ejemplo de salida, puedes ver como inicia `runner01`, recibe un job llamado `testAction`, y luego muestra el estado resultante:

```shell
Feb 11 14:57:07 runner01 runsvc.sh[962]: Starting Runner listener with startup type: service
Feb 11 14:57:07 runner01 runsvc.sh[962]: Started listener process
Feb 11 14:57:07 runner01 runsvc.sh[962]: Started running service
Feb 11 14:57:16 runner01 runsvc.sh[962]: √ Connected to GitHub
Feb 11 14:57:17 runner01 runsvc.sh[962]: 2020-02-11 14:57:17Z: Listening for Jobs
Feb 11 16:06:54 runner01 runsvc.sh[962]: 2020-02-11 16:06:54Z: Running job: testAction
Feb 11 16:07:10 runner01 runsvc.sh[962]: 2020-02-11 16:07:10Z: Job testAction completed with result: Succeeded
```

Para ver la configuración de systemd, puedes ubicar archivo de servicio aquí: `/etc/systemd/system/actions.runner.<org>-<repo>.<runnerName>.service`. Si quieres personalizar el servicio de la aplicación del ejecutor auto-hospedado, no modifiques directamente este archivo. Sigue las instrucciones descritas en la sección "[Configurar la aplicación del ejecutor auto-hospedado como un servicio](/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service#customizing-the-self-hosted-runner-service)".

{% endlinux %}

{% mac %}

### Utilizar launchd para revisar el servicio de la aplicación del ejecutor auto-hospedado

Para los ejecutores auto-hospedados basados en macOS que se ejecutan en la aplicación como un servicio, puedes utilizar `launchctl` para monitorear su actividad en tiempo real. El servicio predeterminado basado en launchd utiliza la siguiente convención de nomenclatura: `actions.runner.<org>-<repo>.<runnerName>`. Este nombre se trunca si excede los 80 caracteres, así que la manera preferente de encontrar el nombre del servicio es revisando el archivo _.service_ en el directorio del ejecutor:

```shell
% cat ~/actions-runner/.service
/Users/exampleUsername/Library/LaunchAgents/actions.runner.octo-org-octo-repo.runner01.plist
```

El script `svc.sh` utiliza `launchctl` para revisar si la aplicación se está ejecutando. Por ejemplo:

```shell
$ ./svc.sh status
status actions.runner.example.runner01:
/Users/exampleUsername/Library/LaunchAgents/actions.runner.example.runner01.plist
Started:
379 0 actions.runner.example.runner01
```

La salida generada incluye la ID del proceso y el nombre del servicio launchd de la aplicación.

Para ver la configuración de launchd, puedes ubicar el archivo del servicio aquí: `/Users/exampleUsername/Library/LaunchAgents/actions.runner.<repoName>.<runnerName>.service`. Si quieres personalizar el servicio de la aplicación del ejecutor auto-hospedado, no modifiques directamente este archivo. Sigue las instrucciones descritas en la sección "[Configurar la aplicación del ejecutor auto-hospedado como un servicio](/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service#customizing-the-self-hosted-runner-service-1)".

{% endmac %}


{% windows %}

### Utilizar PowerShell para revisar el servicio de la aplicación del ejecutor auto-hospedado

Para los ejecutores auto-hospedados basados en Windows que se ejecuten en la aplicación como servicio, puedes utilizar PowerShell para monitorear su actividad en tiempo real. El servicio utiliza la convención de nomenclatura `GitHub Actions Runner (<org>-<repo>.<runnerName>)`. También puedes encontrar el nombre del servicio si revisas el archivo _.service_ en el directorio del ejecutor:

```shell
PS C:\actions-runner> Get-Content .service
actions.runner.octo-org-octo-repo.runner01.service
```

Puedes ver el estado del ejecutor en la aplicación _Services_ de Windows (`services.msc`). También puedes utilizar PowerShell para revisar si el servicio se está ejecutando:

```shell
PS C:\actions-runner> Get-Service "actions.runner.octo-org-octo-repo.runner01.service" | Select-Object Name, Status
Name                                                  Status
----                                                  ------
actions.runner.octo-org-octo-repo.runner01.service    Running
```

Puedes utilizar PowerShell para revisar la actividad reciente del ejecutor auto-hospedado. En este ejemplo de salida, puedes ver que la aplicación comienza, recibe un job llamado `testAction`, y después muestra el estado resultante:

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

### Monitorear el proceso de actualización automática

Te recomendamos que revises el proceso de actualización automático a menudo, ya que el ejecutor auto-hospedado no podrá procesar jobs si cae debajo de cierto umbral de versiones. La aplicación del ejecutor auto-hospedado se actualiza automáticamente, pero nota que este proceso no incluye ninguna actualización al sistema operativo ni a otro tipo de software; necesitarás administrar estas actualizaciones por separado.

Puedes ver las actividades de actualización en los archivos de bitácora *Runner_*. Por ejemplo:

```shell
[Feb 12 12:37:07 INFO SelfUpdater] An update is available.
```

Adicionalmente, puedes encontrar más información en los archivos de bitácora _SelfUpdate_ ubicados en el directorio `_diag`.

{% linux %}

### Solucionar problemas en los contenedores de los ejecutores auto-hospedados

#### Revisar que se haya instalado Docker

Si tus jobs necesitan contenedores, entonces el ejecutor auto-hospedado debe estar basado en Linux y necesita contar con Docker instalado. Revisa que tu ejecutor auto-hospedado tenga Docker instalado y que el servicio se esté ejecutando.

Puedes utilizar `systemctl` para revisar el estado del servicio:

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

#### Revisar los permisos de Docker

Si tu job falla con el siguiente error:

```shell
dial unix /var/run/docker.sock: connect: permission denied
```

Revisa que la cuenta de servicio del ejecutor auto-hospedado tenga permiso de utilizar el servicio de Docker. Puedes identificar esta cuenta revisando la configuración del ejecutor auto-hospedado en systemd. Por ejemplo:

```shell
$ sudo systemctl show -p User actions.runner.octo-org-octo-repo.runner01.service
User=runner-user
```

{% endlinux %}
