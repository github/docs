---
title: Deleting a container image
intro: 'You can delete a version of a private container image using GraphQL or on {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
---

{% data reusables.package_registry.container-registry-beta %}

### About package deletion

You can remove an entire container image or a specific version on {% data variables.product.prodname_dotcom %}. To delete a container image, you must use the UI. Using GraphQL to delete a container image is not supported at this time.

To delete a container image, you must have admin permissions to the container image.

When deleting public packages, be aware that you may break projects that depend on your package.



### 保留的包版本和名称

{% data reusables.package_registry.package-immutability %}

### Deleting a version of a user-owned container image on {% data variables.product.prodname_dotcom %}

{% data reusables.package_registry.package-settings-from-user-level %}
5. On the left, click **Manage versions**.
5. 在要删除的版本的右侧，单击 **Delete（删除）**。 ![删除包按钮](/assets/images/help/package-registry/delete-package-button.png)
6. 要确认删除，请输入包名称，然后单击 **I understand the consequences, delete this version（我明白后果，删除此版本）**。 ![确认包删除按钮](/assets/images/help/package-registry/confirm-package-deletion.png)

### Deleting a version of an organization-owned container image on {% data variables.product.prodname_dotcom %}

{% data reusables.package_registry.package-settings-from-org-level %}
5. On the left, click **Manage versions**.
5. 在要删除的版本的右侧，单击 **Delete（删除）**。 ![删除包按钮](/assets/images/help/package-registry/delete-package-button.png)
6. 要确认删除，请输入包名称，然后单击 **I understand the consequences, delete this version（我明白后果，删除此版本）**。 ![确认包删除按钮](/assets/images/help/package-registry/confirm-package-deletion.png)
