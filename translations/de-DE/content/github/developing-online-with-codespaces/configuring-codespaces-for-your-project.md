---
title: Codespace für Dein Projekt konfigurieren
intro: Du kannst für jeden neuen Codespace in Deinem Repository eine Standardkonfiguration einrichten, um sicherzustellen, dass die Mitwirkenden alle Werkzeuge und Einstellung haben, die sie für ihre Online-Entwicklungsumgebung benötigen.
product: '{% data reusables.gated-features.codespaces %}'
permissions: Personen mit Schreibberechtigung in einem Repository können die Standard-Codespace-Konfiguration erstellen oder bearbeiten.
redirect_from:
  - /github/developing-online-with-github-codespaces/configuring-github-codespaces-for-your-project
versions:
  free-pro-team: '*'
---

{% data reusables.codespaces.release-stage %}

### Über Standard-Codespace-Konfigurationen

{% data reusables.codespaces.about-configuration %}

If you don't define a configuration in your repository, {% data variables.product.prodname_dotcom %} creates a codespace with a base Linux image. The base Linux image includes tools for Node.js, JavaScript, TypeScript, Python, C++, Java, C#, .NET Core, PHP, and PowerShell. For more information about the base Linux image, see the [`microsoft/vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers/tree/master/containers/codespaces-linux) repository.

{% data reusables.codespaces.about-personalization %} {% data reusables.codespaces.codespace-config-order %} Weitere Informationen findest Du unter „[{% data variables.product.prodname_codespaces %} für Dein Konto personalisieren](/github/developing-online-with-codespaces/personalizing-codespaces-for-your-account)."

Du kannst mittels einer vordefinierten Container-Konfiguration für Deinen Projekttyp eine Standard-Codespace-Konfiguration erstellen, oder Du kannst eine benutzerdefinierte Konfiguration erstellen, die auf die Bedürfnisse Deines Projektes zugeschnitten ist.

{% data variables.product.prodname_codespaces %}  uses settings contained in a configuration file named `devcontainer.json`. {% data reusables.codespaces.devcontainer-location %}

You can use your `devcontainer.json` to set default settings for the entire codespace environment, including the {% data variables.product.prodname_vscode %} editor, but you can also set editor-specific settings in a file named `.vscode/settings.json`.

Änderungen an der Codespace-Konfiguration eines Repository gelten nur für für alle neuen Codespaces und beeinflussen die bereits vorhandenen Codespaces nicht.

### Verwendung einer vorgefertigten Containerkonfiguration

Du kannst eine beliebige vorgefertigte Container-Konfiguration für {% data variables.product.prodname_vscode %} verwenden, die im [`vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers)-Repository verfügbar ist. Vorgefertigte Container-Definitionen enthalten eine gemeinsame Konfiguration für einen bestimmten Projekttyp, und können Dir helfen, schnell mit einer Konfiguration zu beginnen, die bereits über die entsprechenden Container-Optionen, {% data variables.product.prodname_vscode %}-Einstellungen und {% data variables.product.prodname_vscode %}-Erweiterungen verfügt, die installiert werden sollen.

1. Klone oder lade das [`vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers)-Repository herunter.
1. Navigiere im `vscode-dev-containers`-Repository zum [`Containers`](https://github.com/microsoft/vscode-dev-containers/tree/master/containers)-Verzeichnis, und wähle dann eine Container-Konfiguration aus, die den Bedürfnissen Deines Projektes entspricht. We'll use the [Node.js & JavaScript](https://aka.ms/vscode-dev-containers/definitions/node) container configuration as an example.
1. From the [`Node.js & JavaScript`](https://aka.ms/vscode-dev-containers/definitions/node) folder, copy the `.devcontainer` folder to the root of your project's repository.
1. Gib die neue Konfiguration frei und übertrage sie zu Deinem Projekt-Repository auf {% data variables.product.prodname_dotcom %}.

Jeder neue Codespace, der aus einem Branch mit einem `.devcontainer`-Verzeichnis erstellt wird, wird entsprechend dem Inhalt dieses Verzeichnisses konfiguriert werden. Weitere Informationen findest du unter „[Einen Codespace erstellen](/github/developing-online-with-codespaces/creating-a-codespace)."

### Erstellen einer benutzerdefinierten Codespace-Konfiguration

If none of the pre-built configurations meet your needs, you can create a custom configuration by adding a `devcontainer.json` file. {% data reusables.codespaces.devcontainer-location %}

In der Datei kannst Du unterstützte Konfigurationsschlüssel verwenden, um Aspekte der Codespace-Umgebung festzulegen, beispielsweise welche {% data variables.product.prodname_vscode %}-Erweiterungen installiert werden sollen.

{% data reusables.codespaces.vscode-settings-order %}

Du kannst die Standard-Editor-Einstellungen für {% data variables.product.prodname_vscode %} an zwei Orten festlegen.

* Editor-Einstellungen, die in `.vscode/settings.json` definiert sind, werden als _Workspace_-bezogene Einstellungen im Codespace angewendet.
* Editor--Einstellungen, die im `settings`-Schlüssel in der `devcontainer.json`-Datei definiert sind, werden als as _Remote [Codespaces]_-bezogene Einstellungen im Codespace angewendet.

### Unterstützte Codespace-Konfigurationsschlüssel

Du kannst Konfigurationsschlüssel verwenden, die von {% data variables.product.prodname_codespaces %} in der `devcontainer.json`-Datei unterstützt werden.

#### Allgemeine Einstellungen

- `name`
- `settings`
- `extensions`
- `forwardPorts`
- `postCreateCommand`

#### Docker-, Dockerfile- oder Image-Einstellungen

- `image`
- `dockerFile`
- `context`
- `containerEnv`
- `remoteEnv`
- `containerUser`
- `remoteUser`
- `mounts`
- `runArgs`
- `overrideCommand`
- `dockerComposeFile`

Weitere Informationen über die verfügbaren Einstellungen für `devcontainer.json` findest Du unter [devcontainer.json-Referenz](https://aka.ms/vscode-remote/devcontainer.json) in der {% data variables.product.prodname_vscode %}-Dokumentation.
