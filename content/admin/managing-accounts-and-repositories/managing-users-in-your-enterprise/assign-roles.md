---
title: Assigning roles to users in an enterprise
intro: Assign roles to govern what people can do in your enterprise.
versions:
  ghec: '*'
  ghes: '*'
type: how_to
shortTitle: Assign roles
---

Users in an enterprise have roles for the enterprise and for organizations where they have access. For more information, see [AUTOTITLE](/admin/overview/about-roles).

## Assigning enterprise roles

{% ifversion ghec %}
If you use an **enterprise with personal accounts**:

* People become enterprise members when they are added as a member or owner of an organization. See [AUTOTITLE](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization).
* You can invite someone to become an enterprise owner or billing manager. See [AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise).
* You can add people as unaffiliated users without adding them to the enterprise. See [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/invite-users-directly).

If you use an **{% data variables.enterprise.prodname_emu_enterprise %}**:

* You must provision all users through your identity provider (IdP).
* You select each user's enterprise role using your IdP. The role cannot be changed on {% data variables.product.prodname_dotcom %}.
* To assign the guest collaborator role, you may need to update your IdP.

{% elsif ghes %}

When a user has joined your {% data variables.product.prodname_ghe_server %} instance, you can:

* Add the user to an organization. See [AUTOTITLE](/organizations/managing-membership-in-your-organization/adding-people-to-your-organization).
* Invite the user to become an enterprise owner. See [AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise).

If you provision users with SCIM, you assign each user's enterprise role on your identity provider (IdP). The role cannot be changed on {% data variables.product.prodname_dotcom %}.

{% endif %}

## Assigning organization roles

Organization administrators can assign roles to users and teams in their organization. See [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles#assigning-an-organization-role).
