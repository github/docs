---
title: 'Änderungen an einem Pull-Request-Branch zulassen, der von einem Fork erstellt wurde'
intro: 'Für eine bessere Zusammenarbeit kannst Du Commits für Branches erlauben, die Du aus Forks in Deinem Benutzerkonto erstellt hast.'
redirect_from:
  - /articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork
  - /github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork
permissions: People with push access to the upstream repository of a fork owned by a user account can commit to the forked branches.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---
Nur die Ersteller von Pull Requests können Betreuern von vorgelagerten Repositorys oder Benutzern mit Push-Zugriff auf das vorgelagerte Repository die Berechtigung erteilen, in einer benutzereigenen Fork Commits an den Vergleichs-Branch ihres Pull Requests vorzunehmen. Weitere Informationen zu vorgelagerten Repositorys findest Du unter „[Informationen zu Forks](/articles/about-forks).“

Pull-Request-Autoren können diese Berechtigungen erteilen, wenn sie initial einen Pull Request aus einer benutzereigenen Fork erstellen oder nachdem sie den Pull Request erstellt haben. Weitere Informationen findest Du unter „[Einen Pull Request aus einer Fork erstellen](/articles/creating-a-pull-request-from-a-fork).“

Du kannst Commit-Berechtigungen festlegen, wenn Du erstmalig einen Pull Request von einem Fork erstellst. Weitere Informationen findest Du unter „[Einen Pull Request aus einer Fork erstellen](/articles/creating-a-pull-request-from-a-fork).“ Zusätzlich kannst Du einen vorhandenen Pull Request ändern, um Repository-Betreuern Commits an Deinem Branch zu ermöglichen.

### Repository-Betreuer-Berechtigungen auf vorhandene Pull Requests aktivieren

1. Navigieren Sie auf {% data variables.product.product_name %} zur Hauptseite des vorgelagerten Repositorys Ihres Pull Requests.
2. Klicke unter dem Namen des vorgelagerten Repositorys auf {% octicon "git-pull-request" aria-label="The pull request icon" %} **Pull requests** (Pull Requests). ![Auswahl der Issue- und Pull-Request-Registerkarten](/assets/images/help/repository/repo-tabs-pull-requests.png)
3. Navigiere in der Liste der Pull Requests zu dem Pull Request, für den Du Commits zulassen möchtest.
{% data reusables.repositories.allow-maintainers-user-forks %}

  ![Kontrollkästchen in Seitenleiste, um Bearbeitung durch Maintainer zuzulassen](/assets/images/help/pull_requests/allow-maintainers-to-make-edits-sidebar-checkbox.png)

### Weiterführende Informationen

- „[Änderungen an Pull-Request-Branch freigeben, der von einem Fork erstellt wurde](/articles/committing-changes-to-a-pull-request-branch-created-from-a-fork)“
