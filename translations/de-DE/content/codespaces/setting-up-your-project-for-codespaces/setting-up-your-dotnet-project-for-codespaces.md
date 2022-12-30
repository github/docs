---
title: Einrichten deines C#-Projekts (.NET) für GitHub Codespaces
shortTitle: Setting up your C# (.NET) project
allowTitleToDifferFromFilename: true
intro: 'Beginne mit deinem C#-Projekt (.NET) in {% data variables.product.prodname_github_codespaces %}, indem du einen benutzerdefinierten Entwicklungscontainer erstellst.'
redirect_from:
  - /codespaces/getting-started-with-codespaces/getting-started-with-your-dotnet-project
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
hasExperimentalAlternative: true
hidden: true
ms.openlocfilehash: 10282aedf3bdb239fa238e546c2fc6280787a6a0
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158613'
---
## Einführung

In diesem Leitfaden wird veranschaulicht, wie du dein C#-Projekt (.NET) in {% data reusables.codespaces.setting-up-project-intro %} einrichtest.

### Voraussetzungen

- Du solltest über ein vorhandenes C#-Projekt (.NET) in einem Repository auf {% data variables.product.prodname_dotcom_the_website %} verfügen. Wenn du über kein Projekt verfügst, kannst du dieses Tutorial mit dem folgenden Beispiel verwenden: https://github.com/2percentsilk/dotnet-quickstart.
- {% data variables.product.prodname_github_codespaces %} muss für deine Organisation aktiviert sein.

## Schritt 1: Öffnen deines Projekt in einem Codespace

