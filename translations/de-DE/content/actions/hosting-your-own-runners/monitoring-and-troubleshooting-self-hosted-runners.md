---
title: Überwachen und Behandeln von Problemen mit selbstgehosteten Runnern
intro: 'Du kannst deine selbst gehosteten Runner überwachen, um ihre Aktivität einzusehen und gängige Probleme zu diagnostizieren.'
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
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065634'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Überprüfen des Status eines selbst gehosteten Läufers

{% data reusables.actions.self-hosted-runner-management-permissions-required %}

{% data reusables.actions.self-hosted-runner-navigate-repo-and-org %} {% data reusables.organizations.settings-sidebar-actions-runners %}
1. Unter „Runner“ kannst du eine Liste registrierter Runner, einschließlich Name, Bezeichnungen und Status des Runners, einsehen.

    Folgende Statuswerte sind möglich:

    * **Leerlauf**: Der Runner ist mit {% data variables.product.product_name %} verbunden und bereit, Aufträge auszuführen.
    * **Aktiv**: Der Runner führt derzeit einen Auftrag aus.
    * **Offline**: Der Runner ist nicht mit {% data variables.product.product_name %} verbunden. Dies könnte daran liegen, dass der Rechner offline ist, die Anwendung für selbst-gehostete Runner nicht auf dem Rechner läuft, oder die Anwendung für selbst-gehostete Runner kann nicht mit {% data variables.product.product_name %} kommunizieren.

## Problembehandlung bei der Netzwerkkonnektivität

### Überprüfen der Netzwerkkonnektivität für selbstgehostete Runner

Du kannst das `run`-Skript der selbstgehosteten Runneranwendung mit dem Parameter `--check` verwenden, um zu überprüfen, ob ein selbstgehosteter Runner auf alle erforderlichen Netzwerkdienste in {% data variables.product.product_location %} zugreifen kann.

Zusätzlich zu `--check` müssen zwei weitere Argumente für das Skript angegeben werden:

