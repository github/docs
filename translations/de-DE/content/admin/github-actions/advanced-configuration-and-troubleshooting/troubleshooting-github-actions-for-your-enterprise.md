---
title: Behandeln von Problemen mit GitHub Actions für dein Unternehmen
intro: 'Behandlung von Problemen, die häufig bei Verwendung von {% data variables.product.prodname_actions %} in {% data variables.product.prodname_ghe_server %} auftreten'
permissions: 'Site administrators can troubleshoot {% data variables.product.prodname_actions %} issues and modify {% data variables.product.prodname_ghe_server %} configurations.'
versions:
  ghes: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Troubleshooting
redirect_from:
  - /admin/github-actions/troubleshooting-github-actions-for-your-enterprise
shortTitle: Troubleshoot GitHub Actions
ms.openlocfilehash: a0965405e8e37bd75a245738d8d20c91f11ce254
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107301'
---
## Überprüfen der Integrität von {% data variables.product.prodname_actions %}

Du kannst die Integrität von {% data variables.product.prodname_actions %} auf {% data variables.location.product_location %} mit dem Befehlszeilen-Hilfsprogramm `ghe-actions-check` überprüfen. Weitere Informationen findest du unter [Befehlszeilenprogramme](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-actions-check) und [Zugreifen auf die Verwaltungsshell (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh).

## Konfigurieren von selbstgehosteten Runnern bei Verwendung eines selbstsignierten Zertifikats für {% data variables.product.prodname_ghe_server %}

{% data reusables.actions.enterprise-self-signed-cert %} Weitere Informationen findest du unter [Konfigurieren von TLS](/admin/configuration/configuring-tls).

### Installieren des Zertifikats auf dem Runnercomputer

Damit ein selbstgehosteter Runner mithilfe eines selbstsignierten Zertifikats eine Verbindung mit einem {% data variables.product.prodname_ghe_server %} herstellen kann, musst du das Zertifikat auf dem Runnercomputer installieren, damit die Verbindung gehärtet ist.

Die zur Installation eines Zertifikats erforderlichen Schritte findest du in der Dokumentation für das Betriebssystem des Runners.

### Konfigurieren von Node.js für die Verwendung des Zertifikats

Die meisten Aktionen werden in JavaScript geschrieben und mithilfe von Node.js ausgeführt, wobei Node.js nicht den Zertifikatspeicher des Betriebssystems verwendet. Damit die selbstgehostete Runneranwendung das Zertifikat verwendet, musst du die Umgebungsvariable `NODE_EXTRA_CA_CERTS` auf dem Runnercomputer festlegen.

Du kannst die Umgebungsvariable als Systemumgebungsvariable festlegen oder in einer Datei namens _.env_ im Verzeichnis der selbstgehosteten Anwendung deklarieren.

Beispiel:

```shell
NODE_EXTRA_CA_CERTS=/usr/share/ca-certificates/extra/mycertfile.crt
```

Umgebungsvariablen werden gelesen, wenn die selbstgehostete Runneranwendung gestartet wird. Daher musst du die Umgebungsvariable festlegen, bevor du die Runneranwendung konfigurierst oder startest. Wenn sich deine Zertifikatkonfiguration ändert, musst du die selbstgehostete Runneranwendung neu starten.

### Konfigurieren von Docker-Containern für die Verwendung des Zertifikats

Wenn du Docker-Containeraktionen oder Dienstcontainer in deinen Workflows verwendest, musst du das Zertifikat möglicherweise auch in deinem Docker-Image installieren und zusätzlich die oben genannte Umgebungsvariable festlegen.

## Konfigurieren von HTTP-Proxyeinstellungen für {% data variables.product.prodname_actions %}

{% data reusables.actions.enterprise-http-proxy %}

Wenn diese Einstellungen nicht ordnungsgemäß konfiguriert sind, erhältst du möglicherweise Fehler, z. B. `Resource unexpectedly moved to https://<IP_ADDRESS>` beim Festlegen oder Ändern deiner {% data variables.product.prodname_actions %}-Konfiguration.

## Runner, die keine Verbindung zu {% data variables.product.prodname_ghe_server %} mit einem neuen Hostnamen herstellen

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

Wenn du {% data variables.product.prodname_ghe_server %} in deiner Umgebung mit einem neuen Hostnamen bereitstellst und der alte Hostname nicht mehr zu deiner Instanz aufgelöst wird, können selbstgehostete Runner keine Verbindung mit dem alten Hostnamen herstellen und keine Aufträge ausführen.

Du musst die Konfiguration deiner selbstgehosteten Runner auf den neuen Hostnamen für {% data variables.location.product_location %} aktualisieren. Jeder selbstgehostete Runner erfordert eine der folgenden Vorgehensweisen:

* Bearbeite im Verzeichnis der selbstgehosteten Anwendung die `.runner`- und `.credentials`-Dateien, und ersetze alle Erwähnungen des alten Hostnamens durch den neuen. Starte anschließend die selbstgehostete Runneranwendung neu.
* Entferne den Runner über die Benutzeroberfläche aus {% data variables.product.prodname_ghe_server %}, und füge ihn erneut hinzu. Weitere Informationen findest du unter [Entfernen von selbstgehosteten Runnern](/actions/hosting-your-own-runners/adding-self-hosted-runners) und [Hinzufügen selbstgehosteter Runner](/actions/hosting-your-own-runners/removing-self-hosted-runners).

## Nicht mehr reagierende Aufträge und Grenzwerte für {% data variables.product.prodname_actions %} -Arbeitsspeicher und -CPU

{% data variables.product.prodname_actions %} bestehen aus einer Vielzahl von Diensten, die auf {% data variables.location.product_location %} ausgeführt werden. Standardmäßig sind diese Dienste mit Standardgrenzwerten für CPU und Arbeitsspeicher konfiguriert, die für die meisten Instanzen funktionieren sollten. Wenn die Nutzung von {% data variables.product.prodname_actions %} in deinem Unternehmen jedoch überdurchschnittlich hoch ausfällt, musst du diese Einstellungen möglicherweise anpassen.

Wenn du feststellst, dass Aufträge nicht gestartet werden (obwohl Runner im Leerlauf vorhanden sind), oder wenn der Fortschritt des Auftrags nicht aktualisiert bzw. nicht in der Benutzeroberfläche geändert wird, kann dies daran liegen, dass die CPU- oder Arbeitsspeichergrenzwerte erreicht sind.

### 1. Überprüfen der Gesamtauslastung von CPU und Arbeitsspeicher in der Verwaltungskonsole

Öffne auf die Verwaltungskonsole, und überprüfe die Diagramme zur Gesamtauslastung von CPU und Arbeitsspeicher im Überwachungsdashboard unter „Systemintegrität“. Weitere Informationen findest du unter [Zugreifen auf das Überwachungsdashboard](/admin/enterprise-management/accessing-the-monitor-dashboard).

Wenn die allgemeine CPU-Gesamtauslastung „Systemintegrität“ bei nahezu 100 Prozent liegt oder kein freier Arbeitsspeicher übrig ist, wird {% data variables.location.product_location %} bei voller Kapazität ausgeführt und muss hochskaliert werden. Weitere Informationen findest du unter [Erhöhen von CPU- oder Arbeitsspeicherressourcen](/admin/enterprise-management/increasing-cpu-or-memory-resources).

### 2. Überprüfen der CPU- und Arbeitsspeicherauslastung von Nomad-Aufträgen in der Verwaltungskonsole

Wenn die Gesamtauslastung von CPU und Arbeitsspeicher unter „Systemintegrität“ im annehmbaren Bereich liegt, scrolle im Überwachungsdashboard nach unten zum Abschnitt „Nomad-Aufträge“, und sieh dir die Diagramme „CPU-Prozentwert“ und „Arbeitsspeichernutzung“ an.

Jeder Plot in diesen Diagrammen entspricht einem Dienst. Suche für {% data variables.product.prodname_actions %} -Dienste nach:

* `mps_frontend`
* `mps_backend`
* `token_frontend`
* `token_backend`
* `actions_frontend`
* `actions_backend`

Wenn einer dieser Dienste bei oder in der Nähe einer 100%igen CPU-Auslastung liegt oder der Speicher seinen Grenzwert fast erreicht hat (standardmäßig 2 GB), muss die Ressourcenzuordnung für diese Dienste möglicherweise erhöht werden. Notieren dir, welche der oben genannten Dienste ihren Grenzwert erreicht oder fast erreicht haben.

### 3. Erhöhen der Ressourcenzuordnung für Dienste, die ihre Grenzwerte erreicht haben

1. Melde dich mit SSH bei der Verwaltungsshell an. Weitere Informationen findest du unter [Zugreifen auf die Verwaltungsshell (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh).
1. Führe den folgenden Befehl aus, um zu sehen, welche Ressourcen für die Zuordnung verfügbar sind:

   ```shell
   nomad node status -self
   ```

   Suche in der Ausgabe den Abschnitt „Allocated Resources“ (Zugeordnete Ressourcen). Er sieht etwa folgendermaßen aus:

   ```
   Allocated Resources
   CPU              Memory          Disk
   7740/49600 MHZ   23 GiB/32 GiB   4.4 GiB/7.9 GiB
   ```

   Die Ausgabe zeigt, wie viel CPU und Arbeitsspeicher der **Gesamtsumme** **aller** Dienste zugeordnet bzw. belegt sind (linker Wert) und wie viel CPU und Arbeitsspeicher verfügbar ist (rechter Wert). Im obigen Beispiel sind 23 GiB von insgesamt 32 GiB Arbeitsspeicher bereits belegt. Dies bedeutet, dass 9 GiB Arbeitsspeicher noch belegt werden können.

   {% warning %}

   **Warnung:** Achte darauf, nicht mehr als die verfügbaren Ressourcen zuzuordnen. Andernfalls können Dienste nicht mehr gestartet werden.

   {% endwarning %}
1. Wechsle in das Verzeichnis `/etc/consul-templates/etc/nomad-jobs/actions`:

   ```shell
   cd /etc/consul-templates/etc/nomad-jobs/actions
   ```

   In diesem Verzeichnis gibt es drei Dateien, die zu den {% data variables.product.prodname_actions %} -Diensten von oben gehören:

   * `mps.hcl.ctmpl`
   * `token.hcl.ctmpl`
   * `actions.hcl.ctmpl`
1. Öffne für die Dienste, für die du einen Anpassungsbedarf ermittelt hast, die entsprechende Datei, und suche die `resources`-Gruppe, die wie folgt aussieht:

   ```
   resources {
     cpu = 512
     memory = 2048
     network {
       port "http" { }
     }
   }
   ```

   Die Werte sind für CPU-Ressourcen in MHz und für Arbeitsspeicherressourcen MB angegeben.

   Um beispielsweise die Ressourcengrenzwerte im obigen Beispiel für die CPU auf 1 GHz und für den Arbeitsspeicher 4 GB zu erhöhen, musst du die Gruppe wie folgt ändern:

   ```
   resources {
     cpu = 1024
     memory = 4096
     network {
       port "http" { }
     }
   }
   ```
1. Speichern und beenden Sie die Datei.
1. Führe `ghe-config-apply` aus, um die Änderung zu übernehmen.

    Wenn bei der Ausführung von `ghe-config-apply` eine Ausgabe wie `Failed to run nomad job '/etc/nomad-jobs/<name>.hcl'` angezeigt wird, wurden CPU- oder Arbeitsspeicherressourcen durch die Änderung wahrscheinlich überbelegt. Wenn dies der Fall ist, bearbeite die Konfigurationsdateien erneut, und senke die CPU- oder Arbeitsspeicherbelegung herab. Führe `ghe-config-apply` anschließend erneut aus.
1. Führe nach der Übernahme der Konfiguration `ghe-actions-check` aus, um zu überprüfen, ob die {% data variables.product.prodname_actions %} -Dienste funktionsfähig sind.

{% ifversion fpt or ghec or ghes %}
## Problembehandlung von Fehlern, wenn {% data variables.product.prodname_dependabot %} bestehende Workflows auslöst

{% data reusables.dependabot.beta-security-and-version-updates %}

Nachdem du {% data variables.product.prodname_dependabot %} für {% data variables.location.product_location %} eingerichtet hast, können Fehler angezeigt werden, wenn bestehende Workflows durch {% data variables.product.prodname_dependabot %}-Ereignisse ausgelöst werden.

Standardmäßig werden Ausführungen von {% data variables.product.prodname_actions %}-Workflows, die von {% data variables.product.prodname_dependabot %} aufgrund von `push`-, `pull_request`-, `pull_request_review`- oder `pull_request_review_comment`-Ereignissen ausgelöst wurden, so behandelt, als wären sie in einem Repositoryfork geöffnet worden. Im Gegensatz zu Workflows, die von anderen Akteuren ausgelöst werden, erhalten sie ein schreibgeschütztes GitHub-Token (`GITHUB_TOKEN`) und verfügen nicht über Zugriff auf Geheimnisse, die normalerweise verfügbar sind. Dies führt dazu, dass alle Workflows, die versuchen, in das Repository zu schreiben, fehlschlagen, wenn sie von {% data variables.product.prodname_dependabot %} ausgelöst wurden.

Es gibt drei Möglichkeiten, dieses Problem zu beheben:

1. Du kannst deine Workflows mit einem Ausdruck wie `if: github.actor != 'dependabot[bot]'` so aktualisieren, dass sie nicht mehr durch {% data variables.product.prodname_dependabot %} ausgelöst werden. Weitere Informationen findest du unter [Ausdrücke](/actions/learn-github-actions/expressions).
2. Du kannst deine Workflows so ändern, dass sie einen zweistufigen Prozess mit `pull_request_target` verwenden, das nicht diesen Einschränkungen unterliegt. Weitere Informationen findest du unter [Automatisieren von {% data variables.product.prodname_dependabot %} mit {% data variables.product.prodname_actions %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/automating-dependabot-with-github-actions#responding-to-events).
3. Du kannst Workflows bereitstellen, die durch den {% data variables.product.prodname_dependabot %}-Zugriff auf Geheimnisse ausgelöst werden, und es dem Term `permissions` erlauben, den Standardbereich von `GITHUB_TOKEN` zu erhöhen. Weitere Informationen findest du im Abschnitt [Bereitstellen von Workflows, die durch den {% data variables.product.prodname_dependabot %}-Zugriff auf Geheimnisse und erhöhte Berechtigungen ausgelöst werden](#providing-workflows-triggered-by-dependabot-access-to-secrets-and-increased-permissions).

### Bereitstellen von Workflows, die durch den {% data variables.product.prodname_dependabot %}-Zugriff auf Geheimnisse und erhöhte Berechtigungen ausgelöst werden

1. Melde dich mit SSH bei der Verwaltungsshell an. Weitere Informationen findest du unter [Zugreifen auf die Verwaltungsshell (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh).
1. Um die Einschränkungen für Workflows aufzuheben, die von {% data variables.product.prodname_dependabot %} für {% data variables.location.product_location %} ausgelöst werden, führe den folgenden Befehl aus.
    ``` shell
    $ ghe-config app.actions.disable-dependabot-enforcement true
    ```
1. Wende die Konfiguration an.
    ```shell
    $ ghe-config-apply
    ```
1. Kehre zu {% data variables.product.prodname_ghe_server %} zurück.

{% endif %}

{% ifversion ghes > 3.3 %}

<a name="bundled-actions"></a>

## Problembehandlung gebündelter Aktionen in {% data variables.product.prodname_actions %}

Wenn beim Installieren von {% data variables.product.prodname_actions %} in {% data variables.product.prodname_ghe_server %} der folgende Fehler zurückgegeben wird, kannst du das Problem beheben, indem du die offiziellen gebündelten Aktionen und Startworkflows installierst.

```shell
A part of the Actions setup had problems and needs an administrator to resolve.
```

Um die offiziellen gebündelten Aktionen und Startworkflows in einer bestimmten Organisation in {% data variables.product.prodname_ghe_server %} zu installieren, gehe wie folgt vor:

1. Ermittle eine Organisation, in der die offiziellen gebündelten Aktionen und Startworkflows gespeichert werden sollen. Du kannst eine neue Organisation erstellen oder eine vorhandene verwenden. 
    - Informationen zum Erstellen einer neuen Organisation findest du unter [Grundlegendes Neuerstellen einer Organisation](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch). 
    - Informationen zum Auswählen eines Namens für diese Organisation findest du unter [Reservierte Namen](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#reserved-names). 

1. Melde dich mit SSH bei der Verwaltungsshell an. Weitere Informationen findest du unter [Zugreifen auf die Verwaltungsshell (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh).
1. Um deine Organisation als Speicherort für gebündelte Aktionen festzulegen, verwende den Befehl `ghe-config` aus, indem du `ORGANIZATION` durch den Namen deiner Organisation ersetzt.
    ```shell
    $ ghe-config app.actions.actions-org ORGANIZATION
    ```
    und:
    ```shell
    $ ghe-config app.actions.github-org ORGANIZATION
    ```
1.  Um die gebündelten Aktionen zu deiner Organisation hinzuzufügen, lösche den SHA-Wert.
    ```shell
    $ ghe-config --unset 'app.actions.actions-repos-sha1sum'
    ```
1. Wende die Konfiguration an.
    ```shell
    $ ghe-config-apply
    ```

Nachdem du diese Schritte abgeschlossen hast, kannst du die Konfiguration von {% data variables.product.prodname_actions %} mithilfe des Artikels [Verwalten von Zugriffsberechtigungen für GitHub Actions in deinem Unternehmen](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#managing-access-permissions-for-github-actions-in-your-enterprise) fortsetzen.

{% endif %}
