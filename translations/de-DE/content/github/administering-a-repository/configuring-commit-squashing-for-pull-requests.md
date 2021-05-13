---
title: Commit-Squashing für Pull-Requests konfigurieren
intro: 'Sie können der Commit-Squashing für alle Pull-Request-Merges auf {% data variables.product.product_location %} in Ihrem Repository erzwingen, zulassen oder deaktivieren.'
redirect_from:
  - /articles/configuring-commit-squashing-for-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

{% data reusables.pull_requests.configure_pull_request_merges_intro %}

{% data reusables.pull_requests.default-commit-message-squash-merge %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Wähle unter der Schaltfläche „Merge" (Zusammenführen) die Option **Allow merge commits** (Merge-Commits zulassen) aus. Dadurch können Mitarbeiter einen Pull Request mit einem vollständigen Verlauf von Commits zusammenführen. ![Standard_Merge_Commits_zulassen](/assets/images/help/repository/pr-merge-full-commits.png)
4. Wähle unter der Schaltfläche „Merge" (Zusammenführen) die Option **Allow squash merging** (Squash-Merging zulassen) aus. Dadurch können Mitarbeiter einen Pull Request zusammenführen, indem sie alle Commits in einen einzigen Commit squashen. Wenn Du neben **Allow squash merging** (Squash-Merging zulassen) noch eine weitere Merge-Methode auswählst, können Mitarbeiter den Typ des Merge-Commits auswählen, wenn sie einen Pull Request zusammenführen. {% data reusables.repositories.squash-and-rebase-linear-commit-hisitory %} ![Pull Request Squash-Commits](/assets/images/help/repository/pr-merge-squash.png)

### Weiterführende Informationen

- „[Informationen zum Mergen von Pull Requests](/articles/about-pull-request-merges)“
- „[Einen Pull Request mergen](/articles/merging-a-pull-request)“
