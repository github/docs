---
title: Creating a pull request
intro: 'Create a pull request to propose and collaborate on changes to a repository. These changes are proposed in a *branch*, which ensures that the default branch only contains finished and approved work.'
redirect_from:
  - /articles/creating-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Anyone with read permissions to a repository can create a pull request, but you must have write permissions to create a branch. If you want to create a new branch for your pull request and don't have write permissions to the repository, you can fork the repository first. For more information, see "[Creating a pull request from a fork](/articles/creating-a-pull-request-from-a-fork)" and "[About forks](/articles/about-forks)."

You can specify which branch you'd like to merge your changes into when you create your pull request. Pull requests can only be opened between two branches that are different.

{% data reusables.pull_requests.perms-to-open-pull-request %}

{% data reusables.pull_requests.close-issues-using-keywords %}

### Changing the branch range and destination repository

By default, pull requests are based on the parent repository's default branch. For more information, see "[About branches](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)."

If the default parent repository isn't correct, you can change both the parent repository and the branch with the drop-down lists. You can also swap your head and base branches with the drop-down lists to establish diffs between reference points. References here must be branch names in your GitHub repository.

![Pull Request editing branches](/assets/images/help/pull_requests/pull-request-review-edit-branch.png)

When thinking about branches, remember that the *base branch* is **where** changes should be applied, the *head branch* contains **what** you would like to be applied.

When you change the base repository, you also change notifications for the pull request. Everyone that can push to the base repository will receive an email notification and see the new pull request in their dashboard the next time they sign in.

When you change any of the information in the branch range, the Commit and Files changed preview areas will update to show your new range.

{% tip %}

**Tips**:
- Using the compare view, you can set up comparisons across any timeframe. For more information, see "[Comparing commits](/github/committing-changes-to-your-project/comparing-commits)."
- Project maintainers can add a pull request template for a repository. Templates include prompts for information in the body of a pull request. For more information, see "[About issue and pull request templates](/articles/about-issue-and-pull-request-templates)."

{% endtip %}

### Creating the pull request

{% tip %}

**Tip**: You can also use {% data variables.product.prodname_desktop %} to create a pull request. For more information, see “[Creating an issue or pull request](/desktop/contributing-to-projects/creating-an-issue-or-pull-request)" in the {% data variables.product.prodname_desktop %} documentation.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. In the "Branch" menu, choose the branch that contains your commits.
  ![Branch dropdown menu](/assets/images/help/pull_requests/branch-dropdown.png)
{% data reusables.repositories.new-pull-request %}
4. Use the _base_ branch dropdown menu to select the branch you'd like to merge your changes into, then use the _compare_ branch drop-down menu to choose the topic branch you made your changes in.
  ![Drop-down menus for choosing the base and compare branches](/assets/images/help/pull_requests/choose-base-and-compare-branches.png)
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.create-pull-request %}

{% data reusables.repositories.asking-for-review %}

After your pull request has been reviewed, it can be [merged into the repository](/articles/merging-a-pull-request).

### Further reading

- "[Creating a pull request from a fork](/articles/creating-a-pull-request-from-a-fork)"
- "[Changing the base branch of a pull request](/articles/changing-the-base-branch-of-a-pull-request)"
- "[Adding issues and pull requests to a project board from the sidebar](/articles/adding-issues-and-pull-requests-to-a-project-board/#adding-issues-and-pull-requests-to-a-project-board-from-the-sidebar)"
