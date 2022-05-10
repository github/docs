---
title: Usar espaços de código no Visual Studio Code
intro: 'Você pode desenvolver seu codespace diretamente em {% data variables.product.prodname_vscode %}, conectando a extensão de {% data variables.product.prodname_github_codespaces %} à sua conta no {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
  - /github/developing-online-with-codespaces/using-codespaces-in-visual-studio-code
  - /github/developing-online-with-codespaces/connecting-to-your-codespace-from-visual-studio-code
  - /github/developing-online-with-codespaces/using-codespaces-in-visual-studio
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Visual Studio Code
  - Developer
shortTitle: Visual Studio Code
---

 
## Sobre {% data variables.product.prodname_codespaces %} em {% data variables.product.prodname_vscode %}

Você pode usar sua instalação local de {% data variables.product.prodname_vscode %} para criar, gerenciar, trabalhar e excluir codespaces. Para usar {% data variables.product.prodname_codespaces %} em {% data variables.product.prodname_vscode %}, você deverá instalar a extensão de {% data variables.product.prodname_github_codespaces %}. Para obter mais informações sobre a configuração de codespaces em {% data variables.product.prodname_vscode %}, consulte "[pré-requisitos](#prerequisites)".

Por padrão, se você criar um novo codespace em {% data variables.product.prodname_dotcom_the_website %}, ele será aberto no navegador. Se você preferir abrir qualquer codespace novo em {% data variables.product.prodname_vscode %} automaticamente, você pode definir seu editor padrão como {% data variables.product.prodname_vscode %}. Para obter mais informações, consulte "[Definindo seu editor padrão para {% data variables.product.prodname_codespaces %}](/codespaces/managing-your-codespaces/setting-your-default-editor-for-codespaces)".

Se você preferir trabalhar no navegador, mas deseja continuar usando suas extensões de {% data variables.product.prodname_vscode %} temas e atalhos existentes, você poderá ativar as Configurações Sincronizadas. Para obter mais informações, consulte "[Personalizar {% data variables.product.prodname_codespaces %} para sua conta](/codespaces/customizing-your-codespace/personalizing-codespaces-for-your-account#settings-sync)".

## Pré-requisitos

Para desenvolver-se em uma plataforma de codespace diretamente em {% data variables.product.prodname_vscode %}, você deverá instalar e efetuar o login na extensão {% data variables.product.prodname_github_codespaces %} com as suas credenciais de {% data variables.product.product_name %}. A extensão de {% data variables.product.prodname_github_codespaces %} exige a versão de outubro de 2020 1.51 ou posterior de {% data variables.product.prodname_vscode %}.

Use o {% data variables.product.prodname_vs %} Marketplace para instalar a extensão [{% data variables.product.prodname_github_codespaces %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces). Para obter mais informações, consulte [Extensão do Marketplace](https://code.visualstudio.com/docs/editor/extension-gallery) na documentação do {% data variables.product.prodname_vscode %}.


{% mac %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Clique em **Iniciar sessão para visualizar {% data variables.product.prodname_dotcom %}...**.

   ![Registrar-se para visualizar {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode-mac.png)

1. Para autorizar o {% data variables.product.prodname_vscode %} a acessar sua conta no {% data variables.product.product_name %}, clique em **Permitir**.
1. Registre-se e, {% data variables.product.product_name %} para aprovar a extensão.

{% endmac %}

{% windows %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Utilize o menu suspenso "EXPLORADOR REMOTO" e clique em **{% data variables.product.prodname_github_codespaces %}**.

   ![Cabeçalho do {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/codespaces-header-vscode.png)

1. Clique em **Iniciar sessão para visualizar {% data variables.product.prodname_codespaces %}...**.

   ![Registrar-se para visualizar {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode.png)

1. Para autorizar o {% data variables.product.prodname_vscode %} a acessar sua conta no {% data variables.product.product_name %}, clique em **Permitir**.
1. Registre-se e, {% data variables.product.product_name %} para aprovar a extensão.

{% endwindows %}

## Criar um codespace em {% data variables.product.prodname_vscode %}

{% data reusables.codespaces.creating-a-codespace-in-vscode %}

## Abrir um codespace em {% data variables.product.prodname_vscode %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Em "Codedespaces", clique no código que você deseja desenvolver.
1. Clique no ícone Conectar-se ao Codespace.

   ![Ícone de conectar-se a um Codespace em {% data variables.product.prodname_vscode %}](/assets/images/help/codespaces/click-connect-to-codespace-icon-vscode.png)

## Alterar o tipo da máquina em {% data variables.product.prodname_vscode %}

{% data reusables.codespaces.codespaces-machine-types %} Você pode alterar o tipo de máquina do seu codespace a qualquer momento.

1. Em {% data variables.product.prodname_vscode %}, abra a Paleta de Comando (`shift comando P` / `shift control P`).
1. Pesquise e selecione "Codespaces: Alterar tipo de máquina."

   ![Pesquisar um branch para criar um novo {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/vscode-change-machine-type-option.png)

1. Clique no codespace que você deseja alterar.

   ![Pesquisar um branch para criar um novo {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/vscode-change-machine-choose-repo.png)

1. Escolha o tipo de máquina que você quer usar.

   {% note %}

   **Observação**: {% data reusables.codespaces.codespaces-machine-type-availability %}

   {% endnote %}

1. Se o codespace estiver sendo executado, será exibida uma mensagem perguntando se você deseja reiniciar e reconectar-se ao seu codespace agora.

   Clique em **Sim** se desejar mudar o tipo de máquina utilizado para este codespace imediatamente.

   Se você clicar em **Não**, ou se o código não estiver em execução, a alteração entrará em vigor na próxima vez que o codespace for reiniciado.

## Excluir um codespace em {% data variables.product.prodname_vscode %}

{% data reusables.codespaces.deleting-a-codespace-in-vscode %}

## Alternando para a compilação de Insiders de {% data variables.product.prodname_vscode %}

Você pode usar o [Insiders Build do Visual Studio Code](https://code.visualstudio.com/docs/setup/setup-overview#_insiders-nightly-build) em {% data variables.product.prodname_codespaces %}.

1. Na parte inferior esquerda da sua janela {% data variables.product.prodname_codespaces %}, selecione **Configurações de {% octicon "gear" aria-label="The settings icon" %}**.
2. Na lista, selecione "Alternar para Versão de Insiders".

   ![Clicando em "Insiders Build" em {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/codespaces-insiders-vscode.png)
3. Uma vez selecionado, {% data variables.product.prodname_codespaces %} continuará a abrir na Versão do Insiders.
