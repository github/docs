---
title: Configuring a package's access control and visibility
intro: 'Choose who has read, write, or admin access to your container image and the visibility of your container images on {% data variables.product.prodname_dotcom %}.'
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

Packages with granular permissions are scoped to a personal user or organization account. You can change the access control and visibility of a package separately from the repository that it is connected (or linked) to.

Currently, you can only use granular permissions with the {% data variables.product.prodname_ghcr_and_npm_registry %}. Granular permissions are not supported in our other package registries, such as the RubyGems registry.{% ifversion docker-ghcr-enterprise-migration %} For more information about migration to the {% data variables.product.prodname_container_registry %}, see "[Migrating to the {% data variables.product.prodname_container_registry %} from the Docker registry](/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry)."{% endif %}

For more information about permissions for repository-scoped packages, packages-related scopes for PATs, or managing permissions for your actions workflows, see "[About permissions for GitHub Packages](/packages/learn-github-packages/about-permissions-for-github-packages)."

## Visibility and access permissions for container images

{% data reusables.package_registry.visibility-and-access-permissions %}

## Configuring access to container images for your personal account

If you have admin permissions to a container image that's owned by a personal account, you can assign read, write, or admin roles to other users. For more information about these permission roles, see "[Visibility and access permissions for container images](#visibility-and-access-permissions-for-container-images)."

If your package is private or internal and owned by an organization, then you can only give access to other organization members or teams.

{% data reusables.package_registry.package-settings-option %}
1. On the package settings page, click **Invite teams or people** and enter the name, username, or email of the person you want to give access. Teams cannot be given access to a container image owned by a personal account.
  ![Container access invite button](/assets/images/help/package-registry/container-access-invite.png)
1. Next to the username or team name, use the "Role" drop-down menu to select a desired permission level.
  ![Container access options](/assets/images/help/package-registry/container-access-control-options.png)

The selected users will automatically be given access and don't need to accept an invitation first.

## Configuring access to container images for an organization

If you have admin permissions to an organization-owned container image, you can assign read, write, or admin roles to other users and teams. For more information about these permission roles, see "[Visibility and access permissions for container images](#visibility-and-access-permissions-for-container-images)."

If your package is private or internal and owned by an organization, then you can only give access to other organization members or teams.

{% data reusables.package_registry.package-settings-from-org-level %}
{% data reusables.package_registry.package-settings-option %}
1. On the package settings page, click **Invite teams or people** and enter the name, username, or email of the person you want to give access. You can also enter a team name from the organization to give all team members access.
  ![Container access invite button](/assets/images/help/package-registry/container-access-invite.png)
1. Next to the username or team name, use the "Role" drop-down menu to select a desired permission level.
  ![Container access options](/assets/images/help/package-registry/container-access-control-options.png)

The selected users or teams will automatically be given access and don't need to accept an invitation first.

## Inheriting access for a container image from a repository

To simplify package management through {% data variables.product.prodname_actions %} workflows, you can enable a container image to inherit the access permissions of a repository by default.

If you inherit the access permissions of the repository where your package's workflows are stored, then you can adjust access to your package through the repository's permissions.

Once a repository is synced, you can't access the package's granular access settings. To customize the package's permissions through the granular package access settings, you must remove the synced repository first.

{% data reusables.package_registry.package-settings-from-org-level %}
{% data reusables.package_registry.package-settings-option %}
2. Under "Repository source", select **Inherit access from repository (recommended)**.
  ![Inherit repo access checkbox](/assets/images/help/package-registry/inherit-repo-access-for-package.png)

## Ensuring workflow access to your package

To ensure that a {% data variables.product.prodname_actions %} workflow has access to your package, you must give explicit access to the repository where the workflow is stored.

The specified repository does not need to be the repository where the source code for the package is kept. You can give multiple repositories workflow access to a package.

{% note %}

**Note:** Syncing your container image with a repository through the **Actions access** menu option is different than connecting your container to a repository. For more information about linking a repository to your container, see "[Connecting a repository to a package](/packages/learn-github-packages/connecting-a-repository-to-a-package)."

{% endnote %}

### {% data variables.product.prodname_actions %} access for user-account-owned container images 

{% data reusables.package_registry.package-settings-option %}
1. In the left sidebar, click **Actions access**.
  !["Actions access" option in left menu](/assets/images/help/package-registry/organization-repo-access-for-a-package.png)
2. To ensure your workflow has access to your container package, you must add the repository where the workflow is stored. Click **Add repository** and search for the repository you want to add.
   !["Add repository" button](/assets/images/help/package-registry/add-repository-button.png)
