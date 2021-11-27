---
title: Excluir uma imagem de contêiner
intro: 'É possível excluir uma versão específica ou todas as versões de uma imagem de contêiner privado ou público em {% data variables.product.prodname_dotcom %}.'
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

Para excluir apenas as versões específicas de uma imagem de contêiner, você pode usar estas etapas. Para excluir um pacote inteiro, consulte "[Excluir todas as versões de uma imagem do contêiner de usuário em {% data variables.product.prodname_dotcom %}](#deleting-all-versions-of-a-user-owned-container-image-on-github)".

{% data reusables.package_registry.package-settings-from-user-level %}
5. À esquerda, clique em **Gerenciar versões**.
6. Opcionalmente, para garantir que você está visualizando todas as versões de seu pacote, use o menu suspenso "Tipo" e selecione **Todos**. ![Menu suspenso do tipo de versão do pacote que mostra a opção de listar todas as versões](/assets/images/help/package-registry/make-all-container-versions-visible.png)
5. À direita da versão que você deseja excluir, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e selecione **Excluir versão**. ![Botão para excluir a versão do pacote](/assets/images/help/package-registry/delete-container-package-version.png)
6. Para confirmar a exclusão, digite o nome do pacote e clique em **Eu entendo as consequências. Exclua esta versão**. ![Botão de confirmar exclusão de pacote](/assets/images/help/package-registry/confirm-container-package-version-deletion.png)

### Excluir uma versão de uma imagem de contêiner de uma organização no {% data variables.product.prodname_dotcom %}

Para excluir apenas versões específicas de uma imagem contêiner que você tem administrador, você pode usar essas etapas. Para excluir um pacote inteiro, consulte "[Excluir todas as versões de uma imagem contêiner de propriedade da organização em {% data variables.product.prodname_dotcom %}](#deleting-all-versions-of-an-organization-owned-container-image-on-github)".

{% data reusables.package_registry.package-settings-from-org-level %}
5. À esquerda, clique em **Gerenciar versões**.
6. Opcionalmente, para garantir que você está visualizando todas as versões de seu pacote, use o menu suspenso "Tipo" e selecione **Todos**. ![Menu suspenso do tipo de versão do pacote que mostra a opção de listar todas as versões](/assets/images/help/package-registry/make-all-container-versions-visible.png)
5. À direita da versão que você deseja excluir, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e selecione **Excluir versão**. ![Botão para excluir a versão do pacote](/assets/images/help/package-registry/delete-container-package-version.png)
6. Para confirmar a exclusão, digite o nome do pacote e clique em **Eu entendo as consequências. Exclua esta versão**. ![Botão para confirmar a exclusão da versão do pacote](/assets/images/help/package-registry/confirm-container-package-version-deletion.png)

### Excluir todas as versões de uma imagem contêiner de usuário em {% data variables.product.prodname_dotcom %}

{% data reusables.package_registry.package-settings-from-user-level %}
5. À esquerda, clique em **Opções**. ![Opção do menu "Opções"](/assets/images/help/package-registry/options-for-container-settings.png)
6. Em "Zona de Perigo" clique em **Excluir este pacote**. ![Botão para excluir a versão do pacote](/assets/images/help/package-registry/delete-container-package-button.png)
6. Para confirmar a exclusão, digite o nome do pacote e clique em **Eu entendo as consequências. Exclua este pacote**. ![Botão para confirmar a exclusão da versão do pacote](/assets/images/help/package-registry/confirm-container-package-deletion.png)

### Excluir todas as versões de uma imagem de contêiner pertencente à organização em {% data variables.product.prodname_dotcom %}

{% data reusables.package_registry.package-settings-from-org-level %}
5. À esquerda, clique em **Opções**. ![Opção do menu "Opções"](/assets/images/help/package-registry/options-for-container-settings.png)
6. Em "Zona de Perigo" clique em **Excluir este pacote**. ![Botão de excluir pacote](/assets/images/help/package-registry/delete-container-package-button.png)
6. Para confirmar a exclusão, digite o nome do pacote e clique em **Eu entendo as consequências. Exclua este pacote**. ![Botão de confirmar exclusão de pacote](/assets/images/help/package-registry/confirm-container-package-deletion.png)
