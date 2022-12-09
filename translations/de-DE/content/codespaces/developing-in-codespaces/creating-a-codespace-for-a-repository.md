---
title: Erstellen eines Codespaces für ein Repository
intro: 'Du kannst einen Codespace für einen Branch in einem Repository erstellen, um online entwickeln zu können.'
redirect_from:
  - /github/developing-online-with-github-codespaces/creating-a-codespace
  - /github/developing-online-with-codespaces/creating-a-codespace
  - /codespaces/developing-in-codespaces/creating-a-codespace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Create a codespace for a repo
ms.openlocfilehash: 409c946feda4ffbd3d9ab615b6ea07fabee3f530
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188320'
---
## Informationen zum Erstellen eines Codespaces für ein Repository

{% data reusables.codespaces.ways-to-create-a-codespace %} Verwende die Registerkarten in diesem Artikel, um Anweisungen für jede dieser Möglichkeiten zum Erstellen eines Codespaces anzuzeigen.

{% data reusables.codespaces.starting-new-project-template %} Weitere Informationen findest du unter „[Erstellen eines Codespaces aus einer Vorlage](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template)“.

{% note %}

**Hinweis**: Wenn du eine JetBrains-IDE verwendest, kannst du {% data variables.product.prodname_cli %} verwenden, um einen Codespace zu erstellen. Anschließend kannst du die JetBrains Gateway-Anwendung verwenden, um den Codespace in einer JetBrains-IDE zu öffnen. Weitere Informationen findest du unter [Verwenden von Codespaces in der JetBrains-IDE](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide).

{% endnote %}

Du kannst {% data variables.product.prodname_github_codespaces %} für dein persönliches {% data variables.product.prodname_dotcom_the_website %}-Konto verwenden, wobei das Kontingent der kostenlosen Nutzung jeden Monat für Konten im Free- und Pro-Tarif enthalten ist. {% data reusables.codespaces.codespaces-continue-by-paying %}

Organisationen können Mitgliedern und externen Mitarbeitern das Erstellen und Verwenden von Codespaces auf Kosten der Organisation ermöglichen. Weitere Informationen findest du unter [Aktivieren von {% data variables.product.prodname_github_codespaces %} für deine Organisation](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization).

{% data reusables.codespaces.codespaces-are-personal %}

Wenn du einen Codespace aus einem Repository erstellst, wird der Codespace einem bestimmten Branch zugeordnet, der nicht leer sein kann. Du kannst pro Repository oder sogar pro Branch mehr als einen Codespace erstellen.

{% data reusables.codespaces.you-can-see-all-your-codespaces %}

### Der Codespace-Erstellungsprozess

Wenn du einen Codespace erstellst, erfolgt eine Reihe von Schritten zum Erstellen und Herstellen einer Verbindung mit deiner Entwicklungsumgebung:

- Schritt 1: VM und Speicher werden deinem Codespace zugewiesen.
- Schritt 2: Der Container wird erstellt, und dein Repository wird geklont.
- Schritt 3: Du kannst eine Verbindung mit dem Codespace herstellen.
- Schritt 4: Der Codespace wird mit dem Setup nach der Erstellung fortgesetzt.

Weitere Informationen dazu, was passiert, wenn du einen Codespace erstellst, findest du unter [Vertiefung](/codespaces/getting-started/deep-dive).

Weitere Informationen zum Lebenszyklus eines Codespaces findest du unter [Der Codespace-Lebenszyklus](/codespaces/getting-started/the-codespace-lifecycle).

