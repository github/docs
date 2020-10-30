---
title: Kernkonzepte für GitHub-Aktionen
shortTitle: Kernkonzepte
intro: 'Nachfolgend findest Du eine Liste der gängigen {% data variables.product.prodname_actions %}-Begriffe, die wir auf unseren Webseiten und in der {% data variables.product.prodname_actions %}-Dokumentation verwenden.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Aktion

Einzelne Aufgaben, die als Schritte zu einem Auftrag kombiniert werden. Aktionen sind der kleinste portable Baustein eines Workflows. Sie können eigene Aktionen erstellen, veröffentlichte Aktionen aus der {% data variables.product.prodname_dotcom %}-Community heranziehen und öffentliche Aktionen anpassen. Soll eine Aktion in einem Workflow verwendet werden, müssen Sie sie als Schritt einfügen.

### Artefakt

Artefakte sind die Dateien, die erstellt werden, wenn Sie Ihren Code erstellen und testen. Artefakte können beispielsweise Binär- oder Paketdateien, Testergebnisse, Screenshots oder Protokolldateien sein. Artefakte sind mit dem Workflow-Lauf verknüpft, in dem sie erstellt wurden, und können von einem anderen Auftrag verwendet oder auch bereitgestellt werden.

### Fortlaufende Integration („continuous integration“, CI)

Praktik in der Softwareentwicklung, bei der häufige Commits kleiner Codeänderungen an ein gemeinsames Repository erfolgen. Bei {% data variables.product.prodname_actions %} können Sie benutzerdefinierte CI-Workflows erstellen, die automatisierte Builds und Tests der Codes ausführen. Im Repository sehen Sie den Status Ihrer Codeänderungen sowie ausführliche Protokolle für die einzelnen Aktionen im Workflow. Die CI bedeutet eine Zeitersparnis für die Entwickler: Die CI liefert sofortiges Feedback zu Codeänderungen, sodass Bugs rascher erkannt und behoben werden können.

### Fortlaufende Bereitstellung („continuous deployment“, CD)

Die fortlaufende Bereitstellung baut auf der fortlaufenden Integration auf. Wenn neuer Code nach dem Commit die CI-Tests besteht, wird der Code automatisch in der Produktionsumgebung bereitgestellt. Mit {% data variables.product.prodname_actions %} können Sie benutzerdefinierte CD-Workflows erstellen und damit den Code aus dem Repository heraus automatisch in einer Cloud, in einem selbst gehosteten Dienst oder auf einer Plattform bereitstellen. Die CD bedeutet eine Zeitersparnis für die Entwickler: Sie automatisiert den Bereitstellungsprozess, sodass getestete, stabile Codeänderungen schneller für die Kunden bereitgestellt werden.

### Ereignis

Bestimmte Aktivität, die einen Workflow-Lauf auslöst. Die Aktivität kann beispielsweise von {% data variables.product.prodname_dotcom %} stammen, wenn ein Commit an Repository gepusht oder wenn ein Issue oder ein Pull Request erstellt wird. Mit dem Sende-Webhook des Repositorys können Sie einen Workflow außerdem so konfigurieren, dass er ausgeführt wird, wenn ein externes Ereignis eintritt.

### {% data variables.product.prodname_dotcom %}-gehostete Runner
{% data variables.product.prodname_dotcom %} hostet Linux-, Windows- und macOS-Runner. Jobs laufen in einer frischen Instanz einer virtuellen Maschine, auf der übliche Software vorinstalliert ist. {% data variables.product.prodname_dotcom %} führt alle Upgrades von {% data variables.product.prodname_dotcom %}-gehosteten Runnern durch und wartet diese auch. Du kannst die Hardwarekonfiguration von {% data variables.product.prodname_dotcom %}-gehosteten Runnern nicht anpassen. Weitere Informationen findest Du unter "[Virtuelle Umgebungen für {% data variables.product.prodname_dotcom %}-gehostete Runner](/github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)."

