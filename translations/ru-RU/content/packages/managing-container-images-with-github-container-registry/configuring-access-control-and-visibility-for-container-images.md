---
title: Configuring access control and visibility for container images
intro: 'Choose who has read, write, or admin access to your container image and the visibility of your container images on {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.packages %}'
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

If your package is owned by an organization and private, then you can only give access to other organization members or teams.

For organization image containers, organizations admins must enable packages before you can set the visibility to public. For more information, see "[Enabling improved container support](/packages/getting-started-with-github-container-registry/enabling-improved-container-support)."

{% data reusables.package_registry.package-settings-from-org-level %}
1. On the package settings page, click **Invite teams or people** and enter the name, username, or email of the person you want to give access. You can also enter a team name from the organization to give all team members access. ![Container access invite button](/assets/images/help/package-registry/container-access-invite.png)
1. Next to the username or team name, use the "Role" drop-down menu to select a desired permission level. ![Container access options](/assets/images/help/package-registry/container-access-control-options.png)

The selected users or teams will automatically be given access and don't need to accept an invitation first.

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
