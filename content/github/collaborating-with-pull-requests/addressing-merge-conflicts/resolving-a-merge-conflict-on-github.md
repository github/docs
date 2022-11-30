---
title: Resolving a merge conflict on GitHub
intro: 'You can resolve simple merge conflicts that involve competing line changes on GitHub, using the conflict editor.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github
  - /articles/resolving-a-merge-conflict-on-github
  - /github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Pull requests
shortTitle: Resolve merge conflicts
---
You can only resolve merge conflicts on {% data variables.product.product_name %} that are caused by competing line changes, such as when people make different changes to the same line of the same file on different branches in your Git repository. For all other types of merge conflicts, you must resolve the conflict locally on the command line. For more information, see "[Resolving a merge conflict using the command line](/articles/resolving-a-merge-conflict-using-the-command-line/)."

{% ifversion ghes or ghae %}
If a site administrator disables the merge conflict editor for pull requests between repositories, you cannot use the conflict editor on {% data variables.product.product_name %} and must resolve merge conflicts on the command line. For example, if the merge conflict editor is disabled, you cannot use it on a pull request between a fork and upstream repository.
{% endif %}

{% warning %}

**Warning:** When you resolve a merge conflict on {% data variables.product.product_name %},  the entire [base branch](/github/getting-started-with-github/github-glossary#base-branch) of your pull request is merged into the [head branch](/github/getting-started-with-github/github-glossary#head-branch). Make sure you really want to commit to this branch. If the head branch is the default branch of your repository, you'll be given the option of creating a new branch to serve as the head branch for your pull request. If the head branch is protected you won't be able to merge your conflict resolution into it, so you'll be prompted to create a new head branch. For more information, see "[About protected branches](/github/administering-a-repository/about-protected-branches)."

{% endwarning %}

{% data reusables.repositories.sidebar-pr %}
1. In the "Pull Requests" list, click the pull request with a merge conflict that you'd like to resolve.
1. Near the bottom of your pull request, click **Resolve conflicts**.
![Resolve merge conflicts button](/assets/images/help/pull_requests/resolve-merge-conflicts-button.png)

 {% tip %}

 **Tip:** If the **Resolve conflicts** button is deactivated, your pull request's merge conflict is too complex to resolve on {% data variables.product.product_name %}{% ifversion ghes or ghae %} or the site administrator has disabled the conflict editor for pull requests between repositories{% endif %}. You must resolve the merge conflict using an alternative Git client, or by using Git on the command line. For more information see "[Resolving a merge conflict using the command line](/articles/resolving-a-merge-conflict-using-the-command-line)."

 {% endtip %}
{% data reusables.pull_requests.decide-how-to-resolve-competing-line-change-merge-conflict %}
 ![View merge conflict example with conflict markers](/assets/images/help/pull_requests/view-merge-conflict-with-markers.png)
1. If you have more than one merge conflict in your file, scroll down to the next set of conflict markers and repeat steps four and five to resolve your merge conflict.
1. Once you've resolved all the conflicts in the file, click **Mark as resolved**.
 ![Click mark as resolved button](/assets/images/help/pull_requests/mark-as-resolved-button.png)
1. If you have more than one file with a conflict, select the next file you want to edit on the left side of the page under "conflicting files" and repeat steps four through seven until you've resolved all of your pull request's merge conflicts.
 ![Select next conflicting file if applicable](/assets/images/help/pull_requests/resolve-merge-conflict-select-conflicting-file.png)
1. Once you've resolved all your merge conflicts, click **Commit merge**. This merges the entire base branch into your head branch.
 ![Resolve merge conflicts button](/assets/images/help/pull_requests/merge-conflict-commit-changes.png)
1. If prompted, review the branch that you are committing to. 

   If the head branch is the default branch of the repository, you can choose either to update this branch with the changes you made to resolve the conflict, or to create a new branch and use this as the head branch of the pull request.
 ![Prompt to review the branch that will be updated](/assets/images/help/pull_requests/conflict-resolution-merge-dialog-box.png)
   
   If you choose to create a new branch, enter a name for the branch.
   
   If the head branch of your pull request is protected you must create a new branch. You won't get the option to update the protected branch.
   
   Click **Create branch and update my pull request** or **I understand, continue updating _BRANCH_**. The button text corresponds to the action you are performing.
1. To merge your pull request, click **Merge pull request**. For more information about other pull request merge options, see "[Merging a pull request](/articles/merging-a-pull-request/)."

## Further reading

- "[About pull request merges](/articles/about-pull-request-merges)"
