---
title: Einen Issue erstellen
intro: 'Mit Issues kannst Du Fehler, Verbesserungen oder andere Anforderungen nachverfolgen.'
permissions: People with read permissions can create an issue in a repository where issues are enabled.
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/creating-an-issue
  - /articles/creating-an-issue
  - /github/managing-your-work-on-github/creating-an-issue
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

Du kannst einen neuen Issue basierend auf dem Code eines vorhandenen Pull Requests erstellen. Weitere Informationen findest Du unter „[Einen Issue im Code öffnen](/github/managing-your-work-on-github/opening-an-issue-from-code).“

Du kannst einen neuen Issue direkt aus einem Kommentar in einem Issue- oder Pull-Request-Review öffnen. Weitere Informationen findest Du unter „[Öffnen eines Issue aus einem Kommentar](/github/managing-your-work-on-github/opening-an-issue-from-a-comment)."

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
{% tip %}

**Tip**: You can also create an issue using the {% data variables.product.prodname_cli %}. For more information, see "[`gh issue create`](https://cli.github.com/manual/gh_issue_create)" in the {% data variables.product.prodname_cli %} documentation.

{% endtip %}
{% endif %}

Wenn Du ein Projektboard verwendest, um Deine Arbeit zu verfolgen und zu priorisieren, kannst Du Notizen im Projektboard zu Issues umwandeln. Weitere Informationen findest Du unter „[Über Projektboards](/github/managing-your-work-on-github/about-project-boards)" und „[Notizen zu einem Projektboard hinzufügen](/github/managing-your-work-on-github/adding-notes-to-a-project-board#converting-a-note-to-an-issue)."

{% tip %}

**Tipp:** Projekt-Betreuer können:
  - Issue-Vorlagen für ein Repository erstellen. Vorlagen umfassen Aufforderungen für Informationen im Text eines Issues. Weitere Informationen findest Du unter „[Informationen zu Vorlagen für Issues und Pull Requests](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates)“
  - Issues für ein Repository deaktivieren. Weitere Informationen findest Du unter „[Issues deaktivieren](/github/managing-your-work-on-github/disabling-issues)." Pull Requests können nicht deaktiviert werden und stehen immer zur Verfügung.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
3. Klicke auf **New issue** (Neuer Issue). ![Schaltfläche „New Issue“ (Neuer Issue)](/assets/images/help/issues/new_issues_button.png)
4. Wenn es mehrere Issue-Arten gibt, klicke neben der Art des Issues, den Du öffnen möchtest, auf **Get started** (Anfangen). ![Typ des Issues auswählen, den Du erstellen möchten](/assets/images/help/issues/issue_template_get_started_button.png)
{% if currentVersion == "free-pro-team@latest" or currentVersion >= "enterprise-server@2.21" %}
5. Optionally, click **Open a blank issue.** if the type of issue you'd like to open isn't included in the available options. ![Link to open a blank issue](/assets/images/help/issues/blank_issue_link.png)
{% else %}
5. Optionally, click **Open a regular issue.** if the type of issue you'd like to open isn't included in the available options. ![Link to open a regular issue](/assets/images/help/issues/regular_issue_link.png)
{% endif %}
{% data reusables.repositories.type-issue-title-and-description %}
{% data reusables.repositories.assign-an-issue-as-project-maintainer %}
{% data reusables.repositories.submit-new-issue %}
### Weiterführende Informationen

- "[Writing on GitHub](/github/writing-on-github)"
