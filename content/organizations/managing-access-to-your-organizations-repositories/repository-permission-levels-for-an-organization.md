---
title: Repository permission levels for an organization
intro: 'You can customize access to each repository in your organization with granular permission levels, giving people access to the features and tasks they need.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /articles/repository-permission-levels-for-an-organization-early-access-program/
  - /articles/repository-permission-levels-for-an-organization
  - /github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Organizations
  - Teams
shortTitle: Repository permissions
---

People with admin permissions can manage individual and team access to an organization-owned repository.

## Permission levels for repositories owned by an organization

You can give organization members, outside collaborators, and teams of people different levels of access to repositories owned by an organization. Each permission level progressively increases access to a repository's content and settings. Choose the level that best fits each person or team's role in your project without giving people more access to the project than they need.

From least access to most access, the permission levels for an organization repository are:
- **Read**: Recommended for non-code contributors who want to view or discuss your project
- **Triage**: Recommended for contributors who need to proactively manage issues and pull requests without write access
- **Write**: Recommended for contributors who actively push to your project
- **Maintain**: Recommended for project managers who need to manage the repository without access to sensitive or destructive actions
- **Admin**: Recommended for people who need full access to the project, including sensitive and destructive actions like managing security or deleting a repository

{% endwarning %}

## Repository access for each permission level
{% ifversion fpt or ghes > 2.21 %}
{% note %}



