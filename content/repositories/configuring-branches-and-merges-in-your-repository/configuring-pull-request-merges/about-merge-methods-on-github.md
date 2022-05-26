---
title: About merge methods on GitHub
intro: 'You can allow contributors with push access to your repository to merge their pull requests on {% data variables.product.product_location %} with different merge options or enforce a specific merge method for all of your repository''s pull requests.'
redirect_from:
  - /articles/about-merge-methods-on-github
  - /github/administering-a-repository/about-merge-methods-on-github
  - /github/administering-a-repository/configuring-pull-request-merges/about-merge-methods-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: About merge methods
---
{% data reusables.pull_requests.configure_pull_request_merges_intro %} You can enforce one type of merge method, such as commit squashing or rebasing, by only enabling the desired method for your repository.

{% ifversion fpt or ghec %}
{% note %}

**Note:** When using the merge queue, you no longer get to choose the merge method, as this is controlled by the queue. {% data reusables.pull_requests.merge-queue-references %}

{% endnote %}
{% endif %}

{% data reusables.pull_requests.default_merge_option %}

The default merge method creates a merge commit. You can prevent anyone from pushing merge commits to a protected branch by enforcing a linear commit history. For more information, see "[About protected branches](/github/administering-a-repository/about-protected-branches#require-linear-history)."

## Squashing your merge commits

{% data reusables.pull_requests.squash_and_merge_summary %}

Before enabling squashing commits, consider these disadvantages:
- You lose information about when specific changes were originally made and who authored the squashed commits.
- If you continue working on the head branch of a pull request after squashing and merging, and then create a new pull request between the same branches, commits that you previously squashed and merged will be listed in the new pull request. You may also have conflicts that you have to repeatedly resolve in each successive pull request. For more information, see "[About pull request merges](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges#squashing-and-merging-a-long-running-branch)."
- Some Git commands that use the "SHA" or "hash" ID may be harder to use since the SHA ID for the original commits is lost. For example, using [`git rerere`](https://git-scm.com/docs/git-rerere) may not be as effective.

For more information, see "[Configuring commit squashing for pull requests](/articles/configuring-commit-squashing-for-pull-requests)."

## Rebasing and merging your commits

{% data reusables.pull_requests.rebase_and_merge_summary %}

Before enabling commit rebasing, consider these disadvantages:
- Repository contributors may have to rebase on the command line, resolve any conflicts, and force push their changes to the pull request's topic branch (or remote head branch) before they can use the **rebase and merge** option on {% data variables.product.product_location %}. Force pushing must be done carefully so contributors don't overwrite work that others have based their work on. To learn more about when the **Rebase and merge** option is disabled on {% data variables.product.product_location %} and the workflow to re-enable it, see "[About pull request merges](/articles/about-pull-request-merges/#rebase-and-merge-your-pull-request-commits)."
- {% indented_data_reference reusables.pull_requests.rebase_and_merge_verification spaces=3 %}

For more information, see "[Configuring commit rebasing for pull requests](/articles/configuring-commit-rebasing-for-pull-requests)."