### Job

Eine Reihe von „Steps“ (Schritten), die auf dem gleichen Runner ausgeführt werden. Sie können die Abhängigkeitsregeln für die Ausführung der Aufträge in einer Workflow-Datei definieren. Jobs können parallel oder sequentiell ausgeführt werden, je nach Status eines vorherigen Jobs. Ein Workflow kann beispielsweise zwei sequentielle Aufträge umfassen, in denen der Code erstellt und getestet wird, wobei der Testauftrag vom Status des Build-Auftrags abhängig ist. Wenn der Build-Auftrag fehlschlägt, wird der Testauftrag nicht ausgeführt. Für {% data variables.product.prodname_dotcom %}-gehostete Runner läuft jeder Job eines Workflows in einer frischen Instanz einer virtuellen Umgebung.

### Runner

Beliebeige Maschine, auf der die {% data variables.product.prodname_actions %}-Runner-Anwendung installiert ist. Du kannst einen von {% data variables.product.prodname_dotcom %} gehosteten Runner verwenden oder Deinen eigenen Runner betreiben. Ein Runner wartet auf verfügbare Jobs. Wenn ein Runner einen Job aufgreift, führt er die Aktionen aus und meldet den Fortschritt, Protokolle und Endergebnisse zurück an {% data variables.product.prodname_dotcom %}. Runner führen immer nur einen Auftrag aus, nicht mehrere Aufträge gleichzeitig. Weitere Informationen findest Du unter "[{% data variables.product.prodname_dotcom %}-gehosteter Runner](#github-hosted-runner)" und "[Selbst-gehosteter Runner](#self-hosted-runner)."

{% note %}

**Hinweis:** {% data reusables.github-actions.runner-app-open-source %}

{% endnote %}

### Selbst-gehosteter Runner

Ein Computer, den Sie selbst verwalten und warten, auf dem die „self-hosted runner application“ (Anwenung für selbst-gehostete Runner) installiert ist. {% data reusables.github-actions.self-hosted-runner-description %} Weitere Informationenfindest Du unter „[Deinen eigenen Runner hosten](/github/automating-your-workflow-with-github-actions/hosting-your-own-runners)“.

### Schritt

Ein Step ist eine individuelle Aufgabe, die Befehle oder Aktionen ausführen kann. Ein Job konfiguriert einen oder mehrere Steps. Alle Steps in einem Job werden auf dem selben Runner ausgeführt, so dass die Aktionen in diesem Job Informationen über das Dateisystem austauschen können.

### Virtuelle Umgebung

Die virtuelle Umgebung eines {% data variables.product.prodname_dotcom %}-gehosteten Runners umfasst die Hardware-Konfiguration, das Betriebssystem und die installierte Software der virtuellen Maschine. Weitere Informationen findest Du unter "[Virtuelle Umgebungen für {% data variables.product.prodname_dotcom %}-gehostete Runner](/github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)."

### Workflow

Konfigurierbarer automatisierter Prozess, den Sie in Ihrem Repository einrichten können, um ein Projekt auf {% data variables.product.prodname_dotcom %} zu erstellen, zu testen, zu packen, freizugeben oder bereitzustellen. Workflows bestehen aus mindestens einem Auftrag und können geplant oder auch durch ein Ereignis ausgelöst werden.

### Workflow-Datei

YAML-Datei, mit der die Workflow-Konfiguration mit mindestens einem Auftrag definiert wird. Diese Datei befindet sich im Root des {% data variables.product.prodname_dotcom %}-Repositorys im Verzeichnis `.github/workflows`.

### Workflow-Lauf

Instanz des Workflows, die ausgeführt wird, wenn das vorkonfigurierte Ereignis eintritt. Sie können die Aufträge, Aktionen, Protokolle und Statusangaben für die einzelnen Workflow-Läufe einsehen.