* `--url` mit der URL zu deinem bzw. deiner {% data variables.product.company_short %}-Repository, -Organisation oder -Unternehmen. Beispiel: `--url https://github.com/octo-org/octo-repo`.
* `--pat` mit dem Wert eines persönlichen Zugriffstokens, das den Bereich `workflow` aufweisen muss. Beispiel: `--pat ghp_abcd1234`. Weitere Informationen findest du unter [Erstellen eines persönlichen Zugriffstokens](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

Beispiel:

{% mac %}

{% data reusables.actions.self-hosted-runner-check-mac-linux %}

{% endmac %} {% linux %}

{% data reusables.actions.self-hosted-runner-check-mac-linux %}

{% endlinux %} {% windows %}

```shell
run.cmd --check --url <em>https://github.com/octo-org/octo-repo</em> --pat <em>ghp_abcd1234</em>
```

{% endwindows %}

Das Skript testet die einzelnen Dienste und gibt entweder `PASS` oder `FAIL` für jeden Dienst aus. Wenn die Überprüfung für einen Dienst nicht erfolgreich ist, findest du weitere Einzelheiten in der Protokolldatei der Überprüfung. Die Protokolldateien befinden sich im Verzeichnis `_diag`, in dem du die Runneranwendung installiert hast. Der Pfad der Protokolldateien für die einzelnen Überprüfungen wird zudem in der Konsolenausgabe des Skripts angezeigt.

Wenn die Überprüfung für einen Dienst nicht erfolgreich ist, solltest du zudem überprüfen, ob der für deinen selbstgehosteten Runner verwendete Computer alle Kommunikationsanforderungen erfüllt. Weitere Informationen findest du unter „[Informationen zu selbstgehosteten Runnern](/actions/hosting-your-own-runners/about-self-hosted-runners#communication-requirements)“.

### Deaktivieren der TLS-Zertifikatüberprüfung
{% ifversion ghes %} Standardmäßig überprüft die selbstgehostete Runneranwendung das TLS-Zertifikat für {% data variables.product.product_name %}.  Wenn {% data variables.product.product_name %} über ein selbstsigniertes oder intern ausgestelltes Zertifikat verfügt, soll die TLS-Zertifikatüberprüfung zu Testzwecken möglicherweise deaktiviert werden.
{% else %} Standardmäßig überprüft die selbstgehostete Runneranwendung das TLS-Zertifikat für {% data variables.product.product_name %}.  Wenn Netzwerkprobleme auftreten, sollte die TLS-Zertifikatüberprüfung zu Testzwecken möglicherweise deaktiviert werden.
{% endif %}

Zum Deaktivieren der TLS-Zertifizierungsüberprüfung in der selbstgehosteten Runneranwendung legst du die `GITHUB_ACTIONS_RUNNER_TLS_NO_VERIFY`-Umgebungsvariable auf `1` fest, bevor du die selbstgehostete Runneranwendung konfigurierst und ausführst.

```shell
export GITHUB_ACTIONS_RUNNER_TLS_NO_VERIFY=1
./config.sh --url <em>https://github.com/octo-org/octo-repo</em> --token
./run.sh
```

{% warning %}

**Warnung**: Die Deaktivierung der TLS-Überprüfung wird nicht empfohlen. Der Grund dafür ist, dass mithilfe von TLS der Datenschutz und die Datenintegrität zwischen der selbstgehosteten Runneranwendung und {% data variables.product.product_name %} sichergestellt wird. Es wird empfohlen, das {% data variables.product.product_name %}-Zertifikat im Zertifikatspeicher des Betriebssystems für deinen selbstgehosteten Runner zu installieren. Informationen zur Installation des {% data variables.product.product_name %}-Zertifikats erhältst du beim Hersteller deines Betriebssystems.

{% endwarning %}

## Die Logdateien der Anwendung für selbst-gehostete Runner überprüfen

Du kannst den Status der selbstgehosteten Runneranwendung und die zugehörigen Aktivitäten überwachen. Protokolldateien werden im Verzeichnis `_diag` gespeichert, in dem du die Runneranwendung installiert hast. Bei jedem Start der Anwendung wird ein neues Protokoll generiert. Der Dateiname beginnt mit *Runner_*, gefolgt von einem UTC-Zeitstempel des Anwendungsstarts.

Ausführliche Protokolle zur Ausführung von Workflowaufträgen findest du im nächsten Abschnitt zu den Dateien vom Typ *Worker_*.

## Logdatei eines Jobs überprüfen

Die selbstgehostete Runneranwendung erstellt eine detaillierte Protokolldatei für jeden Auftrag, den sie verarbeitet. Diese Dateien werden im Verzeichnis `_diag` gespeichert, in dem du die Runneranwendung installiert hast. Der Dateiname beginnt mit *Worker_*.

{% linux %}

## Den Anwendungs-Dienst für selbst-gehostete Runner mittels journalctl überprüfen

Für Linux-basierte selbstgehostete Runner, die die Anwendung mit einem Dienst ausführen, kannst du zur Überwachung der Echtzeitaktivität `journalctl` verwenden. Der standardmäßige systembasierte Dienst verwendet die folgende Namenskonvention: `actions.runner.<org>-<repo>.<runnerName>.service` Wenn dieser Name mehr als 80 Zeichen umfasst, wird er abgeschnitten. Aus diesem Grund sollte anhand der Datei _.service_ nach dem Namen des Diensts gesucht werden. Beispiel:

```shell
$ cat ~/actions-runner/.service
actions.runner.octo-org-octo-repo.runner01.service
```

Wenn dieser Vorgang nicht möglich ist, weil der Dienst an anderer Stelle installiert ist, kannst du den Dienstnamen anhand der Liste der ausgeführten Dienste ermitteln. Auf den meisten Linux-Systemen kannst du z. B. den Befehl `systemctl` verwenden:

```shell
$ systemctl --type=service | grep actions.runner
actions.runner.octo-org-octo-repo.hostname.service loaded active running GitHub Actions Runner (octo-org-octo-repo.hostname)
```

Mithilfe von `journalctl` kannst du die Echtzeitaktivität des selbstgehosteten Runners überwachen:

```shell
$ sudo journalctl -u actions.runner.octo-org-octo-repo.runner01.service -f
```

In dieser Beispielausgabe siehst du den Start von `runner01`, den Empfang des Auftrags `testAction` und den resultierenden Status:

```shell
Feb 11 14:57:07 runner01 runsvc.sh[962]: Starting Runner listener with startup type: service
Feb 11 14:57:07 runner01 runsvc.sh[962]: Started listener process
Feb 11 14:57:07 runner01 runsvc.sh[962]: Started running service
Feb 11 14:57:16 runner01 runsvc.sh[962]: √ Connected to GitHub
Feb 11 14:57:17 runner01 runsvc.sh[962]: 2020-02-11 14:57:17Z: Listening for Jobs
Feb 11 16:06:54 runner01 runsvc.sh[962]: 2020-02-11 16:06:54Z: Running job: testAction
Feb 11 16:07:10 runner01 runsvc.sh[962]: 2020-02-11 16:07:10Z: Job testAction completed with result: Succeeded
```

Zum Anzeigen der `systemd`-Konfiguration kannst du hier nach der Dienstdatei suchen: `/etc/systemd/system/actions.runner.<org>-<repo>.<runnerName>.service`.
Diese Datei darf nicht direkt bearbeitet werden, um den Dienst der selbstgehosteten Runneranwendung anzupassen. Befolge stattdessen die Anweisungen unter [Konfigurieren der selbstgehosteten Runneranwendung als Dienst](/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service#customizing-the-self-hosted-runner-service).

{% endlinux %}

{% mac %}

## Überprüfen des selbstgehosteten Runneranwendungsdiensts mit `launchd`

Für macOS-basierte selbstgehostete Runner, die die Anwendung als Dienst ausführen, kannst du zur Überwachung der Echtzeitaktivität `launchctl` verwenden. Der standardmäßige launchd-basierte Dienst verwendet die folgende Namenskonvention: `actions.runner.<org>-<repo>.<runnerName>` Wenn dieser Name mehr als 80 Zeichen umfasst, wird er abgeschnitten. Aus diesem Grund sollte anhand der Datei _.service_ im Runnerverzeichnis nach dem Namen des Diensts gesucht werden:

```shell
% cat ~/actions-runner/.service
/Users/exampleUsername/Library/LaunchAgents/actions.runner.octo-org-octo-repo.runner01.plist
```

Das Skript `svc.sh` überprüft mithilfe von `launchctl`, ob die Anwendung ausgeführt wird. Beispiel:

```shell
$ ./svc.sh status
status actions.runner.example.runner01:
/Users/exampleUsername/Library/LaunchAgents/actions.runner.example.runner01.plist
Started:
379 0 actions.runner.example.runner01
```

Die resultierende Ausgabe enthält die Prozess-ID und den Namen des `launchd`-Diensts der Anwendung.

Zum Anzeigen der `launchd`-Konfiguration kannst du hier nach der Dienstdatei suchen: `/Users/exampleUsername/Library/LaunchAgents/actions.runner.<repoName>.<runnerName>.service`.
Diese Datei darf nicht direkt bearbeitet werden, um den Dienst der selbstgehosteten Runneranwendung anzupassen. Befolge stattdessen die Anweisungen unter [Konfigurieren der selbstgehosteten Runneranwendung als Dienst](/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service#customizing-the-self-hosted-runner-service-1).

{% endmac %}

{% windows %}

## Den Anwendungs-Dienst für selbst-gehostete Runner mittels PowerShell überprüfen

Für Windows-basierte selbstgehostete Runner, die die Anwendung als Dienst ausführen, kannst du zur Überwachung der Echtzeitaktivität PowerShell verwenden. Der Dienst verwendet die `GitHub Actions Runner (<org>-<repo>.<runnerName>)`-Namenskonvention. Du kannst den Namen des Diensts auch in der _.service_-Datei im Runnerverzeichnis ermitteln:

```shell
PS C:\actions-runner> Get-Content .service
actions.runner.octo-org-octo-repo.runner01.service
```

Der Status des Runners kann in der Windows-Anwendung _Dienste_ (`services.msc`) angezeigt werden. Darüber hinaus kannst du auch mit PowerShell überprüfen, ob der Dienst ausgeführt wird:

```shell
PS C:\actions-runner> Get-Service "actions.runner.octo-org-octo-repo.runner01.service" | Select-Object Name, Status
Name                                                  Status
----                                                  ------
actions.runner.octo-org-octo-repo.runner01.service    Running
```

Mithilfe von PowerShell kannst du die aktuelle Aktivität des selbstgehosteten Runners überprüfen. In dieser Beispielausgabe siehst du den Anwendungsstart, den Empfang des Auftrags `testAction` und den resultierenden Status:

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

## Den automatischen Aktualisierungsprozesses überwachen

Da der selbstgehostete Runner Aufträge nicht verarbeiten kann, wenn eine bestimmte Version unterschritten wird, solltest du den automatischen Updateprozess regelmäßig überprüfen. Die selbstgehostete Runneranwendung aktualisiert sich automatisch selbst. Dieser Vorgang umfasst jedoch keine Updates des Betriebssystems oder anderer Software. Diese Updates müssen separat verwaltet werden.

Die Updateaktivitäten können in den *Runner_*-Protokolldateien angezeigt werden. Beispiel:

```shell
[Feb 12 12:37:07 INFO SelfUpdater] An update is available.
```

Weitere Informationen findest du zudem in den _SelfUpdate_-Protokolldateien im `_diag`-Verzeichnis, in dem du die Runneranwendung installiert hast.

{% linux %}

## Fehlerbehebung für Container in selbst-gehosteten Runnern

### Überprüfen, ob Docker installiert ist

Wenn für deine Aufträge Container benötigt werden, muss ein Linux-basierter selbstgehosteter Runner verwendet werden, und Docker muss installiert sein. Überprüfe, ob dein selbstgehosteter Runner über eine Docker-Installation verfügt und der Dienst ausgeführt wird.

Du kannst den Dienststatus mithilfe von `systemctl` überprüfen:

```shell
$ sudo systemctl is-active docker.service
active
```

Wenn Docker nicht installiert ist, werden abhängige Aktionen mit den folgenden Fehlern abgebrochen:

```shell
[2020-02-13 16:56:10Z INFO DockerCommandManager] Which: 'docker'
[2020-02-13 16:56:10Z INFO DockerCommandManager] Not found.
[2020-02-13 16:56:10Z ERR  StepsRunner] Caught exception from step: System.IO.FileNotFoundException: File not found: 'docker'
```

### Die Docker Berechtigungen überprüfen

Gehe wie folgt vor, wenn dein Auftrag mit dem folgenden Fehler abgebrochen wird:

```shell
dial unix /var/run/docker.sock: connect: permission denied
```

Überprüfe, ob das Dienstkonto des selbstgehosteten Runners für die Verwendung des Docker-Diensts berechtigt ist. Dieses Konto lässt sich anhand der Konfiguration des selbstgehosteten Runners in `systemd` ermitteln. Beispiel:

```shell
$ sudo systemctl show -p User actions.runner.octo-org-octo-repo.runner01.service
User=runner-user
```

{% endlinux %}

{% ifversion ghes %}
## Auflösen von Runnern, die nach einem Upgrade von {% data variables.product.product_location %} offline sind

{% data reusables.actions.upgrade-runners-before-upgrade-ghes %} 

Wenn deine Runner aus diesem Grund offline sind, aktualisiere sie manuell. Weitere Informationen findest du in den Installationsanweisungen für [die neueste Version](https://github.com/actions/runner/releases/latest) im Repository „actions/runner“.
{% endif %}
