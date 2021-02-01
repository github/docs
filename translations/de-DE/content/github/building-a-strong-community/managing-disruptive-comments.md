---
title: Störende Kommentare verwalten
intro: 'You can {% if currentVersion == "free-pro-team@latest" %}hide, edit,{% else %}edit{% endif %} or delete comments on issues, pull requests, and commits.'
redirect_from:
  - /articles/editing-a-comment/
  - /articles/deleting-a-comment/
  - /articles/managing-disruptive-comments
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Einen Kommentar ausblenden

Jeder mit Schreibzugriff auf ein Repository kann Kommentare zu Issues, Pull Requests und Commits ausblenden.

Wenn ein Kommentar nicht zum Thema passt, veraltet oder gelöst ist, kannst Du ihn ausblenden, damit die Diskussion zielgerichtet bleibt oder die Navigation sowie der Review eines Pull Requests vereinfacht wird. Ausgeblendete Kommentare werden minimiert, aber Personen mit Lesezugriff auf das Repository können sie einblenden.

![Minimierter Kommentar](/assets/images/help/repository/hidden-comment.png)

1. Navigiere zum Kommentar, den Du ausblenden möchtest.
2. Klicke oben rechts im Kommentar auf {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} und anschließend auf **Hide** (Ausblenden). ![Horizontales 3-Punkte-Symbol und Menü zum Moderieren der Unterhaltung mit den Optionen zum Bearbeiten, Ausblenden und Löschen](/assets/images/help/repository/comment-menu.png)
3. Wähle im Dropdownmenü „Choose a reason" (Grund auswählen) einen Grund für das Ausblenden des Kommentars aus. Klicke anschließend auf **Hide comment** (Kommentar ausblenden).
  {% if currentVersion == "free-pro-team@latest" %}
  ![Dropdownmenü zur Auswahl des Grundes für das Ausblenden des Kommentars](/assets/images/help/repository/choose-reason-for-hiding-comment.png)
  {% else %}
  ![Dropdownmenü zur Auswahl des Grundes für das Ausblenden des Kommentars](/assets/images/help/repository/choose-reason-for-hiding-comment-ghe.png)
  {% endif %}

### Einen ausgeblendeten Kommentar wieder anzeigen

Jeder mit Schreibzugriff auf ein Repository kann Kommentare zu Issues, Pull Requests und Commits wieder anzeigen.

1. Navigiere zu dem Kommentar, den Du wieder anzeigen möchten.
2. Klicke in der oberen rechten Ecke des Kommentars auf **{% octicon "fold" aria-label="The fold icon" %} Show comment** (Kommentar anzeigen). ![Text „Show comment“ (Kommentar anzeigen)](/assets/images/help/repository/hidden-comment-show.png)
3. Klicke auf der rechten Seite des angezeigten Kommentars auf {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} und anschließend auf **Unhide** (Wieder anzeigen). ![Horizontales 3-Punkte-Symbol und Menü zum Moderieren der Unterhaltung mit den Optionen zum Bearbeiten, Wiederanzeigen und Löschen](/assets/images/help/repository/comment-menu-hidden.png)

### Einen Kommentar bearbeiten

Jeder mit Schreibzugriff auf ein Repository kann Kommentare zu Issues, Pull Requests und Commits bearbeiten.

It's appropriate to edit a comment and remove content that doesn't contribute to the conversation and violates your community's code of conduct{% if currentVersion == "free-pro-team@latest" %} or GitHub's [Community Guidelines](/articles/github-community-guidelines){% endif %}.

Wenn Du einen Kommentar bearbeitest, notiere den Ort, von dem der Inhalt entfernt wurde, und optional den Grund für das Entfernen.

Jede Person mit Lesezugriff auf ein Repository kann den Änderungsverlauf eines Kommentars anzeigen. Das Dropdownmenü **edited** (Bearbeitet) oben im Kommentar enthält einen Verlauf der Bearbeitungen mit dem Benutzer und dem Zeitstempel für jede Bearbeitung.

