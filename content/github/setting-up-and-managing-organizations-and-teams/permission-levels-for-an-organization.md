---
title: Permission levels for an organization
intro: 'After you [create an organization](/articles/creating-a-new-organization-account), you should give Owner permissions to a small group of people who will manage the organization account.'
redirect_from:
  - /articles/permission-levels-for-an-organization-early-access-program/
  - /articles/permission-levels-for-an-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Permission levels for an organization

Organization members can have *owner*{% if currentVersion == "free-pro-team@latest" %}, *billing manager*,{% endif %} or *member* roles:

- **Owners** have complete administrative access to your organization. This role should be limited, but to no less than two people, in your organization. For more information, see "[Maintaining ownership continuity for your organization](/github/setting-up-and-managing-organizations-and-teams/maintaining-ownership-continuity-for-your-organization)."
{% if currentVersion == "free-pro-team@latest" %}
- **Billing managers** allow a person to manage billing settings. For more information, see "[Adding a billing manager to your organization](/articles/adding-a-billing-manager-to-your-organization)".
{% endif %}
- **Members** are the default role for everyone else.

{% if currentVersion == "free-pro-team@latest" %}
<!--Dotcom version has extra column for Billing managers-->

| Organization action | Owners | Members | Billing managers |
|:--------------------|:------:|:-------:|:----------------:|
| Create repositories (see "[Restricting repository creation in your organization](/articles/restricting-repository-creation-in-your-organization)" for details) | **X** | **X** |  |
| View and edit billing information | **X** |  | **X** |
| Invite people to join the organization | **X** |  |  |
| Edit and cancel invitations to join the organization | **X** |  |  |
| Remove members from the organization | **X** | | |
| Reinstate former members to the organization | **X** | | |
| Add and remove people from **all teams** | **X** |  |  |
| Promote organization members to *team maintainer* | **X** |  |  |
| Configure code review assignments (see "[Managing code review assignment for your team](/github/setting-up-and-managing-organizations-and-teams/managing-code-review-assignment-for-your-team)") | **X** |  |  |
| Set scheduled reminders (see "[Managing scheduled reminders for pull requests](/github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-pull-requests)") | **X** |  |  |
| Add collaborators to **all repositories** | **X** |  |  |
| Access the organization audit log | **X** |  |  |
| Edit the organization's profile page (see "[About your organization's profile](/articles/about-your-organization-s-profile)" for details) | **X** |  |  |
| Verify the organization's domains (see "[Verifying your organization's domain](/articles/verifying-your-organization-s-domain)" for details) | **X** |  |  |
| Restrict email notifications to verified domains (see "[Restricting email notifications to an approved domain](/github/setting-up-and-managing-organizations-and-teams/restricting-email-notifications-to-an-approved-domain)" for details) | **X** |  |  |
| Delete **all teams** | **X** |  |  |
| Delete the organization account, including all repositories | **X** |  |  |
| Create teams (see "[Setting team creation permissions in your organization](/articles/setting-team-creation-permissions-in-your-organization)" for details) | **X** | **X** |  |
| [Move teams in an organization's hierarchy](/articles/moving-a-team-in-your-organization-s-hierarchy) | **X** | | |
| Create project boards (see "[Project board permissions for an organization](/articles/project-board-permissions-for-an-organization)" for details) | **X** | **X** | |
| See all organization members and teams | **X** | **X** |  |
| @mention any visible team | **X** | **X** |  |
| Can be made a *team maintainer* | **X** | **X** |  |
| View organization insights (see "[Viewing insights for your organization](/articles/viewing-insights-for-your-organization)" for details) | **X** | **X** |  |
| View and post public team discussions to **all teams** (see "[About team discussions](/articles/about-team-discussions)" for details) | **X** | **X** |  |
| View and post private team discussions to **all teams** (see "[About team discussions](/articles/about-team-discussions)" for details) | **X** |  |  |
| Edit and delete team discussions in **all teams** (see "[Managing disruptive comments](/articles/managing-disruptive-comments)" for details) | **X** |  |  |
| Hide comments on commits, pull requests, and issues (see "[Managing disruptive comments](/articles/managing-disruptive-comments/#hiding-a-comment)" for details) | **X** | **X** | |
| Disable team discussions for an organization (see "[Disabling team discussions for your organization](/articles/disabling-team-discussions-for-your-organization)" for details) | **X** |  |  |
| Manage viewing of organization dependency insights (see "[Changing the visibility of your organization's dependency insights](/articles/changing-the-visibility-of-your-organizations-dependency-insights)" for details) | **X** |  |  |
| Set a team profile picture in **all teams** (see "[Setting your team's profile picture](/articles/setting-your-team-s-profile-picture)" for details) | **X** |  |  |
| Sponsor accounts and manage the organization's sponsorships (see "[Sponsoring open-source contributors](/github/supporting-the-open-source-community-with-github-sponsors/sponsoring-open-source-contributors)" for details) | **X** | **X** | | 
| Manage email updates from sponsored accounts (see "[Managing updates from accounts your organization's sponsors](/github/setting-up-and-managing-organizations-and-teams/managing-updates-from-accounts-your-organization-sponsors)" for details) | **X** | | |
| Attribute your sponsorships to another organization (see "[Attributing sponsorships to your organization](/github/supporting-the-open-source-community-with-github-sponsors/attributing-sponsorships-to-your-organization)" for details ) | **X** | | |
| Manage the publication of {% data variables.product.prodname_pages %} sites from repositories in the organization (see "[Managing the publication of {% data variables.product.prodname_pages %} sites for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-the-publication-of-github-pages-sites-for-your-organization)" for details) | **X** | | |
| Manage security and analysis settings (see "[Managing security and analysis settings for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)" for details) | **X** | | |
| Enable and enforce [SAML single sign-on](/articles/about-identity-and-access-management-with-saml-single-sign-on) | **X** |  |  |
| [Manage a user's SAML access to your organization](/github/setting-up-and-managing-organizations-and-teams/viewing-and-managing-a-members-saml-access-to-your-organization) | **X** |  |  |
| Manage an organization's SSH certificate authorities (see "[Managing your organization's SSH certificate authorities](/articles/managing-your-organizations-ssh-certificate-authorities)" for details) | **X** |  |  |
| Transfer repositories | **X** | |    |
| Purchase, install, manage billing for, and cancel {% data variables.product.prodname_marketplace %} apps | **X** | | |
| List apps in {% data variables.product.prodname_marketplace %} | **X** | | |
| Receive [{% data variables.product.prodname_dependabot_alerts %} about vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies) for all of an organization's repositories | **X** |  |  |
| Manage {% data variables.product.prodname_dependabot_security_updates %} (see "[About {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)") | **X** | | |
| [Manage the forking policy](/github/setting-up-and-managing-organizations-and-teams/managing-the-forking-policy-for-your-organization) | **X** |  |  |
| [Limit activity in public repositories in an organization](/articles/limiting-interactions-in-your-organization) | **X** | | |
| Pull (read), push (write), and clone (copy) *all repositories* in the organization | **X** | | |
| Convert organization members to [outside collaborators](#outside-collaborators) | **X** | | |
| [View people with access to an organization repository](/articles/viewing-people-with-access-to-your-repository) | **X** | | |
| [Export a list of people with access to an organization repository](/articles/viewing-people-with-access-to-your-repository/#exporting-a-list-of-people-with-access-to-your-repository) | **X** | | |
| Manage the default branch name (see "[Managing the default branch name for repositories in your organization](/github/setting-up-and-managing-organizations-and-teams/managing-the-default-branch-name-for-repositories-in-your-organization)") | **X** | | |
| Manage default labels (see "[Managing default labels for repositories in your organization](/articles/managing-default-labels-for-repositories-in-your-organization)") | **X** | | |
| Enable team synchronization (see "[Managing team synchronization for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-team-synchronization-for-your-organization)" for details) | **X** |  | |

{% else %}
<!--GHE version doesn't have the extra column for Billing managers-->

| Organization action | Owners | Members |
|:--------------------|:------:|:-------:|
| Invite people to join the organization | **X** |  |
| Edit and cancel invitations to join the organization | **X** |  |
| Remove members from the organization | **X** | | |
| Reinstate former members to the organization | **X** | | |
| Add and remove people from **all teams** | **X** |  |  
| Promote organization members to *team maintainer* | **X** |  |{% if currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
| Configure code review assignments (see "[Managing code review assignment for your team](/github/setting-up-and-managing-organizations-and-teams/managing-code-review-assignment-for-your-team)") | **X** |  |{% endif %}
| Add collaborators to **all repositories** | **X** |  |
| Access the organization audit log | **X** |  |
| Edit the organization's profile page (see "[About your organization's profile](/articles/about-your-organization-s-profile)" for details) | **X** |  |  |
| Delete **all teams** | **X** |  |
| Delete the organization account, including all repositories | **X** |  |
| Create teams (see "[Setting team creation permissions in your organization](/articles/setting-team-creation-permissions-in-your-organization)" for details) | **X** | **X** |
| See all organization members and teams | **X** | **X** |
| @mention any visible team | **X** | **X** |
| Can be made a *team maintainer* | **X** | **X** |
| Transfer repositories | **X** | |
| Manage an organization's SSH certificate authorities (see "[Managing your organization's SSH certificate authorities](/articles/managing-your-organizations-ssh-certificate-authorities)" for details) | **X** |  |
| Create project boards (see "[Project board permissions for an organization](/articles/project-board-permissions-for-an-organization)" for details) | **X** | **X** | |
| View and post public team discussions to **all teams** (see "[About team discussions](/articles/about-team-discussions)" for details) | **X** | **X** |  |
| View and post private team discussions to **all teams** (see "[About team discussions](/articles/about-team-discussions)" for details) | **X** |  |  |
| Edit and delete team discussions in **all teams** (for more information, see "[Managing disruptive comments](/articles/managing-disruptive-comments)) | **X** |  |  |
| Hide comments on commits, pull requests, and issues (see "[Managing disruptive comments](/articles/managing-disruptive-comments/#hiding-a-comment)" for details) | **X** | **X** | **X** |
| Disable team discussions for an organization (see "[Disabling team discussions for your organization](/articles/disabling-team-discussions-for-your-organization)" for details) | **X** |  |  |
| Set a team profile picture in **all teams** (see "[Setting your team's profile picture](/articles/setting-your-team-s-profile-picture)" for details) | **X** |  |  |{% if currentVersion ver_gt "enterprise-server@3.0" %}
| Manage the publication of {% data variables.product.prodname_pages %} sites from repositories in the organization (see "[Managing the publication of {% data variables.product.prodname_pages %} sites for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-the-publication-of-github-pages-sites-for-your-organization)" for details) | **X** | |{% endif %}
| [Move teams in an organization's hierarchy](/articles/moving-a-team-in-your-organization-s-hierarchy) | **X** | | |
| Pull (read), push (write), and clone (copy) *all repositories* in the organization | **X** | |
| Convert organization members to [outside collaborators](#outside-collaborators) | **X** | |
| [View people with access to an organization repository](/articles/viewing-people-with-access-to-your-repository) | **X** | |
| [Export a list of people with access to an organization repository](/articles/viewing-people-with-access-to-your-repository/#exporting-a-list-of-people-with-access-to-your-repository) | **X** | |{% if currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
| Manage default labels (see "[Managing default labels for repositories in your organization](/articles/managing-default-labels-for-repositories-in-your-organization)") | **X** | |{% endif %}

{% endif %}

### {% data variables.product.prodname_github_app %} managers

By default, only organization owners can manage the settings of {% data variables.product.prodname_github_app %}s owned by an organization. To allow additional users to manage {% data variables.product.prodname_github_app %}s owned by an organization, an owner can grant them {% data variables.product.prodname_github_app %} manager permissions.

When you designate a user as a {% data variables.product.prodname_github_app %} manager in your organization, you can grant them access to manage the settings of some or all {% data variables.product.prodname_github_app %}s owned by the organization. For more information, see:

- "[Adding GitHub App managers in your organization](/articles/adding-github-app-managers-in-your-organization)"
- "[Removing GitHub App managers from your organization](/articles/removing-github-app-managers-from-your-organization)"

### Outside collaborators

To keep your organization data secure while allowing access to repositories, you can add *outside collaborators*. {% data reusables.organizations.outside_collaborators_description %}

### Further reading

- "[Repository permission levels for an organization](/articles/repository-permission-levels-for-an-organization)"
- "[About teams](/articles/about-teams)"
- "[Project board permissions for an organization](/articles/project-board-permissions-for-an-organization)"
