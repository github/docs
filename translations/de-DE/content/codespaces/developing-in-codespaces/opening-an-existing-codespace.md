---
title: Öffnen eines vorhandenen Codespaces
intro: 'Du kannst einen Codespace, den du geschlossen oder angehalten hast, erneut öffnen und zu deiner Arbeit zurückkehren.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Open an existing codespace
ms.openlocfilehash: b139b7f4e8a696416c97b3c400d09a9f26371b9c
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188296'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

Du kannst jeden deiner aktiven oder angehaltenen Codespaces auf {% data variables.product.prodname_dotcom_the_website %}, in einer JetBrains-IDE, in {% data variables.product.prodname_vscode %} oder mit {% data variables.product.prodname_cli %} erneut öffnen. Ein gelöschter Codespace kann nicht erneut geöffnet werden. Weitere Informationen findest du unter [Der Codespace-Lebenszyklus](/codespaces/getting-started/the-codespace-lifecycle).

Du kannst alle deine Codespaces auf der Seite „Deine Codespaces“ unter [github.com/codespaces](https://github.com/codespaces) anzeigen. Auf dieser Seite hast du folgende Möglichkeiten:

- Du kannst deine Codespaces öffnen, beenden oder löschen.
- Du kannst feststellen, wer der Besitzer deiner Codespaces ist (und worüber ggf. die Abrechnung anfallender Kosten erfolgt): dein persönliches Konto oder die Organisationen, denen du angehörst. Weitere Informationen findest du unter [Informationen zur Abrechnung für {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces).
- Erstelle einen neuen Codespace, indem du entweder eine der Vorlagen von {% data variables.product.company_short %} auswählst oder auf **Neuer Codespace** klickst. Weitere Informationen findest du unter [Erstellen eines Codespaces mithilfe einer Vorlage](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template) und [Erstellen eines Codespaces für ein Repository](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository).

## Öffnen eines vorhandenen Codespaces

{% webui %}

{% data reusables.codespaces.your-codespaces-procedure-step %}
1. Wenn du einen Codespace in deinem Standard-Editor öffnen möchtest, klicke auf den Namen des Codespaces. {% data reusables.codespaces.about-changing-default-editor %} Weitere Informationen findest du unter [Festlegen deines Standard-Editors für {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces).
   
   So öffnest du den Codespace in einem anderen Editor als deinem Standard-Editor
   
   1. Klicke auf die Auslassungspunkte ( **...** ) rechts neben dem Codespace, den du öffnen möchtest.
   1. Klicke auf **Öffnen in**.
   1. Klicken auf **Öffnen in ANWENDUNG**.

   ![Screenshot: Dialogfeld „Öffnen in“ mit hervorgehobener Option „In Visual Studio Code öffnen“.](/assets/images/help/codespaces/open-codespace-in-another-editor.png)

   Du kannst den Codespace über folgende Optionen öffnen:
   * In deinem Browser
   * {% data variables.product.prodname_vscode %}
   * JetBrains Gateway
   * JupyterLab

   {% data reusables.codespaces.application-installed-locally %}

   Wenn du **JupyterLab** auswählst, muss die JupyterLab-Anwendung im Codespace installiert sein. {% data reusables.codespaces.jupyterlab-in-default-image %}

{% endwebui %}

{% vscode %}

{% note %}

**Hinweis:** {% data reusables.codespaces.using-codespaces-in-vscode %} Weitere Informationen findest du unter [Verwenden von {% data variables.product.prodname_github_codespaces %} in {% data variables.product.prodname_vscode %}](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code).

{% endnote %}

1. Öffne in der {% data variables.product.prodname_vscode_shortname %}-Desktopanwendung über <kbd>BEFEHL</kbd>+<kbd>UMSCHALT</kbd>+<kbd>P</kbd> (Mac) oder <kbd>STRG</kbd>+<kbd>UMSCHALT</kbd>+<kbd>P</kbd> (Windows/Linux) die Befehlspalette.
1. Gib „Codespaces“ ein, und wähle einen der folgenden Befehle aus.
   - Um einen Codespace in einem neuen Fenster von {% data variables.product.prodname_vscode_shortname %} zu öffnen, wähle **Codespaces: Codespace in neuem Fenster öffnen** aus.
   - Wenn du einen Codespace im Web-Editor öffnen möchtest, wähle **Codespaces: Im Browser öffnen** aus.
1. Klicke auf den Codespace, den du öffnen möchtest.
   
   ![Screenshot einer Liste mit Codespaces in Visual Studio Code](/assets/images/help/codespaces/open-codespace-from-vscode.png)

Du kannst auch auf die oben aufgeführten Befehle zugreifen, indem du in {% data variables.product.prodname_vscode_shortname %} zur Remote-Explorer-Ansicht navigierst und mit der rechten Maustaste auf den Codespace klickst, den du öffnen möchtest.

![Screenshot eines im Remote-Explorer ausgewählten Codespaces mit hervorgehobener Option „Im Browser öffnen“](/assets/images/help/codespaces/open-codespace-remote-explorer.png)

{% data reusables.codespaces.remote-explorer %} {% endvscode %}

{% cli %}

1. Gib in einem Terminal einen der folgenden {% data variables.product.prodname_cli %}-Befehle ein.
   - Um einen Codespace in {% data variables.product.prodname_vscode_shortname %} zu öffnen, gibst du Folgendes ein:

     ```shell{:copy}
     gh codespace code
     ```
     
     {% note %}

     **Hinweis**: {% data variables.product.prodname_vscode_shortname %} muss auf deinem lokalen Computer installiert sein. Weitere Informationen findest du unter [Einrichten von Visual Studio Code](https://code.visualstudio.com/docs/setup/setup-overview) in der {% data variables.product.prodname_vscode_shortname %}-Dokumentation.

     {% endnote %}
     
   - Zum Öffnen eines Codespaces im Browser gibst du Folgendes ein:
  
     ```shell{:copy}
     gh codespace code --web
     ```

   - Um einen Codespace in JupyterLab zu öffnen, gibst du Folgendes ein:
  
     ```shell{:copy}
     gh codespace code --jupyter
     ```
     
     {% note %}

     **Hinweis**: {% data reusables.codespaces.jupyterlab-installed-in-codespace %}

     {% endnote %}
     
1. Navigiere mithilfe der Pfeiltasten zu dem Codespace, den du öffnen möchtest.
1. Drücke die <kbd>EINGABETASTE</kbd>, um den Codespace zu öffnen.

Weitere Informationen findest du unter [`gh codespace code`](https://cli.github.com/manual/gh_codespace_code) im Handbuch {% data variables.product.prodname_cli %}.

{% endcli %}

{% jetbrains %}

{% data reusables.codespaces.opening-codespace-in-jetbrains %}

{% endjetbrains %}
