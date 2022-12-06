---
title: Einen Issue erstellen
intro: 'Issues können auf verschiedene Arten erstellt werden, sodass du die bequemste Methode für deinen Workflow auswählen kannst.'
permissions: 'People with read access can create an issue in a repository where issues are enabled. {% data reusables.enterprise-accounts.emu-permission-repo %}'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/creating-an-issue
  - /articles/creating-an-issue
  - /github/managing-your-work-on-github/creating-an-issue
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/opening-an-issue-from-a-comment
  - /github/managing-your-work-on-github/opening-an-issue-from-a-comment
  - /issues/tracking-your-work-with-issues/creating-issues/opening-an-issue-from-a-comment
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/opening-an-issue-from-code
  - /articles/opening-an-issue-from-code
  - /github/managing-your-work-on-github/opening-an-issue-from-code
  - /issues/tracking-your-work-with-issues/creating-issues/opening-an-issue-from-code
  - /issues/tracking-your-work-with-issues/creating-issues/about-automation-for-issues-and-pull-requests-with-query-parameters
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/about-automation-for-issues-and-pull-requests-with-query-parameters
  - /articles/about-automation-for-issues-and-pull-requests-with-query-parameters
  - /github/managing-your-work-on-github/about-automation-for-issues-and-pull-requests-with-query-parameters
  - /issues/tracking-your-work-with-issues/creating-issues/creating-an-issue
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Project management
shortTitle: Create an issue
type: how_to
ms.openlocfilehash: 21bef9325848b6242b505a8c28ec65483b36448f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410083'
---
Mit Issues kannst du Fehler, Verbesserungen oder andere Anforderungen nachverfolgen. Weitere Informationen findest du unter [Informationen zu Issues](/issues/tracking-your-work-with-issues/about-issues).

{% data reusables.repositories.administrators-can-disable-issues %}

## Erstellen eines Issues aus einem Repository

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issues %} {% data reusables.repositories.new_issue %}
1. Wenn dein Repository Issuevorlagen verwendet, klicke neben dem Typ des Issues, das du öffnen möchtest, auf **Erste Schritte**.
  ![Wähle den Typ des zu erstellenden Issues aus](/assets/images/help/issues/issue_template_get_started_button.png) oder klicke auf **Leeres Issue öffnen**, wenn der Typ des zu erstellenden Issues nicht in den verfügbaren Optionen enthalten ist.
   ![Link zum Öffnen eines leeren Issues](/assets/images/help/issues/blank_issue_link.png) {% data reusables.repositories.type-issue-title-and-description %} {% data reusables.repositories.assign-an-issue-as-project-maintainer %} {% data reusables.repositories.submit-new-issue %}

## Erstellen eines Issues mit {% data variables.product.prodname_cli %}

