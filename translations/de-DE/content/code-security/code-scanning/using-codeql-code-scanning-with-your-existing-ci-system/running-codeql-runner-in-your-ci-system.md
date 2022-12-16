---
title: Ausführen des CodeQL-Runners im CI-System
shortTitle: Run CodeQL runner
intro: 'Du kannst mit dem {% data variables.code-scanning.codeql_runner %} {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} in einem Continuous Integration-System eines Drittanbieters durchzuführen.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/running-code-scanning-in-your-ci-system
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/running-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/running-codeql-runner-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/running-codeql-runner-in-your-ci-system
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
ms.openlocfilehash: 7e60376ed165a3af2da7f000c37d326cb33ade99
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161094'
---
<!--UI-LINK: When GitHub Enterprise Server <=3.0 doesn't have GitHub Actions set up, the Security > Code scanning alerts view links to this article.-->

{% ifversion codeql-runner-supported %}

{% data reusables.code-scanning.deprecation-codeql-runner %} {% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## Informationen zum {% data variables.code-scanning.codeql_runner %}

Du kannst das Tool {% data variables.code-scanning.codeql_runner %} zum Ausführen von {% data variables.product.prodname_code_scanning %} für Code verwenden, den du in einem CI-System (Continuous Integration) eines Drittanbieters verarbeitest. {% data reusables.code-scanning.about-code-scanning %} Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_code_scanning %} mit {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql).

In vielen Fällen ist es einfacher, {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} mit der {% data variables.product.prodname_codeql_cli %} direkt im CI-System einzurichten. 

Alternativ dazu kannst du {% data variables.product.prodname_actions %} zum Ausführen von {% data variables.product.prodname_code_scanning %} mit {% data variables.product.product_name %} verwenden. Weitere Informationen findest du unter [Einrichten von {% data variables.product.prodname_code_scanning %} für ein Repository](/code-security/secure-coding/setting-up-code-scanning-for-a-repository).

Der {% data variables.code-scanning.codeql_runner %} ist ein Befehlszeilentool, mit dem {% data variables.product.prodname_codeql %}-Analysen für einen Check-Out eines {% data variables.product.prodname_dotcom %}-Repositorys ausgeführt werden. Du fügst den Runner dem Drittanbietersystem hinzu und rufst dann den Runner auf, um Code zu analysieren und die Ergebnisse in {% data variables.product.product_name %} hochzuladen. Diese Ergebnisse werden als {% data variables.product.prodname_code_scanning %}-Warnungen im Repository angezeigt.

{% note %}

