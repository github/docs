---
title: コンテナイメージを削除する
intro: 'You can delete a specific version or all versions of a private or public container image on {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/managing-container-images-with-github-container-registry/deleting-a-container-image
versions:
  free-pro-team: '*'
---

{% data reusables.package_registry.container-registry-beta %}

### パッケージの削除について

{% data variables.product.prodname_dotcom %} 上のコンテナイメージ全体または特定のバージョンを削除できます。 コンテナイメージを削除するには、UI を使用する必要があります。 GraphQL を使用したコンテナイメージの削除は、現時点ではサポートされていません。

コンテナイメージを削除するには、そのコンテナイメージの管理権限が必要です。

パブリックパッケージを削除する場合、そのパッケージに依存するプロジェクトを破壊する可能性があることに注意してください。

### {% data variables.product.prodname_dotcom %} 上でユーザが所持するコンテナイメージのバージョンを削除する

To only delete specific versions of a container image, you can use these steps. To delete an entire package, see "[Deleting all versions of a user-owned container image on {% data variables.product.prodname_dotcom %}](#deleting-all-versions-of-a-user-owned-container-image-on-github)."

{% data reusables.package_registry.package-settings-from-user-level %}
5. 左にある [**Manage versions**] をクリックします。
6. Optionally, to ensure you're seeing all of your package versions, use the "Type" drop down menu and select **All**. ![Package version type drop down menu showing option to list all versions](/assets/images/help/package-registry/make-all-container-versions-visible.png)
5. To the right of the version you want to delete, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} and select **Delete version**. ![Delete package version button](/assets/images/help/package-registry/delete-container-package-version.png)
6. 削除を確認するために、パッケージ名を入力して**I understand the consequences, delete this version（生じることを理解したので、このバージョンを削除してください）**をクリックしてください。 ![パッケージの削除の確認ボタン](/assets/images/help/package-registry/confirm-container-package-version-deletion.png)

### {% data variables.product.prodname_dotcom %} 上で Organization が所持するコンテナイメージのバージョンを削除する

To only delete specific versions of a container image that you have admin , you can use these steps. To delete an entire package, see "[Deleting all versions of an organization-owned container image on {% data variables.product.prodname_dotcom %}](#deleting-all-versions-of-an-organization-owned-container-image-on-github)."

{% data reusables.package_registry.package-settings-from-org-level %}
5. 左にある [**Manage versions**] をクリックします。
6. Optionally, to ensure you're seeing all of your package versions, use the "Type" drop down menu and select **All**. ![Package version type drop down menu showing option to list all versions](/assets/images/help/package-registry/make-all-container-versions-visible.png)
5. To the right of the version you want to delete, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} and select **Delete version**. ![Delete package version button](/assets/images/help/package-registry/delete-container-package-version.png)
6. 削除を確認するために、パッケージ名を入力して**I understand the consequences, delete this version（生じることを理解したので、このバージョンを削除してください）**をクリックしてください。 ![Confirm package version deletion button](/assets/images/help/package-registry/confirm-container-package-version-deletion.png)

### Deleting all versions of a user-owned container image on {% data variables.product.prodname_dotcom %}

{% data reusables.package_registry.package-settings-from-user-level %}
5. On the left, click **Options**. !["Options" menu option](/assets/images/help/package-registry/options-for-container-settings.png)
6. Under "Danger zone", click **Delete this package**. ![Delete package version button](/assets/images/help/package-registry/delete-container-package-button.png)
6. To confirm deletion, type the package name and click **I understand the consequences, delete this package**. ![Confirm package version deletion button](/assets/images/help/package-registry/confirm-container-package-deletion.png)

### Deleting all versions of an organization-owned container image on {% data variables.product.prodname_dotcom %}

{% data reusables.package_registry.package-settings-from-org-level %}
5. On the left, click **Options**. !["Options" menu option](/assets/images/help/package-registry/options-for-container-settings.png)
6. Under "Danger zone", click **Delete this package**. ![パッケージの削除ボタン](/assets/images/help/package-registry/delete-container-package-button.png)
6. To confirm deletion, type the package name and click **I understand the consequences, delete this package**. ![パッケージの削除の確認ボタン](/assets/images/help/package-registry/confirm-container-package-deletion.png)
