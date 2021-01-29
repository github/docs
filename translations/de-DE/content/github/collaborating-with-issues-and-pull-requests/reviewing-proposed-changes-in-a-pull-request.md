---
title: Vorgeschlagene Änderungen in einem Pull Request überprüfen
intro: 'In einem Pull Request kannst Du Commits, geänderte Dateien und die Unterschiede (Diffs) zwischen den Dateien im Basis- und im Vergleichs-Branch überprüfen und besprechen.'
redirect_from:
  - /articles/reviewing-proposed-changes-in-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Informationen zum Review von Pull Requests

Du kannst die Änderungen in einem Pull Request eine Datei nach der anderen überprüfen. While reviewing the files in a pull request, you can leave individual comments on specific changes. After you finish reviewing each file, you can mark the file as viewed. Dadurch wird die Datei ausgeblendet, so dass Du die noch nicht geprüften Dateien leichter findest. A progress bar in the pull request header shows the number of files you've viewed. After reviewing as many files as you want, you can approve the pull request or request additional changes by submitting your review with a summary comment.

{% data reusables.search.requested_reviews_search_tip %}

### Review starten

{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.choose-pr-review %}
{% data reusables.repositories.changed-files %}
{% data reusables.repositories.start-line-comment %}
{% data reusables.repositories.type-line-comment %}
{% data reusables.repositories.suggest-changes %}
5. Wenn Du fertig bist, klicke auf **Start a review** (Review starten). Nachdem Du einen Review begonnen hast, kannst Du auf **Add review comment** (Review-Kommentar hinzufügen) klicken. ![Schaltfläche „Start a review“ (Review starten)](/assets/images/help/pull_requests/start-a-review-button.png)

Vor dem Absenden Deines Reviews haben Deine Zeilenkommentare den Status _Ausstehend_ und sind nur für Dich sichtbar. Ausstehende Kommentare kannst Du vor dem Absenden des Reviews jederzeit bearbeiten. Zum Abbrechen eines noch nicht abgesendeten Reviews einschließlich der ausstehenden Kommentare blättere auf der Registerkarte „Conversation“ (Unterhaltung) an das Ende der Zeitleiste und klicke auf **Cancel review** (Review abbrechen).

![Schaltfläche „Cancel review“ (Review abbrechen)](/assets/images/help/pull_requests/cancel-review-button.png)

{% if currentVersion == "free-pro-team@latest" %}
### Reviewing dependency changes

If the pull request contains changes to dependencies you can use the dependency review for a manifest or lock file to see what has changed and check whether the changes introduce security vulnerabilities. For more information, see "[Reviewing dependency changes in a pull request](/github/collaborating-with-issues-and-pull-requests/reviewing-dependency-changes-in-a-pull-request)."

{% data reusables.repositories.changed-files %}

1. On the right of the header for a manifest or lock file, display the dependency review by clicking the **{% octicon "file" aria-label="The rich diff icon" %}** rich diff button.

   ![The rich diff button](/assets/images/help/pull_requests/dependency-review-rich-diff.png)

{% data reusables.repositories.return-to-source-diff %}
{% endif %}

### Datei als „gesehen“ markieren

Wenn Sie den Review einer Datei abgeschlossen haben, können Sie sie als „gesehen“ markieren, um sie auszublenden. Falls die Datei nach Ihrer Überprüfung geändert wird, wird die Markierung aufgehoben und die Datei wird wieder eingeblendet.

{% data reusables.repositories.changed-files %}
2. Aktiviere rechts neben dem Header der überprüften Datei das Kontrollkästchen **Viewed** (Gesehen). ![Kontrollkästchen „Viewed“ (Gesehen)](/assets/images/help/pull_requests/viewed-checkbox.png)

### Review absenden

Wenn Sie den Review der Dateien des Pull Requesta abgeschlossen haben, senden Sie den Review ab.

{% data reusables.repositories.changed-files %}
{% data reusables.repositories.review-changes %}
{% data reusables.repositories.review-summary-comment %}
4. Wähle die Art des Review aus, den Du absenden möchtest: ![Optionsfelder mit Review-Optionen](/assets/images/help/pull_requests/pull-request-review-statuses.png)
    - Wähle **Comment** (Kommentar) aus, um ein allgemeines Feedback abzugeben, ohne die Änderungen explizit zu genehmigen oder weitere Änderungen anzufordern.
    - Wähle **Approve** (Genehmigen) aus, um Dein Feedback abzusenden und den Merge der im Pull Request vorgeschlagenen Änderungen zu genehmigen.
    - Wähle **Request changes** (Änderungen anfordern) aus, um Feedback einzureichen, das vor dem Merge des Pull Requests bearbeitet werden muss.
{% data reusables.repositories.submit-review %}

{% data reusables.repositories.request-changes-tips %}

### Weiterführende Informationen

- „[Informationen zu geschützten Branches](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)“
- „[Pull Requests nach Review-Status filtern](/github/managing-your-work-on-github/filtering-pull-requests-by-review-status)“
