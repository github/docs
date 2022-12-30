---
title: Erstellen von GitHub CLI-Erweiterungen
intro: 'Hier erfährst du, wie du neue {% data variables.product.prodname_cli %}-Befehle mit anderen Benutzer*inen teilen kannst, indem du benutzerdefinierte Erweiterungen für {% data variables.product.prodname_cli %} erstellst.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - CLI
ms.openlocfilehash: e0f2979beca9a430f5afabf3a4f58fa5ea48ad30
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145068547'
---
## Informationen zu {% data variables.product.prodname_cli %}-Erweiterungen

{% data reusables.cli.cli-extensions %} Weitere Informationen zur Verwendung von {% data variables.product.prodname_cli %}-Erweiterungen findest du unter [Verwenden von {% data variables.product.prodname_cli %}-Erweiterungen](/github-cli/github-cli/using-github-cli-extensions).

Du benötigst ein Repository für jede Erweiterung, die du erstellst. Der Repositoryname muss mit `gh-` beginnen. Der verbleibende Teil des Repositorynamens ist der Name der Erweiterung. Im Stammverzeichnis des Repositorys muss sich eine ausführbare Datei mit demselben Namen wie das Repository oder ein Satz vorkompilierter ausführbarer Binärdateien befinden, die an ein Release angefügt sind.

{% note %}

**Hinweis**: Wenn du ein ausführbares Skript nutzen möchtest, empfehlen wir dir die Verwendung eines Bash-Skripts, da Bash ein weit verbreiteter Interpreter ist. Du kannst auch andere Skripts verwenden, aber der Benutzer muss den notwendigen Interpreter installiert haben, um die Erweiterung nutzen zu können. Wenn du dich nicht darauf verlassen möchtest, dass die Benutzer den geeigneten Interpreter installiert haben, kannst du eine vorkompilierte Erweiterung in Erwägung ziehen.

{% endnote %}

## Erstellen einer interpretierten Erweiterung mit `gh extension create`

{% note %}

**Hinweis**: Wenn du `gh extension create` ohne Argumente ausführst, wird ein interaktiver Assistent gestartet.

{% endnote %}

Mit dem Befehl `gh extension create` kannst du ein Projekt für deine Erweiterung erstellen, einschließlich eines Bash-Skripts, das Startcode enthält.

1. Richte mithilfe des Unterbefehls `gh extension create` eine neue Erweiterung ein. Ersetze `EXTENSION-NAME` durch den Namen deiner Erweiterung.

    ```shell
    gh extension create <em>EXTENSION-NAME</em>
    ```

1. Folge den angegebenen Anweisungen, um deine Erweiterung fertigzustellen und optional zu veröffentlichen.

## Erstellen einer vorkompilierten Erweiterung in Go mit `gh extension create`

Du kannst das Argument `--precompiled=go` verwenden, um ein Go-basiertes Projekt für deine Erweiterung zu erstellen, einschließlich Go-Gerüstbau, Workflowgerüstbau und Startcode.

1. Richte mithilfe des Unterbefehls `gh extension create` eine neue Erweiterung ein. Ersetze `EXTENSION-NAME` durch den Namen deiner Erweiterung, und gib `--precompiled=go` an.

    ```shell
    gh extension create --precompiled=go <em>EXTENSION-NAME</em>
    ```

1. Folge den angegebenen Anweisungen, um deine Erweiterung fertigzustellen und optional zu veröffentlichen.

## Erstellen einer vorkompilierten Erweiterung ohne Go mit `gh extension create`

Du kannst das Argument `--precompiled=other` verwenden, um ein Projekt für deine nicht Go-basierte vorkompilierte Erweiterung zu erstellen, einschließlich Workflowgerüstbau.

1. Richte mithilfe des Unterbefehls `gh extension create` eine neue Erweiterung ein. Ersetze `EXTENSION-NAME` durch den Namen deiner Erweiterung, und gib `--precompiled=other` an.

    ```shell
    gh extension create --precompiled=other <em>EXTENSION-NAME</em>
    ```

1. Füge den ersten Code für deine Erweiterung in der kompilierten Sprache deiner Wahl hinzu.

1. Füge in `script/build.sh` den Code zum Kompilieren deiner Erweiterung ein, um sicherzustellen, dass deine Erweiterung automatisch erstellt werden kann.

1. Folge den angegebenen Anweisungen, um deine Erweiterung fertigzustellen und optional zu veröffentlichen.

## Manuelles Erstellen einer interpretierten Erweiterung

1. Erstelle ein lokales Verzeichnis namens `gh-EXTENSION-NAME` für deine Erweiterung. Ersetze `EXTENSION-NAME` durch den Namen deiner Erweiterung. Beispiel: `gh-whoami`.

1. Füge in das erstellte Verzeichnis eine ausführbare Datei mit demselben Namen wie das Verzeichnis ein.

  {% note %}

  **Hinweis:** Stelle sicher, dass es sich um eine ausführbare Datei handelt. Unter Unix kannst du `chmod +x file_name` in der Befehlszeile ausführen, um `file_name` ausführbar zu machen. Unter Windows kannst du `git init -b main`, `git add file_name` und dann `git update-index --chmod=+x file_name` ausführen.

  {% endnote %}

