---
title: Einrichten deines Python-Projekts für GitHub Codespaces
allowTitleToDifferFromFilename: true
shortTitle: Setting up your Python project
intro: 'Beginne mit deinem Python-Projekt in {% data variables.product.prodname_github_codespaces %}, indem du einen benutzerdefinierten Entwicklungscontainer erstellst.'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /codespaces/getting-started-with-codespaces/getting-started-with-your-python-project-in-codespaces
type: tutorial
topics:
  - Codespaces
  - Developer
  - Python
hasExperimentalAlternative: true
hidden: true
ms.openlocfilehash: 2d9c627907f447a3efd873fceba963b899b57c39
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159565'
---
## Einführung

In diesem Leitfaden wird veranschaulicht, wie du dein Python-Projekt in {% data reusables.codespaces.setting-up-project-intro %} einrichtest.

### Voraussetzungen

- Du solltest über ein vorhandenes Python-Projekt in einem Repository auf {% data variables.product.prodname_dotcom_the_website %} verfügen. Wenn du über kein Projekt verfügst, kannst du dieses Tutorial mit dem folgenden Beispiel verwenden: https://github.com/2percentsilk/python-quickstart.
- {% data variables.product.prodname_github_codespaces %} muss für deine Organisation aktiviert sein.

## Schritt 1: Öffnen deines Projekt in einem Codespace

