---
title: Repository roles for an organization
intro: 'You can customize access to each repository in your organization by assigning granular roles, giving people access to the features and tasks they need.'
redirect_from:
  - /articles/repository-permission-levels-for-an-organization-early-access-program
  - /articles/repository-permission-levels-for-an-organization
  - /github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization
  - /organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization
  - /organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization
  - /organizations/managing-user-access-to-your-organizations-repositories/repository-roles-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Repository roles
---

## Repository roles for organizations

You can give organization members, outside collaborators, and teams of people different levels of access to repositories owned by an organization by assigning them to roles. Choose the role that best fits each person or team's function in your project without giving people more access to the project than they need.

From least access to most access, the roles for an organization repository are:
* **Read**: Recommended for non-code contributors who want to view or discuss your project
* **Triage**: Recommended for contributors who need to proactively manage issues{% ifversion discussions-moderators-control-who-can-report %}, discussions,{% endif %} and pull requests without write access
* **Write**: Recommended for contributors who actively push to your project
* **Maintain**: Recommended for project managers who need to manage the repository without access to sensitive or destructive actions
* **Admin**: Recommended for people who need full access to the project, including sensitive and destructive actions like managing security or deleting a repository

{% ifversion fpt %}
If your organization uses {% data variables.product.prodname_ghe_cloud %}, you can create custom repository roles. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-custom-repository-roles-for-an-organization)" in the {% data variables.product.prodname_ghe_cloud %} documentation.
{% elsif ghec or ghes %}
You can create custom repository roles. For more information, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-custom-repository-roles-for-an-organization)."
{% endif %}

Organization owners can set base permissions that apply to all members of an organization when accessing any of the organization's repositories. For more information, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/setting-base-permissions-for-an-organization#setting-base-permissions)."

Organization owners can also choose to further limit access to certain settings and actions across the organization. For more information on options for specific settings, see "[AUTOTITLE](/organizations/managing-organization-settings)."

In addition to managing organization-level settings, organization owners have admin access to every repository owned by the organization. For more information, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)."

{% warning %}

**Warning:** When someone adds a deploy key to a repository, any user who has the private key can read from or write to the repository (depending on the key settings), even if they're later removed from the organization.

{% endwarning %}

## Permissions for each role

{% ifversion fpt %}
Some of the features listed below are limited to organizations using {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}
{% endif %}

{% note %}

**Note:** The roles required to use security features are listed in "[Access requirements for security features](#access-requirements-for-security-features)" below.

{% endnote %}

{% rowheaders %}

