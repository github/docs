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

### 支持的格式

The {% data variables.product.prodname_container_registry %} currently only supports Docker images.


### Visibility and access permissions for container images

If you have admin permissions to a container image, you can set the container image to private or public. Public images allow anonymous access and can be pulled without authentication or signing in via the CLI.

As an admin, you can also grant access permissions for a container image that are separate from the permissions you've set at the organization and repository levels.

For container images published and owned by a user account, you can give any person an access role. For container images published and owned by an organization, you can give any person or team in the organization an access role.

| Permission role | Access description                                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 读取              | Can download package. <br> Can read package metadata.                                                                                      |
| 写入              | Can upload and download this package. <br> Can read and write package metadata.                                                            |
| 管理员             | Can upload, download, delete, and manage this package. <br> Can read and write package metadata. <br> Can grant package permissions. |

For more information, see "[Configuring access control and visibility for container images](/packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images)."

### 关于 {% data variables.product.prodname_github_container_registry %} 的计费

{% data reusables.package_registry.billing-for-container-registry %}

### 联系支持

If you have feedback or feature requests for {% data variables.product.prodname_github_container_registry %}, use the [feedback form](https://support.github.com/contact/feedback?contact%5Bcategory%5D=packages).

如果在 {% data variables.product.prodname_github_container_registry %} 方面遇到以下问题，请使用[我们的联系表](https://support.github.com/contact?form%5Bsubject%5D=Re:%20GitHub%20Packages)联系 {% data variables.contact.github_support %}：

* 遇到任何与文档相矛盾的事情.
* 遇到模糊或不清楚的错误.
* Your published package contains sensitive data, such as GDPR violations, API Keys, or personally-identifying information.
