---
title: Installieren der CodeQL-CLI in deinem CI-System
shortTitle: Install CodeQL CLI
intro: 'Du kannst die {% data variables.product.prodname_codeql_cli %} installieren und zum Ausführen des {% data variables.product.prodname_codeql %}-{% data variables.product.prodname_code_scanning %} in einem Continuous Integration-Drittanbietersystem verwenden.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
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
  - Repositories
  - Pull requests
  - Integration
  - CI
  - SARIF
redirect_from:
  - /code-security/secure-coding/running-codeql-cli-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/running-codeql-cli-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system
ms.openlocfilehash: 3d7c7dc3451b844b33fe0b14fd07f9a18ec81b10
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884542'
---
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

## Informationen zur Verwendung der {% data variables.product.prodname_codeql_cli %} für das {% data variables.product.prodname_code_scanning %}

Du kannst die {% data variables.product.prodname_codeql_cli %} zum Ausführen von {% data variables.product.prodname_code_scanning %} von Code verwenden, den du in einem CI-System (Continuous Integration) eines Drittanbieters verarbeitest. {% data reusables.code-scanning.about-code-scanning %} Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_code_scanning %} mit {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql). Empfohlene Spezifikationen (RAM, CPU-Kerne und Datenträger) zum Ausführen der {% data variables.product.prodname_codeql %}-Analyse findest du unter [Empfohlene Hardwareressourcen zum Ausführen von {% data variables.product.prodname_codeql %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/recommended-hardware-resources-for-running-codeql).

{% data reusables.code-scanning.what-is-codeql-cli %}

Alternativ kannst du {% data variables.product.prodname_actions %} zum Ausführen von {% data variables.product.prodname_code_scanning %} mit {% data variables.product.product_name %} verwenden. Weitere Informationen zu {% data variables.product.prodname_code_scanning %} mit Aktionen findest du unter [Einrichten von {% data variables.product.prodname_code_scanning %} für ein Repository](/code-security/secure-coding/setting-up-code-scanning-for-a-repository). Eine Übersicht der Optionen für CI-Systeme findest du unter [Informationen zu CodeQL {% data variables.product.prodname_code_scanning %} in deinem CI-System](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system).

{% data reusables.code-scanning.licensing-note %}

## Herunterladen der {% data variables.product.prodname_codeql_cli %}

Du solltest das {% data variables.product.prodname_codeql %}-Paket aus https://github.com/github/codeql-action/releases herunterladen. Das Paket enthält Folgendes:

- {% data variables.product.prodname_codeql_cli %} product
- Eine kompatible Version der Abfragen und Bibliotheken von https://github.com/github/codeql
- Vorkompilierte Versionen aller im Paket enthaltenen Abfragen

{% ifversion ghes or ghae %}

{% note %} Für {% data variables.product.product_name %}{% ifversion ghes %} {{ allVersions[currentVersion].currentRelease }}{% endif %} wird die {% data variables.product.prodname_codeql_cli %}-Version {% data variables.product.codeql_cli_ghes_recommended_version %} empfohlen.
{% endnote %}

{% endif %}

Du solltest immer das {% data variables.product.prodname_codeql %}-Paket verwenden, da dadurch die Kompatibilität gewährleistet und auch eine wesentlich bessere Leistung erzielt wird als bei einem separaten Download der {% data variables.product.prodname_codeql_cli %} und dem Auschecken der {% data variables.product.prodname_codeql %}-Abfragen. Wenn du die CLI nur auf einer bestimmten Plattform ausführst, lade die entsprechende `codeql-bundle-PLATFORM.tar.gz`-Datei herunter. Alternativ kannst du `codeql-bundle.tar.gz` herunterladen. Diese Datei enthält die CLI für alle unterstützten Plattformen.

{% data reusables.code-scanning.beta-codeql-packs-cli %}

## Einrichten der {% data variables.product.prodname_codeql_cli %} in deinem CI-System

Du musst den gesamten Inhalt des {% data variables.product.prodname_codeql_cli %}-Pakets für jeden CI-Server zur Verfügung stellen, auf dem CodeQL {% data variables.product.prodname_code_scanning %}-Analysen ausgeführt werden sollen. Du kannst beispielsweise jeden Server so konfigurieren, dass das Paket von einem zentralen, internen Speicherort kopiert und extrahiert wird. Alternativ kannst du die REST-API verwenden, um das Paket direkt aus {% data variables.product.prodname_dotcom %} abzurufen. Dadurch wird sichergestellt, dass du von den neuesten Verbesserungen für Abfragen profitierst. Updates für die {% data variables.product.prodname_codeql_cli %} werden alle zwei bis drei Wochen veröffentlicht. Beispiel:

```shell
$ wget https://{% ifversion fpt or ghec %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/github/codeql-action/releases/latest/download/codeql-bundle-linux64.tar.gz
$ tar -xvzf ./codeql-bundle-linux64.tar.gz
```

Nachdem du das {% data variables.product.prodname_codeql_cli %}-Paket extrahiert hast, kannst du die ausführbare `codeql`-Datei auf dem Server ausführen:

- Indem du `/<extraction-root>/codeql/codeql` ausführst, wobei `<extraction-root>` der Ordner ist, in dem du das {% data variables.product.prodname_codeql_cli %}-Paket extrahiert hast
- Indem du `/<extraction-root>/codeql` zu deinem `PATH` hinzufügst, damit du die ausführbare Datei einfach als `codeql` ausführen kannst

## Testen des {% data variables.product.prodname_codeql_cli %}-Setups

Nachdem du das {% data variables.product.prodname_codeql_cli %}-Paket extrahiert hast, kannst du den folgenden Befehl ausführen, um zu überprüfen, ob die CLI ordnungsgemäß zum Erstellen und Analysieren von Datenbanken eingerichtet ist.

- `codeql resolve qlpacks`, wenn `/<extraction-root>/codeql` sich auf dem `PATH` befindet.
- Andernfalls `/<extraction-root>/codeql/codeql resolve qlpacks`.

**Ausschnitt aus einer erfolgreichen Ausgabe:**
```
codeql/cpp-all (/<extraction-root>/qlpacks/codeql/cpp-all/<version>)
codeql/cpp-examples (/<extraction-root>/qlpacks/codeql/cpp-examples/<version>)
codeql/cpp-queries (/<extraction-root>/qlpacks/codeql/cpp-queries/<version>)
codeql/csharp-all (/<extraction-root>/qlpacks/codeql/charp-all/<version>)
codeql/csharp-examples (/<extraction-root>/qlpacks/codeql/charp-examples/<version>)
codeql/csharp-queries (/<extraction-root>/qlpacks/codeql/charp-queries/<version>)
codeql/java-all (/<extraction-root>/qlpacks/codeql/java-all/<version>)
codeql/java-examples (/<extraction-root>/qlpacks/codeql/java-examples/<version>)
codeql/java-queries (/<extraction-root>/qlpacks/codeql/java-queries/<version>)
codeql/javascript-all (/<extraction-root>/qlpacks/codeql/javascript-all/<version>)
codeql/javascript-examples (/<extraction-root>/qlpacks/codeql/javascript-examples/<version>)
codeql/javascript-queries (/<extraction-root>/qlpacks/codeql/javascript-queries/<version>)
codeql/python-all (/<extraction-root>/qlpacks/codeql/python-all/<version>)
codeql/python-examples (/<extraction-root>/qlpacks/codeql/python-examples/<version>)
codeql/python-queries (/<extraction-root>/qlpacks/codeql/python-queries/<version>)
codeql/ruby-all (/<extraction-root>/qlpacks/codeql/ruby-all/<version>)
codeql/ruby-examples (/<extraction-root>/qlpacks/codeql/ruby-examples/<version>)
codeql/ruby-queries (/<extraction-root>/qlpacks/codeql/ruby-queries/<version>)
...
```

Du solltest überprüfen, ob die Ausgabe die erwarteten Sprachen enthält und ob der Verzeichnisspeicherort der qlpack-Dateien korrekt ist. Der Speicherort sollte sich innerhalb des extrahierten {% data variables.product.prodname_codeql_cli %}-Pakets befinden, das oben als `<extraction root>` angezeigt wird, es sei denn, du verwendest ein Check-Out von `github/codeql`. Wenn die {% data variables.product.prodname_codeql_cli %} die qlpacks für die erwarteten Sprachen nicht finden kann, solltest du überprüfen, ob du das {% data variables.product.prodname_codeql %}-Paket und nicht die eigenständige Kopie der {% data variables.product.prodname_codeql_cli %} heruntergeladen hast.

## Generieren eines Tokens zur Authentifizierung mit {% data variables.product.product_name %}

Jeder CI-Server benötigt eine {% data variables.product.prodname_github_app %} oder ein persönliches Zugriffstoken für die {% data variables.product.prodname_codeql_cli %}, um die Ergebnisse in {% data variables.product.product_name %} hochzuladen. Du musst ein Zugriffstoken oder eine {% data variables.product.prodname_github_app %} mit der Schreibberechtigung `security_events` verwenden. Wenn CI-Server bereits ein Token mit diesem Bereich zum Auschecken von Repositorys aus {% data variables.product.product_name %} nutzen, kannst du möglicherweise zulassen, dass die {% data variables.product.prodname_codeql_cli %} dasselbe Token verwendet. Andernfalls solltest du ein neues Token mit der Schreibberechtigung `security_events` erstellen und es dem Geheimnisspeicher des CI-Systems hinzufügen. Weitere Informationen findest du unter [Kompilieren von {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps) und [Erstellen eines persönlichen Zugriffstokens](/github/authenticating-to-github/creating-a-personal-access-token).

## Nächste Schritte

Du kannst nun das CI-System zum Ausführen von {% data variables.product.prodname_codeql %}-Analysen, dem Generieren von Ergebnissen und dem Hochladen in {% data variables.product.product_name %} konfigurieren, wo die Ergebnisse einem Branch oder Pull Request zugeordnet und als {% data variables.product.prodname_code_scanning %}-Warnungen angezeigt werden. Weitere Informationen findest du unter [Konfigurieren der {% data variables.product.prodname_codeql_cli %} in deinem CI-System](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system).