1. Verwende das Dropdownmenü **{% octicon "code" aria-label="The code icon" %}-Code** unter dem Repositorynamen, und klicke auf der Registerkarte **Codespaces** auf das Pluszeichen ({% octicon "plus" aria-label="The plus icon" %}).

  ![Schaltfläche „New codespace" (Neuer Codespace)](/assets/images/help/codespaces/new-codespace-button.png)

Wenn du einen Codespace erstellst, wird dein Projekt auf einer Remote-VM erstellt, die dir zugewiesen ist. Der Container für deinen Codespace verfügt standardmäßig über viele Fragen und Runtimes (einschließlich .NET). Er enthält außerdem gängige Tools wie Git, Wget, rsync, OpenSSH und nano.

{% data reusables.codespaces.customize-vcpus-and-ram %}

## Schritt 2: Hinzufügen einer Entwicklungscontainerkonfiguration zu deinem Repository aus einer Vorlage

Im Standardentwicklungscontainer für {% data variables.product.prodname_github_codespaces %} sind die aktuelle .NET-Version und gängige Tools bereits vorinstalliert. Es wird jedoch empfohlen, einen eigenen Entwicklungscontainer zu konfigurieren, der alle Tools und Skripts enthält, die für dein Projekt erforderlich sind. Dadurch wird eine vollständig reproduzierbare Umgebung für alle {% data variables.product.prodname_github_codespaces %}-Benutzer in deinem Repository bereitgestellt.

{% data reusables.codespaces.setup-custom-devcontainer %}

{% data reusables.codespaces.command-palette-container %}
1. Klicke für dieses Beispiel auf **C# (.NET)**. Wenn du zusätzliche Features benötigst, kannst du einen beliebigen für C# (.NET) spezifischen Container oder eine Kombination aus Tools wie C# (.NET) und MS SQL auswählen.
  ![Auswählen der Option „C# (.NET)“ aus der Liste](/assets/images/help/codespaces/add-dotnet-prebuilt-container.png)
1. Klicke auf die empfohlene .NET-Version.
  ![.NET-Versionsauswahl](/assets/images/help/codespaces/add-dotnet-version.png)
1. Akzeptiere die Standardoption, um deiner Anpassung Node.js hinzuzufügen.
  ![Hinzufügen der Node.js-Auswahl](/assets/images/help/codespaces/dotnet-options.png) {% data reusables.codespaces.rebuild-command %}

### Struktur des Dev-Containers

Durch das Hinzufügen der Vorlage des C#-Entwicklungscontainers (.NET) wird ein `.devcontainer`-Ordner mit den folgenden Dateien zum Stammverzeichnis des Projektrepositorys hinzugefügt:

- `devcontainer.json`
- Dockerfile

Die neu hinzugefügte `devcontainer.json`-Datei definiert einige Eigenschaften, die nach dem Beispiel beschrieben werden.

#### devcontainer.json

```json
{
    "name": "C# (.NET)",
    "build": {
        "dockerfile": "Dockerfile",
        "args": {
            // Update 'VARIANT' to pick a .NET Core version: 2.1, 3.1, 5.0
            "VARIANT": "5.0",
            // Options
            "INSTALL_NODE": "true",
            "NODE_VERSION": "lts/*",
            "INSTALL_AZURE_CLI": "false"
        }
    },

    // Set *default* container specific settings.json values on container create.
    "settings": {
        "terminal.integrated.shell.linux": "/bin/bash"
    },

    // Add the IDs of extensions you want installed when the container is created.
    "extensions": [
        "ms-dotnettools.csharp"
    ],

    // Use 'forwardPorts' to make a list of ports inside the container available locally.
    // "forwardPorts": [5000, 5001],

    // [Optional] To reuse of your local HTTPS dev cert:
    //
    // 1. Export it locally using this command:
    //    * Windows PowerShell:
    //        dotnet dev-certs https --trust; dotnet dev-certs https -ep "$env:USERPROFILE/.aspnet/https/aspnetapp.pfx" -p "SecurePwdGoesHere"
    //    * macOS/Linux terminal:
    //        dotnet dev-certs https --trust; dotnet dev-certs https -ep "${HOME}/.aspnet/https/aspnetapp.pfx" -p "SecurePwdGoesHere"
    //
    // 2. Uncomment these 'remoteEnv' lines:
    //    "remoteEnv": {
    //        "ASPNETCORE_Kestrel__Certificates__Default__Password": "SecurePwdGoesHere",
    //        "ASPNETCORE_Kestrel__Certificates__Default__Path": "/home/vscode/.aspnet/https/aspnetapp.pfx",
    //    },
    //
    // 3. Start the container.
    //
    // 4. Drag ~/.aspnet/https/aspnetapp.pfx into the root of the file explorer.
    //
    // 5. Open a terminal in VS Code and run "mkdir -p /home/vscode/.aspnet/https && mv aspnetapp.pfx /home/vscode/.aspnet/https".
    //

    // Use 'postCreateCommand' to run commands after the container is created.
    // "postCreateCommand": "dotnet restore",

    // Comment out connect as root instead. More info: https://aka.ms/vscode-remote/containers/non-root.
    "remoteUser": "vscode"
}
```

- **name**: Du kannst deinem Entwicklungscontainer einen beliebigen Namen geben. Dies ist nur der Standardname.
- **build**: Hierbei handelt es sich um die Buildeigenschaften.
  - **dockerfile**: Im `build`-Objekt enthält `dockerfile` den Pfad zu der Dockerfile-Datei, die ebenfalls aus der Vorlage hinzugefügt wurde.
  - **args**
    - **variant:** Diese Datei enthält nur ein Buildargument, das die .NET Core-Version angibt, die du verwenden möchtest.
- **settings:** Hierbei handelt es sich um die {% data variables.product.prodname_vscode %}-Einstellungen.
  - **terminal.integrated.shell.linux**: Auch wenn Bash hier standardmäßig verwendet wird, kannst du andere Terminalshells verwenden, indem du diese Einstellung bearbeitest.
- **extensions**: Diese Erweiterungen sind standardmäßig enthalten.
  - **ms-dotnettools.csharp:** Die Microsoft-C#-Erweiterung bietet umfassende Unterstützung für die Entwicklung in C# (einschließlich Features wie unter anderem IntelliSense, Linten, Debuggen, Codenavigation, Codeformatierung, Refactoring, Variablen-Explorer und Test-Explorer).
- **forwardPorts:** Alle hier aufgeführten Ports werden automatisch weitergeleitet. Weitere Informationen findest du unter [Weiterleiten von Ports in Codespaces](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace).
- **postCreateCommand**: Verwende dies, um Befehle auszuführen, die nicht in der Dockerfile-Datei definiert sind, nachdem dein Codespace erstellt wurde.
- **remoteUser:** Du führst Vorgänge standardmäßig als vscode-Benutzer*in aus, du kannst diese Option aber auch auf das Stammverzeichnis festlegen.

#### Dockerfile

```bash
# [Choice] .NET version: 5.0, 3.1, 2.1
ARG VARIANT="5.0"
FROM mcr.microsoft.com/vscode/devcontainers/dotnetcore:0-${VARIANT}

# [Option] Install Node.js
ARG INSTALL_NODE="true"
ARG NODE_VERSION="lts/*"
RUN if [ "${INSTALL_NODE}" = "true" ]; then su vscode -c "umask 0002 && . /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} 2>&1"; fi

# [Option] Install Azure CLI
ARG INSTALL_AZURE_CLI="false"
COPY library-scripts/azcli-debian.sh /tmp/library-scripts/
RUN if [ "$INSTALL_AZURE_CLI" = "true" ]; then bash /tmp/library-scripts/azcli-debian.sh; fi \
    && apt-get clean -y && rm -rf /var/lib/apt/lists/* /tmp/library-scripts

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment this line to install global node packages.
# RUN su vscode -c "source /usr/local/share/nvm/nvm.sh && npm install -g <your-package-here>" 2>&1
```

Du kannst das Dockerfile verwenden, um zusätzliche Containerebenen zum Definieren von Betriebssystempaketen, Knotenversionen oder globalen Paketen hinzuzufügen, die im Container enthalten sein sollen.

## Schritt 3: Bearbeiten der devcontainer.json-Datei

Mit der hinzugefügten Entwicklungscontainerkonfiguration und einem grundlegenden Verständnis der Funktionen kannst du nun Änderungen vornehmen, um deine Umgebung weiter anzupassen. In diesem Beispiel fügen wir Eigenschaften hinzu, um Erweiterungen und deine Projektabhängigkeiten zu installieren, wenn der Codespace gestartet wird.

1. Wähle im Explorer die `devcontainer.json`-Datei aus der Struktur aus, und öffne sie. Möglicherweise musst du den Ordner `.devcontainer` erweitern, um diese anzuzeigen.

   ![devcontainer.json-Datei im Explorer](/assets/images/help/codespaces/devcontainers-options.png)

2. Aktualisiere die `extensions`-Liste in deiner `devcontainer.json`-Datei, um einige Erweiterungen hinzuzufügen, die beim Arbeiten mit deinem Projekt nützlich sind.

   ```json{:copy}
   "extensions": [
          "ms-dotnettools.csharp",
          "streetsidesoftware.code-spell-checker",
      ],
   ```

3. Hebe die Auskommentierung für `postCreateCommand` auf, um Abhängigkeiten als Teil des Codespace-Einrichtungsvorgangs wiederherzustellen.

   ```json{:copy}
   // Use 'postCreateCommand' to run commands after the container is created.
   "postCreateCommand": "dotnet restore",
   ```

   {% data reusables.codespaces.more-info-devcontainer %}

{% data reusables.codespaces.rebuild-command %}

   {% data reusables.codespaces.rebuild-reason %}

5. Stelle sicher, dass deine Änderungen erfolgreich angewendet wurden, indem du überprüfst, ob die Erweiterung „Code Spell Checker“ installiert wurde.

    ![Erweiterungsliste](/assets/images/help/codespaces/dotnet-extensions.png)

## Schritt 4: Ausführen der Anwendung

Im vorherigen Abschnitt hast du `postCreateCommand` verwendet, um mehrere Pakete über den `dotnet restore`-Befehl zu installieren. Mit den jetzt installierten Abhängigkeiten kannst du die Anwendung ausführen.

1. Führe deine Anwendung aus, indem du `F5` drückst oder im Terminal `dotnet watch run` eingibst.

2. Wenn dein Projekt gestartet wird, sollte in der unteren rechten Ecke von {% data variables.product.prodname_vscode_shortname %} eine Popupbenachrichtigung angezeigt werden, die eine Aufforderung zum Herstellen einer Verbindung mit dem Port enthält, den dein Projekt verwendet.

   ![Popupbenachrichtigung für Portweiterleitung](/assets/images/help/codespaces/python-port-forwarding.png)

## Schritt 5: Committen der Änderungen

{% data reusables.codespaces.committing-link-to-procedure %}

## Nächste Schritte

Du solltest jetzt mit der Entwicklung deines C#-Projekts (.NET) in {% data variables.product.prodname_github_codespaces %} beginnen können. Im Folgenden findest du einige zusätzliche Ressourcen für erweiterte Szenarios:

{% data reusables.codespaces.next-steps-adding-devcontainer %}
