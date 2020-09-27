---
title: Excluir uma imagem de contêiner
intro: 'É possível excluir uma versão de uma imagem privada de contêiner usando o GraphQL ou em {{ site.data.variables.product.prodname_dotcom }}.'
product: '{{ site.data.reusables.gated-features.packages }}'
versions:
  free-pro-team: '*'
---

{{ site.data.reusables.package_registry.container-registry-beta }}

### Sobre a exclusão de pacotes

Você pode remover uma imagem de contêiner inteira ou uma versão específica em {{ site.data.variables.product.prodname_dotcom }}. Para excluir uma imagem de contêiner, você deve usar a interface do usuário. O uso do GraphQL para excluir uma imagem de contêiner não é compatível no momento.

Para excluir uma imagem do contêiner, você deve ter permissões de administrador para a imagem do contêiner.

Ao excluir pacotes públicos, esteja ciente de que você pode quebrar projetos que dependem do seu pacote.



### Versões e nomes de pacotes reservados

{{ site.data.reusables.package_registry.package-immutability }}

### Excluir uma versão de uma imagem de contêiner de usuário em {{ site.data.variables.product.prodname_dotcom }}

{{ site.data.reusables.package_registry.package-settings-from-user-level }}
5. À esquerda, clique em **Gerenciar versões**.
5. À direita da versão que você deseja excluir, clique em **Excluir**. ![Botão de excluir pacote](/assets/images/help/package-registry/delete-package-button.png)
6. Para confirmar a exclusão, digite o nome do pacote e clique em **Eu entendo as consequências. Exclua esta versão**. ![Botão de confirmar exclusão de pacote](/assets/images/help/package-registry/confirm-package-deletion.png)

### Excluir uma versão de uma imagem de contêiner de uma organização no {{ site.data.variables.product.prodname_dotcom }}

{{ site.data.reusables.package_registry.package-settings-from-org-level }}
5. À esquerda, clique em **Gerenciar versões**.
5. À direita da versão que você deseja excluir, clique em **Excluir**. ![Botão de excluir pacote](/assets/images/help/package-registry/delete-package-button.png)
6. Para confirmar a exclusão, digite o nome do pacote e clique em **Eu entendo as consequências. Exclua esta versão**. ![Botão de confirmar exclusão de pacote](/assets/images/help/package-registry/confirm-package-deletion.png)
