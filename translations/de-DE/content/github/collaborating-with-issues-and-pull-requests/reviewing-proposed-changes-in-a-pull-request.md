---
title: Vorgeschlagene Änderungen in einem Pull Request überprüfen
intro: 'In einem Pull Request kannst Du Commits, geänderte Dateien und die Unterschiede (Diffs) zwischen den Dateien im Basis- und im Vergleichs-Branch überprüfen und besprechen.'
redirect_from:
  - /articles/reviewing-proposed-changes-in-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Informationen zum Review von Pull Requests

Du kannst die Änderungen in einem Pull Request eine Datei nach der anderen überprüfen. Während des Reviews der Dateien eines Pull Requests kannst Du einzelne Änderungen kommentieren.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %} Wenn Du den Review einer Datei abgeschlossen hast, kannst Du die Datei als „gesehen“ markieren. Dadurch wird die Datei ausgeblendet, so dass Du die noch nicht geprüften Dateien leichter findest. In einer Fortschrittsanzeige im Header des Pull Requests wird die Anzahl der gesehenen Dateien angezeigt.{% endif %} Nachdem Du alle oder einzelne Dateien überprüft hast, kannst Du den Pull Request genehmigen oder durch Absenden Deines Reviews mit einem zusammenfassenden Kommentar weitere Änderungen anfordern.

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

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}
### Datei als „gesehen“ markieren

Wenn Du den Review einer Datei abgeschlossen hast, kannst Du sie als „gesehen“ markieren, um sie auszublenden. Falls die Datei nach Deiner Überprüfung geändert wird, wird die Markierung aufgehoben.

{% data reusables.repositories.changed-files %}
2. Aktiviere rechts neben dem Header der überprüften Datei das Kontrollkästchen **Viewed** (Gesehen). ![Kontrollkästchen „Viewed“ (Gesehen)](/assets/images/help/pull_requests/viewed-checkbox.png)
{% endif %}

### Review absenden

Wenn Du den Review aller von Dir im Pull Request einzuschließenden Dateien abgeschlossen hast, sende den Review ab.

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

- „[Informationen zu Pull-Request-Reviews](/articles/about-pull-request-reviews)“
- „[Informationen zu erforderlichen Reviews für Pull Requests](/articles/about-required-reviews-for-pull-requests)“
- „[Pull Request mit erforderlichen Reviews genehmigen](/articles/approving-a-pull-request-with-required-reviews)“
- „[Einen Pull Request kommentieren](/articles/commenting-on-a-pull-request)“
- „[Pull Requests nach Review-Status filtern](/articles/filtering-pull-requests-by-review-status)“
