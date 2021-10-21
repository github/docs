---
title: Einen Issue erstellen
intro: 'Issues can be created in a variety of ways, so you can choose the most convenient method for your workflow.'
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
topics:
  - Pull requests
  - Issues
  - Project management
shortTitle: Hiermit wird ein Issue erstellt.
---

Mit Issues kannst Du Fehler, Verbesserungen oder andere Anforderungen nachverfolgen. Weitere Informationen findest Du unter „[Informationen zu Issues](/issues/tracking-your-work-with-issues/about-issues).“

{% data reusables.repositories.administrators-can-disable-issues %}

## Creating an issue from a repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
{% data reusables.repositories.new_issue %}
1. If your repository uses issue templates, click **Get started** next to the type of issue you'd like to open. ![Select the type of issue you want to create](/assets/images/help/issues/issue_template_get_started_button.png) Or, click **Open a blank issue** if the type of issue you'd like to open isn't included in the available options. ![Link to open a blank issue](/assets/images/help/issues/blank_issue_link.png)
{% data reusables.repositories.type-issue-title-and-description %}
{% data reusables.repositories.assign-an-issue-as-project-maintainer %}
{% data reusables.repositories.submit-new-issue %}

## Creating an issue with {% data variables.product.prodname_cli %}

{% data reusables.cli.about-cli %} To learn more about {% data variables.product.prodname_cli %}, see "[About {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)."

To create an issue, use the `gh issue create` subcommand. To skip the interactive prompts, include the `--body` and the `--title` flags.

```shell
gh issue create --title "My new issue" --body "Here are more details."
```

You can also specify assignees, labels, milestones, and projects.

```shell
gh issue create --title "My new issue" --body "Here are more details." --assignee @me,monalisa --label "bug,help wanted" --project onboarding --milestone "learning codebase"
```

## Creating an issue from a comment

You can open a new issue from a comment in an issue or pull request. Wenn Du einen Issue aus einem Kommentar öffnest, wird der Issue ein Ausschnitt enthalten, der zeigt, wo der Kommentar ursprünglich eingestellt wurde.

1. Navigate to the comment that you would like to open an issue from.
2. Klicke in diesem Kommentar auf {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}. ![Drei-Punkte-Menü im Reviewkommentar des Pull Request](/assets/images/help/pull_requests/kebab-in-pull-request-review-comment.png)
3. Klicke auf **Reference in new issue** (Referenz im neuen Issue). ![Menüpunkt „Reference in new issue" (Referenz im neuen Issue)](/assets/images/help/pull_requests/reference-in-new-issue.png)
4. Verwende das Dropdownmenü „Repository" und wähle das Repository, in welchem Du den Issue öffnen möchtest. ![„Repository" Dropdownmenü für neue Issues](/assets/images/help/pull_requests/new-issue-repository.png)
5. Gib einen beschreibenden Titel und Text für den Issue ein. ![Titel und Text für neuen Issue](/assets/images/help/pull_requests/new-issue-title-and-body.png)
6. Klicke auf **Create issue** (Erstelle Issue). ![Schaltfläche zum Erstellen eines neuen Issues](/assets/images/help/pull_requests/create-issue.png)
{% data reusables.repositories.assign-an-issue-as-project-maintainer %}
{% data reusables.repositories.submit-new-issue %}

## Creating an issue from code

Du kannst neue Issues von einer bestimmten Codezeile oder über mehreren Codezeilen in einer Datei oder einem Pull Request öffnen. Wenn Du einen Issue im Code öffnest, enthält der Issue einen Ausschnitt mit den ausgewählten Codezeilen. Du kannst einen Issue nur in dem Repository öffnen, in dem der Code gespeichert ist.

![Code-Ausschnitt in einem Issue eingefügt, der im Code geöffnet wurde](/assets/images/help/repository/issue-opened-from-code.png)

{% data reusables.repositories.navigate-to-repo %}
1. Suche den Code, auf den Du in einem Issue verweisen möchtest:
    - Um einen Issue zu Code in einer Datei zu öffnen, navigiere zu dieser Datei.
    - Um einen Issue zu Code in einem Pull Request zu öffnen, navigieren Sie zu diesem Pull Request und klicken Sie auf {% octicon "diff" aria-label="The file diff icon" %} **Files changed** (Dateien geändert). Navigiere anschließend zu der Datei mit dem Code, der in Deinem Kommentar enthalten sein soll, und klicke auf **View** (Anzeigen).
{% data reusables.repositories.choose-line-or-range %}
4. Klicken Sie rechts neben dem Code-Abschnitt auf {% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %}. Klicke im Dropdownmenü auf **Reference in new issue** (Referenz im neuen Issue). ![Drei-Punkte-Menü mit Option zum Öffnen eines neuen Issues in der ausgewählten Zeile](/assets/images/help/repository/open-new-issue-specific-line.png)
{% data reusables.repositories.type-issue-title-and-description %}
{% data reusables.repositories.assign-an-issue-as-project-maintainer %}
{% data reusables.repositories.submit-new-issue %}

{% ifversion fpt %}

## Creating an issue from discussion

People with triage permission to a repository can create an issue from a discussion.

