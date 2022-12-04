---
title: Hinzufügen von Features zu einer Datei vom Typ „devcontainer.json“
shortTitle: Adding features
intro: 'Mit Features kannst du Schnell Tools, Runtimes oder Bibliotheken zu deiner Entwicklungscontainerkonfiguration hinzufügen.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
ms.openlocfilehash: 7e72739e93e83995d86baf19d62f7bf2e1c5b6bc
ms.sourcegitcommit: 3ff64a8c8cf70e868c10105aa6bbf6cd4f78e4d3
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180827'
---
{% data reusables.codespaces.about-features %} Verwende die Registerkarten in diesem Artikel, um Anweisungen für die einzelnen Möglichkeiten zum Hinzufügen von Features anzuzeigen.

## Hinzufügen von Features zu einer Datei vom Typ `devcontainer.json`

{% webui %}

1. Navigiere zu deinem Repository auf {% data variables.product.prodname_dotcom_the_website %}, suche deine `devcontainer.json`-Datei, und klicke auf {% octicon "pencil" aria-label="The edit icon" %}, um die Datei zu bearbeiten.
   
   Ist noch keine Datei vom Typ `devcontainer.json` vorhanden, kannst du jetzt eine erstellen. Weitere Informationen findest du unter [Einführung in Entwicklungscontainer](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#creating-a-custom-dev-container-configuration).
1. Navigiere rechts neben dem Datei-Editor auf der Registerkarte **Marketplace** zu dem Feature, das du hinzufügen möchtest, oder suche nach diesem, und klicke dann auf den Namen des Features.

   ![Screenshot: Terraform-Feature auf der Registerkarte „Marketplace“ mit „Terra“ in der Suchleiste](/assets/images/help/codespaces/feature-marketplace.png)
3. Klicke unter „Installation“ auf den Codeschnipsel, um ihn in die Zwischenablage zu kopieren, und füge ihn dann in das `features`-Objekt in deiner `devcontainer.json`-Datei ein.

   ![Screenshot: Codeblock im Abschnitt „Installation“ der Registerkarte „Marketplace“](/assets/images/help/codespaces/feature-installation-code.png)

   ```JSON
   "features": {
        ...
        "ghcr.io/devcontainers/features/terraform:1": {},
        ...
    }
    ```
1. Standardmäßig wird die neueste Version des Features verwendet. Um eine andere Version auszuwählen oder andere Optionen für das Feature zu konfigurieren, erweitere die unter „Optionen“ aufgeführten Eigenschaften, um die verfügbaren Werte anzuzeigen, und füge dann die Optionen hinzu, indem du das Objekt in deiner `devcontainer.json`-Datei manuell bearbeitest.

   ![Screenshot: Abschnitt „Optionen“ der Registerkarte „Marketplace“ mit erweiterten Optionen „Version“ und „tflint“](/assets/images/help/codespaces/feature-options.png)

   ```JSON
   "features": {
        ...
        "ghcr.io/devcontainers/features/terraform:1": {
            "version": "1.1",
            "tflint": "latest"
        },
        ...
    }
    ```
1. Committe die Änderungen an der Datei `devcontainer.json`.

Die Konfigurationsänderungen werden in neuen Codespaces wirksam, die aus dem Repository erstellt wurden. Damit die Änderungen in vorhandenen Codespaces wirksam werden, musst du die Aktualisierungen der Datei `devcontainer.json` in deinen Codespace pullen und dann den Container für den Codespace neu erstellen. Weitere Informationen findest du unter [Einführung in Entwicklungscontainer](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace).

{% endwebui %}

{% vscode %}

{% note %}

Wenn du lokal arbeitest und keine Verbindung mit einem Codespace besteht, musst du zum Hinzufügen von Features in {% data variables.product.prodname_vscode_shortname %} die Erweiterung „Dev Containers“ installieren und aktivieren. Weitere Informationen zu dieser Erweiterung findest du unter [{% data variables.product.prodname_vs_marketplace_shortname %}](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).

{% endnote %}

{% data reusables.codespaces.command-pallette %}
2. Beginne mit der Eingabe von „Konfigurieren“, und wähle **Codespaces: Konfigurieren von Features für Entwicklungscontainer** aus.

   ![Befehl zum Konfigurieren von Features für Entwicklungscontainer in der Befehlspalette](/assets/images/help/codespaces/codespaces-configure-features.png)

3. Aktualisiere deine Featureauswahl, und klicke dann auf **OK**.

   ![Menü zum Auswählen zusätzlicher Features bei der Containerkonfiguration](/assets/images/help/codespaces/select-additional-features.png)

4. Wenn du in einem Codespace arbeitest, wird in der unteren rechten Ecke eine Eingabeaufforderung angezeigt. Klicke auf **Jetzt neu erstellen**, um den Container neu zu erstellen und die Änderungen auf den Codespace anzuwenden, in dem du arbeitest.

   ![„Codespaces: Container neu erstellen“ in der Befehlspalette](/assets/images/help/codespaces/rebuild-prompt.png)

{% endvscode %}
