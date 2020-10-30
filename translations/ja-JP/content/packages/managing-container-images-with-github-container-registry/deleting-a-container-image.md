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



### 予約されているパッケージのバージョンと名前

{% data reusables.package_registry.package-immutability %}

### Deleting a version of a user-owned container image on {% data variables.product.prodname_dotcom %}

{% data reusables.package_registry.package-settings-from-user-level %}
5. On the left, click **Manage versions**.
5. 削除したいバージョンの右で**Delete（削除）**をクリックしてください。 ![パッケージの削除ボタン](/assets/images/help/package-registry/delete-package-button.png)
6. 削除を確認するために、パッケージ名を入力して**I understand the consequences, delete this version（生じることを理解したので、このバージョンを削除してください）**をクリックしてください。 ![パッケージの削除の確認ボタン](/assets/images/help/package-registry/confirm-package-deletion.png)

### Deleting a version of an organization-owned container image on {% data variables.product.prodname_dotcom %}

{% data reusables.package_registry.package-settings-from-org-level %}
5. On the left, click **Manage versions**.
5. 削除したいバージョンの右で**Delete（削除）**をクリックしてください。 ![パッケージの削除ボタン](/assets/images/help/package-registry/delete-package-button.png)
6. 削除を確認するために、パッケージ名を入力して**I understand the consequences, delete this version（生じることを理解したので、このバージョンを削除してください）**をクリックしてください。 ![パッケージの削除の確認ボタン](/assets/images/help/package-registry/confirm-package-deletion.png)
