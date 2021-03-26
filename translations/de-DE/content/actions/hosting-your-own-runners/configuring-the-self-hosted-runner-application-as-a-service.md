---
title: Die Anwendung für selbst-gehostete Runner als Dienst konfigurieren
intro: Du kannst die Anwendung für selbst-gehostete Runner als Dienst konfigurieren, um die Runner-Anwendung automatisch zu starten, wenn der Rechner hochfährt.
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/configuring-the-self-hosted-runner-application-as-a-service
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: 'tutorial'
defaultPlatform: linux
---

{% data reusables.actions.ae-self-hosted-runners-notice %}
{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

{% capture service_first_step %}1. Beende die Anwendung für selbst-gehostete Runner, falls sie gerade läuft.{% endcapture %}
{% capture service_non_windows_intro_shell %}Öffne auf der Runner-Maschine eine Shell in dem Verzeichnis, in dem Du die Anwendung für selbst-gehostete Runner installiert hast. Verwende die folgenden Befehle, um den Dienst für selbst-gehosteten Runner zu installieren und zu verwalten.{% endcapture %}
{% capture service_nonwindows_intro %}Du musst einen Runner zu {% data variables.product.product_name %} hinzufügen, bevor du die Anwendung für selbst-gehostete Runner als Dienst konfigurieren kannst. Weitere Informationen findest Du unter "[selbst-gehostete Runner hinzufügen](/github/automating-your-workflow-with-github-actions/adding-self-hosted-runners)."{% endcapture %}
{% capture service_win_name %}actions.runner.*{% endcapture %}


{% linux %}

{{ service_nonwindows_intro }}

Für Linux-Systeme mit `systemd` kannst Du das Skript `svc.sh` verwenden, das mit der Anwendung für selbst-gehostete Runner verteilt wird, um die Anwendung als Dienst zu installieren und deren Benutzung zu verwalten.

{{ service_non_windows_intro_shell }}

{% endlinux %}

{% windows %}

{% note %}

**Hinweis:** Die Konfiguration der Anwendung für selbst-gehostete Runner als Windows-Dienst ist Teil des Anwendungs-Konfigurationsprozesses. Wenn Du die Anwendung für selbst-gehostete Runner bereits konfiguriert hast, aber nicht als Dienst, dann musst Du den Runner aus {% data variables.product.prodname_dotcom %} entfernen und die Anwendung neu konfigurieren. Wenn Du die Anwendung neu konfigurierst, wähle die Option, die Anwendung als Dienst zu konfigurieren.

Weitere Informationen findest Du unter „[selbst-gehostete Runner entfernen](/actions/automating-your-workflow-with-github-actions/removing-self-hosted-runners)“ und „[selbst-gehostete Runner hinzufügen](/actions/automating-your-workflow-with-github-actions/adding-self-hosted-runners)“.

{% endnote %}

Du kannst den Runner-Dienst in der Windows-Anwendung **Services** verwalten oder PowerShell verwenden, um die folgenden Befehle auszuführen.

{% endwindows %}

{% mac %}

{{ service_nonwindows_intro }}

{{ service_non_windows_intro_shell }}

{% endmac %}

{% linux %}

### Den Dienst installieren

{{ service_first_step }}
1. Installiere den Dienst mit folgendem Befehl:

   ```shell
   sudo ./svc.sh install
   ```

{% endlinux %}
{% mac %}

### Den Dienst installieren

{{ service_first_step }}
1. Installiere den Dienst mit folgendem Befehl:

   ```shell
   ./svc.sh install
   ```
{% endmac %}

### Den Dienst starten

Starte den Dienst mit folgendem Befehl:

{% linux %}
```shell
sudo ./svc.sh start
```
{% endlinux %}
{% windows %}
```shell
Start-Service "{{ service_win_name }}"
```
{% endwindows %}
{% mac %}
```shell
./svc.sh start
```
{% endmac %}

### Den Status des Dienstes überprüfen

Überprüfe den Status des Dienstes mit folgendem Befehl:

{% linux %}
```shell
sudo ./svc.sh status
```
{% endlinux %}
{% windows %}
```shell
Get-Service "{{ service_win_name }}"
```
{% endwindows %}
{% mac %}
```shell
./svc.sh status
```
{% endmac %}

 Weitere Informationen zum Ansehen des Status Deines selbst-gehosteten Runners findest Du unter „[Überwachung und Fehlerbehebung selbst-gehosteter Runner](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)“.

### Den Dienst beenden

Beende den Dienst mit dem folgenden Befehl:

{% linux %}
```shell
sudo ./svc.sh stop
```
{% endlinux %}
{% windows %}
```shell
Stop-Service "{{ service_win_name }}"
```
{% endwindows %}
{% mac %}
```shell
./svc.sh stop
```
{% endmac %}

### Den Dienst de-installieren

1. Beende den Dienst, falls er gerade läuft.
1. De-installiere den Dienst mit folgendem Befehl:

    {% linux %}
    ```shell
    sudo ./svc.sh uninstall
    ```
    {% endlinux %}
    {% windows %}
    ```shell
    Remove-Service "{{ service_win_name }}"
    ```
    {% endwindows %}
    {% mac %}
    ```shell
    ./svc.sh uninstall
    ```
    {% endmac %}


{% linux %}

### Dienst für selbst-gehosteten Runner anpassen

Wenn Du die oben genannte Standardkonfiguration des `systemd`-Dienstes nicht verwenden möchtest, kannst Du einen angepassten Dienst erstellen oder Deinen bevorzugten Dienstmechanismus nutzen. Erwäge, die `serviced`-Vorlage unter `actions-runner/bin/actions.runner.service.template` als Referenz zu verwenden. Wenn Du einen angepassten Dienst verwendest, muss der selbst-gehostete Runner-Dienst immer mit dem Einstiegspunkt `runsvc.sh` aufgerufen werden.

{% endlinux %}

{% mac %}

### Dienst für selbst-gehosteten Runner anpassen

Wenn Du die oben genannte Standardkonfiguration des „launchd“-Dienstes nicht verwenden möchtest, kannst Du einen angepassten Dienst erstellen oder Deinen bevorzugten Dienstmechanismus nutzen. Erwäge, die `plist`-Vorlage unter `actions-runner/bin/actions.runner.plist.template` als Referenz zu verwenden. Wenn Du einen angepassten Dienst verwendest, muss der selbst-gehostete Runner-Dienst immer mit dem Einstiegspunkt `runsvc.sh` aufgerufen werden.

{% endmac %}
