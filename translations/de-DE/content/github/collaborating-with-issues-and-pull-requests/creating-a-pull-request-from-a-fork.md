---
title: Einen Pull Request von einem Fork erstellen
intro: 'Du kannst einen Pull Request erstellen, um Änderungen vorzuschlagen, die Du an einer Fork eines vorgelagerten Repositorys vorgenommen hast.'
redirect_from:
  - /articles/creating-a-pull-request-from-a-fork
permissions: Anyone with write access to a repository can create a pull request from a user-owned fork.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

Du kannst den Betreuern des vorgelagerten Repository auch die Berechtigung geben, Commits zu einem benutzereigenen Fork zu übertragen. Wenn Dein Pull Request Deinen Themen-Branch mit einem Branch im vorgelagerten Repository als Basis-Branch vergleicht, wird Dein Themen-Branch auch als Vergleichs-Branch des Pull Requests bezeichnet. Weitere Informationen über Pull-Request-Branches sowie Beispiele dazu findest du unter „[Einen Pull Request erstellen](/articles/creating-a-pull-request/#changing-the-branch-range-and-destination-repository)."

{% data reusables.pull_requests.perms-to-open-pull-request %}

1. Navigiere zum ursprünglichen Repository, von dem Du den Fork erstellt hast.
{% data reusables.repositories.new-pull-request %}
3. Klicke auf der Seite „Compare“ (Vergleichen) auf **compare across forks** (Zwischen Forks vergleichen). ![Link zum Vergleich zwischen Forks](/assets/images/help/pull_requests/compare-across-forks-link.png)
4. Wähle im „base branch" (Basis-Branch) Dropdownmenü den Branch des vorgelagerten Repository, in das Du die Änderungen zusammenführen willst. ![Dropdownmenüs zur Auswahl von Basis-Fork und -Branch](/assets/images/help/pull_requests/choose-base-fork-and-branch.png)
5. Wähle im „head fork" (Head-Fork) Dropdownmenü Deinen Fork, dann nutze das compare branch" (Vergleichs-Branch) Dropdownmenü zur Auswahl des Branches, in dem Du die Änderungen gemacht hast. ![Dropdownmenüs zur Auswahl von Head-Fork und Vergleichs-Branch](/assets/images/help/pull_requests/choose-head-fork-compare-branch.png)
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.allow-maintainers-user-forks %}

  ![Kontrollkästchen, um Bearbeitung durch Betreuer zuzulassen](/assets/images/help/pull_requests/allow-maintainers-to-make-edits.png)
{% data reusables.repositories.create-pull-request %}

{% data reusables.repositories.asking-for-review %}

### Weiterführende Informationen

- „[Mit Forks arbeiten](/articles/working-with-forks)“
- „[Änderungen an einem Pull-Request-Branch zulassen, der von einem Fork erstellt wurde](/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork)“
