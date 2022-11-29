---
title: Erstellen eines Pull Requests
intro: 'Erstelle einen Pull Request, um Änderungen an einem Repository vorzuschlagen und um daran mitzuarbeiten. Diese Änderungen werden in einem *Branch* vorgeschlagen. Dadurch wird sichergestellt, dass der Standardbranch nur abgeschlossene und genehmigte Arbeiten enthält.'
permissions: 'Anyone with read access to a repository can create a pull request. {% data reusables.enterprise-accounts.emu-permission-propose %}'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request
  - /articles/creating-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/creating-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: de387cea338fb927d2baeedd79855eefbdbc82ec
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147110993'
---
Wenn du einen neuen Branch für deinen Pull Request erstellen möchtest, aber über keine Schreibberechtigungen für das Repository verfügst, kannst du das Repository zunächst forken. Weitere Informationen findest du unter [Erstellen eines Pull Requests über einen Fork](/articles/creating-a-pull-request-from-a-fork) und [Informationen zu Forks](/articles/about-forks).

Du kannst festlegen, in welchen Branch du deine Änderungen zusammenführen möchtest, wenn du deinen Pull Request erstellst. Pull Requests können nur zwischen zwei unterschiedlichen Branches geöffnet werden.

{% data reusables.pull_requests.perms-to-open-pull-request %}

{% data reusables.pull_requests.close-issues-using-keywords %}

## Branch-Bereich und Ziel-Repository ändern

Pull Requests basieren standardmäßig auf dem Standardbranch des übergeordneten Repositorys. Weitere Informationen findest du unter [Informationen zu Branches](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch).

Wenn das standardmäßige übergeordnete Repository nicht korrekt ist, kannst du über die Dropdownlisten sowohl das übergeordnete Repository als auch den Branch ändern. Du kannst über die Dropdownlisten auch Head- und Basis-Branches untereinander austauschen, um Diffs zwischen Referenzpunkten zu erstellen. Referenzen müssen hier Branch-Namen in deinem GitHub-Repository sein.

![Branches für Pull-Request-Bearbeitung](/assets/images/help/pull_requests/pull-request-review-edit-branch.png)

Beachte bei Branches, dass der *Basisbranch* die **Stelle** ist, an der Änderungen angewendet werden sollen, und dass der *Hauptbranch* **das enthält, was du anwenden möchtest**.

Wenn du das Basis-Repository änderst, änderst du auch die Benachrichtigungen für den Pull Request. Jeder, der zum Basis-Repository pushen kann, erhält eine E-Mail-Benachrichtigung und bekommt den neuen Pull Request im Dashboard angezeigt, wenn er sich das nächste Mal anmeldet.

Wenn du Informationen im Branch-Bereich änderst, werden die Vorschauen für „Commit“ (Commit) und „Files changed“ (Dateien geändert) aktualisiert, um deinen neuen Bereich anzuzeigen.

{% tip %}

**Tipps**:
- Über die Vergleichsansicht kannst du Vergleiche über einen bestimmten Zeitraum einrichten. Weitere Informationen findest du unter [Vergleichen von Commits](/pull-requests/committing-changes-to-your-project/viewing-and-comparing-commits/comparing-commits).
- Projektbetreuer können eine Pull-Request-Vorlage für ein Repository hinzufügen. Vorlagen umfassen Aufforderungen für Informationen im Text eines Pull Requests. Weitere Informationen findest du unter [Informationen zu Vorlagen für Issues und Pull Requests](/articles/about-issue-and-pull-request-templates).

{% endtip %}

## Den Pull Request erstellen

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
2. Wähle im Menü „Branch“ den Branch aus, der deine Commits enthält.
  ![Branchdropdownmenü](/assets/images/help/pull_requests/branch-dropdown.png) {% data reusables.repositories.new-pull-request %}
4. Verwende das Branchdropdownmenü _Basis_, um den Branch auszuwählen, in den du deine Änderungen mergen möchtest. Verwende dann das Branchdropdownmenü _Vergleichen_, um den Topic-Branch auszuwählen, in dem du die Änderungen vorgenommen hast.
  ![Dropdownmenüs zum Auswählen der Basis- und Vergleichbranches](/assets/images/help/pull_requests/choose-base-and-compare-branches.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.create-pull-request %}

{% data reusables.repositories.asking-for-review %}

Nachdem dein Pull Request überprüft wurde, kann er [in das Repository gemergt werden](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request).

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Verwende den Unterbefehl `gh pr create`, um einen Pull Request zu erstellen.

```shell
gh pr create
```

Mit dem Flag `--assignee` oder `-a` kannst du einer Person einen Pull Request zuweisen. Du kannst `@me` verwenden, um den Pull Request selbst zuzuweisen.

```shell
gh pr create --assignee "@octocat"
```

Verwende das Flag `--base` oder `-B`, um den Branch anzugeben, in den der Pull Request gemergt werden soll. Verwende das Flag `--head` oder `-H`, um den Branch anzugeben, der Commits für deinen Pull Request enthält.

```shell
gh pr create --base my-base-branch --head my-changed-branch
```

Mit dem Flag `--title` oder `--body` kannst du einen Titel und Textkörper für den neuen Pull Request einschließen.

