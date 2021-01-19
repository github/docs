---
title: Informationen zu Merge-Methoden auf GitHub
intro: 'Sie können Mitarbeitern mit Push-Zugriff auf Ihr Repository erlauben, ihre Pull Requests auf {% data variables.product.product_location %} mit verschiedenen Merge-Optionen zu mergen, oder eine bestimmte Merge-Methode für alle Pull Requests Ihres Repositorys erzwingen.'
redirect_from:
  - /articles/about-merge-methods-on-github
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.pull_requests.configure_pull_request_merges_intro %} Sie können eine Art von Merge-Methode, beispielsweise Commit-Squashing oder Rebasing, erzwingen, indem Sie nur die gewünschte Methode für Ihr Repository aktivieren.

{% data reusables.pull_requests.default_merge_option %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
Die Standard-Mergemethode erzeugt einen Merge-Commit. Du kannst verhindern, dass Merge-Commits an einen geschützten Branch übertragen werden, indem Du einen linearen Commit-Verlauf erzwingst. For more information, see "[About protected branches](/github/administering-a-repository/about-protected-branches#require-linear-history)."{% endif %}

### Deine Merge-Commits squashen

{% data reusables.pull_requests.squash_and_merge_summary %}

Bevor Du das Commit-Squashing aktivierst, solltest Du diese Nachteile berücksichtigen:
- Du verlierst Informationen darüber, wann bestimmte Änderungen ursprünglich vorgenommen wurden und wer die Squash-Commits erstellt hat.
- If you continue working on the head branch of a pull request after squashing and merging, and then create a new pull request between the same branches, commits that you previously squashed and merged will be listed in the new pull request. You may also have conflicts that you have to repeatedly resolve in each successive pull request. Weitere Informationen finden Sie unter „[Informationen zum Mergen von Pull Requests](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges#squashing-and-merging-a-long-running-branch)“.
- Die Verwendung einiger Git-Befehle mit der „SHA“- oder „hash“-ID kann schwieriger sein, da die SHA-ID für die ursprünglichen Commits verloren geht. Beispielsweise kann die Verwendung von [`git rerere`](https://git-scm.com/docs/git-rerere) nicht so effektiv sein.

Weitere Informationen findest Du unter „[Commit-Squashing für Pull Requests konfigurieren](/articles/configuring-commit-squashing-for-pull-requests).“

### Rebasing und Zusammenführen Deiner Commits

{% data reusables.pull_requests.rebase_and_merge_summary %}

Bevor Du das Commit-Rebasing aktivierst, sollten Du diese Nachteile berücksichtigen:
- Repository-Mitarbeiter müssen unter Umständen ein Rebasing in der Befehlszeile durchführen, Konflikte beheben und ihre Änderungen an den Themen-Branch (oder remote Head-Branch) des Pull Requests erzwingen und übertragen, bevor sie die Option **Rebase and merge** (Rebasing und Zusammenführen) auf {% data variables.product.product_location %} verwenden können. Das Erzwingen eines Push muss mit Vorsicht durchgeführt werden, damit die Mitarbeiter die Arbeit nicht überschreiben, auf der andere ihre Arbeit aufgebaut haben. Weitere Informationen dazu, wann die Option **Rebase and merge** (Rebase und Merge) auf {% data variables.product.product_location %} deaktiviert ist, sowie zum Workflow, um sie wieder zu aktivieren, findest Du unter „[Informationen zum Zusammenführen von Pull Requests](/articles/about-pull-request-merges/#rebase-and-merge-your-pull-request-commits).“

Weitere Informationen findest Du unter „[Commit-Rebasing für Pull Requests konfigurieren](/articles/configuring-commit-rebasing-for-pull-requests).“
