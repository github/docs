---
title: Excluir uma imagem de contêiner
intro: 'You can delete a specific version or all versions of a private or public container image on {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/managing-container-images-with-github-container-registry/deleting-a-container-image
versions:
  free-pro-team: '*'
---

{% data reusables.package_registry.container-registry-beta %}

### Sobre a exclusão de pacotes

Você pode remover uma imagem de contêiner inteira ou uma versão específica em {% data variables.product.prodname_dotcom %}. Para excluir uma imagem de contêiner, você deve usar a interface do usuário. O uso do GraphQL para excluir uma imagem de contêiner não é compatível no momento.

Para excluir uma imagem do contêiner, você deve ter permissões de administrador para a imagem do contêiner.

Ao excluir pacotes públicos, esteja ciente de que você pode quebrar projetos que dependem do seu pacote.

### Excluir uma versão de uma imagem de contêiner de usuário em {% data variables.product.prodname_dotcom %}

To only delete specific versions of a container image, you can use these steps. To delete an entire package, see "[Deleting all versions of a user-owned container image on {% data variables.product.prodname_dotcom %}](#deleting-all-versions-of-a-user-owned-container-image-on-github)."

{% data reusables.package_registry.package-settings-from-user-level %}
5. À esquerda, clique em **Gerenciar versões**.
6. Optionally, to ensure you're seeing all of your package versions, use the "Type" drop down menu and select **All**. ![Package version type drop down menu showing option to list all versions](/assets/images/help/package-registry/make-all-container-versions-visible.png)
5. To the right of the version you want to delete, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} and select **Delete version**. ![Delete package version button](/assets/images/help/package-registry/delete-container-package-version.png)
6. Para confirmar a exclusão, digite o nome do pacote e clique em **Eu entendo as consequências. Exclua esta versão**. ![Botão de confirmar exclusão de pacote](/assets/images/help/package-registry/confirm-container-package-version-deletion.png)

### Excluir uma versão de uma imagem de contêiner de uma organização no {% data variables.product.prodname_dotcom %}

To only delete specific versions of a container image that you have admin , you can use these steps. To delete an entire package, see "[Deleting all versions of an organization-owned container image on {% data variables.product.prodname_dotcom %}](#deleting-all-versions-of-an-organization-owned-container-image-on-github)."

{% data reusables.package_registry.package-settings-from-org-level %}
5. À esquerda, clique em **Gerenciar versões**.
6. Optionally, to ensure you're seeing all of your package versions, use the "Type" drop down menu and select **All**. ![Package version type drop down menu showing option to list all versions](/assets/images/help/package-registry/make-all-container-versions-visible.png)
5. To the right of the version you want to delete, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} and select **Delete version**. ![Delete package version button](/assets/images/help/package-registry/delete-container-package-version.png)
6. Para confirmar a exclusão, digite o nome do pacote e clique em **Eu entendo as consequências. Exclua esta versão**. ![Confirm package version deletion button](/assets/images/help/package-registry/confirm-container-package-version-deletion.png)

### Deleting all versions of a user-owned container image on {% data variables.product.prodname_dotcom %}

{% data reusables.package_registry.package-settings-from-user-level %}
5. On the left, click **Options**. !["Options" menu option](/assets/images/help/package-registry/options-for-container-settings.png)
6. Under "Danger zone", click **Delete this package**. ![Delete package version button](/assets/images/help/package-registry/delete-container-package-button.png)
6. To confirm deletion, type the package name and click **I understand the consequences, delete this package**. ![Confirm package version deletion button](/assets/images/help/package-registry/confirm-container-package-deletion.png)

### Deleting all versions of an organization-owned container image on {% data variables.product.prodname_dotcom %}

{% data reusables.package_registry.package-settings-from-org-level %}
5. On the left, click **Options**. !["Options" menu option](/assets/images/help/package-registry/options-for-container-settings.png)
6. Under "Danger zone", click **Delete this package**. ![Botão de excluir pacote](/assets/images/help/package-registry/delete-container-package-button.png)
6. To confirm deletion, type the package name and click **I understand the consequences, delete this package**. ![Botão de confirmar exclusão de pacote](/assets/images/help/package-registry/confirm-container-package-deletion.png)
