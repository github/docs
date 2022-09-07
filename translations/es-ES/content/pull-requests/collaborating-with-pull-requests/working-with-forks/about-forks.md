---
title: About forks
intro: A fork is a copy of a repository that you manage. Forks let you make changes to a project without affecting the original repository. You can fetch updates from or submit changes to the original repository with pull requests.
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
Forking a repository is similar to copying a repository, with two major differences:

* You can use a pull request to suggest changes from your user-owned fork to the original repository in its GitHub instance, also known as the *upstream* repository.
* You can bring changes from the upstream repository to your local fork by synchronizing your fork with the upstream repository.

{% data reusables.repositories.you-can-fork %}

{% ifversion fpt or ghec %}

If you're a member of a {% data variables.product.prodname_emu_enterprise %}, there are further restrictions on the repositories you can fork. {% data reusables.enterprise-accounts.emu-forks %} For more information, see "[About {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}

{% endif %}

{% data reusables.repositories.desktop-fork %}

Deleting a fork will not delete the original upstream repository. You can make any changes you want to your fork—add collaborators, rename files, generate {% data variables.product.prodname_pages %}—with no effect on the original.{% ifversion fpt or ghec %} You cannot restore a deleted forked repository. For more information, see "[Restoring a deleted repository](/articles/restoring-a-deleted-repository)."{% endif %}

In open source projects, forks are often used to iterate on ideas or changes before they are offered back to the upstream repository. When you make changes in your user-owned fork and open a pull request that compares your work to the upstream repository, you can give anyone with push access to the upstream repository permission to push changes to your pull request branch (including deleting the branch). This speeds up collaboration by allowing repository maintainers the ability to make commits or run tests locally to your pull request branch from a user-owned fork before merging. You cannot give push permissions to a fork owned by an organization. 

{% data reusables.repositories.private_forks_inherit_permissions %}

If you want to create a new repository from the contents of an existing repository but don't want to merge your changes to the upstream in the future, you can duplicate the repository or, if the repository is a template, you can use the repository as a template. For more information, see "[Duplicating a repository](/articles/duplicating-a-repository)" and "[Creating a repository from a template](/articles/creating-a-repository-from-a-template)".

## Further reading

- "[About collaborative development models](/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models)"
- "[Creating a pull request from a fork](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)"
- [Open Source Guides](https://opensource.guide/){% ifversion fpt or ghec %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
