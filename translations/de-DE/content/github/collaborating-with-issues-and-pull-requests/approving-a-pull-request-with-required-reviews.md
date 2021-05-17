---
title: Einen Pull Request mit erforderlichen Reviews genehmigen
intro: 'Wenn Dein Repository Reviews verlangt, müssen Pull Requests eine bestimmte Anzahl an genehmigenden Reviews von Personen mit Schreib- oder Administratorberechtigungen im Repository aufweisen, bevor sie zusammengeführt werden können.'
redirect_from:
  - /articles/approving-a-pull-request-with-required-reviews
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

For more information about required reviews, see "[About protected branches](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)."

Du kannst Pull Requests kommentieren, die Änderungen genehmigen oder vor der Genehmigung Verbesserungen anfordern. Weitere Informationen findest Du unter „[Vorgeschlagene Änderungen in einem Pull Request überprüfen](/articles/reviewing-proposed-changes-in-a-pull-request).“

{% data reusables.search.requested_reviews_search %}

{% tip %}

**Tipp:** Wenn ein von Dir genehmigter Pull Request deutlich geändert wurde, kannst Du Deinen Review verwerfen. Der Pull Request benötigt dann einen neuen Review, bevor er zusammengeführt werden kann. Weitere Informationen finden Sie unter „[Einen Pull-Request-Review ablehnen](/articles/dismissing-a-pull-request-review)“.

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.choose-pr-review %}
{% data reusables.repositories.changed-files %}
4. Überprüfe die Änderungen im Pull Request. Optional kannst Du [bestimmte Zeilen kommentieren](/articles/reviewing-proposed-changes-in-a-pull-request/#starting-a-review).
{% data reusables.repositories.review-changes %}
{% data reusables.repositories.review-summary-comment %}
7. Wähle **Approve** (Genehmigen) aus, um das Zusammenführen der im Pull Request vorgeschlagenen Änderungen zu genehmigen.
{% data reusables.repositories.submit-review %}

{% data reusables.repositories.request-changes-tips %}

### Weiterführende Informationen

- „[Vorgeschlagene Änderungen in einem Pull Request prüfen](/articles/reviewing-proposed-changes-in-a-pull-request)“
- „[Einen Pull Request kommentieren](/articles/commenting-on-a-pull-request)“