1. Verwende das Dropdownmenü **{% octicon "code" aria-label="The code icon" %} Code** unter dem Repositorynamen, und klicke auf der Registerkarte **Codespaces** auf das Pluszeichen ({% octicon "plus" aria-label="The plus icon" %}).

  ![Schaltfläche „New codespace" (Neuer Codespace)](/assets/images/help/codespaces/new-codespace-button.png)

Wenn du einen Codespace erstellst, wird dein Projekt auf einer Remote-VM erstellt, die dir zugewiesen ist. Der Container deines Codespace verfügt standardmäßig über viele Sprachen und Laufzeiten wie Node.js, JavaScript, TypeScript, nvm, npm und yarn. Er enthält außerdem gängige Tools wie Git, Wget, rsync, OpenSSH und nano.

{% data reusables.codespaces.customize-vcpus-and-ram %}

## Schritt 2: Hinzufügen einer Entwicklungscontainerkonfiguration zu deinem Repository aus einer Vorlage

Im Standardentwicklungscontainer für {% data variables.product.prodname_github_codespaces %} sind die aktuelle Python-Version, Paket-Manager (pip, Miniconda) und andere gängige Tools bereits vorinstalliert. Es wird jedoch empfohlen, einen eigenen Entwicklungscontainer zu konfigurieren, der alle Tools und Skripts enthält, die für dein Projekt erforderlich sind. Dadurch wird eine vollständig reproduzierbare Umgebung für alle {% data variables.product.prodname_github_codespaces %}-Benutzer in deinem Repository bereitgestellt.

{% data reusables.codespaces.setup-custom-devcontainer %}

{% data reusables.codespaces.command-palette-container %}
1. Klicke für dieses Beispiel auf **Python 3**. Wenn du zusätzliche Funktionen benötigst, kannst du einen beliebigen Python-spezifischen Container oder eine Kombination von Tools wie Python 3 und PostgreSQL auswählen.
  ![Auswählen der Option „Python“ aus der Liste](/assets/images/help/codespaces/add-python-prebuilt-container.png)
1. Klicke auf die empfohlene Python-Version.
  ![Auswahl der Python-Version](/assets/images/help/codespaces/add-python-version.png)
1. Akzeptiere die Standardoption, um deiner Anpassung Node.js hinzuzufügen.
  ![Hinzufügen der Node.js-Auswahl](/assets/images/help/codespaces/add-nodejs-selection.png) {% data reusables.codespaces.rebuild-command %}

### Struktur des Dev-Containers

Durch das Hinzufügen der Vorlage des Python-Entwicklungscontainers wird ein Verzeichnis `.devcontainer` mit den folgenden Dateien zum Stammverzeichnis des Projektrepositorys hinzugefügt:

- `devcontainer.json`
- Dockerfile

Die neu hinzugefügte `devcontainer.json`-Datei definiert einige Eigenschaften, die nach dem Beispiel beschrieben werden.

#### devcontainer.json

```json
{
    "name": "Python 3",
    "build": {
        "dockerfile": "Dockerfile",
        "context": "..",
        "args": {
            // Update 'VARIANT' to pick a Python version: 3, 3.6, 3.7, 3.8, 3.9
            "VARIANT": "3",
            // Options
            "INSTALL_NODE": "true",
            "NODE_VERSION": "lts/*"
        }
    },

    // Set *default* container specific settings.json values on container create.
    "settings": {
        "terminal.integrated.shell.linux": "/bin/bash",
        "python.pythonPath": "/usr/local/bin/python",
        "python.linting.enabled": true,
        "python.linting.pylintEnabled": true,
        "python.formatting.autopep8Path": "/usr/local/py-utils/bin/autopep8",
        "python.formatting.blackPath": "/usr/local/py-utils/bin/black",
        "python.formatting.yapfPath": "/usr/local/py-utils/bin/yapf",
        "python.linting.banditPath": "/usr/local/py-utils/bin/bandit",
        "python.linting.flake8Path": "/usr/local/py-utils/bin/flake8",
        "python.linting.mypyPath": "/usr/local/py-utils/bin/mypy",
        "python.linting.pycodestylePath": "/usr/local/py-utils/bin/pycodestyle",
        "python.linting.pydocstylePath": "/usr/local/py-utils/bin/pydocstyle",
        "python.linting.pylintPath": "/usr/local/py-utils/bin/pylint"
    },

    // Add the IDs of extensions you want installed when the container is created.
    "extensions": [
        "ms-python.python"
    ],

    // Use 'forwardPorts' to make a list of ports inside the container available locally.
    // "forwardPorts": [],

    // Use 'postCreateCommand' to run commands after the container is created.
    // "postCreateCommand": "pip3 install --user -r requirements.txt",

    // Comment out connect as root instead. More info: https://aka.ms/vscode-remote/containers/non-root.
    "remoteUser": "vscode"
}
```

- **name**: Du kannst deinem Entwicklungscontainer einen beliebigen Namen geben. Dies ist nur der Standardname.
- **build**: Hierbei handelt es sich um die Buildeigenschaften.
  - **dockerfile**: Im `build`-Objekt enthält `dockerfile` den Pfad zu der Dockerfile-Datei, die ebenfalls aus der Vorlage hinzugefügt wurde.
  - **args**
    - **variant**: Diese Datei enthält nur ein Buildargument, das die zu verwendende Node-Version angibt, die an die Dockerfile-Datei übergeben wird.
- **settings**: Hierbei handelt es sich um die {% data variables.product.prodname_vscode %}-Einstellungen.
  - **terminal.integrated.shell.linux**: Auch wenn Bash hier standardmäßig verwendet wird, kannst du andere Terminalshells verwenden, indem du diese Einstellung bearbeitest.
- **extensions**: Diese Erweiterungen sind standardmäßig enthalten.
  - **ms-python.python**: Die Microsoft Python-Erweiterung bietet umfassende Unterstützung für die Python-Sprache (für alle aktiv unterstützten Versionen der Sprache: >=3.6), u. a. für Features wie IntelliSense, Linten, Debuggen, Codenavigation, Codeformatierung, Refactoring, Variablen-Explorer und Test-Explorer.
- **forwardPorts:** Alle hier aufgeführten Ports werden automatisch weitergeleitet. Weitere Informationen findest du unter [Weiterleiten von Ports in Codespaces](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace).
- **postCreateCommand**: Verwende diese Eigenschaft zum Ausführen von Befehlen, die nicht in der Dockerfile-Datei definiert sind (etwa `pip3 install -r requirements`), nachdem dein Codespace erstellt wurde.
- **remoteUser**: Wenn du etwas als `vscode`-Benutzer*in ausführst, kannst du diese Option standardmäßig auf `root` setzen.

#### Dockerfile

```bash
# [Choice] Python version: 3, 3.9, 3.8, 3.7, 3.6
ARG VARIANT="3"
FROM mcr.microsoft.com/vscode/devcontainers/python:0-${VARIANT}

# [Option] Install Node.js
ARG INSTALL_NODE="true"
ARG NODE_VERSION="lts/*"
RUN if [ "${INSTALL_NODE}" = "true" ]; then su vscode -c "umask 0002 && . /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} 2>&1"; fi

# [Optional] If your pip requirements rarely change, uncomment this section to add them to the image.
# COPY requirements.txt /tmp/pip-tmp/
# RUN pip3 --disable-pip-version-check --no-cache-dir install -r /tmp/pip-tmp/requirements.txt \
#    && rm -rf /tmp/pip-tmp

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment this line to install global node packages.
# RUN su vscode -c "source /usr/local/share/nvm/nvm.sh && npm install -g <your-package-here>" 2>&1
```

Du kannst das Dockerfile verwenden, um zusätzliche Containerebenen zum Definieren von Betriebssystempaketen, Knotenversionen oder globalen Paketen hinzuzufügen, die im Container enthalten sein sollen.

## Schritt 3: Bearbeiten der devcontainer.json-Datei

Mit der hinzugefügten Entwicklungscontainerkonfiguration und einem grundlegenden Verständnis der Funktionen kannst du nun Änderungen vornehmen, um deine Umgebung weiter anzupassen. In diesem Beispiel fügen wir Eigenschaften hinzu, um Erweiterungen und deine Projektabhängigkeiten zu installieren, wenn der Codespace gestartet wird.

1. Erweitere im Explorer den `.devcontainer`-Ordner, und wähle die `devcontainer.json`-Datei aus der Struktur aus, um sie zu öffnen.

  ![devcontainer.json-Datei im Explorer](/assets/images/help/codespaces/devcontainers-options.png)

2. Aktualisiere die `extensions`-Liste in deiner `devcontainer.json`-Datei, um einige Erweiterungen hinzuzufügen, die beim Arbeiten mit deinem Projekt nützlich sind.

  ```json{:copy}
  "extensions": [
          "ms-python.python",
          "cstrap.flask-snippets",
          "streetsidesoftware.code-spell-checker"
      ],
  ```

3. Hebe die Auskommentierung von `postCreateCommand` auf, um erforderliche Komponenten im Rahmen des Codespace-Setupprozesses automatisch zu installieren.

  ```json{:copy}
  // Use 'postCreateCommand' to run commands after the container is created.
  "postCreateCommand": "pip3 install --user -r requirements.txt",
  ```

{% data reusables.codespaces.rebuild-command %}

   {% data reusables.codespaces.rebuild-reason %}

5. Stelle sicher, dass deine Änderungen erfolgreich angewendet wurden, indem du überprüfst, ob die Erweiterungen„Code Spell Checker“ und „Flask Snippet“ installiert wurden.

   ![Erweiterungsliste](/assets/images/help/codespaces/python-extensions.png)

## Schritt 4: Ausführen der Anwendung

Im vorherigen Abschnitt hast du den `postCreateCommand`-Befehl verwendet, um mehrere Pakete über pip3 zu installieren. Deine Abhängigkeiten sind installiert. Nun kannst du deine Anwendung ausführen.

1. Führe deine Anwendung aus, indem du `F5` drückst oder im Codespaceterminal `python -m flask run` eingibst.

2. Wenn dein Projekt gestartet wird, sollte in der unteren rechten Ecke von {% data variables.product.prodname_vscode_shortname %} eine Popupbenachrichtigung angezeigt werden, die eine Aufforderung zum Herstellen einer Verbindung mit dem Port enthält, den dein Projekt verwendet.

  ![Popupbenachrichtigung für Portweiterleitung](/assets/images/help/codespaces/python-port-forwarding.png)

## Schritt 5: Committen der Änderungen

{% data reusables.codespaces.committing-link-to-procedure %}

## Nächste Schritte

Du solltest jetzt mit der Entwicklung deines Python-Projekts in {% data variables.product.prodname_github_codespaces %} beginnen können. Im Folgenden findest du einige zusätzliche Ressourcen für erweiterte Szenarios:

{% data reusables.codespaces.next-steps-adding-devcontainer %}
