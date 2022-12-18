---
title: Informationen zu von GitHub gehostete Runnern
shortTitle: About GitHub-hosted runners
intro: '{% data variables.product.prodname_dotcom %} bietet gehostete virtuelle Computer, um Workflows auszuführen. Der virtuelle Computer enthält eine Umgebung mit Tools, Paketen und Einstellungen, die {% data variables.product.prodname_actions %} verwenden kann.'
redirect_from:
  - /articles/virtual-environments-for-github-actions
  - /github/automating-your-workflow-with-github-actions/virtual-environments-for-github-actions
  - /github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners
  - /actions/reference/virtual-environments-for-github-hosted-runners
  - /actions/reference/software-installed-on-github-hosted-runners
  - /actions/reference/specifications-for-github-hosted-runners
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
ms.openlocfilehash: f44c5bcf8c6cc9c48a2910d2a0d371087debd158
ms.sourcegitcommit: 1668466c58f50415e8c4d3ad932d697f79fc87c7
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180685'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Überblick über von {% data variables.product.prodname_dotcom %} gehostete Runner

Runner sind die Computer, die Aufträge in einem {% data variables.product.prodname_actions %}-Workflow ausführen. Beispielsweise kann ein Runner dein Repository lokal klonen, Testsoftware installieren und dann Befehle ausführen, die deinen Code auswerten. 

{% data variables.product.prodname_dotcom %} stellt Runner bereit, mit denen du deine Aufträge ausführen kannst. Stattdessen kannst du auch [eigene Runner hosten](/actions/hosting-your-own-runners/about-self-hosted-runners). Jeder von {% data variables.product.prodname_dotcom %} gehostete Runner ist eine neue VM, die von {% data variables.product.prodname_dotcom %} mithilfe der Runneranwendung sowie weiteren vorinstallierten Tools gehostet wird und unter Ubuntu Linux, Windows oder macOS-Betriebssystemen verfügbar ist. Wenn du einen {% data variables.product.prodname_dotcom %}-gehosteten Runner verwendest, werden Computerwartung und Upgrades für dich erledigt.

{% ifversion not ghes %}

## Verwenden eines von {% data variables.product.prodname_dotcom %} gehosteten Runners

Um einen von {% data variables.product.prodname_dotcom %} gehosteten Runner zu verwenden, musst du einen Auftrag erstellen und mithilfe von `runs-on` den Typ von Runner angeben, der den Auftrag verarbeiten wird, z. B. `ubuntu-latest`, `windows-latest` oder `macos-latest`. Eine vollständige Liste aller Runnertypen findest du unter [Unterstützte Runner und Hardwareressourcen](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources).

Wenn der Auftrag beginnt, stellt {% data variables.product.prodname_dotcom %} automatisch eine neue VM für diesen Auftrag bereit. Alle Schritte eines Auftrags werden auf demselben Runner ausgeführt, damit die Aktionen in diesem Auftrag Informationen über das Dateisystem austauschen können. Du kannst Workflows direkt auf der VM oder in einem Docker-Container ausführen. Wenn der Auftrag abgeschlossen ist, wird die VM automatisch außer Betrieb genommen.

Das folgende Diagramm veranschaulicht, wie zwei Aufträge in einem Workflow auf zwei unterschiedlichen von {% data variables.product.prodname_dotcom %} gehosteten Runnern ausgeführt werden. 

![Zwei Runner verarbeiten separate Aufträge](/assets/images/help/images/overview-github-hosted-runner.png)

Der folgende Beispielworkflow weist zwei Aufträge namens `Run-npm-on-Ubuntu` und `Run-PSScriptAnalyzer-on-Windows` auf. Wenn dieser Workflow ausgelöst wird, stellt {% data variables.product.prodname_dotcom %} eine neue VM für jeden Auftrag bereit. 

- Der Auftrag namens `Run-npm-on-Ubuntu` wird auf einer Linux-VM ausgeführt, da der `runs-on:`-Wert des Auftrags `ubuntu-latest` lautet. 
- Der Auftrag namens `Run-PSScriptAnalyzer-on-Windows` wird auf einer Windows-VM ausgeführt, da der `runs-on:`-Wert des Auftrags `windows-latest` lautet. 