1. Schreibe dein Skript in die ausführbare Datei. Beispiel:

  ```bash
  #!/usr/bin/env bash
  set -e
  exec gh api user --jq '"You are @\(.login) (\(.name))."'
  ```

1. Installiere die Erweiterung aus deinem Verzeichnis als lokale Erweiterung.

   ```shell
   gh extension install .
   ```

1. Vergewissere dich, dass deine Erweiterung funktioniert. Ersetze `EXTENSION-NAME` durch den Namen deiner Erweiterung. Beispiel: `whoami`.

   ```shell
   gh <em>EXTENSION-NAME</em>
   ```

1. Erstelle aus deinem Verzeichnis ein Repository, um deine Erweiterung zu veröffentlichen. Ersetze `EXTENSION-NAME` durch den Namen deiner Erweiterung.

   ```shell
   git init -b main
   git add . && git commit -m "initial commit"
   gh repo create gh-<em>EXTENSION-NAME</em> --source=. --public --push
   ```

1. Optional kannst du das Repositorythema `gh-extension` hinzufügen, damit andere Benutzer deine Erweiterung leichter finden. Dadurch wird die Erweiterung auf der [`gh-extension`-Themenseite](https://github.com/topics/gh-extension) angezeigt. Weitere Informationen zum Hinzufügen eines Repositorythemas findest du unter [Klassifizieren deines Repositorys mit Themen](/github/administering-a-repository/managing-repository-settings/classifying-your-repository-with-topics).

## Tipps zum Schreiben interpretierter {% data variables.product.prodname_cli %}-Erweiterungen

### Verarbeiten von Argumenten und Flags

Alle Befehlszeilenargumente, die auf einen `gh my-extension-name`-Befehl folgen, werden an das Erweiterungsskript übergeben. In einem Bash-Skript kannst du Argumente mit `$1`, `$2`, usw. referenzieren. Du kannst Argumente verwenden, um Benutzereingaben zu akzeptieren oder um das Verhalten des Skripts zu ändern.

In diesem Skript werden beispielsweise mehrere Flags verarbeitet. Wenn das Skript mit dem Flag `-h` oder `--help` aufgerufen wird, gibt das Skript einen Hilfetext aus, anstatt die Ausführung fortzusetzen. Beim Aufruf des Skripts mit dem Flag `--name` legt das Skript den nächsten Wert nach dem Flag auf `name_arg` fest. Wird das Skript mit dem Flag `--verbose` aufgerufen, gibt es eine andere Begrüßung aus.

```bash
#!/usr/bin/env bash
set -e

verbose=""
name_arg=""
while [ $# -gt 0 ]; do
  case "$1" in
  --verbose)
    verbose=1
    ;;
  --name)
    name_arg="$2"
    shift
    ;;
  -h|--help)
    echo "Add help text here."
    exit 0
    ;;
  esac
  shift
done

if [ -z "$name_arg" ]
then
  echo "You haven't told us your name."
elif [ -z "$verbose" ]
then
  echo "Hi $name_arg"
else
  echo "Hello and welcome, $name_arg"
fi
```

### Aufrufen von Kernbefehlen im nicht interaktiven Modus

Durch einige {% data variables.product.prodname_cli %}-Kernbefehle wird der Benutzer zu einer Eingabe aufgefordert. Beim Schreiben von Skripts mit diesen Befehlen ist eine Eingabeaufforderung oft unerwünscht. Um Eingabeaufforderungen zu vermeiden, gibst du die notwendigen Informationen explizit über Argumente an.

Zum Beispiel kannst du zum programmgesteuerten Erstellen eines Issues dessen Titel und Text angeben:

```shell
gh issue create --title "My Title" --body "Issue description"
```

### Programmgesteuertes Abrufen von Daten

Viele Kernbefehle unterstützen das Flag `--json` zum programmgesteuerten Abrufen von Daten. So kannst du zum Beispiel ein JSON-Objekt zurückgeben, das die Anzahl, den Titel und den Mergestatus von Pull Requests auflistet:

```shell
gh pr list --json number,title,mergeStateStatus
```

Wenn kein Kernbefehl verfügbar ist, um bestimmte Daten aus GitHub abzurufen, kannst du den Befehl [`gh api`](https://cli.github.com/manual/gh_api) verwenden, um auf die GitHub-API zuzugreifen. So kannst du zum Beispiel Informationen über den aktuellen Benutzer abrufen:

```shell
gh api user
```

Alle Befehle, die JSON-Daten ausgeben, bieten Optionen zum Filtern dieser Daten, sodass sie von einem Skript besser genutzt werden können. Zum Beispiel, um den Namen des aktuellen Benutzers abzurufen:

```shell
gh api user --jq '.name'
```

Weitere Informationen findest du unter [`gh help formatting`](https://cli.github.com/manual/gh_help_formatting).

## Manuelles Erstellen einer vorkompilierten Erweiterung

1. Erstelle ein lokales Verzeichnis namens `gh-EXTENSION-NAME` für deine Erweiterung. Ersetze `EXTENSION-NAME` durch den Namen deiner Erweiterung. Beispiel: `gh-whoami`.

1. Füge in das von dir erstellte Verzeichnis etwas Quellcode ein. Beispiel:

    ```go
    package main
    import (
      "github.com/cli/go-gh"
      "fmt"
    )

    func main() {
      args := []string{"api", "user", "--jq", `"You are @\(.login) (\(.name))"` }
      stdOut, _, err := gh.Exec(args...)
      if err != nil {
        fmt.Println(err)
        return
      }
      fmt.Println(stdOut.String())
    }
    ```

1. Installiere die Erweiterung aus deinem Verzeichnis als lokale Erweiterung.

    ```shell
    gh extension install .
    ```

1. Kompiliere deinen Code. Ersetze zum Beispiel bei Go `YOUR-USERNAME` durch deinen GitHub-Benutzernamen:

    ```shell
    go mod init github.com/<em>YOUR-USERNAME</em>/gh-whoami
    go mod tidy
    go build
    ```

1. Vergewissere dich, dass deine Erweiterung funktioniert. Ersetze `EXTENSION-NAME` durch den Namen deiner Erweiterung. Beispiel: `whoami`.

    ```shell
    gh <em>EXTENSION-NAME</em>
    ```

1. Erstelle aus deinem Verzeichnis ein Repository, um deine Erweiterung zu veröffentlichen. Ersetze `EXTENSION-NAME` durch den Namen deiner Erweiterung.

  {% note %}

  **Hinweis:** Achte darauf, die im Kompilierungsschritt erzeugte Binärdatei nicht an die Versionskontrolle zu committen.

  {% endnote %}

    ```shell
    git init -b main
    echo "gh-<em>EXTENSION-NAME</em>" >> .gitignore
    git add main.go go.* .gitignore && git commit -m'Initial commit'
    gh repo create "gh-<em>EXTENSION-NAME</em>"
    ```

1. Erstelle ein Release, um deine vorkompilierte Erweiterung mit anderen zu teilen. Kompiliere die Erweiterung für jede Plattform, die du unterstützen möchtest, und füge jede Binärdatei als Ressource an ein Release an. Die ausführbaren Binärdateien, die den Releases angefügt sind, müssen einer Namenskonvention folgen und das Suffix <em>BETRIEBSSYSTEMARCHITEKTUR\[ERWEITERUNG\]</em> aufweisen.

  Eine Erweiterung mit dem Namen `whoami`, die für die 64-Bit-Version von Windows kompiliert wird, erhält zum Beispiel den Namen `gh-whoami-windows-amd64.exe`, während die gleiche Erweiterung beim Kompilieren für die 32-Bit-Version von Linux den Namen `gh-whoami-linux-386` erhält. Eine vollständige Liste der von `gh` erkannten Betriebssystem- und Architekturkombinationen findest du in [diesem Quellcode](https://github.com/cli/cli/blob/14f704fd0da58cc01413ee4ba16f13f27e33d15e/pkg/cmd/extension/manager.go#L696).

  {% note %}

  **Hinweis:** Damit deine Erweiterung unter Windows richtig funktioniert, muss die Ressourcendatei die Erweiterung `.exe` aufweisen. Für andere Betriebssysteme ist keine Erweiterung erforderlich.

  {% endnote %}

  Releases können über die Befehlszeile erstellt werden. Beispiel:

  ```shell
  git tag v1.0.0
  git push origin v1.0.0
  GOOS=windows GOARCH=amd64 go build -o gh-<em>EXTENSION-NAME</em>-windows-amd64.exe
  GOOS=linux GOARCH=amd64 go build -o gh-<em>EXTENSION-NAME</em>-linux-amd64
  GOOS=darwin GOARCH=amd64 go build -o gh-<em>EXTENSION-NAME</em>-darwin-amd64
  gh release create v1.0.0 ./*amd64*

1. Optionally, to help other users discover your extension, add the repository topic `gh-extension`. This will make the extension appear on the [`gh-extension` topic page](https://github.com/topics/gh-extension). For more information about how to add a repository topic, see "[Classifying your repository with topics](/github/administering-a-repository/managing-repository-settings/classifying-your-repository-with-topics)."


## Tips for writing precompiled {% data variables.product.prodname_cli %} extensions

### Automating releases

Consider adding the [gh-extension-precompile](https://github.com/cli/gh-extension-precompile) action to a workflow in your project. This action will automatically produce cross-compiled Go binaries for your extension and supplies build scaffolding for non-Go precompiled extensions.

### Using {% data variables.product.prodname_cli %} features from Go-based extensions

Consider using [go-gh](https://github.com/cli/go-gh), a Go library that exposes pieces of `gh` functionality for use in extensions.

## Next steps

To see more examples of {% data variables.product.prodname_cli %} extensions, look at [repositories with the `gh-extension` topic](https://github.com/topics/gh-extension).
