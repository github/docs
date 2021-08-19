---
title: Überwachung und Fehlerbehebung selbst-gehosteter Runner
intro: 'Du kannst Deine selbst gehosteten Runner überwachen, um ihre Aktivität zu sehen und gewöhnliche Probleme zu diagnostizieren.'
redirect_from:
  - /actions/hosting-your-own-runners/checking-the-status-of-self-hosted-runners
  - /github/automating-your-workflow-with-github-actions/checking-the-status-of-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/checking-the-status-of-self-hosted-runners
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
defaultPlatform: linux
---

{% data reusables.actions.ae-self-hosted-runners-notice %}
{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Den Status eines selbst-gehosteten Runners mittels {{ site.data.variables.product.prodname_dotcom }} überprüfen

{% data reusables.github-actions.self-hosted-runner-management-permissions-required %}

{% data reusables.github-actions.self-hosted-runner-navigate-repo-and-org %}
{% data reusables.github-actions.settings-sidebar-actions-runners %}
1. Under {% if currentVersion == "free-pro-team@latest" %}"Runners"{% else %}"Self-hosted runners"{% endif %}, you can view a list of registered runners, including the runner's name, labels, and status.

    ![Runner-Liste](/assets/images/help/settings/actions-runner-list.png)

    Der Status kann einer der folgenden sein:

    * **Idle** (Leerlauf): Der Runner ist mit {% data variables.product.product_name %} verbunden und bereit, Jobs auszuführen.
    * **Active**: Der Runner führt derzeit einen Job aus.
    * **Offline**: Der Runner ist nicht mit {% data variables.product.product_name %} verbunden. Dies könnte daran liegen, dass der Rechner offline ist, die Anwendung für selbst-gehostete Runner nicht auf dem Rechner läuft, oder die Anwendung für selbst-gehostete Runner kann nicht mit {% data variables.product.product_name %} kommunizieren.


### Die Logdateien der Anwendung für selbst-gehostete Runner überprüfen

You can monitor the status of the self-hosted runner application and its activities. Log files are kept in the `_diag` directory, and a new one is generated each time the application is started. The filename begins with *Runner_*, and is followed by a UTC timestamp of when the application was started.

For detailed logs on workflow job executions, see the next section describing the *Worker_* files.

### Logdatei eines Jobs überprüfen

The self-hosted runner application creates a detailed log file for each job that it processes. These files are stored in the `_diag` directory, and the filename begins with *Worker_*.

{% linux %}

### Den Anwendungs-Dienst für selbst-gehostete Runner mittels journalctl überprüfen

For Linux-based self-hosted runners running the application using a service, you can use `journalctl` to monitor their real-time activity. The default systemd-based service uses the following naming convention: `actions.runner.<org>-<repo>.<runnerName>.service`. This name is truncated if it exceeds 80 characters, so the preferred way of finding the service's name is by checking the _.service_ file. Ein Beispiel:

```shell
$ cat ~/actions-runner/.service
actions.runner.octo-org-octo-repo.runner01.service
```

You can use `journalctl` to monitor the real-time activity of the self-hosted runner:

```shell
$ sudo journalctl -u actions.runner.octo-org-octo-repo.runner01.service -f
```

In this example output, you can see `runner01` start, receive a job named `testAction`, and then display the resulting status:

```shell
Feb 11 14:57:07 runner01 runsvc.sh[962]: Starting Runner listener with startup type: service
Feb 11 14:57:07 runner01 runsvc.sh[962]: Started listener process
Feb 11 14:57:07 runner01 runsvc.sh[962]: Started running service
Feb 11 14:57:16 runner01 runsvc.sh[962]: √ Connected to GitHub
Feb 11 14:57:17 runner01 runsvc.sh[962]: 2020-02-11 14:57:17Z: Listening for Jobs
Feb 11 16:06:54 runner01 runsvc.sh[962]: 2020-02-11 16:06:54Z: Running job: testAction
Feb 11 16:07:10 runner01 runsvc.sh[962]: 2020-02-11 16:07:10Z: Job testAction completed with result: Succeeded
```

To view the systemd configuration, you can locate the service file here: `/etc/systemd/system/actions.runner.<org>-<repo>.<runnerName>.service`. If you want to customize the self-hosted runner application service, do not directly modify this file. Follow the instructions described in "[Configuring the self-hosted runner application as a service](/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service#customizing-the-self-hosted-runner-service)."

{% endlinux %}

{% mac %}

### Den Anwendungs-Dienst für selbst-gehostete Runner mittels „launchd“ überprüfen

For macOS-based self-hosted runners running the application as a service, you can use `launchctl` to monitor their real-time activity. The default launchd-based service uses the following naming convention: `actions.runner.<org>-<repo>.<runnerName>`. This name is truncated if it exceeds 80 characters, so the preferred way of finding the service's name is by checking the _.service_ file in the runner directory:

```shell
% cat ~/actions-runner/.service
/Users/exampleUsername/Library/LaunchAgents/actions.runner.octo-org-octo-repo.runner01.plist
```

The `svc.sh` script uses `launchctl` to check whether the application is running. Ein Beispiel:

```shell
$ ./svc.sh status
status actions.runner.example.runner01:
/Users/exampleUsername/Library/LaunchAgents/actions.runner.example.runner01.plist
Started:
379 0 actions.runner.example.runner01
```

The resulting output includes the process ID and the name of the application’s launchd service.

To view the launchd configuration, you can locate the service file here: `/Users/exampleUsername/Library/LaunchAgents/actions.runner.<repoName>.<runnerName>.service`. If you want to customize the self-hosted runner application service, do not directly modify this file. Follow the instructions described in "[Configuring the self-hosted runner application as a service](/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service#customizing-the-self-hosted-runner-service-1)."

{% endmac %}


{% windows %}

### Den Anwendungs-Dienst für selbst-gehostete Runner mittels PowerShell überprüfen

For Windows-based self-hosted runners running the application as a service, you can use PowerShell to monitor their real-time activity. The service uses the naming convention `GitHub Actions Runner (<org>-<repo>.<runnerName>)`. You can also find the service's name by checking the _.service_ file in the runner directory:

```shell
PS C:\actions-runner> Get-Content .service
actions.runner.octo-org-octo-repo.runner01.service
```

You can view the status of the runner in the Windows _Services_ application (`services.msc`). You can also use PowerShell to check whether the service is running:

```shell
PS C:\actions-runner> Get-Service "actions.runner.octo-org-octo-repo.runner01.service" | Select-Object Name, Status
Name                                                  Status
----                                                  ------
actions.runner.octo-org-octo-repo.runner01.service    Running
```

You can use PowerShell to check the recent activity of the self-hosted runner. In this example output, you can see the application start, receive a job named `testAction`, and then display the resulting status:

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

### Den automatischen Aktualisierungsprozesses überwachen

We recommend that you regularly check the automatic update process, as the self-hosted runner will not be able to process jobs if it falls below a certain version threshold. The self-hosted runner application automatically updates itself, but note that this process does not include any updates to the operating system or other software; you will need to separately manage these updates.

You can view the update activities in the *Runner_* log files. Ein Beispiel:

```shell
[Feb 12 12:37:07 INFO SelfUpdater] An update is available.
```

In addition, you can find more information in the _SelfUpdate_ log files located in the `_diag` directory.

{% linux %}

### Fehlerbehebung für Container in selbst-gehosteten Runnern

#### Überprüfen, ob Docker installiert ist

If your jobs require containers, then the self-hosted runner must be Linux-based and needs to have Docker installed. Check that your self-hosted runner has Docker installed and that the service is running.

You can use `systemctl` to check the service status:

```shell
$ sudo systemctl is-active docker.service
active
```

If Docker is not installed, then dependent actions will fail with the following errors:

```shell
[2020-02-13 16:56:10Z INFO DockerCommandManager] Which: 'docker'
[2020-02-13 16:56:10Z INFO DockerCommandManager] Not found.
[2020-02-13 16:56:10Z ERR  StepsRunner] Caught exception from step: System.IO.FileNotFoundException: File not found: 'docker'
```

#### Die Docker Berechtigungen überprüfen

If your job fails with the following error:

```shell
dial unix /var/run/docker.sock: connect: permission denied
```

Check that the self-hosted runner's service account has permission to use the Docker service. You can identify this account by checking the configuration of the self-hosted runner in systemd. Ein Beispiel:

```shell
$ sudo systemctl show -p User actions.runner.octo-org-octo-repo.runner01.service
User=runner-user
```

{% endlinux %}
