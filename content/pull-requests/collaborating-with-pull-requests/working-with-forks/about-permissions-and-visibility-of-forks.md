---
title: About permissions and visibility of forks
shortTitle: Permissions and visibility
intro: 'The permissions and visibility of forks depend on whether the upstream repository is public or private, {% ifversion fpt %}and whether it is owned by an organization{% else %}whether it is owned by an organization, and the policies of your enterprise{% endif %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pull requests
---

## About permissions for creating forks

{% data reusables.repositories.you-can-fork %}

If you fork a private repository that belongs to a personal account, external collaborators also get access to the fork. If you fork a private {% ifversion ghec or ghes %}or internal {% endif %}repository that belongs to an organization, teams within the organization get access to the fork, but external collaborators do not. You can add an external collaborator to the fork, but only if the external collaborator also has access to the upstream repository.

{% ifversion fpt or ghec %}

If you're a member of an {% data variables.enterprise.prodname_emu_enterprise %}, there are further restrictions on the repositories you can fork. {% ifversion ghec %}{% data reusables.enterprise-accounts.emu-forks %}{% endif %} For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}

{% endif %}

Organizations can allow or prevent the forking of any private repositories owned by the organization{% ifversion ghec or ghes %}, and enterprises can enforce policies to specify where members can create forks of private or internal repositories. Policies control the options available to the enterprise's organizations.{% endif %}. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization){% ifversion fpt %}."{% else %}" and "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-forking-private-or-internal-repositories)."{% endif %}

## About visibility of forks

A fork is a new repository that shares code and visibility settings with the upstream repository. All forks of public repositories are public. You cannot change the visibility of a fork.

All repositories belong to a repository network. A repository network contains the upstream repository, the upstream repository's direct forks, and all forks of those forks. All forks in the repository network have the same visibility setting. For more information, see “[AUTOTITLE](/repositories/viewing-activity-and-data-for-your-repository/understanding-connections-between-repositories).”

If you delete a repository or change the repository's visibility settings, you will affect the repository's forks. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility)"

## About permissions of forks

{% data reusables.repositories.private_forks_inherit_permissions %}

Public forks do not inherit the permissions structure of the upstream repository. {% data reusables.repositories.about-giving-access-to-forks %}

{% ifversion push-rulesets %}

### About push rulesets for forked repositories

{% data reusables.repositories.rulesets-push-rules-beta-note %}

{% data reusables.repositories.rulesets-push-rulesets-fork-network-information %}

For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets#push-rulesets)."

{% endif %}

### Important security considerations

If you work with forks, or if you're the owner of a repository or organization that allows forking, it's important to be aware of the following security considerations.

- Forks have their own permissions separate from the upstream repository.
- The owners of a repository that has been forked have read permission to all forks in the repository's fork network.
- Organization owners of a repository that has been forked have admin permission to forks created in personal user namespaces, including the ability to delete the fork and its branches.
- Organization owners of a repository that has been forked have read permission to forks created in organizations, but do not have the ability to delete the fork or its branches.
- Forks created in another organization will not be deleted when individual access is removed from the upstream repository.
- Commits to any repository in a fork network can be accessed from any repository in the same fork network, including the upstream repository.

### About forks within an organization

Forks within the same organization copy the collaborators and team settings of their upstream repositories. If a repository is owned by an organization:
- That organization controls the permissions of its forks.
- Any teams from the upstream permission structure that exist and are visible in the target organization or user namespace will have their permissions copied.
- Admin permissions remain with the upstream owner, except when a user forks into a different organization.
- If that repository is forked to a user namespace, the organization maintains admin permissions and any teams with access maintain access.