```shell
gh pr create --title "The bug is fixed" --body "Everything works again"
```

Zum Markieren eines Pull Requests als Entwurf kannst du das Flag `--draft` verwenden.

```shell
gh pr create --draft
```

Nutze die Flags `--label` und `--milestone`, um Bezeichnungen oder Meilensteine zum neuen Pull Request hinzuzufügen.

```shell
gh pr create --label "bug,help wanted" --milestone octocat-milestone
```

Um den neuen Pull Request zu einem bestimmten Projekt hinzuzufügen, verwendest du das Flag `--project`.

```shell
gh pr create --project octocat-project
```

Mit dem Flag `--reviewer` kannst du eine Person oder ein Team als Reviewer zuweisen.

```shell
gh pr create --reviewer monalisa,hubot  --reviewer myorg/team-name
```

Zum Erstellen des Pull Requests in deinem Standardwebbrowser verwendest du das Flag `--web`.

```shell
gh pr create --web
```

{% endcli %}

{% desktop %}

{% mac %}

1. Wechsle zu dem Branch, für den du einen Pull Request erstellen möchtest. Weitere Informationen findest du unter [Wechseln zwischen Branches](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches).
2. Klicke auf **Pull Request erstellen**. {% data variables.product.prodname_desktop %} öffnet deinen Standardbrowser und leitet dich zu {% data variables.product.prodname_dotcom %}.
  ![Schaltfläche „Pull Request erstellen“](/assets/images/help/desktop/mac-create-pull-request.png)
4. Vergewissere dich bei {% data variables.product.prodname_dotcom %}, dass der Branch im Dropdownmenü **Basis:** der Branch ist, in dem du deine Änderungen zusammenführen möchtest. Vergewissere dich, dass der Branch im Dropdownmenü **Vergleich:** der Topic-Branch ist, in dem du deine Änderungen vorgenommen hast.
  ![Dropdownmenüs zum Auswählen der Basis- und Vergleichbranches](/assets/images/help/desktop/base-and-compare-branches.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.create-pull-request %}

{% endmac %}

{% windows %}

1. Wechsle zu dem Branch, für den du einen Pull Request erstellen möchtest. Weitere Informationen findest du unter [Wechseln zwischen Branches](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches).
2. Klicke auf **Pull Request erstellen**. {% data variables.product.prodname_desktop %} öffnet deinen Standardbrowser und leitet dich zu {% data variables.product.prodname_dotcom %}.
  ![Schaltfläche „Pull Request erstellen“](/assets/images/help/desktop/windows-create-pull-request.png)
3. Vergewissere dich bei {% data variables.product.prodname_dotcom %}, dass der Branch im Dropdownmenü **Basis:** der Branch ist, in dem du deine Änderungen zusammenführen möchtest. Vergewissere dich, dass der Branch im Dropdownmenü **Vergleich:** der Topic-Branch ist, in dem du deine Änderungen vorgenommen hast.
  ![Dropdownmenüs zum Auswählen der Basis- und Vergleichbranches](/assets/images/help/desktop/base-and-compare-branches.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.create-pull-request %}

{% endwindows %}

{% enddesktop %}

{% ifversion fpt or ghec %}

{% codespaces %}

1. Nachdem du Änderungen an deiner lokalen Kopie des Repositorys committet hast, klicke auf das Symbol **Pull Request erstellen**.
![Randleiste der Quellcodeverwaltung mit hervorgehobener Stagingschaltfläche](/assets/images/help/codespaces/codespaces-commit-pr-button.png)
1. Überprüfe, ob der lokale Branch und das Repository, von wo aus du mergst, und der Remote-Branch und das Repository, wohin du mergst, richtig sind. Gib dem Pull Request dann einen Titel und eine Beschreibung.
![Randleiste für GitHub-Pull-Requests](/assets/images/help/codespaces/codespaces-commit-pr.png)
1. Klicke auf **Erstellen**.

Weitere Informationen zum Erstellen von Pull Requests in {% data variables.product.prodname_github_codespaces %} findest du unter [Verwenden von {% data variables.product.prodname_github_codespaces %} für Pull Requests](/codespaces/developing-in-codespaces/using-github-codespaces-for-pull-requests).

{% endcodespaces %}

{% endif %}
## Weiterführende Themen

- [Erstellen eines Pull Requests vom einem Fork des Repositorys](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)
- [Synchronisieren von Pull Requests mit dem Basisbranch](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/keeping-your-pull-request-in-sync-with-the-base-branch)
- [Ändern des Basisbranch eines Pull Requests](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request)
- [Hinzufügen von Issues und Pull Requests zu einem Projektboard über die Randleiste](/articles/adding-issues-and-pull-requests-to-a-project-board/#adding-issues-and-pull-requests-to-a-project-board-from-the-sidebar)
- [Informationen zur Automatisierung von Issues und Pull Requests mit Abfrageparametern](/issues/tracking-your-work-with-issues/creating-issues/about-automation-for-issues-and-pull-requests-with-query-parameters)
- [Zuweisen von Issues und Pull Requests zu anderen GitHub-Benutzer*innen](/issues/tracking-your-work-with-issues/managing-issues/assigning-issues-and-pull-requests-to-other-github-users)
- [Schreiben auf GitHub](/github/writing-on-github)