When you create an issue from a discussion, the contents of the discussion post will be automatically included in the issue body, and any labels will be retained. Creating an issue from a discussion does not convert the discussion to an issue or delete the existing discussion. For more information about {% data variables.product.prodname_discussions %}, see "[About discussions](/discussions/collaborating-with-your-community-using-discussions/about-discussions)."

{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. In the right sidebar, click {% octicon "issue-opened" aria-label="The issues icon" %} **Create issue from discussion**. ![Button to create issue from discussion](/assets/images/help/discussions/create-issue-from-discussion.jpg)
{% data reusables.repositories.type-issue-title-and-description %}
{% data reusables.repositories.assign-an-issue-as-project-maintainer %}
{% data reusables.repositories.submit-new-issue %}

{% endif %}

## Creating an issue from a project board note

Wenn Du ein Projektboard verwendest, um Deine Arbeit zu verfolgen und zu priorisieren, kannst Du Notizen im Projektboard zu Issues umwandeln. Weitere Informationen findest Du unter „[Über Projektboards](/github/managing-your-work-on-github/about-project-boards)" und „[Notizen zu einem Projektboard hinzufügen](/github/managing-your-work-on-github/adding-notes-to-a-project-board#converting-a-note-to-an-issue)."

{% ifversion fpt %}

## Creating an issue from a task list item

Within an issue, you can use task lists to break work into smaller tasks and track the full set of work to completion. If a task requires further tracking or discussion, you can convert the task to an issue by hovering over the task and clicking {% octicon "issue-opened" aria-label="The issue opened icon" %} in the upper-right corner of the task. Weitere Informationen findest Du unter „[Informationen zu Aufgabenlisten](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists).“

{% endif %}

## Creating an issue from a URL query

You can use query parameters to open issues. Abfrageparameter sind optionale Bestandteile einer URL, die Sie anpassen können, um eine bestimmte Ansicht einer Webseite freizugeben, beispielsweise Suchfilterergebnisse oder eine Issue-Vorlage auf {% data variables.product.prodname_dotcom %}. Um eigene Abfrageparameter zu erstellen, musst Du Schlüssel- und Wertepaar abgleichen.

{% tip %}

**Tipp:** Du kannst auch Issue-Vorlagen erstellen, die sich mit standardmäßigen Kennzeichnungen, Bearbeitern und einem Issue-Titel öffnen. For more information, see "[Using templates to encourage useful issues and pull requests](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)."

{% endtip %}

Du musst die erforderlichen Berechtigungen für jede Aktion haben, um den entsprechenden Abfrageparameter zu verwenden. Beispielsweise benötigst Du die Berechtigung, einem Issue eine Kennzeichnung hinzuzufügen, um den Abfrageparameter `labels` (Kennzeichnung) zu verwenden. Weitere Informationen findest Du unter„[Berechtigungsebenen für die Repositorys einer Organisation](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization).“

If you create an invalid URL using query parameters, or if you don’t have the proper permissions, the URL will return a `404 Not Found` error page. If you create a URL that exceeds the server limit, the URL will return a `414 URI Too Long` error page.

| Abfrageparameter | Beispiel                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`          | `https://github.com/octo-org/octo-repo/issues/new?labels=bug&title=New+bug+report` erstellt einen Issue mit der Kennzeichnung „bug“ (Fehler) und dem Titel „New bug report“ (Neuer Fehlerbericht).                                                                                                                                                                                                                                                                      |
| `Text`           | `https://github.com/octo-org/octo-repo/issues/new?title=New+bug+report&body=Describe+the+problem.` creates an issue with the title "New bug report" and the comment "Describe the problem" in the issue body.                                                                                                                                                                                                                                                           |
| `labels`         | `https://github.com/octo-org/octo-repo/issues/new?labels=help+wanted,bug` creates an issue with the labels "help wanted" and "bug".                                                                                                                                                                                                                                                                                                                                         |
| `Meilensteine`   | `https://github.com/octo-org/octo-repo/issues/new?milestone=testing+milestones` erstellt einen Issue mit dem Meilenstein „testing milestones“ (Meilensteine testen).                                                                                                                                                                                                                                                                                                        |
| `assignees`      | `https://github.com/octo-org/octo-repo/issues/new?assignees=octocat` erstellt einen Issue und weist ihn @octocat zu.                                                                                                                                                                                                                                                                                                                                                        |
| `projects`       | `https://github.com/octo-org/octo-repo/issues/new?title=Bug+fix&projects=octo-org/1` erstellt einen Issue mit dem Titel „Bug fix“ (Fehlerbehebung) und fügt ihn dem Projektboard 1 der Organisation hinzu.                                                                                                                                                                                                                                                              |
| `Vorlage`        | `https://github.com/octo-org/octo-repo/issues/new?template=issue_template.md` erstellt einen Issue mit einer Vorlage im Issue-Text. The `template` query parameter works with templates stored in an `ISSUE_TEMPLATE` subdirectory within the root, `docs/` or `.github/` directory in a repository. For more information, see "[Using templates to encourage useful issues and pull requests](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)." |

## Weiterführende Informationen

- "[Writing on GitHub](/github/writing-on-github)"