3. Using the "role" drop-down menu, select the default access level that you'd like the repository to have to your container image.
  ![Permission access levels to give to repositories](/assets/images/help/package-registry/repository-permission-options-for-package-access-through-actions.png)

To further customize access to your container image, see "[Configuring access to container images for your personal account](#configuring-access-to-container-images-for-your-personal-account)."

### {% data variables.product.prodname_actions %} access for organization-owned container images 

{% data reusables.package_registry.package-settings-from-org-level %}
{% data reusables.package_registry.package-settings-option %}
1. In the left sidebar, click **Actions access**.
  !["Actions access" option in left menu](/assets/images/help/package-registry/organization-repo-access-for-a-package.png)
2. Click **Add repository** and search for the repository you want to add.
   !["Add repository" button](/assets/images/help/package-registry/add-repository-button.png)
3. Using the "role" drop-down menu, select the default access level that you'd like repository members to have to your container image. Outside collaborators will not be included.
  ![Permission access levels to give to repositories](/assets/images/help/package-registry/repository-permission-options-for-package-access-through-actions.png)

To further customize access to your container image, see "[Configuring access to container images for an organization](#configuring-access-to-container-images-for-an-organization)."

{% ifversion fpt or ghec %}
## Ensuring {% data variables.product.prodname_codespaces %} access to your package

By default, a codespace can seamlessly access certain packages in the {% data variables.product.prodname_ghcr_and_npm_registry %}, such as those published in the same repository with the **Inherit access** option selected. For more information on which access is automatically configured, see "[Allowing your codespace to access a private image registry](/codespaces/codespaces-reference/allowing-your-codespace-to-access-a-private-image-registry#accessing-images-stored-in-container-registry-and-npm-registry)."

Otherwise, to ensure that a codespace has access to your package, you must grant access to the repository where the codespace is being launched.

The specified repository does not need to be the repository where the source code for the package is kept. You can give codespaces in multiple repositories access to a package.

Once you've selected the package you're interested in sharing with codespaces in a repository, you can grant that repo access.

1. In the right sidebar, click **Package settings**.

   !["Package settings" option in right menu](/assets/images/help/package-registry/package-settings.png)
   
2. Under "Manage Codespaces access", click **Add repository**.

   !["Add repository" button](/assets/images/help/package-registry/manage-codespaces-access-blank.png)

3. Search for the repository you want to add.

   !["Add repository" button](/assets/images/help/package-registry/manage-codespaces-access-search.png)
   
4. Repeat for any additional repositories you would like to allow access.

5. If the codespaces for a repository no longer need access to an image, you can remove access.

   !["Remove repository" button](/assets/images/help/package-registry/manage-codespaces-access-item.png)

{% endif %}
## Configuring visibility of container images for your personal account

When you first publish a package, the default visibility is private and only you can see the package. You can modify a private or public container image's access by changing the access settings.

A public package can be accessed anonymously without authentication. Once you make your package public, you cannot make your package private again.

{% data reusables.package_registry.package-settings-option %}
5. Under "Danger Zone", choose a visibility setting:
    - To make the container image visible to anyone, click **Make public**.
    {% warning %}

    **Warning:** Once you make a package public, you cannot make it private again.

    {% endwarning %}
    - To make the container image visible to a custom selection of people, click **Make private**.
  ![Container visibility options](/assets/images/help/package-registry/container-visibility-option.png)

## Container creation visibility for organization members

You can choose the visibility of containers that organization members can publish by default.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
4. On the left, click **Packages**.
6. Under "Container creation", choose whether you want to enable the creation of public, private, or internal container images.
    - To enable organization members to create public container images, click **Public**.
    - To enable organization members to create private container images that are only visible to other organization members, click **Private**. You can further customize the visibility of private container images.
    - To enable organization members to create internal container images that are visible to all organization members, click **Internal**. If the organization belongs to an enterprise, the container images will be visible to all enterprise members.
    ![Visibility options for container images published by organization members](/assets/images/help/package-registry/container-creation-org-settings.png)

## Configuring visibility of container images for an organization

When you first publish a package, the default visibility is private and only you can see the package. You can grant users or teams different access roles for your container image through the access settings.

A public package can be accessed anonymously without authentication. Once you make your package public, you cannot make your package private again.

{% data reusables.package_registry.package-settings-from-org-level %}
{% data reusables.package_registry.package-settings-option %}
5. Under "Danger Zone", choose a visibility setting:
    - To make the container image visible to anyone, click **Make public**.
    {% warning %}

    **Warning:** Once you make a package public, you cannot make it private again.

    {% endwarning %}
    - To make the container image visible to a custom selection of people, click **Make private**.
  ![Container visibility options](/assets/images/help/package-registry/container-visibility-option.png)
