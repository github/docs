---
title: Problembehandlung beim CodeQL-Workflow
shortTitle: Troubleshoot CodeQL workflow
intro: 'Wenn du Probleme mit der {% data variables.product.prodname_code_scanning %} hast, kannst du sie mit diesen Tipps beheben.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-the-codeql-workflow
  - /code-security/secure-coding/troubleshooting-the-codeql-workflow
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/troubleshooting-the-codeql-workflow
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Actions
  - Troubleshooting
  - Repositories
  - Pull requests
  - C/C++
  - C#
  - Java
ms.openlocfilehash: 4cbf57959776fee375eef2ea08778bf4c66b6324
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161191'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.not-available %}

{% ifversion ghes or ghae %} {% note %}

**Hinweis:** In diesem Artikel werden die Features beschrieben, die mit der Version der CodeQL-Aktion und dem zugehörigen CodeQL-CLI-Bundle im ursprünglichen Release dieser Version von {% data variables.product.product_name %} verfügbar sind. Wenn dein Unternehmen eine neuere Version der CodeQL-Aktion verwendet, findest du Informationen zu den neuesten Features unter [{% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/troubleshooting-the-codeql-workflow). {% ifversion not ghae %} Informationen zur Verwendung der neuesten Version findest du unter [Konfigurieren der Codeüberprüfung für deine Appliance](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access).{% endif %}

{% endnote %} {% endif %}

## Erstellen von detaillierten Protokollen für das Debuggen

Um eine detailliertere Protokollierungsausgabe zu generieren, kannst du die Schrittdebugprotokollierung aktivieren. Weitere Informationen findest du unter [Aktivieren der Debugprotokollierung](/actions/managing-workflow-runs/enabling-debug-logging#enabling-step-debug-logging).

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}

## Erstellen von {% data variables.product.prodname_codeql %}-Debugartefakten

Du kannst Artefakte abrufen, um {% data variables.product.prodname_codeql %} zu debuggen.
Die Debugartefakte werden in den Workflow hochgeladen und als Artefakt namens `debug-artifacts` ausgeführt. Die Daten enthalten die {% data variables.product.prodname_codeql %}-Protokolle, {% data variables.product.prodname_codeql %}-Datenbanken und alle SARIF-Dateien, die vom Workflow erstellt wurden.

Diese Artefakte helfen beim Debuggen von Problemen mit {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}. Wenn du den GitHub-Support kontaktierst, kannst du diese Daten anfordern.

{% endif %}

{% ifversion codeql-action-debug-logging %}

### Erstellen von {% data variables.product.prodname_codeql %}-Debugartefakten durch erneutes Ausführen von Aufträgen mit aktivierter Debugprotokollierung

Du kannst {% data variables.product.prodname_codeql %}-Debugartefakte erstellen, indem du die Debugprotokollierung aktivierst und die Aufträge erneut ausführst. Weitere Informationen zum erneuten Ausführen von {% data variables.product.prodname_actions %}-Workflows und -Aufträgen findest du unter [Erneutes Ausführen von Workflows und Aufträgen](/actions/managing-workflow-runs/re-running-workflows-and-jobs).

Du musst sicherstellen, dass du **Debugprotokollierung aktivieren** auswählst. Dadurch werden die Runnerdiagnoseprotokollierung und die schrittweise Debugprotokollierung für die Ausführung aktiviert. Du kannst dann `debug-artifacts` für weitere Untersuchungen herunterladen. Du musst die Workflowdatei nicht ändern, wenn du {% data variables.product.prodname_codeql %}-Debugartefakte durch erneutes Ausführen von Aufträgen erstellst.

{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}

### Erstellen von {% data variables.product.prodname_codeql %}-Debugartefakten mithilfe eines Workflow-Flags

Du kannst {% data variables.product.prodname_codeql %}-Debugartefakte mithilfe eines Flags in deinem Workflow erstellen. Ändere dazu den `init`-Schritt deiner {% data variables.code-scanning.codeql_workflow %}-Datei, und lege `debug: true` fest.

```yaml
- name: Initialize CodeQL
  uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    debug: true
```

{% endif %}

## Fehler bei einem automatischen Build für eine kompilierte Sprache

Führe die folgenden Problembehandlungsschritte aus, wenn bei einem automatischen Build von Code für eine kompilierte Sprache in deinem Projekt ein Fehler auftritt.

- Entferne den `autobuild`-Schritt aus deinem {% data variables.product.prodname_code_scanning %}-Workflow, und füge bestimmte Buildschritte hinzu. Informationen zum Bearbeiten des Workflows findest du unter [Konfigurieren des {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning#editing-a-code-scanning-workflow). Weitere Informationen zum Ersetzen des `autobuild`-Schritts findest du unter [Konfigurieren des {% data variables.product.prodname_codeql %}-Workflows für kompilierte Sprachen](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language).

- Wenn dein Workflow die zu analysierenden Sprachen nicht explizit angibt, erkennt {% data variables.product.prodname_codeql %} implizit die unterstützten Sprachen in deiner Codebasis. Bei dieser Konfiguration mit den kompilierten Sprachen C/C++, C#{% ifversion codeql-go-autobuild %}, Go{% endif %} und Java analysiert {% data variables.product.prodname_codeql %} nur die Sprache mit den meisten Quelldateien. Bearbeite den Workflow, und füge eine Matrix mit den Sprachen hinzu, die du analysieren möchtest. Beim CodeQL-Standardanalyseworkflow wird eine solche Matrix verwendet.

  Die folgenden Extrakte aus einem Workflow zeigen, wie du eine Matrix innerhalb der Auftragsstrategie verwenden kannst, um Sprachen anzugeben, und verweise dann auf jede Sprache innerhalb des Schritts "{% data variables.product.prodname_codeql %}":

  ```yaml
  jobs:
    analyze:
      permissions:
        security-events: write
        actions: read
      ...
      strategy:
        fail-fast: false
        matrix:
          language: ['csharp', 'cpp', 'javascript']

      steps:
      ...
        - name: Initialize {% data variables.product.prodname_codeql %}
          uses: {% data reusables.actions.action-codeql-action-init %}
          with:
            languages: {% raw %}${{ matrix.language }}{% endraw %}
  ```

  Weitere Informationen zum Bearbeiten des Workflows findest du unter [Konfigurieren der Codeüberprüfung](/code-security/secure-coding/configuring-code-scanning).

## Während des Builds wurde kein Code gefunden

Wenn bei deinem Workflow der Fehler `No source code was seen during the build` oder `The process '/opt/hostedtoolcache/CodeQL/0.0.0-20200630/x64/codeql/codeql' failed with exit code 32` auftritt, weist dies darauf hin, dass {% data variables.product.prodname_codeql %} deinen Code nicht überwachen konnte. Es gibt mehrere Gründe für einen solchen Fehler:

1. Das Repository darf keinen Quellcode enthalten, der in Sprachen geschrieben ist, die von {% data variables.product.prodname_codeql %} unterstützt werden. Überprüfe die Liste der unterstützten Sprachen, und entferne den {% data variables.product.prodname_codeql %}-Workflow, wenn dies der Fall sein sollte. Weitere Informationen findest du unter [Informationen zu Codeüberprüfungswarnungen mit CodeQL](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql).

1. Die automatische Spracherkennung hat eine unterstützte Sprache identifiziert, aber es gibt keinen analysierbaren Code dieser Sprache im Repository. Ein typisches Beispiel hierfür ist, dass der Spracherkennungsdienst eine Datei findet (z. B. `.h`- oder `.gyp`-Datei), die einer bestimmten Programmiersprache zugeordnet ist, aber kein ausführbarer Code im Repository vorhanden ist. Um das Problem zu beheben, kannst du die zu analysierenden Sprachen manuell definieren, indem du die Liste der Sprachen in der `language`-Matrix aktualisierst. Bei der folgenden Konfiguration wird beispielsweise nur Go und JavaScript analysiert.

  ```yaml
  strategy:
    fail-fast: false
    matrix:
      # Override automatic language detection by changing the list below.
      # Supported options are listed in a comment in the default workflow.
      language: ['go', 'javascript']
  ```

   Weitere Informationen findest du im Workflowextrakt unter [Fehler bei einem automatischen Build für eine kompilierte Sprache](#automatic-build-for-a-compiled-language-fails) weiter oben.

1. Dein {% data variables.product.prodname_code_scanning %}-Workflow analysiert eine kompilierte Sprache (C, C++, C#{% ifversion codeql-go-autobuild %}, Go{% endif %} oder Java), aber der Code wurde nicht kompiliert. Standardmäßig enthält der {% data variables.product.prodname_codeql %}-Analyseworkflow einen `autobuild`-Schritt. Dieser Schritt stellt jedoch einen bestmöglichen Vorgang dar und ist beim Kompilieren deines Codes in Abhängigkeit deiner spezifischen Buildumgebung möglicherweise nicht erfolgreich. Bei der Kompilierung kann auch ein Fehler auftreten, wenn du den `autobuild`-Schritt entfernt und keine Buildschritte manuell eingeschlossen hast.  Weitere Informationen zum Angeben der Buildschritte findest du unter [Konfigurieren des {% data variables.product.prodname_codeql %}-Workflows für kompilierte Sprachen](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language).
1. Dein Workflow analysiert eine kompilierte Sprache (C, C++, C#{% ifversion codeql-go-autobuild %}, Go{% endif %} oder Java), aber Teile deines Builds werden zwischengespeichert, um die Leistung zu verbessern (am wahrscheinlichsten bei Buildsystemen wie Gradle oder Bazel). Da {% data variables.product.prodname_codeql %} die Aktivität des Compilers beobachtet, um die Datenflüsse in einem Repository nachvollziehen zu können, erfordert {% data variables.product.prodname_codeql %} einen vollständigen Build, um eine Analyse durchzuführen.
1. Dein Workflow analysiert eine kompilierte Sprache (C, C++, C#{% ifversion codeql-go-autobuild %}, Go{% endif %} oder Java), aber die Kompilierung erfolgt nicht zwischen den Schritten `init` und `analyze` im Workflow. {% data variables.product.prodname_codeql %} erfordert, dass dein Build zwischen diesen beiden Schritten erfolgt, um die Aktivität des Compilers beobachten und die Analyse durchführen zu können.
1. Der kompilierte Code (in C, C++, C#{% ifversion codeql-go-autobuild %}, Go{% endif %} oder Java) wurde erfolgreich kompiliert, aber {% data variables.product.prodname_codeql %} konnte die Compileraufrufe nicht erkennen. Folgende Ursachen sind am häufigsten anzutreffen:

   - Dein Buildvorgang wurde in einem separaten Container für {% data variables.product.prodname_codeql %} ausgeführt. Weitere Informationen findest du unter [Ausführen der CodeQL-Codeüberprüfung in einem Container](/code-security/secure-coding/running-codeql-code-scanning-in-a-container).
   - Beim Build wurde ein verteiltes Buildsystem außerhalb von GitHub Actions und ein Daemonprozess verwendet.
   - {% data variables.product.prodname_codeql %} kennt den von dir verwendeten spezifischen Compiler nicht.

  Bei .NET Framework-Projekten und bei C#-Projekten, für die du entweder `dotnet build` oder `msbuild` verwendest, solltest du beim Kompilieren deines Codes `/p:UseSharedCompilation=false` im `run`-Schritt deines Workflows angeben.
  
  Die folgende Konfiguration für C# übergibt das Flag beispielsweise während des ersten Buildschritts.

   ``` yaml
   - run: |
       dotnet build /p:UseSharedCompilation=false
   ```

  Wenn ein anderes Problem mit deinem spezifischen Compiler oder deiner Konfiguration auftritt, wende dich an {% data variables.contact.contact_support %}.

Weitere Informationen zum Angeben der Buildschritte findest du unter [Konfigurieren des {% data variables.product.prodname_codeql %}-Workflows für kompilierte Sprachen](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language).

{% ifversion fpt or ghes > 3.1  or ghae or ghec %}

## Die Anzahl der gescannten Codezeilen ist niedriger als erwartet

Für kompilierte Sprachen wie C/C++, C#, Go und Java überprüft {% data variables.product.prodname_codeql %} nur Dateien, die während der Analyse erstellt werden. Aus diesem Grund ist die Anzahl der gescannten Codezeilen niedriger als erwartet, wenn Teile des Quellcodes nicht ordnungsgemäß kompiliert werden. Dies kann verschiedene Ursachen haben:

1. Das {% data variables.product.prodname_codeql %}-Feature `autobuild` verwendet Heuristiken, um den Code in einem Repository zu kompilieren. Manchmal führt dieser Ansatz jedoch zu einer unvollständigen Analyse eines Repositorys. Wenn beispielsweise mehrere `build.sh`-Befehle in einem einzelnen Repository vorhanden sind, wird die Analyse möglicherweise nicht abgeschlossen, da der `autobuild`-Schritt nur einen der Befehle ausführt und daher einige Quelldateien möglicherweise nicht kompiliert werden.
1. Einige Compiler funktionieren nicht mit {% data variables.product.prodname_codeql %} und können Probleme beim Analysieren des Codes verursachen. Beispielsweise verwendet Project Lombok nicht öffentliche Compiler-APIs zum Ändern des Compilerverhaltens. Die in diesen Compileränderungen verwendeten Annahmen gelten nicht für den Java-Extractor von {% data variables.product.prodname_codeql %}, sodass der Code nicht analysiert werden kann.

Wenn bei deiner {% data variables.product.prodname_codeql %}-Analyse weniger Codezeilen als erwartet überprüft werden, gibt es verschiedene Ansätze, um sicherzustellen, dass alle erforderlichen Quelldateien kompiliert werden.

### Ersetzen des `autobuild`-Schritts

Ersetze den `autobuild`-Schritt durch dieselben Buildbefehle, die du in der Produktion verwenden würdest. Auf diese Weise wird sichergestellt, dass {% data variables.product.prodname_codeql %} genau weiß, wie die ganzen Quelldateien kompiliert werden müssen, die du überprüfen möchtest.
Weitere Informationen findest du unter [Konfigurieren des {% data variables.product.prodname_codeql %}-Workflows für kompilierte Sprachen](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language).

### Überprüfen der Kopie der Quelldateien in der {% data variables.product.prodname_codeql %}-Datenbank

Durch das Überprüfen der Kopie des Quellcodes, der in der {% data variables.product.prodname_codeql %}-Datenbank enthalten ist, kannst du möglicherweise nachvollziehen, warum einige Quelldateien nicht analysiert wurden. Ändere den `init`-Schritt deiner {% data variables.product.prodname_codeql %}-Workflowdatei, und lege `debug: true` fest, um die Datenbank über deinen Actions-Workflow abzurufen.

```yaml
- name: Initialize CodeQL
  uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    debug: true
```

Dadurch wird die Datenbank als Aktionsartefakt hochgeladen, das du auf deinen lokalen Computer herunterladen kannst. Weitere Informationen findest du unter [Speichern von Workflowartefakten](/actions/guides/storing-workflow-data-as-artifacts).

Das Artefakt enthält eine archivierte Kopie der Quelldateien namens _src.zip_, die von {% data variables.product.prodname_codeql %} überprüft wurden. Wenn du die Quellcodedateien im Repository und die Dateien in _src.zip_ vergleichst, erkennst du, welche Dateitypen fehlen. Wenn du weißt, welche Dateitypen nicht analysiert werden, ist es einfacher zu verstehen, wie du den Workflow für die {% data variables.product.prodname_codeql %}-Analyse ändern musst.

## In generiertem Code gefundene Warnungen

{% data reusables.code-scanning.alerts-found-in-generated-code %}

## Extraktionsfehler in der Datenbank

Das {% data variables.product.prodname_codeql %}-Team arbeitet ständig an kritischen Extraktionsfehlern, um sicherzustellen, dass alle Quelldateien überprüft werden. Die {% data variables.product.prodname_codeql %}-Extractors generieren während der Datenbankerstellung jedoch gelegentlich Fehler. {% data variables.product.prodname_codeql %} stellt Informationen zu Extraktionsfehlern und Warnungen bereit, die während der Datenbankerstellung in einer Protokolldatei generiert wurden.
Die Extraktionsdiagnoseinformationen geben einen Hinweis auf die allgemeine Datenbankintegrität. Die meisten Extractorfehler wirken sich nicht erheblich auf die Analyse aus. Eine kleine Anzahl von Extraktorfehlern ist normal und weist in der Regel auf einen guten Analysestatus hin.

Wenn jedoch für die überwiegende Mehrheit der während der Datenbankerstellung kompilierten Dateien Extractorfehler angezeigt werden, solltest du die Fehler genauer untersuchen, um herauszufinden, warum einige Quelldateien nicht ordnungsgemäß extrahiert wurden.

{% else %}

## Teile des Repositorys wurden nicht mithilfe von `autobuild` analysiert

Das {% data variables.product.prodname_codeql %}-Feature `autobuild` verwendet Heuristiken zum Kompilieren des Codes in einem Repository. In manchen Fällen führt dieser Ansatz jedoch zu einer unvollständigen Analyse eines Repositorys. Wenn beispielsweise mehrere `build.sh`-Befehle in einem einzelnen Repository vorhanden sind, wird die Analyse möglicherweise nicht abgeschlossen, da der `autobuild`-Schritt nur einen der Befehle ausführt. Die Lösung besteht darin, den `autobuild`-Schritt durch die Buildschritte zu ersetzen, die den gesamten Quellcode kompilieren, den du analysieren möchtest. Weitere Informationen findest du unter [Konfigurieren des {% data variables.product.prodname_codeql %}-Workflows für kompilierte Sprachen](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language).
{% endif %}

## Der Build dauert zu lange

Wenn die Ausführung deines Builds mit der {% data variables.product.prodname_codeql %}-Analyse zu lange dauert, gibt es mehrere Ansätze, um die Buildzeit zu reduzieren.

### Erhöhen des Arbeitsspeichers oder der Kerne

Wenn du selbstgehostete Runner für die Ausführung der {% data variables.product.prodname_codeql %}-Analyse verwendest, kannst du den Arbeitsspeicher oder die Anzahl der Kerne für diese Runner erhöhen.

### Verwenden von Matrixbuilds zum Parallelisieren der Analyse

Der standardmäßige {% data variables.code-scanning.codeql_workflow %} verwendet eine Matrix von Sprachen, wodurch die Analyse jeder Sprache parallel erfolgt. Wenn du die zu analysierenden Sprachen direkt im Schritt „Initialize CodeQL“ (CodeQL initialisieren) angegeben hast, erfolgt die Analyse jeder Sprache sequenziell. Um die Analyse mehrerer Sprachen zu beschleunigen, ändere deinen Workflow so, dass eine Matrix verwendet wird. Weitere Informationen findest du im Workflowextrakt unter [Fehler bei einem automatischen Build für eine kompilierte Sprache](#automatic-build-for-a-compiled-language-fails) weiter oben.

### Reduzieren der Menge an Code, der in einem einzelnen Workflow analysiert wird

Die Analysezeit ist in der Regel proportional zur Menge des analysierten Codes. Du kannst die Analysezeit reduzieren, indem du die Menge des gleichzeitig zu analysierenden Codes reduzierst. Schließe hierzu Testcode aus, oder teile die Analyse in mehrere Workflows auf, die gleichzeitig jeweils nur eine Teilmenge deines Codes analysieren.

{% data reusables.code-scanning.alerts-found-in-generated-code %}

Wenn du deine Analyse wie zuvor beschrieben in mehrere Workflows aufteilst, solltest du weiterhin mindestens einen Workflow verwenden, der nach einem `schedule` ausgeführt wird und den gesamten Codes in deinem Repository analysiert. Da {% data variables.product.prodname_codeql %} die Datenflüsse zwischen Komponenten analysiert, werden einige komplexe Sicherheitsverhaltensweisen möglicherweise nur bei einem vollständigen Build erkannt.

### Ausführung nur während eines `schedule`-Ereignisses

Wenn die Ausführung deiner Analyse während `push`- oder `pull_request`-Ereignissen noch zu langsam ist, solltest du nur eine Analyse für das `schedule`-Ereignis auslösen. Weitere Informationen findest du unter [Ereignisse](/actions/learn-github-actions/introduction-to-github-actions#events).

### Überprüfen, welche Abfragen der Workflow ausführt

Standardmäßig stehen für jede Sprache drei Hauptabfragesammlungen zur Verfügung. Wenn du den CodeQL-Datenbankbuild optimiert hast und der Prozess noch zu lang ist, kannst du die Anzahl der ausgeführten Abfragen verringern. Die Standardabfragesammlung wird automatisch ausgeführt. Sie enthält die schnellsten Sicherheitsabfragen mit den niedrigsten Raten falsch positiver Ergebnisse.

Möglicherweise werden zusätzlich zu den Standardabfragen weitere Abfragen oder Abfragesammlungen ausgeführt. Überprüfe, ob der Workflow eine zusätzliche Abfragesammlung oder zusätzliche Abfragen definiert, die mit dem `queries`-Element ausgeführt werden sollen. Du kannst die zusätzliche Abfragesammlung oder Abfragen testweise deaktivieren. Weitere Informationen findest du unter [Konfigurieren des {% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#using-queries-in-ql-packs).

{% ifversion codeql-ml-queries %} {% note %}

**Hinweis:** Wenn du die `security-extended`- oder `security-and-quality`-Abfragesuite für JavaScript ausführst, verwenden einige Abfragen experimentelle Technologie. Weitere Informationen findest du unter [Informationen zu Codeüberprüfungswarnungen](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-experimental-alerts).
{% endnote %} {% endif %}

{% ifversion fpt or ghec %}

## Ergebnisse unterscheiden sich zwischen Analyseplattformen

Wenn du Code in Python analysierst, werden möglicherweise unterschiedliche Ergebnisse angezeigt, je nachdem, ob du den {% data variables.code-scanning.codeql_workflow %} unter Linux, macOS oder Windows ausführst.

Bei den auf GitHub gehosteten Runnern, die Linux verwenden, versucht der {% data variables.code-scanning.codeql_workflow %}, Python-Abhängigkeiten zu installieren und zu analysieren, was zu weiteren Ergebnissen führen kann. Um die automatische Installation zu deaktivieren, füge dem Schritt „Initialize CodeQL“ (CodeQL initialisieren) des Workflows `setup-python-dependencies: false` hinzu. Weitere Informationen zum Konfigurieren der Analyse von Python-Abhängigkeiten findest du unter [Analysieren von Python-Abhängigkeiten](/code-security/secure-coding/configuring-code-scanning#analyzing-python-dependencies).

{% endif %}

## Fehler: „Server error“ (Serverfehler)

Führe den Workflow erneut aus, wenn bei der Ausführung eines Workflows für das {% data variables.product.prodname_code_scanning %} aufgrund eines Serverfehlers ein Fehler auftritt. Wenn das Problem weiterhin besteht, wende dich an den {% data variables.contact.contact_support %}.

## Fehler: „Out of disk“ (Nicht genügend freier Speicherplatz auf dem Datenträger) oder „Out of memory“ (Nicht genügend Arbeitsspeicher)

Bei sehr großen Projekten kann {% data variables.product.prodname_codeql %} auf dem Datenträger oder Arbeitsspeicher auf dem Läufer ausgeführt werden.
{% ifversion fpt or ghec %}Wenn dieses Problem bei einem gehosteten {% data variables.product.prodname_actions %}-Runner auftritt, wende dich an den {% data variables.contact.contact_support %}, damit das Problem untersucht werden kann.
{% else %}Versuche, den Arbeitsspeicher auf dem Runner zu erhöhen, wenn dieses Problem auftritt.{% endif %}

{% ifversion fpt or ghec %}

## Fehler 403: „Zugriff auf Ressource durch Integration nicht möglich“ bei Verwendung von {% data variables.product.prodname_dependabot %}

{% data variables.product.prodname_dependabot %} wird als nicht vertrauenswürdig betrachtet, wenn eine Workflowausführung ausgelöst wird, und der Workflow wird mit schreibgeschützten Bereichen ausgeführt. Das Hochladen von {% data variables.product.prodname_code_scanning %}-Ergebnissen für einen Branch erfordert in der Regel den `security_events: write`-Bereich. Das {% data variables.product.prodname_code_scanning %} ermöglicht jedoch immer das Hochladen von Ergebnissen, wenn das `pull_request`-Ereignis die Aktionsausführung auslöst. Aus diesem Grund wird für {% data variables.product.prodname_dependabot %}-Branches empfohlen, das `pull_request`-Ereignis anstelle des `push`-Ereignisses zu verwenden.

Ein einfacher Ansatz besteht in der Ausführung von Pushvorgängen in den Standardbranch und alle anderen wichtigen zeitintensiven Branches sowie in Pull Requests, die für diese Gruppe von Branches geöffnet werden:

```yaml
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
```

Ein alternativer Ansatz besteht darin, alle Pushvorgänge mit Ausnahme von {% data variables.product.prodname_dependabot %}-Branches auszuführen:

```yaml
on:
  push:
    branches-ignore:
      - 'dependabot/**'
  pull_request:
```

### Analyse schlägt im Standardbranch immer noch fehl

Wenn der {% data variables.code-scanning.codeql_workflow %} für einen Commit, der für den Standardbranch ausgeführt wird, weiterhin ein Fehler auftritt, musst du Folgendes überprüfen:

- Wurde der Commit von {% data variables.product.prodname_dependabot %} erstellt?
- Wurde der Pull Request, der den Commit enthält, mithilfe von `@dependabot squash and merge` gemergt?

Diese Art von Mergecommit wird von {% data variables.product.prodname_dependabot %} erstellt, weshalb alle Workflows, die für den Commit ausgeführt werden, über schreibgeschützte Berechtigungen verfügen. Wenn du das {% data variables.product.prodname_code_scanning %} und {% data variables.product.prodname_dependabot %}-Sicherheitsupdates bzw. Versionsupdates in deinem Repository aktiviert hast, solltest du die Verwendung des {% data variables.product.prodname_dependabot %}-Befehls `@dependabot squash and merge` vermeiden. Stattdessen kannst du automatisches Mergen für dein Repository aktivieren. Dies bedeutet, dass Pull Requests automatisch gemergt werden, wenn alle erforderlichen Überprüfungen erfüllt sind und Statusprüfungen bestanden wurden. Weitere Informationen zum Aktivieren des automatischen Mergens findest du unter [Automatisches Mergen eines Pull Requests](/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request#enabling-auto-merge).
{% endif %}

## Fehler: „ist keine QL-Datei, QLS-Datei, kein Verzeichnis und keine Abfragepaketspezifikation“

Dieser Fehler wird angezeigt, wenn CodeQL die benannte Abfrage, die benannte Abfragesammlung oder das benannte Abfragepaket nicht am im Workflow angeforderten Speicherort finden kann. Für diesen Fehler gibt es zwei häufige Ursachen.

- Der Workflow enthält einen Rechtschreibfehler.
- Eine Ressource, auf die der Workflow nach Pfad verweist, wurde umbenannt, gelöscht oder an einen neuen Speicherort verschoben.

Nach der Überprüfung des Speicherorts der Ressource kannst du den Workflow aktualisieren und den richtigen Speicherort angeben.

## Warnung: „Git Checkout HEAD^2 is no longer necessary“ (Git-Check-Out HEAD^2 ist nicht mehr erforderlich)

Wenn du einen alten {% data variables.product.prodname_codeql %}-Workflow verwendest, erhältst du möglicherweise die folgende Warnung in der Ausgabe von der Aktion „Initialize {% data variables.product.prodname_codeql %}“ (CodeQL initialisieren):

```
Warning: 1 issue was detected with this workflow: git checkout HEAD^2 is no longer 
necessary. Please remove this step as Code Scanning recommends analyzing the merge 
commit for best results.
```

Behebe dieses Problem, indem du die folgenden Zeilen aus dem {% data variables.product.prodname_codeql %}-Workflow entfernst. Diese Zeilen waren in den ersten Versionen des {% data variables.product.prodname_codeql %}-Workflows im Abschnitt `steps` des `Analyze`-Auftrags enthalten.

```yaml
        with:
          # We must fetch at least the immediate parents so that if this is
          # a pull request then we can checkout the head.
          fetch-depth: 2

      # If this run was triggered by a pull request event, then checkout
      # the head of the pull request instead of the merge commit.
      - run: git checkout HEAD^2
        if: {% raw %}${{ github.event_name == 'pull_request' }}{% endraw %}
```

Der überarbeitete Abschnitt `steps` des Workflows sieht wie folgt aus:

```yaml
    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}

      # Initializes the {% data variables.product.prodname_codeql %} tools for scanning.
      - name: Initialize {% data variables.product.prodname_codeql %}
        uses: {% data reusables.actions.action-codeql-action-init %}

      ...
```

Weitere Informationen zum Bearbeiten der {% data variables.product.prodname_codeql %}-Workflowdatei findest du unter [Konfigurieren des {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning#editing-a-code-scanning-workflow).
