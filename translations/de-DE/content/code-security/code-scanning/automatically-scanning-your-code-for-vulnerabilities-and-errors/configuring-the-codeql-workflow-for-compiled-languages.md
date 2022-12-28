---
title: Konfigurieren des CodeQL-Workflows für kompilierte Sprachen
shortTitle: Configure compiled languages
intro: 'Du kannst konfigurieren, wie {% data variables.product.prodname_dotcom %} mithilfe des {% data variables.code-scanning.codeql_workflow %} Code scannt, der in kompilierten Sprachen für Sicherheitsrisiken und Fehler geschrieben wurde.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permissions to a repository, you can configure {% data variables.product.prodname_code_scanning %} for that repository.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning-for-compiled-languages
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-action-for-compiled-languages
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-workflow-for-compiled-languages
  - /code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-the-codeql-workflow-for-compiled-languages
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
  - Repositories
  - C/C++
  - C#
  - Java
  - Kotlin
ms.openlocfilehash: 4c594a9ca19064da6c017155fad27b37b083e7e3
ms.sourcegitcommit: dac72908e8660cb4a347fbf73beab61034eed8c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/25/2022
ms.locfileid: '148182266'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

## Informationen zum {% data variables.code-scanning.codeql_workflow %} und kompilierten Sprachen

Um {% data variables.product.prodname_dotcom %} für das {% data variables.product.prodname_code_scanning %} deines Repositorys zu konfigurieren, musst du dem Repository einen {% data variables.product.prodname_actions %}-Workflow hinzufügen. Für {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} füge {% data variables.code-scanning.codeql_workflow %} hinzu. Weitere Informationen findest du unter [Einrichten des {% data variables.product.prodname_code_scanning %} für ein Repository](/code-security/secure-coding/setting-up-code-scanning-for-a-repository).

