---
title: Teams in an enterprise
intro: 'Learn how teams simplify administration of user access, licensing, and communication.'
versions:
  ghec: '*'
shortTitle: Teams
topics:
  - Enterprise
  - Fundamentals
redirect_from:
  - /admin/overview/about-teams
contentType: concepts
---

## What are teams?

Teams are **groups of users** in an enterprise or organization. By creating teams, you can manage users at scale and simplify access, licensing, and communication. For example, you could create an auditor team for users who need access to audit logs, or a {% data variables.product.prodname_copilot_short %} team for users who receive {% data variables.product.prodname_copilot_short %} licenses.

Administrators can create teams in an enterprise account or in organizations within an enterprise.

* **Enterprise teams** are managed by enterprise owners and can include users from across the enterprise and its organizations. Currently, enterprise teams are used to manage {% data variables.product.prodname_copilot %} licenses for directly assigned users. {% data variables.product.company_short %} plans to expand the capabilities in the near future to include organization and role assignment.
* **Organization teams** are managed by organization administrators and can only include members of a single organization. Organization administrators can grant teams access to organization repositories, and organization members can mention teams in issues and discussions or add them as reviewers on pull requests.

## Can I manage teams from an identity provider?

If you have integrated {% data variables.product.github %} with an identity provider (IdP), you can link teams on {% data variables.product.github %} with groups in your IdP. When membership of the IdP group changes, the change is reflected in the {% data variables.product.github %} team, allowing you to centralize access management.

The capabilities of this feature depend on whether you use {% data variables.product.prodname_emus %} or personal accounts.

### {% data variables.product.prodname_emus %}

You can make changes to IdP groups to manage repository access, add or remove users from organizations, or grant or remove {% data variables.product.prodname_copilot %} licenses. For example, if a new user is added to an IdP group that is linked to a team with access to an organization, the user receives access to that organization. For more information, see [AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-with-scim/managing-team-memberships-with-identity-provider-groups#about-team-management-with-enterprise-managed-users).

This feature is available with both enterprise and organization teams.

### Personal accounts

Team synchronization allows you to centrally manage any privileges linked to an organization team, such as repository access and CODEOWNER status. However, team sync cannot be used to add users to organizations where they don't already have access. For more information, see [AUTOTITLE](/admin/managing-iam/using-saml-for-enterprise-iam/managing-team-synchronization-for-organizations-in-your-enterprise).

Team sync with personal accounts is only available with organization teams, and you must use Entra ID or Okta as an IdP.

## What kind of team should I use?

To simplify administration at scale, {% data variables.product.company_short %} recommends using enterprise teams wherever possible. However, you may need to create organization teams if the functionality you need is not covered by enterprise teams. {% data variables.product.company_short %} plans to address some of these limitations in the near future.

Unlike organization teams, enterprise teams currently do **not** support:

* Repository or organization access
* `@-mentions` of the team name in organizations
* Team sync if you use {% data variables.product.prodname_ghe_cloud %} with personal accounts
* CODEOWNER status
* Secret teams
* Nested teams
* Team maintainers

In addition, enterprise teams are currently limited to 50 teams for a single enterprise and 500 users to each team.

For more information about the capabilities of organization teams, see [AUTOTITLE](/organizations/organizing-members-into-teams/about-teams).

## Further reading

* [AUTOTITLE](/organizations/organizing-members-into-teams/about-teams)
