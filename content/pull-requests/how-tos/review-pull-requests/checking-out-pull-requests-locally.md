---
title: Checking out pull requests locally
intro: Check out pull requests locally to resolve merge conflicts, test changes, or modify code.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally
  - /articles/checking-out-pull-requests-locally
  - /github/collaborating-with-issues-and-pull-requests/checking-out-pull-requests-locally
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally
  - /pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Check out a PR locally
category:
  - Review pull requests
contentType: how-tos
---

> [!NOTE]
> Pull request authors can give upstream repository maintainers, or people with push access to the upstream repository, permission to make commits to their pull request's compare branch in a user-owned fork. See [AUTOTITLE](/pull-requests/how-tos/work-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork).

## Modifying an active pull request locally

{% webui %}

{% data reusables.repositories.sidebar-pr %}
1. In the list of pull requests, click the pull request you want to modify.{% ifversion fpt or ghec %}
1. To choose where you want to open the pull request, select the **{% octicon "code" aria-hidden="true" aria-label="code" %} Code** dropdown and click one of the tabs.

   ![Screenshot of a pull request title. A button with an arrow indicating a dropdown menu, labeled "Code," is outlined in dark orange.](/assets/images/help/pull_requests/open-with-button.png){% else %}

1. In the merge box, click **command line instructions**. Follow the steps to download the proposed pull request.

   ![Screenshot of the merge box in a pull request. The link to access command line pull request instructions is outlined in dark orange.](/assets/images/help/pull_requests/pull-request-show-command-line-merge.png)

1. Optionally, to view proposed changes in {% data variables.product.prodname_desktop %}, next to the **Merge pull request** button, click **open this in {% data variables.product.prodname_desktop %}**.

   ![Screenshot of the "merge messages" section on a pull request page. A link, labeled "Open this in GitHub Desktop", is outlined in orange.](/assets/images/help/desktop/open-pr-in-desktop.png){% endif %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

To check out a pull request locally, use the `gh pr checkout` subcommand. Replace `PULL-REQUEST` with the number, URL, or head branch of the pull request.

```shell
gh pr checkout PULL-REQUEST
```

{% endcli %}

## Modifying an inactive pull request locally

If a pull request’s author is unresponsive to requests or has deleted their fork, the changes proposed in that pull request can still be merged through a new pull request. However, if you want to make changes, you need to take additional steps to update the pull request.

After a pull request is opened, {% data variables.product.github %} stores all of the changes remotely. Commits in a pull request are available in a repository even before the pull request is merged. You can fetch an open pull request and recreate it as your own.

Anyone can work with a previously opened pull request to continue working on it, test it, or open a new pull request with additional changes.

{% data reusables.repositories.sidebar-pr %}
1. In the **Pull Requests** list, click the pull request you want to merge.
1. Find the ID number of the inactive pull request. This is the sequence of digits right after the pull request's title.

   ![Screenshot of the title of a pull request. The pull request's ID number is outlined in dark orange.](/assets/images/help/pull_requests/pull-request-id-number.png)

1. Open your terminal or Git Bash.
1. Fetch the reference to the pull request based on its ID number. This creates a new branch. Use the pull request ID and the name of the local branch you want to create in the command.

   ```shell
   git fetch origin pull/ID/head:BRANCH_NAME
   ```

1. Switch to the new branch that's based on this pull request:

   ```shell
   [main] $ git switch BRANCH_NAME
   > Switched to a new branch 'BRANCH_NAME'
   ```

1. Make any needed changes to this branch. You can run local tests or merge other branches into the branch.
1. When you're ready, push the new branch:

   ```shell
   [pull-inactive-pull-request] $ git push origin BRANCH_NAME
   > Counting objects: 32, done.
   > Delta compression using up to 8 threads.
   > Compressing objects: 100% (26/26), done.
   > Writing objects: 100% (29/29), 74.94 KiB | 0 bytes/s, done.
   > Total 29 (delta 8), reused 0 (delta 0)
   > To https://{% data variables.product.product_url %}/USERNAME/REPOSITORY.git
   >  * [new branch]      BRANCH_NAME -> BRANCH_NAME
   ```

1. Create a new pull request with your new branch.

## Error: Failed to push some refs

The remote `refs/pull/` namespace is _read-only_. If you try to push commits there, you'll see this error:

```shell
! [remote rejected] HEAD -> refs/pull/1/head (deny updating a hidden ref)
error: failed to push some refs to 'git@github.local:USERNAME/REPOSITORY.git'
```

> [!TIP]
> When you remove or rename a remote reference, calls to `git-remote` do not affect your local `refs/pull/origin/` namespace.