Wenn du Git-Hooks für deinen Codespace verwenden möchtest, solltest du die Hooks mithilfe der [`devcontainer.json`-Lebenszyklusskripts](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts) einrichten, z. B. `postCreateCommand` während Schritt 4. Da dein Codespace-Container erstellt wird, nachdem das Repository geklont wurde, gelten alle im Containerimage konfigurierten [Git-Vorlagenverzeichnisse](https://git-scm.com/docs/git-init#_template_directory) nicht für deinen Codespace. Hooks müssen stattdessen installiert werden, nachdem der Codespace erstellt wurde. Weitere Informationen zur Verwendung von `postCreateCommand` findest du in der [`devcontainer.json` Referenz](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_devcontainerjson-properties) in der {% data variables.product.prodname_vscode_shortname %}-Dokumentation.

{% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.prebuilds-crossreference %}

## Erstellen eines Codespaces für ein Repository

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
1. Wähle im Dropdownmenü „Branch“ unterhalb des Repositorynamens den Branch aus, für den du einen Codespace erstellen möchtest.

   ![Branch-Dropdownmenü](/assets/images/help/codespaces/branch-drop-down.png)

1. Klicke auf die Schaltfläche **{% octicon "code" aria-label="The code icon" %} Code** und dann auf die Registerkarte **Codespaces**.

   ![Schaltfläche „New codespace" (Neuer Codespace)](/assets/images/help/codespaces/new-codespace-button.png)

   Wenn Codespaces für dieses Repository einer Organisation oder dem übergeordneten Unternehmen in Rechnung gestellt werden können, wird unterhalb der Schaltfläche **Codespace auf BRANCH erstellen** eine Mitteilung angezeigt, wer für den Codespace bezahlt.

1. Erstelle deinen Codespace entweder mithilfe der Standardoptionen oder nach dem Konfigurieren erweiterter Optionen:
 
   * Verwenden der **Standardoptionen**

      Um einen Codespace mit den Standardoptionen zu erstellen, klicke auf das Pluszeichen ({% octicon "plus" aria-label="The plus icon" %}). Wenn du derzeit keine Codespaces für dieses Repository hast, kannst du alternativ auf **Codespace in BRANCH erstellen** klicken.

   * **Konfigurieren von Optionen**

      So konfigurierst du erweiterte Optionen für deinen Codespace, z. B. einen anderen Computertyp oder eine bestimmte Datei `devcontainer.json`:

      1. Klicke oben rechts auf der Registerkarte **Codespaces** auf die Auslassungspunkte ( **...** ), und wähle dann **Neu mit Optionen** aus.

      ![Anzeigen des Standardcomputertyps](/assets/images/help/codespaces/default-machine-type.png)

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

      1. Klicke auf **Codespace erstellen**.

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

Du wirst aufgefordert, ein Repository auszuwählen. Wenn Codespaces für dieses Repository einer Organisation oder dem übergeordneten Unternehmen in Rechnung gestellt werden können, wird eine Mitteilung angezeigt, wer für den Codespace bezahlt. Du wirst dann aufgefordert, einen Branch, eine Entwicklungscontainer-Konfigurationsdatei (sofern mehrere vorhanden sind) und einen Computertyp (sofern mehrere vorhanden sind) auszuwählen.

Alternativ kannst du Flags verwenden, um einige oder alle Optionen anzugeben:

```shell
gh codespace create -r OWNER/REPO -b BRANCH --devcontainer-path PATH -m MACHINE-TYPE
```

In diesem Beispiel ersetze `owner/repo` durch den Repositorybezeichner. Ersetze `branch` durch den Namen des Branch oder den vollständigen SHA-Hash des Commits, den du zunächst im Codespace auschecken möchtest. Wenn du das `-r`-Flag ohne das `b`-Flag verwendest, wird der Codespace aus dem Standardbranch erstellt.

Ersetze `path` durch den Pfad zur Dev-Containerkonfigurationsdatei, die du für den neuen Codespace verwenden möchtest. Wenn du dieses Flag auslässt und mehrere Dev-Containerdateien verfügbar sind, wirst du aufgefordert, eine davon in einer Liste auszuwählen. Weitere Informationen zur Dev-Containerkonfigurationsdatei findest du unter [Einführung in Entwicklungscontainer](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers).

Ersetze `machine-type` durch einen gültigen Bezeichner für einen verfügbaren Computertyp. Bezeichner sind Zeichenfolgen wie `basicLinux32gb` und `standardLinux32gb`. Der Typ der verfügbaren Computer hängt vom Repository, deinem persönlichen Konto und deinem Standort ab. Wenn du einen ungültigen oder nicht verfügbaren Computertyp eingibst, werden die verfügbaren Typen in der Fehlermeldung angezeigt. Wenn du dieses Flag auslässt und mehrere Computertypen verfügbar sind, wirst du aufgefordert, einen Typ aus einer Liste auszuwählen.

Ausführliche Informationen zu den Optionen für diesen Befehl findest du im [{% data variables.product.prodname_cli %}-Handbuch](https://cli.github.com/manual/gh_codespace_create).

{% endcli %}

## Weiterführende Themen
- [Öffnen eines vorhandenen Codespaces](/codespaces/developing-in-codespaces/opening-an-existing-codespace)
- [Hinzufügen eines „In {% data variables.product.prodname_github_codespaces %} öffnen“-Badges](/codespaces/setting-up-your-project-for-codespaces/adding-a-codespaces-badge)
