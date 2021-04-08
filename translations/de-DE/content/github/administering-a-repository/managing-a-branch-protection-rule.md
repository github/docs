---
title: Managing a branch protection rule
intro: 'You can create a branch protection rule to enforce certain workflows for one or more branches, such as requiring an approving review or passing status checks for all pull requests merged into the protected branch.'
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/configuring-protected-branches
  - /enterprise/admin/developer-workflow/configuring-protected-branches-and-required-status-checks
  - /articles/enabling-required-status-checks
  - /github/administering-a-repository/enabling-required-status-checks
  - /articles/enabling-branch-restrictions
  - /github/administering-a-repository/enabling-branch-restrictions
  - /articles/enabling-required-reviews-for-pull-requests
  - /github/administering-a-repository/enabling-required-reviews-for-pull-requests
  - /articles/enabling-required-commit-signing
  - /github/administering-a-repository/enabling-required-commit-signing
  - /github/administering-a-repository/requiring-a-linear-commit-history
  - /github/administering-a-repository/enabling-force-pushes-to-a-protected-branch
  - /github/administering-a-repository/enabling-deletion-of-a-protected-branch
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
permissions: People with admin permissions to a repository can manage branch protection rules.
topics:
  - repositorys
---

### About branch protection rules

{% data reusables.repositories.branch-rules-example %}

You can create a rule for all current and future branches in your repository with the wildcard syntax `*`. Weil {% data variables.product.company_short %} das `File::FNM_PATHNAME`-Flag für die `File.fnmatch`-Syntax verwendet, wird der Platzhalter das Verzeichnistrennzeichen (`/`) nicht abgleichen. Zum Beispiel wird `qa/*` alle Branches mit `qa/` abgleichen und einen einzigen Schrägstrich enthalten. You can include multiple slashes with `qa/**/*`, and you can extend the `qa` string with `qa**/**/*` to make the rule more inclusive. Weitere Informationen zu den Syntax-Optionen für Branch-Regeln findest Du in der [fnmatch-Dokumentation](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch).

Wenn es für ein Repository mehrere Regeln für geschützte Branches gibt, die dieselben Branches betreffen, haben die Regeln, die einen spezifischen Branch-Namen enthalten, die höchste Priorität. Wenn es mehr als eine Regel für geschützte Branches gibt, die auf den gleichen spezifischen Branch-Namen verweist, hat die zuerst erstellte Branch-Regel eine höhere Priorität.

Regeln für geschützte Branches mit einem Sonderzeichen, wie `*`, `?` oder `]`, werden in der Reihenfolge ihrer Erstellung angewendet, sodass ältere Regeln mit diesen Zeichen eine höhere Priorität haben.

Um eine Ausnahme für eine vorhandene Branch-Regel zu erstellen, erstellst Du eine neue Branch-Schutzregel mit höherer Priorität, z. B. eine Branch-Regel für einen bestimmten Branch-Namen.

For more information about each of each of the available branch protection settings, see "[About protected branches](/github/administering-a-repository/about-protected-branches)."

### Creating a branch protection rule

