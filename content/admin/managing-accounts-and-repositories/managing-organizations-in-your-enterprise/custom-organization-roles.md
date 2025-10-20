---
title: Creating custom organization roles in an enterprise
intro: Create roles with fine-grained permissions for a consistent experience across your organizations.
versions:
  feature: ent-owner-custom-org-roles
type: how_to
topics:
  - Enterprise
  - Organizations
shortTitle: Custom organization roles
---

To define consistent sets of permissions for settings and repositories, you can create custom organization roles for use in all of the enterprise's organizations. This allows centralized management of common roles such as "Developer" or "SRE team."

Custom organization roles created at the enterprise level use the same organization and repository permissions and base roles as roles created at the organization level. There is no difference in how these roles function or what they can allow. For more information, see [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles).

Enterprise owners can create and edit custom organization roles, but cannot assign them. Organization owners can assign custom roles in an organization.

>[!NOTE] An enterprise can create up to 20 custom organization roles. This limit applies to the enterprise: each organization can also create up to 20 custom organization roles.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. In the left sidebar, select **Organization roles**.
1. Click **Create custom role**.
1. Enter the details, then click **Create role**.
