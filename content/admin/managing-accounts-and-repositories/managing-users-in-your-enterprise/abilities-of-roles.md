---
title: Abilities of roles in an enterprise
intro: Learn which roles you can assign to control access to your enterprise's settings and data.
shortTitle: Capabilities of roles
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/roles-for-an-enterprise-account
  - /articles/permission-levels-for-a-business-account
  - /articles/roles-for-an-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise
  - /admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise
  - /admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/roles-in-an-enterprise
versions:
  ghec: '*'
  ghes: '*'
topics:
  - Enterprise
allowTitleToDifferFromFilename: true
contentType: reference
---

## About roles in an enterprise

All users that are part of your enterprise have one of the following roles.

* **Enterprise owner:** Can manage all enterprise settings, members, and policies
{%- ifversion ghec %}
* **Billing manager:** Can manage enterprise billing settings
{%- endif %}
* **Enterprise member:** Is a member or owner of any organization in the enterprise
{%- ifversion guest-collaborators %}
* **Guest collaborator:** Can be granted access to repositories or organizations, but has limited access by default ({% data variables.product.prodname_emus %} only)
{%- endif %}
{%- ifversion unaffiliated-users %}
* **Unaffiliated user:** Has been added to the enterprise but isn't a member of any organizations
{%- endif %}

{% ifversion ghec %}For information about which users consume a license, see [AUTOTITLE](/billing/managing-the-plan-for-your-github-account/about-per-user-pricing#people-that-consume-a-license).{% endif %}

People with collaborator access to repositories are listed in your enterprise's "People" tab, but are not enterprise members and do not have access to the enterprise. See {% ifversion ghec %}[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators-or-repository-collaborators).{% else %}[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators).{% endif %}

## Enterprise owners

Enterprise owners have complete control over the enterprise and can take every action, including:

* Managing administrators
* {% ifversion ghec %}Adding and removing {% elsif ghes %}Managing{% endif %} organizations{% ifversion remove-enterprise-members %}
* Removing enterprise members from all organizations{% endif %}
* Managing enterprise settings
* Enforcing policy across organizations{% ifversion ghec %}
* Managing billing settings{% endif %}

For security, we recommend making **only a few people** enterprise owners.

Enterprise owners do not have access to organization settings or content by default, but they can gain access by joining any organization. See [AUTOTITLE](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise).

{% ifversion ghec %}

## Billing managers

Billing managers only have access to your enterprise's billing settings. They can view and manage:

* User licenses
* Usage-based billing
* Other billing settings

Billing managers do not have access to organization settings or content by default except for internal repositories within an enterprise in which they are a member.

{% endif %}

## Enterprise members

Members of organizations owned by your enterprise are automatically members of the enterprise.

Enterprise members:

* Cannot access or configure enterprise settings.
* Can access all repositories with "internal" visibility across any organization in the enterprise. See [AUTOTITLE](/repositories/creating-and-managing-repositories/about-repositories#about-internal-repositories).
* May have different levels of access to various organizations and repositories. To view the resources someone has access to, see [AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise).

{% ifversion guest-collaborators %}

## Guest collaborators

{% data reusables.emus.guest-collaborators-note %}

{% data reusables.emus.about-guest-collaborators %}

You may need to update your IdP application to use guest collaborators. See [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/enabling-guest-collaborators).

{% endif %}

{% ifversion unaffiliated-users %}

## Unaffiliated users

Unaffiliated users are people who have been added to your enterprise but aren't members of any organizations. These users:

* Do not consume a standard {% data variables.product.prodname_enterprise %} license.
* Cannot access private or internal repositories.
* Can be added as members of organizations or enterprise teams.
* Can receive a {% data variables.product.prodname_copilot_short %} license directly from your enterprise.

You can add unaffiliated users from your identity provider (for {% data variables.product.prodname_emus %}) or by inviting users at the enterprise level (for personal accounts). For personal accounts, see [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/invite-users-directly).

{% endif %}

## Next steps

When you have decided which roles your users require, assign the roles to them. See [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/assign-roles).