![Kommentar mit hinzugefügtem Hinweis, dass Inhalte redigiert wurden](/assets/images/help/repository/content-redacted-comment.png)

Verfasser von Kommentaren und Personen mit Schreibzugriff auf ein Repository können auch vertrauliche Informationen aus dem Änderungsverlauf eines Kommentars löschen. Weitere Informationen findest Du unter „[Änderungen in einem Kommentar verfolgen](/github/building-a-strong-community/tracking-changes-in-a-comment)."

1. Navigiere zu dem Kommentar, den Du bearbeiten möchtest.
2. Klicke oben rechts im Kommentar auf {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} und anschließend auf **Edit** (Bearbeiten). ![Horizontales 3-Punkte-Symbol und Menü zum Moderieren der Unterhaltung mit den Optionen zum Bearbeiten, Ausblenden, Löschen und Melden](/assets/images/help/repository/comment-menu.png)
3. Lösche im Kommentarfenster den Inhalt, den Du entfernen möchtest, und gib dann `[REDACTED]` ein, um ihn zu ersetzen. ![Kommentarfenster mit redigiertem Inhalt](/assets/images/help/issues/redacted-content-comment.png)
4. Gib unten im Kommentar eine Notiz ein, in der Du auf die Bearbeitung hinweist und optional den Grund dafür nennst. ![Kommentarfenster mit hinzugefügtem Hinweis, dass Inhalte redigiert wurden](/assets/images/help/issues/note-content-redacted-comment.png)
5. Klicke auf **Update comment** (Kommentar aktualisieren).

### Einen Kommentar löschen

Personen mit Schreibzugriff auf ein Repository können Kommentare zu Issues, Pull Requests und Commits löschen. Organisationsinhaber, Team-Betreuer und die Verfasser des Kommentars können auch einen Kommentar auf einer Teamseite löschen.

Das Löschen eines Kommentars ist die letzte Option für Dich als Moderator. It's appropriate to delete a comment if the entire comment adds no constructive content to a conversation and violates your community's code of conduct{% if currentVersion == "free-pro-team@latest" %} or GitHub's [Community Guidelines](/articles/github-community-guidelines){% endif %}.

Das Löschen eines Kommentars erstellt ein Zeitleistenereignis, das für alle Benutzer mit Lesezugriff auf das Repository sichtbar ist. Der Benutzername der Person, die den Kommentar gelöscht hat, ist jedoch nur für Benutzer mit Schreibzugriff auf das Repository zu sehen. Für Personen ohne Schreibzugriff ist das Zeitleistenereignis anonymisiert.

![Anonymisiertes Zeitleistenereignis für einen gelöschten Kommentar](/assets/images/help/issues/anonymized-timeline-entry-for-deleted-comment.png)

Wenn ein Kommentar auch Inhalte aufweist, die einen konstruktiven Beitrag zur Unterhaltung im Issue oder Pull Request darstellen, kannst Du den Kommentar bearbeiten, anstatt ihn komplett zu löschen.

{% note %}

**Hinweis:** Der anfängliche Kommentar (oder Text) eines Issues oder Pull Requests kann nicht gelöscht werden. Stattdessen kannst Du den Text von Issues und Pull Requests bearbeiten und dabei unerwünschte Inhalte entfernen.

{% endnote %}

1. Navigiere zu dem Kommentar, den Du löschen möchtest.
2. Klicke oben rechts im Kommentar auf {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} und anschließend auf **Delete** (Löschen). ![Horizontales 3-Punkte-Symbol und Menü zum Moderieren der Unterhaltung mit den Optionen zum Bearbeiten, Ausblenden, Löschen und Melden](/assets/images/help/repository/comment-menu.png)
3. Verfasse optional einen Kommentar mit dem Hinweis, dass und warum Du einen Kommentar gelöscht hast.
