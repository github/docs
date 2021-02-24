---
title: Einen Pull Request zusammenführen
intro: Führe einen Pull Request in den vorgelagerten Branch zusammen, wenn die Arbeit abgeschlossen ist. Jede Person mit Push-Zugriff auf das Repository kann den Merge abschließen.
redirect_from:
  - /articles/merging-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Informationen zum Zusammenführen von Pull Requests

Mit einem Pull Request schlägst Du vor, dass Änderungen, die Du an einem Head-Branch gemacht hast, in einen Basis-Branch zusammengeführt werden sollten. Standardmäßig kann jeder Pull Request jederzeit zusammengeführt werden, es sei denn, der Head-Branch steht in Konflikt mit dem Basisbranch. However, there may be restrictions on when you can merge a pull request into a specific branch. For example, you may only be able to merge a pull request into the default branch if required status checks are passing. Weitere Informationen findest Du unter „[Informationen zu geschützten Branches](/github/administering-a-repository/about-protected-branches).“

{% data reusables.pull_requests.you-can-auto-merge %}

Wenn beim Pull Request Mergekonflikte vorliegen oder Sie die Änderungen vor dem Mergen testen möchten, können Sie [den Pull Request lokal auschecken](/articles/checking-out-pull-requests-locally) und ihn über die Befehlszeile mergen.

Pull-Request-Entwürfe kannst du nicht zusammenführen. Weitere Informationen zu Entwürfen von Pull Requests findest Du unter „[Informationen zu Pull Requests](/articles/about-pull-requests#draft-pull-requests).“

{% data reusables.pull_requests.automatically-delete-branches %}

Wenn Sie die Änderungen in einem Themen-Branch nicht in den vorgelagerten Branch mergen möchten, können Sie [den Pull Request schließen](/articles/closing-a-pull-request), ohne ihn zu mergen.

### Einen Pull Request auf {% data variables.product.prodname_dotcom %} zusammenführen

{% data reusables.repositories.sidebar-pr %}
2. Klicke in der Liste „Pull Requests“ auf den Pull Request, den Du zusammenführen möchtest.
3. Je nach den Merge-Optionen, die für Dein Repository aktiviert sind, stehen Dir folgende Möglichkeiten zur Verfügung:
    - [Du kannst alle Commits in den Basis-Branch zusammenführen](/articles/about-pull-request-merges/), indem Du auf **Merge pull request** (Pull Request zusammenführen) klickst. Wenn die Option **Merge pull request** (Pull Request zusammenführen) nicht angezeigt wird, wähle im Merge-Dropdownmenü **Create a merge commit** (Merge-Commit erstellen) aus. ![Schaltfläche „Merge pull request“ (Pull Request zusammenführen)](/assets/images/help/pull_requests/pullrequest-mergebutton.png)
    - [Du kannst die Commits in einen einzelnen Commit squashen](/articles/about-pull-request-merges/#squash-and-merge-your-pull-request-commits), indem Du im Merge-Dropdownmenü **Squash and merge** (Squash und Merge) auswählst und dann auf die Schaltfläche **Squash and merge** (Squash und Merge) klickst. ![Auf Schaltfläche „Squash and merge“ (Squash und Merge) klicken](/assets/images/help/pull_requests/select-squash-and-merge-from-drop-down-menu.png)
    - [Du kannst ein Rebasing einzelner Commits in den Basis-Branch durchführen](/articles/about-pull-request-merges/#rebase-and-merge-your-pull-request-commits), indem Du im Merge-Dropdownmenü **Rebase and merge** (Rebase und Merge) wählst und dann auf die Schaltfläche **Rebase and merge** (Rebase und Merge) klickst. ![„Rebase and merge“ (Rebase und Merge) aus Dropdownmenü auswählen](/assets/images/help/pull_requests/select-rebase-and-merge-from-drop-down-menu.png)

    {% note %}

    **Hinweis:** Durch das Rebasing und Zusammenführen werden immer die Informationen zum Beitragenden aktualisiert und neue Commit-SHAs erstellt. Weitere Informationen findest Du unter „[Informationen zum Zusammenführen von Pull Requests](/articles/about-pull-request-merges#rebase-and-merge-your-pull-request-commits).“

    {% endnote %}
4. Wenn Sie dazu aufgefordert werden, geben Sie eine Commit-Mitteilung ein oder akzeptieren Sie die Standardmitteilung.

   {% data reusables.pull_requests.default-commit-message-squash-merge %}
   ![Feld für Commit-Mitteilung](/assets/images/help/pull_requests/merge_box/pullrequest-commitmessage.png)

{% data reusables.files.choose-commit-email %}

   {% note %}

   **Note:** The email selector is not available for rebase merges, which do not create a merge commit, or for squash merges, which credit the user who created the pull request as the author of the squashed commit.

   {% endnote %}

6. Klicke auf **Confirm merge** (Merge bestätigen), **Confirm squash and merge** (Squash und Merge bestätigen) oder **Confirm rebase and merge** (Rebase und Merge bestätigen).
6. Optional kannst Du auch [den Branch löschen](/articles/deleting-unused-branches). So bleibt die Liste der Branches in Ihrem Repository ordentlich.

The repository may be configured so that the head branch for a pull request is automatically deleted when you merge a pull request. Weitere Informationen findest Du unter „[Verwalten des automatischen Löschens von Branches](/github/administering-a-repository/managing-the-automatic-deletion-of-branches)."

   {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
   {% note %}

   **Note:** {% data reusables.pull_requests.retargeted-on-branch-deletion %}
   For more information, see "[About branches](/github/collaborating-with-issues-and-pull-requests/about-branches#working-with-branches)."

   {% endnote %}
   {% endif %}

Pull Requests werden mit der [Option `--no-ff`](https://git-scm.com/docs/git-merge#_fast_forward_merge) gemergt, mit Ausnahme von [Pull Requests mit Squash- oder Rebase-Commits](/articles/about-pull-request-merges), die mit der Fast-Forward-Option gemergt werden.

{% data reusables.pull_requests.close-issues-using-keywords %}

### Weiterführende Informationen

- „[Pull Request rückgängig machen](/articles/reverting-a-pull-request)“
- „[Deinen Branch mit {% data variables.product.prodname_desktop %} synchronisieren](/desktop/guides/contributing-to-projects/syncing-your-branch/)"
- „[Informationen zum Mergen von Pull Requests](/articles/about-pull-request-merges)“
- „[Mergekonflikte beheben](/articles/addressing-merge-conflicts)“
