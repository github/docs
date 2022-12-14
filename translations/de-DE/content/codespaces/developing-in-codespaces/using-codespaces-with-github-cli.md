---
title: Verwenden von Codespaces mit der GitHub CLI
shortTitle: GitHub CLI
intro: Du kannst mit {% data variables.product.prodname_github_codespaces %} direkt über deine Befehlszeile arbeiten, indem du `gh`, die {% data variables.product.product_name %}-CLI verwendest.
product: '{% data reusables.gated-features.codespaces %}'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
type: how_to
topics:
- Codespaces
- CLI
- Developer
ms.openlocfilehash: 3ad93a4c72d2f2fedc526b3593ad4a39597e8fc3
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 07/13/2022
ms.locfileid: "145179789"
---
## <a name="about--data-variablesproductprodname_cli-"></a>Informationen zu {% data variables.product.prodname_cli %} 

{% data reusables.cli.about-cli %} Weitere Informationen findest du unter [Informationen zur {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli).

Du kannst {% data variables.product.prodname_codespaces %} in der {% data variables.product.prodname_cli %} für Folgendes verwenden:
- [Auflisten deiner Codespaces](#list-all-of-your-codespaces)
- [Erstellen eines Codespace](#create-a-new-codespace)
- [Beenden eines Codespace](#stop-a-codespace)
- [Löschen eines Codespace](#delete-a-codespace)
- [Zugreifen per SSH auf einen Codespace](#ssh-into-a-codespace)
- [Öffnen eines Codespace in {% data variables.product.prodname_vscode %}](#open-a-codespace-in-visual-studio-code)
- [Öffnen eines Codespaces in JupyterLab](#open-a-codespace-in-jupyterlab)
- [Kopieren einer Datei in/aus einem Codespace](#copy-a-file-tofrom-a-codespace)
- [Ändern von Ports in einem Codespace](#modify-ports-in-a-codespace)
- [Zugreifen auf Codespaceprotokolle](#access-codespace-logs)

## <a name="installing--data-variablesproductprodname_cli-"></a>Installieren der {% data variables.product.prodname_cli %}

{% data reusables.cli.cli-installation %}
 
## <a name="using--data-variablesproductprodname_cli-"></a>Verwenden der {% data variables.product.prodname_cli %}

Wenn du dies noch nicht getan hast, führe `gh auth login` aus, um dich mit deinem {% data variables.product.prodname_dotcom %}-Konto zu authentifizieren. 

Um `gh` für die Arbeit mit {% data variables.product.prodname_codespaces %} zu verwenden, gibst du `gh codespace <COMMAND>` oder den Alias `gh cs <COMMAND>` ein.

Beispiele für verschiedene Befehle, die du mit {% data variables.product.prodname_github_codespaces %} verwenden kannst: 

* Auflisten deiner aktuellen Codespaces, um zu überprüfen, ob du über einen Codespace für ein bestimmtes Repository verfügst:<br>
  `gh codespace list`
* Erstellen eines neuen Codespace für den erforderlichen Repositorybranch:<br>
  `gh codespace create -r github/docs -b main`
* Zugreifen per SSH auf den neuen Codespace:<br>
  `gh codespace ssh -c mona-github-docs-v4qxrv7rfwv9w`
* Weiterleiten eines Ports an deinen lokalen Computer:<br>
  `gh codespace ports forward 8000:8000 -c mona-github-docs-v4qxrv7rfwv9w`

## <a name="gh-commands-for--data-variablesproductprodname_github_codespaces-"></a>`gh`-Befehle für {% data variables.product.prodname_github_codespaces %}

Die folgenden Abschnitte enthalten Beispielbefehle für die verschiedenen verfügbaren Vorgänge.

Eine vollständige Referenz der `gh`-Befehle für {% data variables.product.prodname_github_codespaces %}, einschließlich Details aller verfügbaren Optionen für jeden Befehl, findest du in der Onlinehilfe zur {% data variables.product.prodname_cli %} für [gh codespace](https://cli.github.com/manual/gh_codespace). Alternativ kannst du `gh codespace [<SUBCOMMAND>...] --help` auch an der Befehlszeile verwenden.

{% note %}

**Hinweis:** Das Flag `-c <em>codespace-name</em>`, das mit vielen Befehlen verwendet wird, ist optional. Wenn du es nicht angibst, wird eine Liste von Codespaces zur Auswahl angezeigt.

{% endnote %}

### <a name="list-all-of-your-codespaces"></a>Auflisten aller Codespaces

```shell
gh codespace list
```

Die Liste enthält den eindeutigen Namen jedes Codespace, den du in anderen `gh codespace`-Befehlen verwenden kannst.

### <a name="create-a-new-codespace"></a>Erstellen eines neuen Codespace

```shell
gh codespace create -r <em>owner/repository</em> [-b <em>branch</em>]
```

Weitere Informationen findest du unter [Erstellen eines Codespace](/codespaces/developing-in-codespaces/creating-a-codespace).

### <a name="stop-a-codespace"></a>Beenden eines Codespace

```shell
gh codespace stop -c <em>codespace-name</em>
```

Weitere Informationen findest du unter [Ausführliche Erörterung von Codespaces](/codespaces/getting-started/deep-dive#closing-or-stopping-your-codespace).

### <a name="delete-a-codespace"></a>Löschen eines Codespace

```shell
gh codespace delete -c <em>codespace-name</em>
```

Weitere Informationen findest du unter [Löschen eines Codespace](/codespaces/developing-in-codespaces/deleting-a-codespace).

### <a name="ssh-into-a-codespace"></a>Zugreifen per SSH auf einen Codespace

Um an deinem Terminal Befehle auf dem Remotecomputer mit dem Codespace auszuführen, kannst per SSH auf den Codespace zugreifen.

```shell
gh codespace ssh -c <em>codespace-name</em>
```

{% data variables.product.prodname_github_codespaces %} kopiert deine GitHub-SSH-Schlüssel bei der Erstellung in den Codespace, um eine nahtlose Authentifizierung zu ermöglichen. Möglicherweise wirst du aufgefordert, die Passphrase für deinen SSH-Schlüssel einzugeben. Anschließend wird eine Eingabeaufforderung auf dem Remotecomputer mit dem Codespace geöffnet.

Wenn du keine SSH-Schlüssel hast, kannst du die Anweisungen in [Generieren eines neuen SSH-Schlüssels und Hinzufügen zum ssh-agent](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) verwenden.

### <a name="open-a-codespace-in--data-variablesproductprodname_vscode-"></a>Öffnen eines Codespace in {% data variables.product.prodname_vscode %}

```shell
gh codespace code -c <em>codespace-name</em>
```

Weitere Informationen findest du unter [Verwenden von {% data variables.product.prodname_codespaces %} in {% data variables.product.prodname_vscode %}](/codespaces/developing-in-codespaces/using-codespaces-in-visual-studio-code).

### <a name="open-a-codespace-in-jupyterlab"></a>Öffnen eines Codespaces in JupyterLab

```shell
gh codespace jupyter -c <em>codespace-name</em>
```

### <a name="copy-a-file-tofrom-a-codespace"></a>Kopieren einer Datei in/aus einem Codespace

```shell
gh codespace cp [-r] <em>source(s)</em> <em>destination</em> 
```

Verwende das Präfix `remote:` für Datei- oder Verzeichnisnamen, um anzugeben, dass sie sich im Codespace befinden. Wie beim UNIX-Befehl `cp` gibt das erste Argument die Quelle und das letzte das Ziel an. Wenn das Ziel ein Verzeichnis ist, kannst du mehrere Quellen angeben. Verwende das Flag `-r` (rekursiv), wenn eine der Quellen ein Verzeichnis ist.

Die Speicherorte von Dateien und Verzeichnissen im Codespace sind relativ zum Stammverzeichnis der Remotebenutzer*innen.

#### <a name="examples"></a>Beispiele

* Kopieren einer Datei vom lokalen Computer in das Verzeichnis `$HOME` eines Codespace:

   `gh codespace cp myfile.txt remote:`

* Kopieren einer Datei in das Verzeichnis, in das ein Repository in einem Codespace ausgecheckt wurde:

   `gh codespace cp myfile.txt remote:/workspaces/<REPOSITORY-NAME>`

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

### <a name="modify-ports-in-a-codespace"></a>Ändern von Ports in einem Codespace

Du kannst einen Port in einem Codespace an einen lokalen Port weiterleiten. Der Port wird solange weitergeleitet, wie der Prozess ausgeführt wird. Um die Weiterleitung des Ports zu beenden, drückst du <kbd>STRG</kbd>+<kbd>C</kbd>.

```shell
gh codespace ports forward <em>codespace-port-number</em>:<em>local-port-number</em> -c <em>codespace-name</em>
```

Gib `gh codespace ports` ein, und wähle dann einen Codespace aus, um Details zu weitergeleiteten Ports anzuzeigen.

Du kannst die Sichtbarkeit eines weitergeleiteten Ports festlegen. {% data reusables.codespaces.port-visibility-settings %}

```shell
gh codespace ports visibility <em>codespace-port</em>:<em>private|org|public</em> -c <em>codespace-name</em>
```

Du kannst mit einem Befehl die Sichtbarkeit mehrerer Ports festlegen. Beispiel:

```shell
gh codespace ports visibility 80:private 3000:public 3306:org -c <em>codespace-name</em>
```

Weitere Informationen findest du unter [Weiterleiten von Ports in Codespaces](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace).

### <a name="access-codespace-logs"></a>Zugreifen auf Codespaceprotokolle

Du kannst das Erstellungsprotokoll für einen Codespace anzeigen. Nachdem du diesen Befehl eingegeben hast, wirst du aufgefordert, die Passphrase für deinen SSH-Schlüssel einzugeben.

```shell
gh codespace logs -c <em>codespace-name</em>
```

Weitere Informationen zum Erstellungsprotokoll findest du unter [Codespaceprotokolle](/codespaces/troubleshooting/codespaces-logs#creation-logs).
