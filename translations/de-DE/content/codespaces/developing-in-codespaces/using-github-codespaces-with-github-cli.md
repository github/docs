---
title: GitHub Codespaces mit GitHub CLI verwenden
shortTitle: GitHub CLI
intro: 'Du kannst mit {% data variables.product.prodname_github_codespaces %} direkt über deine Befehlszeile arbeiten, indem du `gh`, die {% data variables.product.product_name %}-CLI verwendest.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - CLI
  - Developer
redirect_from:
  - /codespaces/developing-in-codespaces/using-codespaces-with-github-cli
ms.openlocfilehash: e9a268273e0a6d85a17a795f593e7bd3a7885718
ms.sourcegitcommit: 0a6e3eee6eea9b1e445aea1e4461d64cf6b63218
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163497'
---
## Informationen zu {% data variables.product.prodname_cli %} 

{% data reusables.cli.about-cli %} Weitere Informationen findest du unter [Informationen zur {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli).

Du kannst {% data variables.product.prodname_github_codespaces %} in der {% data variables.product.prodname_cli %} für Folgendes verwenden:
  - [Auflisten aller Codespaces](#list-all-of-your-codespaces)
  - [Erstellen eines neuen Codespace](#create-a-new-codespace)
  - [Beenden eines Codespace](#stop-a-codespace)
  - [Löschen eines Codespace](#delete-a-codespace)
  - [Umbenennen eines Codespaces](#rename-a-codespace)
  - [Zugreifen per SSH auf einen Codespace](#ssh-into-a-codespace)
  - [Öffnen eines Codespace in {% data variables.product.prodname_vscode %}](#open-a-codespace-in--data-variablesproductprodname_vscode-)
  - [Öffnen eines Codespaces in JupyterLab](#open-a-codespace-in-jupyterlab)
  - [Kopieren einer Datei in/aus einem Codespace](#copy-a-file-tofrom-a-codespace)
  - [Ändern von Ports in einem Codespace](#modify-ports-in-a-codespace)
  - [Zugreifen auf Codespaceprotokolle](#access-codespace-logs)
  - [Zugreifen auf Remoteressourcen](#access-remote-resources)
  - [Ändern des Computertyps für einen Codespace](#change-the-machine-type-of-a-codespace)

## Installieren der {% data variables.product.prodname_cli %}

{% data reusables.cli.cli-installation %}
 
## Verwenden der {% data variables.product.prodname_cli %}

Wenn du dies noch nicht getan hast, führe `gh auth login` aus, um dich mit deinem {% data variables.product.prodname_dotcom %}-Konto zu authentifizieren. 

Um `gh` für die Arbeit mit {% data variables.product.prodname_github_codespaces %} zu verwenden, gibst du `gh codespace SUBCOMMAND` oder den Alias `gh cs SUBCOMMAND` ein.

Beispiele für verschiedene Befehle, die du mit {% data variables.product.prodname_github_codespaces %} verwenden kannst: 

* Auflisten deiner aktuellen Codespaces, um zu überprüfen, ob du über einen Codespace für ein bestimmtes Repository verfügst:<br>
  `gh codespace list`
* Erstellen eines neuen Codespace für den erforderlichen Repositorybranch:<br>
  `gh codespace create -r github/docs -b main`
* Zugreifen per SSH auf den neuen Codespace:<br>
  `gh codespace ssh -c octocat-literate-space-parakeet-7gwrqp9q9jcx4vq`
* Weiterleiten eines Ports an deinen lokalen Computer:<br>
  `gh codespace ports forward 8000:8000 -c octocat-literate-space-parakeet-7gwrqp9q9jcx4vq`

## `gh`-Befehle für {% data variables.product.prodname_github_codespaces %}

Die folgenden Abschnitte enthalten Beispielbefehle für die verschiedenen verfügbaren Vorgänge.

Eine vollständige Referenz der `gh`-Befehle für {% data variables.product.prodname_github_codespaces %}, einschließlich Details aller verfügbaren Optionen für jeden Befehl, findest du in der Onlinehilfe zur {% data variables.product.prodname_cli %} für [gh codespace](https://cli.github.com/manual/gh_codespace). Alternativ kannst du in der Befehlszeile auch `gh codespace --help` für die allgemeine Hilfe oder `gh codespace SUBCOMMAND --help` für die Hilfe zu einem bestimmten Unterbefehl verwenden.

{% note %}

**Hinweis:** Das Flag `-c CODESPACE_NAME`, das mit vielen Befehlen verwendet wird, ist optional. Wenn du es nicht angibst, wird eine Liste von Codespaces zur Auswahl angezeigt.

{% endnote %}

### Auflisten aller Codespaces

```shell
gh codespace list
```

Die Liste enthält den eindeutigen Namen jedes Codespace, den du in anderen `gh codespace`-Befehlen verwenden kannst.

Ein Sternchen am Ende des Branchnamens für einen Codespace zeigt an, dass es in diesem Codespace Änderungen gibt, die noch nicht committet oder gepusht wurden.

### Erstellen eines neuen Codespace

```shell
gh codespace create -r OWNER/REPO_NAME [-b BRANCH]
```

Weitere Informationen findest du unter [Erstellen eines Codespaces für ein Repository](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository).

### Beenden eines Codespace

```shell
gh codespace stop -c CODESPACE-NAME
```

Weitere Informationen findest du unter [Ausführliche Erörterung von {% data variables.product.prodname_github_codespaces %}](/codespaces/getting-started/deep-dive#closing-or-stopping-your-codespace).

### Löschen eines Codespace

```shell
gh codespace delete -c CODESPACE-NAME
```

Weitere Informationen findest du unter [Löschen eines Codespace](/codespaces/developing-in-codespaces/deleting-a-codespace).

### Umbenennen eines Codespaces

```shell
gh codespace edit -c CODESPACE-NAME -d DISPLAY-NAME
```

Weitere Informationen findest du unter [Umbenennen eines Codespaces](/codespaces/customizing-your-codespace/renaming-a-codespace).

### Zugreifen per SSH auf einen Codespace

Um an deinem Terminal Befehle auf dem Remotecomputer mit dem Codespace auszuführen, kannst per SSH auf den Codespace zugreifen.

```shell
gh codespace ssh -c CODESPACE-NAME
```

{% note %}

**Hinweis**: {% data reusables.codespaces.ssh-server-installed %}

<br>Weitere Informationen zur Datei `devcontainer.json` und dem Standardcontainerimage findest du unter [Einführung in Entwicklungscontainer](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers).

{% endnote %}

{% data variables.product.prodname_github_codespaces %} kopiert deine GitHub-SSH-Schlüssel bei der Erstellung in den Codespace, um eine nahtlose Authentifizierung zu ermöglichen. Möglicherweise wirst du aufgefordert, die Passphrase für deinen SSH-Schlüssel einzugeben. Anschließend wird eine Eingabeaufforderung auf dem Remotecomputer mit dem Codespace geöffnet.

Wenn du keine SSH-Schlüssel hast, kannst du die Anweisungen in [Generieren eines neuen SSH-Schlüssels und Hinzufügen zum ssh-agent](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) verwenden.

### Öffnen eines Codespace in {% data variables.product.prodname_vscode %}

```shell
gh codespace code -c CODESPACE-NAME
```

{% data variables.product.prodname_vscode_shortname %} muss auf deinem lokalen Computer installiert sein. Weitere Informationen findest du unter [Verwenden von {% data variables.product.prodname_github_codespaces %} in {% data variables.product.prodname_vscode %}](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code).

### Öffnen eines Codespaces in JupyterLab

```shell
gh codespace jupyter -c CODESPACE-NAME
```

{% data reusables.codespaces.jupyterlab-installed-in-codespace %}

### Kopieren einer Datei in/aus einem Codespace

```shell
gh codespace cp [-r] SOURCE(S) DESTINATION
```

Verwende das Präfix `remote:` für Datei- oder Verzeichnisnamen, um anzugeben, dass sie sich im Codespace befinden. Wie beim UNIX-Befehl `cp` gibt das erste Argument die Quelle und das letzte das Ziel an. Wenn das Ziel ein Verzeichnis ist, kannst du mehrere Quellen angeben. Verwende das Flag `-r` (rekursiv), wenn eine der Quellen ein Verzeichnis ist.

Die Speicherorte von Dateien und Verzeichnissen im Codespace sind relativ zum Stammverzeichnis der Remotebenutzer*innen.

#### Beispiele

* Kopieren einer Datei vom lokalen Computer in das Verzeichnis `$HOME` eines Codespace:

   `gh codespace cp myfile.txt remote:`

* Kopieren einer Datei in das Verzeichnis, in das ein Repository in einem Codespace ausgecheckt wurde:

   `gh codespace cp myfile.txt remote:/workspaces/REPOSITORY-NAME`

* Kopieren einer Datei aus einem Codespace in das aktuelle Verzeichnis auf dem lokalen Computer:

   `gh codespace cp remote:myfile.txt .`

* Kopieren von drei lokalen Dateien in das Verzeichnis `$HOME/temp` eines Codespace:

   `gh codespace cp a1.txt a2.txt a3.txt remote:temp`

* Kopieren von drei Dateien aus einem Codespace in das aktuelle Arbeitsverzeichnis auf dem lokalen Computer:

   `gh codespace cp remote:a1.txt remote:a2.txt remote:a3.txt .`

* Kopieren eines lokalen Verzeichnisses in das Verzeichnis `$HOME` eines Codespace:

   `gh codespace cp -r mydir remote:`

* Kopieren eines Verzeichnisses aus einem Codespace auf den lokalen Computer mit Änderung des Verzeichnisnamens:

   `gh codespace cp -r remote:mydir mydir-localcopy`

Weitere Informationen zum Befehl `gh codespace cp`, einschließlich zusätzlicher Flags, die du verwenden kannst, findest du im [Leitfaden zur {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_codespace_cp).

### Ändern von Ports in einem Codespace

Du kannst einen Port in einem Codespace an einen lokalen Port weiterleiten. Der Port wird solange weitergeleitet, wie der Prozess ausgeführt wird. Um die Weiterleitung des Ports zu beenden, drückst du <kbd>STRG</kbd>+<kbd>C</kbd>.

```shell
gh codespace ports forward CODESPACE-PORT_NAME:LOCAL-PORT-NAME -c CODESPACE-NAME
```

Gib `gh codespace ports` ein, und wähle dann einen Codespace aus, um Details zu weitergeleiteten Ports anzuzeigen.

Du kannst die Sichtbarkeit eines weitergeleiteten Ports festlegen. {% data reusables.codespaces.port-visibility-settings %}

```shell
gh codespace ports visibility CODESPACE-PORT:private|org|public -c CODESPACE-NAME
```

Du kannst mit einem Befehl die Sichtbarkeit mehrerer Ports festlegen. Beispiel:

```shell
gh codespace ports visibility 80:private 3000:public 3306:org -c CODESPACE-NAME
```

Weitere Informationen findest du unter [Weiterleiten von Ports in Codespaces](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace).

### Zugreifen auf Codespaceprotokolle

Du kannst das Erstellungsprotokoll für einen Codespace anzeigen. Nachdem du diesen Befehl eingegeben hast, wirst du aufgefordert, die Passphrase für deinen SSH-Schlüssel einzugeben.

```shell
gh codespace logs -c CODESPACE-NAME
```

Weitere Informationen zum Erstellungsprotokoll findest du unter [{% data variables.product.prodname_github_codespaces %}-Protokolle](/codespaces/troubleshooting/github-codespaces-logs#creation-logs).

### Zugreifen auf Remoteressourcen 
Mit der {% data variables.product.prodname_cli %}-Erweiterung kannst du eine Brücke zwischen einem Codespace und deinem lokalen Computer erstellen, sodass der Codespace auf jede Remoteressource zugreifen kann, die über deinen Computer zugänglich ist. Weitere Informationen zur Verwendung der Erweiterung findest du unter [Verwenden von {% data variables.product.prodname_cli %} für den Zugriff auf Remoteressourcen](https://github.com/github/gh-net#codespaces-network-bridge).

{% note %}

**Hinweis**: Die {% data variables.product.prodname_cli %}-Erweiterung liegt derzeit als Betaversion vor und kann sich noch ändern. 

{% endnote %}

### Ändern des Computertyps für einen Codespace

```shell
gh codespace edit -m MACHINE-TYPE-NAME
```

Weitere Informationen findest du auf der Registerkarte {% data variables.product.prodname_cli %} in [Ändern des Computertyps für deinen Codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace).
