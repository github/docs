---
title: Die Anwendung für selbst-gehostete Runner als Dienst konfigurieren
intro: 'Du kannst die Anwendung für selbstgehostete Runner als Dienst konfigurieren, um die Runneranwendung automatisch zu starten, wenn der Rechner hochfährt.'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/configuring-the-self-hosted-runner-application-as-a-service
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
defaultPlatform: linux
shortTitle: Run runner app on startup
ms.openlocfilehash: d9f89bafe27314d321a30e2ce6c4eb8c98ec7dbb
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147705196'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% capture service_first_step %}1. Beende die selbstgehostete Runneranwendung, wenn sie gerade ausgeführt wird.{% endcapture %} {% capture service_non_windows_intro_shell %}Öffne auf dem Runnercomputer eine Shell in dem Verzeichnis, in dem du die selbst gehostete Runneranwendung installiert hast. Verwende die folgenden Befehle, um den Dienst für selbstgehostete Runner zu installieren und zu verwalten.{% endcapture %}

{% capture service_nonwindows_intro %}

{% note %}

**Hinweis**: Du musst {% data variables.product.product_name %} einen Runner hinzufügen, bevor du die Anwendung für selbstgehostete Runner als Dienst konfigurieren kannst. Weitere Informationen findest du unter [Hinzufügen von selbstgehosteten Runnern](/github/automating-your-workflow-with-github-actions/adding-self-hosted-runners).

{% endnote %} {% endcapture %}

{% capture service_win_name %}actions.runner.*{% endcapture %}

{% linux %}

{{ service_nonwindows_intro }}

Für Linux-Systeme mit `systemd` kannst du das Skript `svc.sh` verwenden, das nach dem erfolgreichen Hinzufügen des Runners erstellt wird, um die Anwendung als Dienst zu installieren und deren Nutzung zu verwalten.

{{ service_non_windows_intro_shell }}

{% endlinux %}

{% windows %}

{% note %}

**Hinweis:** Die Konfiguration der Anwendung für selbstgehostete Runner als Windows-Dienst ist Teil des Anwendungskonfigurationsprozesses. Wenn du die Anwendung für selbst-gehostete Runner bereits konfiguriert hast, aber nicht als Dienst, dann musst du den Runner aus {% data variables.product.prodname_dotcom %} entfernen und die Anwendung neu konfigurieren. Wenn du die Anwendung neu konfigurierst, wähle die Option, die Anwendung als Dienst zu konfigurieren.

Weitere Informationen findest du unter [Entfernen von selbstgehosteten Runnern](/actions/automating-your-workflow-with-github-actions/adding-self-hosted-runners) und [Hinzufügen selbstgehosteter Runner](/actions/automating-your-workflow-with-github-actions/removing-self-hosted-runners).

{% endnote %}

Du kannst den Runnerdienst in der Windows-Anwendung **Services** verwalten oder PowerShell verwenden, um die folgenden Befehle auszuführen.

{% endwindows %}

{% mac %}

{{ service_nonwindows_intro }}

{{ service_non_windows_intro_shell }}

{% endmac %}

{% linux %}

## Den Dienst installieren

{{ service_first_step }}
1. Installiere den Dienst mit folgendem Befehl:

   ```shell
   sudo ./svc.sh install
   ```

1. Der Befehl verwendet alternativ ein optionales `user`-Argument, um den Dienst als anderer Benutzer zu installieren.

  ```shell
  ./svc.sh install <em>USERNAME</em>
  ```

{% endlinux %}

{% mac %}

## Den Dienst installieren

{{ service_first_step }}
1. Installiere den Dienst mit folgendem Befehl:

   ```shell
   ./svc.sh install
   ```
{% endmac %}

## Den Dienst starten

Starte den Dienst mit folgendem Befehl:

{% linux %}
```shell
sudo ./svc.sh start
```
{% endlinux %} {% windows %}
```shell
Start-Service "{{ service_win_name }}"
```
{% endwindows %} {% mac %}
```shell
./svc.sh start
```
{% endmac %}

## Den Status des Dienstes überprüfen

Überprüfe den Status des Dienstes mit folgendem Befehl:

{% linux %}
```shell
sudo ./svc.sh status
```
{% endlinux %} {% windows %}
```shell
Get-Service "{{ service_win_name }}"
```
{% endwindows %} {% mac %}
```shell
./svc.sh status
```
{% endmac %}

 Weitere Informationen zum Anzeigen des Status deines selbstgehosteten Runners findest du unter [Überwachung und Problembehandlung bei selbstgehosteten Runnern](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners).

## Den Dienst beenden

Beende den Dienst mit dem folgenden Befehl:

{% linux %}
```shell
sudo ./svc.sh stop
```
{% endlinux %} {% windows %}
```shell
Stop-Service "{{ service_win_name }}"
```
{% endwindows %} {% mac %}
```shell
./svc.sh stop
```
{% endmac %}

## Den Dienst de-installieren

1. Beende den Dienst, falls er gerade läuft.
1. De-installiere den Dienst mit folgendem Befehl:

    {% linux %}
    ```shell
    sudo ./svc.sh uninstall
    ```
    {% endlinux %} {% windows %}
    ```shell
    Remove-Service "{{ service_win_name }}"
    ```
    {% endwindows %} {% mac %}
    ```shell
    ./svc.sh uninstall
    ```
    {% endmac %}


{% linux %}

## Dienst für selbst-gehosteten Runner anpassen

Wenn du die oben genannte Standardkonfiguration des `systemd`-Dienstes nicht verwenden möchtest, kannst du einen angepassten Dienst erstellen oder deinen bevorzugten Dienstmechanismus nutzen. Erwäge die Verwendung der `serviced`-Vorlage unter `actions-runner/bin/actions.runner.service.template` als Referenz. Wenn du einen angepassten Dienst verwendest, muss der selbstgehostete Runnerdienst immer mit dem Einstiegspunkt `runsvc.sh` aufgerufen werden.

{% endlinux %}

{% mac %}

## Dienst für selbst-gehosteten Runner anpassen

Wenn du die oben genannte Standardkonfiguration des „launchd“-Dienstes nicht verwenden möchtest, kannst du einen angepassten Dienst erstellen oder deinen bevorzugten Dienstmechanismus nutzen. Erwäge die Verwendung der `plist`-Vorlage unter `actions-runner/bin/actions.runner.plist.template` als Referenz. Wenn du einen angepassten Dienst verwendest, muss der selbstgehostete Runnerdienst immer mit dem Einstiegspunkt `runsvc.sh` aufgerufen werden.

{% endmac %}
