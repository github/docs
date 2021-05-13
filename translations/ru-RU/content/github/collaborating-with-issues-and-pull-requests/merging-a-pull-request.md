---
title: Merging a pull request
intro: Merge a pull request into the upstream branch when work is completed. Anyone with push access to the repository can complete the merge.
redirect_from:
  - /articles/merging-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

### About pull request merges

In a pull request, you propose that changes you've made on a head branch should be merged into a base branch. By default, any pull request can be merged at any time, unless the head branch is in conflict with the base branch. However, there may be restrictions on when you can merge a pull request into a specific branch. For example, you may only be able to merge a pull request into the default branch if required status checks are passing. For more information, see "[About protected branches](/github/administering-a-repository/about-protected-branches)."

{% data reusables.pull_requests.you-can-auto-merge %}

If the pull request has merge conflicts, or if you'd like to test the changes before merging, you can [check out the pull request locally](/articles/checking-out-pull-requests-locally) and merge it using the command line.

You can't merge a draft pull request. For more information about draft pull requests, see "[About pull requests](/articles/about-pull-requests#draft-pull-requests)."

{% data reusables.pull_requests.automatically-delete-branches %}

If you decide you don't want the changes in a topic branch to be merged to the upstream branch, you can [close the pull request](/articles/closing-a-pull-request) without merging.

### Merging a pull request on {% data variables.product.prodname_dotcom %}

{% data reusables.repositories.sidebar-pr %}
2. In the "Pull Requests" list, click the pull request you'd like to merge.
3. Depending on the merge options enabled for your repository, you can:
    - [Merge all of the commits into the base branch](/articles/about-pull-request-merges/) by clicking **Merge pull request**. If the **Merge pull request** option is not shown, then click the merge drop down menu and select **Create a merge commit**. ![merge-pull-request-button](/assets/images/help/pull_requests/pullrequest-mergebutton.png)
    - [Squash the commits into one commit](/articles/about-pull-request-merges/#squash-and-merge-your-pull-request-commits) by clicking the merge drop down menu, selecting **Squash and merge** and then clicking the **Squash and merge** button. ![click-squash-and-merge-button](/assets/images/help/pull_requests/select-squash-and-merge-from-drop-down-menu.png)
    - [Rebase the commits individually onto the base branch](/articles/about-pull-request-merges/#rebase-and-merge-your-pull-request-commits) by clicking the merge drop down menu, selecting **Rebase and merge** and then clicking the **Rebase and merge** button. ![select-rebase-and-merge-from-drop-down-menu](/assets/images/help/pull_requests/select-rebase-and-merge-from-drop-down-menu.png)

    {% note %}

    **Note:** Rebase and merge will always update the committer information and create new commit SHAs. For more information, see "[About pull request merges](/articles/about-pull-request-merges#rebase-and-merge-your-pull-request-commits)."

    {% endnote %}
4. If prompted, type a commit message, or accept the default message.

   {% data reusables.pull_requests.default-commit-message-squash-merge %}
   ![Commit message field](/assets/images/help/pull_requests/merge_box/pullrequest-commitmessage.png)

{% data reusables.files.choose-commit-email %}

   {% note %}

   **Note:** The email selector is not available for rebase merges, which do not create a merge commit, or for squash merges, which credit the user who created the pull request as the author of the squashed commit.

   {% endnote %}

6. Click **Confirm merge**, **Confirm squash and merge**, or **Confirm rebase and merge**.
6. Optionally, [delete the branch](/articles/deleting-unused-branches). This keeps the list of branches in your repository tidy.

The repository may be configured so that the head branch for a pull request is automatically deleted when you merge a pull request. For more information, see "[Managing the automatic deletion of branches](/github/administering-a-repository/managing-the-automatic-deletion-of-branches)."

   {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
   {% note %}

   **Note:** {% data reusables.pull_requests.retargeted-on-branch-deletion %}
   For more information, see "[About branches](/github/collaborating-with-issues-and-pull-requests/about-branches#working-with-branches)."

   {% endnote %}
   {% endif %}

Pull requests are merged using [the `--no-ff` option](https://git-scm.com/docs/git-merge#_fast_forward_merge), except for [pull requests with squashed or rebased commits](/articles/about-pull-request-merges), which are merged using the fast-forward option.

{% data reusables.pull_requests.close-issues-using-keywords %}

### Дополнительная литература

- "[Reverting a pull request](/articles/reverting-a-pull-request)"
- "[Syncing your branch](/desktop/guides/contributing-to-projects/syncing-your-branch/)" using {% data variables.product.prodname_desktop %}
- "[About pull request merges](/articles/about-pull-request-merges)"
- "[Addressing merge conflicts](/articles/addressing-merge-conflicts)"
