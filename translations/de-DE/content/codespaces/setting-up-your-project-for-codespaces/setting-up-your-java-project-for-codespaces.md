---
title: Einrichten deines Java-Projekts für GitHub Codespaces
allowTitleToDifferFromFilename: true
shortTitle: Setting up with your Java project
intro: 'Beginne mit deinem Java-Projekt in {% data variables.product.prodname_github_codespaces %}, indem du einen benutzerdefinierten Entwicklungscontainer erstellst.'
redirect_from:
  - /codespaces/getting-started-with-codespaces/getting-started-with-your-java-project-in-codespaces
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
hasExperimentalAlternative: true
hidden: true
ms.openlocfilehash: b861744483f61bc01e8069188c1ce6298411d57e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158765'
---
## Einführung

In diesem Leitfaden wird veranschaulicht, wie du dein Java-Projekt in {% data reusables.codespaces.setting-up-project-intro %} einrichtest.

### Voraussetzungen

- Du solltest über ein Java-Projekt in einem Repository auf {% data variables.product.prodname_dotcom_the_website %} verfügen. Wenn du kein Projekt hast, kannst du im Tutorial das folgende Beispiel verwenden: https://github.com/microsoft/vscode-remote-try-java
- {% data variables.product.prodname_github_codespaces %} muss für deine Organisation aktiviert sein.

## Schritt 1: Öffnen deines Projekt in einem Codespace

