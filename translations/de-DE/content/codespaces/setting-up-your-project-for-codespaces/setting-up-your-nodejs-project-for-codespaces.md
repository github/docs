---
title: "Einrichten deines Node.js-Projekts für GitHub\_Codespaces"
allowTitleToDifferFromFilename: true
shortTitle: Setting up your Node.js project
intro: 'Beginne mit deinem JavaScript-, Node.js- oder TypeScript-Projekt in {% data variables.product.prodname_github_codespaces %}, indem du einen benutzerdefinierten Entwicklungscontainer erstellst.'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /codespaces/getting-started-with-codespaces/getting-started-with-your-nodejs-project-in-codespaces
type: tutorial
topics:
  - Codespaces
  - Developer
  - Node
  - JavaScript
hasExperimentalAlternative: true
hidden: true
ms.openlocfilehash: 19c29f7d3c8110d1c671a9af46227a399a467800
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159593'
---
## Einführung

In diesem Leitfaden wird veranschaulicht, wie du dein JavaScript-, Node.js- oder TypeScript-Projekt in {% data reusables.codespaces.setting-up-project-intro %} einrichtest.

### Voraussetzungen

- Du solltest über ein JavaScript-, Node.js- oder TypeScript-Projekt in einem Repository auf {% data variables.product.prodname_dotcom_the_website %} verfügen. Wenn du kein Projekt hast, kannst du im Tutorial das folgende Beispiel verwenden: https://github.com/microsoft/vscode-remote-try-node
- {% data variables.product.prodname_github_codespaces %} muss für deine Organisation aktiviert sein.

## Schritt 1: Öffnen deines Projekt in einem Codespace

