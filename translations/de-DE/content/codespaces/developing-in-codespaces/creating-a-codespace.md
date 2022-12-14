---
title: Einen Codespace erstellen
intro: Du kannst einen Codespace für einen Branch in einem Repository erstellen, um online entwickeln zu können.
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
- /github/developing-online-with-github-codespaces/creating-a-codespace
- /github/developing-online-with-codespaces/creating-a-codespace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Codespaces
- Fundamentals
- Developer
shortTitle: Create a codespace
ms.openlocfilehash: ae14b01f409f9c6bfb43c579aaa9c76bb2421cfe
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: "148106733"
---
## Über die Codespace Erstellung

Du kannst einen Codespace auf {% data variables.product.prodname_dotcom_the_website %}, in {% data variables.product.prodname_vscode %} oder mit der {% data variables.product.prodname_cli %} erstellen. {% data reusables.codespaces.codespaces-are-personal %}

Codespaces sind einem bestimmten Branch eines Repositorys zugeordnet, und das Repository darf nicht leer sein. Du kannst pro Repository oder sogar pro Branch mehr als einen Codespace erstellen.

Wenn du einen Codespace erstellst, erfolgt eine Reihe von Schritten zum Erstellen und Herstellen einer Verbindung mit deiner Entwicklungsumgebung:

- Schritt 1: VM und Speicher werden deinem Codespace zugewiesen.
- Schritt 2: Der Container wird erstellt, und dein Repository wird geklont.
- Schritt 3: Du kannst eine Verbindung mit dem Codespace herstellen.
- Schritt 4: Der Codespace wird mit dem Setup nach der Erstellung fortgesetzt.

Weitere Informationen dazu, was passiert, wenn du einen Codespace erstellst, findest du unter [Vertiefung](/codespaces/getting-started/deep-dive).

Weitere Informationen zum Lebenszyklus eines Codespaces findest du unter [Lebenszyklus von Codespaces](/codespaces/developing-in-codespaces/codespaces-lifecycle).

