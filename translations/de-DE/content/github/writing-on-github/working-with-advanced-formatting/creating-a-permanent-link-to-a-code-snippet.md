---
title: Einen Permalink zu einem Code-Ausschnitt erstellen
intro: Sie können einen Permalink zu einer bestimmten Code-Zeile oder einem bestimmten Code-Ausschnitt in einer spezifischen Version einer Datei oder eines Pull Requests erstellen.
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/creating-a-permanent-link-to-a-code-snippet
  - /articles/creating-a-permanent-link-to-a-code-snippet
  - /github/managing-your-work-on-github/creating-a-permanent-link-to-a-code-snippet
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Pull requests
shortTitle: Permanent links to code
---

## Linking to code

Diese Art von Permalink wird nur in dem Repository, aus dem er stammt, als Code-Ausschnitt dargestellt. In anderen Repositorys wird der Permalink-Code-Ausschnitt als URL angezeigt.

![In einem Kommentar dargestellter Code-Ausschnitt](/assets/images/help/repository/rendered-code-snippet.png)

{% tip %}

**Tipp:** Informationen zum Erstellen eines Permalinks für eine komplette Datei findest Du unter „[Permalinks zu Dateien abrufen](/articles/getting-permanent-links-to-files).“

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. Suche den Code, zu dem Du einen Link erstellen möchtest:
    - Um Code aus einer Datei zu verknüpfen, navigiere zu dieser Datei.
    - Um Code aus einem Pull Request zu verknüpfen, navigiere zu diesem Pull Request. Klicke dort auf {% octicon "diff" aria-label="The file diff icon" %} **Files changed** (Dateien geändert). Navigiere anschließend zu der Datei mit dem Code, der in Deinem Kommentar enthalten sein soll, und klicke auf **View** (Anzeigen).
{% data reusables.repositories.choose-line-or-range %}
4. Klicken Sie links von der Zeile bzw. dem Abschnitt auf {% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %}. Klicke im Dropdownmenü auf **Copy permalink** (Permalink kopieren). ![Über 3-Punkte-Symbol erreichbares Menü mit Option zum Kopieren eines Permalinks für eine ausgewählte Zeile](/assets/images/help/repository/copy-permalink-specific-line.png)
5. Navigiere zu der Unterhaltung, in der Du auf den Code-Ausschnitt verknüpfen möchtest.
6. Kopiere den Permalink in einen Kommentar, und klicke auf **Comment** (Kommentieren). ![Kopierter Permalink in einem Kommentar im selben Repository](/assets/images/help/repository/code-snippet-permalink-in-comment.png)

## Linking to Markdown

You can link to specific lines in Markdown files by loading the Markdown file without Markdown rendering. To load a Markdown file without rendering, you can use the `?plain=1` parameter at the end of the url for the file. For example, `github.com/<organization>/<repository>/blob/<branch_name>/README.md?plain=1`.

You can link to a specific line in the Markdown file the same way you can in code. Append `#L` with the line number or numbers at the end of the url. For example, `github.com/<organization>/<repository>/blob/<branch_name>/README.md?plain=1#L14` will highlight line 14 in the plain README.md file.

## Weiterführende Informationen

- „[Einen Issue erstellen](/articles/creating-an-issue/)“
- „[Einen Issue aus dem Code öffnen](/articles/opening-an-issue-from-code/)“
- „[Änderungen in Pull Requests überprüfen](/articles/reviewing-changes-in-pull-requests/)“
