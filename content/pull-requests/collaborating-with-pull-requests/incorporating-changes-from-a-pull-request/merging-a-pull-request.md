---
title: Merging a pull request
intro: Merge a pull request into the upstream branch when work is completed. Anyone with push access to the repository can complete the merge.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request
  - /articles/merging-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/merging-a-pull-request
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pull requests
---
## About pull request merges

In a pull request, you propose that changes you've made on a head branch should be merged into a base branch. By default, any pull request can be merged at any time, unless the head branch is in conflict with the base branch. However, there may be restrictions on when you can merge a pull request into a specific branch. For example, you may only be able to merge a pull request into the default branch if required status checks are passing. Repository administrators can add constraints like this to branches using branch protection rules. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)."

{% ifversion repo-rules %}

{% data reusables.repositories.rulesets-alternative %}

{% endif %}

{% data reusables.pull_requests.you-can-auto-merge %}

If the pull request has merge conflicts, or if you'd like to test the changes before merging, you can [check out the pull request locally](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally) and merge it using the command line.

You can't merge a draft pull request. For more information about draft pull requests, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests#draft-pull-requests)."

The repository may be configured so that the head branch for a pull request is automatically deleted when you merge a pull request. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-the-automatic-deletion-of-branches)."

{% note %}

**Note:** {% data reusables.pull_requests.retargeted-on-branch-deletion %}
For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches#working-with-branches)."

{% endnote %}

Pull requests are merged using [the `--no-ff` option](https://git-scm.com/docs/git-merge#_fast_forward_merge), except for [pull requests with squashed or rebased commits](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges), which are merged using the fast-forward option.

{% data reusables.pull_requests.close-issues-using-keywords %}

If you decide you don't want the changes in a topic branch to be merged to the upstream branch, you can [close the pull request](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request) without merging.

## Merging a pull request

{% webui %}

{% data reusables.repositories.sidebar-pr %}
1. In the "Pull Requests" list, click the pull request you'd like to merge.
1. Scroll down to the bottom of the pull request. Depending on the merge options enabled for your repository, you can:

    * [Merge all of the commits into the base branch](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges) by clicking **Merge pull request**. If the **Merge pull request** option is not shown, click the merge dropdown menu and select **Create a merge commit**.

      ![Screenshot of the merge options for a pull request. The arrow to expand the dropdown is outlined in dark orange.](/assets/images/help/pull_requests/merge-pull-request-options.png)

    * [Squash the commits into one commit](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges#squash-and-merge-your-pull-request-commits) by clicking the merge dropdown menu, selecting **Squash and merge** and then clicking **Squash and merge**.

    * [Rebase the commits individually onto the base branch](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges#rebase-and-merge-your-pull-request-commits) by clicking the merge dropdown menu, selecting **Rebase and merge** and then clicking **Rebase and merge**.

    {% note %}

    **Note:** Rebase and merge will always update the committer information and create new commit SHAs. For more information, see "[About pull request merges](/articles/about-pull-request-merges#rebase-and-merge-your-pull-request-commits)."

    {% endnote %}
1. If prompted, type a commit message, or accept the default message.

   {% data reusables.pull_requests.default-commit-message-squash-merge %}
{% data reusables.files.choose-commit-email %}

   {% note %}

   **Note:** The email selector is not available for rebase merges, which do not create a merge commit{% ifversion squash-merge-email %}. For squash merges, the email selector is only shown if you are the pull request author and you have more than one email address associated with your account.{% else %}, or for squash merges, which credit the user who created the pull request as the author of the squashed commit.{% endif %}

   {% endnote %}
1. Click **Confirm merge**, **Confirm squash and merge**, or **Confirm rebase and merge**.
1. Optionally, [delete the branch](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/deleting-and-restoring-branches-in-a-pull-request). This keeps the list of branches in your repository tidy.

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

To merge a pull request, use the `gh pr merge` subcommand. Replace `pull-request` with the number, URL, or head branch of the pull request.

```shell
gh pr merge PULL-REQUEST
```

Follow the interactive prompts to complete the merge. For more information about the merge methods that you can choose, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)."

Alternatively, you can use flags to skip the interactive prompts. For example, this command will squash the commits into a single commit with the commit message "my squash commit", merge the squashed commit into the base branch, and then delete the local and remote branch.

```shell
gh pr merge 523 --squash --body "my squash commit" --delete-branch
```

{% endcli %}

## Further reading

* "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/reverting-a-pull-request)"
* "[AUTOTITLE](/desktop/keeping-your-local-repository-in-sync-with-github/syncing-your-branch)" using {% data variables.product.prodname_desktop %}
* "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)"
* "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts)"
