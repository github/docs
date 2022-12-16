---
title: Einführung in Entwicklungscontainer
intro: 'Wenn du in einem Codespace arbeitest, wird die Umgebung mithilfe eines Entwicklungscontainers erstellt, der auf einem virtuellen Computer gehostet wird.'
permissions: People with write permissions to a repository can create or edit the codespace configuration.
redirect_from:
  - /github/developing-online-with-github-codespaces/configuring-github-codespaces-for-your-project
  - /codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project
  - /github/developing-online-with-codespaces/configuring-codespaces-for-your-project
  - /codespaces/customizing-your-codespace/configuring-codespaces-for-your-project
  - /codespaces/setting-up-your-project-for-codespaces/configuring-codespaces-for-your-project
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
  - Fundamentals
ms.openlocfilehash: 646f8068e68040f1d12f8155c3ba9e2bdb84c2ca
ms.sourcegitcommit: 7fb7ec2e665856fc5f7cd209b53bd0fb1c9bbc67
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185091'
---
## Informationen zu Entwicklungscontainern

Entwicklungscontainer (auch „Dev-Container“ genannt) sind Docker-Container, die speziell für die Bereitstellung einer Entwicklungsumgebung mit vollem Funktionsumfang konfiguriert sind. Wenn du in einem Codespace arbeitest, verwendest du einen Dev-Container auf einem virtuellen Computer.

