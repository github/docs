---
title: What happens to forks when a repository is deleted or changes visibility?
intro: Deleting your repository or changing its visibility affects that repository's forks.
redirect_from:
  - /articles/changing-the-visibility-of-a-network/
  - /articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - pull requests
---

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}                    

#### Deleting a private repository

When you delete a private repository, all of its private forks are also deleted.

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

#### Deleting a public repository

When you delete a public repository, one of the existing public forks is chosen to be the new parent repository. All other repositories are forked off of this new parent and subsequent pull requests go to this new parent.

{% endif %}

#### Private forks and permissions

{% data reusables.repositories.private_forks_inherit_permissions %}

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

#### Changing a public repository to a private repository

If a public repository is made private, its public forks are split off into a new network. As with deleting a public repository, one of the existing public forks is chosen to be the new parent repository and all other repositories are forked off of this new parent. Subsequent pull requests go to this new parent.

In other words, a public repository's forks will remain public in their own separate repository network even after the parent repository is made private. This allows the fork owners to continue to work and collaborate without interruption. If public forks were not moved into a separate network in this way, the owners of those forks would need to get the appropriate [access permissions](/articles/access-permissions-on-github) to pull changes from and submit pull requests to the (now private) parent repository—even though they didn't need those permissions before.

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
If a public repository has anonymous Git read access enabled and the repository is made private, all of the repository's forks will lose anonymous Git read access and return to the default disabled setting. If a forked repository is made public, repository administrators can re-enable anonymous Git read access. For more information, see "[Enabling anonymous Git read access for a repository](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)."
{% endif %}

##### Deleting the private repository

If a public repository is made private and then deleted, its public forks will continue to exist in a separate network.

#### Changing a private repository to a public repository

If a private repository is made public, each of its private forks is turned into a standalone private repository and becomes the parent of its own new repository network. Private forks are never automatically made public because they could contain sensitive commits that shouldn't be exposed publicly.

##### Deleting the public repository

If a private repository is made public and then deleted, its private forks will continue to exist as standalone private repositories in separate networks.

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}

#### Changing the visibility of an internal repository

{% note %}

**Note:** {% data reusables.gated-features.internal-repos %}

{% endnote %}

If the policy for your enterprise permits forking, any fork of an internal repository will be private. If you change the visibility of an internal repository, any fork owned by an organization or user account will remain private.

##### Deleting the internal repository

If you change the visibility of an internal repository and then delete the repository, the forks will continue to exist in a separate network.

{% endif %}

### Further reading

- "[Setting repository visibility](/articles/setting-repository-visibility)"
- "[About forks](/articles/about-forks)"
- "[Managing the forking policy for your repository](/github/administering-a-repository/managing-the-forking-policy-for-your-repository)"
- "[Managing the forking policy for your organization](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)"
- "{% if currentVersion == "free-pro-team@latest" %}[Enforcing repository management policies in your enterprise account](/github/setting-up-and-managing-your-enterprise/enforcing-repository-management-policies-in-your-enterprise-account#enforcing-a-policy-on-forking-private-or-internal-repositories){% else %}[Enforcing repository management policies in your enterprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-on-forking-private-or-internal-repositories){% endif %}"
