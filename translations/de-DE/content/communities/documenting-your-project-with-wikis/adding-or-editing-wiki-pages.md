---
title: Wiki-Seiten hinzufügen oder bearbeiten
intro: 'Sie können Wiki-Seiten direkt auf {% data variables.product.product_name %} oder lokal über die Befehlszeile hinzufügen und bearbeiten.'
redirect_from:
  - /articles/adding-wiki-pages-via-the-online-interface/
  - /articles/editing-wiki-pages-via-the-online-interface/
  - /articles/adding-and-editing-wik-pages-locally/
  - /articles/adding-and-editing-wiki-pages-locally/
  - /articles/adding-or-editing-wiki-pages
  - /github/building-a-strong-community/adding-or-editing-wiki-pages
product: '{% data reusables.gated-features.wikis %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - community
---

### Wiki-Seiten hinzufügen

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-wiki %}
3. Klicke in der oberen rechten Ecke der Seite auf **New Page** (Neue Seite). ![Schaltfläche „New Page“ (Neue Seite) für Wiki](/assets/images/help/wiki/wiki_new_page_button.png)
4. Wenn Du ein anderes Format als Markdown nutzen möchtest, kannst Du optional im Bearbeitungsmodus über das Dropdownmenü ein anderes Format auswählen. ![Wiki-Markup-Auswahl](/assets/images/help/wiki/wiki_dropdown_markup.gif)
5. Verwende den Texteditor, um den Inhalt Deiner Seite einzufügen. ![Wiki-WYSIWYG](/assets/images/help/wiki/wiki_wysiwyg.png)
6. Erstelle eine Commit-Mitteilung, welche die neue Datei beschreibt, die Du hinzufügst. ![Wiki-Commit-Mitteilung](/assets/images/help/wiki/wiki_commit_message.png)
7. Um Deine Änderungen an das Wiki zu freizugeben, klicke auf **Save Page** (Seite speichern).

### Wiki-Seiten bearbeiten

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-wiki %}
4. Navigiere über die Wiki-Seitenleiste zu der Seite, die Du ändern möchtest. Klicke in der oberen rechte Ecke der Seite auf **Edit** (Bearbeiten). ![Schaltfläche „Edit“ (Bearbeiten) für Wiki-Seite](/assets/images/help/wiki/wiki_edit_page_button.png)
5. Verwende den Texteditor, um den Inhalt der Seite zu bearbeiten. ![Wiki-WYSIWYG](/assets/images/help/wiki/wiki_wysiwyg.png)
6. Erstelle eine Commit-Mitteilung, in der Du Deine Änderungen beschreibst. ![Wiki-Commit-Mitteilung](/assets/images/help/wiki/wiki_commit_message.png)
7. Um Deine Änderungen an das Wiki zu freizugeben, klicke auf **Save Page** (Seite speichern).

### Wiki-Seiten lokal hinzufügen oder bearbeiten

Wikis sind Teil der Git-Repositorys. Du kannst also Änderungen lokal vornehmen und sie dann mit einem Git-Workflow per Push an Dein Repository übergeben.

#### Wikis auf Deinen Computer klonen

Jedes Wiki bietet eine einfache Möglichkeit, seinen Inhalt auf Deinen Computer zu klonen. Du kannst das Repository mit der zur Verfügung gestellten URL zu Deinem Computer klonen:

```shell
$ git clone https://github.com/<em>YOUR_USERNAME</em>/<em>YOUR_REPOSITORY</em>.wiki.git
# Klont das Wiki lokal
```

Wenn Du das Wiki geklont hast, kannst Du neue Dateien hinzufügen, vorhandene bearbeiten und Deine Änderungen freigeben. You and your collaborators can create branches when working on wikis, but only changes pushed to the default branch will be made live and available to your readers.

### Informationen zu Wiki-Dateinamen

Der Dateiname bestimmt den Titel Deiner Wiki-Seite und die Dateierweiterung bestimmt, wie Dein Wiki-Inhalt dargestellt wird.

Wikis nutzen [unsere Open-Source Markup-Bibliothek](https://github.com/github/markup) für die Markup-Umwandlung. Durch die Dateierweiterung wird bestimmt, welcher Konverter verwendet wird. Wenn Du zum Beispiel eine Datei *foo.md* oder *foo.markdown* nennst, nutzt Wiki den Markdown-Konverter. Bei einer Datei mit dem Namen *foo.textile* wird der Textile-Konverter verwendet.

Verwende die folgenden Zeichen nicht in Titeln von Wiki-Seiten: `\ / : * ? " < > |`. Benutzer mit bestimmten Betriebssystemen können Dateinamen mit diesen Zeichen nicht verwenden. Stelle sicher, für Deinen Inhalt eine Markup-Sprache zu verwenden, die der Dateierweiterung entspricht. Andernfalls wird Dein Inhalt nicht korrekt dargestellt.
