---
title: Hinweise zu einem Projektboard hinzufügen
intro: 'Du kannst Hinweise zu einem Projektboard hinzufügen, um an Aufgaben zu erinnern oder Informationen im Zusammenhang mit dem Projektboard hinzuzufügen.'
redirect_from:
  - /articles/adding-notes-to-a-project/
  - /articles/adding-notes-to-a-project-board
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

{% tip %}

**Tipps:**
- Du kannst den Hinweis mit der Markdown-Syntax formatieren. Du kannst beispielsweise Überschriften, Links, Aufgabenlisten oder Emojis verwenden. Weitere Informationen finden Sie unter „[Grundlegende Schreib- und Formatierungssyntax](/articles/basic-writing-and-formatting-syntax)“.
- Du kannst Hinweise per Drag-and-Drop oder mit Tastenkürzeln neu anordnen und zwischen den Spalten verschieben. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}
- Dein Projektboard muss mindestens eine Spalte aufweisen, damit Du Hinweise hinzufügen kannst. Weitere Informationen findest Du unter „[Ein Projektboard erstellen](/articles/creating-a-project-board).“

{% endtip %}

Wenn Du eine URL für einen Issue, einen Pull Request oder ein anderes Projektboard zu einem Hinweis hinzufügst, wird im Zusammenfassungsticket unter Deinem Text eine Vorschau angezeigt.

![Projektboard-Tickets mit der Vorschau eines Issues und ein weiteres Projektboard](/assets/images/help/projects/note-with-summary-card.png)

### Hinweise zu einem Projektboard hinzufügen

1. Navigiere zu dem Projektboard, zu dem Du Hinweise hinzufügen möchtest.
2. Klicken Sie in der Spalte, in der Sie einen Hinweis hinzufügen möchten, auf {% octicon "plus" aria-label="The plus icon" %}. ![Pluszeichen-Symbol im Spalten-Header](/assets/images/help/projects/add-note-button.png)
3. Gib den Text für den Hinweis ein, und klicke dann auf **Add** (Hinzufügen). ![Feld zum Eingeben eines Hinweises und Schaltfläche zum Hinzufügen eines Tickets](/assets/images/help/projects/create-and-add-note-button.png)

  {% tip %}

  **Tipp:** Du kannst in dem Hinweis auf einen Issue oder Pull Request verweisen, indem Du die entsprechende URL im Ticket eingibst.

  {% endtip %}

### Einen Hinweis in einen Issue umwandeln

Wenn Du einen Hinweis erstellt hast und feststellst, dass er für Deine Anforderungen nicht ausreicht, kannst Du den Hinweis in einen Issue umwandeln.

Wenn Du einen Hinweis in einen Issue umwandelst, wird der Inhalt des Hinweises automatisch für den Issue übernommen. Die erste Zeile des Hinweises wird der Issue-Titel; der weitere Inhalt des Hinweises wird zur Issue-Beschreibung hinzugefügt.

{% tip %}

**Tipp:**Du kannst in den Text des Hinweises Inhalte einfügen, um jemanden zu @erwähnen, einen anderen Issue oder Pull Request zu verknüpfen und Emojis hinzuzufügen. Diese {% data variables.product.prodname_dotcom %} Flavored-Markdown-Funktionen werden bei Projektboard-Hinweisen nicht unterstützt, aber nachdem der Hinweis in einen Issue umgewandelt wurde, werden die Inhalte korrekt angezeigt. Weitere Informationen zur Verwendung dieser Funktionen findest Du unter „[Informationen zum Schreiben und Formatieren bei {% data variables.product.prodname_dotcom %}](/articles/about-writing-and-formatting-on-github).“

{% endtip %}

1. Navigiere zu dem Hinweis, den Du in einen Issue umwandeln möchtest.
{% data reusables.project-management.project-note-more-options %}
3. Klicke auf **Convert to issue** (In Issue umwandeln). ![Schaltfläche „Convert to issue“ (In Issue umwandeln)](/assets/images/help/projects/convert-to-issue.png)
4. Wenn sich das Ticket auf einem organisationsweiten Projektboard befindet, wähle im Dropdownmenü das Repository aus, zu dem Du den Issue hinzufügen möchtest. ![Dropdownmenü mit Repositorys, in denen Sie den Issue erstellen können](/assets/images/help/projects/convert-note-choose-repository.png)
5. Optional kannst Du den vorab ausgefüllten Issue-Titel bearbeiten und den Issue-Text eingeben. ![Felder für den Issue-Titel und -Text](/assets/images/help/projects/convert-note-issue-title-body.png)
6. Klicke auf **Convert to issue** (In Issue umwandeln).
7. Der Hinweis wird automatisch in einen Issue umgewandelt. Im Projektboard wird das neue Issue-Ticket an derselben Stelle angezeigt wie zuvor der Hinweis.

### Einen Hinweis bearbeiten und entfernen

1. Navigiere zu dem Hinweis, den Du bearbeiten oder entfernen möchtest.
{% data reusables.project-management.project-note-more-options %}
3. Um den Inhalt des Hinweises zu bearbeiten, klicke auf **Edit note** (Hinweis bearbeiten). ![Schaltfläche „Edit note“ (Hinweis bearbeiten)](/assets/images/help/projects/edit-note.png)
4. Um den Inhalt des Hinweises zu löschen, klicke auf **Delete note** (Hinweis löschen). ![Schaltfläche „Delete note“ (Hinweis löschen)](/assets/images/help/projects/delete-note.png)

### Weiterführende Informationen

- „[Informationen zu Projektboards](/articles/about-project-boards)“
- „[Ein Projektboard erstellen](/articles/creating-a-project-board)“
- „[Ein Projektboard bearbeiten](/articles/editing-a-project-board)“
- „[Issues und Pull Requests zu einem Projektboard hinzufügen](/articles/adding-issues-and-pull-requests-to-a-project-board)“
