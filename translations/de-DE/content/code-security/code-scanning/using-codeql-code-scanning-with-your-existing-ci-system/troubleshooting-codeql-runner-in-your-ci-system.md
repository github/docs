---
title: Problembehandlung des CodeQL-Runners im CI-System
shortTitle: Troubleshoot CodeQL runner
intro: 'Wenn du Probleme mit {% data variables.code-scanning.codeql_runner %} hast, kannst du sie mithilfe dieser Tipps beheben.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-code-scanning-in-your-ci-system
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/troubleshooting-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/troubleshooting-codeql-runner-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/troubleshooting-codeql-runner-in-your-ci-system
versions:
  feature: codeql-runner-supported
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Troubleshooting
  - Integration
  - CI
ms.openlocfilehash: b241e0c01b463a46a1eb3b47b68ba0283a94609d
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161168'
---
{% data reusables.code-scanning.deprecation-codeql-runner %} {% data reusables.code-scanning.beta %} {% data reusables.code-scanning.not-available %}

## Der Befehl `init` dauert zu lange

Bevor der {% data variables.code-scanning.codeql_runner %} Code erstellen und analysieren kann, benötigt er Zugriff auf das {% data variables.product.prodname_codeql %}-Bundle, das die {% data variables.product.prodname_codeql %}-CLI und die {% data variables.product.prodname_codeql %}-Bibliotheken enthält.

Wenn Du den {% data variables.code-scanning.codeql_runner %} zum ersten Mal auf Deinem Computer verwendest, lädt der Befehl `init` das {% data variables.product.prodname_codeql %}-Bundle auf Deinen Computer herunter. Dieser Download kann einige Minuten dauern.
Das {% data variables.product.prodname_codeql %}-Bundle wird zwischen den Ausführungen zwischengespeichert, sodass, wenn Du den {% data variables.code-scanning.codeql_runner %} erneut auf demselben Computer verwendest, das {% data variables.product.prodname_codeql %}-Bundle nicht erneut heruntergeladen wird.

Um diesen automatischen Download zu vermeiden, kannst du das {% data variables.product.prodname_codeql %} auf deinen Computer herunterladen und den Pfad mithilfe des Flags `--codeql-path` des Befehls `init` angeben.

## Während des Builds wurde kein Code gefunden

Wenn der Befehl `analyze` für den {% data variables.code-scanning.codeql_runner %} mit einem Fehler `No source code was seen during the build` fehlschlägt, gibt dies an, dass {% data variables.product.prodname_codeql %} den Code nicht überwachen konnte. Es gibt mehrere Gründe für einen solchen Fehler:

1. Die automatische Spracherkennung hat eine unterstützte Sprache identifiziert, aber es gibt keinen analysierbaren Code dieser Sprache im Repository. Ein typisches Beispiel hierfür ist, dass der Spracherkennungsdienst eine Datei findet (z. B. `.h`- oder `.gyp`-Datei), die einer bestimmten Programmiersprache zugeordnet ist, aber kein ausführbarer Code im Repository vorhanden ist. Um das Problem zu lösen, kannst du die Sprachen, die du analysieren möchten, manuell definieren, indem du das Flag `--languages` des Befehls `init` verwendest. Weitere Informationen findest du unter [Konfigurieren von {% data variables.code-scanning.codeql_runner %} im CI-System](/code-security/secure-coding/configuring-codeql-runner-in-your-ci-system).

1. Du analysierst eine kompilierte Sprache ohne Verwendung des Befehls `autobuild` und führst die Buildschritte nach dem Schritt `init` selbst aus. Damit der Build funktioniert, musst Du die Umgebung so einrichten, dass der {% data variables.code-scanning.codeql_runner %} den Buildprozess überwachen kann. Der Befehl `init` generiert Anweisungen zum Exportieren der erforderlichen Umgebungsvariablen, sodass du das Skript kopieren und ausführen kannst, nachdem du den Befehl `init` ausgeführt hast.
   - Unter macOS und Linux:
     ```shell
      $ . codeql-runner/codeql-env.sh
     ```
   - Verwende unter Windows die Befehlsshell (`cmd`) oder eine Batchdatei (`.bat`):
     ```shell
     > call codeql-runner\codeql-env.bat
     ```
   - Unter Windows, mit PowerShell:
     ```shell
     > cat codeql-runner\codeql-env.sh | Invoke-Expression
     ```

   Die Umgebungsvariablen werden auch in der Datei `codeql-runner/codeql-env.json` gespeichert. Diese Datei enthält ein einzelnes JSON-Objekt, das Umgebungsvariablenschlüssel zu Werten zugeordnet. Wenn du das vom Befehl `init` generierte Skript nicht ausführen kannst, kannst du stattdessen die Daten im JSON-Format verwenden.

   {% note %}

   **Hinweis:** Wenn du das Flag `--temp-dir` des Befehls `init` verwendet hast, um ein benutzerdefiniertes Verzeichnis für temporäre Dateien anzugeben, kann der Pfad zu den `codeql-env`-Dateien unterschiedlich sein.

   {% endnote %}

1. Du analysierst eine kompilierte Sprache unter macOS ohne Verwendung des Befehls `autobuild` und führst die Buildschritte nach dem Schritt `init` selbst aus. Wenn SIP (Systemintegritätsschutz) aktiviert ist, was die Standardeinstellung für aktuelle Versionen von OSX ist, kann die Analyse fehlschlagen. Um dies zu beheben, musst du den Buildbefehl mit der Umgebungsvariable `$CODEQL_RUNNER` mit einem Präfix versehen. 
   Wenn der Buildbefehl beispielsweise lautet `cmd arg1 arg2`, solltest du `$CODEQL_RUNNER cmd arg1 arg2` ausführen.

1. Der Code wird in einem Container oder auf einem separaten Computer erstellt. Wenn Du einen containerisierten Build verwendest oder den Build auf einem anderen Computer auslagerst, stelle sicher, dass Du den {% data variables.code-scanning.codeql_runner %} im Container oder auf dem Computer ausführst, in bzw. auf dem Deine Buildaufgabe stattfindet. Weitere Informationen findest du unter [Ausführen der CodeQL-Codeüberprüfung in einem Container](/code-security/secure-coding/running-codeql-code-scanning-in-a-container).
