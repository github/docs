---
title: Einen Issue im Code öffnen
intro: Du kannst neue Issues von einer bestimmten Codezeile oder über mehreren Codezeilen in einer Datei oder einem Pull Request öffnen.
permissions: People with read permissions can create an issue in a repository where issues are enabled.
redirect_from:
  - /articles/opening-an-issue-from-code
  - /github/managing-your-work-on-github/opening-an-issue-from-code
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---
Wenn Du einen Issue im Code öffnest, enthält der Issue einen Ausschnitt mit den ausgewählten Codezeilen. Du kannst einen Issue nur in dem Repository öffnen, in dem der Code gespeichert ist.

![Code-Ausschnitt in einem Issue eingefügt, der im Code geöffnet wurde](/assets/images/help/repository/issue-opened-from-code.png)

{% data reusables.repositories.administrators-can-disable-issues %}

{% data reusables.repositories.navigate-to-repo %}
2. Suche den Code, auf den Du in einem Issue verweisen möchtest:
    - Um einen Issue zu Code in einer Datei zu öffnen, navigiere zu dieser Datei.
    - Um einen Issue zu Code in einem Pull Request zu öffnen, navigieren Sie zu diesem Pull Request und klicken Sie auf {% octicon "diff" aria-label="The file diff icon" %} **Files changed** (Dateien geändert). Navigiere anschließend zu der Datei mit dem Code, der in Deinem Kommentar enthalten sein soll, und klicke auf **View** (Anzeigen).
{% data reusables.repositories.choose-line-or-range %}
4. To the left of the code range, click
{% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %}. Klicke im Dropdownmenü auf **Reference in new issue** (Referenz im neuen Issue).
  ![Drei-Punkte-Menü mit Option zum Öffnen eines neuen Issues in der ausgewählten Zeile](/assets/images/help/repository/open-new-issue-specific-line.png)
{% data reusables.repositories.type-issue-title-and-description %}
{% data reusables.repositories.assign-an-issue-as-project-maintainer %}
{% data reusables.repositories.submit-new-issue %}

### Weiterführende Informationen

- „[Einen Issue erstellen](/github/managing-your-work-on-github/creating-an-issue)“
- „[Permalinks zu Dateien abrufen](/github/managing-files-in-a-repository/getting-permanent-links-to-files)“
- „[Einen Permalink zu einem Code-Ausschnitt erstellen](/github/managing-your-work-on-github/creating-a-permanent-link-to-a-code-snippet)“
