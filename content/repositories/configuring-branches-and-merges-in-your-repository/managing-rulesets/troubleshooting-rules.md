---
title: Troubleshooting rules
intro: 'Learn how to troubleshoot rulesets when you''re contributing to a repository.'
product: '{% data reusables.gated-features.repo-rules %}'
versions:
  feature: repo-rules
topics:
  - Repositories
shortTitle: Troubleshooting
---

## Troubleshooting rulesets

If you cannot perform an action in a repository and want to know why, you can view the active rulesets targeting the branch or tag you're working with. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/managing-rulesets-for-a-repository#viewing-rulesets-for-a-repository)."

Depending on which rules are active, you may need to edit your commit history locally before you can push your commits to the remote branch. For example, if a branch requires commits to be signed, you can update your signing settings, then use an interactive rebase on your local branch to rewrite your Git history with signed commits. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets#require-signed-commits)" and "[AUTOTITLE](/get-started/using-git/using-git-rebase-on-the-command-line)."

If a branch or tag is targeted by rules restricting the metadata of commits, your commits may be rejected if part of the commit's metadata does not match a certain pattern. For example, you might need to add an issue number to the start of your commit message, or change the name of a new branch or tag you're trying to push to the repository. If your commits are rejected, you will see a message telling you the pattern the relevant metadata needs to match. As with signed commits, you may need to perform a rebase to squash the commits or rewrite each commit individually. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets#metadata-restrictions)."

{% ifversion repo-rules-required-workflows %}

## Troubleshooting ruleset workflows

{% data reusables.repositories.rulest-workflows-intro-paragraph %}

### Ruleset workflows for open pull requests

If you create a rule while a pull request is open, the required workflow will not run automatically. To trigger the required workflow, push a new commit, update your branch, or close and re-open the pull request.

### Supported ruleset workflow events

{% data reusables.repositories.ruleset-workflow-event-triggers %}

For more information, see "[AUTOTITLE](/actions/using-workflows/events-that-trigger-workflows#pull_request)."

Ruleset workflows do not run on events triggered by the `GITHUB_TOKEN`. For more information, see "[AUTOTITLE](/actions/security-guides/automatic-token-authentication#using-the-github_token-in-a-workflow)."

### Blocking repository creation

A required workflow can block people from creating a repository, since a workflow can't run against a repository that's being initialized. To get around this, the ruleset either needs to have "Evaluate" as the enforcement status, or someone with bypass permissions needs to create the repository and bypass the branch protection.

For more information about enforcement statuses and "Evaluate" mode, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository#about-using-enforcement-statuses)."

For more information about bypass permissions, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)."

### Branch targets in a ruleset

Verify that your ruleset workflow does not target all branches in the repository. It should only target branches where all changes to the branch are performed by pull requests.

### Supported directory

Verify that your workflow file exists in the `.github/workflows` directory. If you want to run a ruleset workflow on `pull_request` events in a repository that is not the source repository, you can take any of the following actions:
  * Add a conditional to the workflow file such as, `if: {{ github.repository != 'my-org/source-repo' }}`. For more information, see "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idif)."
  * Disable Actions completely in the source repository. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#managing-github-actions-permissions-for-your-repository)."
  * Disable the individual workflow in the source repository. For more information, see "[AUTOTITLE](/actions/using-workflows/disabling-and-enabling-a-workflow)."

### Using the `merge_group` trigger

{% data reusables.actions.merge-group-event-with-required-checks %}

### Source repository permissions

Verify that the source repository permissions are set to "Accessible from repositories in the `ORGANIZATION NAME` organization."

For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-a-private-repository)."

### Source repository privacy settings

Verify that the ruleset workflow file is in a source repository that has the same or less restrictive privacy settings than the repositories you want to run it in. Specifically, a public workflow can run on any repository in your organization, an internal workflow can run on internal and private repositories, and a private workflow can run on private repositories. For more information, see "[AUTOTITLE](/actions/using-workflows/about-workflows)."

### Permissions for creating a new repository

To create a new repository when a ruleset workflow is configured, ensure that you have bypass permissions for your ruleset. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository#granting-bypass-permissions-for-your-ruleset)".

### Rule insights

{% data variables.product.company_short %} does not log rule insights until a pull request is merged or a merge is attempted.

### Concurrency

Verify that your ruleset workflow does not use the `cancel-in-progress` concurrency setting. For more information about concurrency, see "[AUTOTITLE](/actions/using-jobs/using-concurrency#using-concurrency-in-different-scenarios)".

{% endif %}