1. Verwende das Dropdownmenü **{% octicon "code" aria-label="The code icon" %} Code** unter dem Repositorynamen, und klicke auf der Registerkarte **Codespaces** auf das Pluszeichen ({% octicon "plus" aria-label="The plus icon" %}).

   ![Schaltfläche „New codespace" (Neuer Codespace)](/assets/images/help/codespaces/new-codespace-button.png)

Wenn du einen Codespace erstellst, wird dein Projekt auf einer Remote-VM erstellt, die dir zugewiesen ist. Der Container deines Codespace verfügt standardmäßig über viele Sprachen und Laufzeiten wie Node.js, JavaScript, TypeScript, nvm, npm und yarn. Er enthält außerdem gängige Tools wie Git, Wget, rsync, OpenSSH und nano.

{% data reusables.codespaces.customize-vcpus-and-ram %}

## Schritt 2: Hinzufügen einer Entwicklungscontainerkonfiguration zu deinem Repository aus einer Vorlage

Der Standardentwicklungscontainer für {% data variables.product.prodname_github_codespaces %} unterstützt standardmäßig die Ausführung von Node.js-Projekten wie [vscode-remote-try-node](https://github.com/microsoft/vscode-remote-try-node). Es wird jedoch empfohlen, einen eigenen Entwicklungscontainer zu konfigurieren, da du auf diese Weise alle für dein Projekt erforderlichen Tools und Skripts definieren kannst. Dadurch wird eine vollständig reproduzierbare Umgebung für alle {% data variables.product.prodname_github_codespaces %}-Benutzer in deinem Repository bereitgestellt.

{% data reusables.codespaces.setup-custom-devcontainer %}

{% data reusables.codespaces.command-palette-container %}
1. Klicke für dieses Beispiel auf **Node.js**.  Wenn du zusätzliche Features benötigst, kannst du einen beliebigen Node-spezifischen Container oder eine Kombination von Tools wie Node und MongoDB auswählen.

   ![Auswählen der Option „Node“ aus der Liste](/assets/images/help/codespaces/add-node-prebuilt-container.png)

1. Klicke auf die empfohlene Version von Node.js.

   ![Node.js-Versionsauswahl](/assets/images/help/codespaces/add-node-version.png)

{% data reusables.codespaces.rebuild-command %}

### Struktur des Dev-Containers

Durch das Hinzufügen der Vorlage des Node.js-Entwicklungscontainers wird ein Verzeichnis `.devcontainer` mit den folgenden Dateien zum Stammverzeichnis des Projektrepositorys hinzugefügt:

- `devcontainer.json`
- Dockerfile

Die neu hinzugefügte `devcontainer.json`-Datei definiert einige Eigenschaften, die nach dem Beispiel beschrieben werden.

#### devcontainer.json

```json
// For format details, see https://aka.ms/devcontainer.json. For config options, see the README at:
// https://github.com/microsoft/vscode-dev-containers/tree/v0.162.0/containers/javascript-node
{
    "name": "Node.js",
    "build": {
        "dockerfile": "Dockerfile",
        // Update 'VARIANT' to pick a Node version: 10, 12, 14
        "args": { "VARIANT": "14" }
    },

    // Set *default* container specific settings.json values on container create.
    "settings": {
        "terminal.integrated.shell.linux": "/bin/bash"
    },

    // Add the IDs of extensions you want installed when the container is created.
    "extensions": [
        "dbaeumer.vscode-eslint"
    ],

    // Use 'forwardPorts' to make a list of ports inside the container available locally.
    // "forwardPorts": [],

    // Use 'postCreateCommand' to run commands after the container is created.
    // "postCreateCommand": "yarn install",

    // Comment out connect as root instead. More info: https://aka.ms/vscode-remote/containers/non-root.
    "remoteUser": "node"
}
```

- **name:** Du kannst deinem Entwicklungscontainer einen beliebigen Namen geben. Dies ist bloß der Standardname.
- **build**: Hierbei handelt es sich um die Buildeigenschaften.
  - **dockerfile**: Im `build`-Objekt enthält `dockerfile` den Pfad zu der Dockerfile-Datei, die ebenfalls aus der Vorlage hinzugefügt wurde.
  - **args**
    - **variant**: Diese Datei enthält nur ein Buildargument, das die zu verwendende Node-Version angibt, die an die Dockerfile-Datei übergeben wird.
- **settings**: Hierbei handelt es sich um die {% data variables.product.prodname_vscode %}-Einstellungen, die du festlegen kannst.
  - **terminal.integrated.shell.linux**: Auch wenn Bash hier standardmäßig verwendet wird, kannst du andere Terminalshells verwenden, indem du diese Einstellung bearbeitest.
- **extensions**: Diese Erweiterungen sind standardmäßig enthalten.
  - **dbaeumer.vscode-eslint**: „ES lint“ ist eine gute Erweiterung für das Linten, aber für JavaScript gibt es eine Reihe geeigneter Marketplace-Erweiterungen, die du ebenfalls einbinden kannst.
- **forwardPorts:** Alle hier aufgeführten Ports werden automatisch weitergeleitet. Weitere Informationen findest du unter [Weiterleiten von Ports in Codespaces](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace).
- **postCreateCommand**: Verwende dies, um Befehle auszuführen, die nicht in der Dockerfile-Datei definiert sind, nachdem dein Codespace erstellt wurde.
- **remoteUser:** Du führst Vorgänge standardmäßig als vscode-Benutzer*in aus, du kannst diese Option aber auch auf das Stammverzeichnis festlegen.

#### Dockerfile

```bash
# [Choice] Node.js version: 14, 12, 10
ARG VARIANT="14-buster"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
# RUN su node -c "npm install -g <your-package-list-here>"
```

Du kannst das Dockerfile verwenden, um zusätzliche Containerebenen zum Definieren von Betriebssystempaketen, Knotenversionen oder globalen Paketen hinzuzufügen, die im Container enthalten sein sollen.

## Schritt 3: Bearbeiten der devcontainer.json-Datei

Mit der hinzugefügten Entwicklungscontainerkonfiguration und einem grundlegenden Verständnis der Funktionen kannst du nun Änderungen vornehmen, um deine Umgebung weiter anzupassen. In diesem Beispiel fügst du Eigenschaften hinzu, um npm zu installieren, wenn dein Codespace gestartet wird, und um eine Liste von Ports innerhalb des Containers zu erstellen, die lokal verfügbar ist.

1. Wähle im Explorer die `devcontainer.json`-Datei aus der Struktur aus, und öffne sie. Möglicherweise musst du den Ordner `.devcontainer` erweitern, um diese anzuzeigen.

   ![devcontainer.json-Datei im Explorer](/assets/images/help/codespaces/devcontainers-options.png)

2. Füge deiner Datei `devcontainer.json` nach `extensions` folgende Zeilen hinzu:

   ```json{:copy}
   "postCreateCommand": "npm install",
   "forwardPorts": [4000],
   ```

   {% data reusables.codespaces.more-info-devcontainer %}

{% data reusables.codespaces.rebuild-command %}

   {% data reusables.codespaces.rebuild-reason %}

## Schritt 4: Ausführen der Anwendung

Im vorherigen Abschnitt hast du den `postCreateCommand`-Befehl verwendet, um mehrere Pakete über npm zu installieren. Du kannst diesen nun verwenden, um unsere Anwendung mit npm auszuführen.

1. Führe den Startbefehl im Terminal mit `npm start` aus.

   ![npm start in terminal](/assets/images/help/codespaces/codespaces-npmstart.png)

2. Wenn dein Projekt gestartet wird, sollte in der unteren rechten Ecke von {% data variables.product.prodname_vscode_shortname %} eine Popupbenachrichtigung angezeigt werden, die eine Aufforderung zum Herstellen einer Verbindung mit dem Port enthält, den dein Projekt verwendet.

   ![Popupbenachrichtigung für Portweiterleitung](/assets/images/help/codespaces/codespaces-port-toast.png)

## Schritt 5: Committen der Änderungen

{% data reusables.codespaces.committing-link-to-procedure %}

## Nächste Schritte

Du solltest jetzt mit der Entwicklung deines JavaScript-Projekts in {% data variables.product.prodname_github_codespaces %} beginnen können. Im Folgenden findest du einige zusätzliche Ressourcen für erweiterte Szenarios:

{% data reusables.codespaces.next-steps-adding-devcontainer %}
