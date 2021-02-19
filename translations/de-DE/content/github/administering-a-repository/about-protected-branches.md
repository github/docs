---
title: Informationen zu geschützten Branches
intro: 'You can protect important branches by setting branch protection rules, which define whether collaborators can delete or force push to the branch and set requirements for any pushes to the branch, such as passing status checks or a linear commit history.'
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/about-protected-branches
  - /enterprise/admin/developer-workflow/about-protected-branches-and-required-status-checks
  - /articles/about-branch-restrictions
  - /github/administering-a-repository/about-branch-restrictions
  - /articles/about-required-status-checks
  - /github/administering-a-repository/about-required-status-checks
  - /articles/types-of-required-status-checks
  - /github/administering-a-repository/types-of-required-status-checks
  - /articles/about-required-commit-signing
  - /github/administering-a-repository/about-required-commit-signing
  - /articles/about-required-reviews-for-pull-requests
  - /github/administering-a-repository/about-required-reviews-for-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### About branch protection rules

You can enforce certain workflows or requirements before a collaborator can push changes to a branch in your repository, including merging a pull request into the branch, by creating a branch protection rule.

By default, each branch protection rule disables force pushes to the matching branches and prevents the matching branches from being deleted. You can optionally disable these restrictions and enable additional branch protection settings.

By default, the restrictions of a branch protection rule don't apply to people with admin permissions to the repository. You can optionally choose to include administrators, too.

{% data reusables.repositories.branch-rules-example %} For more information about branch name patterns, see "[Managing a branch protection rule](/github/administering-a-repository/managing-a-branch-protection-rule)."

{% data reusables.pull_requests.you-can-auto-merge %}

### About branch protection settings