| Repository action | Read | Triage | Write | Maintain | Admin |
|:---|:---:|:---:|:---:|:---:|:---:|
| Manage [individual](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-an-individuals-access-to-an-organization-repository), [team](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-team-access-to-an-organization-repository), and [outside collaborator](/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/adding-outside-collaborators-to-repositories-in-your-organization) access to the repository | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
| Pull from the person or team's assigned repositories | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| Fork the person or team's assigned repositories | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| Edit and delete their own comments | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| Open issues | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| Close issues they opened themselves | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| Reopen issues they closed themselves | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| Have an issue assigned to them | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| Send pull requests from forks of the team's assigned repositories | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| [Submit reviews on pull requests](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request) | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| [Approve or request changes to a pull request with required reviews](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/approving-a-pull-request-with-required-reviews) | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| [Apply suggested changes](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request) to pull requests | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| View published releases | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| {% ifversion fpt or ghec %} |
| View [GitHub Actions workflow runs](/actions/managing-workflow-runs) | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| {% endif %} |
| Edit wikis in public repositories | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| Edit wikis in private repositories | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| {% ifversion fpt or ghec %} |
| [Report abusive or spammy content](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam) | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| {% endif %} |
| Apply/dismiss labels | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| Create, edit, delete labels | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| Close, reopen, and assign all issues and pull requests | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| [Enable and disable auto-merge on a pull request](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-auto-merge-for-pull-requests-in-your-repository) | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| Create, edit, delete milestones | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| Apply milestones | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| Mark [duplicate issues and pull requests](/issues/tracking-your-work-with-issues/marking-issues-or-pull-requests-as-a-duplicate)| {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| Request [pull request reviews](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review) | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| Merge a [pull request](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges) | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| Push to (write) the person or team's assigned repositories | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| Edit and delete anyone's comments on commits, pull requests, and issues | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| [Hide anyone's comments](/communities/moderating-comments-and-conversations/managing-disruptive-comments) | {% octicon "x" aria-label="No" %} | {% ifversion discussions-moderators-control-who-can-report %}{% octicon "check" aria-label="Yes" %}{% endif %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} || [Lock conversations](/communities/moderating-comments-and-conversations/locking-conversations) | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| Transfer issues (see "[AUTOTITLE](/issues/tracking-your-work-with-issues/transferring-an-issue-to-another-repository)" for details) | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| [Act as a designated code owner for a repository](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners) | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| [Mark a draft pull request as ready for review](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request) | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| [Convert a pull request to a draft](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request) | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| Create [status checks](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks) | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| {% ifversion fpt or ghec %} |
| Create, edit, run, re-run, and cancel [GitHub Actions workflows](/actions) | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| {% endif %} |
| Create, update, and delete [GitHub Actions secrets](/actions/security-guides/using-secrets-in-github-actions) on GitHub.com | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
| Create, update, and delete [GitHub Actions secrets](/rest/actions/secrets) using the REST API | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| Create and edit releases | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| View draft releases | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| Edit a repository's description | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| {% ifversion fpt or ghec %} |
| [View and install packages](/packages/learn-github-packages) | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| [Publish packages](/packages/learn-github-packages/publishing-a-package) | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| [Delete and restore packages](/packages/learn-github-packages/deleting-and-restoring-a-package) | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
| {% endif %} |
| Manage [topics](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics) | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| Enable wikis and restrict wiki editors | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| Enable {% data variables.projects.projects_v1_boards %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| Configure [pull request merges](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges) | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| Configure [a publishing source for {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| {% ifversion copilot %} |
| View [content exclusion settings](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/about-content-exclusions-for-github-copilot) for {% data variables.product.prodname_copilot %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| {% endif %} |
| Manage [branch protection rules](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/managing-a-branch-protection-rule){% ifversion repo-rules %} and [repository rulesets](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets){% endif %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
| {% ifversion repo-rules %} |
| View [rulesets for a repository](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets) | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| {% endif %} |
| [Push to protected branches](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches) | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| Merge pull requests on protected branches, even if there are no approving reviews | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
| {% ifversion ghes < 3.16 %} |
| Create tags that match a [tag protection rule](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/configuring-tag-protection-rules) | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| Delete tags that match a [tag protection rule](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/configuring-tag-protection-rules) | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
| {% endif %} |
| [Create and edit repository social cards](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/customizing-your-repositorys-social-media-preview) | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| {% ifversion fpt or ghec %} |
| Limit [interactions in a repository](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)| {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| {% endif %} |
| Delete an issue (see "[AUTOTITLE](/issues/tracking-your-work-with-issues/deleting-an-issue)") | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
| [Define code owners for a repository](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners) | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| Add a repository to a team (see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository#giving-a-team-access-to-a-repository)" for details) | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
| [Manage outside collaborator access to a repository](/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/adding-outside-collaborators-to-repositories-in-your-organization) | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
| [Change a repository's visibility](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization) | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
| Make a repository a template (see "[AUTOTITLE](/repositories/creating-and-managing-repositories/creating-a-template-repository)") | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
| Change a repository's settings | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
| Manage team and collaborator access to the repository | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
| Edit the repository's default branch | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
| Rename the repository's default branch (see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/renaming-a-branch)") | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
| Rename a branch other than the repository's default branch (see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/renaming-a-branch)") | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| Manage webhooks and deploy keys | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
| [Manage the forking policy for a repository](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository) | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
| [Transfer repositories into the organization](/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization) | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
| [Delete or transfer repositories out of the organization](/organizations/managing-organization-settings/setting-permissions-for-deleting-or-transferring-repositories) | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
| [Archive repositories](/repositories/archiving-a-github-repository/archiving-repositories) | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
| {% ifversion fpt or ghec %} |
| Display a sponsor button (see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/displaying-a-sponsor-button-in-your-repository)") | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
| {% endif %} |
| Create autolink references to external resources, like Jira or Zendesk (see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/configuring-autolinks-to-reference-external-resources)") | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
| [Enable {% data variables.product.prodname_discussions %}](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/enabling-or-disabling-github-discussions-for-a-repository) in a repository | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| [Create and edit categories](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions) for {% data variables.product.prodname_discussions %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| [Move a discussion to a different category](/discussions/managing-discussions-for-your-community/managing-discussions) | {% octicon "x" aria-label="No" %} | {% ifversion discussions-moderators-control-who-can-report %}{% octicon "check" aria-label="Yes" %}{% endif %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} || [Transfer a discussion](/discussions/managing-discussions-for-your-community/managing-discussions) to a new repository| {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| [Manage pinned discussions](/discussions/managing-discussions-for-your-community/managing-discussions) | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| [Convert issues to discussions in bulk](/discussions/managing-discussions-for-your-community/managing-discussions) | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| [Lock and unlock discussions](/discussions/managing-discussions-for-your-community/moderating-discussions) | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| [Individually convert issues to discussions](/discussions/managing-discussions-for-your-community/moderating-discussions) | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| [Create new discussions and comment on existing discussions](/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion) | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| [Delete a discussion](/discussions/managing-discussions-for-your-community/managing-discussions#deleting-a-discussion) | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| {% ifversion fpt or ghec %} |
| [Create codespaces](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository?tool=webui) for private{% ifversion ghec %}/internal{% endif %} repositories | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| [Create codespaces](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository?tool=webui) for private{% ifversion ghec %}/internal{% endif %} repositories with [Codespaces secrets access](/codespaces/managing-codespaces-for-your-organization/managing-development-environment-secrets-for-your-repository-or-organization?tool=webui) | {% octicon "check" aria-label="No" %} | {% octicon "check" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| [Create codespaces](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository?tool=webui) for public repositories<br>(users with read-only access can only create codespaces at their own expense) | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| {% endif %} |

{% endrowheaders %}

### Access requirements for security features

In this section, you can find the access required for security features, such as {% data variables.product.prodname_advanced_security %} features.

{% note %}

**Note:** Repository writers and maintainers can only see secret scanning alert information for their own commits.

{% endnote %}

{% rowheaders %}

| Repository action | Read | Triage | Write | Maintain | Admin |
|:---|:---:|:---:|:---:|:---:|:---:|
| Receive [{% data variables.product.prodname_dependabot_alerts %} for insecure dependencies](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts) in a repository | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| [Dismiss {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts) | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| {% ifversion ghes or ghec %}<!--Not available for FPT-->|
| [Designate additional people or teams to receive security alerts](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts) | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
| {% endif %} |
| {% ifversion fpt or ghec %} |
| Create [security advisories](/code-security/security-advisories/working-with-repository-security-advisories/about-repository-security-advisories) | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |{% endif %}{% ifversion ghes or ghec %} <!--Not available for FPT-->
| Manage access to {% data variables.product.prodname_GH_advanced_security %} features (see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)") | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |{% endif %}{% ifversion fpt or ghec %}<!--Set at site-level for GHES -->
| [Enable the dependency graph](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository) for a private repository | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
| {% endif %} |
| {% ifversion ghes or ghec %} |
| [View dependency reviews](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review) | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| {% endif %} |
| [View {% data variables.product.prodname_code_scanning %} alerts on pull requests](/code-security/code-scanning/managing-code-scanning-alerts/triaging-code-scanning-alerts-in-pull-requests) | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| [List, dismiss, and delete {% data variables.product.prodname_code_scanning %} alerts](/code-security/code-scanning/managing-code-scanning-alerts/resolving-code-scanning-alerts) | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| [View and dismiss {% data variables.secret-scanning.alerts %} in a repository](/code-security/secret-scanning/managing-alerts-from-secret-scanning) | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |{% ifversion ghes or ghec %}<!--Not available for FPT-->
| [Resolve, revoke, or re-open {% data variables.secret-scanning.alerts %}](/code-security/secret-scanning/managing-alerts-from-secret-scanning) | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} | {% octicon "check" aria-label="Yes" %} |
| {% endif %} |
| {% ifversion ghes or ghec %} |
| [Designate additional people or teams to receive {% data variables.secret-scanning.alerts %}](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts) in repositories | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %} |
| {% endif %} |

{% endrowheaders %}

## Further reading

* "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories)"
* "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/adding-outside-collaborators-to-repositories-in-your-organization)"{% ifversion projects-v1 %}
* "[AUTOTITLE](/organizations/managing-access-to-your-organizations-project-boards/project-board-permissions-for-an-organization)"{% endif %}
