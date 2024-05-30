---
title: Roles in an enterprise
intro: "Everyone in an enterprise is a member of the enterprise. To control access to your enterprise's settings and data, you can assign different roles to members of your enterprise."
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

All users that are part of your enterprise have one of the following roles:

- Enterprise owner
{%- ifversion ghec %}
- Billing manager
{%- endif %}
- Enterprise member
{% ifversion guest-collaborators %}
- Guest collaborator ({% data variables.product.prodname_emus %} only)
{%- endif %}

{% ifversion ghec %}
If your enterprise does not use {% data variables.product.prodname_emus %}, you can invite someone to become an enterprise owner or billing manager using {% data variables.product.prodname_dotcom %}. For more information, see "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)."

If you do use {% data variables.product.prodname_emus %}, you must provision all new owners, billing managers, members, and guest collaborators through your identity provider. You cannot add them to the enterprise using {% data variables.product.prodname_dotcom %}. You must select each user's enterprise role using your IdP, and that role cannot be changed on {% data variables.product.prodname_dotcom %}. However, you can select a member's role in an organization using {% data variables.product.prodname_dotcom %}. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users)."
{% else %}
For more information about adding people to your enterprise, see "[AUTOTITLE](/admin/identity-and-access-management)".

{% endif %}

## Enterprise owners

Enterprise owners have complete control over the enterprise and can take every action, including:

- Managing administrators
- {% ifversion ghec %}Adding and removing {% elsif ghes %}Managing{% endif %} organizations {% ifversion ghec %}to and from {% elsif ghes %} in{% endif %} the enterprise{% ifversion remove-enterprise-members %}
- Removing enterprise members from all organizations owned by the enterprise{% endif %}
- Managing enterprise settings
- Enforcing policy across organizations
{% ifversion ghec %}- Managing billing settings{% endif %}

{% ifversion enterprise-owner-join-org %}
Enterprise owners do not have access to organization settings or content by default. To gain access, enterprise owners can join any organization owned by their enterprise. For more information, see "[AUTOTITLE](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise)."

Owners of organizations in your enterprise do not have access to the enterprise itself unless you make them enterprise owners.
{% else %}
Enterprise owners cannot access organization settings or content unless they are made an organization owner or given direct access to an organization-owned repository. Similarly, owners of organizations in your enterprise do not have access to the enterprise itself unless you make them enterprise owners.
{% endif %}

{% ifversion ghec %}An enterprise owner will only consume a license if they are an owner or member of at least one organization within the enterprise. {% endif %}Even if an enterprise owner has a role in multiple organizations, they will consume a single license. {% ifversion ghec %}Enterprise owners must have a personal account on {% data variables.product.prodname_dotcom %}.{% endif %} As a best practice, we recommend making only a few people in your company enterprise owners, to reduce the risk to your business. {% ifversion ghes %}For more information about accounts that consume a license for {% data variables.location.product_location %}, see "[AUTOTITLE](/billing/managing-the-plan-for-your-github-account/about-per-user-pricing#accounts-that-consume-a-license-on-github-enterprise-server)."{% endif %}

{% ifversion ghec %}

## Billing managers

Billing managers only have access to your enterprise's billing settings. Billing managers for your enterprise can:
- View and manage user licenses, {% data variables.large_files.product_name_short %} packs, and other billing settings
- View a list of billing managers
- Add or remove other billing managers

Billing managers will only consume a license if they are an owner or member of at least one organization within the enterprise. Billing managers do not have access to organizations or repositories in your enterprise, and cannot add or remove enterprise owners. Billing managers must have a personal account on {% data variables.product.prodname_dotcom %}.

{% endif %}

## Enterprise members

Members of organizations owned by your enterprise are also automatically members of the enterprise. Members can collaborate in organizations and may be organization owners, but members cannot access or configure enterprise settings{% ifversion ghec %}, including billing settings{% endif %}.

Enterprise members have access to all repositories with the "internal" visibility that are owned by any organization within the enterprise. For more information about internal repositories, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/about-repositories#about-internal-repositories)."

People in your enterprise may have different levels of access to the various organizations owned by your enterprise and to repositories within those organizations. You can view the resources that each person has access to. For more information, see "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise)."

People with outside collaborator access to repositories owned by your organization are also listed in your enterprise's "People" tab, but are not enterprise members and do not have any access to the enterprise. For more information about outside collaborators, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators)."

{% ifversion guest-collaborators %}

## Guest collaborators

{% data reusables.emus.guest-collaborators-note %}

If your enterprise uses {% data variables.product.prodname_emus %}, you can use the role of guest collaborator to grant limited access to vendors and contractors. Like all {% data variables.enterprise.prodname_managed_users %}, guest collaborators are provisioned by your IdP. Unlike enterprise members, guest collaborators only have access to internal repositories within organizations where they are a member. Guest collaborators will never see internal repositories in an organization they are not a member of.

{% data reusables.emus.giving-access-to-guest-collaborators %}

Guest collaborators can be members of IdP groups that are connected to {% data variables.product.prodname_dotcom %} teams, and will be added to the organization via SCIM, just like other enterprise members. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/managing-team-memberships-with-identity-provider-groups)."

When provisioning your guest collaborators, make sure that the only role assigned to the user in your IdP is guest collaborator. This applies to both direct assignment, and group memberships. If the same user is assigned multiple roles, the more privileged role will override the less privileged role. For example, if you assign the guest collaborator role directly to a user, but the user is also a member of a group that's assigned the enterprise owner role, the user will have the full privileges of an enterprise owner.

If you use Microsoft Entra ID (previously known as Azure AD) or Okta for SAML authentication, or if you use Entra ID for OIDC authentication, you may need to update your IdP application to use guest collaborators. For more information, see "[AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/enabling-guest-collaborators)."

{% endif %}
