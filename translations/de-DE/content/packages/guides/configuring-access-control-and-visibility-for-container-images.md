---
title: Configuring access control and visibility for container images
intro: 'Choose who has read, write, or admin access to your container image and the visibility of your container images on {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images
versions:
  free-pro-team: '*'
---

{% data reusables.package_registry.container-registry-beta %}

### Configuring access to container images for your personal account

If you have admin permissions to a user-account owned container image, you can assign read, write, or admin roles to other users. For more information about these permission roles, see "[Visibility and access permissions for container images](/packages/getting-started-with-github-container-registry/about-github-container-registry#visibility-and-access-permissions-for-container-images)."

{% data reusables.package_registry.package-settings-from-user-level %}
1. On the package settings page, click **Invite teams or people** and enter the name, username, or email of the person you want to give access. Teams cannot be given access to a container image owned by a user account. ![Container access invite button](/assets/images/help/package-registry/container-access-invite.png)
1. Next to the username or team name, use the "Role" drop-down menu to select a desired permission level. ![Container access options](/assets/images/help/package-registry/container-access-control-options.png)

The selected users will automatically be given access and don't need to accept an invitation first.

### Configuring access to container images for an organization

If you have admin permissions to an organization-owned container image, you can assign read, write, or admin roles to other users and teams. For more information about these permission roles, see "[Visibility and access permissions for container images](/packages/getting-started-with-github-container-registry/about-github-container-registry#visibility-and-access-permissions-for-container-images)."

If your package is private or internal and owned by an organization, then you can only give access to other organization members or teams.

For organization image containers, organizations admins must enable packages before you can set the visibility to public. For more information, see "[Enabling improved container support](/packages/getting-started-with-github-container-registry/enabling-improved-container-support)."

{% data reusables.package_registry.package-settings-from-org-level %}
1. On the package settings page, click **Invite teams or people** and enter the name, username, or email of the person you want to give access. You can also enter a team name from the organization to give all team members access. ![Container access invite button](/assets/images/help/package-registry/container-access-invite.png)
1. Next to the username or team name, use the "Role" drop-down menu to select a desired permission level. ![Container access options](/assets/images/help/package-registry/container-access-control-options.png)

The selected users or teams will automatically be given access and don't need to accept an invitation first.

### Inheriting access for a container image from a repository

To simplify package management through {% data variables.product.prodname_actions %} workflows, you can enable a container image to inherit the access permissions of a repository by default.

If you inherit the access permissions of the repository where your package's workflows are stored, then you can adjust access to your package through the repository's permissions.

Once a repository is synced, you can't access the package's granular access settings. To customize the package's permissions through the granular package access settings, you must remove the synced repository first.

{% data reusables.package_registry.package-settings-from-org-level %}
2. Under "Repository source", select **Inherit access from repository (recommended)**. ![Inherit repo access checkbox](/assets/images/help/package-registry/inherit-repo-access-for-package.png)

### Ensuring workflow access to your package

To ensure that a {% data variables.product.prodname_actions %} workflow has access to your package, you must give explicit access to the repository where the workflow is stored.

The specified repository does not need to be the repository where the source code for the package is kept. You can give multiple repositories workflow access to a package.

{% note %}

**Note:** Syncing your container image with a repository through the **Actions access** menu option is different than connecting your container to a repository. For more information about linking a repository to your container, see "[Connecting a repository to a container image](/packages/guides/connecting-a-repository-to-a-container-image)."

{% endnote %}

{% data reusables.package_registry.package-settings-from-org-level %}
1. In the left sidebar, click **Actions access**. !["Actions access" option in left menu](/assets/images/help/package-registry/organization-repo-access-for-a-package.png)
2. Click **Add repository** and search for the repository you want to add. !["Add repository" button](/assets/images/help/package-registry/add-repository-button.png)
3. Using the "role" drop-down menu, select the default access level that you'd like repository members to have to your container image. Outside collaborators will not be included. ![Permission access levels to give to repositories](/assets/images/help/package-registry/repository-permission-options-for-package-access-through-actions.png)

To further customize access to your container image, see "[Configuring access to container images for an organization](#configuring-access-to-container-images-for-an-organization)."

### Configuring visibility of container images for your personal account

When you first publish a package, the default visibility is private and only you can see the package. You can modify a private or public container image's access by changing the access settings.

A public package can be accessed anonymously without authentication. Once you make your package public, you cannot make your package private again.

{% data reusables.package_registry.package-settings-from-user-level %}
5. Under "Danger Zone", choose a visibility setting:
    - To make the container image visible to anyone, click **Make public**.
    {% warning %}

    **Warning:** Once you make a package public, you cannot make it private again.

    {% endwarning %}
    - To make the container image visible to a custom selection of people, click **Make private**. ![Container visibility options](/assets/images/help/package-registry/container-visibility-option.png)

### Container creation visibility for organization members

You can choose the visibility of containers that organization members can publish by default.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
4. On the left, click **Packages**.
6. Under "Container creation", choose whether you want to enable the creation of public, private, or internal container images.
    - To enable organization members to create public container images, click **Public**.
    - To enable organization members to create private container images that are only visible to other organization members, click **Private**. You can further customize the visibility of private container images.
    - **For {% data variables.product.prodname_ghe_cloud %} only:** To enable organization members to create internal container images that are only visible to other organization members, click **Internal**. ![Visibility options for container images published by organization members](/assets/images/help/package-registry/container-creation-org-settings.png)

### Configuring visibility of container images for an organization

When you first publish a package, the default visibility is private and only you can see the package. You can grant users or teams different access roles for your container image through the access settings.

A public package can be accessed anonymously without authentication. Once you make your package public, you cannot make your package private again.

For organization image containers, organizations admins must enable public packages before you can set the visibility to public. For more information, see "[Enabling improved container support](/packages/getting-started-with-github-container-registry/enabling-improved-container-support)."

{% data reusables.package_registry.package-settings-from-org-level %}
5. Under "Danger Zone", choose a visibility setting:
    - To make the container image visible to anyone, click **Make public**.
    {% warning %}

    **Warning:** Once you make a package public, you cannot make it private again.

    {% endwarning %}
    - To make the container image visible to a custom selection of people, click **Make private**. ![Container visibility options](/assets/images/help/package-registry/container-visibility-option.png)
