---
title: About forks
intro: A fork is a new repository that shares code and visibility settings with the original “upstream” repository.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/about-forks
  - /articles/about-forks
  - /github/collaborating-with-issues-and-pull-requests/about-forks
  - /github/collaborating-with-pull-requests/working-with-forks/about-forks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
---

## About forks

{% data reusables.repositories.about-forks %} A fork can be owned by either a personal account or an organization.

When you view a forked repository on {% data variables.product.product_name %}, the upstream repository is indicated below the name of the fork.

![Screenshot of a repository's page on GitHub. Below the name of the repository, "mona/docs", the text "forked from github/docs" is outlined in orange.](/assets/images/help/pull_requests/fork-path.png)

In open source projects, forks are often used to iterate on ideas or changes before incorporating the changes into the upstream repository. {% data reusables.repositories.about-giving-access-to-forks %}

Deleting a fork will not delete the original upstream repository. You can make any changes you want to your fork, and there will be no effect on the upstream. For example, you can add collaborators, rename files, or generate {% data variables.product.prodname_pages %} on the fork without affecting the upstream. {% ifversion fpt or ghec %} After a fork is deleted, you cannot restore the fork. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/restoring-a-deleted-repository)."{% endif %} If you delete a private repository, all forks of the repository are deleted.

{% data reusables.repositories.forks-page %}

## About creating forks

{% data reusables.repositories.you-can-fork %}

For instructions for forking a repository, see "[AUTOTITLE](/get-started/quickstart/fork-a-repo#forking-a-repository)." For more information about when you can create forks, and the permission and visibility settings of forks, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-permissions-and-visibility-of-forks)."

{% tip %}

**Tip:** {% data reusables.repositories.desktop-fork %}

{% endtip %}

## Forking a repository versus duplicating a repository

If you want to create a new repository from the contents of an existing repository but don't want to merge your changes to the upstream in the future, you can duplicate the repository or, if the repository is a template, you can use the repository as a template. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/duplicating-a-repository)" and "[AUTOTITLE](/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)".

Forking a repository is similar to duplicating a repository, with the following differences.

- You can use a pull request to suggest changes from your fork to the upstream repository.
- You can bring changes from the upstream repository to your fork by synchronizing your fork with the upstream repository.
- Forks have their own members, branches, tags, labels, policies, issues, pull requests, discussions, actions, projects, and wikis.
- Forks inherit the restrictions of their upstream repositories. For example, branch protection rules cannot be passed down if the upstream repository belongs to an organization on a {% data variables.product.prodname_free_team %} plan.

## Further reading

- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models)"
- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)"
- [Open Source Guides](https://opensource.guide/){% ifversion fpt or ghec %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
