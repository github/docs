---
title: Konfigurieren des CodeQL-Runners in deinem CI-System
shortTitle: Configure CodeQL runner
intro: 'Du kannst konfigurieren, wie der {% data variables.code-scanning.codeql_runner %} den Code in deinem Projekt überprüft und die Ergebnisse auf {% data variables.product.prodname_dotcom %} hochlädt.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning-in-your-ci-system
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/configuring-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/configuring-codeql-runner-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-runner-in-your-ci-system
versions:
  feature: codeql-runner-supported
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Integration
  - CI
  - Repositories
  - Pull requests
  - C/C++
  - C#
  - Java
ms.openlocfilehash: 64245dd9f320947510db3e108b30c886c95b89d1
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161070'
---
{% data reusables.code-scanning.deprecation-codeql-runner %} {% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## Informationen zum Konfigurieren des {% data variables.product.prodname_codeql %}-{% data variables.product.prodname_code_scanning %} in deinem CI-System

Du kannst den {% data variables.code-scanning.codeql_runner %} verwenden, um das {% data variables.product.prodname_code_scanning %} in dein CI-System zu integrieren. Weitere Informationen findest du unter [Ausführen von {% data variables.code-scanning.codeql_runner %} im CI-System](/code-security/secure-coding/running-codeql-runner-in-your-ci-system).

Im Allgemeinen rufst du den {% data variables.code-scanning.codeql_runner %} wie folgt auf.

```shell
$ /path/to-runner/codeql-runner-OS <COMMAND> <FLAGS>
```

`/path/to-runner/` hängt davon ab, wohin du den {% data variables.code-scanning.codeql_runner %} in deinem CI-System heruntergeladen hast. `codeql-runner-OS` hängt vom verwendeten Betriebssystem ab.
Es gibt drei Versionen des {% data variables.code-scanning.codeql_runner %} für die jeweiligen Betriebssysteme: `codeql-runner-linux` (Linux), `codeql-runner-macos` (macOS) und `codeql-runner-win` (Windows). 

Um die Art anzupassen, wie der {% data variables.code-scanning.codeql_runner %} deinen Code überprüft, kannst du Flags wie `--languages` und `--queries` verwenden oder benutzerdefinierte Einstellungen in einer separaten Konfigurationsdatei angeben.

## Überprüfen von Pull Requests

Durch das Überprüfen des Codes beim Erstellen eines Pull Requests wird verhindert, dass Entwickler*innen neue Sicherheitsrisiken und Fehler in den Code einbauen.

Führe zum Überprüfen eines Pull Requests den `analyze`-Befehl aus, und verwendest du das `--ref`-Flag, um den Pull Request anzugeben. Der Verweis entspricht `refs/pull/<PR-number>/head` oder `refs/pull/<PR-number>/merge`, je nachdem, ob du den HEAD-Commit des Pull-Request-Branchs oder einen Mergecommit mit dem Basisbranch ausgecheckt hast.

```shell
$ /path/to-runner/codeql-runner-linux analyze --ref refs/pull/42/merge
```

{% note %}

**Hinweis:** Wenn du Code mit einem Drittanbietertool analysieren und die Ergebnisse als Pull-Request-Überprüfungen anzeigen möchtest, musst du den `upload`-Befehl ausführen und das `--ref`-Flag verwenden, um den Pull Request anstelle des Branchs anzugeben. Der Verweis entspricht `refs/pull/<PR-number>/head` oder `refs/pull/<PR-number>/merge`.

{% endnote %}

## Überschreiben der automatischen Spracherkennung

Der {% data variables.code-scanning.codeql_runner %} erkennt und überprüft den in den unterstützten Sprachen geschriebenen Code automatisch.

{% data reusables.code-scanning.codeql-languages-bullets %}

{% data reusables.code-scanning.specify-language-to-analyze %}

Führe den `init`-Befehl mit dem `--languages`-Flag gefolgt von einer durch Kommas getrennten Liste der Sprachschlüsselwörter aus, um die automatische Spracherkennung außer Kraft zu setzen. Die Schlüsselwörter für die unterstützten Sprachen sind {% data reusables.code-scanning.codeql-languages-keywords %}.

```shell
$ /path/to-runner/codeql-runner-linux init --languages cpp,java
```

## Ausführen zusätzlicher Abfragen

{% data reusables.code-scanning.run-additional-queries %}

{% data reusables.code-scanning.codeql-query-suites-explanation %}

Übergib eine durch Kommas getrennte Liste von Pfaden an das `--queries`-Flag des `init`-Befehls, um eine oder mehrere Abfragen hinzuzufügen. Du kannst zusätzliche Abfragen auch in einer Konfigurationsdatei angeben.

Wenn du auch für benutzerdefinierte Einstellungen eine Konfigurationsdatei verwendest und zusätzliche Abfragen mit dem `--queries`-Flag angibst, verwendet der {% data variables.code-scanning.codeql_runner %} die mit dem <nobr>`--queries`</nobr>-Flag angegebenen zusätzlichen Abfragen anstelle der Anfragen in der Konfigurationsdatei.
Wenn du eine Kombination aus den mit dem Flag und in der Konfigurationsdatei angegebenen zusätzlichen Abfragen ausführen möchtest, stelle dem an <nobr>`--queries`</nobr> übergebenen Wert das `+`-Symbol voran.
Weitere Informationen findest du unter [Verwenden einer benutzerdefinierten Konfigurationsdatei](#using-a-custom-configuration-file).

Im folgenden Beispiel wird mit dem `+`-Symbol sichergestellt, dass der {% data variables.code-scanning.codeql_runner %} die zusätzlichen Abfragen zusammen mit den in der referenzierten Konfigurationsdatei angegebenen Abfragen verwendet.

```shell
$ /path/to-runner/codeql-runner-linux init --config-file .github/codeql/codeql-config.yml 
    --queries +security-and-quality,octo-org/python-qlpack/show_ifs.ql@main
```

## Verwenden einer benutzerdefinierten Konfigurationsdatei

Du kannst benutzerdefinierte Einstellungen in einer separaten Konfigurationsdatei angeben, anstatt zusätzliche Informationen an die {% data variables.code-scanning.codeql_runner %}-Befehle zu übergeben.

Die Konfigurationsdatei ist eine YAML-Datei. Wie in den folgenden Beispielen veranschaulicht verwendet sie eine Syntax ähnlich der Workflowsyntax für {% data variables.product.prodname_actions %}. Weitere Informationen findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions). 

Verwende das `--config-file`-Flag des `init`-Befehls, um die Konfigurationsdatei anzugeben. Der Wert von <nobr>`--config-file`</nobr> entspricht dem Pfad zur Konfigurationsdatei, die du verwenden möchtest. In diesem Beispiel wird die Konfigurationsdatei _.github/codeql/codeql-config.yml_ geladen.

```shell
$ /path/to-runner/codeql-runner-linux init --config-file .github/codeql/codeql-config.yml
```

{% data reusables.code-scanning.custom-configuration-file %}

### Beispielkonfigurationsdateien

{% data reusables.code-scanning.example-configuration-files %}

## Konfigurieren von {% data variables.product.prodname_code_scanning %} für kompilierte Sprachen

Für die kompilierten Sprachen C/C++, C#{% ifversion codeql-go-autobuild %}, Go{% endif %} und Java erstellt {% data variables.product.prodname_codeql %} den Code, bevor er analysiert wird. {% data reusables.code-scanning.analyze-go %}

Für viele gängige Buildsysteme kann der {% data variables.code-scanning.codeql_runner %} den Code automatisch kompilieren. Führe `autobuild` zwischen den Schritten `init` und `analyze` aus, um den Code automatisch zu kompilieren. Beachte, dass du zunächst möglicherweise manuell ein Buildtool installieren musst, wenn dein Repository eine bestimmte Version dieses Buildtools erfordert. 

Der `autobuild`-Prozess versucht immer nur _eine_ kompilierte Sprache für ein Repository zu kompilieren. Die automatisch für die Analyse ausgewählte Sprache ist die Sprache mit den meisten Dateien. Verwende das `--language`-Flag des `autobuild`-Befehls, wenn du eine Sprache explizit auswählen möchtest.

```shell
$ /path/to-runner/codeql-runner-linux autobuild --language csharp
```

Wenn der `autobuild`-Befehl deinen Code nicht kompilieren kann, kannst du die Buildschritte zwischen den Schritten `init` und `analyze` selbst ausführen. Weitere Informationen findest du unter [Ausführen von {% data variables.code-scanning.codeql_runner %} im CI-System](/code-security/secure-coding/running-codeql-runner-in-your-ci-system#compiled-language-example).

## Hochladen von {% data variables.product.prodname_code_scanning %}-Daten in {% data variables.product.prodname_dotcom %}

Wenn du den `analyze`-Befehl ausführst, lädt der {% data variables.code-scanning.codeql_runner %} standardmäßig Ergebnisse des {% data variables.product.prodname_code_scanning %} hoch. Mithilfe des `upload`-Befehls kannst du SARIF-Dateien auch separat hochladen.

Nachdem du die Daten hochgeladen hast, zeigt {% data variables.product.prodname_dotcom %} die Warnungen in deinem Repository an. 
- Wenn du die Daten in einen Pull Request hochgeladen hast (z. B. `--ref refs/pull/42/merge` oder `--ref refs/pull/42/head`), werden die Ergebnisse als Warnungen in einer Pull-Request-Überprüfung angezeigt. Weitere Informationen findest du unter [Selektieren von Codeüberprüfungswarnungen in Pull Requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests).
- Wenn du Daten in einen Branch hochgeladen hast (z. B. `--ref refs/heads/my-branch`), werden die Ergebnisse auf der Registerkarte **Sicherheit** für dein Repository angezeigt. Weitere Informationen findest du unter [Verwalten von Codeüberprüfungswarnungen für dein Repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository).

## {% data variables.code-scanning.codeql_runner %}-Befehlsreferenz

Der {% data variables.code-scanning.codeql_runner %} unterstützt die folgenden Befehle und Flags.

### `init`

Initialisiert den {% data variables.code-scanning.codeql_runner %} und erstellt eine {% data variables.product.prodname_codeql %}-Datenbank für jede zu analysierende Sprache.

| Flag | Erforderlich | Eingabewert |
| ---- |:--------:| ----------- |
| `--repository` | ✓ | Name des zu initialisierenden Repositorys |
| `--github-url` | ✓ | URL der {% data variables.product.prodname_dotcom %}-Instanz, in der dein Repository gehostet wird |
| <nobr>`--github-auth-stdin`</nobr> | ✓ | Liest das {% data variables.product.prodname_github_apps %}-Token oder {% data variables.product.pat_generic %} aus der Standardeingabe. |
| `--languages` | | Durch Kommas getrennte Liste der zu analysierenden Sprachen. Der {% data variables.code-scanning.codeql_runner %} erkennt und analysiert standardmäßig alle unterstützten Sprachen im Repository. |
| `--queries` | | Durch Kommas getrennte Liste zusätzlicher Abfragen, die ausgeführt werden sollen, zusätzlich zur Standardsammlung von Sicherheitsabfragen. Hiermit wird die `queries`-Einstellung in der benutzerdefinierten Konfigurationsdatei überschrieben. |
| `--config-file` | | Pfad zur benutzerdefinierten Konfigurationsdatei |
| `--codeql-path` | | Pfad zu einer Kopie der ausführbaren Datei der {% data variables.product.prodname_codeql %}-CLI, die verwendet werden soll. Der {% data variables.code-scanning.codeql_runner %} lädt standardmäßig eine Kopie herunter. |
| `--temp-dir` | | Verzeichnis, in dem temporäre Dateien gespeichert werden. Der Standardwert lautet `./codeql-runner`. |
| `--tools-dir` | | Verzeichnis, in dem {% data variables.product.prodname_codeql %}-Tools und andere Dateien zwischen Ausführungen gespeichert werden. Die Standardeinstellung ist ein Unterverzeichnis des Stammverzeichnisses. |
| <nobr>`--checkout-path`</nobr> | | Pfad zum Check-Out deines Repositorys. Die Standardeinstellung ist das aktuelle Arbeitsverzeichnis. | 
| `--debug` | | Keine. Gibt eine ausführlichere Ausgabe aus. |
| <nobr>`--trace-process-name`</nobr> | | Erweitert, nur Windows. Name des Prozesses, in den ein Windows-Tracer dieses Prozesses injiziert wird. |
| <nobr>`--trace-process-level`</nobr> | | Erweitert, nur Windows. Anzahl der nächsthöheren Ebenen des übergeordneten Prozesses, in den ein Windows-Tracer dieses Prozesses injiziert wird. |
| `-h`, `--help` | | Keine. Zeigt Hilfe für den Befehl an. |

### `autobuild`

Versucht, den Code für die kompilierten Sprachen C/C++, C# und Java zu kompilieren. Für diese Sprachen kompiliert {% data variables.product.prodname_codeql %} den Code vor dessen Analyse. Führe `autobuild` zwischen den Schritten `init` und `analyze` aus.

| Flag | Erforderlich | Eingabewert |
| ---- |:--------:| ----------- |
| `--language` | | Zu kompilierende Sprache. Der {% data variables.code-scanning.codeql_runner %} kompiliert standardmäßig die kompilierte Sprache mit den meisten Dateien. |
| <nobr>`--temp-dir`</nobr> | | Verzeichnis, in dem temporäre Dateien gespeichert werden. Der Standardwert lautet `./codeql-runner`. |
| `--debug` | | Keine. Gibt eine ausführlichere Ausgabe aus. |
| <nobr> `-h`, `--help`</nobr> | | Keine. Zeigt Hilfe für den Befehl an. |

### `analyze`

Analysiert den Code in den {% data variables.product.prodname_codeql %}-Datenbanken und lädt Ergebnisse in {% data variables.product.product_name %} hoch.

| Flag | Erforderlich | Eingabewert |
| ---- |:--------:| ----------- |
| `--repository` | ✓ | Name des zu analysierenden Repositorys |
| `--commit` | ✓ | SHA des zu analysierenden Commits. In Git und Azure DevOps entspricht dies dem Wert von `git rev-parse HEAD`. In Jenkins entspricht dies `$GIT_COMMIT`. |
| `--ref` | ✓ | Name des zu analysierenden Verweises (z. B. `refs/heads/main` oder `refs/pull/42/merge`). In Git oder Jenkins entspricht dies dem Wert von `git symbolic-ref HEAD`. In Azure DevOps entspricht dies `$(Build.SourceBranch)`. |
| `--github-url` | ✓ | URL der {% data variables.product.prodname_dotcom %}-Instanz, in der dein Repository gehostet wird |
| <nobr>`--github-auth-stdin`</nobr> | ✓ | Liest das {% data variables.product.prodname_github_apps %}-Token oder {% data variables.product.pat_generic %} aus der Standardeingabe. |
| <nobr>`--checkout-path`</nobr> | | Pfad zum Check-Out deines Repositorys. Die Standardeinstellung ist das aktuelle Arbeitsverzeichnis.  |
| `--no-upload` | | Keine. Sorgt dafür, dass der {% data variables.code-scanning.codeql_runner %} keine Ergebnisse mehr in {% data variables.product.product_name %} hochlädt. |
| `--output-dir` | | Verzeichnis, in dem die SARIF-Ausgabedateien gespeichert werden. Die Standardeinstellung entspricht dem Verzeichnis temporärer Dateien. |
| `--ram` | | Menge des beim Ausführen von Abfragen zu verwendenden Arbeitsspeichers. Die Standardeinstellung legt fest, dass der gesamte verfügbare Arbeitsspeicher verwendet wird. |
| <nobr>`--no-add-snippets`</nobr> | | Keine. Schließt Codeausschnitte aus der SARIF-Ausgabe aus. |
| <nobr>`--category`<nobr> | | Kategorie, die in die SARIF-Ergebnisdatei für diese Analyse aufgenommen werden soll. Eine Kategorie kann verwendet werden, um mehrere Analysen für dasselbe Tool und denselben Commit zu unterscheiden, die jedoch für verschiedene Sprachen oder Teile des Codes ausgeführt werden. Dieser Wert wird in der `<run>.automationDetails.id`-Eigenschaft in SARIF v2.1.0 angezeigt. |
| `--threads` | | Anzahl der beim Ausführen von Abfragen zu verwendenden Threads. Die Standardeinstellung legt fest, dass alle verfügbaren Kerne verwendet werden. |
| `--temp-dir` | | Verzeichnis, in dem temporäre Dateien gespeichert werden. Der Standardwert lautet `./codeql-runner`. |
| `--debug` | | Keine. Gibt eine ausführlichere Ausgabe aus. |
| `-h`, `--help` | | Keine. Zeigt Hilfe für den Befehl an. |

### `upload`

Lädt SARIF-Dateien in {% data variables.product.product_name %} hoch.

{% note %}

**Hinweis:** Wenn du Code mit dem CodeQL-Runner analysierst, lädt der `analyze`-Befehl standardmäßig SARIF-Ergebnisse hoch. Du kannst den `upload`-Befehl zum Hochladen von SARIF-Ergebnissen verwenden, die von anderen Tools generiert wurden.

{% endnote %}

| Flag | Erforderlich | Eingabewert |
| ---- |:--------:| ----------- |
| `--sarif-file` | ✓ | Hochzuladende SARIF-Datei oder Verzeichnis, das mehrere SARIF-Dateien enthält |
| `--repository` | ✓ | Name des analysierten Repositorys |
| `--commit` | ✓ | SHA des analysierten Commits. In Git und Azure DevOps entspricht dies dem Wert von `git rev-parse HEAD`. In Jenkins entspricht dies `$GIT_COMMIT`. |
| `--ref` | ✓ | Name des analysierten Verweises (z. B. `refs/heads/main` oder `refs/pull/42/merge`). In Git oder Jenkins entspricht dies dem Wert von `git symbolic-ref HEAD`. In Azure DevOps entspricht dies `$(Build.SourceBranch)`. |
| `--github-url` | ✓ | URL der {% data variables.product.prodname_dotcom %}-Instanz, in der dein Repository gehostet wird |
| <nobr>`--github-auth-stdin`</nobr> | ✓ | Liest das {% data variables.product.prodname_github_apps %}-Token oder {% data variables.product.pat_generic %} aus der Standardeingabe. |
| <nobr>`--checkout-path`</nobr> | | Pfad zum Check-Out deines Repositorys. Die Standardeinstellung ist das aktuelle Arbeitsverzeichnis.  |
| `--debug` | | Keine. Gibt eine ausführlichere Ausgabe aus. |
| `-h`, `--help` | | Keine. Zeigt Hilfe für den Befehl an. |
