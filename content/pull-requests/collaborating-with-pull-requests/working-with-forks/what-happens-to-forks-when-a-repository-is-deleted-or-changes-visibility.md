---
title: What happens to forks when a repository is deleted or changes visibility?
intro: Deleting your repository or changing its visibility affects that repository's forks.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
  - /articles/changing-the-visibility-of-a-network
  - /articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
  - /github/collaborating-with-issues-and-pull-requests/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
  - /github/collaborating-with-pull-requests/working-with-forks/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Deleted or changes visibility
---
{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

## Deleting a private repository

When you delete a private repository, all of its private forks are also deleted.

{% ifversion fpt or ghes or ghec %}

## Deleting a public repository

When you delete a public repository, one of the existing public forks is chosen to be the new upstream repository. All other repositories are forked off of this new upstream and subsequent pull requests go to this new upstream repository.

{% endif %}

## Private forks and permissions

{% data reusables.repositories.private_forks_inherit_permissions %}

{% ifversion fpt or ghes or ghec %}

## Changing a public repository to a private repository

If a public repository is made private, its public forks are split off into a new network. As with deleting a public repository, one of the existing public forks is chosen to be the new upstream repository and all other repositories are forked off of this new upstream. Subsequent pull requests go to this new upstream repository.

In other words, a public repository's forks will remain public in their own separate repository network even after the upstream repository is made private. This allows the fork owners to continue to work and collaborate without interruption. If public forks were not moved into a separate network in this way, the owners of those forks would need to get the appropriate [access permissions](/get-started/learning-about-github/access-permissions-on-github) to pull changes from and submit pull requests to the (now private) upstream repository—even though they didn't need those permissions before.

{% ifversion ghes or ghae %}
If a public repository has anonymous Git read access enabled and the repository is made private, all of the repository's forks will lose anonymous Git read access and return to the default disabled setting. If a forked repository is made public, repository administrators can re-enable anonymous Git read access. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/enabling-anonymous-git-read-access-for-a-repository)."
{% endif %}

### Deleting the private repository

If a public repository is made private and then deleted, its public forks will continue to exist in a separate network.

## Changing a private repository to a public repository

When you change a private repository to public, all the commits in that repository, including any commits made in the repositories it was forked into, will be visible to everyone. However, the private forks will not automatically become public. Instead, each private fork will become a separate private repository and create its own independent network of repositories. Any new changes made to these networks will not be accessible from the original repository.

### Deleting the public repository

If a private repository is made public and then deleted, its private forks will continue to exist as standalone private repositories in separate networks.

{% endif %}

{% ifversion ghes or ghec or ghae %}

## Changing the visibility of an internal repository

If the policy for your enterprise permits forking, any fork of an internal repository will be private. If you change the visibility of an internal repository, any fork owned by an organization or personal account will remain private.

### Deleting the internal repository

If you change the visibility of an internal repository and then delete the repository, the forks will continue to exist in a separate network.

{% endif %}

## Further reading

- "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility)"
- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)"
- "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository)"
- "[AUTOTITLE](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)"
- "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-on-forking-private-or-internal-repositories)"
