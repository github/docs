---
title: Roles in an enterprise
intro: "Learn which roles you can assign to control access to your enterprise's settings and data."
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/roles-for-an-enterprise-account
  - /articles/permission-levels-for-a-business-account
  - /articles/roles-for-an-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise
  - /admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise
versions:
  ghec: '*'
  ghes: '*'
topics:
  - Enterprise
---

## About roles in an enterprise

All users that are part of your enterprise have one of the following roles.

* **Enterprise owner**: Can manage all enterprise settings, members, and policies
{%- ifversion ghec %}
* **Billing manager**: Can manage enterprise billing settings
{%- endif %}
* **Enterprise member**: Is a member or owner of any organization in the enterprise
{%- ifversion guest-collaborators %}
* **Guest collaborator**: Can be granted access to repositories or organizations, but has limited access by default ({% data variables.product.prodname_emus %} only)
{%- endif %}

{% ifversion ghec %}For information about which users consume a license, see "[AUTOTITLE](/billing/managing-the-plan-for-your-github-account/about-per-user-pricing#people-that-consume-a-license)."{% endif %}

People with collaborator access to repositories are listed in your enterprise's "People" tab, but are not enterprise members and do not have access to the enterprise. See {% ifversion ghec %}"[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators-or-repository-collaborators)."{% else %}"[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators)."{% endif %}

## How do I assign roles?

{% ifversion ghec %}
If you use an **enterprise with personal accounts**:

* People become enterprise members when they are added as a member or owner of an organization. See "[AUTOTITLE](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)."
* You can invite someone to become an enterprise owner or billing manager. See "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)."

If you use an **{% data variables.enterprise.prodname_emu_enterprise %}**:

* You must provision all users through your identity provider (IdP).
* You select each user's enterprise role using your IdP. The role cannot be changed on {% data variables.product.prodname_dotcom %}.
* To assign the guest collaborator role, you may need to update your IdP.

For more information about the different types of enterprise accounts, see "[AUTOTITLE](/admin/identity-and-access-management/understanding-iam-for-enterprises/choosing-an-enterprise-type-for-github-enterprise-cloud#about-types-of-enterprises)."

{% elsif ghes %}

When a user has joined your {% data variables.product.prodname_ghe_server %} instance, you can:

* Add the user to an organization. See "[AUTOTITLE](/organizations/managing-membership-in-your-organization/adding-people-to-your-organization)."
* Invite the user to become an enterprise owner. See "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)."

If you provision users with SCIM, you assign each user's enterprise role on your identity provider (IdP). The role cannot be changed on {% data variables.product.prodname_dotcom %}.

{% endif %}

## Enterprise owners

Enterprise owners have complete control over the enterprise and can take every action, including:

* Managing administrators
* {% ifversion ghec %}Adding and removing {% elsif ghes %}Managing{% endif %} organizations{% ifversion remove-enterprise-members %}
* Removing enterprise members from all organizations{% endif %}
* Managing enterprise settings
* Enforcing policy across organizations
{% ifversion ghec %}- Managing billing settings{% endif %}

For security, we recommend making **only a few people** enterprise owners.

Enterprise owners do not have access to organization settings or content by default, but they can gain access by joining any organization. See "[AUTOTITLE](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise)."

{% ifversion ghec %}

## Billing managers

Billing managers only have access to your enterprise's billing settings. They can:
* View and manage user licenses, usage-based billing, and other billing settings
* View a list of billing managers
* Add or remove other billing managers

Billing managers do not have access to organization settings or content by default except for internal repositories within an enterprise in which they are a member.

{% endif %}

## Enterprise members

Members of organizations owned by your enterprise are automatically members of the enterprise.

Enterprise members:

* Cannot access or configure enterprise settings.
* Can access all repositories with "internal" visibility across any organization in the enterprise. See "[AUTOTITLE](/repositories/creating-and-managing-repositories/about-repositories#about-internal-repositories)."
* May have different levels of access to various organizations and repositories. To view the resources someone has access to, see "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise)."

{% ifversion guest-collaborators %}

## Guest collaborators

{% data reusables.emus.guest-collaborators-note %}

{% data reusables.emus.about-guest-collaborators %}

You may need to update your IdP application to use guest collaborators. See "[AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/enabling-guest-collaborators)."

{% endif %}
