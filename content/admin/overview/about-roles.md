---
title: About roles in an enterprise
intro: 'Learn how roles allow you to control people''s access to your enterprise''s settings and resources.'
versions:
  ghec: '*'
  ghes: '*'
shortTitle: About roles
type: overview
topics:
  - Enterprise
  - Fundamentals
---

## What are roles?

A role is a set of permissions that you can assign to individuals or teams. A permission is the ability to perform a specific action, such as changing billing settings.

A user in an enterprise has a role for both the enterprise account itself and for each individual organization in the enterprise.

* The enterprise-level role defines the user's access to enterprise settings, and to internal repositories across the enterprise.
* Organization-level roles define the user's access to organization settings and repositories in that organization.

## Predefined and custom roles for organizations

Organization roles can be **predefined** or **custom**.

* Predefined roles, such as organization owner or billing manager, grant blanket permissions to users or teams. They may contain more permissions than someone needs to do their job.
* Custom roles include fine-grained permissions for organization settings and repository access. They allow you to follow the principle of least privilege by giving teams just the access they need to do their jobs. For example, you could allow a team to view your audit logs without allowing them to change policies.

We recommend using custom roles wherever possible. However, if a predefined role meets your needs, this is the quickest way to grant permissions.

## Who can assign roles?

Enterprise roles are assigned when a user is invited to the enterprise (personal accounts) or provisioned from an identity provider.{% ifversion ent-owner-custom-org-roles %} Enterprise owners can also create custom organization roles to be used across organizations, but these roles can only be assigned by organization administrators.{% endif %}

Organization administrators can grant organization roles and create custom organization roles, but can't affect roles at the enterprise level.

## Next steps

Review the predefined roles and fine-grained permissions available with custom organization roles, and plan out what roles will be required for your teams to do their jobs on {% data variables.product.github %}.

* [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/abilities-of-roles)
* [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#about-organization-roles)
* [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles#permissions-for-organization-access)

To ensure continued access, we recommend giving the enterprise owner role to at least two people, and the organization owner role to at least two people per organization. However, you should grant most teams only the minimum level of access they require.
