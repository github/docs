---
title: Verwenden von GitHub Codespaces in der JetBrains-IDE
shortTitle: JetBrains IDEs
intro: 'Du kannst JetBrains Gateway verwenden, um eine Verbindung mit deinem Codespace herzustellen und in deiner bevorzugten JetBrains-IDE zu arbeiten.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Developer
ms.openlocfilehash: f522bf481e932f9735560ee4a1fec21944ced2e7
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159729'
---
{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

## Informationen zu {% data variables.product.prodname_codespaces %} in JetBrains-IDEs

Wenn du eine JetBrains-IDE zum Arbeiten an deinem Code verwendest, kannst du die Vorteile des Arbeitens in einem Codespace nutzen. Hierfür wird die JetBrains Gateway-Anwendung verwendet.

Nach der Installation von JetBrains Gateway kannst du JetBrains als Standard-Editor festlegen. Wenn du anschließend einen Codespace über {% data variables.product.prodname_dotcom_the_website %} öffnest, wird immer JetBrains Gateway gestartet, und du kannst deine JetBrains-IDE auswählen und eine Verbindung zum Codespace herstellen.

{% note %}

**Hinweis**: In JetBrains Gateway sind nur vorhandene Codespaces verfügbar. Du kannst Codespaces auf {% data variables.product.prodname_dotcom_the_website %} oder mit der {% data variables.product.prodname_cli %} erstellen. Weitere Informationen findest du unter [Erstellen eines Codespaces für ein Repository](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository).

{% endnote %}

### Verbindungsherstellung mit JetBrains für die Remoteentwicklung

Du kannst einen Codespace folgendermaßen in deiner JetBrains-IDE verwenden:

* Wähle in der JetBrains Gateway-Anwendung einen aktiven oder beendeten Codespace aus. 
* Wähle anschließend aus, welche JetBrains-IDE verwendet werden soll. 
* Die ausgewählte JetBrains-IDE wird dann auf den virtuellen Remotecomputer heruntergeladen, der deinen Codespace und den Quellcode hostet.
* Die schlanke JetBrains-Clientanwendung wird dann auf den lokalen Computer heruntergeladen und gestartet.
* Die Clientanwendung stellt eine Verbindung mit der vollständigen Back-End-IDE her.
* Du kannst in der Clientanwendung genau wie in einer lokalen Umgebung an deinem Code arbeiten.

## Voraussetzungen

Du benötigst Folgendes, um in einem Codespaces in einer JetBrains-IDE zu arbeiten:

* Eine gültige JetBrains-Lizenz
* Die JetBrains Gateway-Anwendung
* {% data variables.product.prodname_cli %} 2.18.0 oder höher 
* Einen vorhandenen Codespace, der einen SSH-Server ausführt

### JetBrains-Lizenz

Du benötigst eine Lizenz für mindestens eine der unterstützten JetBrains-IDEs, um über JetBrains Gateway eine Verbindung mit einem Codespace herzustellen.

### JetBrains Gateway

Du kannst JetBrains Gateway über die Anwendung „JetBrains Toolbox“ installieren und aktualisieren.

1. Lade [JetBrains Toolbox](https://www.jetbrains.com/toolbox-app) herunter, und installiere die Anwendung.
1. Öffne JetBrains Toolbox.
1. Suche in der Liste der verfügbaren Tools nach **Gateway**, und klicke auf **Installieren**.

   ![Screenshot von JetBrains Toolbox](/assets/images/help/codespaces/jetbrains-toolbox.png)

### {% data variables.product.prodname_cli %}

Das {% data variables.product.prodname_github_codespaces %}-Plug-In für JetBrains Gateway erfordert, dass {% data variables.product.prodname_cli %} 2.18.0 oder höher installiert und konfiguriert ist, bevor ein Codespace über JetBrains Gateway geöffnet werden kann.

Verwende diesen Befehl, um die Version von {% data variables.product.prodname_cli %} zu überprüfen:

```shell{:copy}
gh --version
```

Weitere Informationen findest du unter [Informationen zur GitHub-CLI](/github-cli/github-cli/about-github-cli).

### Codespace mit ausgeführtem SSH-Server

Es muss ein Codespace vorhanden sein, mit dem eine Verbindung hergestellt werden kann. {% data reusables.codespaces.ways-to-create-a-codespace %} Weitere Informationen findest du unter [Erstellen eines Codespaces für ein Repository](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository).

{% data reusables.codespaces.ssh-server-installed %}

Weitere Informationen zur Datei `devcontainer.json` und dem Standardcontainerimage findest du unter [Einführung in Entwicklungscontainer](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers).

{% note %}

**Hinweis**: Hilfe beim Herstellen einer Verbindung mit deinem Codespace über SSH findest du unter [Problembehandlung für {% data variables.product.prodname_github_codespaces %}-Clients](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients?tool=jetbrains#ssh-connection-issues).

{% endnote %}

## Einrichten von JetBrains Gateway

Wenn du JetBrains Gateway zum ersten Mal für {% data variables.product.prodname_github_codespaces %} verwendest, musst du das {% data variables.product.prodname_codespaces %}-Plug-In installieren. Außerdem musst du JetBrains Gateway den Zugriff auf {% data variables.product.prodname_dotcom_the_website %} über dein {% data variables.product.prodname_dotcom %}-Konto gestatten. 

1. Öffne die Anwendung „JetBrains Gateway“.
1. Klicke unter **Weitere Anbieter installieren** auf den **Installationslink** für {% data variables.product.prodname_github_codespaces %}.

   ![Screenshot: Startansicht von JetBrains Gateway](/assets/images/help/codespaces/jetbrains-gateway-initial-view.png)

1. Klicke auf **Mit Codespace verbinden**.

   ![Screenshot von Gateway mit der Schaltfläche „Mit Codespace verbinden“](/assets/images/help/codespaces/jetbrains-gateway-connect.png)

1. Klicke im Dialogfeld „Willkommen bei JetBrains Gateway“ auf **Mit {% data variables.product.prodname_dotcom %} anmelden**.

   ![Screenshot der Anmeldeschaltfläche](/assets/images/help/codespaces/jetbrains-gateway-sign-in.png)

1. Klicke auf das Symbol neben dem einmaligen Code, um ihn zu kopieren, und klicke dann auf den Anmeldelink.

   ![Screenshot des einmaligen Anmeldecodes](/assets/images/help/codespaces/jetbrains-gateway-login-code.png)

1. Wenn du derzeit nicht bei {% data variables.product.prodname_dotcom %} angemeldet bist, wird die Anmeldeseite angezeigt. 
   * Gib deine Anmeldedaten ein, und klicke auf **Anmelden**.
   * Authentifiziere dich, zum Beispiel durch die Eingabe eines Zwei-Faktor-Authentifizierungscodes.
1. Füge auf der Seite „Geräteaktivierung“ den kopierten Code ein, und klicke auf **Weiter**.
1. Wenn du Organisationen angehörst, klicke auf der angezeigten Seite auf „Einmaliges Anmelden bei deiner Organisation“. Klicke neben den Organisationen, für die der Zugriff durch JetBrains Gateway autorisiert werden soll, auf **Autorisieren**. Klicke dann auf **Weiter**.
1. Klicke auf der Seite „{% data variables.product.prodname_github_codespaces %} für JetBrains autorisieren“ auf **{% data variables.product.prodname_dotcom %} autorisieren**.
1. Kehre zur JetBrains Gateway-Anwendung zurück, und öffne einen Codespace aus der Liste der derzeit aktiven oder beendeten Codespaces. Weitere Informationen findest du in Schritt 3 des folgenden Verfahrens.

## Öffnen eines Codespaces in deiner JetBrains-IDE

{% data reusables.codespaces.opening-codespace-in-jetbrains %}

   Wenn du zum ersten Mal eine Verbindung mit einem Codespace herstellst, wird die Back-End-IDE auf den Remotecomputer heruntergeladen. Dies kann einige Minuten dauern. Wenn du das nächste Mal eine Verbindung mit demselben Codespace herstellst, ist dieser Schritt nicht erforderlich, sodass der Verbindungsvorgang beschleunigt wird. 

   Anschließend wird die Back-End-IDE gestartet. Auch dieser Schritt ist in Zukunft nicht erforderlich, wenn du eine Verbindung mit einer Back-End-IDE herstellst, die noch ausgeführt wird. 
   
   Dann wird die Clientanwendung gestartet.

## Weitere nützliche Informationen

- [Entwicklung in einem Codespace](/codespaces/developing-in-codespaces/developing-in-a-codespace)
- [Verwenden des {% data variables.product.prodname_github_codespaces %}-Plug-Ins für JetBrains](/codespaces/codespaces-reference/using-the-github-codespaces-plugin-for-jetbrains)
- [Verwenden von {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_github_codespaces %}](/codespaces/codespaces-reference/using-github-copilot-in-github-codespaces)
- [Problembehandlung für {% data variables.product.prodname_github_codespaces %}-Clients](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients?tool=jetbrains)
