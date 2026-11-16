---
title: Managing the automatic deletion of branches
intro: You can have head branches automatically deleted after pull requests are merged in your repository.
redirect_from:
  - /articles/managing-the-automatic-deletion-of-branches
  - /github/administering-a-repository/managing-the-automatic-deletion-of-branches
  - /github/administering-a-repository/configuring-pull-request-merges/managing-the-automatic-deletion-of-branches
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Automatic branch deletion
category:
  - Configure merges and pull requests
---
Anyone with admin permissions to a repository can enable or disable the automatic deletion of branches. Branch protection rules and repository rules can also prevent branches being automatically deleted. For more information, see{% ifversion fpt or ghec %} [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets) and{% endif %} [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches).

For a pull request opened from a fork, {% data variables.product.prodname_dotcom %} uses the **Automatically delete head branches** setting on the head repository (the fork), not the base repository where the pull request is merged. Automatic deletion requires both of the following:

* The setting is enabled on the fork.
* The user merging the pull request has write access to the fork.

If either requirement isn't met, the head branch isn't deleted automatically. A user with write access to the fork can manually delete the branch from the merged pull request. For more information, see [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/deleting-and-restoring-branches-in-a-pull-request).

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. On the "General" settings page, you can find a section called "Pull Requests". Under "Pull Requests", select or deselect **Automatically delete head branches**.

## Further reading

* [AUTOTITLE](/pull-requests/how-tos/merge-and-close-pull-requests/merging-a-pull-request)
* [AUTOTITLE](/pull-requests/how-tos/commit-changes/managing-branches-within-your-repository)
* [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/deleting-and-restoring-branches-in-a-pull-request)