{% data reusables.cli.about-cli %} Weitere Informationen zu {% data variables.product.prodname_cli %} findest du unter [Informationen zu {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli).

Führe zum Erstellen eines Issues den Unterbefehl `gh issue create` aus. Um die interaktiven Eingabeaufforderungen zu überspringen, musst du die Flags `--body` und `--title` einschließen.

```shell
gh issue create --title "My new issue" --body "Here are more details."
```

Du kannst auch zugewiesene Personen, Bezeichnungen, Meilensteine und Projekte angeben.

```shell
gh issue create --title "My new issue" --body "Here are more details." --assignee @me,monalisa --label "bug,help wanted" --project onboarding --milestone "learning codebase"
```

## Erstellen eines Issues aus einem Kommentar

Du kannst ein neues Issue aus einem Kommentar in einem Issue oder Pull Request öffnen. Wenn du einen Issue aus einem Kommentar öffnest, wird der Issue ein Ausschnitt enthalten, der zeigt, wo der Kommentar ursprünglich eingestellt wurde.

1. Navigiere zu dem Kommentar, den du in ein Issue umwandeln möchtest.
2. Klicke in diesem Kommentar auf das Symbol {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
  ![Drei-Punkte-Menü im Reviewkommentar des Pull Request](/assets/images/help/pull_requests/kebab-in-pull-request-review-comment.png)
3. Klicke auf **In neuem Issue darauf verweisen**.
  ![Menüpunkt „In neuem Issue darauf verweisen“](/assets/images/help/pull_requests/reference-in-new-issue.png)
4. Verwende das Dropdownmenü „Repository" und wähle das Repository, in welchem du den Issue öffnen möchtest.
  ![Dropdownmenü „Repository“ für neue Issues](/assets/images/help/pull_requests/new-issue-repository.png)
5. Gib einen beschreibenden Titel und Text für den Issue ein.
  ![Titel und Text für neues Issue](/assets/images/help/pull_requests/new-issue-title-and-body.png)
6. Klicke auf **Issue erstellen**.
  ![Schaltfläche zum Erstellen eines neuen Issues](/assets/images/help/pull_requests/create-issue.png) {% data reusables.repositories.assign-an-issue-as-project-maintainer %} {% data reusables.repositories.submit-new-issue %}

## Erstellen eines Issues aus Code

Du kannst neue Issues von einer bestimmten Codezeile oder über mehreren Codezeilen in einer Datei oder einem Pull Request öffnen. Wenn du einen Issue im Code öffnest, enthält der Issue einen Ausschnitt mit den ausgewählten Codezeilen. Du kannst einen Issue nur in dem Repository öffnen, in dem der Code gespeichert ist.

![Code-Ausschnitt in einem Issue eingefügt, der im Code geöffnet wurde](/assets/images/help/repository/issue-opened-from-code.png)

{% data reusables.repositories.navigate-to-repo %}
1. Suche den Code, auf den du in einem Issue verweisen möchtest:
    - Um einen Issue zu Code in einer Datei zu öffnen, navigiere zu dieser Datei.
    - Um ein Issue zu Code in einem Pull Request zu erstellen, musst du zu diesem Pull Request navigieren und auf {% octicon "diff" aria-label="The file diff icon" %} **geänderte Dateien** klicken. Navigiere anschließend zu der Datei mit dem Code, den dein Kommentar enthalten soll, und klicke auf **Anzeigen**.
{% data reusables.repositories.choose-line-or-range %}
4. Klicke links neben dem Codeabschnitt auf {% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %}. Klicke im Dropdownmenü auf **Im neuem Issue darauf verweisen**.
  ![Drei-Punkte-Menü mit der Option, ein neues Issue für eine ausgewählte Zeile zu öffnen](/assets/images/help/repository/open-new-issue-specific-line.png) {% data reusables.repositories.type-issue-title-and-description %} {% data reusables.repositories.assign-an-issue-as-project-maintainer %} {% data reusables.repositories.submit-new-issue %}

{% ifversion discussions %}

## Erstellen eines Issues aus Diskussion

Personen mit Selektierungsberechtigung für ein Repository können Issues aus Diskussionen erstellen.

Wenn du ein Issue aus einer Diskussion erstellst, wird der Diskussionsinhalt automatisch in den Issuetext aufgenommen, und alle Bezeichnungen werden aufbewahrt. Durch das Erstellen eines Issues aus einer Diskussion wird die Diskussion weder in ein Issue umgewandelt noch wird die bestehende Diskussion gelöscht. Weitere Informationen zu {% data variables.product.prodname_discussions %} findest du unter [Informationen zu Diskussionen](/discussions/collaborating-with-your-community-using-discussions/about-discussions).

{% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. Klicke in der rechten Randleiste auf {% octicon "issue-opened" aria-label="The issues icon" %} **Issue aus Diskussion erstellen**.
   ![Schaltfläche zum Erstellen eines Issues aus einer Diskussion](/assets/images/help/discussions/create-issue-from-discussion.jpg) {% data reusables.repositories.type-issue-title-and-description %} {% data reusables.repositories.assign-an-issue-as-project-maintainer %} {% data reusables.repositories.submit-new-issue %}

{% endif %}

## Erstellen eines Issues aus einer Projektboardnotiz

Wenn du ein Projektboard verwendest, um deine Arbeit zu verfolgen und zu priorisieren, kannst du Notizen im Projektboard zu Issues umwandeln. Weitere Informationen findest du unter [Informationen zu Projektboards](/github/managing-your-work-on-github/about-project-boards) und [Hinzufügen von Notizen zu einem Projektboard](/github/managing-your-work-on-github/adding-notes-to-a-project-board#converting-a-note-to-an-issue).

{% ifversion fpt or ghec %}

## Erstellen eines Issues aus einem Aufgabenlistenelement

Innerhalb eines Issues kannst du Arbeit mithilfe von Aufgabenlisten in kleinere Vorgänge aufteilen und den Arbeitsfortschritt bis zur Fertigstellung verfolgen. Wenn eine Aufgabe weitere Nachverfolgung oder Diskussion erfordert, kannst du die Aufgabe in ein Issue umwandeln, indem du auf die Aufgabe zeigst und in der oberen rechten Ecke der Aufgabe auf {% octicon "issue-opened" aria-label="The issue opened icon" %} klicken. Weitere Informationen findest du unter [Informationen zu Aufgabenlisten](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists).

{% endif %}

## Erstellen eines Issues aus einer URL-Abfrage

Du kannst Issues mithilfe von Abfrageparametern eröffnen. Abfrageparameter sind optionale Bestandteile einer URL, die du anpassen kannst, um eine bestimmte Ansicht einer Webseite freizugeben, beispielsweise Suchfilterergebnisse oder eine Issue-Vorlage auf {% data variables.product.prodname_dotcom %}. Um eigene Abfrageparameter zu erstellen, musst du Schlüssel- und Wertepaar abgleichen.

{% tip %}

**Tipp:** Du kannst auch Issuevorlagen erstellen, die mit Standardbezeichnungen, zugewiesenen Personen und einem Issuetitel geöffnet werden. Weitere Informationen findest du unter [Verwenden von Vorlagen zur Unterstützung nützlicher Issues und Pull Requests](/communities/using-templates-to-encourage-useful-issues-and-pull-requests).

{% endtip %}

Du musst die erforderlichen Berechtigungen für jede Aktion haben, um den entsprechenden Abfrageparameter zu verwenden. Um den Abfrageparameter `labels` verwenden zu können, benötigst du beispielsweise die Berechtigung, einem Issue eine Bezeichnung hinzuzufügen. Weitere Informationen findest du unter [Repositoryrollen für eine Organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization).

Wenn du mithilfe von Suchparametern eine ungültige URL erstellst oder nicht über die erforderlichen Berechtigungen verfügst, gibt die URL eine `404 Not Found`-Fehlerseite zurück. Wenn du eine URL erstellst, die das Serverlimit überschreitet, gibt die URL eine `414 URI Too Long`-Fehlerseite zurück.

Query parameter (Abfrageparameter) | Beispiel
---  | ---
`title` | `https://github.com/octo-org/octo-repo/issues/new?labels=bug&title=New+bug+report` erstellt ein Issue mit der Bezeichnung „bug“ (Fehler) und dem Titel „New bug report“ (Neuer Fehlerbericht).
`body` | `https://github.com/octo-org/octo-repo/issues/new?title=New+bug+report&body=Describe+the+problem.` erstellt ein Issue mit dem Titel „New bug report“ (Neuer Fehlerbericht) und dem Kommentar „Describe the problem“ (Beschreibe das Problem) im Issuetext.
`labels` | `https://github.com/octo-org/octo-repo/issues/new?labels=help+wanted,bug` erstellt ein Issue mit den Bezeichnungen „help wanted“ (Hilfe benötigt) und „bug“.
`milestone` | `https://github.com/octo-org/octo-repo/issues/new?milestone=testing+milestones` erstellt ein Issue mit dem Meilenstein „testing milestones“ (Testmeilensteine).
`assignees` | `https://github.com/octo-org/octo-repo/issues/new?assignees=octocat` erstellt ein Issue und weist es @octocat zu.
`projects` | `https://github.com/octo-org/octo-repo/issues/new?title=Bug+fix&projects=octo-org/1` erstellt ein Issue mit dem Titel „Bug fix“ (Fehlerkorrektur) und fügt es Projektboard 1 der Organisation hinzu.
`template` | `https://github.com/octo-org/octo-repo/issues/new?template=issue_template.md` erstellt ein Issue mit einer Vorlage im Issuetext. Der Abfrageparameter `template` funktioniert mit Vorlagen, die in einem `ISSUE_TEMPLATE`-Unterverzeichnis innerhalb des Stammverzeichnisses, in`docs/` oder im Verzeichnis `.github/` in einem Repository gespeichert sind. Weitere Informationen findest du unter [Verwenden von Vorlagen zur Unterstützung nützlicher Issues und Pull Requests](/communities/using-templates-to-encourage-useful-issues-and-pull-requests).

{% ifversion code-scanning-task-lists %}
## Erstellen eines Issues aus einer {% data variables.product.prodname_code_scanning %}-Warnung

{% data reusables.code-scanning.beta-alert-tracking-in-issues %} Wenn du deine Arbeit mithilfe von Issues nachverfolgst und priorisierst, kannst du mithilfe von Issues auch {% data variables.product.prodname_code_scanning %}-Warnungen nachverfolgen.
{% data reusables.code-scanning.alert-tracking-link %}

{% endif %}

## Weiterführende Themen

- [Schreiben auf GitHub](/github/writing-on-github)
