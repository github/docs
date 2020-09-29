---
title: About GitHub Container Registry
intro: 'The {% data variables.product.prodname_github_container_registry %} allows you to seamlessly host and manage Docker container images in your organization or personal user account on {% data variables.product.prodname_dotcom %}. {% data variables.product.prodname_github_container_registry %} allows you to configure who can manage and access packages using fine-grained permissions.'
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
---

{% note %}

**Note:** {% data variables.product.prodname_github_container_registry %} is currently in public beta and subject to change. Currently, {% data variables.product.prodname_github_container_registry %} only supports Docker image formats. During the beta, storage and bandwidth is free.

{% endnote %}


{% data reusables.package_registry.container-registry-feature-highlights %}

To share context about your package's use, you can link a repository to your container image on {% data variables.product.prodname_dotcom %}. For more information, see "[Connecting a repository to a container image](/packages/managing-container-images-with-github-container-registry/connecting-a-repository-to-a-container-image)."

### Formatos compatibles

The {% data variables.product.prodname_container_registry %} currently only supports Docker images.


### Visibility and access permissions for container images

If you have admin permissions to a container image, you can set the container image to private or public. Public images allow anonymous access and can be pulled without authentication or signing in via the CLI.

As an admin, you can also grant access permissions for a container image that are separate from the permissions you've set at the organization and repository levels.

For container images published and owned by a user account, you can give any person an access role. For container images published and owned by an organization, you can give any person or team in the organization an access role.

| Permission role | Access description                                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Lectura         | Can download package. <br> Can read package metadata.                                                                                      |
| Escritura       | Can upload and download this package. <br> Can read and write package metadata.                                                            |
| Admin           | Can upload, download, delete, and manage this package. <br> Can read and write package metadata. <br> Can grant package permissions. |

For more information, see "[Configuring access control and visibility for container images](/packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images)."

### Acerca de la facturación para {% data variables.product.prodname_github_container_registry %}

{% data reusables.package_registry.billing-for-container-registry %}

### Contactar con soporte técnico

If you have feedback or feature requests for {% data variables.product.prodname_github_container_registry %}, use the [feedback form](https://support.github.com/contact/feedback?contact%5Bcategory%5D=packages).

Contacta el {% data variables.contact.github_support %} sobre {% data variables.product.prodname_github_container_registry %} usando [nuestro formulario de contacto](https://support.github.com/contact?form%5Bsubject%5D=Re:%20GitHub%20Packages) si:

* Encuentras algo que contradice la documentación.
* Encuentras errores vagos o poco claros.
* Your published package contains sensitive data, such as GDPR violations, API Keys, or personally-identifying information.
