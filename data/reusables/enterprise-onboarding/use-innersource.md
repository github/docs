You can use innersource practices to drive collaboration and productivity in your enterprise. Innersource makes it easy for all employees to discover and reuse work. This allows development teams to learn from each other's work, share their expertise, and avoid duplicating effort to recreate common services.

## Make repositories discoverable

Unless they contain sensitive information, you should aim to make repositories visible to all employees.

To do this, encourage employees to use **internal** visibility whenever possible. Internal visibility allows any member of any organization in the enterprise to view the repository, regardless of whether the user is a member of the organization that owns the repository.

You should also set permissive **base permissions** for organizations. An organization's base permission policy determines the default level of access that members of that organization have to all the organization's repositories. Generally, organizations should have at least a "Read" base permission so that all organization members can see any repository. Organization owners can then use teams to grant people greater levels of access in specific repositories.

If you have more sensitive repositories that should not be widely visible, you can set up a dedicated organization with a more restrictive base permission and add specific teams to this organization.

For more information, see [AUTOTITLE](/repositories/creating-and-managing-repositories/about-repositories#about-internal-repositories) and [AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/setting-base-permissions-for-an-organization).

## Document projects

Organize and document your repositories so that people can search for work across the enterprise.

Repository **READMEs** are effective because they're defined in files in the repository, so users can search for them like code. You can also create READMEs at the level of an organization or enterprise account to provide a higher-level overview of where to find different projects. For more formal internal documentation, consider setting up a **{% data variables.product.prodname_pages %} site** or **wikis**.

You can use **repository topics** to group repositories that contain a certain programming language, are owned by a certain team, and so on. This is another way of making repositories easier to find.

For more information, see:

* [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes), [AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile#adding-a-member-only-organization-profile-readme), and [AUTOTITLE](/admin/managing-your-enterprise-account/creating-a-readme-for-an-enterprise)
* [AUTOTITLE](/pages/getting-started-with-github-pages/creating-a-github-pages-site)
* [AUTOTITLE](/communities/documenting-your-project-with-wikis/adding-or-editing-wiki-pages)
* [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics)

## Set up a culture for sharing work

Encourage teams to publicize their work and share resources with other teams. {% data variables.product.github %} has a number of features that make this easier. For example, teams can:

* Use **discussions** to make their work more visible to other teams. See [AUTOTITLE](/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion#creating-a-discussion).
* Create a dedicated internal repository for sharing **actions and reusable {% data variables.product.prodname_actions %} workflows**, which anyone can reference when they write a workflow within the enterprise. See [AUTOTITLE](/actions/how-tos/reuse-automations/share-with-your-enterprise).
* Share reusable pieces of code in internal packages with **{% data variables.product.prodname_registry %}** registries. For enhanced security, you can give {% data variables.product.github %}'s security features access to these registries. See [AUTOTITLE](/packages/learn-github-packages/introduction-to-github-packages).
* Set up common templates and frameworks as **template repositories** that other people can copy to get started with a project. See [AUTOTITLE](/repositories/creating-and-managing-repositories/creating-a-template-repository).

Like with an open source project, you should ensure shared projects have a support model and a clearly defined team of maintainers, especially for services that many parts of your enterprise rely on. Ideally the maintainers team will contain representatives from the different teams that use the service.

## Hide content from external collaborators

If you have external contractors or collaborators who need access to your enterprise's projects, you can grant them a different level of access from regular employees.

Specifically, you may want to hide internal repositories from an external collaborator. To do this:

* If you use {% data variables.product.prodname_emus %}, provision an account for the user with the **guest collaborator** role. Guest collaborators don't have access to internal repositories by default, but they receive base permissions in organizations where they're added as members. They can also be added as repository collaborators in repositories.
* If you do not use {% data variables.product.prodname_emus %}, add the user as an **outside collaborator** in the required repositories, but ensure they are not added as a member of any organization.

Outside collaborators (called **repository collaborators** if you use {% data variables.product.prodname_emus %}) only have access to a specific repository. These users are not full organization members, so they do not receive the base level of access for the organization, and they cannot automatically see internal repositories in the enterprise unless they are a member of another organization.

For more information, see {% ifversion ghec %}[AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/enabling-guest-collaborators) and{% endif %} [AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/adding-outside-collaborators-to-repositories-in-your-organization).
