---
title: Roles in an enterprise
intro: 'Learn how roles allow you to control people''s access to your enterprise''s settings and resources.'
versions:
  feature: enterprise-custom-roles
shortTitle: Roles
topics:
  - Enterprise
  - Fundamentals
redirect_from:
  - /admin/overview/about-roles
contentType: concepts
---

## What are roles?

Roles allow you to delegate administrative duties and manage access securely at every level of your enterprise.

A role is a **set of permissions** that you can assign to individuals or teams. A permission is the ability to perform a specific action, such as changing billing settings.

A user in an enterprise has roles for both the enterprise account and organizations where they have access.

* The enterprise-level roles define the user's access to enterprise settings.
* Organization-level roles define the user's access to organization settings and repositories in an organization.

## Predefined and custom roles

Organization and enterprise roles can be **predefined** or **custom**. Enterprise custom roles are in {% data variables.release-phases.public_preview %}.

* Predefined roles, such as enterprise owner, organization owner, or billing manager, are available for all accounts. They grant a predefined set of permissions to users or teams and may contain more permissions than someone needs to do their job.
* Custom roles include your choice of fine-grained permissions. They can include access to account settings and (for organization custom roles) repository access, allowing you to provide teams with just the access they need to do their jobs. For example, you could allow a team to view your enterprise's audit logs without allowing them to change any settings.

To follow the principle of least privilege access, we recommend using custom roles if they allow for the permissions you require. However, not all capabilities of predefined roles can currently be replicated in custom roles.

## Who manages roles?

Enterprise owners can create custom enterprise roles and assign enterprise roles to users and teams. They can also create custom organization roles to be used across organizations, but these roles can only be assigned by organization owners.

Organization owners can grant organization roles and create custom organization roles, but cannot edit roles or change role assignments that are defined at the enterprise level.

## Next steps

Now that you understand roles, plan which roles will be required for your teams to do their jobs on {% data variables.product.github %}. See [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-roles-in-your-enterprise/identify-role-requirements).
