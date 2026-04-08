## Use organizations for work or governance

There are two main models of using organizations:

* **Group related work projects**: Group repositories for a specific application and related services. Teams that work on that application will then be able to communicate effectively and contribute across the different repositories.
* **Group similar governance requirements**: Group repositories that require similar policies, security settings, or access restrictions. You will be able to apply the necessary settings to the organization at scale. For example, if you have highly confidential work projects or a specific data classification, group these in an organization where only a limited number of people have access.

## Create organizations intentionally

Creating organizations is a balance. While {% data variables.product.company_short %} continues to make organization management more scalable, you should be intentional about why you create an organization. It's always easier to add organizations than to remove them.

Don't try to fit unnatural pieces of your company together into a single large organization. The administrative features of an enterprise account allow you to automate processes, manage access, and apply policies across multiple organizations at once. However, there are tradeoffs of segregating work into many different organizations:

* It's easier for people to communicate within one organization, as @-mentions only work between members of the same organization.
* It's easier for people to find resources in one organization, as there's only one place to search.

You may want to start with a small number of organizations as you develop your strategy. After you build confidence in what works well for your business, you can create additional organizations as the need arises.

You should regularly evaluate your strategies for access, governance, and organization of work. Cleaning up legacy organizations is a part of that process.

{% ifversion enterprise-teams %}

## Use teams to organize people

>[!NOTE] Enterprise teams are in public preview and subject to change.

Enterprise teams are the best way to control access and permissions at scale. Create teams and manage their membership as your primary means of performing actions like adding users to organizations, granting licenses, and delegating access to enterprise settings.

When you use teams in this way, controlling membership of teams is a sensitive action. Limit the permission to control teams and their membership to a small number of people. If you use an external identity provider (IdP), sync teams to IdP groups so that team membership can be controlled by a central administrator.

Use roles to delegate administrative duties to teams. This allows you to limit the number of enterprise owners in your company and give people just the permissions they need to do their jobs effectively. For example, a team of auditors can receive access to the enterprise audit log without being able to access any other settings.

{% endif %}

## Collaborate in organization-owned repositories

We recommend collaborating in organization-owned repositories whenever possible and minimizing collaboration in user-owned repositories. Organization-owned repositories have more sophisticated security and administrative features, and they remain accessible even as enterprise membership changes.