Wenn du Git-Hooks für deinen Codespace verwenden möchtest, solltest du die Hooks mithilfe der [`devcontainer.json`-Lebenszyklusskripts](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts) einrichten, z. B. `postCreateCommand` während Schritt 4. Da dein Codespace-Container erstellt wird, nachdem das Repository geklont wurde, gelten alle im Containerimage konfigurierten [Git-Vorlagenverzeichnisse](https://git-scm.com/docs/git-init#_template_directory) nicht für deinen Codespace. Hooks müssen stattdessen installiert werden, nachdem der Codespace erstellt wurde. Weitere Informationen zur Verwendung von `postCreateCommand` findest du in der [`devcontainer.json` Referenz](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_devcontainerjson-properties) in der {% data variables.product.prodname_vscode_shortname %}-Dokumentation.

{% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.you-can-see-all-your-codespaces %}

{% data reusables.codespaces.prebuilds-crossreference %}

## Zugriff auf {% data variables.product.prodname_github_codespaces %}

Wenn du Zugriff auf {% data variables.product.prodname_github_codespaces %} hast, wird die Registerkarte „Codespaces“ im Dropdownmenü **{% octicon "code" aria-label="The code icon" %} Code** angezeigt, wenn du ein Repository anzeigst.

Du hast unter den folgenden Bedingungen Zugriff auf {% data variables.product.prodname_github_codespaces %}:

Entweder treffen alle der folgenden Aussagen zu:
* Du bist ein Mitglied oder ein externer Mitarbeiter einer Organisation, die {% data variables.product.prodname_codespaces %} aktiviert und ein Ausgabenlimit festgelegt hat.
* Der Organisationsbesitzer hat dir gestattet, Codespaces auf Kosten der Organisation zu erstellen.
* Das Repository, für das du einen Codespace erstellen möchtest, gehört dieser Organisation.

Oder beide der folgenden Aussagen treffen zu:
* Du nimmst an der Betaphase von {% data variables.product.prodname_codespaces %} für einzelne Benutzer teil.
* Entweder besitzt du das Repository, für das du einen Codespace erstellen möchtest, oder es gehört einer Organisation, in der du entweder Mitglied bist oder mit der du zusammenarbeitest.

Bevor {% data variables.product.prodname_codespaces %} in einer Organisation verwendet werden können, muss ein Besitzer oder Abrechnungs-Manager ein Ausgabenlimit festgelegt haben. Weitere Informationen findest du unter [Verwalten von Ausgabenlimits für {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces#about-spending-limits-for-codespaces).

Die Organisationsbesitzer können festlegen, wer Codespaces auf Kosten der Organisation erstellen und nutzen darf. Organisationsbesitzer können auch verhindern, dass der Organisation die Nutzung von Codespaces in Rechnung gestellt wird. Weitere Informationen findest du unter [Aktivieren von {% data variables.product.prodname_github_codespaces %} für deine Organisation](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization#choose-who-can-create-codespaces-that-are-billed-to-your-organization).

## Einen Codespace erstellen

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
1. Wähle im Dropdownmenü „Branch“ unterhalb des Repositorynamens den Branch aus, für den du einen Codespace erstellen möchtest.

   ![Dropdownmenü „Branch"](/assets/images/help/codespaces/branch-drop-down.png)

1. Klicke auf die Schaltfläche **{% octicon "code" aria-label="The code icon" %} Code** und dann auf die Registerkarte **Codespaces**.

   ![Schaltfläche „New codespace" (Neuer Codespace)](/assets/images/help/codespaces/new-codespace-button.png)

   Wenn Codespaces für dieses Repository in Rechnung gestellt werden können, wird unterhalb der Schaltfläche **Codespace auf BRANCH erstellen** eine Mitteilung angezeigt, wer für den Codespace bezahlt.

1. Erstelle deinen Codespace entweder mithilfe der Standardoptionen oder nach dem Konfigurieren erweiterter Optionen:
 
   * Verwenden der **Standardoptionen**

      Wenn du einen Codespace mithilfe der Standardoptionen erstellen möchtest, klicke auf **Codespace erstellen für BRANCH**.

      Optional kannst du vor dem Klicken auf **Codespace erstellen für BRANCH** auf den Abwärtspfeil auf der Seite der Schaltfläche klicken, um zu ermitteln, welche Computertyp für deinen Codespace verwendet wird.

      ![Anzeigen des Standardcomputertyps](/assets/images/help/codespaces/default-machine-type.png)

      {% note %}

      **Hinweis**: Der Computertyp mit den geringsten Ressourcen, die für das Repository gültig sind, wird standardmäßig ausgewählt.

      {% endnote %}

   * **Konfigurieren von Optionen**

      So konfigurierst du erweiterte Optionen für deinen Codespace, z. B. einen anderen Computertyp oder eine bestimmte Datei `devcontainer.json`:

      1. Klicke auf den Abwärtspfeil auf der Seite der Schaltfläche **Codespaces erstellen für BRANCH**, und klicke dann auf **Codespace konfigurieren und erstellen**.
      1. Klicke auf die Schaltfläche **Codespace konfigurieren und erstellen**.
      1. Wähle auf der Seite „Optionen“ für deinen Codespace deine bevorzugten Optionen aus den Dropdownmenüs aus.

         ![Die Seite „Codespaceoptionen“](/assets/images/help/codespaces/advanced-options.png)

         {% note %}
      
         **Hinweise**
      
         * Du kannst die Optionsseite mit einer Textmarke versehen, damit du schnell einen Codespace für dieses Repository und diesen Branch erstellen kannst.
         * Die Seite [https://github.com/codespaces/new](https://github.com/codespaces/new) bietet eine schnelle Möglichkeit, einen Codespace für jedes Repository und jeden Branch zu erstellen. Du kannst schnell zu dieser Seite gelangen, indem du `codespace.new` in die Adressleiste deines Browsers eingibst.
         * Weitere Informationen zur Datei `devcontainer.json` findest du unter [Einführung in Entwicklungscontainer](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#devcontainerjson).
         * Weitere Informationen zu Computertypen findest du unter [Ändern des Computertyps für deinen Codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace#about-machine-types).
         * {% data reusables.codespaces.codespaces-machine-type-availability %}
      
         {% endnote %}

      1. Klicke auf **Sitzung starten**.

{% endwebui %}
   
{% vscode %}

{% data reusables.codespaces.creating-a-codespace-in-vscode %}

{% endvscode %}
   
{% cli %}

{% data reusables.cli.cli-learn-more %}

Verwende zum Erstellen eines neuen Codespaces den Unterbefehl `gh codespace create`. 

```shell
gh codespace create 
```

Du wirst aufgefordert, ein Repository auszuwählen. Wenn Codespaces für dieses Repository in Rechnung gestellt werden können, wird eine Mitteilung angezeigt, wer für den Codespace bezahlt. Du wirst dann aufgefordert, einen Branch, eine Entwicklungscontainer-Konfigurationsdatei (sofern mehrere vorhanden sind) und einen Computertyp (sofern mehrere vorhanden sind) auszuwählen.

Alternativ kannst du Flags verwenden, um einige oder alle Optionen anzugeben:

```shell
gh codespace create -r OWNER/REPO -b BRANCH --devcontainer-path PATH -m MACHINE-TYPE
```

In diesem Beispiel ersetze `owner/repo` durch den Repositorybezeichner. Ersetze `branch` durch den Namen des Branch oder den vollständigen SHA-Hash des Commits, den du zunächst im Codespace auschecken möchtest. Wenn du das `-r`-Flag ohne das `b`-Flag verwendest, wird der Codespace aus dem Standardbranch erstellt.

Ersetze `path` durch den Pfad zur Dev-Containerkonfigurationsdatei, die du für den neuen Codespace verwenden möchtest. Wenn du dieses Flag auslässt und mehrere Dev-Containerdateien verfügbar sind, wirst du aufgefordert, eine davon in einer Liste auszuwählen. Weitere Informationen zur Dev-Containerkonfigurationsdatei findest du unter [Einführung in Entwicklungscontainer](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers).

Ersetze `machine-type` durch einen gültigen Bezeichner für einen verfügbaren Computertyp. Bezeichner sind Zeichenfolgen wie `basicLinux32gb` und `standardLinux32gb`. Der Typ der verfügbaren Computer hängt vom Repository, deinem persönlichen Konto und deinem Standort ab. Wenn du einen ungültigen oder nicht verfügbaren Computertyp eingibst, werden die verfügbaren Typen in der Fehlermeldung angezeigt. Wenn du dieses Flag auslässt und mehrere Computertypen verfügbar sind, wirst du aufgefordert, einen Typ aus einer Liste auszuwählen.

Ausführliche Informationen zu den Optionen für diesen Befehl findest du im [{% data variables.product.prodname_cli %}-Handbuch](https://cli.github.com/manual/gh_codespace_create).

{% endcli %}

## Weitere Informationsquellen
- [Öffnen eines vorhandenen Codespaces](/codespaces/developing-in-codespaces/opening-an-existing-codespace)
- [Hinzufügen eines Badges „In GitHub Codespaces öffnen“](/codespaces/setting-up-your-project-for-codespaces/adding-a-codespaces-badge)
