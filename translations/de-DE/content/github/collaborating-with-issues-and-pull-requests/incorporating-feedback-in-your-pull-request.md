---
title: Feedback in Deinen Pull Request aufnehmen
intro: 'Wenn Reviewer Änderungen in einem Pull Request vorschlagen, kannst Du diese Änderungen automatisch in den Pull Request aufnehmen oder einen Issue öffnen, um Vorschläge außerhalb des Geltungsbereichs zu verfolgen.'
redirect_from:
  - /articles/incorporating-feedback-in-your-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Vorgeschlagene Änderungen anwenden

Andere Personen können spezifische Änderungen für Deinen Pull Request vorschlagen. Du kannst diese vorgeschlagenen Änderungen direkt in einem Pull Request anwenden, wenn Du Schreibzugriff auf das Repository hast. Wenn der Pull Request von einem Fork erstellt wurde und der Autor Bearbeitungen durch Betreuer zugelassen hat, kannst Du vorgeschlagene Änderungen auch dann anwenden, wenn Du Schreibzugriff auf das vorgelagerte Repository besitzt. Weitere Informationen findest Du unter „[Einen Pull Request kommentieren](/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request)“ und „[Änderungen an einem Pull-Request-Branch zulassen, der von einem Fork erstellt wurde](/github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork).“

Um schnell mehrere vorgeschlagene Änderungen in einem einzigen Commit zu implementieren, kannst Du die vorgeschlagenen Änderungen auch als Stapel anwenden. Beim Anwenden einer vorgeschlagenen Änderungen oder eines Stapels an vorgeschlagenen Änderungen wird ein einzelner Commit auf dem Vergleichsbranch des Pull Requests erstellt.

Jede Person, die eine der Änderungen des Commits vorgeschlagen hat, wird Co-Autor des Commits. Die Person, die die vorgeschlagenen Änderungen übernimmt, wird Co-Autor und Beitragender des Commits. Weitere Informationen zum Begriff des Beitragenden in Git findest Du unter „[Git-Grundlagen – Verwalten des Commit-Verlaufs](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History)“ auf der Website zum _Pro Git_-Buch.

{% data reusables.repositories.sidebar-pr %}
2. Klicke in der Liste der Pull Requests auf den Pull Request, auf den Du eine vorgeschlagene Änderung anwenden möchtest.
3. Navigiere zur ersten vorgeschlagenen Änderung, die Du anwenden möchtest.
    - Um die Änderung in ihrem eigenen Commit anzuwenden, klicke auf **Commit suggestion** (Vorschlag freigeben). ![Schaltfläche „Commit suggestion“ (Vorschlag freigeben)](/assets/images/help/pull_requests/commit-suggestion-button.png)
    - Um den Vorschlag zu einem Stapel an Änderungen hinzuzufügen, klicke auf **Add suggestion to batch** (Vorschlag zu Stapel hinzufügen). Füge alle anderen vorgeschlagenen Änderungen hinzu, die Du in einen einzelnen Commit einfügen möchtest. Wenn Du mit dem Hinzufügen der vorgeschlagenen Änderungen fertig bist, klicke auf **Commit suggestions** (Vorschläge freigeben). ![Schaltfläche „Add suggestion to batch“ (Vorschlag zu Stapel hinzufügen)](/assets/images/help/pull_requests/add-suggestion-to-batch.png)
4. Gib im Feld für die Commit-Mitteilung eine kurze, aussagekräftige Commit-Mitteilung ein, die die Änderung beschreibt, die Du an der Datei oder den Dateien vorgenommen hast. ![Feld für Commit-Mitteilung](/assets/images/help/pull_requests/suggested-change-commit-message-field.png)
5. Klicke auf **Commit changes** (Änderungen freigeben). ![Schaltfläche „Commit changes“ (Änderungen freigeben)](/assets/images/help/pull_requests/commit-changes-button.png)

### Öffnen eines Issue für Vorschläge außerhalb des Geltungsbereichs

Wenn jemand Änderungen an Deinem Pull Request vorschlägt und die Änderungen nicht in den Pull-Request-Geltungsbereich fallen, kannst Du einen neuen Issue öffnen, um das Feedback zu verfolgen. Weitere Informationen findest Du unter „[Öffnen eines Issue aus einem Kommentar](/github/managing-your-work-on-github/opening-an-issue-from-a-comment)."

### Weiterführende Informationen

- „[Informationen zu Pull-Request-Reviews](/github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews)"
- „[Vorgeschlagene Änderungen in einem Pull Request überprüfen](/github/collaborating-with-issues-and-pull-requests/reviewing-proposed-changes-in-a-pull-request)"
- „[Einen Pull Request kommentieren](/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request)"
- „[Einen Pull-Request-Review verlangen](/github/collaborating-with-issues-and-pull-requests/requesting-a-pull-request-review)"
- „[Einen Issue aus einem Kommentar öffnen](/github/managing-your-work-on-github/opening-an-issue-from-a-comment)"
