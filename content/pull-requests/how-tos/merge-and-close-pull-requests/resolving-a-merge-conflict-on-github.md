---
title: Resolving a merge conflict on GitHub
intro: Resolve simple merge conflicts directly on {% data variables.product.github %} using the conflict editor or handle complex cases via the command line.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github
  - /articles/resolving-a-merge-conflict-on-github
  - /github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-on-github
  - /github/resolving-a-merge-conflict-on-github
  - /github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github
  - /pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Resolve merge conflicts
category:
  - Merge and close pull requests
contentType: how-tos
---
You can resolve simple competing line change conflicts on {% data variables.product.github %}. For other conflicts, use the command line. See [AUTOTITLE](/pull-requests/how-tos/merge-and-close-pull-requests/resolving-a-merge-conflict-using-the-command-line).

{% ifversion fpt or ghec %}
If {% data variables.copilot.copilot_cloud_agent %} is enabled for the repository, you can click **Fix with {% data variables.product.prodname_copilot_short %}** in the merge box to have {% data variables.product.prodname_copilot_short %} resolve conflicts automatically. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/use-cloud-agent-on-github#resolving-merge-conflicts).
{% endif %}

{% ifversion ghes %}
If a site administrator disables the merge conflict editor for pull requests between repositories, resolve merge conflicts on the command line.
{% endif %}

> [!WARNING]
> Resolving conflicts on {% data variables.product.github %} merges the entire [base branch](/get-started/learning-about-github/github-glossary#base-branch) into the [head branch](/get-started/learning-about-github/github-glossary#head-branch). If the head branch is the default or protected branch, you may be prompted to create a new head branch. See [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches).

{% data reusables.repositories.sidebar-pr %}
1. In the "Pull Requests" list, click the pull request with a merge conflict that you want to resolve.
1. Near the bottom of your pull request, click **Resolve conflicts**.

   ![Screenshot of a warning that a pull request has a merge conflict. The "Resolve merge conflicts" button is outlined in dark orange.](/assets/images/help/pull_requests/resolve-merge-conflicts-button.png)

   > [!NOTE]
   > If **Resolve conflicts** is deactivated, resolve the conflict using another Git client or the command line. See [AUTOTITLE](/pull-requests/how-tos/merge-and-close-pull-requests/resolving-a-merge-conflict-using-the-command-line).

{% data reusables.pull_requests.decide-how-to-resolve-competing-line-change-merge-conflict %}
1. If your file has more than one merge conflict, scroll down to the next set of conflict markers and repeat steps four and five to resolve the conflict.
1. After you've resolved all the conflicts in the file, click **Mark as resolved**.

   ![Screenshot of the editor to resolve a merge conflict in a pull request. The "Mark as resolved" button is outlined in dark orange.](/assets/images/help/pull_requests/mark-as-resolved-button.png)

1. If more than one file has a conflict, select the next file you want to edit on the left side of the page under "conflicting files" and repeat steps four through seven until you've resolved all merge conflicts in your pull request.
1. After you've resolved all your merge conflicts, click **Commit merge**. This merges the entire base branch into your head branch.

   ![Screenshot of the editor to resolve a merge conflict in a pull request. The "Commit merge" button is outlined in dark orange.](/assets/images/help/pull_requests/merge-conflict-commit-changes.png)

1. If prompted, review the branch that you are committing to. You can update the head branch or, if available, create a new branch for the pull request. If the head branch is protected, you must create a new branch.

   Click **Create branch and update my pull request** or **I understand, continue updating BRANCH**.
1. To merge your pull request, click **Merge pull request**. See [AUTOTITLE](/pull-requests/how-tos/merge-and-close-pull-requests/merging-a-pull-request).

## Further reading

* [AUTOTITLE](/pull-requests/reference/pull-request-merges)
