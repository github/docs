---
title: Abilities of roles in an enterprise
intro: Find the right role to grant access to your enterprise's settings and data.
shortTitle: Predefined roles
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/roles-for-an-enterprise-account
  - /articles/permission-levels-for-a-business-account
  - /articles/roles-for-an-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise
  - /admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise
  - /admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/roles-in-an-enterprise
  - /admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/abilities-of-roles
  - /early-access/enterprise/enterprise-roles/enterprise-security-manager
versions:
  ghec: '*'
  ghes: '*'
topics:
  - Enterprise
allowTitleToDifferFromFilename: true
contentType: reference
---

## About roles in an enterprise

{% data variables.product.github %} offers a range of predefined and custom roles for access to enterprise settings and resources.

| Role | Description |
| ---- | ----------- |
| Enterprise owner | Can manage all enterprise settings, members, and policies. |
| {% ifversion ghec %} |
| Billing manager | Can manage enterprise billing settings. |
| {% endif %} |
| {% ifversion enterprise-app-manager %} |
| App manager | Can manage {% data variables.product.prodname_github_app %} registrations that are owned by the enterprise. |
| {% endif %} |
| {% ifversion ent-security-manager %} |
| Security manager | Can view security results and manage security settings for the enterprise ({% data variables.release-phases.public_preview %}). |
| {% endif %} |
| User | A regular enterprise member with no administrative access.{% ifversion unaffiliated-users %} Includes organization members and unaffiliated users. |
| {% endif %} |
| {% ifversion guest-collaborators %} |
| Guest collaborator | Can be granted access to repositories or organizations, but has limited access by default ({% data variables.product.prodname_emus %} only). |
| {% endif %} |
| {% ifversion enterprise-custom-roles %} |
| Custom roles | Define your own set of permissions for access to enterprise settings. |
| {% endif %} |

People with collaborator access to repositories are listed in your enterprise's "People" tab, but are not enterprise members and do not have access to the enterprise. See {% ifversion ghec %}[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators-or-repository-collaborators).{% else %}[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators).{% endif %}

## Enterprise owners

Enterprise owners have complete control over the enterprise and can take every action, including:

* Managing administrators
* {% ifversion ghec %}Adding and removing {% elsif ghes %}Managing{% endif %} organizations{% ifversion remove-enterprise-members %}
* Removing enterprise members from all organizations{% endif %}
* Managing enterprise settings
* Enforcing policy across organizations{% ifversion ghec %}
* Managing billing settings{% endif %}
* Managing security settings

Enterprise owners do not have access to organization settings or content by default, but they can gain access by joining any organization. See [AUTOTITLE](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise).

{% ifversion ghec %}

## Billing managers

Billing managers only have access to your enterprise's billing settings. They can view and manage:

* User licenses
* Usage-based billing
* Other billing settings

Billing managers do not have access to organization settings or content by default except for internal repositories within an enterprise in which they are a member.

{% endif %}

{% ifversion enterprise-app-manager %}

## App managers

{% data variables.product.prodname_github_app %} managers:

* Can view, create, edit, and delete {% data variables.product.prodname_github_app %} registrations that are owned by the enterprise. For the specific app settings that {% data variables.product.prodname_github_app %} managers can control, see [AUTOTITLE](/apps/maintaining-github-apps/modifying-a-github-app).
* Cannot install and uninstall {% data variables.product.prodname_github_apps %} on an enterprise or organization.

App managers can also be assigned to individual apps. See [AUTOTITLE](/admin/managing-your-enterprise-account/adding-and-removing-github-app-managers-in-your-enterprise).

{% endif %}

{% ifversion ent-security-manager %}

## Security managers

> [!NOTE]
> The enterprise security manager role is in {% data variables.release-phases.public_preview %} and subject to change.

Security managers have the permissions required to effectively manage use of security features and alerts for the enterprise. They can view, manage, and assign:

* Security configurations at the enterprise and organization level
* Use of {% data variables.product.prodname_GH_secret_protection %} and {% data variables.product.prodname_GH_code_security %} at the enterprise and organization level
* Security alerts and dashboards for all repositories in organizations in the enterprise
* Security campaigns for organizations
* Repository settings for security features

In addition, they have read access for code in all repositories and write access for all security alerts in the enterprise.

{% endif %}

## Users

Users have no administrative access to the enterprise by default. They cannot access or configure enterprise settings, unless you assign them a custom role that grants this access.

{% ifversion unaffiliated-users %}

### Organization members

{% endif %}

If a user is a member or owner of any organization, they are listed as an **organization member** on your enterprise's "People" page. In addition to their access to organizations where they are members, these users can access all repositories with "internal" visibility in any organization in the enterprise. See [AUTOTITLE](/repositories/creating-and-managing-repositories/about-repositories#about-internal-repositories).

{% ifversion unaffiliated-users %}

### Unaffiliated users

If a user is not a member of any organization, and doesn't have the enterprise owner or billing manager role, the user is listed as an unaffiliated user.

Unaffiliated users:

* Do not consume a {% data variables.product.prodname_enterprise %} license, unless they meet another criterion listed in [AUTOTITLE](/billing/reference/github-license-users#organizations-on-github-enterprise-cloud).
* Cannot access private or internal repositories.
* Can be added as members of enterprise teams.
* Can receive a {% data variables.product.prodname_copilot_short %} license or custom role directly from your enterprise.
* Can remove themselves from the enterprise at any time, unless you use {% data variables.product.prodname_emus %}.

If you have an enterprise with personal accounts, you can disable this role. See [AUTOTITLE](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/control-offboarding).

{% endif %}

{% ifversion guest-collaborators %}

## Guest collaborators

{% data reusables.emus.guest-collaborators-note %}

{% data reusables.emus.about-guest-collaborators %}

You may need to update your IdP application to use guest collaborators. See [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/enabling-guest-collaborators).

{% endif %}

{% ifversion enterprise-custom-roles %}

## Custom roles

With custom roles, you can define your own sets of permissions. This allows you to delegate administrative duties securely or grant extra privileges to help non-administrators be productive.

To create a custom enterprise role, see [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-roles-in-your-enterprise/create-custom-roles).

## Next steps

When you have decided which roles your users require, assign the roles to them. See [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/assign-roles).

{% endif %}