When you create a branch rule, the branch you specify doesn't have to exist yet in the repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
1. Optionally, enable required pull request reviews.
   - Under "Protect matching branches", select **Require pull request reviews before merging**. ![Kontrollkästchen für Einschränkungen bei Pull-Request-Reviews](/assets/images/help/repository/PR-reviews-required.png)
   - Click the **Required approving reviews** drop-down menu, then select the number of approving reviews you'd like to require on the branch. ![Dropdownmenü zur Auswahl der Anzahl an erforderlichen genehmigenden Reviews](/assets/images/help/repository/number-of-required-review-approvals.png)
   - Optionally, to dismiss a pull request approval review when a code-modifying commit is pushed to the branch, select **Dismiss stale pull request approvals when new commits are pushed**. ![Kontrollkästchen „Dismiss stale pull request approvals when new commits are pushed“ (Alte Pull-Request-Genehmigungen verwerfen, wenn neue Commits übertragen werden)](/assets/images/help/repository/PR-reviews-required-dismiss-stale.png)
   - Optionally, to require review from a code owner when the pull request affects code that has a designated owner, select **Require review from Code Owners**. Weitere Informationen findest Du unter „[Über Codeinhaber](/github/creating-cloning-and-archiving-repositories/about-code-owners)." ![Review von Codeinhabern erforderlich](/assets/images/help/repository/PR-review-required-code-owner.png)
   - Optionally, if the repository is part of an organization, select **Restrict who can dismiss pull request reviews**. Then, search for and select the people or teams who are allowed to dismiss pull request reviews. Weitere Informationen findest Du unter „[Einen Pull-Request-Review ablehnen](/github/collaborating-with-issues-and-pull-requests/dismissing-a-pull-request-review).“ ![Kontrollkästchen „Restrict who can dismiss pull request reviews“ (Einschränken, wer Pull-Request-Reviews verwerfen kann)](/assets/images/help/repository/PR-review-required-dismissals.png)
1. Optionally, enable required status checks.
   - Aktivieren Sie **Require status checks to pass before merging** (Statuschecks müssen vor dem Mergen bestanden werden). ![Option für erforderliche Statuschecks](/assets/images/help/repository/required-status-checks.png)
   - Optionally, to ensure that pull requests are tested with the latest code on the protected branch, select **Require branches to be up to date before merging**. ![Kontrollkästchen für lockere oder strenge erforderliche Statuschecks](/assets/images/help/repository/protecting-branch-loose-status.png)
   - Wähle aus der Liste der verfügbaren Statuschecks diejenigen Prüfungen, die Du verlangen willst. ![Liste der verfügbaren Statuschecks](/assets/images/help/repository/required-statuses-list.png)
1. Optionally, select **Require signed commits**. ![Option „Require signed commits“ (Verlange signierte Commits)](/assets/images/help/repository/require-signed-commits.png)
1. Optionally, select **Require linear history**. ![Option „Required linear history" (Erforderter linearer Verlauf)](/assets/images/help/repository/required-linear-history.png)
1. Optional wähle **Include administrators** (Administratoren einbeziehen) aus. ![Kontrollkästchen „Include administrators“ (Administratoren einbeziehen)](/assets/images/help/repository/include-admins-protected-branches.png)
1. Optionally,{% if currentVersion == "free-pro-team@latest" %} if your repository is owned by an organization using {% data variables.product.prodname_team %} or {% data variables.product.prodname_ghe_cloud %},{% endif %} enable branch restrictions.
   - Select **Restrict who can push to matching branches**. ![Kontrollkästchen „Branch restriction" (Branch-Einschränkung)](/assets/images/help/repository/restrict-branch.png)
   - Search for and select the people, teams, or apps who will have permission to push to the protected branch. ![Suche für die Branch-Einschränkung](/assets/images/help/repository/restrict-branch-search.png)
1. Optionally, under "Rules applied to everyone including administrators", select **Allow force pushes**. ![Option „Allow force pushes" (Erlaube erzwungene Pushes)](/assets/images/help/repository/allow-force-pushes.png)
1. Optionally, select **Allow deletions**. ![Option „Allow branch deletions" (Erlaube Branch-Löschungen)](/assets/images/help/repository/allow-branch-deletions.png)
1. Klicke auf **Create** (Erstellen).

### Editing a branch protection rule

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
1. To the right of the branch protection rule you want to edit, click **Edit**. ![Schaltfläche „Edit" (Bearbeiten)](/assets/images/help/repository/edit-branch-protection-rule.png)
1. Make your desired changes to the branch protection rule.
1. Klicke auf **Save changes** (Änderungen speichern). ![Schaltfläche „Edit message“ (Meldung bearbeiten)](/assets/images/help/repository/save-branch-protection-rule.png)

### Deleting a branch protection rule

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
1. To the right of the branch protection rule you want to delete, click **Delete**. ![Schaltfläche „Delete" (Löschen)](/assets/images/help/repository/delete-branch-protection-rule.png)
