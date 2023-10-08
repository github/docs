---
title: Configuring a package's access control and visibility
intro: 'Choose who has read, write, or admin access to your package and the visibility of your packages on {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images
  - /packages/guides/configuring-access-control-and-visibility-for-container-images
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
shortTitle: Access control & visibility
---
{% data reusables.package_registry.container-registry-ghes-beta %}

{% ifversion packages-registries-v2 %}

A package can inherit its visibility and access permissions from a repository, or, for registries that support granular permissions, you can set the visibility and permissions of the package separately from a repository.

For the list of registries that support granular permissions, and for more information about permissions for packages, packages-related scopes for PATs, or managing permissions for your {% data variables.product.prodname_actions %} workflows, see "[AUTOTITLE](/packages/learn-github-packages/about-permissions-for-github-packages)."

{% else %}
A package inherits the permissions and visibility of the repository in which the package is published.

For more information about permissions for packages, packages-related scopes for PATs, or managing permissions for your {% data variables.product.prodname_actions %} workflows, see "[AUTOTITLE](/packages/learn-github-packages/about-permissions-for-github-packages)."

{% endif %}

{% ifversion packages-registries-v2 %}

## About inheritance of access permissions

In registries that support granular permissions, packages are scoped to a personal account or organization. In these registries, you can publish a package without linking the package to a repository, then determine who can access the package by setting access permissions and visibility in the package's settings.

{% ifversion packages-inherit-permissions %}By default, if you publish a package that is linked to a repository, the package automatically inherits the access permissions (but not the visibility) of the linked repository. For example, a user who has read access to the linked repository will also have read access to the package. When a package automatically inherits access permissions, {% data variables.product.prodname_actions %} workflows in the linked repository also automatically get access to the package.

A package only inherits the access permissions of a linked repository automatically if you link the repository to the package before you publish the package, such as by adding the `org.opencontainers.image.source` Docker label to a container image. If you connect a published package to a repository from the package's settings page, the package will retain its existing access permissions, and will not inherit the access permissions of the repository unless you explicitly select this option. Additionally, organizations can disable automatic inheritance of access permissions for all new packages scoped to their organization. For more information, see "[Disabling automatic inheritance of access permissions in an organization](#disabling-automatic-inheritance-of-access-permissions-in-an-organization)" below.

When a package inherits permissions from a repository, to grant or remove access to your package, you must configure the permissions settings of the linked repository. If you want to set a package's access settings separately from the repository linked to the package, you must remove the inherited permissions from the package{% else %}You can choose to have a package inherit the access permissions of a linked repository{% endif %}. For more information, see "[Selecting whether a package inherits permissions from a repository](#selecting-whether-a-package-inherits-permissions-from-a-repository)" below.

If you publish a package in a registry that only supports repository-scoped permissions, the package is always linked to a repository, and always inherits the permissions of the linked repository.

## About setting visibility and access permissions for packages

{% data reusables.package_registry.visibility-and-access-permissions %}

{% endif %}

## Configuring access to packages for your personal account

If you have admin permissions to a package that's scoped to a personal account, you can assign read, write, or admin roles to other users. For more information about these permission roles, see "[Visibility and access permissions for packages](#visibility-and-access-permissions-for-packages)."

If your package is private or internal and scoped to an organization, then you can only give access to other organization members or teams.

{% data reusables.package_registry.package-settings-option %}
{% data reusables.package_registry.package-settings-manage-access-people %} Teams cannot be given access to a package that is scoped to a personal account.
{% data reusables.package_registry.package-settings-user-access %}

The selected users will automatically be given access and don't need to accept an invitation first.

## Configuring access to packages for an organization

If you have admin permissions to a package that is scoped to an organization, you can assign read, write, or admin roles to other users and teams. For more information about these permission roles, see "[Visibility and access permissions for packages](#visibility-and-access-permissions-for-packages)."

If your package is private or internal and scoped to an organization, then you can only give access to other organization members or teams.

{% data reusables.package_registry.package-settings-from-org-level %}
{% data reusables.package_registry.package-settings-option %}
{% data reusables.package_registry.package-settings-manage-access-people %} You can also enter a team name from the organization to give all team members access.
{% data reusables.package_registry.package-settings-user-access %}

