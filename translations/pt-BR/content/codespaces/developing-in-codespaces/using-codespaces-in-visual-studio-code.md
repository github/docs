---
title: Usar espaços de código no Visual Studio Code
intro: 'Você pode desenvolver seu codespace diretamente em {% data variables.product.prodname_vscode %}, conectando a extensão de {% data variables.product.prodname_github_codespaces %} à sua conta no {% data variables.product.product_name %}.'
redirect_from:
  - /github/developing-online-with-codespaces/using-codespaces-in-visual-studio-code
  - /github/developing-online-with-codespaces/connecting-to-your-codespace-from-visual-studio-code
  - /github/developing-online-with-codespaces/using-codespaces-in-visual-studio
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Codespaces
  - Visual Studio Code
  - Developer
---

{% data reusables.codespaces.release-stage %}

### Pré-requisitos

Para desenvolver em um código diretamente em {% data variables.product.prodname_vscode %}, você deve inscrever-se na extensão de {% data variables.product.prodname_github_codespaces %}. A extensão de {% data variables.product.prodname_github_codespaces %} exige a versão de outubro de 2020 1.51 ou posterior de {% data variables.product.prodname_vscode %}.

Use o {% data variables.product.prodname_vs %} Marketplace para instalar a extensão [{% data variables.product.prodname_github_codespaces %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces). Para obter mais informações, consulte [Extensão do Marketplace](https://code.visualstudio.com/docs/editor/extension-gallery) na documentação do {% data variables.product.prodname_vscode %}.


{% mac %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. Clique em **Iniciar sessão para visualizar {% data variables.product.prodname_dotcom %}...**. ![Registrar-se para visualizar {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode-mac.png)
3. Para autorizar o {% data variables.product.prodname_vscode %} a acessar sua conta no {% data variables.product.product_name %}, clique em **Permitir**.
4. Registre-se e, {% data variables.product.product_name %} para aprovar a extensão.

{% endmac %}

{% windows %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. Utilize o menu suspenso "EXPLORADOR REMOTO" e clique em **{% data variables.product.prodname_github_codespaces %}**. ![Cabeçalho do {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/codespaces-header-vscode.png)
3. Clique em **Iniciar sessão para visualizar {% data variables.product.prodname_codespaces %}...**. ![Registrar-se para visualizar {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode.png)
4. Para autorizar o {% data variables.product.prodname_vscode %} a acessar sua conta no {% data variables.product.product_name %}, clique em **Permitir**.
5. Registre-se e, {% data variables.product.product_name %} para aprovar a extensão.

{% endwindows %}

### Criar um codespace em {% data variables.product.prodname_vscode %}

Depois de conectar sua conta de {% data variables.product.product_name %} à extensão de {% data variables.product.prodname_github_codespaces %}, você pode desenvolver em um codespace que você criou no {% data variables.product.product_name %} ou em {% data variables.product.prodname_vscode %}.

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. Clique no ícone Adicionar e, em seguida, clique em **Criar novo codespace**. ![A opção "Criar novo codespace" em {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/create-codespace-vscode.png)
3. Digite e, em seguida, clique no nome do repositório no qual você deseja desenvolver. ![Pesquisar um repositório para criar um novo {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/choose-repository-vscode.png)
4. Clique no branch que você deseja desenvolver. ![Pesquisar um branch para criar um novo {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/choose-branch-vscode.png)
5. Clique no tipo de máquina na qual você deseja desenvolver. ![Tipos de instância para um novo {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/choose-sku-vscode.png)
### Abrir um codespace em {% data variables.product.prodname_vscode %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. Em "Codedespaces", clique no código que você deseja desenvolver.
3. Clique no ícone Conectar-se ao Codespace. ![Ícone de conectar-se a um Codespace em {% data variables.product.prodname_vscode %}](/assets/images/help/codespaces/click-connect-to-codespace-icon-vscode.png)

### Alterar o tipo da máquina em {% data variables.product.prodname_vscode %}

{% data reusables.codespaces.codespaces-machine-types %}

Você pode alterar o tipo de máquina do seu codespace a qualquer momento.

1. Em {% data variables.product.prodname_vscode %}, abra a Paleta de Comando (`shift comando P` / `shift control P`).
2. Pesquise e selecione "Codespaces: Alterar tipo de máquina." ![Pesquisar um branch para criar um novo {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/vscode-change-machine-type-option.png)
3. Clique no codespace que você deseja alterar. ![Pesquisar um branch para criar um novo {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/vscode-change-machine-choose-repo.png)
4. Escolha o tipo de máquina que você quer usar. ![Pesquisar um branch para criar um novo {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/vscode-change-machine-choose-type.png)

Se o codespace estiver sendo executado, será exibida uma mensagem perguntando se você deseja reiniciar e reconectar-se ao seu codespace agora. Clique em **Sim** se desejar mudar o tipo de máquina utilizado para este codespace imediatamente. Se você clicar em **Não**, ou se o código não estiver em execução, a alteração entrará em vigor na próxima vez que o codespace for reiniciado.

### Excluir um codespace em {% data variables.product.prodname_vscode %}

1. Em "Codedespaces", clique com o botão direito no código que você deseja excluir.
2. No menu suspenso, clique em **Excluir o codespace**. ![Excluir um codespace em {% data variables.product.prodname_dotcom %}](/assets/images/help/codespaces/delete-codespace-vscode.png)
