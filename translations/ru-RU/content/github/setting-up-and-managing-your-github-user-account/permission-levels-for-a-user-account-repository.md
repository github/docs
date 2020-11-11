---
title: Permission levels for a user account repository
intro: 'A repository owned by a user account has two permission levels: the *repository owner* and *collaborators*.'
redirect_from:
  - /articles/permission-levels-for-a-user-account-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% tip %}

**Tip:** If you require more granular read/write access to a repository owned by your user account, consider transferring the repository to an organization. For more information, see "[Transferring a repository](/articles/transferring-a-repository)."

{% endtip %}

#### Owner access on a repository owned by a user account

The repository owner has full control of the repository. In addition to all the permissions allowed by repository collaborators, the repository owner can:

- {% if currentVersion == "free-pro-team@latest" %}[Invite collaborators](/articles/inviting-collaborators-to-a-personal-repository){% else %}[Add collaborators](/articles/inviting-collaborators-to-a-personal-repository){% endif %}
- Change the visibility of the repository (from [public to private](/articles/making-a-public-repository-private), or from [private to public](/articles/making-a-private-repository-public)){% if currentVersion == "free-pro-team@latest" %}
- [Limit interactions with a repository](/articles/limiting-interactions-with-your-repository){% endif %}
- Merge a pull request on a protected branch, even if there are no approving reviews
- [Delete the repository](/articles/deleting-a-repository)
- [Manage a repository's topics](/articles/classifying-your-repository-with-topics){% if currentVersion == "free-pro-team@latest" %}
- Manage security and analysis settings. For more information, see "[Managing security and analysis settings for your user account](/github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account)."{% endif %}{% if currentVersion == "free-pro-team@latest" %}
- [Enable the dependency graph](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-and-dependents-of-a-repository) for a private repository{% endif %}{% if currentVersion == "free-pro-team@latest" %}
- Delete packages. For more information, see "[Deleting a package](/github/managing-packages-with-github-packages/deleting-a-package)."{% endif %}
- Create and edit repository social cards. For more information, see "[Customizing your repository's social media preview](/articles/customizing-your-repositorys-social-media-preview)."
- Make the repository a template. For more information, see "[Creating a template repository](/articles/creating-a-template-repository)."{% if currentVersion != "github-ae@latest" %}
- Receive [{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}security alerts{% endif %} for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies) in a repository.{% endif %}{% if currentVersion == "free-pro-team@latest" %}
- Dismiss {% data variables.product.prodname_dependabot_alerts %} in your repository. For more information, see "[Viewing and updating vulnerable dependencies in your repository](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)."
- [Manage data usage for your private repository](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository){% endif %}
- [Define code owners for the repository](/articles/about-code-owners)
- [Archive repositories](/articles/about-archiving-repositories){% if currentVersion == "free-pro-team@latest" %}
- Create security advisories. For more information, see "[About {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories)."
- Display a sponsor button. For more information, see "[Displaying a sponsor button in your repository](/articles/displaying-a-sponsor-button-in-your-repository)."{% endif %}

There is only **one owner** of a repository owned by a user account; this permission cannot be shared with another user account. To transfer ownership of a repository to another user, see "[How to transfer a repository](/articles/how-to-transfer-a-repository)."

#### Collaborator access on a repository owned by a user account

{% note %}

**Note:** In a private repository, repository owners can only grant write access to collaborators. Collaborators can't have read-only access to repositories owned by a user account.

{% endnote %}

Collaborators on a personal repository can:

- Push to (write), pull from (read), and fork (copy) the repository
- Create, apply, and delete labels and milestones
- Open, close, re-open, and assign issues
- Edit and delete comments on commits, pull requests, and issues
- Mark an issue or pull request as a duplicate. For more information, see "[About duplicate issues and pull requests](/articles/about-duplicate-issues-and-pull-requests)."
- Open, merge and close pull requests
- Apply suggested changes to pull requests. For more information, see "[Incorporating feedback in your pull request](/articles/incorporating-feedback-in-your-pull-request)."
- Send pull requests from forks of the repository{% if currentVersion == "free-pro-team@latest" %}
- Publish, view, and install packages. For more information, see "[Publishing and managing packages](/github/managing-packages-with-github-packages/publishing-and-managing-packages)."{% endif %}
- Create and edit Wikis
- Create and edit releases. For more information, see "[Managing releases in a repository](/github/administering-a-repository/managing-releases-in-a-repository).
- Remove themselves as collaborators on the repository
- Submit a review on a pull request that will affect its mergeability
- Act as a designated code owner for the repository. For more information, see "[About code owners](/articles/about-code-owners)."
- Lock a conversation. For more information, see "[Locking conversations](/articles/locking-conversations)."{% if currentVersion == "free-pro-team@latest" %}
- Report abusive content to {% data variables.contact.contact_support %}. For more information, see "[Reporting abuse or spam](/articles/reporting-abuse-or-spam)."{% endif %}
- Transfer an issue to a different repository. For more information, see "[Transferring an issue to another repository](/articles/transferring-an-issue-to-another-repository)."

### Дополнительная литература

- "[Inviting collaborators to a personal repository](/articles/inviting-collaborators-to-a-personal-repository)"
- "[Repository permission levels for an organization](/articles/repository-permission-levels-for-an-organization)"
