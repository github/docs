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
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
---
## About pull request merges

In a pull request, you propose that changes you've made on a head branch should be merged into a base branch. By default, any pull request can be merged at any time, unless the head branch is in conflict with the base branch. However, there may be restrictions on when you can merge a pull request into a specific branch. For example, you may only be able to merge a pull request into the default branch if required status checks are passing. For more information, see "[About protected branches](/github/administering-a-repository/about-protected-branches)."

{% data reusables.pull_requests.you-can-auto-merge %}

If the pull request has merge conflicts, or if you'd like to test the changes before merging, you can [check out the pull request locally](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally) and merge it using the command line.

You can't merge a draft pull request. For more information about draft pull requests, see "[About pull requests](/articles/about-pull-requests#draft-pull-requests)."

The repository may be configured so that the head branch for a pull request is automatically deleted when you merge a pull request. For more information, see "[Managing the automatic deletion of branches](/github/administering-a-repository/managing-the-automatic-deletion-of-branches)."

{% note %}

**Note:** {% data reusables.pull_requests.retargeted-on-branch-deletion %}
For more information, see "[About branches](/github/collaborating-with-issues-and-pull-requests/about-branches#working-with-branches)."

{% endnote %}

Pull requests are merged using [the `--no-ff` option](https://git-scm.com/docs/git-merge#_fast_forward_merge), except for [pull requests with squashed or rebased commits](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges), which are merged using the fast-forward option.

{% data reusables.pull_requests.close-issues-using-keywords %}

If you decide you don't want the changes in a topic branch to be merged to the upstream branch, you can [close the pull request](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request) without merging.

## Merging a pull request

{% webui %}

{% data reusables.repositories.sidebar-pr %}
2. In the "Pull Requests" list, click the pull request you'd like to merge.
3. Depending on the merge options enabled for your repository, you can:
    - [Merge all of the commits into the base branch](/articles/about-pull-request-merges/) by clicking **Merge pull request**. If the **Merge pull request** option is not shown, then click the merge drop down menu and select **Create a merge commit**.
    ![merge-pull-request-button](/assets/images/help/pull_requests/pullrequest-mergebutton.png)
    - [Squash the commits into one commit](/articles/about-pull-request-merges/#squash-and-merge-your-pull-request-commits) by clicking the merge drop down menu, selecting **Squash and merge** and then clicking the **Squash and merge** button.
    ![click-squash-and-merge-button](/assets/images/help/pull_requests/select-squash-and-merge-from-drop-down-menu.png)
    - [Rebase the commits individually onto the base branch](/articles/about-pull-request-merges/#rebase-and-merge-your-pull-request-commits) by clicking the merge drop down menu, selecting **Rebase and merge** and then clicking the **Rebase and merge** button.
    ![select-rebase-and-merge-from-drop-down-menu](/assets/images/help/pull_requests/select-rebase-and-merge-from-drop-down-menu.png)

    {% note %}

    **Note:** Rebase and merge will always update the committer information and create new commit SHAs. For more information, see "[About pull request merges](/articles/about-pull-request-merges#rebase-and-merge-your-pull-request-commits)."

    {% endnote %}
4. If prompted, type a commit message, or accept the default message.

   {% data reusables.pull_requests.default-commit-message-squash-merge %}
   ![Commit message field](/assets/images/help/pull_requests/merge_box/pullrequest-commitmessage.png)

{% data reusables.files.choose-commit-email %}

   {% note %}

   **Note:** The email selector is not available for rebase merges, which do not create a merge commit{% ifversion squash-merge-email %}. For squash merges, the email selector is only shown if you are the pull request author and you have more than one email address associated with your account.{% else %}, or for squash merges, which credit the user who created the pull request as the author of the squashed commit.{% endif %}

   {% endnote %}

6. Click **Confirm merge**, **Confirm squash and merge**, or **Confirm rebase and merge**.
6. Optionally, [delete the branch](/articles/deleting-unused-branches). This keeps the list of branches in your repository tidy.

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

To merge a pull request, use the `gh pr merge` subcommand. Replace `pull-request` with the number, URL, or head branch of the pull request.

```shell
gh pr merge PULL-REQUEST
```

Follow the interactive prompts to complete the merge. For more information about the merge methods that you can choose, see "[About pull request merges](/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)."

Alternatively, you can use flags to skip the interactive prompts. For example, this command will squash the commits into a single commit with the commit message "my squash commit", merge the squashed commit into the base branch, and then delete the local and remote branch.

```shell
gh pr merge 523 --squash --body "my squash commit" --delete-branch
```

{% endcli %}

## Further reading

- "[Reverting a pull request](/articles/reverting-a-pull-request)"
- "[Syncing your branch](/desktop/guides/contributing-to-projects/syncing-your-branch/)" using {% data variables.product.prodname_desktop %}
- "[About pull request merges](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)"
- "[Addressing merge conflicts](/github/collaborating-with-pull-requests/addressing-merge-conflicts)"
