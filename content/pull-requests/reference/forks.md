---
title: Forks
intro: Understand how forks enable independent collaboration by creating separate repositories connected to the original, with distinct settings and permissions.
redirect_from:
  - /pull-requests/concepts/about-forks
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/about-forks
  - /articles/about-forks
  - /github/collaborating-with-issues-and-pull-requests/about-forks
  - /github/collaborating-with-pull-requests/working-with-forks/about-forks
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
  - /articles/changing-the-visibility-of-a-network
  - /articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
  - /github/collaborating-with-issues-and-pull-requests/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
  - /github/collaborating-with-pull-requests/working-with-forks/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
  - /pull-requests/collaborating-with-pull-requests/working-with-forks/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
  - /pull-requests/collaborating-with-pull-requests/working-with-forks/about-permissions-and-visibility-of-forks
  - /pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
category:
  - Work with forks
contentType: reference
---

Forks are repositories that start as copies of another repository, called the upstream repository. A fork has its own settings and permissions but stays connected to the upstream repository.

When you view a forked repository on {% data variables.product.github %}, the upstream repository is indicated below the name of the fork.

## What makes forks distinct from branches

A branch is part of one repository. A fork is a separate repository with its own settings and collaboration space.

Each fork can have its own:

* Branches
* Members and discussions
* Issues and pull requests
* Actions and projects
* Tags, labels, and wikis

## Which repositories can be forked?

{% data reusables.repositories.you-can-fork %}

Repository, organization, and enterprise policies can limit whether repositories can be forked and where forks can be created. For private{% ifversion ghec or ghes %} and internal{% endif %} repositories, access to forks also depends on repository visibility, organization membership, and administrator settings.

{% ifversion fpt or ghec %}

If you're a member of an {% data variables.enterprise.prodname_emu_enterprise %}, additional restrictions apply to the repositories you can fork. {% ifversion ghec %}{% data reusables.enterprise-accounts.emu-forks %}{% endif %} See [AUTOTITLE](/enterprise-cloud@latest/admin/concepts/identity-and-access-management/enterprise-managed-users){% ifversion fpt %} in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}.{% endif %}

{% endif %}

See [AUTOTITLE](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization){% ifversion fpt %}.{% else %} and [AUTOTITLE](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-forking-private-or-internal-repositories).{% endif %}

## Visibility of forks

A fork's visibility is tied to the upstream repository's repository network. Public repository forks are public, and private repository forks are private.{% ifversion ghec or ghes %} Forks of internal repositories are private.{% endif %} You cannot change the visibility of a fork by itself.

All repositories in a repository network share the same visibility setting. A repository network includes the upstream repository, its forks, and forks of those forks. See [AUTOTITLE](/repositories/viewing-activity-and-data-for-your-repository/understanding-connections-between-repositories).

Deleting a repository or changing its visibility can affect the network. If you delete a fork, code contributions from that fork can remain accessible to the repository network.

## What happens to forks when a repository is deleted or changes visibility

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

Visibility changes can separate forks into new repository networks so that existing fork owners can keep working without unexpected loss of access.

| Action | Effect on forks |
| --- | --- |
| A private repository is deleted | Its private forks are also deleted. |
| A public repository is deleted | An active public fork becomes the new upstream repository for the network. |
| A public repository is made private | Its public forks stay public in a separate network. |
| A private repository is made public | Private forks stay private but disconnect into separate private networks. |
| {% ifversion ghec or ghes %} |
| An internal repository changes visibility | Forks owned by organizations or personal accounts remain private. |
| {% endif %} |

Changing a public repository to private can also affect stars, watchers, dependency graph, {% data variables.product.prodname_dependabot_alerts %}, and {% data variables.product.prodname_code_scanning %} availability. Review repository visibility settings carefully before changing them.

{% ifversion ghes %}
If a public repository has anonymous Git read access enabled and the repository is made private, all of the repository's forks lose anonymous Git read access and return to the default disabled setting. If a forked repository is made public, repository administrators can re-enable anonymous Git read access. See [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/enabling-anonymous-git-read-access-for-a-repository).
{% endif %}

## Permissions of forks

{% data reusables.repositories.private_forks_inherit_permissions %}

Public forks do not inherit the permissions structure of the upstream repository. Fork owners control access to their forks, but repository networks still share Git data. Commits pushed to any repository in a network can be accessible from other repositories in that network, including the upstream repository.

When you fork a public repository to your personal account, you can allow maintainers of the upstream repository to push to your pull request branch. This can help maintainers update your branch, run tests, or resolve small issues before merging. You cannot give push permissions to a fork owned by an organization. See [AUTOTITLE](/pull-requests/how-tos/work-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork).

### Push rulesets for forked repositories

{% data reusables.repositories.rulesets-push-rulesets-fork-network-information %}

See [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets#push-rulesets).

### Important security considerations

Forks are powerful collaboration tools, but they can expose code and history in ways that are easy to overlook.

* Forks have their own permissions separate from the upstream repository.
* Owners of an upstream repository can read all forks in the repository network.
* Organization owners may have administrative access to forks created in personal namespaces.
* Removing someone's access to the upstream repository does not always delete forks in other organizations.
* Commits can remain accessible in the repository network even after a fork is deleted.

Before allowing forks for sensitive work, review the permissions and visibility model for your repository or organization.

### Forks within an organization

Forks within the same organization copy collaborator and team settings from the upstream repository. The organization controls permissions for these forks, and existing visible teams may keep access.

### Forks within an enterprise

Internal repositories support a single level of forking. You cannot fork a private fork of an internal repository. This keeps access and management simpler for repositories that are visible across an enterprise.
