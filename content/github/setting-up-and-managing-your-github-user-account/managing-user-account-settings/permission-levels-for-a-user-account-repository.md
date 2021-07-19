---
title: Permission levels for a user account repository
intro: 'A repository owned by a user account has two permission levels: the repository owner and collaborators.'
redirect_from:
  - /articles/permission-levels-for-a-user-account-repository
  - /github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Accounts
shortTitle: Permission user repositories
---
## About permissions levels for a user account repository

Repositories owned by user accounts have one owner. Ownership permissions can't be shared with another user account.

You can also {% ifversion fpt %}invite{% else %}add{% endif %} users on {% data variables.product.product_name %} to your repository as collaborators. For more information, see "[Inviting collaborators to a personal repository](/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository)."

{% tip %}

**Tip:** If you require more granular access to a repository owned by your user account, consider transferring the repository to an organization. For more information, see "[Transferring a repository](/github/administering-a-repository/transferring-a-repository#transferring-a-repository-owned-by-your-user-account)."

{% endtip %}

## Owner access for a repository owned by a user account

The repository owner has full control of the repository. In addition to the actions that any collaborator can perform, the repository owner can perform the following actions.

| Action | More information |
| :- | :- |
| {% ifversion fpt %}Invite collaborators{% else %}Add collaborators{% endif %} | "[Inviting collaborators to a personal repository](/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository)" |
| Change the visibility of the repository | "[Setting repository visibility](/github/administering-a-repository/setting-repository-visibility)" |{% ifversion fpt %}
| Limit interactions with the repository | "[Limiting interactions in your repository](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)" |{% endif %}{% ifversion fpt or ghes > 3.0 %}
| Rename a branch, including the default branch | "[Renaming a branch](/github/administering-a-repository/renaming-a-branch)" |{% endif %}
| Merge a pull request on a protected branch, even if there are no approving reviews | "[About protected branches](/github/administering-a-repository/about-protected-branches)" |
| Delete the repository | "[Deleting a repository](/github/administering-a-repository/deleting-a-repository)" |
| Manage the repository's topics | "[Classifying your repository with topics](/github/administering-a-repository/classifying-your-repository-with-topics)" |{% ifversion fpt %}
| Manage security and analysis settings for the repository | "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)" |{% endif %}{% ifversion fpt %}
| Enable the dependency graph for a private repository | "[Exploring the dependencies of a repository](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)" |{% endif %}{% ifversion fpt or ghes > 3.0 %}
| Delete and restore packages | "[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package)" |{% endif %}{% ifversion ghes = 2.22 or ghes = 3.0 or ghae %}
| Delete packages | "[Deleting packages](/packages/learn-github-packages/deleting-a-package)" |{% endif %}
| Customize the repository's social media preview | "[Customizing your repository's social media preview](/github/administering-a-repository/customizing-your-repositorys-social-media-preview)" |
| Create a template from the repository | "[Creating a template repository](/github/creating-cloning-and-archiving-repositories/creating-a-template-repository)" |{% ifversion fpt or ghes %}
| Receive {% ifversion fpt or ghes > 2.21 %}{% data variables.product.prodname_dependabot_alerts %}{% else %}security alerts{% endif %} for vulnerable dependencies | "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)" |{% endif %}{% ifversion fpt %}
| Dismiss {% data variables.product.prodname_dependabot_alerts %} in the repository | "[Viewing and updating vulnerable dependencies in your repository](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)" |
| Manage data use for a private repository | "[Managing data use settings for your private repository](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)"|{% endif %}
| Define code owners for the repository | "[About code owners](/github/creating-cloning-and-archiving-repositories/about-code-owners)" |
| Archive the repository | "[About archiving repositories](/github/creating-cloning-and-archiving-repositories/about-archiving-repositories)" |{% ifversion fpt %}
| Create security advisories | "[About {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories)" |
| Display a sponsor button | "[Displaying a sponsor button in your repository](/github/administering-a-repository/displaying-a-sponsor-button-in-your-repository)" |{% endif %}{% ifversion fpt or ghae or ghes > 3.0 %}
| Allow or disallow auto-merge for pull requests | "[Managing auto-merge for pull requests in your repository](/github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository)" | {% endif %}

## Collaborator access for a repository owned by a user account

Collaborators on a personal repository can pull (read) the contents of the repository and push (write) changes to the repository.

{% note %}

**Note:** In a private repository, repository owners can only grant write access to collaborators. Collaborators can't have read-only access to repositories owned by a user account.

{% endnote %}

Collaborators can also perform the following actions.

| Action | More information |
| :- | :- |
| Fork the repository | "[About forks](/github/collaborating-with-issues-and-pull-requests/about-forks)" |{% ifversion fpt or ghes > 3.1 %}
| Rename a branch other than the default branch | "[Renaming a branch](/github/administering-a-repository/renaming-a-branch)" |{% endif %}
| Create, edit, and delete comments on commits, pull requests, and issues in the repository | <ul><li>"[About issues](/github/managing-your-work-on-github/about-issues)"</li><li>"[Commenting on a pull request](/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request)"</li><li>"[Managing disruptive comments](/communities/moderating-comments-and-conversations/managing-disruptive-comments)"</li></ul> |
| Create, assign, close, and re-open issues in the repository | "[Managing your work with issues](/github/managing-your-work-on-github/managing-your-work-with-issues)" |
| Manage labels for issues and pull requests in the repository | "[Labeling issues and pull requests](/github/managing-your-work-on-github/labeling-issues-and-pull-requests)" |
| Manage milestones for issues and pull requests in the repository | "[Creating and editing milestones for issues and pull requests](/github/managing-your-work-on-github/creating-and-editing-milestones-for-issues-and-pull-requests)" |
| Mark an issue or pull request in the repository as a duplicate | "[About duplicate issues and pull requests](/github/managing-your-work-on-github/about-duplicate-issues-and-pull-requests)" |
| Create, merge, and close pull requests in the repository | "[Proposing changes to your work with pull requests](/github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests)" |{% ifversion fpt or ghae or ghes > 3.0 %}
| Enable and disable auto-merge for a pull request | "[Automatically merging a pull request](/github/collaborating-with-issues-and-pull-requests/automatically-merging-a-pull-request)"{% endif %}
| Apply suggested changes to pull requests in the repository |"[Incorporating feedback in your pull request](/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request)" |
| Create a pull request from a fork of the repository | "[Creating a pull request from a fork](/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork)" |
| Submit a review on a pull request that affects the mergeability of the pull request | "[Reviewing proposed changes in a pull request](/github/collaborating-with-issues-and-pull-requests/reviewing-proposed-changes-in-a-pull-request)" |
| Create and edit a wiki for the repository | "[About wikis](/communities/documenting-your-project-with-wikis/about-wikis)" |
| Create and edit releases for the repository | "[Managing releases in a repository](/github/administering-a-repository/managing-releases-in-a-repository)" |
| Act as a code owner for the repository | "[About code owners](/articles/about-code-owners)" |{% ifversion fpt or ghae %}
| Publish, view, or install packages | "[Publishing and managing packages](/github/managing-packages-with-github-packages/publishing-and-managing-packages)" |{% endif %}
| Remove themselves as collaborators on the repository | "[Removing yourself from a collaborator's repository](/github/setting-up-and-managing-your-github-user-account/removing-yourself-from-a-collaborators-repository)" |

## Further reading

- "[Repository permission levels for an organization](/articles/repository-permission-levels-for-an-organization)"
