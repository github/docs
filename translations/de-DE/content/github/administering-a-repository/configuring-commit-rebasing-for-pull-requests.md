---
title: Commit-Rebasing für Pull-Requests konfigurieren
intro: 'Sie können Commit-Rebasing für alle Pull-Request-Merges auf {% data variables.product.product_location %} in Ihrem Repository erzwingen, zulassen oder deaktivieren.'
redirect_from:
  - /articles/configuring-commit-rebasing-for-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.pull_requests.configure_pull_request_merges_intro %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Wähle unter der Schaltfläche „Merge" (Zusammenführen) die Option **Allow rebase merging** (Rebase-Zusammenführung zulassen) aus. Dadurch können Mitarbeiter einen Pull Request durch ein Rebasing ihrer einzelnen Commits auf den Basisbranch zusammenführen. Wenn Du auch eine weitere Merge-Methode auswählst, können Mitarbeiter den Typ des Merge-Commits auswählen, wenn sie einen Pull Request zusammenführen. {% data reusables.repositories.squash-and-rebase-linear-commit-hisitory %} ![Pull-Request-Rebasing-Commits](/assets/images/help/repository/pr-merge-rebase.png)
