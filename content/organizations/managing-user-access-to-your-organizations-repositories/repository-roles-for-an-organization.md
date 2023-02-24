---
title: Repository roles for an organization
intro: 'You can customize access to each repository in your organization by assigning granular roles, giving people access to the features and tasks they need.'
redirect_from:
  - /articles/repository-permission-levels-for-an-organization-early-access-program
  - /articles/repository-permission-levels-for-an-organization
  - /github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization
  - /organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization
  - /organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Repository roles
---

## Repository roles for organizations

You can give organization members, outside collaborators, and teams of people different levels of access to repositories owned by an organization by assigning them to roles. Choose the role that best fits each person or team's function in your project without giving people more access to the project than they need.

From least access to most access, the roles for an organization repository are:
- **Read**: Recommended for non-code contributors who want to view or discuss your project
- **Triage**: Recommended for contributors who need to proactively manage issues and pull requests without write access
- **Write**: Recommended for contributors who actively push to your project
- **Maintain**: Recommended for project managers who need to manage the repository without access to sensitive or destructive actions
- **Admin**: Recommended for people who need full access to the project, including sensitive and destructive actions like managing security or deleting a repository

{% ifversion fpt %}
If your organization uses {% data variables.product.prodname_ghe_cloud %}, you can create custom repository roles. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)" in the {% data variables.product.prodname_ghe_cloud %} documentation.
{% elsif ghec or ghes > 3.4 or ghae > 3.4 %}
You can create custom repository roles. For more information, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)."
{% endif %}

Organization owners can set base permissions that apply to all members of an organization when accessing any of the organization's repositories. For more information, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/setting-base-permissions-for-an-organization#setting-base-permissions)."

Organization owners can also choose to further limit access to certain settings and actions across the organization. For more information on options for specific settings, see "[AUTOTITLE](/organizations/managing-organization-settings)."

In addition to managing organization-level settings, organization owners have admin access to every repository owned by the organization. For more information, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)."

{% warning %}

**Warning:** When someone adds a deploy key to a repository, any user who has the private key can read from or write to the repository (depending on the key settings), even if they're later removed from the organization.

{% endwarning %}

## Permissions for each role

{% ifversion fpt %}
Some of the features listed below are limited to organizations using {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}
{% endif %}

{% ifversion fpt or ghes or ghec %}
{% note %}

**Note:** The roles required to use security features are listed in "[Access requirements for security features](#access-requirements-for-security-features)" below.

{% endnote %}
{% endif %}