1. Verwende das Dropdownmenü **{% octicon "code" aria-label="The code icon" %} Code** unter dem Repositorynamen, und klicke auf der Registerkarte **Codespaces** auf das Pluszeichen ({% octicon "plus" aria-label="The plus icon" %}).

  ![Schaltfläche „New codespace" (Neuer Codespace)](/assets/images/help/codespaces/new-codespace-button.png)

Wenn du einen Codespace erstellst, wird dein Projekt auf einer Remote-VM erstellt, die dir zugewiesen ist. Der Container für deinen Codespace verfügt standardmäßig über viele Sprachen und Runtimes wie Java, nvm, npm und Yarn. Er enthält außerdem häufig verwendete Tools wie Git, Wget, rsync, OpenSSH und nano.

{% data reusables.codespaces.customize-vcpus-and-ram %}

## Schritt 2: Hinzufügen einer Entwicklungscontainerkonfiguration zu einem Repository aus einer Vorlage

Im Standardentwicklungscontainer für {% data variables.product.prodname_github_codespaces %} sind die aktuelle Java-Version, Paket-Manager (Maven, Gradle) und andere gängige Tools bereits vorinstalliert. Es wird jedoch empfohlen, einen eigenen Entwicklungscontainer zu konfigurieren, der alle Tools und Skripts enthält, die für dein Projekt erforderlich sind. Dadurch wird eine vollständig reproduzierbare Umgebung für alle {% data variables.product.prodname_github_codespaces %}-Benutzer in deinem Repository bereitgestellt.

{% data reusables.codespaces.setup-custom-devcontainer %}

{% data reusables.codespaces.command-palette-container %}
1. Klicke in diesem Beispiel auf **Java**. In der Praxis kannst du einen beliebigen Container auswählen, der für Java oder eine Kombination von Tools wie Java und Azure Functions spezifisch ist.
  ![Wähle die Option „Java“ aus der Liste aus.](/assets/images/help/codespaces/add-java-prebuilt-container.png)
1. Klicke auf die empfohlene Version von Java.
  ![Auswahl der Java-Version](/assets/images/help/codespaces/add-java-version.png) {% data reusables.codespaces.rebuild-command %}

### Struktur des Dev-Containers

Durch das Hinzufügen der Vorlage des Java-Entwicklungscontainers wird das Verzeichnis `.devcontainer` mit den folgenden Dateien zum Stammverzeichnis des Projektrepositorys hinzugefügt:

- `devcontainer.json`
- Dockerfile

Die neu hinzugefügte `devcontainer.json`-Datei definiert einige Eigenschaften, die nach dem Beispiel beschrieben werden.

#### devcontainer.json

```json
// For format details, see https://aka.ms/vscode-remote/devcontainer.json or this file's README at:
// https://github.com/microsoft/vscode-dev-containers/tree/v0.159.0/containers/java
{
    "name": "Java",
    "build": {
        "dockerfile": "Dockerfile",
        "args": {
            // Update the VARIANT arg to pick a Java version: 11, 14
            "VARIANT": "11",
            // Options
            "INSTALL_MAVEN": "true",
            "INSTALL_GRADLE": "false",
            "INSTALL_NODE": "false",
            "NODE_VERSION": "lts/*"
        }
    },

    // Set *default* container specific settings.json values on container create.
    "settings": {
        "terminal.integrated.shell.linux": "/bin/bash",
        "java.home": "/docker-java-home",
        "maven.executable.path": "/usr/local/sdkman/candidates/maven/current/bin/mvn"
    },

    // Add the IDs of extensions you want installed when the container is created.
    "extensions": [
        "vscjava.vscode-java-pack"
    ],

    // Use 'forwardPorts' to make a list of ports inside the container available locally.
    // "forwardPorts": [],

    // Use 'postCreateCommand' to run commands after the container is created.
    // "postCreateCommand": "java -version",

    // Uncomment to connect as a non-root user. See https://aka.ms/vscode-remote/containers/non-root.
    "remoteUser": "vscode"
}
```

- **name:** Du kannst deinem Entwicklungscontainer einen beliebigen Namen geben. Dies ist bloß der Standardname.
- **build**: Hierbei handelt es sich um die Buildeigenschaften.
  - **dockerfile**: Im `build`-Objekt enthält `dockerfile` den Pfad zu der Dockerfile-Datei, die ebenfalls aus der Vorlage hinzugefügt wurde.
  - **args**
    - **variant**: Diese Datei enthält als einzelnes Buildargument die Java-Version, die an das Dockerfile übergeben wird.
- **settings**: Hierbei handelt es sich um die {% data variables.product.prodname_vscode %}-Einstellungen, die du festlegen kannst.
  - **terminal.integrated.shell.linux**: Auch wenn Bash hier standardmäßig verwendet wird, kannst du andere Terminalshells verwenden, indem du diese Einstellung bearbeitest.
- **extensions**: Diese Erweiterungen sind standardmäßig enthalten.
  - **vscjava.vscode-java-pack**: Das Java-Erweiterungspaket enthält beliebte Erweiterungen für die Java-Entwicklung, die für die ersten Schritte hilfreich sein können.
- **forwardPorts:** Alle hier aufgeführten Ports werden automatisch weitergeleitet. Weitere Informationen findest du unter [Weiterleiten von Ports in Codespaces](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace).
- **postCreateCommand**: Verwende diese Option, um Befehle auszuführen, die nicht in der Dockerfile-Datei definiert sind, nachdem dein Codespace erstellt wurde.
- **remoteUser**: Wenn du etwas als `vscode`-Benutzer ausführst, kannst du diese Option standardmäßig auf `root` setzen.

#### Dockerfile

```bash
# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.159.0/containers/java/.devcontainer/base.Dockerfile
ARG VARIANT="14"
FROM mcr.microsoft.com/vscode/devcontainers/java:0-${VARIANT}

# [Optional] Install Maven or Gradle
ARG INSTALL_MAVEN="false"
ARG MAVEN_VERSION=3.6.3
ARG INSTALL_GRADLE="false"
ARG GRADLE_VERSION=5.4.1
RUN if [ "${INSTALL_MAVEN}" = "true" ]; then su vscode -c "source /usr/local/sdkman/bin/sdkman-init.sh && sdk install maven \"${MAVEN_VERSION}\""; fi \
    && if [ "${INSTALL_GRADLE}" = "true" ]; then su vscode -c "source /usr/local/sdkman/bin/sdkman-init.sh && sdk install gradle \"${GRADLE_VERSION}\""; fi

# [Optional] Install a version of Node.js using nvm for front end dev
ARG INSTALL_NODE="true"
ARG NODE_VERSION="lts/*"
RUN if [ "${INSTALL_NODE}" = "true" ]; then su vscode -c "source /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} 2>&1"; fi

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment this line to install global node packages.
# RUN su vscode -c "source /usr/local/share/nvm/nvm.sh && npm install -g <your-package-here>" 2>&1
```

Du kannst die Dockerfile verwenden, um zusätzliche Containerebenen zum Definieren von Betriebssystempaketen, Java-Versionen oder globalen Paketen hinzuzufügen, die im Container enthalten sein sollen.

## Schritt 3: Bearbeite die Datei „devcontainer.json“.

Mit der hinzugefügten Entwicklungscontainerkonfiguration und einem grundlegenden Verständnis der Funktionen kannst du nun Änderungen vornehmen, um deine Umgebung weiter anzupassen. In diesem Beispiel fügen wir Eigenschaften hinzu, um Erweiterungen und deine Projektabhängigkeiten zu installieren, wenn der Codespace gestartet wird.

1. Wähle im Explorer die `devcontainer.json`-Datei aus der Struktur aus, und öffne sie. Möglicherweise musst du den Ordner `.devcontainer` erweitern, um diese anzuzeigen.

   ![„devcontainer.json“-Datei im Explorer](/assets/images/help/codespaces/devcontainers-options.png)

2. Füge deiner `devcontainer.json`-Datei nach `extensions` folgende Zeilen hinzu:

   ```json{:copy}
   "postCreateCommand": "npm install",
   "forwardPorts": [4000],
   ```

   {% data reusables.codespaces.more-info-devcontainer %}

{% data reusables.codespaces.rebuild-command %}

   {% data reusables.codespaces.rebuild-reason %}

## Schritt 4: Ausführen der Anwendung

Im vorherigen Abschnitt hast du den `postCreateCommand`-Befehl verwendet, um mehrere Pakete über npm zu installieren. Du kannst diesen nun verwenden, um unsere Anwendung mit npm auszuführen.

1. Führe deine Anwendung durch das Drücken von `F5` aus.

2. Wenn dein Projekt gestartet wird, sollte in der unteren rechten Ecke von {% data variables.product.prodname_vscode_shortname %} eine Popupbenachrichtigung angezeigt werden, die eine Aufforderung zum Herstellen einer Verbindung mit dem Port enthält, den dein Projekt verwendet.

   ![Popupbenachrichtigung für Portweiterleitung](/assets/images/help/codespaces/codespaces-port-toast.png)

## Schritt 5: Committen der Änderungen

{% data reusables.codespaces.committing-link-to-procedure %}

## Nächste Schritte

Du solltest jetzt mit der Entwicklung deines Java-Projekts in {% data variables.product.prodname_github_codespaces %} beginnen können. Im Folgenden findest du einige zusätzliche Ressourcen für erweiterte Szenarios:

{% data reusables.codespaces.next-steps-adding-devcontainer %}