**Hinweis:** {% ifversion fpt or ghec %}
* Vom {% data variables.code-scanning.codeql_runner %} wird die {% data variables.product.prodname_codeql %}-CLI zum Analysieren von Code verwendet. Für den Runner gelten daher dieselben Lizenzbedingungen. Der Runner kann kostenlos in öffentlichen Repositorys verwendet werden, die auf {% data variables.product.prodname_dotcom_the_website %} verwaltet werden. Außerdem ist er zur Verwendung für private Repositorys verfügbar, die Kunden mit einer {% data variables.product.prodname_advanced_security %}-Lizenz gehören. Weitere Informationen findest du unter [{% data variables.product.product_name %} {% data variables.product.prodname_codeql %}-Geschäftsbedingungen](https://securitylab.github.com/tools/codeql/license) und [{% data variables.product.prodname_codeql %}-CLI](https://codeql.github.com/docs/codeql-cli/).
{% else %}
* Der {% data variables.code-scanning.codeql_runner %} ist für Kunden mit einer {% data variables.product.prodname_advanced_security %}-Lizenz verfügbar.
{% endif %} {% ifversion ghae %}
* Der {% data variables.code-scanning.codeql_runner %} darf nicht mit der {% data variables.product.prodname_codeql %}-CLI verwechselt werden. Die {% data variables.product.prodname_codeql %}-CLI ist eine Befehlszeilenschnittstelle, mit der du {% data variables.product.prodname_codeql %}-Datenbanken für Sicherheitsuntersuchungen erstellen und {% data variables.product.prodname_codeql %}-Abfragen ausführen kannst.
Weitere Informationen findest du unter [{% data variables.product.prodname_codeql_cli %}](https://codeql.github.com/docs/codeql-cli/).
{% endif %} {% endnote %}

## Herunterladen von {% data variables.code-scanning.codeql_runner %}

Du kannst den {% data variables.code-scanning.codeql_runner %} über https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/github/codeql-action/releases herunterladen. Bei einigen Betriebssystemen musst du möglicherweise Berechtigungen für die heruntergeladene Datei ändern, bevor du sie ausführen kannst.

Unter Linux:

```shell
chmod +x codeql-runner-linux
```

Unter MacOS:

```shell
chmod +x codeql-runner-macos
sudo xattr -d com.apple.quarantine codeql-runner-macos
```

Unter Windows müssen für die Datei `codeql-runner-win.exe` in der Regel keine Berechtigungen geändert werden.

## Einrichten des {% data variables.code-scanning.codeql_runner %} im CI-System

Sobald du den {% data variables.code-scanning.codeql_runner %} heruntergeladen und überprüft hast, ob er ausgeführt werden kann, solltest du den Runner für jeden CI-Server verfügbar machen, den du für {% data variables.product.prodname_code_scanning %} verwenden möchtest. Du könntest beispielsweise jeden Server so konfigurieren, dass der Runner von einem zentralen, internen Speicherort kopiert wird. Alternativ dazu könntest du die REST-API verwenden, um den Runner direkt von {% data variables.product.prodname_dotcom %} abzurufen, z. B.: 

```shell
wget https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/github/codeql-action/releases/latest/download/codeql-runner-linux
chmod +x codeql-runner-linux
```

Zusätzlich dazu benötigt jeder CI-Server Folgendes:

- Ein {% data variables.product.prodname_github_app %} oder {% data variables.product.pat_generic %} für den zu verwendenden {% data variables.code-scanning.codeql_runner %}. Du musst ein Zugriffstoken mit dem Bereich `repo` oder eine {% data variables.product.prodname_github_app %} mit der Schreibberechtigung `security_events` und den Leseberechtigungen `metadata` und `contents` verwenden. Weitere Informationen findest du unter [Kompilieren von {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps) und [Erstellen eines {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token).
- Zugriff auf das {% data variables.product.prodname_codeql %}-Bundle, das diesem Release des {% data variables.code-scanning.codeql_runner %} zugeordnet ist. Dieses Paket enthält Abfragen und Bibliotheken, die für die {% data variables.product.prodname_codeql %}-Analyse erforderlich sind, sowie die {% data variables.product.prodname_codeql %}-CLI, die intern vom Runner verwendet wird. Weitere Informationen findest du unter [{% data variables.product.prodname_codeql %}-CLI](https://codeql.github.com/docs/codeql-cli/).

Mit folgenden Optionen wird der Zugriff auf das {% data variables.product.prodname_codeql %}-Bundle bereitgestellt:

1. Gewähre den CI-Servern Zugriff auf https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/github/codeql-action, sodass das Bundle automatisch vom {% data variables.code-scanning.codeql_runner %} heruntergeladen werden kann.
1. Lade das Bundle manuell herunter, extrahiere es, speichere es mit anderen zentralen Ressourcen, und verwende das Flag <nobr>`--codeql-path`</nobr>, um den Speicherort des Bundles in Aufrufen anzugeben und so den {% data variables.code-scanning.codeql_runner %} zu initialisieren.

## Aufrufen von {% data variables.code-scanning.codeql_runner %}

Du solltest den {% data variables.code-scanning.codeql_runner %} vom Check-Out-Speicherort des Repositorys aufrufen, das du analysieren möchtest. Die beiden Hauptbefehle sind folgende:

1. `init` ist zum Initialisieren des Runners und zum Erstellen einer {% data variables.product.prodname_codeql %}-Datenbank für jede zu analysierende Sprache erforderlich. Diese Datenbanken werden durch nachfolgende Befehle gefüllt und analysiert.
1. `analyze` ist erforderlich, damit die {% data variables.product.prodname_codeql %}-Datenbanken gefüllt und analysiert und dann die Ergebnisse in {% data variables.product.product_name %} hochgeladen werden.

Für beide Befehle musst du die URL von {% data variables.product.product_name %}, den *BESITZER/NAMEN* des Repositorys und die {% data variables.product.prodname_github_apps %} oder das {% data variables.product.pat_generic %} für die Authentifizierung angeben. Du musst auch den Speicherort des CodeQL-Bundles angeben, es sei denn, der CI-Server hat Zugriff und kann das Bundle direkt aus dem Repository `github/codeql-action` herunterladen.

Du kannst konfigurieren, wo das CodeQL-Bundle vom {% data variables.code-scanning.codeql_runner %} für zukünftige Analysen auf einem Server gespeichert werden soll. Verwende dazu das Flag <nobr>`--tools-dir`</nobr>. Für den Speicherort der temporären Dateien während Analysen verwendest du das Flag <nobr>`--temp-dir`</nobr>.

Verwende zum Anzeigen der Befehlszeilenreferenz für den Runner das Flag `-h`. Wenn du beispielsweise alle Befehle auflisten möchtest, führe `codeql-runner-OS -h` aus. Wenn du alle für den Befehl `init` verfügbaren Flags auflisten möchtest, führe `codeql-runner-OS init -h` aus (`OS` variiert dabei je nach der ausführbaren Datei, die du verwendest). Weitere Informationen findest du unter [Konfigurieren von {% data variables.product.prodname_code_scanning %} im CI-System](/code-security/secure-coding/configuring-codeql-runner-in-your-ci-system#codeql-runner-command-reference).

{% data reusables.code-scanning.upload-sarif-alert-limit %}

### Einfaches Beispiel

In diesem Beispiel wird eine {% data variables.product.prodname_codeql %}-Analyse auf einem Linux-CI-Server für das Repository `octo-org/example-repo` ausgeführt, das auf `{% data variables.command_line.git_url_example %}` gehostet wird. Der Prozess ist sehr einfach, da das Repository nur Sprachen enthält, die von {% data variables.product.prodname_codeql %} direkt analysiert werden können, ohne erstellt zu werden (d. h. Go, JavaScript, Python und TypeScript).

In diesem Beispiel hat der Server Zugriff zum Herunterladen des {% data variables.product.prodname_codeql %}-Bundles direkt aus dem Repository `github/codeql-action`, sodass das Flag `--codeql-path` nicht verwendet werden muss.

1. Checke das zu analysierende Repository aus.
1. Wechsle in das Verzeichnis, in dem das Repository ausgecheckt ist.
1. Initialisiere den {% data variables.code-scanning.codeql_runner %}, und erstelle {% data variables.product.prodname_codeql %}-Datenbanken für die erkannten Sprachen.

    ```shell
    $ echo "$TOKEN" | /path/to-runner/codeql-runner-linux init --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth-stdin
    > Cleaning temp directory /srv/checkout/example-repo/codeql-runner
    > ...
    > Created CodeQL database at /srv/checkout/example-repo/codeql-runner/codeql_databases/javascript.
    ```

{% data reusables.code-scanning.codeql-runner-analyze-example %}

### Kompilierte Sprache (Beispiel)

Dieses Beispiel ähnelt dem vorherigen Beispiel, aber dieses Mal enthält das Repository Code in C/C++, C# oder Java. Zum Erstellen einer {% data variables.product.prodname_codeql %}-Datenbank für diese Sprachen muss der Build von der CLI überwacht werden. Am Ende des Initialisierungsprozesses wird vom Runner der Befehl gemeldet, den du zum Einrichten der Umgebung benötigst, bevor du den Code erstellst. Du musst diesen Befehl ausführen, bevor du den normalen CI-Buildprozess aufrufst und dann den Befehl `analyze` ausführst.

1. Checke das zu analysierende Repository aus.
1. Wechsle in das Verzeichnis, in dem das Repository ausgecheckt ist.
1. Initialisiere den {% data variables.code-scanning.codeql_runner %}, und erstelle {% data variables.product.prodname_codeql %}-Datenbanken für die erkannten Sprachen.
    ```shell
    $ echo "$TOKEN" | /path/to-runner/codeql-runner-linux init --repository octo-org/example-repo-2
        --github-url {% data variables.command_line.git_url_example %} --github-auth-stdin
    > Cleaning temp directory /srv/checkout/example-repo-2/codeql-runner
    > ...
    > CodeQL environment output to "/srv/checkout/example-repo-2/codeql-runner/codeql-env.json"
      and "/srv/checkout/example-repo-2/codeql-runner/codeql-env.sh".
      Please export these variables to future processes so that CodeQL can monitor the build, for example by running 
      ". /srv/checkout/example-repo-2/codeql-runner/codeql-env.sh".
    ```
1. Binde das Skript ein, das von der Aktion `init` generiert wird, um die Umgebung zur Überwachung des Builds einzurichten. Beachte den führenden Punkt und das Leerzeichen im folgenden Codeausschnitt.

    ```shell
    $ . /srv/checkout/example-repo-2/codeql-runner/codeql-env.sh
    ```

1. Erstellen des Codes. Unter macOS musst du den Buildbefehl mit der Umgebungsvariable `$CODEQL_RUNNER` als Präfix versehen. Weitere Informationen findest du unter [Problembehandlung für den {% data variables.code-scanning.codeql_runner %} im CI-System](/code-security/secure-coding/troubleshooting-codeql-runner-in-your-ci-system#no-code-found-during-the-build).

{% data reusables.code-scanning.codeql-runner-analyze-example %}

{% note %}

**Hinweis:** Wenn du einen containerisierten Build verwendest, musst du den {% data variables.code-scanning.codeql_runner %} in dem Container ausführen, in dem die Buildaufgabe ausgeführt wird.

{% endnote %}

## Weiterführende Themen

- [Konfigurieren von {% data variables.code-scanning.codeql_runner %} in deinem CI-System](/code-security/secure-coding/configuring-codeql-runner-in-your-ci-system)
- [Problembehandlung von {% data variables.code-scanning.codeql_runner %} in deinem CI-System](/code-security/secure-coding/troubleshooting-codeql-runner-in-your-ci-system)

{% else %}

## Informationen zum {% data variables.code-scanning.codeql_runner %}

Der {% data variables.code-scanning.codeql_runner %} ist veraltet. [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-cli-binaries/releases), Version 2.7.6 verfügt über eine vollständige Featureparität.

Informationen zum Migrieren zu {% data variables.product.prodname_codeql_cli %} findest du unter [Migrieren vom CodeQL-Runner zur CodeQL-CLI](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/migrating-from-the-codeql-runner-to-codeql-cli).

## Weiterführende Themen

- [CodeQL-Runner-Veralterung](https://github.blog/changelog/2021-09-21-codeql-runner-deprecation/) im GitHub-Blog

{% endif %}