| Repository action | Read | Triage | Write | Maintain | Admin |
|:---|:---:|:---:|:---:|:---:|:---:|
| Manage [individual](/organizations/managing-user-access-to-your-organizations-repositories/managing-an-individuals-access-to-an-organization-repository), [team](/organizations/managing-user-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository), and [outside collaborator](/organizations/managing-user-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization) access to the repository | | | | | **✔️** |
| Pull from the person or team's assigned repositories | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Fork the person or team's assigned repositories | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Edit and delete their own comments | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Open issues | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Close issues they opened themselves | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Reopen issues they closed themselves | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Have an issue assigned to them | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Send pull requests from forks of the team's assigned repositories | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| [Submit reviews on pull requests](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| [Approve or request changes to a pull request with required reviews](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/approving-a-pull-request-with-required-reviews) | | | **✔️** | **✔️** | **✔️** |
| [Apply suggested changes](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request) to pull requests | | | **✔️** | **✔️** | **✔️** |
| View published releases | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |{% ifversion fpt or ghec %}
| View [GitHub Actions workflow runs](/actions/managing-workflow-runs) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |{% endif %}
| Edit wikis in public repositories | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Edit wikis in private repositories | | | **✔️** | **✔️** | **✔️** |{% ifversion fpt or ghec %}
| [Report abusive or spammy content](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |{% endif %}
| Apply/dismiss labels | | **✔️** | **✔️** | **✔️** | **✔️** |
| Create, edit, delete labels | | | **✔️** | **✔️** | **✔️** |
| Close, reopen, and assign all issues and pull requests | | **✔️** | **✔️** | **✔️** | **✔️** |
| [Enable and disable auto-merge on a pull request](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-auto-merge-for-pull-requests-in-your-repository) | | | **✔️** | **✔️** | **✔️** |
| Apply milestones |  | **✔️** | **✔️** | **✔️** | **✔️** |
| Mark [duplicate issues and pull requests](/issues/tracking-your-work-with-issues/marking-issues-or-pull-requests-as-a-duplicate)| | **✔️** | **✔️** | **✔️** | **✔️** |
| Request [pull request reviews](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review) | | **✔️** | **✔️** | **✔️** | **✔️** |
| Merge a [pull request](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges) | | | **✔️** | **✔️** | **✔️** |
| Push to (write) the person or team's assigned repositories | | | **✔️** | **✔️** | **✔️** |
| Edit and delete anyone's comments on commits, pull requests, and issues | | | **✔️** | **✔️** | **✔️** |
| [Hide anyone's comments](/communities/moderating-comments-and-conversations/managing-disruptive-comments) | | | **✔️** | **✔️** | **✔️** |
| [Lock conversations](/communities/moderating-comments-and-conversations/locking-conversations) | | | **✔️** | **✔️** | **✔️** |
| Transfer issues (see "[AUTOTITLE](/issues/tracking-your-work-with-issues/transferring-an-issue-to-another-repository)" for details) |  | | **✔️** | **✔️** | **✔️** |
| [Act as a designated code owner for a repository](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners) | | | **✔️** | **✔️** | **✔️** |
| [Mark a draft pull request as ready for review](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request) | | | **✔️** | **✔️** | **✔️** |
| [Convert a pull request to a draft](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request) | | | **✔️** | **✔️** | **✔️** |
| Create [status checks](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks) | | | **✔️** | **✔️** | **✔️** |{% ifversion fpt or ghec %}
| Create, edit, run, re-run, and cancel [GitHub Actions workflows](/actions) | | | **✔️** | **✔️** | **✔️** |{% endif %}
| Create and edit releases | | | **✔️** | **✔️** | **✔️** |
| View draft releases | | | **✔️** | **✔️** | **✔️** |
| Edit a repository's description | | | | **✔️** | **✔️** |{% ifversion fpt or ghae or ghec %}
| [View and install packages](/packages/learn-github-packages) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| [Publish packages](/packages/learn-github-packages/publishing-a-package) | | | **✔️** | **✔️** | **✔️** |
| [Delete and restore packages](/packages/learn-github-packages/deleting-and-restoring-a-package) | | |  |  | **✔️** | {% endif %}
| Manage [topics](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics) | | | | **✔️** | **✔️** |
| Enable wikis and restrict wiki editors | | | | **✔️** | **✔️** |
| Enable project boards | | | | **✔️** | **✔️** |
| Configure [pull request merges](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges) | | | | **✔️** | **✔️** |
| Configure [a publishing source for {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) | | | | **✔️** | **✔️** |
| [Manage branch protection rules](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule) | | | | | **✔️** |
| [Push to protected branches](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches) | | | | **✔️** | **✔️** |
| Merge pull requests on protected branches, even if there are no approving reviews | | | | | **✔️** |{% ifversion fpt or ghes > 3.4 or ghae > 3.4 or ghec %}
| Create tags that match a [tag protection rule](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/configuring-tag-protection-rules) | | | | **✔️** | **✔️** |
| Delete tags that match a [tag protection rule](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/configuring-tag-protection-rules) | | | | | **✔️** |{% endif %}
| [Create and edit repository social cards](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/customizing-your-repositorys-social-media-preview) | | | | **✔️** | **✔️** |{% ifversion fpt or ghec %}
| Limit [interactions in a repository](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)| | | | **✔️** | **✔️** |{% endif %}
| Delete an issue (see "[AUTOTITLE](/issues/tracking-your-work-with-issues/deleting-an-issue)") | | | | | **✔️** |
| [Define code owners for a repository](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners) | | | | | **✔️** |
| Add a repository to a team (see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository#giving-a-team-access-to-a-repository)" for details) | | | | | **✔️** |
| [Manage outside collaborator access to a repository](/organizations/managing-user-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization) | | | | | **✔️** |
| [Change a repository's visibility](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization) | | | | | **✔️** |
| Make a repository a template (see "[AUTOTITLE](/repositories/creating-and-managing-repositories/creating-a-template-repository)") | | | | | **✔️** |
| Change a repository's settings | | | | | **✔️** |
| Manage team and collaborator access to the repository | | | | | **✔️** |
| Edit the repository's default branch | | | | | **✔️** |
| Rename the repository's default branch (see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/renaming-a-branch)") | | | | | **✔️** |
| Rename a branch other than the repository's default branch (see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/renaming-a-branch)") | | | **✔️** | **✔️** | **✔️** |
| Manage webhooks and deploy keys | | | | | **✔️** |{% ifversion fpt or ghec %}
| [Manage data use settings for your private repository](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository) | | | | | **✔️** |{% endif %}
| [Manage the forking policy for a repository](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository) | | | | | **✔️** |
| [Transfer repositories into the organization](/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization) | | | | | **✔️** |
| [Delete or transfer repositories out of the organization](/organizations/managing-organization-settings/setting-permissions-for-deleting-or-transferring-repositories) | | | | | **✔️** |
| [Archive repositories](/repositories/archiving-a-github-repository/archiving-repositories) | | | | | **✔️** |{% ifversion fpt or ghec %}
| Display a sponsor button (see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/displaying-a-sponsor-button-in-your-repository)") | | | | | **✔️** |{% endif %}
| Create autolink references to external resources, like Jira or Zendesk (see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/configuring-autolinks-to-reference-external-resources)") | | | | | **✔️** |{% ifversion discussions %}
| [Enable {% data variables.product.prodname_discussions %}](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/enabling-or-disabling-github-discussions-for-a-repository) in a repository | | | | **✔️** | **✔️** |
| [Create and edit categories](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions) for {% data variables.product.prodname_discussions %} | | | | **✔️** | **✔️** |
| [Move a discussion to a different category](/discussions/managing-discussions-for-your-community/managing-discussions) | | | **✔️** | **✔️** | **✔️** |
| [Transfer a discussion](/discussions/managing-discussions-for-your-community/managing-discussions) to a new repository| | | **✔️** | **✔️** | **✔️** |
| [Manage pinned discussions](/discussions/managing-discussions-for-your-community/managing-discussions) | | | **✔️** | **✔️** | **✔️** |
| [Convert issues to discussions in bulk](/discussions/managing-discussions-for-your-community/managing-discussions) | | | **✔️** | **✔️** | **✔️** |
| [Lock and unlock discussions](/discussions/managing-discussions-for-your-community/moderating-discussions) | | **✔️** | **✔️** | **✔️** | **✔️** |
| [Individually convert issues to discussions](/discussions/managing-discussions-for-your-community/moderating-discussions) | | **✔️** | **✔️** | **✔️** | **✔️** |
| [Create new discussions and comment on existing discussions](/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| [Delete a discussion](/discussions/managing-discussions-for-your-community/managing-discussions#deleting-a-discussion) | | **✔️** | | **✔️** | **✔️** |{% endif %}{% ifversion fpt or ghec %}
| Create [codespaces](/codespaces/overview) | | | **✔️** | **✔️** | **✔️** |{% endif %}

### Access requirements for security features

In this section, you can find the access required for security features, such as {% data variables.product.prodname_advanced_security %} features.

| Repository action | Read | Triage | Write | Maintain | Admin |
|:---|:---:|:---:|:---:|:---:|:---:|
| Receive [{% data variables.product.prodname_dependabot_alerts %} for insecure dependencies](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts) in a repository | | | {% ifversion dependabot-alerts-permissions-write-maintain %}**✔️**{% endif %} | {% ifversion dependabot-alerts-permissions-write-maintain %}**✔️**{% endif %} | **✔️** |
| [Dismiss {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts) | | | {% ifversion dependabot-alerts-permissions-write-maintain %}**✔️**{% endif %} | {% ifversion dependabot-alerts-permissions-write-maintain %}**✔️**{% endif %} | **✔️** |{% ifversion ghes or ghae or ghec %}<!--Not available for FPT-->
| [Designate additional people or teams to receive security alerts](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts) | | | | | **✔️** |{% endif %}{% ifversion fpt or ghec %}
| Create [security advisories](/code-security/security-advisories/repository-security-advisories/about-repository-security-advisories) | | | | | **✔️** |{% endif %}{% ifversion ghes or ghae or ghec %} <!--Not available for FPT-->
| Manage access to {% data variables.product.prodname_GH_advanced_security %} features (see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)") | | | | | **✔️** |{% endif %}{% ifversion fpt or ghec %}<!--Set at site-level for GHES and GHAE-->
| [Enable the dependency graph](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository) for a private repository | | | | | **✔️** |{% endif %}{% ifversion ghes or ghae or ghec %}
| [View dependency reviews](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |{% endif %}
| [View {% data variables.product.prodname_code_scanning %} alerts on pull requests](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/triaging-code-scanning-alerts-in-pull-requests) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| [List, dismiss, and delete {% data variables.product.prodname_code_scanning %} alerts](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository) | | | **✔️** | **✔️** | **✔️** |
| [View and dismiss {% data variables.secret-scanning.alerts %} in a repository](/code-security/secret-scanning/managing-alerts-from-secret-scanning) | | | **✔️**{% ifversion not ghae %}[1]{% endif %} | **✔️**{% ifversion not ghae %}[1]{% endif %} | **✔️** |{% ifversion ghes or ghae or ghec %}<!--Not available for FPT-->
| [Resolve, revoke, or re-open {% data variables.secret-scanning.alerts %}](/code-security/secret-scanning/managing-alerts-from-secret-scanning) | | | **✔️**{% ifversion not ghae %}[1]{% endif %} | **✔️**{% ifversion not ghae %}[1]{% endif %} | **✔️** |{% endif %}{% ifversion ghes or ghae or ghec %}
| [Designate additional people or teams to receive {% data variables.secret-scanning.alerts %}](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts) in repositories | | | | | **✔️** |{% endif %}

[1] Repository writers and maintainers can only see alert information for their own commits.

## Further reading

- "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories)"
- "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)"
- "[AUTOTITLE](/organizations/managing-access-to-your-organizations-project-boards/project-board-permissions-for-an-organization)"
