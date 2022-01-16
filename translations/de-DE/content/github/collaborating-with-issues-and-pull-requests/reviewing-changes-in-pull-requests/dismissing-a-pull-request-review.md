---
title: Einen Pull-Request-Review verwerfen
intro: 'If your repository requires reviews, you can dismiss pull request reviews that are no longer valid or are unable to be approved by the reviewer.'
redirect_from:
  - /articles/dismissing-a-pull-request-review
  - /github/collaborating-with-issues-and-pull-requests/dismissing-a-pull-request-review
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---
{% data reusables.pull_requests.dismiss_review %}
Dies ändert den Status des Reviews zu einem Review-Kommentar. Wenn Du einen Review verwirfst, musst Du einen Kommentar hinzufügen, in dem Du den Grund für Deine Entscheidung erklärst. Dein Kommentar wird zur Pull-Request-Unterhaltung hinzugefügt.

{% data reusables.search.requested_reviews_search %}

{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.choose-pr-review %}
3. Scrolle auf der Registerkarte „Conversation“ (Unterhaltung) zu dem Review, den Du verwerfen möchtest, und klicke dann auf {% octicon "chevron-down" aria-label="The down button" %}. ![Chevron-Symbol (spitze Klammer) im Merge-Feld](/assets/images/help/pull_requests/merge_box/pull-request-open-menu.png)
4. Klicke auf {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} und anschließend auf **Dismiss review** (Review verwerfen). ![3-Punkte-Symbol im Merge-Feld](/assets/images/help/pull_requests/merge_box/pull-request-dismiss-review.png)
5. Gib den Grund für das Verwerfen des Reviews ein, und klicke dann auf **Dismiss review** (Review verwerfen). ![Schaltfläche „Dismiss review" (Verwerfen eines Reviews)](/assets/images/help/pull_requests/merge_box/pull-request-dismiss-review-button.png)

### Weiterführende Informationen

- „[Informationen zu Pull-Request-Reviews](/articles/about-pull-request-reviews)“
- „[Vorgeschlagene Änderungen in einem Pull Request prüfen](/articles/reviewing-proposed-changes-in-a-pull-request)“
- „[Informationen zu geschützten Branches](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)“
