---
title: Eine Fußzeile oder Seitenleiste für Dein Wiki erstellen
intro: 'Du kannst eine benutzerdefinierte Seitenleiste oder Fußzeile für Dein Wiki erstellen, um zusätzliche kontextbezogene Informationen für die Leser bereitzustellen.'
redirect_from:
  - /articles/creating-a-footer/
  - /articles/creating-a-sidebar/
  - /articles/creating-a-footer-or-sidebar-for-your-wiki
  - /github/building-a-strong-community/creating-a-footer-or-sidebar-for-your-wiki
product: '{% data reusables.gated-features.wikis %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Community
---

### Eine Fußzeile erstellen

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-wiki %}
3. Klicke im unteren Bereich der Seite auf **Add a custom footer** (Benutzerdefinierte Fußzeile hinzufügen). ![Abschnitt zum Hinzufügen einer Wiki-Fußzeile](/assets/images/help/wiki/wiki_add_footer.png)
4. Gib über den Texteditor den Inhalt für die Fußzeile ein. ![Wiki-WYSIWYG](/assets/images/help/wiki/wiki-footer.png)
5. Gib eine Commit-Mitteilung mit einer Beschreibung der neuen Fußzeile ein. ![Wiki-Commit-Mitteilung](/assets/images/help/wiki/wiki_commit_message.png)
6. Um Deine Änderungen an das Wiki zu freizugeben, klicke auf **Save Page** (Seite speichern).

### Eine Seitenleiste erstellen

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-wiki %}
3. Klicke auf **Add a custom sidebar** (Benutzerdefinierte Seitenleiste hinzufügen). ![Abschnitt zum Hinzufügen einer Wiki-Seitenleiste](/assets/images/help/wiki/wiki_add_sidebar.png)
4. Verwende den Texteditor, um den Inhalt Deiner Seite einzufügen. ![Wiki-WYSIWYG](/assets/images/help/wiki/wiki-sidebar.png)
5. Gib eine Commit-Mitteilung mit einer Beschreibung der neuen Seitenleiste ein. ![Wiki-Commit-Mitteilung](/assets/images/help/wiki/wiki_commit_message.png)
6. Um Deine Änderungen an das Wiki zu freizugeben, klicke auf **Save Page** (Seite speichern).

### Eine Fußzeile oder Seitenleiste lokal erstellen

Wenn Du eine Datei mit dem Namen `_Footer.<extension>` oder `_Sidebar.<extension>` erstellst, zeigen wir diese Informationen in der Fußzeile bzw. auf der Seitenleiste Deines Wiki an. Wie bei allen Wiki-Seiten bestimmt auch hier die von Dir gewählte Dateierweiterung, wie wir sie darstellen werden.
