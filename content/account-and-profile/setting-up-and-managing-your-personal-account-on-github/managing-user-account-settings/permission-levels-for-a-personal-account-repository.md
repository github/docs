---
title: Permission levels for a personal account repository
intro: 'A repository owned by a personal account has two permission levels: the repository owner and collaborators.'
redirect_from:
  - /articles/permission-levels-for-a-user-account-repository
  - /github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-a-user-account-repository
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-a-user-account-repository
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/permission-levels-for-a-personal-account-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Repository permissions
---
## About permissions levels for a personal account repository

Repositories owned by personal accounts have one owner. Ownership permissions can't be shared with another personal account.

You can also {% ifversion fpt or ghec %}invite{% else %}add{% endif %} users on {% data variables.product.product_name %} to your repository as collaborators. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository)."

{% tip %}

**Tip:** If you require more granular access to a repository owned by your personal account, consider transferring the repository to an organization. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/transferring-a-repository#transferring-a-repository-owned-by-your-personal-account)."

{% endtip %}

## Owner access for a repository owned by a personal account

The repository owner has full control of the repository. In addition to the actions that any collaborator can perform, the repository owner can perform the following actions.

| Action | More information |
| :- | :- |
| {% ifversion fpt or ghec %}Invite collaborators{% else %}Add collaborators{% endif %} | "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository)" |
| Change the visibility of the repository | "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility)" |{% ifversion fpt or ghec %}
| Limit interactions with the repository | "[AUTOTITLE](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)" |{% endif %}
| Rename a branch, including the default branch | "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/renaming-a-branch)" |
| Merge a pull request on a protected branch, even if there are no approving reviews | "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)" |
| Delete the repository | "[AUTOTITLE](/repositories/creating-and-managing-repositories/deleting-a-repository)" |
| Manage the repository's topics | "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics)" |{% ifversion fpt or ghec %}
| Manage security and analysis settings for the repository | "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)" |{% endif %}{% ifversion fpt or ghec %}
| Enable the dependency graph for a private repository | "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)" |{% endif %}
| Delete and restore packages | "[AUTOTITLE](/packages/learn-github-packages/deleting-and-restoring-a-package)" |
| Customize the repository's social media preview | "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/customizing-your-repositorys-social-media-preview)" |
| Create a template from the repository | "[AUTOTITLE](/repositories/creating-and-managing-repositories/creating-a-template-repository)" |
| Control access to {% data variables.product.prodname_dependabot_alerts %}| "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)" |{% ifversion fpt or ghec %}
| Dismiss {% data variables.product.prodname_dependabot_alerts %} in the repository | "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)" |
| Manage data use for a private repository | "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#enabling-or-disabling-security-and-analysis-features-for-private-repositories)" |{% endif %}
| Define code owners for the repository | "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)" |
| Archive the repository | "[AUTOTITLE](/repositories/archiving-a-github-repository/archiving-repositories)" |{% ifversion fpt or ghec %}
| Create security advisories | "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/about-repository-security-advisories)" |
| Display a sponsor button | "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/displaying-a-sponsor-button-in-your-repository)" |{% endif %}
| Allow or disallow auto-merge for pull requests | "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-auto-merge-for-pull-requests-in-your-repository)" |
| Manage deploy keys | "[AUTOTITLE](/authentication/connecting-to-github-with-ssh/managing-deploy-keys#deploy-keys)" |
| Manage webhooks | "[AUTOTITLE](/webhooks/about-webhooks)" |

## Collaborator access for a repository owned by a personal account

Collaborators on a personal repository can pull (read) the contents of the repository and push (write) changes to the repository.

{% note %}

**Note:** In a private repository, repository owners can only grant write access to collaborators. Collaborators can't have read-only access to repositories owned by a personal account.

{% endnote %}

Collaborators can also perform the following actions.

| Action | More information |
| :- | :- |
| Fork the repository | "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)" |
| Rename a branch other than the default branch | "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/renaming-a-branch)" |
| Create, edit, and delete comments on commits, pull requests, and issues in the repository | <ul><li>"[AUTOTITLE](/issues/tracking-your-work-with-issues/about-issues)"</li><li>"[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)"</li><li>"[AUTOTITLE](/communities/moderating-comments-and-conversations/managing-disruptive-comments)"</li></ul> |
| Create, assign, close, and re-open issues in the repository | "[AUTOTITLE](/issues)" |
| Manage labels for issues and pull requests in the repository | "[AUTOTITLE](/issues/using-labels-and-milestones-to-track-work/managing-labels)" |
| Manage milestones for issues and pull requests in the repository | "[AUTOTITLE](/issues/using-labels-and-milestones-to-track-work/creating-and-editing-milestones-for-issues-and-pull-requests)" |
| Mark an issue or pull request in the repository as a duplicate | "[AUTOTITLE](/issues/tracking-your-work-with-issues/marking-issues-or-pull-requests-as-a-duplicate)" |
| Create, merge, and close pull requests in the repository | "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests)" |
| Enable and disable auto-merge for a pull request | "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request)"
| Apply suggested changes to pull requests in the repository |"[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request)" |
| Create a pull request from a fork of the repository | "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)" |
| Submit a review on a pull request that affects the mergeability of the pull request | "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)" |
| Create and edit a wiki for the repository | "[AUTOTITLE](/communities/documenting-your-project-with-wikis/about-wikis)" |
| Create and edit releases for the repository | "[AUTOTITLE](/repositories/releasing-projects-on-github/managing-releases-in-a-repository)" |
| Act as a code owner for the repository | "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)" |{% ifversion fpt or ghae or ghec %}
| Publish, view, or install packages | "[AUTOTITLE](/packages/learn-github-packages)" |{% endif %}
| Remove themselves as collaborators on the repository | "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/removing-yourself-from-a-collaborators-repository)" |

## Further reading

- "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)"