The selected users or teams will automatically be given access and don't need to accept an invitation first.

{% ifversion packages-registries-v2 %}

## Selecting whether a package inherits permissions from a repository

{% ifversion packages-inherit-permissions %}By default, if you publish a package that is linked to a repository, the package inherits{% else %}If you link a package to a repository, you can choose whether or not the package inherits{% endif %} the access permissions of the linked repository. We recommend you let packages inherit their permissions from a repository, because this simplifies the process of managing access to a package.

When a package inherits permissions from a repository, to grant or remove access to your package, you must configure the permissions of the linked repository.

{% ifversion packages-inherit-permissions %}If you want to configure a package's access settings on a granular level, separately from the linked repository, you must remove the inherited permissions from the package.{% endif %}

{% note %}

**Note:** If you change how a package gets its access permissions, any existing permissions for the package are overwritten.

{% endnote %}

### Selecting the inheritance setting for packages scoped to your personal account

{% data reusables.package_registry.package-settings-from-user-level %}
{% data reusables.package_registry.package-settings-option %}
{% data reusables.package_registry.disable-auto-inheritance-step %}

### Selecting the inheritance setting for packages scoped to an organization

{% ifversion packages-inherit-permissions %}
{% tip %}

**Tip:** If you're the owner of an organization, you can prevent all new packages scoped to your organization from automatically inheriting permissions from a linked repository. For more information, see "[Disabling automatic inheritance of access permissions in an organization](#disabling-automatic-inheritance-of-access-permissions-in-an-organization)" below.

{% endtip %}
{% endif %}

{% data reusables.package_registry.package-settings-from-org-level %}
{% data reusables.package_registry.package-settings-option %}
{% data reusables.package_registry.disable-auto-inheritance-step %}

{% endif %}

{% ifversion packages-inherit-permissions %}

## Disabling automatic inheritance of access permissions in an organization

By default, if you publish a package that is linked to a repository, the package automatically inherits the access permissions of the linked repository. As an organization owner, you can disable automatic inheritance for all packages scoped to your organization.

If you disable automatic inheritance of access permissions, new packages scoped to your organization will not automatically inherit the permissions of a linked repository. However, anyone with admin permissions to a package in your organization will be able to enable or disable inheritance of permissions for that package.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the sidebar, in the "Code, planning, and automation" section, click **{% octicon "package" aria-hidden="true" %} Packages**.
1. Under "Default Package Settings", deselect **Inherit access from source repository**.
1. Click **Save**.

{% endif %}

{% ifversion packages-registries-v2 %}

## Ensuring workflow access to your package

For packages scoped to a personal account or an organization, to ensure that a {% data variables.product.prodname_actions %} workflow has access to your package, you must give explicit access to the repository where the workflow is stored.

The specified repository does not need to be the repository where the source code for the package is kept. You can give multiple repositories workflow access to a package.

{% ifversion packages-inherit-permissions %}
If you publish a package that is linked to a repository, {% data variables.product.prodname_actions %} workflows in the linked repository automatically get access to the package, unless your organization has disabled the automatic inheritance of access permissions. For more information, see "[About inheritance of access permissions and visibility](#about-inheritance-of-access-permissions-and-visibility)" above.
{% endif %}

{% note %}

**Notes:**
- Syncing your package with a repository {% data variables.package_registry.package-settings-actions-access-menu %} is different than connecting your package to a repository. For more information about linking a repository to your package, see "[AUTOTITLE](/packages/learn-github-packages/connecting-a-repository-to-a-package)."
- You can choose to limit permissions to workflow jobs usings the `permissions` key and `packages` scope. For more information, see "[AUTOTITLE](/actions/using-jobs/assigning-permissions-to-jobs)."

{% endnote %}

### {% data variables.product.prodname_actions %} access for packages scoped to personal accounts

{% data reusables.package_registry.package-settings-option %}
{% data reusables.package_registry.package-settings-actions-access %}
1. To ensure your workflow has access to your package, you must add the repository where the workflow is stored. {% data reusables.package_registry.package-settings-add-repo %}
{% data reusables.package_registry.package-settings-actions-access-role-repo %}

