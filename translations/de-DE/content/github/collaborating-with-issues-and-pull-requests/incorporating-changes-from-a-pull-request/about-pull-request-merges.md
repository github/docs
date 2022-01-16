---
title: Informationen zum Zusammenführen von Pull Requests
intro: 'Du kannst [Pull Requests zusammenführen](/articles/merging-a-pull-request), indem Du alle Commits in einem Feature-Branch beibehältst, alle Commits in einen einzigen Commit squashst oder ein Rebasing einzelner Commits vom Head-Branch auf den Basis-Branch durchführst.'
redirect_from:
  - /articles/about-pull-request-merge-squashing/
  - /articles/about-pull-request-merges
  - /github/collaborating-with-issues-and-pull-requests/about-pull-request-merges
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---
{% data reusables.pull_requests.default_merge_option %}

### Deine Pull-Request-Commits squashen und zusammenführen

{% data reusables.pull_requests.squash_and_merge_summary %}

#### Merge message for a squash merge

When you squash and merge, {% data variables.product.prodname_dotcom %} generates a commit message which you can change if you want to. The message default depends on whether the pull request contains multiple commits or just one.

| Number of commits    | Zusammenfassung                                                                            | Beschreibung                                                                 |
| -------------------- | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| One commit           | The title of the commit message for the single commit, followed by the pull request number | The body text of the commit message for the single commit                    |
| More than one commit | The pull request title, followed by the pull request number                                | A list of the commit messages for all of the squashed commits, in date order |

#### Squashing and merging a long-running branch

If you plan to continue work on the [head branch](/github/getting-started-with-github/github-glossary#head-branch) of a pull request after the pull request is merged, we recommend you don't squash and merge the pull request.

When you create a pull request, {% data variables.product.prodname_dotcom %} identifies the most recent commit that is on both the head branch and the [base branch](/github/getting-started-with-github/github-glossary#base-branch): the common ancestor commit. When you squash and merge the pull request, {% data variables.product.prodname_dotcom %} creates a commit on the base branch that contains all of the changes you made on the head branch since the common ancestor commit.

Because this commit is only on the base branch and not the head branch, the common ancestor of the two branches remains unchanged. If you continue to work on the head branch, then create a new pull request between the two branches, the pull request will include all of the commits since the common ancestor, including commits that you squashed and merged in the previous pull request. If there are no conflicts, you can safely merge these commits. However, this workflow makes merge conflicts more likely. If you continue to squash and merge pull requests for a long-running head branch, you will have to resolve the same conflicts repeatedly.

### Rebase und Merge Deiner Pull-Request-Commits durchführen

{% data reusables.pull_requests.rebase_and_merge_summary %}

In folgenden Fällen ist kein automatisches Rebasing und Zusammenführen auf {% data variables.product.product_location %} möglich:
- Für den Pull Request liegen Mergekonflikte vor.
- Beim Rebasing der Commits vom Basis-Branch in den Head-Branch kommt es zu Konflikten.
- Das Rebasing der Commits gilt als „unsicher“, beispielsweise wenn ein Rebase ohne Mergekonflikte möglich ist, jedoch ein anderes Ergebnis liefern würde als ein Merge.

Wenn Sie trotzdem ein Rebasing der Commits durchführen möchten, aber kein automatischer Rebase auf {% data variables.product.product_location %} möglich ist, müssen Sie folgendermaßen vorgehen:
- Führe ein Rebasing des Themen-Branches (oder Head-Branches) auf den Basis-Branch lokal in der Befehlszeile durch.
- [Behebe Mergekonflikte in der Befehlszeile](/articles/resolving-a-merge-conflict-using-the-command-line/).
- Erzwinge den Push der Rebase-Commits an den Themen-Branch (oder Remote-Head-Branch) des Pull Requests.

Alle Benutzer mit Schreibberechtigungen im Repository können dann über die Rebase- und Merge-Schaltfläche auf {% data variables.product.product_location %} [die Änderungen zusammenführen ](/articles/merging-a-pull-request/).

### Weiterführende Informationen

- „[Informationen zu Pull Requests](/articles/about-pull-requests/)“
- „[Mergekonflikte beheben](/articles/addressing-merge-conflicts)“