| Repository action | Read | Triage | Write | Maintain | Admin |
|:---|:---:|:---:|:---:|:---:|:---:|
| Pull from the person or team's assigned repositories | **X** | **X** | **X** | **X** | **X** |
| Fork the person or team's assigned repositories | **X** | **X** | **X** | **X** | **X** |
| Edit and delete their own comments | **X** | **X** | **X** | **X** | **X** |
| Open issues | **X** | **X** | **X** | **X** | **X** |
| Close issues they opened themselves | **X** | **X** | **X** | **X** | **X** |
| Reopen issues they closed themselves | **X** | **X** | **X** | **X** | **X** |
| Have an issue assigned to them | **X** | **X** | **X** | **X** | **X** |
| Send pull requests from forks of the team's assigned repositories | **X** | **X** | **X** | **X** | **X** |
| Submit reviews on pull requests | **X** | **X** | **X** | **X** | **X** |
| View published releases | **X** | **X** | **X** | **X** | **X** |{% ifversion fpt %}
| View [GitHub Actions workflow runs](/actions/automating-your-workflow-with-github-actions/managing-a-workflow-run) | **X** | **X** | **X** | **X** | **X** |{% endif %}
| Edit wikis | **X** | **X** | **X** | **X** | **X** |{% ifversion fpt %}
| [Report abusive or spammy content](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam) | **X** | **X** | **X** | **X** | **X** |{% endif %}
| Apply/dismiss labels | | **X** | **X** | **X** | **X** |
| Create, edit, delete labels | | | **X** | **X** | **X** |
| Close, reopen, and assign all issues and pull requests | | **X** | **X** | **X** | **X** |{% ifversion fpt or ghae or ghes > 3.0 %}
| [Enable and disable auto-merge on a pull request](/github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository) | | | **X** | **X** | **X** |{% endif %}
| Apply milestones |  | **X** | **X** | **X** | **X** |
| Mark [duplicate issues and pull requests](/articles/about-duplicate-issues-and-pull-requests)| | **X** | **X** | **X** | **X** |
| Request [pull request reviews](/articles/requesting-a-pull-request-review) | | **X** | **X** | **X** | **X** |
| Push to (write) the person or team's assigned repositories | | | **X** | **X** | **X** |
| Edit and delete anyone's comments on commits, pull requests, and issues | | | **X** | **X** | **X** |
| [Hide anyone's comments](/communities/moderating-comments-and-conversations/managing-disruptive-comments) | | | **X** | **X** | **X** |
| [Lock conversations](/communities/moderating-comments-and-conversations/locking-conversations) | | | **X** | **X** | **X** |
| Transfer issues (see "[Transferring an issue to another repository](/articles/transferring-an-issue-to-another-repository)" for details) |  | | **X** | **X** | **X** |
| [Act as a designated code owner for a repository](/articles/about-code-owners) | | | **X** | **X** | **X** |
| [Mark a draft pull request as ready for review](/articles/changing-the-stage-of-a-pull-request) | | | **X** | **X** | **X** |
| [Convert a pull request to a draft](/articles/changing-the-stage-of-a-pull-request) | | | **X** | **X** | **X** |
| Submit reviews that affect a pull request's mergeability | | | **X** | **X** | **X** |
| [Apply suggested changes](/articles/incorporating-feedback-in-your-pull-request) to pull requests | | | **X** | **X** | **X** |
| Create [status checks](/articles/about-status-checks) | | | **X** | **X** | **X** |{% ifversion fpt %}
| Create, edit, run, re-run, and cancel [GitHub Actions workflows](/actions/automating-your-workflow-with-github-actions/) | | | **X** | **X** | **X** |{% endif %}
| Create and edit releases | | | **X** | **X** | **X** |
| View draft releases | | | **X** | **X** | **X** |
| Edit a repository's description | | | | **X** | **X** |{% ifversion fpt or ghae %}
| [View and install packages](/packages/publishing-and-managing-packages) | **X** | **X** | **X** | **X** | **X** |
| [Publish packages](/packages/publishing-and-managing-packages/publishing-a-package) | | | **X** | **X** | **X** |
| {% ifversion fpt or ghes > 3.0 %}[Delete and restore packages](/packages/learn-github-packages/deleting-and-restoring-a-package){% elsif ghes < 3.1 or ghae %}[Delete packages](/packages/learn-github-packages/deleting-a-package){% endif %} | | |  |  | **X** | {% endif %}
| Manage [topics](/articles/classifying-your-repository-with-topics) | | | | **X** | **X** |
| Enable wikis and restrict wiki editors | | | | **X** | **X** |
| Enable project boards | | | | **X** | **X** |
| Configure [pull request merges](/articles/configuring-pull-request-merges) | | | | **X** | **X** |
| Configure [a publishing source for {% data variables.product.prodname_pages %}](/articles/configuring-a-publishing-source-for-github-pages) | | | | **X** | **X** |
| [Push to protected branches](/articles/about-protected-branches) | | | | **X** | **X** |
| [Create and edit repository social cards](/articles/customizing-your-repositorys-social-media-preview) | | | | **X** | **X** |{% ifversion fpt %}
| Limit [interactions in a repository](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)| | | | **X** | **X** |{% endif %}
| Delete an issue (see "[Deleting an issue](/articles/deleting-an-issue)") | | | | | **X** |
| Merge pull requests on protected branches, even if there are no approving reviews | | | | | **X** |
| [Define code owners for a repository](/articles/about-code-owners) | | | | | **X** |
| Add a repository to a team (see "[Managing team access to an organization repository](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository#giving-a-team-access-to-a-repository)" for details) | | | | | **X** |
| [Manage outside collaborator access to a repository](/articles/adding-outside-collaborators-to-repositories-in-your-organization) | | | | | **X** |
| [Change a repository's visibility](/articles/restricting-repository-visibility-changes-in-your-organization) | | | | | **X** |
| Make a repository a template (see "[Creating a template repository](/articles/creating-a-template-repository)") | | | | | **X** |
| Change a repository's settings | | | | | **X** |
| Manage team and collaborator access to the repository | | | | | **X** |
| Edit the repository's default branch | | | | | **X** |{% ifversion fpt or ghes > 3.0 %}
| Rename the repository's default branch (see "[Renaming a branch](/github/administering-a-repository/renaming-a-branch)") | | | | | **X** |
| Rename a branch other than the repository's default branch (see "[Renaming a branch](/github/administering-a-repository/renaming-a-branch)") | | | **X** | **X** | **X** |{% endif %}
| Manage webhooks and deploy keys | | | | | **X** |{% ifversion fpt %}
| [Manage data use settings for your private repository](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository) | | | | | **X** |{% endif %}
| [Manage the forking policy for a repository](/github/administering-a-repository/managing-the-forking-policy-for-your-repository) | | | | | **X** |
| [Transfer repositories into the organization](/articles/restricting-repository-creation-in-your-organization) | | | | | **X** |
| [Delete or transfer repositories out of the organization](/articles/setting-permissions-for-deleting-or-transferring-repositories) | | | | | **X** |
| [Archive repositories](/articles/about-archiving-repositories) | | | | | **X** |{% ifversion fpt %}
| Display a sponsor button (see "[Displaying a sponsor button in your repository](/articles/displaying-a-sponsor-button-in-your-repository)") | | | | | **X** |{% endif %}
| Create autolink references to external resources, like JIRA or Zendesk (see "[Configuring autolinks to reference external resources](/articles/configuring-autolinks-to-reference-external-resources)") | | | | | **X** |{% ifversion fpt %}
| [Enable {% data variables.product.prodname_discussions %}](/github/administering-a-repository/enabling-or-disabling-github-discussions-for-a-repository) in a repository | | | | **X** | **X** |
| [Create and edit categories](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions-in-your-repository) for {% data variables.product.prodname_discussions %} | | | | **X** | **X** |
| [Move a discussion to a different category](/discussions/managing-discussions-for-your-community/managing-discussions-in-your-repository) | | | **X** | **X** | **X** |
| [Transfer a discussion](/discussions/managing-discussions-for-your-community/managing-discussions-in-your-repository) to a new repository| | | **X** | **X** | **X** |
| [Manage pinned discussions](/discussions/managing-discussions-for-your-community/managing-discussions-in-your-repository) | | | **X** | **X** | **X** |
| [Convert issues to discussions in bulk](/discussions/managing-discussions-for-your-community/managing-discussions-in-your-repository) | | | **X** | **X** | **X** |
| [Lock and unlock discussions](/discussions/managing-discussions-for-your-community/moderating-discussions) | | **X** | **X** | **X** | **X** |
| [Individually convert issues to discussions](/discussions/managing-discussions-for-your-community/moderating-discussions) | | **X** | **X** | **X** | **X** |
| [Create new discussions and comment on existing discussions](/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion) | **X** | **X** | **X** | **X** | **X** |
| [Delete a discussion](/discussions/managing-discussions-for-your-community/managing-discussions-in-your-repository#deleting-a-discussion) | | | | **X** | **X** |{% endif %}{% ifversion fpt %}
| Create [codespaces](/codespaces/about-codespaces) | | | **X** | **X** | **X** |{100% endif 100%}