To further customize access to your package, see "[Configuring access to packages for your personal account](#configuring-access-to-packages-for-your-personal-account)."

### {% data variables.product.prodname_actions %} access for packages scoped to organizations

{% data reusables.package_registry.package-settings-from-org-level %}
{% data reusables.package_registry.package-settings-option %}
{% data reusables.package_registry.package-settings-actions-access %}
1. {% data reusables.package_registry.package-settings-add-repo %}
{% data reusables.package_registry.package-settings-actions-access-role-repo %}

To further customize access to your package, see "[Configuring access to packages for an organization](#configuring-access-to-packages-for-an-organization)."
{% endif %}

{% ifversion fpt or ghec %}

## Ensuring {% data variables.product.prodname_github_codespaces %} access to your package

By default, a codespace can seamlessly access certain packages in registries that support granular permissions, such as packages published in the same repository with the **Inherit access** option selected. For the list of {% data variables.product.prodname_registry %} registries that support granular permissions and seamless {% data variables.product.prodname_github_codespaces %} access, see "[AUTOTITLE](/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."

Otherwise, to ensure that a codespace has access to your package, you must grant access to the repository where the codespace is being launched.

The specified repository does not need to be the repository where the source code for the package is kept. You can give codespaces in multiple repositories access to a package.

Once you've selected the package you're interested in sharing with codespaces in a repository, you can grant that repo access.

{% data reusables.package_registry.package-settings-option %}

1. Under "Manage Codespaces access", click **Add repository**.

   ![Screenshot of the "Manage Codespaces access" section of the package settings page. The "Add repository" button is highlighted with an orange outline.](/assets/images/help/package-registry/manage-codespaces-access-blank.png)

1. Search for the repository you want to add.

1. Repeat for any additional repositories you would like to allow access.

1. If the codespaces for a repository no longer need access to a package, you can remove access. Click **{% octicon "trash" aria-label="remove access to repository from this package" %}**.

   ![Screenshot of the "Manage Codespaces access" section of the package settings page. The trash icon is highlighted with an orange outline.](/assets/images/help/package-registry/manage-codespaces-access-item.png)

{% endif %}

## Configuring visibility of packages for your personal account

When you first publish a package that is scoped to your personal account, the default visibility is private and only you can see the package. You can modify a private or public  package's access by changing the access settings. Once you make your package public, you cannot make your package private again.

{% data reusables.package_registry.package-settings-option %}
1. At the bottom of the page, under "Danger Zone", click **Change visibility**.
1. Select a visibility setting:
   - To make the package visible to anyone, select **Public**.
     {% warning %}

     **Warning:** Once you make a package public, you cannot make it private again.

     {% endwarning %}
   - To make the package visible to a custom selection of people, select **Private**.
1. To confirm, type the name of the package, then click **I understand the consequences, change package visibility**.

## Package creation visibility for organization members

For registries that support granular permissions, you can choose the visibility of packages that organization members can publish by default. For the list of these registries, see "[AUTOTITLE](/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. On the left, click **Packages**.
1. Under "Package Creation", choose whether you want to enable the creation of public, private, or internal packages.
    - To enable organization members to create public packages, click **Public**.
    - To enable organization members to create private packages that are only visible to other organization members, click **Private**. You can further customize the visibility of private packages.
    - To enable organization members to create internal packages that are visible to all organization members, click **Internal**. If the organization belongs to an enterprise, the packages will be visible to all enterprise members.

## Configuring visibility of packages for an organization

When you first publish a package, the default visibility is private and only you can see the package. You can grant users or teams different access roles for your package through the access settings. Once you make your package public, you cannot make your package private again.

{% data reusables.package_registry.package-settings-from-org-level %}
{% data reusables.package_registry.package-settings-option %}
1. At the bottom of the page, under "Danger Zone", click **Change visibility** and choose a visibility setting:
    - To make the package visible to anyone, click **Public**.

      {% warning %}

      **Warning:** Once you make a package public, you cannot make it private again.

      {% endwarning %}

    - To make the package visible to a custom selection of people in your organization, click **Private**.{% ifversion not fpt %}
    - To make the package visible to all organization members, click **Internal**. If the organization belongs to an enterprise, the packages will be visible to all enterprise members.{% endif %}