For each branch protection rule, you can choose to enable or disable the following settings.
- [Require pull request reviews before merging](#require-pull-request-reviews-before-merging)
- [Require status checks before merging](#require-status-checks-before-merging)
- [Require signed commits](#require-signed-commits)
- [Require linear history](#require-linear-history)
- [Include administrators](#include-administrators)
- [Restrict who can push to matching branches](#restrict-who-can-push-to-matching-branches)
- [Allow force pushes](#allow-force-pushes)
- [Allow deletions](#allow-deletions)

#### Require pull request reviews before merging

{% data reusables.pull_requests.required-reviews-for-prs-summary %}

If you enable required reviews, collaborators can only push changes to a protected branch via a pull request that is approved by the required number of reviewers with write permissions.

If a person with admin permissions chooses the **Request changes** option in a review, then that person must approve the pull request before the pull request can be merged. If a reviewer who requests changes on a pull request isn't available, anyone with write permissions for the repository can dismiss the blocking review.

{% data reusables.repositories.review-policy-overlapping-commits %}

If a collaborator attempts to merge a pull request with pending or rejected reviews into the protected branch, the collaborator will receive an error message.

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Changes have been requested.
```

Optionally, you can choose to dismiss stale pull request approvals when commits are pushed. If anyone pushes a commit that modifies code to an approved pull request, the approval will be dismissed, and the pull request cannot be merged. This doesn't apply if the collaborator pushes commits that don't modify code, like merging the base branch into the pull request's branch. Weitere Informationen über den Basisbranch findest Du unter „[Über Pull Requests](/articles/about-pull-requests)."

Optionally, you can restrict the ability to dismiss pull request reviews to specific people or teams. Weitere Informationen finden Sie unter „[Einen Pull-Request-Review ablehnen](/articles/dismissing-a-pull-request-review)“.

Optionally, you can choose to require reviews from code owners. If you do, any pull request that affects code with a code owner must be approved by that code owner before the pull request can be merged into the protected branch.

#### Require status checks before merging

Mithilfe von erforderlichen Statuschecks wird sichergestellt, dass alle erforderlichen CI-Tests bestanden werden, bevor Mitarbeiter Änderungen an einem geschützten Branch vornehmen können. Weitere Informationen findest Du unter „[Geschützte Branches konfigurieren](/articles/configuring-protected-branches/)“ und „[Erforderliche Statuschecks aktivieren](/articles/enabling-required-status-checks)“. Weitere Informationen findest Du unter „[Über Statuschecks](/github/collaborating-with-issues-and-pull-requests/about-status-checks)."

Bevor Du erforderliche Statusprüfungen aktivieren kannst, musst Du das Repository für die Verwendung des Status-API konfigurieren. For more information, see "[Repositories](/rest/reference/repos#statuses)" in the REST documentation.

After enabling required status checks, all required status checks must pass before collaborators can merge changes into the protected branch. Nachdem alle erforderlichen Statuschecks durchlaufen sind, müssen alle Commits entweder in einen anderen Branch übertragen und dann zusammengeführt oder direkt in den geschützten Branch übertragen werden.

{% note %}

**Hinweis:** Jede Person oder Integration mit Schreibberechtigungen auf ein Repository kann den Zustand von Statuschecks im Repository festlegen. {% data variables.product.company_short %} verifiziert nicht, dass der Autor eines Checks autorisiert ist, einen Check mit einem bestimmten Namen zu erstellen oder einen vorhandenen Status zu ändern. Vor dem Zusammenführen eines Pull Request solltest Du überprüfen, dass der Autor jedes im Merge-Feld aufgeführten Status erwartet wird.

{% endnote %}

Du kannst die erforderlichen Statusprüfungen entweder als "loose" (locker) oder als "strict" (streng) einrichten. Die Art der erforderlichen Statuschecks bestimmt, ob Dein Branch vor dem Zusammenführen auf dem aktuellen Stand mit dem Basisbranch sein muss.

| Art des erforderlichen Statuschecks | Einstellung                                                                                                                                              | Merge-Anforderungen                                                                    | Erwägungen                                                                                                                                                                                                                                                                                                 |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Streng**                          | The **Require branches to be up to date before merging** checkbox is checked.                                                                            | Der Branch **muss** vor dem Zusammenführen auf dem Stand des Basisbranches sein.       | Dies ist das Standardverhalten für erforderliche Statuschecks. Weitere Builds können erforderlich sein, da Du den Head-Branch auf den neuesten Stand bringen musst, nachdem andere Mitarbeiter Pull Requests in den geschützten Basisbranch überführt haben.                                               |
| **Locker**                          | The **Require branches to be up to date before merging** checkbox is **not** checked.                                                                    | Der Branch muss vor dem Zusammenführen **nicht** auf dem Stand des Basisbranches sein. | Es sind weniger Builds erforderlich, da Du den Head-Branch nicht auf den neuesten Stand bringen musst, nachdem andere Mitarbeiter Pull Requests überführt haben. Statuschecks schlagen nach dem Zusammenführen Deines Branches möglicherweise fehl, wenn inkompatible Änderungen am Basisbranch vorliegen. |
| **Deaktiviert**                     | Das Kontrollkästchen **Require status checks to pass before merging** (Statuschecks müssen vor dem Zusammenführen bestanden werden) ist **deaktiviert**. | Für den Branch gelten keine Merge-Einschränkungen.                                     | Wenn die erforderlichen Statuschecks nicht aktiviert sind, können Mitarbeiter den Branch unabhängig von seinem Stand gegenüber dem Basisbranch jederzeit zusammenführen. Die Wahrscheinlich inkompatibler Änderungen erhöht sich dadurch jedoch.                                                           |

For troubleshooting information, see "[Troubleshooting required status checks](/github/administering-a-repository/troubleshooting-required-status-checks)."

#### Require signed commits

When you enable required commit signing on a branch, contributors {% if currentVersion == "free-pro-team@latest" %}and bots{% endif %} can only push commits that have been signed and verified to the branch. Weitere Informationen findest Du unter „[Über die Verifikation von Commit-Signaturen](/articles/about-commit-signature-verification)."

{% note %}

**Note:** If a collaborator pushes an unsigned commit to a branch that requires commit signatures, the collaborator will need to rebase the commit to include a verified signature, then force push the rewritten commit to the branch.

{% endnote %}

Du kannst jederzeit lokale Commits zum Branch übertragen, wenn die Commits signiert und verifiziert sind. {% if currentVersion == "free-pro-team@latest" %}You can also merge signed and verified commits into the branch using a pull request on {% data variables.product.product_name %}. However, you cannot squash and merge a pull request into the branch on {% data variables.product.product_name %} unless you are the author of the pull request.{% else %} However, you cannot merge pull requests into the branch on {% data variables.product.product_name %}.{% endif %} You can {% if currentVersion == "free-pro-team@latest" %}squash and {% endif %}merge pull requests locally. Weitere Informationen findest Du unter "[Pull Requests lokal ausckecken](/github/collaborating-with-issues-and-pull-requests/checking-out-pull-requests-locally)."

{% if currentVersion == "free-pro-team@latest" %} For more information about merge methods, see "[About merge methods on {% data variables.product.prodname_dotcom %}](/github/administering-a-repository/about-merge-methods-on-github)."{% endif %}

#### Require linear history

Enforcing a linear commit history prevents collaborators from pushing merge commits to the branch. Dies bedeutet, dass alle Pull Requests, die in den geschützten Branch zusammengeführt sind, einen Squash-Merge oder einen Rebase-Merge verwenden müssen. A strictly linear commit history can help teams reverse changes more easily. Weitere Informationen über Merge-Methoden findest Du unter „[Über Pull-Request-Merges](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges)."

Bevor Du einen linearen Commit-Verlauf verlangen kannst, muss Dein Repository Squash-Merge oder Rebase-Merge erlauben. Weitere Informationen findest Du unter „[Konfigurieren von Pull-Request-Merges](/github/administering-a-repository/configuring-pull-request-merges)."

#### Include administrators

By default, protected branch rules do not apply to people with admin permissions to a repository. You can enable this setting to include administrators in your protected branch rules.

#### Restrict who can push to matching branches

{% if currentVersion == "free-pro-team@latest" %}
You can enable branch restrictions if your repository is owned by an organization using
{% data variables.product.prodname_team %} or {% data variables.product.prodname_ghe_cloud %}.
{% endif %}

When you enable branch restrictions, only users, teams, or apps that have been given permission can push to the protected branch. You can view and edit the users, teams, or apps with push access to a protected branch in the protected branch's settings.

You can only give push access to a protected branch to users, teams, or installed {% data variables.product.prodname_github_apps %} with write access to a repository. People and apps with admin permissions to a repository are always able to push to a protected branch.

#### Allow force pushes

By default, {% data variables.product.product_name %} blocks force pushes on all protected branches. Wenn Du erzwungene Pushes zu einem geschützten Branch aktivierst, kann jeder Benutzer mit mindestens Schreibberechtigungen im Repository Pushes zum Branch erzwingen, inbegriffen Benutzer mit Administratorberechtigungen.

Das Aktivieren erzwungener Pushes wird keine anderen Branch-Schutzregeln überschreiben. Wenn ein Branch beispielsweise einen linearen Commit-Verlauf verlangt, kannst Du keine Merge-Commit-Pushes zu diesem Branch erzwingen.

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}You cannot enable force pushes for a protected branch if a site administrator has blocked force pushes to all branches in your repository. Weitere Informationen findest Du unter „[Blockieren von erzwungenen Pushes zu Repositorys, die einem Benutzerkonto oder einer Organisation gehören](/enterprise/{{ currentVersion }}/admin/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization)."

Wenn ein Websiteadministrator erzwungene Pushes nur auf den Standardbranch blockiert hat, kannst Du erzwungene Pushes trotzdem für jeden anderen geschützten Branch aktivieren.{% endif %}

#### Allow deletions

Standardmäßig kannst Du einen geschützten Branch nicht löschen. When you enable deletion of a protected branch, anyone with at least write permissions to the repository can delete the branch.
