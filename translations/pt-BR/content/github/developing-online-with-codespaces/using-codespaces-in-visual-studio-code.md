---
title: Usar espaços de código no Visual Studio Code
intro: 'Você pode desenvolver seu codespace diretamente em {% data variables.product.prodname_vscode %}, conectando a extensão de {% data variables.product.prodname_github_codespaces %} à sua conta no {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
  - /github/developing-online-with-codespaces/connecting-to-your-codespace-from-visual-studio-code
versions:
  free-pro-team: '*'
topics:
  - espaços de código
---

{% data reusables.codespaces.release-stage %}

### Pré-requisitos

Para desenvolver em um código diretamente em {% data variables.product.prodname_vscode %}, você deve inscrever-se na extensão de {% data variables.product.prodname_github_codespaces %}. A extensão de {% data variables.product.prodname_github_codespaces %} exige a versão de outubro de 2020 1.51 ou posterior de {% data variables.product.prodname_vscode %}.

1. Use o

Marketplace de {% data variables.product.prodname_vs %} para instalar a [extensão de {% data variables.product.prodname_github_codespaces %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces). Para obter mais informações, consulte [Extensão do Marketplace](https://code.visualstudio.com/docs/editor/extension-gallery) na documentação do {% data variables.product.prodname_vscode %}.
{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. Utilize o menu suspenso "EXPLORADOR REMOTO" e clique em **{% data variables.product.prodname_github_codespaces %}**. ![Cabeçalho do {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/codespaces-header-vscode.png)
3. Clique em **Iniciar sessão para visualizar {% data variables.product.prodname_codespaces %}...**. ![Registrar-se para visualizar {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode.png)
4. Para autorizar o {% data variables.product.prodname_vscode %} a acessar sua conta no {% data variables.product.product_name %}, clique em **Permitir**.
5. Registre-se e, {% data variables.product.product_name %} para aprovar a extensão.

### Criar um codespace em {% data variables.product.prodname_vscode %}

Depois de conectar sua conta de {% data variables.product.product_name %} à extensão de {% data variables.product.prodname_vs_codespaces %}, você pode desenvolver em um codespace que você criou no {% data variables.product.product_name %} ou em {% data variables.product.prodname_vscode %}.

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. Clique no ícone Adicionar e, em seguida, clique em **Criar novo codespace**. ![A opção "Criar novo codespace" em {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/create-codespace-vscode.png)
3. Digite e, em seguida, clique no nome do repositório no qual você deseja desenvolver. ![Pesquisar um repositório para criar um novo {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/choose-repository-vscode.png)
4. Clique no branch que você deseja desenvolver. ![Pesquisar um branch para criar um novo {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/choose-branch-vscode.png)
5. Clique no tipo de instância que você deseja desenvolver. ![Tipos de instância para um novo {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/choose-sku-vscode.png)
### Abrir um codespace em {% data variables.product.prodname_vscode %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. Em "Codedespaces", clique no código que você deseja desenvolver.
3. Clique no ícone Conectar-se ao Codespace. ![Ícone de conectar-se a um Codespace em {% data variables.product.prodname_vscode %}](/assets/images/help/codespaces/click-connect-to-codespace-icon-vscode.png)

### Excluir um codespace em {% data variables.product.prodname_vscode %}

1. Em "Codedespaces", clique com o botão direito no código que você deseja excluir.
2. No menu suspenso, clique em **Excluir o codespace**. ![Excluir um codespace em {% data variables.product.prodname_dotcom %}](/assets/images/help/codespaces/delete-codespace-vscode.png)