```yaml{:copy}
name: Run commands on different operating systems
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  Run-npm-on-Ubuntu:
    name: Run npm on Ubuntu
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
      - run: npm help

  Run-PSScriptAnalyzer-on-Windows:
    name: Run PSScriptAnalyzer on Windows
    runs-on: windows-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Install PSScriptAnalyzer module
        shell: pwsh
        run: |
          Set-PSRepository PSGallery -InstallationPolicy Trusted
          Install-Module PSScriptAnalyzer -ErrorAction Stop
      - name: Get list of rules
        shell: pwsh
        run: |
          Get-ScriptAnalyzerRule
```

Während der Auftrag ausgeführt wird, können Protokolle und Ausgabe in der Benutzeroberfläche von {% data variables.product.prodname_dotcom %} angezeigt werden:

![Auftragsausgabe auf der Actions-Benutzeroberfläche](/assets/images/help/repository/actions-runner-output.png)

{% data reusables.actions.runner-app-open-source %}

## Unterstützte Runner und Hardwareressourcen

{% ifversion actions-hosted-runners %}

{% note %}

**Hinweis**: {% data variables.product.prodname_dotcom %} bietet zudem {% data variables.actions.hosted_runner %}, die in größeren Konfigurationen verfügbar sind. Weitere Informationen findest du unter [Computerspezifikationen für {% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/using-larger-runners#machine-specs-for-larger-runners).  

{% endnote %} {% endif %}

Hardwarespezifikation für Windows- und Linux-VMs:
- CPU mit 2 Kernen (x86_64)
- 7 GB RAM
- 14 GB SSD-Speicher

Hardwarespezifikation für macOS-VMs:
- CPU mit 3 Kernen (x86_64)
- 14 GB RAM
- 14 GB SSD-Speicher

{% data reusables.actions.supported-github-runners %}

Workflowprotokolle listen den Runner auf, der zum Ausführen eines Auftrags verwendet wird. Weitere Informationen findest du unter [Aufrufen des Workflowausführungsverlaufs](/actions/managing-workflow-runs/viewing-workflow-run-history).

## Unterstützte Software

Die Softwaretools, die in {% data variables.product.prodname_dotcom %}-gehosteten Runnern enthalten sind, werden wöchentlich aktualisiert. Der Updatevorgang dauert mehrere Tage, und die Liste der vorinstallierten Software im `main`-Branch wird nach Abschluss der gesamten Bereitstellung aktualisiert.

### Vorinstallierte Software

Workflowprotokolle enthalten einen Link zu den vorinstallierten Tools für den jeweiligen Runner. Um diese Informationen im Workflowprotokoll zu finden, erweitere den Abschnitt `Set up job`. Erweiter unter diesem Abschnitt den Abschnitt `Runner Image`. Der auf `Included Software` folgende Link beschreibt die vorinstallierten Tools auf dem Runner, der den Workflow ausgeführt hat.
![Link zu installierter Software](/assets/images/actions-runner-installed-software-link.png) Weitere Informationen findest du unter [Anzeigen des Verlaufs der Workflowausführung](/actions/managing-workflow-runs/viewing-workflow-run-history).

Die Gesamtliste der enthaltenen Tools für jedes Runnerbetriebssystem findest du unter den folgenden Links:

* [Ubuntu 22.04 LTS](https://github.com/actions/runner-images/blob/main/images/linux/Ubuntu2204-Readme.md)
* [Ubuntu 20.04 LTS](https://github.com/actions/runner-images/blob/main/images/linux/Ubuntu2004-Readme.md)
* [Ubuntu 18.04 LTS](https://github.com/actions/runner-images/blob/main/images/linux/Ubuntu1804-Readme.md) (veraltet)
* [Windows Server 2022](https://github.com/actions/runner-images/blob/main/images/win/Windows2022-Readme.md)
* [Windows Server 2019](https://github.com/actions/runner-images/blob/main/images/win/Windows2019-Readme.md)
* [macOS 12](https://github.com/actions/runner-images/blob/main/images/macos/macos-12-Readme.md)
* [macOS 11](https://github.com/actions/runner-images/blob/main/images/macos/macos-11-Readme.md)
* [macOS 10.15](https://github.com/actions/runner-images/blob/main/images/macos/macos-10.15-Readme.md)

{% data variables.product.prodname_dotcom %}-gehostete Runner enthalten zusätzlich zu den oben aufgeführten Paketen die standardmäßig integrierten Tools des Betriebssystems. Ubuntu- und macOS-Runner umfassen beispielsweise `grep`, `find` und `which` sowie weitere Standardtools. 

### Verwenden vorinstallierter Software

Es wird empfohlen, Aktionen zu verwenden, um mit der Software zu interagieren, die auf Runnern installiert ist. Dieser Ansatz hat mehrere Vorteile:
- In der Regel bieten Aktionen flexiblere Funktionen wie Versionsauswahl sowie die Möglichkeit, Argumente und Parameter zu übergeben.
- Dies stellt sicher, dass die in deinem Workflow verwendeten Toolversionen unabhängig von Softwareupdates gleich bleiben.

Wenn ein Tool vorhanden ist, das du anfordern möchtest, öffne ein Issue unter [actions/runner-images](https://github.com/actions/runner-images). Dieses Repository enthält auch Ankündigungen zu allen wichtigen Softwareupdates auf Runnern.

### Installieren zusätzlicher Software

Du kannst zusätzliche Software auf von {% data variables.product.prodname_dotcom %} gehosteten Runnern installieren. Weitere Informationen findest du unter [Anpassen von von GitHub gehosteten Runnern](/actions/using-github-hosted-runners/customizing-github-hosted-runners).

## Cloudhosts, die von {% data variables.product.prodname_dotcom %} gehosteten Runnern genutzt werden

{% data variables.product.prodname_dotcom %} hostet Linux- und Windows-Runner auf den `Standard_DS2_v2`-VMs in Microsoft Azure, auf denen die Runneranwendung von {% data variables.product.prodname_actions %} installiert ist. Die Runner-Anwendung auf {% data variables.product.prodname_dotcom %}-gehosteten Runnern ist eine Fork-Kopie des Azure-Pipelines-Agenten. Bei Azure werden eingehende ICMP-Pakete werden für alle virtuellen Maschinen blockiert, so dass die Befehle ping und traceroute möglicherweise nicht funktionieren. Weitere Informationen zu den `Standard_DS2_v2`-Ressourcen findest du in der Microsoft Azure-Dokumentation unter [Dv2- und DSv2-Serie](https://docs.microsoft.com/azure/virtual-machines/dv2-dsv2-series#dsv2-series).

{% data variables.product.prodname_dotcom %} hostet macOS-Runner in der eigenen macOS-Cloud von {% data variables.product.prodname_dotcom %}.

## Workflowkontinuität

{% data reusables.actions.runner-workflow-continuity %}

Wenn die Workflowausführung erfolgreich in die Warteschlange eingereiht wurde, aber nicht innerhalb von 45 Minuten von einem {% data variables.product.prodname_dotcom %}-gehosteten Läufer verarbeitet wurde, wird die Workflowausführung in der Warteschlange verworfen.

## Administratorrechte

Die Linux- und macOS-VMs werden beide mit dem kennwortlosen Befehl `sudo` ausgeführt. Wenn du Befehle ausführen oder Tools installieren musst, die höhere Berechtigungen als die des aktuellen Benutzers erfordern, kannst du `sudo` verwenden, ohne ein Kennwort angeben zu müssen. Weitere Informationen findest du im [Sudo-Leitfaden](https://www.sudo.ws/man/1.8.27/sudo.man.html).

Die virtuellen Windows-Maschinen sind so konfiguriert, dass sie als Administratoren laufen, wobei die Benutzerkonten-Steuerung (UAC) deaktiviert ist. Weitere Informationen findest du unter [Funktionsweise der Benutzerkontensteuerung](https://docs.microsoft.com/windows/security/identity-protection/user-account-control/how-user-account-control-works) in der Windows-Dokumentation.

## IP-Adressen

{% note %}

**Hinweis**: Wenn du eine Positivliste mit IP-Adressen für dein Organisations- oder Unternehmenskonto auf {% data variables.product.prodname_dotcom %} verwendest, kannst du keine {% data variables.product.prodname_dotcom %}-gehosteten Runner verwenden, sondern benötigst stattdessen selbstgehostete Runner. Weitere Informationen findest du unter „[Informationen zu selbstgehosteten Runnern](/actions/hosting-your-own-runners/about-self-hosted-runners)“.

{% endnote %}

Um eine Liste der IP-Adressbereiche abzurufen, die {% data variables.product.prodname_actions %} für von {% data variables.product.prodname_dotcom %} gehostete Runner verwendet, kannst du die {% data variables.product.prodname_dotcom %}-REST-API verwenden. Weitere Informationen findest du im `actions`-Schlüssel in der Antwort des Endpunkts [Abrufen von GitHub-Metainformationen](/rest/reference/meta#get-github-meta-information).

Windows- und Ubuntu-Runner werden in Azure gehostet und weisen daher die gleichen IP-Adressbereiche wie Azure-Rechenzentren auf. macOS-Runner werden in der eigenen macOS-Cloud von {% data variables.product.prodname_dotcom %} gehostet.

Da es so viele IP-Adressbereiche für von {% data variables.product.prodname_dotcom %} gehostete Runner gibt, wird nicht empfohlen, diese als Positivlisten für deine internen Ressourcen zu verwenden.

Die Liste der {% data variables.product.prodname_actions %}-IP-Adressen, die von der API zurückgegeben werden, wird ein Mal pro Woche aktualisiert. 

## Dateisysteme

{% data variables.product.prodname_dotcom %} führt Aktionen und Shell-Befehle in bestimmten Verzeichnissen auf der virtuellen Maschine aus. Die Dateipfade auf virtuellen Maschinen sind nicht statisch. Verwende die Umgebungsvariablen, die {% data variables.product.prodname_dotcom %} bereitstellt, um Dateipfade für die Verzeichnisse `home`, `workspace` und `workflow` zu erstellen.

| Verzeichnis | Umgebungsvariable | BESCHREIBUNG |
|-----------|----------------------|-------------|
| `home` | `HOME` | Enthält benutzerbezogene Daten. In diesem Verzeichnis können sich beispielsweise die Anmeldeinformation aus einem Anmeldeversuch befinden. |
| `workspace` | `GITHUB_WORKSPACE` | Aktionen und Shell-Befehle werden in diesem Verzeichnis ausgeführt. Eine Aktion kann den Inhalt dieses Verzeichnisses ändern, auf den dann nachfolgende Aktionen zugreifen können. |
| `workflow/event.json` | `GITHUB_EVENT_PATH` | Die `POST`-Nutzdaten des Webhookereignisses, das den Workflow ausgelöst hat. {% data variables.product.prodname_dotcom %} schreibt dies bei jeder ausgeführten Aktion neu, sodass der Dateiinhalt zwischen den Aktionen isoliert wird.

Eine Liste der Umgebungsvariablen, die {% data variables.product.prodname_dotcom %} für jeden Workflow erstellt, findest du unter [Verwenden von Umgebungsvariablen](/github/automating-your-workflow-with-github-actions/using-environment-variables).

### Docker-Container-Dateisystem

Aktionen, die in Docker-Containern ausgeführt werden, haben statische Verzeichnisse unter dem Pfad `/github`. Wir empfehlen jedoch dringend, die Standard-Umgebungsvariablen zu verwenden, um Dateipfade in Docker-Containern zu erstellen.

In {% data variables.product.prodname_dotcom %} ist das Pfadpräfix `/github` reserviert, und es werden drei Verzeichnisse für Aktionen erstellt.

- `/github/home`
- `/github/workspace`: {% data reusables.repositories.action-root-user-required %}
- `/github/workflow`

## Weitere Informationsquellen
- [Verwalten der Abrechnung für {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions)
- Du kannst deine Aufträge mithilfe einer Matrixstrategie auf mehreren Images ausführen. Weitere Informationen findest du unter [Verwenden einer Matrix für deine Aufträge](/actions/using-jobs/using-a-matrix-for-your-jobs).

{% endif %}