Du kannst den Dev-Container für ein Repository so konfigurieren, dass für dieses Repository erstellte Codespaces eine maßgeschneiderte Entwicklungsumgebung mit allen Tools und Runtimes bieten, die du für ein bestimmtes Projekt benötigst. Wenn du keine Konfiguration im Repository definierst, verwendet {% data variables.product.prodname_github_codespaces %} eine Standardkonfiguration, die viele der allgemeinen Tools enthält, die dein Team möglicherweise für die Entwicklung deines Projekts benötigt. Weitere Informationen findest du unter [Verwenden der Dev-Containerstandardkonfiguration](#using-the-default-dev-container-configuration).

Die Konfigurationsdateien für einen Dev-Container sind in einem `.devcontainer`-Verzeichnis in deinem Repository enthalten. Du kannst mit {% data variables.product.prodname_vscode %} deine Konfigurationsdateien hinzufügen. Du kannst aus einer Auswahl vordefinierter Konfigurationen für verschiedene Projekttypen wählen. Diese kannst du ohne weitere Konfiguration verwenden, oder die Konfigurationen bearbeiten, um die von ihnen erzeugte Entwicklungsumgebung zu optimieren. Weitere Informationen findest du unter [Verwenden einer vordefinierten Dev-Containerkonfiguration](#using-a-predefined-dev-container-configuration).

Alternativ kannst du deine eigenen benutzerdefinierten Konfigurationsdateien hinzufügen. Weitere Informationen findest du unter [Erstellen einer benutzerdefinierten Dev-Containerkonfiguration](#creating-a-custom-dev-container-configuration).

Du kannst eine einzelne Dev-Containerkonfiguration für ein Repository, verschiedene Konfigurationen für verschiedene Branches oder mehrere Konfigurationen definieren. Wenn mehrere Konfigurationen verfügbar sind, können Benutzer ihre bevorzugte Konfiguration auswählen, wenn sie einen Codespace erstellen. Dies ist besonders nützlich für große Repositorys, die Quellcode in verschiedenen Programmiersprachen oder für verschiedene Projekte enthalten. Du kannst eine Auswahl von Konfigurationen erstellen, die verschiedenen Teams ermöglichen, in einem Codespace zu arbeiten, der für die von ihnen ausgeführte Arbeit geeignet ist.

Wenn du einen Codespace auf der Grundlage einer Vorlage erstellst, kannst du mit einer Konfigurationsdatei oder mehreren Konfigurationsdateien für Entwicklercontainer in deinem Arbeitsbereich beginnen. Um deine Umgebung weiter zu konfigurieren, kannst du diesen Dateien Einstellungen hinzufügen oder Einstellungen daraus entfernen und den Container neu erstellen, um die Änderungen auf den von dir verwendeten Codespace anzuwenden. Wenn Du deinen Codespace in einem Repository auf {% data variables.product.product_name %} veröffentlichst, haben alle Codespaces, die du aus diesem Repository erstellt hast, die von dir definierte Konfiguration. Weitere Informationen findest du unter [Anwenden von Konfigurationsänderungen auf einen Codespace](#applying-configuration-changes-to-a-codespace) und [Erstellen eines Codespace mithilfe einer Vorlage](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template#publishing-to-a-remote-repository).

### devcontainer.json

Die primäre Datei in einer Dev-Containerkonfiguration ist die `devcontainer.json`-Datei. Mit dieser Datei kannst du die Umgebung von Codespaces bestimmen, die für dein Repository erstellt wurden. Der Inhalt dieser Datei definiert einen Dev-Container, der Frameworks, Tools, Erweiterungen und Portweiterleitung enthalten kann. Die `devcontainer.json`-Datei enthält in der Regel einen Verweis auf eine Dockerfile, die sich für gewöhnlich neben der `devcontainer.json`-Datei befindet.

Wenn du einen Codespace aus einem Repository ohne Datei vom Typ `devcontainer.json` erstellst oder mit der leeren Vorlage von {% data variables.product.company_short %} beginnst, wird die Standardkonfiguration des Entwicklungscontainers verwendet. Weitere Informationen findest du unter [Verwenden der Dev-Containerstandardkonfiguration](#using-the-default-dev-container-configuration).

Die `devcontainer.json`-Datei befindet sich in der Regel im `.devcontainer`-Verzeichnis deines Repositorys. Alternativ kannst du sie direkt im Stamm des Repositorys finden; in diesem Fall muss der Dateiname mit einem Punkt beginnen: `.devcontainer.json`. 

Wenn du eine Auswahl an Dev-Containerkonfigurationen in deinem Repository haben möchtest, müssen sich alle Alternativen zur Datei `.devcontainer/devcontainer.json` (oder `.devcontainer.json`) in ihrem eigenen Unterverzeichnis im Pfad `.devcontainer/SUBDIRECTORY/devcontainer.json` befinden. So könntest du beispielsweise zwei Konfigurationen zur Auswahl haben: 
* `.devcontainer/database-dev/devcontainer.json` 
* `.devcontainer/gui-dev/devcontainer.json`

Wenn dein Repository mehrere `devcontainer.json`-Dateien enthält, wird jeder Codespace nur aus einer der Konfigurationen erstellt. Einstellungen können nicht importiert oder zwischen `devcontainer.json`-Dateien vererbt werden. Wenn von einer `devcontainer.json`-Datei in einem benutzerdefinierten Unterverzeichnis andere Dateien abhängig sind, z. B. die Dockerfile oder Skripts, die von Befehlen in der `devcontainer.json`-Datei ausgeführt werden, solltest du diese Dateien gemeinsam im selben Unterverzeichnis unterbringen.

Informationen zum Auswählen deiner bevorzugten Entwicklungscontainerkonfiguration beim Erstellen eines Codespace findest du unter [Erstellen eines Codespace für ein Repository](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository).

{% data reusables.codespaces.more-info-devcontainer %}

#### Verwendung der Datei „devcontainer.json“

Es ist sinnvoll, die Datei `devcontainer.json` als Mittel zur „Anpassung“ und nicht zur „Personalisierung“ zu betrachten. Du solltest nur Komponenten einschließen, die alle Mitwirkenden an deiner Codebasis als Standardelemente der Entwicklungsumgebung benötigen, nicht solche, die persönlichen Vorlieben entsprechen. Linter etwa eignen sich gut für die Standardisierung, und jeder sollte sie installieren, darum solltest du sie in deine `devcontainer.json`-Datei aufnehmen. Benutzeroberflächendecorator oder Designs sind eine Frage des persönlichen Geschmacks und sollten nicht in die `devcontainer.json`-Datei aufgenommen werden.

Du kannst deine Codespaces mithilfe von Dotfiles und der Einstellungssynchronisierung personalisieren. Weitere Informationen findest du unter [Personalisieren von {% data variables.product.prodname_github_codespaces %} für dein Konto](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account).

### Dockerfile

Du kannst eine Dockerfile als Teil deiner Dev-Containerkonfiguration hinzufügen. 

Die Dockerfile-Datei ist eine Textdatei mit Anweisungen, die erforderlich sind, um ein neues Docker-Containerimage zu erstellen. Mit diesem Image wird jedes Mal dann ein Entwicklungscontainer generiert, wenn jemand einen Codespace mithilfe der `devcontainer.json`-Datei erstellt, die auf diese Dockerfile verweist. Die Anweisungen in der Dockerfile beginnen in der Regel mit dem Verweisen auf ein übergeordnetes Image, auf dem das neue Image basiert, das erstellt wird. Darauf folgen die während des Imageerstellungsprozesses ausgeführten Befehle, z. B. zum Installieren von Softwarepaketen.

Die Dockerfile für einen Dev-Container befindet sich in der Regel im `.devcontainer`-Ordner neben der `devcontainer.json`, in der darauf verwiesen wird. 

{% note %}

**Hinweis**: Als Alternative zur Verwendung einer Dockerfile kannst du mit der `image`-Eigenschaft in der `devcontainer.json`-Datei direkt auf ein vorhandenes Image verweisen, das du verwenden möchtest. Das hier angegebene Image muss von jeder festgelegten Imagerichtlinie der Organisation zugelassen werden. Weitere Informationen findest du unter [Einschränken des Basisimages für Codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-base-image-for-codespaces). Wenn weder eine Dockerfile noch ein Image gefunden wird, wird das Standardcontainerimage verwendet. Weitere Informationen findest du unter [Verwenden der Dev-Containerstandardkonfiguration](#using-the-default-dev-container-configuration).

{% endnote %}

#### Einfaches Dockerfile-Beispiel

Im folgenden Beispiel werden vier Anweisungen verwendet:

`ARG` definiert eine Buildzeitvariable.

`FROM` gibt das übergeordnete Image an, auf dem das generierte Docker-Image basiert.

`COPY` kopiert eine Datei und fügt sie dem Dateisystem hinzu. 

`RUN` aktualisiert Paketlisten und führt ein Skript aus. Du kannst auch eine `RUN`-Anweisung zum Installieren von Software verwenden, wie in den kommentierten Anweisungen gezeigt. Verwende zum Ausführen mehrerer Befehle `&&`, um die Befehle in einer einzelnen `RUN`-Anweisung zu kombinieren.

```Dockerfile{:copy}
ARG VARIANT="16-buster"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
# RUN su node -c "npm install -g <your-package-list-here>"

COPY library-scripts/github-debian.sh /tmp/library-scripts/
RUN apt-get update && bash /tmp/library-scripts/github-debian.sh
```

Weitere Informationen zu Dockerfile-Anweisungen findest du in der Docker-Dokumentation unter [Dockerfile-Referenz](https://docs.docker.com/engine/reference/builder).

#### Verwenden einer Docker-Datei

Wenn du eine Dockerfile als Teil einer Dev-Containerkonfiguration verwenden möchtest, verweise in deiner `devcontainer.json`-Datei mithilfe der `dockerfile`-Eigenschaft auf sie.

```json{:copy}
{
  ...
  "build": { "dockerfile": "Dockerfile" },
  ...
}
```

Wenn du die vorhandene Containerorchestrierung in deinem Entwicklungscontainer verwenden möchtest, stehen dir verschiedene Optionen zur Verfügung. Weitere Informationen findest du auf der Website für Entwicklungscontainer im Abschnitt „Orchestrierungsoptionen“ der [Spezifikation](https://containers.dev/implementors/spec/#orchestration-options).

## Verwenden der Dev-Containerstandardkonfiguration

Wenn du keine Konfiguration in deinem Repository definierst, erstellt {% data variables.product.prodname_dotcom %} einen Codespace mit einem Linux-Standardbasisimage. Dieses Linux-Image enthält eine Reihe von Runtimeversionen für beliebte Sprachen wie Python, Node, PHP, Java, Go, C++, Ruby und .NET Core/C#. Die neuesten oder LTS-Versionen dieser Sprachen werden verwendet. Es gibt auch Tools zur Unterstützung von Data Science und maschinellem Lernen, z. B. JupyterLab und Conda. Im Image sind auch andere Entwicklertools und Hilfsprogramme wie Git, GitHub-CLI, YARN, OpenSSH und vim enthalten. Verwende den `devcontainer-info content-url`-Befehl in deinem Codespaceterminal, und folge der vom Befehl ausgegebenen URL, um alle enthaltenen Sprachen, Runtimes und Tools anzuzeigen.

Informationen zu den Komponenten des Linux-Standardimages findest du im [`devcontainers/images`](https://github.com/devcontainers/images/tree/main/src/universal)-Repository. 

Die Standardkonfiguration ist eine gute Option, wenn du an einem kleinen Projekt arbeitest, das die von {% data variables.product.prodname_github_codespaces %} bereitgestellten Sprachen und Tools verwendet.

## Verwenden einer vordefinierten Dev-Containerkonfiguration

Wenn du {% data variables.product.prodname_codespaces %} in {% data variables.product.prodname_vscode %} oder in einem Webbrowser verwendest, kannst du eine Entwicklercontainerkonfiguration für dein Repository erstellen, indem du aus einer Liste vordefinierter Konfigurationen auswählst. Diese Konfigurationen bieten gebräuchliche Setups für bestimmte Projekttypen und können dir helfen, schnell mit einer Konfiguration zu beginnen, die bereits über die entsprechenden Containeroptionen, {% data variables.product.prodname_vscode %}-Einstellungen und {% data variables.product.prodname_vscode %}-Erweiterungen verfügt, die installiert werden sollen.

Die Verwendung einer vordefinierten Konfiguration ist eine großartige Möglichkeit, wenn zusätzliche Erweiterbarkeit erforderlich ist. Du kannst auch mit einer vordefinierten Konfiguration beginnen und sie nach Bedarf für dein Projekt ändern. Weitere Informationen zu den Definitionen vordefinierter Entwicklungscontainer findest du im [`devcontainers/images`](https://github.com/devcontainers/images/tree/main/src)-Repository.

Du kannst entweder beim Arbeiten in einem Codespace oder bei der Arbeit in einem lokalen Repository eine vordefinierte Dev-Containerkonfiguration hinzufügen. Wenn du lokal arbeitest und keine Verbindung mit einem Codespace besteht, muss dazu in {% data variables.product.prodname_vscode_shortname %} die Erweiterung „Dev Containers“ installiert und aktiviert sein. Weitere Informationen zu dieser Erweiterung findest du unter [{% data variables.product.prodname_vs_marketplace_shortname %}](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers). Das folgende Verfahren beschreibt den Prozess, wenn du einen Codespace verwendest. Die Schritte in {% data variables.product.prodname_vscode_shortname %} sind sehr ähnlich, wenn du nicht mit einem Codespace verbunden bist.

{% data reusables.codespaces.command-palette-container %}
1. Klicke auf die Definition, die du verwenden möchtest.

   ![Screenshot: Liste vordefinierter Containerdefinitionen](/assets/images/help/codespaces/predefined-container-definitions-list.png)

1. Folge den Eingabeaufforderungen, um deine Definition anzupassen. Weitere Informationen zu den Optionen zum Anpassen deiner Definition findest du unter [Hinzufügen zusätzlicher Features zur `devcontainer.json`-Datei](#adding-additional-features-to-your-devcontainerjson-file).
1. Klicke auf **OK**.

   ![Screenshot: Schaltfläche „OK“](/assets/images/help/codespaces/prebuilt-container-ok-button.png)

1. Wenn du in einem Codespace arbeitest, wende deine Änderungen an, indem du in der Nachricht unten rechts im Fenster auf **Jetzt neu erstellen** klickst. Weitere Informationen zum Neuerstellen deines Containers findest du unter [Anwenden von Änderungen auf deine Konfiguration](#applying-configuration-changes-to-a-codespace).

   ![Screenshot: Aufforderung „Jetzt neu erstellen“](/assets/images/help/codespaces/rebuild-prompt.png)

### Hinzufügen zusätzlicher Features zu deiner `devcontainer.json`-Datei

{% data reusables.codespaces.about-features %} Weitere Informationen findest du unter [Hinzufügen von Features zu einer Datei vom Typ `devcontainer.json`](/codespaces/setting-up-your-project-for-codespaces/adding-features-to-a-devcontainer-file?tool=vscode).

## Erstellen einer benutzerdefinierten Dev-Containerkonfiguration

Wenn keine der vordefinierten Konfigurationen deinen Anforderungen entspricht, kannst du eine benutzerdefinierte Konfiguration erstellen, indem du deine eigene `devcontainer.json`-Datei schreibst.

* Wenn du eine einzelne `devcontainer.json`-Datei hinzufügst, die von jedem verwendet wird, der einen Codespace aus deinem Repository erstellt, erstelle die Datei in einem `.devcontainer`-Verzeichnis im Stamm des Repositorys. 
* Wenn du Benutzern eine Auswahl an Konfigurationen anbieten möchtest, kannst du mehrere benutzerdefinierte `devcontainer.json`-Dateien erstellen, die sich jeweils in einem separaten Unterverzeichnis des `.devcontainer`-Verzeichnisses befinden.

   {% note %}

   **Hinweise**:
   - Du kannst deine `devcontainer.json`-Dateien nicht in Verzeichnissen suchen, die mehr als eine Ebene unter `.devcontainer` liegen. Beispielsweise funktioniert eine Datei unter `.devcontainer/teamA/devcontainer.json`, aber nicht unter `.devcontainer/teamA/testing/devcontainer.json`.
   - {% data reusables.codespaces.configuration-choice-templates %} Weitere Informationen findest du unter [Einrichten eines Vorlagenrepositorys für {% data variables.product.prodname_github_codespaces %}](/codespaces/setting-up-your-project-for-codespaces/setting-up-a-template-repository-for-github-codespaces).

   {% endnote %}

   Wenn das Repository mehrere `devcontainer.json`-Dateien enthält, werden sie auf der Seite mit den Optionen zur Codespaceerstellung aufgeführt. Weitere Informationen findest du unter [Erstellen eines Codespaces für ein Repository](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository).

   ![Screenshot: Auswahl von Konfigurationsdateien](/assets/images/help/codespaces/configuration-file-choice.png)

### Hinzufügen einer Datei vom Typ `devcontainer.json`

Wenn dein Repository noch keine Datei vom Typ `devcontainer.json` enthält, kannst du schnell eine solche Datei von {% data variables.product.prodname_dotcom_the_website %} hinzufügen.
1. Navigiere zu deinem Repository, und klicke auf die Dropdownliste **{% octicon "code" aria-label="The code icon" %} Code**.
1. Klicke auf der Registerkarte **Codespaces** auf die Auslassungspunkte ( **...** ), und wähle dann **Entwicklungscontainer konfigurieren** aus.

   ![Screenshot: Dropdownliste „Code“ mit hervorgehobener Option „Entwicklungscontainer konfigurieren“](/assets/images/help/codespaces/configure-dev-container.png)

Im Editor wird eine neue `.devcontainer/devcontainer.json`-Datei geöffnet. Die Datei enthält einige anfängliche Eigenschaften, einschließlich eines `features`-Objekts, dem du neue Tools, Bibliotheken oder Runtimes hinzufügen kannst. Weitere Informationen findest du unter [Hinzufügen von Features zu einer Datei vom Typ `devcontainer.json`](/codespaces/setting-up-your-project-for-codespaces/adding-features-to-a-devcontainer-file?tool=webui).

Wenn dein Repository bereits eine oder mehrere Dateien vom Typ `devcontainer.json` enthält, wird durch Klicken auf **Entwicklungscontainer konfigurieren** die vorhandene `devcontainer.json`-Datei mit der höchsten Priorität gemäß der [Spezifikation](https://containers.dev/implementors/spec/#devcontainerjson) auf containers.dev geöffnet. 

### Standardkonfigurationsauswahl während der Codespaceerstellung

Wenn `.devcontainer/devcontainer.json` oder `.devcontainer.json` vorhanden ist, ist es die Standardauswahl in der Liste der verfügbaren Konfigurationsdateien, wenn du einen Codespace erstellst. Wenn keine der Dateien vorhanden ist, wird die Dev-Containerstandardkonfiguration standardmäßig ausgewählt. 

![Screenshot: Ausgewählte Standardkonfigurationsauswahl](/assets/images/help/codespaces/configuration-file-choice-default.png)

### Bearbeiten der Datei „devcontainer.json“

Du kannst die unterstützten Konfigurationsschlüssel In der `devcontainer.json`-Datei hinzufügen und bearbeiten, um Aspekte der Codespaceumgebung festzulegen, z. B. welche {% data variables.product.prodname_vscode_shortname %}-Erweiterungen installiert werden sollen. {% data reusables.codespaces.more-info-devcontainer %}

Die `devcontainer.json`-Datei wird im JSONC-Format (JSON mit Kommentaren) geschrieben. So kannst du Kommentare in die Konfigurationsdatei einfügen. Weitere Informationen findest du unter [Bearbeiten von JSON mit {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/docs/languages/json#_json-with-comments) in der {% data variables.product.prodname_vscode_shortname %}-Dokumentation.

{% note %}

**Hinweis**: Wenn du einen Linter verwendest, um die `devcontainer.json`-Datei zu überprüfen, stelle sicher, dass er auf JSONC festgelegt ist, und JSON oder Kommentare nicht als Fehler gemeldet werden.

{% endnote %}

### Schnittstelleneinstellungen für {% data variables.product.prodname_vscode_shortname %}

Du kannst die Schnittstelleneinstellungen für {% data variables.product.prodname_vscode_shortname %} mit drei Bereichen konfigurieren: Arbeitsbereich, Remote [Codespaces] und Benutzer. Du kannst diese Bereiche im Editor für die {% data variables.product.prodname_vscode_shortname %}-Einstellungen anzeigen.

![Screenshot: Auswahl der Bereiche im Editor für Einstellungen](/assets/images/help/codespaces/scopes-for-vscode.png)

Wenn eine Einstellung in mehreren Bereichen definiert ist, haben Arbeitsbereich-Einstellungen Priorität, dann folgt Remote [Codespaces] und darauf Benutzer.

Du kannst die Standardschnittstelleneinstellungen für {% data variables.product.prodname_vscode_shortname %} an zwei Orten festlegen.

* Die in der `.vscode/settings.json`-Datei deines Repositorys definierten Schnittstelleneinstellungen werden im Codespace als Arbeitsbereichseinstellungen angewendet.
* Im `settings`-Schlüssel in der `devcontainer.json`-Datei definierte Schnittstelleneinstellungen werden im Codespace als Remote [Codespaces]-Einstellungen angewendet.

## Anwenden von Konfigurationsänderungen auf einen Codespace

Änderungen an einer Konfiguration werden angewendet, wenn du das nächste Mal einen Codespace erstellst. Du kannst deine Änderungen jedoch auf einen vorhandenen Codespace anwenden, indem du den Container neu erstellst. Du kannst dies in einem Codespace im {% data variables.product.prodname_vscode_shortname %}-Webclient oder der Desktopanwendung tun, oder du kannst {% data variables.product.prodname_cli %} verwenden.

### Neuerstellen des Entwicklungscontainers im Webclient oder in der Desktopanwendung von {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.rebuild-command %}
1. {% data reusables.codespaces.recovery-mode %}

   ![Screenshot: Fehlermeldung zum Wiederherstellungsmodus](/assets/images/help/codespaces/recovery-mode-error-message.png)

   - Klicke auf **Erstellungsprotokoll anzeigen**, um den Fehler durch das Überprüfen der Erstellungsprotokolle zu diagnostizieren.
   - Aktualisiere deine `devcontainer.json`-Datei, um die in den Protokollen identifizierten Fehler zu beheben.
   - Erstelle deinen Container neu, um die Änderungen anzuwenden. 

### Verwenden von {% data variables.product.prodname_cli %} zur Neuerstellung eines Entwicklungscontainers

Wenn du eine Entwicklungscontainerkonfiguration außerhalb von VS Code (z. B. für {% data variables.product.prodname_dotcom_the_website %} oder in einer JetBrains-IDE) geändert hast, kannst du {% data variables.product.prodname_cli %} verwenden, um den Entwicklungscontainer für einen vorhandenen Codespace neu zu erstellen.

1. Gib in einem Terminal den folgenden Befehl ein:

   ```
   gh cs rebuild
   ```

   Deine Codespaces werden aufgelistet.

1. Verwende die Pfeiltasten auf der Tastatur, um den erforderlichen Codespace zu markieren, und drücke dann die <kbd>EINGABETASTE</kbd>.


## Weiterführende Themen

- [Vordefinieren von Codespaces](/codespaces/prebuilding-your-codespaces)