{% data reusables.code-scanning.edit-workflow %} Allgemeine Informationen zum Konfigurieren des {% data variables.product.prodname_code_scanning %} und zum Bearbeiten von Workflowdateien findest du unter [Konfigurieren von {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning) und [Einführung in {% data variables.product.prodname_actions %}](/actions/learn-github-actions).

##  Informationen zu „autobuild“ für {% data variables.product.prodname_codeql %}

{% data variables.product.prodname_code_scanning_capc %} funktioniert durch die Ausführung von Abfragen einer oder mehrerer Datenbanken. Jede Datenbank enthält eine Darstellung des gesamten Codes, der in einer einzelnen Sprache in deinem Repository vorliegt.   
In den kompilierten Sprachen C/C++, C#,{% ifversion codeql-go-autobuild %} Go{% endif %}{% ifversion codeql-kotlin-beta %} Kotlin, {% endif %} und Java müssen beim Auffüllen dieser Datenbank zunächst der Code kompiliert und Daten extrahiert werden. {% data reusables.code-scanning.analyze-go %}

{% data reusables.code-scanning.autobuild-compiled-languages %}

Wenn dein Workflow eine `language`-Matrix verwendet, versucht `autobuild`, jede der kompilierten Sprachen zu kompilieren, die in der Matrix aufgeführt ist. Ohne eine Matrix, versucht `autobuild`, die unterstützte kompilierte Sprache mit den meisten Quelldateien im Repository zu kompilieren. Mit Ausnahme von Go schlägt die Analyse anderer kompilierter Sprachen in deinem Repository fehl, sofern du keine expliziten Buildbefehle angibst.

{% note %}

{% ifversion ghae %} **Hinweis:** {% data reusables.actions.self-hosted-runners-software %} {% else %} **Hinweis:** Wenn du selbst gehostete Runner für {% data variables.product.prodname_actions %} verwendest, musst du möglicherweise zusätzliche Software für den `autobuild`-Prozess installieren. Wenn dein Repository zudem eine bestimmte Version eines Buildtools erfordert, musst du dieses möglicherweise manuell installieren. Weitere Informationen findest du unter [Spezifikationen für auf {% data variables.product.prodname_dotcom %} gehostete Runner](/actions/reference/specifications-for-github-hosted-runners/#supported-software).
{% endif %}

{% endnote %}

### C/C++

| Unterstütztes System | Systemname |
|----|----|
| Betriebssystem | Windows, macOS und Linux |
| Buildsystem | Windows: MSbuild und Buildskripts<br/>Linux und macOS: Autoconf, Make, CMake, qmake, Meson, Waf, SCons, Linux Kbuild und Buildskripts |

Das Verhalten des `autobuild`-Schritts variiert je nach Betriebssystem, auf dem die Extraktion ausgeführt wird. Unter Windows versucht der `autobuild`-Schritt, mit dem folgenden Ansatz automatisch eine geeignete Buildmethode für C/C++ zu erkennen:

1. Für die Projektmappe (`.sln`) oder Projektdatei (`.vcxproj`), die sich am nächsten beim Stamm befindet, wird `MSBuild.exe` aufgerufen.
Wenn `autobuild` mehrere Projektmappen oder Projektdateien mit dem gleichen (kürzesten) Abstand zum obersten Verzeichnis erkennt, versucht autobuild, alle zu kompilieren.
2. Ein Skript wird aufgerufen, das wie ein Buildskript aussieht: _build.bat_, _build.cmd_ und _build.exe_ (in dieser Reihenfolge).

Unter Linux und macOS werden die im Repository vorhandenen Dateien vom `autobuild`-Schritt überprüft, um das verwendete Buildsystem zu bestimmen:

1. Im Stammverzeichnis wird nach einem Buildsystem gesucht.
2. Wenn keines gefunden wird, werden die Unterverzeichnisse nach einem eindeutigen Verzeichnis mit einem Buildsystem für C/C++ durchsucht.
3. Ein passender Befehl wird ausgeführt, um das System zu konfigurieren. 

### C#

| Unterstütztes System | Systemname |
|----|----|
| Betriebssystem | Windows und Linux |
| Buildsystem | .NET und MSbuild sowie Buildskripts |

Der `autobuild`-Prozess versucht, mit dem folgenden Ansatz automatisch eine geeignete Buildmethode für C# zu erkennen:

1. Für die Projektmappe (`.sln`) oder Projektdatei (`.csproj`), die sich am nächsten beim Stamm befindet, wird `dotnet build` aufgerufen.
2. Für die Projektmappe oder Projektdatei, die sich am nächsten beim Stamm befindet, wird `MSbuild` (Linux) oder `MSBuild.exe` (Windows) aufgerufen.
Wenn `autobuild` mehrere Projektmappen oder Projektdateien mit dem gleichen (kürzesten) Abstand zum obersten Verzeichnis erkennt, versucht autobuild, alle zu kompilieren.
3. Ein Skript wird aufgerufen, das wie ein Buildskript aussieht: _build_ und _build.sh_ (für Linux in dieser Reihenfolge) oder _build.bat_, _build.cmd_ und _build.exe_ (für Windows in dieser Reihenfolge).

{% ifversion codeql-go-autobuild %}

### Go

| Unterstütztes System | Systemname |
|----|----|
| Betriebssystem | Windows, macOS und Linux |
| Buildsystem | Go-Module, `dep` und Glide sowie Buildskripts, einschließlich Makefiles und Ninja-Skripts |

Der `autobuild`-Prozess versucht, automatisch einen geeigneten Weg zu finden, die von einem Go-Repository benötigten Abhängigkeiten zu installieren, bevor alle `.go`-Dateien extrahiert werden:

1. Rufe `make`, `ninja`, `./build` oder `./build.sh` (in dieser Reihenfolge) auf, bis einer dieser Befehle und ein nachfolgendes `go list ./...` auch erfolgreich ist, was zeigt, dass die erforderlichen Abhängigkeiten installiert wurden.
2. Wenn keiner dieser Befehle erfolgreich war, suche nach `go.mod`, `Gopkg.toml` oder `glide.yaml` und führe entsprechend `go get` (sofern Vendoring nicht verwendet wird), `dep ensure -v` oder `glide install` aus, um zu versuchen, Abhängigkeiten zu installieren.
3. Wenn keine Konfigurationsdateien für diese Abhängigkeits-Manager gefunden werden, ordne schließlich die Repositoryverzeichnisstruktur so neu an, dass sie `GOPATH` hinzugefügt werden kann, und installiere mit `go get` Abhängigkeiten. Die Verzeichnisstruktur wird nach Abschluss der Extraktion in die Normalität zurückgesetzt.
4. Extrahiere den gesamten Go-Code im Repository, ähnlich der Ausführung von `go build ./...`.

{% endif %}

### Java {% ifversion codeql-kotlin-beta %} und Kotlin {% endif %}

| Unterstütztes System | Systemname |
|----|----|
| Betriebssystem | Windows, macOS und Linux (keine Einschränkung) |
| Buildsystem | Gradle, Maven und Ant |

Der `autobuild`-Prozess versucht, mithilfe dieser Strategie das Buildsystem für Java-Codebasen zu bestimmen:

1. Im Stammverzeichnis wird nach einer Builddatei gesucht. Eine Prüfung auf Gradle-, dann Maven-, dann Ant-Builddateien erfolgt.
2. Die erste gefundene Builddatei wird ausgeführt. Wenn sowohl Gradle- als auch Maven-Dateien vorhanden sind, wird die Gradle-Datei verwendet.
3. Andernfalls wird in direkten Unterverzeichnissen des Stammverzeichnisses nach Builddateien gesucht. Wenn nur ein Unterverzeichnis Builddateien enthält, wird die erste Datei ausgeführt, die in diesem Unterverzeichnis ermittelt wurde (mit derselben Einstellung wie für 1). Wenn mehrere Unterverzeichnisse Builddateien enthalten, wird ein Fehler gemeldet.

## Hinzufügen von Buildschritten für eine kompilierte Sprache

{% data reusables.code-scanning.autobuild-add-build-steps %} Informationen zum Bearbeiten der Workflowdatei findest du unter [Konfigurieren des {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning#editing-a-code-scanning-workflow).

Nachdem du den `autobuild`-Schritt entfernt hast, hebe die Auskommentierung für den `run`-Schritt auf, und füge für dein Repository geeignete Buildbefehle hinzu. Der `run`-Schritt des Workflows führt Befehlszeilenprogramme mithilfe der Shell des Betriebssystems aus. Du kannst diese Befehle ändern und weitere Befehle hinzufügen, um den Buildprozess anzupassen.

``` yaml
- run: |
    make bootstrap
    make release
```

Weitere Informationen zum Schlüsselwort `run` findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun).

Wenn dein Repository mehrere kompilierte Sprachen enthält, kannst du sprachspezifische Buildbefehle angeben. Wenn dein Repository z. B. C/C++-, C#- und Java-Code enthält und `autobuild` C/C++ und C# ordnungsgemäß kompilieren kann, jedoch nicht Java, kannst du nach dem `init`-Schritt die folgende Konfiguration in deinem Workflow verwenden. Hiermit werden Buildschritte für Java angegeben, während weiterhin `autobuild` für C/C++ und C# verwendet wird:

```yaml
- if: matrix.language == 'cpp' || matrix.language == 'csharp' 
  name: Autobuild
  uses: {% data reusables.actions.action-codeql-action-autobuild %}

- if: matrix.language == 'java' 
  name: Build Java
  run: |
    make bootstrap
    make release
```

Weitere Informationen zur `if`-Bedingung findest du unter [Workflowsyntax für GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsif).

Weitere Tipps und Tricks bei Buildproblemen mit `autobuild` findest du unter [Problembehandlung des {% data variables.product.prodname_codeql %}-Workflows](/code-security/secure-coding/troubleshooting-the-codeql-workflow).

Wenn du manuelle Buildschritte für kompilierte Sprachen hinzugefügt hast und {% data variables.product.prodname_code_scanning %} in deinem Repository noch immer nicht funktioniert, kontaktiere {% data variables.contact.contact_support %}.
