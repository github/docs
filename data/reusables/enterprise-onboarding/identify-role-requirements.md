Roles control people's access to settings and resources in your enterprise and organizations. For an introduction to roles, see [AUTOTITLE](/admin/concepts/enterprise-fundamentals/roles-in-an-enterprise).

By using roles effectively, you can:

* Delegate administrative duties and manage access securely at every level of your enterprise.
* Harden security by reducing the number of people with blanket administrative access in your enterprise.
* Ensure everyone has the permissions they need to be independent and productive.

## 1. Review available roles and permissions

This guide helps you understand best practices for roles, so you can plan which roles are required in your enterprise and organizations. You will then be able to create a team structure that uses roles effectively.

As you think about tasks that would benefit from a specific role, refer to the available predefined roles and custom permissions to see if a granular role for this task is currently possible. If not, you will need to rely on a role with more blanket access, such as enterprise owner.

>[!NOTE] Enterprise custom roles currently only cover a limited subset of enterprise settings, but {% data variables.product.company_short %} plans to expand the list of permissions over time.

| Role type | More information |
| --------- | ---------------- |
| Predefined enterprise roles | [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/abilities-of-roles) |
| Predefined organization roles | [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)
| Custom enterprise roles | Review the list of available permissions at `github.com/enterprises/ENTERPRISE/enterprise_roles/new`, where ENTERPRISE is the name of your enterprise account. |
| Custom organization roles | [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles) |

## 2. Identify two owners per account

Decide who will serve as enterprise owners and organization owners. The "owner" role has full administrative access to an enterprise or organization account.

We recommend having at least two owners per account. Although it is good practice to limit the number of people with this level of access, if an account only has one owner, the account's resources can become inaccessible if the owner is unreachable.

## 3. Identify roles for administrative duties

Identify predefined or custom roles that will help you delegate time-consuming administrative duties to other teams. This will help enterprise owners to focus on urgent or strategic work.

It is unlikely that you can granularly assign every administrative duty in your enterprise to a specific team, so we recommend focusing on the most frequent and time-consuming tasks. Some examples of how you might use roles to delegate common tasks are:

* **Auditing**: Use a custom role to give a team access to your audit logs without allowing them to access any other settings.
* **Authentication**: Use a custom role to give your identity provider administrators permission to manage SSO settings on {% data variables.product.github %}, so they can configure authentication independently.
* **Security**: Use the enterprise security manager role to give security teams access to alerts and security data across the enterprise and organizations.

Some administrative tasks are more sensitive than others. For example, if your enterprise uses enterprise teams to manage licensing, access, and roles, then being able to change membership of a team is a powerful action that you may want to restrict to a small group of people.

## 4. Identify base permissions for non-administrators

Consider if there are permissions that every member of your enterprise would benefit from. These can be added to a custom role that you assign to everyone.

For example, regular users have limited visibility of your enterprise account by default. If you want more transparency, you may want to allow all employees to:

* View other enterprise members and administrators so they know where to go for help
* View audit logs to see what people are doing in the enterprise

## 5. Delegate work to apps

Not all tasks are best-suited to humans. Identify frequent, time-consuming, and easily automated tasks, and plan to delegate these tasks to {% data variables.product.prodname_github_apps %}.

{% data variables.product.prodname_github_apps %} provide scoped tokens for use in scripts and workflows. Although they use a different permissions system from the roles you assign to users, you can think about apps like humans with a role on {% data variables.product.github %}:

* They have fine-grained permissions for specific tasks.
* They have scoped access to specific repositories and accounts.
* They have their own identity, which you can trace in audit logs.

For more information about what apps can do, see [AUTOTITLE](/apps/creating-github-apps/about-creating-github-apps/about-creating-github-apps#understanding-what-type-of-github-app-to-build).
