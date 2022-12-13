---
title: Zu Projekten beitragen
intro: 'Erfahre, wie du durch Forken zu einem Projekt beiträgst.'
permissions: '{% data reusables.enterprise-accounts.emu-permission-fork %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Forks
  - GitHub
  - Open Source
ms.openlocfilehash: da38c6f5b3ea953fc58bf79080b9fa4eb5a2712d
ms.sourcegitcommit: 468a0323fa636517985a3e08e2772dbb0545cab8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/03/2022
ms.locfileid: '148191346'
---
## Informationen zu Forks

Wenn du zu einem anderen Projekt beitragen möchtest, aber keinen Schreibzugriff auf das Repository hast, kannst du einen Fork- und Pull Request-Workflow verwenden. 

{% data reusables.repositories.fork-definition-long %}

Du kannst einen Beitrag leisten, indem du Pull Requests von deinem Fork an das Upstream-Repository übermittelst. Weitere Informationen findest du unter [Forken eines Repositorys](/get-started/quickstart/fork-a-repo).

## Repository forken

In diesem Tutorial wird das [Spoon-Knife-Projekt](https://github.com/octocat/Spoon-Knife) verwendet. Es ist ein Testrepository auf {% data variables.product.prodname_dotcom_the_website %}, mit dem du den Fork- und Pull Request-Workflow testen kannst.

1. Navigiere zum `Spoon-Knife`-Projekt auf https://github.com/octocat/Spoon-Knife.
2. Klicke auf **Forken**.
   ![Schaltfläche „Forken“](/assets/images/help/repository/fork_button.png){% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}
3. Wähle eine*n Besitzer*in für das geforkte Repository aus.
   ![Erstellen einer neuen Forkseite mit hervorgehobener Besitzer-Dropdownliste](/assets/images/help/repository/fork-choose-owner.png)
4. Standardmäßig erhalten Forks den gleichen Namen wie die zugehörigen Upstream-Repositorys. Zur weiteren Unterscheidung kannst du den Namen des Forks ändern. 
   ![Erstellen einer neuen Forkseite mit hervorgehobenem Repositorynamensfeld](/assets/images/help/repository/fork-choose-repo-name.png)
5. Füge wahlweise eine Beschreibung deines Forks hinzu.
   ![Erstellen einer neuen Forkseite mit hervorgehobenem Beschreibungsfeld](/assets/images/help/repository/fork-description.png)
6. Wähle aus, ob nur der Standardbranch oder alle Branches in den neuen Fork kopiert werden sollen. Bei vielen Forkszenarien, z. B. Beiträge zu Open-Source-Projekten, musst du nur den Standardbranch kopieren. Standardmäßig wird nur der Standardbranch kopiert.
   ![Option zum ausschließlichen Kopieren des Standardbranch](/assets/images/help/repository/copy-default-branch-only.png)
7. Klicke auf **Fork erstellen**.
   ![Hervorgehobene Schaltfläche „Fork erstellen“](/assets/images/help/repository/fork-create-button.png)

{% note %}

**Hinweis:** Wenn du weitere Branches aus dem Upstream-Repository kopieren möchtest, ist dies über die Seite **Branches** möglich. Weitere Informationen findest du unter [Erstellen und Löschen von Branches innerhalb deines Repositorys](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository).

{% endnote %} {% endif %}

## Klonen eines Forks

Du hast erfolgreich einen Fork des Spoon-Knife-Repositorys erstellt. Bisher ist es jedoch nur auf {% data variables.product.product_name %} vorhanden. Um an dem Projekt arbeiten zu können, musst du es auf deinen Computer klonen.

Du kannst dein Fork über die Befehlszeile, die {% data variables.product.prodname_cli %} oder {% data variables.product.prodname_desktop %} klonen.

{% webui %}

1. Navigiere auf {% data variables.product.product_name %} im Spoon-Knife-Repository zu **deinem Fork**.
{% data reusables.repositories.copy-clone-url %} {% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.command_line.change-current-directory-clone %}
4. Gib `git clone` ein, und füge dann die zuvor kopierte URL ein. Sie sieht wie folgt aus (anstelle von `YOUR-USERNAME` wird dein {% data variables.product.product_name %}-Benutzername verwendet):
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/YOUR-USERNAME/Spoon-Knife
  ```

5. Drücke die **EINGABETASTE**. Dein lokaler Klon wird erstellt.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/YOUR-USERNAME/Spoon-Knife
  > Cloning into `Spoon-Knife`...
  > remote: Counting objects: 10, done.
  > remote: Compressing objects: 100% (8/8), done.
  > remove: Total 10 (delta 1), reused 10 (delta 1)
  > Unpacking objects: 100% (10/10), done.
  ```

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Verwende das Flag `--clone`, um einen Klon deines Forks zu erstellen.

```shell
gh repo fork REPOSITORY --clone=true
```

{% endcli %}

{% desktop %}

{% data reusables.desktop.choose-clone-repository %} {% data reusables.desktop.cloning-location-tab %} {% data reusables.desktop.cloning-repository-list %} {% data reusables.desktop.choose-local-path %} {% data reusables.desktop.click-clone %}

{% enddesktop %}

## Erstellen eines Branches für die Arbeit

Bevor du Änderungen am Projekt vornimmst, solltest du einen neuen Branch erstellen und ihn auschecken. Indem du Änderungen in einem eigenen Branch verwaltest, folgst du dem GitHub-Flow und vereinfachst eine spätere erneute Mitwirkung am selben Projekt. Weitere Informationen findest du unter [GitHub-Flow](/get-started/quickstart/github-flow#following-github-flow).

{% webui %}

```shell
git branch BRANCH-NAME
git checkout BRANCH-NAME
```

{% endwebui %}

{% cli %}

```shell
git branch BRANCH-NAME
git checkout BRANCH-NAME
```

{% endcli %}

{% desktop %}

Weitere Informationen zum Erstellen und Verwalten von Branches in {% data variables.product.prodname_desktop %} findest du unter [Verwalten von Branches](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/managing-branches).

{% enddesktop %}

## Vornehmen und Pushen von Änderungen

Nimm mithilfe deines bevorzugten Text-Editors (z. B. [Visual Studio Code](https://code.visualstudio.com)) einige Änderungen am Projekt vor. Du könntest beispielsweise den Text in `index.html` ändern, um deinen GitHub-Benutzernamen hinzuzufügen.

Wenn du bereit bist, die Änderungen zu übermitteln, stage und committe diese. `git add .` teilt Git mit, dass du alle Änderungen im nächsten Commit einschließen möchtest. `git commit` erstellt eine Momentaufnahme dieser Änderungen.

{% webui %}

```shell
git add .
git commit -m "a short description of the change"
```

{% endwebui %}

{% cli %}

```shell
git add .
git commit -m "a short description of the change"
```

{% endcli %}

{% desktop %}

Weitere Informationen zum Stagen und Committen von Änderungen in {% data variables.product.prodname_desktop %} findest du unter [Committen und Überprüfen von Änderungen an deinem Projekt](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project#selecting-changes-to-include-in-a-commit).

{% enddesktop %}

Wenn du Dateien stagest und committest, teilst du Git dadurch mit, dass eine Momentaufnahme der Änderungen erstellt werden kann. Du kannst weiterhin Änderungen vornehmen und mehr Commit-Momentaufnahmen erstellen.

Deine Änderungen sind derzeit nur lokal vorhanden. Wenn du bereit bist, deine Änderungen an {% data variables.product.product_name %} zu pushen, pushe deine Änderungen an die Remoteseite.

{% webui %}

```shell
git push
```

{% endwebui %}

{% cli %}

```shell
git push
```

{% endcli %}

{% desktop %}

Weitere Informationen zum Pushen von Änderungen an {% data variables.product.prodname_desktop %} findest du unter [Pushen von Änderungen an GitHub](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/pushing-changes-to-github).

{% enddesktop %}

## Erstellen eines Pull Request

Nun kannst du Änderungen am Hauptprojekt vorschlagen. Dies ist der letzte und vermutlich wichtigste Schritt bei der Erstellung eines Forks von einem fremden Projekt. Wenn du eine Änderung vorgenommen hast, von der du denkst, dass sie der Community nutzen würde, solltest du auf jeden Fall in Betracht ziehen, diese zu veröffentlichen.

Navigiere dazu zum Repository auf {% data variables.product.product_name %}, wo sich dein Projekt befindet. In diesem Beispiel wäre es `https://github.com/<your_username>/Spoon-Knife`. Es wird ein Banner angezeigt, das angibt, dass dein Branch ein Commit vor `octocat:main` ist. Klicke auf **Mitwirken** und dann auf **Einen Pull Request öffnen**.

{% data variables.product.product_name %} leitet dich zu einer Seite weiter, auf der die Unterschiede zwischen deinem Fork und dem `octocat/Spoon-Knife`-Repository anzeigt werden. Klicke auf **Pull Request erstellen**.

{% data variables.product.product_name %} leitet dich zu einer Seite weiter, auf der du einen Titel und eine Beschreibung für deine Änderungen eingeben kannst. Es ist wichtig, so viele nützliche Informationen und eine Begründung dafür zu liefern, warum du diesen Pull Request überhaupt vornimmst. Der*Die Projektbesitzer*in muss in der Lage sein, zu entscheiden, ob deine Änderung für die Allgemeinheit so nützlich ist, wie du denkst. Klicke schließlich auf **Pull Request erstellen**.

## Verwalten von Feedback

Pull Requests werden viel diskutiert. In diesem Fall ist Octocat sehr beschäftigt, und wahrscheinlich werden deine Änderungen nicht zusammengeführt. Auch bei anderen Projekten solltest du nicht beleidigt sein, wenn der*die Projektbesitzer*in deinen Pull Request ablehnt oder weitere Informationen darüber anfordert, warum du ihn erstellt hast. Es kann sogar sein, dass der*die Projektbesitzer*in sich dazu entscheidet, deinen Pull Request nicht zusammenzuführen, und das ist in Ordnung. Deine Änderungen sind in deinem Fork vorhanden. Und wer weiß – vielleicht findet jemand, den du noch nie getroffen hast, deine Änderungen viel wertvoller als das ursprüngliche Projekt.

## Auffinden von Projekten

Du hast erfolgreich einen Fork erstellt und zu einem Repository beigetragen. Weiter so! Du kannst noch mehr beitragen.{% ifversion fpt %} Weitere Informationen findest du unter [So kannst du zu Open-Source-Projekten auf GitHub beitragen](/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github).{% endif %}
